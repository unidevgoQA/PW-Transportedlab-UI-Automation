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
                addNewSetWindowSetTitleInputField: "#headlineField",
                addNewSetWindowUploadPictureInputField: "//div[@class='MuiBox-root css-v2612']",
                addNewSetWindowSaveBtn: "//button[text()='Save']",
                profilePictureSetDialogBox: "//div[contains(@class,'MuiInputBase-root MuiOutlinedInput-root')]//div[1]",
                selectLastProfile: "//li[@role='option']",
                autoAssignCheckBox: "//input[@value='autoAssignAvatars']",
                profileSetEditBtn: "//button[text()='Edit']",
                profileSetDeleteBtn: "//button[text()='Delete']"


        }
        // export default class singupPage {
        //         [x: string]: any;

        //         private page: Page;
        //         static buffer: void;
        //         constructor(page: Page) {
        //                 this.page = page;
        //         }


        async clickSignUpPage() {
                let ele = await this.page.locator(this.signUpPageElements.signUpPage).isVisible()
                if ((ele == true)){                                                
                        await this.page.click(this.signUpPageElements.signUpPage)
                }
                else throw new Error("Sign Up Page SignUP Button Element Is Not Visible")
                await this.page.waitForLoadState("networkidle")
                
        }

        async verifyRegistrationOptionsText() {
                let ele = await this.page.locator(this.signUpPageElements.registrationOptionsText).textContent()
                if ((ele === "Registration Options:")){

                }
                else throw new Error("Sign Up Page Registration Options Text Is Not Visible")
                
        }

        async clickSocialMediaLoginRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.socialMediaLoginsBtn).isChecked()
                if ((ele == false)){
                        await this.page.locator(this.signUpPageElements.socialMediaLoginsBtn).click({button: "left", delay: 1000})
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")
                
        }

        async uncheckSocialMediaLoginRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.socialMediaLoginsBtn).isChecked()
                if ((ele == true)){
                        await this.page.locator(this.signUpPageElements.socialMediaLoginsBtn).click({button: "left", delay: 1000})
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")
                
        }

        async clickSocialMediaLoginPhoneNumberValidationRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.phoneValidationRadioBtn).isChecked()
                if ((ele == false)){
                        await this.page.locator(this.signUpPageElements.phoneValidationRadioBtn).click({button: "left", delay: 1000})
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")
                
        }

        async clickSocialMediaLoginEmailValidationRadioBtn() {
                let ele = await this.page.locator(this.signUpPageElements.emailValidationRadioBtn).isChecked()
                if ((ele == false)){
                        await this.page.locator(this.signUpPageElements.emailValidationRadioBtn).click({button: "left", delay: 1000})
                }
                // else throw new Error("Sign Up Page Registration Options Text Is Not Visible")
                
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

        async clickFreeFormCheckBox() {

                let ele = await this.page.locator("//input[@value='freeform']").isVisible()

                if ((ele == true)) {
                        // console.log("Click on the FreeForm Checkbox")
                        await this.page.locator("//input[@value='freeform']").click()

                }
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

        async clickMultipleChoiceCheckBox() {

                let ele = await this.page.locator("//input[@value='multipleChoice']").isVisible()

                if ((ele == true)) {
                        // console.log("Click on the multipleChoice Checkbox")
                        await this.page.locator("//input[@value='multipleChoice']").click()

                }
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


        async deleteCustomQuestion() {

                let ele = await this.page.locator("(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]/following-sibling::button)[1]").isVisible()

                if ((ele == true)) {
                        // console.log("Delete Custom Question")
                        await this.page.locator("(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]/following-sibling::button)[1]").click()

                }
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


