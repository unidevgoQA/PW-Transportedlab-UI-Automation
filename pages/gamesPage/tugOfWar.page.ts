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
                customMobileWaitingMassageInputField: "//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']",
                customMobileWaitingMassageTitleText: "//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']",
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
                FontCustommobilewaitingMessageDRP:"(//div[@class='rdw-dropdown-carettoopen'])[2]",
                FontArial:"//li[text()='Arial']",
                CharacterDRopdown:"(//div[@class='rdw-dropdown-carettoopen'])[3]",
                CustomMobilewaitingMSGNOrmal:"//li[text()='Normal']",
                CustomMobilewaitingMSGH1:"//li[text()='H1']",
                CustomMobilewaitingMSGH2:"//li[text()='H2']",
                CustomMobilewaitingMSGH3:"//li[text()='H3']",
                CustomMobilewaitingMSGH4:"//li[text()='H4']",
                CustomMobilewaitingMSGH5:"//li[text()='H5']",
                CustomMobilewaitingMSGH6:"//li[text()='H6']",
                CustomMobilewaitingMSGBlock:"//li[text()='Blockquote']",
                CustomMobileWaitingMSGBold:"//div[@title='Bold']//img[1]",
                CustomMobileWaitingMSGItalic:"//div[@title='Italic']//img[1]",
                CustomMobileWaitingMSGUnderline:"//div[@title='Underline']",
                CustomMobileWaitingMSGStrikeThrough:"//div[@title='Strikethrough']",
                CustomMobileWaitingMSGColorPicker:"//div[@title='Color Picker']",
                CustomMobileWaitingMSGColor1:"(//span[@class='rdw-colorpicker-cube'])[1]",
                CustomMobileWaitingMSGHighlights:"//span[text()='Highlight']",
                CustomMobileWaitingMSGHighlightsColor1:"(//span[@class='rdw-colorpicker-cube'])[1]",
                CustomMobileWaitingMSGLeftAlignment:"//div[@title='Left']//img[1]",
                CustomMobileWaitingMSGCenterAlignment:"//div[@title='Center']//img[1]",
                CustomMobileWaitingMSGRightAlignment:"//div[@title='Right']",
                CustomMobileWaitingMSGOutdent:"//div[@title='Outdent']//img[1]",
                CustomMobileWaitingMSGINdent:"//div[@title='Indent']//img[1]",
                CustomMobileWaitingMSGOrderd:"//div[@title='Ordered']//img[1]",
                CustomMobileWaitingMSGUnOrderd:"//div[@title='Unordered']//img[1]",
                CustomMobileWaitingMSGRemoverStyles:"//div[@title='Remove(styles) only']//img[1]",
                TitlebackgroundImageoptionSelector:"(//input[@class='PrivateSwitchBase-input css-1m9pwf3'])[1]",

                TitleBackgroundImageUploadBTN:"(//div[@class='MuiBox-root css-v2612'])[1]",
                DeleteUploadedImage:"//div[@class='MuiBox-root css-1tejaop']",
                VideoOPtionSelector:"(//input[@class='PrivateSwitchBase-input css-1m9pwf3'])[2]",
                VideoDeleteBTN:"//button[@aria-label='Delete']",
                UploadTitleBackgroundVideoBTN:"(//div[@class='MuiBox-root css-v2612'])[1]",
                spomsorLogoUploadBTn:"(//div[@class='MuiBox-root css-3fw1ig']//div)[4]",
                TeamLogoUploadBtn:"(//div[@class='MuiBox-root css-v2612'])[3]",
                GameTitleImage:"(//div[@class='MuiBox-root css-v2612'])[2]",
                SelectionIMageImageOption:"(//input[@class='PrivateSwitchBase-input css-1m9pwf3'])[1]",
                NavigateToTheSelectionStage:"(//div[@class='MuiBox-root css-1gcppq'])[1]",
                SelectionBackgroundImageUpload:"(//div[@class='MuiBox-root css-v2612'])[1]",
                SelectionBackgroundIMageDelete:"//div[@class='MuiBox-root css-1tejaop']",
                SelectionStageVideoOPtion:"(//input[@class='PrivateSwitchBase-input css-1m9pwf3'])[2]",
                SelectionStageVideoUploadBTN:"(//div[@class='MuiBox-root css-v2612'])[1]",
                GameStartBTN:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')])[1]",
                AdjustableTimerSelectionStage:"(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[1]",
                NumberOfTEamsINputField:"(//input[@placeholder='Type message'])[1]",
                Team1LogoUploadBTN:"(//div[@class='MuiBox-root css-v2612'])[1]",
                Team1NameInput:"(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]",
                Team2LogoUpload:"//div[@class='MuiBox-root css-v2612']",
                Team2NameInput:"(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]",
                CustomSelectionMesaage:"(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[1]",
                CustomTeamSelectionMessage:"(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[2]",
                TeamNameBoxBTn:"(//div[@class='MuiBox-root css-1pqer0i'])[1]",
                AddColor:"//button[@aria-label='Add Color']",
                RGBInput1:"(//input[@inputmode='numeric'])[1]",
                RGBInput2:"(//input[@inputmode='numeric'])[2]",
                RGBInput3:"(//input[@inputmode='numeric'])[3]",
                RGBInput4:"(//input[@inputmode='numeric'])[4]",
                ColorRGBDrpdown:"//div[contains(@class,'MuiSelect-select MuiSelect-standard')]",
                RGBSolid:"//li[@data-value='solid']",
                HoriZontal:"//li[@data-value='horizontal']",
                Vertical:"//li[@data-value='vertical']",
                Diagonal:"//li[text()='Diagonal']",
                Radial:"//li[text()='Radial']",
                RGB5input:"//div[@class='MuiBox-root css-zfy2p9']/following-sibling::input[1]",
                SaveBTNRGB:"//button[text()='Save']",
                TeamSelectedMessageBox:"//div[@class='MuiBox-root css-1pqer0i']",
                MoveToTheNextStage:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')])[2]",
                CustomCountDownMessage:"//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'][1]",
                GamePlayMainBoardMessage:"(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[1]"
















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

        // async verifyCustomMobileWaitingMassageTitleText() {
        //         const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.customMobileWaitingMassageTitleText)
        //         if (await ele.isVisible()) {
        //                 await ele.click({ button: "left", delay: 1000 })
        //         }
        //         else throw new Error(`Tug Of War Stage Section Custom Mobile Waiting Massage Text Is not visiable, Could not find locator: "${this.tugOfWarPageElements.customMobileWaitingMassageTitleText}"`)

        // }

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
        async FontSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.FontCustommobilewaitingMessageDRP)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Font Dropdown Element Not Found: "${this.tugOfWarPageElements.FontCustommobilewaitingMessageDRP}"`)

                
        }
        async ArialFontSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.FontArial)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Font Arial Element is Not Found: "${this.tugOfWarPageElements.FontArial}"`)

        }

        async ChracterDRpClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CharacterDRopdown)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Character Dropdown Is Not Found: "${this.tugOfWarPageElements.CharacterDRopdown}"`)


        }
        async NormalSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobilewaitingMSGNOrmal)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Character Dropdown Normal Option Is Not Found: "${this.tugOfWarPageElements.CustomMobilewaitingMSGNOrmal}"`)
        }
        async CustomH1Selection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobilewaitingMSGH1)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Character Dropdown H1 Option Is Not Found: "${this.tugOfWarPageElements.CustomMobilewaitingMSGH1}"`)

        }
        async CustomH2Selection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobilewaitingMSGH2)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Character Dropdown  H2 Option Is Not Found: "${this.tugOfWarPageElements.CustomMobilewaitingMSGH2}"`)

        }
        async CustomH3Selection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobilewaitingMSGH3)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Character Dropdown  H3 Option Is Not Found: "${this.tugOfWarPageElements.CustomMobilewaitingMSGH3}"`)

        }
        async CustomH4Selection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobilewaitingMSGH4)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Character Dropdown  H4 Option Is Not Found: "${this.tugOfWarPageElements.CustomMobilewaitingMSGH4}"`)

        }
        async CustomH5Selection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobilewaitingMSGH5)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Character Dropdown  H5 Option Is Not Found: "${this.tugOfWarPageElements.CustomMobilewaitingMSGH5}"`)

        }
        async CustomH6Selection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobilewaitingMSGH6)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Character Dropdown  H6 Option Is Not Found: "${this.tugOfWarPageElements.CustomMobilewaitingMSGH6}"`)

        }
        async CustomBlockquoteSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobilewaitingMSGBlock)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Character Dropdown  Blockquote Option Is Not Found: "${this.tugOfWarPageElements.CustomMobilewaitingMSGBlock}"`)

        }
        async CustomBoldSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobileWaitingMSGBold)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Bold Option Is Not Found: "${this.tugOfWarPageElements.CustomMobileWaitingMSGBold}"`)

        }
        async CustomItalicSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobileWaitingMSGItalic)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Italic Option Is Not Found: "${this.tugOfWarPageElements.CustomMobileWaitingMSGItalic}"`)

        }
        async CustomUnderlineSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobileWaitingMSGUnderline)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Italic Option Is Not Found: "${this.tugOfWarPageElements.CustomMobileWaitingMSGUnderline}"`)

        }
        async CustomStrikethroughSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobileWaitingMSGStrikeThrough)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Strikethrough Option Is Not Found: "${this.tugOfWarPageElements.CustomMobileWaitingMSGStrikeThrough}"`)

        }
        async CustomColorPickerClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobileWaitingMSGColorPicker)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message color Picker Option Is Not Found: "${this.tugOfWarPageElements.CustomMobileWaitingMSGColorPicker}"`)

        }
        async CustomColorSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobileWaitingMSGColor1)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Color 1 Option Is Not Found: "${this.tugOfWarPageElements.CustomMobileWaitingMSGColor1}"`)

        }
        async CustomColorPickerHighlightsClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobileWaitingMSGHighlights)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Highlights Option Is Not Found: "${this.tugOfWarPageElements.CustomMobileWaitingMSGHighlights}"`)

        }
        async CustomHighlightsSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobileWaitingMSGHighlightsColor1)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Color 1 Option Is Not Found: "${this.tugOfWarPageElements.CustomMobileWaitingMSGHighlightsColor1}"`)

        }
        async CustomLeftAlignmentSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobileWaitingMSGLeftAlignment)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Left Alignment Option Is Not Found: "${this.tugOfWarPageElements.CustomMobileWaitingMSGLeftAlignment}"`)

        }
        async CustomCenterAlignmentSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobileWaitingMSGCenterAlignment)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Center Alignment Option Is Not Found: "${this.tugOfWarPageElements.CustomMobileWaitingMSGCenterAlignment}"`)

        }
        async CustomRightAlignmentSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobileWaitingMSGRightAlignment)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Right Alignment Option Is Not Found: "${this.tugOfWarPageElements.CustomMobileWaitingMSGRightAlignment}"`)

        }
        async CustomOutdentSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobileWaitingMSGOutdent)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Outdent Option Is Not Found: "${this.tugOfWarPageElements.CustomMobileWaitingMSGOutdent}"`)

        }
        async CustomIntdentSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobileWaitingMSGINdent)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Indent Option Is Not Found: "${this.tugOfWarPageElements.CustomMobileWaitingMSGINdent}"`)

        }
        async CustomOrderSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobileWaitingMSGOrderd)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Order Option Is Not Found: "${this.tugOfWarPageElements.CustomMobileWaitingMSGOrderd}"`)

        }
        async CustomUnOrderSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobileWaitingMSGUnOrderd)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Unorder Option Is Not Found: "${this.tugOfWarPageElements.CustomMobileWaitingMSGUnOrderd}"`)

        }
        async CustomRemoverSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomMobileWaitingMSGRemoverStyles)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Custom Mobile Waiting Message Remover Option Is Not Found: "${this.tugOfWarPageElements.CustomMobileWaitingMSGRemoverStyles}"`)

        }
        async titlebackgroundImageOptionClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.TitlebackgroundImageoptionSelector)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Title Background Image option Element is Not Found: "${this.tugOfWarPageElements.TitlebackgroundImageoptionSelector}"`)
        }
        async TitleBackgroundImageUploadBTnClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.TitleBackgroundImageUploadBTN)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Title Background Image Upload Element is Not Found: "${this.tugOfWarPageElements.TitleBackgroundImageUploadBTN}"`)

        }
        async ImageDelete(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.DeleteUploadedImage)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Title Background Image Delete Element is Not Found: "${this.tugOfWarPageElements.DeleteUploadedImage}"`)

        }
        async titlebackgroundVideoOptionClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.VideoOPtionSelector)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Title Background Video option Element is Not Found: "${this.tugOfWarPageElements.VideoOPtionSelector}"`)
        }
        async VideoDeleteBTnClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.VideoDeleteBTN)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Title Background Video option Element is Not Found: "${this.tugOfWarPageElements.VideoDeleteBTN}"`)

        }
        async VideoUploadBTNClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.UploadTitleBackgroundVideoBTN)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Title Background Video upload Element is Not Found: "${this.tugOfWarPageElements.UploadTitleBackgroundVideoBTN}"`)

        }
        async sponsorLogoUploadBtnClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.spomsorLogoUploadBTn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Sponsor Logo upload Element is Not Found: "${this.tugOfWarPageElements.spomsorLogoUploadBTn}"`)

        }
        async TeamLogoUploadBTNClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.TeamLogoUploadBtn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Team Logo upload Element is Not Found: "${this.tugOfWarPageElements.TeamLogoUploadBtn}"`)
                
        }
        async GameTitleImageClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.GameTitleImage)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Game Title upload Element is Not Found: "${this.tugOfWarPageElements.GameTitleImage}"`)
                
        }
        async selectionBackgroundImageSelection(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.SelectionIMageImageOption)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Selection Background Image option Element is Not Found: "${this.tugOfWarPageElements.SelectionIMageImageOption}"`)

        }
        async NavigatetotheSelectionStage(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.NavigateToTheSelectionStage).last()
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Selection stage NAvigation Element is Not Found: "${this.tugOfWarPageElements.NavigateToTheSelectionStage}"`)

        }
        async selectionBackgroundIMageUploadBTNClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.SelectionBackgroundImageUpload)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Selection stage Selection Background Image upload Element is Not Found: "${this.tugOfWarPageElements.SelectionBackgroundImageUpload}"`)

        }
        async selectionBackgroundIMageDeleteClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.SelectionBackgroundIMageDelete)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Selection stage Selection Background Image Delete Element is Not Found: "${this.tugOfWarPageElements.SelectionBackgroundIMageDelete}"`)

        }
        async SlectionBackgroundVideoBTnClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.SelectionStageVideoOPtion)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Selection stage Selection Background Video Option Element is Not Found: "${this.tugOfWarPageElements.SelectionStageVideoOPtion}"`)


        }
        async SelectionStageVideoUploadBtNClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.SelectionStageVideoUploadBTN)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Selection stage Selection Background Video Upload Element is Not Found: "${this.tugOfWarPageElements.SelectionStageVideoUploadBTN}"`)

        }
        async GameStartBTNCLICK(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.GameStartBTN)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Selection stage Selection Game Start Button Element is Not Found: "${this.tugOfWarPageElements.GameStartBTN}"`)

        }
        async AdjustableTimer(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.AdjustableTimerSelectionStage)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Selection stage Adjustable Timer Button Element is Not Found: "${this.tugOfWarPageElements.AdjustableTimerSelectionStage}"`)

        }
        async NumberOFTeamsInputField(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.NumberOfTEamsINputField)
                if (await ele.isVisible()) {
                        await ele.fill("2")
                }
                else throw new Error(`Selection stage Number Of teams Input Element is Not Found: "${this.tugOfWarPageElements.NumberOfTEamsINputField}"`)

        }
        async TEam1LogoUploadBtnClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.Team1LogoUploadBTN)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Selection stage TEam1 Logo Upload Element is Not Found: "${this.tugOfWarPageElements.Team1LogoUploadBTN}"`)

        }
        async Team1Name(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.Team1NameInput)
                if (await ele.isVisible()) {
                        await ele.fill("Skylarks")
                }
                else throw new Error(`Selection stage TEam1 Logo Upload Element is Not Found: "${this.tugOfWarPageElements.Team1NameInput}"`)

        }
        async Team2LogoUploadBTNClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.Team2LogoUpload)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Selection stage Team 2 Logo Upload Element is Not Found: "${this.tugOfWarPageElements.Team2LogoUpload}"`)

        }
        async TEam2NameInputField(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.Team2NameInput)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Selection stage TEam1 Logo Upload Element is Not Found: "${this.tugOfWarPageElements.Team2NameInput}"`)


        }
        async CustomSelectionMessageInputField(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomSelectionMesaage)
                if (await ele.isVisible()) {
                        await ele.fill("This is a test message")
                }
                else throw new Error(`Selection stage Custom Selection Message Input Element is Not Found: "${this.tugOfWarPageElements.CustomSelectionMesaage}"`)


        }
        async CustomTeamSelectionMessageInputField(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomTeamSelectionMessage)
                if (await ele.isVisible()) {
                        await ele.fill("This is a test message")
                }
                else throw new Error(`Selection stage Custom Team Selection Message Input Element is Not Found: "${this.tugOfWarPageElements.CustomTeamSelectionMessage}"`)


        }
        async TeamnameBoxBTNClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.TeamNameBoxBTn)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Team Name Element is Not Found: "${this.tugOfWarPageElements.TeamNameBoxBTn}"`)

        }
        async AddColor(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.AddColor)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Add Color Swatch Element is Not Found: "${this.tugOfWarPageElements.AddColor}"`)

        }
        async RGB1Input(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.RGBInput1)
                if (await ele.isVisible()) {
                        await ele.fill("260")
                }
                else throw new Error(`RGB 1 input field Element is Not Found: "${this.tugOfWarPageElements.RGBInput1}"`)

        }

        async RGB2Input(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.RGBInput2)
                if (await ele.isVisible()) {
                        await ele.fill("10")
                }
                else throw new Error(`RGB 2 input field Element is Not Found: "${this.tugOfWarPageElements.RGBInput2}"`)

        }
        async RGB3Input(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.RGBInput3)
                if (await ele.isVisible()) {
                        await ele.fill("20")
                }
                else throw new Error(`RGB 3 input field Element is Not Found: "${this.tugOfWarPageElements.RGBInput3}"`)

        }
        async RGB4Input(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.RGBInput4)
                if (await ele.isVisible()) {
                        await ele.fill("90")
                }
                else throw new Error(`RGB 3 input field Element is Not Found: "${this.tugOfWarPageElements.RGBInput4}"`)

        }
        async ColorDrpdownClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.ColorRGBDrpdown)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Color RGB DRopdown Element is Not Found: "${this.tugOfWarPageElements.ColorRGBDrpdown}"`)

        }
        async ColorDrpdownSolidClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.RGBSolid)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Color RGB DRopdown Solid Element is Not Found: "${this.tugOfWarPageElements.ColorRGBDrpdown}"`)

        }
        async ColorDrpdownHorizontalClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.HoriZontal)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Color RGB DRopdown Horizontal Element is Not Found: "${this.tugOfWarPageElements.HoriZontal}"`)

        }
        async ColorDrpdownVerticalClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.Vertical)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Color RGB DRopdown Vertical Element is Not Found: "${this.tugOfWarPageElements.Vertical}"`)

        }
        async ColorDrpdownDiagonalClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.Diagonal)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Color RGB DRopdown Diagonal Element is Not Found: "${this.tugOfWarPageElements.Diagonal}"`)

        }
        async ColorDrpdownRadialClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.Radial)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Color RGB DRopdown Radial Element is Not Found: "${this.tugOfWarPageElements.Radial}"`)

        }
        async ColorRGB5INput(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.RGB5input)
                if (await ele.isVisible()) {
                        await ele.fill("FFFFFF")
                }
                else throw new Error(`Color RGB Color Code Element is Not Found: "${this.tugOfWarPageElements.RGB5input}"`)

        }
        async RGBSaveBTnClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.SaveBTNRGB)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Color RGB Color Csave Button Element is Not Found: "${this.tugOfWarPageElements.SaveBTNRGB}"`)

        }
        async TeamSelectedMessageBoxClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.TeamSelectedMessageBox)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Team Selected Message Box Button Element is Not Found: "${this.tugOfWarPageElements.TeamSelectedMessageBox}"`)

        }
        async MoveToTheNextStageBtnClick(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.MoveToTheNextStage)
                if (await ele.isVisible()) {
                        await ele.click({ button: "left", delay: 1000 })
                }
                else throw new Error(`Move to the next Stage Button Element is Not Found: "${this.tugOfWarPageElements.MoveToTheNextStage}"`)

        }
        async CustomCountDownMessageInput(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.CustomCountDownMessage)
                if (await ele.isVisible()) {
                        await ele.fill("This is a test message")
                }
                else throw new Error(`Custom Countdown Message Input Element is Not Found: "${this.tugOfWarPageElements.CustomCountDownMessage}"`)

        }
        async GameplayMainboardMessageInput(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarPageElements.GamePlayMainBoardMessage)
                if (await ele.isVisible()) {
                        await ele.fill("This is a test message")
                }
                else throw new Error(`GAmeplay Mainboard Message Input Element is Not Found: "${this.tugOfWarPageElements.GamePlayMainBoardMessage}"`)

        }













































































































































}

