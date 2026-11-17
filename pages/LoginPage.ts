import {Locator, Page} from "@playwright/test";
import {HomePage} from "./HomePage";

export class LoginPage {
    readonly page: Page;
    readonly LoginPageHeading: Locator;
    readonly LoginEmailInput: Locator;
    readonly LoginPasswordInput: Locator;
    readonly ClickLoginButton: Locator;
    readonly LoginErrorMessage: Locator;

    constructor (page: Page){
        this.page = page;
        this.LoginPageHeading = page.getByRole('heading', {name:'Login to your account'});
        this.LoginEmailInput = page.getByTestId('login-email');
        this.LoginPasswordInput = page.getByTestId('login-password');
        this.ClickLoginButton = page.getByTestId('login-button');
        this.LoginErrorMessage = page.getByText('Your email or password is incorrect!')
    }

    async openLoginPage() {
        const homePage = new HomePage(this.page);
        await homePage.openHomePage();
        await homePage.clickLoginLink();
    }
    async login(loginEmail: string, loginPassword: string) {
        await this.LoginEmailInput.fill(loginEmail);
        await this.LoginPasswordInput.fill(loginPassword);
        await this.ClickLoginButton.click();
    }
}