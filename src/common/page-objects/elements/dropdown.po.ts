import { Locator } from '@playwright/test';

export class DropdownElement {
  readonly dropdownControl = this.root.locator('.select__control');
  readonly dropdownOption = this.root.locator(
    '.select__menu-list > .select__option',
  );

  constructor(private root: Locator) {}

  async select(option: string): Promise<void> {
    await this.dropdownControl.click();
    await this.dropdownOption.getByText(option).click();
  }
}
