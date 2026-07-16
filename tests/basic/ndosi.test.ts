import  { test, expect } from '@playwright/test';

test('Launch ndosi website', async ({page}) => {
    await page.goto('https://ndosisimplifiedautomation.vercel.app/');
    await expect(page).toHaveTitle(/Ndosi Test Automation/);
});

test('Verify Home page content', async ({page}) => {
    await page.goto('https://ndosisimplifiedautomation.vercel.app/');
    const buttonName = await page.locator('button:has-text("Start Learning Today")');
    await expect(buttonName).toHaveText('Start Learning Today');
});

test('Open the About Us page and verify content', async ({page}) => {
    await page.goto('https://ndosisimplifiedautomation.vercel.app/');
    await page.getByRole('button', { name: 'About Us' }).click();
    const aboutUsHeading = await page.locator('h2:has-text("About Nkosi Cele")');
    await expect(aboutUsHeading).toHaveText('About Nkosi Cele');
});