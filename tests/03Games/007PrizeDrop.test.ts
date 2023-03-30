import test, { expect } from "@fixtures/basePages";
import languagePage from "@pages/language.page";
import liveWallPage from "@pages/liveWall.page";
import prizeDropMobilePage from "@pages/prizedrop_mobile_game.page";
import singupPage from "@pages/signup.page";
import { devices, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs';
const clipboard = require('clipboardy')
test("000|Select All The Menu Ready For UI Varification", async ({ loginPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
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
        await singupPage.clickAnonymousLogin()
        await singupPage.clickPhoneNumberCheckBox()
        await singupPage.clickEmailAddressCheckBox()
        await singupPage.clickAgeCheckBox()
        await singupPage.clickDateOfBirthCheckBox()
        await singupPage.clickPostalCodeCheckBox()
})
test("Add New Configuration related tests", async ({ loginPage, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("PD007-1 | verify  configuration text is visible", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                const screenshot = await page.screenshot();
                await testInfo.attach("click Prize Drop Section", {
                        body: screenshot,
                        contentType: "image/png",
                })
                await prizeDropPage.verifyConfigurationsText()
        })
        //click Add New Config Plus Btn
        await test.step("PD007-2 |validate + button is visible and working", async () => {
                await prizeDropPage.check_if_auto_config_exist()
                await prizeDropPage.clickAddNewConfigPlusBtn()
        })
        await test.step("PD007-3 | Validate new configurations text is visible", async () => {
                // verify configuration name header is visible
                await prizeDropPage.verifyAddNewConfigPlusWindowText()
        })
        await test.step('PD007-4|Validate cancel button is visible', async () => {
                //input Configuration Name
                await prizeDropPage.inputConfigurationName('Auto')
                // await page.waitForTimeout(2000)
                // check cancel button visiblity
                await prizeDropPage.veirfycancelBtnvisiblity()
        })
        await test.step("PD007-5|validate add button is visible and working", async () => {
                //click Add Btn
                await prizeDropPage.clickAddBtn()
        })
})
// here is an issue related to this test case, when user try to create an config with same name then does not showing any error alert in frontend
test('PD007-001 | Validate Error Massage Successfully Show When Admin Try to Create Config with duplicate name', async ({ loginPage, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("PD007-2 |validate + button is visible and working", async () => {
                await prizeDropPage.clickPrizeDropSection()
                await page.waitForTimeout(2000)
                await prizeDropPage.clickAddNewConfigPlusBtn()
        })
        await test.step("PD007-3 | Validate new configurations text is visible", async () => {
                // verify configuration name header is visible()
                await prizeDropPage.verifyAddNewConfigPlusWindowText()
        })
        await test.step("PD007-5|validate add button is visible and working", async () => {
                //click Add Btn
                //input Configuration Name
                await prizeDropPage.inputConfigurationName('Default')
                await prizeDropPage.clickAddBtn()
        })
        await test.step('validate error if new config is added with duplicate name', async () => {
                await prizeDropPage.check_error_modal('Default')
        })
})
test("PD007-002 | Validate error if Add New Configuration is clicked without name provided", async ({ loginPage, prizeDropPage, page, }, testInfo) => {
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
        await test.step("PD007-7 |validate error if Add New Configuration is clicked without name provided", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                const screenshot = await page.screenshot();
                await testInfo.attach("click Prize Drop Section", {
                        body: screenshot,
                        contentType: "image/png",
                })
                //click Add New Config Plus Btn
                await prizeDropPage.clickAddNewConfigPlusBtn()
                //click Add Btn
                await prizeDropPage.clickAddBtn()
                // validate error message visiblity
                await prizeDropPage.verifyerrorvisiblity()
        })
})
test("PD007-7 | Validate error if start clicked without prize given ", async ({ loginPage, prizeDropPage, functions, page, }, testInfo) => {
        await test.step("Login Admin And land To prize drop game", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                const screenshot = await page.screenshot();
                await testInfo.attach("login screenshot", {
                        contentType: "image/png",
                        body: screenshot
                })
                await prizeDropPage.clickPrizeDropSection()
        })
        await test.step("validate start button of newly added game is visible", async () => {
                await prizeDropPage.startbuttonvisible()
        })
        await test.step("click on start button", async () => {
                await prizeDropPage.clickStartGameBtn()
        })
        await test.step("PD007-7 |validate error message for no prize given", async () => {
                await prizeDropPage.clickokinstartconfirmmodal()
                await prizeDropPage.verifyerrorvisiblityfornoprize()
        })
})
test("PD007-24|Validate Add Banner Functionality", async ({ loginPage, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("now click on add banner settings ", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                await page.waitForTimeout(3000)
                //click Add Banner Section
                await prizeDropPage.clickAddBannerSection()
        })
        await test.step("PD007-89|now click on verify marketing message text", async () => {
                //verify Marketing Massage Text
                await prizeDropPage.verifyMarketingMassageText()
                //verify DragYour Image Text
        })
        await test.step(" PD007-90|Validate marketing message upload is working", async () => {
                await prizeDropPage.clickToUploadBanner()
                await prizeDropPage.Image_uploader_For_rulesimage()
                await prizeDropPage.check_marketing_message()
        })
})
test.skip("PD007-91|Validate marketing message change is reflected on mobile screen", async ({ loginPage, languagePage, prizeDropPage, page, browser, menuPage, MainMenu, singupPage }, testInfo) => {
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
        await test.step('check the menu related settings', async () => {
                await MainMenu.clickHomeAvater()
                await MainMenu.mainMenuBtn()
                await MainMenu.mobileDesign()
                await MainMenu.clickClearAllBtn()
                await languagePage.clickLanguagePage()
                await languagePage.clickUserForceLanguageOption()
                await languagePage.clickForceLanguageInputField()
                await languagePage.selectEnglishLanguage()
                await menuPage.clickMenuPage()
                await menuPage.clickBottomAlignmentBtn()
                await singupPage.clickSignUpPage()
                await singupPage.clickAnonymousLogin()
                await singupPage.clickPhoneNumberCheckBox()
                await singupPage.clickEmailAddressCheckBox()
                await singupPage.clickAgeCheckBox()
                await singupPage.clickDateOfBirthCheckBox()
                await singupPage.clickPostalCodeCheckBox()
        })
        await test.step("navigate go to prize drop section again", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("now validate the change in mobile view", async () => {
                await newprizedropgame.selecthomepage()
        })
        await test.step("now wait for elements to load", async () => {
                await page.waitForTimeout(4000)
        })
        await test.step("now check the marketing message text", async () => {
                await newprizedropgame.screenshot_matcher_marketing_message()
        })
        await test.step("now delete the added banner", async () => {
                //click Add Banner Section
                await prizeDropPage.clickAddBannerSection()
                await prizeDropPage.click_delete_button_added_banner()
        })
})
test("PD007-96|validate Admin can select the coupon prize and save", async ({ loginPage, prizeDropPage, page, }, testInfo) => {
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
        await test.step("Now click on the prizing section", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                await page.waitForTimeout(3000)
                //click Prizing Section
                await prizeDropPage.clickPrizingSection()
        })
        await test.step("Now validation prizing list text is visible", async () => {
                //verify Prizing List Text
                await prizeDropPage.verifyPrizingListText()
        })
        await test.step("PD007-92|validate 'click' add new prize button is working", async () => {
                //click Add New Prize Btn
                await prizeDropPage.clickAddNewPrizeBtn()
        })
        await test.step("PD007-97|validate back button here is working", async () => {
                await prizeDropPage.click_back_button()
                await prizeDropPage.clickAddNewPrizeBtn()
        })
        //click To UploadBanner
        await test.step("PD007-93|validate Admin can input the coupon name and amount of awarding , awarded", async () => {
                await prizeDropPage.inputCouponName('Auto')
                await prizeDropPage.inputAmountOfAwarding('30')
                await prizeDropPage.inputPercentageAwarded('40')
        })
        await test.step("PD007-96|validate Admin can select the coupon prize and save", async () => {
                await prizeDropPage.clickCouponPrizeSelectBtn()
                await page.waitForTimeout(3000)
                await prizeDropPage.selectCouponPrizeSelect()
                await prizeDropPage.clickSaveBtn()
                await page.waitForTimeout(3000)
        })
        // await prizeDropPage.clickDeleteBtn()
        // await prizeDropPage.clickConfirmDeleteBtn()
        await test.step("PD007-100|validate edit button in prizing is working", async () => {
                await prizeDropPage.click_edit_prize_button()
                await prizeDropPage.inputCouponName('Auto_coupon_edited')
                await prizeDropPage.clickSaveBtn()
                await page.waitForTimeout(3000)
        })
})
test("PD007-98|validate prize name,Total prizes and Parcentage awarded is visible ", async ({ loginPage, prizeDropPage, page, }, testInfo) => {
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
        await test.step("Now click on the prizing section", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                await page.waitForTimeout(3000)
                //click Prizing Section
                await prizeDropPage.clickPrizingSection()
        })
        await test.step("Now validation prizing list text is visible", async () => {
                //verify Prizing List Text
                await prizeDropPage.verifyPrizingListText()
        })
        await test.step("Now validate prizing name for added prize is visible", async () => {
                await prizeDropPage.verify_Prizing_name()
        })
        await test.step("validate Total Prizes for Added prize is visible", async () => {
                await prizeDropPage.verify_total_prizes()
        })
        await test.step("validate Total Prizes for Added prize is visible", async () => {
                await prizeDropPage.verify_Parcentage_awarded()
        })
        await test.step("PD007-99|validate award all buttons clickablity", async () => {
                await prizeDropPage.verify_awardall_button()
        })
})
test("PD007-28|Validate Font Upload Functionality", async ({ loginPage, prizeDropPage, functions, page, browser }, testInfo) => {
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
        await test.step("now go to game design of prize drop", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
        })
        await test.step("PD007-27|validate upload font text is visible", async () => {
                //UploadFont
                await functions.check_upload_font_text()
        })
        await test.step("PD007-28|Validate Font Upload Functionality", async () => {
                await prizeDropPage.font_uploader_click()
        })
        await test.step('now check the uploaded font', async () => {
                await prizeDropPage.verify_font_uploaded()
        })
        await test.step('now click on clear all button', async () => {
                await prizeDropPage.clickClearAllBtn()
        })
})
//have an issue our script related
test.skip("PD007-29|validate uploaded font is being reflected on mobile view", async ({ loginPage, MainMenu, menuPage, languagePage, singupPage, prizeDropPage, functions, page, browser }, testInfo) => {
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
        // await test.step('PD007-33|check the menu related settings', async () => {
        //         await MainMenu.clickHomeAvater()
        //         await MainMenu.mainMenuBtn()
        //         await MainMenu.mobileDesign()
        //         await MainMenu.clickClearAllBtn()
        //         await languagePage.clickLanguagePage()
        //         await languagePage.clickUserForceLanguageOption()
        //         await languagePage.clickForceLanguageInputField()
        //         await languagePage.selectEnglishLanguage()
        //         await menuPage.clickMenuPage()
        //         await menuPage.clickBottomAlignmentBtn()
        //         await menuPage.click_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_Active_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_active_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await singupPage.clickSignUpPage()
        //         await singupPage.clickAnonymousLogin()
        //         await singupPage.clickPhoneNumberCheckBox()
        //         await singupPage.clickEmailAddressCheckBox()
        //         await singupPage.clickAgeCheckBox()
        //         await singupPage.clickDateOfBirthCheckBox()
        //         await singupPage.clickPostalCodeCheckBox()
        // })
        await test.step("now go to game design of prize drop", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
        })
        await test.step("PD007-38|now select a font", async () => {
                await functions.select_font()
        })
        await test.step("PD007-30|now start the game", async () => {
                await prizeDropPage.clickStartGameBtn()
                await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("now validate the change in mobile view", async () => {
                await newprizedropgame.selecthomepage()
        })
        await test.step("now validate the font", async () => {
                await newprizedropgame.screenshot_matcher_font()
        })
        await test.step("now stop the game from admin site", async () => {
                await prizeDropPage.clickToStopLiveGame()
                await prizeDropPage.clickStopGameOkBtn()
        })
})
test("PD007-123|now validate delete font button is working", async ({ loginPage, prizeDropPage, functions, page, browser }, testInfo) => {
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
        await test.step("now go to game design of prize drop", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
        })
        await test.step("PD007-128|Validate error message if wrong file is selected as font", async () => {
                await prizeDropPage.handle_alert()
                await functions.wrong_font_uploader()
        })
        await test.step("now delete the uploaded font", async () => {
                await functions.delete_font()
        })
})
test(" PD007-9|Validate Game Open Section Functionality with mobile link button", async ({ loginPage, prizeDropPage, browser, page, }, testInfo) => {
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
                await prizeDropPage.clickStartGameBtn()
                await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("PD007-8|Validate mobile link button is visible", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
        })
        await test.step("validate form fields are visible", async () => {
                await newprizedropgame.lookforphonenoinform()
                await newprizedropgame.lookforBirthdateinform()
                await newprizedropgame.lookforEmailinform()
                await newprizedropgame.lookforZipinform()
                await newprizedropgame.lookforEmailinform()
        })
        await test.step("PD007-39|validate form fields in mobile game are actually working", async () => {
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("now stop the game in mobile screen", async () => {
                await browser.contexts()[0].pages()[0].bringToFront()
                await browser.contexts()[0].pages()[0].setViewportSize({ width: 900, height: 655 })
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
                await prizeDropPage.clickToStopLiveGame()
                await prizeDropPage.clickStopGameOkBtn()
        })
})
test("007PD-014 | validate QR code section is working perfectly", async ({ loginPage, prizeDropPage, page, browser }, testInfo) => {
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
        await test.step("click on prize drop page", async () => {
                await prizeDropPage.clickPrizeDropSection()
        })
        await test.step("PD007-14|click on QR code section", async () => {
                await prizeDropPage.clickQRcodebutton()
        })
        await test.step("PD007-15|validate QR code text is visible", async () => {
                await prizeDropPage.validateQRtext()
        })
        await test.step("PD007-16|validate Save QR code download is working", async () => {
                await prizeDropPage.validateDownload()
        })
        await test.step("PD007-17|validate copy QR code section is working", async () => {
                await prizeDropPage.clickQRcodecopybtn()
                const newtab = browser.contexts()[0].newPage();
                (await newtab).goto('https://qr-code-scanner.net/')
                await (await newtab).locator('//a[@title="Scan QR code from paste"]').click()
                await (await newtab).locator('//button[text()="Paste"]').click()
        })
})
test("007PD-012 | Validate Game Link Successfully Copy in system clipboard", async ({ prizeDropPage, page, browser }) => {
        await page.goto("/admin/#/sign-in");
        await page.fill("input[type='text']", "qa-1")
        await page.fill("input[type='password']", "mFkTylCDNC")
        await Promise.all([
                page.waitForNavigation(),
                page.click("button:has-text('Login')")
        ])
        await test.step('validate click on the copy link button is working', async () => {
                await prizeDropPage.clickPrizeDropSection()
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //
                await prizeDropPage.clickMobileLinkCopyBtn()
        })
        await test.step('now close the copy link modal', async () => {
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        let URL = '';
        await test.step("now copy the contents from system clipboard(URL Here)", async () => {
                URL = clipboard.readSync();
        })
        await test.step('now open new page with copied URL', async () => {
                const newprizedropgame = new prizeDropMobilePage(page)
                await newprizedropgame.GoTo(URL)
        })
})
test("PD007-47|  Validate text Color Input Functionality and reflection on mobile screen", async ({ loginPage, browser, MainMenu, languagePage, menuPage, singupPage, prizeDropPage, page, }, testInfo) => {
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
        // await test.step('check the menu related settings', async () => {
        //         await MainMenu.clickHomeAvater()
        //         await MainMenu.mainMenuBtn()
        //         await MainMenu.mobileDesign()
        //         await MainMenu.clickClearAllBtn()
        //         await languagePage.clickLanguagePage()
        //         await languagePage.clickUserForceLanguageOption()
        //         await languagePage.clickForceLanguageInputField()
        //         await languagePage.selectEnglishLanguage()
        //         await menuPage.clickMenuPage()
        //         await menuPage.clickBottomAlignmentBtn()
        //         await menuPage.click_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_Active_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_active_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await singupPage.clickSignUpPage()
        //         await singupPage.clickAnonymousLogin()
        //         await singupPage.clickPhoneNumberCheckBox()
        //         await singupPage.clickEmailAddressCheckBox()
        //         await singupPage.clickAgeCheckBox()
        //         await singupPage.clickDateOfBirthCheckBox()
        //         await singupPage.clickPostalCodeCheckBox()
        // })
        await test.step("navigate to color section and click clear all button", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
                //click Clear All Btn
                await prizeDropPage.clickClearAllBtn()
                await prizeDropPage.verifyclearallworking()
        })
        await test.step("now click on start button on Admin site", async () => {
                await prizeDropPage.clickStartGameBtn()
                await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("validate Admin can change the Text color settings successfully", async () => {
                //verify Text Color Text
                await browser.contexts()[0].pages()[0].bringToFront()
                await browser.contexts()[0].pages()[0].setViewportSize({ width: 900, height: 655 })
                //PD007-32|Validate colors text is visible
                await prizeDropPage.verifyTextColorText()
                // PD007-37|Validate color picker header text is visible
                //click Text Color Picker
                await prizeDropPage.clickTextColorPicker()
                //input Text RGR First Color
                await prizeDropPage.input_Red_Color('189')
                //input Text RGR Second Color
                await prizeDropPage.input_green_color('179')
                //input Text RGR Third Color
                await prizeDropPage.input_blue_color('229')
                //input Text RGR Four Color
                await prizeDropPage.inputColorOpacity('95')
                //input Text RGR Five Color
                await prizeDropPage.inputHEXColor('#BDB3E5F2')
                //click Color Picker SaveBtn
                await prizeDropPage.clickColorPickerSaveBtn()
        })
        await test.step("now validate text color change is visible on mobile", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.selecthomepage()
                await newprizedropgame.checkTextcolor()
        })
        await test.step("now stop the game", async () => {
                await prizeDropPage.clickToStopLiveGame()
                await prizeDropPage.clickStopGameOkBtn()
        })
})
test("007PD-16 | validate main color input functionality ", async ({ loginPage, browser, prizeDropPage, page, }, testInfo) => {
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
        await test.step("navigate to color section and click clear all button", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
                //click Clear All Btn
                await prizeDropPage.clickClearAllBtn()
                await prizeDropPage.verifyclearallworking()
        })
        // await test.step("now click on start button on Admin site", async () => {
        //         await prizeDropPage.clickStartGameBtn()
        //         await prizeDropPage.clickStartGameOkBtn()
        // })
        // let newTab = null;
        // let newprizedropgame: prizeDropMobilePage
        // await test.step("now open the game in mobile view", async () => {
        //         //click Mobile Link Btn
        //         await prizeDropPage.clickMobileLinkBtn()
        //         //now click on open button
        //         newTab = await prizeDropPage.clickMobileLinkOpenBtn()
        //         newprizedropgame = new prizeDropMobilePage(newTab)
        //         await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        // })
        // await test.step("provide values in form field of mobile view and submit", async () => {
        //         await newprizedropgame.typephoneno()
        //         await newprizedropgame.selectbirthdate()
        //         await newprizedropgame.typeAge()
        //         await newprizedropgame.typeemail()
        //         await newprizedropgame.typezip()
        //         await newprizedropgame.clicksubmit()
        // })
        // await test.step("PD007-37|validate main color header text is visible to admin", async () => {
        //         //this two lines can be commented for pipelines
        //         await browser.contexts()[0].pages()[0].setViewportSize({ width: 900, height: 655 })
        //         await browser.contexts()[0].pages()[0].bringToFront()
        //         await prizeDropPage.verifyMainColorText()
        // })
        await test.step("PD007-34|validate swatches section is working in color picker ", async () => {
                //click Main Color Picker
                await prizeDropPage.clickMainColorPicker()
                // PD007-35|Validate + button is visible in color picker
                await prizeDropPage.clickplusbuttonswatches()
                await prizeDropPage.clickdeletebuttonswatches()
        })
        await test.step("validate solid dropdowns are working properly", async () => {
                await prizeDropPage.validate_solid_horizontal_vertical_dropdown()
                await prizeDropPage.click_horizontal_button()
                await prizeDropPage.validate_solid_horizontal_vertical_dropdown()
                await prizeDropPage.click_vertical_button()
                await prizeDropPage.validate_solid_horizontal_vertical_dropdown()
                await prizeDropPage.click_diagonal_button()
                await prizeDropPage.validate_solid_horizontal_vertical_dropdown()
                await prizeDropPage.click_radial_button()
                await prizeDropPage.validate_solid_horizontal_vertical_dropdown()
                await prizeDropPage.click_solid_button()
        })
        await test.step("PD007-36|Validate RGB sections are visible in  'main color' section and working", async () => {
                //input Main RGR First Color
                await prizeDropPage.input_Red_Color('84')
                //input Main RGR Second Color
                await prizeDropPage.input_green_color('161')
                //input Main RGR Third Color
                await prizeDropPage.input_blue_color('220')
                //input Main RGR Four Color
                await prizeDropPage.inputColorOpacity('95')
                //input Main RGR Five Color
                await prizeDropPage.inputHEXColor('54A1DCF2')
                //click Color Picker SaveBtn
                await prizeDropPage.clickColorPickerSaveBtn()
        })
        // await test.step("PD007-68|now upload a transparent background to see main chagne action in mobile site", async () => {
        //         await prizeDropPage.click_BackgroundImage_upload_for_maincolor_check()
        //         await prizeDropPage.Image_uploader_for_maincolorcheck()
        //         //need some waiting here, its important
        //         await page.waitForTimeout(3000)
        // })
        // await test.step("now validate the change on mobile site", async () => {
        //         //this line can be commented for pipeline
        //         await browser.contexts()[0].pages()[1].bringToFront()
        //         //this is important
        //         await newprizedropgame.checkMainColor()
        // })
        // await test.step("now stop the game and delete background image", async () => {
        //         await prizeDropPage.clickToStopLiveGame()
        //         await prizeDropPage.clickStopGameOkBtn()
        //         await prizeDropPage.delete_background_image()
        // })
})
test("PD007-49|  validate button color color input functionality and reflection on mobile site ", async ({ loginPage, browser, prizeDropPage, page, }, testInfo) => {
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
        await test.step("navigate to color section and click clear all button", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
                //click Clear All Btn
                await prizeDropPage.clickClearAllBtn()
                await prizeDropPage.verifyclearallworking()
        })
        await test.step("now click on start button on Admin site", async () => {
                await prizeDropPage.clickStartGameBtn()
                await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("PD007-48|validate admin can change the button color input on admin side", async () => {
                //this two lines can be commented for pipelines
                await browser.contexts()[0].pages()[0].setViewportSize({ width: 900, height: 655 })
                await browser.contexts()[0].pages()[0].bringToFront()
                //click Game Design
                await prizeDropPage.verifyButtonColorText()
                //click Game Design
                await prizeDropPage.clickButtonColorPicker()
                //input Button RGR First Color
                await prizeDropPage.input_Red_Color('204')
                //input Button RGR Second Color
                await prizeDropPage.input_green_color('56')
                //input Button RGR Third Color
                await prizeDropPage.input_blue_color('147')
                //input Button RGR Four Color
                await prizeDropPage.inputColorOpacity('100')
                //input Button RGR Five Color
                await prizeDropPage.inputHEXColor('CC3893FF')
                //click Color Picker SaveBtn
                await prizeDropPage.clickColorPickerSaveBtn()
        })
        await test.step("PD007-31|now validate the change on mobile site", async () => {
                //this line can be commented for pipeline
                await browser.contexts()[0].pages()[1].bringToFront()
                //this is important
                await newprizedropgame.checkButtoncolor()
        })
        await test.step("now stop the game", async () => {
                await prizeDropPage.clickToStopLiveGame()
                await prizeDropPage.clickStopGameOkBtn()
        })
})
//parachute prize e accent color dekha jaai
test("PD007-45|validate accent color color input functionality", async ({ loginPage, browser, prizeDropPage, page, }, testInfo) => {
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
        await test.step("navigate to color section and click clear all button", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
                //click Clear All Btn
                await prizeDropPage.clickClearAllBtn()
                await prizeDropPage.verifyclearallworking()
        })
        // await test.step("now click on start button on Admin site", async () => {
        //         await prizeDropPage.clickStartGameBtn()
        //         await prizeDropPage.clickStartGameOkBtn()
        // })
        // let newTab = null;
        // let newprizedropgame: prizeDropMobilePage
        // await test.step("now open the game in mobile view", async () => {
        //         //click Mobile Link Btn
        //         await prizeDropPage.clickMobileLinkBtn()
        //         //now click on open button
        //         newTab = await prizeDropPage.clickMobileLinkOpenBtn()
        //         newprizedropgame = new prizeDropMobilePage(newTab)
        //         await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        // })
        // await test.step("provide values in form field of mobile view and submit", async () => {
        //         //type the inputs on mobile site
        //         await newprizedropgame.typephoneno()
        //         await newprizedropgame.selectbirthdate()
        //         await newprizedropgame.typeAge()
        //         await newprizedropgame.typeemail()
        //         await newprizedropgame.typezip()
        //         await newprizedropgame.clicksubmit()
        // })
        await test.step("PD007-44|validate Admin can change the accent color settings successfully", async () => {
                // //this two lines can be commented for pipelines
                // await browser.contexts()[0].pages()[0].setViewportSize({ width: 900, height: 655 })
                // await browser.contexts()[0].pages()[0].bringToFront()
                //verify Accent Color Text
                await prizeDropPage.verifyAccentColorText()
                //click Accent Color Picker
                await prizeDropPage.clickAccentColorPicker()
                //input Accent RGR First Color
                await prizeDropPage.input_Red_Color('189')
                //input Accent RGR Second Color
                await prizeDropPage.input_green_color('189')
                //input Accent RGR Third Color
                await prizeDropPage.input_blue_color('9')
                //input Accent RGR Four Color
                await prizeDropPage.inputColorOpacity('90')
                //input Accent RGR Five Color
                await prizeDropPage.inputHEXColor('005782FF')
                //click Color Picker SaveBtn
                await prizeDropPage.clickColorPickerSaveBtn()
        })
        // await test.step("now validate the change on mobile site", async () => {
        //         //this line can be commented for pipeline
        //         await browser.contexts()[0].pages()[1].bringToFront()
        //         //this is important
        //         //need some working here
        //         await newprizedropgame.check_Accent_color()
        // })
        // await test.step("now stop the game", async () => {
        //         await prizeDropPage.clickToStopLiveGame()
        //         await prizeDropPage.clickStopGameOkBtn()
        // })
})
test.skip('validate accent color change is reflected on mobile screen', async ({ loginPage, browser, prizeDropPage, page, }, testInfo) => {
})
test("PD007-51|Validate full screen logo upload and its reflection on mobile screen", async ({ loginPage, languagePage, prizeDropPage, page, browser, menuPage, MainMenu, singupPage }, testInfo) => {
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
        // await test.step('check the menu related settings', async () => {
        //         await MainMenu.clickHomeAvater()
        //         await MainMenu.mainMenuBtn()
        //         await MainMenu.mobileDesign()
        //         await MainMenu.clickClearAllBtn()
        //         await languagePage.clickLanguagePage()
        //         await languagePage.clickUserForceLanguageOption()
        //         await languagePage.clickForceLanguageInputField()
        //         await languagePage.selectEnglishLanguage()
        //         await menuPage.clickMenuPage()
        //         await menuPage.clickBottomAlignmentBtn()
        //         await menuPage.click_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_Active_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_active_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await singupPage.clickSignUpPage()
        //         await singupPage.clickAnonymousLogin()
        //         await singupPage.clickPhoneNumberCheckBox()
        //         await singupPage.clickEmailAddressCheckBox()
        //         await singupPage.clickAgeCheckBox()
        //         await singupPage.clickDateOfBirthCheckBox()
        //         await singupPage.clickPostalCodeCheckBox()
        // })
        await test.step("PD007-105|validate error if wrong file is selected as full screen logo", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
                //click on full screenlogo
                await prizeDropPage.fullscreenlogoupload()
                //upload a wrong file
                await prizeDropPage.wrong_image_uploader()
                await prizeDropPage.validate_wrong_file_typetext()
        })
        await test.step("PD007-50|navigate to Game design section and upload a full screen logo", async () => {
                await prizeDropPage.Image_uploader_For_Fullcreenlogo()
                await prizeDropPage.full_screen_logo_wait()
        })
        await test.step('now start the game', async () => {
                await prizeDropPage.clickStartGameBtn()
                await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("now validate the change in mobile view", async () => {
                await newprizedropgame.selecthomepage()
        })
        await test.step("now wait for elements to load", async () => {
                await page.waitForTimeout(4000)
        })
        await test.step('now check the screenshots to validate update', async () => {
                await newprizedropgame.screenshot_matcher_fullscreen_logo()
                await page.waitForTimeout(500)
                await prizeDropPage.delete_image_prize_drop()
        })
        await test.step('stop game', async () => {
                await prizeDropPage.clickToStopLiveGame()
                await prizeDropPage.clickStopGameOkBtn()
        })
        //here we can delete the element after its done
})
//have an issue related to our script
test.skip("PD007-53|Validate Game title upload and its reflection on mobile screen", async ({ loginPage, prizeDropPage, page, browser, MainMenu, menuPage, languagePage, singupPage }, testInfo) => {
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
        await test.step('click on game design and game title upload', async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
                //click on full screenlogo
        })
        await test.step('now start the game', async () => {
                await prizeDropPage.clickStartGameBtn()
                await prizeDropPage.clickStartGameOkBtn()
        })
        await test.step("PD007-105|validate error if wrong file is selected as game title logo", async () => {
                await prizeDropPage.Game_title_image_upload()
                //upload a wrong file
                await prizeDropPage.wrong_image_uploader()
                await prizeDropPage.validate_wrong_file_typetext()
        })
        await test.step("PD007-52|navigate to Game design section and upload a game title logo", async () => {
                await prizeDropPage.Image_uploader_For_Game_title_image()
                await prizeDropPage.game_tile_wait()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("now validate the change in mobile view", async () => {
                await newprizedropgame.selecthomepage()
        })
        await test.step("now wait for elements to load", async () => {
                await page.waitForTimeout(4000)
        })
        await test.step('now check the screenshots', async () => {
                await newprizedropgame.screenshot_matcher_game_title_image()
                await page.waitForTimeout(500)
                await prizeDropPage.delete_image_prize_drop()
        })
        await test.step('now stop the game', async () => {
                await prizeDropPage.clickToStopLiveGame()
                await prizeDropPage.clickStopGameOkBtn()
        })
        //here we can delete the element after its done
})
//need mobile access for this one
test("PD007-55|Validate Frame image upload is working", async ({ loginPage, prizeDropPage, page, browser, menuPage, MainMenu, languagePage, singupPage }, testInfo) => {
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
        // await test.step('check the menu related settings', async () => {
        //         await MainMenu.clickHomeAvater()
        //         await MainMenu.mainMenuBtn()
        //         await MainMenu.mobileDesign()
        //         await MainMenu.clickClearAllBtn()
        //         await languagePage.clickLanguagePage()
        //         await languagePage.clickUserForceLanguageOption()
        //         await languagePage.clickForceLanguageInputField()
        //         await languagePage.selectEnglishLanguage()
        //         await menuPage.clickMenuPage()
        //         await menuPage.clickBottomAlignmentBtn()
        //         await menuPage.click_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_Active_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_active_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await singupPage.clickSignUpPage()
        //         await singupPage.clickAnonymousLogin()
        //         await singupPage.clickPhoneNumberCheckBox()
        //         await singupPage.clickEmailAddressCheckBox()
        //         await singupPage.clickAgeCheckBox()
        //         await singupPage.clickDateOfBirthCheckBox()
        //         await singupPage.clickPostalCodeCheckBox()
        // })
        await test.step("PD007-105|validate error if wrong file is selected as frame image", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
                //click on full screenlogo
                await prizeDropPage.Frame_image_upload()
                //upload a wrong file
                await prizeDropPage.wrong_image_uploader()
                await prizeDropPage.validate_wrong_file_typetext()
        })
        await test.step("PD007-54| navigate to Game design section and upload a frame image", async () => {
                await prizeDropPage.Image_uploader_For_Frame_image()
                await prizeDropPage.frame_image_wait()
                await prizeDropPage.delete_image_prize_drop()
        })
        // await test.step("now click on start button on Admin site", async () => {
        //         await prizeDropPage.clickStartGameBtn()
        //         await prizeDropPage.clickStartGameOkBtn()
        // })
        // let newTab = null;
        // let newprizedropgame: prizeDropMobilePage
        // await test.step("now open the game in mobile view", async () => {
        //         //click Mobile Link Btn
        //         await prizeDropPage.clickMobileLinkBtn()
        //         //now click on open button
        //         newTab = await prizeDropPage.clickMobileLinkOpenBtn()
        //         newprizedropgame = new prizeDropMobilePage(newTab)
        //         await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        // })
        // await test.step("now provide values in form field of mobile view and submit", async () => {
        //         await browser.contexts()[0].pages()[1].bringToFront()
        //         await newprizedropgame.typephoneno()
        //         await newprizedropgame.selectbirthdate()
        //         await newprizedropgame.typeAge()
        //         await newprizedropgame.typeemail()
        //         await newprizedropgame.typezip()
        //         await newprizedropgame.clicksubmit()
        // })
        // await test.step("now validate the change in mobile view", async () => {
        //         await newprizedropgame.selecthomepage()
        // })
        // await test.step("now wait for elements to load", async () => {
        //         await page.waitForTimeout(4000)
        // })
        // await test.step('now click on start button', async () => {
        //         await newprizedropgame.click_start()
        //         await page.waitForTimeout(14000)
        // })
        // await test.step('now check the screenshots', async () => {
        //         await newprizedropgame.screenshot_matcher_frame_image()
        // })
        // // now stop the game
        // await test.step("now stopping the game", async () => {
        //         await prizeDropPage.clickToStopLiveGame()
        //         await prizeDropPage.clickStopGameOkBtn()
        // })
        //here we can delete the element after its done
})
test.skip('validate updated frame image is working', async ({ loginPage, prizeDropPage, page, browser, menuPage, MainMenu, languagePage, singupPage }, testInfo) => {
})
//have an issue related to our script
test.skip("PD007-61|validate sponsor logo upload and its reflection on mobile screen", async ({ loginPage, prizeDropPage, MainMenu, languagePage, singupPage, menuPage, page, browser }, testInfo) => {
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
        await test.step("PD007-105|validate error if wrong file is selected as game title logo", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
                //click on full screenlogo
                await prizeDropPage.Sponsor_image_upload()
                //upload a wrong file
                await prizeDropPage.wrong_image_uploader()
                await prizeDropPage.validate_wrong_file_typetext()
        })
        await test.step("PD007-60|navigate to Game design section and upload a sponsor image", async () => {
                await prizeDropPage.Image_uploader_For_sponsor_image()
                await prizeDropPage.sponsor_image_wait()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("now validate the change in mobile view", async () => {
                await newprizedropgame.selecthomepage()
        })
        await test.step("now wait for elements to load", async () => {
                await page.waitForTimeout(4000)
        })
        await test.step('now check the screenshots', async () => {
                await newprizedropgame.screenshot_matcher_sponsor_image()
                await page.waitForTimeout(500)
                await prizeDropPage.delete_image_prize_drop()
        })
})
//have an issue related to our script
test.skip(" PD007-67| validate Team logo upload and its reflection on mobile screen", async ({ loginPage, prizeDropPage, page, browser, MainMenu, languagePage, menuPage, singupPage }, testInfo) => {
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
        // await test.step('check the menu related settings', async () => {
        //         await MainMenu.clickHomeAvater()
        //         await MainMenu.mainMenuBtn()
        //         await MainMenu.mobileDesign()
        //         await MainMenu.clickClearAllBtn()
        //         await languagePage.clickLanguagePage()
        //         await languagePage.clickUserForceLanguageOption()
        //         await languagePage.clickForceLanguageInputField()
        //         await languagePage.selectEnglishLanguage()
        //         await menuPage.clickMenuPage()
        //         await menuPage.clickBottomAlignmentBtn()
        //         await menuPage.click_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_Active_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_active_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await singupPage.clickSignUpPage()
        //         await singupPage.clickAnonymousLogin()
        //         await singupPage.clickPhoneNumberCheckBox()
        //         await singupPage.clickEmailAddressCheckBox()
        //         await singupPage.clickAgeCheckBox()
        //         await singupPage.clickDateOfBirthCheckBox()
        //         await singupPage.clickPostalCodeCheckBox()
        // })
        await test.step("PD007-105|validate error if wrong file is selected as team logo", async () => {
                // //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
                //  //click on full screenlogo
                await prizeDropPage.Team_logo_upload()
                //upload a wrong file
                await prizeDropPage.wrong_image_uploader()
                await prizeDropPage.validate_wrong_file_typetext()
        })
        await test.step("PD007-66|navigate to Game design section and upload a Team logo", async () => {
                await prizeDropPage.Image_uploader_For_Team_logo()
                await page.waitForTimeout(4000)
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("now validate the change in mobile view", async () => {
                await newprizedropgame.selecthomepage()
        })
        await test.step("now wait for elements to load", async () => {
                await page.waitForTimeout(4000)
        })
        await test.step('now check the screenshots', async () => {
                await newprizedropgame.screenshot_matcher_team_logo()
                await page.waitForTimeout(400)
                await prizeDropPage.delete_image_prize_drop()
        })
})
test("PD007-63| validate Loading image upload and its reflection on mobile screen", async ({ loginPage, prizeDropPage, page, browser, menuPage, MainMenu, singupPage, languagePage }, testInfo) => {
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
        // await test.step('check the menu related settings', async () => {
        //         await MainMenu.clickHomeAvater()
        //         await MainMenu.mainMenuBtn()
        //         await MainMenu.mobileDesign()
        //         await MainMenu.clickClearAllBtn()
        //         await languagePage.clickLanguagePage()
        //         await languagePage.clickUserForceLanguageOption()
        //         await languagePage.clickForceLanguageInputField()
        //         await languagePage.selectEnglishLanguage()
        //         await menuPage.clickMenuPage()
        //         await menuPage.clickBottomAlignmentBtn()
        //         await menuPage.click_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_Active_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_active_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await singupPage.clickSignUpPage()
        //         await singupPage.clickAnonymousLogin()
        //         await singupPage.clickPhoneNumberCheckBox()
        //         await singupPage.clickEmailAddressCheckBox()
        //         await singupPage.clickAgeCheckBox()
        //         await singupPage.clickDateOfBirthCheckBox()
        //         await singupPage.clickPostalCodeCheckBox()
        // })
        await test.step("PD007-105|validate error if wrong file is selected as loading image", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
                //  //click on full screenlogo
                await prizeDropPage.Loading_image_upload()
                //upload a wrong file
                await prizeDropPage.wrong_image_uploader()
                await prizeDropPage.validate_wrong_file_typetext()
        })
        await test.step("PD007-62|navigate to Game design section and upload a loading image", async () => {
                await prizeDropPage.Image_uploader_For_Loading_image()
                await prizeDropPage.wait_loading_image()
        })
        await test.step("now start the game from admin", async () => {
                await prizeDropPage.clickStartGameBtn()
                await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("now validate the change in mobile view", async () => {
                await newprizedropgame.selecthomepage()
        })
        await test.step("now wait for elements to load", async () => {
                await page.waitForTimeout(4000)
        })
        //need to start game from admin
        await test.step('now click on start button', async () => {
                await newprizedropgame.click_start()
                await page.waitForTimeout(4000)
        })
        await test.step('now check the screenshots', async () => {
                await newprizedropgame.screenshot_matcher_loading_image()
        })
        await test.step("now stopping the game", async () => {
                await prizeDropPage.clickToStopLiveGame()
                await prizeDropPage.clickStopGameOkBtn()
                //  //click on full screenlogo
                await prizeDropPage.delete_image_prize_drop()
        })
})
test("PD007-70|validate Background video upload and its reflection on mobile screen", async ({ loginPage, prizeDropPage, page, browser, menuPage, MainMenu, languagePage, singupPage }, testInfo) => {
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
        // await test.step('check the menu related settings', async () => {
        //         await MainMenu.clickHomeAvater()
        //         await MainMenu.mainMenuBtn()
        //         await MainMenu.mobileDesign()
        //         await MainMenu.clickClearAllBtn()
        //         await languagePage.clickLanguagePage()
        //         await languagePage.clickUserForceLanguageOption()
        //         await languagePage.clickForceLanguageInputField()
        //         await languagePage.selectEnglishLanguage()
        //         await menuPage.clickMenuPage()
        //         await menuPage.clickBottomAlignmentBtn()
        //         await singupPage.clickSignUpPage()
        //         await singupPage.clickAnonymousLogin()
        //         await singupPage.clickPhoneNumberCheckBox()
        //         await singupPage.clickEmailAddressCheckBox()
        //         await singupPage.clickAgeCheckBox()
        //         await singupPage.clickDateOfBirthCheckBox()
        //         await singupPage.clickPostalCodeCheckBox()
        // })
        await test.step("navigate to Game design section ", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
        })
        await test.step('PD007-69|navigate to Game design section and upload a background video', async () => {
                // await page.waitForTimeout(200)
                await prizeDropPage.check_Background_video_availablity()
                //select background option
                await prizeDropPage.select_background_video()
                await prizeDropPage.Video_uploader_For_Background_video()
                await prizeDropPage.background_video_wait()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("now validate the change in mobile view", async () => {
                await newprizedropgame.selecthomepage()
                await page.waitForTimeout(4000)
        })
        await test.step('now check the screenshots', async () => {
                await newprizedropgame.video_checker_background_video()
        })
        await test.step("PD007-120|validate error if wrong file is selected as how to play video", async () => {
                //click Prize Drop Section
                await browser.contexts()[0].pages()[0].bringToFront()
                await prizeDropPage.check_Background_video_availablity()
                await prizeDropPage.select_background_video()
                await prizeDropPage.wrong_Video_uploader_For_background_video()
        })
})
//have an issue related to our script
test.skip("PD007-73|validate How to play image upload and its reflection on mobile screen", async ({ loginPage, prizeDropPage, page, browser, MainMenu, menuPage, singupPage, languagePage }, testInfo) => {
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
        // await test.step('check the menu related settings', async () => {
        //         await MainMenu.clickHomeAvater()
        //         await MainMenu.mainMenuBtn()
        //         await MainMenu.mobileDesign()
        //         await MainMenu.clickClearAllBtn()
        //         await languagePage.clickLanguagePage()
        //         await languagePage.clickUserForceLanguageOption()
        //         await languagePage.clickForceLanguageInputField()
        //         await languagePage.selectEnglishLanguage()
        //         await menuPage.clickMenuPage()
        //         await menuPage.clickBottomAlignmentBtn()
        //         await menuPage.click_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_Active_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_active_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await singupPage.clickSignUpPage()
        //         await singupPage.clickAnonymousLogin()
        //         await singupPage.clickPhoneNumberCheckBox()
        //         await singupPage.clickEmailAddressCheckBox()
        //         await singupPage.clickAgeCheckBox()
        //         await singupPage.clickDateOfBirthCheckBox()
        //         await singupPage.clickPostalCodeCheckBox()
        // })
        await test.step("PD007-105|validate error if wrong file is selected as how to play image", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
                //  //click on full screenlogo
                await prizeDropPage.how_to_play_image_upload()
                //upload a wrong file
                await prizeDropPage.wrong_image_uploader()
                await prizeDropPage.validate_wrong_file_typetext()
        })
        await test.step("PD007-71| upload a how to play image", async () => {
                await prizeDropPage.Image_uploader_For_howtoplay_logo()
                await prizeDropPage.howtoplay_video_wait()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("now validate the change in mobile view", async () => {
                await newprizedropgame.selecthowtoplaypage()
        })
        await test.step("now wait for elements to load", async () => {
                await newprizedropgame.wait_for_image()
        })
        await test.step('now check the screenshots', async () => {
                await newprizedropgame.screenshot_matcher_how_to_play_image()
                await page.waitForTimeout(400)
                await prizeDropPage.delete_image_prize_drop()
                //  //click on full screenlogo
                //   await prizeDropPage.how_to_play_image_upload()
        })
})
test("PD007-10|validate How to play video upload and its reflection on mobile screen", async ({ loginPage, prizeDropPage, browser, page, MainMenu, menuPage, languagePage, singupPage }, testInfo) => {
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
        // await test.step('check the menu related settings', async () => {
        //         await MainMenu.clickHomeAvater()
        //         await MainMenu.mainMenuBtn()
        //         await MainMenu.mobileDesign()
        //         await MainMenu.clickClearAllBtn()
        //         await languagePage.clickLanguagePage()
        //         await languagePage.clickUserForceLanguageOption()
        //         await languagePage.clickForceLanguageInputField()
        //         await languagePage.selectEnglishLanguage()
        //         await menuPage.clickMenuPage()
        //         await menuPage.clickBottomAlignmentBtn()
        //         await singupPage.clickSignUpPage()
        //         await singupPage.clickAnonymousLogin()
        //         await singupPage.clickPhoneNumberCheckBox()
        //         await singupPage.clickEmailAddressCheckBox()
        //         await singupPage.clickAgeCheckBox()
        //         await singupPage.clickDateOfBirthCheckBox()
        //         await singupPage.clickPostalCodeCheckBox()
        // })
        await test.step("PD007-72|navigate to Game design section and upload how to play video", async () => {
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
                // await page.waitForTimeout(200)
                await prizeDropPage.check_Howtoplay_video_availablity()
                //select background option
                await prizeDropPage.select_Howtoplay_video()
                await prizeDropPage.Video_uploader_For_Howtoplay_video()
                await prizeDropPage.howtoplay_video_wait()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                // //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
                        ;
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                // await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("now validate the change in mobile view", async () => {
                await newprizedropgame.selecthowtoplaypage()
                await page.waitForTimeout(4000)
        })
        await test.step('now check the screenshots', async () => {
                await newprizedropgame.video_checker_how_to_play_video()
        })
        await test.step("PD007-120|validate error if wrong file is selected as how to play video", async () => {
                //click Prize Drop Section
                await browser.contexts()[0].pages()[0].bringToFront()
                await prizeDropPage.check_Howtoplay_video_availablity()
                await prizeDropPage.select_Howtoplay_video()
                await prizeDropPage.wrong_Video_uploader_For_Howtoplay_video()
        })
})
test("PD007-76|validate rules image upload and its reflection on mobile screen", async ({ loginPage, prizeDropPage, page, browser, MainMenu, menuPage, languagePage, singupPage }, testInfo) => {
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
        // await test.step('check the menu related settings', async () => {
        //         await MainMenu.clickHomeAvater()
        //         await MainMenu.mainMenuBtn()
        //         await MainMenu.mobileDesign()
        //         await MainMenu.clickClearAllBtn()
        //         await languagePage.clickLanguagePage()
        //         await languagePage.clickUserForceLanguageOption()
        //         await languagePage.clickForceLanguageInputField()
        //         await languagePage.selectEnglishLanguage()
        //         await menuPage.clickMenuPage()
        //         await menuPage.clickBottomAlignmentBtn()
        //         await menuPage.click_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_Active_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_active_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await singupPage.clickSignUpPage()
        //         await singupPage.clickAnonymousLogin()
        //         await singupPage.clickPhoneNumberCheckBox()
        //         await singupPage.clickEmailAddressCheckBox()
        //         await singupPage.clickAgeCheckBox()
        //         await singupPage.clickDateOfBirthCheckBox()
        //         await singupPage.clickPostalCodeCheckBox()
        // })
        await test.step("PD007-105|validate error if wrong file is selected as rules image", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
                //  //click on full screenlogo
                await prizeDropPage.rules_image_upload()
                //upload a wrong file
                await prizeDropPage.wrong_image_uploader()
                await prizeDropPage.validate_wrong_file_typetext()
        })
        await test.step("PD007-75|navigate to Game design section and upload a rulesimage", async () => {
                await prizeDropPage.Image_uploader_For_rulesimage()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("now validate the change in mobile view", async () => {
                await newprizedropgame.selectrulespage()
        })
        await test.step("now wait for elements to load", async () => {
                await page.waitForTimeout(1000)
        })
        await test.step('now check the screenshots', async () => {
                await newprizedropgame.screenshot_matcher_rules_image()
                await prizeDropPage.delete_image_prize_drop()
        })
})
test("PD007-79|validate rules video upload and its reflection on mobile screen", async ({ loginPage, prizeDropPage, page, browser, MainMenu, menuPage, languagePage, singupPage }, testInfo) => {
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
        // await test.step('check the menu related settings', async () => {
        //         await MainMenu.clickHomeAvater()
        //         await MainMenu.mainMenuBtn()
        //         await MainMenu.mobileDesign()
        //         await MainMenu.clickClearAllBtn()
        //         await languagePage.clickLanguagePage()
        //         await languagePage.clickUserForceLanguageOption()
        //         await languagePage.clickForceLanguageInputField()
        //         await languagePage.selectEnglishLanguage()
        //         await menuPage.clickMenuPage()
        //         await menuPage.clickBottomAlignmentBtn()
        //         await singupPage.clickSignUpPage()
        //         await singupPage.clickAnonymousLogin()
        //         await singupPage.clickPhoneNumberCheckBox()
        //         await singupPage.clickEmailAddressCheckBox()
        //         await singupPage.clickAgeCheckBox()
        //         await singupPage.clickDateOfBirthCheckBox()
        //         await singupPage.clickPostalCodeCheckBox()
        // })
        await test.step("PD007-78|navigate to Game design section and upload a rules video", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
                // await page.waitForTimeout(200)
                await prizeDropPage.check_rules_video_availablity()
                //select background option
                await prizeDropPage.select_rules_video()
                await prizeDropPage.Video_uploader_For_rules_video()
                await prizeDropPage.rules_video_wait()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("now validate the change in mobile view", async () => {
                await newprizedropgame.selectrulespage()
                await page.waitForTimeout(4000)
        })
        await test.step('now check the screenshots', async () => {
                await newprizedropgame.video_checker_rules_video()
        })
        await test.step("PD007-120|validate error if wrong file is selected as how to play video", async () => {
                //click Prize Drop Section
                await browser.contexts()[0].pages()[0].bringToFront()
                await prizeDropPage.check_rules_video_availablity()
                await prizeDropPage.select_rules_video()
                await prizeDropPage.wrong_Video_uploader_For_rules_video()
        })
})
test("PD007-77|validate splash image upload and its reflection on mobile screen", async ({ loginPage, prizeDropPage, page, browser, MainMenu, menuPage, languagePage, singupPage }, testInfo) => {
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
        // await test.step('check the menu related settings', async () => {
        //         await MainMenu.clickHomeAvater()
        //         await MainMenu.mainMenuBtn()
        //         await MainMenu.mobileDesign()
        //         await MainMenu.clickClearAllBtn()
        //         await languagePage.clickLanguagePage()
        //         await languagePage.clickUserForceLanguageOption()
        //         await languagePage.clickForceLanguageInputField()
        //         await languagePage.selectEnglishLanguage()
        //         await menuPage.clickMenuPage()
        //         await menuPage.clickBottomAlignmentBtn()
        //         await menuPage.click_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_Active_Background_ColorPicker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await menuPage.click_active_text_color_Picker()
        //         await menuPage.clickplusbuttonswatches()
        //         await menuPage.clickColorPickerSaveBtn()
        //         await singupPage.clickSignUpPage()
        //         await singupPage.clickAnonymousLogin()
        //         await singupPage.clickPhoneNumberCheckBox()
        //         await singupPage.clickEmailAddressCheckBox()
        //         await singupPage.clickAgeCheckBox()
        //         await singupPage.clickDateOfBirthCheckBox()
        //         await singupPage.clickPostalCodeCheckBox()
        // })
        await test.step("PD007-105|validate error if wrong file is selected as splash image", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
                //  //click on full screenlogo
                await prizeDropPage.splash_image_upload()
                //upload a wrong file
                await prizeDropPage.wrong_image_uploader()
                await prizeDropPage.validate_wrong_file_typetext()
        })
        await test.step("PD007-77|navigate to Game design section and upload a splash image", async () => {
                await prizeDropPage.Image_uploader_For_splashscreen()
                await prizeDropPage.splash_video_wait()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("wait for elements to load", async () => {
                await page.waitForTimeout(3000)
        })
        await test.step('now validate the change in mobile view', async () => {
                await newprizedropgame.screenshot_matcher_splash_screen()
                //  //click on full screenlogo
                await page.waitForTimeout(500)
                await prizeDropPage.delete_image_prize_drop()
        })
})
test("PD007-125|validate splash video upload and its reflection on mobile screen", async ({ loginPage, prizeDropPage, page, browser, MainMenu, menuPage, languagePage, singupPage }, testInfo) => {
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
        // await test.step('check the menu related settings', async () => {
        //         await MainMenu.clickHomeAvater()
        //         await MainMenu.mainMenuBtn()
        //         await MainMenu.mobileDesign()
        //         await MainMenu.clickClearAllBtn()
        //         await languagePage.clickLanguagePage()
        //         await languagePage.clickUserForceLanguageOption()
        //         await languagePage.clickForceLanguageInputField()
        //         await languagePage.selectEnglishLanguage()
        //         await menuPage.clickMenuPage()
        //         await menuPage.clickBottomAlignmentBtn()
        //         await singupPage.clickSignUpPage()
        //         await singupPage.clickAnonymousLogin()
        //         await singupPage.clickPhoneNumberCheckBox()
        //         await singupPage.clickEmailAddressCheckBox()
        //         await singupPage.clickAgeCheckBox()
        //         await singupPage.clickDateOfBirthCheckBox()
        //         await singupPage.clickPostalCodeCheckBox()
        // })
        await test.step("PD007-124|navigate to Game design section and upload splash video", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
                //remove the background video for complexity
                await prizeDropPage.check_Background_video_availablity()
                // await page.waitForTimeout(200)
                await prizeDropPage.check_splash_video_availablity()
                //select background option
                await prizeDropPage.select_splash_video()
                //now upload video
                await prizeDropPage.Video_uploader_For_splash_video()
                await prizeDropPage.splash_video_wait()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("now validate the change in mobile view", async () => {
                await newprizedropgame.selecthomepage()
        })
        await test.step('now validate the change in mobile view', async () => {
                await newprizedropgame.video_checker_splash_screen_video()
                await prizeDropPage.delete_image_prize_drop()
        })
})
test("PD007-86|validate standby message test and its reflection on mobile screen", async ({ loginPage, prizeDropPage, page, browser }, testInfo) => {
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
        await test.step(" Now click on Game Setting Functionality", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                await prizeDropPage.clickGameDesign()
                await prizeDropPage.check_splash_video_availablity()
                //click Game Settings
                await prizeDropPage.clickGameSettings()
        })
        await test.step("PD007-83|Now validate standby message text editor functionalities ", async () => {
                await prizeDropPage.typestandbymessage('automation test message for standby editor')
                await prizeDropPage.clickboldstandbymessageeditor()
                await prizeDropPage.clickitalicstandbymessageeditor()
                await prizeDropPage.clickorderedstandbymessageeditor()
                await prizeDropPage.clickunderlinestandbymessageeditor()
                await prizeDropPage.clickunorderedstandbymessageeditor()
                await prizeDropPage.clickrightalignedstandbymessage()
                await prizeDropPage.clickleftalignedstandbymessage()
                await prizeDropPage.clickunorderedstandbymessageeditor()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("Now check the updated standby message on mobile screen", async () => {
                await newprizedropgame.selecthomepage()
                await newprizedropgame.message_checker('automation test message for standby editor')
        })
})
test.skip("PD007-126|validate Ending Game message Editor and its full reflection on mobile", async ({ loginPage, prizeDropPage, page, browser }, testInfo) => {
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
        await test.step(" Now click on Game Setting Functionality", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Settings
                await prizeDropPage.clickGameSettings()
        })
        await test.step("PD007-84|now validate game ending game message functionality full regression", async () => {
                await prizeDropPage.typeendinggamemessage('automation test message for endging game message editor')
                await prizeDropPage.clickboldendinggamemessageeditor()
                await prizeDropPage.clickitalicendinggamemessageeditor()
                await prizeDropPage.clickorderedendinggamemessageeditor()
                await prizeDropPage.clickunderlineendinggamemessageeditor()
                await prizeDropPage.clickunorderedendinggamemessageeditor()
                await prizeDropPage.clickrightalignedendinggamemessage()
                await prizeDropPage.clickleftalignedendinggamemessage()
                await prizeDropPage.clickunorderedendinggamemessageeditor()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        //need to start game and play and then validate here
        await test.step("Now check the updated standby message on mobile screen", async () => {
                await newprizedropgame.selecthomepage()
                // await newprizedropgame.message_checker('automation test message for ending game message editor')
        })
})
test.skip("PD007-127|validate selection message Editor and its full regression", async ({ loginPage, prizeDropPage, page, browser }, testInfo) => {
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
        await test.step(" Now click on Game Setting Functionality", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Settings
                await prizeDropPage.clickGameSettings()
        })
        await test.step("PD007-85|now validate seleaction message functionality full regression", async () => {
                await prizeDropPage.typeselectionmessage('automation test message for endging game message editor')
                await prizeDropPage.clickboldselectionmessageeditor()
                await prizeDropPage.clickitalicselectionmessageeditor()
                await prizeDropPage.clickorderedselectionmessageeditor()
                await prizeDropPage.clickunderlineselectionmessageeditor()
                await prizeDropPage.clickunorderedselectionmessageeditor()
                await prizeDropPage.clickrightalignedselectionmessage()
                await prizeDropPage.clickleftalignedselectionmessage()
                await prizeDropPage.clickunorderedselectionmessageeditor()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        //need to start game and play and then validate here
        await test.step("Now check the updated standby message on mobile screen", async () => {
                await newprizedropgame.selecthomepage()
                // await newprizedropgame.message_checker('automation test message for ending game message editor')
        })
})
//have an issue related to our script
test.skip("PD007-88|validate entry screen dropdown is reflected on mobile screen", async ({ loginPage, prizeDropPage, page, browser }, testInfo) => {
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
        await test.step(" Now click on Game Setting Functionality", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Settings
                await prizeDropPage.clickGameSettings()
        })
        await test.step('PD007-87|now select entry screen dropdown', async () => {
                await prizeDropPage.clickEntryScreen()
        })
        await test.step("PD007-87|select how to screen", async () => {
                await prizeDropPage.selectHowToScreen()
        })
        let newTab = null;
        let newprizedropgame: prizeDropMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("now provide values in form field of mobile view and submit", async () => {
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
                await newprizedropgame.clicksubmit()
        })
        await test.step("now validate selected entry screen dropdown is reflected in mobile view ", async () => {
                await newprizedropgame.check_how_to_play_page_at_entry()
        })
})
test("007PD-0128 | Validate Analytics Section Functionality", async ({ loginPage, prizeDropPage, page, }, testInfo) => {
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
        await test.step("Validate Analytics Section Functionality", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                await page.waitForTimeout(3000)
                //click Prizing Section
                await prizeDropPage.clickAnalyticsSection()
                //click Prizing Section
                await prizeDropPage.clickAnalyticsSection()
                //click Prizing Section
                await prizeDropPage.verifySessionAnalyticsText()
        })
        await test.step("PD007-131|validate download analytics is working", async () => {
                await prizeDropPage.downloadAnlytics()
        })
        await test.step("validate date header toggle is working", async () => {
                await prizeDropPage.click_date_header()
        })
})
test("007PD-0129 | Validate Game Edit And Delete Functionality", async ({ loginPage, prizeDropPage, functions, page, }, testInfo) => {
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
        // await test.step("verify game edit functionality",async()=>{
        //         await prizeDropPage.clickEditSection()
        //         await prizeDropPage.inputEditGameTitle()
        //         await prizeDropPage.clickEditBtn()
        // })
        await test.step("PD007-104|validate delete section in added prize is working", async () => {
                await prizeDropPage.clickPrizingSection()
                await prizeDropPage.click_delete_prize_button()
                await prizeDropPage.confirmDeleteBtn()
        })
        await test.step("PD007-102|Validate delete section in prize drop is working", async () => {
                //click Game Delete Btn
                await prizeDropPage.clickGameDeleteBtn()
                await page.waitForTimeout(2000)
        })
        await test.step("PD007-103|Validate delete modal text is working", async () => {
                //confirm Delete Btn
                await prizeDropPage.confirmDeleteBtn()
                await page.waitForTimeout(4000)
        })
})
