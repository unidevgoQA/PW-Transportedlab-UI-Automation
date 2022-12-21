import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'





test("004M-001 | Varify Fonts Upload Functionality", async ({ loginPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {



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

        //upload font into menu page
        await menuPage.uploadFont();




        await page.waitForTimeout(4000)




})

test("004M-002 | Varify Color input functionality for menu", async ({ loginPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await MainMenu.clickHomeAvater();
        await MainMenu.mainMenuBtn();
        await MainMenu.clickMobileDesign();




        //Click on the menu page
        await menuPage.clickMenuPage()





        //clcik on the menubar first color input field
        await menuPage.clickFirstMenuBarColorInputField()

        await page.waitForTimeout(3000)

        //Input menubar RGB first field color 
        await menuPage.inputMenuBarRgbFirstFieldColor()

        //Input menubar RGB second field color 
        await menuPage.inputMenuBarRgbSecondFieldColor()

        //Input menubar RGB third field color 
        await menuPage.inputMenuBarRgbThirdFieldColor()

        //Input menubar field color  opacity
        await menuPage.inputMenuBarColorFieldOpacity()

        //Input menubar solid field color 
        await menuPage.inputMenuBarSolidFieldColor()



        //click on the save button
        await menuPage.clickColorPickerWindowSaveBtn();





        //clcik on the menubar first color input field
        await menuPage.clickFirstMenuBarColorInputField()


        //Input menubar RGB first field color 
        await menuPage.inputSecondMenuBarRgbFirstFieldColor()

        //Input menubar RGB second field color 
        await menuPage.inputMenuBarRgbSecondFieldColor()

        //Input menubar RGB third field color 
        await menuPage.inputSecondMenuBarRgbThirdFieldColor()

        //Input menubar field color  opacity
        await menuPage.inputSecondMenuBarColorFieldOpacity()

        //Input menubar solid field color 
        await menuPage.inputSecondMenuBarSolidFieldColor()


        //click on the save button
        await menuPage.clickColorPickerWindowSaveBtn();




})

test("004M-003 | Varify Alignment button functionality", async ({ loginPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await MainMenu.clickHomeAvater();
        await MainMenu.mainMenuBtn();
        await MainMenu.clickMobileDesign();

        //Click on the menu page
        await menuPage.clickMenuPage()






        //Check alignmenttext
        await menuPage.checkAlignmentText()


        //click on the top alignment button
        await menuPage.clickTopAlignmentBtn()

        //click on the bottom alignment button 
        await menuPage.clickBottomAlignmentBtn()

        //click on the 3 line option alignment button
        await menuPage.click3lineOptionAlignmentBtn()






})

test("004M-004 | Varify All the show icon disable successfully ", async ({ loginPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await MainMenu.clickHomeAvater();
        await MainMenu.mainMenuBtn();
        await MainMenu.clickMobileDesign();

        //Click on the menu page
        await menuPage.clickMenuPage()

        await page.waitForTimeout(2000)

        //Check  Show All Icons text
        await menuPage.checkAllIconText()

        //Enable show all icon button
        await menuPage.enableShowAllIconBtn()




        //If disable the home icon checkbox then enabled it 
        await menuPage.disableHomeIconCheckBox()


        //If disable the prize icon checkbox then enabled it 
        await menuPage.disablePrizeIconCheckBox()

        await page.waitForTimeout(2000)


        //If disable the how to play icon checkbox then enabled it 
        await menuPage.disableHowToPlayIconCheckBox()

        await page.waitForTimeout(2000)


        //If disable the rules icon checkbox then enabled it 
        await menuPage.disableRulesIconCheckBox()

        await page.waitForTimeout(2000)


        //If disable the user profile icon checkbox then enabled it 
        await menuPage.disableUserProfileIconCheckBox()

        //Enable show all icon button
        await menuPage.disableShowAllIconBtn()



})

test("004M-005 | Varify All the show icon enable successfully ", async ({ loginPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await MainMenu.clickHomeAvater();
        await MainMenu.mainMenuBtn();
        await MainMenu.clickMobileDesign();

        //Click on the menu page
        await menuPage.clickMenuPage()

        await page.waitForTimeout(2000)

        //Check  Show All Icons text
        await menuPage.checkAllIconText()

        //Enable show all icon button
        await menuPage.enableShowAllIconBtn()


        //If disable the home icon checkbox then enabled it 
        await menuPage.enabledHomeIconCheckBox()


        //If disable the prize icon checkbox then enabled it 
        await menuPage.enabledPrizeIconCheckBox()

        await page.waitForTimeout(2000)


        //If disable the how to play icon checkbox then enabled it 
        await menuPage.enabledHowToPlayIconCheckBox()

        await page.waitForTimeout(2000)


        //If disable the rules icon checkbox then enabled it 
        await menuPage.enabledRulesIconCheckBox()

        await page.waitForTimeout(2000)


        //If disable the user profile icon checkbox then enabled it 
        await menuPage.enabledUserProfileIconCheckBox()



})

test("004M-006 | Verify all the uploaded icons deleted successfully", async ({ loginPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await MainMenu.clickHomeAvater();
        await MainMenu.mainMenuBtn();
        await MainMenu.clickMobileDesign();

        //Click on the menu page
        await menuPage.clickMenuPage()





        await page.waitForTimeout(5000)
        await menuPage.deleteHomeIcon()

        await menuPage.deletePrizeIcon()

        await menuPage.deleteHowToPlayIcon()

        await menuPage.deleteRulesIcon()

        await menuPage.deleteProfileIcon()




})

test("004M-007 | Verify Upload Menu Profile Icon", async ({ loginPage, MainMenu, functions, languagePage, menuPage, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await MainMenu.clickHomeAvater();
        await MainMenu.mainMenuBtn();
        await MainMenu.clickMobileDesign();

        //Click on the menu page
        await menuPage.clickMenuPage()











        await page.waitForTimeout(2000)


        //Check  Show All Icons text
        await menuPage.uplodProfileIcon()
        await menuPage.functionForCroper()
        await page.waitForTimeout(5000)








})

test("004M-008 | Verify Upload The Menu Rule Icon", async ({ loginPage, MainMenu, functions, languagePage, menuPage, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await MainMenu.clickHomeAvater();
        await MainMenu.mainMenuBtn();
        await MainMenu.clickMobileDesign();

        //Click on the menu page
        await menuPage.clickMenuPage()











        await page.waitForTimeout(2000)
        //Check  Show All Icons text
        await menuPage.uplodRulesIcon()
        await menuPage.functionForCroper()
        await page.waitForTimeout(4000)





})

test("004M-009 | Verify Upload The Menu HowToPlay Icon", async ({ loginPage, MainMenu, functions, languagePage, menuPage, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await MainMenu.clickHomeAvater();
        await MainMenu.mainMenuBtn();
        await MainMenu.clickMobileDesign();

        //Click on the menu page
        await menuPage.clickMenuPage()











        //Check  Show All Icons text
        await menuPage.uplodHowToPlayIcon()
        await menuPage.functionForCroper()
        await page.waitForTimeout(4000)






})

test("004M-010 | Verify Upload The Menu Prize Icon", async ({ loginPage, MainMenu, functions, languagePage, menuPage, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await MainMenu.clickHomeAvater();
        await MainMenu.mainMenuBtn();
        await MainMenu.clickMobileDesign();

        //Click on the menu page
        await menuPage.clickMenuPage()









        //Check  Show All Icons text
        await menuPage.uplodPrizeIcon()
        await menuPage.functionForCroper()
        await page.waitForTimeout(4000)







})

test("004M-011 | Verify Upload All The Menu Home Icon", async ({ loginPage, MainMenu, functions, languagePage, menuPage, page, }, testInfo) => {




        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        await MainMenu.clickHomeAvater();
        await MainMenu.mainMenuBtn();
        await MainMenu.clickMobileDesign();

        //Click on the menu page
        await menuPage.clickMenuPage()







        //Check  Show All Icons text
        await menuPage.uplodHomeIcon()
        await menuPage.functionForCroper()

        await page.waitForTimeout(4000)





})

