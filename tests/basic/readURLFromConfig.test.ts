import  { test, expect } from '@playwright/test';

test('Launch ndosi website', async ({page}) => {
    await page.goto('./');
    await expect(page).toHaveTitle(/Ndosi Test Automation/);
});

test('Verify Home page content', async ({page}) => {
    await page.goto('./');
    const buttonName = await page.locator('button:has-text("Start Learning Today")');
    await expect(buttonName).toHaveText('Start Learning Today');
});

test('Open the About Us page and verify content', async ({page}) => {
    await page.goto('./');
    await page.getByRole('button', { name: 'About Us' }).click();

    await expect(page.getByRole('heading', { name: 'About Nkosi Cele' })).toBeVisible();
});