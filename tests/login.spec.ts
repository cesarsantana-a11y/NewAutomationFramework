import {test, expect} from '@playwright/test';
import {LoginPage} from "../pages/LoginPage";

test('Fill in Login form with invalid credentials and verify error message', async ({page}) => {
    const loginPage = new LoginPage(page);
    await loginPage.openLoginPage();
    await loginPage.login('pantomimeo@gmail.com', 'weeeo');
    await expect (loginPage.LoginErrorMessage).toBeVisible();
});