import { ReusableFunctions } from '../utils/reusableFunctions';

export class HomePage extends ReusableFunctions {
    


    async verifyHomePageContent() {
        return await this.isElementVisible(this.page.locator('text= Start Learning Today'));
    }

    async clickStartLearningTodayButton() {
        await this.clickElement(this.page.locator('button:has-text("Start Learning Today")'));
    }
}