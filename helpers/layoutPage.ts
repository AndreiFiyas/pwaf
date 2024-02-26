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
        this.gridEmail = page.$('#inputEmail1');
        this.gridPassword = page.$('#inputPassword2');
        this.gridRadio = page.$('.status-basic:nth-child(2) .inner-circle');
        this.gridSignIn = page.$('button[ng-reflect-status="primary"].status-primary');
        this.basicFormEmail = page.$('#exampleInputEmail1');
        this.basicFormPassword = page.$('#exampleInputPassword1');
        this.basicFormCheckbox = page.$('.form-group > .status-basic .custom-checkbox');
        this.basicFormSubmit = page.$('.status-danger');
        this.labelsFormRecipients = page.$('[placeholder="Recipients"]');
        this.labelsFormSubjects = page.$('[placeholder="Subject"]');
        this.labelsFormMessage = page.$('[placeholder="Message"]');
        this.labelsFormSend = page.$('.status-success');
        this.blockFormFirstName = page.$('#inputFirstName');
        this.blockFormLastName = page.$('#inputLastName');
        this.blockFormEmail = page.$('#inputEmail');
        this.blockFormWeb = page.$('#inputWebsite');
        this.blockFormSubmit = page.$('.appearance-filled:nth-child(3)');
        this.horizontalFormEmail = page.$('#inputEmail3');
        this.horizontalFormPassword = page.$('#inputPassword3');
        this.horizontalFormCheckbox = page.$('.checkbox .custom-checkbox');
        this.horizontalFormSignIn = page.$('.status-warning');
    }
//Inline form
    async fillInlineName(page) {
        await page.getByPlaceholder('Jane Doe').fill('Andrew' + '' + 'Fiyas')
        await page.getByPlaceholder('Jane Doe').innerText();
        await expect(page.getByPlaceholder('Jane Doe')).toHaveValue('Andrew' + '' + 'Fiyas');
    };

    async fillInlineEmail(page) {
        await page.locator('.form-inline').getByPlaceholder('Email').fill('test@gmail.com');
        await page.locator('.form-inline').getByPlaceholder('Email').innerText();
        await expect(page.locator('.form-inline').getByPlaceholder('Email')).toHaveValue('test@gmail.com');
    };

    async fillInlineCheckbox(page) {
        await page.click('.status-basic:nth-child(3) .custom-checkbox');
        const checkboxChecked = await page.isChecked('.status-basic:nth-child(3) .custom-checkbox');
        expect(checkboxChecked).toBeTruthy();
    };

    async submitButtonInline(page) {
        await page.click('.status-primary:nth-child(4)');
        const currentUrl = page.url();
        expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
    };

//Grid form
    async fillGridEmail(page) {
        await page.locator('#inputEmail1').fill('test@gmail.com');
        await page.locator('#inputEmail1').innerText();
        await expect(page.locator('#inputEmail1')).toHaveValue('test@gmail.com');
    };

    async fillGridPassword(page) {
        await page.locator('#inputPassword2').fill('Qwe12345');
        await page.locator('#inputPassword2').innerText();
        await expect(page.locator('#inputPassword2')).toHaveValue('Qwe12345');
    };

    async fillGridRadiobutton(page) {
        const radioButton = page.locator('nb-radio-group :text-is("Option 1")');
        await radioButton.click();
        await expect(radioButton.isChecked()).resolves.toBe(true);
    };

    async fillGribButton(page) {
        await page.click('button[ng-reflect-status="primary"]');
        const currentUrl = page.url();
        expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
    }

//Basic form
    async fillBasicEmail(page) {
        await page.locator('#exampleInputEmail1').fill('test@gmail.com');
        await page.locator('#exampleInputEmail1').innerText();
        await expect(page.locator('#exampleInputEmail1')).toHaveValue('test@gmail.com');
    };

    async fillBasicPassword(page) {
        await page.locator('#exampleInputPassword1').fill('Qwe12345');
        await page.locator('#exampleInputPassword1').innerText();
        await expect(page.locator('#exampleInputPassword1')).toHaveValue('Qwe12345');
    };

    async fillBasicCheckbox(page) {
        await page.click('.form-group > .status-basic .custom-checkbox');
        const checkboxCheckMeOut = page.isChecked('.status-basic:nth-child(3) .custom-checkbox');
        expect(checkboxCheckMeOut).toBeTruthy();
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
