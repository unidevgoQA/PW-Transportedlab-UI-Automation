import test, { expect } from "@fixtures/basePages";
import { devices, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
// import clipboard from 'clipboardy';
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
test("012TV-034 | Validate Plus Button Is Visible ", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

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
test("012TV-035 | Validate Add Button is Visible ", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

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
                        await triviaPage.typeConfigurationName()
                  })
                  await test.step("Validate add configration button is working",async()=>{
                        await triviaPage.clickAddConfigrationBtn()
                  })
            
            
                  
})
test.only("012TV-036 | Validate New Configration text and Cancel button is visible", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

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

test.only("012TV-037 | Validate add button does not work without data.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

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
            await triviaPage.clickCancelConfigrationBtn()
            //await triviaPage.
      })


      
})

