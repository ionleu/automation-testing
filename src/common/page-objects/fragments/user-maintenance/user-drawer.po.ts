import { Page } from '@playwright/test';

import { UserForm } from '@/definitions';
import { DropdownElement } from '@/page-objects/elements';

export class UserMaintenanceDrawerFragment {
  readonly firstNameInput = this.page.locator("input[name='firstname']");
  readonly lastNameInput = this.page.locator("input[name='lastname']");
  readonly phoneNumberInput = this.page.locator("input[name='phonenumber']");
  readonly emailAddressInput = this.page.locator("input[name='emailaddress']");
  readonly userTypeDropdown = this.page.locator('#affiliateusertypeid');
  readonly accountStatusInput = this.page.getByRole('checkbox', {
    name: 'Active',
  });
  readonly emailNotificationsOption = this.page.getByRole('checkbox', {
    name: 'Job Closings',
  });
  readonly addUserForm = this.page.getByTestId('sideDrawerWrapper');
  readonly submitButton = this.addUserForm.locator('#submitPopover');
  readonly successMessage = this.page.getByRole('alert');

  constructor(private page: Page) {}

  async addOrUpdateUser(user: Partial<UserForm>) {
    const dropdown = new DropdownElement(this.userTypeDropdown);
    await this.emailNotificationsOption.waitFor();

    if (user?.firstName) await this.firstNameInput.fill(user.firstName);
    if (user?.lastName) await this.lastNameInput.fill(user.lastName);
    if (user?.phone) await this.phoneNumberInput.fill(user.phone);
    if (user?.email) await this.emailAddressInput.fill(user.email);
    if (user?.userType) await dropdown.select(user.userType);

    if (user?.isActive) await this.accountStatusInput.click();

    await this.submitButton.click();
    await this.successMessage.waitFor();
  }
}
