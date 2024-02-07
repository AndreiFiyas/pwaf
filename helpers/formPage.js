const { expect } = require('@playwright/test');
const BuildUser = require("./user_builder");

export class formPage {
    constructor(page) {
        this.page = page;
        this.locators = {
            firstName: '#firstName',
            lastName: '#lastName',
            userNumber: '#userNumber',
            genderRadio: '.custom-radio:nth-child(1) > .custom-control-label',
            genderRadio2: '#genterWrapper > div.col-md-9.col-sm-12',
            hobbiesBox: '.custom-checkbox:nth-child(3) > .custom-control-label',
            stateDropdown: '#state',
            stateValue: '#react-select-3-option-3',
            cityDropdown: '#city',
            cityValue: '#react-select-4-option-1',
            dateOfBirth: '#dateOfBirthInput',
            userEmail: '#userEmail',
            confirmationText: '#example-modal-sizes-title-lg',
            submitButton: '#submit'
        };

    }
    async navigateToFormPage(url) {
        await this.page.goto(url);
        await this.page.setViewportSize({ width: 2560, height: 1440 });
    }

    async fillFirstName(user) {
        const { firstName } = this.locators;
        await this.page.waitForSelector(firstName);
        await this.page.click(firstName);
        await this.page.fill(firstName, user.firstname);
    };

    async fillLastName(user) {
        const { lastName } = this.locators;
        await this.page.click(lastName);
        await this.page.fill(lastName, user.lastname);
    };

    async fillPhoneNumber(user) {
        const { userNumber } = this.locators;
        await this.page.click(userNumber);
        await this.page.fill(userNumber, user.phoneNumber);
    };

    async fillGender() {
        const { genderRadio } = this.locators;
        await this.page.click(genderRadio);
    };

    async fillHobbies() {
        const { hobbiesBox } = this.locators;
        await this.page.locator(hobbiesBox).click();
    };

    async fillStates() {
        const { stateDropdown } = this.locators;
        const { stateValue } = this.locators;
        await this.page.locator(stateDropdown).click();
        await this.page.locator(stateValue).click();
    };

    async fillCities() {
        const { cityDropdown } = this.locators;
        const { cityValue } = this.locators;
        await this.page.locator(cityDropdown).click();
        await this.page.locator(cityValue).click();
    };

    async birthDate(user) {
        const { dateOfBirth } = this.locators;
        await this.page.locator(dateOfBirth).click();
        await this.page.locator(dateOfBirth).click();
        await this.page.fill(dateOfBirth, user.birthNumber);
        await this.page.keyboard.press('Enter');
    };


    async fillEmail(user) {
        const { userEmail } = this.locators;
        await this.page.locator(userEmail).click();
        await this.page.locator(userEmail).fill(user.mail);
    };


    async confirmationText() {
        const { confirmationText } = this.locators;
        await this.page.waitForSelector(confirmationText);
        return await this.page.locator(confirmationText).innerText();
    };

    async getSubmit() {
        const { submitButton } = this.locators;
        await this.page.click(submitButton);
    };

    // // Заполнение датапикера
    // const dateOfBirthInput = await page.$('#dateOfBirthInput');
    // await dateOfBirthInput.click({ clickCount: 3 }); // Очистить поле ввода даты
    // await dateOfBirthInput.type('1990-01-01'); // Задать дату (замените на нужную)
    //
    // // Выбор радиокнопки Gender
    // const genderRadioButton = await page.$$('input[name="gender"]');
    // await genderRadioButton[1].click(); // Выбор опции "Female" (индекс 1 - замените на нужный)
}