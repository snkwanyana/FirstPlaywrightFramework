import { Page, Locator } from '@playwright/test';

export class ReusableFunctions {

    // The constructor takes a Playwright Page object and assigns it to the class instance.
    constructor(public page: Page) {
        this.page = page;
    }

    // This method waits for the specified locator to be visible and then clicks it.
    // It returns a Promise that resolves when the click action is complete.
    async clickElement(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    async typeText(locator: Locator, text: string): Promise<void> {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(text);
    }

    // This method waits for the specified locator to be visible and then retrieves its text content.
    // It returns a Promise that resolves to the text content as a string.
    async getElementText(locator: Locator): Promise<string> {
        await locator.waitFor({ state: 'visible' });
        return await locator.textContent() || '';
    }

    // This method checks if the specified locator is visible on the page.
    // It returns a Promise that resolves to a boolean indicating visibility.
    async isElementVisible(locator: Locator): Promise<boolean> {
        try {
            await locator.waitFor({ state: 'visible', timeout: 5000 });
            return true;
        } catch {
            return false;
        }
    }
}