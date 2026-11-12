import {test, expect} from '@playwright/test';

test('open the page using the baseURL', async ({page}) => {
    await page.goto('/');
    await expect(page).toHaveTitle('Automation Exercise');
       await expect(page.getByRole('heading', { name: 'AutomationExercise' })).toBeVisible();

});