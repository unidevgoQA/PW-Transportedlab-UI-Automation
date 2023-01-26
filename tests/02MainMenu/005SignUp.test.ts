import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import mobilePreviewPage from "@pages/mobilePreview.page";
import Env from "@utils/environment";
import { readFileSync } from 'fs'





test("005SU-001 | Validate Admin Successfully Select Socal Media Login ", async ({ loginPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
   await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();           

})

await test.step("Login Admin And Land to Home Screen", async () => {
        await singupPage.clickSignUpPage()   
        await singupPage.verifyRegistrationOptionsText() 
        await singupPage.clickSocialMediaLoginRadioBtn()   
        await singupPage.clickSocialMediaLoginPhoneNumberValidationRadioBtn()          

})


        
     
})

test("005SU-002 | Validate Socal Media Login Option Successfully Show on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And land To Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                const screenshot = await page.screenshot();
                await testInfo.attach("login screenshot", {
                        contentType: "image/png",
                        body: screenshot
                })



        })


        await test.step("Click Guess The Scrore Section", async () => {
                await guesstheScorePage.clickGuessTheScoreSection()
        })
      
        let newTab = null;
        let googleLoginPage = null
        let newmobilePreviewPage: mobilePreviewPage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)                
                
        })
        await test.step("Input Additional Information For Mobile Screen", async () => {
                googleLoginPage = await newmobilePreviewPage.verifyLoginWithGoogleIconIsVisible()
                googleLoginPage = new mobilePreviewPage(googleLoginPage)
                await googleLoginPage.inputEamilForLoginWithGoogle()
                await googleLoginPage.clickSignInWithGoogleWindowNextBtn()
                // await googleLoginPage.inputPasswordForLoginWithGoogle()
                // await googleLoginPage.clickSignInWithGoogleWindowNextBtn()


               


             
        })

       

})

test("005SU-003 | Validate Socal Media Login Option Successfully Show on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And land To Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                const screenshot = await page.screenshot();
                await testInfo.attach("login screenshot", {
                        contentType: "image/png",
                        body: screenshot
                })



        })


        await test.step("Click Guess The Scrore Section", async () => {
                await guesstheScorePage.clickGuessTheScoreSection()
        })
      
        let newTab = null;
        let googleLoginPage = null
        let newmobilePreviewPage: mobilePreviewPage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)                
                
        })
        await test.step("Input Additional Information For Mobile Screen", async () => {
                googleLoginPage = await newmobilePreviewPage.clickLoginWithFacebookIconIsVisible()
                googleLoginPage = new mobilePreviewPage(googleLoginPage)
                await googleLoginPage.inputEamilForLoginWithFacebook()
                await googleLoginPage.inputPasswordForLoginWithFacebook()
                await googleLoginPage.clickSignInWithFacebookWindowLoginBtn()
                await googleLoginPage.clickContineuWithFacebookBtn()

                // await googleLoginPage.inputPasswordForLoginWithGoogle()
                // await googleLoginPage.clickSignInWithGoogleWindowNextBtn()


               


             
        })

       

})

test("005SU-003 | Validate Socal Media Login Option Successfully Show on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And land To Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                const screenshot = await page.screenshot();
                await testInfo.attach("login screenshot", {
                        contentType: "image/png",
                        body: screenshot
                })



        })


        await test.step("Click Guess The Scrore Section", async () => {
                await guesstheScorePage.clickGuessTheScoreSection()
        })
      
        let newTab = null;
        let googleLoginPage = null
        let newmobilePreviewPage: mobilePreviewPage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)                
                
        })
        await test.step("Input Additional Information For Mobile Screen", async () => {
                googleLoginPage = await newmobilePreviewPage.clickLoginWithFacebookIconIsVisible()
                googleLoginPage = new mobilePreviewPage(googleLoginPage)
                await googleLoginPage.inputEamilForLoginWithFacebook()
                await googleLoginPage.inputPasswordForLoginWithFacebook()
                await googleLoginPage.clickSignInWithFacebookWindowLoginBtn()
                await googleLoginPage.clickContineuWithFacebookBtn()

                // await googleLoginPage.inputPasswordForLoginWithGoogle()
                // await googleLoginPage.clickSignInWithGoogleWindowNextBtn()


               


             
        })

       

})
     
test("005SU-003 | Validate Socal Media Login Option Successfully Show on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And land To Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                const screenshot = await page.screenshot();
                await testInfo.attach("login screenshot", {
                        contentType: "image/png",
                        body: screenshot
                })



        })


        await test.step("Click Guess The Scrore Section", async () => {
                await guesstheScorePage.clickGuessTheScoreSection()
        })
      
        let newTab = null;
        let googleLoginPage = null
        let newmobilePreviewPage: mobilePreviewPage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)                
                
        })
        await test.step("Input Additional Information For Mobile Screen", async () => {
                googleLoginPage = await newmobilePreviewPage.clickLoginWithFacebookIconIsVisible()
                googleLoginPage = new mobilePreviewPage(googleLoginPage)
                await googleLoginPage.inputEamilForLoginWithFacebook()
                await googleLoginPage.inputPasswordForLoginWithFacebook()
                await googleLoginPage.clickSignInWithFacebookWindowLoginBtn()
                await googleLoginPage.clickContineuWithFacebookBtn()

                // await googleLoginPage.inputPasswordForLoginWithGoogle()
                // await googleLoginPage.clickSignInWithGoogleWindowNextBtn()


               


             
        })

       

})
     
















// test("005SU-001 | Verify SignUp Page Functionality", async ({ loginPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {


//         await test.step("Login Admin And Land to Home Screen", async () => {

//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')

//                 await MainMenu.clickHomeAvater();
//                 await MainMenu.mainMenuBtn();
//                 await MainMenu.clickMobileDesign();


//                 const screenshot = await page.screenshot();
//                 await testInfo.attach("login screenshot", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })



//         })
        
//         await test.step("005SU-001 | Verify Registration Options", async () => {
//                 const screenshot = await page.screenshot();

//                 await singupPage.clickSignUpPage()
//                 await testInfo.attach("click on the signup page", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })

//                 // check registration options text
//                 await singupPage.checkRegistrationOptionPage()



//                 await singupPage.checkSocialMediaLogins()

//                 await singupPage.checkEmailValidation()
//                 await testInfo.attach("Click on the email validation radio button", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })

//                 // check phone number validation text
//                 await singupPage.checkPhoneNumberValidationText()

//                 //click on the phone number validation radio button 
//                 await singupPage.clickPhoneNumberValidation()

//                 //check AnonymousLoginText
//                 await singupPage.checkAnonymousLoginText()


//                 //check AnonymousLoginText
//                 await singupPage.clickAnonymousLogin()


//         })

//         await test.step("005SU-002 | Verify Age Information", async () => {
//                 const screenshot = await page.screenshot();


//                 //check age information text
//                 await singupPage.checkAgeInformationText()

//                 //click on the thirteen or older aga radio button
//                 await singupPage.clickthirteenOrOlder()
//                 await testInfo.attach("click on the thirteen or older aga radio button", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })

//                 // check thirteen years text
//                 await singupPage.checkMustThirteenYearsText()

//                 //click on the custom or older register radio button 
//                 await singupPage.clickCustomOrOlderRegister()

//                 //input age custom or older input field 
//                 await singupPage.inputCustomOrOlderAge()


//                 //click on the defined age radio button
//                 await singupPage.clickuserDefinedAge()

//                 //input data first defined input field 
//                 await singupPage.inputFirstDefinedAge()

//                 //input data second defined input field 
//                 await singupPage.inputSecondDefinedAge()
//         })

//         await test.step("005SU-003 | Verify User Releted Options", async () => {
//                 const screenshot = await page.screenshot();


//                 //check user profile automatically assaign username text
//                 await singupPage.checkAutomatacllyAssignUsernameText()

//                 //click user profile automatically assaign username btn
//                 await singupPage.clickAutomatacllyAssignUsernameBtn()
//                 await testInfo.attach("click user profile automatically assaign username btn", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })

//                 // check Auto Username prifix  text
//                 await singupPage.checkAutoUserNamePrifixText()

//                 //input username prifix data 
//                 await singupPage.inputAutoUserNamePrifixData()

//         })

//         await test.step("005SU-004 | Verify User Profile Set Section", async () => {
//                 const screenshot = await page.screenshot();


//                 //check user profile Profile picture set text
//                 await singupPage.checkProfilePictureSetText()

//                 //click add new set button
//                 await singupPage.clickAddNewSetBtn()
//                 await testInfo.attach("click add new set button", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })

//                 // check profile picture set text
//                 await singupPage.checkProfilePictureSetDialogBoxText()

//                 //check set text title 
//                 await singupPage.checkSetTitleText()

//                 //input set title data  
//                 await singupPage.inputSetTitleData()

//                 //check upload picture text 
//                 await singupPage.checkUploadPictureText()

//                 //upload profile image 
//                 await singupPage.uploadProfileSet()
//                 await page.waitForTimeout(3000)

//                 await functions.fileUploadCropperWithoutIframe()

//                 await page.waitForTimeout(4000)

//                 //click on the save button
//                 await singupPage.clickSaveBtn()


//         })
//         await test.step("005SU-005 | Verify Terms And Condition Section", async () => {
//                 const screenshot = await page.screenshot();


//                 //Verify terms and condition text is visible
//                 await singupPage.verifyTermsAndConditionVisibility()

//                 //if there any terms and condition is visible then delete it
//                 await singupPage.deleteTermsAndConditionUrl()

//                 //input terms and condition title text
//                 await singupPage.inputTermsAndConditionTitleText()
//                 await testInfo.attach("input terms and condition title text", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })

//                 //input terms and condition Url
//                 await singupPage.inputTermsAndConditionUrl()

//                 //click on the add terms and conditon button 
//                 await singupPage.clickTermsAndConditionAddNewUrlBtn()

//                 //verify terms and condition add url section title   
//                 await singupPage.verifyTermsAndConditionAddUrlSectionTitle()


//         })

//         await test.step("005SU-006 | Verify Additional Information Section", async () => {
//                 const screenshot = await page.screenshot();


//                 //Verify Additional Information Title text is visible
//                 await singupPage.verifyAdditionalInformationTitleText()

//                 //if there phone number checkbox is uncheck then check it
//                 await singupPage.clickPhoneNumberCheckBox()

//                 //click Email Address CheckBox
//                 await singupPage.clickEmailAddressCheckBox()
//                 await testInfo.attach("click Email Address CheckBox", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })

//                 //click AgeCheck Box
//                 await singupPage.clickAgeCheckBox()

//                 //click DateOfBirth CheckBox 
//                 await singupPage.clickDateOfBirthCheckBox()

//                 //click Postal Code CheckBox   
//                 await singupPage.clickPostalCodeCheckBox()
//                 //click Custom Question CheckBox  
//                 await singupPage.clickCustomQuestionCheckBox()
//                 //click Add Question Add Btn  
//                 await singupPage.clickAddQuestionAddBtn()

//                 await page.waitForTimeout(4000)

//                 //verify Custom Question Text  
//                 await singupPage.verifyCustomQuestionText()

//                 //verify Custom Question Type Text  
//                 await singupPage.verifyCustomQuestionTypeText()


//                 //click Free Form CheckBox 
//                 await singupPage.clickFreeFormCheckBox()


//                 //input Free Form Custom Question  
//                 await singupPage.inputFreeFormCustomQuestion()


//                 //enabled Mandotary Btn  
//                 await singupPage.enabledMandotaryBtn()

//                 //click Custom Question Window SaveBtn  
//                 await singupPage.clickCustomQuestionWindowSaveBtn()

//                 await page.waitForTimeout(3000)

//                 //click Add Question Add Btn  
//                 await singupPage.clickAddQuestionAddBtn()

//                 await page.waitForTimeout(2000)


//                 //click Multiple Choice CheckBox 
//                 await singupPage.clickMultipleChoiceCheckBox()

//                 await singupPage.inputMultipuleFieldData()



//                 //click Add Choice Btn 
//                 await singupPage.clickAddChoiceBtn()

//                 await page.waitForTimeout(2000)

//                 //input Choice Text 
//                 await singupPage.inputChoiceText()

//                 //click Custom Question Window SaveBtn  
//                 await singupPage.clickCustomQuestionWindowSaveBtn()


//         })

//         await test.step("005SU-007 | Verify Where Custom Opt-Ins appear Section", async () => {
//                 const screenshot = await page.screenshot();


//                 //delete Custom Question
//                 await singupPage.deleteCustomQuestion()

//                 //clcik SignUp ShowOn Home Checkbox
//                 await singupPage.clcikSignUpShowOnHomeCheckbox()

//                 //clcik Custom Question Screen Checkbox
//                 await singupPage.clcikCustomQuestionScreenCheckbox()
//                 await testInfo.attach("clcik Custom Question Screen Checkbox", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })

//                 //clcik Custom Option Checkbox
//                 await singupPage.clcikCustomOptionCheckbox()

//                 //clcik Add Custom OptionIn 
//                 await singupPage.clcikAddCustomOptionIn()

//                 await page.waitForTimeout(3000)
//                 //clcik SmsCheck Box   
//                 await singupPage.clcikSmsCheckBox()

//                 //clcik Email CheckBox  
//                 await singupPage.clcikEmailCheckBox()

//                 //clcik Custom CheckBox
//                 await singupPage.clcikCustomCheckBox()



//                 //input Custom Backend Name 
//                 await singupPage.inputCustomBackendName()

//                 //input Custom Options Discription 
//                 await singupPage.inputCustomOptionsDiscription()


//                 //click AutoCheck Checkbox 
//                 await singupPage.clickAutoCheckCheckbox()


//                 //click Custom OptionIn SaveBtn  
//                 await singupPage.clickCustomOptionInSaveBtn()



//         })
// })

// test("005SU-002 | Verify Additional Information Section", async ({loginPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }) => {
        
//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')

//         await MainMenu.clickHomeAvater();
//         await MainMenu.mainMenuBtn();
//         await MainMenu.clickMobileDesign();

//         await singupPage.clickSignUpPage()

//         // expect(await page.locator("(//label[text()='Url or link']/following::input)[1]").isChecked()).toBeFalsy()
//         // await expect(page.locator("(//label[text()='Url or link']/following::input)[1]")).toBeChecked()

//         // expect(await page.locator("(//label[text()='Url or link']/following::input)[1]").isChecked()).toBeFalsy()

// await functions.mobileSignUpAdditionalInformation()




// })
