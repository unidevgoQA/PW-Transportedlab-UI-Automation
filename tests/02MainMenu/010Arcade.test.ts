import test, { expect } from "@fixtures/basePages";
import menuPage from "@pages/menu.page";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'

test("010A-001| Arcade settings related tests", async ({ MainMenu, arcadePage, menuPage, loginPage, page, }, testInfo) => {

    await test.step("Login admin and land to arcade", async () => {
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
        //click on homeavatar
        await MainMenu.clickHomeAvater()
        //click on mainmenubtn
        await MainMenu.mainMenuBtn()
        //click on arcadepage
        await MainMenu.clickArcadePage()
        

    })
    await test.step("validate fonts upload functionality", async () => {
        //verify fonts text
        await arcadePage.checkFontsText()
        // check upload fonts text
        await arcadePage.checkUploadFontText()
        // upload a test font
        await arcadePage.uploadFont()
       
        await page.waitForTimeout(2000)
        // now deleting the uploaded font
        await arcadePage.clickDeletefont()
    })
    await test.step("check arcade settings text", async () => {
        await page.waitForTimeout(2000)
        await arcadePage.checkArcadesettingtext()
    })

    // await test.step("Add outside button works", async () => {
        //click on button
        // await arcadePage.clickaddOutsidegame()
        // await page.waitForTimeout(2000)
        // // now click close button
        // await arcadePage.clickclosebutton()
    // })
    await test.step("validate add outside game works", async () => {

        await arcadePage.clickaddOutsidegame()
        await page.waitForTimeout(2000)
        await arcadePage.addnewgame()
        await arcadePage.clickSaveBtn()
        await page.waitForTimeout(2000)

    })

    await test.step("validate add outside game works", async () => {

        await arcadePage.clickaddOutsidegame()
        await page.waitForTimeout(2000)
        await arcadePage.addnewgame()
        await arcadePage.clickSaveBtn()
    })
})

test("010A-002 | Validated Arcade Settings Logo Section", async ({ MainMenu, arcadePage, menuPage, functions, loginPage, page, }, testInfo) => {


    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    //click on homeavatar
    await MainMenu.clickHomeAvater()
    //click on mainmenubtn
    await MainMenu.mainMenuBtn()
    //click on arcadepage
    await MainMenu.clickArcadePage()



    await page.waitForTimeout(3000)

    //delete Logo Header
    await arcadePage.deleteLogoHeader()


    await page.waitForTimeout(2000)

    //click To Upload Logo Header
    await functions.logoImageUploadFunction()
    await arcadePage.clickToUploadLogoHeader()

    await functions.fileUploadCropperWithoutIframe()

    //click Square Type Btn
    await arcadePage.clickSquareTypeBtn()

    //click Rectangle Type Btn
    await arcadePage.clickRectangleTypeBtn()


    await page.waitForTimeout(6000)



})

test("010A-003 | Validated Arcade Settings Section", async ({ MainMenu, arcadePage, menuPage, functions, loginPage, page, }, testInfo) => {


    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    //click on homeavatar
    await MainMenu.clickHomeAvater()
    //click on mainmenubtn
    await MainMenu.mainMenuBtn()
    //click on arcadepage
    await MainMenu.clickArcadePage()


    //enable Prize Drop Check Box
    await arcadePage.enablePrizeDropCheckBox()



    //enable Tug of War Check Box
    await arcadePage.enableTugofWarCheckBox()


    //enable AR Fanatics Filters CheckBox
    await arcadePage.enableARFanaticsFiltersCheckBox()


    //enable Noise Meter CheckBox
    await arcadePage.enableNoiseMeterCheckBox()


    //enable Live Wall Check Box
    await arcadePage.enableLiveWallCheckBox()


    //click To Select Defult Prize Drop
    await arcadePage.clickToSelectDefultPrizeDrop()

    await page.waitForTimeout(3000)

    await arcadePage.selectDefultGame()

    //click To Select Defult TugOfWar
    await arcadePage.clickToSelectDefultTugOfWar()

    await arcadePage.selectDefultGame()

    //click To Select Defult Ar Fanatics
    await arcadePage.clickToSelectDefultArFanatics()

    await arcadePage.selectDefultGame()

    //click To Select Defult Noise Meter
    await arcadePage.clickToSelectDefultNoiseMeter()

    await arcadePage.selectDefultGame()
    //click To Select Defult Live Wall
    await arcadePage.clickToSelectDefultLiveWall()

    await arcadePage.selectDefultGame()

    await page.waitForTimeout(6000)



})

test("010A-004 | Validated Arcade outside Game Delete Functionality", async ({ MainMenu, arcadePage, menuPage, functions, loginPage, page, }, testInfo) => {


    await page.goto('/admin/#/sign-in')
    await loginPage.login(data.username, data.password)
    const title = await page.title();
    expect(title).toBe('DXP Admin')
    //click on homeavatar
    await MainMenu.clickHomeAvater()
    //click on mainmenubtn
    await MainMenu.mainMenuBtn()
    //click on arcadepage
    await MainMenu.clickArcadePage()

    // await functions.logoImageUploadFunction()
    // await arcadePage.clickToUploadGameLogo()
    // await functions.fileUploadCropperWithoutIframe()
    // await page.waitForTimeout(5000)


    await arcadePage.clickOutSideGameDeleteBtn()



    await page.waitForTimeout(6000)



})