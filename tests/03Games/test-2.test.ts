import test, { expect } from "@fixtures/basePages";
import { devices, chromium,BrowserContext } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'

test("arcade settings related tests", async ({ MainMenu,prizeDropPage, arcadePage,menuPage, loginPage },testInfo) => {

    const browser = await chromium.launch({ headless: false });
    const context = await browser.newContext({ ...devices["Pixel 5"], permissions: ["camera"] });
    const page = await context.newPage();
    
    await page.goto("/admin/#/sign-in");
    await page.fill("input[type='text']", "qa-1")
    await page.fill("input[type='password']", "mFkTylCDNC")

    await Promise.all([
        page.waitForNavigation(),
        page.click("button:has-text('Login')")
])

// await prizeDropPage.clickPrizeDropSection()

//click Mobile Link Btn
await prizeDropPage.clickMobileLinkBtn()

                // console.log('From clipboard: ' + text);
                await page.frameLocator('iframe').locator("//button[text()='Open Link']").click({force:true})

                await Promise.all([
                    page.waitForNavigation(),
                    
            ])
   
})

