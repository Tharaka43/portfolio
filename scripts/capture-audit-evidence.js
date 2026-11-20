const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const puppeteer = require('puppeteer-core');

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const evidenceDir = path.resolve('portfolio/test-results/audit-evidence');
if (!fs.existsSync(evidenceDir)) {
  fs.mkdirSync(evidenceDir, { recursive: true });
}

const PORT = 3006;
const OUT_DIR = path.resolve('portfolio/out');

const mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.mp4': 'video/mp4',
  '.json': 'application/json',
  '.ico': 'image/x-icon',
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      let reqPath = decodeURI(req.url.split('?')[0]);
      if (reqPath.endsWith('/')) {
        reqPath += 'index.html';
      }

      let filePath = path.join(OUT_DIR, reqPath);
      if (!fs.existsSync(filePath) && fs.existsSync(filePath + '.html')) {
        filePath += '.html';
      } else if (!fs.existsSync(filePath) && fs.existsSync(path.join(filePath, 'index.html'))) {
        filePath = path.join(filePath, 'index.html');
      }

      if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { 'Content-Type': mimeTypes[ext] || 'application/octet-stream' });
        fs.createReadStream(filePath).pipe(res);
      } else {
        const notFoundPath = path.join(OUT_DIR, '404.html');
        if (fs.existsSync(notFoundPath)) {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          fs.createReadStream(notFoundPath).pipe(res);
        } else {
          res.writeHead(404);
          res.end('Not Found');
        }
      }
    });

    server.listen(PORT, () => {
      console.log(`Audit server listening on port ${PORT}`);
      resolve(server);
    });
  });
}

const allRoutes = [
  { path: '/', name: '01-home' },
  { path: '/products/nexo-pos/', name: '02-product-nexo-pos' },
  { path: '/products/resto-management/', name: '03-product-resto-management' },
  { path: '/products/nexoplay-game-cafe/', name: '04-product-nexoplay-game-cafe' },
  { path: '/products/koreanguru/', name: '05-product-koreanguru' },
  { path: '/products/nihongoguru/', name: '06-product-nihongoguru' },
  { path: '/products/englishguru/', name: '07-product-englishguru' }
];

async function captureAuditEvidence() {
  const server = await startServer();

  const profileDir = path.join(os.tmpdir(), 'chrome_audit_' + Date.now());
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    userDataDir: profileDir,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-gpu',
      '--disable-background-networking',
      '--disable-default-apps',
      '--disable-extensions',
      '--disable-sync'
    ]
  });

  const page = await browser.newPage();

  // Desktop 1440px full page audit
  await page.setViewport({ width: 1440, height: 900 });
  for (const r of allRoutes) {
    await page.goto(`http://localhost:${PORT}${r.path}`, { waitUntil: 'networkidle0', timeout: 15000 });
    const fullPath = path.join(evidenceDir, `${r.name}-desktop-1440.png`);
    await page.screenshot({ path: fullPath, fullPage: true });
    console.log(`Saved desktop evidence: ${path.basename(fullPath)}`);
  }

  // Mobile 390px full page audit
  await page.setViewport({ width: 390, height: 844 });
  for (const r of allRoutes) {
    await page.goto(`http://localhost:${PORT}${r.path}`, { waitUntil: 'networkidle0', timeout: 15000 });
    const fullPath = path.join(evidenceDir, `${r.name}-mobile-390.png`);
    await page.screenshot({ path: fullPath, fullPage: true });
    console.log(`Saved mobile evidence: ${path.basename(fullPath)}`);
  }

  // Mobile drawer test
  await page.goto(`http://localhost:${PORT}/`, { waitUntil: 'networkidle0' });
  const menuButton = await page.$('button[aria-label="Toggle Navigation"]');
  if (menuButton) {
    await menuButton.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(evidenceDir, '08-mobile-menu-drawer-390.png') });
    console.log('Saved mobile menu drawer evidence');
  }

  await browser.close();
  server.close();
  console.log('ALL AUDIT EVIDENCE CAPTURED SUCCESSFULLY!');
}

captureAuditEvidence().catch((err) => {
  console.error(err);
  process.exit(1);
});
