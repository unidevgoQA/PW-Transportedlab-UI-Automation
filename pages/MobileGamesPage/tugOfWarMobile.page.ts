import { devices, expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class tugOfWarMobilePage {
        private page: Page;
        constructor(page: Page) {
                this.page = page;
                page.setViewportSize({ width: 390, height: 844 })
        }
        private tugOfWarMobilePageElements = {
                additionalphoneNumberInputField: `//input[@name="phone"]`,
                additionalEmailInputField: `//input[@name="email"]`,
                additionalAgeInputField: `//input[@name="age"]`,
                additionalDatePickerInputField: `//input[@aria-label='Choose date']`,
                additionalDateInputField: "(//input[@id='additionalbirthDate'])[2]",
                additionalDateEditBtn: `//button[@aria-label='calendar view is open, go to text input view']`,
                additionalDatePickerOkBtn: "//button[text()='OK']",
                additionalDatePickerLabel: "//label[@for='additionalbirthDate']",
                additionalZipCodeInputField: `//input[@name="zipCode"]`,
                additionalZipCodeInputFieldLabel: "//label[@for='additionalzipCode']",
                additionalSubmitBtn: "//button[@type='submit']",
                customQuestionSectionTitle: "//p[text()='Questionnaire & Opt-Ins']",
                customQuestionInputField: "//input[@placeholder='Give some description here...']",
                submitBtn: "//button[text()='Submit']",
                choiceCheckBox: "//input[@type='checkbox']",
                choiceCheckBoxWhenCustomQuestionInTop: "(//input[@type='checkbox'])[1]",
                homeAvater: "//div[@img='assets/UserProfileIcon.4c7ccf2b.svg']",
                homeText: "//p[text()='HOME']",
                arcadeSectionInMobileScreen: "(//button[@type='button'])[6]",
                prizeDropGameText: "//p[text()='Prize Drop']",
                outSideGameTitleText: "//p[text()='Auto Game']",
                squareImage: "div:nth-child(2) > div > div:nth-child(2) > .MuiBox-root",
                rectangulerImageType: ".css-rk019r>>nth=1",
                arcadeSectionlogoHeader: ".css-n8k4mt",
                fanaticsGameTitle: "//p[text()='Fanatics-Filter-Web']",
                gussTheScroeGameTitle: "//p[text()='Guess The Score']",
                triviaGameTitle: "//p[text()='Trivia']",
                liveWallGameTitle: "//p[text()='Live Wall']",
                noiseMeterGameTitle: "//p[text()='Noise Meter']",
                tugOfWarGameTitle: "//p[text()='Tug of War']",
                prizeDropGameTitle: "//p[text()='Prize Drop']",
                selectTextOnHomeScreen: "(//h3[text()='Select'])[1]",
                teamAccountModal: "(//div[@teamcount='2'])[2]"
        }
        async validateFontSuccessfullyApplied() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.selectTextOnHomeScreen)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.selectTextOnHomeScreen).screenshot()
                        await expect(selectText).toMatchSnapshot("fontUpload_UI.png", { maxDiffPixelRatio: 0.01 })
                }
                else throw new Error("Mobile Screen | Home Screen Team Account Select Text Is Not Visible")
        }
        async validatePrimaryColorSuccessfullyApplied() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.teamAccountModal)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.teamAccountModal).screenshot()
                        await expect(selectText).toMatchSnapshot("primaryColor_UI.png", { maxDiffPixelRatio: 0.01 })
                }
                else throw new Error("Mobile Screen | Home Screen First Team Account Modal is Not Visible")
        }
        async validateTextColorSuccessfullyApplied() {
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.selectTextOnHomeScreen)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.selectTextOnHomeScreen)
                        await expect(selectText).toHaveCSS("color", "rgb(255, 255, 255)")
                }
                else throw new Error("Mobile Screen | Home Screen Team Account Text Color is Not Applied Properly")
        }
        async inputPhoneNumberForAditionalInfo() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.additionalphoneNumberInputField)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalphoneNumberInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalphoneNumberInputField).fill("+8801051703506")
                }
                else throw new Error("Aditional Information Phone NUmber Input Field Is not visible In User Side")
        }
        async inputAgeForAditionalInfo() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.additionalAgeInputField)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalAgeInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalAgeInputField).fill("22")
                }
                else throw new Error("Aditional Information Age Input Field Is not visible In User Side")
        }
        async inputEmailForAditionalInfo() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.additionalEmailInputField)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalEmailInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalEmailInputField).fill("demo@email.com")
                }
                else throw new Error("Aditional Information Email Input Field Is not visible In User Side")
        }
        async clickAdditionalDatePickterInputField() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.additionalDatePickerLabel)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalDatePickerInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalDatePickerInputField).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Date Picker Input Field Is not visible In User Side")
        }
        async clickAdditionalDateEditBtn() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.additionalDateEditBtn)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalDateEditBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalDateEditBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Date Picker Edit Button Is not visible In User Side")
        }
        async inputAdditionalDate() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.additionalDateInputField)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalDateInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalDateInputField).fill("01/31/2000")
                }
                else throw new Error("Aditional Information Date Picker Date Input Field Is not visible In User Side")
        }
        async clickAdditionalDateDatePickerOkBtn() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.additionalDatePickerOkBtn)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalDatePickerOkBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalDatePickerOkBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Date Picker Ok Button Is not visible In User Side")
        }
        async clickSubmitButton() {
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalSubmitBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalSubmitBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Submit Button Is not visible In User Side On Welcome Screen")
                await this.page.waitForLoadState("networkidle")
                await this.page.waitForTimeout(3000)
        }
        async inputAdditionalZipCode() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.additionalZipCodeInputFieldLabel)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalZipCodeInputFieldLabel).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalZipCodeInputField).fill("1217")
                }
                else throw new Error("Aditional Information Zip Code Input Field Is not visible In User Side")
        }
        async inputCustomQuestionForUser() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.customQuestionSectionTitle)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.customQuestionInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.customQuestionInputField).fill("Demo Ans")
                }
                else throw new Error("Aditional Information Custom Question Input Field Is not visible In User Side")
        }
        async clickCustomChoiceCheckBoxWhenCustomQuestionInTop() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.customQuestionSectionTitle)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.choiceCheckBoxWhenCustomQuestionInTop).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.choiceCheckBoxWhenCustomQuestionInTop).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Custom Question Section Choice Check Box Is not visible In User Side")
        }
        async clickCustomChoiceCheckBox() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.customQuestionSectionTitle)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.choiceCheckBox).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.choiceCheckBox).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Custom Question Section Choice Check Box Is not visible In User Side")
        }
        async clickAddNewQuestionSubmitBtn() {
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.submitBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.submitBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Custom Question Section Submit Button Is not visible In User Side")
        }
}