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
                addNewConfigPlusBtn: "(//h5[text()='Configurations']/following-sibling::button)[1]",
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
                cofigNameInputField: `//input[@type="text"]`,
                addNewBtn: "//button[text()='ADD']",
                newConfigurationTitleText: "//p[text()='New Configuration']",














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
               async clickAddNewConfigPlusBtn() {                
                const ele = await this.page.locator(this.tugOfWarPageElements.addNewConfigPlusBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Add New Plus Btn Element Is not visiable, Could not find locator: "${this.tugOfWarPageElements.addNewConfigPlusBtn}"`)
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

        async verifyAddNewConfigPlusWindowText() {
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.newConfigTitleText)
                if (await ele.isVisible()) {
                        await expect(ele).toContainText("New Configuration")
                }
                else throw new Error(`Tug Of War New Configuration Text Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.newConfigTitleText}"`)

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
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.cofigNameInputField)
                if (await ele.isVisible()) {
                        await ele.fill(name)
                }
                else throw new Error(`Tug Of War Game Settins Stand By Massage Input Field Element Is Not visiable, Could not find locator:"${this.tugOfWarPageElements.cofigNameInputField}"`)

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

        async clickAddBtn() {
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.addNewBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Tug Of War Add New Button Element Is not visiable, Could not find locator: "${this.tugOfWarPageElements.addNewBtn}"`)

        }







































































































































}

