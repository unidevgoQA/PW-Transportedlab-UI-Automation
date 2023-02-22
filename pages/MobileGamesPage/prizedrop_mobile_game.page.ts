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
         async verifyUserNameInputFieldTitle(){
              const ele = this.page.locator("//label[text()='Username']")
              expect(ele).toBeVisible()
       }
         async selecthomepage(){
                await this.page.locator('//p[text()="HOME"]//parent::button').dblclick({button:'left',delay:1000})
         }
         async selecthowtoplaypage(){
            await this.page.locator('//p[text()="HOW TO PLAY"]//parent::button').dblclick({button:'left',delay:1000})
     }
      async selectrulespage(){
            await this.page.locator('//p[text()="RULES"]//parent::button').dblclick({button:'left',delay:1000})
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
              await expect.soft(ele).toHaveCSS("color","rgba(189, 179, 229, 0.95)")
        }
        async checkMainColor(){
              const ele = this.page.frameLocator('iframe').locator('//div//img//parent::div')
              await expect.soft(ele).toHaveCSS("background-color","rgba(84, 161, 220, 0.95)")
        }
        async checkButtoncolor(){
              const ele = this.page.frameLocator('iframe').locator('//button[text()="START"]')
              await expect.soft(ele).toHaveCSS("background-color","rgb(204, 56, 147)")
        }
        async check_Accent_color(){
              const ele = this.page.frameLocator('iframe').locator('//div//img//parent::div')
              await expect.soft(ele).toHaveCSS("accent-color","rgb(189, 189, 9)")
        }
        //start button here
        async click_start(){
              await this.page.frameLocator('iframe').locator('//button[text()="START"]').click()
        }
        //Image validations here
        async wait_for_elements_to_load() {
              await this.page.waitForLoadState('networkidle',{timeout:3000})
        }
        async wait_for_uploaded_frame_to_load() {
            await this.page.waitForLoadState('networkidle')
      }
        async wait_for_image(){
            await this.page.waitForSelector('//div//img[@class="image-background"]',{state:'visible'})
        }
        async screenshot_matcher_fullscreen_logo(){
              await expect.soft(this.page).toHaveScreenshot('fullscreen_logo_test_screenshot.png',{animations:'allow',maxDiffPixelRatio:0.01})
        }
        async screenshot_matcher_game_title_image(){
              await expect.soft(this.page).toHaveScreenshot('game_title_test_screenshot.png',{animations:'allow',maxDiffPixelRatio:0.01})
        }
        async screenshot_matcher_frame_image(){
              await expect.soft(this.page).toHaveScreenshot('frame_image_test_screenshot.png',{animations:'allow',maxDiffPixelRatio:0.01})
        }
        async screenshot_matcher_sponsor_image(){
              await expect.soft(this.page).toHaveScreenshot('sponsor_image_test_screenshot.png',{animations:'allow',maxDiffPixelRatio:0.02})
        }
        async screenshot_matcher_team_logo(){
              await expect.soft(this.page).toHaveScreenshot('Team_logo_test_screenshot.png',{animations:'allow',maxDiffPixelRatio:0.04})
        }
        async screenshot_matcher_loading_image(){
              await expect.soft(this.page).toHaveScreenshot('loading_image_test_screenshot.png',{animations:'allow',maxDiffPixelRatio:0.05})
        }
        async screenshot_matcher_how_to_play_image(){
            await expect.soft(this.page).toHaveScreenshot('How_to_play_image_test_screenshot.png',{animations:'allow',maxDiffPixelRatio:0.01})
      }
      async screenshot_matcher_marketing_message(){
            await expect.soft(this.page).toHaveScreenshot('marketing_message_test_screenshot.png',{animations:'allow',maxDiffPixelRatio:0.01})
      }
        async video_checker_background_video(){
            await this.page.waitForLoadState('networkidle',{timeout:3000})
            const video_ele = this.page.frameLocator('//iframe').locator('//div[@id="app"]//video[@autoplay="true"]//source[@type="video/mp4"]')
            await expect(video_ele).toHaveAttribute('type','video/mp4')
            await expect(video_ele).toHaveCSS('box-sizing','content-box')
        }
        async video_checker_how_to_play_video(){
            // const video_ele = this.page.locator('//video[@autoplay="true"]//source[@type="video/mp4"]')
            await this.page.waitForLoadState('networkidle',{timeout:3000})
            await this.page.waitForSelector('//video[@autoplay="true"]//source[@type="video/mp4"]',{state:'attached'})
            // await expect(video_ele).toBeVisible({timeout:40000})
      }
        async video_checker_rules_video(){
            const video_ele = this.page.locator('//div//video')
            await this.page.waitForSelector('//div[@id="app"]//div//div//video',{state:'attached'})
            await expect(video_ele).toBeEnabled()
      }
      async video_checker_splash_screen_video(){
            await this.page.waitForSelector('//div[@id="app"]//div//div//video',{state:'detached'})
      }
        async screenshot_matcher_rules_image(){
            await expect.soft(this.page).toHaveScreenshot('rules_image_test_screenshot.png',{animations:'allow',maxDiffPixelRatio:0.07})
      }
      async screenshot_matcher_splash_screen(){
            await expect.soft(this.page).toHaveScreenshot('splash_screen_image_test_screenshot.png',{animations:'allow',maxDiffPixelRatio:0.07})
      }
      async message_checker(text:string){
            const text_ele = this.page.frameLocator('iframe').locator(`//p[text()="${text}"]`)
            await expect(text_ele).toBeVisible()
      }
      async screenshot_matcher_font(){
            await expect.soft(this.page).toHaveScreenshot('upload_font_test_screenshot.png',{animations:'allow',maxDiffPixelRatio:0.04})
      }
      //check howtoplay page first
      async check_how_to_play_page_at_entry(){
            const ele = this.page.frameLocator('//iframe').locator('//p[text()="HOW TO PLAY"]//parent::button')
            await expect(ele).toHaveAttribute('aria-pressed','true')
      }
    }