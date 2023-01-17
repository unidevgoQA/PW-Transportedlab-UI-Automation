import test, { expect } from "@fixtures/basePages";
import mobilePreviewPage from "@pages/mobilePreview.page";
import prizeDropMobilePage from "@pages/prizedrop_mobile_game.page";
import * as data from "@testData/login.cred.json"
import { readFileSync } from 'fs'
const clipboard = require('clipboardy')





test("TL003-001 | Validate User Selectable Japanese Language Change Functionality Working Properly on Admin Side", async ({ loginPage, MainMenu, languagePage, page, }, testInfo) => {


    await test.step("Login Admin and Land to Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();

    })    
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserSelectableRadioBtn();
    })



    
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {


       


        //Verify click on the user profile selectable input field
        await languagePage.clickUserProfileSelectableInputField()

        
        await languagePage.deselectJapaneseLanguage()

        await languagePage.selectJapaneseLanguage()
        
        // await languagePage.deselectSpanishLanguage()
        
        // await languagePage.deselectArabicLanguage()
        // await languagePage.deselectRussianLanguage()


        // await languagePage.deselectFranciasLanguage()

        // await languagePage.deselectEnglishLanguage()

















    })



})

test("TL003-002 | Validate User Selectable Japanese Language Change Properly Show in Mobile Screen", async ({ loginPage,MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
    await test.step("Click Prize Drop Section", async () => {

            //click Prize Drop Section
            await prizeDropPage.clickPrizeDropSection()

    })       
    
    await test.step("now click on start button on Admin site", async() =>{
            // await prizeDropPage.clickstartbutton()

            // await prizeDropPage.clickStartGameOkBtn()
    })
    let newTab=null;
    let newmobilePreviewPage :mobilePreviewPage

    await test.step("now open the game in mobile view", async() =>{
          
              //click Mobile Link Btn
            await MainMenu.clickMobileLinkBtn()
             //now click on open button
            newTab = await MainMenu.clickMobileLinkOpenBtn()
            newmobilePreviewPage = new mobilePreviewPage(newTab)
            // await MainMenu.click_closebutton_in_mobilelinkmodal()
    })

    await test.step("Input Additional Information For Mobile Screen", async() =>{
            await newmobilePreviewPage.typephoneno()
            await newmobilePreviewPage.selectbirthdate()
            await newmobilePreviewPage.typeAge()
            await newmobilePreviewPage.typeemail()
            await newmobilePreviewPage.typezip()
            await newmobilePreviewPage.clicksubmit()                               
    })

    await test.step("Verify Japanese Language Applaid Successfully", async() =>{  
        await newmobilePreviewPage.clickMyProfile()  
        await newmobilePreviewPage.clickOkBtn()   
        await newmobilePreviewPage.clickLanguageSelectionInputField()
        await newmobilePreviewPage.selectJapanese()   
        await newmobilePreviewPage.verifyJapaneseLanguageApplaidSuccessfully()  


        
        
})

})


test("TL003-003 | Validate User Selectable Spanish Language Change Functionality Working Properly on Admin Side", async ({ loginPage, MainMenu, languagePage, page, }, testInfo) => {


    await test.step("Login Admin and Land to Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();

    })    
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserSelectableRadioBtn();
    })



    
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {


       


        //Verify click on the user profile selectable input field
        await languagePage.clickUserProfileSelectableInputField()

       
        await languagePage.deselectSpanishLanguage()

        await languagePage.selectSpanishLanguage()
        
        // await languagePage.deselectArabicLanguage()
        // await languagePage.deselectRussianLanguage()


        // await languagePage.deselectFranciasLanguage()

        // await languagePage.deselectEnglishLanguage()

















    })



})

test("TL003-004 | Validate User Selectable Spanish Language Change Properly Show in Mobile Screen", async ({ loginPage,MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
    await test.step("Click Prize Drop Section", async () => {

            //click Prize Drop Section
            await prizeDropPage.clickPrizeDropSection()

    })       
    
    await test.step("now click on start button on Admin site", async() =>{
            // await prizeDropPage.clickstartbutton()

            // await prizeDropPage.clickStartGameOkBtn()
    })
    let newTab=null;
    let newmobilePreviewPage :mobilePreviewPage

    await test.step("now open the game in mobile view", async() =>{
          
              //click Mobile Link Btn
            await MainMenu.clickMobileLinkBtn()
             //now click on open button
            newTab = await MainMenu.clickMobileLinkOpenBtn()
            newmobilePreviewPage = new mobilePreviewPage(newTab)
            // await MainMenu.click_closebutton_in_mobilelinkmodal()
    })

    await test.step("Input Additional Information For Mobile Screen", async() =>{
            await newmobilePreviewPage.typephoneno()
            await newmobilePreviewPage.selectbirthdate()
            await newmobilePreviewPage.typeAge()
            await newmobilePreviewPage.typeemail()
            await newmobilePreviewPage.typezip()
            await newmobilePreviewPage.clicksubmit()                               
    })

    await test.step("Verify Spanish Language Applaid Successfully", async() =>{  
        await newmobilePreviewPage.clickMyProfile()  
        await newmobilePreviewPage.clickOkBtn()   
        await newmobilePreviewPage.clickLanguageSelectionInputField()
        await newmobilePreviewPage.selectSpanish()   
        await newmobilePreviewPage.verifySpanishLanguageApplaidSuccessfully()  


        
        
})

})

test("TL003-005 | Validate User Selectable Arabic Language Change Functionality Working Properly on Admin Side", async ({ loginPage, MainMenu, languagePage, page, }, testInfo) => {


    await test.step("Login Admin and Land to Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();

    })    
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserSelectableRadioBtn();
    })



    
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {


       


        //Verify click on the user profile selectable input field
        await languagePage.clickUserProfileSelectableInputField()


        
        await languagePage.deselectArabicLanguage()

        await languagePage.selectArabicLanguage()
        // await languagePage.deselectRussianLanguage()


        // await languagePage.deselectFranciasLanguage()

        // await languagePage.deselectEnglishLanguage()

















    })



})

test("TL003-006 | Validate User Selectable Arabic Language Change Properly Show in Mobile Screen", async ({ loginPage,MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
    await test.step("Click Prize Drop Section", async () => {

            //click Prize Drop Section
            await prizeDropPage.clickPrizeDropSection()

    })       
    
    await test.step("now click on start button on Admin site", async() =>{
            // await prizeDropPage.clickstartbutton()

            // await prizeDropPage.clickStartGameOkBtn()
    })
    let newTab=null;
    let newmobilePreviewPage :mobilePreviewPage

    await test.step("now open the game in mobile view", async() =>{
          
              //click Mobile Link Btn
            await MainMenu.clickMobileLinkBtn()
             //now click on open button
            newTab = await MainMenu.clickMobileLinkOpenBtn()
            newmobilePreviewPage = new mobilePreviewPage(newTab)
            // await MainMenu.click_closebutton_in_mobilelinkmodal()
    })

    await test.step("Input Additional Information For Mobile Screen", async() =>{
            await newmobilePreviewPage.typephoneno()
            await newmobilePreviewPage.selectbirthdate()
            await newmobilePreviewPage.typeAge()
            await newmobilePreviewPage.typeemail()
            await newmobilePreviewPage.typezip()
            await newmobilePreviewPage.clicksubmit()                               
    })

    await test.step("Verify Spanish Language Applaid Successfully", async() =>{  
        await newmobilePreviewPage.clickMyProfile()  
        await newmobilePreviewPage.clickOkBtn()   
        await newmobilePreviewPage.clickLanguageSelectionInputField()
        await newmobilePreviewPage.selectArabic()   
        await newmobilePreviewPage.verifyArabicLanguageApplaidSuccessfully()  


        
        
})

})


test("TL003-007 | Validate User Selectable Russian Language Change Functionality Working Properly on Admin Side", async ({ loginPage, MainMenu, languagePage, page, }, testInfo) => {


    await test.step("Login Admin and Land to Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();

    })    
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserSelectableRadioBtn();
    })



    
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {


       


        //Verify click on the user profile selectable input field
        await languagePage.clickUserProfileSelectableInputField()


        

        await languagePage.deselectRussianLanguage()

        await languagePage.selectRussianLanguage()


        // await languagePage.deselectFranciasLanguage()

        // await languagePage.deselectEnglishLanguage()

















    })



})

test("TL003-008 | Validate User Selectable Russian Language Change Properly Show in Mobile Screen", async ({ loginPage,MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
    await test.step("Click Prize Drop Section", async () => {

            //click Prize Drop Section
            await prizeDropPage.clickPrizeDropSection()

    })       
    
    await test.step("now click on start button on Admin site", async() =>{
            // await prizeDropPage.clickstartbutton()

            // await prizeDropPage.clickStartGameOkBtn()
    })
    let newTab=null;
    let newmobilePreviewPage :mobilePreviewPage

    await test.step("now open the game in mobile view", async() =>{
          
              //click Mobile Link Btn
            await MainMenu.clickMobileLinkBtn()
             //now click on open button
            newTab = await MainMenu.clickMobileLinkOpenBtn()
            newmobilePreviewPage = new mobilePreviewPage(newTab)
            // await MainMenu.click_closebutton_in_mobilelinkmodal()
    })

    await test.step("Input Additional Information For Mobile Screen", async() =>{
            await newmobilePreviewPage.typephoneno()
            await newmobilePreviewPage.selectbirthdate()
            await newmobilePreviewPage.typeAge()
            await newmobilePreviewPage.typeemail()
            await newmobilePreviewPage.typezip()
            await newmobilePreviewPage.clicksubmit()                               
    })

    await test.step("Verify Spanish Language Applaid Successfully", async() =>{  
        await newmobilePreviewPage.clickMyProfile()  
        await newmobilePreviewPage.clickOkBtn()   
        await newmobilePreviewPage.clickLanguageSelectionInputField()
        await newmobilePreviewPage.selectRussian()   
        await newmobilePreviewPage.verifyRussianLanguageApplaidSuccessfully()  


        
        
})

})


test("TL003-009 | Validate User Selectable Francias Language Change Functionality Working Properly on Admin Side", async ({ loginPage, MainMenu, languagePage, page, }, testInfo) => {


    await test.step("Login Admin and Land to Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();

    })    
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserSelectableRadioBtn();
    })



    
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {


       


        //Verify click on the user profile selectable input field
        await languagePage.clickUserProfileSelectableInputField()


        
       await languagePage.deselectFranciasLanguage()
       await languagePage.selectFranciasLanguage()

        // await languagePage.deselectEnglishLanguage()

    })



})

test("TL003-010 | Validate User Selectable Francias Language Change Properly Show in Mobile Screen", async ({ loginPage,MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
    await test.step("Click Prize Drop Section", async () => {

            //click Prize Drop Section
            await prizeDropPage.clickPrizeDropSection()

    })       
    
    await test.step("now click on start button on Admin site", async() =>{
            // await prizeDropPage.clickstartbutton()

            // await prizeDropPage.clickStartGameOkBtn()
    })
    let newTab=null;
    let newmobilePreviewPage :mobilePreviewPage

    await test.step("now open the game in mobile view", async() =>{
          
              //click Mobile Link Btn
            await MainMenu.clickMobileLinkBtn()
             //now click on open button
            newTab = await MainMenu.clickMobileLinkOpenBtn()
            newmobilePreviewPage = new mobilePreviewPage(newTab)
            // await MainMenu.click_closebutton_in_mobilelinkmodal()
    })

    await test.step("Input Additional Information For Mobile Screen", async() =>{
            await newmobilePreviewPage.typephoneno()
            await newmobilePreviewPage.selectbirthdate()
            await newmobilePreviewPage.typeAge()
            await newmobilePreviewPage.typeemail()
            await newmobilePreviewPage.typezip()
            await newmobilePreviewPage.clicksubmit()                               
    })

    await test.step("Verify Spanish Language Applaid Successfully", async() =>{  
        await newmobilePreviewPage.clickMyProfile()  
        await newmobilePreviewPage.clickOkBtn()   
        await newmobilePreviewPage.clickLanguageSelectionInputField()
        await newmobilePreviewPage.selectFrancias()   
        await newmobilePreviewPage.verifyFranciasLanguageApplaidSuccessfully()  


        
        
})

})

test("TL003-011 | Validate User Selectable English Language Change Functionality Working Properly on Admin Side", async ({ loginPage, MainMenu, languagePage, page, }, testInfo) => {


    await test.step("Login Admin and Land to Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickHomeAvater();
    })
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.mainMenuBtn();

    })    
    await test.step("Login Admin and Land to Home Screen", async () => {
        await MainMenu.clickMobileDesign();
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickLanguagePage();
    })

    await test.step("Login Admin and Land to Home Screen", async () => {
        await languagePage.clickUserSelectableRadioBtn();
    })



    
    await test.step("TL003-02 | Verify Admin Select Profile flow Language", async () => {


       


        //Verify click on the user profile selectable input field
        await languagePage.clickUserProfileSelectableInputField()

        await languagePage.deselectEnglishLanguage()
        await languagePage.selectEnglishLanguage()

    })



})

test("TL003-012 | Validate User Selectable English Language Change Properly Show in Mobile Screen", async ({ loginPage,MainMenu, prizeDropPage, functions, page, }, testInfo) => {
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
    await test.step("Click Prize Drop Section", async () => {

            //click Prize Drop Section
            await prizeDropPage.clickPrizeDropSection()

    })       
    
    await test.step("now click on start button on Admin site", async() =>{
            // await prizeDropPage.clickstartbutton()

            // await prizeDropPage.clickStartGameOkBtn()
    })
    let newTab=null;
    let newmobilePreviewPage :mobilePreviewPage

    await test.step("now open the game in mobile view", async() =>{
          
              //click Mobile Link Btn
            await MainMenu.clickMobileLinkBtn()
             //now click on open button
            newTab = await MainMenu.clickMobileLinkOpenBtn()
            newmobilePreviewPage = new mobilePreviewPage(newTab)
            // await MainMenu.click_closebutton_in_mobilelinkmodal()
    })

    await test.step("Input Additional Information For Mobile Screen", async() =>{
            await newmobilePreviewPage.typephoneno()
            await newmobilePreviewPage.selectbirthdate()
            await newmobilePreviewPage.typeAge()
            await newmobilePreviewPage.typeemail()
            await newmobilePreviewPage.typezip()
            await newmobilePreviewPage.clicksubmit()                               
    })

    await test.step("Verify Spanish Language Applaid Successfully", async() =>{  
        await newmobilePreviewPage.clickMyProfile()  
        await newmobilePreviewPage.clickOkBtn()   
        await newmobilePreviewPage.clickLanguageSelectionInputField()
        await newmobilePreviewPage.selectEnglish()   
        await newmobilePreviewPage.verifyEnglishLanguageApplaidSuccessfully()  


        
        
})

})

















test("TL003-01 | Verify Admin Select Forced Language", async ({ loginPage, MainMenu, languagePage, page, }, testInfo) => {


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
test("TL003-02 | Validate Admin Select Registration flow Language", async ({ loginPage, MainMenu, languagePage, page, }, testInfo) => {


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

test("TL003-03 | Verify Admin Select Profile flow Language", async ({ loginPage, MainMenu, languagePage, page, }, testInfo) => {


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

