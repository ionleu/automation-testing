import { Page } from '@playwright/test';

import { BasePage } from './base.po';

export class DashboardPage extends BasePage {
  constructor(page: Page) {
    super(page);
  }
}
