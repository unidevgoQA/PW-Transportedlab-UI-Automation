import test, { expect } from "@fixtures/basePages";
import mobilePreviewPage from "@pages/mobilePreview.page";
import prizeDropMobilePage from "@pages/prizedrop_mobile_game.page";
import * as data from "@testData/login.cred.json"
import { readFileSync } from 'fs'
const clipboard = require('clipboardy')
test("000 | Select All The Menu Ready For UI Varification", async ({ loginPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
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
test("MD002-001 | Validate Font upload functionality", async ({ loginPage, functions, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("Validate Font upload functionality", async () => {
                //delete Font
                await MainMenu.deleteFont()
                //click Upload Font And Upload Files
                await functions.fontUploadFunction()
                await MainMenu.clickUploadFontInputFiled()
                await MainMenu.verifyFontUploadedSuccessfully()
        })
})
test("MD002-002 | Validate Try To Upload Invalid Font Format", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("Validate Try To Upload Invalid Font", async () => {
                //click Upload Font And Upload Files
                await MainMenu.validateTryToUploadInvalidFont()
                await page.waitForTimeout(4000)
        })
})
test("MD002-003 | Validate Try To Upload Invalid Font Format", async ({ loginPage, functions, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
        })
        await test.step("Validate Try To Upload Invalid Font", async () => {
                //click Upload Font And Upload Files
                await MainMenu.clickMobileDesign();
                await functions.bannerImageUploadFunction()
                await MainMenu.clickUploadFontInputFiled()
                page.on("dialog", async (alert) => {
                        console.log('Alert message: ' + alert.message());
                        await alert.accept();
                });
                // await page.click("#accept")
                await page.waitForEvent("dialog");
        })
})
test("MD002-004 | Validate Uploaded Font Delete Functionality", async ({ loginPage, functions, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
        })
        await test.step("Validate Try To Upload Invalid Font", async () => {
                await MainMenu.clickMobileDesign();
                await MainMenu.deleteFont()
                await functions.fontUploadFunction()
                await MainMenu.clickUploadFontInputFiled()
                await MainMenu.verifyFontUploadedSuccessfully()
        })
})
test("MD002-005 | Add New Configuration For Main Menu Mobile Screen Test", async ({ loginPage, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step(" Add New Configuration", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                const screenshot = await page.screenshot();
                await testInfo.attach("click Prize Drop Section", {
                        body: screenshot,
                        contentType: "image/png",
                })
                await page.waitForTimeout(5000)
                await prizeDropPage.verifyDeleteAutoConfigurationIfHave()
                await page.waitForTimeout(2000)
                //verify Configurations Text
                await prizeDropPage.verifyConfigurationsText()
                //click Add New Config Plus Btn
                await prizeDropPage.clickAddNewConfigPlusBtn()
                // verify configuration name header is visible()
                await prizeDropPage.verifyAddNewConfigPlusWindowText()
                //input Configuration Name
                await prizeDropPage.inputConfigurationName()
                await page.waitForTimeout(2000)
                // check cancel button visiblity
                await prizeDropPage.veirfycancelBtnvisiblity()
                //click Add Btn
                await prizeDropPage.clickAddBtn()
                //click Game Design
                await prizeDropPage.clickGameDesign()
                await page.waitForTimeout(4000)
        })
})
test("MD002-006 | Validate Admin Successfully Select Entry Screen As User Profile", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("click Entry Screen Select Field", async () => {
                await MainMenu.clickEntryScreenSelectField()
        })
        await test.step("click Entry Screen Select Field", async () => {
                await MainMenu.selectEntryScreenUserProfile()

        })
})
test("MD002-007 | Validate Entry Screen As User Profile Applied Successfully on Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickOkBtn()
                // await newmobilePreviewPage.clickMyProfile()
                await newmobilePreviewPage.varifyMyProfileSuccessfullySelectedAsEntryScreen()
                // await newmobilePreviewPage.verifyUserNameInputFieldTitle()
        })
})
test("MD002-008 | Validate Admin Successfully Select Entry Screen As Role", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("click Entry Screen Select Field", async () => {
                await MainMenu.clickEntryScreenSelectField()
        })
        await test.step("click Entry Screen Select Field", async () => {
                await MainMenu.selectEntryScreenRules()
        })
})
test("MD002-009 | Validate Entry Screen As Rules Applied Successfully on Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.verifyRulesEntryIsApplyed()
        })
})
test("MD002-010 | Validate Admin Successfully Select Entry Screen As How To Play", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("click Entry Screen Select Field", async () => {
                await MainMenu.clickEntryScreenSelectField()
        })
        await test.step("select Entry Screen How To Play", async () => {
                await MainMenu.selectEntryScreenHowToPlay()
        })
})
test("MD002-011 | Validate Entry Screen As How To Play Applied Successfully on Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.verifyHowToPlayEntryIsApplyed()
        })
})
test("MD002-012 | Validate Admin Successfully Select Entry Screen As Prize", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("click Entry Screen Select Field", async () => {
                await MainMenu.clickEntryScreenSelectField()
        })
        await test.step("select Entry Screen How To Play", async () => {
                await MainMenu.selectEntryScreenPrize()
        })
})
test("MD002-013 | Validate Entry Screen As Prize Applied Successfully on Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.verifyPrizeEntryIsApplyed()
        })
})
test("MD002-014 | Validate Admin Successfully Select Entry Screen As Home", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("click Entry Screen Select Field", async () => {
                await MainMenu.clickEntryScreenSelectField()
        })
        await test.step("click Entry Screen Select Field", async () => {
                await MainMenu.selectEntryScreenHome()
        })
})
test("MD002-015 | Validate Entry Screen As Home Applied Successfully on Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickHomeBtn()
                await newmobilePreviewPage.verifyHomeEntryIsApplyed()
        })
})
//Primary Color Section Here...
test("MD002-016 | Admin Successfully Input Primary Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkPrimaryColortxt()
                await MainMenu.clickPrimaryColorField()
                await MainMenu.primaryColorFirstInputField()
                await MainMenu.primaryColorSecondInputField()
                await MainMenu.primaryColorThirdInputField()
                await MainMenu.primaryColorOpacityInputField()
                await MainMenu.primaryColorHexInputField()
                await MainMenu.clickSaveBtn()
        })
})
test.skip("MD002-017 | Validate Primary Color Applied Into Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
                // //click Game Design
                // await prizeDropPage.clickGameDesign()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickHomeBtn()
                await newmobilePreviewPage.verifyPrimaryColorAppliedInMobile()
        })
})
test("MD002-018 | Validate Delete Functionality For Primary Color Swatche", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkPrimaryColortxt()
                await MainMenu.clickPrimaryColorField()
                await MainMenu.primaryColorFirstInputField()
                await MainMenu.primaryColorSecondInputField()
                await MainMenu.primaryColorThirdInputField()
                await MainMenu.primaryColorOpacityInputField()
                await MainMenu.primaryColorHexInputField()
                await MainMenu.clickColorSwatchesDeleteBtn()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-019 | Validate Admin Successfully Select Radial Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkPrimaryColortxt()
                await MainMenu.clickPrimaryColorField()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeRadial()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-020 | Validate Admin Successfully Select Diagonal Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkPrimaryColortxt()
                await MainMenu.clickPrimaryColorField()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeDiagonal()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-021 | Validate Admin Successfully Select Vertical Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkPrimaryColortxt()
                await MainMenu.clickPrimaryColorField()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeVertical()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-022 | Validate Admin Successfully Select Horizontal Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkPrimaryColortxt()
                await MainMenu.clickPrimaryColorField()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeHorizontal()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-023 | Validate Admin Successfully Select Solid Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkPrimaryColortxt()
                await MainMenu.clickPrimaryColorField()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeSolid()
                await MainMenu.clickSaveBtn()
        })
})
//Secondary Color Section Here...
test("MD002-024 | Verify input secondary color functionality", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input secondary color functionality", async () => {
                await MainMenu.checkSecondaryText();
                await MainMenu.clickSecondaryColorBtn();
                await MainMenu.clickSwatchesColorNumberFour()
                // await MainMenu.SecondaryColorFirstInputField()
                // await MainMenu.SecondaryColorSecondInputField()
                // await MainMenu.SecondaryColorThirdInputField()
                // await MainMenu.SecondaryColorOpacityInputField()
                // await MainMenu.SecondaryColorHexInputField()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-025 | Validate Secondary Color Applied Into Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
                // //click Game Design
                // await prizeDropPage.clickGameDesign()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.clickHowToPlayBtn()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.verifySecondaryColorAppliedInMobile()
        })
})
test("MD002-026 | Validate Delete Functionality For Secondary Color Swatches", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input secondary color functionality", async () => {
                await MainMenu.checkSecondaryText();
                await MainMenu.clickSecondaryColorBtn();
                await MainMenu.clickSwatchesColorNumberFour()
                await MainMenu.clickColorSwatchesDeleteBtn()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-027 | Validate Admin Successfully Select Radial Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkSecondaryText();
                await MainMenu.clickSecondaryColorBtn();
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeRadial()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-028 | Validate Admin Successfully Select Diagonal Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkSecondaryText();
                await MainMenu.clickSecondaryColorBtn();
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeDiagonal()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-029 | Validate Admin Successfully Select Vertical Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkSecondaryText();
                await MainMenu.clickSecondaryColorBtn();
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeVertical()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-030 | Validate Admin Successfully Select Horizontal Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkSecondaryText();
                await MainMenu.clickSecondaryColorBtn();
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeHorizontal()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-031 | Validate Admin Successfully Select Solid Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkSecondaryText();
                await MainMenu.clickSecondaryColorBtn();
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeSolid()
                await MainMenu.clickSwatchesColorNumberFour()
                await MainMenu.clickSaveBtn()
        })
})
//Tertiary Color Section Here...
test("MD002-032 | Verify input Tertiary color functionality", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input secondary color functionality", async () => {
                await MainMenu.checkTertiaryText();
                await MainMenu.clickTertiaryColorBtn();
                await MainMenu.clickSwatchesColorNumberFive()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-033 | Validate Tertiary Color Applied Into Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
                // //click Game Design
                // await prizeDropPage.clickGameDesign()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.clickHowToPlayBtn()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.verifySecondaryColorAppliedInMobile()
        })
})
test("MD002-034 | Validate Delete Functionality For Secondary Color Swatches", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input secondary color functionality", async () => {
                await MainMenu.checkTertiaryText();
                await MainMenu.clickTertiaryColorBtn();
                await MainMenu.clickSwatchesColorNumberFour()
                await MainMenu.clickColorSwatchesDeleteBtn()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-035 | Validate Admin Successfully Select Radial Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkTertiaryText();
                await MainMenu.clickTertiaryColorBtn();
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeRadial()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-036 | Validate Admin Successfully Select Diagonal Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkTertiaryText();
                await MainMenu.clickTertiaryColorBtn();
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeDiagonal()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-037 | Validate Admin Successfully Select Vertical Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkTertiaryText();
                await MainMenu.clickTertiaryColorBtn();
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeVertical()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-038 | Validate Admin Successfully Select Horizontal Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkTertiaryText();
                await MainMenu.clickTertiaryColorBtn();
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeHorizontal()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-039 | Validate Admin Successfully Select Solid Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkTertiaryText();
                await MainMenu.clickTertiaryColorBtn();
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeSolid()
                await MainMenu.clickSaveBtn()
        })
})
//Test Color Section Here...
// Validate all the Uploaded Image File Delete Functionality
//Button Color Section Here...
test("MD002-040 | Verify input Button color functionality", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input Button color functionality", async () => {
                await MainMenu.checkTertiaryText();
                await MainMenu.clickButtonColorBtn()
                await MainMenu.clickSwatchesColorNumberFive()
                await MainMenu.clickSaveBtn()
        })
})
test.skip("MD002-042 | Validate Button Color Applied Into Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
                // //click Game Design
                // await prizeDropPage.clickGameDesign()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.clickHowToPlayBtn()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.verifySecondaryColorAppliedInMobile()
        })
})
test("MD002-043 | Validate Delete Functionality For Button Color Swatches", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input Button color functionality", async () => {
                await MainMenu.checkButtonText();
                await MainMenu.clickButtonColorBtn();
                await MainMenu.clickSwatchesColorNumberFour()
                await MainMenu.clickColorSwatchesDeleteBtn()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-044 | Validate Admin Successfully Select Radial Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkButtonText();
                await MainMenu.clickButtonColorBtn();
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeRadial()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-045 | Validate Admin Successfully Select Diagonal Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkButtonText();
                await MainMenu.clickButtonColorBtn();
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeDiagonal()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-046 | Validate Admin Successfully Select Vertical Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkButtonText();
                await MainMenu.clickButtonColorBtn();
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeVertical()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-047 | Validate Admin Successfully Select Horizontal Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkButtonText();
                await MainMenu.clickButtonColorBtn();
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeHorizontal()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-048 | Validate Admin Successfully Select Solid Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input parimary color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkButtonText();
                await MainMenu.clickButtonColorBtn();
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeSolid()
                await MainMenu.clickSaveBtn()
        })
})
//Button Glow Color Section Here...
test("MD002-049 | Verify input Button Glow color functionality", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input Batton Glow color functionality", async () => {
                await MainMenu.checkButtonGlowText()
                await MainMenu.clickButtonGlowColorBtn()
                await MainMenu.clickSwatchesColorNumberFive()
                await MainMenu.clickSaveBtn()
        })
})
test.skip("MD002-050 | Validate Button Blow Color Applied Into Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
                // //click Game Design
                // await prizeDropPage.clickGameDesign()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.clickHowToPlayBtn()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.verifySecondaryColorAppliedInMobile()
        })
})
test("MD002-051 | Validate Delete Functionality For Secondary Color Swatches", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input Batton Glow color functionality", async () => {
                await MainMenu.checkButtonGlowText()
                await MainMenu.clickButtonGlowColorBtn()
                await MainMenu.clickSwatchesColorNumberFour()
                await MainMenu.clickColorSwatchesDeleteBtn()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-052 | Validate Admin Successfully Select Radial Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Batton Glow color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkButtonGlowText()
                await MainMenu.clickButtonGlowColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeRadial()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-053 | Validate Admin Successfully Select Diagonal Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Batton Glow color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkButtonGlowText()
                await MainMenu.clickButtonGlowColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeDiagonal()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-054 | Validate Admin Successfully Select Vertical Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Batton Glow color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkButtonGlowText()
                await MainMenu.clickButtonGlowColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeVertical()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-055 | Validate Admin Successfully Select Horizontal Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Batton Glow color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkButtonGlowText()
                await MainMenu.clickButtonGlowColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeHorizontal()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-056 | Validate Admin Successfully Select Solid Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Batton Glow color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkButtonGlowText()
                await MainMenu.clickButtonGlowColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeSolid()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-057 | Verify input Test color functionality", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input Text color functionality", async () => {
                await MainMenu.checkTextText()
                await MainMenu.clickTextColorBtn()
                await MainMenu.clickSwatchesColorNumberFive()
                await MainMenu.clickSaveBtn()
        })
})
test.skip("MD002-058 | Validate Test Color Applied Into Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
                // //click Game Design
                // await prizeDropPage.clickGameDesign()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.clickHowToPlayBtn()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.verifySecondaryColorAppliedInMobile()
        })
})
test("MD002-059 | Validate Delete Functionality For Test Color Swatches", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input Text color functionality", async () => {
                await MainMenu.checkTextText()
                await MainMenu.clickTextColorBtn()
                await MainMenu.clickSwatchesColorNumberFour()
                await MainMenu.clickColorSwatchesDeleteBtn()
                await MainMenu.clickSaveBtn()
        })
})
// test("MD002-060 | Validate Admin Successfully Select Radial Color", async ({ loginPage, MainMenu, page }) => {
//         await test.step("Login Admin And Land to Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 await MainMenu.clickHomeAvater();
//                 await MainMenu.mainMenuBtn();
//                 await MainMenu.clickMobileDesign();
//                 await page.waitForTimeout(6000)
//                 // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
//         })
//         await test.step("MD002-02 | Verify input Text color functionality", async () => {
//                 await MainMenu.clickClearAllBtn();
//                 await MainMenu.checkTextText()
//                 await MainMenu.clickTextColorBtn()
//                 await MainMenu.clcikColorTypeSelectionInputField()
//                 await MainMenu.selectColorTypeRadial()
//                 await MainMenu.clickSaveBtn()
//         })
// })
// test("MD002-061 | Validate Admin Successfully Select Diagonal Color", async ({ loginPage, MainMenu, page }) => {
//         await test.step("Login Admin And Land to Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 await MainMenu.clickHomeAvater();
//                 await MainMenu.mainMenuBtn();
//                 await MainMenu.clickMobileDesign();
//                 await page.waitForTimeout(6000)
//                 // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
//         })
//         await test.step("MD002-02 | Verify input Text color functionality", async () => {
//                 await MainMenu.clickClearAllBtn();
//                 await MainMenu.checkTextText()
//                 await MainMenu.clickTextColorBtn()
//                 await MainMenu.clcikColorTypeSelectionInputField()
//                 await MainMenu.selectColorTypeDiagonal()
//                 await MainMenu.clickSaveBtn()
//         })
// })
// test("MD002-062 | Validate Admin Successfully Select Vertical Color", async ({ loginPage, MainMenu, page }) => {
//         await test.step("Login Admin And Land to Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 await MainMenu.clickHomeAvater();
//                 await MainMenu.mainMenuBtn();
//                 await MainMenu.clickMobileDesign();
//                 await page.waitForTimeout(6000)
//                 // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
//         })
//         await test.step("MD002-02 | Verify input Text color functionality", async () => {
//                 await MainMenu.clickClearAllBtn();
//                 await MainMenu.checkTextText()
//                 await MainMenu.clickTextColorBtn()
//                 await MainMenu.clcikColorTypeSelectionInputField()
//                 await MainMenu.selectColorTypeVertical()
//                 await MainMenu.clickSaveBtn()
//         })
// })
// test("MD002-063 | Validate Admin Successfully Select Horizontal Color", async ({ loginPage, MainMenu, page }) => {
//         await test.step("Login Admin And Land to Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 await MainMenu.clickHomeAvater();
//                 await MainMenu.mainMenuBtn();
//                 await MainMenu.clickMobileDesign();
//                 await page.waitForTimeout(6000)
//                 // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
//         })
//         await test.step("MD002-02 | Verify input Text color functionality", async () => {
//                 await MainMenu.clickClearAllBtn();
//                 await MainMenu.checkTextText()
//                 await MainMenu.clickTextColorBtn()
//                 await MainMenu.clcikColorTypeSelectionInputField()
//                 await MainMenu.selectColorTypeHorizontal()
//                 await MainMenu.clickSaveBtn()
//         })
// })
// test("MD002-064 | Validate Admin Successfully Select Solid Color", async ({ loginPage, MainMenu, page }) => {
//         await test.step("Login Admin And Land to Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 await MainMenu.clickHomeAvater();
//                 await MainMenu.mainMenuBtn();
//                 await MainMenu.clickMobileDesign();
//                 await page.waitForTimeout(6000)
//                 // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
//         })
//         await test.step("MD002-02 | Verify input Text color functionality", async () => {
//                 await MainMenu.clickClearAllBtn();
//                 await MainMenu.checkTextText()
//                 await MainMenu.clickTextColorBtn()
//                 await MainMenu.clcikColorTypeSelectionInputField()
//                 await MainMenu.selectColorTypeSolid()
//                 await MainMenu.clickSaveBtn()
//         })
// })
//Test Glow Color Section Here...
test("MD002-065 | Verify input Test Glow color functionality", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input Text Glow color functionality", async () => {
                await MainMenu.checkTextDialogBoxText()
                await MainMenu.clickTextDialogBoxColorBtn()
                await MainMenu.clickSwatchesColorNumberFive()
                await MainMenu.clickSaveBtn()
        })
})
test.skip("MD002-066 | Validate Test Glow Color Applied Into Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
                // //click Game Design
                // await prizeDropPage.clickGameDesign()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.clickHowToPlayBtn()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.verifySecondaryColorAppliedInMobile()
        })
})
test("MD002-067 | Validate Delete Functionality For Test Glow Color Swatches", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input Text Glow color functionality", async () => {
                await MainMenu.checkTextDialogBoxText()
                await MainMenu.clickTextDialogBoxColorBtn()
                await MainMenu.clickSwatchesColorNumberFour()
                await MainMenu.clickColorSwatchesDeleteBtn()
                await MainMenu.clickSaveBtn()
        })
})
// test("MD002-068 | Validate Admin Successfully Select Radial Color", async ({ loginPage, MainMenu, page }) => {
//         await test.step("Login Admin And Land to Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 await MainMenu.clickHomeAvater();
//                 await MainMenu.mainMenuBtn();
//                 await MainMenu.clickMobileDesign();
//                 await page.waitForTimeout(6000)
//                 // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
//         })
//         await test.step("MD002-02 | Verify input Text Glow color functionality", async () => {
//                 await MainMenu.clickClearAllBtn();
//                 await MainMenu.checkTextDialogBoxText()
//                 await MainMenu.clickTextDialogBoxColorBtn()
//                 await MainMenu.clcikColorTypeSelectionInputField()
//                 await MainMenu.selectColorTypeRadial()
//                 await MainMenu.clickSaveBtn()
//         })
// })
// test("MD002-069 | Validate Admin Successfully Select Diagonal Color", async ({ loginPage, MainMenu, page }) => {
//         await test.step("Login Admin And Land to Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 await MainMenu.clickHomeAvater();
//                 await MainMenu.mainMenuBtn();
//                 await MainMenu.clickMobileDesign();
//                 await page.waitForTimeout(6000)
//                 // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
//         })
//         await test.step("MD002-02 | Verify input Text Glow color functionality", async () => {
//                 await MainMenu.clickClearAllBtn();
//                 await MainMenu.checkTextDialogBoxText()
//                 await MainMenu.clickTextDialogBoxColorBtn()
//                 await MainMenu.clcikColorTypeSelectionInputField()
//                 await MainMenu.selectColorTypeDiagonal()
//                 await MainMenu.clickSaveBtn()
//         })
// })
// test("MD002-070 | Validate Admin Successfully Select Vertical Color", async ({ loginPage, MainMenu, page }) => {
//         await test.step("Login Admin And Land to Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 await MainMenu.clickHomeAvater();
//                 await MainMenu.mainMenuBtn();
//                 await MainMenu.clickMobileDesign();
//                 await page.waitForTimeout(6000)
//                 // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
//         })
//         await test.step("MD002-02 | Verify input Text Glow color functionality", async () => {
//                 await MainMenu.clickClearAllBtn();
//                 await MainMenu.checkTextDialogBoxText()
//                 await MainMenu.clickTextDialogBoxColorBtn()
//                 await MainMenu.clcikColorTypeSelectionInputField()
//                 await MainMenu.selectColorTypeVertical()
//                 await MainMenu.clickSaveBtn()
//         })
// })
// test("MD002-071 | Validate Admin Successfully Select Horizontal Color", async ({ loginPage, MainMenu, page }) => {
//         await test.step("Login Admin And Land to Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 await MainMenu.clickHomeAvater();
//                 await MainMenu.mainMenuBtn();
//                 await MainMenu.clickMobileDesign();
//                 await page.waitForTimeout(6000)
//                 // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
//         })
//         await test.step("MD002-02 | Verify input Text Glow color functionality", async () => {
//                 await MainMenu.clickClearAllBtn();
//                 await MainMenu.checkTextDialogBoxText()
//                 await MainMenu.clickTextDialogBoxColorBtn()
//                 await MainMenu.clcikColorTypeSelectionInputField()
//                 await MainMenu.selectColorTypeHorizontal()
//                 await MainMenu.clickSaveBtn()
//         })
// })
// test("MD002-072 | Validate Admin Successfully Select Solid Color", async ({ loginPage, MainMenu, page }) => {
//         await test.step("Login Admin And Land to Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 await MainMenu.clickHomeAvater();
//                 await MainMenu.mainMenuBtn();
//                 await MainMenu.clickMobileDesign();
//                 await page.waitForTimeout(6000)
//                 // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
//         })
//         await test.step("MD002-02 | Verify input Text Glow color functionality", async () => {
//                 await MainMenu.clickClearAllBtn();
//                 await MainMenu.checkTextDialogBoxText()
//                 await MainMenu.clickTextDialogBoxColorBtn()
//                 await MainMenu.clcikColorTypeSelectionInputField()
//                 await MainMenu.selectColorTypeSolid()
//                 await MainMenu.clickSaveBtn()
//         })
// })
//Header Color Section Here...
test("MD002-073 | Verify input Header color functionality", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input Header color functionality", async () => {
                await MainMenu.checkHeaderFieldText()
                await MainMenu.clickHeaderFieldColorBtn()
                await MainMenu.clickSwatchesColorNumberFive()
                await MainMenu.clickSaveBtn()
        })
})
test.skip("MD002-074 | Validate Header Color Applied Into Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
                // //click Game Design
                // await prizeDropPage.clickGameDesign()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.clickHowToPlayBtn()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.verifySecondaryColorAppliedInMobile()
        })
})
test("MD002-075 | Validate Delete Functionality For Header Color Swatches", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input Header color functionality", async () => {
                await MainMenu.checkHeaderFieldText()
                await MainMenu.clickHeaderFieldColorBtn()
                await MainMenu.clickSwatchesColorNumberFour()
                await MainMenu.clickColorSwatchesDeleteBtn()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-076 | Validate Admin Successfully Select Radial Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Header color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkHeaderFieldText()
                await MainMenu.clickHeaderFieldColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeRadial()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-077 | Validate Admin Successfully Select Diagonal Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Header color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkHeaderFieldText()
                await MainMenu.clickHeaderFieldColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeDiagonal()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-078 | Validate Admin Successfully Select Vertical Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Header color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkHeaderFieldText()
                await MainMenu.clickHeaderFieldColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeVertical()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-079 | Validate Admin Successfully Select Horizontal Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Header color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkHeaderFieldText()
                await MainMenu.clickHeaderFieldColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeHorizontal()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-080 | Validate Admin Successfully Select Solid Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Header color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkHeaderFieldText()
                await MainMenu.clickHeaderFieldColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeSolid()
                await MainMenu.clickSaveBtn()
        })
})
//Header Text Color Section Here...
test("MD002-081 | Verify input Header Text color functionality", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input Header Text color functionality", async () => {
                await MainMenu.checkHeaderTextFieldText()
                await MainMenu.clickHeaderTextFieldColorBtn()
                await MainMenu.clickSwatchesColorNumberFive()
                await MainMenu.clickSaveBtn()
        })
})
test.skip("MD002-082 | Validate Header Text Color Applied Into Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
                // //click Game Design
                // await prizeDropPage.clickGameDesign()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.clickHowToPlayBtn()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.verifySecondaryColorAppliedInMobile()
        })
})
test("MD002-083 | Validate Delete Functionality For Secondary Color Swatches", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input Header Text color functionality", async () => {
                await MainMenu.checkHeaderTextFieldText()
                await MainMenu.clickHeaderTextFieldColorBtn()
                await MainMenu.clickSwatchesColorNumberFour()
                await MainMenu.clickColorSwatchesDeleteBtn()
                await MainMenu.clickSaveBtn()
        })
})
// test("MD002-084 | Validate Admin Successfully Select Radial Color", async ({ loginPage, MainMenu, page }) => {
//         await test.step("Login Admin And Land to Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 await MainMenu.clickHomeAvater();
//                 await MainMenu.mainMenuBtn();
//                 await MainMenu.clickMobileDesign();
//                 await page.waitForTimeout(6000)
//                 // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
//         })
//         await test.step("MD002-02 | Verify input Header Text color functionality", async () => {
//                 await MainMenu.clickClearAllBtn();
//                 await MainMenu.checkHeaderTextFieldText()
//                 await MainMenu.clickHeaderTextFieldColorBtn()
//                 await MainMenu.clcikColorTypeSelectionInputField()
//                 await MainMenu.selectColorTypeRadial()
//                 await MainMenu.clickSaveBtn()
//         })
// })
// test("MD002-085 | Validate Admin Successfully Select Diagonal Color", async ({ loginPage, MainMenu, page }) => {
//         await test.step("Login Admin And Land to Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 await MainMenu.clickHomeAvater();
//                 await MainMenu.mainMenuBtn();
//                 await MainMenu.clickMobileDesign();
//                 await page.waitForTimeout(6000)
//                 // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
//         })
//         await test.step("MD002-02 | Verify input Header Text color functionality", async () => {
//                 await MainMenu.clickClearAllBtn();
//                 await MainMenu.checkHeaderTextFieldText()
//                 await MainMenu.clickHeaderTextFieldColorBtn()
//                 await MainMenu.clcikColorTypeSelectionInputField()
//                 await MainMenu.selectColorTypeDiagonal()
//                 await MainMenu.clickSaveBtn()
//         })
// })
// test("MD002-086 | Validate Admin Successfully Select Vertical Color", async ({ loginPage, MainMenu, page }) => {
//         await test.step("Login Admin And Land to Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 await MainMenu.clickHomeAvater();
//                 await MainMenu.mainMenuBtn();
//                 await MainMenu.clickMobileDesign();
//                 await page.waitForTimeout(6000)
//                 // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
//         })
//         await test.step("MD002-02 | Verify input Header Text color functionality", async () => {
//                 await MainMenu.clickClearAllBtn();
//                 await MainMenu.checkHeaderTextFieldText()
//                 await MainMenu.clickHeaderTextFieldColorBtn()
//                 await MainMenu.clcikColorTypeSelectionInputField()
//                 await MainMenu.selectColorTypeVertical()
//                 await MainMenu.clickSaveBtn()
//         })
// })
// test("MD002-087 | Validate Admin Successfully Select Horizontal Color", async ({ loginPage, MainMenu, page }) => {
//         await test.step("Login Admin And Land to Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 await MainMenu.clickHomeAvater();
//                 await MainMenu.mainMenuBtn();
//                 await MainMenu.clickMobileDesign();
//                 await page.waitForTimeout(6000)
//                 // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
//         })
//         await test.step("MD002-02 | Verify input Header Text color functionality", async () => {
//                 await MainMenu.clickClearAllBtn();
//                 await MainMenu.checkHeaderTextFieldText()
//                 await MainMenu.clickHeaderTextFieldColorBtn()
//                 await MainMenu.clcikColorTypeSelectionInputField()
//                 await MainMenu.selectColorTypeHorizontal()
//                 await MainMenu.clickSaveBtn()
//         })
// })
// test("MD002-088 | Validate Admin Successfully Select Solid Color", async ({ loginPage, MainMenu, page }) => {
//         await test.step("Login Admin And Land to Home Screen", async () => {
//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')
//                 await MainMenu.clickHomeAvater();
//                 await MainMenu.mainMenuBtn();
//                 await MainMenu.clickMobileDesign();
//                 await page.waitForTimeout(6000)
//                 // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
//         })
//         await test.step("MD002-02 | Verify input Header Text color functionality", async () => {
//                 await MainMenu.clickClearAllBtn();
//                 await MainMenu.checkHeaderTextFieldText()
//                 await MainMenu.clickHeaderTextFieldColorBtn()
//                 await MainMenu.clcikColorTypeSelectionInputField()
//                 await MainMenu.selectColorTypeSolid()
//                 await MainMenu.clickSaveBtn()
//         })
// })
//Gamification Color Section Here...
test("MD002-089 | Verify input Gamification color functionality", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input Gamification color functionality", async () => {
                await MainMenu.checkGamificationFieldText()
                await MainMenu.clickGamificationFieldColorBtn()
                await MainMenu.clickSwatchesColorNumberFive()
                await MainMenu.clickSaveBtn()
        })
})
test.skip("MD002-090 | Validate Gamification Color Applied Into Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
                // //click Game Design
                // await prizeDropPage.clickGameDesign()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.clickHowToPlayBtn()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.verifySecondaryColorAppliedInMobile()
        })
})
test("MD002-091 | Validate Delete Functionality For Secondary Color Swatches", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input Gamification color functionality", async () => {
                await MainMenu.checkGamificationFieldText()
                await MainMenu.clickGamificationFieldColorBtn()
                await MainMenu.clickSwatchesColorNumberFour()
                await MainMenu.clickColorSwatchesDeleteBtn()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-092 | Validate Admin Successfully Select Radial Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Gamification color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkGamificationFieldText()
                await MainMenu.clickGamificationFieldColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeRadial()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-093 | Validate Admin Successfully Select Diagonal Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Gamification color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkGamificationFieldText()
                await MainMenu.clickGamificationFieldColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeDiagonal()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-094 | Validate Admin Successfully Select Vertical Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Gamification color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkGamificationFieldText()
                await MainMenu.clickGamificationFieldColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeVertical()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-095 | Validate Admin Successfully Select Horizontal Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Gamification color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkGamificationFieldText()
                await MainMenu.clickGamificationFieldColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeHorizontal()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-096 | Validate Admin Successfully Select Solid Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Gamification color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkGamificationFieldText()
                await MainMenu.clickGamificationFieldColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeSolid()
                await MainMenu.clickSaveBtn()
        })
})
//Gamification Glow Line Color Section Here...
test("MD002-097 | Verify input Gamification Glow Line color functionality", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input Gamification Glow Line color functionality", async () => {
                await MainMenu.checkGamificationGlowLineFieldText()
                await MainMenu.clickGamificationGlowLineFieldColorBtn()
                await MainMenu.clickSwatchesColorNumberFive()
                await MainMenu.clickSaveBtn()
        })
})
test.skip("MD002-098 | Validate Gamification Color Glow Color Applied Into Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
                // //click Game Design
                // await prizeDropPage.clickGameDesign()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.clickHowToPlayBtn()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.verifySecondaryColorAppliedInMobile()
        })
})
test("MD002-099 | Validate Delete Functionality For Secondary Color Swatches", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-03 | Verify input Gamification Glow Line color functionality", async () => {
                await MainMenu.checkGamificationGlowLineFieldText()
                await MainMenu.clickGamificationGlowLineFieldColorBtn()
                await MainMenu.clickSwatchesColorNumberFour()
                await MainMenu.clickColorSwatchesDeleteBtn()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-100 | Validate Admin Successfully Select Radial Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Gamification Glow Line color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkGamificationGlowLineFieldText()
                await MainMenu.clickGamificationGlowLineFieldColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeRadial()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-101 | Validate Admin Successfully Select Diagonal Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Gamification Glow Line color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkGamificationGlowLineFieldText()
                await MainMenu.clickGamificationGlowLineFieldColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeDiagonal()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-102 | Validate Admin Successfully Select Vertical Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Gamification Glow Line color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkGamificationGlowLineFieldText()
                await MainMenu.clickGamificationGlowLineFieldColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeVertical()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-103 | Validate Admin Successfully Select Horizontal Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Gamification Glow Line color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkGamificationGlowLineFieldText()
                await MainMenu.clickGamificationGlowLineFieldColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeHorizontal()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-104 | Validate Admin Successfully Select Solid Color", async ({ loginPage, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)
                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })
        await test.step("MD002-02 | Verify input Gamification Glow Line color functionality", async () => {
                await MainMenu.clickClearAllBtn();
                await MainMenu.checkGamificationGlowLineFieldText()
                await MainMenu.clickGamificationGlowLineFieldColorBtn()
                await MainMenu.clcikColorTypeSelectionInputField()
                await MainMenu.selectColorTypeSolid()
                await MainMenu.clickSaveBtn()
        })
})
test("MD002-105 | Validate Try to upload Invalid Image Format for Landscape Background ", async ({ loginPage, functions, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                await MainMenu.deleteUploadedLandscapeBG()
                //delete Uploaded Portrait BG
                await MainMenu.deleteUploadedPortraitBG()
                //delete Uploaded Landscape BG Header
                await MainMenu.deleteUploadedLandscapeBGHeader()
                //delete Uploaded Portrait BG Header
                await MainMenu.deleteUploadedPortraitBGHeader()
                //delete Uploaded MainLogo
                await MainMenu.deleteUploadedMainLogo()
        })
        await test.step("Validate Upload Functionality For Mobile Design", async () => {
                // await functions.logoImageUploadFunction()
                await MainMenu.clickToUploadLandscapeBackground()
                await functions.invalidFileUploadCropperWithoutIframe()
                await page.waitForLoadState("load")
                await MainMenu.verifyErrorAlertText()
                await MainMenu.clcikErrorAlertOkBtn()
        })
})
test("MD002-106 | Validate Successfully Upload Landscape Background From Admin Side", async ({ loginPage, functions, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                await MainMenu.deleteUploadedLandscapeBG()
                //delete Uploaded Portrait BG
                await MainMenu.deleteUploadedPortraitBG()
                //delete Uploaded Landscape BG Header
                await MainMenu.deleteUploadedLandscapeBGHeader()
                //delete Uploaded Portrait BG Header
                await MainMenu.deleteUploadedPortraitBGHeader()
                //delete Uploaded MainLogo
                await MainMenu.deleteUploadedMainLogo()
        })
        await test.step("Validate Upload Functionality For Mobile Design", async () => {
                // await functions.logoImageUploadFunction()
                await MainMenu.clickToUploadLandscapeBackground()
                await functions.fileUploadCropperWithoutIframe()
                await MainMenu.verifyLandscapeBackgroundUploadSuccessfully()
        })
})
test.skip("MD002-107 | Validate Landscape Background Successfully Show on Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
                // //click Game Design
                // await prizeDropPage.clickGameDesign()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.clickHowToPlayBtn()
                await newmobilePreviewPage.verifyPotraitBackgroundUploadSuccessfully()
                await newmobilePreviewPage.clickPrizeSection()
                // await newmobilePreviewPage.verifySecondaryColorAppliedInMobile()
        })
})
test("MD002-108 | Validate Try to upload Invalid Image Format for Landscape Background Header ", async ({ loginPage, functions, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                await MainMenu.deleteUploadedLandscapeBG()
                //delete Uploaded Portrait BG
                await MainMenu.deleteUploadedPortraitBG()
                //delete Uploaded Landscape BG Header
                await MainMenu.deleteUploadedLandscapeBGHeader()
                //delete Uploaded Portrait BG Header
                await MainMenu.deleteUploadedPortraitBGHeader()
                //delete Uploaded MainLogo
                await MainMenu.deleteUploadedMainLogo()
        })
        await test.step("Validate Upload Functionality For Mobile Design", async () => {
                // await functions.logoImageUploadFunction()
                await MainMenu.clickToUploadLandscapeBackgroundHeader()
                await functions.invalidFileUploadCropperWithoutIframe()
                await page.waitForLoadState("load")
                await MainMenu.verifyErrorAlertText()
                await MainMenu.clcikErrorAlertOkBtn()
        })
})
test("MD002-109 | Validate Successfully Upload Landscape Background Header From Admin Side", async ({ loginPage, functions, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                await MainMenu.deleteUploadedLandscapeBG()
                //delete Uploaded Portrait BG
                await MainMenu.deleteUploadedPortraitBG()
                //delete Uploaded Landscape BG Header
                await MainMenu.deleteUploadedLandscapeBGHeader()
                //delete Uploaded Portrait BG Header
                await MainMenu.deleteUploadedPortraitBGHeader()
                //delete Uploaded MainLogo
                await MainMenu.deleteUploadedMainLogo()
        })
        await test.step("Validate Upload Functionality For Mobile Design", async () => {
                // await functions.logoImageUploadFunction()
                await MainMenu.clickToUploadLandscapeBackgroundHeader()
                await functions.fileUploadCropperWithoutIframe()
                await MainMenu.verifyLandscapeBackgroundHeaderUploadSuccessfully()
        })
})
test.skip("MD002-110 | Validate Landscape Background Header Successfully Show on Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
                // //click Game Design
                // await prizeDropPage.clickGameDesign()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.clickHowToPlayBtn()
                await newmobilePreviewPage.verifyPotraitBackgroundUploadSuccessfully()
                await newmobilePreviewPage.clickPrizeSection()
                // await newmobilePreviewPage.verifySecondaryColorAppliedInMobile()
        })
})
test("MD002-111 | Validate Try to upload Invalid Image Format for Portrait Background ", async ({ loginPage, functions, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                await MainMenu.deleteUploadedLandscapeBG()
                //delete Uploaded Portrait BG
                await MainMenu.deleteUploadedPortraitBG()
                //delete Uploaded Landscape BG Header
                await MainMenu.deleteUploadedLandscapeBGHeader()
                //delete Uploaded Portrait BG Header
                await MainMenu.deleteUploadedPortraitBGHeader()
                //delete Uploaded MainLogo
                await MainMenu.deleteUploadedMainLogo()
        })
        await test.step("Validate Upload Functionality For Mobile Design", async () => {
                // await functions.logoImageUploadFunction()
                await MainMenu.clickToUploadPortraitBackground()
                await functions.invalidFileUploadCropperWithoutIframe()
                await page.waitForLoadState("load")
                await MainMenu.verifyErrorAlertText()
                await MainMenu.clcikErrorAlertOkBtn()
        })
})
test("MD002-112 | Validate Successfully Upload Portrait Background From Admin Side", async ({ loginPage, functions, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                await MainMenu.deleteUploadedLandscapeBG()
                //delete Uploaded Portrait BG
                await MainMenu.deleteUploadedPortraitBG()
                //delete Uploaded Landscape BG Header
                await MainMenu.deleteUploadedLandscapeBGHeader()
                //delete Uploaded Portrait BG Header
                await MainMenu.deleteUploadedPortraitBGHeader()
                //delete Uploaded MainLogo
                await MainMenu.deleteUploadedMainLogo()
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                await MainMenu.clickPortraitBackgroundHeaderImageCheckBox()
        })
        await test.step("delete Potrait Backgroun Banner", async () => {
                await MainMenu.deletePotraitBackgrounBanner()
        })
        await test.step("Validate Upload Functionality For Mobile Design", async () => {
                // await functions.logoImageUploadFunction()
                await MainMenu.clickToUploadPortraitBackground()
                await functions.fileUploadCropperWithoutIframe()
                await MainMenu.verifyPotraitBackgroundUploadSuccessfully()
        })
})
test("MD002-113 | Validate Portrait Background Successfully Show on Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
                // //click Game Design
                // await prizeDropPage.clickGameDesign()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.clickHowToPlayBtn()
                await newmobilePreviewPage.verifyPotraitBackgroundUploadSuccessfully()
                await newmobilePreviewPage.clickPrizeSection()
                // await newmobilePreviewPage.verifySecondaryColorAppliedInMobile()
        })
})
test("MD002-114 | Validate Try to upload Invalid Image Format for Portrait Background Header ", async ({ loginPage, functions, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                await MainMenu.deleteUploadedLandscapeBG()
                //delete Uploaded Portrait BG
                await MainMenu.deleteUploadedPortraitBG()
                //delete Uploaded Landscape BG Header
                await MainMenu.deleteUploadedLandscapeBGHeader()
                //delete Uploaded Portrait BG Header
                await MainMenu.deleteUploadedPortraitBGHeader()
                //delete Uploaded MainLogo
                await MainMenu.deleteUploadedMainLogo()
        })
        await test.step("Validate Upload Functionality For Mobile Design", async () => {
                // await functions.logoImageUploadFunction()
                await MainMenu.clickToUploadPortraitBackgroundHeader()
                await functions.invalidFileUploadCropperWithoutIframe()
                await page.waitForLoadState("load")
                await MainMenu.verifyErrorAlertText()
                await MainMenu.clcikErrorAlertOkBtn()
        })
})
test("MD002-115 | Validate Successfully Upload Portrait Background Header From Admin Side", async ({ loginPage, functions, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                await MainMenu.deleteUploadedLandscapeBG()
                //delete Uploaded Portrait BG
                await MainMenu.deleteUploadedPortraitBG()
                //delete Uploaded Landscape BG Header
                await MainMenu.deleteUploadedLandscapeBGHeader()
                //delete Uploaded Portrait BG Header
                await MainMenu.deleteUploadedPortraitBGHeader()
                //delete Uploaded MainLogo
                await MainMenu.deleteUploadedMainLogo()
        })
        await test.step("Validate Upload Functionality For Mobile Design", async () => {
                // await functions.logoImageUploadFunction()
                await MainMenu.clickToUploadPortraitBackgroundHeader()
                await functions.fileUploadCropperWithoutIframe()
                await MainMenu.verifyPortraitBackgroundHeaderUploadSuccessfully()
        })
})
test.skip("MD002-116 | Validate Landscape Portrait Background Header Successfully Show on Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
                // //click Game Design
                // await prizeDropPage.clickGameDesign()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.clickHowToPlayBtn()
                await newmobilePreviewPage.verifyPotraitBackgroundUploadSuccessfully()
                await newmobilePreviewPage.clickPrizeSection()
                // await newmobilePreviewPage.verifySecondaryColorAppliedInMobile()
        })
})
test("MD002-117 | Validate Try to upload Invalid Image Format for Main Logo ", async ({ loginPage, functions, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                await MainMenu.deleteUploadedLandscapeBG()
                //delete Uploaded Portrait BG
                await MainMenu.deleteUploadedPortraitBG()
                //delete Uploaded Landscape BG Header
                await MainMenu.deleteUploadedLandscapeBGHeader()
                //delete Uploaded Portrait BG Header
                await MainMenu.deleteUploadedPortraitBGHeader()
                //delete Uploaded MainLogo
                await MainMenu.deleteUploadedMainLogo()
        })
        await test.step("Validate Upload Functionality For Mobile Design", async () => {
                // await functions.logoImageUploadFunction()
                await MainMenu.clickToUploadMainLogo()
                await functions.invalidFileUploadCropperWithoutIframe()
                await MainMenu.verifyErrorAlertText()
                await MainMenu.clcikErrorAlertOkBtn()
        })
})
test("MD002-118 | Validate Successfully Upload Main Logo From Admin Side", async ({ loginPage, functions, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                await MainMenu.deleteUploadedLandscapeBG()
                //delete Uploaded Portrait BG
                await MainMenu.deleteUploadedPortraitBG()
                //delete Uploaded Landscape BG Header
                await MainMenu.deleteUploadedLandscapeBGHeader()
                //delete Uploaded Portrait BG Header
                await MainMenu.deleteUploadedPortraitBGHeader()
                //delete Uploaded MainLogo
                await MainMenu.deleteUploadedMainLogo()
        })
        await test.step("Validate Upload Functionality For Mobile Design", async () => {
                // await functions.logoImageUploadFunction()
                await MainMenu.clickToUploadMainLogo()
                await functions.fileUploadCropperWithoutIframe()
                await MainMenu.verifyMainLogoUploadSuccessfully()
        })
})
test.skip("MD002-119 | Validate Landscape Main Logo Successfully Show on Mobile Screen", async ({ loginPage, MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
                await MainMenu.clickGussTheScroeSectionForOpenMobileScreen()
                // //click Game Design
                // await prizeDropPage.clickGameDesign()
        })
        await test.step("now click on start button on Admin site", async () => {
                // await prizeDropPage.clickstartbutton()
                // await prizeDropPage.clickStartGameOkBtn()
        })
        let newTab = null;
        let newmobilePreviewPage: mobilePreviewPage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await MainMenu.clickMobileLinkBtn()
                //now click on open button
                newTab = await MainMenu.clickMobileLinkOpenBtn()
                newmobilePreviewPage = new mobilePreviewPage(newTab)
                // await MainMenu.click_closebutton_in_mobilelinkmodal()
        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickPrizeSection()
                await newmobilePreviewPage.clickHowToPlayBtn()
                await newmobilePreviewPage.verifyPotraitBackgroundUploadSuccessfully()
                await newmobilePreviewPage.clickPrizeSection()
                // await newmobilePreviewPage.verifySecondaryColorAppliedInMobile()
        })
})
test("MD002-120 | Validate Try to upload Invalid Video Format for Landscape Background ", async ({ loginPage, functions, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                await MainMenu.deleteUploadedLandscapeBG()
                //delete Uploaded Portrait BG
                await MainMenu.deleteUploadedPortraitBG()
                //delete Uploaded Landscape BG Header
                await MainMenu.deleteUploadedLandscapeBGHeader()
                //delete Uploaded Portrait BG Header
                await MainMenu.deleteUploadedPortraitBGHeader()
                //delete Uploaded MainLogo
                await MainMenu.deleteUploadedMainLogo()
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                // await MainMenu.clickPortraitBackgroundHeaderVideoCheckBox()
                // await MainMenu.clickLandscapeBackgroundHeaderVideoCheckBox()
                // await MainMenu.clickPortraitBackgroundVideoCheckBox()
                await MainMenu.clickLandscapeBackgroundVideoCheckBox()
        })
        await test.step("Validate Upload Functionality For Mobile Design", async () => {
                await functions.bannerImageUploadFunction()
                await MainMenu.clickToUploadLandscapeBackground()
                page.on("dialog", async (alert) => {
                        console.log('Alert message: ' + alert.message());
                        await alert.accept();
                });
                // await page.click("#accept")
                await page.waitForEvent("dialog");
        })
})
test("MD002-121 | Validate Try to upload Invalid Video Format for Landscape Background Header ", async ({ loginPage, functions, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                await MainMenu.deleteUploadedLandscapeBG()
                //delete Uploaded Portrait BG
                await MainMenu.deleteUploadedPortraitBG()
                //delete Uploaded Landscape BG Header
                await MainMenu.deleteUploadedLandscapeBGHeader()
                //delete Uploaded Portrait BG Header
                await MainMenu.deleteUploadedPortraitBGHeader()
                //delete Uploaded MainLogo
                await MainMenu.deleteUploadedMainLogo()
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                // await MainMenu.clickPortraitBackgroundHeaderVideoCheckBox()
                await MainMenu.clickLandscapeBackgroundHeaderVideoCheckBox()
                // await MainMenu.clickPortraitBackgroundVideoCheckBox()
                // await MainMenu.clickLandscapeBackgroundVideoCheckBox()
        })
        await test.step("Validate Upload Functionality For Mobile Design", async () => {
                await functions.bannerImageUploadFunction()
                await MainMenu.clickToUploadLandscapeBackgroundHeader()
                page.on("dialog", async (alert) => {
                        console.log('Alert message: ' + alert.message());
                        await alert.accept();
                });
                // await page.click("#accept")
                await page.waitForEvent("dialog");
        })
})
test("MD002-122 | Validate Try to upload Invalid Video Format for Portrait  Background ", async ({ loginPage, functions, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                await MainMenu.deleteUploadedLandscapeBG()
                //delete Uploaded Portrait BG
                await MainMenu.deleteUploadedPortraitBG()
                //delete Uploaded Landscape BG Header
                await MainMenu.deleteUploadedLandscapeBGHeader()
                //delete Uploaded Portrait BG Header
                await MainMenu.deleteUploadedPortraitBGHeader()
                //delete Uploaded MainLogo
                await MainMenu.deleteUploadedMainLogo()
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                // await MainMenu.clickPortraitBackgroundHeaderVideoCheckBox()
                // await MainMenu.clickLandscapeBackgroundHeaderVideoCheckBox()
                await MainMenu.clickPortraitBackgroundVideoCheckBox()
                // await MainMenu.clickLandscapeBackgroundVideoCheckBox()
        })
        await test.step("Validate Upload Functionality For Mobile Design", async () => {
                await functions.bannerImageUploadFunction()
                await MainMenu.clickToUploadPortraitBackground()
                page.on("dialog", async (alert) => {
                        console.log('Alert message: ' + alert.message());
                        await alert.accept();
                });
                // await page.click("#accept")
                await page.waitForEvent("dialog");
        })
})
test("MD002-123 | Validate Try to upload Invalid Video Format for Portrait Background Header ", async ({ loginPage, functions, MainMenu, page }) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                await MainMenu.deleteUploadedLandscapeBG()
                //delete Uploaded Portrait BG
                await MainMenu.deleteUploadedPortraitBG()
                //delete Uploaded Landscape BG Header
                await MainMenu.deleteUploadedLandscapeBGHeader()
                //delete Uploaded Portrait BG Header
                await MainMenu.deleteUploadedPortraitBGHeader()
                //delete Uploaded MainLogo
                await MainMenu.deleteUploadedMainLogo()
        })
        await test.step("click Portrait Background Header Image CheckBox", async () => {
                await MainMenu.clickPortraitBackgroundHeaderVideoCheckBox()
                // await MainMenu.clickLandscapeBackgroundHeaderVideoCheckBox()
                // await MainMenu.clickPortraitBackgroundVideoCheckBox()
                // await MainMenu.clickLandscapeBackgroundVideoCheckBox()
        })
        await test.step("Validate Upload Functionality For Mobile Design", async () => {
                await functions.bannerImageUploadFunction()
                await MainMenu.clickToUploadPortraitBackgroundHeader()
                page.on("dialog", async (alert) => {
                        console.log('Alert message: ' + alert.message());
                        await alert.accept();
                });
                // await page.click("#accept")
                await page.waitForEvent("dialog");
        })
})
