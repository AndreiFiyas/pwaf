// @ts-check
import { expect, test } from '@playwright/test';
import { chromium } from 'playwright';
import {pwafPage} from "../helpers/layoutPage";
const { BuildUser } = require("./user_builder");

test('Inline form', async ({page}) => {
    const blockForm = new pwafPage(page)
    const url = 'http://localhost:4200/pages/forms/layouts';
    const user = new BuildUser().addFirstName().addEmail().addPassword().addLastName().addPhoneNumber().generate();
    await blockForm.navigateToLayoutPage(url)
    //Fill inline name field
    await blockForm.fillInlineName(user);
    //Fill inline email field
    await blockForm.fillInlineEmail(user);
    //Check inline checkbox
    await blockForm.fillInlineCheckbox();
    //Click on Submit button
    await blockForm.submitButtonInline()
});

test ('Using the Grid', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/pages/forms/layouts');
    // Fill grid email
    await page.locator('#inputEmail1').fill('test@gmail.com');
    await page.locator('#inputEmail1').innerText();
    await expect(page.locator('#inputEmail1')).toHaveValue('test@gmail.com');
    // Fill grid password
    await page.locator('#inputPassword2').fill('Qwe12345');
    await page.locator('#inputPassword2').innerText();
    await expect(page.locator('#inputPassword2')).toHaveValue('Qwe12345');
    // Set radiobutton
    const radioButton = page.locator('nb-radio-group :text-is("Option 1")');
    await radioButton.click();
    await expect(radioButton.isChecked()).resolves.toBe(true);
    // Click on Sign in
    await page.click('button[ng-reflect-status="primary"]');
    const currentUrl = page.url();
    expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
});

test ('Basic form', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/pages/forms/layouts');
    // Fill basic email
    await page.locator('#exampleInputEmail1').fill('test@gmail.com');
    await page.locator('#exampleInputEmail1').innerText();
    await expect(page.locator('#exampleInputEmail1')).toHaveValue('test@gmail.com');
    // Fill basic password
    await page.locator('#exampleInputPassword1').fill('Qwe12345');
    await page.locator('#exampleInputPassword1').innerText();
    await expect(page.locator('#exampleInputPassword1')).toHaveValue('Qwe12345');
    // Check basic checkbox
    await page.click('.form-group > .status-basic .custom-checkbox');
    const checkboxCheckMeOut = page.isChecked('.status-basic:nth-child(3) .custom-checkbox');
    expect(checkboxCheckMeOut).toBeTruthy();
    const currentUrl = page.url();
    expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
});

test ('Form without labels', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/pages/forms/layouts');
    // Fill recepient field
    await page.getByPlaceholder('Recipients').fill('Test Testovich');
    await page.getByPlaceholder('Recipients').innerText();
    await expect(page.getByPlaceholder('Recipients')).toHaveValue('Test Testovich');
    // Fill subject field
    await page.getByPlaceholder('Subject').fill('Human');
    await page.getByPlaceholder('Subject').innerText();
    await expect(page.getByPlaceholder('Subject')).toHaveValue('Human');
    // Fill message field
    await page.getByPlaceholder('Message').fill('Hello World!');
    await page.getByPlaceholder('Message').innerText();
    await expect(page.getByPlaceholder('Message')).toHaveValue('Hello World!');
    // Push send button
    await page.click('.status-success');
    const currentUrl = page.url();
    expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
});

test ('Block form', async ({page} ) => {
    const blockForm = new pwafPage(page)
    await page.goto('http://localhost:4200/pages/forms/layouts');
    // Fill first name
    await page.locator('#inputFirstName').fill('Test');
    await page.locator('#inputFirstName').innerText();
    await expect(page.locator('#inputFirstName')).toHaveValue('Test');
    // Fill last name
    await page.locator('#inputLastName').fill('Testovich');
    await page.locator('#inputLastName').innerText();
    await expect(page.locator('#inputLastName')).toHaveValue('Testovich');
    // Fill email
    await page.locator('#inputEmail').fill('test@gmail.com');
    await page.locator('#inputEmail').innerText();
    await expect(page.locator('#inputEmail')).toHaveValue('test@gmail.com');
    // Fill website
    await page.locator('#inputWebsite').fill('https://example.com');
    await page.locator('#inputWebsite').innerText();
    await expect(page.locator('#inputWebsite')).toHaveValue('https://example.com');
    // Press submit button
    await page.click('.appearance-filled:nth-child(3)');
    const currentUrl = page.url();
    expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
});

test('Horizontal form', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/pages/forms/layouts');
    // Fill email field
    await page.locator('#inputEmail3').fill('test@gmail.com');
    await page.locator('#inputEmail3').innerText();
    await expect(page.locator('#inputEmail3')).toHaveValue('test@gmail.com');
    //Fill password field
    await page.locator('#inputPassword3').fill('Qwe12345');
    await page.locator('#inputPassword3').innerText();
    await expect(page.locator('#inputPassword3')).toHaveValue('Qwe12345');
    //Press on checkbox
    await page.click('.checkbox .custom-checkbox');
    //Click on sign in button
    await page.click('.status-warning');
    const currentUrl = page.url();
    expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
});

///await page.locator(‘input-filter’).getByPlaceholder(‘Age’).fill(age);
///await page.locator(‘input-editor’).getByPlaceholder(‘Age’)
// await page.locator(‘nb-card nb-radio :text-is(“Option 1”)’).click();
// await page.locator(‘nb-card’).locator(‘nb-radio’).locator(‘:text-is(“Option 2")’).click();
// await page.locator(‘nb-card’).getByRole(‘button’, { name: ‘Sign in’ }).first().click();
// await page.locator(‘nb-card’).nth(3).getByRole(‘button’).first().click();
