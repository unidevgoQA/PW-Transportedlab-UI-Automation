import test, { expect } from "@fixtures/basePages";
import guesstheScorePage from "@pages/guesstheScore.page";
import { devices, chromium, BrowserContext, Page } from '@playwright/test';
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
// import clipboard from 'clipboardy';
import guesstheScoreMobilePage from '../../pages/MobileGamesPage/guessthescore_mobile_game.page';
const clipboard = require("clipboardy");
var url: any;
var text: string;
test("000 | Select All The Menu Ready For UI Varification", async ({ loginPage, functions,singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {


    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')

    await MainMenu.clickHomeAvater();
    await MainMenu.mainMenuBtn();
    await MainMenu.clickMobileDesign();

    //Click on the menu page
    await menuPage.clickMenuPage()
    //verify font text
    await menuPage.checkFontsText();

    //Verify upload font text
    await menuPage.checkUploadFontText();

   await menuPage.deleteUploadedFont()

   await functions.fontUploadFunction()
   await menuPage.clickToUploadFont()
    await menuPage.verifyFontUploadedSuccessfully()        

    await menuPage.clickBackgroundColorInputField()
    await menuPage.inputBackgroundColor()
    await menuPage.clickColorPickerWindowSaveBtn()

    await menuPage.clickTextColorInputField()
    await menuPage.inputTextColor()
    await menuPage.clickColorPickerWindowSaveBtn()


    await menuPage.clickActiveBackgroundColorInputField()
    await menuPage.inputActiveBackgroundColor()
    await menuPage.clickColorPickerWindowSaveBtn()


    await menuPage.clickActiveTextColorInputField()
    await menuPage.inputActiveTextColor()
    await menuPage.clickColorPickerWindowSaveBtn()
    await menuPage.selectBottomAlignmentMenuBar()

    await singupPage.clickSignUpPage()
    await singupPage.clickAnonymousLoginOption()
    await singupPage.clickAdditionalInfoPhoneNumberCheckbox()
    await singupPage.clickAdditionalInfoEmailAddressCheckbox()
    await singupPage.clickAdditionalInfoAgeCheckbox()
    await singupPage.clickAdditionalInfoDateOfBirthCheckbox()
    await singupPage.clickAdditionalInfoZipCodeCheckbox()
    await singupPage.uncheckAdditionalInfoCustomQuestionCheckbox()

    await languagePage.clickLanguagePage()
    await languagePage.clickUserForceLanguageOption()
    await languagePage.clickForceLanguageInputField()
    await languagePage.selectEnglishLanguage()






})
test("0013GTS-001 | validate Add New Configuration in guess the score is working.", async ({ loginPage, guesstheScorePage, page, }, testInfo) => {

    await test.step("Login Admin And land To guess the score", async () => {

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

    await test.step("validate Add new configuration is working", async () => {


        //click guess the score Section

        await guesstheScorePage.clickGuessTheScoreSection()
        const screenshot = await page.screenshot();
        await testInfo.attach("click guessthescore Section", {
            contentType: "image/png",
            body: screenshot
        })
        await page.waitForTimeout(3000)

        await guesstheScorePage.verifyConfigurationsText()

        await page.waitForTimeout(3000)

        await guesstheScorePage.clickAddNewConfigPlusBtn()

        await page.waitForTimeout(3000)

        await guesstheScorePage.inputConfigurationName(guesstheScorePage.getRandomName())

        await page.waitForTimeout(3000)

        await guesstheScorePage.clickAddBtn()

        await page.waitForTimeout(3000)

    })

})
test("0013GTS-002 |  Validate Font Upload Functionality.", async ({ loginPage, guesstheScorePage, MainMenu,menuPage,functions, page, }, testInfo) => {
    await test.step("Login Admin And land To guess the score", async () => {

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
    await test.step("open fonts section ",async()=>{
        await guesstheScorePage.clickGuessTheScoreSection()
        await guesstheScorePage.clickGameDesign()
        await guesstheScorePage.openfontsection()


    })
    await test.step(" Validate Font Upload Functionality", async () => {
        
        
        await guesstheScorePage.verifyFontsText()
        await guesstheScorePage.verifyUploadFontsText()
        //await guesstheScorePage.deleteUploadedFont()
        //font upload here
        await functions.fontUploadFunction()
        //delete frond if alredy uploaded
        
        await guesstheScorePage.clickToUploadFont()
        await guesstheScorePage.waitforuploadcomplete()
        //await page.waitForTimeout(4000)

         //click Clear All Btn
        //  await guesstheScorePage.clickClearAllBtn()

        //await page.waitForTimeout(4000)
    })

})

test("0013GTS-003 | Validate Font Successfully Applied in mobile screen.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()




    })
    let newTab=null;
    let newguessthescoregame :guesstheScoreMobilePage
await test.step("now open the game in mobile view", async() =>{
    await guesstheScorePage.clickGameDesign()

})
       
await test.step("Now game open in mobile screen",async()=>{

    await guesstheScorePage.clickMobileLinkBtn()
    newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
    newguessthescoregame = new guesstheScoreMobilePage(newTab)
    // await guesstheScorePage.clickCloseBtn()
    await newguessthescoregame.typephoneno()
    await newguessthescoregame.typeemail()
    await newguessthescoregame.selectbirthdate()
    await newguessthescoregame.typeAge()
    await newguessthescoregame.typezip()
    await newguessthescoregame.clicksubmit()
   // await newguessthescoregame.clcikHomePageInMobileScreen()
   await newTab.waitForTimeout(4000)
    await newguessthescoregame.verifyTodaysLineUpBtnText()
    await newguessthescoregame.verifyFontAppliedSuccessfullyInMobileScreen()
    

    }) 


   
    
})

test("0013GTS-005 |validate image upload section in guess the score works.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })

    await test.step("open image uploads section in game design", async() =>{
        await guesstheScorePage.clickGameDesign()
        await guesstheScorePage.openimagesection()
    })
    // await test.step("full screen logo upload works", async() =>{
    //     await guesstheScorePage.clickfullscreenlogoupload()
    //     await page.waitForTimeout(2000)
    //     await guesstheScorePage.Imageuploader()

    //     await page.waitForTimeout(4000)
    // })
    // await test.step("Mainboard Background logo upload works", async() =>{
    //     await guesstheScorePage.clickMainboardBackgroundupload()
    //     await page.waitForTimeout(2000)
    //     await guesstheScorePage.Imageuploader()

    //     await page.waitForTimeout(4000)
    // })
    await test.step("sponsor logo upload works", async() =>{
        await guesstheScorePage.clicksposnorLogoupload()
        await page.waitForTimeout(2000)
        await guesstheScorePage.Imageuploader()

        await page.waitForTimeout(4000)
    })
    await test.step("Mobile Background logo upload works", async() =>{
        await guesstheScorePage.clickMobileBackgroundupload()
        await page.waitForTimeout(2000)
        await guesstheScorePage.Imageuploader()

        await page.waitForTimeout(4000)
    })
    await test.step("Game title logo upload works", async() =>{
        await guesstheScorePage.clickGametitlelogoupload()
        await page.waitForTimeout(2000)
        await guesstheScorePage.Imageuploader()

        await page.waitForTimeout(4000)
    })
    await test.step("banner image logo upload works", async() =>{
        await guesstheScorePage.clickBannerImageupload()
        await page.waitForTimeout(2000)
        await guesstheScorePage.Imageuploader()

        await page.waitForTimeout(4000)
    })
})  
test("0013GTS-006 |test editor section functionalities.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)
        // await guesstheScorePage.clickGameDesign()
        // await page.waitForTimeout(5000)

    })
    await test.step("open test editor section in game design",async() =>{
        await guesstheScorePage.clickGameDesign()
        await guesstheScorePage.opendialogs()
    })
    await test.step("validate incorrect text editor sanity", async() =>{
        await guesstheScorePage.selectincorrecguessfont()
        await guesstheScorePage.selectarialfontincorrectguess()
        await guesstheScorePage.selectincorrectguessblockquote()
        await guesstheScorePage.selectH1blockquoteincorrectguess()
        await guesstheScorePage.selectincorrectguessblockquote()
        await guesstheScorePage.selectH2blockquoteincorrectguess()
        await guesstheScorePage.selectincorrectguessblockquote()
        await guesstheScorePage.selectH3blockquoteincorrectguess()
        await guesstheScorePage.selectincorrectguessblockquote()
        await guesstheScorePage.selectH4blockquoteincorrectguess()
        //await guesstheScorePage.typeincorrectguess()
        await guesstheScorePage.clickrightalignedincorrectguess()
        await guesstheScorePage.clickboldincorrectguesseditor()
        await guesstheScorePage.clickitalicincorrectguesseditor()
        await guesstheScorePage.clickitalicincorrectguesseditor()
        await guesstheScorePage.clickleftalignedincorrectguess()
        await guesstheScorePage.clickorderedincorrectguesseditor()
        await guesstheScorePage.clickorderedincorrectguesseditor()
        

        
    })
    await test.step("validate In-Gate Header sanity",async() =>{
        // await page.waitForTimeout(1000)
        await guesstheScorePage.selectingatefont()
        await guesstheScorePage.selectarialfontingate()
        await guesstheScorePage.selectingatetguessblockquote()
        await guesstheScorePage.selectH1blockquoteincorrectguess()
        await guesstheScorePage.selectingatetguessblockquote()
        await guesstheScorePage.selectH2blockquoteincorrectguess()
        await guesstheScorePage.selectingatetguessblockquote()
        await guesstheScorePage.selectH3blockquoteincorrectguess()
        await guesstheScorePage.selectingatetguessblockquote()
        await guesstheScorePage.selectH4blockquoteincorrectguess()
       // await guesstheScorePage.typeingateheader()
        await guesstheScorePage.clickrightalignedingateheader()
        await guesstheScorePage.clickboldingateheadereditor()
        await guesstheScorePage.clickitalicingateheadereditor()
        await guesstheScorePage.clickunderlineingateheadereditor()
        await guesstheScorePage.clickleftalignedingateheader()
    })
    await test.step("validate correct guess text editor sanity", async() =>{
        // await page.waitForTimeout(1000)
        //await guesstheScorePage.typecorrectguess()
        await guesstheScorePage.clickrightalignedcorrectguess()
        await guesstheScorePage.clickleftalignedcorrectguess()
        await guesstheScorePage.clickboldcorrectguesseditor()
        await guesstheScorePage.clickitaliccorrectguesseditor()
        await guesstheScorePage.clickorderedcorrectguesseditor()
        await guesstheScorePage.clickunderlinecorrectguesseditor()
        await guesstheScorePage.clickunorderedcorrectguesseditor()
        await guesstheScorePage.clickunorderedcorrectguesseditor()
    })
    await test.step("validate riding header sanity", async() =>{
        // await page.waitForTimeout(1000)
        //await guesstheScorePage.typeridingheader()
        await guesstheScorePage.clickrightalignedridingheader()
        await guesstheScorePage.clickboldridingheadereditor()
        await guesstheScorePage.clickitalicridingheadereditor()
        await guesstheScorePage.clickleftalignedridingheader()
        await guesstheScorePage.clickunderlineridingheadereditor()
        await guesstheScorePage.clickorderedridingheadereditor()
        await guesstheScorePage.clickunorderedridingheadereditor()
        await guesstheScorePage.clickunorderedridingheadereditor()
    })
    await test.step("validate close guess text editor sanity", async() =>{
        // await page.waitForTimeout(1000)
        //await guesstheScorePage.typecloseguess()
        await guesstheScorePage.clickorderedcloseguesseditor()
        await guesstheScorePage.clickunorderedcloseguesseditor()
        await guesstheScorePage.clickboldcloseguesseditor()
        await guesstheScorePage.clickitaliccloseguesseditor()
        await guesstheScorePage.clickrightalignedcloseguess()
        await guesstheScorePage.clickleftalignedcloseguess()  
        await guesstheScorePage.clickunderlinecloseguesseditor()
        await guesstheScorePage.clickunorderedcloseguesseditor()
        // await page.waitForTimeout(1000)
    })
    await test.step("validate scoring header sanity", async() =>{
        // await page.waitForTimeout(1000)
       // await guesstheScorePage.typescoringheader()
        await guesstheScorePage.clickorderedscoringeditor()
        await guesstheScorePage.clickunorderedscoringseditor()
        await guesstheScorePage.clickboldscoringeditor()
        await guesstheScorePage.clickitalicscoringeditor()
        await guesstheScorePage.clickrightalignedscoring()
        await guesstheScorePage.clickleftalignedscoring()
        await guesstheScorePage.clickunorderedscoringseditor()
        // await page.waitForTimeout(1000)
    })
    await test.step("validate Far guess text editor sanity", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.typefarguess()
        await page.waitForTimeout(1000)
    })
    await test.step("validate Re-ride header sanity", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.typeRerideheader()
        await page.waitForTimeout(1000)
    })
    await test.step("validate no score editor sanity", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.typenoscore()
        await page.waitForTimeout(1000)
    })
    await test.step("validate standby message text editor sanity", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.typestandbymessage()
        await page.waitForTimeout(1000)
    })

})
test("0013GTS-007 |validate game settings option is working.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game settings of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await guesstheScorePage.clickgamesettings()
        await page.waitForTimeout(1000)

    })
    await test.step("validate scores section is working",async ()=>{
        await guesstheScorePage.typecorrectguesscore()
        await guesstheScorePage.typecloseguesscore()
        await guesstheScorePage.typefarguessscore()
        await guesstheScorePage.typeincorrectguesscore()
    })
    await test.step("validate times section is working",async ()=>{
        await guesstheScorePage.typeguesstime()
    })
})
test.skip("0013GTS-009 |validate edit and delete section is working",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land on guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)
        // await guesstheScorePage.clickGameDesign()
        // await page.waitForTimeout(5000)

    })
    await test.step("validate edit option is working", async()=>{
        await guesstheScorePage.clickeditsection()
        await guesstheScorePage.editconfigname()
        await guesstheScorePage.clickeditbutton()
    })

    await test.step("validate delete section is working", async() =>{
        await guesstheScorePage.clickdeletesection()
        await guesstheScorePage.clickdeletebutton()
    })
})
test("0013GTS-008 |Validate configurations text is visible.",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land on guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)

    })
    await test.step("Validate configurations text is visible", async()=>{
        await guesstheScorePage.verifyConfigurationsText()
    })
})
test("0013GTS-009 | Validate Plus button is visible.",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land on guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)

    })
    await test.step("Check + button visibility", async()=>{
        await guesstheScorePage.verifyConfigurationsText()
        await guesstheScorePage.verifyPlusBtn()
    })
})
test("0013GTS-010 | Validate add button is visible.",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land on guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)
       

    })
    await test.step("Check Add button visibility", async()=>{
     
        await guesstheScorePage.clickAddNewConfigPlusBtn()
        await guesstheScorePage.verifyAddBtn()

    })
})
test("0013GTS-011 | Validate cancel button is visible.",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land on guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)
       

    })
    await test.step("Check cancel button is visible", async()=>{
     
        await guesstheScorePage.clickAddNewConfigPlusBtn()
        await guesstheScorePage.verifyCancelBtn()

    })
})
test("0013GTS-012 | Validate new configurations text is visible.",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land on guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)
        // await guesstheScorePage.editconfigname()
       

    })
    await test.step("Check new configurations text is visible", async()=>{
     
       // await guesstheScorePage.clickAddNewConfigPlusBtn()
        await guesstheScorePage.verifynewConfigrationText()

    })
})
test("0013GTS-013 | Validate start/live button is visible.",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land on guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)
        await guesstheScorePage.clickGameDesign()
       

    })
    await test.step("Validate start/live button is visible", async()=>{
        await guesstheScorePage.verifyStartBtn()
         await page.waitForTimeout(2000);
        await guesstheScorePage.clickgameStartBtn()
         await page.waitForTimeout(2000);
        await guesstheScorePage.verifyLiveBtn()
        await guesstheScorePage.clickLiveBtn()

    })
})
test("0013GTS-014 |Validate mobile link button is visible.",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land on guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)
       

    })
    await test.step("Validate mobile link button is visible", async()=>{
     
       // await guesstheScorePage.clickAddNewConfigPlusBtn()
       await guesstheScorePage.verifykMobileLinkBtn()
        await guesstheScorePage.clickMobileLinkBtn()
        await page.waitForTimeout(3000)
        await guesstheScorePage.clickCloseBtn()

    })
})
test("0013GTS-015 | Validate mobile link button is working.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)



    })
    await test.step("Validate mobile link button is visible", async()=>{
     
         await guesstheScorePage.clickMobileLinkBtn()
         await page.waitForTimeout(3000)
         await guesstheScorePage.clickCloseBtn()
 
     })
   
    
})
test("0013GTS-016 | Validate Mobile link Text is visible.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)



    })
    await test.step("Validate Mobile link Text is visible", async () => {

        await guesstheScorePage.clickMobileLinkBtn()
        await guesstheScorePage.verifyMobileLinkText()
        

})
   
    
})

test("0013GTS-017 | Validate Open link button is working.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)



    })
    let newTab=null;
    let newguessthescoregame :guesstheScoreMobilePage
    await test.step("Validate Game Open Section Functionality", async () => {

            //click Mobile Link Btn
            await guesstheScorePage.clickMobileLinkBtn()
            //now click on open button
            newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
            newguessthescoregame = new guesstheScoreMobilePage(newTab)

    })
    await guesstheScorePage.clickCloseBtn()
   
    
})
test("0013GTS-018 | Validate Copy Link button is working.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
    await test.step('validate click on the copy link button is working',async()=>{
        await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)

        //click Mobile Link Btn
        await guesstheScorePage.clickMobileLinkBtn()

        //
        await guesstheScorePage.clickMobileLinkCopyBtn()
})

    await test.step('now close the copy link modal', async() =>{
        await guesstheScorePage.clickCloseBtn()
})
                let URL = '';

      await test.step("now copy the contents from system clipboard(URL Here)", async() =>{
        URL = clipboard.readSync();
        console.log(URL);
})


await test.step('now open new page with copied URL',async()=>{
        const newguessthescore = new guesstheScoreMobilePage(page)
        await newguessthescore.GoTo(URL)   
})
})
test("0013GTS-019 | Validate close button is working.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)

    })
    await test.step("Validate close button is working", async()=>{
         await guesstheScorePage.clickMobileLinkBtn()
         await page.waitForTimeout(2000)
         await guesstheScorePage.clickCloseBtn()
 
     })
   
    
})

test("0013GTS-020 | Validate analytics settings is visible.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)



    })
   await test.step("Validate analytics settings is visible",async()=>{
      await guesstheScorePage.verifyAnalyticsText()
      await guesstheScorePage.clickAnalyticsSection()
      await guesstheScorePage.verifyDateText()
      await guesstheScorePage.verifyQRScsnsText()
      await guesstheScorePage.verifyTotalPlayersText()
      await guesstheScorePage.verifyUniqueUsersPlayedText()
      await guesstheScorePage.verifyReturningUsersText()
      await guesstheScorePage.verifyTotalTimePlayedText()
      await guesstheScorePage.verifyActionText()
      
       
   })


   
    
})
test("0013GTS-021 | Validate mobile QR code text visibility.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)

    })
    await test.step("Validate QR Code text", async()=>{
        await guesstheScorePage.verifyConfigurationsText()
        await guesstheScorePage.clickMobileLinkBtn()
        await guesstheScorePage.verifyMobileLinkText()
         await guesstheScorePage.verifySaveQRCodeText()
         
 
     })
   
    
})

// test("0013GTS-024 | Validate Copy Link button is working", async ({ prizeDropPage, page,browser}) => {

    
//                 await page.goto("/admin/#/sign-in");
//                 await page.fill("input[type='text']", "qa-1")
//                 await page.fill("input[type='password']", "mFkTylCDNC")

//                 await Promise.all([
//                         page.waitForNavigation(),
//                         page.click("button:has-text('Login')")
//                 ])


//                 await test.step('validate click on the copy link button is working',async()=>{
//                         await prizeDropPage.clickPrizeDropSection()

//                         //click Mobile Link Btn
//                         await prizeDropPage.clickMobileLinkBtn()
        
//                         //
//                         await prizeDropPage.clickMobileLinkCopyBtn()
//                 })

//                 await test.step('now close the copy link modal', async() =>{
//                         await prizeDropPage.click_closebutton_in_mobilelinkmodal()
//                 })
//                 let URL = '';

//                 await test.step("now copy the contents from system clipboard(URL Here)", async() =>{
//                         URL = clipboard.readSync();
//                 })
//                 // await page.waitForTimeout(20000)

                 
//                 // console.log('From clipboard: ' + text);
//                 // await page.frameLocator('iframe').locator("//button[text()='Copy Link']").click({ force: true })

//                 ;
                
//                 await test.step('now open new page with copied URL',async()=>{
//                         const newprizedropgame = new guesstheScoreMobilePage(page)

                
//                         await newprizedropgame.GoTo(URL)   
//                 })
//                 // console.log('From clipboard URL: ' + url);
//                 // const newPage = await page.context().newPage();
//                 // await newPage.goto(url);
//                 // console.log("Title from new tab: " + await newPage.title());

//})

test("0023GTS-022 | Validate save QR code is working.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)
            await guesstheScorePage.clickGameDesign()



    })
    await test.step("Click mobile link button",async()=>{
        await guesstheScorePage.clickMobileLinkBtn()
    })
    await test.step("Working Save QR Code",async()=>{
        await guesstheScorePage.validateSaveQRCode()
        await page.waitForTimeout(1000)
    })


   
    
})
test("0013GTS-023 | Validate Copy QR code is working.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)



    })
    await test.step("Click mobile link button",async()=>{
        await guesstheScorePage.clickMobileLinkBtn()
    })
    await test.step("Validate Save QR Code text",async()=>{
        await guesstheScorePage.verifyCopyQRCodeText()
    })
    await test.step("validate copy QR code section is working", async ()=>{
        await  guesstheScorePage.clickQRcodecopybtn()
        const newtab = browser.contexts()[0].newPage();
        (await newtab).goto('https://qr-code-scanner.net/')
        await (await newtab).locator('//a[@title="Scan QR code from paste"]').click()
        await (await newtab).locator('//button[text()="Paste"]').click()
})

})
// test("0013GTS-027 | Validate game design settings is visible",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
//     await test.step("Login Admin And land on guess the score", async () => {

//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')

//         const screenshot = await page.screenshot();
//         await testInfo.attach("login screenshot", {
//                 contentType: "image/png",
//                 body: screenshot
//         })

//         await guesstheScorePage.clickGuessTheScoreSection()
//         await page.waitForTimeout(2000)

//     })
//     await test.step("Click game design", async()=>{
//         await guesstheScorePage.clickGameDesign()
//     })
//     await test.step("Validate Fonts setting visibility",async()=>{
        
//         await guesstheScorePage.verifyOpenFontsSection()
//         await guesstheScorePage.openfontsection()
//         await guesstheScorePage.verifyFontsText()
//         await guesstheScorePage.verifyUploadFontText()
//         await guesstheScorePage.verifyUploadFontsBtn()
//     })
//     await test.step("Validate Colors setting visibility",async()=>{
//         await guesstheScorePage.verifyopencolorssection()
//         await guesstheScorePage.opencolorssection()
//         await guesstheScorePage.verifyColorsBackgroundText()
//         //await guesstheScorePage.verifyColorsText()
//         await guesstheScorePage.verifyColorsHeaderText()
//         await guesstheScorePage.verifyColorsButtonsText()
//         await guesstheScorePage.verifyColorsMainboardBackgroundText()
//         await guesstheScorePage.verifyColorsEventTitleFontText()
//         await guesstheScorePage.verifyColorsTimerCircleText()
//         await guesstheScorePage.verifyColorsWoodText()
//         await guesstheScorePage.verifyColorsGameplayScoreText()
//         await guesstheScorePage.verifyColorsTimerBackgroundText()
//     })
//     await test.step("Validate Mobile Upload Image is Visible",async()=>{
//         await guesstheScorePage.verifyopenImageUploadSection()
//         await guesstheScorePage.openimagesection()
//         await guesstheScorePage.verifyMobileBackgroundText()
//         await guesstheScorePage.verifyuploadMobileBackgroundImageBtn()
//         await guesstheScorePage.verifyGameTitleLogoText()
//         await guesstheScorePage.verifyGameTitleLogoUploadBtn()
//         await guesstheScorePage.verifySponsorLogoText()
//         await guesstheScorePage.verifySponsorLogoUploadBtn()


//     })


// })
test("0013GTS-024 | Validate Game settings is visible.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)

    })
    await test.step("Validate Game settings all text visible", async()=>{
         await guesstheScorePage.verifyGameSettingsText()
         await guesstheScorePage.clickGameSettings()
         await guesstheScorePage.verifyScoreText()
         await guesstheScorePage.verifyCorrectGuessText()
         await guesstheScorePage.verifyCloseGuessText()
         await guesstheScorePage.verifyFarGuessText()
         await guesstheScorePage.verifyIncorrectGuessText()
         await guesstheScorePage.verifyGuessTimeText()
     })
     await test.step("Validate Game settings all input field is visible", async()=>{
        await guesstheScorePage.inputCorrectGuessScore()
        await guesstheScorePage.inputcloseGuessScore()
        await guesstheScorePage.inputFarGuessScore()
        await guesstheScorePage.inputInorrectGuessScore()
        await guesstheScorePage.inputGuessTime()
    })
   
    
})
test("0013GTS-025 | Validate game status on mobile if start /live button is clicked.", async ({ loginPage, tugOfWarPage, guesstheScorePage, functions, page, }, testInfo) => {

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
            await guesstheScorePage.clickGuessTheScoreSection()
              //await page.waitForTimeout(2000)



    })
           await guesstheScorePage.clickGameDesign()

            await guesstheScorePage.clickgameStartBtn()

    let newTab=null;
    let newguessthescoregame :guesstheScoreMobilePage
    await test.step("Validate Game Open Section Functionality", async () => {

            //click Mobile Link Btn
            await guesstheScorePage.clickMobileLinkBtn()
            await page.waitForTimeout(1000)
            //now click on open button
            newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
            newguessthescoregame = new guesstheScoreMobilePage(newTab)
            await page.waitForTimeout(3000)

    })
    await test.step("validate form fields are visible",async() =>{
            await newguessthescoregame.lookforphonenoinform()
            await newguessthescoregame.lookforBirthdateinform()
            await newguessthescoregame.lookforEmailinform()
            await newguessthescoregame.lookforZipinform()
            await newguessthescoregame.lookforEmailinform()
    })

    await test.step("provide values in form field", async() =>{
            await newguessthescoregame.typephoneno()
            await newguessthescoregame.selectbirthdate()
            await newguessthescoregame.typeAge()
            await newguessthescoregame.typeemail()
            await newguessthescoregame.typezip()
    })
    await guesstheScorePage.clickCloseBtn()
    await guesstheScorePage.clickLiveBtn()
})
test("0013GTS-026 | Validate opacity slider is visible in color picker.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)



    })
    await test.step("Click Open ColorSection",async()=>{
        await guesstheScorePage.opencolorssection()
    })
    await test.step("Click ",async()=>{
        await guesstheScorePage.clickBackgroundColorPicker()
    })
    await test.step("Validate opacity slider is visible in color picker",async()=>{
        await guesstheScorePage.verifyOpacitySlider()
    })


   
    
})
test("0013GTS-027 | Validate swatches section is visible in color picker.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)



    })
    await test.step("Click Open ColorSection",async()=>{
        await guesstheScorePage.opencolorssection()
    })
    await test.step("Click Background Color Picker Button",async()=>{
        await guesstheScorePage.clickBackgroundColorPicker()
    })
    await test.step("Validate swatches section is visible in color picker",async()=>{
        await guesstheScorePage.verifySwatchesText()
    })


   
    
})
test("0013GTS-028 | Validate color picker header text is visible.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)



    })
    await test.step("Click Open ColorSection",async()=>{
        await guesstheScorePage.opencolorssection()
    })
    await test.step("Click Background Color Picker Button",async()=>{
        await guesstheScorePage.clickBackgroundColorPicker()
    })
    await test.step("Validate color picker header text is visible",async()=>{
        await guesstheScorePage.verifyColorPickerText()
    })


   
    
})
test("0013GTS-029 | Validate + button is visible in color picker.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)



    })
    await test.step("Click Open ColorSection",async()=>{
        await guesstheScorePage.opencolorssection()
    })
    await test.step("Click Background Color Picker Button",async()=>{
        await guesstheScorePage.clickBackgroundColorPicker()
    })
    await test.step("Validate + button is visible in color picker",async()=>{
        await guesstheScorePage.verifyPlusBtnInColorPicker()
    })


   
    
})
test("0013GTS-030 | Validate RGB sections are visible in color picker.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)
            await guesstheScorePage.clickGameDesign()



    })
    await test.step("Click Open ColorSection",async()=>{
        await guesstheScorePage.opencolorssection()
    })
    await test.step("Click Background Color Picker Button",async()=>{
        await guesstheScorePage.clickBackgroundColorPicker()
    })
    await test.step("Validate RGB sections are visible in color picker",async()=>{
        await guesstheScorePage.verifyRGBText()
        await guesstheScorePage.verifyRGBFirstColorInputField()
        await guesstheScorePage.verifyRGBSecondColorInputField()
        await guesstheScorePage.verifyRGBThirdColorInputField()
        await guesstheScorePage.verifyRGBOpacityColorInputField()
        await guesstheScorePage.verifyRGBHexColorInputField()

        await guesstheScorePage.selectColorNumberFive()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })


   
    
})
test("0013GTS-032 |Validate background color change is visible on mobile screen.",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land on guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)
       

    })

    await test.step("now click on start button on Admin site", async() =>{
        await guesstheScorePage.clickGameDesign()
})
await test.step("Open Image Upload Section",async()=>{
    await guesstheScorePage.openimagesection()
    await guesstheScorePage.deleteUploadedMobileBackground()
    await guesstheScorePage.deleteUploadedSponsorLogo()
    await guesstheScorePage.deleteUploadedGameTitleLogo()
    await guesstheScorePage.deleteUploadedMobileBackground()

})

let newTab=null;
let newguessthescoregame :guesstheScoreMobilePage

await test.step("now open the game in mobile view", async() =>{
      
          //click Mobile Link Btn
        await guesstheScorePage.clickMobileLinkBtn()
         //now click on open button
        newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
        newguessthescoregame = new guesstheScoreMobilePage(newTab)
      

await test.step("provide values in form field of mobile view and submit", async() =>{
        await newguessthescoregame.typephoneno()
        await newguessthescoregame.selectbirthdate()
        await newguessthescoregame.typeAge()
        await newguessthescoregame.typeemail()
        await newguessthescoregame.typezip()
        await newguessthescoregame.clicksubmit()
})
await test.step("validate Admin can change background color change is visible on mobile screen",async() =>{
    //verify Text Color Text
   //await guesstheScorePage.verifyTextColorsText()

    //click Text Color Picker
    //await guesstheScorePage.clickColorPickerSaveBtn()
    await guesstheScorePage.clickCloseBtn()
})
    await guesstheScorePage.opencolorssection()
     await page.waitForTimeout(1000)
     await guesstheScorePage.clickBackgroundColorPicker()
     await page.waitForTimeout(1000)
    

    //input Text RGR First Color
    await guesstheScorePage.inputRGBFirstColor()

    //input Text RGR Second Color
    await guesstheScorePage.inputRGBSecondColor()

    //input Text RGR Third Color
    await guesstheScorePage.inputRGBThirdColor()

    //input Text RGR Four Color
    await guesstheScorePage.inputRGBColorOpacity()

    //input Text RGR Five Color
    await guesstheScorePage.inputRGBColorHex()

    //click Color Picker SaveBtn
    await guesstheScorePage.clickColorPickerSaveBtn()
     await page.waitForTimeout(3000)
})       
await test.step("now validate background color change is visible on mobile screen",async () =>{
    await newguessthescoregame.waitforelementLoad()
    await newguessthescoregame.verifyBackgroundColorUpdatedSuccessfully()
})
    // await guesstheScorePage.clickLiveBtn()
    // await guesstheScorePage.clicksLiveGameOkBtn()
})
test("0013GTS-037 |validate error if Add New Configuration is clicked without name provided.", async ({ loginPage,  guesstheScorePage,  page, }, testInfo) => {


    await test.step("Login Admin And land on guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)
       

    })
    await test.step("validate error if Add New Configuration is clicked without name provided", async () => {


            //click Prize Drop Section
            await guesstheScorePage.clickGuessTheScoreSection()
            const screenshot = await page.screenshot();
            await testInfo.attach("click Prize Drop Section", {
                    body:screenshot,
                    contentType: "image/png",
            })
             //click Add New Config Plus Btn
             await guesstheScorePage.clickAddNewConfigPlusBtn()

            //click Add Btn
            await guesstheScorePage.clickAddBtn()
            // validate error message visiblity

            //await guesstheScorePage.verifyerrorvisiblity()

            // click cancel button
            //await guesstheScorePage.clickokbuttonerror()
            //await guesstheScorePage.clickCancelBtn()
            
    })
})
test.skip("0013GTS-038 | Validate error if wrong file is selected as background image.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
    await test.step("Open Image Upload Section",async()=>{
        await guesstheScorePage.clickGameDesign()
        //await guesstheScorePage.verifyopenImageUploadSection()
        await guesstheScorePage.openimagesection()
        await guesstheScorePage.deleteUploadedMobileBackground()
        await guesstheScorePage.deleteUploadedSponsorLogo()
        await guesstheScorePage.deleteUploadedGameTitleLogo()
        await guesstheScorePage.deleteUploadedMobileBackground()

    })

    await test.step("Open Image Upload Section",async()=>{
        //await guesstheScorePage.clickGameDesign()
        await guesstheScorePage.verifyopenImageUploadSection()
        await guesstheScorePage.openimagesection()

    })
  
    await test.step("Validate Banner image upload works", async() =>{
        await guesstheScorePage.clickMobileBackgroundupload()
        await guesstheScorePage.verifyBannerImageText()
        await page.waitForTimeout(2000)
        await guesstheScorePage.ImageuploaderAlert()
        await page.waitForTimeout(1000)
        //await guesstheScorePage.verifyBannerImageUploadSuccessfully()
       // await page.waitForTimeout(2000)
        
    })
   


})
test.skip("0013GTS-039 | Validate error if wrong file is selected as Game Title Logo.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })

    await test.step("Open Image Upload Section",async()=>{
        await guesstheScorePage.clickGameDesign()
        await guesstheScorePage.verifyopenImageUploadSection()
        await guesstheScorePage.openimagesection()

    })
  
    await test.step("Validate Banner image upload works", async() =>{
        await guesstheScorePage.clickGametitlelogoupload()
        await page.waitForTimeout(1000)
        await guesstheScorePage.ImageuploaderAlert()
        await page.waitForTimeout(1000)
        
    })
   


})
test.skip("0013GTS-040 | Validate error if wrong file is selected as Sponsor Logo.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })

    await test.step("Open Image Upload Section",async()=>{
        await guesstheScorePage.clickGameDesign()
        await guesstheScorePage.verifyopenImageUploadSection()
        await guesstheScorePage.openimagesection()

    })
  
    await test.step("Validate Banner image upload works", async() =>{
        await guesstheScorePage.clicksposnorLogoupload()
        await page.waitForTimeout(1000)
        await guesstheScorePage.ImageuploaderAlert()
        await page.waitForTimeout(1000)
        
    })
   


})
test.skip("0013GTS-041 | Validate error if wrong file is selected as Banner Image.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })

    await test.step("Open Image Upload Section",async()=>{
        await guesstheScorePage.clickGameDesign()
        await guesstheScorePage.verifyopenImageUploadSection()
        await guesstheScorePage.openimagesection()

    })
  
    await test.step("Validate Banner image upload works", async() =>{
        await guesstheScorePage.clicksposnorLogoupload()
        await page.waitForTimeout(1000)
        await guesstheScorePage.ImageuploaderAlert()
        await page.waitForTimeout(1000)
        
    })
   


})
test("0013GTS-042 | validate  Background image upload works.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
    await test.step("Open Image Upload Section",async()=>{
        await guesstheScorePage.clickGameDesign()
        //await guesstheScorePage.verifyopenImageUploadSection()
        await guesstheScorePage.openimagesection()
        await guesstheScorePage.deleteUploadedMobileBackground()
        await guesstheScorePage.deleteUploadedBannerImage()
        await guesstheScorePage.deleteUploadedSponsorLogo()
        await guesstheScorePage.deleteUploadedGameTitleLogo()
        

    })

   

    await test.step("Background image  logo upload works", async() =>{
        await guesstheScorePage.clickMobileBackgroundupload()
        await functions.portraitBackgroundImageUploadHelper()
        await functions.fileUploadCropper()  
        await guesstheScorePage.verifyMobileBackgroundTexts()      
        await guesstheScorePage.verifyProtraitBackgroundImageUploadSuccessfully()

    })
  
}) 
test("0013GTS-043 | validate Game Title Logo upload works.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })

    await test.step("Open Image Upload Section",async()=>{
        await guesstheScorePage.clickGameDesign()
        await guesstheScorePage.verifyopenImageUploadSection()
        await guesstheScorePage.openimagesection()

    })
  
    await test.step("Game title logo upload works", async() =>{
        await guesstheScorePage.clickGametitlelogoupload()
        await page.waitForTimeout(2000)
        await guesstheScorePage.verifyGameTitleLogoText()
        await guesstheScorePage.GametitleImageuploader()
        await page.waitForTimeout(4000)
        await guesstheScorePage.verifyGameTitleLogoUploadSuccessfully()
    })
   
})
test("0013GTS-044 | validate Sponsor Logo upload works.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })

    await test.step("Open Image Upload Section",async()=>{
        await guesstheScorePage.clickGameDesign()
        await guesstheScorePage.verifyopenImageUploadSection()
        await guesstheScorePage.openimagesection()
        

    })
  
    await test.step("Sponsor Logo upload works", async() =>{
        await guesstheScorePage.clicksposnorLogoupload()
        await page.waitForTimeout(2000)
        await guesstheScorePage.verifySponsorLogoText()
        await guesstheScorePage.SponsorImageuploader()
        await page.waitForTimeout(4000)
        await guesstheScorePage.verifySponsorLogoUploadSuccessfully()
        await page.waitForTimeout(2000)
    })
   
}) 
test("0013GTS-045 | Validate Banner Image upload works.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })

    await test.step("Open Image Upload Section",async()=>{
        await guesstheScorePage.clickGameDesign()
        await guesstheScorePage.verifyopenImageUploadSection()
        await guesstheScorePage.openimagesection()

    })
  
    await test.step("Validate Banner image upload works", async() =>{
        await guesstheScorePage.clickBannerImageupload()
        await guesstheScorePage.verifyBannerImageText()
        await page.waitForTimeout(2000)
        await guesstheScorePage.BannerImageuploader()
        await page.waitForTimeout(5000)
        
    })
   
}) 
test("0013GTS-046 | Validate Protrait Background image upload change is being reflected on mobile screen.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })

            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(1000)

    })
       
        let newTab=null;
       let newguessthescoregame :guesstheScoreMobilePage
    await test.step("now open the game in mobile view", async() =>{
            await guesstheScorePage.clickGameDesign()
            await guesstheScorePage.clickMobileLinkBtn()     
            //now click on open button
            newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
            newguessthescoregame = new guesstheScoreMobilePage(newTab)
            await guesstheScorePage.clickCloseBtn()
            //await newTab.waitForTimeout(4000)
            await newguessthescoregame.typephoneno()
            await newguessthescoregame.typeemail()
            await newguessthescoregame.selectbirthdate()
            await newguessthescoregame.typeAge()
            await newguessthescoregame.typezip()
            await newguessthescoregame.clicksubmit()
            await newTab.waitForTimeout(4000)
            //await newguessthescoregame.clcikHomePageInMobileScreen()
            // const before = newTab.screenshot({ path: 'testData/before.png' , fullPage: true })
            //newTab.close()
      })
      await test.step("Now check the screenshot",async()=>{
         await newguessthescoregame.screenshot_matcher_backgroundimage()
      })

})
 
test("0013GTS-047 | Validate game title Image upload change is being reflected on mobile screen.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })

            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(1000)

    })
    
       
        let newTab=null;
       let newguessthescoregame :guesstheScoreMobilePage
    await test.step("now open the game in mobile view", async() =>{
           await guesstheScorePage.clickGameDesign()
            await guesstheScorePage.clickMobileLinkBtn()     
            //now click on open button
            newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
            newguessthescoregame = new guesstheScoreMobilePage(newTab)
            await guesstheScorePage.clickCloseBtn()
            //await newTab.waitForTimeout(4000)
            await newguessthescoregame.typephoneno()
            await newguessthescoregame.typeemail()
            await newguessthescoregame.selectbirthdate()
            await newguessthescoregame.typeAge()
            await newguessthescoregame.typezip()
            await newguessthescoregame.clicksubmit()
            await newTab.waitForTimeout(4000)
            // const before = newTab.screenshot({ path: 'testData/before.png' , fullPage: true })
            //newTab.close()
      })
      await test.step("Now check the screenshot",async()=>{
         await newguessthescoregame.waitforelementLoad()
         await newguessthescoregame.screenshot_matcher_gametitlelogo()
      })

})

test("0013GTS-048 | Validate sponsor  Image upload change is being reflected on mobile screen.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })

            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(1000)

    })
    // await test.step("Now create an event",async()=>{
    //     await guesstheScorePage.clickgameoperationssection()
    //     await guesstheScorePage.clickaddeventbutton()
    //     await guesstheScorePage.typetestevent()
    //     await guesstheScorePage.clickAddBtn()
    // })
    
        let newTab=null;
       let newguessthescoregame :guesstheScoreMobilePage
    await test.step("now open the game in mobile view", async() =>{
          await guesstheScorePage.clickGameDesign()
            await guesstheScorePage.clickMobileLinkBtn()     
            //now click on open button
            newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
            newguessthescoregame = new guesstheScoreMobilePage(newTab)
            await guesstheScorePage.clickCloseBtn()
            //await newTab.waitForTimeout(4000)
            await newguessthescoregame.typephoneno()
            await newguessthescoregame.typeemail()
            await newguessthescoregame.selectbirthdate()
            await newguessthescoregame.typeAge()
            await newguessthescoregame.typezip()
            await newguessthescoregame.clicksubmit()
           await newTab.waitForTimeout(4000)
            // const before = newTab.screenshot({ path: 'testData/before.png' , fullPage: true })
            //newTab.close()
      })
         await test.step("Now check the screenshot",async()=>{
         await newguessthescoregame.waitforelementLoad()
         await newguessthescoregame.clickTodaysLineUpBtn()
         await page.waitForTimeout(1000)
        //  await newguessthescoregame.clickCurrentEventBtn()
        //  await page.waitForTimeout(2000)
         await newguessthescoregame.screenshot_matcher_sponsorlogo()
      })

})
test("0013GTS-049 | Validate Banner  Image upload change is being reflected on mobile screen.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })

            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(1000)

    })
    
       
        let newTab=null;
       let newguessthescoregame :guesstheScoreMobilePage
    await test.step("now open the game in mobile view", async() =>{
          await guesstheScorePage.clickGameDesign()
            await guesstheScorePage.clickMobileLinkBtn()     
            //now click on open button
            newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
            newguessthescoregame = new guesstheScoreMobilePage(newTab)
            await guesstheScorePage.clickCloseBtn()
           // await newTab.waitForTimeout(4000)
            await newguessthescoregame.typephoneno()
            await newguessthescoregame.typeemail()
            await newguessthescoregame.selectbirthdate()
            await newguessthescoregame.typeAge()
            await newguessthescoregame.typezip()
            await newguessthescoregame.clicksubmit()
           await newTab.waitForTimeout(4000)
            // const before = newTab.screenshot({ path: 'testData/before.png' , fullPage: true })
            //newTab.close()
      })
         await test.step("Now check the screenshot",async()=>{
         await newguessthescoregame.waitforelementLoad()
         await page.waitForTimeout(1000)
         await newguessthescoregame.screenshot_matcher_bannerimage()
      })

})
test("0013GTS-031 |Validate swatches change visible on mobile screen.",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land on guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)
       

    })
    await test.step("Now click swatches color plus button",async()=>{
        await guesstheScorePage.clickGameDesign()
        await guesstheScorePage.opencolorssection()
        await guesstheScorePage.clickbuttoncolorpicker()
        await guesstheScorePage.clickplusbuttonswatches()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })

   
let newTab=null;
let newguessthescoregame :guesstheScoreMobilePage

await test.step("now open the game in mobile view", async() =>{
      
          //click Mobile Link Btn
        await guesstheScorePage.clickMobileLinkBtn()
         //now click on open button
        newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
        newguessthescoregame = new guesstheScoreMobilePage(newTab)
       //await guesstheScorePage.click_closebutton_in_mobilelinkmodal()
      
    })
await test.step("provide values in form field of mobile view and submit", async() =>{
        await newguessthescoregame.typephoneno()
        await newguessthescoregame.selectbirthdate()
        await newguessthescoregame.typeAge()
        await newguessthescoregame.typeemail()
        await newguessthescoregame.typezip()
        await newguessthescoregame.clicksubmit()
        await page.waitForTimeout(3000)
        
})
await test.step("now verify swatches color change on mobile screen",async()=>{
   // await newguessthescoregame.verifySwatchesColorSuccessfullyAppliedInMobileScreen()
    await newguessthescoregame.verifySwatchesColor()
})
    


})
test("0013GTS-034 |Validate Button color successfully change from mobile screen.",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land on guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)
       

    })

    await test.step("now click on start button on Admin site", async() =>{
        await guesstheScorePage.clickGameDesign()
        
await test.step("validate Admin can change background color change is visible on mobile screen",async() =>{
    //verify Text Color Text
   //await guesstheScorePage.verifyTextColorsText()

    //click Text Color Picker
    //await guesstheScorePage.clickColorPickerSaveBtn()
    // await guesstheScorePage.clickCloseBtn()
})
    await guesstheScorePage.opencolorssection()
     await page.waitForTimeout(1000)
     await guesstheScorePage.clickbuttoncolorpicker()
     await page.waitForTimeout(2000)
    
     await guesstheScorePage.inputButtonColor()   
     await page.waitForTimeout(1000)
    //click Color Picker SaveBtn
    await guesstheScorePage.clickColorPickerSaveBtn()
})  
let newTab=null;
let newguessthescoregame :guesstheScoreMobilePage

await test.step("now open the game in mobile view", async() =>{
      
          //click Mobile Link Btn
        await guesstheScorePage.clickMobileLinkBtn()
         //now click on open button
        newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
        newguessthescoregame = new guesstheScoreMobilePage(newTab)
       //await guesstheScorePage.click_closebutton_in_mobilelinkmodal()
       await guesstheScorePage.clickCloseBtn()
      
    })
await test.step("provide values in form field of mobile view and submit", async() =>{
        await newguessthescoregame.typephoneno()
        await newguessthescoregame.selectbirthdate()
        await newguessthescoregame.typeAge()
        await newguessthescoregame.typeemail()
        await newguessthescoregame.typezip()
        await newguessthescoregame.clicksubmit()
        await page.waitForTimeout(3000)
        
})     
    await test.step("Now verify button color change on mobile screen",async()=>{
       //await newguessthescoregame.verifyButtonColorSuccessfullyAppliedInMobileScreen()
       await newguessthescoregame.verifyButtonColor()
    })

})

test("0013GTS-035 | Validate Wood Color Input From Admin Side.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)
            await guesstheScorePage.clickGameDesign()



    })
    await test.step("Click Open ColorSection",async()=>{
        await guesstheScorePage.opencolorssection()
    })
    await test.step("Click Background Color Picker Button",async()=>{
        await guesstheScorePage.clickwoodcolorpicker()
    })
    await test.step("Validate RGB sections are visible in color picker",async()=>{
        await guesstheScorePage.verifyRGBText()
        await guesstheScorePage.verifyRGBFirstColorInputField()
        await guesstheScorePage.verifyRGBSecondColorInputField()
        await guesstheScorePage.verifyRGBThirdColorInputField()
        await guesstheScorePage.verifyRGBOpacityColorInputField()
        await guesstheScorePage.verifyRGBHexColorInputField()

        await guesstheScorePage.selectColorNumberTwo()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })


   
    
})

test("0013GTS-036 |Validate Wood Color Successfully Uploaed In mobile screen.",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land on guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)
       

    })

    await test.step("now click on start button on Admin site", async() =>{
        //await guesstheScorePage.clickGameDesign()
        // await guesstheScorePage.clickStartBtn()

        //await guesstheScorePage.clickStartGameOkBtn()
})
let newTab=null;
let newguessthescoregame :guesstheScoreMobilePage

await test.step("now open the game in mobile view", async() =>{
      
          //click Mobile Link Btn
        await guesstheScorePage.clickMobileLinkBtn()
         //now click on open button
        newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
        newguessthescoregame = new guesstheScoreMobilePage(newTab)
       //await guesstheScorePage.click_closebutton_in_mobilelinkmodal()
      
    })
await test.step("provide values in form field of mobile view and submit", async() =>{
        await newguessthescoregame.typephoneno()
        await newguessthescoregame.selectbirthdate()
        await newguessthescoregame.typeAge()
        await newguessthescoregame.typeemail()
        await newguessthescoregame.typezip()
        await newguessthescoregame.clicksubmit()
        await newguessthescoregame.clcikHomePageInMobileScreen()
        await newguessthescoregame.verifyTodaysLineUpBtnText()
        await newguessthescoregame.verifyWoodColorUpdatedSuccessfully()
        
})
    


})
test("0013GTS-004 | Validate All The Color Input Functionality.", async ({ loginPage, guesstheScorePage, functions, page, }, testInfo) => {
    await test.step("Login Admin And land To guess the score", async () => {

            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
            await guesstheScorePage.clickGuessTheScoreSection()

    })

    await test.step("validate open the color section works", async () =>{
        await guesstheScorePage.clickGameDesign()
        await guesstheScorePage.opencolorssection()
        
    })
   
    await test.step("Validate background Color Input Functionality", async () => {

        await guesstheScorePage.verifyBackgroundColorText()

        await page.waitForTimeout(1000)
        await guesstheScorePage.clickBackgroundColorPicker()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickplusbuttonswatches()
        await guesstheScorePage.inputRGBFirstColor()
        await guesstheScorePage.inputRGBSecondColor()
        await guesstheScorePage.inputRGBThirdColor()
        await guesstheScorePage.inputRGBColorOpacity()
        await guesstheScorePage.inputRGBColorHex()
       // await guesstheScorePage.clickdeletebuttonswatches()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })

    await test.step("Validate Text Color Input Functionality", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.clicktextColorPicker()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickplusbuttonswatches()
        await guesstheScorePage.inputRGBFirstColor()
        await guesstheScorePage.inputRGBSecondColor()
        await guesstheScorePage.inputRGBThirdColor()
        await guesstheScorePage.inputRGBColorOpacity()
        await guesstheScorePage.inputRGBColorHex()
        //await guesstheScorePage.clickdeletebuttonswatches()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })

    await test.step("Validate buttons Color Input Functionality", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickbuttonsColorPicker()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickplusbuttonswatches()
        await guesstheScorePage.inputRGBFirstColor()
        await guesstheScorePage.inputRGBSecondColor()
        await guesstheScorePage.inputRGBThirdColor()
        await guesstheScorePage.inputRGBColorOpacity()
        await guesstheScorePage.inputRGBColorHex()
       // await guesstheScorePage.clickdeletebuttonswatches()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })

    await test.step("Validate Event title font Color Input Functionality", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickEventtitlefontColorPicker()
        await page.waitForTimeout(1000)
       // await guesstheScorePage.clickplusbuttonswatches()
        await guesstheScorePage.inputRGBFirstColor()
        await guesstheScorePage.inputRGBSecondColor()
        await guesstheScorePage.inputRGBThirdColor()
        await guesstheScorePage.inputRGBColorOpacity()
        await guesstheScorePage.inputRGBColorHex()
       // await guesstheScorePage.clickdeletebuttonswatches()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })

    await test.step("Validate timer circle Color Input Functionality", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickTimerCircleColorPicker()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickplusbuttonswatches()
        await guesstheScorePage.inputRGBFirstColor()
        await guesstheScorePage.inputRGBSecondColor()
        await guesstheScorePage.inputRGBThirdColor()
        await guesstheScorePage.inputRGBColorOpacity()
        await guesstheScorePage.inputRGBColorHex()
        //await guesstheScorePage.clickdeletebuttonswatches()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })

    await test.step("Validate wood Color Input Functionality", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.WoodColorPicker()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickplusbuttonswatches()
        await guesstheScorePage.inputRGBFirstColor()
        await guesstheScorePage.inputRGBSecondColor()
        await guesstheScorePage.inputRGBThirdColor()
        await guesstheScorePage.inputRGBColorOpacity()
        await guesstheScorePage.inputRGBColorHex()
        //await guesstheScorePage.clickdeletebuttonswatches()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })

    await test.step("Validate gameplay score text Color Input Functionality", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickgameplayscoretextColorPicker()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickplusbuttonswatches()
        await guesstheScorePage.inputRGBFirstColor()
        await guesstheScorePage.inputRGBSecondColor()
        await guesstheScorePage.inputRGBThirdColor()
        await guesstheScorePage.inputRGBColorOpacity()
        await guesstheScorePage.inputRGBColorHex()
       // await guesstheScorePage.clickdeletebuttonswatches()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })
    
    await test.step("Validate timer background Color Input Functionality", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickTimerBackgroundColorPicker()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickplusbuttonswatches()
        await guesstheScorePage.inputRGBFirstColor()
        await guesstheScorePage.inputRGBSecondColor()
        await guesstheScorePage.inputRGBThirdColor()
        await guesstheScorePage.inputRGBColorOpacity()
        await guesstheScorePage.inputRGBColorHex()
       // await guesstheScorePage.clickdeletebuttonswatches()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })
    
})
test("0013GTS-033 |Validate Text color change is visible on mobile screen.",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land on guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)
       

    })

    await test.step("now input text color Admin site", async() =>{
         await guesstheScorePage.clickGameDesign()


    await guesstheScorePage.opencolorssection()
     await page.waitForTimeout(1000)
     await guesstheScorePage.clicktextColorPicker()
     await page.waitForTimeout(1000)
    
     
    //input Text RGR First Color
    await guesstheScorePage.inputRGBFirstColor()

    //input Text RGR Second Color
    await guesstheScorePage.inputRGBSecondColor()

    //input Text RGR Third Color
    await guesstheScorePage.inputRGBThirdColor()

    //input Text RGR Four Color
    await guesstheScorePage.inputRGBColorOpacity()

    //input Text RGR Five Color
    await guesstheScorePage.inputRGBColorHex()
    
    
    await page.waitForTimeout(2000)
    await guesstheScorePage.verifyColorPickerText()
    await guesstheScorePage.clickRGBFirstColor()
    //click Color Picker SaveBtn
    await guesstheScorePage.clickColorPickerSaveBtn()
    await page.waitForTimeout(2000)
})      
let newTab=null;
let newguessthescoregame :guesstheScoreMobilePage

await test.step("now open the game in mobile view", async() =>{
      
          //click Mobile Link Btn
        await guesstheScorePage.clickMobileLinkBtn()
         //now click on open button
        newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
        newguessthescoregame = new guesstheScoreMobilePage(newTab)
      
})
await test.step("provide values in form field of mobile view and submit", async() =>{
        await newguessthescoregame.typephoneno()
        await newguessthescoregame.selectbirthdate()
        await newguessthescoregame.typeAge()
        await newguessthescoregame.typeemail()
        await newguessthescoregame.typezip()
        await newguessthescoregame.clicksubmit()
}) 
await test.step("now validate text color change is visible on mobile",async () =>{
    await page.waitForTimeout(2000)
    await newguessthescoregame.verifyTextColor()
})
})
test("0013GTS-050 | Validate rider roster tab is visible.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })

    await test.step("Validate rider roster tab is visible",async()=>{
       await guesstheScorePage.verifyriderrosterText()
       await guesstheScorePage.clickriderrostersection()
       await page.waitForTimeout(2000)
       await guesstheScorePage.verifyAllRidersText()
       await guesstheScorePage.verifysearchfield()
       await guesstheScorePage.verifyimportBtn()
       await guesstheScorePage.verifyexportBtn()
       await guesstheScorePage.verifyRowsperpagedropdown()
        

    })
   
}) 
test("0013GTS-051 |validate Rider Roster settings is working.", async({ loginPage, guesstheScorePage, page, functions }, testInfo)=>{
    await test.step("Login Admin And land Rider roster of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)
        await guesstheScorePage.clickriderroster()
        await page.waitForTimeout(1000)

    })

    await test.step("validate add rider settings is working", async ()=>{
        await guesstheScorePage.clickaddriderbutton()
        await guesstheScorePage.addriderfirstname()
        await guesstheScorePage.addriderLastname()
        await guesstheScorePage.clicksaveandclosebutton()
    })
    
    await test.step("validate search option in rider roster is working", async()=>{
        await guesstheScorePage.typesearchinriderroster()
    })

    await test.step('validate import rider button is working', async() =>{
        await guesstheScorePage.Jsonuploader()
    })
    await test.step('validate import rider data from json is loading successfully', async() =>{
        await guesstheScorePage.checksuccessfulupload()
        await guesstheScorePage.clickokafterjsonuplod()
    })
    
    await test.step('validate export rider button is working', async() =>{
        await guesstheScorePage.clickexportbutton()
    })
 
    await test.step("validate edit rider settings are working",async() =>{
        await guesstheScorePage.clickeditriderbutton()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })

    await test.step("validate delete rider is working", async() =>{
        await guesstheScorePage.clickdeleteriderbutton()
        await guesstheScorePage.clickokindeleterider()
    })



})
test("0013GTS-052 | validate game operation settings are working.",async({ loginPage, guesstheScorePage, page, functions }, testInfo)=>{
    await test.step("Login Admin And land game operations of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)
        await guesstheScorePage.clickgameoperationssection()
        await page.waitForTimeout(1000)

    })
    await test.step("validate Add event button is working",async ()=>{
        await guesstheScorePage.clickaddeventbutton()
        await guesstheScorePage.typetestevent()
        await guesstheScorePage.clickaddbutton()
    })

    await test.step("validate add riders button is working", async ()=>{
        await guesstheScorePage.clickaddridersbutton()
        await guesstheScorePage.clickridersadd()
        await guesstheScorePage.clickridersSaveBtn()
        //delete event
        //await guesstheScorePage.clickeventDelete()
    })
})
test("0013GTS-054 | Validate add rider button is working.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
   await test.step("Validate add rider button is working",async()=>{
       await guesstheScorePage.clickriderrostersection()
       await guesstheScorePage.verifyAddRiderText()
       await guesstheScorePage.verifyriderrosteraddBtn()
       await guesstheScorePage.clickriderrosteraddBtn()
       await guesstheScorePage.closeaddriderpopupBtn()
   })

})
test("0013GTS-055 | Validate first name field is typeable.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
   await test.step("Validate first name field is typeable",async()=>{
       await guesstheScorePage.clickriderrostersection()
       await guesstheScorePage.verifyAddRiderText()
       await guesstheScorePage.clickriderrosteraddBtn()
       await guesstheScorePage.verifyRiderFirstName()
       await guesstheScorePage.inputAddRiderFirstName()
       await guesstheScorePage.closeaddriderpopupBtn()
   })

})
test("0013GTS-056 | Validate last name field is typeable.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
   await test.step("Validate last name field is typeable",async()=>{
       await guesstheScorePage.clickriderrostersection()
       await guesstheScorePage.verifyAddRiderText()
       await guesstheScorePage.clickriderrosteraddBtn()
       await guesstheScorePage.verifyRiderLastName()
       await guesstheScorePage.inputAddRiderLastName()
       await guesstheScorePage.closeaddriderpopupBtn()
   })

})
test("0013GTS-057 | Validate save & close button is working.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
   await test.step("Save & close button is working",async()=>{
       await guesstheScorePage.clickriderrostersection()
       await guesstheScorePage.verifyAddRiderText()
       await guesstheScorePage.clickriderrosteraddBtn()
       await guesstheScorePage.inputAddRiderFirstName()
       await guesstheScorePage.inputAddRiderLastName()
       await guesstheScorePage.clicksaveandclosebutton()
   })

})
test("0013GTS-058 | Validate save & Add More is working.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
   await test.step("Save & Add More is working",async()=>{
       await guesstheScorePage.clickriderrostersection()
       await guesstheScorePage.verifyAddRiderText()
       await guesstheScorePage.clickriderrosteraddBtn()
       await guesstheScorePage.inputAddRiderFirstName()
       await guesstheScorePage.inputAddRiderLastName()
       await guesstheScorePage.clicksaveandaddmorebutton()
   })

})
test("0013GTS-059 | Validate error message if save button is clicked without rider firstname.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
   await test.step("Error message if save button is clicked without rider firstname",async()=>{
       await guesstheScorePage.clickriderrostersection()
       await guesstheScorePage.verifyAddRiderText()
       await guesstheScorePage.clickriderrosteraddBtn()
       await guesstheScorePage.inputAddRiderLastName()
       await guesstheScorePage.clicksaveandclosebutton()
       await guesstheScorePage.errorAlertMessage()
   })

})
test("0013GTS-060 | Validate error message if save button is clicked without rider lastname.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
   await test.step("Error message if save button is clicked without rider lastname",async()=>{
       await guesstheScorePage.clickriderrostersection()
       await guesstheScorePage.verifyAddRiderText()
       await guesstheScorePage.clickriderrosteraddBtn()
       await guesstheScorePage.inputAddRiderFirstName()
       await guesstheScorePage.clicksaveandclosebutton()
       await guesstheScorePage.errorAlertMessage()
   })

})
test("0013GTS-053 | Validate rider import functionality.", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(2000)
        await guesstheScorePage.clickriderroster()
    })

    await test.step("Validate rider roster tab is visible",async()=>{
       //await guesstheScorePage.verifyriderrosterText()
       //await guesstheScorePage.clickriderrostersection()
       await page.waitForTimeout(2000)
       await guesstheScorePage.verifyAllRidersText()
       await functions.uploadJsonFile()
       await guesstheScorePage.clickToUploadRider()
       await page.waitForTimeout(5000)

       await guesstheScorePage.verifyimportBtn()
       await page.waitForTimeout(1000)
      // await guesstheScorePage.verifyexportBtn()
        

    })
   
}) 
test("0013GTS-061 | Validate upload avatar is working.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
   await test.step("Upload avatar is working",async()=>{
       await guesstheScorePage.clickriderrostersection()
       await guesstheScorePage.verifyAddRiderText()
       await guesstheScorePage.clickriderrosteraddBtn()
       await guesstheScorePage.verifyUploadAvatarText()
       await guesstheScorePage.Avataruploader()
       await page.waitForTimeout(4000)
       await guesstheScorePage.inputAddRiderFirstName()
       await guesstheScorePage.inputAddRiderLastName()
       await guesstheScorePage.clicksaveandclosebutton()
   })

})
test("0013GTS-062 | Edit rider first name & last name is working.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
   await test.step("Edit rider first name & last name is working",async()=>{
       await guesstheScorePage.clickriderrostersection()
       await guesstheScorePage.verifyAddRiderText()
       //await guesstheScorePage.clickriderrosteraddBtn()
       //await guesstheScorePage.verifyUploadAvatarText()
      // await guesstheScorePage.Avataruploader()
       //await page.waitForTimeout(4000)
       await guesstheScorePage.clickEditRiderBtn()
       await guesstheScorePage.verifyEditRiderText()
       await guesstheScorePage.editRiderfirstname()
       await guesstheScorePage.inputAddRiderFirstName()
       await guesstheScorePage.editRiderlastname()
       await guesstheScorePage.inputAddRiderLastName()
       await guesstheScorePage.clickriderSaveBtn()
   })

})
test.skip("0013GTS-063 | Validate Riders not yet added Text is visible.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(1000)
            await guesstheScorePage.clickGameDesign()

    })

    await test.step("Now click game operation Section", async() =>{
                     

        await guesstheScorePage.clickgameoperationssection() 
    })
     
     await test.step("Now validate Riders not yet added Text is visible.",async()=>{
        await guesstheScorePage.clicktest1Event()
        await guesstheScorePage.verifyriderText()
        await guesstheScorePage.verifyRidersnotyetaddedText()

     })

})
test("0013GTS-064 | Validate event name add button is working.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
   await test.step("Event name add button is working.",async()=>{
       await guesstheScorePage.clickgameoperationssection()
       await guesstheScorePage.verifyAddEventText()
       await guesstheScorePage.clickaddeventbutton()
       await guesstheScorePage.typetestevent()
       await guesstheScorePage.clickaddbutton()
  
      
   })

})
test("0013GTS-065 |Validate event name cancel button is working.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
   await test.step("Event name cancel button is working.",async()=>{
       await guesstheScorePage.clickgameoperationssection()
       await guesstheScorePage.clickaddeventbutton()
       await guesstheScorePage.verifyAddEventText()
       await guesstheScorePage.typetestevent()
       await guesstheScorePage.clickeventCancelBtn()
  
      
   })

})

test("0013GTS-066 | Validate Rename event is working.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
    
   await test.step("Now Rename event is working.",async()=>{
       await guesstheScorePage.clickgameoperationssection()
      
       await page.waitForTimeout(2000)
       await guesstheScorePage.clickeventRename(guesstheScorePage.getRandomName())
   })

})
test("0013GTS-067 |Validate add riders in event save button is working.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
   await test.step("Now add riders save in even",async()=>{
       await guesstheScorePage.clickgameoperationssection()
       await guesstheScorePage.clickaddridersbutton()
       await guesstheScorePage.clickridersadd()
       await guesstheScorePage.clickridersSaveBtn()
      
       
   })

})
test("0023GTS-068 | Validate Please start the event text is visible.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)



    })
    await test.step("Now click Game Operations section",async()=>{
        await guesstheScorePage.clickgameoperationssection()
    })
    await test.step("Validate Please start the event text is visible.",async()=>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.verifyPleasestarttheevent()
        
    })


   
    
})
test("0013GTS-069 |Validate start event is working.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
   await test.step("Now clickStart & clickStop event is working.",async()=>{
       await guesstheScorePage.clickgameoperationssection()
       await guesstheScorePage.clickEventStartBtn()  
       await guesstheScorePage.verifyLiveBtn()
   })
})

test.skip("0013GTS-070 | Validate uploaded avatar is reflected on mobile screen.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(1000)

    })
       
            let newTab=null;
            let newguessthescoregame :guesstheScoreMobilePage
    await test.step("now open the game in mobile view", async() =>{
            await guesstheScorePage.clickGameDesign()
            await guesstheScorePage.clickgameoperationssection()
            await guesstheScorePage.clickeventStart() 
            
               
    await test.step("Now game open in mobile screen",async()=>{

            await guesstheScorePage.clickMobileLinkBtn()
            newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
            newguessthescoregame = new guesstheScoreMobilePage(newTab)
            await guesstheScorePage.clickCloseBtn()
            await newTab.waitForTimeout(4000)
            await newguessthescoregame.typephoneno()
            await newguessthescoregame.typeemail()
            await newguessthescoregame.selectbirthdate()
            await newguessthescoregame.typeAge()
            await newguessthescoregame.typezip()
            await newguessthescoregame.clicksubmit()
            })
            
           // await newTab.waitForTimeout(4000)
            // const before = newTab.screenshot({ path: 'testData/before.png' , fullPage: true })
            //newTab.close()
      })
    await test.step("Now verify the rider avatar screenshot",async()=>{
         await newguessthescoregame.waitforelementLoad()
         await guesstheScorePage.clickMoveToNextBtn() 
         await newguessthescoregame.clickTodaysLineUpBtn()
         await page.waitForTimeout(1000)
         await newguessthescoregame.clickCurrentEventBtn()
         await page.waitForTimeout(1000)
         await guesstheScorePage.clickMoveToNextBtn() 
         await page.waitForTimeout(2000)
         await newguessthescoregame.screenshot_matcher_rider_Avatar()
      })
      await guesstheScorePage.clickeventStop()

})
test("0013GTS-071 | Validate Incorrect guess message reflection on mobile screen.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(1000)
            //await guesstheScorePage.clickGameDesign()
            await guesstheScorePage.clickgameoperationssection() 

    })
    
       
            let newTab=null;
            let newguessthescoregame :guesstheScoreMobilePage
  
    
    await test.step("Now game open in mobile screen",async()=>{

            await guesstheScorePage.clickMobileLinkBtn()
            newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
            newguessthescoregame = new guesstheScoreMobilePage(newTab)
            await guesstheScorePage.clickCloseBtn()
            await newTab.waitForTimeout(4000)
            await newguessthescoregame.typephoneno()
            await newguessthescoregame.typeemail()
            await newguessthescoregame.selectbirthdate()
            await newguessthescoregame.typeAge()
            await newguessthescoregame.typezip()
            await newguessthescoregame.clicksubmit()
            })

            await test.step("now open the game in mobile view", async() =>{
                // await page.bringToFront()                
                // await guesstheScorePage.clickgameoperationssection() 
                // await guesstheScorePage.clickgameoperationssection() 
                //await guesstheScorePage.clickGameOperationAddedEventThreeDot()
                await guesstheScorePage.clickEventStartBtn()        
                await guesstheScorePage.clickMoveToNextBtn()
                await page.waitForTimeout(1000) 
                await guesstheScorePage.clickMoveToNextBtn()
                await page.waitForTimeout(1000) 
                await guesstheScorePage.clickMoveToNextBtn()
                
            })
            
            await test.step("Now game open in mobile screen",async()=>{
                await newguessthescoregame.verifyTodaysLineUpBtnText()
                await newguessthescoregame.clickTodaysLineUpBtn()
                //await newguessthescoregame.clickGameEventTestBtn()
                await newguessthescoregame.clickCurrentEventBtn()
                })
     await test.step("Now Input for Incorrect Guess on mobile screen",async()=>{
                    await page.waitForTimeout(1000)
                    await newguessthescoregame.clickRiderInputField()
                    await page.waitForTimeout(1000)
                    await newguessthescoregame.inputIncorrectRiderScore()
                })
     
     await test.step("Now input rider score admin",async()=>{
        await guesstheScorePage.inputIncorrectRiderScore()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickRiderScoresubmitBtn()

     })
     await test.step("Now validate incorrect guess message on mobile screen",async()=>{
        await page.waitForTimeout(1000)
        await newguessthescoregame.verifyincorrectguessmessage()
        await page.waitForTimeout(1000)

     })
    // await guesstheScorePage.clickeventStop()
    // await test.step("Now verify the rider avatar screenshot",async()=>{
    //      await newguessthescoregame.waitforelementLoad()
    //      await newguessthescoregame.clickTodaysLineUpBtn()
    //      await page.waitForTimeout(2000)
    //      await newguessthescoregame.clickTestBtn()
    //      await page.waitForTimeout(2000)
    //      await guesstheScorePage.clickMoveToNextBtn() 
    //      await page.waitForTimeout(2000)
    //      await newguessthescoregame.screenshot_matcher_rider_Avatar()
    //   })

})
test("0013GTS-072 | Validate scoring header  message reflection on mobile screen.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(1000)

    })
       
            let newTab=null;
            let newguessthescoregame :guesstheScoreMobilePage
    await test.step("now open the game in mobile view", async() =>{
            await guesstheScorePage.clickGameDesign()
            await guesstheScorePage.clickgameoperationssection()
            //await guesstheScorePage.clickeventStart() 
            //await guesstheScorePage.clickMoveToNextBtn() 
               
    await test.step("Now game open in mobile screen",async()=>{

            await guesstheScorePage.clickMobileLinkBtn()
            newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
            newguessthescoregame = new guesstheScoreMobilePage(newTab)
            await guesstheScorePage.clickCloseBtn()
            await newTab.waitForTimeout(4000)
            await newguessthescoregame.typephoneno()
            await newguessthescoregame.typeemail()
            await newguessthescoregame.selectbirthdate()
            await newguessthescoregame.typeAge()
            await newguessthescoregame.typezip()
            await newguessthescoregame.clicksubmit()
            await newguessthescoregame.clickTodaysLineUpBtn()
            await page.waitForTimeout(1000)
            await newguessthescoregame.clickCurrentEventBtn()
            await page.waitForTimeout(1000)
            })
            
           // await newTab.waitForTimeout(4000)
            // const before = newTab.screenshot({ path: 'testData/before.png' , fullPage: true })
            //newTab.close()
      })
     await test.step("Now click start even",async()=>{
        await guesstheScorePage.clickEventStartBtn()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickMoveToNextBtn()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickMoveToNextBtn()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickMoveToNextBtn()
     })
     await test.step("Now input rider score admin",async()=>{
        await page.waitForTimeout(5000)
        await guesstheScorePage.inputRiderScore()
        await guesstheScorePage.clickRiderScoresubmitBtn()
     })
     await test.step("Now validate scoring  heding text on mobile screen",async()=>{
        await newguessthescoregame.verifyscoryhedingText()

     })
})
test("0013GTS-073 | Validate In-Gate header  text reflection on mobile screen.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(1000)

    })
       
            let newTab=null;
            let newguessthescoregame :guesstheScoreMobilePage
            //await guesstheScorePage.clickGameDesign()
            await guesstheScorePage.clickgameoperationssection()
            //await guesstheScorePage.clickeventStart() 
            //await guesstheScorePage.clickMoveToNextBtn() 
               
    await test.step("Now game open in mobile screen",async()=>{

            await guesstheScorePage.clickMobileLinkBtn()
            newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
            newguessthescoregame = new guesstheScoreMobilePage(newTab)
            await guesstheScorePage.clickCloseBtn()
            await newTab.waitForTimeout(4000)
            await newguessthescoregame.typephoneno()
            await newguessthescoregame.typeemail()
            await newguessthescoregame.selectbirthdate()
            await newguessthescoregame.typeAge()
            await newguessthescoregame.typezip()
            await newguessthescoregame.clicksubmit()
            await newguessthescoregame.clickTodaysLineUpBtn()
            await page.waitForTimeout(1000)
            await newguessthescoregame.clickCurrentEventBtn()
            await page.waitForTimeout(1000)
            })
            
           // await newTab.waitForTimeout(4000)
            // const before = newTab.screenshot({ path: 'testData/before.png' , fullPage: true })
            //newTab.close()
    
     await test.step("Now click start event",async()=>{
        await guesstheScorePage.clickEventStartBtn()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickMoveToNextBtn()
     })
     await test.step("Now validate scoring  heding text on mobile screen",async()=>{
        await page.waitForTimeout(2000)
        await newguessthescoregame.verifyingatehedingText()

     })
     //await guesstheScorePage.clickeventStop()


})
test("0013GTS-074 |Validate Riding header  message reflection on mobile screen.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

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
    await guesstheScorePage.clickGuessTheScoreSection()
    await page.waitForTimeout(1000)
    await guesstheScorePage.clickgameoperationssection()
   
        await guesstheScorePage.clickEventStartBtn()
        await guesstheScorePage.clickMoveToNextBtn()
        await guesstheScorePage.clickMoveToNextBtn()
     let newTab=null;
     let newguessthescoregame :guesstheScoreMobilePage
        
await test.step("Now game open in mobile screen",async()=>{
     await guesstheScorePage.clickMobileLinkBtn()
     newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
     newguessthescoregame = new guesstheScoreMobilePage(newTab)
     await guesstheScorePage.clickCloseBtn()
     await newTab.waitForTimeout(4000)
     await newguessthescoregame.typephoneno()
     await newguessthescoregame.typeemail()
     await newguessthescoregame.selectbirthdate()
     await newguessthescoregame.typeAge()
     await newguessthescoregame.typezip()
     await newguessthescoregame.clicksubmit()
     await newguessthescoregame.clickTodaysLineUpBtn()
     await page.waitForTimeout(1000)
     await newguessthescoregame.clickCurrentEventBtn()
     await page.waitForTimeout(1000)
     })
     
    // await newTab.waitForTimeout(4000)
     // const before = newTab.screenshot({ path: 'testData/before.png' , fullPage: true })
     //newTab.close()

     await test.step("Now validate re-ride  hedader text on mobile screen",async()=>{
        await page.waitForTimeout(2000)
        await newguessthescoregame.verifyreriderText()

     })
    await guesstheScorePage.clickLiveBtn()


})
test("0013GTS-075 | Validate Correct guess message reflection on mobile screen.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(1000)
            //await guesstheScorePage.clickGameDesign()

    })
                     

        
       

    
       
            let newTab=null;
            let newguessthescoregame :guesstheScoreMobilePage
  
    
    await test.step("Now game open in mobile screen",async()=>{
            await guesstheScorePage.clickgameoperationssection() 
            await guesstheScorePage.clickMobileLinkBtn()
            newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
            newguessthescoregame = new guesstheScoreMobilePage(newTab)
            await guesstheScorePage.clickCloseBtn()
            await newTab.waitForTimeout(4000)
            await newguessthescoregame.typephoneno()
            await newguessthescoregame.typeemail()
            await newguessthescoregame.selectbirthdate()
            await newguessthescoregame.typeAge()
            await newguessthescoregame.typezip()
            await newguessthescoregame.clicksubmit()
            })

            await test.step("now open the game in mobile view", async() =>{
                await guesstheScorePage.clickEventStartBtn()            
                await guesstheScorePage.clickMoveToNextBtn()
                await guesstheScorePage.clickMoveToNextBtn()
                await guesstheScorePage.clickMoveToNextBtn()
                
            })
            
            await test.step("Now game open in mobile screen",async()=>{
                
                await newguessthescoregame.verifyTodaysLineUpBtnText()
                await newguessthescoregame.clickTodaysLineUpBtn()
                await newguessthescoregame.clickGameEventTestBtn()
                })
    await test.step("Now input for Correct guess on mobile screen",async()=>{
                    await newguessthescoregame.clickRiderInputField()
                    await newguessthescoregame.inputCorrectRiderScore()
                })
     await test.step("Now input rider score admin for correct guess",async()=>{
      
        await guesstheScorePage.inputCorrectRiderScore()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickRiderScoresubmitBtn()

     })
     await test.step("Now validate incorrect guess message on mobile screen",async()=>{
       // await page.waitForTimeout(1000)
        await newguessthescoregame.verifycorrectguessmessage()
        await page.waitForTimeout(4000)
        //await guesstheScorePage.clickeventStop()

     })

})
test("0013GTS-076 | Validate Close guess message reflection on mobile screen.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(1000)

    })

    await test.step("now open the game in mobile view", async() =>{
                     

        await guesstheScorePage.clickgameoperationssection() 
       
        // await guesstheScorePage.clickMoveToNextBtn()
    })
    
       
            let newTab=null;
            let newguessthescoregame :guesstheScoreMobilePage
  
    
    await test.step("Now game open in mobile screen",async()=>{

            await guesstheScorePage.clickMobileLinkBtn()
            newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
            newguessthescoregame = new guesstheScoreMobilePage(newTab)
            await guesstheScorePage.clickCloseBtn()
            await newTab.waitForTimeout(4000)
            await newguessthescoregame.typephoneno()
            await newguessthescoregame.typeemail()
            await newguessthescoregame.selectbirthdate()
            await newguessthescoregame.typeAge()
            await newguessthescoregame.typezip()
            await newguessthescoregame.clicksubmit()
            })

            await test.step("now open the game in mobile view", async() =>{
                await guesstheScorePage.clickEventStartBtn()            
                await guesstheScorePage.clickMoveToNextBtn()
                await guesstheScorePage.clickMoveToNextBtn()
                await guesstheScorePage.clickMoveToNextBtn()
                
            })
            
            await test.step("Now game open in mobile screen",async()=>{
                
                await newguessthescoregame.verifyTodaysLineUpBtnText()
                await newguessthescoregame.clickTodaysLineUpBtn()
                await newguessthescoregame.clickGameEventTestBtn()
                })
    await test.step("Now input for Close guess on mobile screen",async()=>{
                    await newguessthescoregame.clickRiderInputField()
                    await newguessthescoregame.inputCloseRiderScore()
                })
    
     
     await test.step("Now input rider score admin for close guess",async()=>{
      
        await guesstheScorePage.inputCloseRiderScore()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickRiderScoresubmitBtn()

     })
     await test.step("Now validate close guess message on mobile screen",async()=>{
       // await page.waitForTimeout(1000)
        await newguessthescoregame.verifycloseguessmessage()
        await page.waitForTimeout(4000)
        //await guesstheScorePage.clickeventStop()

     })

})
test("0013GTS-077 | Validate Far guess message reflection on mobile screen.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(1000)
            await guesstheScorePage.clickGameDesign()

    })
        await guesstheScorePage.clickgameoperationssection()  
            let newTab=null;
            let newguessthescoregame :guesstheScoreMobilePage
    await test.step("Now game open in mobile screen",async()=>{

            await guesstheScorePage.clickMobileLinkBtn()
            newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
            newguessthescoregame = new guesstheScoreMobilePage(newTab)
            await guesstheScorePage.clickCloseBtn()
            await newTab.waitForTimeout(4000)
            await newguessthescoregame.typephoneno()
            await newguessthescoregame.typeemail()
            await newguessthescoregame.selectbirthdate()
            await newguessthescoregame.typeAge()
            await newguessthescoregame.typezip()
            await newguessthescoregame.clicksubmit()
            })

            await test.step("now open the game in mobile view", async() =>{
                await guesstheScorePage.clickEventStartBtn()            
                await guesstheScorePage.clickMoveToNextBtn()
                await guesstheScorePage.clickMoveToNextBtn()
                await guesstheScorePage.clickMoveToNextBtn()
                
            })
            
            await test.step("Now game open in mobile screen",async()=>{
                
                await newguessthescoregame.verifyTodaysLineUpBtnText()
                await newguessthescoregame.clickTodaysLineUpBtn()
                await newguessthescoregame.clickGameEventTestBtn()
                })
    await test.step("Now input for Far guess on mobile screen",async()=>{
                    await newguessthescoregame.clickRiderInputField()
                    await newguessthescoregame.inputFarRiderScore()
                })
     await test.step("Now input rider score admin for Far guess",async()=>{
      
        await guesstheScorePage.inputFarguessRiderScore()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickRiderScoresubmitBtn()

     })
     await test.step("Now validate Far guess message on mobile screen",async()=>{
        await newguessthescoregame.verifyfarguessmessage()
        await page.waitForTimeout(4000)
        //await guesstheScorePage.clickeventStop()

     })

})
test("0013GTS-078 | Validate No Score message reflection on mobile screen.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(1000)
            await guesstheScorePage.clickGameDesign()

    })

    await test.step("now open the game in mobile view", async() =>{
                     

        await guesstheScorePage.clickgameoperationssection() 
       
        // await guesstheScorePage.clickMoveToNextBtn()
    })
    
       
            let newTab=null;
            let newguessthescoregame :guesstheScoreMobilePage
  
    
    await test.step("Now game open in mobile screen",async()=>{

            await guesstheScorePage.clickMobileLinkBtn()
            newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
            newguessthescoregame = new guesstheScoreMobilePage(newTab)
            await guesstheScorePage.clickCloseBtn()
            await newTab.waitForTimeout(4000)
            await newguessthescoregame.typephoneno()
            await newguessthescoregame.typeemail()
            await newguessthescoregame.selectbirthdate()
            await newguessthescoregame.typeAge()
            await newguessthescoregame.typezip()
            await newguessthescoregame.clicksubmit()
            })

            await test.step("now open the game in mobile view", async() =>{
                // await page.bringToFront()                
                // await guesstheScorePage.clickgameoperationssection() 
                // await guesstheScorePage.clickgameoperationssection() 
                //await guesstheScorePage.clickGameOperationAddedEventThreeDot()
                await guesstheScorePage.clickEventStartBtn()            
                await guesstheScorePage.clickMoveToNextBtn()
                await guesstheScorePage.clickMoveToNextBtn()
                await guesstheScorePage.clickMoveToNextBtn()
                
            })
            
            await test.step("Now game open in mobile screen",async()=>{
                
                await newguessthescoregame.verifyTodaysLineUpBtnText()
                await newguessthescoregame.clickTodaysLineUpBtn()
                await newguessthescoregame.clickGameEventTestBtn()
                })
    // await test.step("Now input for Far guess on mobile screen",async()=>{
    //                 await newguessthescoregame.clickRiderInputField()
    //                 await newguessthescoregame.inputFarRiderScore()
    //             })
    
     
     await test.step("Now click no score button on admin admin side",async()=>{
      
       
        await guesstheScorePage.clickRidernoscoreBtn()

     })
     await test.step("Now validate Far guess message on mobile screen",async()=>{
        await newguessthescoregame.verifyNoScoremessage()
        await page.waitForTimeout(4000)
       // await guesstheScorePage.clickeventStop()

     })

})
test("0013GTS-079 | Validate earned points is visible on mobile screen.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(1000)
            await guesstheScorePage.clickGameDesign()

    })
                    
            let newTab=null;
            let newguessthescoregame :guesstheScoreMobilePage
  
            await guesstheScorePage.clickgameoperationssection() 
    await test.step("Now game open in mobile screen",async()=>{
            
            await guesstheScorePage.clickMobileLinkBtn()
            newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
            newguessthescoregame = new guesstheScoreMobilePage(newTab)
            await guesstheScorePage.clickCloseBtn()
            await newTab.waitForTimeout(4000)
            await newguessthescoregame.typephoneno()
            await newguessthescoregame.typeemail()
            await newguessthescoregame.selectbirthdate()
            await newguessthescoregame.typeAge()
            await newguessthescoregame.typezip()
            await newguessthescoregame.clicksubmit()
            })

            await test.step("now open the game in mobile view", async() =>{
                // await page.bringToFront()                
                // await guesstheScorePage.clickgameoperationssection() 
                // await guesstheScorePage.clickgameoperationssection() 
                await guesstheScorePage.clickEventStartBtn()            
                await guesstheScorePage.clickMoveToNextBtn()
                await guesstheScorePage.clickMoveToNextBtn()
                await guesstheScorePage.clickMoveToNextBtn()
                
            })
            
            await test.step("Now game open in mobile screen",async()=>{
                
                await newguessthescoregame.verifyTodaysLineUpBtnText()
                await newguessthescoregame.clickTodaysLineUpBtn()
                await newguessthescoregame.clickGameEventTestBtn()
                })
    await test.step("Now input for Far guess on mobile screen",async()=>{
                    await newguessthescoregame.clickRiderInputField()
                    await newguessthescoregame.inputCorrectRiderScore()
                })
    
     
     await test.step("Now click no score button on admin admin side",async()=>{
      
       
        await guesstheScorePage.inputRiderScore()
        await guesstheScorePage.clickRiderScoresubmitBtn()

     })
     await test.step("Now validate Far guess message on mobile screen",async()=>{
        await newguessthescoregame.verifycorrectguessmessage()
        await page.waitForTimeout(1000)
        await newguessthescoregame.verifyEarnedPointsText()
        await newguessthescoregame.verifyEarnedPoints()
       
     })
     await guesstheScorePage.clickLiveBtn()
})
test.skip("0013GTS-080 | Validate Re-Ride button is working.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(1000)
            await guesstheScorePage.clickGameDesign()

    })

    await test.step("Now click game operation sestion", async() =>{
                     

        await guesstheScorePage.clickgameoperationssection() 
       
        // await guesstheScorePage.clickMoveToNextBtn()
    })
    
 
            await test.step("now open the game in mobile view", async() =>{
                //await guesstheScorePage.clickGameOperationAddedEventThreeDot()
                await guesstheScorePage.clickEventStartBtn()            
                
            })
            await test.step("Now validate Re-Ride button is working",async()=>{
                await guesstheScorePage.clickReRideBtn()
                await page.waitForTimeout(3000)
               // await guesstheScorePage.clickeventStop()
        
            })

})
test("0013GTS-081 | Validate export button is working on add rider.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)



    })
    await test.step("Click Rider Roster section",async()=>{
        await guesstheScorePage.clickriderrostersection()
    })
    await test.step("Validate Export text",async()=>{
        await guesstheScorePage.verifyExportText()
    })
    await test.step("Validate export Button",async()=>{
        await guesstheScorePage.validateExportBtn()
        await page.waitForTimeout(1000);
    })


   
    
})
test.skip("0023GTS-082 | Validate search option in add rider is working.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)



    })
    await test.step("Click Rider Roster section",async()=>{
        await guesstheScorePage.clickriderrostersection()
    })
    await test.step("Validate search rider show",async()=>{
        await guesstheScorePage.inputsearchfield()
        await guesstheScorePage.clickdeleteriderbutton()
        await guesstheScorePage.clickokindeleterider()
    })


   
    
})
test("0023GTS-083 | Validate Rows per page is selectable in rider roster page.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)



    })
    await test.step("Click Rider Roster section",async()=>{
        await guesstheScorePage.clickriderrostersection()
    })
    await test.step("Validate search rider show",async()=>{
        await guesstheScorePage.varifyrowsperpageText()
        await guesstheScorePage.clickrowsperpageBtn()
        
    })


   
    
})
test("0023GTS-084 | Validate Edit Configuration is visible in guess The score.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)



    })
    await test.step("Click Edit section",async()=>{
        await guesstheScorePage.clickeditsection()
    })
    await test.step("Verify Edit Configuration Text",async()=>{
        await guesstheScorePage.verifyEditConfigurationText()
      
        
    })


   
    
})

test.skip("0013GTS-085 | Validate Adding Rider Roster names are reflected on mobile screen for riders.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)



    })
   
    let newTab=null;
    let newguessthescoregame :guesstheScoreMobilePage
await test.step("now open the game in mobile view", async() =>{
    await guesstheScorePage.clickGameDesign()
    await guesstheScorePage.clickgameoperationssection()
    //await guesstheScorePage.clickeventStart() 
    //await guesstheScorePage.clickMoveToNextBtn() 
       
await test.step("Now game open in mobile screen",async()=>{

    await guesstheScorePage.clickMobileLinkBtn()
    newTab = await guesstheScorePage.clickMobileLinkOpenBtn()
    newguessthescoregame = new guesstheScoreMobilePage(newTab)
    await guesstheScorePage.clickCloseBtn()
    await newTab.waitForTimeout(4000)
    await newguessthescoregame.typephoneno()
    await newguessthescoregame.typeemail()
    await newguessthescoregame.selectbirthdate()
    await newguessthescoregame.typeAge()
    await newguessthescoregame.typezip()
    await newguessthescoregame.clicksubmit()
    await newguessthescoregame.clickTodaysLineUpBtn()
    await page.waitForTimeout(1000)
    await newguessthescoregame.clickCurrentEventBtn()
    await page.waitForTimeout(1000)
    })
    
   // await newTab.waitForTimeout(4000)
    // const before = newTab.screenshot({ path: 'testData/before.png' , fullPage: true })
    //newTab.close()
})
await test.step("Now click start even on admin side",async()=>{
    await guesstheScorePage.clickeventStart()
    //await guesstheScorePage.clickreridingBtn()
    await guesstheScorePage.clickMoveToNextBtn()
    await guesstheScorePage.clickMoveToNextBtn()
})
await test.step("Now validate adding rider name on mobile screen",async()=>{
    await newguessthescoregame.verifyaddingridername()
    await guesstheScorePage.clickeventStop()
})
    
})
test("0013GTS-086 | Validate game status Live after click start event.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
   await test.step("Now validate game status Live",async()=>{
       await guesstheScorePage.clickgameoperationssection()
       await guesstheScorePage.clickeventStart()
       await guesstheScorePage.clickLiveBtn()
       //await guesstheScorePage.clickStartGameOkBtn()
      // await guesstheScorePage.clicksLiveGameOkBtn()
       await guesstheScorePage.clickeventStop()
      
       
   })

})
test("0013GTS-087 |Validate error visibility if edit button is clicked without text change.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
   await test.step("Now click edit section button",async()=>{
       await guesstheScorePage.clickeditsection()
   })
   await test.step("Now click edit button without change text",async()=>{
           await guesstheScorePage.verifyEditConfigurationText()
           await guesstheScorePage.clickeditbutton()
           await guesstheScorePage.clickeditconfigrationOkBtn()
   })

})

test("0023GTS-088 | Validate Edit button is working guess The score.",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
            await guesstheScorePage.clickGuessTheScoreSection()
            await page.waitForTimeout(2000)



    })
    await test.step("Click Edit section",async()=>{
        await guesstheScorePage.clickeditsection()
    })
    await test.step("Validate Edit button is working",async()=>{
        await guesstheScorePage.verifyEditBtn(guesstheScorePage.getRandomName())
        await guesstheScorePage.clickeditbutton()
      
        
    })


   
    
})
test.skip("0013GTS-089 | Validate delete event is working.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
   await test.step("Now delete event is working.",async()=>{
       await guesstheScorePage.clickgameoperationssection()
       //await guesstheScorePage.clickeventStop()
       await guesstheScorePage.clickeventDelete()
       await page.waitForTimeout(3000)
       
   })
   await test.step("Now add event name",async()=>{
        await guesstheScorePage.clickaddeventbutton()
        await guesstheScorePage.typetestevent()
   })

})
test("0013GTS-090 | Validate delete configuration is working.", async({loginPage, guesstheScorePage, page, functions }, testInfo) =>{
    await test.step("Login Admin And land game design of guess the score", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })

        await guesstheScorePage.clickGuessTheScoreSection()
        await page.waitForTimeout(1000)

    })
   await test.step("Now delete configuration is working.",async()=>{
       await guesstheScorePage.clickdeletesection()
       await guesstheScorePage.confirmDeteleConfiguration()
      
       

   })

})
