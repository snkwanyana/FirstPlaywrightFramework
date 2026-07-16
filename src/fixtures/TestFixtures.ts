// Import Playwright's base test object and assertion helper.
// We rename the base test to 'base' so we can extend it with custom fixtures.
import { test as base, expect } from '@playwright/test';

// Import the page object classes that will be exposed to tests.
// These classes contain reusable actions and locators for the app pages.
import { HomePage } from '../pages/HomePage';
import { ConnectPage } from '../pages/ConnectPage';

// Define the shape of the custom fixtures that will be available in tests.
// Each property tells TypeScript which page object type a fixture returns.
type TestFixtures = {
    homePage: HomePage;
    connectPage: ConnectPage;
};

// Extend Playwright's base test with our custom fixtures.
// This makes the fixtures available automatically in every test file that imports 'test'.
export const test = base.extend<TestFixtures>({
    // Create a fixture for HomePage.
    // The fixture receives the Playwright page object, creates a HomePage instance,
    // and passes it to the test through the 'use' callback.
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    // Create a fixture for ConnectPage.
    // This follows the same pattern as the HomePage fixture but creates a ConnectPage instance.
    connectPage: async ({ page }, use) => {
        await use(new ConnectPage(page));
    }
});

// Re-export Playwright's expect so tests can continue using it directly.
// This keeps the test setup consistent while still allowing standard assertions.
export { expect };