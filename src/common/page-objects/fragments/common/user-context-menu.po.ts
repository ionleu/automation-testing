import { Page } from '@playwright/test';

export class UserContextMenu {
  readonly fullname = this.page.locator('.navbar__profile__info > span:first');
  readonly userRole = this.page.locator('.navbar__profile__info__user-desc');
  readonly userContextToggle = this.page.locator('.content-container > svg');
  readonly logOutButton = this.page.getByRole('button', { name: 'Logout' });

  constructor(private page: Page) {}

  async logOut() {
    await this.userContextToggle.click();
    await this.logOutButton.click();
  }
}
