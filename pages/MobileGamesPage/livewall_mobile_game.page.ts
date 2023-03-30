import { expect, Page } from "@playwright/test";
import { createReadStream } from 'fs'
export default class livewallMobilePage {
       // [x: string]: any;
       private page: Page;
       // static buffer: void;
       constructor(page: Page) {
              this.page = page;
              page.setViewportSize({ width: 360, height: 740 })
       }
       private livewall_mobile_game_elements = {
              pre_live_text: '//div[@class="css-10v3mbv"]'
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
              await this.page.locator('//input[@name="phone"]').type('+8801568703919')
       }
       async typeemail() {
              await this.page.locator('//input[@name="email"]').type("mdmahfuzalam196@gmail.com")
       }
       async typeAge() {
              await this.page.locator('//input[@name="age"]').type('24')
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
       async selecthomepage() {
              await this.page.locator(`(//button[contains(@class,'MuiButtonBase-root MuiToggleButton-root')])[1]`).click()
       }
       async GoTo(URL: string) {
              //console.log(URL)
              await this.page.goto(URL)
              await this.page.waitForTimeout(3000)
       }
       async screenshot_matcher_mobile_background() {
              await this.page.waitForTimeout(7000)
              await expect
                     .soft(this.page)
                     .toHaveScreenshot('mobile_background_screenshot.png', { animations: 'allow', maxDiffPixelRatio: 0.04, mask: [this.page.locator(this.livewall_mobile_game_elements.pre_live_text)] })
       }
       async video_mobile_background() {
              try {
                     await this.page.waitForTimeout(7000)
                     await expect
                            .soft(this.page.frameLocator('iframe').locator("//div[@id='app']//video"))
                            .toBeVisible()
              } catch (error) {
                     throw new Error(`Livewallpage| Mobile Home screen logo| Mobile home screenlogo mismatch found`)
              }
       }

       async screenshot_matcher_mobile_home_screen() {
              try {
                     await this.page.waitForTimeout(4000)
                     await expect
                            .soft(this.page.locator("//div[@id='app']").first())
                            .toHaveScreenshot('mobile_home_screen_logo.png', { 
                                   maxDiffPixelRatio: 0.15,
                                   mask:[
                                          this.page.frameLocator('iframe').locator("//button[@value='game']/parent::div/parent::div/parent::div"),
                                          this.page.frameLocator('iframe').locator("//button[@value='game']/div")
                                   ] 
                            })
              } catch (error) {
                     throw new Error(`Livewallpage| Mobile Home screen logo| Mobile home screenlogo mismatch found` +error)
              }
       }

       // async fake_video(){
       //        async function createBufferFromStream(stream:any) {
       //               const chunks = [];
       //               for await (const chunk of stream) {
       //                 chunks.push(chunk);
       //               }
       //               return Buffer.concat(chunks);
       //             }

       //        const videoStream = createReadStream('./testData/videos/video.mp4');
       //        const videoBuffer = await createBufferFromStream(videoStream)

       //        // Set the input files to the pre-recorded video file
       //        await this.page.setInputFiles('/html/body/div/div/div/div/div[3]', {
       //               name: 'video.mp4',
       //               mimeType: 'video/mp4',
       //               buffer: videoBuffer,
       //             });

       // }
       async clickjoin() {
              try {
                     await this.page.frameLocator('iframe').locator("//button[text()='Join for a chance to go Live!']").click({ button: 'left' })

              } catch (error) {
                     throw new Error('Join button click failed')
              }
       }

       async screenshot_matcher_mobile_frame() {
              try {
                     await this.page.waitForTimeout(7000)
                     await expect
                            .soft(this.page)
                            .toHaveScreenshot('Frame_check.png', { maxDiffPixelRatio: 0.3 })
              } catch (error) {
                     throw new Error(`Livewallpage| Mobile Home screen logo| Mobile home screenlogo mismatch found`)
              }
       }

       async test_for_pre_live_test(value: string) {
              const ele = this.page.frameLocator('//iframe').locator(`//p[text()="${value}"]`)
              try {
                     await expect.soft(ele).toBeVisible({ timeout: 30000 })
              } catch (error) {
                     throw new Error(" Prelive Test visiblity failed " + error)
              }
       }
       async test_for_post_live_test(value: string) {
              const ele = this.page.frameLocator('//iframe').locator(`//h1[text()="${value}"]`)
              try {
                     await expect.soft(ele).toBeVisible({ timeout: 30000 })
              } catch (error) {
                     throw new Error(" Post live Test visiblity failed " + error)
              }
       }
       async test_for_standby_message(value: string) {
              const ele = this.page.frameLocator('//iframe').locator(`//h1[@style="text-align:left;"]`)
              try {
                     await expect.soft(ele).toBeVisible()
                     await expect.soft(ele).toContainText(value)
              } catch (error) {
                     throw new Error(" standby visiblity failed " + error)
              }
       }

       async check_progress_bar_hidden() {
              try {
                     await this.page.waitForTimeout(5000)
                     const ele = this.page.frameLocator('//iframe').locator('//span[@role="progressbar"]')
                     await expect(ele).toBeHidden()
              } catch (error) {
                     throw new Error('Live count down timer toggle is not working' + error)
              }
       }
       async check_hours(value: string) {
              try {
                     await this.page.waitForLoadState('networkidle')
                     const ele = this.page.frameLocator('//iframe').locator('//span[@role="progressbar"]//following-sibling::p')
                     await expect.soft(ele).toContainText(value)
              } catch (error) {
                     throw new Error('Hours input reflection on mobile is not correct' + error)
              }
       }
       async check_minutes(value: string) {
              try {
                     await this.page.waitForLoadState('networkidle')
                     const ele = this.page.frameLocator('//iframe').locator('//span[@role="progressbar"]//following-sibling::p')
                     await expect.soft(ele).toContainText(value)
              } catch (error) {
                     throw new Error('Minutes input reflection on mobile is not correct' + error)
              }
       }
       async check_seconds(value: string) {
              try {
                     await this.page.waitForLoadState('networkidle')
                     const ele = this.page.frameLocator('//iframe').locator('//span[@role="progressbar"]//following-sibling::p')
                     await expect.soft(ele).toContainText(value,{timeout:30000})
              } catch (error) {
                     throw new Error('seconds input reflection on mobile is not correct' + error)
              }
       }

       async check_flip_button_hidden() {
              try {
                     const ele = this.page.frameLocator('//iframe').locator('//div[@id="video2"]//following-sibling::button')
                     await expect.soft(ele).toBeHidden()
              } catch (error) {
                     throw new Error('Camera flip reflection failed' + error)
              }
       }

       async check_flip_button_visible() {
              try {
                     const ele = this.page.frameLocator('//iframe').locator('//div[@id="video2"]//following-sibling::button')
                     await expect.soft(ele).toBeVisible()
              } catch (error) {
                     throw new Error('Camera flip reflection failed' + error)
              }
       }

       async checkfont(){
              try {
                     await this.page.waitForTimeout(4000)
                     await expect
                            .soft(this.page.locator("//div[@id='app']"))
                            .toHaveScreenshot('Font_check.png', { 
                                   maxDiffPixelRatio: 0.15,
                                   mask:[
                                          this.page.frameLocator('iframe').locator("//button[@value='game']/parent::div/parent::div/parent::div"),
                                          this.page.frameLocator('iframe').locator("//button[@value='game']/div")
                                   ] 
                            })
              } catch (error) {
                     throw new Error(`Livewallpage| Mobile Home screen logo| Mobile home screenlogo mismatch found`)
              }
       } 
}
