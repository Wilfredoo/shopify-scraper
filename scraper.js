const puppeteer = require("puppeteer");

(async function main() {
  try {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
    );
    await page.goto("https://experts.shopify.com/");
    console.log("its showing 0");
    await page.waitForSelector("section");
    console.log("its showing 1");
    const sections = await page.$$(".section");
    console.log("its showing 2");
    for (const section of sections) {
    }
  } catch (e) {
    console.log("our error", e);
  }
})();
