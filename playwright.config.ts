import { defineConfig, devices } from '@playwright/test';

import { join } from 'path';

import { CustomConfigFields } from '@/definitions';

const localhostLaunchOptions = ['--disable-web-security'];
const defaultLaunchOptions = [];
const localEnv = 'local';
const env = process.env.ENV || localEnv;
const configPath = join(__dirname, `src/configs/${env}.config.json`);

console.info('Current Environment:', env);

export default defineConfig<CustomConfigFields>({
  testDir: './src/specs',
  outputDir: './outputs/test-results',
  timeout: process.env.CI ? 120 * 1000 : 60 * 1000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 2 : 1,
  use: {
    actionTimeout: 0,
    headless: true,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    configPath,
  },
  reporter: [['html', { outputFolder: './outputs/reports/html' }]],
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1440, height: 840 },
        launchOptions: {
          args:
            env === localEnv ? localhostLaunchOptions : defaultLaunchOptions,
        },
      },
    },
  ],
});
