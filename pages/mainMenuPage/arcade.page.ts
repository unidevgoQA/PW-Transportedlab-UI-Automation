import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
import BaseFunctions from "@base-function/baseFunctions";

export default class arcadePage {
        private base: BaseFunctions;
        constructor(private page: Page
        ) {
                this.base = new BaseFunctions(page);
        }

        private arcadePageElements = {
                arcadePage: "//p[text()='Arcade']",
                fontsTitleText: "//h4[text()='Fonts']",
                uploadFontTitleText: "//p[text()='Upload Font']",
                uploadedFontTitleText: "//p[text()='Midnight']",
                uploadedFontDeleteBtn: "(//button[contains(@class,'MuiButtonBase-root MuiButton-root')])[1]",
                arcadeSettingsTitleText: "//h4[text()='Arcade Settings']",
                addOutSideGameBtn: "//button[text()='Add Outside Game']",
                addOutSideGameModalTitleText: "//h1[text()='Add Outside Game']",
                gameUrlTitleText: "//p[text()='Game Url']",
                gameUrlInputField: "(//p[text()='Game Url']/following::input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]",
                gameNameTitleText: "//p[text()='Game Name']",
                gameNameInputField: "//p[text()='Game Name']/following::input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')]",
                addOutSideGameModalSaveBtn: "//button[text()='Save']",
                imageTypeText: "//h4[text()='Image Type']",
                addNewSetBtn: "//button[text()='Add New Set']",
                squareBtn: "//p[text()='Square']",
                rectangleBtn: "//p[text()='Rectangle']",
                logoHeaderTitleText: "//p[text()='Logo / Header']",
                logoHeaderUploadInputField: "(//div[@class='MuiBox-root css-v2612'])[2]",
                logoHeaderDeleteBtn: "//button[@title='Delete']",                
                logoHeaderEditBtn: "(//button[@aria-label='Edit'])[1]",
                gameListTitleText: "//p[text()='Games']",
                firstGameDragAndDropBtn: "(//div[@role='button'])[1]",
                firstGameEditBtn: "(//button[@title='Edit']//div)[1]",
                firstGameNameInputField: "(//input[@placeholder='Enter game name'])[1]",
                firstGameGamesSelctionInputField: "(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[1]",
                
                phoneNumberCheckBox: "(//label[text()='Url or link']/following::input)[1]",
                emailAddressCheckBox: "(//span[text()='Phone Number']/following::input)[1]",
                ageCheckBox: "(//span[text()='Email Address']/following::input)[1]",
                dateOfBirthCheckBox: "(//span[text()='Age']/following::input)[1]",
                zipCodeCheckBox: "(//span[text()='Date of Birth']/following::input)[1]",
                urlTextInputField: "(//label[text()='Text']/following::input)[1]",
                errorMessageForUrlTextInputField: "//p[text()='Incorrect entry.']",
                urlLinkInputField: "(//label[text()='Url or link']/following::textarea)[1]",
                errorMassgeForUrlInputField: "//p[text()='Incorrect entry.']",
                addNewUrlBtn: "//button[text()='Add New Url']",
                addedLinkAndText: "//h6[text()='Added Links and Text']",
                deletAddedUrlLink: "//div[@class='MuiBox-root css-grxo2d']//button[1]",
                customQuestionCheckBox: "(//span[text()='Zip Code / Postal Code']/following::input)[1]",
                customQuestionInCheckBox: "//input[@type='checkbox']",
                addNewQuestionBtn: "//button[text()='Add question']",
                signUpHomeScreenRadioBtn: "//input[@value='signUpHome']",
                customQuestionScreenRadioBtn: "//input[@value='customQuestionScreen']",
                customeOptionInCheckBox: "//span[text()='Custom Opt-In']",
                addCustomQuestionInBtn: "//button[text()='Add Custom Opt-In']",
                clickFreeFormCheckBox: "//input[@value='freeform']",
                multiChoiceCheckBox: "//input[@value='multipleChoice']",
                customQuestionDiscriptionInputField: "//h5[contains(@class,'MuiTypography-root MuiTypography-h5')]/following::textarea[@rows='6']",
                addChoiceBtn: "//button[text()='Add Choice']",
                choiceInputField: "(//label[text()='Give some description here...']/following::input)[1]",
                customQuestionMendotoryCheckBox: "(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]",
                customQuestionSaveBtn: "//button[text()='Save']",
                deleteAddedCustomQuestion: "(//div[@class='MuiBox-root css-1519m8w']//button)[2]",
                smsCheckBox: "//input[@value='sms']",
                customQuestionPromptInputField: "(//label[text()='Give some description here...']/following::textarea)[1]",
                customQuestionPromptAutoCheckBox: "//h4/following::input[@type='checkbox']",
                customOptionInCheckBox: "(//span[text()='Custom Opt-In']/preceding::input[@type='checkbox'])[1]",
                addedCustomQuestionInDeleteBtn: "(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]/following-sibling::button)[3]"






        }   
















// export default class arcadePage {
//         [x: string]: any;

//         private page: Page;
//         static buffer: void;
//         constructor(page: Page) {
//                 this.page = page;
//         }



        async checkFontsText() {
                const ele = this.page.locator("(//h4[text()='Fonts'])[1]")
                expect(ele).toContainText('Fonts')
        }
        async checkUploadFontText() {
                const ele = this.page.locator("(//p[text()='Upload Font'])[1]")
                expect(ele).toContainText('Upload Font')
        }
        async uploadFont() {

                const buffer = readFileSync('testData/fonts/Midnight.ttf');
                // Create the DataTransfer and File
                const dataTransfer = await this.page.evaluateHandle((data) => {
                        const dt = new DataTransfer();
                        // Convert the buffer to a hex array
                        const file = new File([data.toString('hex')], 'Midnight.ttf', { type: 'application/ttf' });
                        dt.items.add(file);
                        return dt;
                }, buffer);

                // Now dispatch
                await this.page.dispatchEvent("//div[@class='MuiBox-root css-v2612']", 'drop', { dataTransfer });
        }
        async clickDeletefont(){
                const ele = this.page.locator("//button[@class='MuiButtonBase-root MuiButton-root MuiButton-contained MuiButton-containedError MuiButton-sizeIconSmall MuiButton-containedSizeIconSmall MuiButton-root MuiButton-contained MuiButton-containedError MuiButton-sizeIconSmall MuiButton-containedSizeIconSmall css-1r4p8ew'] >> nth=0")
                await expect(ele).toBeVisible()
                await ele.click()
        }

        async checkArcadesettingtext(){
                const ele = this.page.locator("(//h4[text()='Arcade Settings'])[1]")
                expect(ele).toContainText('Arcade Settings')
        }
        async clickaddOutsidegame(){
                const ele = this.page.locator("//button[text()='Add Outside Game']")
                expect(ele).toContainText('Add Outside Game')
                await ele.click()
        }
        async clickclosebutton(){
                const closebutton= this.page.locator("//div[@class='MuiBox-root css-1ydarmv']//parent::button")
                await expect(closebutton).toBeVisible()
                await closebutton.click()
        }

        
        async verifyImageTypeText() {
         
                const ele = await this.page.locator("//h4[text()='Image Type']")
                expect.soft(ele).toContainText("Image Type")
          

        }

        

        async addnewgame(){
                const gameUrl=this.page.locator('#P-12890536272')
                await gameUrl.type("https://garrett.testingdxp.com/")

                const gamename = this.page.locator('#P2184981822')
                await gamename.type("Auto")

                const savebutton= this.page.locator("//button[text()='Save']")
                await savebutton.click()
        }


        async deleteLogoHeader() {
                let ele = await this.page.locator("//div[@class='MuiBox-root css-1tejaop']").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("//div[@class='MuiBox-root css-1tejaop']")
                                .click()
                }


        }


        async clickToUploadLogoHeader() {
         
                const ele = await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[2]")
                expect.soft(ele).toBeVisible()
                await ele.click()

        }

       async clickChooseBtn() {
         
                const ele = await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[2]")
                expect.soft(ele).toBeVisible()
                await ele.click()

        }
        




        async clickSquareTypeBtn() {
                let ele = await this.page.locator("//p[text()='Square']").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("//p[text()='Square']")
                                .click({force:true})
                }


        }


        async clickRectangleTypeBtn() {
                let ele = await this.page.locator("//p[text()='Rectangle']").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("//p[text()='Rectangle']")
                                .click({force:true})
                }


        }

        async enablePrizeDropCheckBox() {
                let ele = await this.page.locator("(//input[@type='checkbox'])[1]").isChecked()
                if ((ele == false)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//input[@type='checkbox'])[1]")
                                .check()
                }


        }

        async enableTugofWarCheckBox() {
                let ele = await this.page.locator("(//input[@type='checkbox'])[2]").isChecked()
                if ((ele == false)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//input[@type='checkbox'])[2]")
                                .check()
                }


        }

        async enableARFanaticsFiltersCheckBox() {
                let ele = await this.page.locator("(//input[@type='checkbox'])[3]").isChecked()
                if ((ele == false)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//input[@type='checkbox'])[3]")
                                .check()
                }


        }
        async enableNoiseMeterCheckBox() {
                let ele = await this.page.locator("(//input[@type='checkbox'])[4]").isChecked()
                if ((ele == false)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//input[@type='checkbox'])[4]")
                                .check()
                }


        }

        async enableLiveWallCheckBox() {
                let ele = await this.page.locator("(//input[@type='checkbox'])[5]").isChecked()
                if ((ele == false)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//input[@type='checkbox'])[5]")
                                .check()
                }


        }
        async clickToSelectDefultPrizeDrop() {
                let ele = await this.page.locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[1]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[1]")
                                .click()
                }


        }

        async selectDefultGame() {
                let ele = await this.page.locator("//li[@data-value='Default']").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("//li[@data-value='Default']")
                                .click({force:true})
                }


        }

        async clickToSelectDefultTugOfWar() {
                let ele = await this.page.locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[2]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[2]")
                                .click()
                }


        }

        async clickToSelectDefultArFanatics() {
                let ele = await this.page.locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[3]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[3]")
                                .click()
                }


        }

        async clickToSelectDefultNoiseMeter() {
                let ele = await this.page.locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[4]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[4]")
                                .click()
                }


        }
        


        async clickToSelectDefultLiveWall() {
                let ele = await this.page.locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[5]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[5]")
                                .click()
                }


        }

        async clickOutSideGameDeleteBtn() {
                await this.page.locator("//div[@icon='assets/delete.d492d3e8.svg']").last().click({force:true})
                // let ele = await this.page.locator("//div[@class='MuiBox-root css-flxl8s']").last().isVisible()
                // if ((ele == true)) {
                //         // console.log("Enable Stage to be skip and jump to next one")
                //         await this.page
                //                 .locator("//div[@class='MuiBox-root css-flxl8s']").last()
                //                 .click({force:true})
                // }


        }

        async clickToUploadGameLogo() {
                let ele = await this.page.locator("//div[@class='MuiBox-root css-pvw61w']").last().isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("//div[@class='MuiBox-root css-pvw61w']").last()
                                .click()
                }


        }

        







        
    }