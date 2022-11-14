import { BrowserContext, expect, Page, test } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import prizeDropPage from "@pages/prizeDrop.page";
import functions from "@testData/func";
import LoginPage from "@pages/Login.page";
import tugOfWarPage from "@pages/tugOfWar.page"





test.describe("TC002", () => {

        let login: LoginPage;
        let tugOfWar: tugOfWarPage;
        let prizeDrop: prizeDropPage;
        let helper: functions;
        let page: Page;
        let context: BrowserContext;
        test.beforeAll(async ({ browser }) => {
                context = await browser.newContext();
                await context.tracing.start({
                        screenshots: true,
                        snapshots: true
                })
                page = await context.newPage();
                login = new LoginPage(page);
                prizeDrop = new prizeDropPage(page);
                helper = new functions(page);


        })


        test.beforeEach(async () => {
                await page.goto('/admin/#/sign-in')
                // await login.login(data.username, data.password)
                // const title = await page.title();
                // expect(title).toBe('DXP Admin')

        })

        test.only("007PD-001 | Add New Configuration", async (testInfo) => {


               
                



                //click Prize Drop Section
                await prizeDrop.clickPrizeDropSection()


                await page.waitForTimeout(5000)

                //verify Configurations Text
                await prizeDrop.verifyConfigurationsText()

                //click Add New Config Plus Btn
                await prizeDrop.clickAddNewConfigPlusBtn()

                //input Configuration Name
                await prizeDrop.inputConfigurationName()

                await page.waitForTimeout(2000)


                //click Add Btn
                await prizeDrop.clickAddBtn()

                //click Game Design
                await prizeDrop.clickGameDesign()

                await page.waitForTimeout(4000)






        })

        test.only("007PD-002 | Validate Font Upload Functionality", async (testInfo) => {


                //click Prize Drop Section
                await prizeDrop.clickPrizeDropSection()
                //click Game Design
                await prizeDrop.clickGameDesign()

                await page.waitForTimeout(4000)

                //UploadFont
                await helper.fontUploadFunction()
                await prizeDrop.clickToUploadFont()


                //click Clear All Btn
                await prizeDrop.clickClearAllBtn()




                await page.waitForTimeout(4000)



        })


        // test("007PD-003 | Validate All The Color Input Functionality", async ( testInfo) => {

        //                 //click Prize Drop Section
        //                 await prizeDrop.clickPrizeDropSection()

        //                 //click Game Design
        //                 await prizeDrop.clickGameDesign()

        //                 //click Clear All Btn
        //                 await prizeDrop.clickClearAllBtn()


        //                 //verify Main Color Text
        //                 await prizeDrop.verifyMainColorText()


        //                 //click Main Color Picker
        //                 await prizeDrop.clickMainColorPicker()


        //                 //input Main RGR First Color
        //                 await prizeDrop.inputMainRGRFirstColor()


        //                 //input Main RGR Second Color
        //                 await prizeDrop.inputMainRGRSecondColor()


        //                 //input Main RGR Third Color
        //                 await prizeDrop.inputMainRGRThirdColor()


        //                 //input Main RGR Four Color
        //                 await prizeDrop.inputMainRGRFourColor()


        //                 //input Main RGR Five Color
        //                 await prizeDrop.inputMainRGRFiveColor()


        //                 //click Color Picker SaveBtn
        //                 await prizeDrop.clickColorPickerSaveBtn()


        //                 //verify Accent Color Text
        //                 await prizeDrop.verifyAccentColorText()


        //                 //click Accent Color Picker
        //                 await prizeDrop.clickAccentColorPicker()


        //                 //input Accent RGR First Color
        //                 await prizeDrop.inputAccentRGRFirstColor()


        //                 //input Accent RGR Second Color
        //                 await prizeDrop.inputAccentRGRSecondColor()


        //                 //input Accent RGR Third Color
        //                 await prizeDrop.inputAccentRGRThirdColor()


        //                 //input Accent RGR Four Color
        //                 await prizeDrop.inputAccentRGRFourColor()


        //                 //input Accent RGR Five Color
        //                 await prizeDrop.inputAccentRGRFiveColor()

        //                 //click Color Picker SaveBtn
        //                 await prizeDrop.clickColorPickerSaveBtn()






        //                 //verify Text Color Text
        //                 await prizeDrop.verifyTextColorText()


        //                 //click Text Color Picker
        //                 await prizeDrop.clickTextColorPicker()


        //                 //input Text RGR First Color
        //                 await prizeDrop.inputTextRGRFirstColor()


        //                 //input Text RGR Second Color
        //                 await prizeDrop.inputTextRGRSecondColor()


        //                 //input Text RGR Third Color
        //                 await prizeDrop.inputTextRGRThirdColor()


        //                 //input Text RGR Four Color
        //                 await prizeDrop.inputTextRGRFourColor()


        //                 //input Text RGR Five Color
        //                 await prizeDrop.inputTextRGRFiveColor()



        //                 //click Color Picker SaveBtn
        //                 await prizeDrop.clickColorPickerSaveBtn()






        //                 //click Game Design
        //                 await prizeDrop.verifyButtonColorText()


        //                 //click Game Design
        //                 await prizeDrop.clickButtonColorPicker()


        //                 //input Button RGR First Color
        //                 await prizeDrop.inputButtonRGRFirstColor()



        //                 //input Button RGR Second Color
        //                 await prizeDrop.inputButtonRGRSecondColor()

        //                 //input Button RGR Third Color
        //                 await prizeDrop.inputButtonRGRThirdColor()



        //                 //input Button RGR Four Color
        //                 await prizeDrop.inputButtonRGRFourColor()



        //                 //input Button RGR Five Color
        //                 await prizeDrop.inputButtonRGRFiveColor()

        //                 //click Color Picker SaveBtn
        //                 await prizeDrop.clickColorPickerSaveBtn()



        //                 await page.waitForTimeout(4000)



        // })

        // test("007PD-004 | Validate Upload Game Design Image Functionality", async ( testInfo) => {


        //                 //click Prize Drop Section
        //                 await prizeDrop.clickPrizeDropSection()

        //                 //click Game Design
        //                 await prizeDrop.clickGameDesign()
        //                 // await page.waitForTimeout(4000)

        //                 //verify Game Title Image Title Text
        //                 await prizeDrop.verifyGameTitleImageTitleText()

        //                 //verify Full Screen Logo Text
        //                 await prizeDrop.verifyFullScreenLogoText()

        //                 // //click To Upload Full Screen Logo
        //                 await functions.logoImageUploadFunction()
        //                 await prizeDrop.clickToUploadRulesImage()

        //                 await prizeDrop.clickToUploadSplashScreenImage()

        //                 await prizeDrop.clickToUploadHowtoPlayImage()

        //                 await prizeDrop.clickToUploadGameBackgroundImage()

        //                 await prizeDrop.clickToUploadSponsorTeamLogo()
        //                 await prizeDrop.clickToUploadSponsorLogo()

        //                 await prizeDrop.clickToUploadSponsorImage()
        //                 await prizeDrop.clickToUploadNoPrizeWonImage()


        //                 await prizeDrop.clickToUploadParachutePrizeImage()
        //                 await prizeDrop.clickToUploadFrameImage()
        //                 await prizeDrop.clickToUploadGameTitleImage()


        //                 await prizeDrop.clickToUploadFullScreenLogo()

        //                 await page.waitForTimeout(4000)



        //                 //click ToUp load Game Title Image
        //                 await functions.logoImageUploadFunction()

        //                 // await page.waitForTimeout(4000)

        //                 //click To Upload Frame ImageImage
        //                 await functions.logoImageUploadFunction()

        //                 // await page.waitForTimeout(4000)

        //                 //click To Upload Parachute Prize Image
        //                 await functions.logoImageUploadFunction()

        //                 // await page.waitForTimeout(4000)

        //                 //click To Upload NoPrizeWon Image
        //                 await functions.logoImageUploadFunction()

        //                 // await page.waitForTimeout(4000)






        // })


        // test("007PD-005 | Validate Game Setting Functionality", async ( testInfo) => {


        //                 //click Prize Drop Section
        //                 await prizeDrop.clickPrizeDropSection()


        //                 //click Game Settings
        //                 await prizeDrop.clickGameSettings()


        //                 //input Total Rewards
        //                 await prizeDrop.inputTotalRewards()
        //                 //input Total Rewards PerDay
        //                 await prizeDrop.inputTotalRewardsPerDay()
        //                 //input Duration Time Hour
        //                 await prizeDrop.inputDurationTimeHour()
        //                 //input Duration Time Minutes
        //                 await prizeDrop.inputDurationTimeMinutes()
        //                 //input Duration Time Second
        //                 await prizeDrop.inputDurationTimeSecond()
        //                 //input Stand By Message
        //                 await prizeDrop.inputStandByMessage()
        //                 //input Ending Game Massage
        //                 await prizeDrop.inputEndingGameMassage()

        //                 //input Selection Message
        //                 await prizeDrop.inputSelectionMessage()

        //                 //click Entry Screen
        //                 await prizeDrop.clickEntryScreen()


        //                 //click Entry Screen
        //                 await prizeDrop.selectHowToScreen()



        // })

        // test("007PD-006 | Validate Add Banner Functionality", async ( testInfo) => {





        //                 //click Prize Drop Section
        //                 await prizeDrop.clickPrizeDropSection()

        //                 await page.waitForTimeout(3000)
        //                 //click Add Banner Section
        //                 await prizeDrop.clickAddBannerSection()


        //                 //verify Marketing Massage Text
        //                 await prizeDrop.verifyMarketingMassageText()
        //                 //verify DragYour Image Text
        //                 await prizeDrop.verifyDragYourImageText()
        //                 //click To UploadBanner
        //                 await functions.bannerImageUploadFunction()
        //                 await prizeDrop.clickToUploadBanner()

        //                 await page.waitForTimeout(3000)


        // })
        // test("007PD-007 | Validate Prizing Section Functionality", async ( testInfo) => {



        //                 //click Prize Drop Section
        //                 await prizeDrop.clickPrizeDropSection()

        //                 await page.waitForTimeout(3000)
        //                 //click Prizing Section
        //                 await prizeDrop.clickPrizingSection()


        //                 //verify Prizing List Text
        //                 await prizeDrop.verifyPrizingListText()
        //                 //click Add New Prize Btn
        //                 await prizeDrop.clickAddNewPrizeBtn()
        //                 //click To UploadBanner

        //                 await prizeDrop.inputCouponName()

        //                 await prizeDrop.inputAmountOfAwarding()

        //                 await prizeDrop.inputPercentageAwarded()

        //                 await prizeDrop.clickCouponPrizeSelectBtn()
        //                 await page.waitForTimeout(3000)

        //                 await prizeDrop.selectCouponPrizeSelect()

        //                 await prizeDrop.clickSaveBtn()
        //                 await page.waitForTimeout(3000)


        //                 // await prizeDrop.clickDeleteBtn()


        //                 // await prizeDrop.clickConfirmDeleteBtn()


        //                 await page.waitForTimeout(3000)



        // })


        // test("007PD-008 | Validate Game Open Section Functionality", async ( testInfo) => {




        //                 //click Prize Drop Section
        //                 await prizeDrop.clickPrizeDropSection()

        //                 await page.waitForTimeout(3000)
        //                 //click Prizing Section
        //                 await prizeDrop.clickPrizingSection()

        //                 await page.waitForTimeout(6000)
        //                 //click Prizing Section
        //                 await prizeDrop.clickStartGameBtn()

        //                 //click Prizing Section
        //                 await prizeDrop.clickStartGameOkBtn()


        //                 //click Mobile Link Btn
        //                 await prizeDrop.clickMobileLinkBtn()

        //                 //click Mobile Link Btn
        //                 await prizeDrop.clickMobileLinkOpenBtn()


        // })

        // test("007PD-009 | Validate Analytics Section Functionality", async ( testInfo) => {



        //                 //click Prize Drop Section
        //                 await prizeDrop.clickPrizeDropSection()

        //                 await page.waitForTimeout(3000)
        //                 //click Prizing Section
        //                 await prizeDrop.clickAnalyticsSection()

        //                 await prizeDrop.clickToStopLiveGame()

        //                 //click Prizing Section
        //                 await prizeDrop.clickStopGameOkBtn()

        //                 await prizeDrop.clickPrizingSection()

        //                 await page.waitForTimeout(3000)

        //                 //click Prizing Section
        //                 await prizeDrop.clickAnalyticsSection()

        //                 //click Prizing Section
        //                 await prizeDrop.verifySessionAnalyticsText()

        //                 // const [download] = await Promise.all([
        //                 //         page.waitForEvent('download'),
        //                 //         page.frameLocator('iframe').locator('text=Export').click()
        //                 // ]);

        //                 await prizeDrop.downloadAnlytics()

        //                 await page.waitForTimeout(6000)




        // })
        // test("007PD-00 | Validate Game Delete Functionality", async ( testInfo) => {


        //                 //click Game Delete Btn
        //                 await prizeDrop.clickGameDeleteBtn()

        //                 await page.waitForTimeout(1000)

        //                 //confirm Delete Btn
        //                 await prizeDrop.confirmDeleteBtn()
        //                 await page.waitForTimeout(4000)


        // })

})