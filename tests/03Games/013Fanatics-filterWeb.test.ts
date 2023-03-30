import test, { expect } from "@fixtures/basePages";
import fanaticsFilterPage from "@pages/Fanatics-filter-Web.page";
import FanaticsFilterMobilePage from "@pages/fanaticsFilter_Mobile.page";
import { BrowserContext, webkit, devices, Page, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"
test("000 | Select All The Menu Ready For UI Varification", async ({ loginPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
    await test.step('Login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('Navigate to main menu ', async () => {
        await MainMenu.clickHomeAvater();
        await MainMenu.mainMenuBtn();
    })
    // await MainMenu.clickMobileDesign();
    await test.step('navigate to menu page', async () => {
        //Click on the menu page
        await menuPage.clickMenuPage()
    })
    //verify font text
    // await menuPage.checkFontsText();
    // //Verify upload font text
    // await menuPage.checkUploadFontText();
    // await menuPage.deleteUploadedFont()
    // await functions.fontUploadFunction()
    // await menuPage.clickToUploadFont()
    // await menuPage.verifyFontUploadedSuccessfully()
    // await menuPage.clickBackgroundColorInputField()
    // await menuPage.inputBackgroundColor()
    // await menuPage.clickColorPickerWindowSaveBtn()
    // await menuPage.clickTextColorInputField()
    // await menuPage.inputTextColor()
    // await menuPage.clickColorPickerWindowSaveBtn()
    // await menuPage.clickActiveBackgroundColorInputField()
    // await menuPage.inputActiveBackgroundColor()
    // await menuPage.clickColorPickerWindowSaveBtn()
    // await menuPage.clickActiveTextColorInputField()
    // await menuPage.inputActiveTextColor()
    // await menuPage.clickColorPickerWindowSaveBtn()
    await test.step('select bottom alignment', async () => {
        await menuPage.selectBottomAlignmentMenuBar()
    })
    await test.step('navigate to signup page', async () => {
        await singupPage.clickSignUpPage()
    })
    await test.step('select anonymous login', async () => {
        await singupPage.clickAnonymousLogin()
    })
    await test.step('select phone no check box', async () => {
        await singupPage.clickPhoneNumberCheckBox()
    })
    await test.step('Select Email address check box', async () => {
        await singupPage.clickEmailAddressCheckBox()
    })
    await test.step('select age check box', async () => {
        await singupPage.clickAgeCheckBox()
    })
    await test.step('select date of birth check box', async () => {
        await singupPage.clickDateOfBirthCheckBox()
    })
    await test.step('select postal code check box', async () => {
        await singupPage.clickPostalCodeCheckBox()
    })
})
test("0013TFFW-001 | Add New Configuration", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('click on Fanatics filter page', async () => {
        //click Tug Of War Page
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('click add new config button', async () => {
        await fanaticsFilterPage.AddNewConfigBtnClick();
    })
    //await page.waitForTimeout(10000)
    //await page.waitForTimeout(10000)
    await test.step('now click on configuration name button', async () => {
        await fanaticsFilterPage.inputConfigurationName(functions.getRandomName())
    })
    await test.step('now click on Add new config button ', async () => {
        await fanaticsFilterPage.AddNConfigBtnClick();
    })
    await test.step('Now naviage to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign();
    })
})
test("013FFW-002 | Validate Font Upload From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('click on Fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('Now navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign();
    })
    await test.step('Now click on Font upload function', async () => {
        await functions.fontUploadFunction();
    })
    await test.step('Now click on Font upload btn', async () => {
        await fanaticsFilterPage.FontUploadBTNClick();
    })
    // await page.waitForTimeout(30000)
    await test.step('Now select the font', async () => {
        await fanaticsFilterPage.SelectTheFont();
    })
    //
})
test("013FFW-003  | Validate Background Color Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Now login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('go to fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign();
    })
    await test.step('Go to background click', async () => {
        await fanaticsFilterPage.ColorBackgroundClick();
    })
    await test.step('Click add color button ', async () => {
        await fanaticsFilterPage.AddColorBTNClick();
    })
    await test.step('RGB horizontal dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.HorizontalColorSelection();
    })
    await test.step('RGB vertical dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.VerticalColorSelection();
    })
    await test.step('RGB vertical dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.DiagonalColorSelection();
    })
    await test.step('RGB Radial color section click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.RadialColorSelection();
    })
    await test.step('RGB solid dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.SolidColorSelection();
    })
    await test.step('select the last swatch', async () => {
        await fanaticsFilterPage.select_last_swatch()
    })
    await test.step('input red color', async () => {
        await fanaticsFilterPage.input_Red_Color('99');
    })
    await test.step('input blue color', async () => {
        await fanaticsFilterPage.input_blue_color('76');
    })
    await test.step('input green color', async () => {
        await fanaticsFilterPage.input_green_color('219');
    })
    await test.step('Input hex color', async () => {
        await fanaticsFilterPage.inputHEXColor('6330DBFF');
    })
    await test.step('Input color opacity', async () => {
        await fanaticsFilterPage.inputColorOpacity('100');
    })
    await test.step('click save button', async () => {
        await fanaticsFilterPage.ColorSelectionSaveBTNClick();
    })
    await test.step('wait for save to occur', async () => {
        await page.waitForSelector('//button[@aria-label="Close"]', { state: 'detached' })
    })
})
test("013FFW-004 | 	Validate Bckground Color Successfully Applied On The Mobile Screen", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step('Now check the background color', async () => {
        await FanaticsFilterMobilePages.check_background_color('(99, 219, 76)')
    })
})
test("013FFW-004  | Validate Loading Animation Color Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Now login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('go to fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign();
    })
    await test.step('Go to background click', async () => {
        await fanaticsFilterPage.LoadingAnimationColorClick();
    })
    await test.step('Click add color button ', async () => {
        await fanaticsFilterPage.AddColorBTNClick();
    })
    await test.step('RGB horizontal dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.HorizontalColorSelection();
    })
    await test.step('RGB vertical dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.VerticalColorSelection();
    })
    await test.step('RGB vertical dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.DiagonalColorSelection();
    })
    await test.step('RGB Radial color section click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.RadialColorSelection();
    })
    await test.step('RGB solid dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.SolidColorSelection();
    })
    await test.step('select the last swatch', async () => {
        await fanaticsFilterPage.select_last_swatch()
    })
    await test.step('input red color', async () => {
        await fanaticsFilterPage.input_Red_Color('182');
    })
    await test.step('input blue color', async () => {
        await fanaticsFilterPage.input_blue_color('63');
    })
    await test.step('input green color', async () => {
        await fanaticsFilterPage.input_green_color('202');
    })
    await test.step('Input hex color', async () => {
        await fanaticsFilterPage.inputHEXColor('B73FCAFF');
    })
    await test.step('Input color opacity', async () => {
        await fanaticsFilterPage.inputColorOpacity('100');
    })
    await test.step('click save button', async () => {
        await fanaticsFilterPage.ColorSelectionSaveBTNClick();
    })
    await test.step('wait for save to occur', async () => {
        await page.waitForSelector('//button[@aria-label="Close"]', { state: 'detached' })
    })
})
//not implemented yet
test.skip("013FFW-006 | 	Validate Loading Animation Color Successfully Applied On The Mobile Screen", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step('Now check Loading animation color', async () => {
        //code here
    })
})
test("013FFW-005  | Validate Filter Icon Border Color Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Now login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('go to fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign();
    })
    await test.step('Go to background click', async () => {
        await fanaticsFilterPage.FilterIconBorderColorClick()
    })
    await test.step('Click add color button ', async () => {
        await fanaticsFilterPage.AddColorBTNClick();
    })
    await test.step('RGB horizontal dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.HorizontalColorSelection();
    })
    await test.step('RGB vertical dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.VerticalColorSelection();
    })
    await test.step('RGB vertical dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.DiagonalColorSelection();
    })
    await test.step('RGB Radial color section click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.RadialColorSelection();
    })
    await test.step('RGB solid dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.SolidColorSelection();
    })
    await test.step('select the last swatch', async () => {
        await fanaticsFilterPage.select_last_swatch()
    })
    await test.step('input red color', async () => {
        await fanaticsFilterPage.input_Red_Color('0');
    })
    await test.step('input blue color', async () => {
        await fanaticsFilterPage.input_blue_color('0');
    })
    await test.step('input green color', async () => {
        await fanaticsFilterPage.input_green_color('0');
    })
    await test.step('Input hex color', async () => {
        await fanaticsFilterPage.inputHEXColor('000000FF');
    })
    await test.step('Input color opacity', async () => {
        await fanaticsFilterPage.inputColorOpacity('100');
    })
    await test.step('click save button', async () => {
        await fanaticsFilterPage.ColorSelectionSaveBTNClick();
    })
    await test.step('wait for save to occur', async () => {
        await page.waitForSelector('//button[@aria-label="Close"]', { state: 'detached' })
    })
})
test("013FFW-008 |	 Validate Filter Icon Border Color Successfully Applied On The Mobile Screen", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step('Now check Loading animation color', async () => {
        //code here
        await FanaticsFilterMobilePages.check_border_color()
    })
})
test("013FFW-006  | Validate Filter Icon Glow Color Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Now login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('go to fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign();
    })
    await test.step('Go to background click', async () => {
        await fanaticsFilterPage.ColorBackgroundClick();
    })
    await test.step('Click add color button ', async () => {
        await fanaticsFilterPage.AddColorBTNClick();
    })
    await test.step('RGB horizontal dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.HorizontalColorSelection();
    })
    await test.step('RGB vertical dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.VerticalColorSelection();
    })
    await test.step('RGB vertical dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.DiagonalColorSelection();
    })
    await test.step('RGB Radial color section click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.RadialColorSelection();
    })
    await test.step('RGB solid dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.SolidColorSelection();
    })
    await test.step('select the last swatch', async () => {
        await fanaticsFilterPage.select_last_swatch()
    })
    await test.step('input red color', async () => {
        await fanaticsFilterPage.input_Red_Color('140');
    })
    await test.step('input blue color', async () => {
        await fanaticsFilterPage.input_blue_color('134');
    })
    await test.step('input green color', async () => {
        await fanaticsFilterPage.input_green_color('134');
    })
    await test.step('Input hex color', async () => {
        await fanaticsFilterPage.inputHEXColor('8C8686FF');
    })
    await test.step('Input color opacity', async () => {
        await fanaticsFilterPage.inputColorOpacity('100');
    })
    await test.step('click save button', async () => {
        await fanaticsFilterPage.ColorSelectionSaveBTNClick();
    })
    await test.step('wait for save to occur', async () => {
        await page.waitForSelector('//button[@aria-label="Close"]', { state: 'detached' })
    })
})
test("013FFW-007  | Validate Panel Color Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Now login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('go to fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign();
    })
    await test.step('Go to background click', async () => {
        await fanaticsFilterPage.PanelColorClick()
    })
    await test.step('Click add color button ', async () => {
        await fanaticsFilterPage.AddColorBTNClick();
    })
    await test.step('RGB horizontal dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.HorizontalColorSelection();
    })
    await test.step('RGB vertical dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.VerticalColorSelection();
    })
    await test.step('RGB vertical dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.DiagonalColorSelection();
    })
    await test.step('RGB Radial color section click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.RadialColorSelection();
    })
    await test.step('RGB solid dropdown click', async () => {
        await fanaticsFilterPage.RGBDropdownClick();
        await fanaticsFilterPage.SolidColorSelection();
    })
    await test.step('select the last swatch', async () => {
        await fanaticsFilterPage.select_last_swatch()
    })
    await test.step('input red color', async () => {
        await fanaticsFilterPage.input_Red_Color('87');
    })
    await test.step('input blue color', async () => {
        await fanaticsFilterPage.input_blue_color('124');
    })
    await test.step('input green color', async () => {
        await fanaticsFilterPage.input_green_color('152');
    })
    await test.step('Input hex color', async () => {
        await fanaticsFilterPage.inputHEXColor('577C98FF');
    })
    await test.step('Input color opacity', async () => {
        await fanaticsFilterPage.inputColorOpacity('100');
    })
    await test.step('click save button', async () => {
        await fanaticsFilterPage.ColorSelectionSaveBTNClick();
    })
    await test.step('wait for save to occur', async () => {
        await page.waitForSelector('//button[@aria-label="Close"]', { state: 'detached' })
    })
})
test("013FFW-012 | 	Validate Panel Color Successfully Applied On The Mobile Screen", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step('Now check Loading animation color', async () => {
        //code here
        await FanaticsFilterMobilePages.check_panel_color("(87, 152, 124)")
    })
})
test("013FFW-008  | Validate Splash Screen Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('Click on fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('click on game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign();
    })
    await test.step('image upload function', async () => {
        await functions.bannerImageUploadFunction();
    })
    await test.step('splash screen upload click', async () => {
        await fanaticsFilterPage.SplashScreenUploadClick();
    })
    await test.step('Click on file upload cropper', async () => {
        await functions.fileUploadCropper();
    })
    await test.step('wait for upload to complete', async () => {
        await fanaticsFilterPage.wait_for_splash_screen_image()
    })
})
test("013FFW-014 |	 Validate Splash Screen Image Successfully Applied On The Mobile Screen", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step('Now check splash screen', async () => {
        //code here
        await FanaticsFilterMobilePages.check_splash_screen()
    })
})
test("013FFW-009  | Validate Filter Transition Screen Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Now login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('Check fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign();
    })
    await test.step('Go to game design', async () => {
        await functions.logoImageUploadFunction();
    })
    await test.step('Now click on Filter transition page', async () => {
        await fanaticsFilterPage.FilterTransitionScreenUploadClick();
    })
    await test.step('click on file upload cropper', async () => {
        await functions.fileUploadCropper();
    })
    await test.step('wait for upload to complete', async () => {
        await fanaticsFilterPage.wait_for_FilterTransitionScreen_image()
    })
})
test("013FFW-020 | 	Validate Filter Transition Screen Image Successfully Applied On The Mobile Screen", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step("Now change the filter", async () => {
        await FanaticsFilterMobilePages.change_filter()
    })
    await test.step('Now check splash screen', async () => {
        //code here
        await FanaticsFilterMobilePages.check_filter_transition_screen()
    })
})
test("013FFW-010  | Validate Camera Rotate Transition Screen Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('Navigate to Fanatics page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('Go to game desing', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign();
    })
    await test.step('portrait image upload', async () => {
        await functions.potraitImageUploadFunction();
    })
    await test.step('Navigate to camera rotate transition', async () => {
        await fanaticsFilterPage.CameraRotateTransitionScreenUploadClick();
    })
    await test.step('click on file upload upload cropper', async () => {
        await functions.fileUploadCropper();
    })
    await test.step('wait for upload to complete', async () => {
        await fanaticsFilterPage.wait_for_camera_rotate_transition_image()
    })
})
test.skip("013FFW-016 | 	Validate Camera Rotate Transition Screen Image Successfully Applied On The Mobile Screen", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Now login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('Check fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign();
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step('wait for load and click on camera rotate transition screen', async () => {
        await FanaticsFilterMobilePages.click_camera_rotate_transition()
    })
    await test.step('Now check camera rotate transtion screen', async () => {
        //code here
        // await FanaticsFilterMobilePages.check_camerarotate_transtion_screen()
    })
})
test("013FFW-011  | Validate Filter Background Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('Click on fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('click to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign();
    })
    await test.step('ready logo image upload function', async () => {
        await functions.logoImageUploadFunction();
    })
    await test.step('Filter background button click', async () => {
        await fanaticsFilterPage.FilterBackgrounBTNClick();
    })
    await test.step('file upload cropper click', async () => {
        await functions.fileUploadCropper();
    })
    await test.step('wait for upload to complete', async () => {
        await fanaticsFilterPage.wait_for_FilterBackground_image()
    })
})
test("013FFW-012 | Validate Filter Background Uploaded Successfully Show on Mobile Screen", async ({ loginPage, fanaticsFilterPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
    await test.step("click on game design", async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step("Validation on mobile Screen", async () => {
        await FanaticsFilterMobilePages.validateFilterBackgroundSuccessfullyApplied();
    })
})
test("013FFW-012  | Validate Selfie Photo Frame Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('click on admin page', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('click on fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('click on game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign();
    })
    await test.step(' image upload function', async () => {
        await functions.bannerImageUploadFunction();
    })
    await test.step('click on selfied photo frame upload button', async () => {
        await fanaticsFilterPage.SelfiePhotoFrameUploadBTNClick();
    })
    await test.step('click on file upload cropper', async () => {
        await functions.fileUploadCropper();
    })
    await test.step('wait for upload to complete', async () => {
        await fanaticsFilterPage.wait_for_SelfiePhotoFrameUpload_image()
    })
})
test("013FFW-013  | Validate Upload Frame Updated From The Admin Side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('login on admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('check fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('click on add banner', async () => {
        await fanaticsFilterPage.NavigateToTheAddBanner();
    })
    await test.step('ready portrait image upload function', async () => {
        await functions.potraitImageUploadFunction();
    })
    await test.step('click on upload frame button', async () => {
        await fanaticsFilterPage.UploadFrameBTNClick();
    })
    await test.step('click on file upload cropper', async () => {
        await functions.fileUploadCropper();
    })
    await test.step('wait for upload to complete', async () => {
        await page.waitForLoadState('networkidle')
    })
})
test("013FFW-027 | 	Validate the Alien filter is updated successfully from the admin side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step("click on login", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step("click on Fanatics filter page", async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('Go to filter setting page', async () => {
        await fanaticsFilterPage.NavigateToTheFilterSetting();
        // await fanaticsFilterPage.Filter1TextInputField('ALllllien');
    })
    await test.step("click on Font selection drop down", async () => {
        //await page.waitForTimeout(5000);
        await fanaticsFilterPage.FontselecttionDropdown();
        await fanaticsFilterPage.ArialFontselecttion();
    })
    await test.step('select normal text', async () => {
        await fanaticsFilterPage.TextDropdownClick();
        await fanaticsFilterPage.NormalTextClick();
    })
    await test.step("select H1 Text", async () => {
        await fanaticsFilterPage.TextDropdownClick();
        await fanaticsFilterPage.H1TextClick();
    })
    await test.step('Select H2 text', async () => {
        await fanaticsFilterPage.TextDropdownClick();
        await fanaticsFilterPage.H2TextClick();
    })
    await test.step('Select H3 text', async () => {
        await fanaticsFilterPage.TextDropdownClick();
        await fanaticsFilterPage.H3TextClick();
    })
    await test.step('Select H4 text', async () => {
        await fanaticsFilterPage.TextDropdownClick();
        await fanaticsFilterPage.H4TextClick();
    })
    await test.step('Select H5 text', async () => {
        await fanaticsFilterPage.TextDropdownClick();
        await fanaticsFilterPage.H5TextClick();
    })
    await test.step("select H6 text", async () => {
        await fanaticsFilterPage.TextDropdownClick();
        await fanaticsFilterPage.H6TextClick();
    })
    await test.step("Select block quote text", async () => {
        await fanaticsFilterPage.TextDropdownClick();
        await fanaticsFilterPage.BlockQuoteTextClick();
    })
    await test.step("select bold text", async () => {
        await fanaticsFilterPage.BoldClick();
    })
    await test.step("select italic text", async () => {
        await fanaticsFilterPage.ItalicClick();
    })
    await test.step("underline click", async () => {
        await fanaticsFilterPage.UnderlineClick();
    })
    await test.step("click strike through", async () => {
        await fanaticsFilterPage.StrikeThroughClick();
    })
    await test.step("click left alignment", async () => {
        await fanaticsFilterPage.LeftAlignmentClick();
    })
    await test.step("click center alignment", async () => {
        await fanaticsFilterPage.CenterAlignmentClick();
    })
    await test.step("click right alignment ", async () => {
        await fanaticsFilterPage.RightAlignmentClick();
    })
    await test.step("click ordered list", async () => {
        await fanaticsFilterPage.OrderedListClick();
    })
    await test.step("click unordered list", async () => {
        await fanaticsFilterPage.UnorderedListClick();
    })
    await test.step("click Remove button", async () => {
        await fanaticsFilterPage.RemoverClick();
    })
})
//change mobiles from here accorindly
test("013FFW-028 | 	Validate the Alien filter updated successfully visible on the mobile side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step("Now change the filter", async () => {
        await FanaticsFilterMobilePages.change_filter_alien()
    })
})
test("013FFW-029 | 	Validate the BigStar filter is updated successfully from the admin side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step("click on login", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step("click on Fanatics filter page", async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('Go to filter setting page', async () => {
        await fanaticsFilterPage.NavigateToTheFilterSetting();
    })
    await test.step("click on Font selection drop down", async () => {
        //await page.waitForTimeout(5000);
        await fanaticsFilterPage.FontselecttionDropdown()
        await fanaticsFilterPage.ArialFontselecttion();
    })
    await test.step('select normal text', async () => {
        await fanaticsFilterPage.Filter2TextdropdownClick();
        await fanaticsFilterPage.H1TextClick();
    })
    await test.step('Select H2 text', async () => {
        await fanaticsFilterPage.Filter2TextdropdownClick();
        await fanaticsFilterPage.H2TextClick();
    })
    await test.step('Select H3 text', async () => {
        await fanaticsFilterPage.Filter2TextdropdownClick();
        await fanaticsFilterPage.H3TextClick();
    })
    await test.step('Select H4 text', async () => {
        await fanaticsFilterPage.Filter2TextdropdownClick();
        await fanaticsFilterPage.H4TextClick();
    })
    await test.step('Select H5 text', async () => {
        await fanaticsFilterPage.Filter2TextdropdownClick();
        await fanaticsFilterPage.H5TextClick();
    })
    await test.step("select H6 text", async () => {
        await fanaticsFilterPage.Filter2TextdropdownClick();
        await fanaticsFilterPage.H6TextClick();
    })
    await test.step("Select block quote text", async () => {
        await fanaticsFilterPage.Filter2TextdropdownClick();
        await fanaticsFilterPage.BlockQuoteTextClick();
    })
    await test.step("select bold text", async () => {
        await fanaticsFilterPage.Bold2Click();
    })
    await test.step("select italic text", async () => {
        await fanaticsFilterPage.Italic2Click();
    })
    await test.step("underline click", async () => {
        await fanaticsFilterPage.Underline2Click();
    })
    await test.step("click strike through", async () => {
        await fanaticsFilterPage.StrikeThrough2Click();
    })
    await test.step("click left alignment", async () => {
        await fanaticsFilterPage.LeftAlignment2Click();
    })
    await test.step("click center alignment", async () => {
        await fanaticsFilterPage.CenterAlignment2Click();
    })
    await test.step("click right alignment ", async () => {
        await fanaticsFilterPage.RightAlignment2Click();
    })
    await test.step("click ordered list", async () => {
        await fanaticsFilterPage.OrderedList2Click();
    })
    await test.step("click unordered list", async () => {
        await fanaticsFilterPage.UnorderedList2Click();
    })
    await test.step("click Remove button", async () => {
        await fanaticsFilterPage.Remover2Click();
    })
})
test("013FFW-030 | 	Validate the BigStar filter updated successfully visible on the mobile side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step("Now change the filter", async () => {
        await FanaticsFilterMobilePages.change_filter_bigstar()
    })
})
test("013FFW-041 | 	Validate the Girl Elf filter is updated successfully from the admin sidee", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Navigate to login', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('Select fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('select navigate to filter setting', async () => {
        await fanaticsFilterPage.NavigateToTheFilterSetting();
    })
    //await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await test.step('Select filter 5 dropdown click', async () => {
        await fanaticsFilterPage.Filter5dropdownClick();
    })
    await test.step('select arial font select', async () => {
        await fanaticsFilterPage.ArialFontselecttion();
    })
    await test.step('select normal text ', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.NormalTextClick();
    })
    await test.step('Select h1 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H1TextClick();
    })
    await test.step('Select h2 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H2TextClick();
    })
    await test.step('Select h3 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H3TextClick();
    })
    await test.step('Select h4 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H4TextClick();
    })
    await test.step('Select h5 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H5TextClick();
    })
    await test.step('Select h6 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H6TextClick();
    })
    await test.step('Select block quote text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.BlockQuoteTextClick();
    })
    await test.step('select bold 7 click', async () => {
        await fanaticsFilterPage.Bold7Click();
    })
    await test.step('Select italic click', async () => {
        await fanaticsFilterPage.Italic7Click();
    })
    await test.step('select underline 7 click', async () => {
        await fanaticsFilterPage.Underline7Click();
    })
    await test.step('select strike through click', async () => {
        await fanaticsFilterPage.StrikeThrough7Click();
    })
    await test.step('Select left alignment 7 click', async () => {
        await fanaticsFilterPage.LeftAlignment7Click();
    })
    await test.step('Select center alignment 7 click', async () => {
        await fanaticsFilterPage.CenterAlignment7Click();
    })
    await test.step('Select right alignment click', async () => {
        await fanaticsFilterPage.RightAlignment7Click();
    })
    await test.step('Select ordered list click', async () => {
        await fanaticsFilterPage.OrderedList7Click();
    })
    await test.step('select unordered list click', async () => {
        await fanaticsFilterPage.UnorderedList7Click();
    })
    await test.step('select remove 7 click', async () => {
        await fanaticsFilterPage.Remover7Click();
    })
})
test("013FFW-032 | 	Validate the Girl Elf filter updated successfully visible on the mobile side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step("Now change the filter", async () => {
        await FanaticsFilterMobilePages.change_filter_Girlelf()
    })
})
test("013FFW-033 | 	Validate the RudolphDeer filter is updated successfully from the admin side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('naviagato to fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('navigate to filter setting', async () => {
        await fanaticsFilterPage.NavigateToTheFilterSetting();
    })
    //await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await test.step('Click on filter 3 drop down', async () => {
        await fanaticsFilterPage.Filter3dropdownClick();
        await fanaticsFilterPage.ArialFontselecttion();
    })
    await test.step('select normal text', async () => {
        await fanaticsFilterPage.Filter3TextdropdownClick();
        await fanaticsFilterPage.NormalTextClick();
    })
    await test.step('select H1 text', async () => {
        await fanaticsFilterPage.Filter3TextdropdownClick();
        await fanaticsFilterPage.H1TextClick();
    })
    await test.step('select h2 text', async () => {
        await fanaticsFilterPage.Filter3TextdropdownClick();
        await fanaticsFilterPage.H2TextClick();
    })
    await test.step('Select h3 text', async () => {
        await fanaticsFilterPage.Filter3TextdropdownClick();
        await fanaticsFilterPage.H3TextClick();
    })
    await test.step('select h4 text', async () => {
        await fanaticsFilterPage.Filter3TextdropdownClick();
        await fanaticsFilterPage.H4TextClick();
    })
    await test.step('select h5 text', async () => {
        await fanaticsFilterPage.Filter3TextdropdownClick();
        await fanaticsFilterPage.H5TextClick();
    })
    await test.step('select h6 text', async () => {
        await fanaticsFilterPage.Filter3TextdropdownClick();
        await fanaticsFilterPage.H6TextClick();
    })
    await test.step('select block quote text', async () => {
        await fanaticsFilterPage.Filter3TextdropdownClick();
        await fanaticsFilterPage.BlockQuoteTextClick();
    })
    await test.step('select bold 3 ', async () => {
        await fanaticsFilterPage.Bold3Click();
    })
    await test.step('select italic click', async () => {
        await fanaticsFilterPage.Italic3Click();
    })
    await test.step('click underline', async () => {
        await fanaticsFilterPage.Underline3Click();
    })
    await test.step('strike through 3 click', async () => {
        await fanaticsFilterPage.StrikeThrough3Click();
    })
    await test.step('Left alignment 3 click', async () => {
        await fanaticsFilterPage.LeftAlignment3Click();
    })
    await test.step('center alignment 3 click', async () => {
        await fanaticsFilterPage.CenterAlignment3Click();
    })
    await test.step('Right alignment 3 click', async () => {
        await fanaticsFilterPage.RightAlignment3Click();
    })
    await test.step('Ordered list 3 click', async () => {
        await fanaticsFilterPage.OrderedList3Click();
    })
    await test.step('Un ordered list 3 click', async () => {
        await fanaticsFilterPage.UnorderedList3Click();
    })
    await test.step('Remove 3 click', async () => {
        await fanaticsFilterPage.Remover3Click();
    })
})
test("013FFW-034 | 	Validate the RudolphDeer filter updated successfully visible on the mobile side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step("Now change the filter", async () => {
        await FanaticsFilterMobilePages.change_filter_Rodolf_deer()
    })
})
test("013FFW-035 | 	Validate the BigShot filter is updated successfully from the admin side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('Click on fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('Navigate to filter setting', async () => {
        await fanaticsFilterPage.NavigateToTheFilterSetting();
    })
    //await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await test.step('Click filter 4 dropdown', async () => {
        await fanaticsFilterPage.Filter4dropdownClick();
    })
    await test.step('Select arial font selection', async () => {
        await fanaticsFilterPage.ArialFontselecttion();
    })
    await test.step('Filter 4 text dropdown click', async () => {
        await fanaticsFilterPage.Filter4TextdropdownClick();
    })
    await test.step('select normal text', async () => {
        await fanaticsFilterPage.NormalTextClick();
    })
    await test.step('select h1 text', async () => {
        await fanaticsFilterPage.Filter4TextdropdownClick();
        await fanaticsFilterPage.H1TextClick();
    })
    await test.step('Select H2 text click', async () => {
        await fanaticsFilterPage.Filter4TextdropdownClick();
        await fanaticsFilterPage.H2TextClick();
    })
    await test.step("Select H3 text", async () => {
        await fanaticsFilterPage.Filter4TextdropdownClick();
        await fanaticsFilterPage.H3TextClick();
    })
    await test.step("Select H4 text", async () => {
        await fanaticsFilterPage.Filter4TextdropdownClick();
        await fanaticsFilterPage.H4TextClick();
    })
    await test.step("select h5 text", async () => {
        await fanaticsFilterPage.Filter4TextdropdownClick();
        await fanaticsFilterPage.H5TextClick();
    })
    await test.step('Select h6 text', async () => {
        await fanaticsFilterPage.Filter4TextdropdownClick();
        await fanaticsFilterPage.H6TextClick();
    })
    await test.step('select blockQuote text', async () => {
        await fanaticsFilterPage.Filter4TextdropdownClick();
        await fanaticsFilterPage.BlockQuoteTextClick();
    })
    await test.step('Select bold 4', async () => {
        await fanaticsFilterPage.Bold4Click();
    })
    await test.step('select Italic 4', async () => {
        await fanaticsFilterPage.Italic4Click();
    })
    await test.step('underline 4 click', async () => {
        await fanaticsFilterPage.Underline4Click();
    })
    await test.step('Strike through 4 click', async () => {
        await fanaticsFilterPage.StrikeThrough4Click();
    })
    await test.step('Left alignment 4 click', async () => {
        await fanaticsFilterPage.LeftAlignment4Click();
    })
    await test.step('center alignment 4 click', async () => {
        await fanaticsFilterPage.CenterAlignment4Click();
    })
    await test.step("Right alignment 4 click", async () => {
        await fanaticsFilterPage.RightAlignment4Click();
    })
    await test.step("Ordered list click", async () => {
        await fanaticsFilterPage.OrderedList4Click();
    })
    await test.step("unordered list 4 click", async () => {
        await fanaticsFilterPage.UnorderedList4Click();
    })
    await test.step("remove 4 click", async () => {
        await fanaticsFilterPage.Remover4Click();
    })
})
test("013FFW-036 |	 Validate the BigShot filter updated successfully visible on the mobile side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step("Now change the filter", async () => {
        await FanaticsFilterMobilePages.change_filter_bigshot()
    })
})
test("013FFW-037 | 	Validate the ChristmasElf filter is updated successfully from the admin side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('Go to fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('Navigate to filter setting page', async () => {
        await fanaticsFilterPage.NavigateToTheFilterSetting();
    })
    //await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await test.step('Select Filter 5 drop down filter', async () => {
        await fanaticsFilterPage.Filter5dropdownClick();
    })
    await test.step('select arial Font', async () => {
        await fanaticsFilterPage.ArialFontselecttion();
    })
    await test.step('click Normal text ', async () => {
        await fanaticsFilterPage.Filter5TextdropdownClick();
        await fanaticsFilterPage.NormalTextClick();
    })
    await test.step('Click H1 text', async () => {
        await fanaticsFilterPage.Filter5TextdropdownClick();
        await fanaticsFilterPage.H1TextClick();
    })
    await test.step('click h2 text', async () => {
        await fanaticsFilterPage.Filter5TextdropdownClick();
        await fanaticsFilterPage.H2TextClick();
    })
    await test.step('click h3 text', async () => {
        await fanaticsFilterPage.Filter5TextdropdownClick();
        await fanaticsFilterPage.H3TextClick();
    })
    await test.step('click h4 text', async () => {
        await fanaticsFilterPage.Filter5TextdropdownClick();
        await fanaticsFilterPage.H4TextClick();
    })
    await test.step('click h5 text', async () => {
        await fanaticsFilterPage.Filter5TextdropdownClick();
        await fanaticsFilterPage.H5TextClick();
    })
    await test.step('click h6 text', async () => {
        await fanaticsFilterPage.Filter5TextdropdownClick();
        await fanaticsFilterPage.H6TextClick();
    })
    await test.step('click blockquote text', async () => {
        await fanaticsFilterPage.Filter5TextdropdownClick();
        await fanaticsFilterPage.BlockQuoteTextClick();
    })
    await test.step('select bold click', async () => {
        await fanaticsFilterPage.Bold5Click();
    })
    await test.step('select italic click', async () => {
        await fanaticsFilterPage.Italic5Click();
    })
    await test.step('select underline 5 click', async () => {
        await fanaticsFilterPage.Underline5Click();
    })
    await test.step('select strike through 5 click', async () => {
        await fanaticsFilterPage.StrikeThrough5Click();
    })
    await test.step('select left alignment 5 click', async () => {
        await fanaticsFilterPage.LeftAlignment5Click();
    })
    await test.step('select central alignment click', async () => {
        await fanaticsFilterPage.CenterAlignment5Click();
    })
    await test.step('Select right alignment click', async () => {
        await fanaticsFilterPage.RightAlignment5Click();
    })
    await test.step('Select ordered list', async () => {
        await fanaticsFilterPage.OrderedList5Click();
    })
    await test.step('select unordered list', async () => {
        await fanaticsFilterPage.UnorderedList5Click();
    })
    await test.step('Select remove click', async () => {
        await fanaticsFilterPage.Remover5Click();
    })
})
test("013FFW-038 |	 Validate the ChristmasElf filter updated successfully visible on the mobile side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step("Now change the filter", async () => {
        await FanaticsFilterMobilePages.change_filter_christmas_elf()
    })
})
test("013FFW-041 | 	Validate the moviemind filter is updated successfully from the admin sidee", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Navigate to login', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('Select fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('select navigate to filter setting', async () => {
        await fanaticsFilterPage.NavigateToTheFilterSetting();
    })
    //await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await test.step('Select filter 5 dropdown click', async () => {
        await fanaticsFilterPage.Filter5dropdownClick();
    })
    await test.step('select arial font select', async () => {
        await fanaticsFilterPage.ArialFontselecttion();
    })
    await test.step('select normal text ', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.NormalTextClick();
    })
    await test.step('Select h1 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H1TextClick();
    })
    await test.step('Select h2 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H2TextClick();
    })
    await test.step('Select h3 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H3TextClick();
    })
    await test.step('Select h4 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H4TextClick();
    })
    await test.step('Select h5 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H5TextClick();
    })
    await test.step('Select h6 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H6TextClick();
    })
    await test.step('Select block quote text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.BlockQuoteTextClick();
    })
    await test.step('select bold 7 click', async () => {
        await fanaticsFilterPage.Bold7Click();
    })
    await test.step('Select italic click', async () => {
        await fanaticsFilterPage.Italic7Click();
    })
    await test.step('select underline 7 click', async () => {
        await fanaticsFilterPage.Underline7Click();
    })
    await test.step('select strike through click', async () => {
        await fanaticsFilterPage.StrikeThrough7Click();
    })
    await test.step('Select left alignment 7 click', async () => {
        await fanaticsFilterPage.LeftAlignment7Click();
    })
    await test.step('Select center alignment 7 click', async () => {
        await fanaticsFilterPage.CenterAlignment7Click();
    })
    await test.step('Select right alignment click', async () => {
        await fanaticsFilterPage.RightAlignment7Click();
    })
    await test.step('Select ordered list click', async () => {
        await fanaticsFilterPage.OrderedList7Click();
    })
    await test.step('select unordered list click', async () => {
        await fanaticsFilterPage.UnorderedList7Click();
    })
    await test.step('select remove 7 click', async () => {
        await fanaticsFilterPage.Remover7Click();
    })
})
test("013FFW-042 |	Validate the moviemind filter updated successfully visible on the mobile side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step("Now change the filter", async () => {
        await FanaticsFilterMobilePages.change_filter_movie_mind()
    })
})
test("013FFW-039 | 	Validate the Dark king filter is updated successfully from the admin side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Navigate to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('Select fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('Navigate to filter setting', async () => {
        await fanaticsFilterPage.NavigateToTheFilterSetting();
    })//await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await test.step('Select Arial font selection', async () => {
        await fanaticsFilterPage.Filter5dropdownClick();
        await page.waitForTimeout(5000);
        await fanaticsFilterPage.ArialFontselecttion();
    })
    await test.step('Select normal text', async () => {
        await fanaticsFilterPage.Filter6TextdropdownClick();
        await fanaticsFilterPage.NormalTextClick();
    })
    await test.step('Select h1 text', async () => {
        await fanaticsFilterPage.Filter6TextdropdownClick();
        await fanaticsFilterPage.H1TextClick();
    })
    await test.step('select H2 text', async () => {
        await fanaticsFilterPage.Filter6TextdropdownClick();
        await fanaticsFilterPage.H2TextClick();
    })
    await test.step('Select H3 text', async () => {
        await fanaticsFilterPage.Filter6TextdropdownClick();
        await fanaticsFilterPage.H3TextClick();
    })
    await test.step('Select H4 text', async () => {
        await fanaticsFilterPage.Filter6TextdropdownClick();
        await fanaticsFilterPage.H4TextClick();
    })
    await test.step('Select H5 text', async () => {
        await fanaticsFilterPage.Filter6TextdropdownClick();
        await fanaticsFilterPage.H5TextClick();
    })
    await test.step('Select H6 text', async () => {
        await fanaticsFilterPage.Filter6TextdropdownClick();
        await fanaticsFilterPage.H6TextClick();
    })
    await test.step('Select block quote text', async () => {
        await fanaticsFilterPage.Filter6TextdropdownClick();
        await fanaticsFilterPage.BlockQuoteTextClick();
    })
    await test.step('select bold', async () => {
        await fanaticsFilterPage.Bold6Click();
    })
    await test.step('select italic', async () => {
        await fanaticsFilterPage.Italic6Click();
    })
    await test.step('select Underline 6 click', async () => {
        await fanaticsFilterPage.Underline6Click();
    })
    await test.step('select strike through click', async () => {
        await fanaticsFilterPage.StrikeThrough6Click();
    })
    await test.step('Select left alignment click', async () => {
        await fanaticsFilterPage.LeftAlignment6Click();
    })
    await test.step('select center alignment click', async () => {
        await fanaticsFilterPage.CenterAlignment6Click();
    })
    await test.step('Select right alignment click', async () => {
        await fanaticsFilterPage.RightAlignment6Click();
    })
    await test.step('select ordered list 6 click', async () => {
        await fanaticsFilterPage.OrderedList6Click();
    })
    await test.step('select unordered list click', async () => {
        await fanaticsFilterPage.UnorderedList6Click();
    })
    await test.step('select remove click', async () => {
        await fanaticsFilterPage.Remover6Click();
    })
})
test("013FFW-038 | 	Validate the Dark elf filter updated successfully visible on the mobile side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step("Now change the filter", async () => {
        await FanaticsFilterMobilePages.change_filter_Dark_king()
    })
})
test("013FFW-043 | Validate the santaclause filter is updated successfully from the admin side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Navigate to login', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('Select fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('select navigate to filter setting', async () => {
        await fanaticsFilterPage.NavigateToTheFilterSetting();
    })
    //await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await test.step('Select filter 5 dropdown click', async () => {
        await fanaticsFilterPage.Filter5dropdownClick();
    })
    await test.step('select arial font select', async () => {
        await fanaticsFilterPage.ArialFontselecttion();
    })
    await test.step('select normal text ', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.NormalTextClick();
    })
    await test.step('Select h1 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H1TextClick();
    })
    await test.step('Select h2 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H2TextClick();
    })
    await test.step('Select h3 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H3TextClick();
    })
    await test.step('Select h4 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H4TextClick();
    })
    await test.step('Select h5 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H5TextClick();
    })
    await test.step('Select h6 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H6TextClick();
    })
    await test.step('Select block quote text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.BlockQuoteTextClick();
    })
    await test.step('select bold 7 click', async () => {
        await fanaticsFilterPage.Bold7Click();
    })
    await test.step('Select italic click', async () => {
        await fanaticsFilterPage.Italic7Click();
    })
    await test.step('select underline 7 click', async () => {
        await fanaticsFilterPage.Underline7Click();
    })
    await test.step('select strike through click', async () => {
        await fanaticsFilterPage.StrikeThrough7Click();
    })
    await test.step('Select left alignment 7 click', async () => {
        await fanaticsFilterPage.LeftAlignment7Click();
    })
    await test.step('Select center alignment 7 click', async () => {
        await fanaticsFilterPage.CenterAlignment7Click();
    })
    await test.step('Select right alignment click', async () => {
        await fanaticsFilterPage.RightAlignment7Click();
    })
    await test.step('Select ordered list click', async () => {
        await fanaticsFilterPage.OrderedList7Click();
    })
    await test.step('select unordered list click', async () => {
        await fanaticsFilterPage.UnorderedList7Click();
    })
    await test.step('select remove 7 click', async () => {
        await fanaticsFilterPage.Remover7Click();
    })
})
test("013FFW-044 | 	Validate the santacluse filter updated successfully visible on the mobile side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step("Now change the filter", async () => {
        await FanaticsFilterMobilePages.change_filter_Santa()
    })
})
test("013FFW-041 | 	Validate the HDeath filter is updated successfully from the admin sidee", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Navigate to login', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('Select fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('select navigate to filter setting', async () => {
        await fanaticsFilterPage.NavigateToTheFilterSetting();
    })
    //await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await test.step('Select filter 5 dropdown click', async () => {
        await fanaticsFilterPage.Filter5dropdownClick();
    })
    await test.step('select arial font select', async () => {
        await fanaticsFilterPage.ArialFontselecttion();
    })
    await test.step('select normal text ', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.NormalTextClick();
    })
    await test.step('Select h1 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H1TextClick();
    })
    await test.step('Select h2 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H2TextClick();
    })
    await test.step('Select h3 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H3TextClick();
    })
    await test.step('Select h4 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H4TextClick();
    })
    await test.step('Select h5 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H5TextClick();
    })
    await test.step('Select h6 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H6TextClick();
    })
    await test.step('Select block quote text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.BlockQuoteTextClick();
    })
    await test.step('select bold 7 click', async () => {
        await fanaticsFilterPage.Bold7Click();
    })
    await test.step('Select italic click', async () => {
        await fanaticsFilterPage.Italic7Click();
    })
    await test.step('select underline 7 click', async () => {
        await fanaticsFilterPage.Underline7Click();
    })
    await test.step('select strike through click', async () => {
        await fanaticsFilterPage.StrikeThrough7Click();
    })
    await test.step('Select left alignment 7 click', async () => {
        await fanaticsFilterPage.LeftAlignment7Click();
    })
    await test.step('Select center alignment 7 click', async () => {
        await fanaticsFilterPage.CenterAlignment7Click();
    })
    await test.step('Select right alignment click', async () => {
        await fanaticsFilterPage.RightAlignment7Click();
    })
    await test.step('Select ordered list click', async () => {
        await fanaticsFilterPage.OrderedList7Click();
    })
    await test.step('select unordered list click', async () => {
        await fanaticsFilterPage.UnorderedList7Click();
    })
    await test.step('select remove 7 click', async () => {
        await fanaticsFilterPage.Remover7Click();
    })
})
//
test("013FFW-048 | 	Validate the Hdeath filter updated successfully visible on the mobile side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step("Now change the filter", async () => {
        await FanaticsFilterMobilePages.change_filter_H_death()
    })
})
test("013FFW-041 | 	Validate the Since1924 filter is updated successfully from the admin sidee", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Navigate to login', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('Select fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('select navigate to filter setting', async () => {
        await fanaticsFilterPage.NavigateToTheFilterSetting();
    })
    //await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await test.step('Select filter 5 dropdown click', async () => {
        await fanaticsFilterPage.Filter5dropdownClick();
    })
    await test.step('select arial font select', async () => {
        await fanaticsFilterPage.ArialFontselecttion();
    })
    await test.step('select normal text ', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.NormalTextClick();
    })
    await test.step('Select h1 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H1TextClick();
    })
    await test.step('Select h2 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H2TextClick();
    })
    await test.step('Select h3 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H3TextClick();
    })
    await test.step('Select h4 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H4TextClick();
    })
    await test.step('Select h5 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H5TextClick();
    })
    await test.step('Select h6 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H6TextClick();
    })
    await test.step('Select block quote text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.BlockQuoteTextClick();
    })
    await test.step('select bold 7 click', async () => {
        await fanaticsFilterPage.Bold7Click();
    })
    await test.step('Select italic click', async () => {
        await fanaticsFilterPage.Italic7Click();
    })
    await test.step('select underline 7 click', async () => {
        await fanaticsFilterPage.Underline7Click();
    })
    await test.step('select strike through click', async () => {
        await fanaticsFilterPage.StrikeThrough7Click();
    })
    await test.step('Select left alignment 7 click', async () => {
        await fanaticsFilterPage.LeftAlignment7Click();
    })
    await test.step('Select center alignment 7 click', async () => {
        await fanaticsFilterPage.CenterAlignment7Click();
    })
    await test.step('Select right alignment click', async () => {
        await fanaticsFilterPage.RightAlignment7Click();
    })
    await test.step('Select ordered list click', async () => {
        await fanaticsFilterPage.OrderedList7Click();
    })
    await test.step('select unordered list click', async () => {
        await fanaticsFilterPage.UnorderedList7Click();
    })
    await test.step('select remove 7 click', async () => {
        await fanaticsFilterPage.Remover7Click();
    })
})
test("013FFW-052 | 	Validate the Since1924 filter updated successfully visible on the mobile side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step("Now change the filter", async () => {
        await FanaticsFilterMobilePages.change_filter_1924()
    })
})
test("013FFW-041 | 	Validate the viking filter is updated successfully from the admin sidee", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Navigate to login', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('Select fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('select navigate to filter setting', async () => {
        await fanaticsFilterPage.NavigateToTheFilterSetting();
    })
    //await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await test.step('Select filter 5 dropdown click', async () => {
        await fanaticsFilterPage.Filter5dropdownClick();
    })
    await test.step('select arial font select', async () => {
        await fanaticsFilterPage.ArialFontselecttion();
    })
    await test.step('select normal text ', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.NormalTextClick();
    })
    await test.step('Select h1 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H1TextClick();
    })
    await test.step('Select h2 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H2TextClick();
    })
    await test.step('Select h3 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H3TextClick();
    })
    await test.step('Select h4 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H4TextClick();
    })
    await test.step('Select h5 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H5TextClick();
    })
    await test.step('Select h6 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H6TextClick();
    })
    await test.step('Select block quote text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.BlockQuoteTextClick();
    })
    await test.step('select bold 7 click', async () => {
        await fanaticsFilterPage.Bold7Click();
    })
    await test.step('Select italic click', async () => {
        await fanaticsFilterPage.Italic7Click();
    })
    await test.step('select underline 7 click', async () => {
        await fanaticsFilterPage.Underline7Click();
    })
    await test.step('select strike through click', async () => {
        await fanaticsFilterPage.StrikeThrough7Click();
    })
    await test.step('Select left alignment 7 click', async () => {
        await fanaticsFilterPage.LeftAlignment7Click();
    })
    await test.step('Select center alignment 7 click', async () => {
        await fanaticsFilterPage.CenterAlignment7Click();
    })
    await test.step('Select right alignment click', async () => {
        await fanaticsFilterPage.RightAlignment7Click();
    })
    await test.step('Select ordered list click', async () => {
        await fanaticsFilterPage.OrderedList7Click();
    })
    await test.step('select unordered list click', async () => {
        await fanaticsFilterPage.UnorderedList7Click();
    })
    await test.step('select remove 7 click', async () => {
        await fanaticsFilterPage.Remover7Click();
    })
})
test("013FFW-054 |	Validate the Viking filter updated successfully visible on the mobile side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step("Now change the filter", async () => {
        await FanaticsFilterMobilePages.change_filter_viking()
    })
})
test("013FFW-041 | 	Validate the stupid viking filter is updated successfully from the admin sidee", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('Navigate to login', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('Select fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step('select navigate to filter setting', async () => {
        await fanaticsFilterPage.NavigateToTheFilterSetting();
    })
    //await fanaticsFilterPage.Filter1TextInputField();
    //await page.waitForTimeout(5000);
    await test.step('Select filter 5 dropdown click', async () => {
        await fanaticsFilterPage.Filter5dropdownClick();
    })
    await test.step('select arial font select', async () => {
        await fanaticsFilterPage.ArialFontselecttion();
    })
    await test.step('select normal text ', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.NormalTextClick();
    })
    await test.step('Select h1 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H1TextClick();
    })
    await test.step('Select h2 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H2TextClick();
    })
    await test.step('Select h3 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H3TextClick();
    })
    await test.step('Select h4 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H4TextClick();
    })
    await test.step('Select h5 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H5TextClick();
    })
    await test.step('Select h6 text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.H6TextClick();
    })
    await test.step('Select block quote text', async () => {
        await fanaticsFilterPage.Filter7TextdropdownClick();
        await fanaticsFilterPage.BlockQuoteTextClick();
    })
    await test.step('select bold 7 click', async () => {
        await fanaticsFilterPage.Bold7Click();
    })
    await test.step('Select italic click', async () => {
        await fanaticsFilterPage.Italic7Click();
    })
    await test.step('select underline 7 click', async () => {
        await fanaticsFilterPage.Underline7Click();
    })
    await test.step('select strike through click', async () => {
        await fanaticsFilterPage.StrikeThrough7Click();
    })
    await test.step('Select left alignment 7 click', async () => {
        await fanaticsFilterPage.LeftAlignment7Click();
    })
    await test.step('Select center alignment 7 click', async () => {
        await fanaticsFilterPage.CenterAlignment7Click();
    })
    await test.step('Select right alignment click', async () => {
        await fanaticsFilterPage.RightAlignment7Click();
    })
    await test.step('Select ordered list click', async () => {
        await fanaticsFilterPage.OrderedList7Click();
    })
    await test.step('select unordered list click', async () => {
        await fanaticsFilterPage.UnorderedList7Click();
    })
    await test.step('select remove 7 click', async () => {
        await fanaticsFilterPage.Remover7Click();
    })
})
test("013FFW-046 | 	Validate the stupid viking filter updated successfully visible on the mobile side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
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
    await test.step('Navigate to game design', async () => {
        await fanaticsFilterPage.Navigatetothegamedesign()
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
    await test.step("Filup the signup form", async () => {
        await FanaticsFilterMobilePages.typephoneno()
        await FanaticsFilterMobilePages.typeAge()
        await FanaticsFilterMobilePages.selectbirthdate()
        await FanaticsFilterMobilePages.typeemail()
        await FanaticsFilterMobilePages.typezip()
        await FanaticsFilterMobilePages.clickSubmitButton()
    })
    await test.step("Now change the filter", async () => {
        await FanaticsFilterMobilePages.change_filter_stupid_viking()
    })
})
test("013FFW-055 | 	Validate the edit config button is functional successfully from the admin side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('click on Fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step("Now check on the edit functionality", async () => {
        await fanaticsFilterPage.clickEditgame()
    })
    await test.step("Update the edited game", async () => {
        await fanaticsFilterPage.update_name('Auto_test_edited')
    })
})
test("013FFW-056 |	Validate the delete config button is functional successfully from the admin side", async ({ loginPage, fanaticsFilterPage, functions, page, }, testInfo) => {
    await test.step('login to admin', async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })
    await test.step('click on Fanatics filter page', async () => {
        await fanaticsFilterPage.clickFanaticsFilterPage();
    })
    await test.step("Now delete the game", async () => {
        await fanaticsFilterPage.delete_game()
    })
})