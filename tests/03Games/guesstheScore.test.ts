import test, { expect } from "@fixtures/basePages";
import guesstheScorePage from "@pages/guesstheScore.page";
import { devices, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
// import clipboard from 'clipboardy';
const clipboard = require("clipboardy");
var url: any;

var text: string;

test("Add New Configuration", async ({ loginPage, guesstheScorePage, page, functions }, testInfo) => {

    await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
        })

    })

    await test.step("Add new configuration", async () => {


        //click guess the score Section

        await guesstheScorePage.clickGuessTheScoreSection()
        const screenshot = await page.screenshot();
        await testInfo.attach("click guessthescore Section", {
            contentType: "image/png",
            body: screenshot
        })
        await page.waitForTimeout(3000)

        await guesstheScorePage.verifyConfigurationsText()

        await page.waitForTimeout(3000)

        await guesstheScorePage.clickAddNewConfigPlusBtn()

        await page.waitForTimeout(3000)

        await guesstheScorePage.inputConfigurationName()

        await page.waitForTimeout(3000)

        await guesstheScorePage.clickAddBtn()

        await page.waitForTimeout(3000)

    })

})
test("007PD-002 | Validate Font Upload Functionality", async ({ loginPage, guesstheScorePage, functions, page, }, testInfo) => {
    await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
        })



    })
    await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {
        
        await guesstheScorePage.clickGuessTheScoreSection()
        await guesstheScorePage.clickGameDesign()
        
        await page.waitForTimeout(4000)
        //font upload here
        await functions.fontUploadFunction()
        await guesstheScorePage.clickToUploadFont()

        await page.waitForTimeout(4000)

         //click Clear All Btn
         await guesstheScorePage.clickClearAllBtn()

         await page.waitForTimeout(4000)
    })


})

test("007PD-003 | Validate All The Color Input Functionality", async ({ loginPage, guesstheScorePage, functions, page, }, testInfo) => {
    await test.step("Login Admin And land To Home Screen", async () => {

            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })

    })
    await test.step("008TOFW-003 | Validate All The Color Input Functionality", async () => {
        await guesstheScorePage.clickGuessTheScoreSection()
        await guesstheScorePage.clickGameDesign()
        
        await page.waitForTimeout(4000)

        await guesstheScorePage.verifyBackgroundColorText()

        await page.waitForTimeout(2000)
        await guesstheScorePage.clickBackgroundColorPicker()
    })
    
})