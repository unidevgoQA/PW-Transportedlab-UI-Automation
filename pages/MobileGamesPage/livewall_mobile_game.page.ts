import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class livewallMobilePage {
        // [x: string]: any;
        private page: Page;
        // static buffer: void;
        constructor(page: Page) {
                this.page = page;
                page.setViewportSize({width:360,height:740})
        }
        private livewall_mobile_game_elements={
              pre_live_text : '//div[@class="css-0"]'
        }
        async lookforphonenoinform(){
               const ele = this.page.locator('//label[text()="Phone number"]')
               await expect(ele).toBeVisible()
        }
        async lookforEmailinform(){
                const ele = this.page.locator('//label[text()="Email Address"]')
                await expect(ele).toBeVisible()
         }
         async lookforAgeinform(){
                const ele = this.page.locator('//label[text()="Age"]')
                await expect(ele).toBeVisible()
         }
         async lookforBirthdateinform(){
                const ele = this.page.locator('//label[text()="Birth Date"]')
                await expect(ele).toBeVisible()
         }
         async lookforZipinform(){
                const ele = this.page.locator('//label[text()="Zip / Postal Code"]')
                await expect(ele).toBeVisible()
         }
         async typephoneno(){
                await this.page.locator('//input[@name="phone"]').type('+8801568703919')
         }
         async typeemail(){
                await this.page.locator('//input[@name="email"]').type("mdmahfuzalam196@gmail.com")
         }
         async typeAge(){
                await this.page.locator('//input[@name="age"]').type('24')
         }
         async selectbirthdate(){
                await this.page.locator('//input[@name="birthDate"]').click()
                await this.page.locator('//button[@aria-label="calendar view is open, switch to year view"]').click()
                await this.page.locator("//button[text()='2000']").click()
                await this.page.locator("//button[text()='OK']").click()
         }
         async typezip(){
                await this.page.locator('//input[@name="zipCode"]').type('1217')
         }
         async clicksubmit(){
                await this.page.locator('//button[text()="Submit"]').click()
         }
         async selecthomepage(){
            await this.page.locator('//p[text()="HOME"]//parent::button').click()
         }
         async GoTo(URL : string){
            //console.log(URL)
            await this.page.goto(URL)
            await this.page.waitForTimeout(3000)
       }
       async screenshot_matcher_mobile_background(){
              await this.page.waitForTimeout(7000)
              await expect
              .soft(this.page)
              .toHaveScreenshot('mobile_background_screenshot.png',{animations:'allow',maxDiffPixelRatio:0.04,mask:[this.page.locator(this.livewall_mobile_game_elements.pre_live_text)]})
       }
    }