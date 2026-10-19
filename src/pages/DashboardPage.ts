import {ReusableFunctions} from "../utils/reusableFunctions";

export class DashboardPage extends ReusableFunctions { 

    async verifyDashboardPageIsDisplayed() {
        // return await this.isElementVisible(this.page.locator("h2"));
        // The words are separate spans without spaces, so match with optional whitespace.
        return await this.isElementVisible(this.page.getByRole('heading', { name: /Welcome\s*back,\s*admin/ }));
        
    }
}
