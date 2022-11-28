import test, { expect } from "@fixtures/basePages";
import { devices, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
// import clipboard from 'clipboardy';
const clipboard = require("clipboardy");
var url: any;

var text: string;





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

        await test.step("008TOFW-001 | Add New Configuration", async () => {


                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                const screenshot = await page.screenshot();
                await testInfo.attach("click Prize Drop Section", {
                        contentType: "image/png",
                        body: screenshot
                })

                await page.waitForTimeout(5000)

                await prizeDropPage.verifyDeleteAutoConfigurationIfHave()

                await page.waitForTimeout(2000)

                //verify Configurations Text
                await prizeDropPage.verifyConfigurationsText()

                //click Add New Config Plus Btn
                await prizeDropPage.clickAddNewConfigPlusBtn()

                //input Configuration Name
                await prizeDropPage.inputConfigurationName()

                await page.waitForTimeout(2000)


                //click Add Btn
                await prizeDropPage.clickAddBtn()

                //click Game Design
                await prizeDropPage.clickGameDesign()

                await page.waitForTimeout(4000)

        })

        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {


        //         //click Game Design
        //         await prizeDropPage.clickGameDesign()

        //         await page.waitForTimeout(4000)

        //         //UploadFont
        //         await functions.fontUploadFunction()
        //         await prizeDropPage.clickToUploadFont()


        //         //click Clear All Btn
        //         await prizeDropPage.clickClearAllBtn()




        //         await page.waitForTimeout(4000)

        // })

        // await test.step("008TOFW-003 | Validate All The Color Input Functionality", async () => {



        //         //click Clear All Btn
        //         await prizeDropPage.clickClearAllBtn()


        //         //verify Main Color Text
        //         await prizeDropPage.verifyMainColorText()


        //         //click Main Color Picker
        //         await prizeDropPage.clickMainColorPicker()


        //         //input Main RGR First Color
        //         await prizeDropPage.inputMainRGRFirstColor()


        //         //input Main RGR Second Color
        //         await prizeDropPage.inputMainRGRSecondColor()


        //         //input Main RGR Third Color
        //         await prizeDropPage.inputMainRGRThirdColor()


        //         //input Main RGR Four Color
        //         await prizeDropPage.inputMainRGRFourColor()


        //         //input Main RGR Five Color
        //         await prizeDropPage.inputMainRGRFiveColor()


        //         //click Color Picker SaveBtn
        //         await prizeDropPage.clickColorPickerSaveBtn()


        //         //verify Accent Color Text
        //         await prizeDropPage.verifyAccentColorText()


        //         //click Accent Color Picker
        //         await prizeDropPage.clickAccentColorPicker()


        //         //input Accent RGR First Color
        //         await prizeDropPage.inputAccentRGRFirstColor()


        //         //input Accent RGR Second Color
        //         await prizeDropPage.inputAccentRGRSecondColor()


        //         //input Accent RGR Third Color
        //         await prizeDropPage.inputAccentRGRThirdColor()


        //         //input Accent RGR Four Color
        //         await prizeDropPage.inputAccentRGRFourColor()


        //         //input Accent RGR Five Color
        //         await prizeDropPage.inputAccentRGRFiveColor()

        //         //click Color Picker SaveBtn
        //         await prizeDropPage.clickColorPickerSaveBtn()






        //         //verify Text Color Text
        //         await prizeDropPage.verifyTextColorText()


        //         //click Text Color Picker
        //         await prizeDropPage.clickTextColorPicker()


        //         //input Text RGR First Color
        //         await prizeDropPage.inputTextRGRFirstColor()


        //         //input Text RGR Second Color
        //         await prizeDropPage.inputTextRGRSecondColor()


        //         //input Text RGR Third Color
        //         await prizeDropPage.inputTextRGRThirdColor()


        //         //input Text RGR Four Color
        //         await prizeDropPage.inputTextRGRFourColor()


        //         //input Text RGR Five Color
        //         await prizeDropPage.inputTextRGRFiveColor()



        //         //click Color Picker SaveBtn
        //         await prizeDropPage.clickColorPickerSaveBtn()






        //         //click Game Design
        //         await prizeDropPage.verifyButtonColorText()


        //         //click Game Design
        //         await prizeDropPage.clickButtonColorPicker()


        //         //input Button RGR First Color
        //         await prizeDropPage.inputButtonRGRFirstColor()



        //         //input Button RGR Second Color
        //         await prizeDropPage.inputButtonRGRSecondColor()

        //         //input Button RGR Third Color
        //         await prizeDropPage.inputButtonRGRThirdColor()



        //         //input Button RGR Four Color
        //         await prizeDropPage.inputButtonRGRFourColor()



        //         //input Button RGR Five Color
        //         await prizeDropPage.inputButtonRGRFiveColor()

        //         //click Color Picker SaveBtn
        //         await prizeDropPage.clickColorPickerSaveBtn()



        //         await page.waitForTimeout(4000)

        // })

        // await test.step("008TOFW-004 | Validate Upload Game Design Image Functionality", async () => {

        //         await page.waitForTimeout(4000)

        //         //verify Full Screen Logo Text
        //         await prizeDropPage.verifyFullScreenLogoText()

        //         // const filePath0 = "testData/logos/Logo.jpg"
        //         // page.on("filechooser", async (filechooser) => {
        //         //         await filechooser.setFiles([filePath0]);
        //         // })
        //         // await page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-vjb914']//div)[2]").click()

        //         // //click To Upload Full Screen Logo
        //         // // await functions.logoImageUploadFunction()
        //         await prizeDropPage.clickToUploadFullScreenLogo()

        //         await page.waitForTimeout(4000)

        //         //verify Game Title Image Title Text
        //         await prizeDropPage.verifyGameTitleImageTitleText()

        //         //click ToUp load Game Title Image
        //         await functions.logoImageUploadFunction()
        //         await prizeDropPage.clickToUploadGameTitleImage()

        //         await page.waitForTimeout(4000)

        //         //click To Upload Frame ImageImage
        //         await functions.logoImageUploadFunction()
        //         await prizeDropPage.clickToUploadFrameImage()

        //         await page.waitForTimeout(4000)

        //         //click To Upload Parachute Prize Image
        //         await functions.logoImageUploadFunction()
        //         await prizeDropPage.clickToUploadParachutePrizeImage()

        //         await page.waitForTimeout(4000)

        //         //click To Upload NoPrizeWon Image
        //         await functions.logoImageUploadFunction()
        //         await prizeDropPage.clickToUploadNoPrizeWonImage()

        //         await page.waitForTimeout(4000)

        // })

        // await test.step("008TOFW-005 | Validate Upload Sponsor Image Functionality", async () => {


        //         //click To Upload Sponsor Image
        //         await prizeDropPage.clickToUploadSponsorImage()

        //         // const filePath0 = "testData/logos/Logo.jpg"
        //         // page.on("filechooser", async (filechooser) => {
        //         //         await filechooser.setFiles([filePath0]);
        //         // })
        //         // await page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-vjb914']//div)[2]").click()

        //         // //click To Upload Sponsor Logo
        //         await functions.logoImageUploadFunction()
        //         await prizeDropPage.clickToUploadSponsorLogo()

        //         await page.waitForTimeout(4000)

        //         //click To Upload Sponsor Team Logo
        //         await functions.logoImageUploadFunction()
        //         await prizeDropPage.clickToUploadSponsorTeamLogo()

        //         //click To Upload Game Background Image
        //         await functions.logoImageUploadFunction()
        //         await prizeDropPage.clickToUploadGameBackgroundImage()

        //         await page.waitForTimeout(4000)

        //         //click To Upload How toPlayImage
        //         await functions.logoImageUploadFunction()
        //         await prizeDropPage.clickToUploadHowtoPlayImage()

        //         await page.waitForTimeout(4000)

        //         //click To Upload Splash Screen Image
        //         await functions.logoImageUploadFunction()
        //         await prizeDropPage.clickToUploadSplashScreenImage()

        //         await page.waitForTimeout(4000)

        //         //click To Upload Rules Image
        //         await functions.logoImageUploadFunction()
        //         await prizeDropPage.clickToUploadRulesImage()

        //         await page.waitForTimeout(4000)

        // })

        // await test.step("008TOFW-006 | Validate Game Setting Functionality", async () => {


        //         //click Game Settings
        //         await prizeDropPage.clickGameSettings()


        //         //input Total Rewards
        //         await prizeDropPage.inputTotalRewards()
        //         //input Total Rewards PerDay
        //         await prizeDropPage.inputTotalRewardsPerDay()
        //         //input Duration Time Hour
        //         await prizeDropPage.inputDurationTimeHour()
        //         //input Duration Time Minutes
        //         await prizeDropPage.inputDurationTimeMinutes()
        //         //input Duration Time Second
        //         await prizeDropPage.inputDurationTimeSecond()
        //         //input Stand By Message
        //         await prizeDropPage.inputStandByMessage()
        //         //input Ending Game Massage
        //         await prizeDropPage.inputEndingGameMassage()

        //         //input Selection Message
        //         await prizeDropPage.inputSelectionMessage()

        //         //click Entry Screen
        //         await prizeDropPage.clickEntryScreen()


        //         //click Entry Screen
        //         await prizeDropPage.selectHowToScreen()

        // })


        // await test.step("008TOFW-00 | Verify Game Delete Functionality", async () => {


        //         //click Game Delete Btn
        //         await prizeDropPage.clickGameDeleteBtn()

        //         await page.waitForTimeout(1000)

        //         //confirm Delete Btn
        //         await prizeDropPage.confirmDeleteBtn()
        //         await page.waitForTimeout(4000)

        // })

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

                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()

                await page.waitForTimeout(3000)
                //click Prizing Section
                await prizeDropPage.clickPrizingSection()

                await page.waitForTimeout(6000)
                //click Prizing Section
                await prizeDropPage.clickStartGameBtn()

                //click Prizing Section
                await prizeDropPage.clickStartGameOkBtn()


                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()

                //click Mobile Link Btn
                // await prizeDropPage.clickMobileLinkOpenBtn()

        })

})
test("007PD-009 | Validate Game Link Successfully Copy in clipboard", async ({ prizeDropPage, page }) => {

    
                await page.goto("/admin/#/sign-in");
                await page.fill("input[type='text']", "qa-1")
                await page.fill("input[type='password']", "mFkTylCDNC")

                await Promise.all([
                        page.waitForNavigation(),
                        page.click("button:has-text('Login')")
                ])

                await prizeDropPage.clickPrizeDropSection()

                //click Mobile Link Btn
                await prizeDropPage.clickMobileLinkBtn()



                // let text = await clipboard.read();
                // console.log('From clipboard: ' + text);
                await page.frameLocator('iframe').locator("//button[text()='Copy Link']").click({ force: true })

                // url = await clipboard.read();
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