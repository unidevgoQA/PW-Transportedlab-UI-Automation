import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"







// test("Verify Language Page Functionality", async ({ loginPage, MainMenu, languagePage, page, }, testInfo) => {


//     await test.step("Login Admin and Land to Home Screen", async () => {

//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')

//         await MainMenu.clickHomeAvater();
//         await MainMenu.mainMenuBtn();
//         await MainMenu.clickMobileDesign();


//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//             contentType: "image/png",
//             body: screenshot
//         })



//     })

//     // await test.step("TL003-01 | Verify Admin Select Registration flow Language", async () => {

//     //     //click on the language page
//     //     await languagePage.clickLanguagePage()

//     //     const screenshot = await page.screenshot();
//     //     await testInfo.attach("Click on the Language page", {
//     //         contentType: "image/png",
//     //         body: screenshot
//     //     })

//     //     //check the language page header text
//     //     await languagePage.checkLanguageHeaderText()

//     //     await testInfo.attach("Check Language Header text", {
//     //         contentType: "image/png",
//     //         body: screenshot
//     //     })

//     //     //check language page controls button title text
//     //     await languagePage.checkLanguageControlsText()

//     //     //there is function if the button is disable then click on the disabled button
//     //     await languagePage.checkLanguageControlsDisabledBtn()

//     //     //Verify that the User Selectable Language checkbox is clicked or not
//     //     await languagePage.clickUserSelectableRadioBtn()


//     //     //Verify click on the user registration selectable input field
//     //     await languagePage.clickUserRegistrationSelectableInputField()


//     //     //select english language for user registration 
//     //     await languagePage.selectEnglishLanguage()

//     //     //select Francias language for user registration 
//     //     await languagePage.selectFranciasLanguage()

//     //     //select Russian language for user registration 
//     //     await languagePage.selectRussianLanguage()

//     //     //select Arabic language for user registration 
//     //     await languagePage.selectArabicLanguage()

//     //     //select Spanish language for user registration 
//     //     await languagePage.selectSpanishLanguage()

//     //     //select Japanese language for user registration 
//     //     await languagePage.selectJapaneseLanguage()

//     //     await page.waitForTimeout(1000)








//     // })

//     // await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {



//     //     //Verify user selectable text
//     //     await languagePage.checkUserSelectableText()

//     //     //Verify click on the user profile selectable input field
//     //     await languagePage.clickUserProfileSelectableInputField()


//     //     //select english language for user registration 
//     //     await languagePage.selectEnglishLanguage()

//     //     //select Francias language for user registration 
//     //     await languagePage.selectFranciasLanguage()

//     //     //select Russian language for user registration 
//     //     await languagePage.selectRussianLanguage()

//     //     //select Arabic language for user registration 
//     //     await languagePage.selectArabicLanguage()

//     //     //select Spanish language for user registration 
//     //     await languagePage.selectSpanishLanguage()

//     //     //select Japanese language for user registration 
//     //     await languagePage.selectJapaneseLanguage()









//     // })

//     await test.step("TL003-03 | Verify Admin Select Forced Language", async () => {


//         //Verify user forced language text
//         await languagePage.checkUserForcedLanguageText()

//         //Click on the user force language field
//         await languagePage.clickUserForceLanguageOption()

//         //click on the force language input field
//         await languagePage.clickUserForceLanguageinputfield()
//         //select english language for user registration 
//         await languagePage.selectEnglishLanguage()

//         await page.waitForTimeout(1000)
//         //Verify user forced language text
//         await languagePage.checkUserForcedLanguageText()
//         //click on the force language input field
//         await languagePage.clickUserForceLanguageinputfield()
//         //select Francias language for user registration 
//         await languagePage.selectFranciasLanguage()

//         await page.waitForTimeout(1000)

//         //Verify user forced language text
//         await languagePage.checkUserForcedLanguageText()
//         //click on the force language input field
//         await languagePage.clickUserForceLanguageinputfield()
//         //select Russian language for user registration 
//         await languagePage.selectRussianLanguage()
//         await page.waitForTimeout(1000)
//         //Verify user forced language text
//         await languagePage.checkUserForcedLanguageText()
//         //click on the force language input field
//         await languagePage.clickUserForceLanguageinputfield()
//         //select Arabic language for user registration 
//         await languagePage.selectArabicLanguage()
//         await page.waitForTimeout(1000)
//         //Verify user forced language text
//         await languagePage.checkUserForcedLanguageText()
//         //click on the force language input field
//         await languagePage.clickUserForceLanguageinputfield()
//         //select Spanish language for user registration 
//         await languagePage.selectSpanishLanguage()
//         await page.waitForTimeout(1000)

//         //Verify user forced language text
//         await languagePage.checkUserForcedLanguageText()
//         //click on the force language input field
//         await languagePage.clickUserForceLanguageinputfield()
//         //select Japanese language for user registration 
//         await languagePage.selectJapaneseLanguage()





//     })


// })



test("TL003-03 | Verify Admin Select Forced Language", async ({ loginPage, MainMenu, languagePage, page, }, testInfo) => {


    await test.step("Login Admin and Land to Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await MainMenu.clickHomeAvater();
        await MainMenu.mainMenuBtn();
        await MainMenu.clickMobileDesign();


        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
        })



    })

    await test.step("TL003-03 | Verify Admin Select Forced Language", async () => {

        await languagePage.clickLanguagePage()
        await page.waitForTimeout(2000)

        // //Verify user forced language text
        // await languagePage.checkUserForcedLanguageText()

        //Click on the user force language field
        await languagePage.clickUserForceLanguageOption()

        await page.waitForTimeout(2000)


        //click on the force language input field
        await languagePage.clickForceLanguageInputField()
        await page.waitForTimeout(1000)

        //select english language for user registration 
        await languagePage.selectEnglishLanguage()


        await page.waitForTimeout(1000)

        await languagePage.clickForceLanguageInputField()

        //Verify user forced language text
        await languagePage.checkUserForcedLanguageText()
        //click on the force language input field
        await languagePage.clickForceLanguageInputField()
        //select Francias language for user registration 
        await languagePage.selectFranciasLanguage()

        await page.waitForTimeout(1000)

        //Verify user forced language text
        await languagePage.checkUserForcedLanguageText()
        //click on the force language input field
        await languagePage.clickForceLanguageInputField()
        //select Russian language for user registration 
        await languagePage.selectRussianLanguage()
        await page.waitForTimeout(1000)
        //Verify user forced language text
        await languagePage.checkUserForcedLanguageText()
        //click on the force language input field
        await languagePage.clickForceLanguageInputField()
        //select Arabic language for user registration 
        await languagePage.selectArabicLanguage()
        await page.waitForTimeout(1000)
        //Verify user forced language text
        await languagePage.checkUserForcedLanguageText()
        //click on the force language input field
        await languagePage.clickForceLanguageInputField()
        //select Spanish language for user registration 
        await languagePage.selectSpanishLanguage()
        await page.waitForTimeout(1000)

        //Verify user forced language text
        await languagePage.checkUserForcedLanguageText()
        //click on the force language input field
        await languagePage.clickForceLanguageInputField()
        //select Japanese language for user registration 
        await languagePage.selectJapaneseLanguage()



        //click on the force language input field
        await languagePage.clickForceLanguageInputField()
        await page.waitForTimeout(1000)

        //select english language for user registration 
        await languagePage.selectEnglishLanguage()


        await page.waitForTimeout(1000)

        //Verify that the User Selectable Language checkbox is clicked or not
        await languagePage.clickUserSelectableRadioBtn()


    })


})
test("TL003-01 | Validate Admin Select Registration flow Language", async ({ loginPage, MainMenu, languagePage, page, }, testInfo) => {


    await test.step("Login Admin and Land to Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await MainMenu.clickHomeAvater();
        await MainMenu.mainMenuBtn();
        await MainMenu.clickMobileDesign();


        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
        })



    })

    await test.step("TL003-01 | Verify Admin Select Registration flow Language", async () => {

        //click on the language page
        await languagePage.clickLanguagePage()



        //check the language page header text
        await languagePage.checkLanguageHeaderText()



        //check language page controls button title text
        await languagePage.checkLanguageControlsText()

        // //there is function if the button is disable then click on the disabled button
        // await languagePage.checkLanguageControlsDisabledBtn()

        //Verify that the User Selectable Language checkbox is clicked or not
        await languagePage.clickUserSelectableRadioBtn()

        await page.waitForTimeout(3000)

        await languagePage.verifyUserSelectableHeaderText()



        //Verify click on the user registration selectable input field
        await languagePage.clickUserRegistrationSelectableInputField()


        //select english language for user registration 
        await languagePage.selectEnglishLanguage()
        await page.waitForTimeout(1000)

        //select Francias language for user registration 
        await languagePage.selectFranciasLanguage()
        await page.waitForTimeout(1000)

        // await languagePage.clickUserRegistrationSelectableInputField()


        //select Russian language for user registration 
        await languagePage.selectRussianLanguage()
        await page.waitForTimeout(1000)

        // await languagePage.clickUserRegistrationSelectableInputField()


        //select Arabic language for user registration 
        await languagePage.selectArabicLanguage()
        await page.waitForTimeout(1000)

        // await languagePage.clickUserRegistrationSelectableInputField()


        //select Spanish language for user registration 
        await languagePage.selectSpanishLanguage()
        await page.waitForTimeout(1000)

        // await languagePage.clickUserRegistrationSelectableInputField()


        //select Japanese language for user registration 
        await languagePage.selectJapaneseLanguage()
        await page.waitForTimeout(1000)

        // await languagePage.clickUserRegistrationSelectableInputField()









    })



})

test("TL003-02 | Verify Admin Select Profile flow Language", async ({ loginPage, MainMenu, languagePage, page, }, testInfo) => {


    await test.step("Login Admin and Land to Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await MainMenu.clickHomeAvater();
        await MainMenu.mainMenuBtn();
        await MainMenu.clickMobileDesign();


        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
            contentType: "image/png",
            body: screenshot
        })



    })

    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {


        await languagePage.clickLanguagePage()

        // //Verify user selectable text
        // await languagePage.checkUserSelectableText()

        await languagePage.clickUserSelectableRadioBtn()


        //Verify click on the user profile selectable input field
        await languagePage.clickUserProfileSelectableInputField()


        //select english language for user registration 
        await languagePage.selectEnglishLanguage()

        //select Francias language for user registration 
        await languagePage.selectFranciasLanguage()

        //select Russian language for user registration 
        await languagePage.selectRussianLanguage()

        //select Arabic language for user registration 
        await languagePage.selectArabicLanguage()

        //select Spanish language for user registration 
        await languagePage.selectSpanishLanguage()

        //select Japanese language for user registration 
        await languagePage.selectJapaneseLanguage()









    })



})

