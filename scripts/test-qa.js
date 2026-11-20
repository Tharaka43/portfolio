const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const VIEWPORTS = [
  { name: "desktop-1920", width: 1920, height: 1080 },
  { name: "desktop-1440", width: 1440, height: 900 },
  { name: "tablet-1024", width: 1024, height: 768 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "mobile-430", width: 430, height: 932 },
  { name: "mobile-390", width: 390, height: 844 },
  { name: "mobile-375", width: 375, height: 667 },
  { name: "mobile-360", width: 360, height: 800 },
  { name: "mobile-320", width: 320, height: 568 },
];

const CHROME_PATH = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const OUTPUT_DIR = path.join(__dirname, "..", "test-results", "screenshots");

async function runQA() {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  console.log("Launching Headless Chrome for Automated QA...");
  const browser = await puppeteer.launch({
    executablePath: CHROME_PATH,
    headless: "new",
    args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
  });

  const page = await browser.newPage();

  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") {
      consoleErrors.push(msg.text());
    }
  });

  page.on("pageerror", (err) => {
    consoleErrors.push(err.toString());
  });

  const results = {
    viewportsTested: [],
    overflowDetected: [],
    consoleErrors: [],
    productPagesTested: [],
  };

  // 1. Test Home Page across all viewports
  console.log("\n--- Testing Home Page Viewports & Overflow ---");
  for (const vp of VIEWPORTS) {
    await page.setViewport({ width: vp.width, height: vp.height });
    await page.goto("http://localhost:3000", { waitUntil: "networkidle0", timeout: 30000 });

    // Wait a brief moment for layout
    await new Promise((r) => setTimeout(r, 600));

    // Check horizontal overflow
    const overflow = await page.evaluate(() => {
      const docW = document.documentElement.scrollWidth;
      const winW = window.innerWidth;
      const bodyW = document.body.scrollWidth;
      return {
        hasOverflow: docW > winW || bodyW > winW,
        scrollWidth: Math.max(docW, bodyW),
        innerWidth: winW,
        diff: Math.max(docW, bodyW) - winW,
      };
    });

    const shotPath = path.join(OUTPUT_DIR, `homepage-${vp.name}.png`);
    await page.screenshot({ path: shotPath, fullPage: true });

    console.log(
      `[${vp.name}] (${vp.width}x${vp.height}): Overflow=${overflow.hasOverflow ? `YES (+${overflow.diff}px)` : "NO (0px)"} | Shot saved`
    );

    results.viewportsTested.push({
      viewport: vp.name,
      width: vp.width,
      overflow: overflow.hasOverflow ? `+${overflow.diff}px` : "0px",
      status: overflow.hasOverflow ? "FAIL" : "PASS",
    });

    if (overflow.hasOverflow) {
      results.overflowDetected.push({ viewport: vp.name, diff: overflow.diff });
    }
  }

  // 2. Test Mobile Menu Open State at 390px
  console.log("\n--- Testing Mobile Menu Navigation at 390px ---");
  await page.setViewport({ width: 390, height: 844 });
  await page.goto("http://localhost:3000", { waitUntil: "networkidle0" });

  const menuButton = await page.$('button[aria-label="Toggle Navigation"]');
  if (menuButton) {
    await menuButton.click();
    await new Promise((r) => setTimeout(r, 400));
    const menuShot = path.join(OUTPUT_DIR, "mobile-navigation-drawer-390.png");
    await page.screenshot({ path: menuShot });
    console.log("Mobile navigation drawer opened and screenshot captured.");
  } else {
    console.log("Menu button not found on 390px viewport.");
  }

  // 3. Test Product Case Study Pages
  console.log("\n--- Testing Product Details Pages ---");
  const slugs = [
    "nexo-pos",
    "resto-management",
    "nexoplay-game-cafe",
    "koreanguru",
    "nihongoguru",
    "englishguru",
  ];

  for (const slug of slugs) {
    const url = `http://localhost:3000/products/${slug}/`;
    await page.setViewport({ width: 1440, height: 900 });
    const res = await page.goto(url, { waitUntil: "networkidle0" });
    const status = res.status();

    const title = await page.title();
    const shotPath = path.join(OUTPUT_DIR, `product-${slug}-1440.png`);
    await page.screenshot({ path: shotPath, fullPage: true });

    // Test mobile at 390px
    await page.setViewport({ width: 390, height: 844 });
    await new Promise((r) => setTimeout(r, 300));
    const mobileShot = path.join(OUTPUT_DIR, `product-${slug}-390.png`);
    await page.screenshot({ path: mobileShot, fullPage: true });

    console.log(`[${slug}] Status: ${status} | Title: "${title.slice(0, 45)}..." | Shots saved`);
    results.productPagesTested.push({ slug, status, title });
  }

  results.consoleErrors = consoleErrors;
  fs.writeFileSync(
    path.join(__dirname, "..", "test-results", "qa-summary.json"),
    JSON.stringify(results, null, 2)
  );

  console.log("\n--- QA Testing Complete! ---");
  console.log(`Total viewports checked: ${results.viewportsTested.length}`);
  console.log(`Overflow failures: ${results.overflowDetected.length}`);
  console.log(`Product pages verified: ${results.productPagesTested.length}`);
  console.log(`Console errors captured: ${consoleErrors.length}`);

  await browser.close();
}

runQA().catch((err) => {
  console.error("QA script error:", err);
  process.exit(1);
});
