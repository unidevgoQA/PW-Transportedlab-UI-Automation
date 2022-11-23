import test, { expect } from "@fixtures/basePages";
import { devices, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
// import clipboard from 'clipboardy';
const clipboard = require("clipboardy");
var url: any;

var text: string;





test("012TV-001 | Add New Configuration", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await page.waitForTimeout(4000)

      })

      await test.step("If there is any automation cofig then delete it", async () => {
            await triviaPage.verifyDeleteAutoConfigurationIfHave()

      })

      await test.step("Verify Configurations Text", async () => {
            await triviaPage.verifyConfigurationsText()

      })

      await test.step("Click Add New Config Plus Btn", async () => {
            await triviaPage.clickAddNewConfigPlusBtn()
      })

      await test.step("Verify Add New Config Plus Window Text", async () => {
            await triviaPage.verifyAddNewConfigPlusWindowText()

      })

      await test.step("Input Configuration Name", async () => {
            await triviaPage.inputConfigurationName()
            // await page.waitForTimeout(2000)
      })

      await test.step("Click Add Btn", async () => {
            await triviaPage.clickAddBtn()

      })

      await test.step("Click Game Desgin", async () => {
            await triviaPage.clickGameDesign()

      })








})


test("012TV-002 | Validated Mobile Background Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Mobile Background Color Text", async () => {
            await triviaPage.verifyMobileBackgroundColorText()
      })

      await test.step("Click Mobile Background Color Picker", async () => {
            await triviaPage.clickMobileBackgroundColorPicker()
      })

      await test.step("input Mobile Background RGR First Color", async () => {
            await triviaPage.inputMobileBackgroundRGRFirstColor()
      })

      await test.step("input Mobile Background RGR Second Color", async () => {
            await triviaPage.inputMobileBackgroundRGRSecondColor()
      })

      await test.step("input Mobile Background RGR Third Color", async () => {
            await triviaPage.inputMobileBackgroundRGRThirdColor()
      })

      await test.step("input Mobile Background RGR Four Color", async () => {
            await triviaPage.inputMobileBackgroundRGRFourColor()
      })

      await test.step("input Mobile Background RGR Five Color", async () => {
            await triviaPage.inputMobileBackgroundRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})


test("012TV-003 | Validated General/Button Text Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify General/Button Text Color Text", async () => {
            await triviaPage.verifyGeneralButtonTextColorText()
      })

      await test.step("Click General/Button Text Color Picker", async () => {
            await triviaPage.clickGeneralButtonTextColorPicker()
      })

      await test.step("input General/Button Text RGR First Color", async () => {
            await triviaPage.inputGeneralButtonTextRGRFirstColor()
      })

      await test.step("input General/Button Text RGR Second Color", async () => {
            await triviaPage.inputGeneralButtonTextRGRSecondColor()
      })

      await test.step("input General/Button Text RGR Third Color", async () => {
            await triviaPage.inputGeneralButtonTextRGRThirdColor()
      })

      await test.step("input General/Button Text RGR Four Color", async () => {
            await triviaPage.inputGeneralButtonTextRGRFourColor()
      })

      await test.step("input General/Button Text RGR Five Color", async () => {
            await triviaPage.inputGeneralButtonTextRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})


test("012TV-004 | Validated Button Background Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Button Background Color Text", async () => {
            await triviaPage.verifyButtonBackgroundColorText()
      })

      await test.step("Click Button Background Color Picker", async () => {
            await triviaPage.clickButtonBackgroundColorPicker()
      })

      await test.step("input Button Background RGR First Color", async () => {
            await triviaPage.inputGeneralButtonTextRGRFirstColor()
      })

      await test.step("input Button Background RGR Second Color", async () => {
            await triviaPage.inputButtonBackgroundRGRSecondColor()
      })

      await test.step("input Button Background RGR Third Color", async () => {
            await triviaPage.inputButtonBackgroundRGRThirdColor()
      })

      await test.step("input Button Background RGR Four Color", async () => {
            await triviaPage.inputButtonBackgroundRGRFourColor()
      })

      await test.step("input Button Background RGR Five Color", async () => {
            await triviaPage.inputButtonBackgroundRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})


test("012TV-005 | Validated Question Text Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Question Text Color Text", async () => {
            await triviaPage.verifyQuestionTextColorText()
      })

      await test.step("Click Question Text Color Picker", async () => {
            await triviaPage.clickQuestionTextColorPicker()
      })

      await test.step("input Button Background RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input Button Background RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input Button Background RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input Button Background RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input Button Background RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})

test("012TV-006 | Validated Answer Text Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Answer Text Color Text", async () => {
            await triviaPage.verifyAnswerTextColorText()
      })

      await test.step("Click Answer Text Color Picker", async () => {
            await triviaPage.clickAnswerTextColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input Answer Text RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input Answer Text RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input Answer Text RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input Answer Text RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input Answer Text RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})


test("012TV-007 | Validated Question Background Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Question Background Color Text", async () => {
            await triviaPage.verifyQuestionBackgroundColorText()
      })

      await test.step("Click Question Background Color Picker", async () => {
            await triviaPage.clickQuestionBackgroundColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input Question Background RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input Question Background RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input Question Background RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input Question Background RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input Question Background RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})

test("012TV-008 | Validated Answer Background Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Answer Background Color Text", async () => {
            await triviaPage.verifyAnswerBackgroundColorText()
      })

      await test.step("Click AnswerBackground Color Picker", async () => {
            await triviaPage.clickAnswerBackgroundColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})

test("012TV-009 | Validated Question Frame Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Question Frame Color Text", async () => {
            await triviaPage.verifyQuestionFrameColorText()
      })

      await test.step("Click Question Frame Color Picker", async () => {
            await triviaPage.clickQuestionFrameColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})

test("012TV-010 | Validated Answer Frame Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Answer Frame Color Text", async () => {
            await triviaPage.verifyAnswerFrameColorText()
      })

      await test.step("Click Answer Frame Color Picker", async () => {
            await triviaPage.clickAnswerFrameColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})

test("012TV-011 | Validated Selected Answer Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Selected Answer Color Text", async () => {
            await triviaPage.verifySelectedAnswerColorText()
      })

      await test.step("Click Selected Answer Color Picker", async () => {
            await triviaPage.clickSelectedAnswerColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})

test("012TV-012 | Validated Correct Answer Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Correct Answer Color Text", async () => {
            await triviaPage.verifyCorrectAnswerColorText()
      })

      await test.step("Click Correct Answer Color Picker", async () => {
            await triviaPage.clickCorrectAnswerColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})

test("012TV-013 | Validated Incorrect Answer Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Incorrect Answer Color Text", async () => {
            await triviaPage.verifyIncorrectAnswerColorText()
      })

      await test.step("Click Incorrect Answer Color Picker", async () => {
            await triviaPage.clickIncorrectAnswerColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})

test("012TV-014 | Validated Leaderboard Text Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Leaderboard Text Color Text", async () => {
            await triviaPage.verifyLeaderboardTextColorText()
      })

      await test.step("Click Leaderboard Text Color Picker", async () => {
            await triviaPage.clickLeaderboardTextColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})


test("012TV-015 | Validated Leaderboard Background Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Leaderboard Background Color Text", async () => {
            await triviaPage.verifyLeaderboardBackgroundColorText()
      })

      await test.step("Click Leaderboard Background Color Picker", async () => {
            await triviaPage.clickLeaderboardBackgroundColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})

test("012TV-016 | Validated Leaderboard Frame Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Leaderboard Frame Color Text", async () => {
            await triviaPage.verifyLeaderboardFrameColorText()
      })

      await test.step("Click Leaderboard Frame Color Picker", async () => {
            await triviaPage.clickLeaderboardFrameColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})

test("012TV-017 | Validated Leaderboard Accent Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Leaderboard Accent Color Text", async () => {
            await triviaPage.verifyLeaderboardAccentColorText()
      })

      await test.step("Click Leaderboard Accent Color Picker", async () => {
            await triviaPage.clickLeaderboardAccentColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})

test("012TV-018 | Validated User Top 10 Rank Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify User Top 10 Rank Color Text", async () => {
            await triviaPage.verifyUserTop10RankColorText()
      })

      await test.step("Click User Top 10 Rank Color Picker", async () => {
            await triviaPage.clickUserTop10RankColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})

test("012TV-019 | Validated Countdown Animation Fill Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Countdown Animation Fill Color Text", async () => {
            await triviaPage.verifyCountdownAnimationFillColorText()
      })

      await test.step("Click Countdown Animation Fill Color Picker", async () => {
            await triviaPage.clickCountdownAnimationFillColorPicker()
      })

      // await test.step("click Drop Down Btn", async () => {
      //       await triviaPage.clickDropDownBtn()
      // })

      // await test.step("select Solid", async () => {
      //       await triviaPage.selectSolid()
      // })

      await test.step("input RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      // await test.step("click Stwatchse Delete Btn", async () => {
      //       await triviaPage.clickStwatchseDeleteBtn()
      // })

      // await test.step("click Drop Down Btn", async () => {
      //       await triviaPage.clickDropDownBtn()
      // })

      // await test.step("select Horizontal", async () => {
      //       await triviaPage.selectHorizontal()
      // })

      // await test.step("click Drop Down Btn", async () => {
      //       await triviaPage.clickDropDownBtn()
      // })

      // await test.step("Select Vertical", async () => {
      //       await triviaPage.selectVertical()
      // })

      // await test.step("click Drop Down Btn", async () => {
      //       await triviaPage.clickDropDownBtn()
      // })


      // await test.step("Select Diagonal", async () => {
      //       await triviaPage.selectDiagonal()
      // })

      // await test.step("click Drop Down Btn", async () => {
      //       await triviaPage.clickDropDownBtn()
      // })


      // await test.step("Select Radial", async () => {
      //       await triviaPage.selectRadial()
      // })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})


test("012TV-020 | Validated Tile/Countdown Background Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Tile/Countdown Background Color Text", async () => {
            await triviaPage.verifyTileCountdownBackgroundColorText()
      })

      await test.step("Click Tile/Countdown Background Color Picker", async () => {
            await triviaPage.clickTileCountdownBackgroundColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})


test("012TV-021 | Validated Tile/Countdown Frame Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Tile/Countdown Frame Color Text", async () => {
            await triviaPage.verifyTileCountdownFrameColorText()
      })

      await test.step("Click Tile/Countdown Frame Color Picker", async () => {
            await triviaPage.clickTileCountdownFrameColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})

test("012TV-022 | Validated Point-Bubble Fill Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Point-Bubble Fill Color Text", async () => {
            await triviaPage.verifyPointBubbleFillColorText()
      })

      await test.step("Click Point-Bubble Fill Color Picker", async () => {
            await triviaPage.clickPointBubbleFillColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})

test("012TV-023 | Validated Point-Bubble Stroke Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Point-Bubble Stroke Color Text", async () => {
            await triviaPage.verifyPointBubbleStrokeColorText()
      })

      await test.step("Click Point-Bubble Stroke Color Picker", async () => {
            await triviaPage.clickPointBubbleStrokeColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})


test("012TV-024 | Validated Point-Bubble Text Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })


      await test.step("Click Game Design", async () => {
            await triviaPage.clickGameDesign()
      })


      await test.step("Click Clear All Btn", async () => {
            await triviaPage.clickClearAllBtn()
      })


      await test.step("Verify Point-Bubble Text Color Text", async () => {
            await triviaPage.verifyPointBubbleTextColorText()
      })

      await test.step("Click Point-Bubble Text Color Picker", async () => {
            await triviaPage.clickPointBubbleTextColorPicker()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Solid", async () => {
            await triviaPage.selectSolid()
      })

      await test.step("input RGR First Color", async () => {
            await triviaPage.inputRGRFirstColor()
      })

      await test.step("input RGR Second Color", async () => {
            await triviaPage.inputRGRSecondColor()
      })

      await test.step("input RGR Third Color", async () => {
            await triviaPage.inputRGRThirdColor()
      })

      await test.step("input RGR Four Color", async () => {
            await triviaPage.inputRGRFourColor()
      })

      await test.step("input RGR Five Color", async () => {
            await triviaPage.inputRGRFiveColor()
      })

      await test.step("click Stwatchse Plus Btn", async () => {
            await triviaPage.clickStwatchsePlusBtn()
      })

      await test.step("click Stwatchse Delete Btn", async () => {
            await triviaPage.clickStwatchseDeleteBtn()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("select Horizontal", async () => {
            await triviaPage.selectHorizontal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })

      await test.step("Select Vertical", async () => {
            await triviaPage.selectVertical()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Diagonal", async () => {
            await triviaPage.selectDiagonal()
      })

      await test.step("click Drop Down Btn", async () => {
            await triviaPage.clickDropDownBtn()
      })


      await test.step("Select Radial", async () => {
            await triviaPage.selectRadial()
      })



      await test.step("click Color Picker Save Btn", async () => {
            await triviaPage.clickColorPickerSaveBtn()
      })


})
