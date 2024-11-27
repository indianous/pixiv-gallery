import pptr, { Browser, Page } from "puppeteer";

export class Puppeteer {
  constructor() {}

  async getBrowser() {
    return await pptr.launch({ headless: true });
  }

  async getPage(browser: Browser) {
    return await browser.newPage();
  }

  async goto(page: Page, url: string) {
    page.goto(url);
  }

  async close(browser: Browser) {
    return await browser.close();
  }
}
