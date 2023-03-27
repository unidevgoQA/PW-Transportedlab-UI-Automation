import test, { expect } from "@fixtures/basePages";
import tugOfWarMobilePage from "@pages/tugOfWarMobile.page";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
import triviaPage from '../../pages/gamesPage/trivia.page';
import triviaMobilePage from '../../pages/MobileGamesPage/trivia_mobile_game.page';
import tugOfWarPage from '../../pages/gamesPage/tugOfWar.page';
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

test("008TOFW-001 | Add New Configuration.", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')


        //click Tug Of War Page
        await tugOfWarPage.clickTugOfWarPage()

        //click AddNew Config Plus Btn
        await tugOfWarPage.verifyConfigurationsText()
        await tugOfWarPage.clickAddNewConfigPlusBtn()

        //verify AddNew ConfigPlus Window Text
        await tugOfWarPage.verifyAddNewConfigPlusWindowText()
        //input Configuration Name
        await tugOfWarPage.inputConfigurationName(functions.getRandomName())
        //click Add Btn
        await tugOfWarPage.clickAddBtn()

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
test("008TOFW-005 | Validate Uploaded Font Successfully Show on Mobile Screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
                await tugOfWarPage.clickGameStartBtn()
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
                await tugOfWarPage.ClickMobileLinkPopupClose()
                await tugOfWarPage.clickGameStopBtn()



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
        await tugOfWarPage.InputRGBFirstColor()
        await tugOfWarPage.InputRGBSecondColor()
        await tugOfWarPage.InputRGBThirdColor()
        await tugOfWarPage.inputPrimaryColor()
        await tugOfWarPage.clickColorInputFieldSaveBtn()
})
test("008TOFW-007 | Validate Primary Color Successfully Applied In mobile Screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
        })

        let newTab = null;
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
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
                await page.waitForTimeout(2000)
        })

        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.screenshot_matcher_PrimaryColor()

                await tugOfWarPage.ClickMobileLinkPopupClose()


        })

})
test("008TOFW-008 | Validate Game Settings  Secondary Color Successfully Update From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
        await tugOfWarPage.clickTugOfWarPage()
        await tugOfWarPage.clickGameSettingsSection()
        await tugOfWarPage.clickClearAllBtn()
        await tugOfWarPage.verifySecondaryColorTitleText()
        await tugOfWarPage.clickSecondaryColorInputField()
        await tugOfWarPage.inputSecondaryColor()
        await tugOfWarPage.clickColorInputFieldSaveBtn()

})


test.skip("008TOFW-009 | Validate Secondary Color Successfully Applied In mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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

        // await test.step("Validation on mobile Screen", async () => {

        //         await tugOfWarMobilePages.validatePrimaryColorSuccessfullyApplied()



        // })

})
test(" 008TOFW-010 | Validate Game Settings  Text Color Successfully Update From Admin Side.", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
        await tugOfWarPage.clickTugOfWarPage()
        await tugOfWarPage.verifyConfigurationsText()
        await tugOfWarPage.clickGameSettingsSection()
        await tugOfWarPage.clickClearAllBtn()
        await tugOfWarPage.verifyTextColorTitleText()
        await tugOfWarPage.clickTextColorInputField()
        await tugOfWarPage.InputRGBFirstColor()
        await tugOfWarPage.InputRGBSecondColor()
        await tugOfWarPage.InputRGBThirdColor()
        await tugOfWarPage.InputRGBFourthColor()
        await tugOfWarPage.inputTextColor()
        await tugOfWarPage.clickColorInputFieldSaveBtn()
})
test("008TOFW-011 | Validate Text Color Successfully Applied In mobile Screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
                await tugOfWarPage.clickGameStartBtn()
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
                //await tugOfWarPage.ClickMobileLinkPopupClose()
                await page.waitForTimeout(3000)
                //await tugOfWarMobilePages.clickHomeBtn()
                await tugOfWarMobilePages.validateTextColorSuccessfullyApplied()
                await tugOfWarPage.ClickMobileLinkPopupClose()
                await tugOfWarPage.clickGameStopBtn()



        })

})


//start from here........


test(" 008TOFW-012 | Validate Title Stage Custom Mobile Waiting Message Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await tugOfWarPage.clickTugOfWarPage()
        await tugOfWarPage.verifyConfigurationsText()
        await tugOfWarPage.clickStagesBtn()

        //await tugOfWarPage.clickGameStopBtn()
        //await tugOfWarPage.verifyCustomMobileWaitingMassageTitleText()
        //await tugOfWarPage.inputCustomMobileWaitingMassage()
        await tugOfWarPage.inputCustomMobileWaitingMassage();
        await tugOfWarPage.FontSelection();
        await tugOfWarPage.ArialFontSelection();
        await tugOfWarPage.Click_Normal_H1_H2_H3_H4_H5_H6();
        await tugOfWarPage.NormalSelection();
        await tugOfWarPage.Click_Normal_H1_H2_H3_H4_H5_H6();
        await tugOfWarPage.CustomH1Selection();
        await tugOfWarPage.Click_Normal_H1_H2_H3_H4_H5_H6();
        await tugOfWarPage.CustomH2Selection();

        await tugOfWarPage.Click_Normal_H1_H2_H3_H4_H5_H6();
        await tugOfWarPage.CustomH3Selection();
        await tugOfWarPage.Click_Normal_H1_H2_H3_H4_H5_H6();
        await tugOfWarPage.CustomH4Selection();
        await tugOfWarPage.Click_Normal_H1_H2_H3_H4_H5_H6();
        await tugOfWarPage.CustomH5Selection();
        await tugOfWarPage.Click_Normal_H1_H2_H3_H4_H5_H6();
        await tugOfWarPage.CustomH6Selection();
        await tugOfWarPage.Click_Normal_H1_H2_H3_H4_H5_H6();
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

test("008TOFW-013 | Validate Custom Mobile Waiting Message Successfully Show on Mobile Screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarMobilePages.clickHomeBtn()
                await tugOfWarMobilePages.validateCustomWaitingTextSuccessfullyApplied();

        })

})
test("008TOFW-014 | Validate Sponsor Logo Image Successfully Updated From Admin Side.", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await tugOfWarPage.clickTugOfWarPage();
        await tugOfWarPage.clickGameSettingsSection()
        await tugOfWarPage.clickClearAllBtn()
        await tugOfWarPage.clickStagesBtn();
        await tugOfWarPage.clickUploadedImageDeleteBtn()
        await functions.logoImageUploadFunction();
        await tugOfWarPage.sponsorLogoUploadBtnClick();
        await functions.fileUploadCropper();
        await page.waitForTimeout(7000)

})

test(" 008TOFW-015 | Validate Sponsor Logo Image Successfully Show on Mobile Screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
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
                await page.waitForTimeout(2000)

        })

        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.screenshot_matcher_Sponsorlogo();



        })

})
test("008TOFW-016| Validate Title Stage Team Logo Successfully Updated From Admin Side.", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await tugOfWarPage.clickTugOfWarPage()
        await tugOfWarPage.clickStagesBtn();
        await tugOfWarPage.clickUploadedImageDeleteBtn()
        await functions.logoImageUploadFunction();
        await tugOfWarPage.TeamLogoUploadBTNClick();
        await functions.fileUploadCropper();
        await page.waitForTimeout(5000)

})
test("008TOFW-017 | Validate Team Logo Successfully Show on Mobile Screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
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
                await page.waitForTimeout(2000)

        })

        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.screenshot_matcher_Teamlogo();


        })

})
test.skip("008TOFW-018 | Validate Title Stage Sponsor Logo Successfully Updated From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

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

test.skip("008TOFW-019 | Validate Sponsor Logo Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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

                // await tugOfWarMobilePages.validateTextColorSuccessfullyApplied()



        })

})
test("008TOFW-020 | Validate Game Title image in Stage Title Successfully Updated From Admin Side.", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await tugOfWarPage.clickTugOfWarPage();
        await tugOfWarPage.clickStagesBtn();
        await tugOfWarPage.clickUploadedImageDeleteBtn()
        // await tugOfWarPage.clickClearAllBtn()

       await functions.portraitBackgroundImageUploadHelper()
       await tugOfWarPage.GameTitleImageClick();
       await functions.fileUploadCropper();
        await page.waitForTimeout(5000)




})
test("008TOFW-021 | Validate Game Title Image Successfully Show on Mobile Screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn();
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

                await tugOfWarMobilePages.screenshot_matcher_GameTitleImage()

        })
})


test("008TOFW-022 | Validate Title Stage Title Background image Successfully Updated From Admin Side.", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await tugOfWarPage.clickTugOfWarPage();

        await tugOfWarPage.clickStagesBtn();
        // await tugOfWarPage.clickClearAllBtn()
        await tugOfWarPage.clickUploadedImageDeleteBtn()

      await tugOfWarPage.titlebackgroundImageOptionClick();
      await tugOfWarPage.clickUploadedImageDeleteBtn()
       await functions.logoImageUploadFunction();
       await tugOfWarPage.TitleBackgroundImageUploadBTnClick();
       await functions.fileUploadCropper();
       await page.waitForTimeout(5000)
       //await tugOfWarPage.ImageDelete();
//        await tugOfWarPage.titlebackgroundVideoOptionClick();
       //await tugOfWarPage.VideoDeleteBTnClick();
//        await functions.videoUploadFunction();
//        await tugOfWarPage.VideoUploadBTNClick();
       //await functions.fileUploadCropper();





})

test("008TOFW-023 | Validate Title Background image Successfully Show on Mobile Screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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

                await tugOfWarMobilePages.screenshot_matcher_TitleBackground()



        })


})
test("008TOFW-024 | Validate Selection Stage Selection Background image Successfully Updated From Admin Side.", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
        await test.step("Navigate Tug of War Game",async()=>{
                await tugOfWarPage.clickTugOfWarPage();
        })
        await test.step("Click game stage section",async()=>{
                await tugOfWarPage.clickStagesBtn();
                await tugOfWarPage.ClickSelectionStage()
        })
        await test.step("Click selection stage",async()=>{
                await tugOfWarPage.NavigatetotheSelectionStage();
                await tugOfWarPage.clickUploadedImageDeleteBtn()
        })
        await test.step("Click selection stage",async()=>{
                await tugOfWarPage.selectionBackgroundImageSelection();
                await functions.logoImageUploadFunction();
                await tugOfWarPage.selectionBackgroundIMageUploadBTNClick();
                await functions.fileUploadCropper();
                await page.waitForTimeout(5000);
        })

        // await tugOfWarPage.selectionBackgroundIMageDeleteClick();
        // await tugOfWarPage.SlectionBackgroundVideoBTnClick();
        // await functions.videoUploadFunction();
        // await tugOfWarPage.SelectionStageVideoUploadBtNClick();
        // await functions.fileUploadCropper();
        // await tugOfWarPage.AdjustableTimer();

})


test("008TOFW-025 | Validate Selection Background Successfully Show on Mobile Screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
                await tugOfWarPage.clickGameStartBtn()
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

                //await tugOfWarMobilePages.ValidateSelectionBackground();
                     await tugOfWarMobilePages.screenshot_matcher_SelectionBackgroundImage()
                     await tugOfWarPage.ClickMobileLinkPopupClose()
                     await tugOfWarPage.clickGameStopBtn()


        })
})

test("008TOFW-026 | Validate Selection Stage Number Of Teams Successfully Updated From Admin Side.", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

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
        await tugOfWarPage.clickUploadedImageDeleteBtn()
        //await tugOfWarPage.GameStartBTNCLICK();
        // await tugOfWarPage.clickClearAllBtn()
        await functions.potraitImageUploadFunction();
        await tugOfWarPage.TEam1LogoUploadBtnClick();
        await functions.fileUploadCropper();
        await page.waitForTimeout(5000)






})

test("008TOFW-028 | Validate #1Team Logo Successfully Show on Mobile Screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
                await tugOfWarPage.clickGameStartBtn()
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
                await tugOfWarPage.ClickMobileLinkPopupClose()
                await tugOfWarPage.clickGameStopBtn()

        })


})

test("008TOFW-029 | Validate Selection Stage Name Of The #1Teams Successfully Updated From Admin Side.", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

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







// test("008TOFW-032 | Validate #1Team Name Successfully Show on Mobile Screen", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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


test("008TOFW-030 | Validate Selection Stage #2 Team Logo Successfully Updated From Admin Side.", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await tugOfWarPage.clickTugOfWarPage();
        await tugOfWarPage.clickStagesBtn();

        await tugOfWarPage.NavigatetotheSelectionStage();
        await tugOfWarPage.clickUploadedImageDeleteBtn()
        //await tugOfWarPage.GameStartBTNCLICK();
        // await tugOfWarPage.clickClearAllBtn()
        await functions.potraitImageUploadFunction();
        await tugOfWarPage.Team2LogoUploadBTNClick();
        await functions.fileUploadCropper();
        await page.waitForTimeout(5000)






})



test("008TOFW-031 | Validate #2Team Logo Successfully Show on Mobile Screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
                await tugOfWarPage.clickGameStartBtn()
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
                await tugOfWarPage.ClickMobileLinkPopupClose()
                await tugOfWarPage.clickGameStopBtn()



        })


})


test("008TOFW-032 | Validate Custom Selection Message Successfully Updated From Admin Side.", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

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


test.skip("008TOFW-033 | Validate Custom Selection Message Successfully Show on Mobile Screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
                await tugOfWarPage.clickGameStartBtn()
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
                await tugOfWarPage.ClickMobileLinkPopupClose()
                await tugOfWarPage.clickGameStopBtn()



        })


})

test("008TOFW-034 | Validate Custom Team Selection Message Successfully Updated From Admin Side.", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await tugOfWarPage.clickTugOfWarPage();
        await tugOfWarPage.clickStagesBtn();
        //await tugOfWarPage.ClickSelectionStage()

        await tugOfWarPage.NavigatetotheSelectionStage();
        await page.waitForTimeout(1000)
        //await tugOfWarPage.GameStartBTNCLICK();
        // await tugOfWarPage.clickClearAllBtn()
        //await functions.potraitImageUploadFunction();
        await tugOfWarPage.CustomTeamSelectionMessageInputField();






})



test.skip("008TOFW-035 | Validate Custom Team Selection Message Successfully Show on Mobile Screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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



test("008TOFW-036 | Validate Team Name Box color Successfully Updated From Admin Side.", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
        await tugOfWarPage.clickTugOfWarPage();
        await tugOfWarPage.verifyConfigurationsText()
        await tugOfWarPage.clickStagesBtn();
        await tugOfWarPage.NavigatetotheSelectionStage();
        await tugOfWarPage.TeamnameBoxBTNClick();
        await tugOfWarPage.ColorDrpdownClick();
        await tugOfWarPage.ColorDrpdownSolidClick();
        await tugOfWarPage.AddColor();
        await tugOfWarPage.RGB1Input();
        await tugOfWarPage.RGB2Input();
        await tugOfWarPage.RGB3Input();
        await tugOfWarPage.RGB4Input();
        await tugOfWarPage.ColorRGB5INput();
        await tugOfWarPage.RGBSaveBTnClick();






})



test("008TOFW-037 | Validate Team Name Box color Successfully Applied In mobile Screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click trivia Section", async () => {
                await tugOfWarPage.clickTugOfWarPage()
        })

        let newTab = null;
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await tugOfWarPage.clickStagesBtn()
                await tugOfWarPage.clickGameStartBtn()
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
                await page.waitForTimeout(3000)


        })

        await test.step("Validation on mobile Screen", async () => {

                await tugOfWarMobilePages.validateTeamNameBoxColorSuccessfullyApplied();
                await tugOfWarPage.ClickMobileLinkPopupClose()
                await tugOfWarPage.clickGameStopBtn()
        })

})



test("008TOFW-038 | Validate Team Selected Message Box Successfully Updated From Admin Side.", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

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
        await tugOfWarPage.RGBSaveBTnClick();
})


test.skip("008TOFW-039 | Validate Selected Team Message Box Successfully Applied In mobile Screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
                await tugOfWarPage.NavigatetotheSelectionStage()
                await tugOfWarPage.clickGameStartBtn()
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
                await page.waitForTimeout(3000)
                await tugOfWarMobilePages.ValidateTeam1SelectBTNClick()
                await tugOfWarPage.ClickMobileLinkPopupClose()
                await tugOfWarPage.clickGameStopBtn()


        })

        await test.step("Validation on mobile Screen", async () => {
                await tugOfWarPage.clickGameStartBtn()
                await tugOfWarMobilePages.validateSelectedTeamMessageBoxSuccessfullyApplied();
                await tugOfWarPage.ClickMobileLinkPopupClose()
                await tugOfWarPage.clickGameStopBtn()



        })

})


test("008TOFW-040 | Validate Navigation To The Next Stage  From Admin Side.", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await tugOfWarPage.clickTugOfWarPage();
        await tugOfWarPage.verifyConfigurationsText()
        await tugOfWarPage.clickStagesBtn();
        await tugOfWarPage.NavigatetotheSelectionStage();

        await tugOfWarPage.MoveToTheNextStageBtnClick();






})

test("008TOFW-041 | Validate Custom Countdown Message Successfully update From Admin Side.", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await tugOfWarPage.clickTugOfWarPage();
        await tugOfWarPage.verifyConfigurationsText()
        await tugOfWarPage.clickStagesBtn();
        //await tugOfWarPage.NavigatetotheSelectionStage();

        await tugOfWarPage.MoveToTheNextStageBtnClick();
        await tugOfWarPage.MoveToTheNextStageBtnClick();
        await tugOfWarPage.CustomCountDownMessageInput();







})


test("008TOFW-042 | Validate Countdown Stage Countdown Background image Successfully Updated From Admin Side.", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
        await tugOfWarPage.clickTugOfWarPage();
        await tugOfWarPage.verifyConfigurationsText()
        await tugOfWarPage.clickStagesBtn();

        await tugOfWarPage.MoveToTheNextStageBtnClick();
        await tugOfWarPage.MoveToTheNextStageBtnClick();
        // await tugOfWarPage.clickClearAllBtn()

        await tugOfWarPage.selectionBackgroundImageSelection();
        await functions.portraitBackgroundImageUploadHelper();
        await tugOfWarPage.selectionBackgroundIMageUploadBTNClick();
        await functions.fileUploadCropper();
        await page.waitForTimeout(5000);

        // await tugOfWarPage.selectionBackgroundIMageDeleteClick();
        // await tugOfWarPage.SlectionBackgroundVideoBTnClick();
        // await functions.videoUploadFunction();
        // await tugOfWarPage.SelectionStageVideoUploadBtNClick();
        //await functions.fileUploadCropper();

        //await tugOfWarPage.AdjustableTimer();




})

test("008TOFW-043 | Validate Countdown Background Successfully Show on Mobile Screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
                await tugOfWarPage.clickGameStartBtn()
                await page.waitForTimeout(1000)
                await tugOfWarPage.MoveToTheNextStageBtnClick()
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
                await tugOfWarPage.ClickMobileLinkPopupClose()
                await tugOfWarPage.clickGameStopBtn()



        })


})

test("008TOFW-044 | Validate Gameplay Mainboard Message Successfully From Admin Side", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await tugOfWarPage.clickTugOfWarPage();
        await tugOfWarPage.verifyConfigurationsText()
        await tugOfWarPage.clickStagesBtn();
        await test.step("Now click move to next button", async () => {
                await tugOfWarPage.clickGameplayStage()
        })
        await tugOfWarPage.GameplayMainboardMessageInput();

})

test.skip("008TOFW-045 | Validate Gameplay Mainboard Message Successfully Show on Mobile Screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarMobilePages.NavigateTotehGames()
                await tugOfWarMobilePages.NavigatetotheThugOFwar()


        })

        await test.step("Validation on mobile Screen", async () => {
                await page.waitForTimeout(3000);

                await tugOfWarMobilePages.validateGameplayMainBoardMSGSuccessfullyApplied();



        })


})
test("008TOFW-046 | Validate Gameplay Stage Mobile Message Successfully added from admin side.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click stage section", async () => {
                await tugOfWarPage.clickStagesBtn()
        })

        await test.step("Now click move to next button", async () => {
                await tugOfWarPage.clickGameplayStage()
                await page.waitForTimeout(2000)
        })
        await test.step("Now validate input Mobile Message in gameplay stage section", async () => {
                await tugOfWarPage.InputMobileMessageInGameplaystage()
                await tugOfWarPage.clickMobileMessageHeaderDropdown_Normal_H1_H6()
                await tugOfWarPage.CustomH1Selection()
        })
})
test.skip("008TOFW-047 | Validate Gameplay Stage Mobile Message Successfully reflection on mobile screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click stage section", async () => {
                await tugOfWarPage.clickStagesBtn()
        })
        let newTab = null;
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await tugOfWarPage.clickGameStartBtn()
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
                await page.waitForTimeout(3000)


        })
        await test.step("Now click move to next button", async () => {
               await tugOfWarPage.ClickMobileLinkPopupClose()
               for(let i = 1; i <= 2 ; i++){
                await tugOfWarPage.MoveToTheNextStageBtnClick()
            }
        })
        await test.step("Now validate gameplay background image successfully uploaded on mobile screen", async () => {
                await tugOfWarMobilePages.screenshot_matcher_Gameplay_BackgroundImage()
                await tugOfWarPage.clickGameStopBtn()
         })
})
test("008TOFW-049 | Validate Gameplay Background image Successfully added on admin side.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click Tug of War Section", async () => {
                await tugOfWarPage.clickTugOfWarPage()
        })
        await test.step("Click stage section", async () => {
                await tugOfWarPage.clickStagesBtn()
        })

        await test.step("Now click gameplay stage", async () => {
                await tugOfWarPage.clickGameplayStage()

        })
        await test.step("Now validate Gameplay Background image upload", async () => {
                await tugOfWarPage.clickImageUploadRadioBtn()
                await functions.portraitBackgroundImageUploadHelper()
                await tugOfWarPage.clickGamePlayBackgroundImageBtn()
                await functions.fileUploadCropper()
                await page.waitForTimeout(5000)

        })
})
test("008TOFW-050 | Validate Gameplay Background image Successfully reflection on mobile screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click stage section", async () => {
                await tugOfWarPage.clickStagesBtn()
        })
        let newTab = null;
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await tugOfWarPage.clickGameStartBtn()
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
                await page.waitForTimeout(3000)


        })
        await test.step("Now click move to next button", async () => {
               await tugOfWarPage.ClickMobileLinkPopupClose()
               for(let i = 1; i <= 2 ; i++){
                await tugOfWarPage.MoveToTheNextStageBtnClick()
            }
        })
        await test.step("Now validate gameplay background image successfully uploaded on mobile screen", async () => {
                await tugOfWarMobilePages.screenshot_matcher_Gameplay_BackgroundImage()
                await tugOfWarPage.clickGameStopBtn()
         })
})
test("008TOFW-051 | Validate Gameplay Background video Successfully added on admin side.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click Tug of War Section", async () => {
                await tugOfWarPage.clickTugOfWarPage()
        })
        await test.step("Click stage section", async () => {
                await tugOfWarPage.clickStagesBtn()
        })

        await test.step("Now click move to next button", async () => {
                await tugOfWarPage.clickGameplayStage()
        })
        await test.step("Now validate Gameplay Background image upload", async () => {
                await tugOfWarPage.clickUploadedImageDeleteBtn()
                await tugOfWarPage.clickVideoUploadRadioBtn()
                await functions.videoUploadFunction()
                await tugOfWarPage.clickGamePlayBackgroundImageBtn()
                await page.waitForTimeout(7000)
        })
})
test("008TOFW-052 | Validate Gameplay Background video Successfully reflection on mobile screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
        })
        let newTab = null;
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await tugOfWarPage.clickGameStartBtn()
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
                await page.waitForTimeout(3000)


        })
        await test.step("Now click move to next button", async () => {
               await tugOfWarPage.ClickMobileLinkPopupClose()
               for(let i = 1; i <= 2 ; i++){
                await tugOfWarPage.MoveToTheNextStageBtnClick()
            }
                await page.waitForTimeout(3000)
        })
        await test.step("Now validate video upload on mobile screen", async () => {
                // await tugOfWarPage.MoveToTheNextStageBtnClick()
               await tugOfWarMobilePages.CheckVideoUploaded();
               await tugOfWarPage.clickGameStopBtn()
         })
})
test("008TOFW-053 | Validate Gameplay settings Custom Power Message successfully added on admin side.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click stage section", async () => {
                await tugOfWarPage.clickStagesBtn()
        })

        await test.step("Now click gameplay stage", async () => {
               await tugOfWarPage.clickGameplayStage()
                await tugOfWarPage.clickUploadedImageDeleteBtn()
        })
        await test.step("Click stage section", async () => {
                await tugOfWarPage.inputCustomPowerMessage()
                await tugOfWarPage.ClickCustomPower_Normal_H1_H2_H3_H4_H5_H6();
                await tugOfWarPage.NormalSelection();
                await tugOfWarPage.ClickCustomPower_Normal_H1_H2_H3_H4_H5_H6();
                await tugOfWarPage.CustomH1Selection()
        })
})
test("008TOFW-054 | Validate custom power message successfully reflection on mobile screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click Tug of War Page", async () => {
                await tugOfWarPage.clickTugOfWarPage()
                await tugOfWarPage.clickStagesBtn()
        })
        let newTab = null;
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await tugOfWarPage.clickGameStartBtn()
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
                await page.waitForTimeout(3000)


        })
        await test.step("Now click move to next button", async () => {
               await tugOfWarPage.ClickMobileLinkPopupClose()
               for(let i = 1; i <= 2 ; i++){
                await tugOfWarPage.MoveToTheNextStageBtnClick()
            }
                await page.waitForTimeout(3000)
        })
        await test.step("Now validate video upload on mobile screen", async () => {
                // await tugOfWarPage.MoveToTheNextStageBtnClick()
               await tugOfWarMobilePages.VerifyCustomPowerMessage()
               await tugOfWarPage.clickGameStopBtn()
         })
})
test("008TOFW-055 | Validate Endgame Images successfully added on admin side.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click Tug of War Page", async () => {
                await tugOfWarPage.clickTugOfWarPage()
                await tugOfWarPage.clickStagesBtn()
        })
        await test.step("Now click move to next button", async () => {
                await tugOfWarPage.clickEndGameStage()
        })
        await test.step("Now validate Gameplay Background image upload", async () => {
                await tugOfWarPage.clickUploadedImageDeleteBtn()
                await tugOfWarPage.clickImageUploadRadioBtn()
                await functions.portraitBackgroundImageUploadHelper()
                await tugOfWarPage.clickEndGameImageUploadBtn()
                await functions.fileUploadCropper()
                await page.waitForTimeout(4000)
        })
})
test("008TOFW-056 | Validate Endgame Images successfully reflection on mobile screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
        })
        let newTab = null;
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await tugOfWarPage.clickGameStartBtn()
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
                await page.waitForTimeout(1000)


        })
        await test.step("Now click move to next button", async () => {
               await tugOfWarPage.ClickMobileLinkPopupClose()
                for(let i = 1; i <= 3; i++){
                        await tugOfWarPage.MoveToTheNextStageBtnClick()
                }
        })
        await test.step("Now validate gameplay background image successfully uploaded on mobile screen", async () => {
                await page.waitForTimeout(1000)
                await tugOfWarMobilePages.screenshot_matcher_Gameplay_EndGameImage()
                await tugOfWarPage.clickGameStopBtn()
         })
})
test("008TOFW-057 | Validate Endgame video successfully added on admin side.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click Tug of War Section", async () => {
                await tugOfWarPage.clickTugOfWarPage()
        })
        await test.step("Click stage section", async () => {
                await tugOfWarPage.clickStagesBtn()
        })

        await test.step("Now click Endgame stage", async () => {
                await tugOfWarPage.clickEndGameStage()
        })
        await test.step("Now validate Gameplay Background image upload", async () => {
                await tugOfWarPage.clickUploadedImageDeleteBtn()
                await tugOfWarPage.clickVideoUploadRadioBtn()
                await functions.videoUploadFunction()
                await tugOfWarPage.clickEndGameVideoUploadBtn()
                await page.waitForTimeout(7000)
        })
})
test("008TOFW-058 | Validate Endgame video successfully reflection on mobile screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click Tug of War Section", async () => {
                await tugOfWarPage.clickTugOfWarPage()
                await tugOfWarPage.clickStagesBtn()
                await tugOfWarPage.clickGameStartBtn()
        })
        let newTab = null;
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
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
                await page.waitForTimeout(3000)


        })
        await test.step("Now click move to next button", async () => {
               // await tugOfWarPage.MoveToTheNextStageBtnClick()
               await tugOfWarPage.ClickMobileLinkPopupClose()
               for(let i = 1; i <= 3; i++){
                         await tugOfWarPage.MoveToTheNextStageBtnClick()
                }
                await page.waitForTimeout(2000)
        })
        await test.step("Now validate video upload on mobile screen", async () => {
               await tugOfWarMobilePages.CheckVideoUploaded();
               await tugOfWarPage.clickGameStopBtn()
         })
})
test("008TOFW-059 | Validate Custom Endgame Message successfully added on admin side.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
        })
        await test.step("Now click Endgame stage", async () => {
                await tugOfWarPage.clickEndGameStage()
        })
         await test.step("Now validate endgame message added on admin side", async () => {
                await tugOfWarPage.inputCustomEndGameMessage()
                await tugOfWarPage.clickEndgameMessageDropdownHeader_Normal_H1_To_H6()
                await tugOfWarPage.CustomH1Selection()
        })
})
test("008TOFW-060 | Validate Custom Endgame Message successfully reflection on mobile screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click Tug of war Section", async () => {
                await tugOfWarPage.clickTugOfWarPage()
                await tugOfWarPage.clickStagesBtn()
                await tugOfWarPage.clickGameStartBtn()
        })
        let newTab = null;
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
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
                await page.waitForTimeout(3000)


        })
        await test.step("Now click move to next button", async () => {
               await tugOfWarPage.ClickMobileLinkPopupClose()
               for(let i = 1; i <= 3 ; i++){
                await tugOfWarPage.MoveToTheNextStageBtnClick()
            }
                await page.waitForTimeout(3000)
        })
        await test.step("Now validate video upload on mobile screen", async () => {
               await tugOfWarMobilePages.VerifyCustomEndgameMessage()
               await tugOfWarPage.clickGameStopBtn()
         })
})
test("008TOFW-061 | Validate Custom Winner Message successfully added on admin side.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
        })
        await test.step("Now click Endgame stage", async () => {
                await tugOfWarPage.clickEndGameStage()
        })
        await test.step("Now validate endgame message added on admin side", async () => {
               await tugOfWarPage.inputCustomWinnerMessage()
               await tugOfWarPage.clickCustomWinnerHeader_Normal_H1_To_H6()
               await tugOfWarPage.CustomH1Selection()
       })
})
test.skip("008TOFW-062 | Validate Custom Winner Message successfully reflection on mobile screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
})
test("008TOFW-063 | Validate Custom Consolation Message successfully added on admin side.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
        })
        await test.step("Now click Endgame stage", async () => {
                await tugOfWarPage.clickEndGameStage()
        })
        await test.step("Now validate endgame message added on admin side", async () => {
               await tugOfWarPage.inputCustomConsolationMessage()
               await tugOfWarPage.clickCustomCosolationHeader_Normal_H1_To_H6()
               await tugOfWarPage.CustomH1Selection()
       })
})
test("008TOFW-064 | Validate Custom Consolation Message successfully reflection on mobile screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
        })
        let newTab = null;
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                await tugOfWarPage.clickGameStartBtn()
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
                await page.waitForTimeout(3000)


        })
        await test.step("Now click move to next button", async () => {
               await tugOfWarPage.ClickMobileLinkPopupClose()
               for(let i = 1; i <= 3 ; i++){
                 await tugOfWarPage.MoveToTheNextStageBtnClick()
             }
                await page.waitForTimeout(3000)
        })
        await test.step("Now validate video upload on mobile screen", async () => {
               await tugOfWarMobilePages.VerifyCustomConsolationMessage()
               await tugOfWarPage.clickGameStopBtn()
               await tugOfWarPage.inputEndGameTimer()
         })
})
test("008TOFW-065 | Validate Leaderboard Background image successfully added on admin side.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click Tug of War Page", async () => {
                await tugOfWarPage.clickTugOfWarPage()
                await tugOfWarPage.clickStagesBtn()
        })
        await test.step("Click Leaderboard stage", async () => {
                await tugOfWarPage.clickLeaderboardStage()
        })
        await test.step("Now validate Gameplay Background image upload", async () => {
                await tugOfWarPage.clickUploadedImageDeleteBtn()
                await tugOfWarPage.clickImageUploadRadioBtn()
                await functions.portraitBackgroundImageUploadHelper()
                await tugOfWarPage.clickLeaderboardBackgroundImageBtn()
                await functions.fileUploadCropper()
                await page.waitForTimeout(4000)
        })
})
test("008TOFW-066 | Validate Leaderboard Background image successfully reflection on mobile screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
                await tugOfWarPage.clickStagesBtn()
        })
        let newTab = null;
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
                await tugOfWarPage.clickGameStartBtn()
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
                await page.waitForTimeout(3000)


        })
        await test.step("Now click move to next button", async () => {
               await tugOfWarPage.ClickMobileLinkPopupClose()
               for(let i = 1; i <=4 ; i++){
                  await tugOfWarPage.MoveToTheNextStageBtnClick()
               }
                await page.waitForTimeout(2000)
        })
        await test.step("Now validate video upload on mobile screen", async () => {
               await tugOfWarMobilePages.screenshot_matcher_Leaderboard_BackgroundImage()
               await tugOfWarPage.clickGameStopBtn()
         })
})
test("008TOFW-067 | Validate Leaderboard Background video successfully added on admin side.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click stage section", async () => {
                await tugOfWarPage.clickStagesBtn()
        })

        await test.step("Click Leaderboard stage", async () => {
                await tugOfWarPage.clickLeaderboardStage()
        })
        await test.step("Now validate Gameplay Background image upload", async () => {
                await tugOfWarPage.clickUploadedImageDeleteBtn()
                await tugOfWarPage.clickVideoUploadRadioBtn()
                await functions.videoUploadFunction()
                await tugOfWarPage.clickLeaderboardVideoUploadBtn()
                await page.waitForTimeout(7000)
        })
})
test("008TOFW-068 | Validate Leaderboard Background video successfully reflection on mobile screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click Tug of War page", async () => {
                await tugOfWarPage.clickTugOfWarPage()
        })
        await test.step("Click stage section", async () => {
                await tugOfWarPage.clickStagesBtn()
                await tugOfWarPage.clickGameStartBtn()
        })
        let newTab = null;
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
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
                await page.waitForTimeout(3000)


        })
        await test.step("Now click move to next button", async () => {
               await tugOfWarPage.ClickMobileLinkPopupClose()
               for(let i = 1; i <=4 ; i++){
                await tugOfWarPage.MoveToTheNextStageBtnClick()
             }
                await page.waitForTimeout(2000)
        })
        await test.step("Now validate video upload on mobile screen", async () => {
               await tugOfWarMobilePages.CheckVideoUploaded();
               await tugOfWarPage.clickGameStopBtn()
         })
})
test("008TOFW-069 | Validate Leaderboard Header image Upload successfully added on admin side.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click tug of war page", async () => {
                await tugOfWarPage.clickTugOfWarPage()
        })
        await test.step("Click stage section", async () => {
                await tugOfWarPage.clickStagesBtn()
        })

        await test.step("Click Leaderboard stage", async () => {
                await tugOfWarPage.clickLeaderboardStage()
        })
        await test.step("Now validate Gameplay Background image upload", async () => {
                await tugOfWarPage.clickUploadedImageDeleteBtn()
                await tugOfWarPage.clickImageUploadRadioBtn()
                await functions.portraitBackgroundImageUploadHelper()
                await tugOfWarPage.clickLeaderboardHeaderImageUploadBtn()
                await functions.fileUploadCropper()
                await page.waitForTimeout(4000)
                await tugOfWarPage.inputLeaderboardTimer()
        })
})
test.skip("008TOFW-070 | Validate Leaderboard Header image Upload successfully reflection on mobile screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click tug of  war Section", async () => {
                await tugOfWarPage.clickTugOfWarPage()
                await tugOfWarPage.clickStagesBtn()
        })
        let newTab = null;
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
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
                await page.waitForTimeout(3000)


        })
        await test.step("Now click move to next button", async () => {
               await tugOfWarPage.ClickMobileLinkPopupClose()
                await tugOfWarPage.MoveToTheNextStageBtnClick()
                await tugOfWarPage.MoveToTheNextStageBtnClick()
                await tugOfWarPage.MoveToTheNextStageBtnClick()
                await tugOfWarPage.MoveToTheNextStageBtnClick()
                await page.waitForTimeout(3000)
        })
        // await test.step("Now validate video upload on mobile screen", async () => {
        //        await tugOfWarMobilePages.CheckVideoUploaded();
        //        await tugOfWarPage.clickGameStopBtn()
        //  })
})
test("008TOFW-071 | Validate Thank You Background image Upload successfully added on admin side.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click stage section", async () => {

                await tugOfWarPage.clickStagesBtn()
        })

        await test.step("Now click Thank you stage", async () => {
                await tugOfWarPage.clickThankyouStage()

        })
        await test.step("Now validate Gameplay Background image upload", async () => {
                await tugOfWarPage.clickUploadedImageDeleteBtn()
                await tugOfWarPage.clickImageUploadRadioBtn()
                await functions.portraitBackgroundImageUploadHelper()
                await tugOfWarPage.clickThankyouBackgroundImageUploadBtn()
                await functions.fileUploadCropper()
                await page.waitForTimeout(4000)
        })
})
test("008TOFW-072 | Validate Thank You Background image Upload successfully reflection on mobile screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click tug of war Section", async () => {
                await tugOfWarPage.clickTugOfWarPage()
                await tugOfWarPage.clickStagesBtn()
                await tugOfWarPage.clickGameStartBtn()
        })
        let newTab = null;
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
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
                await page.waitForTimeout(3000)


        })
        await test.step("Now click move to next button", async () => {
               await tugOfWarPage.ClickMobileLinkPopupClose()
               for(let i = 1; i <= 5; i++){
                  await tugOfWarPage.MoveToTheNextStageBtnClick()
               }
                await page.waitForTimeout(3000)
        })
        await test.step("Now validate thank you image reflection image on mobile screen", async () => {
               await tugOfWarMobilePages.screenshot_matcher_Leaderboard_Thankyou_BackgroundImage()
               await tugOfWarPage.clickGameStopBtn()
         })
})
test("008TOFW-073 | Validate Thank You Background video Upload successfully added on admin side.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click Tug of War Section", async () => {
                await tugOfWarPage.clickTugOfWarPage()
        })
        await test.step("Click stage section", async () => {
                await tugOfWarPage.clickStagesBtn()
        })

        await test.step("Now click Thank you stage", async () => {
                await tugOfWarPage.clickThankyouStage()

        })
        await test.step("Now validate Thank you Background video upload", async () => {
                await tugOfWarPage.clickUploadedImageDeleteBtn()
                await tugOfWarPage.clickVideoUploadRadioBtn()
                await functions.videoUploadFunction()
                await tugOfWarPage.clickLeaderboardVideoUploadBtn()
                await page.waitForTimeout(7000)
        })
})
test("008TOFW-074 | Validate Thank You Background video Upload successfully reflection on mobile screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click stage section", async () => {
                await tugOfWarPage.clickStagesBtn()
                await tugOfWarPage.clickGameStartBtn()
        })
        let newTab = null;
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
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
                await page.waitForTimeout(3000)


        })
        await test.step("Now click move to next button", async () => {
               await tugOfWarPage.ClickMobileLinkPopupClose()
               for(let i = 1; i <= 5; i++){
                await tugOfWarPage.MoveToTheNextStageBtnClick()
        }
                await page.waitForTimeout(3000)
        })
        await test.step("Now validate video upload on mobile screen", async () => {
               await tugOfWarMobilePages.CheckVideoUploaded();
               await tugOfWarPage.clickGameStopBtn()
         })
})
test("008TOFW-075 | Validate Thank You Leaderboard Header Upload successfully added on admin side.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click stage section", async () => {

                await tugOfWarPage.clickStagesBtn()
        })

        await test.step("Now click Thank you stage", async () => {
                await tugOfWarPage.clickThankyouStage()

        })
        await test.step("Now validate Gameplay Background image upload", async () => {
                await tugOfWarPage.clickUploadedImageDeleteBtn()
                await tugOfWarPage.clickImageUploadRadioBtn()
                await functions.portraitBackgroundImageUploadHelper()
                await tugOfWarPage.clickThankyouLeaderboardHeaderUploadBtn()
                await functions.fileUploadCropper()
                await page.waitForTimeout(4000)
        })
})
test("008TOFW-076 | Validate Thank You Background video Upload successfully reflection on mobile screen.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click Tug of War Section", async () => {
                await tugOfWarPage.clickTugOfWarPage()
        })
        await test.step("Click stage section", async () => {

                await tugOfWarPage.clickStagesBtn()
                await tugOfWarPage.clickGameStartBtn()
        })
        let newTab = null;
        let tugOfWarMobilePages: tugOfWarMobilePage

        await test.step("now open the game in mobile view", async () => {
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
                await page.waitForTimeout(3000)


        })
        await test.step("Now click move to next button", async () => {
               await tugOfWarPage.ClickMobileLinkPopupClose()
               for(let i = 1; i <= 5; i++){
                  await tugOfWarPage.MoveToTheNextStageBtnClick()
               }
                await page.waitForTimeout(2000)
        })
        await test.step("Now validate thank you image reflection image on mobile screen", async () => {
               await tugOfWarMobilePages.screenshot_matcher_Thankyou_Leaderboard_HeaderImage()
               await tugOfWarPage.clickGameStopBtn()
         })
})
test.skip("008TOFW-077 | Validate export button in analytics section.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click Tug of War Section", async () => {
                await tugOfWarPage.clickTugOfWarPage()
        })

})
test("008TOFW-078 | Validate tug of war delete configuration.", async ({ loginPage,tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click Tug of War Section", async () => {
                await tugOfWarPage.clickTugOfWarPage()
        })
        await test.step("Click Tug of War delete Section", async () => {
                await tugOfWarPage.clickDeleteSection()
        })
        await test.step("Click click tug of war delete configuratio button", async () => {
                await tugOfWarPage.clickDeleteConfiguration()
        })

})
