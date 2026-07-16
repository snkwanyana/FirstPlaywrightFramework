import { ReusableFunctions } from '../utils/reusableFunctions';

export class ConnectPage extends ReusableFunctions {

    async verifyConnectPageContent() {
        return await this.isElementVisible(this.page.locator('text= Enrolment Requirements(Join Us!) 📝'));  
    }
}