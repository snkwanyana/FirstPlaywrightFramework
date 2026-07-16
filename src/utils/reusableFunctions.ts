import { Page, Locator } from '@playwright/test';

export class ReusableFunctions {

    constructor(public page: Page) {
        this.page = page;
    }

    async clickElement(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible' });
        await locator.click();
    }

    async typeText(locator: Locator, text: string): Promise<void> {
    await locator.waitFor({ state: 'visible' });
    await locator.fill(text);
    }

    async getElementText(locator: Locator): Promise<string> {
        await locator.waitFor({ state: 'visible' });
        return await locator.textContent() || '';
    }

    async isElementVisible(locator: Locator): Promise<boolean> {
        try {
            await locator.waitFor({ state: 'visible', timeout: 5000 });
            return true;
        } catch {
            return false;
        }
    }
}