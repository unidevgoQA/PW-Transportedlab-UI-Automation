import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'





export default class tugOfWarPage {
        private page: Page;
        constructor(page: Page) {
                this.page = page;
        }

        private tugOfWarPageElements = {
                tugOfWarText: `text=Tug of War`,
                configrationTitleText: "Configurations",
                buttonListIteam: "listitem",
                addNewConfigPlusBtn: "button",
                newConfigTitleText: `New Configuration`,
                configInputField: `textbox`,
                configAddBtn: `ADD`,
                errorAlertMassage: "Incorrect configuration name",
                gameStageBtn: `//p[text()='Stages']`,
                gameSettingsBtn: "//p[text()='Game Settings']",
                fontUploadInputField: "(//div[@class='MuiBox-root css-v2612'])[1]",
                fontTitleText: `//h4[text()='Fonts']`,
                uploadedFontTitleText: "//p[text()='Midnight']",
                colorsTitleText: "//h4[text()='Colors']",
                primaryColorTitleText: "//p[text()='Primary Color']",
                primaryColorInputFieldBtn: "//p[text()='Primary Color']/following-sibling::button",
                primaryColorInputField: `[maxlength="8"]`,
                colorInputWindowSaveBtn: "//button[text()='Save']",
                secondaryColorTitleText: "//p[text()='Secondary Color']",
                secondaryColorInputField: "//p[text()='Secondary Color']/following-sibling::button",
                textColorTitleText: "//p[text()='Text Color']",
                textColorInputField: "//p[text()='Text Color']/following-sibling::button",
                clearAllBtn: "//button[text()='Clear All']",
                mainboardTitleText: "//h5[text()='Mainboard Background']",
                mainBoardImageUploadInputField: "(//div[@class='MuiBox-root css-v2612'])[2]",
                mobileBackgroundTitleText: "//h5[text()='Mobile Background']",
                mobileBackgroundUploadInputField: "(//div[@class='MuiBox-root css-v2612'])[3]",
                standByMassageTitleText: "//h6[text()='Stand By Message']",
                standbyMassageInputFiled: "//textarea[@placeholder='Type message']",
                fontDeleteBtn: "//p[text()='Aa']/following-sibling::button",
                qrCodeBtn: `[data-testid="QrCodeIcon"]`,
                opneLinkInNewTab: "//a[@aria-label='Open Link']",
                mainboardBackgroundDeleteBtn: "//button[@title='Delete']",
                mobileBackgroundDeleteBtn: "(//button[@title='Delete'])[2]",
                startBtn: "//button[text()='Start']",
                stopBtn: "//button[text()='Stop']",
                customMobileWaitingMassageInputField: "//div[@aria-label='rdw-toolbar']/following-sibling::div[1]",
                customMobileWaitingMassageTitleText: "//p[text()='Custom Mobile Waiting Message']",
                sponsorLogoDeleteBtn: "(//button[@aria-label='Delete'])[4]",
                teamLogoDeleteBtn: "(//button[@aria-label='Delete'])[3]",
                gameTitleImageDeleteBtn: "(//button[@aria-label='Delete'])[2]",
                titleBackgroundImageDeleteBtn: "//button[@aria-label='Delete']",
                sponsorLogoUploadInputBtn: "(//div[@class='MuiBox-root css-v2612'])[4]",
                teamLogoUploadInputBtn: "(//div[@class='MuiBox-root css-v2612'])[3]",
                gameTitleImageUploadInputBtn: "(//div[@class='MuiBox-root css-v2612'])[2]",
                titleBackgroundImageUploadInputBtn: "//div[@class='MuiBox-root css-v2612']",






                gussTheScroeGameTitle: "//p[text()='Guess The Score']",
                triviaGameTitle: "//p[text()='Trivia']",
                liveWallGameTitle: "//p[text()='Live Wall']",
                noiseMeterGameTitle: "//p[text()='Noise Meter']",
                tugOfWarGameTitle: "//p[text()='Tug of War']",
                prizeDropGameTitle: "//p[text()='Prize Drop']",










        }





        //=======================================================
        //▶▶Start Title Stage Section Element       

        //click Tug Of War Page
        async clickTugOfWarPage() {
                await this.page.waitForSelector(this.tugOfWarPageElements.tugOfWarText)
                const ele = await this.page.locator(this.tugOfWarPageElements.tugOfWarText).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarPageElements.tugOfWarText).click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Element Is not visiable, Could not find locator: "${this.tugOfWarPageElements.tugOfWarText}"`)
                await this.page.waitForLoadState("networkidle")
                await this.page.waitForTimeout(2000)
        }

        //click Tug Of War Page
        async clickGameSettingsSection() {
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.gameSettingsBtn).last().isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.gameSettingsBtn).last().click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Game Settins Element Is not visiable, Could not find locator: "${this.tugOfWarPageElements.gameSettingsBtn}"`)
                await this.page.waitForLoadState("networkidle")
        }

        async clickQrCodeBtn() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.qrCodeBtn).last()
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Game Settins Element Is not visiable, Could not find locator: "${this.tugOfWarPageElements.gameSettingsBtn}"`)
                await this.page.waitForLoadState("networkidle")

        }

        async clickOpenLinkInNewTab() {

                // Click text=Open Link
                const [page1] = await Promise.all([
                        this.page.waitForEvent('popup'),
                        this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.opneLinkInNewTab).click({ button: "left" })
                ]);
                // await this.page.waitForLoadState("networkidle")
                await this.page.waitForTimeout(3000)
                return page1;

        }

        async verifyFontTitleText() {
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.fontTitleText).textContent()
                if ((ele == "Fonts")) {
                        console.log("Tug Of War Game Settins Font Text Element Is Successfully visiable");

                }
                else throw new Error(`Tug Of War Game Settins Font Text Element Is Not visiable, Could not find locator: "${this.tugOfWarPageElements.fontTitleText}"`)
                await this.page.waitForLoadState("networkidle")
                await this.page.waitForTimeout(3000)
        }

        async deleteUploadedFont() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.fontDeleteBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else {
                        console.log("Tug of war Game Settings Section Have No Uploaded Font Visible");
                }

        }

        async clickOnTheFontUploadInputField() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.fontUploadInputField)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Game Settins Font Upload Input Field Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.fontUploadInputField}"`)
                await this.page.waitForTimeout(4000)

        }

        async selectUploadedFont() {
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.uploadedFontTitleText).isVisible({ timeout: 9000 })
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.uploadedFontTitleText).click({ button: "left", delay: 1000, timeout: 9000 })
                }
                else throw new Error(`Tug Of War Game Settins Uploaded Font Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.uploadedFontTitleText}"`)

        }

        async clickClearAllBtn() {
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.clearAllBtn).isVisible({ timeout: 9000 })
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.clearAllBtn).click({ button: "left", delay: 1000, timeout: 9000 })
                }
                else throw new Error(`Tug Of War Game Settins Font Upload Input Field Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.clearAllBtn}"`)

        }

        async verifyPrimaryColorTitleText() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.primaryColorTitleText)
                if (await ele.isVisible()) {
                        await expect(ele).toContainText("Primary Color")
                }
                else throw new Error(`Tug Of War Game Settins Primary Color Text Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.primaryColorTitleText}"`)

        }

        async clickPrimaryColorInputField() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.primaryColorInputFieldBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Game Settins Primary Color Input Field Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.primaryColorInputFieldBtn}"`)
                await this.page.waitForTimeout(2000)
        }

        async inputPrimaryColor() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.primaryColorInputField)
                if (await ele.isVisible()) {
                        await ele.fill("355C7D", { timeout: 3000 })
                }
                else throw new Error(`Tug Of War Game Settins Primary Color Input Field Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.primaryColorInputField}"`)
        }

        async clickColorInputFieldSaveBtn() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.colorInputWindowSaveBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Game Settins Primary Color Input Window Save Btn Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.colorInputWindowSaveBtn}"`)
        }



        async verifySecondaryColorTitleText() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.secondaryColorTitleText)
                if (await ele.isVisible()) {
                        await expect(ele).toContainText("Secondary Color")
                }
                else throw new Error(`Tug Of War Game Settins Secondary Color Text Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.secondaryColorTitleText}"`)

        }

        async clickSecondaryColorInputField() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.secondaryColorInputField)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Game Settins Secondary Color Input Field Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.primaryColorInputFieldBtn}"`)
                await this.page.waitForTimeout(2000)
        }

        async inputSecondaryColor() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.primaryColorInputField)
                if (await ele.isVisible()) {
                        await ele.fill("6C5B7B", { timeout: 3000 })
                }
                else throw new Error(`Tug Of War Game Settins Secondary Color Input Field Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.primaryColorInputField}"`)
        }



        async verifyTextColorTitleText() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.textColorTitleText)
                if (await ele.isVisible()) {
                        await expect(ele).toContainText("Text Color")
                }
                else throw new Error(`Tug Of War Game Settins Text Color Text Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.textColorTitleText}"`)

        }

        async clickTextColorInputField() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.textColorInputField)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Game Settins Text Color Input Field Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.textColorInputField}"`)
                await this.page.waitForTimeout(2000)
        }

        async inputTextColor() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.primaryColorInputField)
                if (await ele.isVisible()) {
                        await ele.fill("FFFFFFFF", { timeout: 3000 })
                }
                else throw new Error(`Tug Of War Game Settins Text Color Input Field Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.primaryColorInputField}"`)
        }


        async delteMainBoardBackgroundImage() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.mainboardBackgroundDeleteBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left" })
                }
                else {
                        console.log(`Tug Of War Game Settins MainBoard Background Image Delete Btn Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.mainboardBackgroundDeleteBtn}"`);
                }
                await this.page.waitForTimeout(2000)

        }

        async delteMobileBackgroundImage() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.mobileBackgroundDeleteBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left" })
                }
                else {
                        console.log(`Tug Of War Game Settins Mobile Background Image Delete Btn Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.mainboardBackgroundDeleteBtn}"`);
                }
                await this.page.waitForTimeout(2000)
        }

        async verifyMainBoardBackgroundTitleText() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.mainboardTitleText)
                if (await ele.isVisible()) {
                        await expect(ele).toContainText("Mainboard Background")
                }
                else throw new Error(`Tug Of War Game Settins MainBoard Background Text Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.mainboardTitleText}"`)
        }

        async clickMainBoardBackgroundUploadInputField() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.mainBoardImageUploadInputField)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Game Settins MainBoard Image Upload Input Field Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.mainBoardImageUploadInputField}"`)
        }

        async verifyMobileBackgroundTitleText() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.mobileBackgroundTitleText)
                if (await ele.isVisible()) {
                        await expect(ele).toContainText("Mobile Background")
                }
                else throw new Error(`Tug Of War Game Settins MainBoard Background Text Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.mobileBackgroundTitleText}"`)
        }

        async clickMobileBackgroundUploadInputField() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.mobileBackgroundUploadInputField)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Game Settins Mobile Background Upload Input Field Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.mobileBackgroundUploadInputField}"`)
        }

        async verifyStandByTitleText() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.standByMassageTitleText)
                if (await ele.isVisible()) {
                        await expect(ele).toContainText("Stand By Message")
                }
                else throw new Error(`Tug Of War Game Settins Stand By Message Title Text Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.standByMassageTitleText}"`)
        }

        async inputStandByMassage(massage: string) {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.standbyMassageInputFiled)
                if (await ele.isVisible()) {
                        await ele.fill(massage)
                }
                else throw new Error(`Tug Of War Game Settins Stand By Massage Input Field Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.standbyMassageInputFiled}"`)
        }







        async inputConfigurationName(name: string) {
                const ele = await this.page.frameLocator('iframe').locator('//input[@type="text"]')
                await ele.fill(name)

        }


        async clickStagesBtn() {
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.gameStageBtn).last().isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.gameStageBtn).last().click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Stage Button Element Is not visiable, Could not find locator: "${this.tugOfWarPageElements.gameStageBtn}"`)
                await this.page.waitForLoadState("networkidle")


        }

        async clickGameStartBtn() {
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.startBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else {
                        console.log(`Tug Of War Game Start Btn Element Is not visiable, Could not find locator: "${this.tugOfWarPageElements.startBtn}"`)
                }
        }

        async clickGameStopBtn() {
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.stopBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else {
                        console.log(`Tug Of War Game Stop Btn Element Is not visiable, Could not find locator: "${this.tugOfWarPageElements.startBtn}"`)
                }

        }

        async verifyCustomMobileWaitingMassageTitleText() {
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.customMobileWaitingMassageTitleText)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Stage Section Custom Mobile Waiting Massage Text Is not visiable, Could not find locator: "${this.tugOfWarPageElements.customMobileWaitingMassageTitleText}"`)

        }

        async inputCustomMobileWaitingMassage() {
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.customMobileWaitingMassageInputField)
                if (await ele.isVisible()) {
                        await ele.focus()
                        await ele.fill("Please wait for game start")
                }
                else throw new Error(`Tug Of War Stage Section Custom Mobile Waiting Massage Input Field is not visiable, Could not find locator: "${this.tugOfWarPageElements.customMobileWaitingMassageInputField}"`)
                await this.page.waitForTimeout(2000)
        }

        async clickTitleBackgroundInputField() {
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.titleBackgroundImageUploadInputBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Stage Section Title Background Upload Input Field Element Is not visiable, Could not find locator: "${this.tugOfWarPageElements.titleBackgroundImageUploadInputBtn}"`)

        }

        async clickGameTitleImageInputField() {
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.gameTitleImageUploadInputBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Stage Section Game Title Image Upload Input Field Element Is not visiable, Could not find locator: "${this.tugOfWarPageElements.gameTitleImageUploadInputBtn}"`)

        }

        async clickTeamLogoInputField() {
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.teamLogoUploadInputBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Stage Section Team Logo Upload Input Field Element Is not visiable, Could not find locator: "${this.tugOfWarPageElements.teamLogoUploadInputBtn}"`)

        }

        async clickSponsorLogoInputField() {
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.sponsorLogoUploadInputBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Stage Section Sponsor Logo Upload Input Field Element Is not visiable, Could not find locator: "${this.tugOfWarPageElements.sponsorLogoUploadInputBtn}"`)

        }



        async clickTitleStageTab() {
                //      const ele = await this.page.frameLocator('iframe').w('text=Title Stag')
                //         await this.page.waitForSelector(ele)        

                await this.page.frameLocator('iframe')
                        .locator('text=Title Stage')
                        .click({ force: true })

        }

        async verifyEnableStageText() {
                //      const ele = await this.page.frameLocator('iframe').locator('text=Enable Stage to be skip and jump to next one')
                await this.page.waitForSelector('text=Enable Stage to be skip and jump to next one')
                // expect(ele).toContainText("Enable Stage to be skip and jump to next one")          


        }

        async enableStage() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]")

                await ele.check()
                // if ((ele == false)) {
                //         // console.log("Enable Stage to be skip and jump to next one")
                //         await this.page.frameLocator('iframe')
                //                 .locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[1]")
                //                 .click()
                // }


        }
        async clickImageRadioBtn() {
                const ele = await this.page.frameLocator('iframe').locator("input[value='image']").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("input[value='image']")
                                .click()
                }


        }
        async deletedUploadedTitleImageBG() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]")
                                .click()
                }


        }

        async uploadTitleBackgroundImage() {


                let filePath0 = "testData/images/CountDownStageBanner.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.frameLocator('iframe').locator('text=Title BackgroundImageVideo >> div').nth(3).click();

        }

        async clickVideoUploadCheckbox() {

                let ele = await this.page.frameLocator('iframe').locator("//input[@value='video']").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("//input[@value='video']")
                                .check()
                }
        }



        async uploadTitleBackgroundVideo() {


                let filePath0 = "testData/videos/video.mp4"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[1]").click();

        }

        async deleteUploadedGameTitleImageBG() {
                let ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]")
                                .click()
                }


        }


        async uploadGameTitleImage() {


                let filePath0 = "testData/images/SelectionStageBanner.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[2]").first().click();


        }
        async deleteUploadedTeamLogo() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]")
                                .click()
                }


        }

        async uploadTeamLogo() {


                let filePath0 = "testData/logos/gameTeamLogo.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[3]").first().click();


        }

        async deleteUploadedSponsorLogo() {
                let ele = await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1v2p79w']").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("//div[@class='MuiBox-root css-1v2p79w']")
                                .click()
                }


        }

        async clickSponsorLogoUploadIcon() {
                let ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[4]")
                await ele.click()

        }

        async clickTeamLogoUploadIcon() {
                let ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[3]")
                await ele.click()

        }

        async clickGameTitleUploadIcon() {
                let ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[2]")
                await ele.click()

        }

        async clickTitleBackgroundUploadIcon() {
                let ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[1]")
                await ele.click()

        }



        async uploadSponsorLogo() {


                let filePath0 = "testData/logos/gameLogo.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[4]").first().click();


        }

        async enableCustomSelectionMassage() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]")
                await ele.click()
                // if ((ele == false)) {
                //         // console.log("Enable Stage to be skip and jump to next one")
                //         await this.page.frameLocator('iframe')
                //                 .locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]")
                //                 .click()
                // }


        }

        async inputCustomSelectionMassage() {
                const ele = await this.page.frameLocator('iframe').locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]")
                                .fill("In publishing and graphic design, Lorem ipsum is a placeholder")
                }


        }


        //🔚 Closed Title Stage Section Element 
        //=======================================================
        //▶▶Start Selection Stage Section Element     



        async clickSelectionStagePage() {
                const locator = this.page.frameLocator('iframe').locator("//p[text()='Selection Stage']")
                await locator.click()
                // console.log("Successfully Click To Selection Stage Page ")
        }

        async clickSelectionImageText() {
                const locator = this.page.frameLocator('iframe').locator('text= Selection Images')
                expect(locator).toContainText('Selection Images')

        }

        async deleteUploadedSelactionBG() {
                let ele = await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1v2p79w']").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("//div[@class='MuiBox-root css-1v2p79w']")
                                .click()
                }


        }

        async uploadSelactionBG() {


                await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[1]").click();


        }
        async clickSecondTeamLogoUploadIcon() {


                await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-v2612']").click();


        }

        async inputSelectionStageTeamName() {
                await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]").fill("Jone Doe")


        }


        async inputSelectionStageSecondTeamName() {
                await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]").fill("Jone")


        }





        async inputNumberOfTeams() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]")
                await ele.fill('3')

        }


        async clickFirstTeamLogoUploadIcon() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[1]")
                await ele.click()

        }
        async enableAdjustableSelection() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]")
                await ele.click({ force: true })

        }

        async inputSelectionTimer() {
                const ele = await this.page.frameLocator('iframe').locator("//input[@max='59']")
                await ele.fill('20')

        }

        async enableAllowSelectionChange() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[2]")
                await ele.click()

        }


        async clickAllowSelectionChangeCheckbox() {
                let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]").isVisible()
                if ((ele == true)) {
                        // console.log("click Allow Selection Change Check box")
                        await this.page.frameLocator('iframe')
                                .locator("(//input[@type='checkbox'])[1]")
                                .click()
                }


        }
        async clickCustomSelectionMassageCheckBox() {
                let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[3]").isChecked()
                if ((ele == false)) {
                        // console.log("click Custom Selection Massage CheckBox")
                        await this.page.frameLocator('iframe')
                                .locator("(//input[@type='checkbox'])[3]")
                                .click()
                }


        }
        async inputCustomSelectionMassgeText() {
                let ele = await this.page.frameLocator('iframe').locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").isVisible()
                if ((ele == true)) {
                        // console.log("input Custom Selection Massge Text")
                        await this.page.frameLocator('iframe')
                                .locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]")
                                .fill("Demo Text Here...")
                }


        }

        async clickCustomTeamSelectionMassageCheckBox() {
                let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[4]").isChecked()
                if ((ele == false)) {
                        // console.log("click Custom Team Selection Massage Check Box")
                        await this.page.frameLocator('iframe')
                                .locator("(//input[@type='checkbox'])[4]")
                                .click()
                }


        }

        async inputCustomeTeamSectionMassage() {
                let ele = await this.page.frameLocator('iframe').locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").isVisible()
                if ((ele == true)) {
                        // console.log("click Custom Team Selection Massage Check Box")
                        await this.page.frameLocator('iframe')
                                .locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]")
                                .fill("lorim upsum dorlo")
                }


        }

        async clickTeamNameBoxColorInput() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-1pqer0i'])[1]")
                await ele.click()

        }

        async inputTeamNameBoxColorRGBFirst() {
                const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[3]')
                await ele.fill("54")

        }

        async inputTeamNameBoxColorRGBSecond() {
                const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[4]')
                await ele.fill("115")

        }
        async inputTeamNameBoxColorRGBThird() {
                const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[5]')
                await ele.fill("224")

        }

        async inputTeamNameBoxColorOpacity() {
                const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[6]')
                await ele.fill("224")

        }

        async inputTeamNameBoxColorHEXColor() {
                const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[7]')
                await ele.fill("224")

        }

        async clickSaveBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Save']")
                await ele.click()

        }


        async clickTeamSelectedMassageBoxColorInput() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-1pqer0i'])[2]")
                await ele.click()

        }

        async inputTeamSelectedMassageBoxColorRGBFirst() {
                const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[3]')
                await ele.fill("154")

        }

        async inputTeamSelectedMassageBoxColorRGBSecond() {
                const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[4]')
                await ele.fill("115")

        }
        async inputTeamSelectedMassageBoxColorRGBThird() {
                const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[5]')
                await ele.fill("224")

        }

        async inputTeamSelectedMassageBoxColorOpacity() {
                const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[6]')
                await ele.fill("224")

        }

        async inputTeamSelectedMassageBoxColorHEXColor() {
                const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[7]')
                await ele.fill("e100daff")

        }


        //🔚 Closed Selection Stage Section Element 
        //=======================================================
        //▶▶Start Countdown Stage Section Element    


        async clickCountdownStagePage() {
                const locator = this.page.frameLocator('iframe').locator("//p[text()='Countdown Stage']")
                await locator.click()
                // console.log("Successfully Click To Countdown Stage Page ")
        }

        async enableCountDownStageSkipAndJump() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("(//input[@type='checkbox'])[1]")
                                .click({ force: true })
                }


        }

        async clickCountdownImageText() {
                const locator = this.page.frameLocator('iframe').locator('text= Countdown Images')
                expect(locator).toContainText('Countdown Images')

        }

        async deleteUploadedCountdownBG() {
                let ele = await this.page.frameLocator('iframe').locator("(//button[@type='button']//div)[2]").isVisible()
                if ((ele == true)) {
                        // console.log("delete Uploaded Countdown BG")
                        await this.page.frameLocator('iframe')
                                .locator("(//button[@type='button']//div)[2]")
                                .click()
                }


        }

        async uploadCountdownBG() {



                await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-v2612']").click();


        }




        async inputAdjustableCountdownLengthTimer() {
                const ele = await this.page.frameLocator('iframe').locator("//input[@type='number']")
                await ele.fill('22')

        }


        async clickCustomCountdownMessageCheckbox() {
                let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[2]").isVisible()
                if ((ele == true)) {
                        // console.log("click Custom Countdown Message Checkbox")
                        await this.page.frameLocator('iframe')
                                .locator("(//input[@type='checkbox'])[2]")
                                .click()
                }


        }

        async inputCustomCountDownMassage() {
                let ele = await this.page.frameLocator('iframe').locator("//textarea[@placeholder='Type message']").isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe')
                                .locator("//textarea[@placeholder='Type message']")
                                .fill("In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate")
                }


        }



        //🔚 Closed Countdown Stage Section Element 
        //=======================================================
        //▶▶Start Gameplay Stage Section Element    


        async clickGameplayStagePage() {
                const locator = this.page.frameLocator('iframe').locator("//p[text()='Gameplay Stage']")
                await locator.click()
                // console.log("Successfully Click To Gameplay Stage Page ")
        }



        async clickGameplayImageText() {
                const locator = this.page.frameLocator('iframe').locator('text= Gameplay Images')
                expect(locator).toContainText('Gameplay Images')

        }

        async deleteUploadedGameplayBG() {
                let ele = await this.page.frameLocator('iframe').locator("(//button[@type='button']//div)[2]").isVisible()
                if ((ele == true)) {
                        // console.log("delete Uploaded Gameplay BG")
                        await this.page.frameLocator('iframe')
                                .locator("(//button[@type='button']//div)[2]")
                                .click()
                }


        }

        async uploadGameplayBG() {

                await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-v2612']").click();


        }


        async enableDisplayPowerMeter() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[3]").isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe')
                                .locator("(//input[@type='checkbox'])[3]")
                                .click({ force: true })
                }


        }

        async verifyPowerMethodsText() {
                const ele = await this.page.frameLocator('iframe').locator("//h6[text()='Power Methods']")
                expect(ele).toContainText("Power Methods")

        }


        async clickTapToPowerCheckbox() {
                let ele = await this.page.frameLocator('iframe').locator("(//input[@type='radio'])[3]").isVisible()
                if ((ele == true)) {

                        await this.page.frameLocator('iframe')
                                .locator("(//input[@type='radio'])[3]")
                                .click()
                }


        }

        async clickShoutToPowerCheckbox() {
                let ele = await this.page.frameLocator('iframe').locator("//input[@value='shout']").isVisible()
                if ((ele == true)) {

                        await this.page.frameLocator('iframe')
                                .locator("//input[@value='shout']")
                                .click()
                }


        }

        async clickShakeToPowerCheckbox() {
                let ele = await this.page.frameLocator('iframe').locator("//input[@value='shake']").isVisible()
                if ((ele == true)) {

                        await this.page.frameLocator('iframe')
                                .locator("//input[@value='shake']")
                                .click()
                }


        }

        async clickSwipeToPowerCheckbox() {
                let ele = await this.page.frameLocator('iframe').locator("//input[@value='swipe']").isVisible()
                if ((ele == true)) {

                        await this.page.frameLocator('iframe')
                                .locator("//input[@value='swipe']")
                                .click()
                }


        }

        async enableCustomPowerMessageCheckbox() {
                let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[4]").isVisible()
                if ((ele == true)) {

                        await this.page.frameLocator('iframe')
                                .locator("(//input[@type='checkbox'])[4]")
                                .click()
                }


        }

        async inputCustomPowerMassage() {
                let ele = await this.page.frameLocator('iframe').locator("(//textarea[@placeholder='Type message'])[3]").isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe')
                                .locator("(//textarea[@placeholder='Type message'])[3]")
                                .fill("In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate")
                }


        }


        async enableMainboardMessageCheckbox() {
                let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]").isVisible()
                if ((ele == true)) {

                        await this.page.frameLocator('iframe')
                                .locator("(//input[@type='checkbox'])[1]")
                                .click()
                }


        }

        async inputMainboardMassage() {
                let ele = await this.page.frameLocator('iframe').locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe')
                                .locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]")
                                .fill("In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate")
                }


        }
        async enableMobileMessageCheckbox() {
                let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[2]").isVisible()
                if ((ele == true)) {

                        await this.page.frameLocator('iframe')
                                .locator("(//input[@type='checkbox'])[2]")
                                .click()
                }


        }

        async inputMobileMassage() {
                let ele = await this.page.frameLocator('iframe').locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe')
                                .locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]")
                                .fill("In publishing and graphic design, Lorem ipsum ")
                }


        }
        //🔚 Closed Gameplay Stage Section Element 
        //=======================================================
        //▶▶Start Endgame Stage Section Element    




        async clickEndgameStagePage() {
                const locator = this.page.frameLocator('iframe').locator("//p[text()='EndGame Stage']")
                await locator.click({ force: true })
                // console.log("Successfully Click To Endgame Stage Page ")
        }



        async clickEndgameImageText() {
                const locator = this.page.frameLocator('iframe').locator('text= Endgame Images')
                expect(locator).toContainText('Endgame Images')

        }

        async deleteUploadedEndgameBG() {
                let ele = await this.page.frameLocator('iframe').locator("(//button[@type='button']//div)[2]").isVisible()
                if ((ele == true)) {
                        // console.log("delete Uploaded Endgame BG")
                        await this.page.frameLocator('iframe')
                                .locator("(//button[@type='button']//div)[2]")
                                .click()
                }


        }

        async uploadEndgameBG() {


                let filePath1 = "testData/images/SelectionStageBanner.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath1])
                })
                await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-v2612']").first().click();


        }




        async inputCustomEndgamerMassage() {
                const ele = await this.page.frameLocator('iframe').locator("(//textarea[@placeholder='Type message'])[1]")
                await ele.fill('Lorem ipsum, in graphical and textual context, refers to filler text that is placed')

        }



        async inputCustomWinnerTitle() {
                let ele = await this.page.frameLocator('iframe').locator("(//textarea[@placeholder='Type message'])[2]").isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe')
                                .locator("(//textarea[@placeholder='Type message'])[2]")
                                .fill("In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate")
                }


        }

        async inputWinnerAddURL() {
                const ele = await this.page.frameLocator('iframe').locator("//textarea[@placeholder='Type url']")
                await ele.fill('https://www.lipsum.com/')

        }

        async inputCustomConsolationMassage() {
                const ele = await this.page.frameLocator('iframe').locator("(//textarea[@placeholder='Type message'])[3]")
                await ele.fill('In publishing and graphic design')

        }

        async inputConsolationAddURL() {

                let ele = await this.page.frameLocator('iframe').locator("(//textarea[@placeholder='Type message'])[4]").isVisible()
                if ((ele == true)) {

                        await this.page.frameLocator('iframe')
                                .locator("(//textarea[@placeholder='Type message'])[4]")
                                .fill('https://www.lipsum.com/')
                }


        }



        async enableEndgameAdsBtn() {
                let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]").isVisible()
                if ((ele == true)) {
                        // console.log("click Custom Countdown Message Checkbox")
                        await this.page.frameLocator('iframe')
                                .locator("(//input[@type='checkbox'])[1]")
                                .click()
                }


        }
        async inputEndgameTimer() {
                const ele = await this.page.frameLocator('iframe').locator("//input[@type='number']")
                await ele.fill('23')

        }




        //🔚 Closed Endgame Stage Section Element 
        //=======================================================
        //▶▶Start Leaderboard Stage Section Element    




        async clickLeaderboardPage() {
                const locator = this.page.frameLocator('iframe').locator("//p[text()='Leaderboard']")
                await locator.click()
                // console.log("Successfully Click To Leaderboard Page ")
        }


        async enableStageForLeaderboard() {

                const ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]")
                await ele.check()

                // if ((ele == true)) {

                //         await this.page.frameLocator('iframe')
                //                 .locator("(//input[@type='checkbox'])[1]")
                //                 .click()
                // }


        }



        async clickLeaderboardImageText() {
                const locator = this.page.frameLocator('iframe').locator('text= Leaderboard Images')
                expect(locator).toContainText('Leaderboard Images')

        }

        async deleteUploadedLeaderboardBG() {
                let ele = await this.page.frameLocator('iframe').locator("(//button[@type='button']//div)[2]").isVisible()
                if ((ele == true)) {
                        // console.log("delete Uploaded Leaderboard BG")
                        await this.page.frameLocator('iframe')
                                .locator("(//button[@type='button']//div)[2]")
                                .click()
                }


        }

        async uploadLeaderboardBG() {


                let filePath1 = "testData/images/SelectionStageBanner.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath1])
                })
                await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[1]").click();


        }

        async deleteLeaderboardHeaderUploadedImage() {
                let ele = await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1v2p79w']").isVisible()
                if ((ele == true)) {
                        // console.log("delete Uploaded Leaderboard Header BG")
                        await this.page.frameLocator('iframe')
                                .locator("//div[@class='MuiBox-root css-1v2p79w']")
                                .click()
                }


        }

        async uploadLeaderboardHeaderImage() {


                const filePath1 = "testData/images/SelectionStageBanner.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath1])
                })
                await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[2]").click();


        }





        async fileUploadCropper() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Choose File']")
                await ele.click({ force: true })

                const saveBtn = await this.page.frameLocator('iframe').locator("//button[text()='Save']")
                await saveBtn.click()

        }

        async inputLeaderboardTimer() {
                const ele = await this.page.frameLocator('iframe').locator('[type="number"]')
                await ele.fill('23')

        }


        //🔚 Closed Leaderboard Stage Section Element 
        //=======================================================
        //▶▶Start Thankyou Stage Section Element    






        async clickThankYouStage() {
                const locator = this.page.frameLocator('iframe').locator("//p[text()='Thankyou Stage']")
                await locator.click()
                // console.log("Successfully Click To Thank you Stage Page ")
        }


        async enableStageForThankyouStage() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]").isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe')
                                .locator("(//input[@type='checkbox'])[1]")
                                .click({ force: true })
                }


        }



        async clickThankYouImagesText() {
                const locator = this.page.frameLocator('iframe').locator('text= Thank You Images')
                expect(locator).toContainText('Thank You Images')

        }

        async deleteUploadedThankYouImagesBG() {
                let ele = await this.page.frameLocator('iframe').locator("(//button[@type='button']//div)[2]").isVisible()
                if ((ele == true)) {
                        // console.log("delete Uploaded Leaderboard BG")
                        await this.page.frameLocator('iframe')
                                .locator("(//button[@type='button']//div)[2]")
                                .click()
                }


        }

        async uploadThankYouStageImagesBG() {


                let filePath1 = "testData/images/SelectionStageBanner.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath1])
                })
                await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-v2612']").first().click();


        }

        async inputUrlRedirectMassage() {
                let ele = await this.page.frameLocator('iframe').locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]")
                await ele.fill("https://garrett.testingdxp.com//")


        }


        async clickInputAutoResetTimer() {
                const ele = await this.page.frameLocator('iframe').locator("input.MuiInputBase-input.MuiOutlinedInput-input")
                await ele.click()

        }

        async inputAutoResetTimer() {
                const ele = await this.page.frameLocator('iframe').locator("input.MuiInputBase-input.MuiOutlinedInput-input")
                await ele.fill('15')

        }



        async clickCustomThankYouMassageCheckBox() {


                await this.page.frameLocator('iframe').locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]").click()


        }


        async inputCustomThankYouMassageCheckBox() {
                // await this.page.waitForSelector(`(//textarea[@placeholder='Type message'])[2]`)
                const ele = await this.page.frameLocator('iframe').locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]")
                await ele.fill("Thank You...")

        }



        //🔚 Closed Thankyou Stage Section Element 
        //=======================================================
        //▶▶Start Add New Config Section Element    

        async deleteAutoConfigurationIfHave() {
                //      const ele = await this.page.frameLocator('iframe').w('text=Title Stag')
                //         await this.page.waitForSelector(ele)        

                const ele = await this.page.frameLocator('iframe').locator('text=AutoStagesGame SettingsDelete >> p').last().isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator('text=AutoStagesGame SettingsDelete >> p').last()
                                .click({ force: true })
                }

                await this.page.waitForTimeout(3000)

                const deleteBtn = await this.page.frameLocator('iframe').locator("//p[text()='Are you sure that you want to delete this configuration?']").isVisible()
                if ((deleteBtn == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("//button[text()='Delete']")
                                .click({ force: true })
                }





        }


        async clickAddNewConfigPlusBtn() {
                await this.page.waitForTimeout(2000)
                const ele = await this.page.frameLocator('iframe').locator("(//h5[text()='Configurations']/following-sibling::button)[1]")
                await ele.click({ button: 'left', delay: 1000 })

        }

        async verifyAddNewConfigPlusWindowText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='New Configuration']")
                expect(ele).toContainText("New Configuration")

        }





        async clickAddBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='ADD']")
                expect(ele).toBeVisible()
                await ele.click()
                await this.page.waitForLoadState("networkidle")

        }


        async clickGameDeleteBtn() {
                await this.page.frameLocator('iframe').locator('text=AutoStagesGame SettingsDelete >> p').nth(2).click();

        }

        async deleteGame() {
                await this.page.frameLocator('iframe').locator("//button[text()='Delete']").click();

        }


        //🔚 Closed Add New Config Section Element 
        //=======================================================
        //▶▶Start Game Design Section Element    

        async clickGameDesignBtn() {
                await this.page.frameLocator('iframe').locator('text=AutoStagesGame SettingsDelete >> p').nth(1).click();

        }

        async clickGameSettingFromTheNewlyAddedGame() {

                const ele = await this.page.frameLocator("iframe").locator("//p[text()='Game Settings']").last()
                expect(ele).toBeVisible()
                await ele.click()

        }




        async clickUploadFontBtn() {

                await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[1]").click();

        }

        //Primary Color Section Start
        async clickPrimaryColorPickerBtn() {

                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Primary Color']/following-sibling::button")
                await ele.first().click()

        }

        async inputPrimaryRGBFirstColor() {

                const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[1]')
                await ele.fill("173")

        }
        async inputPrimaryRGBSecondColor() {

                const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[2]')
                await ele.fill("133")

        }

        async inputPrimaryRGBThirdColor() {

                const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[3]')
                await ele.fill("3")

        }

        async inputPrimaryColorOpacity() {

                const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[4]')
                await ele.fill("70")

        }

        async inputPrimaryColorHEX() {

                const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[5]')
                await ele.fill("ac8b04ff")

        }

        async clicSaveBtn() {

                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Save']")
                expect(ele).toBeVisible()
                await ele.click()

        }


        //Secondary  Color Section Start
        async clickSecondaryColorPickerBtn() {

                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Secondary Color']/following-sibling::button")
                expect(ele).toBeVisible()
                await ele.click()

        }

        async inputSecondaryRGBFirstColor() {

                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]")
                expect(ele).toBeVisible()
                await ele.fill("256")

        }
        async inputSecondaryRGBSecondColor() {

                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]")
                expect(ele).toBeVisible()
                await ele.fill("33")

        }

        async inputSecondaryRGBThirdColor() {

                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]")
                expect(ele).toBeVisible()
                await ele.fill("32")

        }

        async inputSecondaryColorOpacity() {

                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("70")

        }

        async inputSecondaryColorHEX() {

                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]")
                expect(ele).toBeVisible()
                await ele.fill("ff3b30ff")

        }


        //Secondary  Color Section Start
        async clickTextColorPickerBtn() {

                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Text Color']/following-sibling::button")
                expect(ele).toBeVisible()
                await ele.click()

        }

        async inputTextRGBFirstColor() {

                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]")
                expect(ele).toBeVisible()
                await ele.fill("167")

        }
        async inputTextRGBSecondColor() {

                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]")
                expect(ele).toBeVisible()
                await ele.fill("73")

        }

        async inputTextRGBThirdColor() {

                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]")
                expect(ele).toBeVisible()
                await ele.fill("213")

        }

        async inputTextColorOpacity() {

                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("79")

        }

        async inputTextColorHEX() {

                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]")
                expect(ele).toBeVisible()
                await ele.fill("b13cd5ff")

        }

        async clickForUploadMainboardBG() {


                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[2]")
                expect(ele).toBeVisible()
                await ele.click({ force: true })

        }

        async clickForUploadMobileBG() {

                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[2]")
                expect(ele).toBeVisible()
                await ele.click({ force: true })

        }
        async enableStandByCheckBox() {

                const ele = await this.page.frameLocator('iframe').locator("//input[@type='checkbox']")
                expect(ele).toBeVisible()
                await ele.click({ force: true })

        }





        //🔚 Closed Game Design Section Element 
        //=======================================================
        //▶▶Start Game Design Section Element    

        async clickStartGameBtn() {

                await this.page.frameLocator('iframe').locator('text=AutoStart').click();

                // const ele = await this.page.frameLocator('iframe').locator('text=Start').nth(1)
                // expect(ele).toBeVisible()
                // await ele.click({force:true})

        }
        async clickMobileLinkBtn() {

                const ele = await this.page.frameLocator('iframe').locator('text=AutoStop >> [data-testid="MobileScreenShareIcon"]')
                expect(ele).toBeVisible()
                await ele.click({ force: true })

        }

        async clickMobileLinkOpenBtn() {

                // Click text=Open Link
                const [page1] = await Promise.all([
                        this.page.waitForEvent('popup'),
                        this.page.frameLocator('iframe').locator('text=Open Link').click()
                ]);


        }

        async inputUserNameInGame() {

                const ele = await this.page.frameLocator('iframe').locator('//input[@type="text"]')
                expect(ele).toBeVisible()
                await ele.fill("Jon Doe")


        }


        getRandomName() {
                return "Auto" + Date.now() + "Name"
        }

}

