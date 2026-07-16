import { test as base, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { ConnectPage } from '../pages/ConnectPage';

type TestFixtures = {
    homePage: HomePage;
    connectPage: ConnectPage;
};

export const test = base.extend<TestFixtures>({
    homePage: async ({ page }, use) => {
        await use(new HomePage(page));
    },

    connectPage: async ({ page }, use) => {
        await use(new ConnectPage(page));
    }
});

export { expect };