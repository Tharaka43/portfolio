const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const puppeteer = require('puppeteer-core');

const chromePath = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const screenshotDir = path.resolve('portfolio/test-results/screenshots');
if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

const PORT = 3005;
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
      console.log(`Internal static server listening on port ${PORT}`);
      resolve(server);
    });
  });
}

const viewports = [
  { name: 'mobile-320', width: 320, height: 640 },
  { name: 'mobile-360', width: 360, height: 740 },
  { name: 'mobile-390', width: 390, height: 844 },
  { name: 'mobile-430', width: 430, height: 932 },
  { name: 'tablet-768', width: 768, height: 1024 },
  { name: 'desktop-1024', width: 1024, height: 768 },
  { name: 'desktop-1440', width: 1440, height: 900 }
];

const routes = [
  { path: '/', name: 'home' },
  { path: '/products/nexo-pos/', name: 'product-nexo-pos' },
  { path: '/products/resto-management/', name: 'product-resto' }
];

async function runQA() {
  const server = await startServer();

  const profileDir = path.join(os.tmpdir(), 'chrome_qa_' + Date.now());
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    userDataDir: profileDir,
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--disable-background-networking',
      '--disable-default-apps',
      '--disable-extensions',
      '--disable-sync'
    ]
  });

  const page = await browser.newPage();
  const results = [];

  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      console.log(`[Browser Error]: ${msg.text()}`);
    }
  });

  for (const vp of viewports) {
    await page.setViewport({ width: vp.width, height: vp.height });
    console.log(`\nTesting viewport: ${vp.name} (${vp.width}x${vp.height})`);

    for (const r of routes) {
      const url = `http://localhost:${PORT}${r.path}`;
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 15000 });

      // Measure horizontal overflow
      const overflowData = await page.evaluate(() => {
        const docWidth = document.documentElement.scrollWidth;
        const winWidth = window.innerWidth;
        const bodyWidth = document.body.scrollWidth;
        const diff = Math.max(docWidth, bodyWidth) - winWidth;

        let offendingSelector = null;
        if (diff > 0) {
          const elements = Array.from(document.querySelectorAll('*'));
          for (const el of elements) {
            const rect = el.getBoundingClientRect();
            if (rect.right > winWidth + 1) {
              offendingSelector = `${el.tagName.toLowerCase()}.${Array.from(el.classList).join('.')}`;
              break;
            }
          }
        }

        return { diff, docWidth, winWidth, offendingSelector };
      });

      const shotName = `${r.name}-${vp.name}.png`;
      const shotPath = path.join(screenshotDir, shotName);
      await page.screenshot({ path: shotPath, fullPage: false });

      console.log(`  Route: ${r.path} | Overflow: ${overflowData.diff}px ${overflowData.diff > 0 ? '❌ FAILED (' + offendingSelector + ')' : '✅ PASS'}`);
      results.push({
        viewport: vp.name,
        route: r.path,
        overflow: overflowData.diff,
        passed: overflowData.diff <= 0
      });
    }
  }

  await browser.close();
  server.close();

  console.log('\n--- QA SUMMARY ---');
  const allPassed = results.every(res => res.passed);
  console.log(`Total checks: ${results.length} | Status: ${allPassed ? 'ALL PASSED ✅' : 'FAILURES DETECTED ❌'}`);
}

runQA().catch((err) => {
  console.error(err);
  process.exit(1);
});
