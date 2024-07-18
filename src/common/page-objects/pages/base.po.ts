import { Page } from '@playwright/test';

import { IdentityLoginPage } from './identity-login.po';
import { PageObject } from './abstract.po';
import { UserContextMenu } from '../fragments/common';

const navItemSelector = 'nav a';

export class BasePage extends PageObject {
  readonly mainNavigation = this.page.locator('nav');

  readonly dashboardPageHeading = this.page.getByRole('heading', {
    name: 'Welcome',
    level: 1,
  });

  readonly administrativeNav = this.page.getByText('ADMINISTRATIVE');
  readonly requisitionsNav = this.page.getByText('REQUISITIONS');

  readonly userMaintenanceNavItem = this.page.locator(navItemSelector, {
    hasText: 'User Maintenance',
  });
  readonly dashboardNavItem = this.page.locator(navItemSelector, {
    hasText: 'Dashboard',
  });
  readonly jobPostingsNavItem = this.page.locator(navItemSelector, {
    hasText: 'Job Postings',
  });
  readonly myCandidatesNavItem = this.page.locator(navItemSelector, {
    hasText: 'My Candidates',
  });

  readonly userContextMenu = new UserContextMenu(this.page);

  constructor(page: Page) {
    super(page);
  }

  async logOut() {
    await this.userContextMenu.logOut();
    return new IdentityLoginPage(this.page);
  }
}
