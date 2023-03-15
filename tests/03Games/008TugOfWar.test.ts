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

test.only("008TOFW-001 | Add New Configuration", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')


        //click Tug Of War Page
        await tugOfWarPage.clickTugOfWarPage()

        //click AddNew Config Plus Btn 
        await tugOfWarPage.clickAddNewConfigPlusBtn()
        await page.waitForTimeout(5000)

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


test(" 008TOFW-012 | Validate Title Stage Custom Mobile Waiting Message Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage() 
        await tugOfWarPage.clickStagesBtn()        

        //await tugOfWarPage.clickGameStopBtn()
        //await tugOfWarPage.verifyCustomMobileWaitingMassageTitleText()
        //await tugOfWarPage.inputCustomMobileWaitingMassage()
        await tugOfWarPage.inputCustomMobileWaitingMassage();
        await tugOfWarPage.FontSelection();
        await tugOfWarPage.ArialFontSelection();
        await tugOfWarPage.ChracterDRpClick();
        await tugOfWarPage.NormalSelection();
        await tugOfWarPage.ChracterDRpClick();
        await tugOfWarPage.CustomH1Selection();
        await tugOfWarPage.ChracterDRpClick();
        await tugOfWarPage.CustomH2Selection();
        
        await tugOfWarPage.ChracterDRpClick();
        await tugOfWarPage.CustomH3Selection();
        await tugOfWarPage.ChracterDRpClick();
        await tugOfWarPage.CustomH4Selection();
        await tugOfWarPage.ChracterDRpClick();
        await tugOfWarPage.CustomH5Selection();
        await tugOfWarPage.ChracterDRpClick();
        await tugOfWarPage.CustomH6Selection();
        await tugOfWarPage.ChracterDRpClick();
        await tugOfWarPage.CustomBlockquoteSelection();
        await tugOfWarPage.CustomBoldSelection();
        await tugOfWarPage.CustomItalicSelection();
        await tugOfWarPage.CustomUnderlineSelection();
        await tugOfWarPage.CustomStrikethroughSelection();
        //await tugOfWarPage.CustomColorPickerClick();
        //await tugOfWarPage.CustomColorSelection();
        //await tugOfWarPage.CustomColorPickerHighlightsClick();
        //await tugOfWarPage.CustomHighlightsSelection();
        await tugOfWarPage.CustomLeftAlignmentSelection();
        await tugOfWarPage.CustomCenterAlignmentSelection();
        await tugOfWarPage.CustomRightAlignmentSelection();
        await tugOfWarPage.CustomOutdentSelection();
        await tugOfWarPage.CustomIntdentSelection();
        await tugOfWarPage.CustomOrderSelection();
        await tugOfWarPage.CustomUnOrderSelection();
        await tugOfWarPage.CustomRemoverSelection();





})

test("008TOFW-013 | Validate Custom Mobile Waiting Message Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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

                await tugOfWarMobilePages.validateCustomWaitingTextSuccessfullyApplied();
                     
             
             
        })

})



test("008TOFW-014 | Validate Sponsor Logo Image Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage();
        await tugOfWarPage.clickStagesBtn();
        await functions.bannerImageUploadFunction();
        await tugOfWarPage.sponsorLogoUploadBtnClick();
        await functions.fileUploadCropper();     

        
        




})

test(" 008TOFW-015 | Validate Sponsor Logo Image Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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

                await tugOfWarMobilePages.validateSponsorLogoSuccessfullyApplied();
                     
             
             
        })

})



test("008TOFW-016| Validate Title Stage Team Logo Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage()     

        await tugOfWarPage.clickStagesBtn();
        // await tugOfWarPage.clickClearAllBtn()

       await functions.bannerImageUploadFunction();
       await tugOfWarPage.TeamLogoUploadBTNClick();
       await functions.fileUploadCropper();
        




})

test("008TOFW-017 | Validate Team Logo Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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

                await tugOfWarMobilePages.validateTeamLogoSuccessfullyApplied();
                     
             
             
        })

})


test("008TOFW-018 | Validate Title Stage Sponsor Logo Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

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

test("008TOFW-019 | Validate Sponsor Logo Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
test("008TOFW-020 | Validate Game Title Stage Title Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage();     

        await tugOfWarPage.clickStagesBtn(); 
        // await tugOfWarPage.clickClearAllBtn()

       await functions.bannerImageUploadFunction();
       await tugOfWarPage.GameTitleImageClick();
       await functions.fileUploadCropper();
        




})
test("008TOFW-021 | Validate Game Title Image Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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

                await tugOfWarMobilePages.validateGameTitleIMageSuccessfullyApplied();
                     
             
             
        })
})


test("008TOFW-022 | Validate Title Stage Title Background Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage();     

        await tugOfWarPage.clickStagesBtn(); 
        // await tugOfWarPage.clickClearAllBtn()

       await tugOfWarPage.titlebackgroundImageOptionClick();
       await functions.bannerImageUploadFunction();
       await tugOfWarPage.TitleBackgroundImageUploadBTnClick();
       await functions.fileUploadCropper();
       //await tugOfWarPage.ImageDelete();
       await tugOfWarPage.titlebackgroundVideoOptionClick();
       //await tugOfWarPage.VideoDeleteBTnClick();
       await functions.videoUploadFunction();
       await tugOfWarPage.VideoUploadBTNClick();
       //await functions.fileUploadCropper();
        




})

test("008TOFW-023 | Validate Title Background Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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

                await tugOfWarMobilePages.validateTitleBackgroundIMageSuccessfullyApplied();
                     
             
             
        })


})
test("008TOFW-024 | Validate Selection Stage Selection Background Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage();  
        await tugOfWarPage.clickStagesBtn();   

        await tugOfWarPage.NavigatetotheSelectionStage(); 
        await tugOfWarPage.GameStartBTNCLICK();
        // await tugOfWarPage.clickClearAllBtn()

        await tugOfWarPage.selectionBackgroundImageSelection();
        await functions.bannerImageUploadFunction();
        await tugOfWarPage.selectionBackgroundIMageUploadBTNClick();
        await functions.fileUploadCropper();
        await page.waitForTimeout(10000);
        
        await tugOfWarPage.selectionBackgroundIMageDeleteClick();
        await tugOfWarPage.SlectionBackgroundVideoBTnClick();
        await functions.videoUploadFunction();
        await tugOfWarPage.SelectionStageVideoUploadBtNClick();
        await functions.fileUploadCropper();
        
        await tugOfWarPage.AdjustableTimer();
        
        
        
        
})


test("008TOFW-025 | Validate Selection Background Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await page.waitForTimeout(3000);

                await tugOfWarMobilePages.ValidateSelectionBackground();
                     
             
             
        })


})



test("008TOFW-026 | Validate Selection Stage Number Of Teams Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage();  
        await tugOfWarPage.clickStagesBtn();   

        await tugOfWarPage.NavigatetotheSelectionStage(); 
        //await tugOfWarPage.GameStartBTNCLICK();
        // await tugOfWarPage.clickClearAllBtn()

        await tugOfWarPage.NumberOFTeamsInputField();
        
        
        
        
})




      

test("008TOFW-027 | Validate Selection Stage #1 Team Logo Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage();  
        await tugOfWarPage.clickStagesBtn();   

        await tugOfWarPage.NavigatetotheSelectionStage(); 
        //await tugOfWarPage.GameStartBTNCLICK();
        // await tugOfWarPage.clickClearAllBtn()
        await functions.potraitImageUploadFunction();
        await tugOfWarPage.TEam1LogoUploadBtnClick();
        await functions.fileUploadCropper();

        
        
        
        
        
})

test("008TOFW-028 | Validate #1Team Logo Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await page.waitForTimeout(3000);

                await tugOfWarMobilePages.ValidateTeam1LOGO();
                     
             
             
        })


})

test("008TOFW-029 | Validate Selection Stage Name Of The #1Teams Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage();  
        await tugOfWarPage.clickStagesBtn();   

        await tugOfWarPage.NavigatetotheSelectionStage(); 
        //await tugOfWarPage.GameStartBTNCLICK();
        // await tugOfWarPage.clickClearAllBtn()

        await tugOfWarPage.Team1Name();
        
        
        
        
})







// test.only("008TOFW-032 | Validate #1Team Name Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//         await test.step("Login Admin And land To Home Screen", async () => {

//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')

//                 const screenshot = await page.screenshot();
//                 await testInfo.attach("login screenshot", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })
//         })
//         await test.step("Click Guess The Scrore Section", async () => {
//                 await tugOfWarPage.clickTugOfWarPage()
//         })
      
//         let newTab = null;        
//         let tugOfWarMobilePages: tugOfWarMobilePage

//         await test.step("now open the game in mobile view", async () => {
//                 //click Mobile Link Btn
//                 await tugOfWarPage.clickQrCodeBtn()
//                 //now click on open button
//                 newTab = await tugOfWarPage.clickOpenLinkInNewTab()
//                 tugOfWarMobilePages = new tugOfWarMobilePage(newTab)                
                
//         })
//         await test.step("Validation on mobile Screen", async () => {

//                 await tugOfWarMobilePages.inputPhoneNumberForAditionalInfo()
//                 await tugOfWarMobilePages.clickAdditionalDatePickterInputField()
//                 await tugOfWarMobilePages.clickAdditionalDateEditBtn()
//                 await tugOfWarMobilePages.inputAdditionalDate()
//                 await tugOfWarMobilePages.clickAdditionalDateDatePickerOkBtn()

//                 await tugOfWarMobilePages.inputAgeForAditionalInfo()
//                 await tugOfWarMobilePages.inputEmailForAditionalInfo()
//                 await tugOfWarMobilePages.inputAdditionalZipCode()
//                 await tugOfWarMobilePages.clickSubmitButton()          
             
             
//         })

//         await test.step("Validation on mobile Screen", async () => {
//                 await page.waitForTimeout(3000);

//                 await tugOfWarMobilePages.ValidateTeam1SelectBTNClick();
//                 await tugOfWarMobilePages.ValidateTeam1Name();

                     
             
             
//         })


// })


test("008TOFW-030 | Validate Selection Stage #2 Team Logo Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage();  
        await tugOfWarPage.clickStagesBtn();   

        await tugOfWarPage.NavigatetotheSelectionStage(); 
        //await tugOfWarPage.GameStartBTNCLICK();
        // await tugOfWarPage.clickClearAllBtn()
        await functions.potraitImageUploadFunction();
        await tugOfWarPage.Team2LogoUploadBTNClick();
        await functions.fileUploadCropper();

        
        
        
        
        
})



test("008TOFW-031 | Validate #2Team Logo Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await page.waitForTimeout(3000);

                await tugOfWarMobilePages.ValidateTeam2LOGO();
                     
             
             
        })


})


test("008TOFW-032 | Validate Custom Selection Message Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage();  
        await tugOfWarPage.clickStagesBtn();   

        await tugOfWarPage.NavigatetotheSelectionStage(); 
        //await tugOfWarPage.GameStartBTNCLICK();
        // await tugOfWarPage.clickClearAllBtn()
        await functions.potraitImageUploadFunction();
        await tugOfWarPage.CustomSelectionMessageInputField();

        
        
        
        
        
})


test("008TOFW-033 | Validate Custom Selection Message Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await page.waitForTimeout(3000);

                await tugOfWarMobilePages.ValidateCustomSelectionMessage();
                     
             
             
        })


})

test("008TOFW-034 | Validate Custom Team Selection Message Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage();  
        await tugOfWarPage.clickStagesBtn();   

        await tugOfWarPage.NavigatetotheSelectionStage(); 
        //await tugOfWarPage.GameStartBTNCLICK();
        // await tugOfWarPage.clickClearAllBtn()
        await functions.potraitImageUploadFunction();
        await tugOfWarPage.CustomTeamSelectionMessageInputField();

        
        
        
        
        
})



test("008TOFW-035 | Validate Custom Team Selection Message Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await page.waitForTimeout(3000);

                await tugOfWarMobilePages.ValidateTeam1SelectBTNClick();
                await tugOfWarMobilePages.ValidateCustomTeamSelectionMessage();
                     
             
             
        })


})



test("008TOFW-036 | Validate Team Name Box Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage();  
        await tugOfWarPage.clickStagesBtn();   

        await tugOfWarPage.NavigatetotheSelectionStage(); 
        //await tugOfWarPage.GameStartBTNCLICK();
        // await tugOfWarPage.clickClearAllBtn()
        await tugOfWarPage.TeamnameBoxBTNClick();
        await tugOfWarPage.AddColor();
        await tugOfWarPage.RGB1Input();
        await tugOfWarPage.RGB2Input();
        await tugOfWarPage.RGB3Input();
        await tugOfWarPage.RGB4Input();
        await tugOfWarPage.ColorRGB5INput();
        await tugOfWarPage.ColorDrpdownClick();
        await tugOfWarPage.ColorDrpdownSolidClick();
        await tugOfWarPage.ColorDrpdownClick();
        await tugOfWarPage.ColorDrpdownHorizontalClick();
        await tugOfWarPage.ColorDrpdownClick();
        await tugOfWarPage.ColorDrpdownVerticalClick();
        await tugOfWarPage.ColorDrpdownClick();
        await tugOfWarPage.ColorDrpdownDiagonalClick();
        await tugOfWarPage.ColorDrpdownClick();
        await tugOfWarPage.ColorDrpdownRadialClick();
        await tugOfWarPage.ColorRGB5INput();
        await tugOfWarPage.RGBSaveBTnClick();

        
        
        
        
        
})



test("008TOFW-037 | Validate Team Name Box Successfully Applied In mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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

                await tugOfWarMobilePages.validateTeamNameBoxSuccessfullyApplied();
                     
             
             
        })

})



test("008TOFW-038 | Validate Team Selected Message Box Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage();  
        await tugOfWarPage.clickStagesBtn();   

        await tugOfWarPage.NavigatetotheSelectionStage(); 
        //await tugOfWarPage.GameStartBTNCLICK();
        // await tugOfWarPage.clickClearAllBtn()
        await tugOfWarPage.TeamSelectedMessageBoxClick();
        await tugOfWarPage.AddColor();
        await tugOfWarPage.RGB1Input();
        await tugOfWarPage.RGB2Input();
        await tugOfWarPage.RGB3Input();
        await tugOfWarPage.RGB4Input();
        await tugOfWarPage.ColorRGB5INput();
        await tugOfWarPage.ColorDrpdownClick();
        await tugOfWarPage.ColorDrpdownSolidClick();
        await tugOfWarPage.ColorDrpdownClick();
        await tugOfWarPage.ColorDrpdownHorizontalClick();
        await tugOfWarPage.ColorDrpdownClick();
        await tugOfWarPage.ColorDrpdownVerticalClick();
        await tugOfWarPage.ColorDrpdownClick();
        await tugOfWarPage.ColorDrpdownDiagonalClick();
        await tugOfWarPage.ColorDrpdownClick();
        await tugOfWarPage.ColorDrpdownRadialClick();
        await tugOfWarPage.ColorRGB5INput();
        await tugOfWarPage.RGBSaveBTnClick();

        
        
        
        
        
})


test("008TOFW-039 | Validate Selected Team Message Box Successfully Applied In mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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

                await tugOfWarMobilePages.validateSelectedTeamMessageBoxSuccessfullyApplied();
                     
             
             
        })

})


test("008TOFW-040 | Validate Navigation To The Next Stage  From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage();  
        await tugOfWarPage.clickStagesBtn();  
        await tugOfWarPage.NavigatetotheSelectionStage();  

        await tugOfWarPage.MoveToTheNextStageBtnClick();

        
        
        
        
        
})

test("008TOFW-041 | Validate Custom Countdown Message Successfully From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage();  
        await tugOfWarPage.clickStagesBtn();
        //await tugOfWarPage.NavigatetotheSelectionStage();    

        await tugOfWarPage.MoveToTheNextStageBtnClick();
        await tugOfWarPage.MoveToTheNextStageBtnClick();
        await tugOfWarPage.CustomCountDownMessageInput();


        
        
        
        
        
})


test("008TOFW-042 | Validate Countdown Stage Countdown Background Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage();  
        await tugOfWarPage.clickStagesBtn();   

        await tugOfWarPage.MoveToTheNextStageBtnClick();
        await tugOfWarPage.MoveToTheNextStageBtnClick();
        // await tugOfWarPage.clickClearAllBtn()

        await tugOfWarPage.selectionBackgroundImageSelection();
        await functions.bannerImageUploadFunction();
        await tugOfWarPage.selectionBackgroundIMageUploadBTNClick();
        await functions.fileUploadCropper();
        await page.waitForTimeout(10000);
        
        await tugOfWarPage.selectionBackgroundIMageDeleteClick();
        await tugOfWarPage.SlectionBackgroundVideoBTnClick();
        await functions.videoUploadFunction();
        await tugOfWarPage.SelectionStageVideoUploadBtNClick();
        //await functions.fileUploadCropper();
        
        //await tugOfWarPage.AdjustableTimer();
        
        
        
        
})

test("008TOFW-043 | Validate Countdown Background Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await page.waitForTimeout(3000);

                await tugOfWarMobilePages.validateCountdownBackgroundSuccessfullyApplied();
                     
             
             
        })


})

test("008TOFW-044 | Validate Gameplay Mainboard Message Successfully From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin') 

        await tugOfWarPage.clickTugOfWarPage();  
        await tugOfWarPage.clickStagesBtn();
        //await tugOfWarPage.NavigatetotheSelectionStage();    

        await tugOfWarPage.MoveToTheNextStageBtnClick();
        await tugOfWarPage.MoveToTheNextStageBtnClick();
        await tugOfWarPage.MoveToTheNextStageBtnClick();
        await tugOfWarPage.GameplayMainboardMessageInput();


        
        
        
        
        
})

// test("008TOFW-045 | Validate Gameplay Mainboard Message Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
//         await test.step("Login Admin And land To Home Screen", async () => {

//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')

//                 const screenshot = await page.screenshot();
//                 await testInfo.attach("login screenshot", {
//                         contentType: "image/png",
//                         body: screenshot
//                 })
//         })
//         await test.step("Click Guess The Scrore Section", async () => {
//                 await tugOfWarPage.clickTugOfWarPage()
//         })
      
//         let newTab = null;        
//         let tugOfWarMobilePages: tugOfWarMobilePage

//         await test.step("now open the game in mobile view", async () => {
//                 //click Mobile Link Btn
//                 await tugOfWarPage.clickQrCodeBtn()
//                 //now click on open button
//                 newTab = await tugOfWarPage.clickOpenLinkInNewTab()
//                 tugOfWarMobilePages = new tugOfWarMobilePage(newTab)                
                
//         })
//         await test.step("Validation on mobile Screen", async () => {

//                 await tugOfWarMobilePages.inputPhoneNumberForAditionalInfo()
//                 await tugOfWarMobilePages.clickAdditionalDatePickterInputField()
//                 await tugOfWarMobilePages.clickAdditionalDateEditBtn()
//                 await tugOfWarMobilePages.inputAdditionalDate()
//                 await tugOfWarMobilePages.clickAdditionalDateDatePickerOkBtn()

//                 await tugOfWarMobilePages.inputAgeForAditionalInfo()
//                 await tugOfWarMobilePages.inputEmailForAditionalInfo()
//                 await tugOfWarMobilePages.inputAdditionalZipCode()
//                 await tugOfWarMobilePages.clickSubmitButton()  
//                 await tugOfWarMobilePages.NavigateTotehGames()
//                 await tugOfWarMobilePages.NavigatetotheThugOFwar()           
             
             
//         })

//         await test.step("Validation on mobile Screen", async () => {
//                 await page.waitForTimeout(3000);

//                 await tugOfWarMobilePages.validateGameplayMainBoardMSGSuccessfullyApplied();
                     
             
             
//         })


// })