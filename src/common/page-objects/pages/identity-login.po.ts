import { Page } from '@playwright/test';

import { PageObject } from './abstract.po';

/**
 *
 * Page Object Models:
 * Helps us to create a higher-level API which simplify maintenance by capturing and encapsulate element selectors
 * in one place and create reusable code to avoid repetition.
 * Learn more: https://playwright.dev/docs/pom
 *
 * Elements:
 * Basic view blocks that cannot be split into smaller parts, such ui elements: select, dropdown, progress bar, etc.
 *
 * Fragments:
 * More complex blocks that contain more elements and business logic, such as: navigation, form, filter, etc.
 *
 * Pages:
 * Collection of Elements and Fragments, such as: dashboard, user maintenance, job proposals, etc.
 *
 **/

export class IdentityLoginPage extends PageObject {
  readonly usernameInput = this.page.locator('input[name="username"]');
  readonly passwordInput = this.page.locator('input[name="password"]');
  readonly primaryButton = this.page.locator('.button-primary', {
    hasText: 'Sign In',
  });

  constructor(page: Page) {
    super(page);
  }

  async loginThroughUI(username: string, password: string): Promise<void> {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.primaryButton.click();
  }
}
