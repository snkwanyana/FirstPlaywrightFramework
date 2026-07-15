import  { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('./');
    });

    test('Launch ndosi website', async ({page}) => {
        await expect(page).toHaveTitle(/Ndosi Test Automation/);
    });

    test('Verify Home page content', async ({page}) => {
        const buttonName = await page.locator('button:has-text("Start Learning Today")');
        await expect(buttonName).toHaveText('Start Learning Today');
    });

    test('Open the About Us page and verify content', async ({page}) => {
        await page.getByRole('button', { name: 'About Us' }).click();

        await expect(page.getByRole('heading', { name: 'About Nkosi Cele' })).toBeVisible();
    });

});