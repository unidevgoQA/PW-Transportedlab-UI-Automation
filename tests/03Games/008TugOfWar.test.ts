import test, { expect } from "@fixtures/basePages";
import tugOfWarMobilePage from "@pages/tugOfWarMobile.page";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'




test("000 | Select All The Menu Ready For UI Varification", async ({ loginPage, functions,singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {



        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await MainMenu.clickHomeAvater();
        await MainMenu.mainMenuBtn();
        await MainMenu.clickMobileDesign();

        //Click on the menu page
        await menuPage.clickMenuPage()
        //verify font text
        await menuPage.checkFontsText();

        //Verify upload font text
        await menuPage.checkUploadFontText();

        await menuPage.deleteUploadedFont()

        await functions.fontUploadFunction()
        await menuPage.clickToUploadFont()
        await menuPage.verifyFontUploadedSuccessfully()        

        await menuPage.clickBackgroundColorInputField()
        await menuPage.inputBackgroundColor()
        await menuPage.clickColorPickerWindowSaveBtn()

        await menuPage.clickTextColorInputField()
        await menuPage.inputTextColor()
        await menuPage.clickColorPickerWindowSaveBtn()


        await menuPage.clickActiveBackgroundColorInputField()
        await menuPage.inputActiveBackgroundColor()
        await menuPage.clickColorPickerWindowSaveBtn()


        await menuPage.clickActiveTextColorInputField()
        await menuPage.inputActiveTextColor()
        await menuPage.clickColorPickerWindowSaveBtn()
        await menuPage.selectBottomAlignmentMenuBar()

        await singupPage.clickSignUpPage()
        await singupPage.clickAnonymousLoginOption()
        await singupPage.clickAdditionalInfoPhoneNumberCheckbox()
        await singupPage.clickAdditionalInfoEmailAddressCheckbox()
        await singupPage.clickAdditionalInfoAgeCheckbox()
        await singupPage.clickAdditionalInfoDateOfBirthCheckbox()
        await singupPage.clickAdditionalInfoZipCodeCheckbox()
        await singupPage.uncheckAdditionalInfoCustomQuestionCheckbox()

        await languagePage.clickLanguagePage()
        await languagePage.clickUserForceLanguageOption()
        await languagePage.clickForceLanguageInputField()
        await languagePage.selectEnglishLanguage()






})

test("008TOFW-001 | Add New Configuration", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')


        //click Tug Of War Page
        await tugOfWarPage.clickTugOfWarPage()

        //click AddNew Config Plus Btn 
        await tugOfWarPage.clickAddNewConfigPlusBtn()

        //verify AddNew ConfigPlus Window Text
        await tugOfWarPage.verifyAddNewConfigPlusWindowText()
        //input Configuration Name
        await tugOfWarPage.inputConfigurationName(functions.getRandomName())
        //click Add Btn
        await tugOfWarPage.clickAddBtn()

        await tugOfWarPage.clickStagesBtn()
        await tugOfWarPage.clickGameStartBtn()

})


test("008TOFW-004 | Validate Admin Successfully Upload Font From Game Settings", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage()     

        await tugOfWarPage.clickGameSettingsSection()

        await tugOfWarPage.verifyFontTitleText()
        await tugOfWarPage.deleteUploadedFont()

        await functions.fontUploadFunction()
        await tugOfWarPage.clickOnTheFontUploadInputField()

        await tugOfWarPage.selectUploadedFont()

        await tugOfWarPage.clickClearAllBtn()



})


test("008TOFW-005 | Validate Uploaded Font Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickTugOfWarPage()
        })
      
        let newTab = null;        
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await tugOfWarPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                tugOfWarMobilePages = new tugOfWarMobilePage(newTab)                
                
        })
        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.inputPhoneNumberForAditionalInfo()
                await tugOfWarMobilePages.clickAdditionalDatePickterInputField()
                await tugOfWarMobilePages.clickAdditionalDateEditBtn()
                await tugOfWarMobilePages.inputAdditionalDate()
                await tugOfWarMobilePages.clickAdditionalDateDatePickerOkBtn()

                await tugOfWarMobilePages.inputAgeForAditionalInfo()
                await tugOfWarMobilePages.inputEmailForAditionalInfo()
                await tugOfWarMobilePages.inputAdditionalZipCode()
                await tugOfWarMobilePages.clickSubmitButton()          
             
             
        })

        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.validateFontSuccessfullyApplied()
                     
             
             
        })

})

test("008TOFW-006 | Validate Game Settings  Primary Color Successfully Update From Admin Side ", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage()     

        await tugOfWarPage.clickGameSettingsSection()
        await tugOfWarPage.clickClearAllBtn()

        await tugOfWarPage.verifyPrimaryColorTitleText()
        await tugOfWarPage.clickPrimaryColorInputField()
        await tugOfWarPage.inputPrimaryColor()
        await tugOfWarPage.clickColorInputFieldSaveBtn()




})


test("008TOFW-007 | Validate Primary Color Successfully Applied In mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickTugOfWarPage()
        })
      
        let newTab = null;        
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await tugOfWarPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                tugOfWarMobilePages = new tugOfWarMobilePage(newTab)                
                
        })
        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.inputPhoneNumberForAditionalInfo()
                await tugOfWarMobilePages.clickAdditionalDatePickterInputField()
                await tugOfWarMobilePages.clickAdditionalDateEditBtn()
                await tugOfWarMobilePages.inputAdditionalDate()
                await tugOfWarMobilePages.clickAdditionalDateDatePickerOkBtn()

                await tugOfWarMobilePages.inputAgeForAditionalInfo()
                await tugOfWarMobilePages.inputEmailForAditionalInfo()
                await tugOfWarMobilePages.inputAdditionalZipCode()
                await tugOfWarMobilePages.clickSubmitButton()          
             
             
        })

        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.validatePrimaryColorSuccessfullyApplied()
                     
             
             
        })

})

test("008TOFW-008 | Validate Game Settings  Secondary Color Successfully Update From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage()     

        await tugOfWarPage.clickGameSettingsSection()
        // await tugOfWarPage.clickClearAllBtn()

        await tugOfWarPage.verifySecondaryColorTitleText()
        await tugOfWarPage.clickSecondaryColorInputField()
        await tugOfWarPage.inputSecondaryColor()
        await tugOfWarPage.clickColorInputFieldSaveBtn()




})


test("008TOFW-009 | Validate Secondary Color Successfully Applied In mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickTugOfWarPage()
        })
      
        let newTab = null;        
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await tugOfWarPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                tugOfWarMobilePages = new tugOfWarMobilePage(newTab)                
                
        })
        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.inputPhoneNumberForAditionalInfo()
                await tugOfWarMobilePages.clickAdditionalDatePickterInputField()
                await tugOfWarMobilePages.clickAdditionalDateEditBtn()
                await tugOfWarMobilePages.inputAdditionalDate()
                await tugOfWarMobilePages.clickAdditionalDateDatePickerOkBtn()

                await tugOfWarMobilePages.inputAgeForAditionalInfo()
                await tugOfWarMobilePages.inputEmailForAditionalInfo()
                await tugOfWarMobilePages.inputAdditionalZipCode()
                await tugOfWarMobilePages.clickSubmitButton()          
             
             
        })

        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.validatePrimaryColorSuccessfullyApplied()
                     
             
             
        })

})


test(" 008TOFW-010 | Validate Game Settings  Text Color Successfully Update From Admin Side ", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage()     

        await tugOfWarPage.clickGameSettingsSection()
        // await tugOfWarPage.clickClearAllBtn()

        await tugOfWarPage.verifyTextColorTitleText()
        await tugOfWarPage.clickTextColorInputField()
        await tugOfWarPage.inputTextColor()
        await tugOfWarPage.clickColorInputFieldSaveBtn()




})


test("008TOFW-011 | Validate Text Color Successfully Applied In mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickTugOfWarPage()
        })
      
        let newTab = null;        
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await tugOfWarPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                tugOfWarMobilePages = new tugOfWarMobilePage(newTab)                
                
        })
        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.inputPhoneNumberForAditionalInfo()
                await tugOfWarMobilePages.clickAdditionalDatePickterInputField()
                await tugOfWarMobilePages.clickAdditionalDateEditBtn()
                await tugOfWarMobilePages.inputAdditionalDate()
                await tugOfWarMobilePages.clickAdditionalDateDatePickerOkBtn()

                await tugOfWarMobilePages.inputAgeForAditionalInfo()
                await tugOfWarMobilePages.inputEmailForAditionalInfo()
                await tugOfWarMobilePages.inputAdditionalZipCode()
                await tugOfWarMobilePages.clickSubmitButton()          
             
             
        })

        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.validateTextColorSuccessfullyApplied()
                     
             
             
        })

})


//start from here........
test.skip(" 008TOFW-012 | Validate Game Settings  Stand by Massage Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage()     

        await tugOfWarPage.clickGameSettingsSection()
        // await tugOfWarPage.clickClearAllBtn()

        await tugOfWarPage.delteMobileBackgroundImage()
        await tugOfWarPage.delteMainBoardBackgroundImage()


        await tugOfWarPage.verifyMainBoardBackgroundTitleText()
        await tugOfWarPage.clickMainBoardBackgroundUploadInputField()
        




})

test.skip("008TOFW-013 | Validate Stand By Massage Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickTugOfWarPage()
        })
      
        let newTab = null;        
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await tugOfWarPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                tugOfWarMobilePages = new tugOfWarMobilePage(newTab)                
                
        })
        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.inputPhoneNumberForAditionalInfo()
                await tugOfWarMobilePages.clickAdditionalDatePickterInputField()
                await tugOfWarMobilePages.clickAdditionalDateEditBtn()
                await tugOfWarMobilePages.inputAdditionalDate()
                await tugOfWarMobilePages.clickAdditionalDateDatePickerOkBtn()

                await tugOfWarMobilePages.inputAgeForAditionalInfo()
                await tugOfWarMobilePages.inputEmailForAditionalInfo()
                await tugOfWarMobilePages.inputAdditionalZipCode()
                await tugOfWarMobilePages.clickSubmitButton()          
             
             
        })

        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.validateTextColorSuccessfullyApplied()
                     
             
             
        })

})

test.skip(" 008TOFW-018 | Validate Title Stage Custom Mobile Waiting Message Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage() 
        await tugOfWarPage.clickStagesBtn()        

        await tugOfWarPage.clickGameStopBtn()
        await tugOfWarPage.verifyCustomMobileWaitingMassageTitleText()
        await tugOfWarPage.inputCustomMobileWaitingMassage()
       
        




})

test.skip("008TOFW-019 | Validate Custom Mobile Waiting Message Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickTugOfWarPage()
        })
      
        let newTab = null;        
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await tugOfWarPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                tugOfWarMobilePages = new tugOfWarMobilePage(newTab)                
                
        })
        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.inputPhoneNumberForAditionalInfo()
                await tugOfWarMobilePages.clickAdditionalDatePickterInputField()
                await tugOfWarMobilePages.clickAdditionalDateEditBtn()
                await tugOfWarMobilePages.inputAdditionalDate()
                await tugOfWarMobilePages.clickAdditionalDateDatePickerOkBtn()

                await tugOfWarMobilePages.inputAgeForAditionalInfo()
                await tugOfWarMobilePages.inputEmailForAditionalInfo()
                await tugOfWarMobilePages.inputAdditionalZipCode()
                await tugOfWarMobilePages.clickSubmitButton()          
             
             
        })

        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.validateTextColorSuccessfullyApplied()
                     
             
             
        })

})

test.skip("008TOFW-020 | Validate Title Stage Title Background Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage()     

        await tugOfWarPage.clickGameSettingsSection()
        // await tugOfWarPage.clickClearAllBtn()

        await tugOfWarPage.delteMobileBackgroundImage()
        await tugOfWarPage.delteMainBoardBackgroundImage()


        await tugOfWarPage.verifyMainBoardBackgroundTitleText()
        await tugOfWarPage.clickMainBoardBackgroundUploadInputField()
        




})

test.skip("008TOFW-021 | Validate Title Background Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickTugOfWarPage()
        })
      
        let newTab = null;        
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await tugOfWarPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                tugOfWarMobilePages = new tugOfWarMobilePage(newTab)                
                
        })
        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.inputPhoneNumberForAditionalInfo()
                await tugOfWarMobilePages.clickAdditionalDatePickterInputField()
                await tugOfWarMobilePages.clickAdditionalDateEditBtn()
                await tugOfWarMobilePages.inputAdditionalDate()
                await tugOfWarMobilePages.clickAdditionalDateDatePickerOkBtn()

                await tugOfWarMobilePages.inputAgeForAditionalInfo()
                await tugOfWarMobilePages.inputEmailForAditionalInfo()
                await tugOfWarMobilePages.inputAdditionalZipCode()
                await tugOfWarMobilePages.clickSubmitButton()          
             
             
        })

        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.validateTextColorSuccessfullyApplied()
                     
             
             
        })

})

test.skip("008TOFW-022 | Validate Title Stage Game Title Image Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage()     

        await tugOfWarPage.clickGameSettingsSection()
        // await tugOfWarPage.clickClearAllBtn()

        await tugOfWarPage.delteMobileBackgroundImage()
        await tugOfWarPage.delteMainBoardBackgroundImage()


        await tugOfWarPage.verifyMainBoardBackgroundTitleText()
        await tugOfWarPage.clickMainBoardBackgroundUploadInputField()
        




})

test.skip(" 008TOFW-023 | Validate Game Title Image Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickTugOfWarPage()
        })
      
        let newTab = null;        
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await tugOfWarPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                tugOfWarMobilePages = new tugOfWarMobilePage(newTab)                
                
        })
        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.inputPhoneNumberForAditionalInfo()
                await tugOfWarMobilePages.clickAdditionalDatePickterInputField()
                await tugOfWarMobilePages.clickAdditionalDateEditBtn()
                await tugOfWarMobilePages.inputAdditionalDate()
                await tugOfWarMobilePages.clickAdditionalDateDatePickerOkBtn()

                await tugOfWarMobilePages.inputAgeForAditionalInfo()
                await tugOfWarMobilePages.inputEmailForAditionalInfo()
                await tugOfWarMobilePages.inputAdditionalZipCode()
                await tugOfWarMobilePages.clickSubmitButton()          
             
             
        })

        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.validateTextColorSuccessfullyApplied()
                     
             
             
        })

})


test.skip("008TOFW-024| Validate Title Stage Team Logo Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage()     

        await tugOfWarPage.clickGameSettingsSection()
        // await tugOfWarPage.clickClearAllBtn()

        await tugOfWarPage.delteMobileBackgroundImage()
        await tugOfWarPage.delteMainBoardBackgroundImage()


        await tugOfWarPage.verifyMainBoardBackgroundTitleText()
        await tugOfWarPage.clickMainBoardBackgroundUploadInputField()
        




})

test.skip("008TOFW-025 | Validate Team Logo Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickTugOfWarPage()
        })
      
        let newTab = null;        
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await tugOfWarPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                tugOfWarMobilePages = new tugOfWarMobilePage(newTab)                
                
        })
        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.inputPhoneNumberForAditionalInfo()
                await tugOfWarMobilePages.clickAdditionalDatePickterInputField()
                await tugOfWarMobilePages.clickAdditionalDateEditBtn()
                await tugOfWarMobilePages.inputAdditionalDate()
                await tugOfWarMobilePages.clickAdditionalDateDatePickerOkBtn()

                await tugOfWarMobilePages.inputAgeForAditionalInfo()
                await tugOfWarMobilePages.inputEmailForAditionalInfo()
                await tugOfWarMobilePages.inputAdditionalZipCode()
                await tugOfWarMobilePages.clickSubmitButton()          
             
             
        })

        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.validateTextColorSuccessfullyApplied()
                     
             
             
        })

})


test.skip("008TOFW-026 | Validate Title Stage Sponsor Logo Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage()     

        await tugOfWarPage.clickGameSettingsSection()
        // await tugOfWarPage.clickClearAllBtn()

        await tugOfWarPage.delteMobileBackgroundImage()
        await tugOfWarPage.delteMainBoardBackgroundImage()


        await tugOfWarPage.verifyMainBoardBackgroundTitleText()
        await tugOfWarPage.clickMainBoardBackgroundUploadInputField()
        




})

test.skip("008TOFW-027 | Validate Sponsor Logo Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickTugOfWarPage()
        })
      
        let newTab = null;        
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await tugOfWarPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                tugOfWarMobilePages = new tugOfWarMobilePage(newTab)                
                
        })
        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.inputPhoneNumberForAditionalInfo()
                await tugOfWarMobilePages.clickAdditionalDatePickterInputField()
                await tugOfWarMobilePages.clickAdditionalDateEditBtn()
                await tugOfWarMobilePages.inputAdditionalDate()
                await tugOfWarMobilePages.clickAdditionalDateDatePickerOkBtn()

                await tugOfWarMobilePages.inputAgeForAditionalInfo()
                await tugOfWarMobilePages.inputEmailForAditionalInfo()
                await tugOfWarMobilePages.inputAdditionalZipCode()
                await tugOfWarMobilePages.clickSubmitButton()          
             
             
        })

        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.validateTextColorSuccessfullyApplied()
                     
             
             
        })

})