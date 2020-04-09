const puppeteer = require("puppeteer");

(async function main() {
  try {
    const browser = await puppeteer.launch({
      headless: false,
    });
    const page = await browser.newPage();
    page.setUserAgent(
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36"
    );
    await page.setViewport({ width: 1000, height: 800 });
    await page.goto("https://experts.shopify.com/", {
      waitUntil: "networkidle2",
    });
    await page.waitForSelector("section");
    const button = await page.$(
      "#js-experts-mount > div > div > div > main > div.Zk7Cl._3sGz2 > div:nth-child(4) > div > div > div:nth-child(1) > div._3pRI- > div > div:nth-child(2) > div > a > div > div.lC-5k > div.mp2Oz > div > p:nth-child(2) > span"
    );

    button.click();
    await page.waitForXPath(
      '//*[@id="js-experts-mount"]/div/div/div/main/div/div[2]/div/section[2]'
    );

    const divs = await page.$$("div");
    console.log("here we are doggies", divs.length);

    for await (const div of divs) {
      const name = await div.$eval("h2", (h2) => h2.innerText);
      console.log(name);
    }
    await console.log("here we are");
  } catch (e) {
    console.log("our error", e);
  }
})();
