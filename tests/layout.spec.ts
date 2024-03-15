// @ts-check
import { expect, test } from '@playwright/test';
import {pwafPage} from '../helpers/layoutPage';
import BuildUser from '../helpers/user_builder';

test('Inline form', async ({page}) => {
    const blockForm = new pwafPage(page)
    await page.goto('http://localhost:4200/pages/forms/layouts');
    //Fill inline name field
    await blockForm.fillInlineName(page);
    //Fill inline email field
    await blockForm.fillInlineEmail(page);
    //Check inline checkbox
    await blockForm.fillInlineCheckbox(page);
    //Click on Submit button
    await blockForm.submitButtonInline(page)
});

test ('Using the Grid', async ({page}) => {
    const blockForm = new pwafPage(page)
    await page.goto('http://localhost:4200/pages/forms/layouts');
    // Fill grid email
    await blockForm.fillGridEmail(page);
    // Fill grid password
    await blockForm.fillGridPassword(page);
    // Set radiobutton
    await blockForm.fillGridRadiobutton(page);
    // Click on Sign in
    await blockForm.fillGribButton(page)
});

test ('Basic form', async ({page}) => {
    const blockForm = new pwafPage(page)
    await page.goto('http://localhost:4200/pages/forms/layouts');
    // Fill basic email
    await blockForm.fillBasicEmail(page);
    // Fill basic password
    await blockForm.fillBasicPassword(page);
    // Check basic checkbox
    await blockForm.fillBasicCheckbox(page);
    // Check current page
    await blockForm.checkCurrentForm(page);
});

test ('Form without labels', async ({page}) => {
    const blockForm = new pwafPage(page)
    await page.goto('http://localhost:4200/pages/forms/layouts');
    // Fill recepient field
    await blockForm.fillRecepientField(page);
    // Fill subject field
    await blockForm.fillSubjectField(page);
    // Fill message field
    await blockForm.fillMessageField(page);
    // Push send button
    await blockForm.fillSendPush(page)
});

test ('Block form', async ({page} ) => {
    const blockForm = new pwafPage(page)
    await page.goto('http://localhost:4200/pages/forms/layouts');
    // Fill first name
    await blockForm.fillBlockName(page);
    // Fill last name
    await blockForm.fillBlockLastName(page);
    // Fill email
    await blockForm.fillBlockEmail(page);
    // Fill website
    await blockForm.fillBlockWebsite(page);
    // Press submit button
    await blockForm.fillBlockSubmit(page)
});

test('Horizontal form', async ({page}) => {
    const blockForm = new pwafPage(page)
    await page.goto('http://localhost:4200/pages/forms/layouts');
    // Fill email field
    await blockForm.fillHorizontalEmail(page);
    //Fill password field
    await blockForm.fillHorizontalPassword(page);
    //Press on checkbox
    await blockForm.fillHorizontalCheckbox(page);
    //Click on sign in button
    await blockForm.fillHorizontalSign(page)
});
//
// /await page.locator(‘input-filter’).getByPlaceholder(‘Age’).fill(age);
// /await page.locator(‘input-editor’).getByPlaceholder(‘Age’)
// await page.locator(‘nb-card nb-radio :text-is(“Option 1”)’).click();
// await page.locator(‘nb-card’).locator(‘nb-radio’).locator(‘:text-is(“Option 2")’).click();
// await page.locator(‘nb-card’).getByRole(‘button’, { name: ‘Sign in’ }).first().click();
// await page.locator(‘nb-card’).nth(3).getByRole(‘button’).first().click();
