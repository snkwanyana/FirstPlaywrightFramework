import { expect, test } from '../src/fixtures/TestFixtures';

test.describe('Login Page Tests', () => {

    test.beforeEach(async ({ page, homePage }) => {
        await page.goto('./login');
    }); 

    test('Login with valid credentials', async ({ page, loginPage, homePage, dashboardPage }) => {
        await homePage.clickMainLoginButton();
        await loginPage.verifyLoginPageContent();
        await loginPage.enterUsername('admin@gmail.com');
        await loginPage.enterPassword('@12345678');
        await loginPage.clickLoginButton();

        // Add assertions to verify successful login, e.g., checking for a specific element on the home page.
        const isDashboardDisplayed = await dashboardPage.verifyDashboardPageIsDisplayed();
        await expect(isDashboardDisplayed).toBeTruthy();
        console.log('Dashboard page is displayed:', isDashboardDisplayed);
    });
});