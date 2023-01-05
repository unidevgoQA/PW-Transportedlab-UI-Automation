import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class mobilePreviewPage {
       // [x: string]: any;

       private page: Page;
       // static buffer: void;
       constructor(page: Page) {
              this.page = page;
              page.setViewportSize({ width: 360, height: 740 })
       }

       async lookforphonenoinform() {
              const ele = this.page.locator('//label[text()="Phone number"]')
              await expect(ele).toBeVisible()
       }
       async lookforEmailinform() {
              const ele = this.page.locator('//label[text()="Email Address"]')
              await expect(ele).toBeVisible()
       }
       async lookforAgeinform() {
              const ele = this.page.locator('//label[text()="Age"]')
              await expect(ele).toBeVisible()
       }
       async lookforBirthdateinform() {
              const ele = this.page.locator('//label[text()="Birth Date"]')
              await expect(ele).toBeVisible()
       }
       async lookforZipinform() {
              const ele = this.page.locator('//label[text()="Zip / Postal Code"]')
              await expect(ele).toBeVisible()
       }

       async typephoneno() {
              await this.page.locator('//input[@name="phone"]').type('+8801851703506')
       }
       async typeemail() {
              await this.page.locator('//input[@name="email"]').type("AutomationTest@test.com")
       }
       async typeAge() {
              await this.page.locator('//input[@name="age"]').type('23')

       }
       async selectbirthdate() {
              await this.page.locator('//input[@name="birthDate"]').click()
              await this.page.locator('//button[@aria-label="calendar view is open, switch to year view"]').click()
              await this.page.locator("//button[text()='2000']").click()
              await this.page.locator("//button[text()='OK']").click()
       }

       async typezip() {
              await this.page.locator('//input[@name="zipCode"]').type('1217')
       }

       async clicksubmit() {
              await this.page.locator('//button[text()="Submit"]').click()
       }


       async clickOkBtn() {
              const ele = this.page.locator("//button[text()='Ok']")
              expect(ele).toBeVisible()
              await ele.click()
       }
       async verifyUserNameInputFieldTitle() {
              const ele = this.page.locator("//label[text()='Username']")
              expect(ele).toBeVisible()

       }

       async verifyRulesEntryIsApplyed() {
              expect(await this.page.locator("//button[@value='rules']")).toBeTruthy()
              // expect(await this.page.locator("//button[@value='rules']")).toBeChecked()

       }

       async verifyHomeEntryIsApplyed() {
              expect(await this.page.locator("//button[@value='rules']")).toBeTruthy()
              // expect(await this.page.locator("//button[@value='rules']")).toBeChecked()

       }

       async verifyHowToPlayEntryIsApplyed() {
              expect(await this.page.locator("//button[@value='howToPlay']")).toBeTruthy()

       }

       async verifyPrizeEntryIsApplyed() {
              const ele = await this.page.locator("//h3[text()='PRIZE VAULT']")
              expect(ele).toBeVisible()



       }


       async verifySecondaryColorAppliedInMobile() {

              const btn = this.page.locator("//div[@class='MuiBox-root css-1jjj9fe']");
              const color = await btn.evaluate((ele) => {
                     return window.getComputedStyle(ele).getPropertyValue("background-color")
              });
              console.log(color);
              expect(color).toBe("rgb(96, 37, 74)");



       }


       async clickPrizeBtn() {
              const btn = this.page.locator("//button[@value='prize']");
              expect(btn).toBeVisible()
              await btn.click({ force: true })



       }






       async verifyRulesPageIsSuccessfullySelected() {
              const ele = this.page.locator("//label[text()='Username']")
              expect(ele).toBeVisible()
       }


       async selecthomepage() {
              await this.page.locator('//p[text()="HOME"]//parent::button').click()
       }

       async GoTo(URL: string) {
              await this.page.goto(URL)
              await this.page.waitForTimeout(3000)
       }

       // color related functions from here
       async checkTextcolor() {
              const ele = this.page.frameLocator('iframe').locator('//button[text()="START"]')
              const color = await ele.evaluate((ele) => {
                     return window.getComputedStyle(ele).getPropertyValue("color")
              })
              expect(color).toBe("rgb(189,179,229)")
       }


}