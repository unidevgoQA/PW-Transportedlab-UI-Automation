import { expect, Page } from "@playwright/test";
import { readFileSync,existsSync } from 'fs'
export default class prizeDropPage {
        // [x: string]: any;

        private page: Page;
        // static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }



        //=======================================================
        //▶▶Start Title Stage Section Element       


        async clickPrizeDropSection() {
                const locator = this.page.locator("//p[text()='Prize Drop']")
                // expect(locator).toContainText('Prize Drop')
                await locator.click({force:true})
                // console.log("Successfully Click To Tug of War Page ")
        }

        async verifyConfigurationsText() {
                //      const ele = await this.page.frameLocator('iframe').w('text=Title Stag')
                //         await this.page.waitForSelector(ele)        

                const ele = await this.page.frameLocator('iframe').locator('text=Configurations')
                expect(ele).toContainText("Configurations")


        }

        async verifyDeleteAutoConfigurationIfHave() {
                //      const ele = await this.page.frameLocator('iframe').w('text=Title Stag')
                //         await this.page.waitForSelector(ele)        

                const ele = await this.page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsEditDelete >> p').last().isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsEditDelete >> p').last()
                                .click({force:true})
                }

                await this.page.waitForTimeout(3000)

                const deleteBtn = await this.page.frameLocator('iframe').locator("//p[text()='Are you sure that you want to delete this configuration?']").isVisible()
                if ((deleteBtn == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("//button[text()='Delete']")
                                .click({force:true})
                }


               


        }


        async clickAddNewConfigPlusBtn() {
                const ele = await this.page.frameLocator('iframe').locator("(//h5[text()='Configurations']/following-sibling::button)[1]")
                await ele.click()

        }
        async verifyAddNewConfigPlusWindowText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='New Configuration']")
                expect(ele).toContainText("New Configuration")

        }


        async inputConfigurationName() {
                const ele = await this.page.frameLocator('iframe').locator('input[type="text"]')
                await ele.fill("Auto")

        }
        async veirfycancelBtnvisiblity() {
                const ele = this.page.frameLocator('iframe').locator("//button[text()='CANCEL']")
                await expect(ele).toBeVisible()

        }

        async clickAddBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='ADD']")
                expect(ele).toBeVisible()
                await ele.click()

        }

        async verifyerrorvisiblity() {
                const ele = this.page.frameLocator('.css-r99fy3').locator("//p[text()='Configuration name cannot be empty']")
                await expect(ele).toBeVisible()
                await this.page.waitForTimeout(1000)
        }

        async clickokbuttonerror(){
                const ele = this.page.frameLocator('.css-r99fy3').locator("//button[text()='Ok']").click()
      
        }
        //start button visiblity

        async startbuttonvisible(){
                const ele = this.page.frameLocator('.css-r99fy3').locator('//h6[text()="Auto"]//following-sibling::div//button[text()="Start"]')
                await expect(ele).toBeVisible()
                
        }

        async clickstartbutton(){
                await this.page.frameLocator('.css-r99fy3').locator('//h6[text()="Auto"]//following-sibling::div//button[text()="Start"]').click()
        }

        async clickokinstartconfirmmodal(){
                await this.page.frameLocator('.css-r99fy3').locator("//button[text()='Ok']").click()
        }

        async verifyerrorvisiblityfornoprize() {
                const ele = this.page.frameLocator('.css-r99fy3').locator("//p[text()='You can`t start a session without prizes, please create a prize']")
                await expect(ele).toBeVisible()
                await this.page.waitForTimeout(1000)
        }


        //🔚 Closed Add New Config Section Element 
        //=======================================================
        //▶▶Start Game Design Section Element  
        async clickGameDesign() {
                await this.page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsEditDelete >> p').nth(0).click()

        }

        async clickToUploadFont() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-vjb914']//div)[1]")
                expect(ele).toBeVisible()
                await ele.click()

        }

        async clickClearAllBtn() {
                
                await this.page.frameLocator('.css-r99fy3').locator("//button[text()='Clear All']").dblclick({button:'left',delay:500})
                
        }
        async verifyclearallworking(){
                const ele = this.page.frameLocator('.css-r99fy3').locator("//p[text()='Text Color']/following-sibling::button")
                await expect(ele).toHaveAttribute("background","rgba(255, 255, 255, 1)")
        }
        // swatches section for all color pickers

        async clickplusbuttonswatches() {
                await this.page.frameLocator('.css-r99fy3').locator('//button[@aria-label="Add Color"]').click()
        }

        async clickdeletebuttonswatches() {
                await this.page.frameLocator('.css-r99fy3').locator('//button[@aria-label="delete"]').last().click()
        }
        // solid dropdowns 

        async validate_solid_horizontal_vertical_dropdown(){
                await this.page.frameLocator('.css-r99fy3').locator('//div[text()="Solid"]').click()
        }

        async click_solid_button(){
                await this.page.frameLocator('.css-r99fy3').locator('//li[text()="Solid"]').click()
        }

        async click_horizontal_button(){
                await this.page.frameLocator('.css-r99fy3').locator('//li[text()="Horizontal"]').click()
        }
        //opacity slider
        async opacity_slider_visiblity() {
                const ele =  this.page.frameLocator('.css-r99fy3').locator('//input[@aria-label="Alpha" and @aria-valuetext="100%"]')
                await expect(ele).toBeVisible()
        }
        //start main color section element
        async verifyMainColorText() {
                const ele = this.page.frameLocator('iframe').locator('text=Main Color')
                await expect(ele).toContainText("Main Color")

        }


        async clickMainColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Main Color']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }

        async inputMainRGRFirstColor() {
                const ele = this.page.frameLocator('iframe').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[1]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("84")
                await this.page.waitForTimeout(500)

        }
        async inputMainRGRSecondColor() {
                const ele = this.page.frameLocator('iframe').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[2]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("161")
                await this.page.waitForTimeout(500)

        }


        async inputMainRGRThirdColor() {
                const ele = this.page.frameLocator('iframe').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[3]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("220")
                await this.page.waitForTimeout(500)

        }

        async inputMainRGRFourColor() {
                const ele =  this.page.frameLocator('iframe').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[4]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("95")
                await this.page.waitForTimeout(500)  

        }

        async inputMainRGRFiveColor() {
                const ele = this.page.frameLocator('iframe').locator('//input[@class="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedStart css-1yftmq7"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("54A1DCF2")
                await this.page.waitForTimeout(500)  

        }


        async clickColorPickerSaveBtn() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//button[text()="Save"]')
                await expect(ele).toBeVisible()
                await ele.click()

        }
        //image uploaders here
        async click_BackgroundImage_upload_for_maincolor_check() {
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div[2]//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div[2]//button[@title="Delete"]').click({button:'left'})
                }
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div[2]//div[@class="MuiBox-root css-v2612"]').click()
        }

        async Image_uploader_for_maincolorcheck() {
                const filePath0 = "testData/images/transparent_background_image.png"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()

        }

        async fullscreenlogoupload(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Full Screen Logo"]//parent::div//following-sibling::div//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Full Screen Logo"]//parent::div//following-sibling::div//button[@title="Delete"]').click({button:'left'})
                }
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Full Screen Logo"]//parent::div//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click()
        }

        async Image_uploader_For_Fullcreenlogo(){
                const filePath0 = "testData/images/Fullscreen.png"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
        }

        async Game_title_image_upload(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Game Title Image"]//parent::div//following-sibling::div//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Game Title Image"]//parent::div//following-sibling::div//button[@title="Delete"]').click({button:'left'})
                }
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Game Title Image"]//parent::div//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
        }
        async Image_uploader_For_Game_title_image(){
                const filePath0 = "testData/images/title.jpg"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
        }

        //start accent color section element

        async verifyAccentColorText() {
                const ele = await this.page.frameLocator('iframe').locator('text=Accent Color')
                expect(ele).toContainText("Accent Color")

        }


        async clickAccentColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Accent Color']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        async inputAccentRGRFirstColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }
        async inputAccentRGRSecondColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }


        async inputAccentRGRThirdColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
                expect(ele).toBeVisible()
                await ele.fill("9")

        }

        async inputAccentRGRFourColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("90")

        }

        async inputAccentRGRFiveColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("005782FF")

        }

        //start Text color section element

        async verifyTextColorText() {
                const ele = this.page.frameLocator('iframe').locator('//p[text()="Text Color"]')
                await expect(ele).toContainText("Text Color")

        }


        async clickTextColorPicker() {
                const ele = this.page.frameLocator('.css-r99fy3').locator("//p[text()='Text Color']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }

        async inputTextRGRFirstColor() {
               
                const ele = this.page.frameLocator('.css-r99fy3').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[1]')
                await expect(ele).toBeVisible()
                await ele.fill("  ")
                await ele.type("189")
                //await this.page.waitForSelector('//div[@aria-label="Color"]')
                //div[@fill="hsla(180, 100%, 87%, 1)"] ei selector ta waitforselector die kora jabe
                await this.page.waitForTimeout(500)

        }
        async inputTextRGRSecondColor() {
               
                const ele = this.page.frameLocator('.css-r99fy3').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[2]')
                await expect(ele).toBeVisible()
                await ele.fill("  ")
                await ele.type("179")
                await this.page.waitForTimeout(500)

        }


        async inputTextRGRThirdColor() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[3]')
                await expect(ele).toBeVisible()
                await ele.fill("  ")
                await ele.type("229")
                await this.page.waitForTimeout(500)

        }

        async inputTextRGRFourColor() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[4]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("95")
                await this.page.waitForTimeout(500)

        }

        async inputTextRGRFiveColor() {
                const ele =  this.page.frameLocator('.css-r99fy3').locator('//input[@class="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedStart css-1yftmq7"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("#BDB3E5F2")
                await this.page.waitForTimeout(500)

        }


        //start Text color section element

        async verifyButtonColorText() {
                const ele = this.page.frameLocator('iframe').locator('text=Button Color')
                await expect(ele).toContainText("Button Color")

        }


        async clickButtonColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Button Color']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }

        async inputButtonRGRFirstColor() {
                const ele = this.page.frameLocator('iframe').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[1]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("204")
                await this.page.waitForTimeout(500)

        }
        async inputButtonRGRSecondColor() {
                const ele = this.page.frameLocator('iframe').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[2]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("56")
                await this.page.waitForTimeout(500)

        }


        async inputButtonRGRThirdColor() {
                const ele = this.page.frameLocator('iframe').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[3]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("147")
                await this.page.waitForTimeout(500)

        }

        async inputButtonRGRFourColor() {
                const ele = this.page.frameLocator('iframe').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[4]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("100")
                await this.page.waitForTimeout(500)

        }

        async inputButtonRGRFiveColor() {
                const ele = this.page.frameLocator('iframe').locator('//input[@class="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedStart css-1yftmq7"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("CC3893FF")
                await this.page.waitForTimeout(500)

        }
        async verifyFullScreenLogoText() {
                const ele = await this.page.frameLocator('iframe').locator("//h5[text()='Full Screen Logo']")
                expect(ele).toContainText("Full Screen Logo")

        }

        async verifyGameTitleImageTitleText() {
                const ele = await this.page.frameLocator('iframe').locator("//h5[text()='Game Title Image']")
                expect(ele).toContainText("Game Title Image")

        }

        //Upload Game Desgin Image
        async clickToUploadFullScreenLogo() {
                // const buffer = readFileSync('./videos/a.png');
                // // Create the DataTransfer and File
                // const dataTransfer = await this.page.evaluateHandle((data) => {
                //     const dt = new DataTransfer();
                //     // Convert the buffer to a hex array
                //     const file = new File([data.toString('hex')], 'a.png', { type: 'application/png' });
                //     dt.items.add(file);
                //     return dt;
                // }, buffer);

                // await this.page.dispatchEvent("(//div[@class='MuiBox-root css-78n4oq']//div)[2]", 'drop', { dataTransfer });

                // const filePath0 = "testData/images/banner.png"
                // await this.page.on("filechooser", async (filechooser) => {
                //         await filechooser.setFiles([filePath0])
                // })
                // await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-vjb914']//div)[2]").dblclick({ force: true })

                // const filePath0 = "testData/logos/Logo.jpg"
                // this.page.on("filechooser", async (filechooser) => {
                //         await filechooser.setFiles([filePath0]);
                // })
                // await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-vjb914']//div)[2]").click()


                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-vjb914']//div)[2]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadGameTitleImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[3]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }
        ///////
        async clickToUploadFrameImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[4]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadParachutePrizeImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[5]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadNoPrizeWonImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[6]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }
        /// Sponsor Images
        async clickToUploadSponsorImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[7]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadSponsorLogo() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[8]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadSponsorTeamLogo() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[9]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadGameBackgroundImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[10]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadHowtoPlayImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[11]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadSplashScreenImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[12]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadRulesImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[13]")
                await ele.click({force:true})

        }



        //🔚 Closed Game Desgin Section Element 
        //=======================================================
        //▶▶Start Game Settings Section Element  


        async clickGameSettings() {
                await this.page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsEditDelete >> p').nth(1).click()

        }

        async inputTotalRewards() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
                expect(ele).toBeVisible()
                await ele.fill("30")
        }



        async inputTotalRewardsPerDay() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
                expect(ele).toBeVisible()
                await ele.fill("5")
        }

        async inputDurationTimeHour() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
                expect(ele).toBeVisible()
                await ele.fill("1")
        }

        async inputDurationTimeMinutes() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("10")
        }


        async inputDurationTimeSecond() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[5]")
                expect(ele).toBeVisible()
                await ele.fill("5")
        }
        async inputStandByMessage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='notranslate public-DraftEditor-content']//div)[2]")
                expect(ele).toBeVisible()
                await ele.fill("In publishing and graphic design, Lorem ipsum is a placeholder")
        }

        async inputEndingGameMassage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[2]")
                expect(ele).toBeVisible()
                await ele.fill("In publishing and graphic design, Lorem ipsum is a placeholder")
        }

        async inputSelectionMessage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[3]")
                expect(ele).toBeVisible()
                await ele.fill("In publishing and graphic design, Lorem ipsum is a placeholder")
        }

        async clickEntryScreen() {
                const ele = await this.page.frameLocator('iframe').locator("//div[contains(@class,'MuiSelect-select MuiSelect-outlined')]")
                expect(ele).toBeVisible()
                await ele.click()
        }

        async selectHowToScreen() {
                const ele = await this.page.frameLocator('iframe').locator("//li[text()='How to Screen']")
                expect(ele).toBeVisible()
                await ele.click()
        }




        //🔚 Closed Game Settings Section Element 
        //=======================================================
        //▶▶Start Add Banner Settings Section Element  


        async clickAddBannerSection() {
                await this.page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsEditDelete >> p').nth(2).click()

        }

        async verifyMarketingMassageText() {
                const ele = await this.page.frameLocator('iframe').locator("//h5[text()='Marketing Message']")
                expect(ele).toContainText("Marketing Message")
        }

        async verifyDragYourImageText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Drag your image here, or browse']")
                expect(ele).toContainText("Drag your image here, or browse")
        }


        async clickToUploadBanner() {
                const ele = await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-v2612']")
                expect(ele).toBeVisible()
                await ele.click()
        }


        //🔚 Closed Game Settings Section Element 
        //=======================================================
        //▶▶Start Add Banner Settings Section Element  



        async clickPrizingSection() {
                await this.page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsEditDelete >> p').nth(3).click()

        }

        async verifyPrizingListText() {
                const ele = await this.page.frameLocator('iframe').locator("//h4[text()='Prizing List']")
                expect(ele).toContainText("Prizing List")
        }

        async clickAddNewPrizeBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Award All']/following-sibling::button")
                expect(ele).toBeVisible()
                await ele.click()
        }

        async inputCouponName() {
                const ele = await this.page.frameLocator('iframe').locator("//input[@placeholder='Coupon name']")
                expect(ele).toBeVisible()
                await ele.fill("AutoCoupon")
        }

        async inputAmountOfAwarding() {
                const ele = await this.page.frameLocator('iframe').locator("//input[@placeholder='Amount Of Awarding']")
                await ele.fill("20")
        }

        async inputPercentageAwarded() {
                const ele = await this.page.frameLocator('iframe').locator("//input[@placeholder='Percentage Value']")
                await ele.fill("10")
        }

        async clickCouponPrizeSelectBtn() {
                // await page.frameLocator('iframe').locator('text=Coupon Prize Select *Select a coupon >> div').nth(2).click();
                const ele = await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1qf0ezp']")
                await ele.click()
        }
        async selectCouponPrizeSelect() {
                const ele = await this.page.frameLocator('iframe').locator("(//button[text()='Select'])[1]")
                await ele.click()
        }
        async clickSaveBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Save']")
                await ele.click()
        }


        async clickDeleteBtn() {
                let ele = await this.page.frameLocator('iframe').locator("(//button[text()='Delete'])[1]").isVisible()
                if ((ele == true)) {
                        // console.log("delete Uploaded Leaderboard BG")
                        await this.page.frameLocator('iframe')
                                .locator("(//button[text()='Delete'])[1]")
                                .click()
                }

        }

        async clickConfirmDeleteBtn() {
                let ele = await this.page.frameLocator('iframe').locator("//div[contains(@class,'MuiDialogActions-root MuiDialogActions-spacing')]//button[1]").isVisible()
                if ((ele == true)) {
                        // console.log("delete Uploaded Leaderboard BG")
                        await this.page.frameLocator('iframe')
                                .locator("//div[contains(@class,'MuiDialogActions-root MuiDialogActions-spacing')]//button[1]")
                                .click()
                }

        }




        //🔚 Closed Prizing  Section Element 
        //=======================================================
        //▶▶Start Anlaytics  Section Element  




        async clickAnalyticsSection() {
                await this.page.frameLocator('iframe').locator("//p[text()='Analytics']").last().click({force:true})

        }

        async clickToStopLiveGame() {
                // Click text=AutoStart
                await this.page.frameLocator('iframe').locator('text=AutoLive').click();

        }



        async verifySessionAnalyticsText() {
                const ele = await this.page.frameLocator('iframe').locator("//h4[text()='Session Analytics']")
                expect(ele).toContainText("Session Analytics")
        }

        async downloadAnlytics() {
                // Click text=Export 
                const [download] = await Promise.all([
                        this.page.waitForEvent('download'),
                        this.page.frameLocator('iframe').locator("(//button[text()='Export'])[1]").click()
                ]);
        }





        async click_closebutton_in_mobilelinkmodal (){
                await this.page.frameLocator('.css-r99fy3').locator('(//div[@role="dialog"]//button)[1]').click()
        }

        async clickStartGameBtn() {

                await this.page.frameLocator('.css-r99fy3').locator('//h6[text()="Auto"]//following-sibling::div//button[text()="Start"]').click();

                // const ele = await this.page.frameLocator('iframe').locator('text=Start').nth(1)
                // expect(ele).toBeVisible()
                // await ele.click({force:true})

        }

        async clickStartGameOkBtn() {

                await this.page.frameLocator('.css-r99fy3').locator("//button[text()='Ok']").click();

                // const ele = await this.page.frameLocator('iframe').locator('text=Start').nth(1)
                // expect(ele).toBeVisible()
                // await ele.click({force:true})

        }

        async clickStopGameOkBtn() {

                await this.page.frameLocator('iframe').locator("//button[text()='Ok']").click();

                // const ele = await this.page.frameLocator('iframe').locator('text=Start').nth(1)
                // expect(ele).toBeVisible()
                // await ele.click({force:true})

        }



        async clickMobileLinkBtn() {
                // Click text=AutoStart >> button >> nth=1
                await this.page.frameLocator('.css-r99fy3').locator('//h6[text()="Auto"]//following-sibling::div//button[2]').click();

                // const ele = await this.page.frameLocator('iframe').locator('text=AutoStop >> [data-testid="MobileScreenShareIcon"]')
                // expect(ele).toBeVisible()
                // await ele.click({force:true})

        }

        async  clickMobileLinkOpenBtn() {

                // Click text=Open Link
                const [page1] = await Promise.all([
                        this.page.waitForEvent('popup'),
                        this.page.frameLocator('.css-r99fy3').locator("//a[text()='Open Link']").click()
                ]);

                return page1;


        }

        async clickMobileLinkCopyBtn() {

                // Click text=Open Link

                await this.page.frameLocator('.css-r99fy3').locator('text=Copy Link').click()



        }
        //QR code section here
        async clickQRcodebutton(){
                
                await  this.page.frameLocator('.css-r99fy3').locator('//h6[text()="Auto"]//following-sibling::div//button[3]').click()

        }

        async validateQRtext(){
                const ele = this.page.frameLocator('.css-r99fy3').locator('//h2[text()="Mobile QR Code"]')
                await expect(ele).toBeVisible()
        }
        async validateDownload(){
                
                const [download] = await Promise.all([
                         this.page.waitForEvent('download'),
                         this.page.frameLocator('.css-r99fy3').locator('//button[text()="Save QR Code"]').click()
              ])
                const suggestedFileName = download.suggestedFilename()
                const filePath = 'Test_data_that_gets_downloaded/' + suggestedFileName
                await download.saveAs(filePath)
                expect(existsSync(filePath)).toBeTruthy()
        }

        async clickQRcodecopybtn(){
                await  this.page.frameLocator('.css-r99fy3').locator('//button[text()="Copy QR Code"]').click()
        }





//Edit Section Element Here


async clickEditSection() {
        await this.page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsEditDelete >> p').nth(5).click()

}


async inputEditGameTitle() {
        const ele = await this.page.frameLocator('iframe').locator('input[type="text"]')
        await ele.fill("Auto")

}
async clickEditBtn(){
        const editBtn = await this.page.frameLocator('iframe').locator("//button[text()='EDIT']")
        expect(editBtn).toBeVisible()
        await editBtn.click()
}


        async clickGameDeleteBtn() {
                await this.page.frameLocator('iframe').locator("//p[text()='Delete']").last().click({force:true})


        }
        async confirmDeleteBtn() {
                await this.page.frameLocator('iframe').locator("//button[text()='Delete']").click();

        }









        async fileUploadCropper() {
                const chooseBtn = await this.page.frameLocator('iframe').locator("//button[text()='Choose File']")
                expect.soft(chooseBtn).toContainText("Choose File")
                await chooseBtn.click()


                const cropperSaveBtn = await this.page.frameLocator('iframe').locator("//button[text()='Save']")
                expect(cropperSaveBtn).toContainText("Save")
                await cropperSaveBtn.click({force:true})

        }










        //🔚 Closed Add New Config Section Element 
        //=======================================================
        //▶▶Start Game Design Section Element  











        async enableStage() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[1]")

                await ele.click()
                // if ((ele == false)) {
                //         // console.log("Enable Stage to be skip and jump to next one")
                //         await this.page.frameLocator('iframe')
                //                 .locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[1]")
                //                 .click()
                // }


        }

        // Mobilepage functions start from here






}

