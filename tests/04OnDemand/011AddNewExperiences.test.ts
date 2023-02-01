import test, { expect } from "@fixtures/basePages";
import { BrowserContext, webkit, devices, Page, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"

test("011ANE-001 | Validate Image Section", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
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
      await addnewexperiencePage.ImageBtn();
      await addnewexperiencePage.EmptywebtitleAlert();
      await addnewexperiencePage.invalidLengthAlert();
      await addnewexperiencePage.inputTitleName()
      await addnewexperiencePage.enabledIconCheckBox();
      await addnewexperiencePage.checkHeaderText();
      await addnewexperiencePage.HeaderTextBtn();
      await addnewexperiencePage.selectLarge();
      await addnewexperiencePage.HeaderTextBtn();
      await addnewexperiencePage.selectMedium();
      await addnewexperiencePage.HeaderTextBtn();
      await addnewexperiencePage.selectSmall();
      
      await addnewexperiencePage.checkWebsiteText();
      await addnewexperiencePage.ImageUploadFunction();
      await addnewexperiencePage.ImageDelete();
      await addnewexperiencePage.ImageEdit();
      await addnewexperiencePage.clickFillBtn();
      await addnewexperiencePage.clickFitBtn();
      await addnewexperiencePage.clickStretchBtn();
      await addnewexperiencePage.clickTopAlignmentBtn();
      await addnewexperiencePage.clickCenterAlignmentBtn();
      await addnewexperiencePage.clickBottomAlignmentBtn();

      await addnewexperiencePage.imageUploadBUtton();      
      await functions.fontUploadFunction();
      await addnewexperiencePage.chooseImage();
      await addnewexperiencePage.invalidFiletypeAlert();
      await addnewexperiencePage.invalidfiletypealertOkbtn();
      await addnewexperiencePage.ImagemodalClosebtn();
      await addnewexperiencePage.ImageUploadFunction();

      //await addnewexperiencePage.invalidImageUploadFunction();
      await addnewexperiencePage.clickSaveBtn();
      await page.waitForTimeout(6000)

      // await addnewexperiencePage.clickNewlyAddedExpThreeDotBtn()
      // await addnewexperiencePage.clickNewlyAddedExprienceDeleteBtn()

      await page.waitForTimeout(5000)



})


test("011ANE-002 | Validate Video Section", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
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

      await addnewexperiencePage.clickVideoBtn();
      await addnewexperiencePage.InvalidtitleAlertVideo();
      await addnewexperiencePage.checkTitleName();
      await addnewexperiencePage.checkHeader();
      await addnewexperiencePage.HeaderVTextBtn();
      await addnewexperiencePage.VselectLarge();
      await addnewexperiencePage.HeaderVTextBtn();
      await addnewexperiencePage.VselectMedium();
      await addnewexperiencePage.HeaderVTextBtn();
      await addnewexperiencePage.VselectSmall();
     
  
      await addnewexperiencePage.videoUploadFunction();

      await page.waitForTimeout(10000)
      await addnewexperiencePage.VideoDelete();
      // await addnewexperiencePage.UploadedvideoDelete();
      // await addnewexperiencePage.videoUploadFunction();
      // await addnewexperiencePage.UploadedVideoEdit();
      // await addnewexperiencePage.videoUploadFunction();
       await page.waitForTimeout(10000)
      await addnewexperiencePage.ShowcontrolCheckBox();
      await addnewexperiencePage.PlayvdoCheckBox();
      await addnewexperiencePage.MutevdoCheckBox();
      await addnewexperiencePage.enableloopingCheckBox();
      await addnewexperiencePage.enableaudioCheckBox();
      await addnewexperiencePage.AutoplayvdoCheckBox();
      await page.waitForTimeout(6000)
      
      
      await addnewexperiencePage.clickVSaveBtn();

      await page.waitForTimeout(5000)

      
            
      // await addnewexperiencePage.clickNewlyAddedExpThreeDotBtn()
      // await page.waitForTimeout(2000)
      // await addnewexperiencePage.clickNewlyAddedExprienceDeleteBtn()
      // await page.waitForTimeout(3000)


})
test("011ANE-003 | Validate Video upload button", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
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

      await addnewexperiencePage.clickVideoBtn();
      await functions.bannerImageUploadFunction();
      await addnewexperiencePage.videoUploadBTN();


})


test("011ANE-004 | Validate Web Section", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
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

      await addnewexperiencePage.WebBtn();

      await addnewexperiencePage.checkWTitleText();
      await addnewexperiencePage.checkWHeaderText();
      await addnewexperiencePage.WHeaderTextBtn();
      await addnewexperiencePage.WselectLarge();
      await addnewexperiencePage.WHeaderTextBtn();
      await addnewexperiencePage.WselectMedium();
      await addnewexperiencePage.WHeaderTextBtn();
      await addnewexperiencePage.WselectSmall();
      await addnewexperiencePage.WenabledIconCheckBox();
      await addnewexperiencePage.WcheckWebsiteText();
      await addnewexperiencePage.WImageUploadFunction();

      await addnewexperiencePage.WclickFillBtn();
      await addnewexperiencePage.WclickFitBtn();
      await addnewexperiencePage.WclickStretchBtn();
      await addnewexperiencePage.WclickTopAlignmentBtn();
      await addnewexperiencePage.WclickCenterAlignmentBtn();
      await addnewexperiencePage.WclickBottomAlignmentBtn();

      await addnewexperiencePage.clickVSaveBtn()
      await page.waitForTimeout(5000)

            
      // await addnewexperiencePage.clickNewlyAddedExpThreeDotBtn()
      // await page.waitForTimeout(2000)
      // await addnewexperiencePage.clickNewlyAddedExprienceDeleteBtn()
      // await page.waitForTimeout(3000)

})

test("011ANE-005 | Validate negative scenario web", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
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

      await addnewexperiencePage.WebBtn();


      await addnewexperiencePage.EmptywebtitleAlertweb();
      await functions.fontUploadFunction();
      await addnewexperiencePage.imageUploadBUttonweb();
      await addnewexperiencePage.chooseImageweb();
      await addnewexperiencePage.invalidFiletypeAlertweb();
      await addnewexperiencePage.invalidfiletypealertOkbtnweb();
      await addnewexperiencePage.ImagemodalClosebtnweb();
      




})

test("011ANE-006 | Validate Engagement Section", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
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

      await addnewexperiencePage.EngagementBtn();

      await addnewexperiencePage.EngTitleText();
      await addnewexperiencePage.EngdropdownBtn();
      await addnewexperiencePage.Engagement_1();
      await addnewexperiencePage.EngdropdownBtn();
      await addnewexperiencePage.Engagement_2();
      await addnewexperiencePage.EngdropdownBtn();
      await addnewexperiencePage.Engagement_3();
      await addnewexperiencePage.Configuration();
      await addnewexperiencePage.Configuration_1();
      await addnewexperiencePage.Configuration();
      await addnewexperiencePage.Configuration_2();
      await addnewexperiencePage.Configuration();
      await addnewexperiencePage.Configuration_3();
      await page.waitForTimeout(2000)
      await addnewexperiencePage.clickSaveBtn()
      await page.waitForTimeout(5000)

            
      // await addnewexperiencePage.clickNewlyAddedExpThreeDotBtn()
      // await page.waitForTimeout(2000)
      // await addnewexperiencePage.clickNewlyAddedExprienceDeleteBtn()
      // await page.waitForTimeout(3000)
})


test("011ANE-007 | Validate Engagement section negative senarios", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {

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

await addnewexperiencePage.EngagementBtn();
await addnewexperiencePage.Emptyengagementtitle();
await addnewexperiencePage.invalidLengthAlertengagement();
// await addnewexperiencePage.EngagementModalCancellation();


})
test("011ANE-008 | Validate Poll Section", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
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

      await addnewexperiencePage.PollBtn();
      await addnewexperiencePage.PTitlename();
      await page.waitForTimeout(3000)
      await addnewexperiencePage.Fonts();
      await addnewexperiencePage.Arial();
      await addnewexperiencePage.Blocktype();
      await addnewexperiencePage.Blocknormal();
      await addnewexperiencePage.Blocktype();
      await addnewexperiencePage.BlockH1();
      await addnewexperiencePage.Blocktype();
      await addnewexperiencePage.BlockH2();
      await addnewexperiencePage.Blocktype();
      await addnewexperiencePage.BlockH3();
      await addnewexperiencePage.Blocktype();
      await addnewexperiencePage.BlockH4();
      await addnewexperiencePage.Blocktype();
      await addnewexperiencePage.BlockH5();
      await addnewexperiencePage.Blocktype();
      await addnewexperiencePage.BlockH6();
      await addnewexperiencePage.Blocktype();
      await addnewexperiencePage.Blockquote();
      await addnewexperiencePage.Bold();
      await addnewexperiencePage.Italic();
      await addnewexperiencePage.Underline();
      await addnewexperiencePage.Strikethrough();
      await addnewexperiencePage.Colorpk();
      await addnewexperiencePage.Left();
      await addnewexperiencePage.Center();
      await addnewexperiencePage.Right();
      await addnewexperiencePage.Outdent();
      await addnewexperiencePage.Indent();
      await addnewexperiencePage.Ordered();
      await addnewexperiencePage.UnOrdered();
      await addnewexperiencePage.UnOrdered();
      await addnewexperiencePage.Remove();
      //      await addnewexperiencePage.inputQuestion();
      await addnewexperiencePage.FreeText();
      await addnewexperiencePage.Multiple();
      await addnewexperiencePage.Image();
      await addnewexperiencePage.Text();
      await addnewexperiencePage.FontSize();
      await addnewexperiencePage.Plarge();
      await addnewexperiencePage.FontSize();
      await addnewexperiencePage.PMedium();
      await addnewexperiencePage.FontSize();
      await addnewexperiencePage.PSmall();
      await page.waitForTimeout(2000)
      await addnewexperiencePage.AddAnswer();
      await page.waitForTimeout(2000)
      await addnewexperiencePage.Answer_1();
      await addnewexperiencePage.Delete();
      await addnewexperiencePage.Pollimage();
      await addnewexperiencePage.uploadImage();
      await page.waitForTimeout(4000)
      await addnewexperiencePage.Pollvdo();
      await addnewexperiencePage.uploadvdo();
      // await addnewexperiencePage.PVideo();
      await addnewexperiencePage.PTitlename();
      // await addnewexperiencePage.pollSaveBtn();

      
      await addnewexperiencePage.clickSaveBtn()

      await page.waitForTimeout(5000)

            
            
      // await addnewexperiencePage.clickNewlyAddedExpThreeDotBtn()
      // await page.waitForTimeout(2000)
      // await addnewexperiencePage.clickNewlyAddedExprienceDeleteBtn()
      // await page.waitForTimeout(3000)
})


test("011ANE-009 | Validate Negative Scenario Poll Section", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
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
 
       await addnewexperiencePage.PollBtn();
       await addnewexperiencePage.invalidTitleAlertPoll();
       await addnewexperiencePage.invalidLengthAlertPoll();
       await addnewexperiencePage.AddAnswer();
       await addnewexperiencePage.invalidAlertforAnswer();
       await addnewexperiencePage.imageUploadBUtton();      
      await functions.fontUploadFunction();
      await addnewexperiencePage.chooseImage();
      await addnewexperiencePage.invalidFiletypeAlert();
      await addnewexperiencePage.invalidfiletypealertOkbtn();
      await addnewexperiencePage.ImagemodalClosebtn();


})

test("011ANE-0010 | Validate Negative scenario Trivia Section", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
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
      await page.waitForTimeout(6000)

      await addnewexperiencePage.TriviaBtn();



      await addnewexperiencePage.TrFonts();
      await addnewexperiencePage.TrArial();
      await addnewexperiencePage.TrBlocktype();
      await addnewexperiencePage.TrNormal();
      await addnewexperiencePage.TrBlocktype();
      await addnewexperiencePage.TrBlockH1();
      await addnewexperiencePage.TrBlocktype();
      await addnewexperiencePage.TrBlockH2();
      await addnewexperiencePage.TrBlocktype();
      await addnewexperiencePage.TrBlockH3();
      await addnewexperiencePage.TrBlocktype();
      await addnewexperiencePage.TrBlockH4();
      await addnewexperiencePage.TrBlocktype();
      await addnewexperiencePage.TrBlockH5();
      await addnewexperiencePage.TrBlocktype();
      await addnewexperiencePage.TrBlockH6();
      await addnewexperiencePage.TrBlocktype();
      await addnewexperiencePage.TrBlockquote();
      await addnewexperiencePage.TrBold();
      await addnewexperiencePage.TrItalic();
      await addnewexperiencePage.TrUnderline();
      await addnewexperiencePage.TrStrikethrough();
      await addnewexperiencePage.TrColorpk();
      await addnewexperiencePage.Textcl();
      await addnewexperiencePage.Greencl();
      // await addnewexperiencePage.Highlightcl();
      // await addnewexperiencePage.Highlightgrn();

      await addnewexperiencePage.TrLeft();
      await addnewexperiencePage.TrCenter();
      await addnewexperiencePage.TrRight();
      await addnewexperiencePage.TrOutdent();
      await addnewexperiencePage.TrIndent();
      await addnewexperiencePage.TrOrdered();
      await addnewexperiencePage.TrUnOrdered();
      await addnewexperiencePage.TrUnOrdered();
      await addnewexperiencePage.TrRemove();
      await page.waitForTimeout(2000)
      //      await addnewexperiencePage.inputQuestion();

      await addnewexperiencePage.TrFreeText();
      await addnewexperiencePage.TrMultiple();
      await addnewexperiencePage.TrImage();
      await addnewexperiencePage.TrText();
      await addnewexperiencePage.TrFontSize();
      await addnewexperiencePage.TrPlarge();
      await addnewexperiencePage.TrFontSize();
      await addnewexperiencePage.TrMedium();
      await addnewexperiencePage.TrFontSize();
      await addnewexperiencePage.TrSmall();
      await page.waitForTimeout(2000);
      await addnewexperiencePage.TrAddAnswer();
      await addnewexperiencePage.TrAnswer_1();
      //       await addnewexperiencePage.TrDelete();
      await addnewexperiencePage.TrPollimage();
      await addnewexperiencePage.TruploadImage();
      await page.waitForTimeout(4000);
      await addnewexperiencePage.TrPollvdo();
      await addnewexperiencePage.Truploadvdo();
      // await addnewexperiencePage.TrPVideo();
      await page.waitForTimeout(7000);

      await addnewexperiencePage.TrTitlename();
      //        await addnewexperiencePage.TrSaveBtn();
      await page.waitForTimeout(5000);

      
      await addnewexperiencePage.clickSaveBtn()

      await page.waitForTimeout(5000)

            
            
      // await addnewexperiencePage.clickNewlyAddedExpThreeDotBtn()
      // await page.waitForTimeout(2000)
      // await addnewexperiencePage.clickNewlyAddedExprienceDeleteBtn()
      // await page.waitForTimeout(3000)
}) 

test("011ANE-0011 | Validate Trivia Section", async ({ loginPage, liveWallPage, addnewexperiencePage, functions, page }, testInfo) => {
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
      await page.waitForTimeout(6000)

      await addnewexperiencePage.TriviaBtn();
      await addnewexperiencePage.invalidTitleAlerttrivia();
      await addnewexperiencePage.invalidLengthAlerttrivia();
      await addnewexperiencePage.TrAddAnswer();
      await addnewexperiencePage.invalidAlertforAnswertrivia();
      await addnewexperiencePage.imageUploadBUtton();      
      await functions.fontUploadFunction();
      await addnewexperiencePage.chooseImage();
      await addnewexperiencePage.invalidFiletypeAlert();
      await addnewexperiencePage.invalidfiletypealertOkbtn();
      await addnewexperiencePage.ImagemodalClosebtn();
})