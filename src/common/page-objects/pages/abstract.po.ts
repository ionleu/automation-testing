import { Page } from '@playwright/test';

export abstract class PageObject {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateTo(url: string): Promise<void> {
    const currentUrl = this.page.url();
    if (currentUrl.includes(url)) {
      return;
    }
    await this.page.goto(url);
    await this.page.waitForURL(url);
  }
}
