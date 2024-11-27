import { Puppeteer } from "./puppeteer";

async function main() {
  console.log("Aplicação funcionando!");
  const puppeteer = new Puppeteer();
  const browser = await puppeteer.getBrowser();
  const page = await puppeteer.getPage(browser);
  await page.goto("https://www.pixiv.net/en/users/19546848", {
    timeout: 3000,
  });
  await page.screenshot({
    path: "hn.png",
  });
  await puppeteer.close(browser);
}

main().then((e) => {});
