import {Locator, Page} from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly loginPageHeading: Locator;
    readonly loginEmailInput: Locator;
    readonly loginPasswordInput: Locator;
    readonly loginButton: Locator;
    readonly loginErrorMessage: Locator;

    constructor (page: Page){
        this.page = page;
        this.loginPageHeading = page.getByRole('heading', {name:'Login to your account'});
        this.loginEmailInput = page.getByTestId('login-email');
        this.loginPasswordInput = page.getByTestId('login-password');
        this.loginButton = page.getByTestId('login-button');
        this.loginErrorMessage = page.getByText('Your email or password is incorrect!')
    }

       async goto() {
        await this.page.goto('/login');
    }

    async login(loginEmail: string, loginPassword: string) {
        await this.loginEmailInput.fill(loginEmail);
        await this.loginPasswordInput.fill(loginPassword);
        await this.loginButton.click();
    }
}