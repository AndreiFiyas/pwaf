const { expect } = require('@playwright/test');
const BuildUser = require("./user_builder");

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
        this.inlineFormName = page.$('[placeholder="Jane Doe"]');
        this.inlineFormEmail = page.$('.form-inline > [placeholder="Email"]');
        this.inlineFormCheckbox = page.$('.status-basic:nth-child(3) .custom-checkbox');
        this.inlineFormSubmit = page.$('.status-primary:nth-child(4)');
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

    async fillInlineName(user, inlineFormName) {
        await this.page.waitForSelector(inlineFormName);
        await this.page.click(inlineFormName);
        await this.page.fill(inlineFormName, user.firstname);
    };

    async fillInlineEmail(user, inlineFormEmail) {
        await this.page.waitForSelector(inlineFormEmail);
        await this.page.click(inlineFormEmail);
        await this.page.fill(inlineFormEmail, user.mail);
    };

    async fillInlineCheckbox(user, inlineFormCheckbox) {
        await this.page.click(inlineFormCheckbox)
    };















}
// переписать локаторы, посмотреть составные, get by role
