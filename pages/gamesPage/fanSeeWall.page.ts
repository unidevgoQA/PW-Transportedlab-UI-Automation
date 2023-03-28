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
                h1Tag: "//li[text()='H1']",
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

                mainboardBtn: "//p[text()='Mainboard']",
                settigsTitleText: "//p[text()='Settings']",
                titleText: "//p[text()='Title']",
                titleInputField: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]",
                leftRightMargin: "//p[text()='Left & Right Margin']",
                leftRightMarginInputField: "(//input[contains(@class,'MuiInputBase-input MuiInput-input')])[1]",
                topBottomMarginTitleText: "//p[text()='Top & Bottom Margin']",
                topBottomMarginInputField: "(//input[contains(@class,'MuiInputBase-input MuiInput-input')])[2]",
                mostRecentPostsTitleText: "//p[text()='Most Recent Posts']",
                mostRecentPostsInputField: "(//input[contains(@class,'MuiInputBase-input MuiInput-input')])[3]",
                tileAnimationSpeedTitleText: "//p[text()='Tile Animation Speed']",
                tileAnimationSpeedInputField: "(//input[contains(@class,'MuiInputBase-input MuiInput-input')])[4]",
                loopVideoTitleText: "//p[text()='Loop Video']",
                loopVideoCheckBox: "(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[1]",
                socialIconTitleText: "//p[text()='Social Icons']",
                UploadFontBtn: '//div[@class="MuiBox-root css-3fw1ig"]',
                cueTitleText: "//p[text()='CUE']",
                cueCheckBox: "(//input[@type='checkbox'])[4]",
                automateFeaturePost: "//p[text()='Automate Featured Posts']",
                automateFeaturePostCheckBox: "(//input[@type='checkbox'])[6]",
                intervalTitleText: "//p[text()='Interval']",
                intervalSecondInputField: "(//input[contains(@class,'MuiInputBase-input MuiInput-input')])[5]",
                durationTitleText: "//p[text()='Duration']",
                durationSecondInputField: "(//input[contains(@class,'MuiInputBase-input MuiInput-input')])[6]",
                settinsExpandCollapseBtn: "//p[text()='Settings']/following-sibling::div",
                colorsExpandCollapseBtn: "//p[text()='Colors']/following-sibling::div",
                titleColorInputField: "//p[text()='Title']/following-sibling::button",
                postTitleText: "//p[text()='Post Text']",
                postColorInputFieldBtn: "//p[text()='Post Text']/following-sibling::button",
                TimerCircleColorPicker: "//p[text()='Timer Circle']/following-sibling::button",
                backgroundTitleText: "//p[text()='Background']",
                backgroundColorInputField: "//p[text()='Background']/following-sibling::button",
                titleBackgroundTitleText: "//p[text()='Tile Background']",
                titleBackgroundColorInputFieldBtn: "//p[text()='Tile Background']/following-sibling::button",
                featurePostTitleText: "//p[text()='Featured Post Tile']",
                featurePostColorInputFieldBtn: "//p[text()='Featured Post Tile']/following-sibling::button",
                featurePostBAckgroundTitleText: "//p[text()='Featured Post Background']",
                featurePostBAckgroundColorInputFieldBtn: "//p[text()='Featured Post Background']/following-sibling::button",
                featurePostTextTitleText: "//p[text()='Featured Post Text']",
                featurePostTextColorInputFieldBtn: "//p[text()='Featured Post Text']/following-sibling::button",
                ColorPickerSaveBtn: '//button[text()="Save"]',

                backgroundImageUploadInputFieldBtn: "(//div[@class='MuiBox-root css-v2612'])[1]",
                defaultMainboardTileTitleText: "//p[text()='Default Mainboard Tile']",
                defaultMainboardTileImageUploadInputFieldBtn: "(//div[@class='MuiBox-root css-v2612'])[2]",
                featuredPostOverlayTitleText: "//p[text()='Featured Post Overlay']",
                featuredPostOverlayImageUploadInputFieldBtn: "(//div[@class='MuiBox-root css-v2612'])[3]",
                imageUpload1TitleText: "//p[text()='Image Upload 1']",
                imageUpload1ImageUploadInputFieldBtn: "(//div[@class='MuiBox-root css-v2612'])[4]",
                imageUpload2TitleText: "//p[text()='Image Upload 2']",
                imageUpload2ImageUploadInputFieldBtn: "(//div[@class='MuiBox-root css-v2612'])[5]",
                internalSourceIconTitleText: "//p[text()='Internal Source Icon']",
                internalSourceIconImageUploadInputFieldBtn: "(//div[@class='MuiBox-root css-v2612'])[6]",
                deleteBtnForInternalSourceIcon: "(//button[@aria-label='Delete'])[6]",
                deleteBtnForImageUpload2: "(//button[@aria-label='Delete'])[5]",
                deleteBtnForImageUpload1: "(//button[@aria-label='Delete'])[4]",
                deleteBtnForFeaturedPostOverlay: "(//button[@aria-label='Delete'])[3]",
                deleteBtnForDefaultMainboardTile: "(//button[@aria-label='Delete'])[2]",
                deleteBtnForBackground: "//button[@aria-label='Delete']",



                moderationPage: "//p[text()='Moderation']",
                createPostBtn: "//button[text()='Create Post']",
                addNewPostTitleText: "//p[text()='Add New Post']",
                avaterTitleText: "//p[text()='Avatar']",
                avaterUploadInputFieldBtn: "(//div[@class='MuiBox-root css-v2612'])[1]",
                nameTitleText: "//p[text()='Name']",
                nameInputField: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]",
                userNameTitleText: "//p[text()='User Name']",
                userNameInputField: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]",
                imageRadioBtn: "(//input[@type='radio'])[1]",
                postImageUploadInputField: "//div[@class='MuiBox-root css-v2612']",
                postTextTitleText: "//p[text()='Post Text']",
                postTextInputField: "(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]",
                saveBtn: "//button[text()='Save']",
                refreshBtn: "(//button[@isbackground='true'])[1]",
                sourcesDropDownInputField: "(//div[@role='button'])[1]",
                cueSourceCheckBox: "//li[@data-value='CUE']",
                customAddsSourceCheckBox: "//li[@data-value='Custom Adds']",


                sortByDropDownInputField: "(//div[@role='button'])[2]",
                approvedSrotByCheckBox: "//li[@data-value='Approved']",
                likedSrotByCheckBox: "//li[@data-value='Liked']",
                flaggedSrotByCheckBox: "//li[@data-value='Flagged']",
                deletedSortByCheckBox: "//li[@data-value='Deleted']",
                filterByDropDownInputField: "(//div[@role='button'])[3]",
                textFilterByCheckBox: "//li[@data-value='Text']",
                imageFilterByCheckBox: "//li[@data-value='Image']",
                videoFilterByCheckBox: "//li[@data-value='Video']",
                postFromCueSide: "//div[text()='Auto Post From Devid']",
                postFromCueSideWithTakePhoto: "//div[text()='Post With Take Photo']",
                postFromCueSideWithVideoRecord: "//div[text()='Post With Record Video']",
                customAdsFilterValidation: "//p[text()='Custom Adds']",
                clearAllBtn: "//button[text()='Clear All']",
                okBtn: "//button[text()='Ok']",
                playListPost: "(//div[@role='button']//p)[1]",
                // nameInputField: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]",
                // userNameTitleText: "//p[text()='User Name']",
                // userNameInputField: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]",
                // imageRadioBtn: "(//input[@type='radio'])[1]",
                // postImageUploadInputField: "//div[@class='MuiBox-root css-v2612']",
                // postTextTitleText: "//p[text()='Post Text']",
                // postTextInputField: "(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]",
                // saveBtn: "//button[text()='Save']",
                // refreshBtn: "(//button[@isbackground='true'])[1]",
                // sourcesDropDownInputField: "(//div[@role='button'])[1]",
                postApproveBtn: "div:nth-child(2) > div > div > div > div > div:nth-child(3) > button",
                postLikeBtn: "button:nth-child(2)",
                postFevoraitBtn: "div:nth-child(3) > button:nth-child(3)",
                postFlagBtn: "button:nth-child(4)",
                postDeleteBtn: "button:nth-child(5)"
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

        async disableShowAvatar() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.showAvatarCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.showAvatarCheckBox).click({ force: true })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log("Game | FanSee Wall | Show Avater CheckBox Is Enabled So Did Not Click On It")
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

        async disableUserName() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.showUserNameCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.showUserNameCheckBox).click({ force: true })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log("Game | FanSee Wall | Show UserName CheckBox Is Disable So Did Not Click On It")
                }
        }

        async enableUserName() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.showUserNameCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.showUserNameCheckBox).click({ force: true })

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

        async selectH1TagForBlockType() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.h1Tag)
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

        async clickMainBoardPage() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mainboardBtn)
                try {
                        await ele.click({ force: true })
                        await this.page.waitForLoadState("domcontentloaded")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Button Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async verifyTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.titleText)
                try {
                        await expect.soft(ele).toContainText("Title")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Title Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async inputTitle() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.titleInputField)
                try {
                        await ele.fill("Auto MainBoard")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Title Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async verifyLeftRightMarginTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.leftRightMargin)
                try {
                        await expect.soft(ele).toContainText("Left & Right Margin")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Left & Right Margin Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async inputLeftRightMarginParcent() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.leftRightMarginInputField)
                try {
                        await ele.fill("10")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Left & Right Margin Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async verifyTopBottomMarginTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.topBottomMarginTitleText)
                try {
                        await expect.soft(ele).toContainText("Top & Bottom Margin")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Top & Bottom Margin Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async inputTopBottomMarginParcent() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.topBottomMarginInputField)
                try {
                        await ele.fill("10")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Top & Bottom Margin Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async verifyMostRecentPostsTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mostRecentPostsTitleText)
                try {
                        await expect.soft(ele).toContainText("Most Recent Posts")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Most Recent Posts Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async inputMostRecentPostsSecond() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.mostRecentPostsInputField)
                try {
                        await ele.fill("100")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Most Recent Posts Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async verifyTileAnimationSpeedTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.tileAnimationSpeedTitleText)
                try {
                        await expect.soft(ele).toContainText("Tile Animation Speed")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Tile Animation Speed Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async inputTileAnimationSpeedSecond() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.tileAnimationSpeedInputField)
                try {
                        await ele.fill("100")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Tile Animation Speed Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async verifyLoopVideoTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.loopVideoTitleText)
                try {
                        await expect.soft(ele).toContainText("Loop Video")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Settings Section Loop Video Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async disableLoopVideoCheckBox() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.loopVideoCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.loopVideoCheckBox).click({ force: true })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log("Game | FanSee Wall | MainBoard Settins Loop Video CheckBox Is Disable So Did Not Click On It")
                }
        }

        async enableLoopVideoCheckBox() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.loopVideoCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.loopVideoCheckBox).click()

                } else {
                        console.log("Game | FanSee Wall | MainBoard Settins Loop Video CheckBox Is Enabled So Did Not Click On It")
                }
        }

        async verifySocailIconTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.socialIconTitleText)
                try {
                        await expect.soft(ele).toContainText("Social Icons")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Settings Section Social Icons Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async verifyCueTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.cueTitleText)
                try {
                        await expect.soft(ele).toContainText("CUE")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Settings Section CUE Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async disableCueCheckBox() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.cueCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.cueCheckBox).click({ force: true })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log("Game | FanSee Wall | MainBoard Settins CUE CheckBox Is Disableed So Did Not Click On It")
                }
        }


        async enableCueCheckBox() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.cueCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.cueCheckBox).click()

                } else {
                        console.log("Game | FanSee Wall | MainBoard Settins CUE CheckBox Is Enabled So Did Not Click On It")
                }
        }

        async verifyAutomateFeaturedPostsTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.automateFeaturePost)
                try {
                        await expect.soft(ele).toContainText("Automate Featured Posts")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Settings Section Automate Featured Posts Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async verifyIntervalTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.intervalTitleText)
                try {
                        await expect.soft(ele).toContainText("Interval")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Settings Section Interval Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async inputIntervalSecond() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.intervalSecondInputField)
                try {
                        await ele.fill("10")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Settings Section Interval Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async verifyDurationTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.durationTitleText)
                try {
                        await expect.soft(ele).toContainText("Duration")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Settings Section Duration Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async inputDurationSecond() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.durationSecondInputField)
                try {
                        await ele.fill("10")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Settings Section Duration Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }


        async clickTitleColorSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.titleColorInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Colors Section Color Colors Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async inputTitleColor() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.colorCodeInputField)
                try {
                        await ele.fill("7B8AFFFF")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Color Section Color Code Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async verifyPostTextTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.postTitleText)
                try {
                        await expect.soft(ele).toContainText("Post Text")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Colors Section Post Text Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickPostTextColorSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.postColorInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Colors Section Post Text Colors Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }


        async inputPostTextColor() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.colorCodeInputField)
                try {
                        await ele.fill("FF7373FF")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Color Section Color Code Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async verifyBackgroundTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.backgroundTitleText)
                try {
                        await expect.soft(ele).toContainText("Background")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Colors Section Background Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickBackgroundColorSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.backgroundColorInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Colors Section Background Colors Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }


        async inputBackgroundColor() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.colorCodeInputField)
                try {
                        await ele.fill("3B86FFFF")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Color Section Color Code Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }


        async verifyTileBackgroundTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.titleBackgroundTitleText)
                try {
                        await expect.soft(ele).toContainText("Tile Background")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Colors Section Tile Background Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickTileBackgroundColorSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.titleBackgroundColorInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Colors Section Tile Background Colors Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }


        async inputTileBackgroundColor() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.colorCodeInputField)
                try {
                        await ele.fill("A1A1A1FF")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Color Section Tile Background Color Code Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }


        async verifyFeaturedPostTileTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.featurePostTitleText)
                try {
                        await expect.soft(ele).toContainText("Featured Post Tile")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Colors Section Featured Post Tile Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickFeaturedPostTileColorSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.featurePostTextColorInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Colors Section Featured Post Tile Colors Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }


        async inputFeaturedPostTileColor() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.colorCodeInputField)
                try {
                        await ele.fill("FFB5B5FF")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Color Section Featured Post Tile Color Code Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }


        async verifyFeaturedPostBackgroundTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.featurePostBAckgroundTitleText)
                try {
                        await expect.soft(ele).toContainText("Featured Post Background")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Colors Section Featured Post Background Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickFeaturedPostBackgroundColorSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.featurePostBAckgroundColorInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Colors Section Featured Post Background Colors Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }


        async inputFeaturedPostBackgroundColor() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.colorCodeInputField)
                try {
                        await ele.fill("FF5959FF")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Color Section Featured Post Background Color Code Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }




        async verifyFeaturedPostTextTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.featurePostTextTitleText)
                try {
                        await expect.soft(ele).toContainText("Featured Post Text")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Colors Section Featured Post Text Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickFeaturedPostTextColorSection() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.featurePostTextColorInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Colors Section Featured Post Text Colors Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }


        async inputFeaturedPostTextColor() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.colorCodeInputField)
                try {
                        await ele.fill("DB67FFFF")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Color Section Featured Post Text Color Code Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }



        async clickBackgroundImageUploadField() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.backgroundImageUploadInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Image Upload Section Background Image Upload Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }


        async verifyDefaultMainboardTileTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.defaultMainboardTileTitleText)
                try {
                        await expect.soft(ele).toContainText("Default Mainboard Tile")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Image Upload Section Default Mainbroad Title Text Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickDefaultMainboardTileImageUploadField() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.defaultMainboardTileImageUploadInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Image Upload Section Mainboard Tile Image Upload Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }


        async verifyFeaturedPostOverlayTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.featuredPostOverlayTitleText)
                try {
                        await expect.soft(ele).toContainText("Featured Post Overlay")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Image Upload Section Featured Post Overlay Title Text Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickFeaturedPostOverlayImageUploadField() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.featuredPostOverlayImageUploadInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Image Upload Section Featured Post Overlay Image Upload Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }


        async verifyImageUpload1TitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.imageUpload1TitleText)
                try {
                        await expect.soft(ele).toContainText("Image Upload 1")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Image Upload Section Image Upload 1 Title Text Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickImageUpload1ImageUploadField() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.imageUpload1ImageUploadInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Image Upload Section Image Upload 1 Image Upload Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }


        async verifyImageUpload2TitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.imageUpload2TitleText)
                try {
                        await expect.soft(ele).toContainText("Image Upload 2")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Image Upload Section Image Upload 1 Title Text Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickImageUpload2ImageUploadField() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.imageUpload2ImageUploadInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Image Upload Section Image Upload 2 Image Upload Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }



        async verifyInternalSourceIconTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.internalSourceIconTitleText)
                try {
                        await expect.soft(ele).toContainText("Internal Source Icon")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Image Upload Section Internal Source Icon Title Text Text Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickInternalSourceIconImageUploadField() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.internalSourceIconImageUploadInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | MainBoard Page Image Upload Section Internal Source Icon Image Upload Input Field Is Not Visiable | Error occurred: ${error}`);
                }
        }


        async deleteBackgroundImage() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.deleteBtnForBackground).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.deleteBtnForBackground).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log(`Game | FanSee Wall | Mobile Background Image Is Not Found`);
                }
        }


        async deleteDefaultMainboardTile() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.deleteBtnForDefaultMainboardTile).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.deleteBtnForDefaultMainboardTile).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log(`Game | FanSee Wall | Mobile Default Mainboard Tile Is Not Found`);
                }
        }

        async deleteFeaturedPostOverlay() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.deleteBtnForFeaturedPostOverlay).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.deleteBtnForFeaturedPostOverlay).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log(`Game | FanSee Wall | Mobile Featured Post Overlay Tile Is Not Found`);
                }
        }


        async deleteImageUpload1() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.deleteBtnForImageUpload1).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.deleteBtnForImageUpload1).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log(`Game | FanSee Wall | Mobile Image Upload 1 Is Not Found`);
                }
        }

        async deleteImageUpload2() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.deleteBtnForImageUpload2).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.deleteBtnForImageUpload2).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log(`Game | FanSee Wall | Mobile Image Upload 2 Is Not Found`);
                }
        }


        async deleteInternalSourceIcon() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.deleteBtnForInternalSourceIcon).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.deleteBtnForInternalSourceIcon).click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } else {
                        console.log(`Game | FanSee Wall | Mobile Internal Server Icon Is Not Found`);
                }
        }


        //moderation
        async clickModerationPage() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.moderationPage)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForLoadState("domcontentloaded")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickCreatePostBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.createPostBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(3000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Create Post Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async verifyAddNewPostTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.addNewPostTitleText)
                try {
                        await expect.soft(ele).toContainText("Add New Post")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Create Post Section Add New Post Title Text Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async verifyAvaterTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.avaterTitleText)
                try {
                        await expect.soft(ele).toContainText("Avatar")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Create Post Section Avatar Title Text Element Is Not Visiable | Error occurred: ${error}`);
                }
        }


        async clickAvaterUploadInputField() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.avaterUploadInputFieldBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Avater Upload Input Fiedl Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async verifyNameTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.nameTitleText)
                try {
                        await expect.soft(ele).toContainText("Name")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Create Post Section Name Title Text Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async inputPostName(name: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.nameInputField)
                try {
                        await ele.fill(name)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Name Input Input Field Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async verifyUserNameTitleText() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.userNameTitleText)
                try {
                        await expect.soft(ele).toContainText("User Name")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Create Post Section User Name Title Text Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async inputPostUserName(name: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.userNameInputField)
                try {
                        await ele.fill(name)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page User Name Input Input Field Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async checkImageRadioBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.imageRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.imageRadioBtn).click({ button: "left", delay: 1000 })
                } else {
                        console.log(`Game | FanSee Wall | Moderation Create Post Image CheckBox Is Checked`);
                }
        }

        async clickPostImageUploadInputField() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.postImageUploadInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Create Post Image Upload Input Field Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async inputPostText(text: string) {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.postTextInputField)
                try {
                        await ele.fill(text)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Create Post Section Post Text Input Field Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickSaveBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.saveBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Create Post Save Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickRefreshBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.refreshBtn)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Refresh Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }



        async clickSourcesInputField() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.sourcesDropDownInputField)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Sources Input Field Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickSourcesInputFieldForceFullyWhenDropdownOptionsShow() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.sourcesDropDownInputField)
                try {
                        await ele.dblclick({ force: true })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Sources Input Field Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickOnCueOptions() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.cueSourceCheckBox)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Sources DropDown Field Cue CheckBox Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickOnCustomAddsOptions() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.customAddsSourceCheckBox)
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Sources DropDown Field Cue CheckBox Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async verifyCuePostSuccessfullyShow() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.postFromCueSide)
                try {
                        await expect.soft(ele).toContainText("Auto Post From Devid")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Sources Section Cue CheckBox Filter Functionality Does Not Work | Error occurred: ${error}`);
                }
        }

        async verifyCuePostWithRecordVideoSuccessfullyShow() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.postFromCueSideWithVideoRecord)
                try {
                        await expect.soft(ele).toContainText("Post With Record Video")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Sources Section Cue CheckBox Filter Functionality Does Not Work | Error occurred: ${error}`);
                }
        }


        async verifyCuePostWithTakePhotoSuccessfullyShow() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.postFromCueSideWithTakePhoto)
                try {
                        await expect.soft(ele).toContainText("Post With Take Photo")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Sources Section Cue CheckBox Filter Functionality Does Not Work | Error occurred: ${error}`);
                }
        }

        async verifyCustomAddsPostSuccessfullyShow() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.customAdsFilterValidation)
                try {
                        await expect.soft(ele).toContainText("Custom Adds")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Sources Section Custom Ads CheckBox Filter Functionality Does Not Work | Error occurred: ${error}`);
                }
        }


        async verifyCustomAddsPostSuccessfullyShowForDeletedAndFlagged() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.customAdsFilterValidation).first()
                try {
                        await expect.soft(ele).toContainText("Custom Adds")
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Sources Section Custom Ads CheckBox Filter Functionality Does Not Work | Error occurred: ${error}`);
                }
        }

        async clickClearAllBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.clearAllBtn)
                let okbtn = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.okBtn)

                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                        await okbtn.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Clear All  Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickPostApproveBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.postApproveBtn).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Post Approve  Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async verifyApprovePostSuccessfullyShowOnPlaylist() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.playListPost)
                try {
                        await expect.soft(ele).toBeVisible()
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Post Approve Functionality Does Not Work | Error occurred: ${error}`);
                }
        }

        async clickPostLikeBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.postLikeBtn).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)

                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Post Like  Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickPostFlaggedBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.postFlagBtn).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)

                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Post Flagged  Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickPostFevoraitBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.postFevoraitBtn).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(1000)

                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Post Favorait Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickPostDeleteBtn() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.postDeleteBtn).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)

                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page Post Delete  Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }


        async clickSortByOptionInputField() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.sortByDropDownInputField).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page SrotBy Options Selection Input Field  Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickSortByApprovedOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.approvedSrotByCheckBox).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page SrotBy Approved Options Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickSortByLikedOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.likedSrotByCheckBox).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page SrotBy Liked Options Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickSortByFlaggedOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.flaggedSrotByCheckBox).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page SrotBy Flagged Options Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }

        async clickSortByDeletedOption() {
                let ele = await this.page.frameLocator('iframe').locator(this.fanSeeWallPageElements.deletedSortByCheckBox).first()
                try {
                        await ele.click({ button: "left", delay: 1000 })
                        await this.page.waitForTimeout(2000)
                } catch (error) {
                        throw new Error(`Game | FanSee Wall | Moderation Page SrotBy Flagged Options Button Element Is Not Visiable | Error occurred: ${error}`);
                }
        }
































































































        async cropperForFanSeeWall() {

                const chooseBtn = await this.page.frameLocator('iframe').locator("//button[text()='Choose File']")
                expect.soft(chooseBtn).toContainText("Choose File")
                await chooseBtn.click()

                const cropperSaveBtn = await this.page.frameLocator('iframe').locator("(//button[text()='Save'])[2]")
                await cropperSaveBtn.click({ force: true })
                await this.page.waitForTimeout(6000)

        }













































}