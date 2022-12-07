import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'






test("008TOFW-001 | Add New Configuration", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')


        //click Tug Of War Page
        await tugOfWarPage.clickTugOfWarPage()


        await page.waitForTimeout(2000)



        //click AddNew Config Plus Btn 
        await tugOfWarPage.clickAddNewConfigPlusBtn()

        await page.waitForTimeout(3000)


        //verify AddNew ConfigPlus Window Text
        await tugOfWarPage.verifyAddNewConfigPlusWindowText()


        //input Configuration Name
        await tugOfWarPage.inputConfigurationName(functions.getRandomName())

        //click Add Btn
        await tugOfWarPage.clickAddBtn()

        await page.waitForTimeout(3000)


        await tugOfWarPage.clickStagesBtn()

        await page.waitForTimeout(3000)










})

test("008TOFW-002 | Varify Title Stage Section", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })


        //click Tug Of War Page
        await tugOfWarPage.clickTugOfWarPage()
        await page.waitForTimeout(3000)


        await tugOfWarPage.clickStagesBtn()

        // //click Tug Of War Page
        // await tugOfWarPage.clickTugOfWarPage()
        // const screenshot = await page.screenshot();
        // await testInfo.attach("click Tug Of War Page", {
        //         contentType: "image/png",
        //         body: screenshot
        // })
        // await page.waitForTimeout(6000)
        //click Title Stage Tab
        await tugOfWarPage.clickTitleStageTab()
        //verify Enable Stage Text
        // await tugOfWarPage.verifyEnableStageText()
        //enable Stage
        await tugOfWarPage.enableStage()
        //click Image Radio Btn
        await tugOfWarPage.clickImageRadioBtn()

        //deleted Uploaded Title ImageBG
        await tugOfWarPage.deletedUploadedTitleImageBG()
        await page.waitForTimeout(3000)
        //delete Uploaded Game Title Image BG
        await tugOfWarPage.deleteUploadedGameTitleImageBG()
        await page.waitForTimeout(3000)


        //delete Uploaded Team Logo
        await tugOfWarPage.deleteUploadedTeamLogo()
        await page.waitForTimeout(3000)


        //delete Uploaded Sponsor Logo
        await tugOfWarPage.deleteUploadedSponsorLogo()
        await page.waitForTimeout(3000)

        // await tugOfWarPage.clickVideoUploadCheckbox()
        //upload Sponsor Logo
        // await tugOfWarPage.uploadSponsorLogo()

        await tugOfWarPage.clickSponsorLogoUploadIcon()
        await functions.bannerImageUploadFunction()
        await functions.fileUploadCropper()

        //upload Team Logo
        await tugOfWarPage.clickTeamLogoUploadIcon()
        await functions.fileUploadCropper()

        // await page.waitForTimeout(3000)

        //upload Game Title Image
        await tugOfWarPage.clickGameTitleUploadIcon()
        await functions.fileUploadCropper()

        // await page.waitForTimeout(3000)

        // //upload Title Background
        // await tugOfWarPage.uploadTitleBackgroundImage()
        // await page.waitForTimeout(6000)






        await tugOfWarPage.clickTitleBackgroundUploadIcon()
        await functions.fileUploadCropper()

        // await page.waitForTimeout(3000)








        // await page.waitForTimeout(3000)

        //enable Custom Selection Massage
        await tugOfWarPage.enableCustomSelectionMassage()

        await page.waitForTimeout(3000)


        //input Custom Selection Massage
        await tugOfWarPage.inputCustomSelectionMassage()

        await page.waitForTimeout(3000)









})

test("008TOFW-003 | Varify Selection Stage Section", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })




        //click Tug Of War Page
        await tugOfWarPage.clickTugOfWarPage()
        await page.waitForTimeout(3000)


        await tugOfWarPage.clickStagesBtn()
        //click Selection StagePage
        await tugOfWarPage.clickSelectionStagePage()

        //click Selection Image Text
        await tugOfWarPage.clickSelectionImageText()


        //delete Uploaded Selaction BG
        await tugOfWarPage.deleteUploadedSelactionBG()

        await functions.bannerImageUploadFunction()
        //upload Selaction BG
        await tugOfWarPage.uploadSelactionBG()
        await functions.fileUploadCropper()

        // //upload Selaction Stage Team Logo
        // await tugOfWarPage.uploadSelactionStageTeamLogo()
        //Issue01- team logo does not uploaded properly

        await tugOfWarPage.enableAdjustableSelection()

        await page.waitForTimeout(2000)

        //input Selection Timer
        await tugOfWarPage.inputSelectionTimer()

        await tugOfWarPage.enableAllowSelectionChange()


        //input Number Of Teams
        await tugOfWarPage.inputNumberOfTeams()

        await tugOfWarPage.clickFirstTeamLogoUploadIcon()
        await functions.fileUploadCropper()

        //input Selection Stage Team Name
        await tugOfWarPage.inputSelectionStageTeamName()

        // await tugOfWarPage.clickSecondTeamLogoUploadIcon()
        // await functions.fileUploadCropper()

        //input Selection Stage Team Name
        await tugOfWarPage.inputSelectionStageSecondTeamName()


        // //click Allow Selection Change Check box
        // await tugOfWarPage.clickAllowSelectionChangeCheckbox()



        // //click Custom Selection Massage Check Box
        // await tugOfWarPage.clickCustomSelectionMassageCheckBox()
        // await page.waitForTimeout(2000)


        //input Custom Selection Massge Text
        await tugOfWarPage.inputCustomSelectionMassgeText()


        // //click Custom Team Selection Massage Check Box
        // await tugOfWarPage.clickCustomTeamSelectionMassageCheckBox()
        // await page.waitForTimeout(2000)


        //input Custome Team Section Massage
        await tugOfWarPage.inputCustomeTeamSectionMassage()


        //click TeamName Box Color Input
        await tugOfWarPage.clickTeamNameBoxColorInput()

        await page.waitForTimeout(3000)

        //input TeamName Box Color RGB First
        await tugOfWarPage.inputTeamNameBoxColorRGBFirst()


        //input Team Name Box Color RGB Third
        await tugOfWarPage.inputTeamNameBoxColorRGBThird()


        //input TeamName BoxColor Opacity
        await tugOfWarPage.inputTeamNameBoxColorOpacity()


        //input TeamName BoxColor HEXColor
        await tugOfWarPage.inputTeamNameBoxColorHEXColor()


        //click Save Btn
        await tugOfWarPage.clickSaveBtn()


        //click Team Selected Massage Box Color Input
        await tugOfWarPage.clickTeamSelectedMassageBoxColorInput()


        //input Team Selected Massage Box Color RGBF irst
        await tugOfWarPage.inputTeamSelectedMassageBoxColorRGBFirst()

        //input Team Selected Massage Box Color RGB Second
        await tugOfWarPage.inputTeamSelectedMassageBoxColorRGBSecond()

        //input Team Selected Massage Box Color RGB Third
        await tugOfWarPage.inputTeamSelectedMassageBoxColorRGBThird()

        //input Team Selected Massage Box Color Opacity
        await tugOfWarPage.inputTeamSelectedMassageBoxColorOpacity()

        //input Team Selected Massage Box Color HEX Color
        await tugOfWarPage.inputTeamSelectedMassageBoxColorHEXColor()

        //click Save Btn
        await tugOfWarPage.clickSaveBtn()



        // await page.waitForTimeout(6000)











})

test("008TOFW-004 | Varify Countdown Stage Section", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })


        //click Tug Of War Page
        await tugOfWarPage.clickTugOfWarPage()

        await page.waitForTimeout(3000)



        await tugOfWarPage.clickStagesBtn()
        //click Countdown StagePage
        await tugOfWarPage.clickCountdownStagePage()

        await page.waitForTimeout(3000)


        //enable CountDown Stage Skip And Jump
        await tugOfWarPage.enableCountDownStageSkipAndJump()


        //click Countdown Image Text
        await tugOfWarPage.clickCountdownImageText()

        //delete Uploaded CountdownBG
        await tugOfWarPage.deleteUploadedCountdownBG()


        //upload Countdown BG
        await functions.bannerImageUploadFunction()
        await tugOfWarPage.uploadCountdownBG()
        await functions.fileUploadCropper()



        //click Custom Countdown Message Checkbox
        await tugOfWarPage.clickCustomCountdownMessageCheckbox()

        //input Custom CountDown Massage
        await tugOfWarPage.inputCustomCountDownMassage()

        //input Adjustable Countdown Length Timer
        await tugOfWarPage.inputAdjustableCountdownLengthTimer()



        await page.waitForTimeout(5000)








})

test("008TOFW-005 | Varify Gameplay Stage Section", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })


        //click Tug Of War Page
        await tugOfWarPage.clickTugOfWarPage()

        await page.waitForTimeout(3000)

        await tugOfWarPage.clickStagesBtn()
        //click Gameplay StagePage
        await tugOfWarPage.clickGameplayStagePage()

        await page.waitForTimeout(3000)


        //click Gameplay Image Text
        await tugOfWarPage.clickGameplayImageText()


        //delete Uploaded Gameplay BG
        await tugOfWarPage.deleteUploadedGameplayBG()

        //upload Gameplay BG
        await functions.bannerImageUploadFunction()
        await tugOfWarPage.uploadGameplayBG()
        await functions.fileUploadCropper()

        //enable Mainboard Message Checkbox
        await tugOfWarPage.enableMainboardMessageCheckbox()

        //enable Mobile Message Checkbox
        await tugOfWarPage.enableMobileMessageCheckbox()

        await page.waitForTimeout(3000)

        //input Mainboard Massage
        await tugOfWarPage.inputMainboardMassage()

        //input Mobile Massage
        await tugOfWarPage.inputMobileMassage()


        //enable Display Power Meter
        await tugOfWarPage.enableDisplayPowerMeter()

        //verify Power Methods Text
        await tugOfWarPage.verifyPowerMethodsText()

        //click Tap To Power Checkbox
        await tugOfWarPage.clickTapToPowerCheckbox()

        //click Shout To Power Check box
        await tugOfWarPage.clickShoutToPowerCheckbox()


        //click Shake To Power Checkbox
        await tugOfWarPage.clickShakeToPowerCheckbox()

        //click Swipe To Power Checkbox
        await tugOfWarPage.clickSwipeToPowerCheckbox()

        //enable Custom Power Message Checkbox
        await tugOfWarPage.enableCustomPowerMessageCheckbox()

        //input Custom Power Massage
        await tugOfWarPage.inputCustomPowerMassage()



        await page.waitForTimeout(6000)









})

test("008TOFW-006 | Varify Endgame Stage Section", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })


        //click Tug Of War Page
        await tugOfWarPage.clickTugOfWarPage()

        await page.waitForTimeout(3000)

        await tugOfWarPage.clickStagesBtn()

        //click Endgame StagePage
        await tugOfWarPage.clickEndgameStagePage()

        await page.waitForTimeout(3000)


        //click Endgame Image Text
        await tugOfWarPage.clickEndgameImageText()


        //delete Uploaded Endgame BG
        await tugOfWarPage.deleteUploadedEndgameBG()

        //upload Endgame BG
        await functions.bannerImageUploadFunction()
        await tugOfWarPage.uploadEndgameBG()
        await functions.fileUploadCropper()


        //input Custom Endgamer Massage
        await tugOfWarPage.inputCustomEndgamerMassage()

        //input Custom Winner Title
        await tugOfWarPage.inputCustomWinnerTitle()

        //input Winner Add URL
        await tugOfWarPage.inputWinnerAddURL()

        await page.waitForTimeout(3000)


        //input Custom Consolation Massage
        await tugOfWarPage.inputCustomConsolationMassage()



        //input Consolation AddURL
        await tugOfWarPage.inputConsolationAddURL()

        await page.waitForTimeout(3000)

        //enable Endgame AdsBtn
        await tugOfWarPage.enableEndgameAdsBtn()

        //input Endgame Timer
        await tugOfWarPage.inputEndgameTimer()



        await page.waitForTimeout(2000)









})

test("008TOFW-007 | Varify Leaderboard Section", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })


        //click Tug Of War Page
        await tugOfWarPage.clickTugOfWarPage()
        await page.waitForTimeout(3000)

        await tugOfWarPage.clickStagesBtn()


        //click Leaderboard Leaderboard Head
        await tugOfWarPage.clickLeaderboardPage()

        await page.waitForTimeout(3000)


        //enable Stage For Leaderboard
        await tugOfWarPage.enableStageForLeaderboard()


        //click Leaderboard Image Text
        await tugOfWarPage.clickLeaderboardImageText()

        //delete Leaderboard Header Uploaded Image
        // await tugOfWarPage.deleteLeaderboardHeaderUploadedImage()

        //upload Leaderboard Header Image
        await functions.bannerImageUploadFunction()

        await tugOfWarPage.uploadLeaderboardHeaderImage()
        await tugOfWarPage.fileUploadCropper()


        //delete Uploaded Leaderboard BG
        // await tugOfWarPage.deleteUploadedLeaderboardBG()


        //upload Leaderboard BG
        await functions.bannerImageUploadFunction()
        await tugOfWarPage.uploadLeaderboardBG()
        await tugOfWarPage.fileUploadCropper()


        await page.waitForTimeout(3000)




        await page.waitForTimeout(3000)


        //input Leaderboard Timer
        await tugOfWarPage.inputLeaderboardTimer()




        await page.waitForTimeout(6000)










})

test("008TOFW-008 | Varify Thank You Section", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })




        //click Tug Of War Page
        await tugOfWarPage.clickTugOfWarPage()
        await page.waitForTimeout(3000)

        await tugOfWarPage.clickStagesBtn()
        //click ThankYou Stage 
        await tugOfWarPage.clickThankYouStage()

        await page.waitForTimeout(3000)


        //enable Stage For ThankYou
        await tugOfWarPage.enableStageForThankyouStage()


        //click ThankYou Image Text
        await tugOfWarPage.clickThankYouImagesText()

        //click Custom Thank You Massage CheckBox
        await tugOfWarPage.clickCustomThankYouMassageCheckBox()

        //delete Uploaded ThankYou BG
        await tugOfWarPage.deleteUploadedThankYouImagesBG()


        //upload ThankYou BG
        await functions.bannerImageUploadFunction()
        await tugOfWarPage.uploadThankYouStageImagesBG()
        await functions.fileUploadCropper()

        //input Url Redirect Massage
        await tugOfWarPage.inputUrlRedirectMassage()

        // await tugOfWarPage.clickInputAutoResetTimer()

        // //input AutoReset Timer
        // await tugOfWarPage.inputAutoResetTimer()





        //input Custom Thank You Massage CheckBox
        await tugOfWarPage.inputCustomThankYouMassageCheckBox()

        await page.waitForTimeout(2000)









})

test("008TOFW-009 | Verify Game Design", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {



        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        //click Tug Of War Page
        await tugOfWarPage.clickTugOfWarPage()
        await page.waitForTimeout(3000)

        await tugOfWarPage.clickGameSettingsBtn()

        await page.waitForTimeout(3000)

        await functions.fontUploadFunction()
        await page.waitForTimeout(1000)

        await tugOfWarPage.clickUploadFontBtn()

        await page.waitForTimeout(3000)




        //click Primary Color Picker Btn
        await tugOfWarPage.clickPrimaryColorPickerBtn()

        //input Primary RGB First Color
        await tugOfWarPage.inputPrimaryRGBFirstColor()

        //input Primary RGB Second Color
        await tugOfWarPage.inputPrimaryRGBSecondColor()

        //input Primary RGB Third Color
        await tugOfWarPage.inputPrimaryRGBThirdColor()

        //input Primary Color Opacity
        await tugOfWarPage.inputPrimaryColorOpacity()

        //input Primary Color HEX
        await tugOfWarPage.inputPrimaryColorHEX()

        //clic Save Btn
        await tugOfWarPage.clicSaveBtn()

        //click Secondary Color Picker Btn
        await tugOfWarPage.clickSecondaryColorPickerBtn()

        await page.waitForTimeout(3000)


        //input Secondary RGB First Color
        await tugOfWarPage.inputSecondaryRGBFirstColor()

        //input Secondary RGB Second Color
        await tugOfWarPage.inputSecondaryRGBSecondColor()

        //input Secondary RGB Third Color
        await tugOfWarPage.inputSecondaryRGBThirdColor()

        //input Secondary Color Opacity
        await tugOfWarPage.inputSecondaryColorOpacity()

        //input Secondary Color HEX
        await tugOfWarPage.inputSecondaryColorHEX()
        //clic Save Btn
        await tugOfWarPage.clicSaveBtn()

        //click Text Color Picker Btn
        await tugOfWarPage.clickTextColorPickerBtn()

        await page.waitForTimeout(3000)


        //input Text RGB First Color
        await tugOfWarPage.inputTextRGBFirstColor()


        //input Text RGB SecondColor
        await tugOfWarPage.inputTextRGBSecondColor()


        //input Text RGB Third Color
        await tugOfWarPage.inputTextRGBThirdColor()


        //input Text Color Opacity
        await tugOfWarPage.inputTextColorOpacity()

        //input Text Color HEX
        await tugOfWarPage.inputTextColorHEX()

        //clic Save Btn
        await tugOfWarPage.clicSaveBtn()


        await page.waitForTimeout(2000)


        //function for banner upload
        await functions.bannerImageUploadFunction()
        //click For Upload Mainboard BG
        await tugOfWarPage.clickForUploadMainboardBG()
        await functions.fileUploadCropper()
        await page.waitForTimeout(3000)

        //function for banner upload
        await functions.bannerImageUploadFunction()
        //click For Upload Mobile BG
        await tugOfWarPage.clickForUploadMobileBG()
        await functions.fileUploadCropper()


        await page.waitForTimeout(3000)

        // await tugOfWarPage.enableStandByCheckBox()
        // await page.waitForTimeout(2000)
        await tugOfWarPage.inputStandByMassage()

        await page.waitForTimeout(2000)






})


test("008TOFW-010 | Delete New Config", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        //click Tug Of War Page
        await tugOfWarPage.clickTugOfWarPage()


        await page.waitForTimeout(3000)



        await tugOfWarPage.clickGameDeleteBtn()

        await page.waitForTimeout(5000)

        await tugOfWarPage.deleteGame()

        await page.waitForTimeout(5000)






})






















test.skip("Game open in mobile view", async ({ loginPage, tugOfWarPage, functions, page, }, testInfo) => {


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

                //click Tug Of War Page
                await tugOfWarPage.clickTugOfWarPage()


        })

        await test.step("008TOFW-003 | Test In mobile Device", async () => {


                //click AddNew Config Plus Btn 
                await tugOfWarPage.clickAddNewConfigPlusBtn()

                await page.waitForTimeout(3000)


                //verify AddNew ConfigPlus Window Text
                await tugOfWarPage.verifyAddNewConfigPlusWindowText()


                //input Configuration Name
                await tugOfWarPage.inputConfigurationName()

                //click Add Btn
                await tugOfWarPage.clickAddBtn()

                await tugOfWarPage.clickStagesBtn()

                //click Start Game Btn
                await tugOfWarPage.clickStartGameBtn()



                //click Mobile Link Btn
                await tugOfWarPage.clickMobileLinkBtn()


                await page.waitForTimeout(6000)


                //click Mobile Link Open Btn
                await tugOfWarPage.clickMobileLinkOpenBtn()

                await page.waitForTimeout(6000)

                //input UserName In Game
                await tugOfWarPage.inputUserNameInGame()




                // await tugOfWarPage.clickGameDeleteBtn()

                // await page.waitForTimeout(6000)

                // await tugOfWarPage.deleteGame()

                // await page.waitForTimeout(6000)




        })



})

