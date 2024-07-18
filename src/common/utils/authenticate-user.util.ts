import { Browser, chromium } from '@playwright/test';

import { Config, User } from '@/definitions';
import { IdentityLoginPage } from '@/page-objects/pages';
import { MainNavigation } from '@/page-objects/fragments';
import { getStorageStatePathForUser } from './get-storage-path.util';

export const authenticateUser = async (
  user: User,
  config: Config,
  externalBrowser?: Browser,
) => {
  const browser = externalBrowser
    ? externalBrowser
    : await chromium.launch({ headless: true });

  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto(config.baseUrl);

  const identityPage = new IdentityLoginPage(page);
  const navigationPage = new MainNavigation(page);

  await identityPage.loginThroughUI(user.email, user.password);
  await navigationPage.mainNavigation.waitFor();

  const userSessionState = getStorageStatePathForUser(user.email);

  /**
   *
   * Storage State
   * Save user context (local storage and cookies) into a file that allows us to login one time and after reuse the state.
   * Learn more: https://playwright.dev/docs/api/class-apirequestcontext#api-request-context-storage-state
   *
   */
  await context.storageState({ path: userSessionState as string });
  await context.close();

  if (!externalBrowser) {
    await browser.close();
  }
};
