import test, { expect } from "@fixtures/basePages"
import * as data from "@testData/login.cred.json";
import BaseFunctions from "base-function/baseFunctions";


test("TLL001-01 | Verify login with valid credentials", async ({ loginPage, MainMenu, page, browser }) => {





        // const context = await browser.newContext();
        // // start tracing
        // await context.tracing.start(
        //     {
        //         screenshots: true, snapshots: true
        //     }
        // );
        // const page = await context.newPage();


        await page.goto('/admin/#/sign-in')

        await page.waitForTimeout(5000)
        //wait for login button
        await page.waitForSelector("button[type='button']");

        //verify the full login page screen
        // expect(await page.screenshot({
        //         fullPage: true
        //     })).toMatchSnapshot("login-page-UI.png")

        //Login with valid credentials 
        await loginPage.login(data.username, data.password)

        const title = await page.title();
        expect(title).toBe('DXP Admin')

        //click Home Avater
        await MainMenu.clickHomeAvater()

        //click Logout Btn
        await loginPage.clickLogoutBtn()

        await page.waitForTimeout(5000)



        // await context.tracing.stop({ path: 'trace0.zip' });






})
test("TLL001-02 | Verify login with invalid credentials", async ({ loginPage, MainMenu, page, browser }) => {




        await page.goto('/admin/#/sign-in')




        // //Login with invalid credentials 
        // await loginPage.loginNegative("inavlidLogin", "InvalidPassword");

        await page.fill("input[type='text']", "invalidName")

        await page.fill("input[type='password']", "invalidPassword")

        await page.click('button:has-text("Login")')


        await page.waitForTimeout(3000)

        // should Be show Invalid Credentials window
        await loginPage.shouldBeshowInvalidCredentials()

        await loginPage.clickInvalidCredantialsWindowOkBtn()

        await page.waitForTimeout(4000)







})
test("TLL001-03 | Verify login with UserName and Password", async ({ loginPage, MainMenu, page, browser }) => {



        await page.goto('/admin/#/sign-in')








        await page.click('button:has-text("Login")')


        await page.waitForTimeout(3000)

        // should Show User Name Is Not Empty
        await loginPage.shouldShowUserNameIsNotEmpty()

        await loginPage.clickInvalidCredantialsWindowOkBtn()

        await page.waitForTimeout(4000)





})

test.only("TLL001-04| Verify", async ({ loginPage, MainMenu, page, browser }) => {



        await page.goto('/admin/#/sign-in')


        await loginPage.verifyCueLogoIsVisible()
        await loginPage.verifySigninTextIsVisible()
        await loginPage.verifySigninPageTitleTextIsVisible()
        await loginPage.verifyIdLabelIsVisible()
        await loginPage.verifySecretLabelIsVisible()
        await loginPage.inputID(data.invalidusername)
        await loginPage.clickEyeBtn()














})