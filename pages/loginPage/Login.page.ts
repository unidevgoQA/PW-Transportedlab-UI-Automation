import { expect, Page } from "@playwright/test";
import BaseFunctions from "@base-function/baseFunctions"
    export default class LoginPage {
        private base: BaseFunctions;
        constructor(private page: Page
        ) {
            this.base = new BaseFunctions(page);
        }


    private loginPageElements = {
        cueLogo: "//div[@class='MuiBox-root css-uycfjs']",
        signInText: "//h1[text()='Sign in']",
        signInTitleText: "//p[text()='Sign in and start managing your Games!']",
        idLabelText: "//label[text()='Id']",
        secretLabelText: "//label[text()='Secret']",
        eyeBtn: "(//button[@type='button'])[1]",
        ID: "input[type='text']",
        secret: "input[type='password']",
        logoutLink: "//button[text()='Logout' and @role='menuitem']",
        EmailField: "input[type='text']"
    }

    async login(username: string, password: string) {
        await this.enterEmail(username);
        await this.enterLoginPassword(password);
        await this.clickLoginBtn();

    }

    async loginNegative(invalidusername: string, invalidpassword: string) {

        await this.enterEmail(invalidusername);
        await this.enterLoginPassword(invalidpassword);
        await this.clickLoginBtn();

    }

    async enterEmail(emailaddress: string) {
        await this.page.locator("input[type='text']")
            .type(emailaddress);
    }

    async enterLoginPassword(password: string) {
        await this.page.locator("input[type='password']")
            .type(password);
    }

    async clickLogoutBtn() {
        await this.page.locator("//p[text()='Logout']")
            .click()
    }

    async shouldBeshowInvalidCredentials() {
        const ele = this.page.locator("text=Invalid credentials")
        expect(ele).toContainText("Invalid credentials")
    }

    async shouldShowUserNameIsNotEmpty() {
        const ele = this.page.locator(`//p[text()='"username" is not allowed to be empty']`)
        expect(ele).toContainText(`"username" is not allowed to be empty`)
    }


    async clickInvalidCredantialsWindowOkBtn() {

        const ele = this.page.locator("text=Ok")
        expect(ele).toContainText("Ok")
        await ele.click()
    }



    async clickLoginBtn() {
        await this.page.waitForTimeout(3000)
        await this.page.click("button:has-text('Login')")

    }


    async verifyCueLogoIsVisible() {
        await expect(this.page.locator(this.loginPageElements.cueLogo))
            .toBeVisible();
    }

    async verifySigninTextIsVisible() {
        await expect(this.page.locator(this.loginPageElements.signInText))
            .toBeVisible();
    }


    async verifySigninPageTitleTextIsVisible() {
        await expect(this.page.locator(this.loginPageElements.signInTitleText))
            .toBeVisible();
    }

    async verifyIdLabelIsVisible() {
        await expect(this.page.locator(this.loginPageElements.idLabelText))
            .toBeVisible();
    }

    async verifySecretLabelIsVisible() {
        await expect(this.page.locator(this.loginPageElements.secretLabelText))
            .toBeVisible();
    }

    async clickEyeBtn() {        
        await this.base.waitAndClick(this.loginPageElements.eyeBtn)
    }
    
    async inputID(name: string) {
        const ele = this.page.locator(this.loginPageElements.secret)
        if (ele != null)
            await ele.fill(name);
        else throw new Error("Email Field Is Not Visible")
  
    }

}