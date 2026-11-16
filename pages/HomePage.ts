import {Locator, Page} from "@playwright/test";


export class HomePage {
    readonly page: Page;
    readonly homePageHeading: Locator;
    readonly homePageLoginLink: Locator;

constructor(page: Page){
    this.page = page;
    this.homePageHeading = page.getByRole('heading', { name:'AutomationExercise' });
    this.homePageLoginLink = page.getByRole('link', {name:'Signup / Login'});
}

async openHomePage() {
    await this.page.goto('/');
}

async clickLoginLink() {
    await this.homePageLoginLink.click();
}
}