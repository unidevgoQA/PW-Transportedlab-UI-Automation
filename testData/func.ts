import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class functions {
        [x: string]: any;

        private page: Page;
        static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }


        async check_upload_font_text(){
                const ele= this.page.frameLocator('.css-r99fy3').locator('//p[text()="Upload Font"]')
                await expect(ele).toBeVisible()
        }
        async fontUploadFunction() {
                const filePath0 = "testData/fonts/Midnight.ttf"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }
        
        async wrong_font_uploader(){
                const filePath0 = "testData/images/title.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                const ele = this.page.frameLocator('iframe').locator('//p[text()="Upload Font"]//preceding-sibling::div')
                await expect(ele).toBeVisible()
                await ele.click({button:'left'})
        }

        

        async uploadJsonFile() {
                const filePath0 = "testData/Riders.json"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }

        async select_font(){
                const font_ele= this.page.frameLocator('.css-r99fy3').locator('//p[text()="Aa"]').last()
                await font_ele.click({button:'left'})
        }

        async delete_font(){
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Aa"]//following-sibling::button').click()
        }

        async bannerImageUploadFunction() {
                const filePath0 = "testData/images/CountDownStageBanner.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }

        async potraitImageUploadFunction() {
                const filePath0 = "testData/images/potrait.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }

        async logoImageUploadFunction() {
                const filePath0 = "testData/logos/gameTeamLogo.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }

        async homeIconUploadHelper() {
                const filePath0 = "testData/icons/home.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }

        async prizeIconUploadHelper() {
                const filePath0 = "testData/icons/prize.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }

        async howToPlayIconUploadHelper() {
                const filePath0 = "testData/icons/howtoplay.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }

        async rulesIconUploadHelper() {
                const filePath0 = "testData/icons/rules.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }

        async userProfileIconUploadHelper() {
                const filePath0 = "testData/icons/profile.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }

        async portraitBackgroundImageUploadHelper() {
                const filePath0 = "testData/logos/PotraitBanner.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }

        async videoUploadFunction() {
                const filePath0 = "testData/videos/video.mp4"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }


        async csvUploadFunction() {
                const filePath0 = "testData/csv/csv.csv"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }

        async frameUploadFunction() {
                const filePath0 = "testData/Frames/mobileFrame.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
        }


        async fileUploadCropper() {

                // const imageText = await this.page.frameLocator('iframe').locator("text='Image'")
                // expect(imageText).toContainText("Image")

                // const ratioText = await this.page.frameLocator('iframe').locator("text='Ratio:'")
                // expect.soft(ratioText).toContainText("Ratio:")


                // const resolutionText = await this.page.frameLocator('iframe').locator("text='Resolution:'")
                // expect.soft(resolutionText).toContainText("Resolution:")


                // const alignmentText = await this.page.frameLocator('iframe').locator("text='Alignment:'")
                // expect.soft(alignmentText).toContainText("Alignment:")

                // const fileTypeText = await this.page.frameLocator('iframe').locator("text='File Type:'")
                // expect.soft(fileTypeText).toContainText("File Type:")


                // const maxFileSizeText = await this.page.frameLocator('iframe').locator("text='Max File Size:'")
                // expect.soft(maxFileSizeText).toContainText("Max File Size:")

                // // const ratioTimeText = await this.page.frameLocator('iframe').locator("text='16:9'")
                // // expect(ratioTimeText).toContainText("16:9")

                // const resolutionSizeText = await this.page.frameLocator('iframe').locator("text='1280x720'")
                // expect.soft(resolutionSizeText).toContainText("1280x720")


                // const alignmentDetailsText = await this.page.frameLocator('iframe').locator("text='Centered'")
                // expect.soft(alignmentDetailsText).toContainText("Centered")


                // const fileTypeDetailsText = await this.page.frameLocator('iframe').locator("text='PNG, SVG, JPEG, JPG'")
                // expect.soft(fileTypeDetailsText).toContainText("PNG, SVG, JPEG, JPG")

                // const maxFileSizeDetailsText = await this.page.frameLocator('iframe').locator("text='2MB'")
                // expect.soft(maxFileSizeDetailsText).toContainText("2MB")

                // const fileNameText = await this.page.frameLocator('iframe').locator("text='File Name'")
                // expect.soft(fileNameText).toContainText("File Name")

                // const fileSizeText = await this.page.frameLocator('iframe').locator("text='File Size'")
                // expect.soft(fileSizeText).toContainText("File Size")


                const chooseBtn = await this.page.frameLocator('iframe').locator("//button[text()='Choose File']")
                expect.soft(chooseBtn).toContainText("Choose File")
                await chooseBtn.click()

                // const deviceScreenSizeText = await this.page.frameLocator('iframe').locator("text='Device Screen Size:'")
                // expect.soft(deviceScreenSizeText).toContainText("Device Screen Size:")


                // await this.page.waitForTimeout(2000)                
                // const deviceSelectField = await this.page.frameLocator('iframe').locator("(//div[@role='button'])[1]")
                // expect.soft(deviceSelectField).toBeVisible()
                // await deviceSelectField.click({force:true})

                // await this.page.waitForTimeout(2000)
                // const iphone13ProMax = await this.page.frameLocator('iframe').locator("//li[@data-value='iPhone 13 Pro Max']")
                // expect.soft(iphone13ProMax).toContainText("iPhone 13 Pro Max")
                // await iphone13ProMax.dblclick({force:true})

                // await this.page.waitForTimeout(1000)

                // await deviceSelectField.click()


                // const iphone12 = await this.page.frameLocator('iframe').locator("//li[@data-value='iPhone 12']")
                // expect(iphone12).toContainText("iPhone 12")
                // await iphone12.dblclick()

                // await this.page.waitForTimeout(1000)

                // await deviceSelectField.click()


                // const samsungS20 = await this.page.frameLocator('iframe').locator("//li[text()='Samsung S20']")
                // expect(samsungS20).toContainText("Samsung S20")
                // await samsungS20.dblclick()



                // const currentImageSizeTitleText = await this.page.frameLocator('iframe').locator("//div[text()='Current Image Size:']")
                // expect.soft(currentImageSizeTitleText).toContainText("Current Image Size:")

                // const currentImageRatioTitleText = await this.page.frameLocator('iframe').locator("//p[text()='Current Image Size Ratio:']")
                // expect.soft(currentImageRatioTitleText).toContainText("Current Image Size Ratio:")

                // const chooseRatio = await this.page.frameLocator('iframe').locator("(//div[@backgroundcolor='#212936']//div)[2]")
                // await chooseRatio.click({ force: true })
                // await this.page.waitForTimeout(3000)

                // const selectNone = await this.page.frameLocator('iframe').locator("//ul[@role='listbox']//li[1]")
                // await selectNone.click({ force: true })

                // await this.page.waitForLoadState("networkidle")

                const cropperSaveBtn = await this.page.frameLocator('iframe').locator("//button[text()='Save']")
                expect(cropperSaveBtn).toContainText("Save")
                await cropperSaveBtn.click({force:true})
                await this.page.waitForTimeout(3000)

                // await this.page.waitForLoadState("networkidle")











        }

        async fileUploadCropperForMainMenu() {


                const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                await chooseBtn.click()




                const cropperSaveBtn = await this.page.locator("//div[@class='MuiBox-root css-1p65aex']//button[1]")
                expect(cropperSaveBtn).toContainText("Save")
                await cropperSaveBtn.click()











        }

        async fileUploadCropperWithoutIframe() {

                // const imageText = await this.page.locator("text='Image'")
                // expect(imageText).toContainText("Image")
                await this.page.waitForSelector("//button[text()='Choose File']")

                // const ratioText = await this.page.locator("text='Ratio:'")
                // expect.soft(ratioText).toContainText("Ratio:")


                // const resolutionText = await this.page.locator("text='Resolution:'")
                // expect.soft(resolutionText).toContainText("Resolution:")


                // const alignmentText = await this.page.locator("text='Alignment:'")
                // expect.soft(alignmentText).toContainText("Alignment:")

                // const fileTypeText = await this.page.locator("text='File Type:'")
                // expect.soft(fileTypeText).toContainText("File Type:")


                // const maxFileSizeText = await this.page.locator("text='Max File Size:'")
                // expect.soft(maxFileSizeText).toContainText("Max File Size:")

                // const ratioTimeText = await this.page.frameLocator('iframe').locator("text='16:9'")
                // expect(ratioTimeText).toContainText("16:9")

                // const resolutionSizeText = await this.page.locator("text='1280x720'")
                // expect.soft(resolutionSizeText).toContainText("1280x720")


                // const alignmentDetailsText = await this.page.locator("text='Centered'")
                // expect.soft(alignmentDetailsText).toContainText("Centered")


                // const fileTypeDetailsText = await this.page.locator("text='PNG, SVG, JPEG, JPG'")
                // expect.soft(fileTypeDetailsText).toContainText("PNG, SVG, JPEG, JPG")

                // const maxFileSizeDetailsText = await this.page.locator("text='2MB'")
                // expect.soft(maxFileSizeDetailsText).toContainText("2MB")

                // const fileNameText = await this.page.locator("text='File Name'")
                // expect.soft(fileNameText).toContainText("File Name")

                // const fileSizeText = await this.page.locator("text='File Size'")
                // expect.soft(fileSizeText).toContainText("File Size")


                const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                expect.soft(chooseBtn).toContainText("Choose File")
                const filePath0 = "testData/logos/PotraitBanner.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                await chooseBtn.click()

                // const deviceScreenSizeText = await this.page.locator("text='Device Screen Size:'")
                // expect.soft(deviceScreenSizeText).toContainText("Device Screen Size:")


                // const deviceSelectField = await this.page.locator("//label[text()='Choose Size']")
                // expect.soft(deviceSelectField).toBeVisible()
                // await deviceSelectField.click({force:true})


                // const iphone13ProMax = await this.page.locator("//li[@data-value='iPhone 13 Pro Max']")
                // expect.soft(iphone13ProMax).toContainText("iPhone 13 Pro Max")
                // await iphone13ProMax.dblclick()

                // await this.page.waitForTimeout(1000)

                // await deviceSelectField.click({force:true})


                // const iphone12 = await this.page.locator("//li[@data-value='iPhone 12']")
                // expect(iphone12).toContainText("iPhone 12")
                // await iphone12.dblclick()

                // await this.page.waitForTimeout(1000)

                // await deviceSelectField.click({force:true})


                // const samsungS20 = await this.page.locator("//li[text()='Samsung S20']")
                // expect(samsungS20).toContainText("Samsung S20")
                // await samsungS20.dblclick()



                // const currentImageSizeTitleText = await this.page.locator("//div[text()='Current Image Size:']")
                // expect.soft(currentImageSizeTitleText).toContainText("Current Image Size:")

                // const currentImageRatioTitleText = await this.page.locator("//p[text()='Current Image Size Ratio:']")
                // expect.soft(currentImageRatioTitleText).toContainText("Current Image Size Ratio:")


                const cropperSaveBtn = await this.page.locator("//div[@class='MuiBox-root css-1p65aex']//button[1]")
                expect(cropperSaveBtn).toContainText("Save")
                await cropperSaveBtn.click()











        }

        async invalidFileUploadCropperWithoutIframe() {

                // const imageText = await this.page.locator("text='Image'")
                // expect(imageText).toContainText("Image")

                const ratioText = await this.page.locator("text='Ratio:'")
                expect.soft(ratioText).toContainText("Ratio:")


                const resolutionText = await this.page.locator("text='Resolution:'")
                expect.soft(resolutionText).toContainText("Resolution:")


                const alignmentText = await this.page.locator("text='Alignment:'")
                expect.soft(alignmentText).toContainText("Alignment:")

                const fileTypeText = await this.page.locator("text='File Type:'")
                expect.soft(fileTypeText).toContainText("File Type:")


                const maxFileSizeText = await this.page.locator("text='Max File Size:'")
                expect.soft(maxFileSizeText).toContainText("Max File Size:")

                // const ratioTimeText = await this.page.frameLocator('iframe').locator("text='16:9'")
                // expect(ratioTimeText).toContainText("16:9")

                const resolutionSizeText = await this.page.locator("text='1280x720'")
                expect.soft(resolutionSizeText).toContainText("1280x720")


                const alignmentDetailsText = await this.page.locator("text='Centered'")
                expect.soft(alignmentDetailsText).toContainText("Centered")


                const fileTypeDetailsText = await this.page.locator("text='PNG, SVG, JPEG, JPG'")
                expect.soft(fileTypeDetailsText).toContainText("PNG, SVG, JPEG, JPG")

                const maxFileSizeDetailsText = await this.page.locator("text='2MB'")
                expect.soft(maxFileSizeDetailsText).toContainText("2MB")

                const fileNameText = await this.page.locator("text='File Name'")
                expect.soft(fileNameText).toContainText("File Name")

                const fileSizeText = await this.page.locator("text='File Size'")
                expect.soft(fileSizeText).toContainText("File Size")


                const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                expect.soft(chooseBtn).toContainText("Choose File")
                const filePath0 = "testData/csv/csv.csv"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                // const popupPromise = this.page.waitForEvent('popup');
                await chooseBtn.click({delay:300})
                // const popup = await popupPromise;

                // await popup.locator("//p[text()='File type is not supported']").isVisible()
                // await popup.locator("//button[text()='Ok']").click()



                // const deviceScreenSizeText = await this.page.locator("text='Device Screen Size:'")
                // expect.soft(deviceScreenSizeText).toContainText("Device Screen Size:")


                // const deviceSelectField = await this.page.locator("//label[text()='Choose Size']")
                // expect.soft(deviceSelectField).toBeVisible()
                // await deviceSelectField.click({force:true})


                // const iphone13ProMax = await this.page.locator("//li[@data-value='iPhone 13 Pro Max']")
                // expect.soft(iphone13ProMax).toContainText("iPhone 13 Pro Max")
                // await iphone13ProMax.dblclick()

                // await this.page.waitForTimeout(1000)

                // await deviceSelectField.click({force:true})


                // const iphone12 = await this.page.locator("//li[@data-value='iPhone 12']")
                // expect(iphone12).toContainText("iPhone 12")
                // await iphone12.dblclick()

                // await this.page.waitForTimeout(1000)

                // await deviceSelectField.click({force:true})


                // const samsungS20 = await this.page.locator("//li[text()='Samsung S20']")
                // expect(samsungS20).toContainText("Samsung S20")
                // await samsungS20.dblclick()



                // const currentImageSizeTitleText = await this.page.locator("//div[text()='Current Image Size:']")
                // expect.soft(currentImageSizeTitleText).toContainText("Current Image Size:")

                // const currentImageRatioTitleText = await this.page.locator("//p[text()='Current Image Size Ratio:']")
                // expect.soft(currentImageRatioTitleText).toContainText("Current Image Size Ratio:")


                // const cropperSaveBtn = await this.page.locator("//div[@class='MuiBox-root css-1p65aex']//button[1]")
                // expect(cropperSaveBtn).toContainText("Save")
                // await cropperSaveBtn.click()











        }

        async mobileSignUpAdditionalInformation() {


                let phoneNumber = await this.page.locator("(//label[text()='Url or link']/following::input)[1]").isChecked()
                if ((phoneNumber == false)) {
                        // console.log("Radio button is not checked")
                        await this.page.locator("(//label[text()='Url or link']/following::input)[1]").click()

                }


                let emailCheckbox = await this.page.locator("(//span[text()='Phone Number']/following::input)[1]").isChecked()

                if ((emailCheckbox == false)) {
                        // console.log("Click on the Email Address Checkbox")
                        await this.page.locator("(//span[text()='Phone Number']/following::input)[1]").click()

                }

                let ageCheckbox = await this.page.locator("(//span[text()='Email Address']/following::input)[1]").isChecked()

                if ((ageCheckbox == false)) {
                        // console.log("Click on the Age Checkbox")
                        await this.page.locator("(//span[text()='Email Address']/following::input)[1]").click()

                }

                let dateOfBirthCheckBox = await this.page.locator("(//span[text()='Age']/following::input)[1]").isChecked()

                if ((dateOfBirthCheckBox == false)) {
                        // console.log("Click on the Deth of Birth Checkbox")
                        await this.page.locator("(//span[text()='Age']/following::input)[1]").click()

                }


                let postalCodeCheckBox = await this.page.locator("(//span[text()='Date of Birth']/following::input)[1]").isChecked()

                if ((postalCodeCheckBox == false)) {
                        // console.log("Click on the Postal Code Checkbox")
                        await this.page.locator("(//span[text()='Date of Birth']/following::input)[1]").click()

                }

                let customQuestionCheckBox = await this.page.locator("(//span[text()='Zip Code / Postal Code']/following::input)[1]").isChecked()

                if ((customQuestionCheckBox == true)) {
                        // console.log("Click on the Postal Code Checkbox")
                        await this.page.locator("(//span[text()='Zip Code / Postal Code']/following::input)[1]").uncheck()

                }

                let signUpHomeScreen = await this.page.locator("//input[@value='signUpHome']")
                await signUpHomeScreen.click({ force: true })


                let menu = await this.page.locator("//p[text()='Menu']")
                await menu.click({ force: true })

                await this.page.locator('text=Bottom').click({ force: true });


        }

        async mobilePreviewScreen() {
                await this.page.frameLocator('iframe').locator("input[name='phone']").fill("310-260-6620")

                await this.page.frameLocator('iframe').locator('input[name="email"]').fill("jon@email.com")

                //     await page.frameLocator('iframe').locator('input[name="age"]').fill("23")

                // await this.page.click('//input[@name="birthDate"]');

                // await this.page.waitForTimeout(5000)

                // await this.page.click("//button[text()='27']");

                // await this.page.click("//button[text()='OK']");

                await this.page.frameLocator('iframe').locator('[name="zipCode"]').fill("1223")

                await this.page.frameLocator('iframe').locator("//button[text()='Submit']").click();

                await this.page.waitForTimeout(2000)


                await this.page.frameLocator('iframe').locator("//p[text()='USER PROFILE']").click();

                await this.page.waitForTimeout(5000)


                await this.page.frameLocator('iframe').locator("//p[text()='RULES']").click();
                await this.page.waitForTimeout(6000)


                await this.page.frameLocator('iframe').locator("//p[text()='HOW TO PLAY']").click();
                await this.page.waitForTimeout(6000)



                await this.page.frameLocator('iframe').locator("//button[@value='prize']").click();

                await this.page.waitForTimeout(5000)

                await this.page.frameLocator('iframe').locator("//p[text()='HOME']").click();
                await this.page.waitForTimeout(2000)
        }

        async waitAndClick(locator: string) {
                const element = this.page.locator(locator);
                await element.waitFor({
                    state: "visible"
                });
                await element.click();
            }

        getRandomName() {
                return "Auto" + Date.now() + "Name"
        }

        async clickAnonymouLogin(){
                
        }


}

