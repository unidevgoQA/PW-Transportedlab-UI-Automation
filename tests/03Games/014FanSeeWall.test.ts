import test, { expect } from "@fixtures/basePages";
import fanSeeWallMobilePage from "@pages/fanSeeWallMobile.page";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'



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
                await fanSeeWallMobilePages.verifyWelcomeMassageText()


        })
})