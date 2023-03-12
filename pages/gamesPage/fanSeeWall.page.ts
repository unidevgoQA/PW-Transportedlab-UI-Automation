import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
import BaseFunctions from "@base-function/baseFunctions";
export default class fanSeeWallPage {
        private base: BaseFunctions;
        constructor(private page: Page
        ) {
                this.base = new BaseFunctions(page);
        }
        private fanSeeWallPageElements = {
                fanSeeWallPage: "//p[text()='Fansee Wall']",
                mobileSectionBtn: "//p[text()='Mobile']",
                mobileTitleText: "//h3[text()='Mobile']",
                qrCodeIconBtn: "//div[@class='MuiBox-root css-1pihhz']//button[1]",
                settingsTitleText: "//p[text()='Settings']",
                userProfileTitleText: "//p[text()='User Profile']",
                showAvatarTitleText: "//p[text()='Show Avatar']",
                showAvatarCheckBox: "(//input[@type='checkbox'])[1]",
                showUserNameTitleText: "//p[text()='Show Username']",
                showUserNameCheckBox: "(//input[@type='checkbox'])[2]",
                postContentTitleText: "//p[text()='Post Content']",
                allowPhotoTitleText: "//p[text()='Allow Photo']",
                allowPhotoCheckBox: "(//input[@type='checkbox'])[3]",
                allowVideoTitleText: "//p[text()='Allow Video']",
                allowVideoCheckBox: "(//input[@type='checkbox'])[4]",
                allowTextTitleText: "//p[text()='Allow Text']",
                allowTextCheckBox: "(//input[@type='checkbox'])[5]",
                allowFileUploadTitleText: "//p[text()='Allow File Upload']",
                allowFileUploadCheckBox: "(//input[@type='checkbox'])[6]",
                videoTitleText: "//p[text()='Video']",
                minimumVideoLengthTitleText: "//p[text()='Min Video Length']",
                minimumSecondLabelText: "(//h6[text()='Seconds'])[1]",
                minimumVideoLengthInputField: "(//input[@type='number'])[1]",
                maxVideoLengthTitleText: "//p[text()='Max Video Length']",
                maxSecondLabelText: "(//h6[text()='Seconds'])[2]",
                maxVideoLengthInputField: "(//input[@type='number'])[2]",
                colorTitleText: "//p[text()='Colors']",
                colorSectionExpandCollapseBtn: "//p[text()='Colors']/following-sibling::div",
                settinsSectionExpnadCollapseBtn: "//p[text()='Settings']/following-sibling::div",
                mobileBackgroundColorTitleText: "//p[text()='Mobile Background']",
                mobileBackgroundColorInputField: "//p[text()='Mobile Background']/following-sibling::button",
                colorCodeInputField: "//div[@class='MuiBox-root css-zfy2p9']/following-sibling::input[1]",
                colorWindowSaveBtn: "//button[text()='Save']",
                mobileButtonColorTitleText: "//p[text()='Button']",
                mobileButtonColorInputField: "//p[text()='Button']/following-sibling::button",
                mobileButtonTextColorTitleText: "//p[text()='Button Text']",
                mobileButtonTextColorInputField: "//p[text()='Button Text']/following-sibling::button",
                mobileTextColorTitleText: "//p[text()='Text']",
                mobileTextColorInputField: "//p[text()='Text']/following-sibling::button",
                imageUploadTitleText: "//p[text()='Image Uploads']",
                imageUploadSectionExpandCollapseBtn: "//p[text()='Image Uploads']/following-sibling::div",
                mobileBackgroundUploadedImagedeleteBtn: "//button[@aria-label='Delete']",
                mobileWelcomeUploadedImagedeleteBtn: "(//button[@aria-label='Delete'])[2]",
                mobileEventUploadedImagedeleteBtn: "(//button[@aria-label='Delete'])[3]",
                mobileBackgroundImageUploadBtn: "(//div[@class='MuiBox-root css-v2612'])[1]",
                mobileWelcomeImageUploadBtn: "(//div[@class='MuiBox-root css-v2612'])[2]",
                mobileEventImageUploadBtn: "(//div[@class='MuiBox-root css-v2612'])[3]",
                dialogTitleText: "//p[text()='Dialogs']",
                dialogExpandCollapseBtn: "//p[text()='Dialogs']/following-sibling::div",
                perEventMassageTitleText: "//h5[text()='Pre-Event Message']",
                perEventMassageInputField: "(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[1]",
                perEventFilterBlockTypeInputField: "(//a[@title='Block Type'])[1]",
                welcomeMassageBlockTypeInputField: "(//a[@title='Block Type'])[2]",
                normalTag: "//li[text()='Normal']",
                activeBackgroundColorPickerBtn: "//p[text()='Active Background']/following-sibling::button",
                welcomeMassageTitleText: "//h5[text()='Welcome Message']",
                welcomeMassageInputField: `(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[2]`,
                perCaptureInstructionsTitleText: "//h5[text()='Pre-Capture Instructions']",
                perCaptureInstructionsInputField: `(//div[@class='rdw-editor-main'])[3]`,
                postSubmitMassageTitleText: "//h5[text()='Post Submit Message']",
                postSubmitMassageInputField: `(//div[@class='rdw-editor-main'])[4]`,
                switchColorDeleteBtn: `//button[@aria-label="delete"]`,
                bottomAlignmentButton: "//h5[text()='Bottom']//parent::button",
                qrCodeBtn: `//button[@type='button']//button[1]`,
                opneLinkInNewTab: "//a[@aria-label='Open Link']",

        }


        async clickQrCodeBtn() {
                const ele = this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.qrCodeBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("domcontentloaded")
                } catch (error) {
                        throw new Error(`FanSee Wall Page Default Config QR Code Btn Is Not Visible | Error occurred: ${error}`);
                }

        }
        async clickOpenLinkInNewTab() {

                // Click text=Open Link
                const [page1] = await Promise.all([
                        this.page.waitForEvent('popup'),
                        this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.opneLinkInNewTab).click({ button: "left" })
                ]);
                // await this.page.waitForLoadState("networkidle")
                await this.page.waitForTimeout(3000)
                return page1;
        }

        async clickFanSeeWallPage() {
                let ele = await this.page.locator(this.fanSeeWallPageElements.fanSeeWallPage)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("domcontentloaded")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall Page Button Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickMobileSettingsPage() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileSectionBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("domcontentloaded")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall Page Button Is Not Visible | Error occurred: ${error}`);
                }
        }

        async verifyUserProfileTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.userProfileTitleText)
                try {
                        await expect(ele).toContainText("User Profile")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Page User Profle Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async verifyShowAvatarTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.showAvatarTitleText)
                try {
                        await expect.soft(ele).toContainText("Show Avatar")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Page Show Avatar Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async enableShowAvatar() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.showAvatarCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.showAvatarCheckBox).click()

                } else {
                        console.log("Game | FanSee Wall | Show Avater CheckBox Is Enabled So Did Not Click On It")
                }
        }

        async verifyShowUserNameTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.showUserNameTitleText)
                try {
                        await ele.isVisible()
                        await expect.soft(ele).toContainText("Show Username")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Page Show Username Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async enableUserName() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.showUserNameCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.showUserNameCheckBox).click()

                } else {
                        console.log("Game | FanSee Wall | Show UserName CheckBox Is Enabled So Did Not Click On It")
                }
        }

        async verifyAllowPhotoTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.allowPhotoTitleText)
                try {
                        await expect.soft(ele).toContainText("Allow Photo")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Page Show Allow Photo Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async enableAllowPhoto() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.allowPhotoCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.allowPhotoCheckBox).click()

                } else {
                        console.log("Game | FanSee Wall | Show Allow Photo CheckBox Is Enabled So Did Not Click On It")
                }
        }

        async verifyAllowVideoTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.allowVideoTitleText)
                try {
                        await expect.soft(ele).toContainText("Allow Video")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Page Show Allow Video Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async enableAllowVideo() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.allowVideoCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.allowVideoCheckBox).click()

                } else {
                        console.log("Game | FanSee Wall | Show Allow Video CheckBox Is Enabled So Did Not Click On It")
                }
        }

        async verifyAllowTextTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.allowTextTitleText)
                try {
                        await expect.soft(ele).toContainText("Allow Text")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Page Show Allow Text Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async enableAllowText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.allowTextCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.allowTextCheckBox).click()

                } else {
                        console.log("Game | FanSee Wall | Show Allow Text CheckBox Is Enabled So Did Not Click On It")
                }
        }

        async verifyFileUploadTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.allowFileUploadTitleText)
                try {
                        await expect.soft(ele).toContainText("Allow File Upload")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Page Show Allow File Upload Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async enableAllowFileUpload() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.allowFileUploadCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.allowFileUploadCheckBox).click()

                } else {
                        console.log("Game | FanSee Wall | Show Allow File Upload CheckBox Is Enabled So Did Not Click On It")
                }
        }

        async verifyVideoTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.videoTitleText)
                try {
                        await expect.soft(ele).toContainText("Video")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Page Video Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async verifyMinimumVideoLenthTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.minimumVideoLengthTitleText)
                try {
                        await expect.soft(ele).toContainText("Min Video Length")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Page Min Video Length Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async verifyMinimumVideoLenthSecondTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.minimumSecondLabelText)
                try {
                        await expect.soft(ele).toContainText("Seconds")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Page Seconds Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async inputMinimumVideoLenthSecond() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.minimumVideoLengthInputField)
                try {
                        await ele.fill("5")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Page Minimum Video Length Seconds Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }

        async verifyMaxVideoLengthTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.maxVideoLengthTitleText)
                try {
                        await expect.soft(ele).toContainText("Max Video Length")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Page Max Video Length Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async verifyMaxVideoLenthSecondTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.maxSecondLabelText)
                try {
                        await expect.soft(ele).toContainText("Seconds")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Page Seconds Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async inputMaxVideoLenthSecond() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.maxVideoLengthInputField)
                try {
                        await ele.fill("15")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Page Minimum Video Length Seconds Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }

        async collapseSettingsSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.settinsSectionExpnadCollapseBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settins Section Expand Collapse Button Does Not Work | Error occurred: ${error}`);
                }
        }


        async verifyColorSectionTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.colorTitleText)
                try {
                        await expect.soft(ele).toContainText("Colors")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settins Page Colors Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async expandColorSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.colorSectionExpandCollapseBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Expand Collapse Button Does Not Work | Error occurred: ${error}`);
                }
        }

        async verifyImageUploadSectionTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.imageUploadTitleText)
                try {
                        await expect.soft(ele).toContainText("Image Uploads")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settins Page Image Upload Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async expandImageUploadSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.imageUploadSectionExpandCollapseBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Image Upload Expand Collapse Button Does Not Work | Error occurred: ${error}`);
                }
        }




        async verifyMobileBackGroundTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileBackgroundColorTitleText)
                try {
                        await expect.soft(ele).toContainText("Mobile Background")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settins Page Mobile Background Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickMobileBackgroundColorInputBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileBackgroundColorInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Mobile Background Color Input Section Open Button Is Not Visible | Error occurred: ${error}`);
                }
        }

        async inputColorCodeForMobileBackground() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.colorCodeInputField)
                try {
                        await ele.fill("5FBCD2FF")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Mobile Background Color Code Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }

        async colorWindowSaveBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.colorWindowSaveBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Mobile Background Color Window Save Button Is Not Visible | Error occurred: ${error}`);
                }
        }




        async verifyColorSectionButtonTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileButtonColorTitleText)
                try {
                        await expect.soft(ele).toContainText("Button")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settins Page Mobile Button Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickMobileButtonColorInputBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileButtonColorInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Mobile Button Color Input Section Open Button Is Not Visible | Error occurred: ${error}`);
                }
        }

        async inputColorCodeForMobileButton() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.colorCodeInputField)
                try {
                        await ele.fill("FD7C6AFF")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Mobile Button Color Code Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }




        async verifyColorSectionButtonTextTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileButtonTextColorTitleText)
                try {
                        await expect.soft(ele).toContainText("Button Text")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settins Page Mobile Button Text Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickMobileButtonTextColorInputBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileButtonTextColorInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Mobile Button Text Color Input Section Open Button Is Not Visible | Error occurred: ${error}`);
                }
        }

        async inputColorCodeForMobileButtonText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.colorCodeInputField)
                try {
                        await ele.fill("212936FF")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Mobile Button Text Color Code Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }



        async verifyColorSectionTextTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileTextColorTitleText)
                try {
                        await expect.soft(ele).toContainText("Text")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settins Page Mobile Text Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickMobileTextColorInputBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileTextColorInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Mobile Text Color Input Section Open Button Is Not Visible | Error occurred: ${error}`);
                }
        }

        async inputColorCodeForMobileText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.colorCodeInputField)
                try {
                        await ele.fill("1DA865FF")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settings Mobile Text Color Code Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }

        async deleteMobileBackgroundImage() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileBackgroundUploadedImagedeleteBtn).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileBackgroundUploadedImagedeleteBtn).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log(`Game | FanSee Wall | Mobile Background Image Is Not Found`);
                }
        }

        async deleteMobileWelcomeImage() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileWelcomeUploadedImagedeleteBtn).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileWelcomeUploadedImagedeleteBtn).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)

                } else {
                        console.log(`Game | FanSee Wall | Mobile Welcome Image Is Not Found`);
                }
        }

        async deleteMobileEventImage() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileEventUploadedImagedeleteBtn).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileEventUploadedImagedeleteBtn).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)

                } else { console.log(`Game | FanSee Wall | Mobile Event Image Is Not Found`); }


        }

        async clickToUploadMobileBackgroundImage() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileBackgroundImageUploadBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Background Upload Button Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickToUploadMobileWelcomeImage() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileWelcomeImageUploadBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Welcome Upload Button Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickToUploadMobileEventImage() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mobileEventImageUploadBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Event Upload Button Is Not Visible | Error occurred: ${error}`);
                }
        }

        async verifyDialogsSectionTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.dialogTitleText)
                try {
                        await expect.soft(ele).toContainText("Dialogs")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settins Page Dialogs Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async expandDialogsSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.dialogExpandCollapseBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Dialogs Expand Collapse Button Does Not Work | Error occurred: ${error}`);
                }
        }

        async verifyPreEventMessageTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.perEventMassageTitleText)
                try {
                        await expect.soft(ele).toContainText("Pre-Event Message")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settins Page Pre-Event Message Title Text Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickBlockTypeSectionField() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.perEventFilterBlockTypeInputField)
                try {
                        await ele.click({ force: true })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settins Dialogs Section Page Pre-Event Message Block Type Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }

        async clickWelcomeMassageBlockTypeSectionField() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.welcomeMassageBlockTypeInputField)
                try {
                        await ele.click({ force: true })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settins Dialogs Section Page Pre-Event Message Block Type Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }

        async selectH1Tag() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.normalTag)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settins Dialogs Section Page Pre-Event Message Block Type H1 Is Not Visible | Error occurred: ${error}`);
                }
        }

        async inputPreEventMessage() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.perEventMassageInputField)
                try {
                        await ele.fill("Pre-Event Message")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settins Dialogs Section Page Pre-Event Message Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }

        async inputWelcomeMessageFromDialogs(value: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.welcomeMassageInputField)
                try {

                        await ele.click({ force: true })
                        await ele.clear()
                        await ele.fill(value)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Mobile Settins Dialogs Section Page Pre-Event Message Input Field Is Not Visible | Error occurred: ${error}`);
                }
        }



















































































}