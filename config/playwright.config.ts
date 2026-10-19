import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: '../tests/api',
  retries: 1,

  use: {
      baseURL: process.env.API_BASE_URL ?? 'https://www.ndosiautomation.co.za',
      extraHTTPHeaders: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
      },
  },

});
