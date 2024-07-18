import { Page } from '@playwright/test';

import { BasePage } from './base.po';

export class JobPostingsPage extends BasePage {
  readonly exportJobsButton = this.page.getByRole('button', {
    name: 'Export',
    exact: true,
  });

  constructor(page: Page) {
    super(page);
  }

  async exportJobs() {
    await this.exportJobsButton.click();
  }
}
