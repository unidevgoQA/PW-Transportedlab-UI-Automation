import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class triviaMobilePage {
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
       async GoToforOutpurScreenLink(URL : string){
              //console.log(URL)
              await this.page.goto(URL)
              await this.page.waitForTimeout(3000)
         }
       async openGameusingQRCode(){
          //await this.page.locator("/").click()
          const [page1] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.page.frameLocator('iframe').locator("//div[@id='qr-content']//a[1]").click()
    ]);

       return page1;
       }

       async verifyFontAppliedSuccessfullyInMobileScreen(){
              expect.soft(await this.page.screenshot({
                    fullPage: true
                })).toMatchSnapshot("Font-Uploaded-UI.png")
       }
       async verifyGameTitleLogoAppliedSuccessfullyInMobileScreen(){
              expect(await this.page.screenshot({
                    fullPage: true
                })).toMatchSnapshot("Game_Title_logo.png")
       }
       async verifySponsorLogoAppliedSuccessfullyInMobileScreen(){
              expect(await this.page.screenshot({
                    fullPage: true
                })).toMatchSnapshot("Sponsor_logo.png")
       }
       async verifyTeamLogoAppliedSuccessfullyInMobileScreen(){
              expect(await this.page.screenshot({
                    fullPage: true
                })).toMatchSnapshot("Team_Logo.png")
       }
       async clickHomeBtn(){
              const ele = await this.page.locator("//button[@value='home']//div[1]").isVisible()
              if(ele == true){
                     await this.page.locator("//button[@value='home']//div[1]").click({force:true})
              }
              else throw new Error("Home button is not visible")
             // await this.page.waitForLoadState("networkidle")
              await this.page.waitForTimeout(3000)
       }
       async verifyBackgroundcolor(){
              expect(await this.page.screenshot({
                     fullPage: true
                 })).toMatchSnapshot("Background_color.png")
              //const ele = this.page.frameLocator('iframe').locator('//div[@class="MuiBox-root css-vfsi4s"]')
              // const color = await ele.evaluate((ele) =>{
              //        return window.getComputedStyle(ele).getPropertyValue("background-")
              // })
              //expect(color).toBe("rgb(28,130,0)")
              //await expect.soft(ele).toHaveCSS("background","rgb(16, 10, 124)");
        }
        async verifyGeneralButtonTextcolor(){
              const ele = this.page.frameLocator('iframe').locator("//div[text()='Time Remaining']")
              // const color = await ele.evaluate((ele) =>{
              //        return window.getComputedStyle(ele).getPropertyValue("background-")
              // })
              //expect(color).toBe("rgb(28,130,0)")
              await expect.soft(ele).toHaveCSS("color","rgb(16, 10, 124)")
              //button[contains(@class,'MuiButtonBase-root MuiButton-root')]
        }
        async verifyButtonBackgroundcolor(){
              const ele = this.page.frameLocator('iframe').locator("//button[contains(@class,'MuiButtonBase-root MuiButton-root')]")
              // const color = await ele.evaluate((ele) =>{
              //        return window.getComputedStyle(ele).getPropertyValue("background-")//button[contains(@class,'MuiButtonBase-root MuiButton-root')]
              // })
              //expect(color).toBe("rgb(28,130,0)")
              await expect.soft(ele).toHaveCSS("background-color","rgb(16, 10, 124)")
              
        }
        async verifyButtonBackgroundColor(){
              const ele = await this.page.frameLocator('iframe').locator("//button[contains(@class,'MuiButtonBase-root MuiButton-root')]")
              await expect.soft(ele).toHaveScreenshot('Button_Background_screenshot.png',{animations:'allow',maxDiffPixelRatio:0.01})
       }
       async verifyQuestionTextColor(){
              const ele =  this.page.frameLocator('iframe').locator('//div[@class="MuiBox-root css-vyy8gz"]')
              await expect.soft(ele).toHaveCSS("color","rgb(16, 10, 124)")
              
       }
       async verifyQuestionBackgroundColor(){
              const ele =  this.page.frameLocator('iframe').locator("css-101u4pc")
              await expect.soft(ele).toHaveCSS("background","rgb(16, 10, 124)")
              
       }
    }