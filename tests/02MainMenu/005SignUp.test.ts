import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import mobilePreviewPage from "@pages/mobilePreview.page";
import Env from "@utils/environment";
import { readFileSync } from 'fs'





test("005SU-001 | Validate Admin Successfully Check Socal Media Login From Admin Side ", async ({ loginPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
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

test("005SU-002 | Validate Socal Media Login With Google Functionality Successfully works on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                googleLoginPage = await newmobilePreviewPage.clickLoginWithGoogleIconIsVisible()
                googleLoginPage = new mobilePreviewPage(googleLoginPage)
                await googleLoginPage.inputEamilForLoginWithGoogle()
                await googleLoginPage.clickSignInWithGoogleWindowNextBtn()
                // await googleLoginPage.inputPasswordForLoginWithGoogle()
                // await googleLoginPage.clickSignInWithGoogleWindowNextBtn()


               


             
        })

       

})

test("005SU-003 | Validate Socal Media Login With Facebook Functionality Successfully works on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                // await googleLoginPage.clickContineuWithFacebookBtn()

                // await googleLoginPage.inputPasswordForLoginWithGoogle()
                // await googleLoginPage.clickSignInWithGoogleWindowNextBtn()


               


             
        })

       

})

test("005SU-004 | Validate Socal Media Login With Microsoft Functionality Successfully works on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                googleLoginPage = await newmobilePreviewPage.clickLoginWithMicrosoftIconIsVisible()
                googleLoginPage = new mobilePreviewPage(googleLoginPage)
                await googleLoginPage.inputEamilForLoginWithMicrosoft()
                await googleLoginPage.clickNextBtnOnMicrosoftWindow()
                await googleLoginPage.inputPasswordForLoginWithMicrosoft()
                await googleLoginPage.clickSignInBtnOnMicrosoftWindow()

                // await googleLoginPage.inputPasswordForLoginWithGoogle()
                // await googleLoginPage.clickSignInWithGoogleWindowNextBtn()


               


             
        })

       

})

test("005SU-005 | Validate Admin Successfully Unchecked Socal Media Login Option ", async ({ loginPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
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
             await singupPage.uncheckSocialMediaLoginRadioBtn()   
             await singupPage.clickSocialMediaLoginPhoneNumberValidationRadioBtn()          
     
     })
     
     
             
          
})

test("005SU-006 | Validate Social Media Login Options Hide Functionality Successfully Works on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Validation on mobile Screen", async () => {

                await newmobilePreviewPage.verifyLoginWithGoogleIconIsHidden()
                await newmobilePreviewPage.verifyLoginWithFacebookIconIsHidden()
                await newmobilePreviewPage.verifyLoginWithMicrosoftIconIsHidden()

                
             


               


             
        })

       

})

test("005SU-007 | Validate Admin Successfully Check Phone Varification Option From Admin Side ", async ({ loginPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
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
             await singupPage.uncheckSocialMediaLoginRadioBtn()   
             await singupPage.clickSocialMediaLoginPhoneNumberValidationRadioBtn()          
     
     })
     
     
             
          
})

test("005SU-008 | Validate Phone Number Validation Options Functionality Successfully Works on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Validation on mobile Screen", async () => {

                await newmobilePreviewPage.verifyLoginWithPhoneNumberIsVisible()
  

                
             


               


             
        })

       

})

test("005SU-009 | Validate Admin Successfully Check Email Validation Option From Admin Side ", async ({ loginPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
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
             await singupPage.uncheckSocialMediaLoginRadioBtn()   
             await singupPage.clickSocialMediaLoginEmailValidationRadioBtn()          
     
     })
     
     
             
          
})

test("005SU-010 | Validate Email Validation Options Functionality Successfully Works on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Validation on mobile Screen", async () => {

                await newmobilePreviewPage.verifyLoginWithEmailInputFieldIsVisible()
                await newmobilePreviewPage.inputEamilForLoginWithEmail()
                await newmobilePreviewPage.clickSignInBtn()
  

                
             


               


             
        })

       

})

test("005SU-011 | Validate Admin Successfully Check Anonymous Login Option From Admin Side ", async ({ loginPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
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
             await singupPage.uncheckSocialMediaLoginRadioBtn()   
             await singupPage.clickAnonymousLoginOption()   
             await singupPage.clickAdditionalInfoPhoneNumberCheckbox()   
             await singupPage.clickAdditionalInfoEmailAddressCheckbox()   
             await singupPage.clickAdditionalInfoAgeCheckbox()   
             await singupPage.clickAdditionalInfoDateOfBirthCheckbox()   
             await singupPage.clickAdditionalInfoZipCodeCheckbox()   

     
     })
     
     
             
          
})

test("005SU-012 | Validate Anonymous Login Options Functionality Successfully Works on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Validation on mobile Screen", async () => {

                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
  

                
             


               


             
        })

       

})

test("005SU-013 | Validate Admin Successfully Check Users age must be 13 years or older Option From Admin Side", async ({ loginPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
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
             await singupPage.uncheckSocialMediaLoginRadioBtn()   
             await singupPage.clickAnonymousLoginOption()
             await singupPage.clickUserAgeMust13YearsOrOlderOptionRadioBtn()   
             await singupPage.clickAdditionalInfoPhoneNumberCheckbox()   
             await singupPage.clickAdditionalInfoEmailAddressCheckbox()   
             await singupPage.clickAdditionalInfoAgeCheckbox()   
             await singupPage.clickAdditionalInfoDateOfBirthCheckbox()   
             await singupPage.clickAdditionalInfoZipCodeCheckbox()   

     
     })
     
     
             
          
})

test("005SU-014 | Validate Users age must be 13 years or older Options Functionality Successfully Works on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Validation on mobile Screen", async () => {

                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
  

                
             


               


             
        })

       

})

test("005SU-015 | Validate Admin Successfully Check define age or older to register Option From Admin Side", async ({ loginPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
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
             await singupPage.uncheckSocialMediaLoginRadioBtn()   
             await singupPage.clickAnonymousLoginOption()
             await singupPage.clickUserAgeCustomOrOlderOptionRadioBtn()
             await singupPage.inputUserAgeCustomOrOlder()   
             await singupPage.clickAdditionalInfoPhoneNumberCheckbox()   
             await singupPage.clickAdditionalInfoEmailAddressCheckbox()   
             await singupPage.clickAdditionalInfoAgeCheckbox()   
             await singupPage.clickAdditionalInfoDateOfBirthCheckbox()   
             await singupPage.clickAdditionalInfoZipCodeCheckbox()   

     
     })
     
     
             
          
})

test("005SU-016 | Validate Check define age or older to register Options Functionality Successfully Works on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Validation on mobile Screen", async () => {

                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
  

                
             


               


             
        })

       

})

test("005SU-017 | Validate Admin Successfully Check Options for user defined age Option From Admin Side", async ({ loginPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
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
             await singupPage.uncheckSocialMediaLoginRadioBtn()   
             await singupPage.clickAnonymousLoginOption()
             await singupPage.clickUserAgeuserDefinedOptionRadioBtn()
             await singupPage.inputFirstUserAgeuserDefined()
             await singupPage.inputSecondUserAgeuserDefined()


             await singupPage.clickAdditionalInfoPhoneNumberCheckbox()   
             await singupPage.clickAdditionalInfoEmailAddressCheckbox()   
             await singupPage.clickAdditionalInfoAgeCheckbox()   
             await singupPage.clickAdditionalInfoDateOfBirthCheckbox()   
             await singupPage.clickAdditionalInfoZipCodeCheckbox()   

     
     })
     
     
             
          
})

test("005SU-018 | Validate Options for user defined age Options Functionality Successfully Works on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Validation on mobile Screen", async () => {

                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
  

                
             


               


             
        })

       

})

test("005SU-019 | Validate Automatically assign username Functionality Successfully Works From Admin Side", async ({ loginPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
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
             await singupPage.uncheckSocialMediaLoginRadioBtn()   
             await singupPage.clickAnonymousLoginOption()
             await singupPage.automaticallyAssignUserName()
             await singupPage.InputAutomaticallyAssignUserName()


             await singupPage.clickAdditionalInfoPhoneNumberCheckbox()   
             await singupPage.clickAdditionalInfoEmailAddressCheckbox()   
             await singupPage.clickAdditionalInfoAgeCheckbox()   
             await singupPage.clickAdditionalInfoDateOfBirthCheckbox()   
             await singupPage.clickAdditionalInfoZipCodeCheckbox()   

     
     })
     
     
             
          
})

test("005SU-020 | Validate Automatically assign username Successfully Show on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Validation on mobile Screen", async () => {

                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickMyProfile()
                await newmobilePreviewPage.clickOkBtn()
                await newmobilePreviewPage.verifyAutomaticallyAssignUserName()
  

                
             


               


             
        })

       

})


test("005SU-021 | Validate Add New Set For User Profile Picture Functionality Successfully Works From Admin Side", async ({ loginPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
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
             await singupPage.uncheckSocialMediaLoginRadioBtn()   
             await singupPage.clickAnonymousLoginOption()
             await singupPage.clickProfilePictureAddNewSetBtn()
             await singupPage.inputProfilePictureSetTitle()
             await singupPage.uploadSetProfilePicture()
             await functions.fileUploadCropperWithoutIframe()
             await singupPage.clickSetProfilePictureWindowSaveBtn()

             await singupPage.clickProfilePictureSetDialogBox()
             await singupPage.selectAutoAssaigProfilePicture()

             await singupPage.clickAutoAssignRadioBtn()


             


             await singupPage.clickAdditionalInfoPhoneNumberCheckbox()   
             await singupPage.clickAdditionalInfoEmailAddressCheckbox()   
             await singupPage.clickAdditionalInfoAgeCheckbox()   
             await singupPage.clickAdditionalInfoDateOfBirthCheckbox()   
             await singupPage.clickAdditionalInfoZipCodeCheckbox()   

     
     })
     
     
             
          
})

test("005SU-022 | Validate Admin Selected Profile Picture Successfully Show on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Validation on mobile Screen", async () => {

                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickMyProfile()
                await newmobilePreviewPage.clickOkBtn()
                await newmobilePreviewPage.clickProfilePictureEditButton()
                await newmobilePreviewPage.verifyAutoAssaignProfilePictureUpdatedSuccessfully()

                
  

                
             


               


             
        })

       

})

test("005SU-023 | Validate Set User Profile Delete Functionality Functionality Successfully Works From Admin Side", async ({ loginPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
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
             await singupPage.uncheckSocialMediaLoginRadioBtn()   
             await singupPage.clickAnonymousLoginOption()          

             await singupPage.clickProfilePictureSetDialogBox()
             await singupPage.selectAutoAssaigProfilePicture()             

             await singupPage.deleteAutoAssignProfile()




             await singupPage.clickAutoAssignRadioBtn()


             


             await singupPage.clickAdditionalInfoPhoneNumberCheckbox()   
             await singupPage.clickAdditionalInfoEmailAddressCheckbox()   
             await singupPage.clickAdditionalInfoAgeCheckbox()   
             await singupPage.clickAdditionalInfoDateOfBirthCheckbox()   
             await singupPage.clickAdditionalInfoZipCodeCheckbox()   

     
     })
     
     
             
          
})

test("005SU-024 | Validate Admin Delete Profile Picture Successfully Show on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Validation on mobile Screen", async () => {

                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickMyProfile()
                await newmobilePreviewPage.clickOkBtn()
                await newmobilePreviewPage.clickProfilePictureEditButton()
                await newmobilePreviewPage.UserSelecthisProfilePicture()
                await newmobilePreviewPage.clickProfilePictureWindowSaveBtn()

                
  

                
             


               


             
        })

       

})


test("005SU-025 | Validate Set User Profile Edit Functionality Functionality Successfully Works From Admin Side", async ({ loginPage, MainMenu,functions, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {
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
             await singupPage.uncheckSocialMediaLoginRadioBtn()   
             await singupPage.clickAnonymousLoginOption()          

             await singupPage.clickProfilePictureSetDialogBox()
             await singupPage.selectAutoAssaigProfilePicture()

             await singupPage.editAutoAssaigProfilePicture()

             await singupPage.editProfilePictureSetTitle() 
             await singupPage.deleteUploadedProfilePicture()                         
             await singupPage.editUploadedSetProfilePicture()
             await singupPage.clickSetProfilePictureWindowSaveBtn()

             await singupPage.verifyAutoAssignProfileSuccessfullyEdited()




             await singupPage.clickAutoAssignRadioBtn()


             


             await singupPage.clickAdditionalInfoPhoneNumberCheckbox()   
             await singupPage.clickAdditionalInfoEmailAddressCheckbox()   
             await singupPage.clickAdditionalInfoAgeCheckbox()   
             await singupPage.clickAdditionalInfoDateOfBirthCheckbox()   
             await singupPage.clickAdditionalInfoZipCodeCheckbox()   

     
     })
     
     
             
          
})

test("005SU-026 | Validate Admin Edited Profile Picture Successfully Show on Mobile Screen", async ({ loginPage,guesstheScorePage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Validation on mobile Screen", async () => {

                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickMyProfile()
                await newmobilePreviewPage.clickOkBtn()
                await newmobilePreviewPage.clickProfilePictureEditButton()
                await newmobilePreviewPage.verifyAutoAssaignProfilePictureUpdatedSuccessfullyAfterEdit()

                
  

                
             


               


             
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
