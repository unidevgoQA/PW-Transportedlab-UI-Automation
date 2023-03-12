import { expect, Page } from "@playwright/test";
import { existsSync, lstat, readFileSync } from 'fs'
//import { error } from '../../tests/03Games/012Trivia.test';
import * as data from '@testData/login.cred.json';
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

        private guessthescorePageElements = {
                uploadFontTitle: "//p[text()='Midnight']",
                fontDeleteBtn: "//p[text()='Aa']/following-sibling::button",
                FontsText: "//h4[text()='Fonts']",
                UploadFontText: "//p[text()='Upload Font']",
                guessTheScoreSection: "//p[text()='Guess The Score']",
                configurationsText: "text=Configurations",
                AddNewConfigurationPlusButton: "(//h5[text()='Configurations']/following-sibling::button)[1]",
                ConfigurationAddButton: "//button[text()='ADD']",
                InputConfigurationName: 'input[type="string"]',
                GameDesignSection: "//p[text()='Game Design']",
                FontSection: '//p[text()="Fonts"]//parent::div',
                UploadFontBtn: '//div[@class="MuiBox-root css-3fw1ig"]',
                OpenColorSection: '//p[text()="Colors"]//parent::div',
                SwatchesPlusBtn: '//button[@aria-label="Add Color"]',
                ColorNumberFive: "(//li[contains(@class,'MuiListItem-root MuiListItem-gutters')])[5]",
                ColorNumberTwo: "(//li[contains(@class,'MuiListItem-root MuiListItem-gutters')])[2]",
                BackgroundColorText: '//p[text()="Background"]',
                BackgroundColorPicker: "//p[text()='Background']/following-sibling::button",
                textColorPicker: "//p[text()='Text']/following-sibling::button",
                HeaderColorPicker: "//p[text()='Header']/following-sibling::button",
                buttonsColorPicker: "//p[text()='Buttons']/following-sibling::button",
                EventtitlefontColorPicker: "//p[text()='Event Title Font']/following-sibling::button",
                TimerCircleColorPicker: "//p[text()='Timer Circle']/following-sibling::button",
                WoodColorPicker: "//p[text()='Wood']/following-sibling::button",
                GameplayscoretextColorPicker: "//p[text()='Gameplay Score Text']/following-sibling::button",
                TimerBackgroundColorPicker: "//p[text()='Timer Background']/following-sibling::button",
                InputButtonColor: "(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[5]",
                InputRGBFirstColor: "(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]",
                InputRGBSecondColor: "(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]",
                InputRGBThirdColor: "(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]",
                InputRGBColorOpacity: "(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]",
                InputRGBHexColor: "(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[5]",
                deletebuttonswatches: '//button[@aria-label="delete"]',
                ColorPickerSaveBtn: '//button[text()="Save"]',
                ImageSection: '//p[text()="Image Uploads"]//parent::div',
                sposnorLogoupload: '//p[text()="Sponsor Logo"]//parent::div//div[@class="MuiBox-root css-v2612"]',
                MobileBackgroundupload: '//p[text()="Mobile Background"]//parent::div//div[@class="MuiBox-root css-v2612"]',
                CropperChooseBtn: "//button[text()='Choose File']",
                DeleteUploadedMobileBackgroundImage: "//button[@aria-label='Delete']",
                DeleteUploadedBannerImage: "//button[@aria-label='Delete']",
                DeleteUploadedSponsorLogo: "//button[@aria-label='Delete']",
                DeleteUploadedGameTitleLogo: "//button[@aria-label='Delete']",
                MobileBackgroundTexts: "//p[text()='Mobile Background']",
                ProtraitBackgroundImageUploadSuccessfully: "(//button[@aria-label='Delete']//div)[1]",
                GametitlelogouploadBtn: '//p[text()="Game Title Logo"]//parent::div//div[@class="MuiBox-root css-v2612"]',
                BannerImageuploadBtn: '//p[text()="Banner Image"]//parent::div//div[@class="MuiBox-root css-v2612"]',
                OpenDialogsBtn: '//p[text()="Dialogs"]//parent::div',
                InputStandbyMessage: '//p[text()="Stand By Message"]//following-sibling::div//div[@aria-label="rdw-editor"]',
                InputCorrectGuessMessage: '//p[text()="Stand By Message"]//following-sibling::div//div[@aria-label="rdw-editor"]',
                CorrectGuessInputMessage: '//p[text()="Correct Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]',
                Leftalignedcorrectguess: '//p[text()="Correct Guess"]//following-sibling::div//div[@title="Left"]',
                Rightalignedcorrectguess: '//p[text()="Correct Guess"]//following-sibling::div//div[@title="Right"]',
                BoldCorrectGuesseditor: '//p[text()="Correct Guess"]//following-sibling::div//div[@title="Bold"]',
                Italiccorrectguesseditor: '//p[text()="Correct Guess"]//following-sibling::div//div[@title="Italic"]',
                Underlinecorrectguesseditor: '//p[text()="Correct Guess"]//following-sibling::div//div[@title="Underline"]',
                UnorderedCorrectguesseditor: '//p[text()="Correct Guess"]//following-sibling::div//div[@title="Unordered"]',
                InputCloseGuessMessage: '//p[text()="Close Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]',
                Leftalignedcloseguess: '//p[text()="Close Guess"]//following-sibling::div//div[@title="Left"]',
                Rightalignedcloseguess: '//p[text()="Close Guess"]//following-sibling::div//div[@title="Right"]',
                Boldcloseguesseditor: '//p[text()="Close Guess"]//following-sibling::div//div[@title="Bold"]',
                Italiccloseguesseditor: '//p[text()="Correct Guess"]//following-sibling::div//div[@title="Italic"]',
                Underlinecloseguesseditor: '//p[text()="Correct Guess"]//following-sibling::div//div[@title="Underline"]',
                Orderedcloseguesseditor: '//p[text()="Close Guess"]//following-sibling::div//div[@title="Ordered"]',
                Unorderedcloseguesseditor: '//p[text()="Close Guess"]//following-sibling::div//div[@title="Unordered"]',
                Incorrecguessfont: '//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-toolbar"]//a[@title="Font"]',
                arialfontincorrectguess: '//li[text()="Arial"]',
                InputincorrectGuessMessage: '//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]',
                incorrectguessblockquote: '//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-toolbar"]//a[@title="Block Type"]',
                H1blockquoteincorrectguess: '//li[text()="H1"]',
                H2blockquoteincorrectguess: '//li[text()="H2"]',
                H3blockquoteincorrectguess: '//li[text()="H3"]',
                H4blockquoteincorrectguess: '//li[text()="H4"]',
                leftalignedincorrectguess: '//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Left"]',
                rightalignedincorrectguess: '//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Right"]',
                boldincorrectguesseditor: '//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Bold"]',
                italicincorrectguesseditor: '//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Italic"]',
                underlineincorrectguesseditor: '//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Underline"]',
                orderedincorrectguesseditor: '//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Ordered"]',
                unorderedincorrectguesseditor: '//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Unordered"]',
                InputFarGuessMessage: '//p[text()="Far Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]',
                InputNoScoreMessage: '//p[text()="No Score"]//following-sibling::div//div[@aria-label="rdw-editor"]',
                Selectingatefont: '//p[text()="In-Gate Header"]//following-sibling::div//div[@aria-label="rdw-toolbar"]//a[@title="Font"]',
                Selectarialfontingate: '//li[text()="Arial"]',
                Selectingatetguessblockquote: '//p[text()="In-Gate Header"]//following-sibling::div//div[@aria-label="rdw-toolbar"]//a[@title="Block Type"]',
                Inputingateheader: '//p[text()="In-Gate Header"]//following-sibling::div//div[@aria-label="rdw-editor"]',
                LeftalignedInGateheader: '//p[text()="In-Gate Header"]//following-sibling::div//div[@title="Left"]',
                RightalignedInGateheader: '//p[text()="In-Gate Header"]//following-sibling::div//div[@aria-label="rdw-editor"]',
                BoldInGateheadereditor: '//p[text()="In-Gate Header"]//following-sibling::div//div[@title="Bold"]',
                ItalicInGateheadereditor: '//p[text()="In-Gate Header"]//following-sibling::div//div[@title="Italic"]',
                UnderlineInGateheadereditor: '//p[text()="In-Gate Header"]//following-sibling::div//div[@title="Underline"]',
                InputRidingheader: '//p[text()="Riding Header"]//following-sibling::div//div[@aria-label="rdw-editor"]',
                LeftalignedRidingheader: '//p[text()="Riding Header"]//following-sibling::div//div[@title="Left"]',
                RightalignedRidingheader: '//p[text()="Riding Header"]//following-sibling::div//div[@title="Right"]',
                BoldRidingheadereditor: '//p[text()="Riding Header"]//following-sibling::div//div[@title="Bold"]',
                ItalicRidingheadereditor: '//p[text()="Riding Header"]//following-sibling::div//div[@title="Italic"]',
                UnderlineRidingheadereditor: '//p[text()="Riding Header"]//following-sibling::div//div[@title="Underline"]',
                OrderedRidingheadereditor: '//p[text()="Riding Header"]//following-sibling::div//div[@title="Ordered"]',
                UnorderedRidingheadereditor: '//p[text()="Riding Header"]//following-sibling::div//div[@title="Unordered"]',
                InputScoringheader: '//p[text()="Scoring Header"]//following-sibling::div//div[@aria-label="rdw-editor"]',
                LeftAlignedscoring: '//p[text()="Scoring Header"]//following-sibling::div//div[@title="Left"]',
                RightAlignedscoring: '//p[text()="Scoring Header"]//following-sibling::div//div[@title="Right"]',
                BoldScoringeditor: '//p[text()="Scoring Header"]//following-sibling::div//div[@title="Bold"]',
                ItalicScoringeditor: '//p[text()="Scoring Header"]//following-sibling::div//div[@title="Italic"]',
                UnderlineScoringeditor: '//p[text()="Scoring Header"]//following-sibling::div//div[@title="Underline"]',
                Orderedscoringeditor: '//p[text()="Scoring Header"]//following-sibling::div//div[@title="Ordered"]',
                Unorderedscoringeditor: '//p[text()="Scoring Header"]//following-sibling::div//div[@title="Unordered"]',
                InputReRideheader: '//p[text()="Re-Ride Header"]//following-sibling::div//div[@aria-label="rdw-editor"]',
                RiderRoster: "//p[text()='Rider Roster']",
                AddRiderBtn: '//button[text()="Add Rider"]',
                AddRiderFirstname: '//input[@placeholder="First Name"]',
                AddRiderLastname: '//input[@placeholder="Last Name"]',
                RiderNameSaveandCloseBtn: '//button[text()="Save & Close"]',
                Searchinriderroster: '//input[@placeholder="Search..."]',
                ExportBtn: '//button[text()="Export"]',
                ImportBtn: '//button[text()="Import"]',
                CheckRidersuccessfulupload: '//p[text()="The list of riders has been successfully updated"]',
                OkAfterjsonuplod: '//button[text()="Ok"]',
                EditRiderBtn: '//button[text()="Edit"]',
                Deleteriderbutton: '//button[text()="Delete"]',
                OkindeleteriderBtn: '//button[text()="Ok"]',
                Gameoperationssection: '//p[text()="Game Operations"]',
                GameOperationAddedEventThreeDot: "//div[@class='MuiBox-root css-1ncdo3u']",
                EventStartBtn: "//p[text()='Start Event']",
                EventStopBtn: "//p[text()='Stop Event']",
                AddEventBtn: "//button[text()='Add Event']",
                InputTestEvent: '//input[@type="string"]',
                AddBtn: '//button[text()="ADD"]',
                Addridersbutton: '//button[text()="Add Riders"]',
                GamesettingsSection: "//p[text()='Game Settings']",
                InputIncorrectguesscore: '//p[text()="Incorrect Guess"]//following-sibling::div//input',
                InputCorrectguesscore: '//p[text()="Correct Guess"]//following-sibling::div//input',
                InputCloseguesscore: '//p[text()="Close Guess"]//following-sibling::div//input',
                InputFarguesscore: '//p[text()="Far Guess"]//following-sibling::div//input',
                InputGuessTime: '//p[text()="Guess Time"]//following-sibling::div//input',
                Editsection: "//p[text()='Edit']",
                EditConfigBtn: '//input[@type="string"]',
                EditBtn: '//button[text()="EDIT"]',
                Deletesection: '//p[text()="Delete"]',
                Configdeletebutton: '//button[text()="Delete"]',
                ConfigCancelBtn: "//button[text()='CANCEL']",
                DefaultConfigNameText: "//h6[text()='Default']",
                StartText: "//button[text()='Start']",
                LiveText: "//button[text()='Live']",
                StartBtn: "//button[text()='Start']",
                LiveBtn: "//button[text()='Live']",
                CancelBtn: "//button[text()='Cancel']",
                OkBtn: "//button[text()='Ok']",
                gameStartandLivePopupCloseBtn: "//div[@class='MuiBox-root css-1xnxzwa']",
                MobileLinkBtn: '//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium  css-1ctg0j5"]',
                MobileLinkOpenBtn: "//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]",
                plusBtn: "(//h5[text()='Configurations']/following-sibling::button)[1]",
                StopBtn: "//button[text()='Stop']",
                GameSettingsText: '//p[text()="Game Settings"]',
                ScoreText: '//h4[text()="Scores"]',
                CorrectGuessText: '//p[text()="Correct Guess"]',
                CloseGuessText: '//p[text()="Close Guess"]',
                FarGuessText: '//p[text()="Far Guess"]',
                IncorrectGuessText: '//p[text()="Incorrect Guess"]',
                GuessTimeText: '//p[text()="Guess Time"]',
                CloseBtn: '//div[@class="MuiBox-root css-1xnxzwa"]',
                MobileLinkText: "//h2[text()='Mobile Link']",
                MobileLinkCopyBtn: '//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium css-1oge9gb"]',
                SaveQRCodeText: '//button[text()="Save QR Code"]',
                SaveQRCodeBtn: '//button[text()="Save QR Code"]',
                CopyQRCodeText: '//button[text()="Copy QR Code"]',
                CopyQRCodeBtn: '//button[text()="Copy QR Code"]',
                OpenImageUploadSection: '//p[text()="Image Uploads"]',
                MobileBackgroundTex: '//p[text()="Mobile Background"]',
                GameTitleLogoText: '//p[text()="Game Title Logo"]',
                GameTitleLogoUploadBtn: '(//div[@class="MuiBox-root css-v2612"])[3]',
                SponsorLogoText: '//p[text()="Sponsor Logo"]',
                BannerImageText: '//p[text()="Banner Image"]',
                AnalyticsText: '//p[text()="Analytics"]',
                AnalyticsSection: '//p[text()="Analytics"]',
                DateText: '//span[text()="Date"]',
                QRScsnsText: '//span[text()="QR Scans"]',
                TotalPlayersText: '//span[text()="Total Players"]',
                UniqueUsersPlayedText: '//span[text()="Unique Users Played"]',
                ReturningUsersText: '//span[text()="Returning Users"]',
                TotalTimePlayedText: '//span[text()="Total Time Played"]',
                ActionText: '//span[text()="Action"]',
                OpacitySlider: "(//span[@class='MuiSlider-track css-19p2p10'])[2]",
                SwatchesText: '//p[text()="Swatches"]',
                ColorPickerText: "//h3[text()='Color Picker']",
                PlusBtnInColorPicker: "//button[@aria-label='Add Color']",
                RGBText: "//h3[text()='RGB']",
                inputEventName: "//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')]",
                DeleteConfiguration: '//p[text()="Delete"]',
                ConfirmDeleteConfigurationBtn: "//button[text()='Delete']",

                // boldincorrectguesseditor:'//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Bold"]',
        }


        //      async deleteUploadedFont() {

        //         const ele =  this.page.frameLocator('iframe').locator(this.guessthescorePageElements.fontDeleteBtn)
        //         if (await ele.isVisible()) {
        //                 await ele.click()
        //         }



        //      }
        async verifyUploadFontsText() {
                const ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.UploadFontText)
                if (await ele.isVisible()) {
                        await expect(ele).toContainText("Upload Font")
                }
                else throw new Error(`Trivia Upload Font text is not visible in Font section,Could not found:,"${this.guessthescorePageElements.UploadFontText}"`)

                await this.page.waitForTimeout(4000)
        }
        async clickGuessTheScoreSection() {
                let ele = this.page.locator(this.guessthescorePageElements.guessTheScoreSection)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("networkidle")
                }
                catch (error) {
                        throw (`Guess the score game page is not visible,Could not find locator:"${ele}"`)
                }
                // expect(locator).toContainText('Prize Drop')
                // await locator.click({ force: true })
                // console.log("Successfully Click To Tug of War Page ")

        }

        async verifyConfigurationsText() {
                //      const ele = await this.page.frameLocator('iframe').w('text=Title Stag')
                //         await this.page.waitForSelector(ele)

                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.configurationsText)
                try {
                        await expect(ele).toContainText("Configurations")
                }
                catch (error) {
                        throw (`Guess the score Configurations text  is not visible,Could not find locator:"${ele}"`)
                }



        }
        async clickAddNewConfigPlusBtn() {

                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.AddNewConfigurationPlusButton)
                try {
                        await ele.click()
                }
                catch (error) {
                        throw (`Guess the score add new Configurations plus button  is not visible,Could not find locator:"${ele}"`)
                }
        }

        getRandomName() {
                return "Auto" + Date.now() + "Config"
        }


        async inputConfigurationName(name: string) {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.InputConfigurationName)
                try {
                        await ele.fill(name)
                }
                catch (error) {
                        throw (`Guess the score input Configurations name field is not visible,Could not find locator:"${ele}"`)
                }

        }

        async clickAddBtn() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.ConfigurationAddButton)

                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score add Configurations button  is not visible,Could not find locator:"${ele}"`)
                }

        }

        async clickGameDesign() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.GameDesignSection).last()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score game design section  is not visible,Could not find locator:"${ele}"`)
                }
                //await this.page.waitForLoadState("networkidle")


        }

        async openfontsection() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.FontSection)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score font  section  is not visible,Could not find locator:"${ele}"`)
                }
                await this.page.waitForLoadState("networkidle")
        }
        async clickToUploadFont() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.UploadFontBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score upload font  button is not visible,Could not find locator:"${ele}"`)
                }
                await this.page.waitForLoadState("networkidle")
                await this.page.waitForTimeout(4000)

        }

        async waitforuploadcomplete() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//body//div[@font-list-mode="true"]')
                expect(ele).toBeVisible()
                await ele.click()
        }

        async opencolorssection() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.OpenColorSection)

                try {
                        expect(ele).toContainText("Colors")
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score color section  button is not visible,Could not find locator:"${ele}"`)
                }
                await this.page.waitForLoadState("networkidle")
        }

        async clickplusbuttonswatches() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.SwatchesPlusBtn)

                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score color section  Swatches plus button is not visible,Could not find locator:"${ele}"`)
                }
        }

        async selectColorNumberFive() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.ColorNumberFive)

                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score color section  Color number five input field is not visible,Could not find locator:"${ele}"`)
                }
        }

        async selectColorNumberTwo() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.ColorNumberTwo)

                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score color section  Color number two input field is not visible,Could not find locator:"${ele}"`)
                }
        }


        async verifyBackgroundColorText() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.BackgroundColorText)

                try {
                        expect(ele).toContainText("Background")
                }
                catch (error) {
                        throw (`Guess the score color section  Background text is not visible,Could not find locator:"${ele}"`)
                }


        }

        async clickBackgroundColorPicker() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.BackgroundColorPicker)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score color section  Background Color Picker button is not visible,Could not find locator:"${ele}"`)
                }
                await this.page.waitForLoadState("networkidle")

        }
        async clicktextColorPicker() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.textColorPicker)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score color section  text Color Picker button is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickHeaderColorPicker() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.HeaderColorPicker)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score color section  header color Picker button is not visible,Could not find locator:"${ele}"`)
                }

        }

        async clickbuttonsColorPicker() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.buttonsColorPicker)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score color section  button color Picker button is not visible,Could not find locator:"${ele}"`)
                }
        }

        async clickEventtitlefontColorPicker() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.EventtitlefontColorPicker)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score color section Event title font color picker  button is not visible,Could not find locator:"${ele}"`)
                }

        }

        async clickTimerCircleColorPicker() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.TimerCircleColorPicker)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score color section Timer Circle color picker  button is not visible,Could not find locator:"${ele}"`)
                }

        }

        async WoodColorPicker() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.WoodColorPicker)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score color section Wood Color picker  button is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickgameplayscoretextColorPicker() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.GameplayscoretextColorPicker)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score color section Wood Color picker  button is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickTimerBackgroundColorPicker() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.TimerBackgroundColorPicker)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score color section Wood Color picker  button is not visible,Could not find locator:"${ele}"`)
                }

        }


        async inputButtonColor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputButtonColor)
                try {
                        await ele.fill("FF0000FF")
                }
                catch (error) {
                        throw (`Guess the score color section Wood Color picker  button is not visible,Could not find locator:"${ele}"`)
                }


        }
        async inputRGBFirstColor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputRGBFirstColor)
                try {
                        await ele.fill("87")
                }
                catch (error) {
                        throw (`Guess the score color section RGB first color input field is not visible,Could not find locator:"${ele}"`)
                }


        }
        async clickRGBFirstColor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputRGBFirstColor)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score color section RGB first Colo input field is not visible,Could not find locator:"${ele}"`)
                }
        }
        async inputRGBSecondColor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputRGBSecondColor)
                try {
                        await ele.fill("124")
                }
                catch (error) {
                        throw (`Guess the score color section RGB first color input field is not visible,Could not find locator:"${ele}"`)
                }

        }


        async inputRGBThirdColor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputRGBThirdColor)
                try {
                        await ele.fill("152")
                }
                catch (error) {
                        throw (`Guess the score color section RGB third color input field is not visible,Could not find locator:"${ele}"`)
                }

        }

        async inputRGBColorOpacity() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputRGBColorOpacity)
                try {
                        await ele.fill("100")
                }
                catch (error) {
                        throw (`Guess the score color section RGB color opacity input field is not visible,Could not find locator:"${ele}"`)
                }


        }


        async inputRGBColorHex() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputRGBHexColor)
                try {
                        await ele.fill("577C98FF")
                }
                catch (error) {
                        throw (`Guess the score color section RGB Hex color input field is not visible,Could not find locator:"${ele}"`)
                }


        }

        async clickdeletebuttonswatches() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.deletebuttonswatches)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score color section RGB Swatches color delete Button  is not visible,Could not find locator:"${ele}"`)
                }
        }


        async clickColorPickerSaveBtn() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.ColorPickerSaveBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score color section color picker save Button  is not visible,Could not find locator:"${ele}"`)
                }
                await this.page.waitForTimeout(2000)
        }
        //image upload starts here

        async openimagesection() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.ImageSection)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                }
                catch (error) {
                        throw (`Guess the score image section open Button  is not visible,Could not find locator:"${ele}"`)
                }

                //await this.page.waitForLoadState("")

                //await this.page.waitForLoadState("networkidle")
        }
        // async clickfullscreenlogoupload() {
        //         await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Full Screen Logo"]//parent::div//div[@class="MuiBox-root css-v2612"]').click()
        // }

        // async clickMainboardBackgroundupload() {
        //         await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mainboard Background"]//parent::div//div[@class="MuiBox-root css-v2612"]').click()
        // }

        async clicksposnorLogoupload() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.sposnorLogoupload)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score image section sponsor logo upload button is not visible,Could not find locator:"${ele}"`)
                }
        }

        async clickMobileBackgroundupload() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.MobileBackgroundupload)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score image section Mobile Background image upload button is not visible,Could not find locator:"${ele}"`)
                }
        }

        async clickCropperChooseBtn() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.CropperChooseBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score image section Copper Choose button is not visible,Could not find locator:"${ele}"`)
                }
        }

        async deleteUploadedMobileBackground() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.DeleteUploadedMobileBackgroundImage).first()
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                }

        }

        async deleteUploadedBannerImage() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.DeleteUploadedBannerImage).first()

                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                }


        }

        async deleteUploadedSponsorLogo() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.DeleteUploadedSponsorLogo).first()
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                }
        }

        async deleteUploadedGameTitleLogo() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.DeleteUploadedGameTitleLogo).first()
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                }
        }



        async verifyMobileBackgroundTexts() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.MobileBackgroundTexts)
                try {
                        await expect(ele).toContainText("Mobile Background")
                        await this.page.waitForTimeout(3000)
                }
                catch (error) {
                        throw (`Guess the score image section Mobile Background text is not visible,Could not find locator:"${ele}"`)
                }

        }

        async verifyProtraitBackgroundImageUploadSuccessfully() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.DeleteUploadedGameTitleLogo).first()
                try {

                }
                catch (error) {
                        throw (`Guess the score image section delete uploaded background image delete button is not visible,Could not find locator:"${ele}"`)
                }
        }

        async clickGametitlelogoupload() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.GametitlelogouploadBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score image section game title logo upload button is not visible,Could not find locator:"${ele}"`)
                }
        }

        async clickBannerImageupload() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.BannerImageuploadBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score image section banner image upload button is not visible,Could not find locator:"${ele}"`)
                }
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
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.OpenDialogsBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score Dialogs button is not visible,Could not find locator:"${ele}"`)
                }
        }
        async clickDeteleSection() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.DeleteConfiguration)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score Delete configuration section is not visible,Could not find locator:"${ele}"`)
                }
        }
        async confirmDeteleConfiguration() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.ConfirmDeleteConfigurationBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                }
                catch (error) {
                        throw (`Guess the scoreconfirm Delete configuration button section is not visible,Could not find locator:"${ele}"`)
                }
        }
        async typestandbymessage() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputStandbyMessage)
                try {
                        await ele.fill(" ")
                        await ele.fill("this is a test message")
                }
                catch (error) {
                        throw (`Guess the score  Stands by message input field is not visible,Could not find locator:"${ele}"`)
                }


        }
        // async typecorrectguess() {
        //         const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]')
        //         await expect(ele).toBeVisible()
        //         await ele.fill(" ")
        //         await ele.fill("this is a test message")
        // }
        async clickleftalignedcorrectguess() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputCorrectGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        await this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Leftalignedcorrectguess).click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score  correct guess input field is not visible,Could not find locator:"${ele}"`)
                }


        }
        async clickrightalignedcorrectguess() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputCorrectGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        await this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Rightalignedcorrectguess).click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score  correct guess input field is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickboldcorrectguesseditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputCorrectGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.BoldCorrectGuesseditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score Bold correct guess editor button is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  correct guess input field is not visible,Could not find locator:"${ele}"`)
                }
        }
        async clickitaliccorrectguesseditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputCorrectGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Italiccorrectguesseditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score Italic correct guess editor button is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  correct guess input field is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickunderlinecorrectguesseditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputCorrectGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Underlinecorrectguesseditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score underline correct guess editor button is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  correct guess input field is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickorderedcorrectguesseditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputCorrectGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Underlinecorrectguesseditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score ordered correct guess editor button is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  correct guess input field is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickunorderedcorrectguesseditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputCorrectGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.UnorderedCorrectguesseditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score unordered correct guess editor button is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  correct guess input field is not visible,Could not find locator:"${ele}"`)
                }

        }

        async typecloseguess() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputCloseGuessMessage)
                try {
                        await ele.fill(" ")
                        await this.page.waitForTimeout(400)
                        await ele.fill("this is a test message")
                } catch (error) {
                        throw (`Guess the score  close guess input field is not visible,Could not find locator:"${ele}"`)
                }
        }
        async clickleftalignedcloseguess() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputCloseGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Leftalignedcloseguess)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score left alignment close guess editor button is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  close guess input field is not visible,Could not find locator:"${ele}"`)
                }

        }

        async clickrightalignedcloseguess() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputCloseGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Leftalignedcloseguess)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score right alignment close guess editor button is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  close guess input field is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickboldcloseguesseditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputCloseGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Boldcloseguesseditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score bold close guess editor button is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score close guess input field is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickitaliccloseguesseditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputCloseGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Italiccloseguesseditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  italic close guess editor button is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  close guess input field is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickunderlinecloseguesseditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputCloseGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Underlinecloseguesseditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  underline close guess editor button is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  close guess input field is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickorderedcloseguesseditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputCloseGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Orderedcloseguesseditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  ordered close guess editor button is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  close guess input field is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickunorderedcloseguesseditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputCloseGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Unorderedcloseguesseditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  unordered close guess editor button is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  close guess input field is not visible,Could not find locator:"${ele}"`)

                }

        }
        async selectincorrecguessfont() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Incorrecguessfont)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch {
                        throw (`Guess the score  Incorrect close guess font button is not visible,Could not find locator:"${ele}"`)
                }
        }

        async selectarialfontincorrectguess() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.arialfontincorrectguess)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch {
                        throw (`Guess the score  arial close guess button is not visible,Could not find locator:"${ele}"`)
                }
        }

        async typeincorrectguess() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputincorrectGuessMessage)
                try {
                        await ele.fill(" ")
                        await ele.fill("this is a test message")
                }
                catch {
                        throw (`Guess the score  input incorrect guess field is not visible,Could not find locator:"${ele}"`)
                }


        }

        async selectincorrectguessblockquote() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.incorrectguessblockquote)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch {
                        throw (`Guess the score incorrect guess blockquote is not visible,Could not find locator:"${ele}"`)
                }
        }

        async selectH1blockquoteincorrectguess() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.H1blockquoteincorrectguess)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch {
                        throw (`Guess the score incorrect guess H1 blockquote is not visible,Could not find locator:"${ele}"`)
                }
        }

        async selectH2blockquoteincorrectguess() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.H2blockquoteincorrectguess)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch {
                        throw (`Guess the score incorrect guess H2 blockquote is not visible,Could not find locator:"${ele}"`)
                }
        }

        async selectH3blockquoteincorrectguess() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.H3blockquoteincorrectguess)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch {
                        throw (`Guess the score incorrect guess H3 blockquote is not visible,Could not find locator:"${ele}"`)
                }
        }

        async selectH4blockquoteincorrectguess() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.H4blockquoteincorrectguess)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch {
                        throw (`Guess the score incorrect guess H4 blockquote is not visible,Could not find locator:"${ele}"`)
                }
        }
        async clickleftalignedincorrectguess() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputincorrectGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.leftalignedincorrectguess)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  unordered incorrect guess left aligned is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  incorrect guess  input field is not visible,Could not find locator:"${ele}"`)

                }

        }
        async clickrightalignedincorrectguess() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputincorrectGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.rightalignedincorrectguess)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  unordered incorrect guess right aligned is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  incorrect guess  input field is not visible,Could not find locator:"${ele}"`)

                }

        }
        async clickboldincorrectguesseditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputincorrectGuessMessage)
                try {
                        await ele.selectText()
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.boldincorrectguesseditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score incorrect guess odred editor is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  incorrect guess  input field is not visible,Could not find locator:"${ele}"`)

                }

        }
        async clickitalicincorrectguesseditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputincorrectGuessMessage)
                try {
                        await ele.selectText()
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.italicincorrectguesseditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  incorrect guess italic is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  incorrect guess  input field is not visible,Could not find locator:"${ele}"`)

                }

        }
        async clickunderlineincorrectguesseditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputincorrectGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.underlineincorrectguesseditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  incorrect guess underline is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  incorrect guess  input field is not visible,Could not find locator:"${ele}"`)

                }

        }
        async clickorderedincorrectguesseditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputincorrectGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.orderedincorrectguesseditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  incorrect guess ordered is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  ordered guess  input field is not visible,Could not find locator:"${ele}"`)

                }

        }
        async clickunorderedincorrectguesseditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputincorrectGuessMessage)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.orderedincorrectguesseditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  incorrect guess unordered editor is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  ordered guess  input field is not visible,Could not find locator:"${ele}"`)

                }

        }

        async typefarguess() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputFarGuessMessage)
                try {
                        await ele.fill(" ")
                        await ele.fill("this is a test message")
                }
                catch (error) {
                        throw (`Guess the score  far guess message input field is not visible,Could not find locator:"${ele}"`)
                }

        }
        async typenoscore() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputNoScoreMessage)
                try {
                        await ele.fill(" ")
                        await ele.fill("this is a test message")
                }
                catch (error) {
                        throw (`Guess the score  no score message input field is not visible,Could not find locator:"${ele}"`)
                }
        }
        async selectingatefont() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Selectingatefont)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score  ingate font is not visible,Could not find locator:"${ele}"`)
                }
        }

        async selectarialfontingate() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Selectarialfontingate)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score ingate arial font is not visible,Could not find locator:"${ele}"`)
                }
        }
        async selectingatetguessblockquote() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Selectingatetguessblockquote)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score select ingate guess blockquote is not visible,Could not find locator:"${ele}"`)
                }
        }

        async typeingateheader() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Inputingateheader)
                try {
                        await ele.fill(" ")
                        await ele.fill("this is a test message")
                }
                catch (error) {
                        throw (`Guess the score  ingate header message input field is not visible,Could not find locator:"${ele}"`)
                }
        }

        async clickleftalignedingateheader() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Inputingateheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.LeftalignedInGateheader)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  In Gate header left alignment is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  In Gate header  input field is not visible,Could not find locator:"${ele}"`)

                }

        }

        async clickrightalignedingateheader() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Inputingateheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.RightalignedInGateheader)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  In Gate header right alignment is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  In Gate header  input field is not visible,Could not find locator:"${ele}"`)

                }

        }
        async clickboldingateheadereditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Inputingateheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.BoldInGateheadereditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  In Gate header bold editor is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  In Gate header  input field is not visible,Could not find locator:"${ele}"`)

                }

        }
        async clickitalicingateheadereditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Inputingateheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.ItalicInGateheadereditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  In Gate header italic is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  In Gate header  input field is not visible,Could not find locator:"${ele}"`)

                }

        }
        async clickunderlineingateheadereditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Inputingateheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.UnderlineInGateheadereditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  In Gate header Underline is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  In Gate header  input field is not visible,Could not find locator:"${ele}"`)

                }

        }

        async typeridingheader() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputRidingheader)
                try {
                        await ele.fill(" ")
                        await ele.fill("this is a test message")
                }
                catch (error) {
                        throw (`Guess the score  riding header message input field is not visible,Could not find locator:"${ele}"`)
                }
        }

        async clickleftalignedridingheader() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputRidingheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.LeftalignedRidingheader)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  Riding header left alignment is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  In Gate header  input field is not visible,Could not find locator:"${ele}"`)

                }

        }

        async clickrightalignedridingheader() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputRidingheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.RightalignedRidingheader)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  Riding header Right alignment is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  In Gate header  input field is not visible,Could not find locator:"${ele}"`)

                }

        }
        async clickboldridingheadereditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputRidingheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.BoldRidingheadereditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  Riding header bold editor is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  In Gate header  input field is not visible,Could not find locator:"${ele}"`)

                }

        }
        async clickitalicridingheadereditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputRidingheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.ItalicRidingheadereditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  Riding header italic is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  In Gate header  input field is not visible,Could not find locator:"${ele}"`)

                }

        }
        async clickunderlineridingheadereditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputRidingheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.UnderlineRidingheadereditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  Riding header underline is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  In Gate header  input field is not visible,Could not find locator:"${ele}"`)

                }

        }
        async clickorderedridingheadereditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputRidingheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.OrderedRidingheadereditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  Riding header ordered is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  In Gate header  input field is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickunorderedridingheadereditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputRidingheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.UnorderedRidingheadereditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  Riding header unordered is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  In Gate header  input field is not visible,Could not find locator:"${ele}"`)
                }

        }

        async typescoringheader() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputScoringheader)
                try {
                        await ele.fill(" ")
                        await ele.fill("this is a test message")
                }
                catch (error) {
                        throw (`Guess the score  scoring header message input field is not visible,Could not find locator:"${ele}"`)
                }
        }
        async clickleftalignedscoring() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputScoringheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.LeftAlignedscoring)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  scoring header left alignment is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  scoring header  input field is not visible,Could not find locator:"${ele}"`)
                }

        }

        async clickrightalignedscoring() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputScoringheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.RightAlignedscoring)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  scoring header Right alignment is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  scoring header  input field is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickboldscoringeditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputScoringheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.BoldScoringeditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  scoring header bold editor is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  scoring header  input field is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickitalicscoringeditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputScoringheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.ItalicScoringeditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  scoring header Italic editor is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  scoring header  input field is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickunderlinescoringeditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputScoringheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.UnderlineScoringeditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  scoring header underline editor is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  scoring header  input field is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickorderedscoringeditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputScoringheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Orderedscoringeditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  scoring header ordered editor is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  scoring header  input field is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickunorderedscoringseditor() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputScoringheader)
                try {
                        await ele.selectText()
                        await this.page.waitForTimeout(1000)
                        let ele1 = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Unorderedscoringeditor)
                        try {
                                await ele1.click({ button: "left", delay: 1000 })
                        }
                        catch {
                                throw (`Guess the score  scoring heder unordered editor is not visible,Could not find locator:"${ele1}"`)
                        }
                }
                catch (error) {
                        throw (`Guess the score  scoring header  input field is not visible,Could not find locator:"${ele}"`)
                }

        }



        async typeRerideheader() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputReRideheader)
                try {
                        await ele.fill(" ")
                        await ele.fill("this is a test message")
                }
                catch (error) {
                        throw (`Guess the score  Re-Ride header message input field is not visible,Could not find locator:"${ele}"`)
                }
        }
        //rider roster starts here


        async clickriderroster() {
                await this.page.waitForTimeout(3000)
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.RiderRoster).last()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                }
                catch (error) {
                        throw (`Guess the score  Ride Roster section is not visible,Could not find locator:"${ele}"`)
                }
        }
        async clickaddriderbutton() {
                await this.page.waitForTimeout(1000)
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.AddRiderBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score  Ride Roster section add rider button is not visible,Could not find locator:"${ele}"`)
                }
        }

        async addriderfirstname() {
                await this.page.waitForTimeout(1000)
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.AddRiderFirstname)
                try {
                        await ele.fill('test_rider_firstname')
                }
                catch (error) {
                        throw (`Guess the score  Ride Roster section add rider first name input field is not visible,Could not find locator:"${ele}"`)
                }
                //await this.page.frameLocator('iframe').first().locator('//input[@placeholder="First Name"]').type("test_rider_firstname")

        }
        async addriderLastname() {
                await this.page.waitForTimeout(1000)
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.AddRiderLastname)
                try {
                        await ele.fill('test_rider_Lastname')
                }
                catch (error) {
                        throw (`Guess the score  Ride Roster section add rider Last name input field is not visible,Could not find locator:"${ele}"`)
                }
        }
        async clicksaveandclosebutton() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.RiderNameSaveandCloseBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score  Ride Roster section add rider name save and close button is not visible,Could not find locator:"${ele}"`)
                }
        }
        async typesearchinriderroster() {
                await this.page.waitForTimeout(1000)
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Searchinriderroster)
                try {
                        await ele.fill('test')
                }
                catch (error) {
                        throw (`Guess the score  Ride Roster section add rider Last name input field is not visible,Could not find locator:"${ele}"`)
                }
        }

        async clickexportbutton() {
                //await this.page.waitForTimeout(1000)
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.ExportBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score  Ride Roster export button is not visible,Could not find locator:"${ele}"`)
                }
        }
        async Jsonuploader() {
                const filePath0 = "testData/Riders.json"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.ImportBtn).click()
                ]);
                await fileChooser.setFiles([filePath0]);


        }
        async checksuccessfulupload() {
                await this.page.waitForTimeout(1000)
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.CheckRidersuccessfulupload)
                try {
                        await this.page.waitForTimeout(1000)
                }
                catch (error) {
                        throw (`Guess the score  Ride Roster section add rider not added is not visible,Could not find locator:"${ele}"`)
                }
        }

        async clickokafterjsonuplod() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.OkAfterjsonuplod)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score  after json upload ok button is not visible,Could not find locator:"${ele}"`)
                }
        }

        async clickeditriderbutton() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.EditRiderBtn).last()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score  edit rider button is not visible,Could not find locator:"${ele}"`)
                }
        }

        async clickdeleteriderbutton() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Deleteriderbutton).last()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score  delete rider button is not visible,Could not find locator:"${ele}"`)
                }
        }

        async clickokindeleterider() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.OkindeleteriderBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score  ok in delete rider button is not visible,Could not find locator:"${ele}"`)
                }
        }
        //game operation
        async clickgameoperationssection() {
                await this.page.waitForTimeout(2000)
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Gameoperationssection).last()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                }
                catch (error) {
                        throw (`Guess the score  game operation section is not visible,Could not find locator:"${ele}"`)
                }
                await this.page.waitForLoadState("networkidle")
        }

        async clickGameOperationAddedEventThreeDot() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.GameOperationAddedEventThreeDot)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score  game operation three dot is not visible,Could not find locator:"${ele}"`)
                }
        }


        async clickEventStartBtn() {
                await this.page.frameLocator('iframe').locator(this.guessthescorePageElements.GameOperationAddedEventThreeDot).last().click({ force: true })
                const ele = await this.page.frameLocator('iframe').locator(this.guessthescorePageElements.EventStopBtn).isVisible()
                if (ele == true) {
                        await this.page.frameLocator('iframe').locator(this.guessthescorePageElements.EventStopBtn).click({ force: true })
                        await this.page.frameLocator('iframe').locator(this.guessthescorePageElements.GameOperationAddedEventThreeDot).last().click({ force: true })
                        await this.page.frameLocator('iframe').locator(this.guessthescorePageElements.EventStartBtn).last().click({ force: true })
                }
                else {
                        await this.page.frameLocator('iframe').locator(this.guessthescorePageElements.GameOperationAddedEventThreeDot).last().click({ force: true })
                        await this.page.frameLocator('iframe').locator(this.guessthescorePageElements.EventStartBtn).last().click({ force: true })
                }
                // await this.page.waitForLoadState("networkidle")
                await this.page.waitForTimeout(3000)
        }






        async clickaddeventbutton() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.AddEventBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                }
                catch (error) {
                        throw (`Guess the score  game operation add event button is not visible,Could not find locator:"${ele}"`)
                }
        }

        async typetestevent() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.inputEventName)
                try {
                        await ele.fill('Event')
                }
                catch (error) {
                        throw (`Guess the score  game operation test event input field is not visible,Could not find locator:"${ele}"`)
                }
        }

        async clickaddbutton() {
                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.AddBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score  Add button is not visible,Could not find locator:"${ele}"`)
                }
        }

        async clickaddridersbutton() {

                let ele = this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.Addridersbutton)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score  Add Riders button is not visible,Could not find locator:"${ele}"`)
                }
                await this.page.waitForLoadState('networkidle')
        }


        // game settings

        async clickgamesettings() {
                await this.page.waitForTimeout(3000)
                let ele = await this.page.frameLocator('iframe').locator(this.guessthescorePageElements.GamesettingsSection).last()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score  game settings section is not visible,Could not find locator:"${ele}"`)
                }
        }

        async typeincorrectguesscore() {
                const ele = await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//input')
                await ele.focus();
                await this.page.keyboard.press("Meta+A");
                await this.page.keyboard.press('Backspace');
                await ele.fill('20')
        }
        async typecorrectguesscore() {
                const ele = await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//input')
                await ele.focus();
                await this.page.keyboard.press("Meta+A");
                await this.page.keyboard.press('Backspace');
                await ele.fill('50')
        }
        async typecloseguesscore() {
                const ele = await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//input')
                await ele.focus();
                await this.page.keyboard.press("Meta+A");
                await this.page.keyboard.press('Backspace');
                await ele.fill('40')
        }
        async typefarguessscore() {
                const ele = await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Far Guess"]//following-sibling::div//input')
                await ele.focus();
                await this.page.keyboard.press("Meta+A");
                await this.page.keyboard.press('Backspace');
                await ele.fill('30')
        }

        async typeguesstime() {
                const ele = await this.page.frameLocator('.css-r99fy3').locator(this.guessthescorePageElements.InputGuessTime)
                await ele.focus();
                await this.page.keyboard.press("Meta+A");
                await this.page.keyboard.press('Backspace');
                await ele.fill('5')
                await this.page.waitForTimeout(2000)
        }

        async clickeditsection() {
                await this.page.waitForTimeout(3000)
                let ele = await this.page.frameLocator('iframe').locator(this.guessthescorePageElements.Editsection).last()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                }
                catch (error) {
                        throw (`Guess the score  game settings section is not visible,Could not find locator:"${ele}"`)
                }

        }
        async editconfigname() {
                //const ele = this.page.frameLocator('iframe').first().locator('//input[@type="string"]')
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.GamesettingsSection).last()
                try {
                        await ele.fill("test_by_Automation_edited")
                }
                catch (error) {
                        throw (`Guess the score  input config field is not visible,Could not find locator:"${ele}"`)
                }


        }
        async clickeditbutton() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.EditBtn).last()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score  edit button is not visible,Could not find locator:"${ele}"`)
                }
        }
        async clickdeletesection() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.Deletesection).last()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score  delete section is not visible,Could not find locator:"${ele}"`)
                }
        }

        async clickdeletebutton() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.Configdeletebutton)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score  config delete button is not visible,Could not find locator:"${ele}"`)
                }
        }
        async verifyAddBtn() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.AddBtn)
                try {
                        await expect(ele).toContainText('ADD')
                }
                catch (error) {
                        throw (`Guess the score  config Add button is not visible,Could not find locator:"${ele}"`)
                }

        }
        async verifyCancelBtn() {
                //const ele = await this.page.frameLocator('iframe').first().locator("(//div[@class='MuiBox-root css-12mgqqu']//button)[2]")
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.ConfigCancelBtn)
                try {
                        await expect(ele).toContainText("CANCEL")
                }
                catch (error) {
                        throw (`Guess the score  config Cancel button is not visible,Could not find locator:"${ele}"`)
                }

        }
        async verifynewConfigrationText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.DefaultConfigNameText)
                try {
                        await expect(ele).toContainText('Default')
                }
                catch (error) {
                        throw (`Guess the score  config Default text is not visible,Could not find locator:"${ele}"`)
                }

        }
        async verifyStartBtn() {
                // const ele = await this.page.frameLocator('iframe').locator("//button[text()='Start']").last()
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.StartText).last()
                try {
                        await expect(ele).toContainText("Start")
                }
                catch (error) {
                        throw (`Guess the score Start text is not visible,Could not find locator:"${ele}"`)
                }


        }
        async verifyLiveBtn() {
                //const ele = await this.page.frameLocator('iframe').locator("//button[text()='Live']").last()
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.LiveText).last()
                try {
                        await expect(ele).toContainText("Live")
                }
                catch (error) {
                        throw (`Guess the score Live text is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickgameStartBtn() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.StartBtn).last()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score Start button is not visible,Could not find locator:"${ele}"`)
                }
        }
        // async clickgameStopBtn() {
        //         await this.page.frameLocator('iframe').locator("//button[text()='Stop']").last().click()
        //         await this.page.waitForTimeout(1000)
        //         await this.page.frameLocator('iframe').locator("//button[text()='Stop']").last().click()
        // }
        async clickOkBtn() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.OkBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score Ok button is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickCancelBtn() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.CancelBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score Cancel button is not visible,Could not find locator:"${ele}"`)
                }
        }
        async clickgameStartandLivePopupCloseBtn() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.gameStartandLivePopupCloseBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score game start live popup close button is not visible,Could not find locator:"${ele}"`)
                }
        }
        async verifykMobileLinkBtn() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.MobileLinkBtn).last()
                try {
                        await this.page.waitForTimeout(1000)
                }
                catch (error) {
                        throw (`Guess the score mobile link button is not visible,Could not find locator:"${ele}"`)
                }
        }
        async clickMobileLinkBtn() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.MobileLinkBtn).last()
                try {
                        await this.page.waitForTimeout(1000)
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score mobile link button is not visible,Could not find locator:"${ele}"`)
                }


        }
        // async clickMobileLinkOpenBtn(){
        //         await this.page.frameLocator('iframe').locator("//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]").click()
        // }

        async clickMobileLinkOpenBtn() {

                // Click text=Open Link
                const [page1] = await Promise.all([
                        this.page.waitForEvent('popup'),
                        this.page.frameLocator('iframe').locator(this.guessthescorePageElements.MobileLinkOpenBtn).last().click()
                ]);

                return page1;


        }
        async verifyPlusBtn() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.plusBtn)
                try {
                        await this.page.waitForTimeout(1000)
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score plus button is not visible,Could not find locator:"${ele}"`)
                }
        }
        async clickLiveBtn() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.LiveBtn).last()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                }
                catch (error) {
                        throw (`Guess the score live button is not visible,Could not find locator:"${ele}"`)
                }

                await this.page.frameLocator('iframe').locator(this.guessthescorePageElements.StopBtn).click({ button: "left", delay: 1000 })
        }
        async verifyGameSettingsText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.GameSettingsText).last()
                try {
                        await expect(ele).toContainText("Game Settings")
                        await this.page.waitForTimeout(1000)
                }
                catch (error) {
                        throw (`Guess the score game settings text is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickGameSettings() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.GameSettingsText).last()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                }
                catch (error) {
                        throw (`Guess the score game settings is not visible,Could not find locator:"${ele}"`)
                }

        }
        async verifyScoreText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.ScoreText)
                try {
                        await this.page.waitForTimeout(1000)
                        await expect(ele).toContainText("Scores")
                }
                catch (error) {
                        throw (`Guess the score game settings Scores text is not visible,Could not find locator:"${ele}"`)
                }


        }
        async verifyCorrectGuessText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.CorrectGuessText)
                try {
                        await this.page.waitForTimeout(1000)
                        await expect(ele).toContainText("Correct Guess")
                }
                catch (error) {
                        throw (`Guess the score game settings correct guess text is not visible,Could not find locator:"${ele}"`)
                }



        }
        async verifyCloseGuessText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.CloseGuessText)
                try {
                        await this.page.waitForTimeout(1000)
                        await expect(ele).toContainText("Close Guess")
                }
                catch (error) {
                        throw (`Guess the score game settings close guess text is not visible,Could not find locator:"${ele}"`)
                }


        }
        async verifyFarGuessText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.FarGuessText)
                try {
                        await this.page.waitForTimeout(1000)
                        await expect(ele).toContainText("Far Guess")
                }
                catch (error) {
                        throw (`Guess the score game settings Far guess text is not visible,Could not find locator:"${ele}"`)
                }

        }
        async verifyIncorrectGuessText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.FarGuessText)
                try {
                        await this.page.waitForTimeout(1000)
                        await expect(ele).toContainText("Incorrect Guess")
                }
                catch (error) {
                        throw (`Guess the score game settings Incorrect guess text is not visible,Could not find locator:"${ele}"`)
                }

        }
        async verifyGuessTimeText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.FarGuessText)
                try {
                        await this.page.waitForTimeout(1000)
                        await expect(ele).toContainText("Guess Time")
                }
                catch (error) {
                        throw (`Guess the score game settings Incorrect guess text is not visible,Could not find locator:"${ele}"`)
                }


        }
        // async inputCorrectGuess() {
        //         await this.page.frameLocator('iframe').locator("(//div[contains(@class,'MuiInputBase-root MuiInput-root')])[1]").last().type("50")



        // }
        // async inputFarGuess() {
        //         await this.page.frameLocator('iframe').locator("(//div[contains(@class,'MuiInputBase-root MuiInput-root')]").last().type("30")



        // }
        // async inputCloseGuess() {
        //         await this.page.frameLocator('iframe').locator("//div[contains(@class,'MuiInputBase-root MuiInput-root')]").last().type("40")



        // }
        // async inputIncorrectGuess() {
        //         await this.page.frameLocator('iframe').locator("//input[@id='P0-87']").last().type("40")



        // }
        // async inputGuessTime() {
        //         await this.page.frameLocator('iframe').locator("//input[@id='P0-88']").last().type("10")



        // }
        async clickCloseBtn() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.CloseBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score mobile link close button is not visible,Could not find locator:"${ele}"`)
                }
        }
        async verifyMobileLinkText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.MobileLinkText)
                try {
                        await expect(ele).toContainText("Mobile Link")
                }
                catch (error) {
                        throw (`Guess the score game Mobile Link text is not visible,Could not find locator:"${ele}"`)
                }


        }
        async clickMobileLinkCopyBtn() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.MobileLinkCopyBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score game Mobile Link copy button is not visible,Could not find locator:"${ele}"`)
                }
        }
        async verifySaveQRCodeText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.SaveQRCodeText)
                try {
                        await expect(ele).toContainText("Save QR Code")
                }
                catch (error) {
                        throw (`Guess the score Mobile Link copy  button is not visible,Could not find locator:"${ele}"`)
                }


        }
        async validateSaveQRCode() {
                const [download] = await Promise.all([
                        this.page.waitForEvent('download'),
                        this.page.frameLocator('iframe').locator(this.guessthescorePageElements.SaveQRCodeBtn).click({ force: true })
                ])
                const suggestedFileName = download.suggestedFilename()
                const filePath = 'QRCode' + suggestedFileName
                await download.saveAs(filePath)
                expect(existsSync(filePath)).toBeTruthy()
        }
        async verifyCopyQRCodeText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.CopyQRCodeText)
                try {
                        await expect(ele).toContainText("Copy QR Code")
                }
                catch (error) {
                        throw (`Guess the score Copy QR Code text is not visible,Could not find locator:"${ele}"`)
                }


        }
        async clickQRcodecopybtn() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.CopyQRCodeBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score Copy QR Code button is not visible,Could not find locator:"${ele}"`)
                }
        }
        async verifyUploadFontText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.UploadFontText)
                try {
                        await expect(ele).toContainText("Upload Font")
                }
                catch (error) {
                        throw (`Guess the score upload font text is not visible,Could not find locator:"${ele}"`)
                }

        }
        async clickFontsSection() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.UploadFontText)
                try {
                        await expect(ele).toContainText("Upload Font")
                }
                catch (error) {
                        throw (`Guess the score upload font text is not visible,Could not find locator:"${ele}"`)
                }


        }
        async verifyFontsText() {
                const ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.FontsText)
                if (await ele.isVisible()) {
                        await expect(ele).toContainText("Fonts")
                }
                else throw new Error("Trivia Fonts text not visible in Game Design module")


        }
        // async verifyOpenFontsSection() {
        //         const ele = await this.page.frameLocator('iframe').locator('//p[text()="Fonts"]')
        //         expect(ele).toBeVisible()
        // }
        // async verifyUploadFontsBtn() {
        //         const ele = await this.page.frameLocator('iframe').locator('//p[text()="Upload Font"]')
        //         expect(ele).toBeVisible()
        // }
        // async verifyopencolorssection() {
        //         const ele = await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Colors"]//parent::div')
        //         expect(ele).toBeVisible()
        // }
        // async verifyColorsBackgroundText() {
        //         const ele = await this.page.frameLocator('iframe').locator('//p[text()="Background"]')
        //         expect(ele).toContainText("Background")
        // }
        // async verifyTextColorsText() {
        //         const ele = await this.page.frameLocator('iframe').locator('//p[text()="Text"]/following-sibling::button').first()
        //         expect(ele).toContainText("Text")
        // }
        // async verifyColorsHeaderText() {
        //         const ele = await this.page.frameLocator('iframe').locator('//p[text()="Header"]')
        //         expect(ele).toContainText("Header")
        // }
        // async verifyColorsButtonsText() {
        //         const ele = await this.page.frameLocator('iframe').locator('//p[text()="Buttons"]')
        //         expect(ele).toContainText("Buttons")
        // }
        // async verifyColorsMainboardBackgroundText() {
        //         const ele = await this.page.frameLocator('iframe').locator('//p[text()="Mainboard Background"]')
        //         expect(ele).toContainText("Mainboard Background")
        // }
        // async verifyColorsEventTitleFontText() {
        //         const ele = await this.page.frameLocator('iframe').locator('//p[text()="Event Title Font"]')
        //         expect(ele).toContainText("Event Title Font")
        // }
        // async verifyColorsTimerCircleText() {
        //         const ele = await this.page.frameLocator('iframe').locator('//p[text()="Timer Circle"]')
        //         expect(ele).toContainText("Timer Circle")
        // }
        // async verifyColorsWoodText() {
        //         const ele = await this.page.frameLocator('iframe').locator('//p[text()="Wood"]')
        //         expect(ele).toContainText("Wood")
        // }
        // async verifyColorsGameplayScoreText() {
        //         const ele = await this.page.frameLocator('iframe').locator('//p[text()="Gameplay Score Text"]')

        //         expect(ele).toContainText("Gameplay Score Text")
        // }
        // async verifyColorsTimerBackgroundText() {
        //         const ele = await this.page.frameLocator('iframe').locator('//p[text()="Timer Background"]')

        //         expect(ele).toContainText("Timer Background")
        // }
        async verifyopenImageUploadSection() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.OpenImageUploadSection)
                try {
                        await this.page.waitForTimeout(2000)
                }
                catch (error) {
                        throw (`Guess the score Image Uploads section is not visible,Could not find locator:"${ele}"`)
                }

        }
        async verifyMobileBackgroundText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.MobileBackgroundTex)
                try {

                        await expect(ele).toContainText("Mobile Background")
                        await this.page.waitForTimeout(1000)
                }
                catch (error) {
                        throw (`Guess the score Image Mobile Background text is not visible,Could not find locator:"${ele}"`)
                }
        }
        async verifyGameTitleLogoText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.GameTitleLogoText)
                try {

                        await expect(ele).toContainText("Game Title Logo")
                        await this.page.waitForTimeout(1000)
                }
                catch (error) {
                        throw (`Guess the score Game Title Logo text is not visible,Could not find locator:"${ele}"`)
                }
        }
        async verifySponsorLogoText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.SponsorLogoText)
                try {

                        await expect(ele).toContainText("Sponsor Logo")
                        await this.page.waitForTimeout(1000)
                }
                catch (error) {
                        throw (`Guess the score Sponsor Logo text is not visible,Could not find locator:"${ele}"`)
                }


        }
        async verifyBannerImageText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.BannerImageText)
                try {

                        await expect(ele).toContainText("Banner Image")
                }
                catch (error) {
                        throw (`Guess the score Banner Image text is not visible,Could not find locator:"${ele}"`)
                }


        }

        async verifyAnalyticsText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.AnalyticsText).last()
                try {

                        await expect(ele).toContainText("Analytics")
                }
                catch (error) {
                        throw (`Guess the score Analytics text is not visible,Could not find locator:"${ele}"`)
                }



        }
        async clickAnalyticsSection() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.AnalyticsSection).last()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score Analytics section is not visible,Could not find locator:"${ele}"`)
                }


        }
        async verifyDateText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.DateText)
                try {

                        await expect(ele).toContainText("Date")
                }
                catch (error) {
                        throw (`Guess the score Date text is not visible,Could not find locator:"${ele}"`)
                }
        }
        async verifyQRScsnsText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.QRScsnsText)
                try {

                        await expect(ele).toContainText("QR Scans")
                }
                catch (error) {
                        throw (`Guess the score QR Scans text is not visible,Could not find locator:"${ele}"`)
                }

        }
        async verifyTotalPlayersText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.TotalPlayersText)
                try {

                        await expect(ele).toContainText("Total Players")
                }
                catch (error) {
                        throw (`Guess the score QR Scans text is not visible,Could not find locator:"${ele}"`)
                }

        }
        async verifyUniqueUsersPlayedText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.UniqueUsersPlayedText)
                try {

                        await expect(ele).toContainText("Unique Users Played")
                }
                catch (error) {
                        throw (`Guess the score Unique Users Played text is not visible,Could not find locator:"${ele}"`)
                }

        }
        async verifyReturningUsersText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.ReturningUsersText)
                try {

                        await expect(ele).toContainText("Returning Users")
                }
                catch (error) {
                        throw (`Guess the score Returning Users text is not visible,Could not find locator:"${ele}"`)
                }

        }
        async verifyTotalTimePlayedText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.TotalTimePlayedText)
                try {

                        await expect(ele).toContainText("Total Time Played")
                }
                catch (error) {
                        throw (`Guess the score Total Time Played text is not visible,Could not find locator:"${ele}"`)
                }

        }
        async verifyActionText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.ActionText)
                try {

                        await expect(ele).toContainText("Action")
                }
                catch (error) {
                        throw (`Guess the score Action text is not visible,Could not find locator:"${ele}"`)
                }

        }

        async clickStartBtn() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.StartBtn).last()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                }
                catch (error) {
                        throw (`Guess the score start button is not visible,Could not find locator:"${ele}"`)
                }

        }
        async verifyOpacitySlider() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.OpacitySlider)
                try {
                        await this.page.waitForTimeout(1000)
                }
                catch (error) {
                        throw (`Guess the score Opacity slider is not visible,Could not find locator:"${ele}"`)
                }
        }

        async verifySwatchesText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.SwatchesText)
                try {

                        await expect(ele).toContainText("Swatches")
                }
                catch (error) {
                        throw (`Guess the score Swatches text is not visible,Could not find locator:"${ele}"`)
                }

        }
        async verifyColorPickerText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.ColorPickerText)
                try {

                        await expect(ele).toContainText("Color Picker")
                }
                catch (error) {
                        throw (`Guess the score Color picker text is not visible,Could not find locator:"${ele}"`)
                }

        }
        async verifyPlusBtnInColorPicker() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.SwatchesText)
                try {

                        await this.page.waitForTimeout(1000)
                }
                catch (error) {
                        throw (`Guess the score Color plus button is not visible,Could not find locator:"${ele}"`)
                }
        }
        async verifyRGBFirstColorInputField() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.InputRGBFirstColor)
                try {

                        await this.page.waitForTimeout(1000)
                }
                catch (error) {
                        throw (`Guess the score input RGB first color field is not visible,Could not find locator:"${ele}"`)
                }
        }
        async verifyRGBSecondColorInputField() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.InputRGBSecondColor)
                try {

                        await this.page.waitForTimeout(1000)
                }
                catch (error) {
                        throw (`Guess the score input RGB second color field is not visible,Could not find locator:"${ele}"`)
                }
        }
        async verifyRGBThirdColorInputField() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.InputRGBThirdColor)
                try {

                        await this.page.waitForTimeout(1000)
                }
                catch (error) {
                        throw (`Guess the score input RGB second color field is not visible,Could not find locator:"${ele}"`)
                }
        }
        async verifyRGBOpacityColorInputField() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.InputRGBColorOpacity)
                try {

                        await this.page.waitForTimeout(1000)
                }
                catch (error) {
                        throw (`Guess the score input RGB color opacity field is not visible,Could not find locator:"${ele}"`)
                }
        }
        async verifyRGBHexColorInputField() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.InputRGBColorOpacity)
                try {

                        await this.page.waitForTimeout(1000)
                }
                catch (error) {
                        throw (`Guess the score input RGB Hex color field is not visible,Could not find locator:"${ele}"`)
                }
        }
        async verifyRGBText() {
                let ele = this.page.frameLocator('iframe').locator(this.guessthescorePageElements.RGBText)
                try {
                        expect(ele).toContainText("RGB")
                }
                catch (error) {
                        throw (`Guess the score input RGB Hex color field is not visible,Could not find locator:"${ele}"`)
                }
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
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Import']")
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
                await this.page.frameLocator('iframe').locator("//button[text()='Save']")

        }
        async verifyAddEventText() {

                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Add Event']")
                expect(ele).toContainText("Add Event")
        }
        async clickeventCancelBtn() {
                await this.page.frameLocator('iframe').locator("//button[text()='CANCEL']").click()
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
                // const ele = this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1mj1ut2']")
                // ele.click()
                //  if((await this.page.frameLocator('iframe').locator("//p[text()='Start Event']").isVisible())){
                //         await this.page.frameLocator('iframe').locator("//p[text()='Start Event']").click()
                //         ele.click()
                // }

                // await this.page.frameLocator('iframe').locator("//li[contains(@class,'MuiButtonBase-root MuiMenuItem-root')]//p[1]").last().click()
                // click EventThreedot
                const ele1 = await this.page.frameLocator('iframe').locator("(//p[contains(@class,'MuiTypography-root MuiTypography-body1')]/following-sibling::div)[1]").click({ force: true })

                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Start Event']").isVisible()
                if (ele == true) {
                        //clickStartEvent
                        await this.page.frameLocator('iframe').locator("//p[text()='Start Event']").click({ force: true })
                        await this.page.setDefaultTimeout(1000)
                        //clickEventThreeDot
                        await this.page.frameLocator('iframe').locator("(//p[contains(@class,'MuiTypography-root MuiTypography-body1')]/following-sibling::div)[1]").click({ force: true })
                        await this.page.setDefaultTimeout(1000)
                        //clickEventStop
                        await this.page.frameLocator('iframe').locator("//p[text()='Stop Event']").click({ force: true })
                }
                else {
                        //clickEventThreeDot
                        await this.page.frameLocator('iframe').locator("(//p[contains(@class,'MuiTypography-root MuiTypography-body1')]/following-sibling::div)[1]").click({ force: true })
                        await this.page.setDefaultTimeout(1000)
                        await this.page.frameLocator('iframe').locator("//p[text()='Stop Event']").click()
                        //clickEventStop
                }
                //await this.page.waitForLoadState("networkidle")
                await this.page.waitForTimeout(3000)


        }
        async clickeventRename(renameevent: string) {
                await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1mj1ut2']").click()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('iframe').locator("(//li[contains(@class,'MuiButtonBase-root MuiMenuItem-root')]//p)[2]").click()
                const rename = this.page.frameLocator('iframe').locator("//input[@type='string']")
                await rename.focus()
                await this.page.keyboard.press("Meta+A");
                await this.page.keyboard.press('Backspace');
                //now type new rename event name
                rename.type(renameevent)

        }
        async clickeventDelete() {
                await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1mj1ut2']").click()
                await this.page.frameLocator('iframe').locator("//p[text()='Delete']").last().click({ force: true })
        }
        async clickridersadd() {
                const ele = await this.page.frameLocator('iframe').locator('//div[@class="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-3ci3sd"]').isVisible()
                //const ele2 = await this.page.frameLocator('iframe').locator("(//input[@class='PrivateSwitchBase-input css-1m9pwf3'])[1]")
                if (ele == true) {

                }
                else {
                        await this.page.frameLocator('iframe').locator("(//input[@class='PrivateSwitchBase-input css-1m9pwf3'])[1]").click()
                }
        }
        async clickridersSaveBtn() {
                await this.page.frameLocator('iframe').locator("//button[text()='Save Riders']").click()
        }
        async clicksLiveGameOkBtn() {
                await this.page.frameLocator('.css-r99fy3').locator("//button[text()='Ok']").click();
        }
        async clickMoveToNextBtn() {
                const ele = this.page.frameLocator('.css-r99fy3').locator("//button[text()='Move to Next']")
                //expect(ele).toContainText("Move to Next")
                await this.page.waitForTimeout(1000)
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
                const ele = await this.page.frameLocator('iframe').locator("(//button[@aria-label='Delete']//div)[2]")
                expect(ele).toBeVisible()
        }

        async verifySponsorLogoUploadSuccessfully() {
                const ele = await this.page.frameLocator('iframe').locator("(//button[@aria-label='Delete']//div)[3]")
                expect(ele).toBeVisible()
        }
        async verifyBannerImageUploadSuccessfully() {
                const ele = await this.page.frameLocator('iframe').locator("(//button[@aria-label='Delete']//div)[4]")
                expect(ele).toBeVisible()
        }
        async verifyEditConfigurationText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Edit Configuration']")
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
        async verifyEditBtn(name: string) {
                const editfield = await this.page.frameLocator('iframe').locator("//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')]")
                await editfield.focus();
                await this.page.keyboard.press("Meta+A");
                await this.page.keyboard.press('Backspace');
                await editfield.type(name)
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


}