const { expect } = require('@playwright/test');



export class PwafPage {
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
    async fillInlineName(page, user) {

        await this.inlineFormName.fill(user.firstname + '' + user.lastname)
        await this.inlineFormName.innerText();
        await expect (this.inlineFormName).toHaveValue(user.firstname + '' + user.lastname);
    };

    async fillInlineEmail(user) {
        await this.inlineFormEmail.fill(user.mail);
        await this.inlineFormEmail.innerText();
        await expect(await this.inlineFormEmail).toHaveValue(user.mail);
    };

    async fillInlineCheckbox() {
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
    async fillGridEmail(user) {
        await this.gridEmail.fill(user.mail);
        await this.gridEmail.innerText();
        await expect(this.gridEmail).toHaveValue(user.mail);
    };

    async fillGridPassword(user) {
        await this.gridPassword.fill(user.password);
        await this.gridPassword.innerText();
        await expect(this.gridPassword).toHaveValue(user.password);
    };

    async fillGridRadiobutton() {
        await this.gridRadio.click();
        await expect(this.gridRadio.isChecked()).resolves.toBe(true);
    };

    async fillGribButton(page) {
        await this.gridSignIn.click();
        const currentUrl = page.url();
        expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
    }

//Basic form
    async fillBasicEmail(user) {
        await this.basicFormEmail.fill(user.mail);
        await this.basicFormEmail.innerText();
        await expect(this.basicFormEmail).toHaveValue(user.mail);
    };

    async fillBasicPassword(user) {
        await this.basicFormPassword.fill(user.password);
        await this.basicFormPassword.innerText();
        await expect(this.basicFormPassword).toHaveValue(user.password);
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
    async fillRecepientField(page, user) {
        await page.getByPlaceholder('Recipients').fill(user.firstname);
        await page.getByPlaceholder('Recipients').innerText();
        await expect(page.getByPlaceholder('Recipients')).toHaveValue(user.firstname);
    };

    async fillSubjectField(page, user) {
        await page.getByPlaceholder('Subject').fill(user.lastname);
        await page.getByPlaceholder('Subject').innerText();
        await expect(page.getByPlaceholder('Subject')).toHaveValue(user.lastname);
    };

    async fillMessageField(page, user) {
        await page.getByPlaceholder('Message').fill(user.mail);
        await page.getByPlaceholder('Message').innerText();
        await expect(page.getByPlaceholder('Message')).toHaveValue(user.mail);
    };

    async fillSendPush(page) {
        await page.click('.status-success');
        const currentUrl = page.url();
        expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
    };

//Block form
    async fillBlockName(page, user) {
        await page.locator('#inputFirstName').fill(user.firstname);
        await page.locator('#inputFirstName').innerText();
        await expect(page.locator('#inputFirstName')).toHaveValue(user.firstname);
    };

    async fillBlockLastName(page, user) {
        await page.locator('#inputLastName').fill(user.lastname);
        await page.locator('#inputLastName').innerText();
        await expect(page.locator('#inputLastName')).toHaveValue(user.lastname);
    };

    async fillBlockEmail(page, user) {
        await page.locator('#inputEmail').fill(user.mail);
        await page.locator('#inputEmail').innerText();
        await expect(page.locator('#inputEmail')).toHaveValue(user.mail);
    };

    async fillBlockWebsite(page, user) {
        await page.locator('#inputWebsite').fill(user.lastname);
        await page.locator('#inputWebsite').innerText();
        await expect(page.locator('#inputWebsite')).toHaveValue(user.lastname);
    };

    async fillBlockSubmit(page) {
        await page.click('.appearance-filled:nth-child(3)');
        const currentUrl = page.url();
        expect(currentUrl).toBe('http://localhost:4200/pages/forms/layouts');
    };

//Horizontal form
    async fillHorizontalEmail(page, user) {
        await page.locator('#inputEmail3').fill(user.mail);
        await page.locator('#inputEmail3').innerText();
        await expect(page.locator('#inputEmail3')).toHaveValue(user.mail);
    };
    async fillHorizontalPassword(page, user) {
        await page.locator('#inputPassword3').fill(user.password);
        await page.locator('#inputPassword3').innerText();
        await expect(page.locator('#inputPassword3')).toHaveValue(user.password);
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
