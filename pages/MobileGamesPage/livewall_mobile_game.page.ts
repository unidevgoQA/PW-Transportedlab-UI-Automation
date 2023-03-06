import { expect, Page } from "@playwright/test";
import { createReadStream } from 'fs'
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
       async video_mobile_background(){
              try {
                     await this.page.waitForTimeout(7000)
                     await expect
                     .soft(this.page.frameLocator('iframe').locator("//div[@id='app']//video"))
                     .toBeVisible() 
                   } catch (error) {
                     throw new Error(`Livewallpage| Mobile Home screen logo| Mobile home screenlogo mismatch found`)
                   }
       }

       async screenshot_matcher_mobile_home_screen(){
             try {
               await this.page.waitForTimeout(7000)
               await expect
               .soft(this.page.frameLocator('iframe').locator("//div[@id='app']//img"))
               .toHaveScreenshot('FullScreen.png',{maxDiffPixelRatio:0.1})    
             } catch (error) {
               throw new Error(`Livewallpage| Mobile Home screen logo| Mobile home screenlogo mismatch found`)
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
       async clickjoin(){
            try {
                await this.page.frameLocator('iframe').locator("//button[text()='Join for a chance to go Live!']").click({button:'left'})
         
            } catch (error) {
              throw new Error('Join button click failed')
            }}

       async screenshot_matcher_mobile_frame(){
              try {
                     await this.page.waitForTimeout(7000)
                     await expect
                     .soft(this.page)
                     .toHaveScreenshot('Frame_check.png',{maxDiffPixelRatio:0.3})    
                   } catch (error) {
                     throw new Error(`Livewallpage| Mobile Home screen logo| Mobile home screenlogo mismatch found`)
                   }
       }
      
    }