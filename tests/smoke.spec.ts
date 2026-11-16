import {test, expect} from '@playwright/test';
import {HomePage} from "../pages/HomePage";

test('Verify that home page is visible successfully', async ({page}) => {
    const homePage = new HomePage(page);
    await homePage.openHomePage();
    await expect(homePage.homePageHeading).toBeVisible();
});