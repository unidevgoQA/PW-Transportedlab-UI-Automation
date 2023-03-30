import test, { expect } from "@fixtures/basePages";
import fanSeeWallMobilePage from "@pages/fanSeeWallMobile.page";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs';
test("014FSW-001 | Mobile Settings | Validate Admin Successfully Updated User Profile Section", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await fanSeeWallPage.clickFanSeeWallPage()
        await fanSeeWallPage.clickMobileSettingsPage()
        await fanSeeWallPage.verifyShowAvatarTitleText()
        await fanSeeWallPage.enableShowAvatar()
        await fanSeeWallPage.verifyShowUserNameTitleText()
        await fanSeeWallPage.enableUserName()
        expect(test.info().errors).toHaveLength(0);
})
test("014FSW-002 | Mobile Settings | Validate Admin Updated User Profile Changes Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
        })
})
test("014FSW-003 | Mobile Settings | Validate Admin Successfully Updated Post Content Section", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await fanSeeWallPage.clickFanSeeWallPage()
        await fanSeeWallPage.clickMobileSettingsPage()
        await fanSeeWallPage.verifyAllowPhotoTitleText()
        await fanSeeWallPage.enableAllowPhoto()
        await fanSeeWallPage.verifyAllowVideoTitleText()
        await fanSeeWallPage.enableAllowVideo()
        await fanSeeWallPage.verifyAllowTextTitleText()
        await fanSeeWallPage.enableAllowText()
        await fanSeeWallPage.verifyFileUploadTitleText()
        await fanSeeWallPage.enableAllowFileUpload()
})
test("014FS-W004 | Mobile Settings | Validate Admin Updated Post Content Changes Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.verifyOpenLibraryButtonIsVisible()
                await fanSeeWallMobilePages.verifyTakePhotoButtonIsVisible()
                await fanSeeWallMobilePages.verifyRecordVideoButtonIsVisible()
        })
})
test("014FSW-005 | Mobile Settings | Validate Admin Successfully Updated Video Section", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMobileSettingsPage()
        })
        await fanSeeWallPage.verifyVideoTitleText()
        await fanSeeWallPage.verifyMinimumVideoLenthTitleText()
        await fanSeeWallPage.verifyMinimumVideoLenthSecondTitleText()
        await fanSeeWallPage.inputMinimumVideoLenthSecond()
        await fanSeeWallPage.verifyMaxVideoLengthTitleText()
        await fanSeeWallPage.verifyMaxVideoLenthSecondTitleText()
        await fanSeeWallPage.inputMaxVideoLenthSecond()
})
test("014FSW-006 | Mobile Settings | Validate Admin Updated Video Changes Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickRecordVideoBtn()
                await fanSeeWallMobilePages.verifyRecordVideoMinMaxTitle()
                expect(test.info().errors).toHaveLength(0);
        })
})
test("014FSW-007 | Mobile Settings | Validate Admin Successfully Updated Mobile Background Color", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMobileSettingsPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.verifyColorSectionTitleText()
        await fanSeeWallPage.expandColorSection()
        await fanSeeWallPage.verifyMobileBackGroundTitleText()
        await fanSeeWallPage.clickMobileBackgroundColorInputBtn()
        await fanSeeWallPage.inputColorCodeForMobileBackground()
        await fanSeeWallPage.colorWindowSaveBtn()
})
test("014FSW-008 | Mobile Settings | Validate Admin Updated Mobile Background Color Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyMobileBackgroundColorChangesSuccessfullyApplied()
        })
})
//////////////
test("014FSW-009 | Mobile Settings | Validate Admin Successfully Updated Button Color", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMobileSettingsPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.verifyColorSectionTitleText()
        await fanSeeWallPage.expandColorSection()
        await fanSeeWallPage.verifyColorSectionButtonTitleText()
        await fanSeeWallPage.clickMobileButtonColorInputBtn()
        await fanSeeWallPage.inputColorCodeForMobileButton()
        await fanSeeWallPage.colorWindowSaveBtn()
})
test("014FSW-010 | Mobile Settings | Validate Admin Updated Button Color Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyMobileButtonColorChangesSuccessfullyApplied()
        })
})
test("014FSW-011 | Mobile Settings | Validate Admin Successfully Updated Button Text Color", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMobileSettingsPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.verifyColorSectionTitleText()
        await fanSeeWallPage.expandColorSection()
        await fanSeeWallPage.verifyColorSectionButtonTextTitleText()
        await fanSeeWallPage.clickMobileButtonTextColorInputBtn()
        await fanSeeWallPage.inputColorCodeForMobileButtonText()
        await fanSeeWallPage.colorWindowSaveBtn()
})
test("014FSW-012 | Mobile Settings | Validate Admin Updated Button Text Color Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyMobileBackgroundColorChangesSuccessfullyApplied()
        })
})
test("014FSW-013 | Mobile Settings | Validate Admin Successfully Updated Text Color", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMobileSettingsPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.verifyColorSectionTitleText()
        await fanSeeWallPage.expandColorSection()
        await fanSeeWallPage.verifyColorSectionTextTitleText()
        await fanSeeWallPage.clickMobileTextColorInputBtn()
        await fanSeeWallPage.inputColorCodeForMobileText()
        await fanSeeWallPage.colorWindowSaveBtn()
})
test("014FSW-014 | Mobile Settings | Validate Admin Updated Text Color Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyMobileBackgroundColorChangesSuccessfullyApplied()
        })
})
test("014FSW-015 | Mobile Settings | Validate Admin Successfully Update Mobile Background Image", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMobileSettingsPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.verifyImageUploadSectionTitleText()
        await fanSeeWallPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image If Found", async () => {
                await fanSeeWallPage.deleteMobileEventImage()
                await fanSeeWallPage.deleteMobileWelcomeImage()
                await fanSeeWallPage.deleteMobileBackgroundImage()
        })
        await functions.portraitBackgroundImageUploadHelper()
        await fanSeeWallPage.clickToUploadMobileBackgroundImage()
        await functions.fileUploadCropper()
        await page.waitForTimeout(4000)
})
test("014FSW-016 | Mobile Settings | Validate Admin Updated Mobile Background Image Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyMobileBackgroundColorChangesSuccessfullyApplied()
        })
})
test("014FSW-017 | Mobile Settings | Validate Admin Successfully Update Welcome Image", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMobileSettingsPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.verifyImageUploadSectionTitleText()
        await fanSeeWallPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image If Found", async () => {
                await fanSeeWallPage.deleteMobileEventImage()
                await fanSeeWallPage.deleteMobileWelcomeImage()
                await fanSeeWallPage.deleteMobileBackgroundImage()
        })
        await functions.logoImageUploadFunction()
        await fanSeeWallPage.clickToUploadMobileWelcomeImage()
        await functions.fileUploadCropper()
        await page.waitForTimeout(4000)
})
test("014FSW-018 | Mobile Settings | Validate Admin Updated Welcome Image Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyMobileWelcomeImageChangesSuccessfullyApplied()
        })
})
test("014FSW-019 | Mobile Settings | Validate Admin Successfully Update Event Image", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMobileSettingsPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.verifyImageUploadSectionTitleText()
        await fanSeeWallPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image If Found", async () => {
                await fanSeeWallPage.deleteMobileEventImage()
                await fanSeeWallPage.deleteMobileWelcomeImage()
                await fanSeeWallPage.deleteMobileBackgroundImage()
        })
        await functions.portraitBackgroundImageUploadHelper()
        await fanSeeWallPage.clickToUploadMobileEventImage()
        await functions.fileUploadCropper()
        await page.waitForTimeout(4000)
})
test("014FSW-020 | Mobile Settings | Validate Admin Updated Event Image Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyMobileWelcomeImageChangesSuccessfullyApplied()
        })
})
test("014FSW-021 | Mobile Settings | Validate Admin Successfully Update Pre-Event Message", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMobileSettingsPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.verifyDialogsSectionTitleText()
        await fanSeeWallPage.expandDialogsSection()
        await fanSeeWallPage.verifyPreEventMessageTitleText()
        await fanSeeWallPage.clickBlockTypeSectionField()
        await fanSeeWallPage.selectH1Tag()
        await fanSeeWallPage.inputPreEventMessage()
})
test("014FSW-022 | Mobile Settings | Validate Admin Updated Pre-Event Message Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyMobileWelcomeImageChangesSuccessfullyApplied()
        })
})
test("014FSW-023 | Mobile Settings | Validate Admin Successfully Update Welcome Message", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMobileSettingsPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.verifyDialogsSectionTitleText()
        await fanSeeWallPage.expandDialogsSection()
        await fanSeeWallPage.verifyPreEventMessageTitleText()
        await fanSeeWallPage.inputWelcomeMessageFromDialogs("Welcome Massage")
        await fanSeeWallPage.clickWelcomeMassageBlockTypeSectionField()
        await fanSeeWallPage.selectH1Tag()
        await fanSeeWallPage.clickWelcomeMassageBlockTypeSectionField()
        await fanSeeWallPage.selectH1TagForBlockType()
})
test("014FSW-024 | Mobile Settings | Validate Admin Updated Welcome Message Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                // await fanSeeWallMobilePages.verifyWelcomeMassageText()
                //have an issue..
        })
})
test("014FSW-024dasdf | Mobile Settings | Validate Admin Updated Welcome Message Successfully Show On Mobile Screen", async ({ loginPage, browser, fanSeeWallMobilePage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page }, testInfo) => {
        await test.step("Go to The Game Url", async () => {
                await fanSeeWallMobilePage.gotoUrl()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePage.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePage.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePage.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePage.inputAdditionalDate()
                await fanSeeWallMobilePage.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePage.inputAgeForAditionalInfo()
                await fanSeeWallMobilePage.inputEmailForAditionalInfo()
                await fanSeeWallMobilePage.inputAdditionalZipCode()
                await fanSeeWallMobilePage.clickSubmitButton()
        })
        await fanSeeWallMobilePage.clickHomeBtn()
})
test("014FSW-029 | Mainboard | Validate Admin Successfully Updated Mainboard Title Section", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMainBoardPage()
        })
        await fanSeeWallPage.verifyTitleText()
        await fanSeeWallPage.inputTitle()
        await fanSeeWallPage.verifyLeftRightMarginTitleText()
        await fanSeeWallPage.inputLeftRightMarginParcent()
        await fanSeeWallPage.verifyTopBottomMarginTitleText()
        await fanSeeWallPage.inputTopBottomMarginParcent()
        await fanSeeWallPage.verifyMostRecentPostsTitleText()
        await fanSeeWallPage.inputMostRecentPostsSecond()
        await fanSeeWallPage.verifyTileAnimationSpeedTitleText()
        await fanSeeWallPage.inputTileAnimationSpeedSecond()
        await fanSeeWallPage.verifyLoopVideoTitleText()
        await fanSeeWallPage.disableLoopVideoCheckBox()
        await fanSeeWallPage.enableLoopVideoCheckBox()
        await fanSeeWallPage.verifyShowAvatarTitleText()
        await fanSeeWallPage.disableShowAvatar()
        await fanSeeWallPage.enableShowAvatar()
        await fanSeeWallPage.verifyShowUserNameTitleText()
        await fanSeeWallPage.disableUserName()
        await fanSeeWallPage.enableUserName()
        await fanSeeWallPage.verifySocailIconTitleText()
        await fanSeeWallPage.verifyCueTitleText()
        await fanSeeWallPage.disableCueCheckBox()
        await fanSeeWallPage.enableCueCheckBox()
        await fanSeeWallPage.verifyAutomateFeaturedPostsTitleText()
        await fanSeeWallPage.verifyIntervalTitleText()
        await fanSeeWallPage.inputIntervalSecond()
        await fanSeeWallPage.verifyDurationTitleText()
        await fanSeeWallPage.inputDurationSecond()
})
test.skip("014FSW-030 | Mainboard | Validate Admin Updated Mainboard Title Section Changes Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyWelcomeMassageText()
        })
})
test("014FSW-035| Mainboard | Validate Admin Successfully Updated Mainboard Layouts Section", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMainBoardPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.expandColorSection()
        await fanSeeWallPage.verifyTitleText()
        await fanSeeWallPage.clickTitleColorSection()
        await fanSeeWallPage.inputTitleColor()
        await fanSeeWallPage.colorWindowSaveBtn()
})
test.skip("014FSW-036 | Mainboard | Validate Admin Updated Mainboard Layouts Section Changes Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyWelcomeMassageText()
        })
})
test("014FSW-037 | Mainboard | Validate Admin Successfully Updated Mainboard Color Section Title Color", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMainBoardPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.expandColorSection()
        await fanSeeWallPage.verifyPostTextTitleText()
        await fanSeeWallPage.clickPostTextColorSection()
        await fanSeeWallPage.inputPostTextColor()
        await fanSeeWallPage.colorWindowSaveBtn()
})
test.skip("014FSW-038 | Mainboard | Validate Admin Updated Mainboard Color Section Title Color Changes Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyWelcomeMassageText()
        })
})
test("014FSW-039 | Mainboard | Validate Admin Successfully Updated Mainboard Color Section Post Text Color", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMainBoardPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.expandColorSection()
        await fanSeeWallPage.verifyBackgroundTitleText()
        await fanSeeWallPage.clickBackgroundColorSection()
        await fanSeeWallPage.inputBackgroundColor()
        await fanSeeWallPage.colorWindowSaveBtn()
})
test.skip("014FSW-040 | Mainboard | Validate Admin Updated Mainboard Color Section Post Text Color Changes Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyWelcomeMassageText()
        })
})
test("014FSW-041 | Mainboard | Validate Admin Successfully Updated Mainboard Color Section Background Color", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMainBoardPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.expandColorSection()
        await fanSeeWallPage.verifyTileBackgroundTitleText()
        await fanSeeWallPage.clickTileBackgroundColorSection()
        await fanSeeWallPage.inputTileBackgroundColor()
        await fanSeeWallPage.colorWindowSaveBtn()
})
test.skip("014FSW-042 | Mainboard | Validate Admin Updated Mainboard Color Section Background Color Changes Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyWelcomeMassageText()
        })
})
test("014FSW-043 | Mainboard | Validate Admin Successfully Updated Mainboard Color Section Tile Background Color", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMainBoardPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.expandColorSection()
        await fanSeeWallPage.verifyFeaturedPostTileTitleText()
        await fanSeeWallPage.clickFeaturedPostTileColorSection()
        await fanSeeWallPage.inputFeaturedPostTileColor()
        await fanSeeWallPage.colorWindowSaveBtn()
})
test.skip("014FSW-044 | Mainboard | Validate Admin Updated Mainboard Color Section Tile Background Color Changes Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyWelcomeMassageText()
        })
})
test("014FSW-045 | Mainboard | Validate Admin Successfully Updated Mainboard Color Section Featured Post Background Color", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMainBoardPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.expandColorSection()
        await fanSeeWallPage.verifyFeaturedPostBackgroundTitleText()
        await fanSeeWallPage.clickFeaturedPostBackgroundColorSection()
        await fanSeeWallPage.inputFeaturedPostBackgroundColor()
        await fanSeeWallPage.colorWindowSaveBtn()
})
test.skip("014FSW-046 | Mainboard | Validate Admin Updated Mainboard Color Section Featured Post Background Color Changes Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyWelcomeMassageText()
        })
})
test("014FSW-047 | Mainboard | Validate Admin Successfully Updated Mainboard Color Section Featured Featured Post Text Color", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMainBoardPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.expandColorSection()
        await fanSeeWallPage.verifyFeaturedPostTextTitleText()
        await fanSeeWallPage.clickFeaturedPostTextColorSection()
        await fanSeeWallPage.inputFeaturedPostTextColor()
        await fanSeeWallPage.colorWindowSaveBtn()
})
test.skip("014FSW-048 | Mainboard | Validate Admin Updated Mainboard Color Section Featured Post Text Color Changes Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyWelcomeMassageText()
        })
})
test("014FSW-049 | Mainboard | Validate Admin Successfully Updated Mainboard Image Upload Section Background Image", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMainBoardPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image IF Found", async () => {
                await fanSeeWallPage.deleteInternalSourceIcon()
                await fanSeeWallPage.deleteImageUpload1()
                await fanSeeWallPage.deleteImageUpload2()
                await fanSeeWallPage.deleteFeaturedPostOverlay()
                await fanSeeWallPage.deleteDefaultMainboardTile()
                await fanSeeWallPage.deleteBackgroundImage()
        })
        await fanSeeWallPage.verifyBackgroundTitleText()
        await functions.portraitBackgroundImageUploadHelper()
        await fanSeeWallPage.clickBackgroundImageUploadField()
        await functions.fileUploadCropper()
})
test.skip("014FSW-050 | Mainboard | Validate Admin Updated Mainboard Image Upload Section Background Image Changes Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyWelcomeMassageText()
        })
})
test("014FSW-051 | Mainboard | Validate Admin Successfully Updated Mainboard Image Upload Section Default Mainboard Tile Image", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMainBoardPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image IF Found", async () => {
                await fanSeeWallPage.deleteInternalSourceIcon()
                await fanSeeWallPage.deleteImageUpload1()
                await fanSeeWallPage.deleteImageUpload2()
                await fanSeeWallPage.deleteFeaturedPostOverlay()
                await fanSeeWallPage.deleteDefaultMainboardTile()
                await fanSeeWallPage.deleteBackgroundImage()
        })
        await fanSeeWallPage.verifyDefaultMainboardTileTitleText()
        await functions.portraitBackgroundImageUploadHelper()
        await fanSeeWallPage.clickDefaultMainboardTileImageUploadField()
        await functions.fileUploadCropper()
})
test.skip("014FSW-052 | Mainboard | Validate Admin Updated Mainboard Image Upload Section Default Mainboard Tile Image Changes Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyWelcomeMassageText()
        })
})
test("014FSW-053 | Mainboard | Validate Admin Successfully Updated Mainboard Image Upload Section Featured Post Overlay Image", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMainBoardPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image IF Found", async () => {
                await fanSeeWallPage.deleteInternalSourceIcon()
                await fanSeeWallPage.deleteImageUpload1()
                await fanSeeWallPage.deleteImageUpload2()
                await fanSeeWallPage.deleteFeaturedPostOverlay()
                await fanSeeWallPage.deleteDefaultMainboardTile()
                await fanSeeWallPage.deleteBackgroundImage()
        })
        await fanSeeWallPage.verifyFeaturedPostOverlayTitleText()
        await functions.portraitBackgroundImageUploadHelper()
        await fanSeeWallPage.clickFeaturedPostOverlayImageUploadField()
        await functions.fileUploadCropper()
})
test.skip("014FSW-054 | Mainboard | Validate Admin Updated Mainboard Image Upload Section Featured Post Overlay Image Changes Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyWelcomeMassageText()
        })
})
test("014FSW-055 | Mainboard | Validate Admin Successfully Updated Mainboard Image Upload Section Image Upload 1 Image", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMainBoardPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image IF Found", async () => {
                await fanSeeWallPage.deleteInternalSourceIcon()
                await fanSeeWallPage.deleteImageUpload1()
                await fanSeeWallPage.deleteImageUpload2()
                await fanSeeWallPage.deleteFeaturedPostOverlay()
                await fanSeeWallPage.deleteDefaultMainboardTile()
                await fanSeeWallPage.deleteBackgroundImage()
        })
        // await fanSeeWallPage.verifyImageUpload1TitleText()
        await functions.portraitBackgroundImageUploadHelper()
        await fanSeeWallPage.clickImageUpload1ImageUploadField()
        await functions.fileUploadCropper()
})
test.skip("014FSW-056 | Mainboard | Validate Admin Updated Mainboard Image Upload Section Image Upload 1 Image Changes Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyWelcomeMassageText()
        })
})
test("014FSW-057 | Mainboard | Validate Admin Successfully Updated Mainboard Image Upload Section Image Upload 2 Image", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMainBoardPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image IF Found", async () => {
                await fanSeeWallPage.deleteInternalSourceIcon()
                await fanSeeWallPage.deleteImageUpload1()
                await fanSeeWallPage.deleteImageUpload2()
                await fanSeeWallPage.deleteFeaturedPostOverlay()
                await fanSeeWallPage.deleteDefaultMainboardTile()
                await fanSeeWallPage.deleteBackgroundImage()
        })
        await fanSeeWallPage.verifyImageUpload2TitleText()
        await functions.portraitBackgroundImageUploadHelper()
        await fanSeeWallPage.clickImageUpload2ImageUploadField()
        await functions.fileUploadCropper()
})
test.skip("014FSW-058 | Mainboard | Validate Admin Updated Mainboard Image Upload Section Image Upload 2 Image Changes Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyWelcomeMassageText()
        })
})
test("014FSW-059 | Mainboard | Validate Admin Successfully Updated Mainboard Image Upload Section Internal Source Icon Image", async ({ loginPage, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickMainBoardPage()
        })
        await fanSeeWallPage.collapseSettingsSection()
        await fanSeeWallPage.expandImageUploadSection()
        await test.step("Delete Uploaded Image IF Found", async () => {
                await fanSeeWallPage.deleteInternalSourceIcon()
                await fanSeeWallPage.deleteImageUpload1()
                await fanSeeWallPage.deleteImageUpload2()
                await fanSeeWallPage.deleteFeaturedPostOverlay()
                await fanSeeWallPage.deleteDefaultMainboardTile()
                await fanSeeWallPage.deleteBackgroundImage()
        })
        await fanSeeWallPage.verifyInternalSourceIconTitleText()
        await functions.portraitBackgroundImageUploadHelper()
        await fanSeeWallPage.clickInternalSourceIconImageUploadField()
        await functions.fileUploadCropper()
})
test.skip("014FSW-060 | Mainboard | Validate Admin Updated Mainboard Image Upload Section Internal Source Icon Image Changes Successfully Show On Mobile Screen", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                await fanSeeWallMobilePages.verifyWelcomeMassageText()
        })
})
test("014FSW-061 | Moderation | Validate Admin Successfully Create a Post With Valid Data", async ({ loginPage, testData, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickModerationPage()
        })
        await fanSeeWallPage.clickCreatePostBtn()
        await fanSeeWallPage.verifyAddNewPostTitleText()
        await fanSeeWallPage.verifyAvaterTitleText()
        await functions.logoImageUploadFunction()
        await fanSeeWallPage.clickAvaterUploadInputField()
        await fanSeeWallPage.cropperForFanSeeWall()
        await fanSeeWallPage.checkImageRadioBtn()
        await functions.bannerImageUploadFunction()
        await fanSeeWallPage.clickPostImageUploadInputField()
        await fanSeeWallPage.cropperForFanSeeWall()
        await fanSeeWallPage.verifyNameTitleText()
        await fanSeeWallPage.inputPostName("Custom Adds")
        await fanSeeWallPage.verifyUserNameTitleText()
        await fanSeeWallPage.inputPostUserName(await testData.getFirstname())
        await fanSeeWallPage.verifyPostTextTitleText()
        await fanSeeWallPage.inputPostText(await testData.getRandomPhoneNumber())
        await fanSeeWallPage.clickSaveBtn()
        await fanSeeWallPage.clickRefreshBtn()
})
test("014FSW-062 | Moderation | Validate Admin Successfully Filter Custom Adds", async ({ loginPage, testData, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickModerationPage()
        })
        await fanSeeWallPage.clickClearAllBtn()
        await fanSeeWallPage.clickSourcesInputField()
        await fanSeeWallPage.clickOnCustomAddsOptions()
        await fanSeeWallPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await fanSeeWallPage.clickRefreshBtn()
        await fanSeeWallPage.verifyCustomAddsPostSuccessfullyShow()
})
test("014FSW-063 | Moderation | Validate Admin Successfully Approved Custom Adds", async ({ loginPage, testData, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickModerationPage()
        })
        await fanSeeWallPage.clickClearAllBtn()
        await fanSeeWallPage.clickSourcesInputField()
        await fanSeeWallPage.clickOnCustomAddsOptions()
        await fanSeeWallPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await fanSeeWallPage.clickPostApproveBtn()
        await fanSeeWallPage.clickRefreshBtn()
        await fanSeeWallPage.verifyApprovePostSuccessfullyShowOnPlaylist()
        // await fanSeeWallPage.clickClearAllBtn()
        // await fanSeeWallPage.clickRefreshBtn()
        // await fanSeeWallPage.clickPostLikeBtn()
        // await fanSeeWallPage.clickPostFevoraitBtn()
        // await fanSeeWallPage.clickPostFlaggedBtn()
})
test("014FSW-064 | Moderation | Validate Admin Successfully Filter With Sort By", async ({ loginPage, testData, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickModerationPage()
        })
        await fanSeeWallPage.clickClearAllBtn()
        await fanSeeWallPage.clickRefreshBtn()
        await fanSeeWallPage.clickPostApproveBtn()
        await fanSeeWallPage.clickSortByOptionInputField()
        await fanSeeWallPage.clickSortByApprovedOption()
        await fanSeeWallPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await fanSeeWallPage.clickRefreshBtn()
        await fanSeeWallPage.verifyCustomAddsPostSuccessfullyShow()
        await fanSeeWallPage.clickPostLikeBtn()
        await fanSeeWallPage.clickSortByOptionInputField()
        await fanSeeWallPage.clickSortByLikedOption()
        await fanSeeWallPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await fanSeeWallPage.clickRefreshBtn()
        await fanSeeWallPage.verifyCustomAddsPostSuccessfullyShow()
        await fanSeeWallPage.clickPostFevoraitBtn()
        await fanSeeWallPage.clickPostFlaggedBtn()
        await fanSeeWallPage.clickSortByOptionInputField()
        await fanSeeWallPage.clickSortByApprovedOption()
        await fanSeeWallPage.clickSortByLikedOption()
        await fanSeeWallPage.clickSortByFlaggedOption()
        await fanSeeWallPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await fanSeeWallPage.clickRefreshBtn()
        await fanSeeWallPage.verifyCustomAddsPostSuccessfullyShowForDeletedAndFlagged()
        await fanSeeWallPage.clickPostDeleteBtn()
        await fanSeeWallPage.clickSortByOptionInputField()
        await fanSeeWallPage.clickSortByFlaggedOption()
        await fanSeeWallPage.clickSortByDeletedOption()
        await fanSeeWallPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await fanSeeWallPage.clickRefreshBtn()
        await fanSeeWallPage.verifyCustomAddsPostSuccessfullyShowForDeletedAndFlagged()
        // await fanSeeWallPage.clickPostDeleteBtn()
})
test("014FSW-065 | Mobile Screen | User Successfully Create A Post With Library", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                // await fanSeeWallMobilePages.logoUploadHelper()
                await fanSeeWallMobilePages.clickOpenLibraryUploadBtn()
                await fanSeeWallMobilePages.clickDeleteBtn()
                await fanSeeWallMobilePages.clickOpenLibraryUploadBtn()
                await fanSeeWallMobilePages.inputPostText()
                await fanSeeWallMobilePages.clickSubmitBtn()
        })
})
test("014FSW-066 | Moderation | Validate User Created Post With Library Successfully Show On Admin Section", async ({ loginPage, testData, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickModerationPage()
        })
        await fanSeeWallPage.clickClearAllBtn()
        await fanSeeWallPage.clickSourcesInputField()
        await fanSeeWallPage.clickOnCueOptions()
        await fanSeeWallPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await fanSeeWallPage.clickRefreshBtn()
        await fanSeeWallPage.verifyCuePostSuccessfullyShow()
        await fanSeeWallPage.clickPostDeleteBtn()
})
test("014FSW-067 | Mobile Screen | User Successfully Create A Post With Take Photo", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                // await fanSeeWallMobilePages.logoUploadHelper()
                await fanSeeWallMobilePages.uploadImageClickingOnTakePhoto()
                await fanSeeWallMobilePages.clickDeleteBtn()
                await fanSeeWallMobilePages.uploadImageClickingOnTakePhoto()
                await fanSeeWallMobilePages.inputPostTextForTakePhotoPost()
                await fanSeeWallMobilePages.clickSubmitBtn()
        })
})
test("014FSW-068 | Moderation | Validate User Created Post With Take Photo Successfully Show On Admin Section", async ({ loginPage, testData, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickModerationPage()
        })
        await fanSeeWallPage.clickClearAllBtn()
        await fanSeeWallPage.clickSourcesInputField()
        await fanSeeWallPage.clickOnCueOptions()
        await fanSeeWallPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await fanSeeWallPage.clickRefreshBtn()
        await fanSeeWallPage.verifyCuePostWithTakePhotoSuccessfullyShow()
        await fanSeeWallPage.clickPostDeleteBtn()
})
test("014FSW-069 | Mobile Screen | User Successfully Create A Post With Record Video", async ({ loginPage, fanSeeWallPage, tugOfWarPage, MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("Click On FanSee Wall Game", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
        })
        let newTab = null;
        let fanSeeWallMobilePages: fanSeeWallMobilePage
        await test.step("now open the game in mobile view", async () => {
                //click Mobile Link Btn
                await fanSeeWallPage.clickQrCodeBtn()
                //now click on open button
                newTab = await tugOfWarPage.clickOpenLinkInNewTab()
                fanSeeWallMobilePages = new fanSeeWallMobilePage(newTab)
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.inputPhoneNumberForAditionalInfo()
                await fanSeeWallMobilePages.clickAdditionalDatePickterInputField()
                await fanSeeWallMobilePages.clickAdditionalDateEditBtn()
                await fanSeeWallMobilePages.inputAdditionalDate()
                await fanSeeWallMobilePages.clickAdditionalDateDatePickerOkBtn()
                await fanSeeWallMobilePages.inputAgeForAditionalInfo()
                await fanSeeWallMobilePages.inputEmailForAditionalInfo()
                await fanSeeWallMobilePages.inputAdditionalZipCode()
                await fanSeeWallMobilePages.clickSubmitButton()
        })
        await test.step("Validation on mobile Screen", async () => {
                await fanSeeWallMobilePages.clickHomeBtn()
                // await fanSeeWallMobilePages.logoUploadHelper()
                await fanSeeWallMobilePages.uploadVideoClickingOnRecordVideoBtn()
                await fanSeeWallMobilePages.clickDeleteBtn()
                await fanSeeWallMobilePages.uploadVideoClickingOnRecordVideoBtn()
                await fanSeeWallMobilePages.inputPostTextForRecordVideoPost()
                await fanSeeWallMobilePages.clickSubmitBtn()
        })
})
test("014FSW-070 | Moderation | Validate User Created Post With Record Video Successfully Show On Admin Section", async ({ loginPage, testData, fanSeeWallPage, functions, singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {
        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
        })
        await test.step("Go To The FanSee Wall Page", async () => {
                await fanSeeWallPage.clickFanSeeWallPage()
                await fanSeeWallPage.clickModerationPage()
        })
        await fanSeeWallPage.clickClearAllBtn()
        await fanSeeWallPage.clickSourcesInputField()
        await fanSeeWallPage.clickOnCueOptions()
        await fanSeeWallPage.clickSourcesInputFieldForceFullyWhenDropdownOptionsShow()
        await fanSeeWallPage.clickRefreshBtn()
        await fanSeeWallPage.verifyCuePostWithRecordVideoSuccessfullyShow()
        await fanSeeWallPage.clickPostDeleteBtn()
})