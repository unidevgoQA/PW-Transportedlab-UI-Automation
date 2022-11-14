import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'






test("Varify Global Prizing Section", async ({ loginPage, MainMenu, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {


        await test.step("Login Admin And Land To Home Screen", async () => {

                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

   
                await MainMenu.clickHomeAvater();
                await MainMenu.mainMenuBtn();



        })

        await test.step("006GP-001 | Verify Admin Successfully Typography Section", async () => {

                                //click Global Prizing Page
                                await globalPrizingPage.clickGlobalPrizingPage()

                 //click AddNewPrize Btn
                 await globalPrizingPage.clickAddNewPrizeBtn()

                 //input Prize Name
                 await globalPrizingPage.inputPrizeName()
 
                 //select Prize Category
                 await globalPrizingPage.selectPrizeCategory()
 
                 // //select airdrop catagory
                 // await globalPrizingPage.selectPrizeCategoryAirDrop()
 
                 // //select Prize Category
                 // await globalPrizingPage.selectPrizeCategory()
 
                 //select airdrop catagory
                 await globalPrizingPage.selectPrizeCategoryGeneral()






                // //click AddNewPrize Btn
                // await globalPrizingPage.clickAddNewPrizeBtn()

                await globalPrizingPage.OpenEditor()
                await globalPrizingPage.Couponcanvaslabl()
                await globalPrizingPage.Tfont()
                await globalPrizingPage.Typographylabl()
                await page.waitForTimeout(2000)
                //   await globalPrizingPage.TaddText()         

                await globalPrizingPage.changeTextlabl()
                await page.waitForTimeout(2000)

                await globalPrizingPage.clickAddTextBtn()
                await globalPrizingPage.clickToSelectText()
                await page.waitForTimeout(2000)
                await globalPrizingPage.inputCouponTitleText()

                //   await globalPrizingPage.ChangeText()
                await globalPrizingPage.Center()
                await globalPrizingPage.Positionlabl()
                await globalPrizingPage.Left()
                await globalPrizingPage.Right()

                await globalPrizingPage.Alignment()
                await globalPrizingPage.Fontlabl()
                await globalPrizingPage.Font()
                await globalPrizingPage.Midnight()
                await globalPrizingPage.Font()
                await globalPrizingPage.Thin()
                await globalPrizingPage.Bold()
                await globalPrizingPage.Italic()
                await globalPrizingPage.Underline()
                await globalPrizingPage.Blocktype()
                await globalPrizingPage.Boldd()
                await globalPrizingPage.Lighter()
                await globalPrizingPage.Boldd()
                await globalPrizingPage.Normal()

                await globalPrizingPage.Boldd()
                await globalPrizingPage.Bolder()

                await globalPrizingPage.Fontsize()
                await globalPrizingPage.TBackBtn()
                await globalPrizingPage.TNextBtn()
                await globalPrizingPage.TDeleteBtn()
                await globalPrizingPage.TMerzinBtn()
                await globalPrizingPage.TCopyBtn()
                // await globalPrizingPage.XBtn()
                // await globalPrizingPage.YBtn()
                // await globalPrizingPage.WBtn()
                // await globalPrizingPage.HBtn()
                await globalPrizingPage.Fillabl()
                await globalPrizingPage.FillBtn()
                await globalPrizingPage.Colorpickerlabl()
                await globalPrizingPage.SwatchBtn()
                await globalPrizingPage.SwatchBtn1()
                await globalPrizingPage.Delete()
                await globalPrizingPage.RGBlabl()
                await globalPrizingPage.RGB1()
                await globalPrizingPage.RGB2()
                await globalPrizingPage.RGB3()
                await globalPrizingPage.RGB4()
                await globalPrizingPage.DropBtn()
                await globalPrizingPage.Radial()
                await globalPrizingPage.DropBtn()
                await globalPrizingPage.Diagonal()
                await globalPrizingPage.DropBtn()
                await globalPrizingPage.Vertical()
                await globalPrizingPage.DropBtn()
                await globalPrizingPage.Horizontal()

                await globalPrizingPage.DropBtn()
                await globalPrizingPage.Solid()

                await globalPrizingPage.Save()
                await page.waitForTimeout(3000)



        })
        await test.step("006GP-002 | Verify Admin Successfully Image Section", async () => {
                //const screenshot = await page.screenshot();

                await globalPrizingPage.Image()
                await globalPrizingPage.Backgroundlabl()
                await globalPrizingPage.Backgroundimagelabl()

                await globalPrizingPage.FgImage()
                await page.waitForTimeout(5000)
                
                await globalPrizingPage.LgImage()
                await page.waitForTimeout(5000)

                await globalPrizingPage.BcImage()
                await page.waitForTimeout(5000)


                
                await globalPrizingPage.Logoimagelabl()

        })


        await test.step("006GP-003 | Verify Admin Successfully Code Code Section", async () => {
                //const screenshot = await page.screenshot();

                await globalPrizingPage.Code()
                await globalPrizingPage.Codelabl()
                await globalPrizingPage.Textcode()
                await globalPrizingPage.Barcode()
                await globalPrizingPage.Addexpire()
                await globalPrizingPage.BarCodelabl()
                await globalPrizingPage.Barcodevalue()

        })


        await test.step("006GP-004 | Verify Admin Successfully Share Section", async () => {
                //const screenshot = await page.screenshot();

                await globalPrizingPage.ShareBtn()
                // await globalPrizingPage.Sharelabl()
                // await globalPrizingPage.Filllabl()
                await globalPrizingPage.ShfillBtn()
                await globalPrizingPage.ShSwatchBtn()
                await globalPrizingPage.ShSwatchBtn1()
                await globalPrizingPage.ShDelete()
                await globalPrizingPage.ShRGB1()
                await globalPrizingPage.ShRGB2()
                await globalPrizingPage.ShRGB3()
                await globalPrizingPage.ShRGB4()
                await globalPrizingPage.ShDropBtn()
                await globalPrizingPage.ShRadial()
                await globalPrizingPage.ShDropBtn()
                await globalPrizingPage.ShDiagonal()
                await globalPrizingPage.ShDropBtn()
                await globalPrizingPage.ShVertical()
                await globalPrizingPage.ShDropBtn()
                await globalPrizingPage.ShHorizontal()
                await globalPrizingPage.ShDropBtn()
                await globalPrizingPage.ShSolid()
                await globalPrizingPage.ShSave()
                // await globalPrizingPage.Textcollab()
                await globalPrizingPage.TextcolfillBtn()
                await globalPrizingPage.ShSwatchBtn()
                await globalPrizingPage.ShSwatchBtn1()
                await globalPrizingPage.ShDelete()
                await globalPrizingPage.ShRGB1()
                await globalPrizingPage.ShRGB2()
                await globalPrizingPage.ShRGB3()
                await globalPrizingPage.ShRGB4()
                await globalPrizingPage.ShSave()
                // await globalPrizingPage.Changetextlab()
                await globalPrizingPage.Changetext()
                await globalPrizingPage.Shareby()
                await globalPrizingPage.SMSBtn()
                await globalPrizingPage.EmailBtn()
                await globalPrizingPage.WalletBtn()

                await globalPrizingPage.ShrSave()

        })

        await test.step("006GP-005 | Verify Admin Successfully Wizard Editor", async () => {
                //const screenshot = await page.screenshot();

                await globalPrizingPage.Clickopenwizard()
                
                await globalPrizingPage.ClickImageupload()
                await page.waitForTimeout(10000)
                await globalPrizingPage.ClickNext()
                // await globalPrizingPage.ClickIconlogo()
                // await page.waitForTimeout(10000)
                await globalPrizingPage.ClickNext()

                
                await globalPrizingPage.InputHeadername()
                
                await globalPrizingPage.ClickNext()
                await globalPrizingPage.clickHeaderOkBtn()
                await page.waitForTimeout(2000)

                await globalPrizingPage.clickHeaderNameInputField()

                await globalPrizingPage.InputHeadername()
                // await globalPrizingPage.clickHeaderNameInputField()

                await globalPrizingPage.ClickNext()

                // await globalPrizingPage.UploadPrimaryImagr()
                // await page.waitForTimeout(10000)
                await globalPrizingPage.ClickNext()
                await globalPrizingPage.Clickcalendar()
                await globalPrizingPage.Clickdate()
                
                await globalPrizingPage.DateSave()
                
                await globalPrizingPage.ClickNext()
                await globalPrizingPage.Clickcbarcode()
                await globalPrizingPage.inputBarCode()
                await globalPrizingPage.ClickNext()
                
                await globalPrizingPage.Clicksharedropdown()
                await globalPrizingPage.ClickshareEmail()
                await globalPrizingPage.Clicksharegooglewallet()
                await globalPrizingPage.Clickshareapplewallet()
                await globalPrizingPage.clickOnScreen()
                
                await globalPrizingPage.ClickNext()
                await globalPrizingPage.Clickcontinueeditor()
                await globalPrizingPage.ClickSave()
                await page.waitForTimeout(2000)

                await globalPrizingPage.verifyDiscriptionText()
                



        })

        await test.step("006GP-006 | Verify Admin Successfully Add New Prize", async () => {
 
               

                // //upload Prize Image
                // await globalPrizingPage.uploadPrizeImage()


                //input Prize Discription
                await globalPrizingPage.inputPrizeDiscription()

                //click Prize Expiration None
                await globalPrizingPage.clickPrizeExpirationNone()

                //click Load CSV Check Box
                await globalPrizingPage.clickLoadCSVCheckBox()
                await page.waitForTimeout(2000)

                // //Upload CSV file
                // await globalPrizingPage.uploadCSVFile()
                // await page.waitForTimeout(4000)

                // Issue here..

                //click Generate Text code Check Box
                await globalPrizingPage.clickGenerateTextcodeCheckBox()

                //click Auto generate Check Box
                await globalPrizingPage.clickAutogenerateCheckBox()



                //click Auto generate Check Box
                await globalPrizingPage.inputAutoGeneratePrifix()

                //click SMS Sharing Check Box
                await globalPrizingPage.clickSMSSharingCheckBox()


                //click Email Sharing Check Box
                await globalPrizingPage.clickEmailSharingCheckBox()


                //click Wallet Sharing Check Box
                await globalPrizingPage.clickWalletSharingCheckBox()


                //click Limit PerUser Check Box
                await globalPrizingPage.clickLimitPerUserCheckBox()

                //input Limit Per User
                await globalPrizingPage.inputLimitPerUser()

                //click per Event Check Box
                await globalPrizingPage.clickperEventCheckBox()

                //click Save Btn
                await globalPrizingPage.clickSaveBtn()


                await page.waitForTimeout(7000)

        })

        await test.step("006GP-007 | Verify Admin Successfully Delete Add New Prize", async () => {

                //search Prize
                await globalPrizingPage.searchPrize()

                await page.waitForTimeout(3000)


                //delete Prize
                await globalPrizingPage.deletePrize()

                await page.waitForTimeout(3000)


                //click Ok Btn
                await globalPrizingPage.clickOkBtn()

                await page.waitForTimeout(6000)

        })


})


// test("006GP-002 | Varify Global Prizing Typography Section", async ({ loginPage, MainMenu, languagePage, menuPage, singupPage, globalPrizingPage, page, }, testInfo) => {




//         await page.goto('/admin/#/sign-in')
//         await loginPage.login(data.username, data.password)
//         const title = await page.title();
//         expect(title).toBe('DXP Admin')

//         await MainMenu.clickHomeAvater();
//         await MainMenu.mainMenuBtn();


//         await test.step("006GP-001 | Verify Admin Successfully Typography Section", async () => {


//                 //click Global Prizing Page
//                 await globalPrizingPage.clickGlobalPrizingPage()


//                 //click AddNewPrize Btn
//                 await globalPrizingPage.clickAddNewPrizeBtn()

//                 await globalPrizingPage.OpenEditor()
//                 await globalPrizingPage.Couponcanvaslabl()
//                 await globalPrizingPage.Tfont()
//                 await globalPrizingPage.Typographylabl()
//                 await page.waitForTimeout(2000)
//                 //   await globalPrizingPage.TaddText()         

//                 await globalPrizingPage.changeTextlabl()
//                 await page.waitForTimeout(2000)

//                 await globalPrizingPage.clickAddTextBtn()
//                 await globalPrizingPage.clickToSelectText()
//                 await page.waitForTimeout(2000)
//                 await globalPrizingPage.inputCouponTitleText()

//                 //   await globalPrizingPage.ChangeText()
//                 await globalPrizingPage.Center()
//                 await globalPrizingPage.Positionlabl()
//                 await globalPrizingPage.Left()
//                 await globalPrizingPage.Right()

//                 await globalPrizingPage.Alignment()
//                 await globalPrizingPage.Fontlabl()
//                 await globalPrizingPage.Font()
//                 await globalPrizingPage.Midnight()
//                 await globalPrizingPage.Font()
//                 await globalPrizingPage.Thin()
//                 await globalPrizingPage.Bold()
//                 await globalPrizingPage.Italic()
//                 await globalPrizingPage.Underline()
//                 await globalPrizingPage.Blocktype()
//                 await globalPrizingPage.Boldd()
//                 await globalPrizingPage.Lighter()
//                 await globalPrizingPage.Boldd()
//                 await globalPrizingPage.Normal()

//                 await globalPrizingPage.Boldd()
//                 await globalPrizingPage.Bolder()

//                 await globalPrizingPage.Fontsize()
//                 await globalPrizingPage.TBackBtn()
//                 await globalPrizingPage.TNextBtn()
//                 await globalPrizingPage.TDeleteBtn()
//                 await globalPrizingPage.TMerzinBtn()
//                 await globalPrizingPage.TCopyBtn()
//                 await globalPrizingPage.XBtn()
//                 await globalPrizingPage.YBtn()
//                 await globalPrizingPage.WBtn()
//                 await globalPrizingPage.HBtn()
//                 await globalPrizingPage.Fillabl()
//                 await globalPrizingPage.FillBtn()
//                 await globalPrizingPage.Colorpickerlabl()
//                 await globalPrizingPage.SwatchBtn()
//                 await globalPrizingPage.SwatchBtn1()
//                 await globalPrizingPage.Delete()
//                 await globalPrizingPage.RGBlabl()
//                 await globalPrizingPage.RGB1()
//                 await globalPrizingPage.RGB2()
//                 await globalPrizingPage.RGB3()
//                 await globalPrizingPage.RGB4()
//                 await globalPrizingPage.DropBtn()
//                 await globalPrizingPage.Radial()
//                 await globalPrizingPage.DropBtn()
//                 await globalPrizingPage.Diagonal()
//                 await globalPrizingPage.DropBtn()
//                 await globalPrizingPage.Vertical()
//                 await globalPrizingPage.DropBtn()
//                 await globalPrizingPage.Horizontal()

//                 await globalPrizingPage.DropBtn()
//                 await globalPrizingPage.Solid()

//                 await globalPrizingPage.Save()
//                 await page.waitForTimeout(3000)



//         })
//         await test.step("006GP-001 | Verify Admin Successfully Image Section", async () => {
//                 //const screenshot = await page.screenshot();

//                 await globalPrizingPage.Image()
//                 await globalPrizingPage.Backgroundlabl()
//                 await globalPrizingPage.Backgroundimagelabl()

//                 await globalPrizingPage.BcImage()
//                 await page.waitForTimeout(10000)
//                 await globalPrizingPage.Logoimagelabl()

//         })


//         await test.step("006GP-001 | Verify Admin Successfully Code Code Section", async () => {
//                 //const screenshot = await page.screenshot();

//                 await globalPrizingPage.Code()
//                 await globalPrizingPage.Codelabl()
//                 await globalPrizingPage.Textcode()
//                 await globalPrizingPage.Barcode()
//                 await globalPrizingPage.Addexpire()
//                 await globalPrizingPage.BarCodelabl()
//                 await globalPrizingPage.Barcodevalue()

//         })


//         await test.step("006GP-001 | Verify Admin Successfully Share Section", async () => {
//                 //const screenshot = await page.screenshot();

//                 await globalPrizingPage.ShareBtn()
//                 await globalPrizingPage.Sharelabl()
//                 await globalPrizingPage.Filllabl()
//                 await globalPrizingPage.ShfillBtn()
//                 await globalPrizingPage.ShSwatchBtn()
//                 await globalPrizingPage.ShSwatchBtn1()
//                 await globalPrizingPage.ShDelete()
//                 await globalPrizingPage.ShRGB1()
//                 await globalPrizingPage.ShRGB2()
//                 await globalPrizingPage.ShRGB3()
//                 await globalPrizingPage.ShRGB4()
//                 await globalPrizingPage.ShDropBtn()
//                 await globalPrizingPage.ShRadial()
//                 await globalPrizingPage.ShDropBtn()
//                 await globalPrizingPage.ShDiagonal()
//                 await globalPrizingPage.ShDropBtn()
//                 await globalPrizingPage.ShVertical()
//                 await globalPrizingPage.ShDropBtn()
//                 await globalPrizingPage.ShHorizontal()
//                 await globalPrizingPage.ShDropBtn()
//                 await globalPrizingPage.ShSolid()
//                 await globalPrizingPage.ShSave()
//                 await globalPrizingPage.Textcollab()
//                 await globalPrizingPage.TextcolfillBtn()
//                 await globalPrizingPage.ShSwatchBtn()
//                 await globalPrizingPage.ShSwatchBtn1()
//                 await globalPrizingPage.ShDelete()
//                 await globalPrizingPage.ShRGB1()
//                 await globalPrizingPage.ShRGB2()
//                 await globalPrizingPage.ShRGB3()
//                 await globalPrizingPage.ShRGB4()
//                 await globalPrizingPage.ShSave()
//                 await globalPrizingPage.Changetextlab()
//                 await globalPrizingPage.Changetext()
//                 await globalPrizingPage.Shareby()
//                 await globalPrizingPage.SMSBtn()
//                 await globalPrizingPage.EmailBtn()
//                 await globalPrizingPage.WalletBtn()

//                 await globalPrizingPage.ShrSave()

//         })

//         await test.step("006GP-001 | Verify Admin Successfully Wizard Editor", async () => {
//                 //const screenshot = await page.screenshot();

//                 await globalPrizingPage.Clickopenwizard()
                
//                 await globalPrizingPage.ClickImageupload()
//                 await page.waitForTimeout(10000)
//                 await globalPrizingPage.ClickNext()
//                 await globalPrizingPage.ClickIconlogo()
//                 await page.waitForTimeout(10000)
//                 await globalPrizingPage.ClickNext()

                
//                 await globalPrizingPage.InputHeadername()
                
//                 await globalPrizingPage.ClickNext()
//                 await globalPrizingPage.clickHeaderOkBtn()
//                 await page.waitForTimeout(2000)

//                 await globalPrizingPage.clickHeaderNameInputField()

//                 await globalPrizingPage.InputHeadername()
//                 // await globalPrizingPage.clickHeaderNameInputField()

//                 await globalPrizingPage.ClickNext()

//                 await globalPrizingPage.UploadPrimaryImagr()
//                 await page.waitForTimeout(10000)
//                 await globalPrizingPage.ClickNext()
//                 await globalPrizingPage.Clickcalendar()
//                 await globalPrizingPage.Clickdate()
                
//                 await globalPrizingPage.DateSave()
                
//                 await globalPrizingPage.ClickNext()
//                 await globalPrizingPage.Clickcbarcode()
//                 await globalPrizingPage.ClickNext()
                
//                 await globalPrizingPage.Clicksharedropdown()
//                 await globalPrizingPage.ClickshareEmail()
//                 await globalPrizingPage.Clicksharegooglewallet()
//                 await globalPrizingPage.Clickshareapplewallet()
//                 await globalPrizingPage.clickOnScreen()
                
//                 await globalPrizingPage.ClickNext()
//                 await globalPrizingPage.Clickcontinueeditor()
//                 await globalPrizingPage.ClickSave()
//                 await page.waitForTimeout(5000)
                



//         })

// })