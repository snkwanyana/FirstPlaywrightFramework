
import { expect, test } from '../../src/fixtures/TestFixtures';

test.describe('Login Page Tests', () => {

    test.beforeEach(async ({ page, homePage }) => {
        await page.goto('./login');
    }); 

    test('Login with valid credentials', async ({ page, loginPage, homePage, dashboardPage }) => {
        const username = process.env.LOGIN_USERNAME;
        const password = process.env.LOGIN_PASSWORD;
        if (!username || !password) {
            throw new Error('username/password environment variables are not set. Check your .env file.');
        }

        await homePage.clickMainLoginButton();
        await loginPage.verifyLoginPageContent();
        await loginPage.enterUsername(username);
        await loginPage.enterPassword(password);
        await loginPage.clickLoginButton();

        // Add assertions to verify successful login, e.g., checking for a specific element on the home page.
        const isDashboardDisplayed = await dashboardPage.verifyDashboardPageIsDisplayed();
        await expect(isDashboardDisplayed).toBeTruthy();
        console.log('Dashboard page is displayed:', isDashboardDisplayed);
    });
});