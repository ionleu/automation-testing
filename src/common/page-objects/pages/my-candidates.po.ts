import { Page } from '@playwright/test';

import { BasePage } from './base.po';

export class MyCandidatesPage extends BasePage {
  candidatesHeading = this.page.getByRole('heading', {
    name: 'Candidates',
    exact: true,
  });

  constructor(page: Page) {
    super(page);
  }
}
