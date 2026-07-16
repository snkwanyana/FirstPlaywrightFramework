import { expect, test } from '../src/fixtures/TestFixtures';

test.describe('Home Page Tests', () => {

    test.beforeEach(async ({ page, homePage }) => {
        await page.goto('./');
    });

    test('Launch ndosi website', async ({ page }) => {
        await expect(page).toHaveTitle(/Ndosi Test Automation/);
    });

    test('Verify Home page content', async ({ homePage }) => {
        const isVisible = await homePage.verifyHomePageContent();
        await expect(isVisible).toBe(true);
    });

    test('Click Start Learning Today button and Verify Connect page content', async ({ homePage, connectPage } ) => {
        await homePage.clickStartLearningTodayButton();
        const isVisible = await connectPage.verifyConnectPageContent();
        await expect(isVisible).toBe(true);
    });
    

});