import * as data from "@testData/login.cred.json"
import test, { expect } from "@fixtures/basePages";
import { Page, BrowserContext } from "@playwright/test";

test.describe("Suite demo", () => {

     let page: Page;
     let context: BrowserContext;
    test.beforeAll(async ({ browser }) => {
        context = await browser.newContext();
        // await page.goto("https://garrett.testingdxp.com//admin/#/sign-in");
        page = await context.newPage();
    })

    test.beforeEach(async () => {
        await page.goto("https://garrett.testingdxp.com//admin/#/sign-in")
    })
    // test.beforeEach(() => { })
    test("open letcode and verify title", async () => {
        const title = await page.title();
        expect(title).toBe("DXP Admin");
    });

    test("open letcode and login", async ({loginPage, liveWallPage}) => {

        // await loginPage.login(data.username, data.password)
        // const title = await page.title();
        // expect(title).toBe("LetCode with Koushik");
        // await Promise.all([
        //     page.waitForNavigation(/*{ url: 'https://letcode.in/signin' }*/),
        //     page.click('text=/.*Log in.*/')
        // ]);
        // await page.click("input[type='text']");
        await page.fill("input[type='text']", 'garrett');
        await page.fill("input[type='password']", 'LFQIISIc');
        await Promise.all([
            page.waitForNavigation(/*{ url: 'https://letcode.in/' }*/),
            page.click("button:has-text('Login')")
        ]);

        await page.waitForTimeout(7000)
                        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()   


        expect(page.url()).toBe("https://garrett.testingdxp.com//admin/#/home");
    });
})