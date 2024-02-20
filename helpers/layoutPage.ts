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

    async fillInlineName(user) {
        await this.page.getByPlaceholder('Jane Doe').fill(user.firstname + '' + user.lastName)
        await this.page.getByPlaceholder('Jane Doe').innerText();
        await expect(this.page.getByPlaceholder('Jane Doe')).toHaveValue(user.firstname + '' + user.lastName);
    };

    async fillInlineEmail(user) {
        await this.page.locator('.form-inline').getByPlaceholder('Email').fill(user.mail);
        await this.page.locator('.form-inline').getByPlaceholder('Email').innerText();
        await expect(this.page.locator('.form-inline').getByPlaceholder('Email')).toHaveValue(user.mail);
    };

    async fillInlineCheckbox() {
        await this.page.click('.status-basic:nth-child(3) .custom-checkbox');
        const checkboxChecked = await this.page.isChecked('.status-basic:nth-child(3) .custom-checkbox');
        expect(checkboxChecked).toBeTruthy();
    };

    async submitButtonInline() {
        await this.page.click('.status-primary:nth-child(4)');
        const currentUrl = this.page.url();
        expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
    };

    async navigateToLayoutPage(url) {
        const browser = await chromium.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:4200/pages/forms/layouts');
    }
}
