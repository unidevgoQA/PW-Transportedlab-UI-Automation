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
               const ele =  this.page.locator('//label[text()="Phone number"]')
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
                await this.page.waitForLoadState("networkidle")
         }

         async verifyFontAppliedSuccessfullyInMobileScreen(){
            expect(await this.page.screenshot({
                  fullPage: true
              })).toMatchSnapshot("Font-Uploaded-UI.png")
     }


         

         async clcikHomePageInMobileScreen(){
            const ele = await this.page.locator("(//button[contains(@class,'MuiButtonBase-root MuiToggleButton-root')])[1]")
            await ele.click({force:true})
            await this.page.waitForLoadState("networkidle")
            await this.page.waitForTimeout(3000)

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
        async checkTextcolor(){
              const ele = this.page.frameLocator('iframe').locator("//button[text()='Today's Line Up']")
              //following lines give unexpected behaviour, please dont use that one
              // const color = await ele.evaluate((ele) =>{
              //      return window.getComputedStyle(ele).getPropertyValue("color")
              //  })
             // expect(color).toBe("rgb(28, 130, 0)")
              await expect(ele).toHaveCSS("color","rgb(87, 124, 152)")
        }
        async verifyTextColor(){
              const ele = this.page.frameLocator('iframe').locator("(//button[@type='button'])[1]")
                            await expect(ele).toHaveCSS("color","rgb(87, 124, 152)")
               }
        async checkBackgroundcolor(){
                     const ele = this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-t1094a']")
                     // const color = await ele.evaluate((ele) =>{
                     //        return window.getComputedStyle(ele).getPropertyValue("background-")
                     // })
                     //expect(color).toBe("rgb(28,130,0)")
                     await expect(ele).toHaveCSS("color","rgb(87, 124, 152)")
               }
               async checkswatchesColor(){
                     const ele = this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-1ig8opu']//div)[1]")

                     await expect(ele).toHaveCSS("background","rgb(255, 0, 0)")

               }

               async verifyBackgroundColorUpdatedSuccessfully(){
                  expect(await this.page.screenshot({
                        fullPage: true
                    })).toMatchSnapshot("BackGround-Color-Uploaded-UI.png")

            }

            async verifyWoodColorUpdatedSuccessfully(){
                  expect(await this.page.screenshot({
                        fullPage: true
                    })).toMatchSnapshot("Wood-Color-Uploaded-UI.png")

            }
               async checksbuttonColor(){
                     const ele = this.page.frameLocator('iframe').locator("(//button[@type='button'])[1]")

                     await expect(ele).toHaveCSS("color","rgb(87, 124, 152)")

               }
               async checkswoodColor(){
                     const ele = this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-89f2e5']")

                     await expect(ele).toHaveCSS("color","rgb(87, 124, 152)")

               }
               async clickscreenshoot(){
                     const ele = await this.page.frameLocator('iframe').locator("//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]")
                    this.page.screenshot({ path: 'testData/before.png'})
                    

               }
               async waitforelementLoad(){
                     await this.page.waitForLoadState("load")
               }
               async screenshot_matcher_backgroundimage(){                  
                  expect(await this.page.screenshot({
                        fullPage: true
                    })).toMatchSnapshot("Protrait-BAckground-UI.png")
               }

               async screenshot_matcher_gametitlelogo(){
                     await expect.soft(await this.page.screenshot({
                        fullPage : true
                     })).toMatchSnapshot("gametitle_logo_image_screenshot.png")
               }

               async verifyTodaysLineUpBtnText(){
                  const ele = await this.page.frameLocator('iframe').locator("(//button[contains(@class,'MuiButtonBase-root MuiButton-root')])[1]")
                  expect(ele).toContainText("Today's Line Up")
                  await this.page.waitForLoadState("networkidle")
             }

               async clickTodaysLineUpBtn(){
                    const ele =  this.page.frameLocator('iframe').locator("(//button[contains(@class,'MuiButtonBase-root MuiButton-root')])[1]")
                    await ele.click()
                    await this.page.waitForLoadState("networkidle")
               }

               async clickGameEventTestBtn(){
                  const ele =  this.page.frameLocator('iframe').locator("//div[text()='test']")
                  expect(ele).toBeVisible()
                  await ele.click()
                  await this.page.waitForLoadState("networkidle")

            }

            async inputIncorrectRiderScore(){
                  const ele =  await this.page.frameLocator('iframe').locator("//input[contains(@class,'MuiInputBase-input MuiFilledInput-input')]")
                  // expect(ele).toBeVisible()        
                  await ele.fill("20")
            }
          
            async clickRiderInputField(){
                  const ele =   this.page.frameLocator('iframe').locator("//input[contains(@class,'MuiInputBase-input MuiFilledInput-input')]")
                  // expect(ele).toBeVisible()        
                  await ele.click()
            }
            async inputCorrectRiderScore(){
                  const ele =   this.page.frameLocator('iframe').locator("//input[contains(@class,'MuiInputBase-input MuiFilledInput-input')]")
                  // expect(ele).toBeVisible()        
                  await ele.fill("20")
            }   
            async inputCloseRiderScore(){
                  const ele =  await this.page.frameLocator('iframe').locator("//input[contains(@class,'MuiInputBase-input MuiFilledInput-input')]")
                  // expect(ele).toBeVisible()        
                  await ele.fill("19")
            }  
           
            async inputFarRiderScore(){
                  const ele =  await this.page.frameLocator('iframe').locator("//input[contains(@class,'MuiInputBase-input MuiFilledInput-input')]")
                  // expect(ele).toBeVisible()        
                  await ele.fill("18")
            }  

               async clickCurrentEventBtn(){
                     
                     await this.page.frameLocator('iframe').locator('(//div[@class="MuiBox-root css-1v9r71b"])[1]').last().click()
               }
               async screenshot_matcher_sponsorlogo(){
                     await expect.soft(await this.page.screenshot({
                        fullPage : true
                     })).toMatchSnapshot("sponsor_logo_image_screenshot.png")
               }
               async screenshot_matcher_bannerimage(){
                     await expect.soft(this.page).toHaveScreenshot("banner_image_screenshot.png")
               }
               async screenshot_matcher_rider_Avatar(){
                     const ele = await this.page.frameLocator('iframe').locator("//div[contains(@class,'MuiAvatar-root MuiAvatar-square')]")
                     await expect.soft(ele).toHaveScreenshot("avatar_image_screenshot.png")
               }
               async screenshot_matcher_buttoncolor(){
                  const ele = await this.page.frameLocator('iframe').locator("(//button[contains(@class,'MuiButtonBase-root MuiButton-root')])[1]")
                  await expect.soft(ele).toHaveScreenshot("buttoncolor_image_screenshot.png")
            }
            async verifyButtonColorSuccessfullyAppliedInMobileScreen(){
                  const ele = await this.page.frameLocator('iframe').locator("(//button[@type='button'])[1]")
                  await expect.soft(ele).toHaveCSS("background-color","rgb(241, 196, 15)")
            }
               async inputuserGuess(){
                     await this.page.frameLocator('iframe').locator('(//p[@class="MuiTypography-root MuiTypography-body1 css-sev7bh"])[1]').last().type('6')
               }
               async verifyincorrectguessmessage(){
                  await this.page.waitForTimeout(1000)
                   const ele =    this.page.frameLocator('iframe').locator("//p[text()='Incorrect Guess!']")
                   expect(ele).toContainText("Incorrect Guess!")
               }
               async verifycorrectguessmessage(){
                  const ele =    this.page.frameLocator('iframe').locator("//div[text()='Correct Guess!']").last()
                  expect(ele).toContainText("Correct Guess!")
              }
              async verifycloseguessmessage(){
                  const ele =    this.page.frameLocator('iframe').locator("//div[text()='Close Guess!']").last()
                  expect(ele).toContainText("Close Guess!")
              }
              async verifyfarguessmessage(){
                  const ele =    this.page.frameLocator('iframe').locator("//div[text()='Far Guess!']").last()
                  expect(ele).toContainText("Far Guess!")
              }
              async verifyNoScoremessage(){
                  const ele =    this.page.frameLocator('iframe').locator("//div[text()='No Score!']").last()
                  expect(ele).toContainText("No Score!")
              }
               async verifyscoryhedingText(){
                     const ele =   await this.page.frameLocator('iframe').locator("//p[text()='Guess Now!']")
                   expect(ele).toContainText("Guess Now!")
               }
               async verifyingatehedingText(){
                     const ele =    this.page.frameLocator('iframe').locator("//p[text()='Get Ready']")
                   expect(ele).toContainText("Get Ready")
               }
               async verifyreriderText(){
                     
                     const ele =    this.page.frameLocator('iframe').locator("//p[text()='Watch the Ride']")
                   expect(ele).toContainText("Watch the Ride")
               }
               async verifyaddingridername(){
                  const ele =   await this.page.frameLocator('iframe').locator("//p[text()='Rider Test']").last()
                   expect(ele).toContainText("Rider Test")
               }
               async verifyEarnedPointsText(){
                  const ele =    this.page.frameLocator('iframe').locator("//p[text()='Earned Points']")
                   expect(ele).toContainText("Earned Points")
               }
               async verifyEarnedPoints(){
                  const ele =    this.page.frameLocator('iframe').locator('//p[@class="MuiTypography-root MuiTypography-body1 css-242oqg"]')
                  expect(ele).toBeVisible()
                   expect(ele).toContainText("50")
               }
               

            
    }