import { Page } from "@playwright/test";

export class LoginPage {

    private page: Page;

    constructor (page: Page) {
        this.page = page;
    }

    // Defining locators
    private readonly USER_NAME_INPUT = "//input[@id='user-name']";
    private readonly PASSWORD_INPUT = "//input[@id='password']";
    private readonly LOGIN_BTN = "//input[@data-test='login-button']";

    // Getters for locators
    getUserNameInput () {
        return this.page.locator(this.USER_NAME_INPUT);
    }

    getPasswordInput () {
        return this.page.locator(this.PASSWORD_INPUT);
    }

    getLoginButton () {
        return this.page.locator(this.LOGIN_BTN);
    }

}