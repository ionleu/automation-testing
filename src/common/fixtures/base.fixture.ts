import { test as baseTest, Config } from '@playwright/test';

import { CommonFixtures, UseFunction } from '@/definitions';
import { LoginState, UserType } from '@/constants';
import {
  authenticateUser,
  getStorageStatePathForUser,
  isReLoginRequired,
  readFile,
  toKebabCase,
} from '@/utils';
import { pageFixtures } from './pages.fixture';

/**
 *
 *  Extend basic test object by providing "custom" options and "page" fixtures.
 *
 *  Options:
 *  Global options to configure test environment.
 *  Expect a default value. Option value can be override/changed in config or tests.
 *  Learn more: https://playwright.dev/docs/api/class-testoptions
 *
 *  Fixtures:
 *  Test fixtures are used to establish environment for each test, the fixtures are isolated between tests.
 *  Built-in and custom options can be used.
 *  Learn more: https://playwright.dev/docs/test-fixtures
 *
 **/

export const test = baseTest.extend<CommonFixtures>({
  configPath: ['', { option: true }],
  loginState: [LoginState.LoggedIn, { option: true }],
  userType: [toKebabCase(UserType.Admin), { option: true }],

  ...pageFixtures,

  config: async ({ configPath }: any, use: UseFunction) => {
    const configObject = readFile<Config>(configPath);
    await use(configObject);
  },

  baseURL: async ({ config }, use) => {
    await use(config.baseUrl);
  },

  user: async ({ config, userType }, use: UseFunction) => {
    await use(config.users[toKebabCase(userType)]);
  },

  storageState: async ({ user, config, loginState }, use: UseFunction) => {
    const sessionStoragePath = getStorageStatePathForUser(user.email);
    const isReLoginNeeded = await isReLoginRequired(sessionStoragePath);

    if (loginState === LoginState.LoggedIn && isReLoginNeeded) {
      await authenticateUser(user, config);
      await use(sessionStoragePath);
    } else if (loginState === LoginState.LoggedIn) {
      await use(sessionStoragePath);
    } else {
      await use({ cookies: [], origins: [] });
    }
  },

  page: async ({ page, config }, use: UseFunction) => {
    await page.goto(config.baseUrl);
    await use(page);
  },
});

export const expect = test.expect;
