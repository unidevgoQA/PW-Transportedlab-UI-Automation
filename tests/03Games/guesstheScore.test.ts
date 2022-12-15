import test, { expect } from "@fixtures/basePages";
import guesstheScorePage from "@pages/guesstheScore.page";
import { devices, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
// import clipboard from 'clipboardy';
const clipboard = require("clipboardy");
var url: any;

var text: string;

test("Add New Configuration", async ({ loginPage, guesstheScorePage, page, }, testInfo) => {

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
test(" Validate Font Upload Functionality", async ({ loginPage, guesstheScorePage, functions, page, }, testInfo) => {
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

test("Validate All The Color Input Functionality", async ({ loginPage, guesstheScorePage, functions, page, }, testInfo) => {
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

test("validate image upload works", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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
    await test.step("full screen logo upload works", async() =>{
        await guesstheScorePage.clickfullscreenlogoupload()
        await page.waitForTimeout(2000)
        await guesstheScorePage.Imageuploader()

        await page.waitForTimeout(4000)
    })
    await test.step("Mainboard Background logo upload works", async() =>{
        await guesstheScorePage.clickMainboardBackgroundupload()
        await page.waitForTimeout(2000)
        await guesstheScorePage.Imageuploader()

        await page.waitForTimeout(4000)
    })
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
test("test editor section functionalities", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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
test("validate Rider Roster settings is working", async({ loginPage, guesstheScorePage, page, functions }, testInfo)=>{
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

    await test.step('validate export rider button is working', async() =>{
        await guesstheScorePage.clickexportbutton()
    })
    await test.step('validate import rider button is working', async() =>{
        await guesstheScorePage.Jsonuploader()
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
test("validate game operation settings are working",async({ loginPage, guesstheScorePage, page, functions }, testInfo)=>{
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

test("validate game settings option is working", async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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

test("validate edit and delete section is working",async({ loginPage, guesstheScorePage, page, functions }, testInfo) =>{
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


