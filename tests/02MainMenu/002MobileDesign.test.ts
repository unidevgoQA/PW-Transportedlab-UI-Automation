import test, { expect } from "@fixtures/basePages";
import mobilePreviewPage from "@pages/mobilePreview.page";
import prizeDropMobilePage from "@pages/prizedrop_mobile_game.page";
import * as data from "@testData/login.cred.json"
import { readFileSync } from 'fs'
const clipboard = require('clipboardy')




test("MD002-01 | Validate Font upload functionality", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();



                await MainMenu.mainMenuBtn();



                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)










        })
        await test.step("Validate Font upload functionality", async () => {
                
                //delete Font
                await MainMenu.deleteFont()

                //click Upload Font And Upload Files
                await MainMenu.clickUploadFontAndUploadFiles()

                await page.waitForTimeout(4000)

        })


})


test("MD002-01 | Validate Admin Successfully Select Entry Screen As User Profile", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })

        await test.step("click Entry Screen Select Field", async () => {       
        await MainMenu.clickEntryScreenSelectField()              
        })

        await test.step("click Entry Screen Select Field", async () => {       
                await MainMenu.selectEntryScreenUserProfile()              
        })

})

test("007PD-005 | Validate Entry Screen As User Profile Applied Successfully on Mobile Screen", async ({ loginPage,MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("navigate to color section and click clear all button", async () => {

                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()

                //click Game Design
                await prizeDropPage.clickGameDesign()

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

        await test.step("provide values in form field of mobile view and submit", async() =>{
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.clickOkBtn()
                await newmobilePreviewPage.verifyUserNameInputFieldTitle()
        })

        

      
   




        

})

test("MD002-01s | Validate Admin Successfully Select Entry Screen As Role", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })

        await test.step("click Entry Screen Select Field", async () => {       
        await MainMenu.clickEntryScreenSelectField()              
        })

        await test.step("click Entry Screen Select Field", async () => {       
                await MainMenu.selectEntryScreenRules()              
        })

})

test("007PD-005 | Validate Entry Screen As Role Applied Successfully on Mobile Screen", async ({ loginPage,MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("navigate to color section and click clear all button", async () => {

                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()

                //click Game Design
                await prizeDropPage.clickGameDesign()

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

        await test.step("provide values in form field of mobile view and submit", async() =>{
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.verifyRulesEntryIsApplyed()
                
        })

        

      
   




        

})

test("MD002-01s | Validate Admin Successfully Select Entry Screen As How To Play", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })

        await test.step("click Entry Screen Select Field", async () => {       
        await MainMenu.clickEntryScreenSelectField()              
        })

        await test.step("select Entry Screen How To Play", async () => {       
                await MainMenu.selectEntryScreenHowToPlay()              
        })

})

test("007PD-005 | Validate Entry Screen As How To Play Applied Successfully on Mobile Screen", async ({ loginPage,MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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

        await test.step("navigate to color section and click clear all button", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
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

        await test.step("provide values in form field of mobile view and submit", async() =>{
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.verifyHowToPlayEntryIsApplyed()
                
        })

        

      
   




        

})

test("MD002-01s | Validate Admin Successfully Select Entry Screen As Prize", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })

        await test.step("click Entry Screen Select Field", async () => {       
        await MainMenu.clickEntryScreenSelectField()              
        })

        await test.step("select Entry Screen How To Play", async () => {       
                await MainMenu.selectEntryScreenPrize()              
        })

})

test("007PD-005 | Validate Entry Screen As Prize Applied Successfully on Mobile Screen", async ({ loginPage,MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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

        await test.step("navigate to color section and click clear all button", async () => {
                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()
                //click Game Design
                await prizeDropPage.clickGameDesign()
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

        await test.step("provide values in form field of mobile view and submit", async() =>{
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.verifyPrizeEntryIsApplyed()
                
        })

        

      
   




        

})

test("MD002-01s | Validate Admin Successfully Select Entry Screen As Home", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })

        await test.step("click Entry Screen Select Field", async () => {       
        await MainMenu.clickEntryScreenSelectField()              
        })

        await test.step("click Entry Screen Select Field", async () => {       
                await MainMenu.selectEntryScreenHome()              
        })

})

test("007PD-005 | Validate Entry Screen As Home Applied Successfully on Mobile Screen", async ({ loginPage,MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("navigate to color section and click clear all button", async () => {

                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()

                //click Game Design
                await prizeDropPage.clickGameDesign()

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

        await test.step("provide values in form field of mobile view and submit", async() =>{
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.verifyHomeEntryIsApplyed()
                
        })

        

      
   




        

})

test("007PD-005 | Validate Secondary Color Applied Into Mobile Screen", async ({ loginPage,MainMenu, tugOfWarPage, prizeDropPage, functions, page, }, testInfo) => {
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
        await test.step("navigate to color section and click clear all button", async () => {

                //click Prize Drop Section
                await prizeDropPage.clickPrizeDropSection()

                //click Game Design
                await prizeDropPage.clickGameDesign()

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

        await test.step("provide values in form field of mobile view and submit", async() =>{
                await newmobilePreviewPage.typephoneno()
                await newmobilePreviewPage.selectbirthdate()
                await newmobilePreviewPage.typeAge()
                await newmobilePreviewPage.typeemail()
                await newmobilePreviewPage.typezip()
                await newmobilePreviewPage.clicksubmit()
                await newmobilePreviewPage.verifySecondaryColorAppliedInMobile()
                
        })

        

      
   




        

})









test.skip("007PD-012 | Validate Game Link Successfully Copy in system clipboard", async ({ prizeDropPage,loginPage, page,browser}) => {

    
        // await page.goto("/admin/#/sign-in");
        // await page.fill("input[type='text']", "qa-1")
        // await page.fill("input[type='password']", "mFkTylCDNC")

        // await Promise.all([
        //         page.waitForNavigation(),
        //         page.click("button:has-text('Login')")
        // ])

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

              

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)
        })


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



test("MD002-02 | Verify input parimary color functionality", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();



                await MainMenu.mainMenuBtn();



                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)

        })

        await test.step("MD002-02 | Verify input parimary color functionality", async () => {


                await MainMenu.clickClearAllBtn();


                await MainMenu.checkPrimaryColortxt()

                await MainMenu.clickPrimaryColorField()




                await MainMenu.primaryColorFirstInputField()

                await MainMenu.primaryColorSecondInputField()

                await MainMenu.primaryColorThirdInputField()

                await MainMenu.primaryColorOpacityInputField()

                await MainMenu.primaryColorHexInputField()

                await MainMenu.clickSaveBtn()































        })





})



test("MD002-03 | Verify input secondary color functionality", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();



                await MainMenu.mainMenuBtn();



                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)

        })

        await test.step("MD002-03 | Verify input secondary color functionality", async () => {







                await MainMenu.checkSecondaryText();

                await MainMenu.clickSecondaryColorBtn();


                await MainMenu.SecondaryColorFirstInputField()

                await MainMenu.SecondaryColorSecondInputField()

                await MainMenu.SecondaryColorThirdInputField()

                await MainMenu.SecondaryColorOpacityInputField()

                await MainMenu.SecondaryColorHexInputField()



                await MainMenu.clickSaveBtn()






        })






})


test("MD002-04 | Verify input Tertiary color functionality", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();



                await MainMenu.mainMenuBtn();



                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)

        })


        await test.step("MD002-04 | Verify input Tertiary color functionality", async () => {


                await MainMenu.checkTertiaryText();

                await MainMenu.clickTertiaryColorBtn();



                await MainMenu.TertiaryColorFirstInputField()

                await MainMenu.TertiaryColorSecondInputField()

                await MainMenu.TertiaryColorThirdInputField()

                await MainMenu.TertiaryColorOpacityInputField()

                await MainMenu.TertiaryColorHexInputField()

                await MainMenu.clickSaveBtn()






        })





})


test("MD002-05 | Verify input Button color functionality", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();



                await MainMenu.mainMenuBtn();



                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)

        })



        await test.step("MD002-05 | Verify input Button color functionality", async () => {


                await MainMenu.checkButtonText();

                await MainMenu.clickButtonColorBtn();


                await MainMenu.ButtonColorFirstInputField()

                await MainMenu.ButtonColorSecondInputField()

                await MainMenu.ButtonColorThirdInputField()

                await MainMenu.ButtonColorOpacityInputField()

                await MainMenu.ButtonColorHexInputField()

                await MainMenu.clickSaveBtn()





        })






})


test("MD002-06 | Verify input Button Glow color functionality", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();



                await MainMenu.mainMenuBtn();



                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)

        })



        await test.step("MD002-06 | Verify input Button Glow color functionality", async () => {


                await MainMenu.checkButtonGlowText();

                await MainMenu.clickButtonGlowColorBtn();


                await MainMenu.ButtonGlowColorFirstInputField()

                await MainMenu.ButtonGlowColorSecondInputField()

                await MainMenu.ButtonGlowColorThirdInputField()

                await MainMenu.ButtonGlowColorOpacityInputField()

                await MainMenu.ButtonGlowColorHexInputField()

                await MainMenu.clickSaveBtn()





        })

      





})


test("MD002-07 | Verify that admin saccessfully input Text Field color", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();



                await MainMenu.mainMenuBtn();



                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)

        })




        await test.step("MD002-07 | Verify that admin saccessfully input Text Field color", async () => {


                await MainMenu.checkTextText();

                await MainMenu.clickTextColorBtn();


                await MainMenu.TextColorFirstInputField()

                await MainMenu.TextColorSecondInputField()

                await MainMenu.TextColorThirdInputField()

                await MainMenu.TextColorOpacityInputField()

                await MainMenu.TextColorHexInputField()

                await MainMenu.clickSaveBtn()





        })






})


test("MD002-08 | Verify that admin saccessfully input Text Field color", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();



                await MainMenu.mainMenuBtn();



                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)

        })




        await test.step("MD002-08 | Verify that admin saccessfully input Text Field color", async () => {


                await MainMenu.checkTextDialogBoxText();

                await MainMenu.clickTextDialogBoxColorBtn();


                await MainMenu.TextDialogBoxColorFirstInputField()

                await MainMenu.TextDialogBoxColorSecondInputField()

                await MainMenu.TextDialogBoxColorThirdInputField()

                await MainMenu.TextDialogBoxColorOpacityInputField()

                await MainMenu.TextDialogBoxColorHexInputField()

                await MainMenu.clickSaveBtn()





        })






})


test("MD002-09 | Verify that admin saccessfully input Header Field color", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();



                await MainMenu.mainMenuBtn();



                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)

        })




        await test.step("MD002-09 | Verify that admin saccessfully input Header Field color", async () => {


                await MainMenu.checkHeaderFieldText();

                await MainMenu.clickHeaderFieldColorBtn();


                await MainMenu.HeaderColorFirstInputField()

                await MainMenu.HeaderColorSecondInputField()

                await MainMenu.HeaderColorThirdInputField()

                await MainMenu.HeaderColorOpacityInputField()

                await MainMenu.HeaderColorHexInputField()

                await MainMenu.clickSaveBtn()





        })






})



test("MD002-10 | Verify that admin saccessfully input Header Text Field color", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();



                await MainMenu.mainMenuBtn();



                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)

        })

        await test.step("MD002-10 | Verify that admin saccessfully input Header Text Field color", async () => {


                await MainMenu.checkHeaderTextFieldText();

                await MainMenu.clickHeaderTextFieldColorBtn();


                await MainMenu.HeaderTextColorFirstInputField()

                await MainMenu.HeaderTextColorSecondInputField()

                await MainMenu.HeaderTextColorThirdInputField()

                await MainMenu.HeaderTextColorOpacityInputField()

                await MainMenu.HeaderTextColorHexInputField()

                await MainMenu.clickSaveBtn()





        })






})



test("MD002-011 | Verify that admin saccessfully input Gamification Field color", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();



                await MainMenu.mainMenuBtn();



                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)

        })

        await test.step("MD002-011 | Verify that admin saccessfully input Gamification Field color", async () => {


                await MainMenu.checkGamificationFieldText();

                await MainMenu.clickGamificationFieldColorBtn();


                await MainMenu.GamificationColorFirstInputField()

                await MainMenu.GamificationColorSecondInputField()

                await MainMenu.GamificationColorThirdInputField()

                await MainMenu.GamificationColorOpacityInputField()

                await MainMenu.GamificationColorHexInputField()

                await MainMenu.clickSaveBtn()





        })





})


test("MD002-012 | Verify that admin saccessfully input Gamification Glow Line Field color", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();



                await MainMenu.mainMenuBtn();



                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)

        })


        await test.step("MD002-012 | Verify that admin saccessfully input Gamification Glow Line Field color", async () => {


                await MainMenu.checkGamificationGlowLineFieldText();

                await MainMenu.clickGamificationGlowLineFieldColorBtn();


                await MainMenu.GamificationGlowLineColorFirstInputField()

                await MainMenu.GamificationGlowLineColorSecondInputField()

                await MainMenu.GamificationGlowLineColorThirdInputField()

                await MainMenu.GamificationGlowLineColorOpacityInputField()

                await MainMenu.GamificationGlowLineColorHexInputField()

                await MainMenu.clickSaveBtn()





        })





})









test("MD002-03 | Validate all the Uploaded Image File Delete Functionality", async ({ loginPage,functions, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();



                await MainMenu.mainMenuBtn();



                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)

        })

        await test.step("MD002-012 | Validate all the Uploaded File Delete Functionality", async () => {

                //delete Uploaded Landscape BG
                await MainMenu.deleteUploadedLandscapeBG()

                await page.waitForTimeout(3000)

                //delete Uploaded Portrait BG
                await MainMenu.deleteUploadedPortraitBG()
                await page.waitForTimeout(3000)

                //delete Uploaded Landscape BG Header
                await MainMenu.deleteUploadedLandscapeBGHeader()

                await page.waitForTimeout(3000)

                //delete Uploaded Portrait BG Header
                await MainMenu.deleteUploadedPortraitBGHeader()
                await page.waitForTimeout(3000)

                //delete Uploaded MainLogo
                await MainMenu.deleteUploadedMainLogo()
                await page.waitForTimeout(3000)

        })




})

// test("MD002-04 | Validate Video Upload Functionality For Mobile Design", async ({ loginPage,functions, MainMenu, page }) => {

//         await test.step("Login Admin And Land to Home Screen", async () => {

//                 await page.goto('/admin/#/sign-in')
//                 await loginPage.login(data.username, data.password)
//                 const title = await page.title();
//                 expect(title).toBe('DXP Admin')

//                 await MainMenu.clickHomeAvater();



//                 await MainMenu.mainMenuBtn();



//                 await MainMenu.clickMobileDesign();

//                 await page.waitForTimeout(6000)

//                 // await expect(page).toHaveURL(Env.MobileDesignPageUrl)

//         })

//         await test.step("Validate All The Video CheckBox Is Checked Properly", async () => {


               
//                 await MainMenu.clickPortraitBackgroundHeaderimageCheckBox()
//                 await MainMenu.clickLandscapeBackgroundHeaderimageCheckBox()
//                 await MainMenu.clickPortraitBackgroundimageCheckBox()
//                 await MainMenu.clickLandscapeBackgroundimageCheckBox()
                

              

//              await page.waitForTimeout(4000)
                

               

//         })

//         await test.step("Validate Upload Functionality For Mobile Design", async () => {


//                 await page.waitForTimeout(2000)
//                 await functions.bannerImageUploadFunction()
//                 // await MainMenu.clickToUploadMainLogo()
//                 // await page.waitForTimeout(3000)

//                 // await functions.fileUploadCropperWithoutIframe()

//                 await MainMenu.clickToUploadPortraitBackgroundHeader()
//                 await functions.fileUploadCropperWithoutIframe()



//                 await MainMenu.clickToUploadLandscapeBackgroundHeader()
//                 await functions.fileUploadCropperWithoutIframe()


                
//                 await MainMenu.clickToUploadPortraitBackground()
//                 await functions.fileUploadCropperWithoutIframe()


//                 await MainMenu.clickToUploadLandscapeBackground()
//                 await functions.fileUploadCropperWithoutIframe()


//              await page.waitForTimeout(4000)
                

               

//         })



// })

test("MD002-05 | Validate all the Uploaded Video File Delete Functionality", async ({ loginPage,functions, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();



                await MainMenu.mainMenuBtn();



                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)

        })

        await test.step("Validate all the Uploaded File Delete Functionality", async () => {

                //delete Uploaded Landscape BG
                await MainMenu.deleteUploadedLandscapeBG()

                await page.waitForTimeout(3000)

                //delete Uploaded Portrait BG
                await MainMenu.deleteUploadedPortraitBG()
                await page.waitForTimeout(3000)

                //delete Uploaded Landscape BG Header
                await MainMenu.deleteUploadedLandscapeBGHeader()

                await page.waitForTimeout(3000)

                //delete Uploaded Portrait BG Header
                await MainMenu.deleteUploadedPortraitBGHeader()
                await page.waitForTimeout(3000)

                //delete Uploaded MainLogo
                await MainMenu.deleteUploadedMainLogo()
                await page.waitForTimeout(3000)

        })




})

test("MD002-06 | Validate Video Upload Functionality For Mobile Design", async ({ loginPage,functions, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();



                await MainMenu.mainMenuBtn();



                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)

        })

        await test.step("Validate All The Video CheckBox Is Checked Properly", async () => {


               
                await MainMenu.clickPortraitBackgroundHeaderVideoCheckBox()
                await MainMenu.clickLandscapeBackgroundHeaderVideoCheckBox()
                await MainMenu.clickPortraitBackgroundVideoCheckBox()
                await MainMenu.clickLandscapeBackgroundVideoCheckBox()
                

              

             await page.waitForTimeout(4000)
                

               

        })

        await test.step("Validate Upload Functionality For Mobile Design", async () => {


                await page.waitForTimeout(2000)
                await functions.videoUploadFunction()
                await MainMenu.clickToUploadPortraitBackgroundHeader()


                await MainMenu.clickToUploadLandscapeBackgroundHeader()

                
                await MainMenu.clickToUploadPortraitBackground()

                await MainMenu.clickToUploadLandscapeBackground()

             await page.waitForTimeout(7000)
                

               

        })


     

})

test("MD002-06 | Validates Video Upload Functionality For Mobile Design", async ({ loginPage,functions, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();



                await MainMenu.mainMenuBtn();



                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)

        })

        


     

})

test("MD002-07 | Validate Try To Upload Invalid Font Format", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();
                await MainMenu.clickMobileDesign();
        })

        await test.step("Validate Try To Upload Invalid Font", async () => {
        
                //click Upload Font And Upload Files
                await MainMenu.validateTryToUploadInvalidFont()
                await page.waitForTimeout(4000)

        })


})

test("MD002-08 | Validate Try To Upload Invalid Font Format", async ({ loginPage,functions, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {
                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();

        })

        await test.step("Validate Try To Upload Invalid Font", async () => {
                

                //click Upload Font And Upload Files

                await MainMenu.clickMobileDesign();
                await page.waitForTimeout(2000)
                await functions.logoImageUploadFunction()
                await MainMenu.clickUploadFontsInputFiled()


                page.on("dialog", async (alert) => {
                        console.log('Alert message: ' + alert.message());
                        await alert.accept();
                    });
                    // await page.click("#accept")
                    await page.waitForEvent("dialog");

        })


})

