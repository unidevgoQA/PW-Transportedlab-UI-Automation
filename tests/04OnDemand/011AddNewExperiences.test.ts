import test, { expect } from "@fixtures/basePages";
import { BrowserContext, webkit, devices, Page, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"
const clipboard = require("clipboardy");
test.skip("011ANE-001 | Validate add new configuration plus is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickplusBtn()
      await addnewexperiencePage.verifyAddOnDemandConfigurationText()
      await addnewexperiencePage.InputConfigurationName(addnewexperiencePage.getRandomName())
      await addnewexperiencePage.clickAddNewConfigurationSaveBtn()
      await addnewexperiencePage.clickAddNewConfigurationDismissBtn()
      await addnewexperiencePage.clickConfigurationListBox()
      await addnewexperiencePage.SelectedConfiguration()
})
test.skip("011ANE-002 | Validate configuration drop down button is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickConfigurationListBox()
      await addnewexperiencePage.SelectedConfiguration()
      await addnewexperiencePage.clickConfigurationListBox()
      await addnewexperiencePage.SelectedConfiguration()
})
test.skip("011ANE-003 | Validate on-demand flowchart slider plus and minus button is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickSliderPlusBtn()
      await addnewexperiencePage.clickSliderMinusBtn()
})
test("011ANE-004 | Validate QR code link button is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickMobileQRCodeBtn()
      await addnewexperiencePage.clickQRCodeCloseBtn()
})
test("011ANE-005 | Validate Mobile QR Code text is visible.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickMobileQRCodeBtn()
      await addnewexperiencePage.verifyMobileQRCodeText()
})
// test("011ANE-006 | Validate mobile link open button is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
//       await page.goto('/admin/#/sign-in')
//       await loginPage.login(data.username, data.password)
//       const title = await page.title();
//       expect(title).toBe('DXP Admin')
//       const screenshot = await page.screenshot();
//       await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//       })
//       await addnewexperiencePage.clickHomeAvater();
//       await addnewexperiencePage.onDemandBtn();
//       await addnewexperiencePage.clickMobileQRCodeBtn()
//       let newTab = null
//       let addnewExperiencemobilepage: addnewexperienceMobilePage
//       newTab = await addnewexperiencePage.clickMobileLinkOpenBtn()
//       addnewExperiencemobilepage = new addnewexperienceMobilePage(newTab)
//       await addnewExperiencemobilepage.typephoneno()
//       await addnewExperiencemobilepage.typeEmail()
//       await addnewExperiencemobilepage.typeAge()
//       await addnewExperiencemobilepage.selectbirthdate()
//       await addnewExperiencemobilepage.typezipCode()
//       await addnewExperiencemobilepage.clickSubmittBtn()
// })
// test("011ANE-007 | Validate mobile link copy button is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
//       await page.goto('/admin/#/sign-in')
//       await loginPage.login(data.username, data.password)
//       const title = await page.title();
//       expect(title).toBe('DXP Admin')
//       const screenshot = await page.screenshot();
//       await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//       })
//       await addnewexperiencePage.clickHomeAvater();
//       await addnewexperiencePage.onDemandBtn();
//       await addnewexperiencePage.clickMobileQRCodeBtn()
//       await addnewexperiencePage.clickMobileLinkCopyBtn()
//       let URL = ''
//       let addnewExperiencemobilepage: addnewexperienceMobilePage
//       await test.step("now copy the contents from system clipboard(URL Here)", async () => {
//             URL = clipboard.readSync();
//             //console.log(URL);
//       })
//       await test.step("Now open copy link on mobile", async () => {
//             addnewExperiencemobilepage = new addnewexperienceMobilePage(page)
//             await addnewExperiencemobilepage.GoTo(URL)
//       })
//       await test.step("now open the game in mobile view", async () => {
//             await addnewExperiencemobilepage.typephoneno()
//             await addnewExperiencemobilepage.typeEmail()
//             await addnewExperiencemobilepage.typeAge()
//             await addnewExperiencemobilepage.selectbirthdate()
//             await addnewExperiencemobilepage.typezipCode()
//             await addnewExperiencemobilepage.clickSubmittBtn()
//       })
// })

test("011ANE-008 | Validate save QR code button is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickMobileQRCodeBtn()
      await addnewexperiencePage.validateSaveQRCode()
})
test("011ANE-009 | Validate edit current configuration is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickEditConfigurationBtn()
      //await addnewexperiencePage.SelectedConfiguration()
      await addnewexperiencePage.EditConfigurationName(addnewexperiencePage.EditedRandomConfigure())
      await addnewexperiencePage.clickAddNewConfigurationSaveBtn()
})
test("011ANE-010 | Validate import configuration button is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickImportBtn()
      await addnewexperiencePage.validateImportConfigurationBtn()
})
test("011ANE-011 | Validate export configuration button is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.validateExportConfigurationBtn()
})
test.skip("011ANE-012 |  Validate  start and stop button is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater()
      await addnewexperiencePage.onDemandBtn()
      await addnewexperiencePage.clickStartBtn()
      await addnewexperiencePage.clickStopBtn()
      await addnewexperiencePage.clickOkBtn()
})
test("011ANE-013 | Validate Image Section.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.ImageBtn();
      await addnewexperiencePage.invalidLengthAlert();
      await addnewexperiencePage.inputTitleName()
      await addnewexperiencePage.inputHeaderText();
      await addnewexperiencePage.selectLarge();
      await addnewexperiencePage.HeaderTextBtn();
      await addnewexperiencePage.selectMedium();
      await addnewexperiencePage.HeaderTextBtn();
      await addnewexperiencePage.selectSmall();
      await addnewexperiencePage.clickWebURLtoggle()
      await addnewexperiencePage.inputWebsiteLink()
      await addnewexperiencePage.clickFillBtn();
      await addnewexperiencePage.clickFitBtn();
      await addnewexperiencePage.clickStretchBtn();
      await addnewexperiencePage.clickTopAlignmentBtn();
      await addnewexperiencePage.clickCenterAlignmentBtn();
      await addnewexperiencePage.clickBottomAlignmentBtn();
})
test("011ANE-014 | Validate invalid file type error message in image section.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.ImageBtn();
      await addnewexperiencePage.imageUploadbutton();
      await addnewexperiencePage.InvaliduploaderAlert()
      //await addnewexperiencePage.chooseImage();
      await addnewexperiencePage.invalidFiletypeAlert();
      await addnewexperiencePage.invalidfiletypealertOkbtn();
})
test("011ANE-015 | Validate Video Section.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.clickVideoSection()
      await addnewexperiencePage.inputTitleName();
      await addnewexperiencePage.inputHeaderText();
      await addnewexperiencePage.verifyHeaderText()
      //await addnewexperiencePage.HeaderTextDropDownBtn();
      // await addnewexperiencePage.selectLarge
      // await addnewexperiencePage.HeaderTextDropDownBtn();
      // await addnewexperiencePage.selectMedium
      // await addnewexperiencePage.HeaderTextDropDownBtn();
      // await addnewexperiencePage.selectSmall();
      await functions.videoUploadFunction()
      await addnewexperiencePage.clickvideoUploadBTN();
      await addnewexperiencePage.ShowcontrolCheckBox();
      await addnewexperiencePage.EnablePlayVideoCheckBox();
      await addnewexperiencePage.MutevdoCheckBox();
      await addnewexperiencePage.enableloopingCheckBox();
      await addnewexperiencePage.enableaudioCheckBox();
      await addnewexperiencePage.AutoplayvdoCheckBox();
      await page.waitForTimeout(6000)
      await addnewexperiencePage.clickSaveBtn();
      await page.waitForTimeout(5000)
      // await addnewexperiencePage.clickNewlyAddedExpThreeDotBtn()
      // await page.waitForTimeout(2000)
      // await addnewexperiencePage.clickNewlyAddedExprienceDeleteBtn()
      // await page.waitForTimeout(3000)
})
test.skip("011ANE-016 | Validate Video upload alert.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.clickVideoSection()
      await addnewexperiencePage.videoUploadAlert()
      await addnewexperiencePage.clickvideoUploadBTN()
      await page.waitForTimeout(5000)
      // await addnewexperiencePage.VideoDelete();
})
test("011ANE-017 | Validate Poll Video upload button is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.clickPollSection()
      await addnewexperiencePage.clickVideoRadioBtn()
      await functions.videoUploadFunction();
      await addnewexperiencePage.clickvideoUploadBTN();
})
test("011ANE-018 | Validate Web Section.", async ({ loginPage, liveWallPage, testData, addnewexperiencePage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.WebSection();
      await addnewexperiencePage.inputWebTitleText(await testData.getFullName())
      await addnewexperiencePage.WebHeaderDropDownBtn();
      await addnewexperiencePage.selectLarge();
      await addnewexperiencePage.WebHeaderDropDownBtn();
      await addnewexperiencePage.selectMedium();
      await addnewexperiencePage.WebHeaderDropDownBtn();
      await addnewexperiencePage.selectSmall();
      await addnewexperiencePage.enabledwebsiteUrl()
      await addnewexperiencePage.inputWebsiteUrl();
      await functions.bannerImageUploadFunction()
      await addnewexperiencePage.WebImageUploadFunction();
      await functions.fileUploadCropperWithoutIframe()
      await addnewexperiencePage.clickFillBtn();
      await addnewexperiencePage.clickFitBtn();
      await addnewexperiencePage.clickStretchBtn();
      await addnewexperiencePage.clickTopAlignmentBtn();
      await addnewexperiencePage.clickCenterAlignmentBtn();
      await addnewexperiencePage.clickBottomAlignmentBtn();
      await addnewexperiencePage.clickSaveBtn()
})
test("011ANE-019 | Validate negative scenario web.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.WebSection();
      await functions.fontUploadFunction();
      await addnewexperiencePage.imageUploadBUttonweb();
      // await addnewexperiencePage.chooseImageweb();
      // await addnewexperiencePage.invalidFiletypeAlertweb();
      // await addnewexperiencePage.invalidfiletypealertOkbtnweb();
      // await addnewexperiencePage.ImagemodalClosebtnweb();
})
test("011ANE-020 | Validate Engagement Section.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.EngagementSection();
      await addnewexperiencePage.inputTitleName()
      await addnewexperiencePage.clickEngdropdownBtn();
      await addnewexperiencePage.clickEngagement_1();
      await addnewexperiencePage.clickEngdropdownBtn();
      await addnewexperiencePage.clickEngagement_2();
      await addnewexperiencePage.clickEngdropdownBtn();
      await addnewexperiencePage.clickEngagement_3();
      await addnewexperiencePage.clickConfigurationdropdown();
      await addnewexperiencePage.clickConfiguration_1();
      await addnewexperiencePage.clickConfigurationdropdown();
      await addnewexperiencePage.clickConfiguration_2();
      await addnewexperiencePage.clickConfigurationdropdown();
      await addnewexperiencePage.clickConfiguration_3();
      await page.waitForTimeout(2000)
      await addnewexperiencePage.clickSaveBtn()
      await page.waitForTimeout(5000)
      // await addnewexperiencePage.clickNewlyAddedExpThreeDotBtn()
      // await page.waitForTimeout(2000)
      // await addnewexperiencePage.clickNewlyAddedExprienceDeleteBtn()
      // await page.waitForTimeout(3000)
})
test("011ANE-021 | Validate Engagement section negative senario.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.EngagementSection();
      await addnewexperiencePage.ErrorMessageIfTitleFielsIsEmpty()
      await addnewexperiencePage.invalidLengthAlertengagement();
})
test("011ANE-022 | Validate Poll Section.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.clickPollSection();
      await addnewexperiencePage.inputPollTitlename();
      await page.waitForTimeout(3000)
      await addnewexperiencePage.clickFonts();
      await addnewexperiencePage.clickArial();
      await addnewexperiencePage.clickBlocktype();
      await addnewexperiencePage.clickBlocknormal();
      await addnewexperiencePage.clickBlocktype();
      await addnewexperiencePage.clickBlockH1();
      await addnewexperiencePage.clickBlocktype();
      await addnewexperiencePage.clickBlockH2();
      await addnewexperiencePage.clickBlocktype();
      await addnewexperiencePage.clickBlockH3();
      await addnewexperiencePage.clickBlocktype();
      await addnewexperiencePage.clickBlockH4();
      await addnewexperiencePage.clickBlocktype();
      await addnewexperiencePage.clickBlockH5();
      await addnewexperiencePage.clickBlocktype();
      await addnewexperiencePage.clickBlockH6();
      await addnewexperiencePage.clickBlocktype();
      await addnewexperiencePage.clickBlockquote();
      await addnewexperiencePage.clickBold();
      await addnewexperiencePage.clickItalic();
      await addnewexperiencePage.clickUnderline();
      await addnewexperiencePage.clickStrikethrough();
      await addnewexperiencePage.clickColorpicker();
      await addnewexperiencePage.clickLeft();
      await addnewexperiencePage.clickCenter();
      await addnewexperiencePage.clickRight();
      await addnewexperiencePage.clickOutdent();
      await addnewexperiencePage.clickIndent();
      await addnewexperiencePage.clickOrdered();
      await addnewexperiencePage.clickUnOrdered();
      await addnewexperiencePage.clickUnOrdered();
      //await addnewexperiencePage.clickRemove();
      await addnewexperiencePage.clickAnswerTypeFreeText();
      await addnewexperiencePage.clickAnswerTypeMultiple();
      await addnewexperiencePage.clickAnswersShownAsImage();
      await addnewexperiencePage.clickAnswersShownAsText();
      await addnewexperiencePage.clickFontSizeDropdown();
      await addnewexperiencePage.clickFontSize_Large();
      await addnewexperiencePage.clickFontSizeDropdown();
      await addnewexperiencePage.clickFontSize_Medium();
      await addnewexperiencePage.clickFontSizeDropdown();
      await addnewexperiencePage.clickFontSize_Small();
      await page.waitForTimeout(1000)
      await addnewexperiencePage.clickAddAnswerBtn();
      await page.waitForTimeout(1000)
      await addnewexperiencePage.TypeAnswer_1();
      await addnewexperiencePage.clickDeleteAddedAnswer();
      await addnewexperiencePage.clickImageRadioBtn();
      await functions.logoImageUploadFunction()
      await addnewexperiencePage.uploadImage();
      await functions.fileUploadCropperWithoutIframe()
      await addnewexperiencePage.clickDeleteBtn()
      await addnewexperiencePage.clickVideoRadioBtn()
      await functions.videoUploadFunction()
      await addnewexperiencePage.clickvideoUploadBTN()
      await addnewexperiencePage.inputPollTitlename();
      //await addnewexperiencePage.clickSaveBtn()
})
test.skip("011ANE-023 | Validate Negative Scenario Poll Section.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.clickPollSection();
      //  await addnewexperiencePage.invalidTitleAlertPoll();
      //  await addnewexperiencePage.invalidLengthAlertPoll();
      //  await addnewexperiencePage.clickAddAnswerBtn();
      //  await addnewexperiencePage.invalidAlertforAnswer();
      await addnewexperiencePage.imageUploadbutton();
      await functions.fontUploadFunction();
      await addnewexperiencePage.invalidFiletypeAlert()
      await addnewexperiencePage.invalidfiletypealertOkbtn();
})
//is this test case have an issue related to the Answer Error Alert Massage
test("011ANE-024 | Validate Poll question multiple choice type is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.clickPollSection();
      await addnewexperiencePage.inputTitleName()
      await addnewexperiencePage.inputQuestion()
      await addnewexperiencePage.clickImageRadioBtn()
      await addnewexperiencePage.imageUploadbutton()
      await addnewexperiencePage.Imageuploader()
      await addnewexperiencePage.clickAnswerTypeMultiple()
      await addnewexperiencePage.clickAnswersShownAsText()
      await addnewexperiencePage.clickAddAnswerBtn()
      await addnewexperiencePage.TypeAnswer_1()
      await addnewexperiencePage.clickAddAnswerBtn()
      await addnewexperiencePage.TypeAnswer_2()
      await addnewexperiencePage.clickQuestionfield()
      await addnewexperiencePage.clickSaveBtn()
})
test("011ANE-025 | Validate Poll question free text  type is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.clickPollSection();
      await addnewexperiencePage.inputTitleName()
      await addnewexperiencePage.inputQuestion()
      await addnewexperiencePage.clickImageRadioBtn()
      await addnewexperiencePage.imageUploadbutton()
      await addnewexperiencePage.Imageuploader()
      await addnewexperiencePage.clickAnswerTypeFreeText()
      await addnewexperiencePage.inputCorrectAnswer()
      await addnewexperiencePage.clickAddAnswerBtn()
      await addnewexperiencePage.TypeAnswer_1()
      await addnewexperiencePage.clickAddAnswerBtn()
      await addnewexperiencePage.TypeAnswer_2()
      // await addnewexperiencePage.clickQuestionfield()
      // await addnewexperiencePage.clickSaveBtn()
})
test.skip("011ANE-026 | Validate Pool section image upload is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.clickPollSection();
      await addnewexperiencePage.inputTitleName()
      await addnewexperiencePage.inputQuestion()
      await addnewexperiencePage.clickImageRadioBtn()
      await addnewexperiencePage.imageUploadbutton()
      await addnewexperiencePage.Imageuploader()
      await addnewexperiencePage.clickAnswerTypeFreeText()
      await addnewexperiencePage.verifyCorrectAnswerText()
      await addnewexperiencePage.inputCorrectAnswer()
      await addnewexperiencePage.clickAddAnswerBtn()
      await addnewexperiencePage.TypeAnswer_1()
      await addnewexperiencePage.clickAddAnswerBtn()
      await addnewexperiencePage.TypeAnswer_2()
      await addnewexperiencePage.clickSaveBtn()
})
test.skip("011ANE-027 | Validate Pool section video upload is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.clickPollSection();
      await addnewexperiencePage.inputTitleName()
      await addnewexperiencePage.inputQuestion()
      await addnewexperiencePage.clickVideoRadioBtn()
      await functions.videoUploadFunction()
      await addnewexperiencePage.clickPollVideoBtn()
      await addnewexperiencePage.clickAnswerTypeFreeText()
      await addnewexperiencePage.verifyCorrectAnswerText()
      await addnewexperiencePage.inputCorrectAnswer()
      await addnewexperiencePage.clickAddAnswerBtn()
      await addnewexperiencePage.TypeAnswer_1()
      await addnewexperiencePage.clickAddAnswerBtn()
      await addnewexperiencePage.TypeAnswer_2()
      await addnewexperiencePage.clickQuestionfield()
      await addnewexperiencePage.clickSaveBtn()
})
test.skip("011ANE-028 | Validate Trivia Section.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.clickTriviaSection();
      await addnewexperiencePage.invalidTitleAlerttrivia();
      await addnewexperiencePage.invalidLengthAlert();
      await addnewexperiencePage.clickAddAnswerBtn()
      await addnewexperiencePage.invalidAlertforAnswertrivia();
      await functions.fontUploadFunction();
      await addnewexperiencePage.imageUploadbutton();
      await addnewexperiencePage.invalidFiletypeAlert();
      await addnewexperiencePage.invalidfiletypealertOkbtn();
      await addnewexperiencePage.ImagemodalClosebtn();
})
test("011ANE-0029 | Validate Negative scenario Trivia Section.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.clickTriviaSection();
      await addnewexperiencePage.inputTriviaTitlename();
      await addnewexperiencePage.inputQuestion()
      await addnewexperiencePage.clickFonts();
      await addnewexperiencePage.clickArial();
      await addnewexperiencePage.clickBlocktype();
      await addnewexperiencePage.clickBlocknormal();
      await addnewexperiencePage.clickBlocktype();
      await addnewexperiencePage.clickBlockH1();
      await addnewexperiencePage.clickBlocktype();
      await addnewexperiencePage.clickBlockH2();
      await addnewexperiencePage.clickBlocktype();
      await addnewexperiencePage.clickBlockH3();
      await addnewexperiencePage.clickBlocktype();
      await addnewexperiencePage.clickBlockH4();
      await addnewexperiencePage.clickBlocktype();
      await addnewexperiencePage.clickBlockH5();
      await addnewexperiencePage.clickBlocktype();
      await addnewexperiencePage.clickBlockH6();
      await addnewexperiencePage.clickBlocktype();
      await addnewexperiencePage.clickBlockquote();
      await addnewexperiencePage.clickBold();
      await addnewexperiencePage.clickItalic();
      await addnewexperiencePage.clickUnderline();
      await addnewexperiencePage.clickStrikethrough();
      await addnewexperiencePage.clickColorpicker();
      await addnewexperiencePage.clickLeft();
      await addnewexperiencePage.clickCenter();
      await addnewexperiencePage.clickRight();
      await addnewexperiencePage.clickOutdent();
      await addnewexperiencePage.clickIndent();
      await addnewexperiencePage.clickOrdered();
      await addnewexperiencePage.clickUnOrdered();
      await addnewexperiencePage.clickUnOrdered();
      await page.waitForTimeout(2000)
      //      await addnewexperiencePage.inputQuestion();
      await addnewexperiencePage.clickAnswerTypeFreeText();
      await addnewexperiencePage.clickAnswerTypeMultiple();
      await addnewexperiencePage.clickAnswersShownAsImage();
      await addnewexperiencePage.clickAnswersShownAsText();
      await addnewexperiencePage.clickFontSizeDropdown();
      await addnewexperiencePage.clickFontSize_Large();
      await addnewexperiencePage.clickFontSizeDropdown();
      await addnewexperiencePage.clickFontSize_Medium();
      await addnewexperiencePage.clickFontSizeDropdown();
      await addnewexperiencePage.clickFontSize_Small();
      await page.waitForTimeout(2000);
      await addnewexperiencePage.clickAddAnswerBtn();
      await addnewexperiencePage.TypeAnswer_1;
      await addnewexperiencePage.clickImageRadioBtn;
      await addnewexperiencePage.imageUploadbutton()
      await addnewexperiencePage.GameTitleImageuploader()
      await addnewexperiencePage.clickDeleteBtn()
      await addnewexperiencePage.clickVideoRadioBtn()
      await functions.videoUploadFunction()
      await addnewexperiencePage.clickPollVideoBtn()
})
test("011ANE-030 | Validate Trivia section image upload is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickaddnewex();
      await addnewexperiencePage.clickTriviaSection();
      await addnewexperiencePage.inputTriviaTitlename();
      await addnewexperiencePage.inputQuestion()
      await addnewexperiencePage.clickFontSizeDropdown();
      await addnewexperiencePage.clickFontSize_Small();
      await addnewexperiencePage.clickAnswerTypeMultiple()
      await addnewexperiencePage.clickAnswersShownAsText()
      await page.waitForTimeout(2000);
      await addnewexperiencePage.clickAddAnswerBtn();
      await addnewexperiencePage.TypeAnswer;
      await addnewexperiencePage.clickAddAnswerBtn();
      await addnewexperiencePage.TypeAnswer;
      await addnewexperiencePage.clickAddAnswerBtn();
      await addnewexperiencePage.TypeAnswer;
      await addnewexperiencePage.clickImageRadioBtn;
      await addnewexperiencePage.imageUploadbutton()
      await addnewexperiencePage.GameTitleImageuploader()
      // await addnewexperiencePage.clickSaveBtn()
})
// test.skip("011ANE-031 | Validate Trivia section video upload is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
//       // await test.step("Login Admin And land To Home Screen", async () => {
//       await page.goto('/admin/#/sign-in')
//       await loginPage.login(data.username, data.password)
//       const title = await page.title();
//       expect(title).toBe('DXP Admin')
//       const screenshot = await page.screenshot();
//       await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//       })
//       await addnewexperiencePage.clickHomeAvater();
//       await addnewexperiencePage.onDemandBtn();
//       await addnewexperiencePage.clickaddnewex();
//       await addnewexperiencePage.clickTriviaSection();
//       await addnewexperiencePage.inputTitleName()
//       await addnewexperiencePage.inputQuestion()
//       await addnewexperiencePage.clickVideoRadioBtn()
//       await functions.videoUploadFunction()
//       await addnewexperiencePage.clickPollVideoBtn()
//       await addnewexperiencePage.clickAnswerTypeFreeText()
//       await addnewexperiencePage.verifyCorrectAnswerText()
//       await addnewexperiencePage.inputCorrectAnswer()
//       await addnewexperiencePage.clickAddAnswerBtn()
//       await addnewexperiencePage.TypeAnswer_1()
//       await addnewexperiencePage.clickAddAnswerBtn()
//       await addnewexperiencePage.TypeAnswer_2()
//       await addnewexperiencePage.clickQuestionfield()
//       await addnewexperiencePage.clickSaveBtn()
// })
// test("011ANE-032 | Validate Trivia question multiple choice is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
//       // await test.step("Login Admin And land To Home Screen", async () => {
//       await page.goto('/admin/#/sign-in')
//       await loginPage.login(data.username, data.password)
//       const title = await page.title();
//       expect(title).toBe('DXP Admin')
//       const screenshot = await page.screenshot();
//       await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//       })
//       await addnewexperiencePage.clickHomeAvater();
//       await addnewexperiencePage.onDemandBtn();
//       await addnewexperiencePage.clickaddnewex();
//       await addnewexperiencePage.clickTriviaSection();
//       await addnewexperiencePage.inputTitleName()
//       await addnewexperiencePage.inputQuestion()
//       await addnewexperiencePage.clickImageRadioBtn()
//       await addnewexperiencePage.imageUploadbutton()
//       await addnewexperiencePage.Imageuploader()
//       await addnewexperiencePage.clickAnswerTypeMultiple()
//       await addnewexperiencePage.clickAnswersShownAsText()
//       await addnewexperiencePage.clickAddAnswerBtn()
//       await addnewexperiencePage.TypeAnswer_1()
//       await addnewexperiencePage.clickAddAnswerBtn()
//       await addnewexperiencePage.TypeAnswer_2()
//       await addnewexperiencePage.clickQuestionfield()
//       await addnewexperiencePage.clickSaveBtn()
// })
// test("011ANE-033 | Validate Trivia question free text is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
//       // await test.step("Login Admin And land To Home Screen", async () => {
//       await page.goto('/admin/#/sign-in')
//       await loginPage.login(data.username, data.password)
//       const title = await page.title();
//       expect(title).toBe('DXP Admin')
//       const screenshot = await page.screenshot();
//       await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//       })
//       await addnewexperiencePage.clickHomeAvater();
//       await addnewexperiencePage.onDemandBtn();
//       await addnewexperiencePage.clickaddnewex();
//       await addnewexperiencePage.clickTriviaSection();
//       await addnewexperiencePage.inputTitleName()
//       await addnewexperiencePage.inputQuestion()
//       await addnewexperiencePage.clickVideoRadioBtn()
//       await functions.videoUploadFunction()
//       await addnewexperiencePage.clickvideoUploadBTN()
//       // await addnewexperiencePage.imageUploadbutton()
//       // await addnewexperiencePage.Imageuploader()
//       await addnewexperiencePage.clickAnswerTypeFreeText()
//       await addnewexperiencePage.inputCorrectAnswer()
//       await addnewexperiencePage.clickAddAnswerBtn()
//       await addnewexperiencePage.TypeAnswer_1()
//       await addnewexperiencePage.clickAddAnswerBtn()
//       await addnewexperiencePage.TypeAnswer_2()
//       await addnewexperiencePage.clickQuestionfield()
//       await addnewexperiencePage.clickSaveBtn()
// })
// test("011ANE-0040 | Validate The Delete Functionalities Of The Experiences.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
//       await page.goto('/admin/#/sign-in')
//       await loginPage.login(data.username, data.password)
//       const title = await page.title();
//       expect(title).toBe('DXP Admin')
//       const screenshot = await page.screenshot();
//       await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//       })
//       await addnewexperiencePage.clickHomeAvater();
//       await addnewexperiencePage.onDemandBtn();
//       await addnewexperiencePage.deletetheengagementExperiences();
//       await addnewexperiencePage.deleteWebExperiences();
//       await addnewexperiencePage.deleteVideoExperiences();
// })
// test("011ANE-040 | Validate The Delete Functionalities Of The Experiences.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
//       await page.goto('/admin/#/sign-in')
//       await loginPage.login(data.username, data.password)
//       const title = await page.title();
//       expect(title).toBe('DXP Admin')
//       const screenshot = await page.screenshot();
//       await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//       })
//       await addnewexperiencePage.clickHomeAvater();
//       await addnewexperiencePage.onDemandBtn();
//       await addnewexperiencePage.clickNewlyAddedExpThreeDotBtn()
//       await addnewexperiencePage.clickNewlyAddedExprienceDeleteBtn()
// })
// test("011ANE-0024 | Validate add new experiences drug and drop is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
//       await page.goto('/admin/#/sign-in')
//       await loginPage.login(data.username, data.password)
//       const title = await page.title();
//       expect(title).toBe('DXP Admin')
//       const screenshot = await page.screenshot();
//       await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//       })
//       await addnewexperiencePage.clickHomeAvater();
//       await addnewexperiencePage.onDemandBtn();
//       await addnewexperiencePage.DragandDropAddnewExperinces()
// })
test("011ANE-0026 | Validate add new experiences edit and delete button is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater()
      await addnewexperiencePage.onDemandBtn()
      await addnewexperiencePage.clickExperincesThreeDotBtn()
      await addnewexperiencePage.clickExperincesEditBtn()
      await addnewexperiencePage.verifyExperincesTileTypeText()
      await addnewexperiencePage.clickExperincesPopupCloseBtn()
})
test.skip("011ANE-0027 | Validate experience Tile Type image successfully working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater()
      await addnewexperiencePage.onDemandBtn()
      await addnewexperiencePage.clickaddnewex()
      await addnewexperiencePage.ImageBtn()
      await addnewexperiencePage.inputTitleName()
      await addnewexperiencePage.HeaderTextBtn()
      await addnewexperiencePage.clickFontSize_Medium()
      await page.waitForTimeout(2000)
      await addnewexperiencePage.imageUploadbutton()
      await addnewexperiencePage.UploadImage()
      await page.waitForTimeout(2000)
      await addnewexperiencePage.clickSaveBtn()
})
test("011ANE-0028 | Validate experience Tile Type video successfully working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater()
      await addnewexperiencePage.onDemandBtn()
      await addnewexperiencePage.clickaddnewex()
      await addnewexperiencePage.clickVideoSection()
      await addnewexperiencePage.inputTitleName()
      await addnewexperiencePage.HeaderTextBtn()
      await addnewexperiencePage.clickFontSize_Medium()
      await page.waitForTimeout(2000)
      await addnewexperiencePage.videoUploadFunction()
      await addnewexperiencePage.clickvideoUploadBTN()
      await addnewexperiencePage.ShowcontrolCheckBox()
      await addnewexperiencePage.EnablePlayVideoCheckBox()
      await addnewexperiencePage.MutevdoCheckBox()
      await addnewexperiencePage.clickSaveBtn()
})
test.skip("011ANE-0029 | Validate add image successfully reflection on mobile screen.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater()
      await addnewexperiencePage.onDemandBtn()
      await addnewexperiencePage.clickaddnewex()
})
test.skip("011ANE-0030 | Validate add video successfully reflection on mobile screen.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater()
      await addnewexperiencePage.onDemandBtn()
      await addnewexperiencePage.clickaddnewex()
})
test("011ANE-0031 | Validate Game/Engagement successfully working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater()
      await addnewexperiencePage.onDemandBtn()
      await addnewexperiencePage.clickaddnewex()
      await addnewexperiencePage.EngagementSection()
      await addnewexperiencePage.inputTitleName()
      await addnewexperiencePage.clickEngdropdownBtn();
      await addnewexperiencePage.clickEngagement_1()
      await addnewexperiencePage.clickConfigurationdropdown()
      await addnewexperiencePage.clickConfiguration_1()
      await addnewexperiencePage.clickSaveBtn()
})
test.skip("011ANE-0023 | Validate configuration delete button is working.", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')
      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
      })
      await addnewexperiencePage.clickHomeAvater();
      await addnewexperiencePage.onDemandBtn();
      await addnewexperiencePage.clickSliderPlusBtn()
      await addnewexperiencePage.clickSliderMinusBtn()
})
