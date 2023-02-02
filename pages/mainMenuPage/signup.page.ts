import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
import BaseFunctions from "@base-function/baseFunctions";

export default class singupPage {
        private base: BaseFunctions;
        constructor(private page: Page
        ) {
                this.base = new BaseFunctions(page);
        }

        private signUpPageElements = {
                signUpPage: "//p[text()='Sign Up']",
                registrationOptionsText: "//h5[text()='Registration Options']",
                socialMediaLoginsBtn: "input[name='socialMediaLogins']",
                phoneValidationRadioBtn: "input[value='phoneValidation']",
                emailValidationRadioBtn: "input[value='emailValidation']",
                anonymousLoginRadioBtn: "input[value='anonymousLogin']",
                thirteenOrOlderRadioBtn: "input[value='thirteenOrOlder']",
                customOrOlderRadioBtn: "input[value='customOrOlder']",
                customOrOlderInputField: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]",
                userDefinedRadioBtn: "//input[@value='userDefined']",
                userDefinedFirstInputField: "(//span[text()='Options for user defined age']/following::input)[1]",
                userDefinedSecondInputField: "(//span[text()='Options for user defined age']/following::input)[2]",
                automaticAssignUserNameEnableDisableBtn: "//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')]",
                automaticAssignUserNamePrifizInputField: "(//span[text()='Automatically assign username']/following::input)[1]",
                addNewSetBtn: "//button[text()='Add New Set']",
                profileNameAfterEdit: "//div[text()='David Con']",
                addNewSetWindowSetTitleInputField: "#headlineField",
                addNewSetWindowUploadPictureInputField: "//div[@class='MuiBox-root css-v2612']",
                addNewSetWindowSaveBtn: "//button[text()='Save']",
                uploadedProfilePictureDeleteBtn: "//div[@class='MuiBox-root css-76t8yr']//button[1]",                
                profilePictureSetDialogBox: "//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//div[1]",
                selectLastProfile: "//li[@role='option']",
                selectDefultProfile: "//li[@data-value='default']",
                autoAssignCheckBox: "//input[@value='autoAssignAvatars']",
                profileSetEditBtn: "//button[text()='Edit']",
                profileSetDeleteBtn: "//button[text()='Delete']",
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

        async uncheckAdditionalInfoPhoneNumberCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.phoneNumberCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.phoneNumberCheckBox).click({button:"left", delay:1000})
                }

        }

        async uncheckAdditionalInfoEmailAddressCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.emailAddressCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.emailAddressCheckBox).click({button:"left", delay:1000})
                }

        }

        async uncheckAdditionalInfoAgeCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.ageCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.ageCheckBox).click({button:"left", delay:1000})
                }

        }

        async uncheckAdditionalInfoDateOfBirthCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.dateOfBirthCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.dateOfBirthCheckBox).click({button:"left", delay:1000})
                }

        }

        async uncheckAdditionalInfoZipCodeCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.zipCodeCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.zipCodeCheckBox).click({button:"left", delay:1000})
                }

        }

        async uncheckAdditionalInfoCustomQuestionCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.customQuestionCheckBox).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.customQuestionCheckBox).click({button:"left", delay:1000})
                }

        }

        async clickAdditionalInfoPhoneNumberCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.phoneNumberCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.phoneNumberCheckBox).click({button:"left", delay:1000})
                }

        }

        async clickAdditionalInfoEmailAddressCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.emailAddressCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.emailAddressCheckBox).click({button:"left", delay:1000})
                }

        }

        async clickAdditionalInfoAgeCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.ageCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.ageCheckBox).click({button:"left", delay:1000})
                }

        }

        async clickAdditionalInfoDateOfBirthCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.dateOfBirthCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.dateOfBirthCheckBox).click({button:"left", delay:1000})
                }

        }

        async clickAdditionalInfoZipCodeCheckbox() {
                let ele = await this.page.locator(this.signUpPageElements.zipCodeCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.zipCodeCheckBox).click({button:"left", delay:1000})
                }

        }

        async clickAdditionalCustomQuestionCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.customQuestionCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.customQuestionCheckBox).click({button:"left", delay:1000})
                }

        }

        
        async clickAdditionalCustomQuestionInCheckBox() {
                // await this.page.waitForSelector(this.signUpPageElements.customQuestionInCheckBox)
                let ele = await this.page.getByRole('checkbox', { name: 'Custom Opt-In' }).isChecked()
                if ((ele == false)) {
                        await this.page.getByRole('checkbox', { name: 'Custom Opt-In' }).click({button:"left", delay:1000})
                }

        }

        async clickAdditionalCustomAddQuestionBtn() {
                let ele = await this.page.locator(this.signUpPageElements.addNewQuestionBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addNewQuestionBtn).click({button:"left", delay:1000})
                }
                else throw new Error("Sign Up Page Add New Custom Question Button Is not Visible")

        }

        async clickFreeFormCheckBox() {
                await this.page.waitForSelector(this.signUpPageElements.clickFreeFormCheckBox)
                let ele = await this.page.locator(this.signUpPageElements.clickFreeFormCheckBox).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.clickFreeFormCheckBox).click({button:"left", delay:1000})
                }
                else throw new Error("Sign Up Page Add New Custom Question Window FreeForm Check Box Element Is not Visible")

        }

        
        async clickMultipleChoiceCheckBox() {
                await this.page.waitForSelector(this.signUpPageElements.multiChoiceCheckBox)
                let ele = await this.page.locator(this.signUpPageElements.multiChoiceCheckBox).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.multiChoiceCheckBox).click({button:"left", delay:1000})
                }
                else throw new Error("Sign Up Page Add New Custom Question Window Multi Choice Check Box Element Is not Visible")

        }

        async inputCustomQuestionDiscription() {
                let ele = await this.page.locator(this.signUpPageElements.customQuestionDiscriptionInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.customQuestionDiscriptionInputField).type("Demo Custom Question")
                }
                else throw new Error("Sign Up Page Add New Custom Question Window FreeForm Discription Input Field Element Is not Visible")

        }

        async clickCustomQuestionAddChoiceBtn() {
                let ele = await this.page.locator(this.signUpPageElements.addChoiceBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addChoiceBtn).click({button:"left", delay:1000})
                }
                else throw new Error("Sign Up Page Add New Custom Question Add ChoiceBtn Button Element Is not Visible")

        }

        async inputCustomQuestionAddChoiceDiscription() {
                let ele = await this.page.locator(this.signUpPageElements.choiceInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.choiceInputField).type("Demo Choice")
                }
                else throw new Error("Sign Up Page Add New Custom Question Window Add Choice Input Field Element Is not Visible")

        }

        async enableCustomQuestionMandatoryForUser() {
                let ele = await this.page.locator(this.signUpPageElements.customQuestionMendotoryCheckBox).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.customQuestionMendotoryCheckBox).click({button:"left", delay:1000})
                }
                else throw new Error("Sign Up Page Add New Custom Question Window Mandatory Enable Button Element Is not Visible")

        }

        async clickCustomQuestionSaveBtn() {
                let ele = await this.page.locator(this.signUpPageElements.customQuestionSaveBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.customQuestionSaveBtn).click({button:"left", delay:1000})
                }
                else throw new Error("Sign Up Page Add New Custom Question Window Mandatory Enable Button Element Is not Visible")

        }

        async deleteCustomQuestion() {
                let ele = await this.page.locator(this.signUpPageElements.deleteAddedCustomQuestion).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.deleteAddedCustomQuestion).click({button:"left", delay:1000})
                }
                // else throw new Error("Sign Up Page Add New Custom Question Window Mandatory Enable Button Element Is not Visible")

        }
        

        async deleteCustomQuestionIn() {
                let ele = await this.page.locator(this.signUpPageElements.addedCustomQuestionInDeleteBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addedCustomQuestionInDeleteBtn).click({button:"left", delay:1000})
                }
                // else throw new Error("Sign Up Page Add New Custom Question Window Mandatory Enable Button Element Is not Visible")

        }

        async clickSignUpHomeScreenCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.signUpHomeScreenRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.signUpHomeScreenRadioBtn).click({button:"left", delay:1000})
                }
                // else throw new Error("Sign Up Page Add New Custom Question Window Mandatory Enable Button Element Is not Visible")

        }

        async clickTopOfCustomQuestionCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.customQuestionScreenRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.customQuestionScreenRadioBtn).click({button:"left", delay:1000})
                }
                // else throw new Error("Sign Up Page Add New Custom Question Window Mandatory Enable Button Element Is not Visible")

        }

        async clickAddCustomQuestionInCheckBox() {
                let ele = await this.page.locator(this.signUpPageElements.customOptionInCheckBox).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.customOptionInCheckBox).click({button:"left", delay:1000})
                }
                else throw new Error("Sign Up Page Add Custom Question In Radio button Element Is not Visible")

        }

        async clickAddCustomQuestionInBtn() {
                let ele = await this.page.locator(this.signUpPageElements.addCustomQuestionInBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addCustomQuestionInBtn).click({button:"left", delay:1000})
                }
                else throw new Error("Sign Up Page Add CustomQuestion In Button Element Is not Visible")

        }

        async clickSmsCheckBox() {
                await this.page.waitForSelector(this.signUpPageElements.smsCheckBox)
                let ele = await this.page.locator(this.signUpPageElements.smsCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.smsCheckBox).click({button:"left", delay:1000})
                }
                else throw new Error("Sign Up Page Add Custom Question Sms Check Box Element Is not Visible")

        }

        async inputCustomOptionPrompt() {
                
                let ele = await this.page.locator(this.signUpPageElements.customQuestionPromptInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.customQuestionPromptInputField).type("I Agree")
                }
                else throw new Error("Sign Up Page custom Question Prompt Input Field Element Is not Visible")
                await this.page.waitForTimeout(2000)

        }

        async clickCustomOptionPromptAutoCheckBox() {
                
                let ele = await this.page.locator(this.signUpPageElements.customQuestionPromptAutoCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.customQuestionPromptAutoCheckBox).check()
                }
                else throw new Error("Sign Up Page custom Question Prompt Auto Check Box Element Is not Visible")

        }



        async clickSignUpPage() {
                let ele = await this.page.locator(this.signUpPageElements.signUpPage).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.signUpPageElements.signUpPage)
                }
                else throw new Error("Sign Up Page SignUP Button Element Is Not Visible")
                await this.page.waitForLoadState("networkidle")

        }

        async verifyRegistrationOptionsText() {
                let ele = await this.page.locator(this.signUpPageElements.registrationOptionsText).textContent()
                if ((ele === "Registration Options:")) {

                }
                else throw new Error("Sign Up Page Registration Options Text Is Not Visible")

        }

        async clickSocialMediaLoginRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.socialMediaLoginsBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.socialMediaLoginsBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")

        }

        async uncheckSocialMediaLoginRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.socialMediaLoginsBtn).isChecked()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.socialMediaLoginsBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")

        }

        async clickAddNewUrlBtn() {
                let ele = await this.page.locator(this.signUpPageElements.addNewUrlBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addNewUrlBtn).click({ button: "left", delay: 1000 })
                        
                }
                else throw new Error("Main Menu | Sign Up Page Add Url Button is not visible")

        }

        async iftermsAndConditionUrlLinkAvailableThanDeleteIt() {
                let ele = await this.page.locator(this.signUpPageElements.deletAddedUrlLink).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.deletAddedUrlLink).click({ button: "left", delay: 1000 })
                        
                }
                // else throw new Error("Main Menu | Sign Up Page Add Url Button is not visible")

        }

        async deleteTermsAndConditionAddedUrlLink() {
                let ele = await this.page.locator(this.signUpPageElements.deletAddedUrlLink).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.deletAddedUrlLink).click({ button: "left", delay: 1000 })
                        
                }
                else throw new Error("Main Menu | Sign Up Page Add Url Button is not visible")

        }

        async inputAddUrlText() {
                let ele = await this.page.locator(this.signUpPageElements.urlTextInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.urlTextInputField).fill("Terms & Conditions")
                        
                }
                else throw new Error("Main Menu | Sign Up Page Add Url Text Input Field is not visible")

        }

        async inputAddUrlLink() {
                let ele = await this.page.locator(this.signUpPageElements.urlLinkInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.urlLinkInputField).fill("https://demos.co.uk/terms-conditions/")
                        
                }
                else throw new Error("Main Menu | Sign Up Page Add Url Input Field is not visible")

        }

        async verifyAddUrlUrlInputErrorAlertShowSuccessfully() {
                let ele = await this.page.locator(this.signUpPageElements.errorMassgeForUrlInputField).textContent()
                if ((ele === "Incorrect entry.")) {
                        
                }
                else throw new Error("Main Menu | Sign Up Page Add Url Url Input Field Error Alert is not visible")

        }

        async verifyAddUrlTextFieldErrorAlertShowSuccessfully() {
                let ele = await this.page.locator(this.signUpPageElements.errorMessageForUrlTextInputField).textContent()
                if ((ele === "Incorrect entry.")) {
                        
                }
                else throw new Error("Main Menu | Sign Up Page Add Url Text Input Field Error Alert is not visible")

        }



        async clickAnonymousLoginOption() {
                let ele = await this.page.locator(this.signUpPageElements.anonymousLoginRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.anonymousLoginRadioBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")

        }


        async clickUserAgeMust13YearsOrOlderOptionRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.thirteenOrOlderRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.thirteenOrOlderRadioBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")

        }

        async clickUserAgeCustomOrOlderOptionRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.customOrOlderRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.customOrOlderRadioBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")               

        }

        async inputUserAgeCustomOrOlder() {
                await this.page.waitForSelector(this.signUpPageElements.customOrOlderInputField)
                let ele = await this.page.locator(this.signUpPageElements.customOrOlderInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.customOrOlderInputField).fill("15")
                }
                else throw new Error("Sign Up Page Registration Options input User Age Custom Or Older Input Field Not Visible")

        }

        async clickUserAgeuserDefinedOptionRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.userDefinedRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.userDefinedRadioBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")

        }
        async inputFirstUserAgeuserDefined() {
                await this.page.waitForSelector(this.signUpPageElements.userDefinedFirstInputField)
                let ele = await this.page.locator(this.signUpPageElements.userDefinedFirstInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.userDefinedFirstInputField).fill("20")
                }
                else throw new Error("Sign Up Page Registration Options User Age user Defined First Input Field Not Visible")

        }

        async inputSecondUserAgeuserDefined() {
                await this.page.waitForSelector(this.signUpPageElements.userDefinedSecondInputField)
                let ele = await this.page.locator(this.signUpPageElements.userDefinedSecondInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.userDefinedSecondInputField).fill("30")
                }
                else throw new Error("Sign Up Page Registration Options User Age user Defined Second Input Field Not Visible")

        }

        async automaticallyAssignUserName() {
                
                let ele = await this.page.locator(this.signUpPageElements.automaticAssignUserNameEnableDisableBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.automaticAssignUserNameEnableDisableBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options input User Age user Defined Second Input Field Not Visible")

        }

        async InputAutomaticallyAssignUserName() {
                await this.page.waitForSelector(this.signUpPageElements.automaticAssignUserNamePrifizInputField)
                let ele = await this.page.locator(this.signUpPageElements.automaticAssignUserNamePrifizInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.automaticAssignUserNamePrifizInputField).fill("Devid")
                }
                else throw new Error("Sign Up Page Registration Options Automatically Assign UserName Input Field Not Visible")

        }
        

        async clickProfilePictureAddNewSetBtn() {                
                let ele = await this.page.locator(this.signUpPageElements.addNewSetBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addNewSetBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Profile Picture Add New Set Button is not visible ")

        }

        async inputProfilePictureSetTitle() { 
                await this.page.waitForSelector(this.signUpPageElements.addNewSetWindowSetTitleInputField)               
                let ele = await this.page.locator(this.signUpPageElements.addNewSetWindowSetTitleInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addNewSetWindowSetTitleInputField).fill("David Con")
                }
                else throw new Error("Sign Up Page Profile Picture Add New Set Title Field is not visible ")

        }

        async uploadSetProfilePicture() {
                             
                let ele = await this.page.locator(this.signUpPageElements.addNewSetWindowUploadPictureInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addNewSetWindowUploadPictureInputField).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Profile Picture Add New Set Window, Picture Upload Element is not visible ")

        }

        async clickSetProfilePictureWindowSaveBtn() {
                await this.page.waitForSelector(this.signUpPageElements.addNewSetWindowSaveBtn)
                let ele = await this.page.locator(this.signUpPageElements.addNewSetWindowSaveBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addNewSetWindowSaveBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Profile Picture Add New Set Window, Save Button Element is not visible ")

        }

        async clickProfilePictureSetDialogBox() {
                await this.page.waitForSelector(this.signUpPageElements.profilePictureSetDialogBox)
                let ele = await this.page.locator(this.signUpPageElements.profilePictureSetDialogBox).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.profilePictureSetDialogBox).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Profile Picture Add New Set Dialog Box Element is not visible ")

        }

        async selectAutoAssaigProfilePicture() {
                await this.page.waitForSelector(this.signUpPageElements.selectDefultProfile)
                let ele = await this.page.locator(this.signUpPageElements.selectDefultProfile).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.selectLastProfile).last().click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Auto Assaig Profile Picture List is not visible ")

        }

        async editAutoAssaigProfilePicture() {
                await this.page.waitForSelector(this.signUpPageElements.profileSetEditBtn)
                let ele = await this.page.locator(this.signUpPageElements.profileSetEditBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.profileSetEditBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Auto Assaig Profile Picture Edit Button is not visible ")

        }

        async editProfilePictureSetTitle() { 
                await this.page.waitForSelector(this.signUpPageElements.addNewSetWindowSetTitleInputField)               
                let ele = await this.page.locator(this.signUpPageElements.addNewSetWindowSetTitleInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addNewSetWindowSetTitleInputField).fill("David Con")
                }
                else throw new Error("Sign Up Page Profile Picture Add New Set Title Field is not visible ")

        }

        async deleteUploadedProfilePicture() { 
                              
                let ele = await this.page.locator(this.signUpPageElements.uploadedProfilePictureDeleteBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.uploadedProfilePictureDeleteBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Profile Picture Delete Button Is not visible ")

        }

        async editUploadedSetProfilePicture() {
                             
                let ele = await this.page.locator(this.signUpPageElements.addNewSetWindowUploadPictureInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.addNewSetWindowUploadPictureInputField).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Profile Picture Add New Set Window, Picture Upload Element is not visible ")

                const chooseBtn = await this.page.locator("//button[text()='Choose File']")
                expect.soft(chooseBtn).toContainText("Choose File")
                const filePath0 = "testData/logos/profile.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                await chooseBtn.click()

                const cropperSaveBtn = await this.page.locator("//div[@class='MuiBox-root css-1p65aex']//button[1]")
                expect(cropperSaveBtn).toContainText("Save")
                await cropperSaveBtn.click()

        }

        async verifyAutoAssignProfileSuccessfullyEdited() { 
                await this.page.waitForSelector(this.signUpPageElements.profileNameAfterEdit)               
                let ele = await this.page.locator(this.signUpPageElements.profileNameAfterEdit).textContent()
                if ((ele === "David Con")) {
                        
                }
                else throw new Error("Sign Up Page Profile Picture Add New Set Title Not Edited successfully")

        }

        async deleteAutoAssignProfile() { 
                await this.page.waitForSelector(this.signUpPageElements.profileSetDeleteBtn)               
                let ele = await this.page.locator(this.signUpPageElements.profileSetDeleteBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.signUpPageElements.profileSetDeleteBtn).click({ button: "left", delay: 1000 })
                }
                else throw new Error("Sign Up Page Profile Picture Add New Set Not Deleted successfully")

        }

        //div[text()='David']
        async clickAutoAssignRadioBtn() {                
                let ele = await this.page.locator(this.signUpPageElements.autoAssignCheckBox).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.autoAssignCheckBox).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Auto Assaig Profile Picture List is not visible ")

        }




        async clickSocialMediaLoginPhoneNumberValidationRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.phoneValidationRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.phoneValidationRadioBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")

        }

        async clickSocialMediaLoginEmailValidationRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.emailValidationRadioBtn).isChecked()
                if ((ele == false)) {
                        await this.page.locator(this.signUpPageElements.emailValidationRadioBtn).click({ button: "left", delay: 1000 })
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")
                await this.page.waitForTimeout(2000)

        }



        //Check Registration Options Text
        async checkRegistrationOptionPage() {
                const locator = this.page.locator("//h5[text()='Registration Options']")
                expect(locator).toContainText('Registration Options')
        }

        //Checked Social Media Logins
        async checkSocialMediaLogins() {


                const ele = await this.page.locator("//input[@value='socialMediaLogins']").isChecked()

                if ((ele == false)) {
                        // console.log("Social Media Login Button Is Disabled")                        
                        await this.page.locator("//input[@value='socialMediaLogins']").check()

                }

                // console.log(await this.page.locator("input[name = 'socialMediaLogins']").getAttribute("value"));
                //Assert checkbox2 is checked
                // expect(await this.page.isChecked("input[name = 'socialMediaLogins']")).toBeTruthy()

                // if ((await this.page.$("input[name = 'socialMediaLogins']")) !== null) {
                //         await this.page.click("input[name = 'socialMediaLogins']")
                //       }


        }

        //Checked Email Validation
        async checkEmailValidation() {
                let ele = await this.page.locator("input[value='emailValidation']").isVisible()

                if ((ele == false)) {
                        // console.log("Social Media Login Button Is Disabled")

                } else {
                        // console.log("Enabled Social Media Login Button")
                        await this.page.locator("input[value='emailValidation']").click()
                }

                // if ((await this.page.$("input[name = 'socialMediaLogins']")) !== null) {
                //         await this.page.click("input[value='emailValidation']")
                //       }
                // const locator = this.page.locator("input[value='emailValidation']")
                // expect(locator).not.toBeChecked()
                // await locator.check();
        }
        //Checked Phone Number Validation text
        async checkPhoneNumberValidationText() {
                const locator = this.page.locator("//span[text()='Phone Number Validation']")
                expect(locator).toContainText('Phone Number Validation')
        }

        //Checked Phone Number Validation
        async clickPhoneNumberValidation() {
                if ((await this.page.locator("input[value='phoneValidation']")) !== null) {
                        await this.page.click("input[value='phoneValidation']")
                }

        }

        //Checked Anonymous Login text
        async checkAnonymousLoginText() {
                const locator = this.page.locator("//span[text()='Anonymous Login']")
                expect(locator).toContainText('Anonymous Login')
        }

        async clickAnonymousLogin() {
                if ((await this.page.locator("input[value='anonymousLogin']")) !== null) {
                        await this.page.click("input[value='anonymousLogin']")
                }
        }

        //Start Age Information Section Element 

        async checkAgeInformationText() {
                const locator = this.page.locator("//h5[text()='Age Information']")
                expect.soft(locator).toContainText('Age Information')
        }

        async clickthirteenOrOlder() {
                if ((await this.page.locator("input[value='thirteenOrOlder']")) !== null) {
                        await this.page.click("input[value='anonymousLogin']")
                }
        }

        async checkMustThirteenYearsText() {
                const locator = this.page.locator("//span[text()='Users age must be 13 years or older']")
                expect.soft(locator).toContainText('Users age must be 13 years or older')
        }

        async clickCustomOrOlderRegister() {
                if ((await this.page.locator("input[value='customOrOlder']")) !== null) {
                        await this.page.click("input[value='customOrOlder']")
                }
        }

        async inputCustomOrOlderAge() {
                const locator = this.page.locator("#P7023913632")
                expect.soft(locator).toBeVisible()
                await locator.fill("20");
        }

        async clickuserDefinedAge() {
                if ((await this.page.locator("input[value='userDefined']")) !== null) {
                        await this.page.click("input[value='userDefined']")
                }
        }

        async inputFirstDefinedAge() {
                const locator = this.page.locator("#P-10039881112")
                expect.soft(locator).toBeVisible()
                await locator.fill("15");
        }
        async inputSecondDefinedAge() {
                const locator = this.page.locator("#P16204656162")
                expect.soft(locator).toBeVisible()
                await locator.fill("30");
        }

        //🔚 Closed Age Information Section Element 
        //=======================================================
        //▶▶Start User Profile Section Element

        async checkAutomatacllyAssignUsernameText() {
                const locator = this.page.locator("//span[text()='Automatically assign username']")
                expect.soft(locator).toContainText("Automatically assign username")
        }

        async clickAutomatacllyAssignUsernameBtn() {
                // const ele = this.page.locator("(//input[@type='checkbox'])[2]")
                // expect(ele).toBeVisible()
                // await ele.check()


                const ele = await this.page.locator("//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')]").isChecked()
                if ((ele == false)) {
                        // console.log("click Automataclly Assign Username Btn")
                        await this.page
                                .locator("//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')]")
                                .click()
                }





                // if ((await this.page.locator("(//input[@type='checkbox'])[2]"))) {
                //         await this.page.check("(//input[@type='checkbox'])[2]")
                // }
        }

        async checkAutoUserNamePrifixText() {
                const locator = this.page.locator("//h5[text()='Auto Username Prefix']")
                expect.soft(locator).toContainText("Auto Username Prefix")
        }

        async inputAutoUserNamePrifixData() {
                const locator = this.page.locator("//input[@id='P12265013592']")
                expect.soft(locator).toBeVisible()
                await locator.fill("user")
        }
        //🔚End User Profile Section Element
        //=======================================================
        //▶▶Start User Profile Picture Set Section Element

        async checkProfilePictureSetText() {
                const locator = this.page.locator("//h5[text()='Profile Picture Set']")
                expect.soft(locator).toContainText("Profile Picture Set")

        }

        async clickAddNewSetBtn() {
                if ((await this.page.locator("//button[text()='Add New Set']")) !== null) {
                        await this.page.click("//button[text()='Add New Set']")
                }
        }

        async checkProfilePictureSetDialogBoxText() {
                const locator = this.page.locator("//h2[text()='Profile Picture Set']")
                await this.page.waitForSelector("//h2[text()='Profile Picture Set']")
                expect.soft(locator).toContainText("Profile Picture Set")
        }

        async checkSetTitleText() {
                const locator = this.page.locator("//h2[text()='Set Title']")
                expect.soft(locator).toContainText("Set Title")
        }


        async inputSetTitleData() {
                const locator = this.page.locator("input#headlineField")
                expect.soft(locator).toBeVisible()
                await locator.fill('Jon Doe')
        }

        async checkUploadPictureText() {
                const locator = this.page.locator("//h2[text()='Upload Pictures']")
                expect.soft(locator).toContainText("Upload Pictures")
        }

        async uploadProfileSet() {
                await this.page.click("div.MuiBox-root.css-v2612")
        }
        async clickSaveBtn() {
                const locator = this.page.locator("//div[contains(@class,'MuiDialogActions-root MuiDialogActions-spacing')]//button[1]")
                expect.soft(locator).toBeVisible()
                await locator.click()
        }

        //🔚Closed User Profile Picture Set Section Element
        //=======================================================
        //▶▶Start Terms & Conditions Section Element

        async verifyTermsAndConditionVisibility() {
                const locator = this.page.locator("//h5[text()='Terms & Conditions']")
                expect.soft(locator).toBeVisible()
        }

        async deleteTermsAndConditionUrl() {

                let ele = await this.page.locator("(//div[@class='MuiBox-root css-1u725a8']//button)[1]").isVisible()

                if ((ele == true)) {
                        // console.log("Delete Url")
                        await this.page.locator("(//div[@class='MuiBox-root css-1u725a8']//button)[1]").click()

                }
                // if ((await this.page.locator("(//div[@class='MuiBox-root css-1u725a8']//button)[1]"))) {
                //         await this.page.click("(//div[@class='MuiBox-root css-1u725a8']//button)[1]")
                // }
        }



        async inputTermsAndConditionTitleText() {
                const locator = this.page.locator("(//label[text()='Text']/following::input)[1]")
                expect.soft(locator).toBeVisible()
                await locator.fill("Terms & Conditions")
        }

        async inputTermsAndConditionUrl() {
                const locator = this.page.locator("(//span[text()='Text']/following::textarea)[1]")
                expect.soft(locator).toBeVisible()
                await locator.fill("https://garrett.testingdxp.com//admin/#/home/settings/sign-up")
        }

        async clickTermsAndConditionAddNewUrlBtn() {
                const locator = this.page.locator("//button[text()='Add New Url']")
                expect.soft(locator).toBeVisible()
                await locator.click()
        }

        async verifyTermsAndConditionAddUrlSectionTitle() {
                const locator = this.page.locator("//h6[text()='Added Links and Text']")
                expect.soft(locator).toContainText("Added Links and Text")

        }

        //🔚Closed Terms & Conditions Section Element
        //=======================================================
        //▶▶Start Additional Information Section Element

        async verifyAdditionalInformationTitleText() {
                const locator = this.page.locator("//h5[text()='Additional Information']")
                expect.soft(locator).toContainText("Additional Information")

        }
        async clickPhoneNumberCheckBox() {

                // expect(await this.page.locator("(//label[text()='Url or link']/following::input)[1]").isChecked()).toBeTruthy()



                let ele = await this.page.locator("(//label[text()='Url or link']/following::input)[1]").isChecked()

                if ((ele == false)) {
                        // console.log("Radio button is not checked")
                        await this.page.locator("(//label[text()='Url or link']/following::input)[1]").click()

                }
        }

        async clickEmailAddressCheckBox() {

                let ele = await this.page.locator("(//span[text()='Phone Number']/following::input)[1]").isChecked()

                if ((ele == false)) {
                        // console.log("Click on the Email Address Checkbox")
                        await this.page.locator("(//span[text()='Phone Number']/following::input)[1]").click()

                }
        }

        async clickAgeCheckBox() {

                let ele = await this.page.locator("(//span[text()='Email Address']/following::input)[1]").isChecked()

                if ((ele == false)) {
                        // console.log("Click on the Age Checkbox")
                        await this.page.locator("(//span[text()='Email Address']/following::input)[1]").click()

                }
        }
        async clickDateOfBirthCheckBox() {

                let ele = await this.page.locator("(//span[text()='Age']/following::input)[1]").isChecked()

                if ((ele == false)) {
                        // console.log("Click on the Deth of Birth Checkbox")
                        await this.page.locator("(//span[text()='Age']/following::input)[1]").click()

                }
        }

        async clickPostalCodeCheckBox() {

                let ele = await this.page.locator("(//span[text()='Date of Birth']/following::input)[1]").isChecked()

                if ((ele == false)) {
                        // console.log("Click on the Postal Code Checkbox")
                        await this.page.locator("(//span[text()='Date of Birth']/following::input)[1]").click()

                }
        }
        async clickCustomQuestionCheckBox() {

                let ele = await this.page.locator("(//span[text()='Zip Code / Postal Code']/following::input)[1]").isChecked()

                if ((ele == true)) {
                        // console.log("Click on the Postal Code Checkbox")
                        await this.page.locator("(//span[text()='Zip Code / Postal Code']/following::input)[1]").uncheck()

                }
        }

        async clickAddQuestionAddBtn() {

                let ele = await this.page.locator("//button[text()='Add question']").isVisible()

                if ((ele == true)) {
                        // console.log("Click on the Postal Code Checkbox")
                        await this.page.locator("//button[text()='Add question']").click()

                }
        }

        async verifyCustomQuestionText() {

                const locator = this.page.locator("//p[text()='Custom Question']")
                expect.soft(locator).toContainText("Custom Question")
        }


        async verifyCustomQuestionTypeText() {

                const locator = this.page.locator("//h5[text()='Custom Question Type']")
                expect.soft(locator).toContainText("Custom Question Type")
        }

        
        async inputFreeFormCustomQuestion() {

                const locator = this.page.locator("#P19892275832")
                expect.soft(locator).toBeVisible()
                await locator.fill("How many older do you have?")
        }

        async enabledMandotaryBtn() {

                let ele = await this.page.locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]").isVisible()

                if ((ele == true)) {
                        // console.log("Click on the mandortary btn")
                        await this.page.locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]").click()

                }
        }

        async clickCustomQuestionWindowSaveBtn() {

                const locator = this.page.locator("//button[text()='Save']")
                expect.soft(locator).toBeVisible()
                await locator.click()
        }

       

        async inputMultipuleFieldData() {

                const inputmultipuleField = await this.page.locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]")

                await inputmultipuleField.fill("Demo Data")


        }


        async clickAddChoiceBtn() {

                let ele = await this.page.locator("//button[text()='Add Choice']").isVisible()

                if ((ele == true)) {
                        // console.log("Click on the add choice button")
                        await this.page.locator("//button[text()='Add Choice']").click()

                }
        }

        async inputChoiceText() {

                const locator = this.page.locator("(//label[text()='Give some description here...']/following::input)[1]")
                expect.soft(locator).toBeVisible()
                await locator.fill("Choice One")
        }




        async clcikSignUpShowOnHomeCheckbox() {

                let ele = await this.page.locator("//input[@value='signUpHome']").isVisible()

                if ((ele == true)) {
                        // console.log("Click on signup option show on home checkbox")
                        await this.page.locator("//input[@value='signUpHome']").click()

                }
        }
        async clcikCustomQuestionScreenCheckbox() {

                let ele = await this.page.locator("//input[@value='customQuestionScreen']").isVisible()

                if ((ele == true)) {
                        // console.log("Click on signup option show on custom option checkbox")
                        await this.page.locator("//input[@value='customQuestionScreen']").click()

                }
        }
        async clcikCustomOptionCheckbox() {

                let ele = await this.page.locator("//span[text()='Custom Opt-In']").isVisible()

                if ((ele == true)) {
                        // console.log("Click on custom option checkbox")
                        await this.page.locator("//span[text()='Custom Opt-In']").click()

                }
        }

        async clcikAddCustomOptionIn() {



                let ele = await this.page.locator("//button[text()='Add Custom Opt-In']")
                expect(ele).toBeVisible()
                await ele.click()

                // if ((ele == true)) {
                //         console.log("Click on custom option in btn")
                //         await this.page.locator("//span[text()='Custom Opt-In']").click()

                // }
        }
        async clcikSmsCheckBox() {

                let ele = await this.page.locator("//input[@value='sms']").isVisible()

                if ((ele == true)) {
                        // console.log("Click on the sms checkbox")
                        await this.page.locator("//input[@value='sms']").click()

                }
        }
        async clcikEmailCheckBox() {

                let ele = await this.page.locator("//input[@value='email']").isVisible()

                if ((ele == true)) {
                        // console.log("Click on Email Checkbox")
                        await this.page.locator("//input[@value='email']").click()

                }
        }

        async clcikCustomCheckBox() {

                let ele = await this.page.locator("//input[@value='custom']").isVisible()

                if ((ele == true)) {
                        // console.log("Click on Custom Checkbox")
                        await this.page.locator("//input[@value='custom']").click()

                }
        }
        async inputCustomBackendName() {

                let ele = await this.page.locator("//textarea[@rows='1']").isVisible()

                if ((ele == true)) {

                        await this.page.locator("//textarea[@rows='1']").fill("BackEnd Name")

                }
        }

        async inputCustomOptionsDiscription() {

                let ele = await this.page.locator("//textarea[@rows='6']").isVisible()

                if ((ele == true)) {

                        await this.page.locator("//textarea[@rows='6']").fill("In publishing and graphic design, Lorem ipsum is a placeholder ")

                }
        }


        async clickAutoCheckCheckbox() {

                let ele = await this.page.locator("//label[text()='Give some description here...']/following::input").isVisible()

                if ((ele == true)) {

                        await this.page.locator("//label[text()='Give some description here...']/following::input").click()

                }
        }

        async clickCustomOptionInSaveBtn() {

                let ele = await this.page.locator("//button[text()='Save']").isVisible()

                if ((ele == true)) {

                        await this.page.locator("//button[text()='Save']")

                }
        }














}


