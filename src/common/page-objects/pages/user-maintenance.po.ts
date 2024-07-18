import { Page } from '@playwright/test';

import { BasePage } from './base.po';

export class UserMaintenancePage extends BasePage {
  readonly inactiveUsersCollapseButton = this.page.getByRole('button', {
    name: 'INACTIVE',
  });
  private readonly addUserButton = this.page.getByRole('button', {
    name: 'Add User',
  });

  constructor(page: Page) {
    super(page);
  }

  async openAddUser() {
    await this.addUserButton.click();
  }
}
