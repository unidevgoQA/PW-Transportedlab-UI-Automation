import test, { expect } from "@fixtures/basePages";
import prizeDropMobilePage from "@pages/prizedrop_mobile_game.page";
import { devices, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs';
const clipboard = require('clipboardy')
test("007PD-001 | Add New Configuration", async ({ loginPage, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {


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
                        body:screenshot,
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
test("007D-002 |validate error if Add New Configuration is clicked without name provided", async ({ loginPage,  prizeDropPage,  page, }, testInfo) => {


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
        await test.step("validate error if Add New Configuration is clicked without name provided", async () => {


                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                const screenshot = await page.screenshot();
                await testInfo.attach("click Prize Drop Section", {
                        body:screenshot,
                        contentType: "image/png",
                })
                 //click Add New Config Plus Btn
                 await prizeDropPage.clickAddNewConfigPlusBtn()

                //click Add Btn
                await prizeDropPage.clickAddBtn()
                // validate error message visiblity

                await prizeDropPage.verifyerrorvisiblity()

                // click ok button
                await prizeDropPage.clickokbuttonerror()
                
        })
})

test("008PD-003 | Validate error if start clicked without prize given ", async({ loginPage,  prizeDropPage, functions, page, }, testInfo) =>{
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

        await test.step("validate start button of newly added game is visible", async () =>{
              await prizeDropPage.startbuttonvisible()
        })

        await test.step("click on start button", async() =>{
                await prizeDropPage.clickstartbutton()
        })

        await test.step("validate error message for no prize given", async() =>{
                await prizeDropPage.clickokinstartconfirmmodal()
                await prizeDropPage.verifyerrorvisiblityfornoprize()
                await prizeDropPage.clickokbuttonerror()
        })



})

test("007PD-002 | Validate Font Upload Functionality", async ({ loginPage, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {


                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()

                await page.waitForTimeout(4000)

                //UploadFont
                await functions.fontUploadFunction()
                await prizeDropPage.clickToUploadFont()


                //click Clear All Btn
                await prizeDropPage.clickClearAllBtn()




                await page.waitForTimeout(4000)

        })

})


test("007PD-003 | Validate All The Color Input Functionality", async ({ loginPage, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("008TOFW-003 | Validate All The Color Input Functionality", async () => {

                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()

                //click Game Design
                await prizeDropPage.clickGameDesign()

                //click Clear All Btn
                await prizeDropPage.clickClearAllBtn()


                //verify Main Color Text
                await prizeDropPage.verifyMainColorText()


                //click Main Color Picker
                await prizeDropPage.clickMainColorPicker()


                //input Main RGR First Color
                await prizeDropPage.inputMainRGRFirstColor()


                //input Main RGR Second Color
                await prizeDropPage.inputMainRGRSecondColor()


                //input Main RGR Third Color
                await prizeDropPage.inputMainRGRThirdColor()


                //input Main RGR Four Color
                await prizeDropPage.inputMainRGRFourColor()


                //input Main RGR Five Color
                await prizeDropPage.inputMainRGRFiveColor()


                //click Color Picker SaveBtn
                await prizeDropPage.clickColorPickerSaveBtn()


                //verify Accent Color Text
                await prizeDropPage.verifyAccentColorText()


                //click Accent Color Picker
                await prizeDropPage.clickAccentColorPicker()


                //input Accent RGR First Color
                await prizeDropPage.inputAccentRGRFirstColor()


                //input Accent RGR Second Color
                await prizeDropPage.inputAccentRGRSecondColor()


                //input Accent RGR Third Color
                await prizeDropPage.inputAccentRGRThirdColor()


                //input Accent RGR Four Color
                await prizeDropPage.inputAccentRGRFourColor()


                //input Accent RGR Five Color
                await prizeDropPage.inputAccentRGRFiveColor()

                //click Color Picker SaveBtn
                await prizeDropPage.clickColorPickerSaveBtn()






                //verify Text Color Text
                await prizeDropPage.verifyTextColorText()


                //click Text Color Picker
                await prizeDropPage.clickTextColorPicker()


                //input Text RGR First Color
                await prizeDropPage.inputTextRGRFirstColor()


                //input Text RGR Second Color
                await prizeDropPage.inputTextRGRSecondColor()


                //input Text RGR Third Color
                await prizeDropPage.inputTextRGRThirdColor()


                //input Text RGR Four Color
                await prizeDropPage.inputTextRGRFourColor()


                //input Text RGR Five Color
                await prizeDropPage.inputTextRGRFiveColor()



                //click Color Picker SaveBtn
                await prizeDropPage.clickColorPickerSaveBtn()






                //click Game Design
                await prizeDropPage.verifyButtonColorText()


                //click Game Design
                await prizeDropPage.clickButtonColorPicker()


                //input Button RGR First Color
                await prizeDropPage.inputButtonRGRFirstColor()



                //input Button RGR Second Color
                await prizeDropPage.inputButtonRGRSecondColor()

                //input Button RGR Third Color
                await prizeDropPage.inputButtonRGRThirdColor()



                //input Button RGR Four Color
                await prizeDropPage.inputButtonRGRFourColor()



                //input Button RGR Five Color
                await prizeDropPage.inputButtonRGRFiveColor()

                //click Color Picker SaveBtn
                await prizeDropPage.clickColorPickerSaveBtn()



                await page.waitForTimeout(4000)

        })

})

test("007PD-004 | Validate Upload Game Design Image Functionality", async ({ loginPage, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {

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

        await test.step("008TOFW-004 | Validate Upload Game Design Image Functionality", async () => {

                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()

                //click Game Design
                await prizeDropPage.clickGameDesign()
                // await page.waitForTimeout(4000)

                //verify Game Title Image Title Text
                await prizeDropPage.verifyGameTitleImageTitleText()

                //verify Full Screen Logo Text
                await prizeDropPage.verifyFullScreenLogoText()

                // //click To Upload Full Screen Logo
                await functions.logoImageUploadFunction()
                await prizeDropPage.clickToUploadRulesImage()
                await prizeDropPage.fileUploadCropper()

                await page.waitForTimeout(2000)
                await prizeDropPage.clickToUploadSplashScreenImage()
                await prizeDropPage.fileUploadCropper()

                await page.waitForTimeout(2000)

                await prizeDropPage.clickToUploadHowtoPlayImage()
                await prizeDropPage.fileUploadCropper()

                await page.waitForTimeout(2000)

                await prizeDropPage.clickToUploadGameBackgroundImage()
                await prizeDropPage.fileUploadCropper()

                await page.waitForTimeout(2000)

                await prizeDropPage.clickToUploadSponsorTeamLogo()
                await prizeDropPage.fileUploadCropper()
                await page.waitForTimeout(2000)

                await prizeDropPage.clickToUploadSponsorLogo()
                await prizeDropPage.fileUploadCropper()

                await page.waitForTimeout(2000)

                await prizeDropPage.clickToUploadSponsorImage()
                await prizeDropPage.fileUploadCropper()
                await page.waitForTimeout(2000)

                await prizeDropPage.clickToUploadNoPrizeWonImage()
                await prizeDropPage.fileUploadCropper()


                await page.waitForTimeout(2000)


                await prizeDropPage.clickToUploadParachutePrizeImage()
                await prizeDropPage.fileUploadCropper()
                await page.waitForTimeout(2000)

                await prizeDropPage.clickToUploadFrameImage()
                await prizeDropPage.fileUploadCropper()
                await page.waitForTimeout(2000)


                await prizeDropPage.clickToUploadGameTitleImage()
                await prizeDropPage.fileUploadCropper()
                await page.waitForTimeout(2000)

                await prizeDropPage.clickToUploadFullScreenLogo()
                await prizeDropPage.fileUploadCropper()



                await page.waitForTimeout(4000)



                // //click ToUp load Game Title Image
                // await functions.logoImageUploadFunction()

                // // await page.waitForTimeout(4000)

                // //click To Upload Frame ImageImage
                // await functions.logoImageUploadFunction()

                // // await page.waitForTimeout(4000)

                // //click To Upload Parachute Prize Image
                // await functions.logoImageUploadFunction()

                // // await page.waitForTimeout(4000)

                // //click To Upload NoPrizeWon Image
                // await functions.logoImageUploadFunction()

                // // await page.waitForTimeout(4000)





        })

})


test("007PD-005 | Validate Game Setting Functionality", async ({ loginPage, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {

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

        await test.step("008TOFW-006 | Validate Game Setting Functionality", async () => {

                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()


                //click Game Settings
                await prizeDropPage.clickGameSettings()


                //input Total Rewards
                await prizeDropPage.inputTotalRewards()
                //input Total Rewards PerDay
                await prizeDropPage.inputTotalRewardsPerDay()
                //input Duration Time Hour
                await prizeDropPage.inputDurationTimeHour()
                //input Duration Time Minutes
                await prizeDropPage.inputDurationTimeMinutes()
                //input Duration Time Second
                await prizeDropPage.inputDurationTimeSecond()
                //input Stand By Message
                await prizeDropPage.inputStandByMessage()
                //input Ending Game Massage
                await prizeDropPage.inputEndingGameMassage()

                //input Selection Message
                await prizeDropPage.inputSelectionMessage()

                //click Entry Screen
                await prizeDropPage.clickEntryScreen()


                //click Entry Screen
                await prizeDropPage.selectHowToScreen()

        })

})

test("007PD-006 | Validate Add Banner Functionality", async ({ loginPage, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {

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

        await test.step("008TOFW-006 | Validate Game Setting Functionality", async () => {

                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()

                await page.waitForTimeout(3000)
                //click Add Banner Section
                await prizeDropPage.clickAddBannerSection()


                //verify Marketing Massage Text
                await prizeDropPage.verifyMarketingMassageText()
                //verify DragYour Image Text
                await prizeDropPage.verifyDragYourImageText()
                //click To UploadBanner
                await functions.bannerImageUploadFunction()
                await prizeDropPage.clickToUploadBanner()
                await functions.fileUploadCropper()

                await page.waitForTimeout(3000)

        })

})
test("007PD-007 | Validate Prizing Section Functionality", async ({ loginPage, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {

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

        await test.step("Validate Prizing Section Functionality", async () => {

                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()

                await page.waitForTimeout(3000)
                //click Prizing Section
                await prizeDropPage.clickPrizingSection()


                //verify Prizing List Text
                await prizeDropPage.verifyPrizingListText()
                //click Add New Prize Btn
                await prizeDropPage.clickAddNewPrizeBtn()
                //click To UploadBanner

                await prizeDropPage.inputCouponName()

                await prizeDropPage.inputAmountOfAwarding()

                await prizeDropPage.inputPercentageAwarded()

                await prizeDropPage.clickCouponPrizeSelectBtn()
                await page.waitForTimeout(3000)

                await prizeDropPage.selectCouponPrizeSelect()

                await prizeDropPage.clickSaveBtn()
                await page.waitForTimeout(3000)


                // await prizeDropPage.clickDeleteBtn()


                // await prizeDropPage.clickConfirmDeleteBtn()


                await page.waitForTimeout(3000)

        })

})


test("007PD-008 | Validate Game Open Section Functionality", async ({ loginPage, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {

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

        await test.step("Validate Game Open Section Functionality", async () => {

                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                const newgame = await prizeDropPage.clickMobileLinkOpenBtn()
                await newgame.setViewportSize({width:360,height:740})
                await newgame.waitForTimeout(3000)

        })



                //click Prizing Section
                await prizeDropPage.clickStartGameOkBtn()

                const screenshot = await page.screenshot();
                await testInfo.attach("login screenshot", {
                        contentType: "image/png",
                        body: screenshot
                })




        let newTab=null;
        let newprizedropgame :prizeDropMobilePage
        await test.step("Validate Game Open Section Functionality", async () => {

                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()
                //now click on open button
                newTab = await prizeDropPage.clickMobileLinkOpenBtn()
                newprizedropgame = new prizeDropMobilePage(newTab)

        })
        await test.step("validate form fields are visible",async() =>{
                await newprizedropgame.lookforphonenoinform()
                await newprizedropgame.lookforBirthdateinform()
                await newprizedropgame.lookforEmailinform()
                await newprizedropgame.lookforZipinform()
                await newprizedropgame.lookforEmailinform()
        })

        await test.step("provide values in form field", async() =>{
                await newprizedropgame.typephoneno()
                await newprizedropgame.selectbirthdate()
                await newprizedropgame.typeAge()
                await newprizedropgame.typeemail()
                await newprizedropgame.typezip()
        })

})
test.skip("007PD-009 | Validate Game Link Successfully Copy in clipboard", async ({ prizeDropPage,  page }) => {

        await test.step("clickonHomepage", async() =>{
                await newprizedropgame.selecthomepage()
        })

        await test.step("click the start button to open", async() =>{
                await browser.contexts()[0].pages()[0].setViewportSize({width:720,height:1280})
                await browser.contexts()[0].pages()[0].bringToFront()
                await prizeDropPage.click_closebutton_in_mobilelinkmodal()
                await prizeDropPage.clickStartGameBtn()
                await prizeDropPage.clickStartGameOkBtn()
        })
        await test.step("now navigate to gamepage and validate start button", async() =>{
                await browser.contexts()[0].pages()[1].bringToFront()
                await newprizedropgame.selecthomepage()
                await newprizedropgame.start_button_visiblity()

        })
        
})

test("validate QR code section is working perfectly", async({loginPage,  prizeDropPage, page, browser }, testInfo) =>{
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
        await test.step("click on prize drop page", async () =>{
                await prizeDropPage.clickPrizeDropSection()
        })

        await test.step("click on QR code section", async () =>{
                await prizeDropPage.clickQRcodebutton()
        })

        await test.step("validate QR code text is visible",async () =>{
                await prizeDropPage.validateQRtext()
        })
        await test.step("validate Save QR code download is working",async () =>{
                await prizeDropPage.validateDownload()
        })

        await test.step("validate copy QR code section is working", async ()=>{
                await  prizeDropPage.clickQRcodecopybtn()
                const newtab = browser.contexts()[0].newPage();
                (await newtab).goto('https://qr-code-scanner.net/')
                await (await newtab).locator('//a[@title="Scan QR code from paste"]').click()
                await (await newtab).locator('//button[text()="Paste"]').click()
        })
})
test("007PD-009 | Validate Game Link Successfully Copy in system clipboard", async ({ prizeDropPage, page,browser}) => {

    
                await page.goto("/admin/#/sign-in");
                await page.fill("input[type='text']", "qa-1")
                await page.fill("input[type='password']", "mFkTylCDNC")

                await Promise.all([
                        page.waitForNavigation(),
                        page.click("button:has-text('Login')")
                ])


                await test.step('validate click on the copy link button is working',async()=>{
                        await prizeDropPage.clickPrizeDropSection()

                        //click Mobile Link Btn
                        await prizeDropPage.clickMobileLinkBtn()
        
                        //
                        await prizeDropPage.clickMobileLinkCopyBtn()
                })

                await test.step('now close the copy link modal', async() =>{
                        await prizeDropPage.click_closebutton_in_mobilelinkmodal()
                })
                let URL = '';

                await test.step("now copy the contents from system clipboard(URL Here)", async() =>{
                        URL = clipboard.readSync();
                })
                // await page.waitForTimeout(20000)

                 
                // console.log('From clipboard: ' + text);
                // await page.frameLocator('iframe').locator("//button[text()='Copy Link']").click({ force: true })

                ;
                
                await test.step('now open new page with copied URL',async()=>{
                        const newprizedropgame = new prizeDropMobilePage(page)

                
                        await newprizedropgame.GoTo(URL)   
                })
                // console.log('From clipboard URL: ' + url);
                // const newPage = await page.context().newPage();
                // await newPage.goto(url);
                // console.log("Title from new tab: " + await newPage.title());

})

test("007PD-010 | Validate User Additional Information Section ", async ({ prizeDropPage,MainMenu,functions, singupPage, page }) => {

    
        await page.goto("/admin/#/sign-in");
        await page.fill("input[type='text']", "qa-1")
        await page.fill("input[type='password']", "mFkTylCDNC")

        await Promise.all([
                page.waitForNavigation(),
                page.click("button:has-text('Login')")
        ])

        await MainMenu.clickHomeAvater();
        await MainMenu.mainMenuBtn();
        await MainMenu.clickMobileDesign();
        await singupPage.clickSignUpPage()
        //Verify Additional Information Title text is visible
        
        await functions.mobileSignUpAdditionalInformation()

})

test.skip("007PD-0011 | Validate Game Successfully open in mobile screen", async ({ loginPage, prizeDropPage }) => {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext({ ...devices["Pixel 5"], permissions: ["microphone","camera"] });
        const page = await context.newPage();

        await page.goto("/admin/#/sign-in");
        await page.fill("input[type='text']", "qa-1")
        await page.fill("input[type='password']", "mFkTylCDNC")
    
        await Promise.all([
            page.waitForNavigation(),
            page.click("button:has-text('Login')")
    ])


        await page.click("//p[text()='Prize Drop']")

        await page.frameLocator('iframe').locator('text=AutoStart >> button').nth(1).click();


//     await page.waitForTimeout(3000)
//         await prizeDropPage.clickPrizeDropSection()

        //click Mobile Link Btn
        // await prizeDropPage.clickMobileLinkBtn()

        const [page1] = await Promise.all([
                page.waitForEvent('popup'),
                page.frameLocator('iframe').locator('text=Open Link').click()
        ]);

        
        await page1.fill('[name="phone"]', "310-260-6620")

        await page1.fill('[name="email"]', "jon@email.com")
  
        await page1.fill('[name="age"]', "23")
  
        await page1.click('//input[@name="birthDate"]');
  
        await page1.waitForTimeout(5000)
  
        await page1.click("//button[text()='27']");
  
        await page1.click("//button[text()='OK']");
  
        await page1.fill('[name="zipCode"]', "1223")
  
        await page1.click("//button[text()='Submit']");
  
        await page1.waitForTimeout(2000)  



        await page1.click("//p[text()='USER PROFILE']");

        await page1.locator('//input[@type="text"]').fill("Auto Man");

        await page1.waitForTimeout(5000)


        await page1.click("//p[text()='RULES']");
        await page1.waitForTimeout(6000)


        await page1.click("//p[text()='HOW TO PLAY']");
        await page1.waitForTimeout(6000)



        await page1.click("//button[@value='prize']");

        await page1.waitForTimeout(5000)

        await page1.click("//p[text()='HOME']");
        await page1.waitForTimeout(2000)

        // await page1.frameLocator('iframe').locator("//button[text()='START']").click();

        // await page.locator("//button[text()='START']").click({force:true})



})

test("007PD-0012 | Validate Analytics Section Functionality", async ({ loginPage, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {

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

                await prizeDropPage.clickToStopLiveGame()

                //click Prizing Section
                await prizeDropPage.clickStopGameOkBtn()

                await prizeDropPage.clickPrizingSection()

                await page.waitForTimeout(3000)

                //click Prizing Section
                await prizeDropPage.clickAnalyticsSection()

                //click Prizing Section
                await prizeDropPage.verifySessionAnalyticsText()

                // const [download] = await Promise.all([
                //         page.waitForEvent('download'),
                //         page.frameLocator('iframe').locator('text=Export').click()
                // ]);

                // await prizeDropPage.downloadAnlytics()

                await page.waitForTimeout(6000)



        })

})
// test("007PD-012| validate mobile page is working ", async ({ loginPage, page,prizeDropPage }, testInfo) =>{
        
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
//         await test.step("click on mobile link page", async() =>{
//                 await prizeDropPage.clickMobileLinkBtn()
//                 const newgame = await prizeDropPage.clickMobileLinkOpenBtn()
//                 await newgame.setViewportSize({width:360,height:740})
//                 await newgame.waitForTimeout(3000)
//         })
// })

test("007PD-013 | Validate Game Edit And Delete Functionality", async ({ loginPage, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {

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

        await test.step("008TOFW-00 | Verify Game Delete Functionality", async () => {

                await prizeDropPage.clickEditSection()

                await prizeDropPage.inputEditGameTitle()

                await prizeDropPage.clickEditBtn()

                await prizeDropPage.clickStartGameOkBtn()


                //click Game Delete Btn
                await prizeDropPage.clickGameDeleteBtn()

                await page.waitForTimeout(2000)

                //confirm Delete Btn
                await prizeDropPage.confirmDeleteBtn()
                await page.waitForTimeout(4000)

        })

})
