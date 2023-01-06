import test, { expect } from "@fixtures/basePages";
import guesstheScorePage from "@pages/guesstheScore.page";
import { devices, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
// import clipboard from 'clipboardy';
import guesstheScoreMobilePage from '../../pages/MobileGamesPage/guessthescore_mobile_game.page';
const clipboard = require("clipboardy");
var url: any;

var text: string;

test("0013GTS-001 | validate Add New Configuration in guess the score is working", async ({ loginPage, guesstheScorePage, page, }, testInfo) => {

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

        await guesstheScorePage.inputConfigurationName()

        await page.waitForTimeout(3000)

        await guesstheScorePage.clickAddBtn()

        await page.waitForTimeout(3000)

    })

})
test("0013GTS-002 |  Validate Font Upload Functionality", async ({ loginPage, guesstheScorePage, functions, page, }, testInfo) => {
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
        
        // await guesstheScorePage.clickGuessTheScoreSection()
        // await guesstheScorePage.clickGameDesign()
        
        await page.waitForTimeout(4000)
        //font upload here
        await functions.fontUploadFunction()
        await guesstheScorePage.clickToUploadFont()
        await guesstheScorePage.waitforuploadcomplete()
        //await page.waitForTimeout(4000)

         //click Clear All Btn
        //  await guesstheScorePage.clickClearAllBtn()

        //await page.waitForTimeout(4000)
    })

})

test("0013GTS-003 | Validate All The Color Input Functionality", async ({ loginPage, guesstheScorePage, functions, page, }, testInfo) => {
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
        // await guesstheScorePage.clickGuessTheScoreSection()
       
        
        // await page.waitForTimeout(4000)

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
        await guesstheScorePage.clickdeletebuttonswatches()
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
        await guesstheScorePage.clickdeletebuttonswatches()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })

    await test.step("Validate Header Color Input Functionality", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickHeaderColorPicker()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickplusbuttonswatches()
        await guesstheScorePage.inputRGBFirstColor()
        await guesstheScorePage.inputRGBSecondColor()
        await guesstheScorePage.inputRGBThirdColor()
        await guesstheScorePage.inputRGBColorOpacity()
        await guesstheScorePage.inputRGBColorHex()
        await guesstheScorePage.clickdeletebuttonswatches()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })

    await test.step("Validate buttons Color Input Functionality", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.buttonstextColorPicker()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickplusbuttonswatches()
        await guesstheScorePage.inputRGBFirstColor()
        await guesstheScorePage.inputRGBSecondColor()
        await guesstheScorePage.inputRGBThirdColor()
        await guesstheScorePage.inputRGBColorOpacity()
        await guesstheScorePage.inputRGBColorHex()
        await guesstheScorePage.clickdeletebuttonswatches()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })

    await test.step("Validate maindBoard background Color Input Functionality", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.MainboardBackgroundColorPicker()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickplusbuttonswatches()
        await guesstheScorePage.inputRGBFirstColor()
        await guesstheScorePage.inputRGBSecondColor()
        await guesstheScorePage.inputRGBThirdColor()
        await guesstheScorePage.inputRGBColorOpacity()
        await guesstheScorePage.inputRGBColorHex()
        await guesstheScorePage.clickdeletebuttonswatches()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })

    await test.step("Validate Event title font Color Input Functionality", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.EventtitlefontColorPicker()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickplusbuttonswatches()
        await guesstheScorePage.inputRGBFirstColor()
        await guesstheScorePage.inputRGBSecondColor()
        await guesstheScorePage.inputRGBThirdColor()
        await guesstheScorePage.inputRGBColorOpacity()
        await guesstheScorePage.inputRGBColorHex()
        await guesstheScorePage.clickdeletebuttonswatches()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })

    await test.step("Validate timer circle Color Input Functionality", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.TimerCircleColorPicker()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickplusbuttonswatches()
        await guesstheScorePage.inputRGBFirstColor()
        await guesstheScorePage.inputRGBSecondColor()
        await guesstheScorePage.inputRGBThirdColor()
        await guesstheScorePage.inputRGBColorOpacity()
        await guesstheScorePage.inputRGBColorHex()
        await guesstheScorePage.clickdeletebuttonswatches()
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
        await guesstheScorePage.clickdeletebuttonswatches()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })

    await test.step("Validate gameplay score text Color Input Functionality", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.gameplayscoretextColorPicker()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickplusbuttonswatches()
        await guesstheScorePage.inputRGBFirstColor()
        await guesstheScorePage.inputRGBSecondColor()
        await guesstheScorePage.inputRGBThirdColor()
        await guesstheScorePage.inputRGBColorOpacity()
        await guesstheScorePage.inputRGBColorHex()
        await guesstheScorePage.clickdeletebuttonswatches()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })
    
    await test.step("Validate timer background Color Input Functionality", async() =>{
        await page.waitForTimeout(1000)
        await guesstheScorePage.TimerBackgroundColorPicker()
        await page.waitForTimeout(1000)
        await guesstheScorePage.clickplusbuttonswatches()
        await guesstheScorePage.inputRGBFirstColor()
        await guesstheScorePage.inputRGBSecondColor()
        await guesstheScorePage.inputRGBThirdColor()
        await guesstheScorePage.inputRGBColorOpacity()
        await guesstheScorePage.inputRGBColorHex()
        await guesstheScorePage.clickdeletebuttonswatches()
        await guesstheScorePage.clickColorPickerSaveBtn()
    })
    
})

test("0013GTS-004 |validate image upload section in guess the score works", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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
test("0013GTS-005 |test editor section functionalities", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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
        await guesstheScorePage.typeincorrectguess()
        await guesstheScorePage.clickleftalignedincorrectguess()
        await guesstheScorePage.clickrightalignedincorrectguess()
        await guesstheScorePage.clickboldincorrectguesseditor()
        await guesstheScorePage.clickitalicincorrectguesseditor()
        await guesstheScorePage.clickitalicincorrectguesseditor()
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
        await guesstheScorePage.typeingateheader()
        await guesstheScorePage.clickleftalignedingateheader()
        await guesstheScorePage.clickrightalignedingateheader()
        await guesstheScorePage.clickboldingateheadereditor()
        await guesstheScorePage.clickitalicingateheadereditor()
        await guesstheScorePage.clickunderlineingateheadereditor()
    })
    await test.step("validate correct guess text editor sanity", async() =>{
        // await page.waitForTimeout(1000)
        await guesstheScorePage.typecorrectguess()
        await guesstheScorePage.clickleftalignedcorrectguess()
        await guesstheScorePage.clickrightalignedcorrectguess()
        await guesstheScorePage.clickboldcorrectguesseditor()
        await guesstheScorePage.clickitaliccorrectguesseditor()
        await guesstheScorePage.clickorderedcorrectguesseditor()
        await guesstheScorePage.clickunderlinecorrectguesseditor()
        await guesstheScorePage.clickunorderedcorrectguesseditor()
    })
    await test.step("validate riding header sanity", async() =>{
        // await page.waitForTimeout(1000)
        await guesstheScorePage.typeridingheader()
        await guesstheScorePage.clickrightalignedridingheader()
        await guesstheScorePage.clickboldridingheadereditor()
        await guesstheScorePage.clickitalicridingheadereditor()
        await guesstheScorePage.clickleftalignedridingheader()
        await guesstheScorePage.clickunderlineridingheadereditor()
        await guesstheScorePage.clickorderedridingheadereditor()
        await guesstheScorePage.clickunorderedridingheadereditor()
    })
    await test.step("validate close guess text editor sanity", async() =>{
        // await page.waitForTimeout(1000)
        await guesstheScorePage.typecloseguess()
        await guesstheScorePage.clickorderedcloseguesseditor()
        await guesstheScorePage.clickunorderedcloseguesseditor()
        await guesstheScorePage.clickboldcloseguesseditor()
        await guesstheScorePage.clickitaliccloseguesseditor()
        await guesstheScorePage.clickleftalignedcloseguess()
        await guesstheScorePage.clickrightalignedcloseguess()
        await guesstheScorePage.clickunderlinecloseguesseditor()
        // await page.waitForTimeout(1000)
    })
    await test.step("validate scoring header sanity", async() =>{
        // await page.waitForTimeout(1000)
        await guesstheScorePage.typescoringheader()
        await guesstheScorePage.clickorderedscoringeditor()
        await guesstheScorePage.clickunorderedscoringseditor()
        await guesstheScorePage.clickboldscoringeditor()
        await guesstheScorePage.clickitalicscoringeditor()
        await guesstheScorePage.clickleftalignedscoring()
        await guesstheScorePage.clickrightalignedscoring()
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
test("0013GTS-006 |validate Rider Roster settings is working", async({ loginPage, guesstheScorePage, page, functions }, testInfo)=>{
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
test("0013GTS-007 |validate game operation settings are working",async({ loginPage, guesstheScorePage, page, functions }, testInfo)=>{
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
        await guesstheScorePage.clickgameoperation()
        await page.waitForTimeout(1000)

    })
    await test.step("validate Add event button is working",async ()=>{
        await guesstheScorePage.clickaddeventbutton()
        await guesstheScorePage.typetestevent()
        await guesstheScorePage.clickaddbutton()
    })

    await test.step("validate add riders button is working", async ()=>{
        await guesstheScorePage.clickaddridersbutton()
    })
})

test("0013GTS-008 |validate game settings option is working", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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
        await page.waitForTimeout(2000)
        await guesstheScorePage.clickgamesettings()
        await page.waitForTimeout(1000)

    })
    await test.step("validate scores section is working",async ()=>{
        await guesstheScorePage.typeincorrectguesscore()
        await guesstheScorePage.typecorrectguesscore()
        await guesstheScorePage.typecloseguesscore()
        await guesstheScorePage.typefarguessscore()
    })
    await test.step("validate times section is working",async ()=>{
        await guesstheScorePage.typeguesstime()
    })
})

test("0013GTS-009 |validate edit and delete section is working",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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
test("0013GTS-010 |Validate configurations text is visible",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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
test("0013GTS-011 |Validate + button is visible",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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
        await guesstheScorePage.verifyPlusBtn()
    })
})
test("0013GTS-012 |Validate add button is visible",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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
test("0013GTS-013 |Validate cancel button is visible",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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
test("0013GTS-014 |Validate new configurations text is visible",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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
    await test.step("Check new configurations text is visible", async()=>{
     
       // await guesstheScorePage.clickAddNewConfigPlusBtn()
        await guesstheScorePage.verifynewConfigrationText()

    })
})
test("0013GTS-015 |Validate start/live button is visible",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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
    await test.step("Validate start/live button is visible", async()=>{
     
       // await guesstheScorePage.clickAddNewConfigPlusBtn()
        // await guesstheScorePage.verifynewConfigrationText()
        // await await page.waitForTimeout(2000);
        await guesstheScorePage.verifyStartBtn()
        await await page.waitForTimeout(2000);
        await guesstheScorePage.clickgameStartBtn()
        await await page.waitForTimeout(2000);
        await guesstheScorePage.clickOkBtn()
        await await page.waitForTimeout(2000);
        await guesstheScorePage.verifyLiveBtn()
        await guesstheScorePage.clickOkBtn()

    })
})
test("0013GTS-016 |Validate mobile link button is visible",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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

    })
})
test("007PD-0017 | Validate mobile link button is working",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
 
     })
   
    
})
test("0013GTS-018 | Validate Game settings is visible",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
    //  await test.step("Validate Game settings all input field is visible", async()=>{
    //     await guesstheScorePage.inputCorrectGuess()
    //     await guesstheScorePage.inputCloseGuess()
    //     await guesstheScorePage.inputFarGuess()
    //     await guesstheScorePage.inputIncorrectGuess()
    //     await guesstheScorePage.inputGuessTime()

        

    // })
   
    
})
test("0013GTS-019 | Validate close button is working",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
test("0013GTS-020 | Validate Open link button is working",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
   
    
})
test("0013GTS-021 | Validate Mobile link Text is visible",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
// test.only("0013GTS-024 | Validate Copy Link button is working", async ({ prizeDropPage, page,browser}) => {

    
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
test.only("0013GTS-022 | Validate Copy Link button is working",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
test.only("0023GTS-023 | Validate save QR code is working",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
        await guesstheScorePage.verifySaveQRCodeText()
    })
    await test.step("Working Save QR Code",async()=>{
        await guesstheScorePage.validateSaveQRCode()
    })


   
    
})
test("0013GTS-024 | Validate Copy QR code is working",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
test("0013GTS-025 | Validate upload fonts is working",async({loginPage, functions, guesstheScorePage, page, browser }, testInfo)=>{
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
    await test.step("Click Game Design && Fonts Section",async()=>{
        await guesstheScorePage.clickGameDesign()
        await guesstheScorePage.clickFontsSection()

    })
    await test.step("Validate Upload Font text is visible", async () => {

        
        await guesstheScorePage.verifyUploadFontText()
        

})
    await test.step("Validate upload fonts is working",async()=>{
        await page.waitForTimeout(4000)
        //font upload here
        await functions.fontUploadFunction()
        await page.waitForTimeout(4000)
        await guesstheScorePage.clickToUploadFont()
        await guesstheScorePage.waitforuploadcomplete()

})

})
test("0013GTS-026 |Validate game design settings is visible",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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
    await test.step("Click game design", async()=>{
        await guesstheScorePage.clickGameDesign()
    })
    await test.step("Validate Fonts setting visibility",async()=>{
        
        await guesstheScorePage.verifyOpenFontsSection()
        await guesstheScorePage.openfontsection()
        await guesstheScorePage.verifyFontsText()
        await guesstheScorePage.verifyUploadFontText()
        await guesstheScorePage.verifyUploadFontsBtn()
    })
    await test.step("Validate Colors setting visibility",async()=>{
        await guesstheScorePage.verifyopencolorssection()
        await guesstheScorePage.opencolorssection()
        await guesstheScorePage.verifyColorsBackgroundText()
        //await guesstheScorePage.verifyColorsText()
        await guesstheScorePage.verifyColorsHeaderText()
        await guesstheScorePage.verifyColorsButtonsText()
        await guesstheScorePage.verifyColorsMainboardBackgroundText()
        await guesstheScorePage.verifyColorsEventTitleFontText()
        await guesstheScorePage.verifyColorsTimerCircleText()
        await guesstheScorePage.verifyColorsWoodText()
        await guesstheScorePage.verifyColorsGameplayScoreText()
        await guesstheScorePage.verifyColorsTimerBackgroundText()
    })
    await test.step("Validate Mobile Upload Image is Visible",async()=>{
        await guesstheScorePage.verifyopenImageUploadSection()
        await guesstheScorePage.openimagesection()
        await guesstheScorePage.verifyMobileBackgroundText()
        await guesstheScorePage.verifyuploadMobileBackgroundImageBtn()
        await guesstheScorePage.verifyGameTitleLogoText()
        await guesstheScorePage.verifyGameTitleLogoUploadBtn()
        await guesstheScorePage.verifySponsorLogoText()
        await guesstheScorePage.verifySponsorLogoUploadBtn()


    })


})
test("0013GTS-027 | Validate game status on mobile if start /live button is clicked", async ({ loginPage, tugOfWarPage, guesstheScorePage, functions, page, }, testInfo) => {

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


            await guesstheScorePage.clickgameStartBtn()
            await guesstheScorePage.clickStartGameOkBtn()

            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
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

})
test("007GTS-037 | Validate analytics settings is visible",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
      await guesstheScorePage.clickAnalyticsBtn()
      await guesstheScorePage.verifyDateText()
      await guesstheScorePage.verifyQRScsnsText()
      await guesstheScorePage.verifyTotalPlayersText()
      await guesstheScorePage.verifyUniqueUsersPlayedText()
      await guesstheScorePage.verifyReturningUsersText()
      await guesstheScorePage.verifyTotalTimePlayedText()
      await guesstheScorePage.verifyActionText()
      
       
   })


   
    
})
test("0013GTS-013 |Validate Text color change is visible on mobile screen",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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
    //     await guesstheScorePage.clickGameDesign()
    //     await guesstheScorePage.clickStartBtn()

    //    await guesstheScorePage.clickStartGameOkBtn()
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
      

await test.step("provide values in form field of mobile view and submit", async() =>{
        await newguessthescoregame.typephoneno()
        await newguessthescoregame.selectbirthdate()
        await newguessthescoregame.typeAge()
        await newguessthescoregame.typeemail()
        await newguessthescoregame.typezip()
        await newguessthescoregame.clicksubmit()
})
await test.step("validate Admin can change the Text color settings successfully",async() =>{
    //verify Text Color Text
   //await guesstheScorePage.verifyTextColorsText()

    //click Text Color Picker
    //await guesstheScorePage.clickColorPickerSaveBtn()
    await guesstheScorePage.clickCloseBtn()
})
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

    //click Color Picker SaveBtn
    await guesstheScorePage.clickColorPickerSaveBtn()
})       
await test.step("now validate text color change is visible on mobile",async () =>{
    await newguessthescoregame.verifyTextColor()
})
})
test("0013GTS-050 | Validate opacity slider is visible in color picker",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
test("0013GTS-044 | Validate swatches section is visible in color picker",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
test("0013GTS-048 | Validate color picker header text is visible",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
test("0013GTS-046 | Validate + button is visible in color picker",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
test("0013GTS-047 | Validate RGB sections are visible in color picker",async({loginPage,  guesstheScorePage, page, browser }, testInfo)=>{
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
    await test.step("Validate RGB sections are visible in color picker",async()=>{
        await guesstheScorePage.verifyRGBText()
        await guesstheScorePage.verifyRGBFirstColorInputField()
        await guesstheScorePage.verifyRGBSecondColorInputField()
        await guesstheScorePage.verifyRGBThirdColorInputField()
        await guesstheScorePage.verifyRGBOpacityColorInputField()
        await guesstheScorePage.verifyRGBHexColorInputField()
    })


   
    
})

test.skip("0013GTS-045 |Validate swatches change visible on mobile screen",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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

        // await guesstheScorePage.clickStartGameOkBtn()
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
      

await test.step("provide values in form field of mobile view and submit", async() =>{
        await newguessthescoregame.typephoneno()
        await newguessthescoregame.selectbirthdate()
        await newguessthescoregame.typeAge()
        await newguessthescoregame.typeemail()
        await newguessthescoregame.typezip()
        await newguessthescoregame.clicksubmit()
})
await test.step("validate Admin can change the swatches color settings successfully",async() =>{
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
     //click swatches +button
    await guesstheScorePage.clickplusbuttonswatches()

    // //input Text RGR First Color
    // await guesstheScorePage.inputRGBFirstColor()

    // //input Text RGR Second Color
    // await guesstheScorePage.inputRGBSecondColor()

    // //input Text RGR Third Color
    // await guesstheScorePage.inputRGBThirdColor()

    // //input Text RGR Four Color
    // await guesstheScorePage.inputRGBColorOpacity()

    // //input Text RGR Five Color
    // await guesstheScorePage.inputRGBColorHex()

    // //click Color Picker SaveBtn
    await guesstheScorePage.clickColorPickerSaveBtn()
})       
await test.step("now validate background swatches color change is visible on mobile",async () =>{
    await newguessthescoregame.checkswatchesColor()
})
})
test("0013GTS-013 |Validate background color change is visible on mobile screen",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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
        await guesstheScorePage.clickStartBtn()

        await guesstheScorePage.clickStartGameOkBtn()
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
})       
await test.step("now validate background color change is visible on mobile screen",async () =>{
    await newguessthescoregame.checkBackgroundcolor()
})
})
test("0013GTS-013 |Validate button color change is visible on mobile screen",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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
        await guesstheScorePage.clickStartBtn()

        await guesstheScorePage.clickStartGameOkBtn()
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
      

await test.step("provide values in form field of mobile view and submit", async() =>{
        await newguessthescoregame.typephoneno()
        await newguessthescoregame.selectbirthdate()
        await newguessthescoregame.typeAge()
        await newguessthescoregame.typeemail()
        await newguessthescoregame.typezip()
        await newguessthescoregame.clicksubmit()
})
await test.step("validate Admin can change button color change is visible on mobile screen",async() =>{
    //verify Text Color Text
   //await guesstheScorePage.verifyTextColorsText()

    //click Text Color Picker
    //await guesstheScorePage.clickColorPickerSaveBtn()
    await guesstheScorePage.clickCloseBtn()
})
    await guesstheScorePage.opencolorssection()
     await page.waitForTimeout(1000)
     await guesstheScorePage.clickbuttoncolorpicker()
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
})       
await test.step("now validate button color change is visible on mobile screen",async () =>{
    await newguessthescoregame.checksbuttonColor()
})
})
test.skip("0013GTS-013 |Validate wood color change is visible on mobile screen",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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
        await guesstheScorePage.clickStartBtn()

        await guesstheScorePage.clickStartGameOkBtn()
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
      

await test.step("provide values in form field of mobile view and submit", async() =>{
        await newguessthescoregame.typephoneno()
        await newguessthescoregame.selectbirthdate()
        await newguessthescoregame.typeAge()
        await newguessthescoregame.typeemail()
        await newguessthescoregame.typezip()
        await newguessthescoregame.clicksubmit()
})
await test.step("validate Admin can change wood color change is visible on mobile screen",async() =>{
    //verify Text Color Text
   //await guesstheScorePage.verifyTextColorsText()

    //click Text Color Picker
    //await guesstheScorePage.clickColorPickerSaveBtn()
    await guesstheScorePage.clickCloseBtn()
})
    await guesstheScorePage.opencolorssection()
     await page.waitForTimeout(1000)
     await guesstheScorePage.clickwoodcolorpicker()
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
})       
await test.step("now validate wood color change is visible on mobile screen",async () =>{
    await newguessthescoregame.checkswoodColor()
})
})
test("0012-052 |validate error if Add New Configuration is clicked without name provided", async ({ loginPage,  guesstheScorePage,  page, }, testInfo) => {


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





