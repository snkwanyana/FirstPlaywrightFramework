import { expect, type Locator, type Page } from '@playwright/test';
import { ConnectPage } from './ConnectPage';

export class HomePage {
    readonly page: Page;
    readonly startLearningTodayButton: Locator;
    readonly connectPage: ConnectPage;

    constructor(page: Page) {
        this.page = page;
        this.startLearningTodayButton = page.locator('button:has-text("Start Learning Today")');
        this.connectPage = new ConnectPage(this.page);
    }

    async verifyHomePageContent() {
        await expect(this.startLearningTodayButton).toHaveText('Start Learning Today');
    }

    async clickStartLearningTodayButton() {
        await this.startLearningTodayButton.click();
    }

    async verifyConnectPageContent() {
        await this.connectPage.verifyConnectPageContent();
    }
}