import { devices, expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class fanSeeWallMobilePage {
        private page: Page;
        constructor(page: Page) {
                this.page = page;
                page.setViewportSize({ width: 390, height: 844 })
        }
        private fanSeeWallMobilePageElements = {
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
                homeAvater: "(//button[@value='game']//div)[1]",
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
                teamAccountModal: "(//div[@teamcount='2'])[2]",
                postContentSectionMobileUIEle: "//div[@class='MuiBox-root css-d6o6cv']",
                openLibraryBtn: "//button[text()='Open Library']",
                takePhotoBtn: "//button[text()='Take Photo']",
                takeRecordVideoBtn: "//button[text()='Record Video']",
                takeRecordVideoMinMaxTitle: "//p[text()='The video must be (5)-(15) seconds long']",
                homePageBtn: "(//button[@value='game']//div)[1]",
                welcomeMassage: "//p[text()='Welcome Message']",
                uploadedImageDeleteBtn: "(//button[@type='button'])[1]",
                postTextInputField: "//textarea[@placeholder='Type something']",
                postSubmitBtn: "//button[text()='Submit']"


        }


        async inputPhoneNumberForAditionalInfo() {
                await this.page.waitForSelector(this.fanSeeWallMobilePageElements.additionalphoneNumberInputField)
                const ele = await this.page.locator(this.fanSeeWallMobilePageElements.additionalphoneNumberInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.fanSeeWallMobilePageElements.additionalphoneNumberInputField).fill("+8801051703506")
                }
                else throw new Error("Aditional Information Phone NUmber Input Field Is not visible In User Side")
        }
        async inputAgeForAditionalInfo() {
                await this.page.waitForSelector(this.fanSeeWallMobilePageElements.additionalAgeInputField)
                const ele = await this.page.locator(this.fanSeeWallMobilePageElements.additionalAgeInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.fanSeeWallMobilePageElements.additionalAgeInputField).fill("22")
                }
                else throw new Error("Aditional Information Age Input Field Is not visible In User Side")
        }
        async inputEmailForAditionalInfo() {
                await this.page.waitForSelector(this.fanSeeWallMobilePageElements.additionalEmailInputField)
                const ele = await this.page.locator(this.fanSeeWallMobilePageElements.additionalEmailInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.fanSeeWallMobilePageElements.additionalEmailInputField).fill("demo@email.com")
                }
                else throw new Error("Aditional Information Email Input Field Is not visible In User Side")
        }
        async clickAdditionalDatePickterInputField() {
                await this.page.waitForSelector(this.fanSeeWallMobilePageElements.additionalDatePickerLabel)
                const ele = await this.page.locator(this.fanSeeWallMobilePageElements.additionalDatePickerInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.fanSeeWallMobilePageElements.additionalDatePickerInputField).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Date Picker Input Field Is not visible In User Side")
        }
        async clickAdditionalDateEditBtn() {
                await this.page.waitForSelector(this.fanSeeWallMobilePageElements.additionalDateEditBtn)
                const ele = await this.page.locator(this.fanSeeWallMobilePageElements.additionalDateEditBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.fanSeeWallMobilePageElements.additionalDateEditBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Date Picker Edit Button Is not visible In User Side")
        }
        async inputAdditionalDate() {
                await this.page.waitForSelector(this.fanSeeWallMobilePageElements.additionalDateInputField)
                const ele = await this.page.locator(this.fanSeeWallMobilePageElements.additionalDateInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.fanSeeWallMobilePageElements.additionalDateInputField).fill("01/31/2000")
                }
                else throw new Error("Aditional Information Date Picker Date Input Field Is not visible In User Side")
        }
        async clickAdditionalDateDatePickerOkBtn() {
                await this.page.waitForSelector(this.fanSeeWallMobilePageElements.additionalDatePickerOkBtn)
                const ele = await this.page.locator(this.fanSeeWallMobilePageElements.additionalDatePickerOkBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.fanSeeWallMobilePageElements.additionalDatePickerOkBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Date Picker Ok Button Is not visible In User Side")
        }
        async clickSubmitButton() {
                const ele = await this.page.locator(this.fanSeeWallMobilePageElements.additionalSubmitBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.fanSeeWallMobilePageElements.additionalSubmitBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Submit Button Is not visible In User Side On Welcome Screen")
                await this.page.waitForLoadState("networkidle")
                await this.page.waitForTimeout(3000)
        }
        async inputAdditionalZipCode() {
                await this.page.waitForSelector(this.fanSeeWallMobilePageElements.additionalZipCodeInputFieldLabel)
                const ele = await this.page.locator(this.fanSeeWallMobilePageElements.additionalZipCodeInputFieldLabel).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.fanSeeWallMobilePageElements.additionalZipCodeInputField).fill("1217")
                }
                else throw new Error("Aditional Information Zip Code Input Field Is not visible In User Side")
        }
        async inputCustomQuestionForUser() {
                await this.page.waitForSelector(this.fanSeeWallMobilePageElements.customQuestionSectionTitle)
                const ele = await this.page.locator(this.fanSeeWallMobilePageElements.customQuestionInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.fanSeeWallMobilePageElements.customQuestionInputField).fill("Demo Ans")
                }
                else throw new Error("Aditional Information Custom Question Input Field Is not visible In User Side")
        }
        async clickCustomChoiceCheckBoxWhenCustomQuestionInTop() {
                await this.page.waitForSelector(this.fanSeeWallMobilePageElements.customQuestionSectionTitle)
                const ele = await this.page.locator(this.fanSeeWallMobilePageElements.choiceCheckBoxWhenCustomQuestionInTop).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.fanSeeWallMobilePageElements.choiceCheckBoxWhenCustomQuestionInTop).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Custom Question Section Choice Check Box Is not visible In User Side")
        }
        async clickCustomChoiceCheckBox() {
                await this.page.waitForSelector(this.fanSeeWallMobilePageElements.customQuestionSectionTitle)
                const ele = await this.page.locator(this.fanSeeWallMobilePageElements.choiceCheckBox).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.fanSeeWallMobilePageElements.choiceCheckBox).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Custom Question Section Choice Check Box Is not visible In User Side")
        }
        async clickAddNewQuestionSubmitBtn() {
                const ele = await this.page.locator(this.fanSeeWallMobilePageElements.submitBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.fanSeeWallMobilePageElements.submitBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Aditional Information Custom Question Section Submit Button Is not visible In User Side")
        }

        async verifyOpenLibraryButtonIsVisible() {
                const ele = await this.page.locator(this.fanSeeWallMobilePageElements.openLibraryBtn)
                try {
                        await ele.isVisible()
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Open Library Button Is Not Visiable After Admin Enable Allow File Upload | Error occurred: ${error}`);
                }
        }

        async verifyTakePhotoButtonIsVisible() {
                const ele = await this.page.locator(this.fanSeeWallMobilePageElements.takePhotoBtn)
                try {
                        await ele.isVisible()

                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Take Photo Button Is Not Visiable After Admin Enable Allow Photo | Error occurred: ${error}`);
                }
        }

        async verifyRecordVideoButtonIsVisible() {
                const ele = await this.page.locator(this.fanSeeWallMobilePageElements.takeRecordVideoBtn)
                try {
                        await ele.isVisible()

                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Record Video Button Is Not Visiable After Admin Enable Allow Video | Error occurred: ${error}`);
                }
        }

        async clickRecordVideoBtn() {
                const ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallMobilePageElements.takeRecordVideoBtn)
                try {
                        // await this.page.getByRole('button', { name: 'Record Video' })
                        await ele.click({ button: "left", delay: 1000 })

                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Record Video Button Is Not Visiable After Admin Enable Allow Video | Error occurred: ${error}`);
                }
        }

        async clickHomeBtn() {
                const ele = this.page.locator(this.fanSeeWallMobilePageElements.homePageBtn)
                try {
                        // await this.page.getByRole('button', { name: 'Record Video' })
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("networkidle")
                        await this.page.waitForTimeout(3000)

                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen home Page Button Is not visible| Error occurred: ${error}`);
                }
        }

        async verifyRecordVideoMinMaxTitle() {
                const ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallMobilePageElements.takeRecordVideoMinMaxTitle)
                try {
                        await expect(ele).toContainText("The video must be (5)-(15) seconds long")

                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Record Video Mini And Max Input Does Not Update In Mobile Side After Updated From Admin Side | Error occurred: ${error}`);
                }
        }

        async verifyMobileBackgroundColorChangesSuccessfullyApplied() {
                const ele = await this.page.frameLocator("iframe").locator(this.fanSeeWallMobilePageElements.postContentSectionMobileUIEle).screenshot()
                // await expect(ele).toMatchSnapshot("mobileBackground.png", { maxDiffPixelRatio: 0.10 })
                try {
                        await expect(ele).toMatchSnapshot('mobileBackground_Image.png', { maxDiffPixelRatio: 0.10 })
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Background Image Doest Not Updated After Updateding From Admin Side`);
                }
        }

        async verifyMobileWelcomeImageChangesSuccessfullyApplied() {
                const ele = await this.page.frameLocator("iframe").locator(this.fanSeeWallMobilePageElements.postContentSectionMobileUIEle).screenshot()
                // await expect(ele).toMatchSnapshot("mobileBackground.png", { maxDiffPixelRatio: 0.10 })
                try {
                        await expect(await this.page.screenshot({
                                fullPage: true
                        })).toMatchSnapshot('mobileWelcome_Image.png', { maxDiffPixelRatio: 0.10 })
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Welcome Image Doest Not Updated After Updateding From Admin Side`);
                }
        }

        async verifyMobileButtonColorChangesSuccessfullyApplied() {
                const ele = await this.page.frameLocator("iframe").locator(this.fanSeeWallMobilePageElements.takePhotoBtn)
                try {
                        await expect.soft(ele).toHaveCSS("background-color", "rgb(253, 124, 106)")
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Button Color Doest Not Updated After Updateding From Admin Side`);
                }
        }

        async verifyMobileButtonTextColorChangesSuccessfullyApplied() {
                const ele = await this.page.frameLocator("iframe").locator(this.fanSeeWallMobilePageElements.takePhotoBtn)
                try {
                        await expect.soft(ele).toHaveCSS("color", "rgb(33, 41, 54)")
                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Button Text Color Doest Not Updated After Updateding From Admin Side`);
                }
        }


        async verifyWelcomeMassageText() {
                const ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallMobilePageElements.welcomeMassage)
                try {
                        await expect(ele).toContainText("Welcome Message")

                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Welcome Massage Does Not Update In Mobile Side After Updated From Admin Side | Error occurred: ${error}`);
                }
        }

        async clickOpenLibraryUploadBtn() {


                const ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallMobilePageElements.openLibraryBtn)
                const filePath0 = "testData/logos/gameTeamLogo.png"
                try {
                        this.page.on("filechooser", async (filechooser) => {
                                await filechooser.setFiles([filePath0]);
                        })
                        await ele.click({ button: 'left', delay: 1000 })
                        await this.page.waitForTimeout(5000)

                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Open Library Upload Input Field Is Not Visible  | Error occurred: ${error}`);
                }
        }

        async uploadImageClickingOnTakePhoto() {


                const ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallMobilePageElements.takePhotoBtn)
                const filePath0 = "testData/logos/gameTeamLogo.png"
                try {
                        this.page.on("filechooser", async (filechooser) => {
                                await filechooser.setFiles([filePath0]);
                        })
                        await ele.click({ button: 'left', delay: 1000 })
                        await this.page.waitForTimeout(5000)

                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Open Take Photo Upload Input Field Is Not Visible  | Error occurred: ${error}`);
                }
        }

        async uploadVideoClickingOnRecordVideoBtn() {

                const ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallMobilePageElements.takeRecordVideoBtn)
                const filePath0 = "testData/videos/Video.mkv"
                try {
                        this.page.on("filechooser", async (filechooser) => {
                                await filechooser.setFiles([filePath0]);
                        })
                        await ele.click({ button: 'left', delay: 1000 })
                        await this.page.frameLocator("iframe").locator(this.fanSeeWallMobilePageElements.takeRecordVideoBtn).click({ force: true })
                        await this.page.waitForTimeout(7000)

                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Open Record Video Upload Input Field Is Not Visible  | Error occurred: ${error}`);
                }
        }

        async clickDeleteBtn() {
                const ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallMobilePageElements.uploadedImageDeleteBtn)

                try {
                        await ele.click({ button: 'left', delay: 1000 })
                        await this.page.waitForTimeout(3000)

                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Open Library Uploaded Image Delete Btn Is Not Visible  | Error occurred: ${error}`);
                }
        }

        async inputPostText() {
                const ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallMobilePageElements.postTextInputField)

                try {
                        await this.page.waitForTimeout(1000)

                        await ele.fill("Auto Post From Devid")
                        await this.page.waitForTimeout(2000)

                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Post Text Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }

        async inputPostTextForTakePhotoPost() {
                const ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallMobilePageElements.postTextInputField)

                try {
                        await this.page.waitForTimeout(1000)

                        await ele.fill("Post With Take Photo")
                        await this.page.waitForTimeout(2000)

                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Post Text Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }

        async inputPostTextForRecordVideoPost() {
                const ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallMobilePageElements.postTextInputField)

                try {
                        await this.page.waitForTimeout(1000)
                        await ele.fill("Post With Record Video")
                        await this.page.waitForTimeout(2000)

                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Post Text Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickSubmitBtn() {
                const ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallMobilePageElements.postSubmitBtn)

                try {
                        await ele.click({ button: 'left', delay: 1000 })
                        await this.page.waitForTimeout(3000)

                } catch (error) {
                        throw new Error(`Mobile Screen | Mobile Screen Post Submit Button Is Not Visible  | Error occurred: ${error}`);
                }
        }




















        async validatePostContentChangesSuccessfullyApplied() {
                const ele = await this.page.locator(this.fanSeeWallMobilePageElements.postContentSectionMobileUIEle).screenshot()
                await expect(ele).toMatchSnapshot("postContent.png", { maxDiffPixelRatio: 0.10 })
                // try {
                //         await expect(ele).toMatchSnapshot('postContent.png', { maxDiffPixelRatio: 0.10 })
                // } catch (error) {
                //         throw new Error(`Mobile Screen | Post Content Section Option Doest Not Updated After Updateding From Admin Side`);
                // }
        }




        async logoUploadHelper() {

                const filePath0 = "testData/logos/gameTeamLogo.png"
                try {
                        this.page.on("filechooser", async (filechooser) => {
                                await filechooser.setFiles([filePath0]);
                        })
                } catch (error) {
                        throw new Error(`Mobile Screen | Issue On Logo Upload Helper  | Error occurred: ${error}`);
                }
        }







}