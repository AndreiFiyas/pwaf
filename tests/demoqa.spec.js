// // @ts-check
// const { test, expect } = require('@playwright/test');
// const { chromium } = require('playwright');
// const { formPage } = require('../helpers/formPage');
// import BuildUser from '../helpers/user_builder';
// import { allure } from "allure-playwright";
//
//
// test ('Submit only required fields', async ({page}) => {
//     const form = new formPage(page);
//     const url = '/automation-practice-form';
//     const user = new BuildUser().addFirstName().addEmail().addPassword().addLastName().addPhoneNumber().generate();
//     //Fill required field
//     await form.navigateToFormPage(url);
//     await form.fillFirstName(user);
//     await form.fillLastName(user);
//     await form.fillPhoneNumber(user);
//     await form.fillGender();
//     await form.getSubmit();
//     const confirmation = await form.confirmationText();
//     expect(confirmation).toBe('Thanks for submitting the form');
// });
//
// test ('Submit all fields', async ({page}) => {
//     //Navigate to demoqa
//     const form = new formPage(page);
//     const url = '/automation-practice-form';
//     const user = new BuildUser().addFirstName().addEmail().addPassword().addLastName().addPhoneNumber().addBirthDate().generate();
//     //Fill required field
//     await form.navigateToFormPage(url);
//     await form.fillFirstName(user);
//     await form.fillLastName(user);
//     await form.fillPhoneNumber(user);
//     await form.fillGender();
//     await form.fillHobbies();
//     await form.fillStates();
//     await form.fillCities();
//     await form.birthDate(user);
//     await form.fillEmail(user);
//     await form.getSubmit();
//     const confirmation = await form.confirmationText();
//     expect(confirmation).toBe('Thanks for submitting the form');
// })