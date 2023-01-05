import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class guesstheScoreMobilePage {
        // [x: string]: any;

        private page: Page;
        // static buffer: void;
        constructor(page: Page) {
                this.page = page;
                page.setViewportSize({width:360,height:740})
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
                await this.page.locator('//input[@name="email"]').type("mahfuzalam196@gmail.com")
         }
         async typeAge(){
                await this.page.locator('//input[@name="age"]').type('26')
                
         }
         async selectbirthdate(){
                await this.page.locator('//input[@name="birthDate"]').click()
                await this.page.locator('//button[@aria-label="calendar view is open, switch to year view"]').click()
                await this.page.locator("//button[text()='1996']").click()
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
       //   async checkTextcolor(){
       //        const ele = this.page.frameLocator('iframe').locator("//button[text()='Today's Line Up']")
       //        const color = await ele.evaluate((ele) =>{
       //               return window.getComputedStyle(ele).getPropertyValue("color")
       //        })
       //        expect(color).toBe("rgb(28,130,0)")
       //  }
       //  async checkTextcolor(){
       //        const ele = this.page.frameLocator('iframe').locator("//button[text()='Today's Line Up']")
       //        //following lines give unexpected behaviour, please dont use that one
       //        // const color = await ele.evaluate((ele) =>{
       //        //      return window.getComputedStyle(ele).getPropertyValue("color")
       //        //  })
       //       // expect(color).toBe("rgb(28, 130, 0)")
       //        await expect(ele).toHaveCSS("color","rgb(241, 196, 15)")
       //  }
        async verifyTextColor(){
              const ele = this.page.frameLocator('iframe').locator("(//button[@type='button'])[1]")
                            await expect(ele).toHaveCSS("color","rgb(87, 124, 152)")
              }
        async checkBackgroundcolor(){
                     const ele = this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-t1094a']")
                     // const color = await ele.evaluate((ele) =>{
                     //        return window.getComputedStyle(ele).getPropertyValue("background-color")
                     // })
                     //expect(color).toBe("rgb(28,130,0)")
                     await expect(ele).toHaveCSS("background","rgb(241, 196, 15)")
               }
               async checkswatchesColor(){
                     const ele = this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-t1094a']")

                     await expect(ele).toHaveCSS("background-color","rgb(241, 196, 15)")

               }
        
    }