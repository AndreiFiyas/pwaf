import {chromium} from "playwright";

const { expect } = require('@playwright/test');
const { BuildUser } = require("./user_builder");


export class pwafPage {
    inlineFormName: any;
    inlineFormEmail: any;
    inlineFormCheckbox: any;
    inlineFormSubmit: any;
    gridEmail: any;
    gridPassword: any;
    gridRadio: any;
    gridSignIn: any;
    basicFormEmail: any;
    basicFormPassword: any;
    basicFormCheckbox: any;
    basicFormSubmit: any;
    labelsFormRecipients: any;
    labelsFormSubjects: any;
    labelsFormMessage: any;
    labelsFormSend: any;
    blockFormFirstName: any;
    blockFormLastName: any;
    blockFormEmail: any;
    blockFormWeb: any;
    blockFormSubmit: any;
    horizontalFormEmail: any;
    horizontalFormPassword: any;
    horizontalFormCheckbox: any;
    horizontalFormSignIn: any;
    page: any;

    constructor(page) {
        this.inlineFormName = page.getByPlaceholder('Jane Doe');
        this.inlineFormEmail = page.locator('.form-inline').getByPlaceholder('Email');
        this.inlineFormCheckbox = page.locator('.status-basic:nth-child(3) .custom-checkbox');
        this.inlineFormSubmit = page.locator('.status-primary:nth-child(4)');
        this.gridEmail = page.locator('#inputEmail1');
        this.gridPassword = page.locator('#inputPassword2');
        this.gridRadio = page.locator('nb-radio-group :text-is("Option 1")');
        this.gridSignIn = page.locator('button[ng-reflect-status="primary"]').first();
        this.basicFormEmail = page.locator('#exampleInputEmail1');
        this.basicFormPassword = page.locator('#exampleInputPassword1');
        this.basicFormCheckbox = page.locator('.form-group > .status-basic .custom-checkbox');
        this.basicFormSubmit = page.locator('.status-danger');
        this.labelsFormRecipients = page.getByPlaceholder('Recipients');
        this.labelsFormSubjects = page.getByPlaceholder('Subject');
        this.labelsFormMessage = page.getByPlaceholder('Message');
        this.labelsFormSend = page.locator('.status-success');
        this.blockFormFirstName = page.locator('#inputFirstName');
        this.blockFormLastName = page.locator('#inputLastName');
        this.blockFormEmail = page.locator('#inputEmail');
        this.blockFormWeb = page.locator('#inputWebsite');
        this.blockFormSubmit = page.locator('.appearance-filled:nth-child(3)');
        this.horizontalFormEmail = page.locator('#inputEmail3');
        this.horizontalFormPassword = page.locator('#inputPassword3');
        this.horizontalFormCheckbox = page.locator('.checkbox .custom-checkbox');
        this.horizontalFormSignIn = page.locator('.status-warning');
    };
//Inline form
    async fillInlineName(page) {
        await this.inlineFormName.fill('Andrew' + '' + 'Fiyas')
        await this.inlineFormName.innerText();
        await expect (this.inlineFormName).toHaveValue('Andrew' + '' + 'Fiyas');
    };

    async fillInlineEmail(page) {
        await this.inlineFormEmail.fill('test@gmail.com');
        await this.inlineFormEmail.innerText();
        await expect(await this.inlineFormEmail).toHaveValue('test@gmail.com');
    };

    async fillInlineCheckbox(page) {
        await this.inlineFormCheckbox.click();
        await this.inlineFormCheckbox.isChecked();
        expect(this.inlineFormCheckbox).toBeTruthy();
    };

    async submitButtonInline(page) {
        await this.inlineFormSubmit.click();
        const currentUrl = page.url();
        expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
    };

//Grid form
    async fillGridEmail(page) {
        await this.gridEmail.fill('test@gmail.com');
        await this.gridEmail.innerText();
        await expect(this.gridEmail).toHaveValue('test@gmail.com');
    };

    async fillGridPassword(page) {
        await this.gridPassword.fill('Qwe12345');
        await this.gridPassword.innerText();
        await expect(this.gridPassword).toHaveValue('Qwe12345');
    };

    async fillGridRadiobutton(page) {
        await this.gridRadio.click();
        await expect(this.gridRadio.isChecked()).resolves.toBe(true);
    };

    async fillGribButton(page) {
        await this.gridSignIn.click();
        const currentUrl = page.url();
        expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
    }

//Basic form
    async fillBasicEmail(page) {
        await this.basicFormEmail.fill('test@gmail.com');
        await this.basicFormEmail.innerText();
        await expect(this.basicFormEmail).toHaveValue('test@gmail.com');
    };

    async fillBasicPassword(page) {
        await this.basicFormPassword.fill('Qwe12345');
        await this.basicFormPassword.innerText();
        await expect(this.basicFormPassword).toHaveValue('Qwe12345');
    };

    async fillBasicCheckbox(page) {
        await page.click('.form-group > .status-basic .custom-checkbox');
        await expect(this.basicFormCheckbox.isChecked()).resolves.toBe(true);
    };

    async checkCurrentForm(page) {
        const currentUrl = page.url();
        expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
    };

//Label form
    async fillRecepientField(page) {
        await page.getByPlaceholder('Recipients').fill('Test Testovich');
        await page.getByPlaceholder('Recipients').innerText();
        await expect(page.getByPlaceholder('Recipients')).toHaveValue('Test Testovich');
    };

    async fillSubjectField(page) {
        await page.getByPlaceholder('Subject').fill('Human');
        await page.getByPlaceholder('Subject').innerText();
        await expect(page.getByPlaceholder('Subject')).toHaveValue('Human');
    };

    async fillMessageField(page) {
        await page.getByPlaceholder('Message').fill('Hello World!');
        await page.getByPlaceholder('Message').innerText();
        await expect(page.getByPlaceholder('Message')).toHaveValue('Hello World!');
    };

    async fillSendPush(page) {
        await page.click('.status-success');
        const currentUrl = page.url();
        expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
    };

//Block form
    async fillBlockName(page) {
        await page.locator('#inputFirstName').fill('Test');
        await page.locator('#inputFirstName').innerText();
        await expect(page.locator('#inputFirstName')).toHaveValue('Test');
    };

    async fillBlockLastName(page) {
        await page.locator('#inputLastName').fill('Testovich');
        await page.locator('#inputLastName').innerText();
        await expect(page.locator('#inputLastName')).toHaveValue('Testovich');
    };

    async fillBlockEmail(page) {
        await page.locator('#inputEmail').fill('test@gmail.com');
        await page.locator('#inputEmail').innerText();
        await expect(page.locator('#inputEmail')).toHaveValue('test@gmail.com');
    };

    async fillBlockWebsite(page) {
        await page.locator('#inputWebsite').fill('https://example.com');
        await page.locator('#inputWebsite').innerText();
        await expect(page.locator('#inputWebsite')).toHaveValue('https://example.com');
    };

    async fillBlockSubmit(page) {
        await page.click('.appearance-filled:nth-child(3)');
        const currentUrl = page.url();
        expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
    };

//Horizontal form
    async fillHorizontalEmail(page) {
        await page.locator('#inputEmail3').fill('test@gmail.com');
        await page.locator('#inputEmail3').innerText();
        await expect(page.locator('#inputEmail3')).toHaveValue('test@gmail.com');
    };
    async fillHorizontalPassword(page) {
        await page.locator('#inputPassword3').fill('Qwe12345');
        await page.locator('#inputPassword3').innerText();
        await expect(page.locator('#inputPassword3')).toHaveValue('Qwe12345');
    };
    async fillHorizontalCheckbox(page) {
        await page.click('.checkbox .custom-checkbox');
    };

    async fillHorizontalSign(page) {
        await page.click('.status-warning');
        const currentUrl = page.url();
        expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
    };
}
