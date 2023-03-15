import test, { expect } from "@fixtures/basePages";
import fanaticsFilterPage from "@pages/Fanatics-filter-Web.page";
import FanaticsFilterMobilePage from "@pages/fanaticsFilter_Mobile.page";

import { BrowserContext, webkit, devices, Page, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"





test("008TOFW-001 | Add New Configuration", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')


    //click Tug Of War Page
    await fanaticsFilterPage.clickFanaticsFilterPage();
    //await page.waitForTimeout(10000)
    await fanaticsFilterPage.AddNewConfigBtnClick();
    //await page.waitForTimeout(10000)
    
    
    await fanaticsFilterPage.inputConfigurationName(functions.getRandomName())
    await fanaticsFilterPage.AddNConfigBtnClick();
    await fanaticsFilterPage.Navigatetothegamedesign();
})
test("013FFW-002 | Validate Font Upload From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.Navigatetothegamedesign();
    await functions.fontUploadFunction();
    await fanaticsFilterPage.FontUploadBTNClick();
    await page.waitForTimeout(30000)
    await fanaticsFilterPage.SelectTheFont();
})

test("013FFW-003  | Validate Background Color Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.Navigatetothegamedesign();
    await fanaticsFilterPage.ColorBackgroundClick();
    await fanaticsFilterPage.AddColorBTNClick();
    await fanaticsFilterPage.RGB1Input();
    await fanaticsFilterPage.RGB2Input();
    await fanaticsFilterPage.RGB3Input();
    await fanaticsFilterPage.RGB4Input();
    await fanaticsFilterPage.RGB5Input();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.SolidColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.HorizontalColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.VerticalColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.DiagonalColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.RadialColorSelection();
    await fanaticsFilterPage.ColorSelectionSaveBTNClick();

})


test("013FFW-004  | Validate Loading Animation Color Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.Navigatetothegamedesign();
    await fanaticsFilterPage.LoadingAnimationColorClick();
    await fanaticsFilterPage.AddColorBTNClick();
    await fanaticsFilterPage.RGB1Input();
    await fanaticsFilterPage.RGB2Input();
    await fanaticsFilterPage.RGB3Input();
    await fanaticsFilterPage.RGB4Input();
    await fanaticsFilterPage.RGB5Input();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.SolidColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.HorizontalColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.VerticalColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.DiagonalColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.RadialColorSelection();
    await fanaticsFilterPage.ColorSelectionSaveBTNClick();

})

test("013FFW-005  | Validate Filter Icon Border Color Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.Navigatetothegamedesign();
    await fanaticsFilterPage.FilterIconBorderColorClick();
    await fanaticsFilterPage.AddColorBTNClick();
    await fanaticsFilterPage.RGB1Input();
    await fanaticsFilterPage.RGB2Input();
    await fanaticsFilterPage.RGB3Input();
    await fanaticsFilterPage.RGB4Input();
    await fanaticsFilterPage.RGB5Input();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.SolidColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.HorizontalColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.VerticalColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.DiagonalColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.RadialColorSelection();
    await fanaticsFilterPage.ColorSelectionSaveBTNClick();

})

test("013FFW-006  | Validate Filter Icon Glow Color Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.Navigatetothegamedesign();
    await fanaticsFilterPage.FilterIconGlowColorClick();
    await fanaticsFilterPage.AddColorBTNClick();
    await fanaticsFilterPage.RGB1Input();
    await fanaticsFilterPage.RGB2Input();
    await fanaticsFilterPage.RGB3Input();
    await fanaticsFilterPage.RGB4Input();
    await fanaticsFilterPage.RGB5Input();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.SolidColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.HorizontalColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.VerticalColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.DiagonalColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.RadialColorSelection();
    await fanaticsFilterPage.ColorSelectionSaveBTNClick();

})
test("013FFW-007  | Validate Panel Color Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.Navigatetothegamedesign();
    await fanaticsFilterPage.PanelColorClick();
    await fanaticsFilterPage.AddColorBTNClick();
    await fanaticsFilterPage.RGB1Input();
    await fanaticsFilterPage.RGB2Input();
    await fanaticsFilterPage.RGB3Input();
    await fanaticsFilterPage.RGB4Input();
    await fanaticsFilterPage.RGB5Input();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.SolidColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.HorizontalColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.VerticalColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.DiagonalColorSelection();
    await fanaticsFilterPage.RGBDropdownClick();
    await fanaticsFilterPage.RadialColorSelection();
    await fanaticsFilterPage.ColorSelectionSaveBTNClick();

})

test("013FFW-008  | Validate Splash Screen Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.Navigatetothegamedesign();
    await functions.bannerImageUploadFunction();
    await fanaticsFilterPage.SplashScreenUploadClick();
    await functions.fileUploadCropper();

})

test("013FFW-009  | Validate Filter Transition Screen Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.Navigatetothegamedesign();
    await functions.logoImageUploadFunction();
    await fanaticsFilterPage.FilterTransitionScreenUploadClick();
    await functions.fileUploadCropper();

})
test("013FFW-010  | Validate Camera Rotate Transition Screen Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.Navigatetothegamedesign();
    await functions.potraitImageUploadFunction();
    await fanaticsFilterPage.CameraRotateTransitionScreenUploadClick();
    await functions.fileUploadCropper();

})

test.only("013FFW-011  | Validate Filter Background Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.Navigatetothegamedesign();
    await functions.logoImageUploadFunction();
    await fanaticsFilterPage.FilterBackgrounBTNClick();
    await functions.fileUploadCropper();
    await page.waitForTimeout(4000);

})
test.skip("013FFW-012 | Validate Filter Background Uploaded Successfully Show on Mobile Screen", async ({ loginPage,fanaticsFilterPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
  
    let newTab = null;        
    let FanaticsFilterMobilePages: FanaticsFilterMobilePage

    await test.step("now open the game in mobile view", async () => {
            //click Mobile Link Btn
            await fanaticsFilterPage.QRCodeClick();
            //now click on open button
            newTab = await fanaticsFilterPage.clickOpenLinkInNewTab();
            FanaticsFilterMobilePages = new FanaticsFilterMobilePage(newTab)                
            
    })
    await test.step("Validation on mobile Screen", async () => {

            await FanaticsFilterMobilePages.inputPhoneNumberForAditionalInfo()
            await FanaticsFilterMobilePages.clickAdditionalDatePickterInputField()
            await FanaticsFilterMobilePages.clickAdditionalDateEditBtn()
            await FanaticsFilterMobilePages.inputAdditionalDate()
            await FanaticsFilterMobilePages.clickAdditionalDateDatePickerOkBtn()

            await FanaticsFilterMobilePages.inputAgeForAditionalInfo()
            await FanaticsFilterMobilePages.inputEmailForAditionalInfo()
            await FanaticsFilterMobilePages.inputAdditionalZipCode()
            await FanaticsFilterMobilePages.clickSubmitButton()          
         
         
    })

    await test.step("Validation on mobile Screen", async () => {
        await page.waitForTimeout(5000);

            await FanaticsFilterMobilePages.validateFilterBackgroundSuccessfullyApplied();
                 
         
         
     })

})

test.only("013FFW-012  | Validate Selfie Photo Frame Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.Navigatetothegamedesign();
    await functions.bannerImageUploadFunction();
    await fanaticsFilterPage.SelfiePhotoFrameUploadBTNClick();
    await functions.fileUploadCropper();

})

test.only("013FFW-013  | Validate Upload Frame Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.NavigateToTheAddBanner();
    await functions.potraitImageUploadFunction();
    await fanaticsFilterPage.UploadFrameBTNClick();
    await functions.fileUploadCropper();

})

test.only("013FFW-014  | Validate Filter 1 Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.NavigateToTheFilterSetting();
    //await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await fanaticsFilterPage.FontselecttionDropdown();
    await fanaticsFilterPage.ArialFontselecttion();
    await fanaticsFilterPage.TextDropdownClick();
    await fanaticsFilterPage.NormalTextClick();
    await fanaticsFilterPage.TextDropdownClick();
    await fanaticsFilterPage.H1TextClick();
    await fanaticsFilterPage.TextDropdownClick();
    await fanaticsFilterPage.H2TextClick();
    await fanaticsFilterPage.TextDropdownClick();
    await fanaticsFilterPage.H3TextClick();
    await fanaticsFilterPage.TextDropdownClick();
    await fanaticsFilterPage.H4TextClick();
    await fanaticsFilterPage.TextDropdownClick();
    await fanaticsFilterPage.H5TextClick();
    await fanaticsFilterPage.TextDropdownClick();
    await fanaticsFilterPage.H6TextClick();
    await fanaticsFilterPage.TextDropdownClick();
    await fanaticsFilterPage.BlockQuoteTextClick();
    await fanaticsFilterPage.BoldClick();
    await fanaticsFilterPage.ItalicClick();
    await fanaticsFilterPage.UnderlineClick();
    await fanaticsFilterPage.StrikeThroughClick();
    await fanaticsFilterPage.LeftAlignmentClick();
    await fanaticsFilterPage.CenterAlignmentClick();
    await fanaticsFilterPage.RightAlignmentClick();
    await fanaticsFilterPage.OrderedListClick();
    await fanaticsFilterPage.UnorderedListClick();
    await fanaticsFilterPage.RemoverClick();

})
test.only("013FFW-015  | Validate Filter 2 Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.NavigateToTheFilterSetting();
    //await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await fanaticsFilterPage.Filter2dropdownClick();
    await page.waitForTimeout(5000);
    await fanaticsFilterPage.ArialFontselecttion();
    await fanaticsFilterPage.Filter2TextdropdownClick();
    await fanaticsFilterPage.NormalTextClick();
    await fanaticsFilterPage.Filter2TextdropdownClick();
    await fanaticsFilterPage.H1TextClick();
    await fanaticsFilterPage.Filter2TextdropdownClick();
    await fanaticsFilterPage.H2TextClick();
    await fanaticsFilterPage.Filter2TextdropdownClick();
    await fanaticsFilterPage.H3TextClick();
    await fanaticsFilterPage.Filter2TextdropdownClick();
    await fanaticsFilterPage.H4TextClick();
    await fanaticsFilterPage.Filter2TextdropdownClick();
    await fanaticsFilterPage.H5TextClick();
    await fanaticsFilterPage.Filter2TextdropdownClick();
    await fanaticsFilterPage.H6TextClick();
    await fanaticsFilterPage.Filter2TextdropdownClick();
    await fanaticsFilterPage.BlockQuoteTextClick();
    await fanaticsFilterPage.Bold2Click();
    await fanaticsFilterPage.Italic2Click();
    await fanaticsFilterPage.Underline2Click();
    await fanaticsFilterPage.StrikeThrough2Click();
    await fanaticsFilterPage.LeftAlignment2Click();
    await fanaticsFilterPage.CenterAlignment2Click();
    await fanaticsFilterPage.RightAlignment2Click();
    await fanaticsFilterPage.OrderedList2Click();
    await fanaticsFilterPage.UnorderedList2Click();
    await fanaticsFilterPage.Remover2Click();

})
test.only("013FFW-016  | Validate Filter 3 Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.NavigateToTheFilterSetting();
    //await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await fanaticsFilterPage.Filter3dropdownClick();
    await page.waitForTimeout(5000);
    await fanaticsFilterPage.ArialFontselecttion();
    await fanaticsFilterPage.Filter3TextdropdownClick();
    await fanaticsFilterPage.NormalTextClick();
    await fanaticsFilterPage.Filter3TextdropdownClick();
    await fanaticsFilterPage.H1TextClick();
    await fanaticsFilterPage.Filter3TextdropdownClick();
    await fanaticsFilterPage.H2TextClick();
    await fanaticsFilterPage.Filter3TextdropdownClick();
    await fanaticsFilterPage.H3TextClick();
    await fanaticsFilterPage.Filter3TextdropdownClick();
    await fanaticsFilterPage.H4TextClick();
    await fanaticsFilterPage.Filter3TextdropdownClick();
    await fanaticsFilterPage.H5TextClick();
    await fanaticsFilterPage.Filter3TextdropdownClick();
    await fanaticsFilterPage.H6TextClick();
    await fanaticsFilterPage.Filter3TextdropdownClick();
    await fanaticsFilterPage.BlockQuoteTextClick();
    await fanaticsFilterPage.Bold3Click();
    await fanaticsFilterPage.Italic3Click();
    await fanaticsFilterPage.Underline3Click();
    await fanaticsFilterPage.StrikeThrough3Click();
    await fanaticsFilterPage.LeftAlignment3Click();
    await fanaticsFilterPage.CenterAlignment3Click();
    await fanaticsFilterPage.RightAlignment3Click();
    await fanaticsFilterPage.OrderedList3Click();
    await fanaticsFilterPage.UnorderedList3Click();
    await fanaticsFilterPage.Remover3Click();

})

test.only("013FFW-017  | Validate Filter 4 Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.NavigateToTheFilterSetting();
    //await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await fanaticsFilterPage.Filter4dropdownClick();
    await page.waitForTimeout(5000);
    await fanaticsFilterPage.ArialFontselecttion();
    await fanaticsFilterPage.Filter4TextdropdownClick();
    await fanaticsFilterPage.NormalTextClick();
    await fanaticsFilterPage.Filter4TextdropdownClick();
    await fanaticsFilterPage.H1TextClick();
    await fanaticsFilterPage.Filter4TextdropdownClick();
    await fanaticsFilterPage.H2TextClick();
    await fanaticsFilterPage.Filter4TextdropdownClick();
    await fanaticsFilterPage.H3TextClick();
    await fanaticsFilterPage.Filter4TextdropdownClick();
    await fanaticsFilterPage.H4TextClick();
    await fanaticsFilterPage.Filter4TextdropdownClick();
    await fanaticsFilterPage.H5TextClick();
    await fanaticsFilterPage.Filter4TextdropdownClick();
    await fanaticsFilterPage.H6TextClick();
    await fanaticsFilterPage.Filter4TextdropdownClick();
    await fanaticsFilterPage.BlockQuoteTextClick();
    await fanaticsFilterPage.Bold4Click();
    await fanaticsFilterPage.Italic4Click();
    await fanaticsFilterPage.Underline4Click();
    await fanaticsFilterPage.StrikeThrough4Click();
    await fanaticsFilterPage.LeftAlignment4Click();
    await fanaticsFilterPage.CenterAlignment4Click();
    await fanaticsFilterPage.RightAlignment4Click();
    await fanaticsFilterPage.OrderedList4Click();
    await fanaticsFilterPage.UnorderedList4Click();
    await fanaticsFilterPage.Remover4Click();

})


test.only("013FFW-018  | Validate Filter 5 Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.NavigateToTheFilterSetting();
    //await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await fanaticsFilterPage.Filter5dropdownClick();
    await page.waitForTimeout(5000);
    await fanaticsFilterPage.ArialFontselecttion();
    await fanaticsFilterPage.Filter5TextdropdownClick();
    await fanaticsFilterPage.NormalTextClick();
    await fanaticsFilterPage.Filter5TextdropdownClick();
    await fanaticsFilterPage.H1TextClick();
    await fanaticsFilterPage.Filter5TextdropdownClick();
    await fanaticsFilterPage.H2TextClick();
    await fanaticsFilterPage.Filter5TextdropdownClick();
    await fanaticsFilterPage.H3TextClick();
    await fanaticsFilterPage.Filter5TextdropdownClick();
    await fanaticsFilterPage.H4TextClick();
    await fanaticsFilterPage.Filter5TextdropdownClick();
    await fanaticsFilterPage.H5TextClick();
    await fanaticsFilterPage.Filter5TextdropdownClick();
    await fanaticsFilterPage.H6TextClick();
    await fanaticsFilterPage.Filter5TextdropdownClick();
    await fanaticsFilterPage.BlockQuoteTextClick();
    await fanaticsFilterPage.Bold5Click();
    await fanaticsFilterPage.Italic5Click();
    await fanaticsFilterPage.Underline5Click();
    await fanaticsFilterPage.StrikeThrough5Click();
    await fanaticsFilterPage.LeftAlignment5Click();
    await fanaticsFilterPage.CenterAlignment5Click();
    await fanaticsFilterPage.RightAlignment5Click();
    await fanaticsFilterPage.OrderedList5Click();
    await fanaticsFilterPage.UnorderedList5Click();
    await fanaticsFilterPage.Remover5Click();

})

test.only("013FFW-019  | Validate Filter 6 Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.NavigateToTheFilterSetting();
    //await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await fanaticsFilterPage.Filter5dropdownClick();
    await page.waitForTimeout(5000);
    await fanaticsFilterPage.ArialFontselecttion();
    await fanaticsFilterPage.Filter6TextdropdownClick();
    await fanaticsFilterPage.NormalTextClick();
    await fanaticsFilterPage.Filter6TextdropdownClick();
    await fanaticsFilterPage.H1TextClick();
    await fanaticsFilterPage.Filter6TextdropdownClick();
    await fanaticsFilterPage.H2TextClick();
    await fanaticsFilterPage.Filter6TextdropdownClick();
    await fanaticsFilterPage.H3TextClick();
    await fanaticsFilterPage.Filter6TextdropdownClick();
    await fanaticsFilterPage.H4TextClick();
    await fanaticsFilterPage.Filter6TextdropdownClick();
    await fanaticsFilterPage.H5TextClick();
    await fanaticsFilterPage.Filter6TextdropdownClick();
    await fanaticsFilterPage.H6TextClick();
    await fanaticsFilterPage.Filter6TextdropdownClick();
    await fanaticsFilterPage.BlockQuoteTextClick();
    await fanaticsFilterPage.Bold6Click();
    await fanaticsFilterPage.Italic6Click();
    await fanaticsFilterPage.Underline6Click();
    await fanaticsFilterPage.StrikeThrough6Click();
    await fanaticsFilterPage.LeftAlignment6Click();
    await fanaticsFilterPage.CenterAlignment6Click();
    await fanaticsFilterPage.RightAlignment6Click();
    await fanaticsFilterPage.OrderedList6Click();
    await fanaticsFilterPage.UnorderedList6Click();
    await fanaticsFilterPage.Remover6Click();

})
test.only("013FFW-020  | Validate Filter 7 Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {

    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    await fanaticsFilterPage.clickFanaticsFilterPage();
    await fanaticsFilterPage.NavigateToTheFilterSetting();
    //await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await fanaticsFilterPage.Filter5dropdownClick();
    await page.waitForTimeout(5000);
    await fanaticsFilterPage.ArialFontselecttion();
    await fanaticsFilterPage.Filter7TextdropdownClick();
    await fanaticsFilterPage.NormalTextClick();
    await fanaticsFilterPage.Filter7TextdropdownClick();
    await fanaticsFilterPage.H1TextClick();
    await fanaticsFilterPage.Filter7TextdropdownClick();
    await fanaticsFilterPage.H2TextClick();
    await fanaticsFilterPage.Filter7TextdropdownClick();
    await fanaticsFilterPage.H3TextClick();
    await fanaticsFilterPage.Filter7TextdropdownClick();
    await fanaticsFilterPage.H4TextClick();
    await fanaticsFilterPage.Filter7TextdropdownClick();
    await fanaticsFilterPage.H5TextClick();
    await fanaticsFilterPage.Filter7TextdropdownClick();
    await fanaticsFilterPage.H6TextClick();
    await fanaticsFilterPage.Filter7TextdropdownClick();
    await fanaticsFilterPage.BlockQuoteTextClick();
    await fanaticsFilterPage.Bold7Click();
    await fanaticsFilterPage.Italic7Click();
    await fanaticsFilterPage.Underline7Click();
    await fanaticsFilterPage.StrikeThrough7Click();
    await fanaticsFilterPage.LeftAlignment7Click();
    await fanaticsFilterPage.CenterAlignment7Click();
    await fanaticsFilterPage.RightAlignment7Click();
    await fanaticsFilterPage.OrderedList7Click();
    await fanaticsFilterPage.UnorderedList7Click();
    await fanaticsFilterPage.Remover7Click();

})