import { expect, type Locator, type Page } from '@playwright/test';

export class ConnectPage {
    readonly page: Page;
    readonly connectHeading: Locator;

    constructor(page: Page) {
        this.page = page;
        this.connectHeading = page.locator('h2');
    }

    async verifyConnectPageContent() {
        await expect(this.connectHeading).toHaveText('Enrolment Requirements(Join Us!) 📝');
    }
}