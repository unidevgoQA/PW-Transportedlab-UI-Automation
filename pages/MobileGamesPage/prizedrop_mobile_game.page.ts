import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class prizeDropMobilePage {
        // [x: string]: any;

        private page: Page;
        // static buffer: void;
        constructor(page: Page) {
                this.page = page;
                this.page.setViewportSize({width:360,height:658})
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
                await this.page.locator('//input[@name="phone"]').type('+8801851703506')
         }
         async typeemail(){
                await this.page.locator('//input[@name="email"]').type("AutomationTest@test.com")
         }
         async typeAge(){
                await this.page.locator('//input[@name="age"]').type('23')
                
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

         async GoTo(URL: string){
              await this.page.goto(URL)
              await this.page.waitForTimeout(3000)
         }

         // color related functions from here
        async checkTextcolor(){
              const ele = this.page.frameLocator('iframe').locator('//button[text()="START"]')
              //following lines give unexpected behaviour, please dont use that one
              // const color = await ele.evaluate((ele) =>{
              //        return window.getComputedStyle(ele).getPropertyValue("color")
              // })
              // expect(color).toBe("rgb(189, 179, 229)")
              await expect.soft(ele).toHaveCSS("color","rgb(189, 179, 229)")
        }

        async checkMainColor(){
              const ele = this.page.frameLocator('iframe').locator('//div//img//parent::div')
              await expect.soft(ele).toHaveCSS("background-color","rgb(84, 161, 220)")
        }

        async checkButtoncolor(){
              const ele = this.page.frameLocator('iframe').locator('//button[text()="START"]')
              await expect.soft(ele).toHaveCSS("background-color","rgb(204, 56, 147)")
        }

        async check_Accent_color(){
              const ele = this.page.frameLocator('iframe').locator('//div//img//parent::div')
              await expect.soft(ele).toHaveCSS("accent-color","rgb(189, 189, 9)")
        }

        


    }