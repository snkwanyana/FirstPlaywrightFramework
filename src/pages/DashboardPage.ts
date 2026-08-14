import {ReusableFunctions} from "../utils/reusableFunctions";

export class DashboardPage extends ReusableFunctions { 

    async verifyDashboardPageIsDisplayed() {
        return await this.isElementVisible(this.page.locator("//p[contains(text(),'Here's who's working today')]"));
        
    }
}
