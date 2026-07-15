import {test, expect} from '@playwright/test';
import { HomePage } from '../src/pages/HomePage';

test.describe('Home Page Tests', () => {
    let homePage: HomePage;

    test.beforeEach(async ({ page }) => {
        await page.goto('./');
        homePage = new HomePage(page);
    });

    test('Launch ndosi website', async ({ page }) => {
        await expect(page).toHaveTitle(/Ndosi Test Automation/);
    });

    test('Verify Home page content', async () => {
        await homePage.verifyHomePageContent();
    });
    
    test('Click Start Learning Today button and verify Connect page content', async () => {
        await homePage.clickStartLearningTodayButton();
        await homePage.verifyConnectPageContent();
    });

});