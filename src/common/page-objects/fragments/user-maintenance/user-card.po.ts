import { Page } from '@playwright/test';

import { UserForm } from '@/definitions';
import { expect } from '@/fixtures';

export class UserMaintenanceCardFragment {
  readonly userCards = this.page.locator('.card-wrapper');

  constructor(private page: Page) {}

  private findByEmail(email: string) {
    return this.userCards.filter({
      has: this.page.getByText(email, { exact: true }),
    });
  }

  async validateUser(user: UserForm) {
    const userCard = this.findByEmail(user.email);

    // expect(userCard).toHaveText([
    //   user.phone,
    //   user.firstName,
    //   user.lastName,
    //   user.userType,
    // ]);
    await expect(userCard).toHaveCount(1);
  }

  async editByEmail(email: string) {
    await this.findByEmail(email).getByTestId('editUserButton').click();
  }
}
