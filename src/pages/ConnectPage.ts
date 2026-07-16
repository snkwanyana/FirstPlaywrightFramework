import { ReusableFunctions } from '../utils/reusableFunctions';

export class ConnectPage extends ReusableFunctions {

    async verifyConnectPageContent() {
        // await expect(this.connectHeading).toHaveText('Enrolment Requirements(Join Us!) 📝');
        return await this.isElementVisible(this.page.locator('text= Enrolment Requirements(Join Us!) 📝'));  
    }
}