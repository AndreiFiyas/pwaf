// @ts-check
import { expect, test } from '@playwright/test';
import { chromium } from 'playwright';
import {pwafPage} from "../helpers/layoutPage";

test ('Inline form', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/pages/forms/layouts');
    await page.click('[placeholder="Jane Doe"]');
    await page.fill('[placeholder="Jane Doe"]', "Test Testovich");
    await page.click('.form-inline > [placeholder="Email"]');
    await page.fill('.form-inline > [placeholder="Email"]', "asdsa@gmail.com");
    await page.click('.status-basic:nth-child(3) .custom-checkbox');
    await page.click('.status-primary:nth-child(4)');
    const currentUrl = page.url();
    expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
});

test('Inline form', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/pages/forms/layouts');
    await page.click('[placeholder="Jane Doe"]');
    await page.fill('[placeholder="Jane Doe"]', "Test Testovich");
    const nameInputValue = await page.getAttribute('[placeholder="Jane Doe"]', 'value');
    expect(nameInputValue).toBe("Test Testovich");
    await page.click('.form-inline > [placeholder="Email"]');
    await page.fill('.form-inline > [placeholder="Email"]', "asdsa@gmail.com");
    const emailValue = await page.getAttribute('.form-inline > [placeholder="Email"]', 'value');
    expect(emailValue).toBe("asdsa@gmail.com"); // Fixed variable name
    await page.click('.status-basic:nth-child(3) .custom-checkbox');
    const checkboxChecked = await page.isChecked('.status-basic:nth-child(3) .custom-checkbox');
    expect(checkboxChecked).toBeTruthy();
    await page.click('.status-primary:nth-child(4)');
    const currentUrl = await page.url();
    expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
});

test ('Using the Grid', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/pages/forms/layouts');
    await page.click('#inputEmail1');
    await page.fill('#inputEmail1', 'test@gmail.com');
    await page.click('#inputPassword2');
    await page.fill('#inputPassword2', 'Qwe12345');
    await page.click('.status-basic:nth-child(2) .inner-circle');
    await page.click('button[ng-reflect-status="primary"].status-primary');
    const currentUrl = page.url();
    expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
});

test ('Basic form', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/pages/forms/layouts');
    await page.click('#exampleInputEmail1');
    await page.fill('#exampleInputEmail1', 'test@gmail.com');
    await page.click('#exampleInputPassword1');
    await page.fill('#exampleInputPassword1', 'Qwe12345');
    await page.click('.form-group > .status-basic .custom-checkbox');
    await page.click('.status-danger');
    const currentUrl = page.url();
    expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
});

test ('Form without labels', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/pages/forms/layouts');
    await page.click('[placeholder="Recipients"]');
    await page.fill('[placeholder="Recipients"]', 'Test Testovich');
    await page.click('[placeholder="Subject"]');
    await page.fill('[placeholder="Subject"]', 'Human');
    await page.click('[placeholder="Message"]');
    await page.fill('[placeholder="Message"]', 'Hello World!');
    await page.click('.status-success');
    const currentUrl = page.url();
    expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
});

test ('Block form', async ({page} ) => {
    const blockForm = new pwafPage(page)
    await page.goto('http://localhost:4200/pages/forms/layouts');
    await page.click('#inputFirstName');
    await page.fill('#inputFirstName', 'Test');
    await page.click('#inputLastName');
    await page.fill('#inputLastName', 'Testovich');
    await page.click('#inputEmail');
    await page.fill('#inputEmail', 'test@gmail.com');
    await page.click('#inputWebsite');
    await page.fill('#inputWebsite', 'https://example.com');
    await page.click('.appearance-filled:nth-child(3)');
    const currentUrl = page.url();
    expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
});

test('Horizontal form', async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200/pages/forms/layouts');
    await page.click('#inputEmail3');
    await page.fill('#inputEmail3', 'test@gmail.com');
    await page.click('#inputPassword3');
    await page.fill('#inputPassword3', 'Qwe12345');
    await page.click('.checkbox .custom-checkbox');
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
