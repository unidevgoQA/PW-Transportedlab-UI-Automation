import test, { expect } from "@fixtures/basePages";
import { devices, chromium, Page } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
// import clipboard from 'clipboardy';
import triviaMobilePage from '../../pages/MobileGamesPage/trivia_mobile_game.page';
import guesstheScoreMobilePage from '../../pages/MobileGamesPage/guessthescore_mobile_game.page';
const clipboard = require("clipboardy");
var url: any;

var text: string;





// test("012TV-001 | Add New Configuration", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()
//             await page.waitForTimeout(4000)

//       })


//       await test.step("Click Add New Config Plus Btn", async () => {
//             await triviaPage.clickAddNewConfigPlusBtn()
//       })

//       await test.step("Verify Add New Config Plus Window Text", async () => {
//             await triviaPage.verifyAddNewConfigPlusWindowText()

//       })

//       await test.step("Input Configuration Name", async () => {
//             await triviaPage.inputConfigurationName()
//             // await page.waitForTimeout(2000)
//       })

//       await test.step("Click Add Btn", async () => {
//             await triviaPage.clickAddBtn()
//             await page.waitForTimeout(3000)

//             await triviaPage.clickControlPanel()
//             await page.waitForTimeout(3000)


//       })









// })


// test("012TV-002 | Validated Mobile Background Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })

//       await test.step("click To Upload Game Font", async () => {
//             await functions.fontUploadFunction()
//             await triviaPage.clickToUploadFont()
//       })


//       await test.step("Verify Mobile Background Color Text", async () => {
//             await triviaPage.verifyMobileBackgroundColorText()
//       })

//       await test.step("Click Mobile Background Color Picker", async () => {
//             await triviaPage.clickMobileBackgroundColorPicker()
//       })

//       await test.step("input Mobile Background RGR First Color", async () => {
//             await triviaPage.inputMobileBackgroundRGRFirstColor()
//       })

//       await test.step("input Mobile Background RGR Second Color", async () => {
//             await triviaPage.inputMobileBackgroundRGRSecondColor()
//       })

//       await test.step("input Mobile Background RGR Third Color", async () => {
//             await triviaPage.inputMobileBackgroundRGRThirdColor()
//       })

//       await test.step("input Mobile Background RGR Four Color", async () => {
//             await triviaPage.inputMobileBackgroundRGRFourColor()
//       })

//       await test.step("input Mobile Background RGR Five Color", async () => {
//             await triviaPage.inputMobileBackgroundRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })


// test("012TV-003 | Validated General/Button Text Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify General/Button Text Color Text", async () => {
//             await triviaPage.verifyGeneralButtonTextColorText()
//       })

//       await test.step("Click General/Button Text Color Picker", async () => {
//             await triviaPage.clickGeneralButtonTextColorPicker()
//       })

//       await test.step("input General/Button Text RGR First Color", async () => {
//             await triviaPage.inputGeneralButtonTextRGRFirstColor()
//       })

//       await test.step("input General/Button Text RGR Second Color", async () => {
//             await triviaPage.inputGeneralButtonTextRGRSecondColor()
//       })

//       await test.step("input General/Button Text RGR Third Color", async () => {
//             await triviaPage.inputGeneralButtonTextRGRThirdColor()
//       })

//       await test.step("input General/Button Text RGR Four Color", async () => {
//             await triviaPage.inputGeneralButtonTextRGRFourColor()
//       })

//       await test.step("input General/Button Text RGR Five Color", async () => {
//             await triviaPage.inputGeneralButtonTextRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })


// test("012TV-004 | Validated Button Background Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Button Background Color Text", async () => {
//             await triviaPage.verifyButtonBackgroundColorText()
//       })

//       await test.step("Click Button Background Color Picker", async () => {
//             await triviaPage.clickButtonBackgroundColorPicker()
//       })

//       await test.step("input Button Background RGR First Color", async () => {
//             await triviaPage.inputGeneralButtonTextRGRFirstColor()
//       })

//       await test.step("input Button Background RGR Second Color", async () => {
//             await triviaPage.inputButtonBackgroundRGRSecondColor()
//       })

//       await test.step("input Button Background RGR Third Color", async () => {
//             await triviaPage.inputButtonBackgroundRGRThirdColor()
//       })

//       await test.step("input Button Background RGR Four Color", async () => {
//             await triviaPage.inputButtonBackgroundRGRFourColor()
//       })

//       await test.step("input Button Background RGR Five Color", async () => {
//             await triviaPage.inputButtonBackgroundRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })


// test("012TV-005 | Validated Question Text Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Question Text Color Text", async () => {
//             await triviaPage.verifyQuestionTextColorText()
//       })

//       await test.step("Click Question Text Color Picker", async () => {
//             await triviaPage.clickQuestionTextColorPicker()
//       })

//       await test.step("input Button Background RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input Button Background RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input Button Background RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input Button Background RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input Button Background RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })

// test("012TV-006 | Validated Answer Text Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Answer Text Color Text", async () => {
//             await triviaPage.verifyAnswerTextColorText()
//       })

//       await test.step("Click Answer Text Color Picker", async () => {
//             await triviaPage.clickAnswerTextColorPicker()
//       })

//       // await test.step("click Drop Down Btn", async () => {
//       //       await triviaPage.clickDropDownBtn()
//       // })

//       // await test.step("select Solid", async () => {
//       //       await triviaPage.selectSolid()
//       // })

//       await test.step("input Answer Text RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input Answer Text RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input Answer Text RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input Answer Text RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input Answer Text RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       // await test.step("click Drop Down Btn", async () => {
//       //       await triviaPage.clickDropDownBtn()
//       // })

//       // await test.step("select Horizontal", async () => {
//       //       await triviaPage.selectHorizontal()
//       // })

//       // await test.step("click Drop Down Btn", async () => {
//       //       await triviaPage.clickDropDownBtn()
//       // })

//       // await test.step("Select Vertical", async () => {
//       //       await triviaPage.selectVertical()
//       // })

//       // await test.step("click Drop Down Btn", async () => {
//       //       await triviaPage.clickDropDownBtn()
//       // })


//       // await test.step("Select Diagonal", async () => {
//       //       await triviaPage.selectDiagonal()
//       // })

//       // await test.step("click Drop Down Btn", async () => {
//       //       await triviaPage.clickDropDownBtn()
//       // })


//       // await test.step("Select Radial", async () => {
//       //       await triviaPage.selectRadial()
//       // })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })


// test("012TV-007 | Validated Question Background Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Question Background Color Text", async () => {
//             await triviaPage.verifyQuestionBackgroundColorText()
//       })

//       await test.step("Click Question Background Color Picker", async () => {
//             await triviaPage.clickQuestionBackgroundColorPicker()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Solid", async () => {
//             await triviaPage.selectSolid()
//       })

//       await test.step("input Question Background RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input Question Background RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input Question Background RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input Question Background RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input Question Background RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })

// test("012TV-008 | Validated Answer Background Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Answer Background Color Text", async () => {
//             await triviaPage.verifyAnswerBackgroundColorText()
//       })

//       await test.step("Click AnswerBackground Color Picker", async () => {
//             await triviaPage.clickAnswerBackgroundColorPicker()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Solid", async () => {
//             await triviaPage.selectSolid()
//       })

//       await test.step("input RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })

// test("012TV-009 | Validated Question Frame Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Question Frame Color Text", async () => {
//             await triviaPage.verifyQuestionFrameColorText()
//       })

//       await test.step("Click Question Frame Color Picker", async () => {
//             await triviaPage.clickQuestionFrameColorPicker()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Solid", async () => {
//             await triviaPage.selectSolid()
//       })

//       await test.step("input RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })

// test("012TV-010 | Validated Answer Frame Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Answer Frame Color Text", async () => {
//             await triviaPage.verifyAnswerFrameColorText()
//       })

//       await test.step("Click Answer Frame Color Picker", async () => {
//             await triviaPage.clickAnswerFrameColorPicker()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Solid", async () => {
//             await triviaPage.selectSolid()
//       })

//       await test.step("input RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })

// test("012TV-011 | Validated Selected Answer Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Selected Answer Color Text", async () => {
//             await triviaPage.verifySelectedAnswerColorText()
//       })

//       await test.step("Click Selected Answer Color Picker", async () => {
//             await triviaPage.clickSelectedAnswerColorPicker()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Solid", async () => {
//             await triviaPage.selectSolid()
//       })

//       await test.step("input RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })

// test("012TV-012 | Validated Correct Answer Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Correct Answer Color Text", async () => {
//             await triviaPage.verifyCorrectAnswerColorText()
//       })

//       await test.step("Click Correct Answer Color Picker", async () => {
//             await triviaPage.clickCorrectAnswerColorPicker()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Solid", async () => {
//             await triviaPage.selectSolid()
//       })

//       await test.step("input RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })

// test("012TV-013 | Validated Incorrect Answer Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Incorrect Answer Color Text", async () => {
//             await triviaPage.verifyIncorrectAnswerColorText()
//       })

//       await test.step("Click Incorrect Answer Color Picker", async () => {
//             await triviaPage.clickIncorrectAnswerColorPicker()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Solid", async () => {
//             await triviaPage.selectSolid()
//       })

//       await test.step("input RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })

// test("012TV-014 | Validated Leaderboard Text Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Leaderboard Text Color Text", async () => {
//             await triviaPage.verifyLeaderboardTextColorText()
//       })

//       await test.step("Click Leaderboard Text Color Picker", async () => {
//             await triviaPage.clickLeaderboardTextColorPicker()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Solid", async () => {
//             await triviaPage.selectSolid()
//       })

//       await test.step("input RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })


// test("012TV-015 | Validated Leaderboard Background Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Leaderboard Background Color Text", async () => {
//             await triviaPage.verifyLeaderboardBackgroundColorText()
//       })

//       await test.step("Click Leaderboard Background Color Picker", async () => {
//             await triviaPage.clickLeaderboardBackgroundColorPicker()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Solid", async () => {
//             await triviaPage.selectSolid()
//       })

//       await test.step("input RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })

// test("012TV-016 | Validated Leaderboard Frame Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Leaderboard Frame Color Text", async () => {
//             await triviaPage.verifyLeaderboardFrameColorText()
//       })

//       await test.step("Click Leaderboard Frame Color Picker", async () => {
//             await triviaPage.clickLeaderboardFrameColorPicker()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Solid", async () => {
//             await triviaPage.selectSolid()
//       })

//       await test.step("input RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })

// test("012TV-017 | Validated Leaderboard Accent Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Leaderboard Accent Color Text", async () => {
//             await triviaPage.verifyLeaderboardAccentColorText()
//       })

//       await test.step("Click Leaderboard Accent Color Picker", async () => {
//             await triviaPage.clickLeaderboardAccentColorPicker()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Solid", async () => {
//             await triviaPage.selectSolid()
//       })

//       await test.step("input RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })

// test("012TV-018 | Validated User Top 10 Rank Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify User Top 10 Rank Color Text", async () => {
//             await triviaPage.verifyUserTop10RankColorText()
//       })

//       await test.step("Click User Top 10 Rank Color Picker", async () => {
//             await triviaPage.clickUserTop10RankColorPicker()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Solid", async () => {
//             await triviaPage.selectSolid()
//       })

//       await test.step("input RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })

// test("012TV-019 | Validated Countdown Animation Fill Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Countdown Animation Fill Color Text", async () => {
//             await triviaPage.verifyCountdownAnimationFillColorText()
//       })

//       await test.step("Click Countdown Animation Fill Color Picker", async () => {
//             await triviaPage.clickCountdownAnimationFillColorPicker()
//       })

//       // await test.step("click Drop Down Btn", async () => {
//       //       await triviaPage.clickDropDownBtn()
//       // })

//       // await test.step("select Solid", async () => {
//       //       await triviaPage.selectSolid()
//       // })

//       await test.step("input RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       // await test.step("click Stwatchse Delete Btn", async () => {
//       //       await triviaPage.clickStwatchseDeleteBtn()
//       // })

//       // await test.step("click Drop Down Btn", async () => {
//       //       await triviaPage.clickDropDownBtn()
//       // })

//       // await test.step("select Horizontal", async () => {
//       //       await triviaPage.selectHorizontal()
//       // })

//       // await test.step("click Drop Down Btn", async () => {
//       //       await triviaPage.clickDropDownBtn()
//       // })

//       // await test.step("Select Vertical", async () => {
//       //       await triviaPage.selectVertical()
//       // })

//       // await test.step("click Drop Down Btn", async () => {
//       //       await triviaPage.clickDropDownBtn()
//       // })


//       // await test.step("Select Diagonal", async () => {
//       //       await triviaPage.selectDiagonal()
//       // })

//       // await test.step("click Drop Down Btn", async () => {
//       //       await triviaPage.clickDropDownBtn()
//       // })


//       // await test.step("Select Radial", async () => {
//       //       await triviaPage.selectRadial()
//       // })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })


// test("012TV-020 | Validated Tile/Countdown Background Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Tile/Countdown Background Color Text", async () => {
//             await triviaPage.verifyTileCountdownBackgroundColorText()
//       })

//       await test.step("Click Tile/Countdown Background Color Picker", async () => {
//             await triviaPage.clickTileCountdownBackgroundColorPicker()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Solid", async () => {
//             await triviaPage.selectSolid()
//       })

//       await test.step("input RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })


// test("012TV-021 | Validated Tile/Countdown Frame Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Tile/Countdown Frame Color Text", async () => {
//             await triviaPage.verifyTileCountdownFrameColorText()
//       })

//       await test.step("Click Tile/Countdown Frame Color Picker", async () => {
//             await triviaPage.clickTileCountdownFrameColorPicker()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Solid", async () => {
//             await triviaPage.selectSolid()
//       })

//       await test.step("input RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })

// test("012TV-022 | Validated Point-Bubble Fill Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Point-Bubble Fill Color Text", async () => {
//             await triviaPage.verifyPointBubbleFillColorText()
//       })

//       await test.step("Click Point-Bubble Fill Color Picker", async () => {
//             await triviaPage.clickPointBubbleFillColorPicker()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Solid", async () => {
//             await triviaPage.selectSolid()
//       })

//       await test.step("input RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })

// test("012TV-023 | Validated Point-Bubble Stroke Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Point-Bubble Stroke Color Text", async () => {
//             await triviaPage.verifyPointBubbleStrokeColorText()
//       })

//       await test.step("Click Point-Bubble Stroke Color Picker", async () => {
//             await triviaPage.clickPointBubbleStrokeColorPicker()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Solid", async () => {
//             await triviaPage.selectSolid()
//       })

//       await test.step("input RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })

// test("012TV-024 | Validated Point-Bubble Text Color Input Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("Verify Point-Bubble Text Color Text", async () => {
//             await triviaPage.verifyPointBubbleTextColorText()
//       })

//       await test.step("Click Point-Bubble Text Color Picker", async () => {
//             await triviaPage.clickPointBubbleTextColorPicker()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Solid", async () => {
//             await triviaPage.selectSolid()
//       })

//       await test.step("input RGR First Color", async () => {
//             await triviaPage.inputRGRFirstColor()
//       })

//       await test.step("input RGR Second Color", async () => {
//             await triviaPage.inputRGRSecondColor()
//       })

//       await test.step("input RGR Third Color", async () => {
//             await triviaPage.inputRGRThirdColor()
//       })

//       await test.step("input RGR Four Color", async () => {
//             await triviaPage.inputRGRFourColor()
//       })

//       await test.step("input RGR Five Color", async () => {
//             await triviaPage.inputRGRFiveColor()
//       })

//       await test.step("click Stwatchse Plus Btn", async () => {
//             await triviaPage.clickStwatchsePlusBtn()
//       })

//       await test.step("click Stwatchse Delete Btn", async () => {
//             await triviaPage.clickStwatchseDeleteBtn()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("select Horizontal", async () => {
//             await triviaPage.selectHorizontal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })

//       await test.step("Select Vertical", async () => {
//             await triviaPage.selectVertical()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Diagonal", async () => {
//             await triviaPage.selectDiagonal()
//       })

//       await test.step("click Drop Down Btn", async () => {
//             await triviaPage.clickDropDownBtn()
//       })


//       await test.step("Select Radial", async () => {
//             await triviaPage.selectRadial()
//       })



//       await test.step("click Color Picker Save Btn", async () => {
//             await triviaPage.clickColorPickerSaveBtn()
//       })


// })

// test("012TV-026 | Validated Add New Raound Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("click Control Panel", async () => {
//             await triviaPage.clickControlPanel()
//             await page.waitForTimeout(2000)
//       })


//       await test.step("click Add Round Btn", async () => {
            
//             await triviaPage.clickAddRoundBtn()
//             await page.waitForTimeout(2000)
//       })

//       await test.step("verify New Round Title Text", async () => {
//             await triviaPage.verifyNewRoundTitleText()
//       })

//       await test.step("input New Round Title", async () => {
//             await page.waitForTimeout(2000)
//             await triviaPage.inputNewRoundTitle()
//       })


//       await test.step("click Round Add Btn", async () => {
//             await triviaPage.clickRoundAddBtn()
//       })

//       await test.step("verify Game Mode Text", async () => {
//             await triviaPage.verifyGameModeText()
//       })

//       await test.step("click Manual Mode Btn", async () => {
//             await triviaPage.clickManualModeBtn()
//       })

//       await test.step("click On Demand Mode Btn", async () => {
//             await triviaPage.clickOnDemandModeBtn()
//       })

//       await test.step("verify Countdown Text", async () => {
//             await triviaPage.verifyCountdownText()
//       })

//       await test.step("click Countdown Time Radio Btn", async () => {
//             await triviaPage.clickCountdownTimeRadioBtn()
//       })

//       await test.step("click Countdown Points Radio Btn", async () => {
//             await triviaPage.clickCountdownPointsRadioBtn()
//       })

//       await test.step("verify Countdown Type Text", async () => {
//             await triviaPage.verifyCountdownTypeText()
//       })

//       await test.step("click Countdown Circular Radio Btn", async () => {
//             await triviaPage.clickCountdownCircularRadioBtn()
//       })

//       await test.step("click Countdown Linear Radio Btn", async () => {
//             await triviaPage.clickCountdownLinearRadioBtn()
//       })

//       await test.step("verify Question Sequence Text", async () => {
//             await triviaPage.verifyQuestionSequenceText()
//       })

//       await test.step("click Countdown Random Radio Btn", async () => {
//             await triviaPage.clickCountdownRandomRadioBtn()
//       })

//       await test.step("click Countdown Sequence Radio Btn", async () => {
//             await triviaPage.clickCountdownSequenceRadioBtn()
//       })

//       await test.step("verify Automatic Timers Text", async () => {
//             await triviaPage.verifyAutomaticTimersText()
//       })

//       await test.step("verify Countdown Stage Text", async () => {
//             await triviaPage.verifyCountdownStageText()
//       })


//       await test.step("input Countdown Stage Sec", async () => {
//             await triviaPage.inputCountdownStageSec()
//       })

//       await test.step("verify Question No Stage Text", async () => {
//             await triviaPage.verifyQuestionNoStageText()
//       })


//       await test.step("input Countdown No Stage Sec", async () => {
//             await triviaPage.inputCountdownNoStageSec()
//       })



//       await test.step("enable Question No Stage", async () => {
//             await triviaPage.enableQuestionNoStage()
//       })


//       await test.step("verify Question Reveal Text", async () => {
//             await triviaPage.verifyQuestionRevealText()
//       })

//       await test.step("input Question Reveal Sec", async () => {
//             await triviaPage.inputQuestionRevealSec()
//       })




//       await test.step("verify Point Allocation Text", async () => {
//             await triviaPage.verifyPointAllocationText()
//       })

//       await test.step("inputPoint", async () => {
//             await triviaPage.inputPoint()
//       })

//       await test.step("input Point Sec", async () => {
//             await triviaPage.inputPointSec()
//       })

//       await test.step("verify Deduction Text", async () => {
//             await triviaPage.verifyDeductionText()
//       })





// })

// test("012TV-027 | Vaslidated Game StopLIve ", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })

//       await test.step("click Live Game Stop Btn", async () => {
//             await triviaPage.clickLiveGameStopBtn()
//             await page.waitForTimeout(3000)

//       })

//       await test.step("click Live Game Stop Btn", async () => {

//             await triviaPage.clickOkBtn()
            

//       })



































// })

// test.skip("012TV-028 | Vaslidated Game Control Panel Add Media Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })



//       await test.step("click Control Panel", async () => {
//             await triviaPage.clickControlPanel()
//       })

//       await test.step("click Add Media Btn", async () => {
//             await page.waitForTimeout(2000)
//             await triviaPage.clickAddMediaBtn()
//       })

//       await test.step("verify Add Media Text", async () => {
//             await triviaPage.verifyAddMediaText()
//       })

//       await test.step("verify Quiestion Text", async () => {
//             await triviaPage.verifyQuiestionText()
//       })


//       await test.step("input Question Text", async () => {
//             await triviaPage.inputQuestionText()
//       })

//       await test.step("input Countdown Sec", async () => {
//             await triviaPage.inputCountdownSec()
//       })

//       await test.step("click Mobile Media Redio Btn", async () => {
//             await triviaPage.clickMobileMediaRedioBtn()
//       })



//       await test.step("click To Upload Mobile Media File", async () => {
//             await functions.bannerImageUploadFunction()
//             await triviaPage.clickToUploadMobileMediaFile()
//             await functions.fileUploadCropper()
//       })



//       await test.step("click Mainboard Media Redio Btn", async () => {
//             await triviaPage.clickMainboardMediaRedioBtn()
//       })


//       await test.step("click To Upload Mainboard Media File", async () => {
//             await functions.bannerImageUploadFunction()
//             await triviaPage.clickToUploadMainboardMediaFile()
//             await functions.fileUploadCropper()
//             await page.waitForTimeout(3000)

//       })

//       await test.step("click Add Media Save Btn", async () => {
//             await triviaPage.clickAddMediaSaveBtn()

//       })





// await test.step("click Add Question", async () => {
//       await page.waitForTimeout(3000)
//       await triviaPage.clickAddQuestion()
// })

// await test.step("verify Question Text In Add Question", async () => {
//       await triviaPage.verifyQuestionTextInAddQuestion()
// })

// await test.step("input Question Text For Add Question", async () => {
//       await triviaPage.inputQuestionTextForAddQuestion()
// })

// await test.step("click To Upload Question Image", async () => {
//       await functions.bannerImageUploadFunction()
//       await triviaPage.clickToUploadQuestionImage()
//       await functions.fileUploadCropper()
// })


// await test.step("verify Answers Text", async () => {
//       await triviaPage.verifyAnswersText()
// })

// await test.step("click Add Answer Btn", async () => {
//       await triviaPage.clickAddAnswerBtn()
// })


// await test.step("input Answer Text", async () => {
//       await page.waitForTimeout(2000)
//       await triviaPage.inputAnswerText()
// })



// await test.step("click To Upload Answer Image", async () => {
//       await functions.bannerImageUploadFunction()
//       await triviaPage.clickToUploadAnswerImage()
//       await functions.fileUploadCropper()
// })



// await test.step("click Answer Save Btn", async () => {
//       await triviaPage.clickAnswerSaveBtn()
// })


// await test.step("click Add Media Save Btn", async () => {
//       await triviaPage.clickAddMediaSaveBtn()
// })







































// })


// test.skip("012TV-029 | Vashlidated Game Settings Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("click Game Settings", async () => {
//             await triviaPage.clickGameSettings()
//       })

//       await test.step("verify Game Settings Text", async () => {
//             await triviaPage.verifyGameSettingsText()
//       })

//       await test.step("verify Game Title Text", async () => {
//             await triviaPage.verifyGameTitleText()
//       })

//       await test.step("input Game Title", async () => {
//             await triviaPage.inputGameTitle()
//       })


//       await test.step("verify Countdown Title Text", async () => {
//             await triviaPage.verifyCountdownTitleText()
//       })

//       await test.step("input Game Countdown Title", async () => {
//             await triviaPage.inputGameCountdownTitle()
//       })

//       await test.step("verify Leaderboard Title Text", async () => {
//             await triviaPage.verifyLeaderboardTitleText()
//       })



//       await test.step("input Leaderboard Title", async () => {
       
//             await triviaPage.inputLeaderboardTitle()
          
//       })



//       await test.step("verify Alignments Title Text", async () => {
//             await triviaPage.verifyAlignmentsTitleText()
//       })


//       // await test.step("verify Game Title Alignment Text", async () => {
//       //       await triviaPage.verifyGameTitleAlignmentText()
           

//       // })

// //       await test.step("click Game Title Alignment LeftBtn", async () => {
// //             await triviaPage.clickGameTitleAlignmentLeftBtn()
// //       })





// // await test.step("click Game Title Alignment Right Btn", async () => {
// //       await triviaPage.clickGameTitleAlignmentRightBtn()
// // })

// // await test.step("click Game Title Alignment Center Btn", async () => {
// //       await triviaPage.clickGameTitleAlignmentCenterBtn()
// // })

// // await test.step("verify Logo Image Alignment Text", async () => {
// //       await triviaPage.verifyLogoImageAlignmentText()
// // })

// // await test.step("click Logo Image Alignment Left Btn", async () => {
      
// //       await triviaPage.clickLogoImageAlignmentLeftBtn()
     
// // })


// // await test.step("click Logo Image Alignment Right Btn", async () => {
// //       await triviaPage.clickLogoImageAlignmentRightBtn()
// // })

// // await test.step("click Logo Image Alignment Center Btn", async () => {
// //       await triviaPage.clickLogoImageAlignmentCenterBtn()
// // })

// // await test.step("verify Game Countdown Alignment Text", async () => {
// //       await triviaPage.verifyGameCountdownAlignmentText()
// // })

// // await test.step("click Game Countdown Alignment Left Btn", async () => {
// //       await triviaPage.clickGameCountdownAlignmentLeftBtn()
// // })


// // await test.step("click Game Countdown Alignment Right Btn", async () => {
// //       await triviaPage.clickGameCountdownAlignmentRightBtn()
// // })


// // await test.step("click Game Countdown Alignment Center Btn", async () => {
// //       await triviaPage.clickGameCountdownAlignmentCenterBtn()
// // })





// await test.step("verify Game Mainboard Countdown Text", async () => {
//       await triviaPage.verifyGameMainboardCountdownText()
// })

// await test.step("click Game Mainboard Countdown Bottom Btn", async () => {
//       await triviaPage.clickGameMainboardCountdownBottomBtn()
// })

// await test.step("click Game Mainboard Countdown Top Btn", async () => {
//       await triviaPage.clickGameMainboardCountdownTopBtn()
// })

// await test.step("verify Game Answer Shape Text", async () => {
//       await triviaPage.verifyGameAnswerShapeText()
// })


// await test.step("click To Enable Answer Shape", async () => {
//       await triviaPage.clickToEnableAnswerShape()
// })


// await test.step("verify Game Answer Shadow Text", async () => {
//       await triviaPage.verifyGameAnswerShadowText()
// })



// await test.step("click To Enable Selected Answer Gradient", async () => {
//       await triviaPage.clickToEnableSelectedAnswerGradient()
// })

// await test.step("verify Game Answer Display Button Text", async () => {
//       await triviaPage.verifyGameAnswerDisplayButtonText()
// })

// await test.step("click To Enable Answer Display Button", async () => {
//       await triviaPage.clickToEnableAnswerDisplayButton()
// })


// await test.step("verify Game Question Text Background Text", async () => {
//       await triviaPage.verifyGameQuestionTextBackgroundText()
// })


// await test.step("click To Enable Question Text Background", async () => {
//       await triviaPage.clickToEnableQuestionTextBackground()
// })


// await test.step("verify Game Answer Text Background Text", async () => {
//       await triviaPage.verifyGameAnswerTextBackgroundText()
// })


// await test.step("click To Enable Answer Text Background", async () => {
//       await triviaPage.clickToEnableAnswerTextBackground()
// })





// await test.step("verify Pre Game Heading Text", async () => {
//       await triviaPage.verifyPreGameHeadingText()
// })



// await test.step("input Pre Game Heading", async () => {
//       await triviaPage.inputPreGameHeading()
// })

// await test.step("verify Pre Game Massage Text", async () => {
//       await triviaPage.verifyPreGameMassageText()
// })

// await test.step("input Pre Game Massage", async () => {
//       await triviaPage.inputPreGameMassage()
// })


// await test.step("verify Post Game Massage Text", async () => {
//       await triviaPage.verifyPostGameMassageText()
// })

// await test.step("input Post Game Massage", async () => {
//       await triviaPage.inputPostGameMassage()
// })


// await test.step("verify Game Winning Massage Text", async () => {
//       await triviaPage.verifyGameWinningMassageText()
// })


// await test.step("input Game Winning Massage", async () => {
//       await triviaPage.inputGameWinningMassage()
// })









// })

// test("012TV-030 | Validated Game Design All The Image Upload Functionality", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDesign()
//       })


//       await test.step("Click Clear All Btn", async () => {
//             await triviaPage.clickClearAllBtn()
//       })


//       await test.step("click To Upload Marketing Massage File", async () => {
//             await page.waitForTimeout(2000)
//             await functions.bannerImageUploadFunction()
//             await triviaPage.clickToUploadMarketingMassageFile()
//             await functions.fileUploadCropper()
//       })

//       await test.step("click To Upload Mainboard Background File", async () => {
//             await functions.bannerImageUploadFunction()
//             await triviaPage.clickToUploadMainboardBackgroundFile()
//             await functions.fileUploadCropper()

//       })

//       await test.step("click To Upload Team Logo File", async () => {
//             await functions.bannerImageUploadFunction()
//             await triviaPage.clickToUploadTeamLogoFile()
//             await functions.fileUploadCropper()

//       })

//       await test.step("click To Upload Mobile Background File", async () => {
//             await functions.bannerImageUploadFunction()
//             await triviaPage.clickToUploadMobileBackgroundFile()
//             await functions.fileUploadCropper()

//       })

//       await test.step("click To Upload Game Title File", async () => {
//             await functions.bannerImageUploadFunction()
//             await triviaPage.clickToUploadGameTitleFile()
//             await functions.fileUploadCropper()

//       })


//       // await test.step("click Analytics Section", async () => {
//       //       await page.waitForTimeout(2000)
//       //       await triviaPage.clickAnalyticsSection()


//       // })
      

// })


// test("012TV-031 | Validated Game Delete Functionality", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()
//             await page.waitForTimeout(2000)


//       })


//       await test.step("Click Game Design", async () => {
//             await triviaPage.clickGameDeleteBtn()
//             await page.waitForTimeout(3000)
//       })


//       await test.step("click Delete Btn", async () => {
//             await triviaPage.clickDeleteBtn()
//       })

// })


// test("012TV-032 | Validate Game Prizing Section", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

//       await test.step("Login Admin", async () => {
//             await page.goto('/admin/#/sign-in')
//             await loginPage.login(data.username, data.password)
//             const title = await page.title();
//             expect(title).toBe('DXP Admin')
//       })

//       await test.step("Click On The Trivia Section", async () => {
//             await triviaPage.clickTriviaSection()

//       })


//       await test.step("click Prizing Section", async () => {
//             await triviaPage.clickPrizingSection()
//       })

//       await test.step("verify Prizing List Text", async () => {
//             await triviaPage.verifyPrizingListText()
//       })

//       await test.step("click Add New Prize Btn", async () => {
//             await triviaPage.clickAddNewPrizeBtn()
//       })

//       await test.step("verify Add New Prize Text", async () => {
//             await triviaPage.verifyAddNewPrizeText()
//       })


//       await test.step("verify Title Text", async () => {
//             await triviaPage.verifyTitleText()
//       })

//       await test.step("input Prize Title Text", async () => {
//             await triviaPage.inputPrizeTitleText()
//       })

//       await test.step("verify Add Prizing Total Prize Text", async () => {
//             await triviaPage.verifyAddPrizingTotalPrizeText()
//       })



//       await test.step("input Add Prizing Total Prize", async () => {
       
//             await triviaPage.inputAddPrizingTotalPrize()
          
//       })



//       await test.step("verify Add Prizing Distribution Type Text", async () => {
//             await triviaPage.verifyAddPrizingDistributionTypeText()
//       })


//       await test.step("select Add Prizing Distribution Type Manual", async () => {
//             await triviaPage.selectAddPrizingDistributionTypeManual()
           

//       })

//       await test.step("select Add Prizing Distribution Type Automatic", async () => {
//             await triviaPage.selectAddPrizingDistributionTypeAutomatic()
//       })





// await test.step("verify Condition Type Text", async () => {
//       await triviaPage.verifyConditionTypeText()
// })

// await test.step("click Condition Type Drop Down Option", async () => {
//       await triviaPage.clickConditionTypeDropDownOption()
// })

// await test.step("click Condition Type Participation Option", async () => {
//       await triviaPage.clickConditionTypeParticipationOption()
//       await page.waitForTimeout(2000)
// })

// // await test.step("click Condition Type Drop Down Option", async () => {
// //       await triviaPage.clickConditionTypeDropDownOption()
// // })

// // // await test.step("click Condition Type Multiple Game Play Option", async () => {
      
// // //       await triviaPage.clickConditionTypeMultipleGamePlayOption()
     
// // // })


// // await test.step("click Condition Type Drop Down Option", async () => {
// //       await triviaPage.clickConditionTypeDropDownOption()
// // })

// // await test.step("click Condition Type Points Option", async () => {
// //       await triviaPage.clickConditionTypePointsOption()
// // })

// await test.step("click Condition Type Drop Down Option", async () => {
//       await triviaPage.clickConditionTypeDropDownOption()
// })
// await test.step("click Condition Type Time Option", async () => {      
//       await triviaPage.clickConditionTypeTimeOption()
// })

// await test.step("verify Greater Thanor Equal Text", async () => {
//       await triviaPage.verifyGreaterThanorEqualText()
// })

// await test.step("input Greater Thanor Equal Hour", async () => {
//       await triviaPage.inputGreaterThanorEqualHour()
// })


// await test.step("input Greater Thanor Equal Minutes", async () => {
//       await triviaPage.inputGreaterThanorEqualMinutes()
// })


// await test.step("input Greater Thanor Equal Seconds", async () => {
//       await triviaPage.inputGreaterThanorEqualSeconds()
// })





// await test.step("verify Select Coupon Text", async () => {
//       await triviaPage.verifySelectCouponText()
// })

// await test.step("click Select Coupon Input Field", async () => {
//       await triviaPage.clickSelectCouponInputField()
// })

// await test.step("select Coupon", async () => {
//       await triviaPage.selectCoupon()
// })

// await test.step("click Select Btn", async () => {
//       await triviaPage.clickSelectBtn()
// })


// await test.step("click Prizing Save Btn", async () => {
//       await triviaPage.clickPrizingSaveBtn()
// })






// })
test("012TV-033 | Validate Configurations Text Visibility", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Now verify Configrations text",async()=>{
            await triviaPage.verifyConfigurationsText()
      })


      
      })
test("012TV-034 | Validate Plus Button Is Visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

            await test.step("Login Admin", async () => {
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
      
            await test.step("Click On The Trivia Section", async () => {
                  await triviaPage.clickTriviaSection()
      
            })
            await test.step("Now validate plus button",async()=>{
                  await triviaPage.clickAddNewConfigPlusBtn()
            })
      
      
            
})
test("012TV-035 | Validate Add Button is Visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

                  await test.step("Login Admin", async () => {
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
            
                  await test.step("Click On The Trivia Section", async () => {
                        await triviaPage.clickTriviaSection()
            
                  })
                  await test.step("Click add configuration plus button", async () => {
                        await triviaPage.clickAddNewConfigPlusBtn()
            
                  })

                  await test.step("Now input configrations name",async()=>{
                        await triviaPage.typeConfigurationName(triviaPage.getRandomName())
                  })
                  await test.step("Validate add configration button is working",async()=>{
                        await triviaPage.clickAddConfigrationBtn()
                  })
            
            
                  
})
test("012TV-036 | Validate New Configuration text and Cancel button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Click add configuration plus button", async () => {
            await triviaPage.clickAddNewConfigPlusBtn()
            await page.waitForTimeout(2000)

      })

      await test.step("Now verify New Configuration is visible",async()=>{
            await triviaPage.verifyNewConfigrationText()
      })
      // await test.step("Validate cancel configration button is working",async()=>{
      //       await triviaPage.clickCancelConfigrationBtn()
      // })


      
})

test("012TV-037 | Validate add button does not work without data.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Click add configuration plus button", async () => {
            await triviaPage.clickAddNewConfigPlusBtn()

      })

      await test.step("Now click add button",async()=>{
            await triviaPage.clickAddConfigrationBtn()
      })
      await test.step("Validate add button does not work without data",async()=>{
           
            await triviaPage.verifyerrorMessageIfCongigrationfieldIsBlank()
            await triviaPage.clickOkBtn()
            await triviaPage.clickCancelConfigrationBtn()
      })


      
})
test.skip("012TV-038 | Validate start button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Click Control panel section",async()=>{
            await triviaPage.clickControlPanelSection()
           
      })
      await test.step("Validate start button is visible", async () => {
            await triviaPage.clickStartBtn()
            await page.waitForTimeout(2000)
            await triviaPage.clickOkBtn()

      })

    


      
})
test("012TV-039 | Validate error message if round is  not created.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Now click start button", async () => {
            await triviaPage.clickStartBtn()
            await page.waitForTimeout(2000)
            await triviaPage.clickOkBtn()

      })
      await test.step("Validate error message if round is  not created.",async()=>{
            await page.waitForTimeout(1000)
            await triviaPage.errorMessageIfRoundIsNotCreated()
            await triviaPage.clickOkBtn()
      })

    


      
})
test("012TV-040 | Validate mobile link QR code is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Validate error message if round is  not created.",async()=>{
            await page.waitForTimeout(1000)
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.vreifymobileLinkQRCode()
            await triviaPage.clickMobileLinkPopupClose()
      })

    


      
})
test("012TV-041 | Validate mobile link button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Validate mobile link button is visible", async () => {
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.clickMobileLinkPopupClose()
            

      })

    


      
})
test("012TV-042 | Validate mobile link button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Validate mobile link button is working", async () => {
            await triviaPage.clickMobileLinkBtn()
            //await triviaPage.clickMobileLinkPopupClose()
            

      })


    


      
})
test("012TV-043 | Validate mobile link text is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Validate mobile link button is working", async () => {
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.verifyMobileLinkText()
            await triviaPage.clickMobileLinkPopupClose()

      })

      
})
test("012TV-044 | Validate Open link button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Now Add new configuration for validate Open link  is successfully open on mobile screen",async()=>{
            await triviaPage.clickAddNewConfigPlusBtn()
            await  triviaPage.typeConfigurationName(triviaPage.getRandomName())
            await triviaPage.clickAddConfigrationBtn()

      })

      await test.step("click mobile link  button is working", async () => {
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.verifyMobileLinkText()

      })
      let newTab=null;
       let triviamobilepage : triviaMobilePage
    await test.step("now open the game in mobile view", async() =>{
   
            //now click on open button
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            await triviaPage.clickMobileLinkPopupClose()
            await newTab.waitForTimeout(4000)
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail() 
            await triviamobilepage.typeAge()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            await newTab.waitForTimeout(4000)
            // const before = newTab.screenshot({ path: 'testData/before.png' , fullPage: true })
            //newTab.close()
      })


    


      
})
test("012TV-045 | Validate copy link successfully open on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("click mobile link copy button", async () => {
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.verifyMobileLinkText()
            //now click mobile link copy button
            await triviaPage.clickMobileLinkCopyBtn()
            await triviaPage.clickMobileLinkPopupClose()

      })
      let URL =''
      let triviamobilepage : triviaMobilePage
      await test.step("now copy the contents from system clipboard(URL Here)", async() =>{
                             URL = clipboard.readSync();
                             //console.log(URL);
                     })
       
            
      await test.step("Now open copy link on mobile",async()=>{
             triviamobilepage  = new triviaMobilePage(page)
             await triviamobilepage.GoTo(URL)
                     
            
             })
     

    await test.step("now open the game in mobile view", async() =>{
            await triviamobilepage.typeemail() 
            await  triviamobilepage.typephoneno()
            await triviamobilepage.typeAge()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            
      })


    


      
})
test("012TV-049 | Validate save QR code is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Validate mobile link button is working", async () => {
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.verifyMobileLinkText()

      })
      await test.step("Now validate save QR code button is working",async()=>{
            await triviaPage.validateSaveQRCode()
            await page.waitForTimeout(1000)
            await triviaPage.clickMobileLinkPopupClose()
      })


    


      
})
test("012TV-050 | Validate Copy QR code is working.", async ({ loginPage, functions,browser, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Validate mobile link button is working", async () => {
            await triviaPage.clickMobileLinkBtn()
           // await triviaPage.verifyMobileLinkText()

      })

      await test.step("Now validate Copy QR code is working",async()=>{
               await triviaPage.clickCopyQRCodeBtn()
                const newtab = browser.contexts()[0].newPage();
                (await newtab).goto('https://qr-code-scanner.net/')
                await (await newtab).locator('//a[@title="Scan QR code from paste"]').click()
                await (await newtab).waitForTimeout(2000)
                await (await newtab).locator('//button[text()="Paste"]').click()
                await (await newtab).waitForTimeout(2000)
                await (await newtab).locator("//div[@id='qr-content']//a[1]").click()
                await (await newtab).waitForTimeout(2000)

      })


    


      
})
test.skip("012TV-051 | Validate Copy QR code is working", async ({ loginPage, functions,browser, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Validate mobile link button is working", async () => {
            await triviaPage.clickMobileLinkBtn()
           // await triviaPage.verifyMobileLinkText()

      })
      let newTab = ''
      let triviamobilepage : triviaMobilePage
      
      //let newtab2 = ''

      await test.step("Now validate Copy QR code is working",async()=>{
            
               await triviaPage.clickCopyQRCodeBtn()
                let newtab = (await browser.contexts()[0].newPage());
                (await newtab).goto('https://qr-code-scanner.net/')
                await (await newtab).locator('//a[@title="Scan QR code from paste"]').click()
                await (await newtab).locator('//button[text()="Paste"]').click()
                await triviaPage.clickMobileLinkPopupClose()
                   //await newtab.locator("//div[@id='qr-content']//a[1]").click()
                   //triviamobilepage = new triviaMobilePage(newtab)
                   newtab = await triviamobilepage.openGameusingQRCode()
                   triviamobilepage = new triviaMobilePage(newtab)
                   
                   
                   //await newtab.openGameusingQRCode()
                   
                   await triviamobilepage.typephoneno()
                   await triviamobilepage.typeemail()
                   await triviamobilepage.selectbirthdate()
                   await triviamobilepage.typeAge()
                   await triviamobilepage.typezip()
                   await triviamobilepage.clicksubmit()
    
                

      })

    


      
})
test("012TV-052 | Validate  fonts text is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Validate fonts text", async () => {
           await triviaPage.clickgamedesignSection()
           await triviaPage.clickfontsSection()
           await triviaPage.verifyFontsText()

      })
      
})
test("012TV-053 | Validate Upload Font text is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Validate Upload Font text is visible", async () => {
           await triviaPage.clickgamedesignSection()
           await triviaPage.clickfontsSection()
           await triviaPage.verifyUploadFontText()

      })
      
})
test("012TV-054 | Validate  Add Round button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate Add Round button is working",async()=>{
            await triviaPage.clickAddRoundBtn()
            await page.waitForTimeout(1000)
            await triviaPage.inputAddRoundName()
            await page.waitForTimeout(1000)
            await triviaPage.clickAddBtn()
    
    })
      
})
test("012TV-055 | Validate  Edit Round  is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate Edit Round is working",async()=>{
            await triviaPage.clickRoundNameThreeDot()
            await triviaPage.ClickeditRoundName()
            await triviaPage.EditRoundName()
            await triviaPage.InputEditRoundName()
            await triviaPage.clickSaveBtn()
           
    
    })
      
})
test("012TV-056 | Validate  EDIT Round and Round Name text is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate EDIT ROUND and Round Name  text is visible",async()=>{
            await triviaPage.clickRoundNameThreeDot()
            await triviaPage.ClickeditRoundName()
            await triviaPage.verifyEDITROUNDText()
            await triviaPage.verifyRoundNameText()
            await triviaPage.clickEditRoundNameCancelBtn()
           
    
    })
      
})
test("012TV-057 | Validate round changing checkbox is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate round changing checkbox is visible.",async()=>{
            await triviaPage.ClickRoundChangingCheckbox()
            await page.waitForTimeout(2000)
            
           
    
    })
      
})
test("012TV-058 | Validate Output  button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate output button is visible",async()=>{
            await triviaPage.clickOutputBtn()
            await triviaPage.verifyOutputScreenLinkText()
            await triviaPage.clickOutputScreenLinkCloseBtn()
            await page.waitForTimeout(2000)
    })
      
})
test("012TV-059 | Validate mobile link output button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("click ouput button",async()=>{
            await triviaPage.clickOutputBtn()
            await triviaPage.verifyOutputScreenLinkText()
            //await triviaPage.clickOutputScreenLinkOpenBtn()
            await page.waitForTimeout(2000)
            
           
    
    })
    let newTab = null
    let triviamobilepage : triviaMobilePage
    await test.step("Validate output screen link button is working",async()=>{
     // 
     newTab = await triviaPage.clickOutputScreenLinkOpenBtn()
     triviamobilepage = new triviaMobilePage(newTab)
      await newTab.waitForTimeout(2000)
      
     

})
      
})
test("012TV-060 | Validate mobile link copy button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("click ouput button",async()=>{
            await triviaPage.clickOutputBtn()
            await triviaPage.verifyOutputScreenLinkText()
            //await triviaPage.clickOutputScreenLinkOpenBtn()
            await page.waitForTimeout(2000)
            
           
    
    })
    await test.step("Now click Output screen link copy bytton",async()=>{
       await triviaPage.clickOutputScreenLinkCopyBtn()
    })

    let URL = ''
    await test.step("now copy the contents from system clipboard(URL Here)", async() =>{
      URL = clipboard.readSync();
      //console.log(URL);
})
    await test.step('now open new page with copied URL',async()=>{
      const triviamobilepage = new triviaMobilePage(page)
      await triviamobilepage.GoToforOutpurScreenLink(URL)
      await page.waitForTimeout(2000) 
})
      
})

test("012TV-061 |validate set-up tab is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate set-up tab",async()=>{
            await triviaPage.verifySetUpText()
            await triviaPage.verifyCountDownStageText()
            await triviaPage.verifyQuestionText()
            await triviaPage.verifyAnswerText()
            await triviaPage.verifyLeaderboardText()
    })
      
})
test("012TV-062 |validate Game Mode tab is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate Game Mode Tab",async()=>{
            await triviaPage.verifyGameModeText()
            await triviaPage.verifyManualText()
            await triviaPage.verifyAutomaticText()
            await triviaPage.verifyOnDemandText()
    })
      
})
test("012TV-063 |validate Automatic Timers tab is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate Automatic Timers Tab is visible",async()=>{
            await triviaPage.verifyAutomaticTimersText()
            await triviaPage.verifyinputCountdownTimersfield()
            //await triviaPage.verifyLeaderboardDurationText()
            await triviaPage.verifyinputLeaderboardDurationfield()
            
    })
      
})
test("012TV-064 |validate Points Allocation tab is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate Points Allocation tab is visible",async()=>{
          await triviaPage.verifyPointsAllocationText()
          await triviaPage.verifyinputPointsfield()
          await triviaPage.verifySelectPointsFirstValu()
          await triviaPage.verifySelectPointsSecondValu()
          await triviaPage.verifySelectPointsThirdValu()
          await triviaPage.verifySelectPointsFourthValu()            
    })
      
})
test("012TV-065 |validate CountdownText all Radio button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate CountdownText all Radio button is visible",async()=>{
          await triviaPage.verifyCountdowntextText()
          await triviaPage.verifyCountdowntextRadio_Time()
          await triviaPage.verifyCountdowntextRadio_Points()
                    
    })
      
})
test("012TV-066 |validate CountdownType all Radio button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate CountdownType all Radio button is visible",async()=>{
          await triviaPage.verifyCountdownTypeText()
          await triviaPage.verifyCountdownTypeRadio_Circular()
          await triviaPage.verifyCountdownTypeRadio_Lenear()
                    
    })
      
})
test("012TV-067 |validate Question Sequence tab is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate Question Sequence tab is visible",async()=>{
          await triviaPage.verifyQuestionSequenceText()
          await triviaPage.verifyQuestionSequenceRandomBtn()
          await triviaPage.verifyQuestionsequenceSequenceBtn()
         
                    
    })
      
})
test("012TV-068 |validate Leaderboard tab is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate Question Sequence tab is visible",async()=>{
          //await triviaPage.verifyQuestionSequenceText()
          await triviaPage.verifyLeaderboardEventBtn()
          await triviaPage.verifyLeaderboardRoundBtn()              
    })
      
})
test("012TV-069 |validate Error message if countdown stage more than 99 second inputs in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate error message in countdown stage",async()=>{
          //await triviaPage.verifyQuestionSequenceText()
          await triviaPage.inputCountDownStage()
          await page.waitForTimeout(2000)
          await triviaPage.verifyErrorMessageInCountdownStage()           
    })
      
})
test("012TV-070 |validate Error message if Leader board  inputs more than 99 second  in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate error message in leader board",async()=>{
          //await triviaPage.verifyQuestionSequenceText()
          await triviaPage.inputLeaderBoardDuration()
          await page.waitForTimeout(2000)
          await triviaPage.verifyErrorMessageInLeaderboardDuration()           
    })
      
})
test("012TV-071 |validate Error message if Question No stage  inputs more than 99 second  in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate error message in question no stage",async()=>{
          //await triviaPage.verifyQuestionSequenceText()
          await triviaPage.inputQuestionNoStage()
          await page.waitForTimeout(2000)
          await triviaPage.verifyErrorMessageInQuestionNoStage()          
    })
      
})
test("012TV-072 |validate Error message if Question Reveal inputs more than 99 second  in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate error message in question reveal",async()=>{
          //await triviaPage.verifyQuestionSequenceText()
          await triviaPage.inputQuestionReveal()
          await page.waitForTimeout(2000)
          await triviaPage.verifyErrorMessageInQuestionReveal()         
    })
      
})
test("012TV-073 |validate Error message if points allocation points field inputs more than 9999 second  in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate error message in points Allocation poins field",async()=>{
          //await triviaPage.verifyQuestionSequenceText()
          await triviaPage.inputPointAllocationPointsfield()
          await page.waitForTimeout(2000)
          await triviaPage.verifyErrorMessageInPointsAllocation()        
    })
      
})
test("012TV-074 |validate Error message if points allocation seconds field inputs more than 9999 second  in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate error message in points Allocation seconds field",async()=>{
          //await triviaPage.verifyQuestionSequenceText()
          await triviaPage.inputPointAllocationSecondfield()
          await page.waitForTimeout(2000)
          await triviaPage.verifyErrorMessageInPointsAllocation()        
    })
      
})
test("012TV-075 | Validate  export error message in add round section if question didn't add.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("Validate Export error message if question didn't add",async()=>{
            await triviaPage.clickExportBtn()
            await triviaPage.clickConfirmExportBtn()
            await triviaPage.verifyFailedExportMessage()
            await triviaPage.verifyErrorMessageExportBtnIfQuestionisnotAdd()
            await triviaPage.clickOkBtn()
    
    })
      
})
test("012TV-076 | Validate  Add question button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("Validate Add question button is working",async()=>{
            await triviaPage.clickAddQuestionBtn()
            
    
    })
      
})
test("012TV-077 | Validate add question and Custom Question type text is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("Verify add question and Custom Question type text is visible.",async()=>{
            await triviaPage.clickAddQuestionBtn()
            await triviaPage.verifyAddQuestionText()
            await triviaPage.verifyCustomQuestionTypetext()
            await triviaPage.clickAddQuestionClosBtn()
            
    
    })
      
})
test("012TV-078 | Validate Question type Radio button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("Verify add question and Custom Question type text is visible.",async()=>{
            await triviaPage.clickAddQuestionBtn()
            await triviaPage.clickFreeResponseRadioBtn()
            await triviaPage.clickMultipleChoiceRadioBtn()
            await triviaPage.clickAddQuestionClosBtn()
            
    
    })
      
})
test("012TV-079 | Validate Add media button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("Verify add question and Custom Question type text is visible.",async()=>{
          await triviaPage.clickAddMediaBtn()
          await triviaPage.verifyAddMediatext()
    })
      
})
test("012TV-080 | Validate mobile media image and video radio button is visible in add media section.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("click mobile media button.",async()=>{
          await triviaPage.clickAddMediaBtn()
          await triviaPage.verifyAddMediatext()
    })
    await test.step("Verify mobile media image and video radio button is visible",async()=>{
      await triviaPage.verifyMobileMediatext()
      await triviaPage.clickMobileMediaImageRadioBtn()
      await triviaPage.clickMobileMediaVideoRadioBtn()
})
      
})
test("012TV-081 | Validate Mainboard media image and video radio button is visible in add media section.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("click mobile media button.",async()=>{
          await triviaPage.clickAddMediaBtn()
          await triviaPage.verifyAddMediatext()
    })
    await test.step("Verify add question and Custom Question type text is visible.",async()=>{
      await triviaPage.verifyMainboardMediatext()
      await triviaPage.clickMainboardmediaVideoRadioBtn()
      await triviaPage.clickMainboardmediaVideoRadioBtn()
})
      
})
test("012TV-082 | Validate free question type successfully add.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("click add question button",async()=>{
         await triviaPage.clickAddQuestionBtn()
    })
    await test.step("click free response radio button",async()=>{
      await triviaPage.clickFreeResponseRadioBtn()
 })
 await test.step("now type question",async()=>{
      await triviaPage.inputAddQuestion()
 })
 await test.step("now type correct answer for add question",async()=>{
      await triviaPage.clickAddCorrectAnswerBtn()
      await triviaPage.inputCorrectAnswer()
      await triviaPage.clikCorrectAnswerSaveBtn()
      const ele = page.frameLocator('iframe').locator("//button[text()='Ok']")
      if( ele!= null){
        ele.click()
        await triviaPage.clikCorrectAnswerSaveBtn()
      }
 })
 await test.step("now type First acctable answer for add question",async()=>{
      await triviaPage.clickFirstAddAcctableAnswerBtn()
      await triviaPage.inputFirstAcctableAnswer()
      await triviaPage.clikAcctableAnswerSaveBtn()
      const ele = page.frameLocator('iframe').locator("//button[text()='Ok']")
      if( ele!= null){
        ele.click()
        await triviaPage.clikAcctableAnswerSaveBtn()
      }
 })
 await test.step("now type Second acctable answer for add question",async()=>{
      await triviaPage.clickSecondAddAcctableAnswerBtn()
      await triviaPage.inputSecondAcctableAnswer()
      await triviaPage.clikAcctableAnswerSaveBtn()
      const ele = page.frameLocator('iframe').locator("//button[text()='Ok']")
      if( ele!= null){
        ele.click()
        await triviaPage.clikAcctableAnswerSaveBtn()
      }
 })
 await test.step("now click add question save button",async()=>{
      await page.waitForTimeout(1000)
      await triviaPage.clickAddQuestionSaveBtn()
 })
   
})
test("012TV-083 | Validate multiple choice question type successfully add.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("click add question button",async()=>{
         await triviaPage.clickAddQuestionBtn()
    })
    await test.step("click multiple choise  radio button",async()=>{
      await triviaPage.clickMultipleChoiceRadioBtn()
 })
 await test.step("Now type question",async()=>{
      await triviaPage.inputAddQuestion()
 })
 await test.step("Now type first answer for multiple choice question",async()=>{
      await triviaPage.clickAddAnswerBtn()
      await triviaPage.inputFirstMultipleQuestionAnswer()
      await triviaPage.clickAnswerSaveBtn()
      const ele = page.frameLocator('iframe').locator("//button[text()='Ok']")
      if( ele!= null){
        ele.click()
        await triviaPage.clickAnswerSaveBtn()
      }
 })
 await test.step("Now type Second answer for multiple choice question",async()=>{
      await triviaPage.clickAddAnswerBtn()
      await triviaPage.inputSecondMultipleQuestionAnswer()
      await triviaPage.clickAnswerSaveBtn()
      const ele = page.frameLocator('iframe').locator("//button[text()='Ok']")
      if( ele!= null){
        ele.click()
        await triviaPage.clickAnswerSaveBtn()
      }
 })
 await test.step("now click add question save button",async()=>{
      await page.waitForTimeout(1000)
      await triviaPage.clickAddQuestionSaveBtn()
 })
   
})
test("012TV-084 | Validate Start/Live button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Click Control panel section",async()=>{
            await triviaPage.clickControlPanelSection()
           
      })
      await test.step("validate start button",async()=>{
            await page.waitForTimeout(1000)
            await triviaPage.clickStartBtn()
            await page.waitForTimeout(1000)
            await triviaPage.clickOkBtn()
      })
      await test.step("Validate Live button",async()=>{
            await page.waitForTimeout(1000)
            await triviaPage.clickLiveBtn()
            await page.waitForTimeout(1000)
            await triviaPage.clickOkBtn()
      })
   
})
test("012TV-085 | Validate export button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Click Control panel",async()=>{
            await triviaPage.clickControlPanelSection()
      })
    
      await test.step("Click add question button", async () => {
           
           await triviaPage.clickExportBtn()
           await triviaPage.validateExportBtn()
           await page.waitForTimeout(1000)
      })
      
})
test("012TV-086 | Validate input RGB Background color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
           //await triviaPage.clickGameDesign()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
            
    
    })
    await test.step("Now validate input background color is working",async()=>{
      await triviaPage.verifyMobileBackgroundTextInColorSection()
      await triviaPage.clickBackgroundColorBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-087 | Validate  Background color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
    
      // await test.step("Clik start button", async () => {
      //      await triviaPage.clickStartBtn()
      //      await triviaPage.clickOkBtn()
      // })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify background color",async()=>{
                  //await page.waitForTimeout(5000)
                  await triviamobilepage.verifyBackgroundcolor()
            })
            await test.step("Now click clear all button in color section",async()=>{
                  await triviaPage.clickMobileLinkPopupClose()
                  await triviaPage.clickgamedesignSection()
                  await triviaPage.clickColorSectionBtn()
                  await triviaPage.clickClearAllBtn()
            })
      
})
test("012TV-088 | Validate input RGB General/Button text color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickgamedesignSection()
    
    })
    await test.step("Now validate input background color is working",async()=>{
      await triviaPage.verifyGeneralOrButtonText()
      await triviaPage.clickGeneralButtonTextColorBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-089 | Validate  General/Button text successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
    
      await test.step("Clik start button", async () => {
           await triviaPage.clickStartBtn()
           await triviaPage.clickOkBtn()
      })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify General/Button text color on mobile screen",async()=>{
                  await page.waitForTimeout(5000)
                  await triviamobilepage.verifyGeneralButtonTextcolor()
            })
            await test.step("Now click clear all button in color section",async()=>{
                  await triviaPage.clickMobileLinkPopupClose()
                  await triviaPage.clickgamedesignSection()
                  await triviaPage.clickColorSectionBtn()
                  await triviaPage.clickClearAllBtn()
            })
      
})
test("012TV-090 | Validate input RGB Button background color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
            
    
    })
    await test.step("Now validate input background color is working",async()=>{
      await triviaPage.verifyButtonBackgroundText()
      await triviaPage.clickButtonBackgrounColorBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-091 | Validate Button  Background color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
    
      await test.step("Clik start button", async () => {
           await triviaPage.clickStartBtn()
           await triviaPage.clickOkBtn()
           await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify General/Button text color on mobile screen",async()=>{
                  await page.waitForTimeout(5000)
                  await triviamobilepage.verifyButtonBackgroundcolor()
            })
            await test.step("Now click clear all button in color section",async()=>{
                  await triviaPage.clickMobileLinkPopupClose()
                  await triviaPage.clickgamedesignSection()
                  await triviaPage.clickColorSectionBtn()
                  await triviaPage.clickClearAllBtn()
            })
      
})
test("012TV-092 | Validate input RGB Question text color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
            
    
    })
    await test.step("Now validate input background color is working",async()=>{
      await triviaPage.verifyQuestionText()
      await triviaPage.clickQuestionTextBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-093 | Validate Question text color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
    
      await test.step("Clik start button", async () => {
           await triviaPage.clickStartBtn()
           await triviaPage.clickOkBtn()
           await page.waitForTimeout(1000)
           await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify General/Button text color on mobile screen",async()=>{
                  await page.waitForTimeout(5000)
                  await triviamobilepage.verifyQuestionTextColor()
            })
            await test.step("Now click clear all button in color section",async()=>{
                  await triviaPage.clickMobileLinkPopupClose()
                  await triviaPage.clickgamedesignSection()
                  await triviaPage.clickColorSectionBtn()
                  await triviaPage.clickClearAllBtn()
            })
      
})
test("012TV-094 | Validate input RGB Question background color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            
    
    })
    await test.step("Now validate input background color is working",async()=>{
      await triviaPage.verifyQuestionBackgroundText()
      await triviaPage.clickQuestionBackgroundBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-095 | Validate Question Background color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
    
      await test.step("Clik start button", async () => {
           await triviaPage.clickStartBtn()
           await page.waitForTimeout(2000)
           await triviaPage.clickOkBtn()
           await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify General/Button text color on mobile screen",async()=>{
                  await page.waitForTimeout(5000)
                  await triviamobilepage.verifyQuestionBackgroundColor()
            })
            await test.step("Now click clear all button in color section",async()=>{
                  await triviaPage.clickMobileLinkPopupClose()
                  await triviaPage.clickgamedesignSection()
                  await triviaPage.clickColorSectionBtn()
                  await triviaPage.clickClearAllBtn()
            })
      
})
test("012TV-096 | Validate input RGB Answer text color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
            
    
    })
    await test.step("Now validate input Answer text color is working",async()=>{
      await triviaPage.verifyAnswerText()
      await triviaPage.clickAnswerTextBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-097 | Validate input RGB answer background color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
    })
    await test.step("Now validate input answer background color is working",async()=>{
      await triviaPage.verifyAnswerBackgroundText()
      await triviaPage.clickAnswerBackgroundBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-098 | Validate input RGB question frame color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
    })
    await test.step("Now validate input question frame color is working",async()=>{
      await triviaPage.verifyQuestionFrameText()
      await triviaPage.clickQuestionFrameBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-099 | Validate input RGB answer frame color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
    })
    await test.step("Now validate input answer frame color is working",async()=>{
      await triviaPage.verifyAnswerFrameText()
      await triviaPage.clickAnswerFrameBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-0100 | Validate input RGB selected answer color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
    })
    await test.step("Now validate input selected answer color is working",async()=>{
      await triviaPage.verifySelectedAnswerText()
      await triviaPage.clickSelectedAnswerColorBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-0101 | Validate input RGB correct answer color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
    })
    await test.step("Now validate input correct answer color is working",async()=>{
      await triviaPage.verifyCorrectAnswerText()
      await triviaPage.clickCorrectAnswerColorBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-0102 | Validate input RGB incorrect answer color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
    })
    await test.step("Now validate input incorrect answer color is working",async()=>{
      await triviaPage.verifyIncorrectAnswerText()
      await triviaPage.clickIncorrectAnswerColorBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-0103 | Validate input RGB Leaderboard text color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
    })
    await test.step("Now validate input leaderboard text color is working",async()=>{
      await triviaPage.verifyLeaderboardtextTextInColorSection()
      await triviaPage.clickLeaderboardTextColorBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-0104 | Validate input RGB Leaderboard background color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            //await page.waitForTimeout(2000)
            await triviaPage.verifygamedesignText()
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
    })
    await test.step("Now validate input Leaderboard background color is working",async()=>{
      await triviaPage.verifyLeaderboardBackgroundtextTextIncolorSection()
      await triviaPage.clickLeaderboardBackgroundColorBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-0105 | Validate  upload fonts is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Click On The Game design", async () => {
            await triviaPage.clickgamedesignSection()
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()

      })
    
      await test.step("Open upload fonts section", async () => {
           await triviaPage.clickfontsSection()
           await triviaPage.verifyFontsText()

      })
      await test.step("Validate upload fonts is working",async()=>{
            await functions.fontUploadFunction()
            await triviaPage.clickUploadFontBtn()
            await page.waitForTimeout(2000)
            await triviaPage.verifySuccessfullyUploadFont()
    
    })
      
})
test("012TV-0106 | Validate  upload fonts successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
            await triviaPage.inputCountDownStage()
      })
    
      await test.step("Clik start button", async () => {
           await triviaPage.clickStartBtn()
           await triviaPage.clickOkBtn()
      })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
           
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify fornt",async()=>{
                  await page.waitForTimeout(5000)
                  await triviamobilepage.verifyFontAppliedSuccessfullyInMobileScreen()
                  await triviaPage.clickMobileLinkPopupClose()
                  await triviaPage.clickLiveBtn()
                  await page.waitForTimeout(1000)
                  await triviaPage.clickOkBtn()
            })
      
})
test("012TV-0107 | Validate  upload game title logo is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open upload and dialogs section",async()=>{
            await triviaPage.openUploadAndDialogsSection()
            
    
    })
    await test.step("Now delete trivia all uploads if already uploaded",async()=>{
      await triviaPage.deleteGameTitleLogo()
      await triviaPage.deleteTeamLogoBtn()
      await triviaPage.deleteSponsorLogoBtn()
      await triviaPage.deleteMainboardBackgroundBtn()
      await triviaPage.deleteMobileBackgroundBtn()
    })
    await test.step("Now validate game title logo upload",async()=>{
      await triviaPage.verifyGameTitleText()
      await functions.portraitBackgroundImageUploadHelper()
      await triviaPage.clickGametitleupload()
      await functions.fileUploadCropper()
      await page.waitForTimeout(3000)
    })
      
})
test("012TV-0108 | Validate  upload Game title logo successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
    
      await test.step("Clik start button", async () => {
           await triviaPage.clickStartBtn()
           await triviaPage.clickOkBtn()
      })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify fornt",async()=>{
                  await page.waitForTimeout(5000)
                  await triviamobilepage.clickHomeBtn()
                  await triviamobilepage.verifyGameTitleLogoAppliedSuccessfullyInMobileScreen()
            })
      
})
test("012TV-0109 | Validate  upload Team  logo image is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open upload and dialogs section",async()=>{
            await triviaPage.openUploadAndDialogsSection()
            
    
    })
    await test.step("Now validate game title logo upload",async()=>{
      //await triviaPage.deleteTeamLogoBtn()
      await triviaPage.verifyGameTitleText()
      await functions.logoImageUploadFunction()
      await triviaPage.clickTeamLogoUpload()
      //await triviaPage.click
      await functions.fileUploadCropper()
      await page.waitForTimeout(3000)
    })
      
})
test("012TV-0110 | Validate  upload Team  logo successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
    
      await test.step("Clik start button", async () => {
           await triviaPage.clickStartBtn()
           await triviaPage.clickOkBtn()
      })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify fornt",async()=>{
                  await page.waitForTimeout(5000)
                  await triviamobilepage.clickHomeBtn()
                  await triviamobilepage.verifyGameTitleLogoAppliedSuccessfullyInMobileScreen()
            })
      
})
test("012TV-0111 | Validate  upload Sponsor  logo image is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open upload and dialogs section",async()=>{
            await triviaPage.openUploadAndDialogsSection()
            
    
    })
    await test.step("Now validate game title logo upload",async()=>{
      await triviaPage.verifySponsorLogoText()
      await functions.logoImageUploadFunction()
      await triviaPage.clickSponsorLogoUpload()
      //await triviaPage.click
      await functions.fileUploadCropper()
      await page.waitForTimeout(3000)
    })
      
})
test("012TV-0112 | Validate  upload Sponsor  logo successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
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

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
    
      await test.step("Clik start button", async () => {
           await triviaPage.clickStartBtn()
           await triviaPage.clickOkBtn()
      })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify fornt",async()=>{
                  await page.waitForTimeout(5000)
                  await triviamobilepage.clickHomeBtn()
                  await triviamobilepage.verifySponsorLogoAppliedSuccessfullyInMobileScreen()
            })
      
})

      
