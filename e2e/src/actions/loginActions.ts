import { Page } from "@playwright/test";
import { LoginPage } from "../pages/loginPage";


export class LoginActions {

    private page: Page;
    private loginPage: LoginPage;

    constructor (page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
    }

    // Methods for the Login Page
    async enterUsername (username: string) {
        await this.loginPage.getUserNameInput().fill(username);
    }

    async enterPassword (password: string) {
        await this.loginPage.getPasswordInput().fill(password);
    }

    async clickLoginBtn () {
        await this.loginPage.getLoginButton().click();
    }

    async login (username: string, password: string) {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickLoginBtn();
    }

}