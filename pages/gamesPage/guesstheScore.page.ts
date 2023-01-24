import { expect, Page } from "@playwright/test";
import { existsSync, lstat, readFileSync } from 'fs'
export default class guesstheScorePage {
        // [x: string]: any;

        private page: Page;
        fname: any;
        // static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }



        //=======================================================
        //▶▶Start Title Stage Section Element       


        async clickGuessTheScoreSection() {
                const locator = this.page.locator("//p[text()='Guess The Score']")
                // expect(locator).toContainText('Prize Drop')
                await locator.click({ force: true })
                // console.log("Successfully Click To Tug of War Page ")
                await this.page.waitForLoadState("networkidle")
        }

        async verifyConfigurationsText() {
                //      const ele = await this.page.frameLocator('iframe').w('text=Title Stag')
                //         await this.page.waitForSelector(ele)        

                const ele = this.page.frameLocator('iframe').locator('text=Configurations')
                await expect(ele).toContainText("Configurations")


        }
        async clickAddNewConfigPlusBtn() {

                await this.page.frameLocator('iframe').first().locator("(//h5[text()='Configurations']/following-sibling::button)[1]").click()
        }

        getRandomName() {
                return "Auto" + Date.now() + "Config"
        }


        async inputConfigurationName(name:string) {
                const ele = this.page.frameLocator('iframe').first().locator('input[type="string"]')
                await ele.fill(name)

        }

        async clickAddBtn() {
                const ele = this.page.frameLocator('iframe').first().locator("//button[text()='ADD']")
                //await expect(ele).toBeVisible()
                await ele.click()
                //expect(ele).toContainText('Value cannot be an empty')

        }

        async clickGameDesign() {
                await this.page.frameLocator('iframe').locator("//p[text()='Game Design']").last().click()
                //await this.page.waitForLoadState("networkidle")


        }

        async openfontsection() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Fonts"]//parent::div').click()
                await this.page.waitForLoadState("networkidle")
        }
        async clickToUploadFont() {
                const ele = this.page.frameLocator('.css-r99fy3').locator("(//div[@class='MuiBox-root css-vjb914']//div)[1]")
                await expect(ele).toBeVisible()
                await ele.click()
                await this.page.waitForTimeout(4000)

        }

        async waitforuploadcomplete() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//body//div[@font-list-mode="true"]')
                expect(ele).toBeVisible()
                await ele.click()
        }

        async opencolorssection() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Colors"]//parent::div')
                expect(ele).toContainText("Colors")
                await ele.click()
                await this.page.waitForLoadState("networkidle")
        }

        async clickplusbuttonswatches() {
                await this.page.frameLocator('.css-r99fy3').locator('//button[@aria-label="Add Color"]').click()
        }

        async selectColorNumberFive() {
                await this.page.frameLocator('.css-r99fy3').locator("(//li[contains(@class,'MuiListItem-root MuiListItem-gutters')])[5]").click({ force: true })
        }

        async selectColorNumberTwo() {
                await this.page.frameLocator('.css-r99fy3').locator("(//li[contains(@class,'MuiListItem-root MuiListItem-gutters')])[2]").click({ force: true })
        }


        async verifyBackgroundColorText() {
                const ele = this.page.frameLocator('iframe').locator('//p[text()="Background"]')
                expect(ele).toContainText("Background")

        }

        async clickBackgroundColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Background']/following-sibling::button")
                await expect(ele).toBeVisible()
                await ele.click({ force: true })
                await this.page.waitForLoadState("networkidle")

        }
        async clicktextColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Text']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }
        async clickHeaderColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Header']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }

        async buttonstextColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Buttons']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }

        async MainboardBackgroundColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Mainboard Background']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }

        async EventtitlefontColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Event Title Font']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }

        async TimerCircleColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Timer Circle']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }

        async WoodColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Wood']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }
        async gameplayscoretextColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Gameplay Score Text']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }
        async TimerBackgroundColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Timer Background']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }
        

        async inputButtonColor() {
                const ele = this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-zfy2p9']/following-sibling::input[1]")
                await expect(ele).toBeVisible()
                await ele.fill("F1C40FFF")

        }
        async inputRGBFirstColor() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
                await expect(ele).toBeVisible()
                await ele.fill("87")

        }
        async inputRGBSecondColor() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
                await expect(ele).toBeVisible()
                await ele.fill("124")

        }


        async inputRGBThirdColor() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
                await expect(ele).toBeVisible()
                await ele.fill("152")

        }

        async inputRGBColorOpacity() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                await expect(ele).toBeVisible()
                await ele.fill("100")

        }

        async inputRGBColorHex() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                await expect(ele).toBeVisible()
                await ele.fill("577C98FF")

        }

        async clickdeletebuttonswatches() {
                await this.page.frameLocator('.css-r99fy3').locator('//button[@aria-label="delete"]').last().click()
        }


        async clickColorPickerSaveBtn() {
                await this.page.frameLocator('.css-r99fy3').locator('//button[text()="Save"]').click({delay:1000})
                await this.page.waitForTimeout(2000)
        }
        //image upload starts here

        async openimagesection() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Image Uploads"]//parent::div').click()
                await this.page.waitForLoadState("networkidle")
        
                //await this.page.waitForLoadState("networkidle")
        }
        // async clickfullscreenlogoupload() {
        //         await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Full Screen Logo"]//parent::div//div[@class="MuiBox-root css-v2612"]').click()
        // }

        // async clickMainboardBackgroundupload() {
        //         await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mainboard Background"]//parent::div//div[@class="MuiBox-root css-v2612"]').click()
        // }

        async clicksposnorLogoupload() {
                await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Sponsor Logo"]//parent::div//div[@class="MuiBox-root css-v2612"]').click()
        }

        async clickMobileBackgroundupload() {
                await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mobile Background"]//parent::div//div[@class="MuiBox-root css-v2612"]').click()
        }

        async clickCropperChooseBtn() {
                await this.page.frameLocator('(//iframe)[1]').locator("//button[text()='Choose File']").click({force:true})
        }

        async deleteUploadedMobileBackground() {
               const ele = await this.page.frameLocator('(//iframe)[1]').locator("//button[@aria-label='Delete']").first().isVisible()
               if((ele==true)){        

                await this.page.frameLocator('(//iframe)[1]').locator("//button[@aria-label='Delete']").first().click({force:true})
                        
               }
        }      
        
        async deleteUploadedMobileBanner() {
                const ele = await this.page.frameLocator('(//iframe)[1]').locator("(//button[@aria-label='Delete'])[4]").isVisible()
                if((ele==true)){        
 
                 await this.page.frameLocator('(//iframe)[1]').locator("(//button[@aria-label='Delete'])[4]").click({force:true})
                         
                }
         }    

         async deleteUploadedMobileSponsorLogo() {
                const ele = await this.page.frameLocator('(//iframe)[1]').locator("(//button[@aria-label='Delete'])[3]").isVisible()
                if((ele==true)){        
 
                 await this.page.frameLocator('(//iframe)[1]').locator("(//button[@aria-label='Delete'])[3]").click({force:true})
                         
                }
         }  
         
         async deleteUploadedMobileGameTitleLogo() {
                const ele = await this.page.frameLocator('(//iframe)[1]').locator("(//button[@aria-label='Delete'])[2]").isVisible()
                if((ele==true)){        
 
                 await this.page.frameLocator('(//iframe)[1]').locator("(//button[@aria-label='Delete'])[2]").click({force:true})
                         
                }
         }   

        

        async verifyMobileBackgroundTexts() {
                const ele = await this.page.frameLocator('(//iframe)[1]').locator("//p[text()='Mobile Background']")
                expect(ele).toContainText("Mobile Background")                
                await this.page.waitForTimeout(3000)
        }

        async verifyProtraitBackgroundImageUploadSuccessfully() {
                // await this.page.waitForSelector("//button[@aria-label='Delete']")
                const ele = await this.page.frameLocator('(//iframe)[1]').locator("//button[@aria-label='Delete']")
                expect(ele).toBeVisible()
        }


        async checkMobileBackgrounduploadimage() {
                return await this.page.frameLocator('(//iframe)[1]').locator("(//div[@class='MuiBox-root css-vjb914'])[1]").isVisible()


        }

        async clickGametitlelogoupload() {
                await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Game Title Logo"]//parent::div//div[@class="MuiBox-root css-v2612"]').click()
        }

        async clickBannerImageupload() {
                await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Banner Image"]//parent::div//div[@class="MuiBox-root css-v2612"]').click()
        }

        async Imageuploader() {
                const filePath0 = "testData/logos/gameLogo.jpg"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()
                await this.page.waitForTimeout(5000)
                //await this.page.waitForEvent('')

        }
        async BannerImageuploader() {
                const filePath0 = "testData/images/titlebanner.jpg"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()
                await this.page.waitForTimeout(5000)
                //await this.page.waitForEvent('')

        }

        async SponsorImageuploader() {
                const filePath0 = "testData/images/sponsor.jpg"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()
                await this.page.waitForTimeout(5000)
                //await this.page.waitForEvent('')

        }
        async GametitleImageuploader() {
                const filePath0 = "testData/images/title.jpg"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()
                await this.page.waitForTimeout(5000)
                //await this.page.waitForEvent('load')

        }
        // Editor sections(dialogs) start here

        async opendialogs() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Dialogs"]//parent::div').click()
        }
        async typestandbymessage() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")

        }

        async checkstandbymessageeditorfunctions() {

        }


        async typecorrectguess() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")
        }
        async clickleftalignedcorrectguess() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@title="Left"]').click()

        }
        async clickrightalignedcorrectguess() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@title="Right"]').click()

        }
        async clickboldcorrectguesseditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@title="Bold"]').click()

        }
        async clickitaliccorrectguesseditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@title="Underline"]').click()

        }
        async clickunderlinecorrectguesseditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@title="Italic"]').click()

        }
        async clickorderedcorrectguesseditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@title="Ordered"]').click()

        }
        async clickunorderedcorrectguesseditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@title="Unordered"]').click()

        }

        async typecloseguess() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await this.page.waitForTimeout(400)
                await ele.fill("this is a test message")
        }
        async clickleftalignedcloseguess() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//div[@title="Left"]').click()

        }

        async clickrightalignedcloseguess() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//div[@title="Right"]').click()

        }
        async clickboldcloseguesseditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//div[@title="Bold"]').click()

        }
        async clickitaliccloseguesseditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//div[@title="Underline"]').click()

        }
        async clickunderlinecloseguesseditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//div[@title="Italic"]').click()

        }
        async clickorderedcloseguesseditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//div[@title="Ordered"]').click()

        }
        async clickunorderedcloseguesseditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//div[@title="Unordered"]').click()

        }
        async selectincorrecguessfont() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-toolbar"]//a[@title="Font"]').click()
                const li = this.page.frameLocator('.css-r99fy3').locator('//li[text()="Arial"]')
                await expect(li).toBeVisible()
        }

        async selectarialfontincorrectguess() {
                await this.page.frameLocator('.css-r99fy3').locator('//li[text()="Arial"]').click()
        }

        async typeincorrectguess() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")

        }

        async selectincorrectguessblockquote() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-toolbar"]//a[@title="Block Type"]').click()
                const ul = this.page.frameLocator('.css-r99fy3').locator('//ul[@class="rdw-dropdown-optionwrapper dropdownMenu"]')
                await expect(ul).toBeVisible()
        }

        async selectH1blockquoteincorrectguess() {
                await this.page.frameLocator('.css-r99fy3').locator('//li[text()="H1"]').click()
        }

        async selectH2blockquoteincorrectguess() {
                await this.page.frameLocator('.css-r99fy3').locator('//li[text()="H2"]').click()
        }

        async selectH3blockquoteincorrectguess() {
                await this.page.frameLocator('.css-r99fy3').locator('//li[text()="H3"]').click()
        }

        async selectH4blockquoteincorrectguess() {
                await this.page.frameLocator('.css-r99fy3').locator('//li[text()="H4"]').click()
        }
        async clickleftalignedincorrectguess() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Left"]').click()

        }
        async clickrightalignedincorrectguess() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Right"]').click()

        }
        async clickboldincorrectguesseditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Bold"]').click()

        }
        async clickitalicincorrectguesseditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Underline"]').click()

        }
        async clickunderlineincorrectguesseditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Italic"]').click()

        }
        async clickorderedincorrectguesseditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Ordered"]').click()

        }
        async clickunorderedincorrectguesseditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Unordered"]').click()

        }

        async typefarguess() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Far Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")
        }
        async typenoscore() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="No Score"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")
        }
        async selectingatefont() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="In-Gate Header"]//following-sibling::div//div[@aria-label="rdw-toolbar"]//a[@title="Font"]').click()
                const li = this.page.frameLocator('.css-r99fy3').locator('//li[text()="Arial"]')
                await expect(li).toBeVisible()
        }

        async selectarialfontingate() {
                await this.page.frameLocator('.css-r99fy3').locator('//li[text()="Arial"]').click()
        }
        async selectingatetguessblockquote() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="In-Gate Header"]//following-sibling::div//div[@aria-label="rdw-toolbar"]//a[@title="Block Type"]').click()
                const ul = this.page.frameLocator('.css-r99fy3').locator('//ul[@class="rdw-dropdown-optionwrapper dropdownMenu"]')
                await expect(ul).toBeVisible()
        }

        async typeingateheader() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="In-Gate Header"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")
        }

        async clickleftalignedingateheader() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="In-Gate Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="In-Gate Header"]//following-sibling::div//div[@title="Left"]').click()

        }

        async clickrightalignedingateheader() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="In-Gate Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="In-Gate Header"]//following-sibling::div//div[@title="Right"]').click()

        }
        async clickboldingateheadereditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="In-Gate Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="In-Gate Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="In-Gate Header"]//following-sibling::div//div[@title="Bold"]').click()

        }
        async clickitalicingateheadereditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="In-Gate Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="In-Gate Header"]//following-sibling::div//div[@title="Underline"]').click()

        }
        async clickunderlineingateheadereditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="In-Gate Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="In-Gate Header"]//following-sibling::div//div[@title="Italic"]').click()

        }

        async typeridingheader() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Riding Header"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")
        }

        async clickleftalignedridingheader() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Riding Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Riding Header"]//following-sibling::div//div[@title="Left"]').click()

        }

        async clickrightalignedridingheader() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Riding Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Riding Header"]//following-sibling::div//div[@title="Right"]').click()

        }
        async clickboldridingheadereditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Riding Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Riding Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Riding Header"]//following-sibling::div//div[@title="Bold"]').click()

        }
        async clickitalicridingheadereditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Riding Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Riding Header"]//following-sibling::div//div[@title="Underline"]').click()

        }
        async clickunderlineridingheadereditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Riding Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Riding Header"]//following-sibling::div//div[@title="Italic"]').click()

        }
        async clickorderedridingheadereditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Riding Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Riding Header"]//following-sibling::div//div[@title="Ordered"]').click()

        }
        async clickunorderedridingheadereditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Riding Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Riding Header"]//following-sibling::div//div[@title="Unordered"]').click()

        }

        async typescoringheader() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Scoring Header"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")
        }
        async clickleftalignedscoring() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Scoring Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Scoring Header"]//following-sibling::div//div[@title="Left"]').click()

        }

        async clickrightalignedscoring() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Scoring Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Scoring Header"]//following-sibling::div//div[@title="Right"]').click()

        }
        async clickboldscoringeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Scoring Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Scoring Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Scoring Header"]//following-sibling::div//div[@title="Bold"]').click()

        }
        async clickitalicscoringeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Scoring Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Scoring Header"]//following-sibling::div//div[@title="Underline"]').click()

        }
        async clickunderlinescoringeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Scoring Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Scoring Header"]//following-sibling::div//div[@title="Italic"]').click()

        }
        async clickorderedscoringeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Scoring Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Scoring Header"]//following-sibling::div//div[@title="Ordered"]').click()

        }
        async clickunorderedscoringseditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Scoring Header"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Scoring Header"]//following-sibling::div//div[@title="Unordered"]').click()

        }



        async typeRerideheader() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Re-Ride Header"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")
        }
        //rider roster starts here


        async clickriderroster() {
                await this.page.frameLocator('iframe').locator("//h6[text()='test_by_Automation']/parent::div/following-sibling::div//div//div//p[text()='Rider Roster']").click()
        }
        async clickaddriderbutton() {
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('iframe').locator('//button[text()="Add Rider"]').click()
        }

        async addriderfirstname() {
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('iframe').first().locator('//input[@placeholder="First Name"]').type("test_rider_firstname")

        }
        async addriderLastname() {
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('iframe').first().locator('//input[@placeholder="Last Name"]').type("test_rider_lastname")
        }
        async clicksaveandclosebutton() {
                await this.page.frameLocator('.css-r99fy3').locator('//button[text()="Save & Close"]').click()
                await this.page.waitForTimeout(1000)
        }
        async typesearchinriderroster() {
                await this.page.frameLocator('.css-r99fy3').locator('//input[@placeholder="Search..."]').type("test")
        }

        async clickexportbutton() {
                await this.page.frameLocator('.css-r99fy3').locator('//button[text()="Export"]').click()
        }

        async Jsonuploader() {
                const filePath0 = "testData/Riders.json"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('.css-r99fy3').locator('//button[text()="Import"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);


        }
        async checksuccessfulupload() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="The list of riders has been successfully updated"]')
                await expect(ele).toBeVisible()
        }

        async clickokafterjsonuplod() {
                await this.page.frameLocator('.css-r99fy3').locator('//button[text()="Ok"]').click()
        }

        async clickeditriderbutton() {
                await this.page.frameLocator('.css-r99fy3').locator('//button[text()="Edit"]').first().click()
        }

        async clickdeleteriderbutton() {
                await this.page.frameLocator('.css-r99fy3').locator('//button[text()="Delete"]').last().click()
                await this.page.waitForSelector('button')
        }

        async clickokindeleterider() {
                await this.page.frameLocator('.css-r99fy3').locator('//button[text()="Ok"]').click()
        }
        //game operation
        async clickgameoperationssection() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Game Operations"]').last()
                expect(ele).toBeVisible()
                await ele.click({ force: true })
                await this.page.waitForLoadState("networkidle")
        }

        async clickGameOperationAddedEventThreeDot() {
                const ele = await this.page.frameLocator('iframe').locator("(//p[contains(@class,'MuiTypography-root MuiTypography-body1')]/following-sibling::div)[1]")
                expect(ele).toBeVisible()
                await ele.click({ force: true })
                await this.page.waitForLoadState("networkidle")
        }


        async clickEventStartBtn() {
                const ele = await this.page.frameLocator('iframe').locator("(//p[text()='Start Event'])[1]")
                expect(ele).toBeVisible()
                await ele.click({ force: true })
                await this.page.waitForLoadState("networkidle")
                await this.page.waitForTimeout(3000)
        }






        async clickaddeventbutton() {
                await this.page.frameLocator('.css-r99fy3').locator("//button[text()='Add Event']").click()
        }

        async typetestevent() {
                await this.page.frameLocator('.css-r99fy3').locator('//input[@type="string"]').type("test_event")
        }

        async clickaddbutton() {
                await this.page.frameLocator('.css-r99fy3').locator('//button[text()="ADD"]').click()
        }

        async clickaddridersbutton() {
                await this.page.frameLocator('.css-r99fy3').locator('//button[text()="Add Riders"]').click()
        }


        // game settings

        async clickgamesettings() {
                await this.page.frameLocator('iframe').locator("//h6[text()='test_by_Automation']/parent::div/following-sibling::div//div//div//p[text()='Game Settings']").click()
        }

        async typeincorrectguesscore() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//input').type('4')
        }
        async typecorrectguesscore() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//input').type('5')
        }
        async typecloseguesscore() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//input').type('6')
        }
        async typefarguessscore() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Far Guess"]//following-sibling::div//input').type('7')
        }

        async typeguesstime() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Guess Time"]//following-sibling::div//input').fill('20')
        }
        //edit section

        async clickeditsection() {
                const ele = this.page.frameLocator('iframe').locator("//h6[text()='Auto']/parent::div/following-sibling::div//div//div//p[text()='Edit']")
                expect(ele).toBeVisible()
                await ele.click()
        }
        async editconfigname() {
                const ele = this.page.frameLocator('iframe').first().locator('//input[@type="string"]')
                await ele.fill("test_by_Automation_edited")
        }
        async clickeditbutton() {
                const ele = this.page.frameLocator('iframe').locator('//button[text()="EDIT"]').last()
                await ele.click()
        }
        async clickdeletesection() {
                await this.page.frameLocator('iframe').locator("//h6[text()='test_by_Automation_edited']/parent::div/following-sibling::div//div//div//p[text()='Delete']").click()
        }

        async clickdeletebutton() {
                const ele = this.page.frameLocator('iframe').first().locator('//button[text()="Delete"]')
                await ele.click()
        }
        async verifyAddBtn() {
                const ele = this.page.frameLocator('iframe').first().locator("//button[text()='ADD']")
                await expect(ele).toContainText('ADD')
                await expect(ele).toBeVisible()
        }
        async verifyCancelBtn() {
                const ele = await this.page.frameLocator('iframe').first().locator("(//div[@class='MuiBox-root css-12mgqqu']//button)[2]")
                await expect(ele).toContainText("CANCEL")
                await expect(ele).toBeVisible()
        }
        async verifynewConfigrationText() {
                const ele = this.page.frameLocator('iframe').locator("//h6[text()='Auto']")
                expect(ele).toContainText('Auto')
        }
        async verifyStartBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Start']").last()
                expect(ele).toContainText("Start")
                //expect(ele).toBeVisible()
        }
        async verifyLiveBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Live']").last()
                expect(ele).toContainText("Live")
                // await expect(ele).toBeVisible()
        }
        async clickgameStartBtn() {
                await this.page.frameLocator('iframe').locator("//button[text()='Start']").last().click()
        }
        async clickOkBtn() {
                await this.page.frameLocator('iframe').locator("//button[text()='Ok']").click()

        }
        async clickCancelBtn() {
                await this.page.frameLocator('iframe').locator("///button[text()='Cancel']").first().click()
        }
        async clickgameStartandLivePopupCloseBtn() {
                await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1xnxzwa']").click()
        }
        async verifykMobileLinkBtn() {
                const ele = await this.page.frameLocator('iframe').locator("(//button[contains(@class,'MuiButtonBase-root MuiIconButton-root')])[3]")
                expect(ele).toBeVisible()


        }
        async clickMobileLinkBtn() {
                await this.page.frameLocator('iframe').locator('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1gcerwc"]').last().click()


        }
        // async clickMobileLinkOpenBtn(){
        //         await this.page.frameLocator('iframe').locator("//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]").click()
        // }

        async clickMobileLinkOpenBtn() {

                // Click text=Open Link
                const [page1] = await Promise.all([
                        this.page.waitForEvent('popup'),
                        this.page.frameLocator('iframe').locator("//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]").last().click()
                ]);

                return page1;


        }
        async verifyPlusBtn() {
                const ele = await this.page.frameLocator('iframe').first().locator("(//h5[text()='Configurations']/following-sibling::button)[1]")
                await expect(ele).toBeVisible()
        }
        async clickLiveBtn() {
                await this.page.frameLocator('iframe').locator("//button[text()='Live']").last().click()
        }
        async verifyGameSettingsText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Game Settings"]').first()
                expect(ele).toContainText("Game Settings")
        }
        async clickGameSettings() {
                await this.page.frameLocator('iframe').locator('//p[text()="Game Settings"]').first().click()

        }
        async verifyScoreText() {
                const ele = await this.page.frameLocator('iframe').locator('//h4[text()="Scores"]').first()
                expect(ele).toContainText("Scores")

        }
        async verifyCorrectGuessText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Correct Guess"]').first()
                expect(ele).toContainText("Correct Guess")


        }
        async verifyCloseGuessText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Close Guess"]').first()
                expect(ele).toContainText("Close Guess")

        }
        async verifyFarGuessText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Far Guess"]').first()
                expect(ele).toContainText("Far Guess")

        }
        async verifyIncorrectGuessText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Incorrect Guess"]').first()
                expect(ele).toContainText("Incorrect Guess")

        }
        async verifyGuessTimeText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Guess Time"]').first()
                expect(ele).toContainText("Guess Time")

        }
        async inputCorrectGuess() {
                await this.page.frameLocator('iframe').locator("(//div[contains(@class,'MuiInputBase-root MuiInput-root')])[1]").last().type("50")



        }
        async inputFarGuess() {
                await this.page.frameLocator('iframe').locator("(//div[contains(@class,'MuiInputBase-root MuiInput-root')]").last().type("30")



        }
        async inputCloseGuess() {
                await this.page.frameLocator('iframe').locator("//div[contains(@class,'MuiInputBase-root MuiInput-root')]").last().type("40")



        }
        async inputIncorrectGuess() {
                await this.page.frameLocator('iframe').locator("//input[@id='P0-87']").last().type("40")



        }
        async inputGuessTime() {
                await this.page.frameLocator('iframe').locator("//input[@id='P0-88']").last().type("10")



        }
        async clickCloseBtn() {
                await this.page.frameLocator('iframe').locator('//div[@class="MuiBox-root css-1xnxzwa"]').last().click()
        }
        async verifyMobileLinkText() {
                const ele = await this.page.frameLocator('iframe').locator("//h2[text()='Mobile Link']")
                expect(ele).toContainText("Mobile Link")

        }
        async clickMobileLinkCopyBtn() {
                await this.page.frameLocator('iframe').locator('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium css-1oge9gb"]').click()
        }
        async verifySaveQRCodeText() {
                const ele = await this.page.frameLocator('iframe').locator('//button[text()="Save QR Code"]')
                expect(ele).toContainText("Save QR Code")

        }
        async validateSaveQRCode() {
                const [download] = await Promise.all([
                        this.page.waitForEvent('download'),
                        this.page.frameLocator('iframe').locator('//button[text()="Save QR Code"]').click()
                ])
                const suggestedFileName = download.suggestedFilename()
                const filePath = 'QRCode' + suggestedFileName
                await download.saveAs(filePath)
                expect(existsSync(filePath)).toBeTruthy()
        }
        async verifyCopyQRCodeText() {
                const ele = await this.page.frameLocator('iframe').locator('//button[text()="Copy QR Code"]')
                expect(ele).toContainText("Copy QR Code")

        }
        async clickQRcodecopybtn() {
                await this.page.frameLocator('iframe').locator('//button[text()="Copy QR Code"]').click()
        }
        async verifyUploadFontText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Upload Font"]')
                expect(ele).toContainText("Upload Font")


        }
        async clickFontsSection() {
                await this.page.frameLocator('iframe').locator('//p[text()="Fonts"]').click()


        }
        async verifyFontsText() {
                const ele = await this.page.frameLocator('iframe').locator('//h4[text()="Fonts"]')
                expect(ele).toContainText("Fonts")


        }
        async verifyOpenFontsSection() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Fonts"]')
                expect(ele).toBeVisible()
        }
        async verifyUploadFontsBtn() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Upload Font"]')
                expect(ele).toBeVisible()
        }
        async verifyopencolorssection() {
                const ele = await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Colors"]//parent::div')
                expect(ele).toBeVisible()
        }
        async verifyColorsBackgroundText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Background"]')
                expect(ele).toContainText("Background")
        }
        async verifyTextColorsText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Text"]/following-sibling::button').first()
                expect(ele).toContainText("Text")
        }
        async verifyColorsHeaderText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Header"]')
                expect(ele).toContainText("Header")
        }
        async verifyColorsButtonsText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Buttons"]')
                expect(ele).toContainText("Buttons")
        }
        async verifyColorsMainboardBackgroundText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Mainboard Background"]')
                expect(ele).toContainText("Mainboard Background")
        }
        async verifyColorsEventTitleFontText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Event Title Font"]')
                expect(ele).toContainText("Event Title Font")
        }
        async verifyColorsTimerCircleText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Timer Circle"]')
                expect(ele).toContainText("Timer Circle")
        }
        async verifyColorsWoodText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Wood"]')
                expect(ele).toContainText("Wood")
        }
        async verifyColorsGameplayScoreText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Gameplay Score Text"]')

                expect(ele).toContainText("Gameplay Score Text")
        }
        async verifyColorsTimerBackgroundText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Timer Background"]')

                expect(ele).toContainText("Timer Background")
        }
        async verifyopenImageUploadSection() {
                const ele = await this.page.frameLocator('iframe').locator(' //p[text()="Image Uploads"]')
                expect(ele).toBeVisible()

        }
        async verifyMobileBackgroundText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Mobile Background"]')

                expect(ele).toContainText("Mobile Background")
        }
        async verifyuploadMobileBackgroundImageBtn() {
                const ele = await this.page.frameLocator('iframe').locator(' (//div[@class="MuiBox-root css-v2612"])[2]')
                expect(ele).toBeVisible()
                ele.click()


        }
        async verifyGameTitleLogoText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Game Title Logo"]')

                expect(ele).toContainText("Game Title Logo")
        }
        async verifyGameTitleLogoUploadBtn() {
                const ele = await this.page.frameLocator('iframe').locator('(//div[@class="MuiBox-root css-v2612"])[3]')

                expect(ele).toBeVisible()
        }
        async verifySponsorLogoText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Sponsor Logo"]')

                expect(ele).toContainText("Sponsor Logo")
        }
        async verifySponsorLogoUploadBtn() {
                const ele = await this.page.frameLocator('iframe').locator('(//div[@class="MuiBox-root css-v2612"])[4]')

                expect(ele).toBeVisible()
        }
        async verifyBannerImageText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Banner Image"]')

                expect(ele).toContainText("Banner Image")
        }
        async verifyBannerImageUploadBtn() {
                const ele = await this.page.frameLocator('iframe').locator('(//div[@class="MuiBox-root css-v2612"])[5]')

                expect(ele).toBeVisible()
        }
        async clickStartGameOkBtn() {

                await this.page.frameLocator('.css-r99fy3').locator("//button[text()='Ok']").click();

                // const ele = await this.page.frameLocator('iframe').locator('text=Start').nth(1)
                // expect(ele).toBeVisible()
                // await ele.click({force:true})

        }

        async verifyAnalyticsText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Analytics"]').last()

                expect(ele).toContainText("Analytics")

        }
        async clickAnalyticsBtn() {
                await this.page.frameLocator('iframe').locator('//p[text()="Analytics"]').last().click({ force: true })


        }
        async verifyDateText() {
                const ele = await this.page.frameLocator('iframe').locator('//span[text()="Date"]')
                expect(ele).toContainText("Date")

        }
        async verifyQRScsnsText() {
                const ele = await this.page.frameLocator('iframe').locator('//span[text()="QR Scans"]')
                expect(ele).toContainText("QR Scans")
        }
        async verifyTotalPlayersText() {
                const ele = await this.page.frameLocator('iframe').locator('//span[text()="Total Players"]')
                expect(ele).toContainText("Total Players")
        }
        async verifyUniqueUsersPlayedText() {
                const ele = await this.page.frameLocator('iframe').locator('//span[text()="Unique Users Played"]')
                expect(ele).toContainText("Unique Users Played")
        }
        async verifyReturningUsersText() {
                const ele = await this.page.frameLocator('iframe').locator('//span[text()="Returning Users"]')
                expect(ele).toContainText("Returning Users")
        }
        async verifyTotalTimePlayedText() {
                const ele = await this.page.frameLocator('iframe').locator('//span[text()="Total Time Played"]')
                expect(ele).toContainText("Total Time Played")
        }
        async verifyActionText() {
                const ele = await this.page.frameLocator('iframe').locator('//span[text()="Action"]')
                expect(ele).toContainText("Action")
        }

        async clickStartBtn() {
                await this.page.frameLocator('iframe').locator("//button[text()='Start']").last().click()

        }
        async verifyOpacitySlider() {
                const ele = await this.page.frameLocator('iframe').locator("(//span[@class='MuiSlider-track css-19p2p10'])[2]")
                expect(ele).toBeVisible()
        }

        async verifySwatchesText() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Swatches"]')
                expect(ele).toContainText("Swatches")
        }
        async verifyColorPickerText() {
                const ele = await this.page.frameLocator('iframe').locator("//h3[text()='Color Picker']")
                expect(ele).toContainText("Color Picker")
        }
        async verifyPlusBtnInColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//button[@aria-label='Add Color']")
                expect(ele).toBeVisible()
        }
        async verifyRGBFirstColorInputField() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
                expect(ele).toBeVisible()
        }
        async verifyRGBSecondColorInputField() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
                expect(ele).toBeVisible()
        }
        async verifyRGBThirdColorInputField() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
                expect(ele).toBeVisible()
        }
        async verifyRGBOpacityColorInputField() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
        }
        async verifyRGBHexColorInputField() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                await expect(ele).toBeVisible()
        }
        async verifyRGBText() {
                const ele = await this.page.frameLocator('iframe').locator("//h3[text()='RGB']")
                expect(ele).toContainText("RGB")
        }
        async clickbuttoncolorpicker() {

                const ele = this.page.frameLocator('iframe').locator("//p[text()='Buttons']/following-sibling::button").first()
                //await expect(ele).toBeVisible()
                await ele.click()
        }
        async clickwoodcolorpicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Wood']/following-sibling::button").first()
                //await expect(ele).toBeVisible()
                await ele.click()
        }
        async verifyerrorvisiblity() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Value cannot be an empty']")
                await expect(ele).toBeVisible()
        }

        async clickokbuttonerror() {
                const ele = this.page.frameLocator('iframe').locator("//button[text()='Ok']").click()

        }
        async clickriderrostersection() {
                await this.page.frameLocator('iframe').locator("//p[text()='Rider Roster']").last().click()
                await this.page.waitForLoadState("networkidle")
        }
        async verifyriderrosterText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Rider Roster']").last()
                expect(ele).toContainText("Rider Roster")
        }
        async verifyAllRidersText() {
                const ele = await this.page.frameLocator('iframe').locator("//h5[text()='All Riders']").last()
                expect(ele).toContainText("All Riders")
        }

        async clickToUploadRider() {
                const ele = await this.page.frameLocator('iframe').locator("//h5[text()='All Riders']/following-sibling::button")
                expect(ele).toContainText("Import")
                await ele.click()
        }

        async verifysearchfield() {

                const ele = await this.page.frameLocator('iframe').locator("input[placeholder='Search...']").last()
                expect(ele).toBeVisible()
        }
        async verifyimportBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Import']").last()
                expect(ele).toBeVisible()

        }
        async verifyexportBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Export']").last()
                expect(ele).toBeVisible()

        }
        async verifyRowsperpagedropdown() {
                const ele = await this.page.frameLocator('iframe').locator("//div[@role='button']").last()

                expect(ele).toBeVisible()
                ele.click()
        }
        async verifyriderrosteraddBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Add Rider']").last()
                expect(ele).toBeVisible()

        }
        async verifyAddRiderText() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Add Rider']").last()
                expect(ele).toContainText("Add Rider")
        }
        async closeaddriderpopupBtn() {
                await this.page.frameLocator('iframe').locator("//h3[text()='Add New Rider']").last().click()
                //div[@class='MuiBox-root css-821f9k']/following-sibling::button[1]
        }
        async clickriderrosteraddBtn() {
                await this.page.frameLocator('iframe').locator("//button[text()='Add Rider']").last().click()
        }
        async verifyRiderFirstName() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Rider First Name"]').last()
                expect(ele).toContainText("Rider First Name")
        }
        async inputAddRiderFirstName() {
                await this.page.frameLocator('iframe').locator("//input[@placeholder='First Name']").last().type("Rider")
        }
        async verifyRiderLastName() {
                const ele = await this.page.frameLocator('iframe').locator('//p[text()="Rider Last Name"]').last()
                expect(ele).toContainText("Rider Last Name")
        }

        async inputAddRiderLastName() {
                await this.page.frameLocator('iframe').locator("//input[@placeholder='Last Name']").last().type("Test")
        }
        async clicksaveandaddmorebutton() {
                await this.page.frameLocator('iframe').locator("//button[text()='Save & Add More']").last().click()
        }
        async errorAlertMessage() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Value cannot be an empty']").last()
                expect(ele).toContainText("Value cannot be an empty")
        }
        async verifyUploadAvatarText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Upload Avatar']").last()
                expect(ele).toContainText("Upload Avatar")

        }
        async clickUploadAvatar() {
                await this.page.frameLocator('iframe').locator("//img[@class='MuiAvatar-img css-1hy9t21']").last().click()
        }
        async Avataruploader() {
                const filePath0 = "testData/images/profile.png"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('iframe').locator("//img[@class='MuiAvatar-img css-1hy9t21']").last().click()
                ]);
                await fileChooser.setFiles([filePath0]);

        }
        async clickEditRiderBtn() {

                await this.page.frameLocator('iframe').locator("//button[text()='Edit']").last().click()
        }
        async verifyEditRiderText() {

                const ele = await this.page.frameLocator('iframe').locator("//h3[text()='Edit Rider']").last()
                expect(ele).toContainText("Edit Rider")


        }
        async editRiderfirstname() {
                const fname = await this.page.frameLocator('iframe').locator("//input[@placeholder='First Name']").last()
                await fname.focus();
                await this.page.keyboard.press("Meta+A");
                await this.page.keyboard.press('Backspace');


        }
        async editRiderlastname() {
                const lname = await this.page.frameLocator('iframe').locator("//input[@placeholder='Last Name']").last()
                await lname.focus()
                await this.page.keyboard.press("Meta+A");
                await this.page.keyboard.press('Backspace');
        }
        async clickriderSaveBtn() {
                await this.page.frameLocator('iframe').locator("//button[text()='Save']").last()

        }
        async verifyAddEventText() {

                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Add Event']").last()
                expect(ele).toContainText("Add Event")
        }
        async clickeventCancelBtn() {
                await this.page.frameLocator('iframe').locator("//button[text()='CANCEL']").last().click()
        }
        async clickeventStart() {
                await this.page.waitForTimeout(1000)
                const ele = this.page.frameLocator('iframe').locator("(//button[@type='button']//div)[2]").last()
                await ele.click()
                //div[@class='MuiBox-root css-1mj1ut2']
                await this.page.waitForTimeout(1000)
                // //const ele = await this.page.frameLocator('iframe').locator("//p[text()='Stop Event']").isVisible()
                // if((await this.page.frameLocator('iframe').locator("//p[text()='Stop Event']").isVisible())){
                //         await this.page.frameLocator('iframe').locator("//p[text()='Stop Event']").click()
                //         ele.click()
                // }
                await this.page.frameLocator('iframe').locator("(//li[contains(@class,'MuiButtonBase-root MuiMenuItem-root')]//p)[1]").last().click()

        }
        async clickeventStop() {
                const ele = this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1mj1ut2']")
                ele.click()
                //  if((await this.page.frameLocator('iframe').locator("//p[text()='Start Event']").isVisible())){
                //         await this.page.frameLocator('iframe').locator("//p[text()='Start Event']").click()
                //         ele.click()
                // }

                await this.page.frameLocator('iframe').locator("//li[contains(@class,'MuiButtonBase-root MuiMenuItem-root')]//p[1]").last().click()


        }
        async clickeventRename() {
                await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1mj1ut2']").click()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('iframe').locator("(//li[contains(@class,'MuiButtonBase-root MuiMenuItem-root')]//p)[2]").last().click()
                const rename = this.page.frameLocator('iframe').locator("//input[@type='string']")
                await rename.focus()
                await this.page.keyboard.press("Meta+A");
                await this.page.keyboard.press('Backspace');
                //now type new rename event name
                rename.type("test")

        }
        async clickeventDelete() {
                await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1mj1ut2']").click()
                await this.page.frameLocator('iframe').locator("//p[text()='Delete']").last().click({ force: true })
        }
        async clickridersadd() {
                await this.page.frameLocator('iframe').locator("(//input[@class='PrivateSwitchBase-input css-1m9pwf3'])[1]").click()
        }
        async clickridersSaveBtn() {
                await this.page.frameLocator('iframe').locator("//button[text()='Save Riders']").click()
        }
        async clicksLiveGameOkBtn() {
                await this.page.frameLocator('.css-r99fy3').locator("//button[text()='Ok']").click();
        }
        async clickMoveToNextBtn() {
                const ele = await this.page.frameLocator('.css-r99fy3').locator("//button[text()='Move to Next']")
                expect(ele).toContainText("Move to Next")
                await ele.click()
                await this.page.waitForLoadState("networkidle")
        }
        async inputRiderScore() {
                // await this.page.waitForSelector("//input[@type='number']")
                await this.page.waitForTimeout(6000)
                const ele = await this.page.frameLocator('.css-r99fy3').locator("//input[@type='number']")
                // expect(ele).toBeVisible()        
                await ele.fill("20")
        }
        async inputIncorrectRiderScore() {
                // await this.page.waitForSelector("//input[@type='number']")
                await this.page.waitForTimeout(6000)
                const ele = await this.page.frameLocator('.css-r99fy3').locator("//input[@type='number']")
                // expect(ele).toBeVisible()        
                await ele.fill("10")
        }
        async inputCorrectRiderScore() {
                // await this.page.waitForSelector("//input[@type='number']")
                await this.page.waitForTimeout(6000)
                const ele = await this.page.frameLocator('.css-r99fy3').locator("//input[@type='number']")
                // expect(ele).toBeVisible()        
                await ele.fill("20")
        }
        async inputCloseRiderScore() {
                // await this.page.waitForSelector("//input[@type='number']")
                await this.page.waitForTimeout(6000)
                const ele = await this.page.frameLocator('.css-r99fy3').locator("//input[@type='number']")
                // expect(ele).toBeVisible()        
                await ele.fill("20")
        }
        async inputFarguessRiderScore() {
                // await this.page.waitForSelector("//input[@type='number']")
                await this.page.waitForTimeout(6000)
                const ele = await this.page.frameLocator('.css-r99fy3').locator("//input[@type='number']")
                // expect(ele).toBeVisible()        
                await ele.fill("20")
        }


        async clickRiderInputField() {
                await this.page.waitForTimeout(6000)
                const ele = await this.page.locator("//input[contains(@class,'MuiInputBase-input MuiFilledInput-input')]")
                // expect(ele).toBeVisible()        
                await ele.fill("20")
        }
        async clickRiderScoresubmitBtn() {

                const ele = this.page.frameLocator('.css-r99fy3').locator('//button[text()="Submit"]')
                expect(ele).toBeVisible()
                await ele.click({ force: true });
                await ele.click({ force: true });

        }
        async clickreridingBtn() {
                await this.page.frameLocator('.css-r99fy3').locator("//button[text()='Re-Ride']").last().click({ force: true });
        }
        async verifyGameTitleLogoUploadSuccessfully() {
                const ele = await this.page.frameLocator('iframe').locator("(//button[@title='Delete']//div)[2]")
                expect(ele).toBeVisible()
        }

        async verifySponsorLogoUploadSuccessfully() {
                const ele = await this.page.frameLocator('iframe').locator("(//button[@title='Delete']//div)[3]")
                expect(ele).toBeVisible()
        }
        async verifyBannerImageUploadSuccessfully() {
                const ele = await this.page.frameLocator('iframe').locator("(//button[@title='Delete']//div)[4]")
                expect(ele).toBeVisible()
        }
        async verifyEditConfigurationText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Edit Configuration']").last()
                expect(ele).toContainText("Edit Configuration")
        }
        async verifyConfigurationnameAutoalreadyexists() {
                const ele = await this.page.frameLocator('iframe').locator("//p[contains(@class,'MuiTypography-root MuiDialogContentText-root')]")
                expect(ele).toContainText("Configuration name 'Auto' already exists")
        }
        async clickeditconfigrationOkBtn() {

                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Ok']").last()
                await ele.click()
        }
        async validateExportBtn() {
                await this.page.waitForTimeout(1000)
                const [download] = await Promise.all([
                        this.page.waitForEvent('download'),
                        this.page.frameLocator('iframe').locator("//button[text()='Export']").last().click()
                ])
                const suggestedFileName = download.suggestedFilename()
                //        const filePath = 'Export' + suggestedFileName
                //        await download.saveAs(filePath)
                //        expect(existsSync(filePath)).toBeTruthy()
        }
        async verifyExportText() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Export']").last()
                expect(ele).toContainText("Export")
        }
        async inputsearchfield() {
                await this.page.frameLocator('iframe').locator("//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')]").last().type("Rider Test")
                const ele = this.page.frameLocator('iframe').locator("//td[text()='Rider']").last()
                expect(ele).toContainText("Rider")
                const ele2 = this.page.frameLocator('iframe').locator("//td[text()='Test']").last()
                expect(ele2).toContainText("Test")


        }
        async varifyrowsperpageText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Rows per page:']").last()
                expect(ele).toContainText("Rows per page:")

        }
        async clickrowsperpageBtn() {
                await this.page.frameLocator('iframe').locator("//div[contains(@class,'MuiSelect-select MuiTablePagination-select')]").click({ force: true })
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('iframe').locator("//div[contains(@class,'MuiSelect-select MuiTablePagination-select')]").click({ force: true })
                await this.page.close()
        }
        async verifyEditBtn() {
                const editfield = await this.page.frameLocator('iframe').locator("//input[@type='string']").last()
                await editfield.focus();
                await this.page.keyboard.press("Meta+A");
                await this.page.keyboard.press('Backspace');
                await editfield.type("Auto")
        }
        async verifyPleasestarttheevent() {
                const ele = await this.page.frameLocator('iframe').locator("//h4[text()='Please start the event']")
                expect(ele).toContainText("Please start the event")
        }
        async ImageuploaderAlert() {
                const filePath0 = "testData/images/main_banner.webp"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);

                await this.page.waitForTimeout(1000)
                this.page.on('dialog', async dialog => {

                        // verify message of alert
                        expect(dialog.message()).toContain('Error: Incorrect file extension');
                        await this.page.waitForTimeout(2000)
                        await dialog.accept();
                })
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()

        }
        async clickRidernoscoreBtn() {
                const ele = this.page.frameLocator('iframe').locator("//button[text()='No Score']")
                expect(ele).toBeVisible()
                await ele.click()
        }

        async clickReRideBtn() {
                const ele = this.page.frameLocator('iframe').locator("//button[text()='Re-Ride']")
                expect(ele).toBeVisible()
                await ele.click()
        }
        async clicktest1Event() {
                const ele = this.page.frameLocator('iframe').locator("(//div[@isdisabled='true']//p)[2]")
                expect(ele).toBeVisible()
                await ele.click()

        }
        async verifyriderText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Riders']")
                expect(ele).toContainText("Riders")
        }
        async verifyRidersnotyetaddedText() {
                await this.page.waitForTimeout(1000)
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Riders not yet added']").last()
                expect(ele).toContainText('Riders not yet added')
                await this.page.waitForTimeout(1000)

        }
        // async clickSolidDropdowns(){
        //         //click for select option
        //         const ele =  this.page.frameLocator('iframe').locator('MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiSelect-icon MuiSelect-iconStandard css-1du3utw')
        //         expect(ele).toBeVisible()
        //        await ele.click()
        //        //clickSolid
        //        const ele1 =  this.page.frameLocator('iframe').locator("//div[text()='Solid']")
        //        await ele1.click()
        // }



}