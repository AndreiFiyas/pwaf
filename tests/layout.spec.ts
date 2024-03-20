// @ts-check
import { test } from '@playwright/test';
import {PwafPage} from '../helpers/layoutPage';
import BuildUser from '../helpers/user_builder';

test('Inline form', async ({page}) => {
    const blockForm = new PwafPage(page)
    const user = new BuildUser().addFirstName().addEmail().addPassword().addLastName().generate();
    await page.goto('/pages/forms/layouts');
    //Fill inline name field
    await blockForm.fillInlineName(page, user);
    //Fill inline email field
    await blockForm.fillInlineEmail(user);
    //Check inline checkbox
    await blockForm.fillInlineCheckbox();
    //Click on Submit button
    await blockForm.submitButtonInline(page)
});

test ('Using the Grid', async ({page}) => {
    const blockForm = new PwafPage(page)
    const user = new BuildUser().addFirstName().addEmail().addPassword().addLastName().generate();
    await page.goto('/pages/forms/layouts');
    // Fill grid email
    await blockForm.fillGridEmail(user);
    // Fill grid password
    await blockForm.fillGridPassword(user);
    // Set radiobutton
    await blockForm.fillGridRadiobutton();
    // Click on Sign in
    await blockForm.fillGribButton(page)
});

test ('Basic form', async ({page}) => {
    const blockForm = new PwafPage(page)
    const user = new BuildUser().addFirstName().addEmail().addPassword().addLastName().generate();
    await page.goto('/pages/forms/layouts');
    // Fill basic email
    await blockForm.fillBasicEmail(user);
    // Fill basic password
    await blockForm.fillBasicPassword(user);
    // Check basic checkbox
    await blockForm.fillBasicCheckbox(page);
    // Check current page
    await blockForm.checkCurrentForm(page);
});

test ('Form without labels', async ({page}) => {
    const blockForm = new PwafPage(page)
    const user = new BuildUser().addFirstName().addEmail().addPassword().addLastName().generate();
    await page.goto('/pages/forms/layouts');
    // Fill recepient field
    await blockForm.fillRecepientField(page, user);
    // Fill subject field
    await blockForm.fillSubjectField(page, user);
    // Fill message field
    await blockForm.fillMessageField(page, user);
    // Push send button
    await blockForm.fillSendPush(page)
});

test ('Block form', async ({page} ) => {
    const blockForm = new PwafPage(page)
    const user = new BuildUser().addFirstName().addEmail().addPassword().addLastName().generate();
    await page.goto('/pages/forms/layouts');
    // Fill first name
    await blockForm.fillBlockName(page, user);
    // Fill last name
    await blockForm.fillBlockLastName(page, user);
    // Fill email
    await blockForm.fillBlockEmail(page, user);
    // Fill website
    await blockForm.fillBlockWebsite(page, user);
    // Press submit button
    await blockForm.fillBlockSubmit(page)
});

test('Horizontal form', async ({page}) => {
    const blockForm = new PwafPage(page)
    const user = new BuildUser().addFirstName().addEmail().addPassword().addLastName().generate();
    await page.goto('/pages/forms/layouts');
    // Fill email field
    await blockForm.fillHorizontalEmail(page, user);
    //Fill password field
    await blockForm.fillHorizontalPassword(page, user);
    //Press on checkbox
    await blockForm.fillHorizontalCheckbox(page);
    //Click on sign in button
    await blockForm.fillHorizontalSign(page)
});

// /await page.locator(‘input-filter’).getByPlaceholder(‘Age’).fill(age);
// /await page.locator(‘input-editor’).getByPlaceholder(‘Age’)
// await page.locator(‘nb-card nb-radio :text-is(“Option 1”)’).click();
// await page.locator(‘nb-card’).locator(‘nb-radio’).locator(‘:text-is(“Option 2")’).click();
// await page.locator(‘nb-card’).getByRole(‘button’, { name: ‘Sign in’ }).first().click();
// await page.locator(‘nb-card’).nth(3).getByRole(‘button’).first().click();
