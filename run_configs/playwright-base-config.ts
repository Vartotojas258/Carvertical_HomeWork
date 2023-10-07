import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {

  // Look for test files in the "tests" directory, relative to this configuration file.
  testDir: '../tests',
  outputDir: "../output",

  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },
  // Configure projects for major browsers.
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
};
export default config;