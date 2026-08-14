import { ReusableFunctions } from '../utils/reusableFunctions';

export class LoginPage extends ReusableFunctions {
    async verifyLoginPageContent(){
        const isVisible = await this.isElementVisible(this.page.locator('text=Login to Access Learning Materials'));
        if (!isVisible) {
            throw new Error('Login to Access Learning Materials text is not visible on the login page.');
        }
    }

    async enterUsername(username: string) {
        await this.typeText(this.page.locator('input[id="login-email"]'), username.trim());
    }

    async enterPassword(password: string) {
        await this.typeText(this.page.locator('input[id="login-password"]'), password.trim());
    }

    async clickLoginButton() {
        await this.clickElement(this.page.locator('button:has-text("Login")'));
    }
}