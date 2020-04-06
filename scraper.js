const puppeteer = require("puppeteer");

(async function main() {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
    );
    await page.goto("https://experts.shopify.com/");
    await page.waitForSelector(".main");
    console.log("its showing");
  } catch (e) {
    console.log("our error", error);
  }
})();
