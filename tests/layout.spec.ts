// @ts-check
import { expect, test } from '@playwright/test';
import { chromium } from 'playwright';
import {pwafPage} from "../helpers/layoutPage";

test('Inline form', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/pages/forms/layouts');
    //Fill inline name field
    const nameInput = page.getByPlaceholder('Jane Doe');
    await nameInput.fill("Test Testovich");
    await expect(nameInput).toContainText("Test Testovich");
    //Fill inline email field
    const emailInput = page.locator('.form-inline').getByPlaceholder('Email');
    await page.locator('.form-inline').getByPlaceholder('Email').fill('asdsa@gmail.com');
    await expect(emailInput).toContainText("asdsa@gmail.com");
    //Check inline checkbox
    await page.click('.status-basic:nth-child(3) .custom-checkbox');
    const checkboxChecked = await page.isChecked('.status-basic:nth-child(3) .custom-checkbox');
    expect(checkboxChecked).toBeTruthy();
    await page.click('.status-primary:nth-child(4)');
    const currentUrl = page.url();
    expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
});

test ('Using the Grid', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/pages/forms/layouts');
    // Fill grid email
    const gridEmail = page.locator('#inputEmail1');
    await gridEmail.fill('test@gmail.com');
    await expect(gridEmail).toHaveText('test@gmail.com');
    // Fill grid password
    const gridPassword = page.locator('#inputPassword2');
    await gridPassword.fill('Qwe12345');
    await expect(gridPassword).toHaveText('Qwe12345');
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
    const basicEmail = page.locator('#exampleInputEmail1');
    await basicEmail.fill('test@gmail.com');
    await expect(basicEmail).toHaveText('test@gmail.com');
    // Fill basic password
    const basicPassword = page.locator('#exampleInputPassword1');
    await basicPassword.fill('Qwe12345');
    await expect(basicPassword).toHaveText('Qwe12345');
    // Check basic checkbox
    // const basicButton = await page.getByRole('checkbox', {custom-checkbox});
    // await page.click('.status-danger');
    const currentUrl = page.url();
    expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
});

test ('Form without labels', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/pages/forms/layouts');
    // Fill recepient field
    const labelRecepient = page.getByPlaceholder('Recipients');
    await labelRecepient.fill('Test Testovich');
    await expect(labelRecepient).toHaveText('Test Testovich');
    // Fill subject field
    const labelSubject = page.getByPlaceholder('Subject');
    await labelSubject.fill('Human');
    await expect(labelSubject).toHaveText('Human');
    // Fill message field
    const labelMessage = page.getByPlaceholder('Message');
    await labelMessage.fill('Hello World!');
    await expect(labelMessage).toHaveText('Hello World!');
    // Push send button
    await page.click('.status-success');
    const currentUrl = page.url();
    expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
});

test ('Block form', async ({page} ) => {
    const blockForm = new pwafPage(page)
    await page.goto('http://localhost:4200/pages/forms/layouts');
    // Fill first name
    const blockFirstName = page.locator('#inputFirstName');
    await blockFirstName.fill('Test');
    await expect(blockFirstName).toHaveText('Test');
    // Fill last name
    const blockLastName = page.locator('#inputLastName');
    await blockLastName.fill('Testovich');
    await expect(blockLastName).toHaveText('Testovich');
    // Fill email
    const blockEmail = page.locator('#inputEmail');
    await blockEmail.fill('test@gmail.com');
    await expect(blockEmail).toHaveText('test@gmail.com');
    // Fill website
    const blockSite = page.locator('#inputWebsite');
    await blockSite.fill('https://example.com');
    await expect(blockSite).toHaveText('https://example.com');
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
    const horizontalEmail = page.locator('#inputEmail3');
    await horizontalEmail.fill('test@gmail.com');
    await expect(horizontalEmail).toHaveText('test@gmail.com');
    //Fill password field
    const horizontalPassword = page.locator('#inputPassword3');
    await horizontalPassword.fill('Qwe12345');
    await expect(horizontalPassword).toHaveText('Qwe12345');
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
