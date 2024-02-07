// // @ts-check
// const { test, expect } = require('@playwright/test');
// const { chromium } = require('playwright');
// import BuildUser from '../helpers/user_builder';
//
//
// test ('Login form', async () => {
//     const browser = await chromium.launch();
//     const page = await browser.newPage();
//     await page.goto('http://localhost:4200');
//     await page.waitForLoadState();
//     await page.click('#input-email');
//     await page.fill('#input-email', "asds@mfsd.ru");
//     await page.click('#input-password');
//     await page.fill('#input-password', "asdsa");
//     await page.click('.custom-checkbox');
//     await page.waitForSelector('.appearance-filled');
//     await page.click('.appearance-filled');
//     await page.waitForSelector('.col-xxxl-3:nth-child(3) > ngx-status-card .details');
//     const currentUrl = page.url();
//     expect(currentUrl).toBe('http://localhost:4200/pages/iot-dashboard');
// });

//http://localhost:4200/pages/forms/layouts написать сьют