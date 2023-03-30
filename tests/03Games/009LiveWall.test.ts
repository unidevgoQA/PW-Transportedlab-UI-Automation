import test, { expect } from "@fixtures/basePages";
import { BrowserContext, webkit, devices, Page, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
// const clipboard = require("clipboardy");
import liveWallMobileScreenPage from "@pages/liveWallMobile.page";
import BaseFunctions from "@base-function/baseFunctions";
import livewallMobilePage from '../../pages/MobileGamesPage/livewall_mobile_game.page';
import mainBoardPage from "@pages/Mainboard.page";
import liveWallPage from "@pages/liveWall.page";
import prizeDropPage from "@pages/prizeDrop.page";
//import liveWallMobilePage from "@pages/liveWallMobile.page";

let url: any;
const clipboard = require("clipboardy");
// test.describe("Suite demo", () => {
//         let page: Page;
//         let context: BrowserContext;
//         test.beforeAll(async ({ browser }) => {
//             context = await browser.newContext();            
//             await page.goto("/admin/#/sign-in");
//         })


test("009FanSee-3|validate 'warning not forget to stop session pop up'  is visible", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)

        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {


        //click Live Wall Section
        await liveWallPage.click_Fan_see_Section()
        await liveWallPage.validate_warning_stop_message_text()
})
test("009FanSee-4|validate Add new configuration for Fansee is working", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("009FanSee-6|now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                 await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
        })
        await test.step("validate add new instance is working", async () => {
                await liveWallPage.click_plus_button()
                await liveWallPage.add_new_config_name()
                await liveWallPage.clickSaveBtn()
        })
})
test("009FanSee-40|Validate Font Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {
        await test.step("login admin", async () => {
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



        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        await test.step("now navigate to Fansee page and game design of an instance", async () => {
                await liveWallPage.click_Fan_see_Section()

              
        })
       await test.step('Now click on remove message popup', async() =>{ 
                await liveWallPage.remove_message_popup()
        })

        await test.step('Now click on tripple dot', async() =>{ 
                 await liveWallPage.click_trippledot()
         })
        //click Design Page
        await test.step('Now click on design page', async() =>{ 
                await liveWallPage.clickDesignPage()
         })
        //click Live Wall Section
        await test.step('009FanSee-38|	Validate Fonts title is visible.', async () => {
                //verify Fonts Title Text
                await liveWallPage.verifyFontsTitleText()

        })

        //delete Uploaded Feed Right Image
        // await liveWallPage.deleteUploadedFeedRightImage()

        await test.step("009FanSee-41|	Validate fonts delete button is visible and delete.", async () => {
                //delete Uploaded Font
                await liveWallPage.deleteUploadedFont()
        })
        // //verify Upload Font Text
        await test.step("009FanSee-39|	Validate Upload Font text is visible ", async () => {
                await liveWallPage.verifyUploadFontText()
                await page.waitForTimeout(2000)
        })

        await test.step("009FanSee-40|	Validate fonts upload is working", async () => {
                await functions.fontUploadFunction()


                //verify Upload Font Text
                await liveWallPage.clickToUploadFont()

                await page.waitForTimeout(6000)

        })


        // })

})
test("009FanSee-44|Validate Background Color input functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {
        await test.step("login admin", async () => {
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



        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage ", async () => {
                await liveWallPage.click_Fan_see_Section()

               
        })
       await test.step('Remove the warning', async() =>{ 
        await liveWallPage.remove_message_popup()

        })
        await test.step('Open the tripple dot in top', async() =>{ 
        await liveWallPage.click_trippledot()
         })
        //click Design Page
      await test.step('Now open design page', async() =>{ 
        await liveWallPage.clickDesignPage()
       })



        //click Clear Btn
        // await liveWallPage.clickClearBtn()
        await test.step("009FanSee-45|	Validate Color Picker title is visible", async () => {
                await liveWallPage.verify_image_upload_text()
        })
         //click Background Color Picker Input Field
        await test.step('Now open background color picker', async() =>{ 
         await liveWallPage.clickBackgroundColorPickerInputField()
         })
        await test.step("009FanSee-48|	Validate Background Color picker plus button is visible and clickable.", async () => {
                await liveWallPage.clickplusbuttonswatches()
                await liveWallPage.clickdeletebuttonswatches()
        })

        await test.step("009FanSee-47|	validate solid dropdowns ", async () => {
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_horizontal_button()
        })
        await test.step("009FanSee-49|	Validate vertical dropdowns", async () => {
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_vertical_button()
        })
        await test.step("009FanSee-50|	Validate click radial option in solid dropdowns", async () => {

                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_radial_button()
        })
        await test.step("009FanSee-51|	Validate diagonal section in solid dropdowns ", async () => {
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_diagonal_button()
        })

        await test.step("back to solid again", async () => {
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_solid_button()
        })

        await test.step('Now select the last swatches',async()=>{
                await liveWallPage.select_last_swatch()
        })

        await test.step("009FanSee-52|	Validate Background Color picker RGB sections are working", async () => {
                //input Background First RGB Color
                await liveWallPage.input_Red_Color('114')


                //input Background Box Color RGB Second
                await liveWallPage.input_blue_color('18')



                //input Background Box Color RGB Third
                await liveWallPage.input_green_color('18')
        })



        await test.step("009FanSee-53|	Validate Background Color picker vertical opacity slider is visible and clickable.", async () => {
                //input Background Box Color Opacity
                await liveWallPage.inputColorOpacity('100')

        })

        await test.step("009FanSee-54|	Validate Background Color picker  hex input is working ", async () => {
                //input Background Box Color HEX Color
                await liveWallPage.inputHEXColor('711212FF')

        })

        await test.step('now save the changed color',async()=>{
                 //click Save Btn
                await liveWallPage.clickSaveBtn()

                await page.waitForTimeout(2000)
        })


})
// })
test("009FanSee-58|validate Font color picker is working", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        await test.step("login admin", async () => {
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



        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

               
        })
        await test.step('Click on remove message', async() =>{ 
                await liveWallPage.remove_message_popup()
        })

        await test.step('click on tripple dot', async() =>{ 
                await liveWallPage.click_trippledot()
                //click Design Page
        })
        await test.step('Click on design page', async() =>{ 
                await liveWallPage.clickDesignPage()
        })

        await test.step("009FanSee-56|	Validate Font Color text is visible and button is clickabley", async () => {
                //009FanSee-56|	Validate Font Color text is visible and button is clickable.
                await liveWallPage.clickFontColorPickerInputField()
        })
        await test.step("009FanSee-59|	Validate Font color picker plus button is visible and clickable.", async () => {
                await liveWallPage.clickplusbuttonswatches()
                  
        })
       
       
        await test.step("009FanSee-61|	Validate Font color picker vertical section", async () => {
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_vertical_button()
        })

        await test.step("009FanSee-62|	Validate Font Color picker radial button", async () => {
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_radial_button()
        })
        await test.step("009FanSee-63|	Validate Font color picker diagonal button", async () => {
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_diagonal_button()
                
        })
       await test.step('Now click on Solid button', async() =>{ 
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_solid_button()
        })

       await test.step('Now click on delete button of swatches', async() =>{ 
                await liveWallPage.clickdeletebuttonswatches()      
       })   
       
        await test.step('select the last swatches',async()=>{
        await liveWallPage.select_last_swatch()
        })

     


        await test.step("009FanSee-65|	Validate Font color picker RGB is working", async () => {
                //input Font First RGB Color
                await liveWallPage.input_Red_Color('111')
        })

         //input Font Box Color RGB Second
       await test.step('input green color', async() =>{ 
         await liveWallPage.input_green_color('48')

        })
         //input Font Box Color RGB Third
        await test.step('input blue color', async() =>{ 
         await liveWallPage.input_blue_color('214')
         })

         //input Font Box Color Opacity
        await test.step('input color opacity', async() =>{ 
         await liveWallPage.inputColorOpacity('98')
         })
         

        await test.step("009FanSee-66|	Validate Font color picker hex and save button", async () => {
                
                 await liveWallPage.inputHEXColor(' '+'#6F30D6FA')
                
        })
        //click Save Btn
        await test.step('now click on save button', async() =>{ 
                        await liveWallPage.clickSaveBtn()

                        await page.waitForTimeout(2000)
        })


})
test("009FanSee-67|Validate countdown ColorPicker Color Input Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        await test.step("login admin", async () => {
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



        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()


        })
        await test.step('Click on remove message popup', async () => {
                await liveWallPage.remove_message_popup()

        })
        await test.step('click on tripple dot', async () => {
                await liveWallPage.click_trippledot()
        })
        //click Design Page
        await test.step('Now navigate to design pag', async () => {
                await liveWallPage.clickDesignPage()
        })

        await test.step("009FanSee-68|	Validate Countdown Color picker text is visible and working", async () => {
                //click Font Color Picker Input Field
                await liveWallPage.click_countdown_ColorPicker_InputField()

        })
        await test.step("009FanSee-69|	validate swatches section in countdown color picker is working", async () => {
                await liveWallPage.clickplusbuttonswatches()


        })
        await test.step("select vertical button", async () => {
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_vertical_button()

        })

        await test.step('Select radial button', async () => {
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_radial_button()
        })
        await test.step('Select diagonal button', async () => {
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_diagonal_button()
        })
        await test.step('Select solid button', async () => {
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_solid_button()
        })
        await test.step('Delete the newly added swatches', async () => {
                await liveWallPage.clickdeletebuttonswatches()
        })

        await test.step('Now select the last swatch', async () => {
                await liveWallPage.select_last_swatch()
        })
        //input Font First RGB Color
        await test.step("now upload count_down_colors | First update the red color ", async () => {
                await liveWallPage.input_Red_Color('43')

        })

        await test.step('upload green color', async () => {
                //input Font Box Color RGB Second
                await liveWallPage.input_green_color('189')
        })

        //input Font Box Color RGB Third
        await test.step('update blue color', async () => {
                await liveWallPage.input_blue_color('221')

        })
        //input Font Box Color Opacity
        await test.step('update color opacity', async () => {
                await liveWallPage.inputColorOpacity('98')
        })

        //input Font Box Color HEX Color
        await test.step('update hex color', async () => {
                await liveWallPage.inputHEXColor('2BBDDDFF')
        })
        //click Save Btn
        await test.step('now click the save button and wait', async () => {
                await liveWallPage.clickSaveBtnColorpicker()
                await page.waitForTimeout(2000)
        })

})
test("009FanSee-80|Validate Mobile Background Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()


        })

        await test.step('Remove the message', async () => {
                await liveWallPage.remove_message_popup()
        })

        await test.step('open the top settings', async () => {
                await liveWallPage.click_trippledot()
        })
        await test.step('now click on design page', async () => {
                await liveWallPage.clickDesignPage()
        })
        await test.step("now select mobile background image", async () => {
                //click ToUpload Feed Right Image
                await liveWallPage.select_image_for_mobile_background()

        })
        await test.step('Now click on mobile background image', async () => {
                await liveWallPage.mobile_background_image_upload()
        })
        await test.step('Now upload a mobile background', async () => {
                await liveWallPage.Image_uploader_For_mobile_background()
                await liveWallPage.wait_mobile_back_upload()
        })

})
test("000 | Select All The Menu Ready For UI Verification", async ({ loginPage, functions,singupPage, MainMenu, languagePage, menuPage, page, }, testInfo) => {



    await test.step('log in as admin', async() =>{ 
        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')
    
     })
      await test.step('Click home avatar and click main menu button', async() =>{ 
        await MainMenu.clickHomeAvater();
        await MainMenu.mainMenuBtn();
       })
     await test.step('click mobile design', async() =>{ 
        await MainMenu.clickMobileDesign();
      })
    
       await test.step('select menu page', async() =>{ 
        //Click on the menu page
        await menuPage.clickMenuPage()
        })
        await test.step('input background color', async() =>{ 
                await menuPage.clickBackgroundColorInputField()
                await menuPage.inputBackgroundColor()
                await menuPage.clickColorPickerWindowSaveBtn()
        })
    
      await test.step('input text color', async() =>{ 
        await menuPage.clickTextColorInputField()
        await menuPage.inputTextColor()
        await menuPage.clickColorPickerWindowSaveBtn()
       })
    
    
      await test.step('input active background color', async() =>{ 
        await menuPage.clickActiveBackgroundColorInputField()
        await menuPage.inputActiveBackgroundColor()
        await menuPage.clickColorPickerWindowSaveBtn()
       })
    
    
      await test.step('input active text color', async() =>{ 
        await menuPage.clickActiveTextColorInputField()
        await menuPage.inputActiveTextColor()
        await menuPage.clickColorPickerWindowSaveBtn()
       })
    
    
       await test.step('select bottom alignment', async() =>{ 
        await menuPage.selectHideAlignmentMenuBar()
       
        })
       await test.step('select ananymous login', async() =>{ 
        await singupPage.clickSignUpPage()
        await singupPage.clickAnonymousLogin()
        })
       await test.step('select age checkbox', async() =>{ 
        await singupPage.clickAgeCheckBox()
        })
      await test.step('Select date of birthcheckbox', async() =>{ 
        await singupPage.clickDateOfBirthCheckBox()
       })
       await test.step('Select phone', async() =>{ 
        await singupPage.clickPhoneNumberCheckBox()
       })
      await test.step('select email address checkbox', async() =>{ 
        await singupPage.clickEmailAddressCheckBox()
       })
      await test.step('select date of birth checkbox', async() =>{ 
        await singupPage.clickDateOfBirthCheckBox()
       })
       await test.step('select additional info zip code checkbox', async() =>{ 
        await singupPage.clickAdditionalInfoZipCodeCheckbox()
        })
    

})
test("009FanSee-234|validate mobile background upload is reflected on mobile",async({ loginPage, liveWallPage, functions,browser, page }, testInfo)=>{
        await test.step("login to admin",async()=>{
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

        await test.step("009FanSee-6|navigate to fanseepage and open Admin page", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickAdminPage()
        })
        let newTab = null;
        let newlivewallgame: livewallMobilePage
        await test.step("009FanSee-9|Validate Mobile QR Code button visible and clickable.",async()=>{
                 //click Mobile QR Code
                 await liveWallPage.click_Mobile_button()
                 
        })
       
        await test.step('009FanSee-14|	validate open link in Normal QR code is working',async()=>{
                newTab= await liveWallPage.click_open_link_button_with_page()
                newlivewallgame= new livewallMobilePage(newTab)
                await liveWallPage.clickCloseBtn()
        })
        await test.step('now check the updated logo',async()=>{
                await newlivewallgame.typeAge()
                await newlivewallgame.typeemail()
                await newlivewallgame.typephoneno()
                await newlivewallgame.typezip()
                await newlivewallgame.selectbirthdate()
                await newlivewallgame.clicksubmit()
                
        })
        await test.step('now validate background video is working',async()=>{
                await newlivewallgame.screenshot_matcher_mobile_background()
        })
        await test.step('now delete the uploaded image',async()=>{
                await liveWallPage.clickDesignPage()
                await liveWallPage.mobile_background_image_delete()
        })  
})
test("009FanSee-270 | validate mobile background video upload is working",async({ loginPage, liveWallPage, functions,browser, page }, testInfo)=>{
          // await test.step("Login Admin And land To Home Screen", async () => {

          await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })

        await test.step("now mobile background image", async () => {
                //click ToUpload Feed Right Image
                await liveWallPage.select_video_for_mobile_background()
                await liveWallPage.video_uploader_for_mobile_background()
                await liveWallPage.wait_mobile_back_upload()
        })   
})
test('009FanSee-271 | validate mobile background video is reflected on mobile',async({ loginPage, liveWallPage, functions,browser, page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickAdminPage()
        })
        await test.step("open mobile link and copy",async()=>{
                  //click Mobile QR Code
                //   await liveWallPage.click_start_button()
                  await liveWallPage.click_Mobile_button()
                  await liveWallPage.click_copy_link_button()
        })
        let url= await clipboard.readSync()
        let newPage:livewallMobilePage
        await test.step('now open a new browser and check', async()=>{
                const newContext= await browser.newContext()
                newPage = new livewallMobilePage(await newContext.newPage())
                await newPage.GoTo(url)
        })
        await test.step('now check the updated logo',async()=>{
                await newPage.typeAge()
                await newPage.typeemail()
                await newPage.typephoneno()
                await newPage.typezip()
                await newPage.selectbirthdate()
                await newPage.clicksubmit()
                await newPage.video_mobile_background()
                
        })

        await test.step('close the elements and stop the game',async()=>{
            await liveWallPage.clickCloseBtn()  
            await liveWallPage.clickDesignPage()
            await liveWallPage.delete_mobile_back()
        }) 
})
test("009FanSee-79|Validate Mobile Homescreen logo Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()
        })
        await test.step('click on remove message popup', async() =>{ 
                await liveWallPage.remove_message_popup()

        })
        await test.step('click on tripple dot', async() =>{ 
                await liveWallPage.click_trippledot()
        })
        await test.step('click on tripple dot', async() =>{ 
                await liveWallPage.clickDesignPage()
        })
        await test.step("click to upload on mobile home screenlogo", async () => {
                await liveWallPage.mobile_home_screen_logo_upload()
               
        })
        await test.step('now upload an image', async() =>{ 
                await liveWallPage.Image_uploader_For_mobile_home_screen_logo()
                await liveWallPage.wait_mobile_Home_screen_upload()
        })
})
test('009FanSee-235| Validate mobile Homescreen logo is reflected on mobile',async({ loginPage, liveWallPage,browser, functions, page }, testInfo) =>{
        await test.step("login admin", async () => {
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
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

        })
        await test.step('click on remove message popup', async() =>{ 
                await liveWallPage.remove_message_popup()

        })
        await test.step('click on tripple dot', async() =>{ 
                await liveWallPage.click_trippledot()
        })
        await test.step('click on tripple dot', async() =>{ 
                await liveWallPage.clickAdminPage()
        })
        await test.step("open mobile link and copy",async()=>{
                  //click Mobile QR Code
                  await liveWallPage.click_Mobile_button()
                  await liveWallPage.click_copy_link_button()
        })
        let url= await clipboard.readSync()
        let newPage:livewallMobilePage
        await test.step('now open a new browser and check', async()=>{
                const newContext= await browser.newContext()
                newPage = new livewallMobilePage(await newContext.newPage())
                await newPage.GoTo(url)
        })
       await test.step('provide data in mobile page', async() =>{ 
                await newPage.typeAge()
                await newPage.typeemail()
                await newPage.typephoneno()
                await newPage.typezip()
                await newPage.selectbirthdate()
                await newPage.clicksubmit()
      })
        await test.step('now check the updated logo',async()=>{
              
                await newPage.screenshot_matcher_mobile_home_screen()
        })
        await test.step('now delete the uploaded image',async()=>{
                await liveWallPage.clickCloseBtn()
               
        })
        await test.step('now go to the design page', async() =>{ 
               await liveWallPage.clickDesignPage()
        })
        await test.step('now delete the updated mobile homescreen', async() =>{ 
              await liveWallPage.delete_mobile_homescreen()
        })
})
test("009FanSee-81|Validate Output Background Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("validate mobile home screen logo upload works", async () => {
                await liveWallPage.select_image_for_output_background()
                await liveWallPage.output_background_upload()
                //need to use png here
                await liveWallPage.Image_uploader_For_output_background()
                await liveWallPage.wait_OutPut_background()
        })
})
test('009FanSee-237| Validate output background image is reflected on mainboard',async({ loginPage, liveWallPage, functions, page }, testInfo) =>{
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

               
        })
        await test.step('now click on remove message', async() =>{ 
                await liveWallPage.remove_message_popup()

        })
        await test.step('click on tripple dot', async() =>{ 
                await liveWallPage.click_trippledot()
        })
        await test.step('click on the admin page', async() =>{ 
                await liveWallPage.clickAdminPage()
        })
        let newTab = null;
        let newmainboard: mainBoardPage
        await test.step('now click on output background',async()=>{
                await liveWallPage.clickOutPutBtn()
                newTab= await liveWallPage.click_open_link_button_with_page()
                newmainboard= new mainBoardPage(newTab)            
        })

        await test.step('now click ok and wait for image',async()=>{
                await newmainboard.clickokbutton()
                //need to use png here
               
        })
        await test.step('', async() =>{ 
                await newmainboard.validate_output_image()
       })

        await test.step('now delete the uploaded image',async()=>{
                await liveWallPage.clickCloseBtn()
                
        })
      await test.step('now click on design page and click on delete', async() =>{ 
                await liveWallPage.clickDesignPage() 
                await liveWallPage.delete_output_back()
       })
})
test('009FanSee-269|Validate Output Background video Upload Functionality',async({ loginPage, liveWallPage, functions, page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("validate mobile home screen logo upload works", async () => {
                await liveWallPage.select_video_for_output_back()
                await liveWallPage.output_background_upload()
                //need to use png here
                await liveWallPage.video_uploader_For_output_background()
                await liveWallPage.wait_OutPut_background()
        })
})
test('009FanSee-236 | validate Output background video is reflected on mainboard',async({ loginPage, liveWallPage, functions, page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickAdminPage()
        })
        let newTab = null;
        let newmainboard: mainBoardPage
        await test.step('now click on output background',async()=>{
                await liveWallPage.clickOutPutBtn()
                newTab= await liveWallPage.click_open_link_button_with_page()
                newmainboard= new mainBoardPage(newTab)            
        })

        await test.step('now click ok and wait for image',async()=>{
                await newmainboard.clickokbutton()
                //need to use png here
                await newmainboard.validate_output_video()
        })

        await test.step('now delete the uploaded image',async()=>{
                await liveWallPage.clickCloseBtn()
                await liveWallPage.clickDesignPage() 
                await liveWallPage.delete_output_back()
        })
})
test("009FanSee-82|Validate Left Image (1:1 Output) Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("Validate Left Image (1:1 Output) Upload upload works", async () => {
                await liveWallPage.left_image_1_1_upload()
                await liveWallPage.Image_uploader_For_left_image_1_1()
                await liveWallPage.wait_left_image_1_1_upload()
        })
})
test('009FanSee-238 |validate left image (1:1 Output) is reflected on mainboard',async({ loginPage, liveWallPage, functions, page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickAdminPage()
                await liveWallPage.click_4_1_mainboard_toggle()
        })
        let newTab = null;
        let newmainboard: mainBoardPage
        await test.step('now click on output background',async()=>{
                await liveWallPage.clickOutPutBtn()
                newTab= await liveWallPage.click_open_link_button_with_page()
                newmainboard= new mainBoardPage(newTab)            
        })

        await test.step('now click ok and wait for image',async()=>{
                await newmainboard.clickokbutton()
                //need to use png here
                await newmainboard.validate_left_image()
        })

        await test.step('now delete the uploaded image',async()=>{
                await liveWallPage.clickCloseBtn()
                await liveWallPage.clickDesignPage() 
                await liveWallPage.delete_left_image_1_1()
        })  
})
test("009FanSee-83 | Validate Mobile Frame Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

               
        })
        await test.step('now check the remove message popup', async() =>{ 
                await liveWallPage.remove_message_popup()
        })

        await test.step('now check tripple dot', async() =>{ 
                await liveWallPage.click_trippledot()
        })
        await test.step('now check design page', async() =>{ 
                await liveWallPage.clickDesignPage()
        })
        await test.step("click on mobile frame upload", async () => {
                await liveWallPage.mobile_frame_upload()
              
        })
        await test.step('now upload a mobile frame', async() =>{ 
                await liveWallPage.Image_uploader_For_mobile_frame()
                await liveWallPage.wait_mobile_frame_upload()
         })
})
test('009FanSee-239 | validate mobile frame image is reflected on mobile',async ({ loginPage, liveWallPage, page,browser }, testInfo)=>{
        await test.step("login admin", async () => {
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
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

        })
        await test.step('click on remove popup', async() =>{ 
                await liveWallPage.remove_message_popup()
        })

        await test.step('click tripple dot', async() =>{ 
                await liveWallPage.click_trippledot()
        })
        await test.step('click admin page', async() =>{ 
                await liveWallPage.clickAdminPage()
        })
        await test.step("click start",async()=>{
                  //click Mobile QR Code
                  await liveWallPage.click_start_button()
                 
        })
        await test.step('click mobile button', async() =>{ 
                await liveWallPage.click_Mobile_button()
        })
        await test.step('click copy link button', async() =>{ 
                await liveWallPage.click_copy_link_button()
        })
        let url= await clipboard.readSync()
        let newPage:livewallMobilePage
        await test.step('now open a new browser and check', async()=>{
                const newContext= await browser.newContext()
                newPage = new livewallMobilePage(await newContext.newPage())
                await newPage.GoTo(url)
        })
        await test.step('now check the updated logo',async()=>{
                await newPage.typeAge()
                await newPage.typeemail()
                await newPage.typephoneno()
                await newPage.typezip()
                await newPage.selectbirthdate()
                await newPage.clicksubmit()
              
               
                
        })
        await test.step('check the join button',async()=>{
                await newPage.clickjoin()
        })
        await test.step('check the mobile frame',async()=>{
                 await newPage.screenshot_matcher_mobile_frame()
        })
        await test.step('close the button',async()=>{
                await liveWallPage.clickCloseBtn()  
                
        })

        await test.step('click stop button', async() =>{ 
                await liveWallPage.click_stop_button()
        })
        await test.step('delete uploaded mobile frame',async()=>{
           
            await liveWallPage.clickDesignPage()
            await liveWallPage.deleteUploadedMobileFrame()  
        })
})
test("009FanSee-84 | Validate Output Frame (9:16 Output) Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

               
        })
        await test.step('click on remove message', async() =>{ 
               await liveWallPage.remove_message_popup()
        })
        await test.step('click on tripple dot', async() =>{ 
              await liveWallPage.click_trippledot()
        })
        await test.step('click on design page', async() =>{ 
                await liveWallPage.clickDesignPage()
        })
        await test.step("validate mobile home screen logo upload works", async () => {
                await liveWallPage.OutputFrame_9_16_upload()
        })
        await test.step('click on output frame upload', async() =>{ 
                await liveWallPage.Image_uploader_For_OutputFrame_9_16()
                await liveWallPage.wait_OutputFrame_9_16_upload()
        })
        await test.step('click on admin page',async()=>{
                await liveWallPage.clickAdminPage()
              
        })
        await test.step('click start button', async() =>{ 
                await liveWallPage.click_start_button()
        })
})
test('009FanSee-240 | validate output frame (9:16 Output) is reflected on mainboard',async({ loginPage, liveWallPage, browser,functions, page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("navigate to fansee section", async () => {
                await liveWallPage.click_Fan_see_Section()
        })
        await test.step('now remove popup', async() =>{ 
                await liveWallPage.remove_message_popup()
        })
        await test.step('click tripple dot', async() =>{ 
             await liveWallPage.click_trippledot()
        })
        await test.step('click on admin page', async() =>{ 
             await liveWallPage.clickAdminPage()
        })
        await test.step('click 9 16 mobile button', async() =>{ 
             await liveWallPage.click_9_16_mobile_button()
        })
        //916 toggle on kora lagbe
        let newTab = null;
        let newmainboard: mainBoardPage
        await test.step('now click on output background',async()=>{
                await liveWallPage.clickOutPutBtn()
                newTab= await liveWallPage.click_open_link_button_with_page()
                newmainboard= new mainBoardPage(newTab)
                            
        })

        await test.step('now click ok and wait for image',async()=>{
                
                let context = browser.contexts()
                let page= context[0].pages()
                await page[1].reload()
                await newmainboard.clickokbutton()
               
        })
         //need to use png here
        await test.step('now click ok again and wait for image', async() =>{ 
                let context = browser.contexts()
                let page= context[0].pages()
                await page[1].reload()
                await newmainboard.clickokbutton()
         })
        await test.step('now check the output frame', async() =>{ 
                await newmainboard.validate_output_frame()
        })
        await test.step('click close button',async()=>{
                await liveWallPage.clickCloseBtn()
                
        })
        await test.step('click stop button', async() =>{ 
                await liveWallPage.click_stop_button()
        })
        await test.step('click design page',async()=>{
              
                await liveWallPage.clickDesignPage()   
        }) 
        await test.step('delete the oputput frame', async() =>{ 
                await liveWallPage.delete_output_frame_9_16()
        })
})

test("009FanSee-85 | Validate Banner Image (9:16 Output) Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("validate mobile home screen logo upload works", async () => {
                await liveWallPage.bannner_image_9_16_upload()
                await liveWallPage.Image_uploader_For_bannner_image_9_16()
                await liveWallPage.wait_bannner_image_9_16_upload()
        })
})
test('009FanSee-241| validate banner Image (9:16 Output) is reflected on mainboard',async({ loginPage, liveWallPage, functions, page }, testInfo) =>{
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage ", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                
             
        })
        await test.step('click admin page',async()=>{
                await liveWallPage.clickAdminPage()
        })
        await test.step('click 16 9 mainboard toggle',async()=>{
                await liveWallPage.click_16_9_mainboard_toggle()
        })
        let newTab = null;
        let newmainboard: mainBoardPage
        await test.step('now click on output background',async()=>{
                await liveWallPage.clickOutPutBtn()
                newTab= await liveWallPage.click_open_link_button_with_page()
                newmainboard= new mainBoardPage(newTab)            
        })

        await test.step('now click ok and wait for image',async()=>{
                await newmainboard.clickokbutton()
                //need to use png here
                await newmainboard.validate_banner_image()
        })

        await test.step('now delete the uploaded image',async()=>{
                await liveWallPage.clickCloseBtn()
                
        }) 
        await test.step('delete banner image',async()=>{
                await liveWallPage.clickDesignPage() 
                await liveWallPage.delete_banner_image()
        })
})
test("009FanSee-86 | Validate Right Image (1:1 Output) Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("validate mobile home screen logo upload works", async () => {
                await liveWallPage.right_image_1_1_upload()
                await liveWallPage.Image_uploader_For_right_image_1_1()
                await liveWallPage.wait_right_image_1_1_upload()
        })
})
test('009FanSee-243| validate right image(1:1 Output) is reflected on mainboard',async({ loginPage, liveWallPage,browser, page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickAdminPage()
                await liveWallPage.click_4_1_mainboard_toggle()
        })
        let newTab = null;
        let newmainboard: mainBoardPage
        await test.step('now click on output background',async()=>{
                await liveWallPage.clickOutPutBtn()
                newTab= await liveWallPage.click_open_link_button_with_page()
                newmainboard= new mainBoardPage(newTab)            
        })

        await test.step('now click ok and wait for image',async()=>{
                await newmainboard.clickokbutton()
                //need to use png here
                await newmainboard.validate_right_image()
        })

        await test.step('now delete the uploaded image',async()=>{
                await liveWallPage.clickCloseBtn()
                await liveWallPage.clickDesignPage() 
                //need to change code here
                await liveWallPage.delete_right_image()
        }) 
})
test("009FanSee-87|Validate 1:1 Fallback Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("validate mobile home screen logo upload works", async () => {
                await liveWallPage.select_image_for_fallback_1_1()
                await liveWallPage.Fallback_1_1_upload()
                await liveWallPage.Image_uploader_For_Fallback_1_1()
                await liveWallPage.wait_Fallback_1_1_upload()
        })
})
test('009FanSee-245|	validate fallback 1:1 image is reflected on mainboard',async({ loginPage, liveWallPage,browser, functions, page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickAdminPage()
                await liveWallPage.click_start_button()
                await liveWallPage.click_1_1_mobile_button()
                await liveWallPage.click_16_9_mainboard_toggle()
              
        })
        let newTab = null;
        let newmainboard: mainBoardPage
        await test.step('now click on output background',async()=>{
                await liveWallPage.clickOutPutBtn()
                newTab= await liveWallPage.click_open_link_button_with_page()
                newmainboard= new mainBoardPage(newTab)            
        })

        await test.step('now click ok and wait for image',async()=>{
                await browser.contexts()[0].pages()[1].reload()
                await newmainboard.clickokbutton()
                //need to use png here
                await browser.contexts()[0].pages()[1].reload()
                await newmainboard.clickokbutton()
                await newmainboard.validate_fallback_1_1_image()
        })

        await test.step('now delete the uploaded image',async()=>{
                await liveWallPage.clickCloseBtn()
                await liveWallPage.click_stop_button()
                await liveWallPage.clickDesignPage() 
                //need to change code here
                await liveWallPage.delete_Fallback_1_1_upload()
        })
})
test('009FanSee-272 | validate fallback 1:1 video upload is working',async({ loginPage, liveWallPage,browser, functions, page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("validate fallback video upload works", async () => {
                await liveWallPage.select_video_fallback_1_1()
                await liveWallPage.Fallback_1_1_upload()
                await liveWallPage.video_uploader_For_Fallback_1_1()
                await liveWallPage.wait_Fallback_1_1_upload()
        })
})
test('009FanSee-244| validate fallback 1:1 video is reflected on mainboard',async({ loginPage, liveWallPage,browser, functions, page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickAdminPage()
                await liveWallPage.click_start_button()
                await liveWallPage.click_1_1_mobile_button()
                await liveWallPage.click_16_9_mainboard_toggle()
              
        })
        let newTab = null;
        let newmainboard: mainBoardPage
        await test.step('now click on output background',async()=>{
                await liveWallPage.clickOutPutBtn()
                newTab= await liveWallPage.click_open_link_button_with_page()
                newmainboard= new mainBoardPage(newTab)            
        })

        await test.step('now click ok and wait for image',async()=>{
                await browser.contexts()[0].pages()[1].reload()
                await newmainboard.clickokbutton()
                //need to use png here
                await browser.contexts()[0].pages()[1].reload()
                await newmainboard.clickokbutton()
                await newmainboard.validate_fallback_1_1_video()
        })

        await test.step('now delete the uploaded image',async()=>{
                await liveWallPage.clickCloseBtn()
                await liveWallPage.click_stop_button()
                await liveWallPage.clickDesignPage() 
                //need to change code here
                await liveWallPage.delete_Fallback_1_1_upload()
        })
})
test("009FanSee-88|Validate 9:16 Fallback Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("validate mobile home screen logo upload works", async () => {
                await liveWallPage.select_image_for_fallback_9_16()
                await liveWallPage.Fallback_9_16_upload()
                await liveWallPage.Image_uploader_For_Fallback_9_16()
                await liveWallPage.wait_Fallback_9_16_upload()
        })
})
test('009FanSee-245|	validate fallback 9:16 image is reflected on mainboard',async({ loginPage, liveWallPage,browser, functions, page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickAdminPage()
                await liveWallPage.click_start_button()
                await liveWallPage.click_9_16_mobile_button()
                await liveWallPage.click_4_1_mainboard_toggle()
              
        })
        let newTab = null;
        let newmainboard: mainBoardPage
        await test.step('now click on output background',async()=>{
                await liveWallPage.clickOutPutBtn()
                newTab= await liveWallPage.click_open_link_button_with_page()
                newmainboard= new mainBoardPage(newTab)            
        })

        await test.step('now click ok and wait for image',async()=>{
                await browser.contexts()[0].pages()[1].reload()
                await newmainboard.clickokbutton()
                //need to use png here
                await browser.contexts()[0].pages()[1].reload()
                await newmainboard.clickokbutton()
                await newmainboard.validate_fallback_9_16_image()
        })

        await test.step('now delete the uploaded image',async()=>{
                await liveWallPage.clickCloseBtn()
                await liveWallPage.click_stop_button()
                await liveWallPage.clickDesignPage() 
                //need to change code here
                await liveWallPage.delete_Fallback_9_16_upload()
        })
})

test('009FanSee-273 | validate fallback 9:16 video upload is working',async({ loginPage, liveWallPage,browser, functions, page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("validate mobile home screen logo upload works", async () => {
                await liveWallPage.select_video_for_fallback_9_16()
                await liveWallPage.Fallback_9_16_upload()
                await liveWallPage.video_uploader_For_Fallback_9_16()
                await liveWallPage.wait_Fallback_9_16_upload()
        })
})

test('009FanSee-246|	validate fallback 9:16 video is reflected on mainboard',async({ loginPage, liveWallPage,browser, functions, page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickAdminPage()
                await liveWallPage.click_start_button()
                await liveWallPage.click_9_16_mobile_button()
                await liveWallPage.click_4_1_mainboard_toggle()
              
        })
        let newTab = null;
        let newmainboard: mainBoardPage
        await test.step('now click on output background',async()=>{
                await liveWallPage.clickOutPutBtn()
                newTab= await liveWallPage.click_open_link_button_with_page()
                newmainboard= new mainBoardPage(newTab)            
        })

        await test.step('now click ok and wait for image',async()=>{
                await browser.contexts()[0].pages()[1].reload()
                await newmainboard.clickokbutton()
                //need to use png here
                await browser.contexts()[0].pages()[1].reload()
                await newmainboard.clickokbutton()
                await newmainboard.validate_fallback_9_16_video()
        })

        await test.step('now delete the uploaded image',async()=>{
                await liveWallPage.clickCloseBtn()
                await liveWallPage.click_stop_button()
                await liveWallPage.clickDesignPage() 
                //need to change code here
                await liveWallPage.delete_Fallback_9_16_upload()
        })
})

test("009FanSee-130 | validate prelive text message functionalities", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()
        })

        await test.step('now click on remove message popup', async() =>{ 
                await liveWallPage.remove_message_popup()
        })

        await test.step('click on tripple dot', async() =>{ 
                await liveWallPage.click_trippledot()
        })
        await test.step('click on design page', async() =>{ 
                await liveWallPage.clickDesignPage()
        })
        await test.step('009FanSee-144|	Validate Pre-Live Text input is working',async()=>{
                   //input Pre Live Text
                await liveWallPage.inputPreLiveText('Test for pre-live text')

        })

        await test.step("009FanSee-145|	Validate Pre-Live Text Font Selection DropDown Option is visible and clickable.",async()=>{
                 
                await liveWallPage.preLiveInputBoxFonts()
                await liveWallPage.preLiveInputBoxArial()
        })
        
        await test.step('009FanSee-157|	Validate Pre-Live Text blocktypes: Normal,H1,H2,H3 etc are working',async()=>{
                await liveWallPage.preLiveInputBoxBlocktype()
                await liveWallPage.preLiveInputBoxNormal()
               
        })
        await test.step('Select H1 block', async() =>{ 
                await liveWallPage.preLiveInputBoxBlocktype()
                await liveWallPage.preLiveInputBoxBlockH1()
        })
        await test.step('Select H2 block', async() =>{ 
                await liveWallPage.preLiveInputBoxBlocktype()
                await liveWallPage.preLiveInputBoxBlockH2()
         })
        await test.step('Select H3 block', async() =>{ 
                await liveWallPage.preLiveInputBoxBlocktype()
                await liveWallPage.preLiveInputBoxBlockH3()
        })
        await test.step('Select H4 block', async() =>{ 
                await liveWallPage.preLiveInputBoxBlocktype()
                await liveWallPage.preLiveInputBoxBlockH4()
        })
        await test.step('Select H5 block', async() =>{ 
                await liveWallPage.preLiveInputBoxBlocktype()
                await liveWallPage.preLiveInputBoxBlockH5()
        })
         await test.step('Select block quote', async() =>{ 
                await liveWallPage.preLiveInputBoxBlocktype()    
                await liveWallPage.preLiveInputBoxBlockquote()
        })
        await test.step('Select input box for blocktype', async() =>{ 
                await liveWallPage.preLiveInputBoxBlocktype()
                await liveWallPage.preLiveInputBoxBlockH6()
        })
        await liveWallPage.preLiveInputBoxBlocktype()
        

       await test.step('009FanSee-147|	Validate Pre-Live Text is Bold.',async()=>{
        await liveWallPage.preLiveInputBoxBold()
       })

       await test.step('009FanSee-148|	Validate Pre-Live Text is Italic.',async()=>{
        await liveWallPage.preLiveInputBoxItalic()
       })

       await test.step('009FanSee-149|	Validate Pre-Live Text is Underline.',async()=>{
        await liveWallPage.preLiveInputBoxUnderline()
       })
       await test.step('009FanSee-150|	Validate Pre-Live Text is Strikethrough.',async()=>{
           
        await liveWallPage.preLiveInputBoxsikethrough()
       })
       await test.step('009FanSee-151|	Validate Pre-Live Text is Color picker.',async()=>{
        await liveWallPage.preLiveInputBoxColorpk()
        await liveWallPage.preLiveInputBoxTextcl()
        await liveWallPage.preLiveInputBoxGreencl()
        await liveWallPage.preLiveInputBoxColorpk()
        await liveWallPage.preLiveInputBoxHighlightcl()
        await liveWallPage.preLiveInputBoxHighlightgrn()
       })
    

    await test.step('009FanSee-158|Validate Pre-Live Text Font Tag is start Left.',async()=>{
        await liveWallPage.preLiveInputBoxLeft()
    })
    await test.step('009FanSee-159|Validate Pre-Live Text Font Tag is start Center.',async()=>{
        await liveWallPage.preLiveInputBoxCenter()
    })

    await test.step('009FanSee-160|Validate Pre-Live Text Font Tag is start Right.',async()=>{
        await liveWallPage.preLiveInputBoxRight()
    })
    
    await test.step('009FanSee-152|Validate Pre-Live Text is outdent.',async()=>{
        await liveWallPage.preLiveInputBoxOutdent()
    })

    await test.step('009FanSee-153|Validate Pre-Live Text is Indent.',async()=>{
        await liveWallPage.preLiveInputBoxIndent()
    })

    await test.step('009FanSee-154|Validate Pre-Live Text is Ordered.',async()=>{
         
        await liveWallPage.preLiveInputBoxOrdered()
    })
    await test.step('009FanSee-155|Validate Pre-Live Text is Unordered.',async()=>{
        await liveWallPage.preLiveInputBoxUnOrdered()
    })

    await test.step('009FanSee-156|Validate Pre-Live Text is Remove(Styles) Only.',async()=>{
          
        await liveWallPage.preLiveInputBoxRemove()

    }) 
    await test.step('set h6',async()=>{
        await liveWallPage.preLiveInputBoxBlocktype()
        await liveWallPage.preLiveInputBoxNormal()
        await liveWallPage.preLiveInputBoxBlocktype()
    })
    await test.step('setup for next test',async()=>{
        await liveWallPage.preLiveInputBoxLeft()
        
       
      
    }) 
})

test('009FanSee-248|	validate pre-live text is being reflected on mobile',async({ loginPage, liveWallPage, functions, page,browser }, testInfo)=>{
        await test.step("login admin", async () => {
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
        await test.step("now navigate to fanseepage ", async () => {
                await liveWallPage.click_Fan_see_Section()
               
        })
        await test.step('now remove the pop up', async() =>{ 
                await liveWallPage.remove_message_popup()
        })

        await test.step('now click on tripple dot', async() =>{ 
                await liveWallPage.click_trippledot()
        })
        await test.step('now go to admin page',async()=>{
                await liveWallPage.clickAdminPage()
               
        })
        await test.step('now click on start button', async() =>{ 
                await liveWallPage.click_start_button()
        })

       
        await test.step("open mobile link and copy",async()=>{
                  //click Mobile QR Code
             
                  await liveWallPage.click_Mobile_button()
                  await liveWallPage.click_copy_link_button()
        })
        let url= await clipboard.readSync()
        let newPage:livewallMobilePage
        await test.step('now open a new browser and check', async()=>{
                const newContext= await browser.newContext()
                newPage = new livewallMobilePage(await newContext.newPage())
                await newPage.GoTo(url)
        })
        await test.step('now go to game page',async()=>{
                await newPage.typeAge()
                await newPage.typeemail()
                await newPage.typephoneno()
                await newPage.typezip()
                await newPage.selectbirthdate()
                await newPage.clicksubmit() 
                
        })
        await test.step('close the game',async()=>{
                await liveWallPage.clickCloseBtn()
                
        })
        await test.step('009FanSee-262|	validate cue button is working',async()=>{
                await liveWallPage.click_cue_button()
                await liveWallPage.click_cue_Page()
        })
        await test.step('now check the pre live text ',async()=>{
                
                await newPage.test_for_pre_live_test('Test for pre-live text')
                
        })
        await test.step('stop the game',async()=>{
                await liveWallPage.click_stop_button()
        })
})
test("009FanSee-163|Validate Post-Live Text Message functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("009FanSee-6|navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("validate post live text message is working",async() =>{
                await liveWallPage.input_post_live_text()
        })
        await test.step("009FanSee-164|	Validate Post-Live Text Font and arial selections are working",async()=>{
                await liveWallPage.postLiveInputBoxFonts()
                await liveWallPage.postLiveInputBoxArial()
        })
        await test.step('009FanSee-165|	Validate Post-Live Text is Bold.',async()=>{
                await liveWallPage.postLiveInputBoxBold()
        })
        await test.step('009FanSee-166|	Validate Post-Live Text is Italic.',async()=>[
                await liveWallPage.postLiveInputBoxItalic()
        ])
        await test.step('009FanSee-167|	Validate Post-Live Text is Underline.',async()=>{
                await liveWallPage.postLiveInputBoxUnderline()
        })
        await test.step('009FanSee-168|	Validate Post-Live Text is Strikethrough.',async()=>{
                await liveWallPage.postLiveInputBoxsikethrough()
        })
        await test.step('009FanSee-169|	Validate Post-Live Text is Color picker.',async()=>{
                await liveWallPage.postLiveInputBoxColorpk()
                await liveWallPage.postLiveInputBoxGreencl()
                await liveWallPage.postLiveInputBoxColorpk()
                await liveWallPage.postLiveInputBoxTextcl()
        })
        await test.step('009FanSee-170|	Validate Post-Live Text is outdent',async()=>{
                await liveWallPage.postLiveInputBoxOutdent()
        })
        await test.step('009FanSee-171|	Validate Post-Live Text is Indent',async()=>{
                await liveWallPage.postLiveInputBoxIndent()
        })
        await test.step('009FanSee-172|	Validate Post-Live Text is Ordered.',async()=>{
                await liveWallPage.postLiveInputBoxOrdered()
        })
        await test.step('009FanSee-173|	Validate Post-Live Text is Unordered',async()=>{
                await liveWallPage.postLiveInputBoxUnOrdered()
        })
        await test.step('009FanSee-174|	Validate Post-Live Text is Remove(Styles) Only',async()=>{
                await liveWallPage.postLiveInputBoxRemove()
        })
        await test.step('009FanSee-175|	Validate Post-Live Text blockquotes are working',async()=>{
                await liveWallPage.postLiveInputBoxBlocktype()
                await liveWallPage.postLiveInputBoxBlockH1()
                await liveWallPage.postLiveInputBoxBlocktype()
                await liveWallPage.postLiveInputBoxBlockH2()
                await liveWallPage.postLiveInputBoxBlocktype()
                await liveWallPage.postLiveInputBoxBlockH3()
                await liveWallPage.postLiveInputBoxBlocktype()
                await liveWallPage.postLiveInputBoxBlockH4()
                await liveWallPage.postLiveInputBoxBlocktype()
                await liveWallPage.postLiveInputBoxBlockH5()
                await liveWallPage.postLiveInputBoxBlocktype()
                await liveWallPage.postLiveInputBoxBlockH6()
                await liveWallPage.postLiveInputBoxBlocktype()
                await liveWallPage.postLiveInputBoxBlockquote()
        })
        await test.step('009FanSee-176|	Validate Post-Live Text Font Tag is start Left.',async()=>{
                await liveWallPage.postLiveInputBoxLeft()
        })
        await test.step('009FanSee-177|	Validate Post-Live Text Font Tag is start Center.',async()=>{
                await liveWallPage.postLiveInputBoxCenter()
        })
        await test.step('009FanSee-178|	Validate Post-Live Text Font Tag is start Right',async()=>{
                await liveWallPage.postLiveInputBoxRight()
        })
        await test.step('setup for next text',async()=>{
                await liveWallPage.postLiveInputBoxBlocktype()
                await liveWallPage.postLiveInputBoxBlockH1()
                await liveWallPage.postLiveInputBoxLeft()
        })
})
test('009FanSee-163|Validate Post-Live Text Message is reflected on mobile',async({ loginPage, liveWallPage, functions, page,browser }, testInfo)=>{
        await test.step("login admin", async () => {
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
        await test.step("now navigate to fanseepage", async () => {
                await liveWallPage.click_Fan_see_Section()
               
        })
        await test.step('Click on remove message popup', async() =>{ 
                await liveWallPage.remove_message_popup()
        })

       await test.step('click tripple dot', async() =>{ 
                await liveWallPage.click_trippledot()
       })
        await test.step('click admin page and start button',async()=>{
                await liveWallPage.clickAdminPage()
                
        })
         //click Mobile QR Code
        await test.step('click start button', async() =>{ 
              await liveWallPage.click_start_button()
         })
        await test.step("open mobile link and copy",async()=>{
                 
                  await liveWallPage.click_Mobile_button()
                  await liveWallPage.click_copy_link_button()
        })
        let url= await clipboard.readSync()
        let newPage:livewallMobilePage
        await test.step('now open a new browser and check', async()=>{
                const newContext= await browser.newContext()
                newPage = new livewallMobilePage(await newContext.newPage())
                await newPage.GoTo(url)
        })
        await test.step('now go to game page',async()=>{
                await newPage.typeAge()
                await newPage.typeemail()
                await newPage.typephoneno()
                await newPage.typezip()
                await newPage.selectbirthdate()
                await newPage.clicksubmit()
                
                
        })
        // await test.step('click on join page',async()=>{
        //         await newPage.clickjoin()   
        // })
        await test.step('close the game',async()=>{
                await liveWallPage.clickCloseBtn()
        })
        await test.step('click live button',async()=>{ 
                await liveWallPage.click_Live_button()
                await page.waitForTimeout(1000)
                await liveWallPage.click_Live_button()
                
               
        }) 
        await test.step('',async()=>{
                await newPage.test_for_post_live_test('test For post live message')
        })

        await test.step('now stop the game',async()=>{
                await liveWallPage.click_stop_button()
        })
})
test("009FanSee-181|Validate Standby Text Message functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("009FanSee-6|navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

              
        })
        await test.step('remove popup message', async () => {
                await liveWallPage.remove_message_popup()

        })
        await test.step('click tripple dot', async () => {
                await liveWallPage.click_trippledot()
        })
        await test.step('click design page', async () => {
                await liveWallPage.clickDesignPage()
        })
        await test.step("009FanSee-181|	Validate Stand By Message box input is working",async() =>{
                await liveWallPage.inputStandByMessage()
        })
        await test.step("009FanSee-182|	Validate Stand By Message Font Tag Selection DropDown Option is visible and clickable.",async()=>{
                await liveWallPage.standByInputBoxFonts()
                await liveWallPage.standByInputBoxArial()
        })
        await test.step('009FanSee-193|	Validate Stand By Message blocktypes are working',async()=>{
                await liveWallPage.standByInputBoxBlocktype()
                await liveWallPage.standByInputBoxBlockH1()
                await liveWallPage.standByInputBoxBlocktype()
                await liveWallPage.standByInputBoxBlockH2()
                await liveWallPage.standByInputBoxBlocktype()
                await liveWallPage.standByInputBoxBlockH3()
                await liveWallPage.standByInputBoxBlocktype()
                await liveWallPage.standByInputBoxBlockH4()
                await liveWallPage.standByInputBoxBlocktype()
                await liveWallPage.standByInputBoxBlockH5()
                await liveWallPage.standByInputBoxBlocktype()
                await liveWallPage.standByInputBoxBlockH6()
                await liveWallPage.standByInputBoxBlocktype()
                await liveWallPage.standByInputBoxBlockquote()
        })
        await test.step('009FanSee-183|	Validate Stand By Message is Bold.',async()=>{
                await liveWallPage.standByInputBoxBold()
        })
        await test.step('009FanSee-184|	Validate Stand By Message is Italic..',async()=>[
                await liveWallPage.standByInputBoxItalic()
        ])
        await test.step('009FanSee-185|	Validate Stand By Message is Underline.',async()=>{
                await liveWallPage.standByInputBoxUnderline()
        })
        
        await test.step('009FanSee-186|	Validate Stand By Message is Strikethrough.',async()=>{
                await liveWallPage.standByInputBoxsikethrough()
        })
        await test.step('009FanSee-187|	Validate Stand By Message is Color picker.',async()=>{
                await liveWallPage.standByInputBoxColorpk()
                await liveWallPage.standByInputBoxGreencl()
                await liveWallPage.standByInputBoxColorpk()
                await liveWallPage.standByInputBoxTextcl()
        })
        await test.step('009FanSee-188|	Validate Stand By Message is outdent.',async()=>{
                await liveWallPage.standByInputBoxOutdent()
        })
        await test.step('009FanSee-189|	Validate Stand By Message is Indent.',async()=>{
                await liveWallPage.standByInputBoxIndent()
        })
        await test.step('009FanSee-190|	Validate Stand By Message is Ordered.',async()=>{
                await liveWallPage.standByInputBoxOrdered()
        })
        await test.step('009FanSee-191|	Validate Stand By Message is Unordered.',async()=>{
                await liveWallPage.standByInputBoxUnOrdered()
        })
        await test.step('009FanSee-192|	Validate Stand By Message is Remove(Styles) Only.',async()=>{
                await liveWallPage.standByInputBoxRemove()
        })
     
        await test.step('009FanSee-194|	Validate Stand By Message Font Tag is start Left..',async()=>{
                await liveWallPage.standByInputBoxLeft()
        })
        await test.step('009FanSee-195|	Validate Stand By Message Font Tag is start Center.',async()=>{
                await liveWallPage.standByInputBoxCenter()
        })
        await test.step('009FanSee-196|	Validate Stand By Message Font Tag is start Right.',async()=>{
                await liveWallPage.standByInputBoxRight()
        })
        await test.step('prepare for next test',async()=>{
                await liveWallPage.standByInputBoxLeft()
                await liveWallPage.standByInputBoxBlocktype()
                await liveWallPage.standByInputBoxBlockH1()
                
        })
})
test("009FanSee-250|validate standby message text is being reflected on mobile",async({ loginPage, liveWallPage, functions,browser, page }, testInfo) =>{
        await test.step("login admin", async () => {
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
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()
        })
        await test.step('click on remove message popup', async() =>{ 
                await liveWallPage.remove_message_popup()
        })

        await test.step('click on tripple dot', async() =>{ 
                await liveWallPage.click_trippledot()
        })
        await test.step('click admin page', async() =>{ 
                await liveWallPage.clickAdminPage()
        })
        await test.step("open mobile link and copy",async()=>{
                  //click Mobile QR Code
                  await liveWallPage.click_Mobile_button()
                  await liveWallPage.click_copy_link_button()
        })
        let url= await clipboard.readSync()
        let newPage:livewallMobilePage
        await test.step('now open a new browser and check', async()=>{
                const newContext= await browser.newContext()
                newPage = new livewallMobilePage(await newContext.newPage())
                await newPage.GoTo(url)
        })
        await test.step('now go to game page',async()=>{
                await newPage.typeAge()
                await newPage.typeemail()
                await newPage.typephoneno()
                await newPage.typezip()
                await newPage.selectbirthdate()
                await newPage.clicksubmit()  
                
        })
        await test.step('validate standby message',async()=>{
                await newPage.test_for_standby_message('test For stand by message')
        })   
})
test("009FanSee-199|Validate Low connection Text Message functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("009FanSee-6|navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("009FanSee-199|	Validate Low Connection Message text field functionalites",async() =>{
                await liveWallPage.inputLowConnectionMassage()
        })
        await test.step("009FanSee-200|	Validate Low Connection Message Font Tag Selection DropDown Option is visible and clickable",async()=>{
                await liveWallPage.lowConnectionMassageInputBoxFonts()
                await liveWallPage.lowConnectionMassageInputBoxArial()
        })
        await test.step('009FanSee-211|	Validate Low Connection Message blocktypes are working',async()=>{
                await liveWallPage.lowConnectionMassageInputBoxBlocktype()
                await liveWallPage.lowConnectionMassageInputBoxBlockH1()
                await liveWallPage.lowConnectionMassageInputBoxBlocktype()
                await liveWallPage.lowConnectionMassageInputBoxBlockH2()
                await liveWallPage.lowConnectionMassageInputBoxBlocktype()
                await liveWallPage.lowConnectionMassageInputBoxBlockH3()
                await liveWallPage.lowConnectionMassageInputBoxBlocktype()
                await liveWallPage.lowConnectionMassageInputBoxBlockH4()
                await liveWallPage.lowConnectionMassageInputBoxBlocktype()
                await liveWallPage.lowConnectionMassageInputBoxBlockH5()
                await liveWallPage.lowConnectionMassageInputBoxBlocktype()
                await liveWallPage.lowConnectionMassageInputBoxBlockH6()
                await liveWallPage.lowConnectionMassageInputBoxBlocktype()
                await liveWallPage.lowConnectionMassageInputBoxBlockquote()
        })
        await test.step('009FanSee-201|	Validate Low Connection Message is Bold.',async()=>{
                await liveWallPage.lowConnectionMassageInputBoxBold()
        })
        await test.step('009FanSee-202|	Validate Low ConnectionMessage is Italic.',async()=>[
                await liveWallPage.lowConnectionMassageInputBoxItalic()
        ])
        await test.step('009FanSee-203|	Validate Low Connection Message is Underline.',async()=>{
                await liveWallPage.lowConnectionMassageInputBoxUnderline()
        })
        
        await test.step('009FanSee-204|	Validate Low Connection Message is Strikethrough.',async()=>{
                await liveWallPage.lowConnectionMassageInputBoxsikethrough()
        })
        await test.step('009FanSee-205|	Validate Low Connection Message is Color picker.',async()=>{
                await liveWallPage.lowConnectionMassageInputBoxColorpk()
                await liveWallPage.lowConnectionMassageInputBoxGreencl()
                await liveWallPage.lowConnectionMassageInputBoxColorpk()
                await liveWallPage.lowConnectionMassageInputBoxTextcl()
        })
        await test.step('009FanSee-206|	Validate Low Connection Message is outdent.',async()=>{
                await liveWallPage.lowConnectionMassageInputBoxOutdent()
        })
        await test.step('009FanSee-207|	Validate Low Connection Message is Indent.',async()=>{
                await liveWallPage.lowConnectionMassageInputBoxIndent()
        })
        await test.step('009FanSee-208|	Validate Low Connection Message is Ordered.',async()=>{
                await liveWallPage.lowConnectionMassageInputBoxOrdered()
        })
        await test.step('009FanSee-209|	Validate Low Connection Message is Unordered.',async()=>{
                await liveWallPage.lowConnectionMassageInputBoxUnOrdered()
        })
        await test.step('009FanSee-210|	Validate Low Connection Message is Remove(Styles) Only.',async()=>{
                await liveWallPage.lowConnectionMassageInputBoxRemove()
        })
     
        await test.step('009FanSee-212|	Validate Low Connection Message Font Tag is start Left.',async()=>{
                await liveWallPage.lowConnectionMassageInputBoxLeft()
        })
        await test.step('009FanSee-213|	Validate Low Connection Message Font Tag is start Center.',async()=>{
                await liveWallPage.lowConnectionMassageInputBoxCenter()
        })
        await test.step('009FanSee-214|	Validate Low Connection Message Font Tag is start Right.',async()=>{
                await liveWallPage.lowConnectionMassageInputBoxRight()
        })
})
test("009FanSee-251|	validate low connection message text is being reflected on mobile",async({ loginPage, liveWallPage,  page }, testInfo)=>{
     //explore CDP in playwright devtools
})
test("009FanSee-252|	validate live countdown timer toggle is reflected on mobile",async({ loginPage, liveWallPage, browser, page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        await test.step("009FanSee-6|navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()               
        })
        await test.step('click on remove message popup', async() =>{ 
                await liveWallPage.remove_message_popup()
        })

        await test.step('click on tripple dot', async() =>{ 
                await liveWallPage.click_trippledot()
        })
        await test.step('click on design page', async() =>{ 
                await liveWallPage.clickDesignPage()
        })
        await test.step("009FanSee-217|	validate Live countdown timer Toggle is working",async()=>{
                await liveWallPage.click_live_countdown_timer_toggle_off()        
        })
        await test.step('go to admin page',async()=>{
                    //click Mobile QR Code
                    await liveWallPage.clickAdminPage()
        }) 
        await test.step('click start button',async()=>{
                
                await liveWallPage.click_start_button()
        })
        await test.step("open mobile link and copy",async()=>{
            
                await liveWallPage.click_Mobile_button()
                await liveWallPage.click_copy_link_button()
      })
      let url= await clipboard.readSync()
      let newPage:livewallMobilePage
      await test.step('now open a new browser and check', async()=>{
              const newContext= await browser.newContext()
              newPage = new livewallMobilePage(await newContext.newPage())
              await newPage.GoTo(url)
      })
      await test.step('now go to game page',async()=>{
              await newPage.typeAge()
              await newPage.typeemail()
              await newPage.typephoneno()
              await newPage.typezip()
              await newPage.selectbirthdate()
              await newPage.clicksubmit()     
      })
      await test.step('now check if the toggle is invisible',async()=>{
        //work      
        await newPage.check_progress_bar_hidden()
      })
      await test.step('stop game',async()=>{
        await liveWallPage.clickCloseBtn()
        await liveWallPage.click_stop_button()
      })
      await test.step('revert settings',async()=>{
       
        await liveWallPage.clickDesignPage()
      
      })
      await test.step('click on live count down timer toggle', async() =>{ 
        await liveWallPage.click_live_countdown_timer_toggle_on()
      })

})
test("009FanSee-253|	validate hours input is reflected on mobile",async({ loginPage, liveWallPage,browser,  page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        await test.step("009FanSee-6|navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

               
        })
        await test.step('click on remove message popup', async() =>{ 
                await liveWallPage.remove_message_popup()
        })

        await test.step('click on tripple dot', async() =>{ 
        await liveWallPage.click_trippledot()
        })
        await test.step('click on design page', async() =>{ 
                await liveWallPage.clickDesignPage()
        })
        await test.step('check if the timer toggle is on', async() =>{ 
                await liveWallPage.click_live_countdown_timer_toggle_on()
        })
        await test.step("009FanSee-217|	validate Live countdown timer Toggle is working",async()=>{
                await liveWallPage.type_hours_in_control('45')    
        }) 
        await test.step("open mobile link and copy",async()=>{
                //click Mobile QR Code
                await liveWallPage.clickAdminPage()
                
      })
      await liveWallPage.click_start_button()
                await liveWallPage.click_Mobile_button()
                await liveWallPage.click_copy_link_button()
      let url= await clipboard.readSync()
      let newPage:livewallMobilePage
      await test.step('now open a new browser and check', async()=>{
              const newContext= await browser.newContext()
              newPage = new livewallMobilePage(await newContext.newPage())
              await newPage.GoTo(url)
      })
      await test.step('now go to game page',async()=>{
              await newPage.typeAge()
              await newPage.typeemail()
              await newPage.typephoneno()
              await newPage.typezip()
              await newPage.selectbirthdate()
              await newPage.clicksubmit()     
      }) 
      await test.step('now check the hours input',async() =>{
              await newPage.check_hours('44:')
      })
      await test.step('click close button',async() =>{
         await liveWallPage.clickCloseBtn()
      })
      await test.step('click on admin page', async() =>{ 
         await liveWallPage.clickAdminPage()
      })
      await test.step('click on stop button', async() =>{ 
         await liveWallPage.click_stop_button()
      })
      //here
})
test("009FanSee-254|	validate minutes input is reflected on mobile",async({ loginPage, liveWallPage,browser,  page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        await test.step("009FanSee-6|navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()


        })
        await test.step('click on remove message popup', async () => {
                await liveWallPage.remove_message_popup()
        })

        await test.step('click on trippledot', async () => {
                await liveWallPage.click_trippledot()
        })
        await test.step('click on design page', async () => {
                await liveWallPage.clickDesignPage()
        })
        await test.step('', async () => {
                await liveWallPage.click_live_countdown_timer_toggle_on()
        })
        await test.step("009FanSee-217|	validate Live countdown timer Toggle is working", async () => {
                await liveWallPage.type_minutes_in_control('54')
        })
        await test.step("open mobile link and copy", async () => {
                //click Mobile QR Code
                await liveWallPage.clickAdminPage()

        })
        await test.step('click on start', async () => {
                await liveWallPage.click_start_button()
        })
        await test.step('click on mobile button', async () => {
                await liveWallPage.click_Mobile_button()
        })
        await test.step('click on copy link', async () => {
                await liveWallPage.click_copy_link_button()
        })
        let url = await clipboard.readSync()
        let newPage: livewallMobilePage
        await test.step('now open a new browser and check', async () => {
                const newContext = await browser.newContext()
                newPage = new livewallMobilePage(await newContext.newPage())
                await newPage.GoTo(url)
        })
        await test.step('now go to game page', async () => {
                await newPage.typeAge()
                await newPage.typeemail()
                await newPage.typephoneno()
                await newPage.typezip()
                await newPage.selectbirthdate()
                await newPage.clicksubmit()
        })
        await test.step('now check the minutes input', async () => {
                await newPage.check_minutes(':53')
        })
        await test.step('close the button', async () => {
                await liveWallPage.clickCloseBtn()

        })
        await test.step('go to admin page', async () => {
                await liveWallPage.clickAdminPage()

        })
        await test.step('now stop the game', async () => {
                await liveWallPage.click_stop_button()
        })
})
test("009FanSee-255|	validate seconds input is reflected on mobile",async({ loginPage,browser, liveWallPage,  page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        await test.step("009FanSee-6|navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

        })
        await test.step('click remove message popup', async() =>{ 
                await liveWallPage.remove_message_popup()
        })

        await test.step('click tripple dot', async() =>{ 
                await liveWallPage.click_trippledot()
        })
        await test.step('click design page', async() =>{ 
                await liveWallPage.clickDesignPage()
        })
        await test.step('click live count down timer toggle on', async() =>{ 
                await liveWallPage.click_live_countdown_timer_toggle_on()
       })
        await test.step("input seconds in control",async()=>{
                await liveWallPage.type_seconds_in_control('18')    
        }) 
        await test.step('open admin panel',async()=>{
                await liveWallPage.clickAdminPage()
        })
        await test.step('click start button',async()=>{
                //click Mobile QR Code
                        
                await liveWallPage.click_start_button()
        })
        await test.step("open mobile link and copy",async()=>{
              
                await liveWallPage.click_Mobile_button()
                await liveWallPage.click_copy_link_button()
      })
      let url= await clipboard.readSync()
      let newPage:livewallMobilePage
      await test.step('now open a new browser and check', async()=>{
              const newContext= await browser.newContext()
              newPage = new livewallMobilePage(await newContext.newPage())
              await newPage.GoTo(url)
      })
      await test.step('now go to game page',async()=>{
              await newPage.typeAge()
              await newPage.typeemail()
              await newPage.typephoneno()
              await newPage.typezip()
              await newPage.selectbirthdate()
              await newPage.clicksubmit()     
      }) 
      await test.step('now check the minutes input',async() =>{
        await newPage.check_seconds(':05')
      })
      await test.step('stop the game',async() =>{
        await liveWallPage.clickCloseBtn()
      
      })
      await test.step('click admin page ',async()=>{
        await liveWallPage.clickAdminPage()
       
      })
      await test.step('stop game', async() =>{ 
        await liveWallPage.click_stop_button()
      })
})
test("009FanSee-256|	validate enable camera flip is reflected on mobile",async({ loginPage, liveWallPage,browser,  page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        await test.step("009FanSee-6|navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section() 
        })
        await test.step('now click on remove message popup', async() =>{ 
                await liveWallPage.remove_message_popup()
        })

        await test.step('now click on tripple dot', async() =>{ 
                await liveWallPage.click_trippledot()
        })
        await test.step('now click on design page', async() =>{ 
                await liveWallPage.clickDesignPage()
        })
        await test.step("click camera flip",async()=>{
                await liveWallPage.click_enable_camera_flip_off()      
        }) 
        await test.step('now click on admin page and start',async()=>{
                await liveWallPage.clickAdminPage()
                await liveWallPage.click_start_button()
        })
        await test.step("open mobile link and copy",async()=>{
                //click Mobile QR Code
               
                await liveWallPage.click_Mobile_button()
                await liveWallPage.click_copy_link_button()
      })
      let url= await clipboard.readSync()
      let newPage:livewallMobilePage
      await test.step('now open a new browser and check', async()=>{
              const newContext= await browser.newContext()
              newPage = new livewallMobilePage(await newContext.newPage())
              await newPage.GoTo(url)
      })
      await test.step('now go to game page',async()=>{
              await newPage.typeAge()
              await newPage.typeemail()
              await newPage.typephoneno()
              await newPage.typezip()
              await newPage.selectbirthdate()
              await newPage.clicksubmit() 
          
      })
      await test.step('now join the game',async()=>{
              await newPage.clickjoin()    
      })
      await test.step('now check if the flip button disappears',async()=>{
        //work      
        await newPage.check_flip_button_hidden()
       
      })
      await test.step('stop the game',async()=>{
                await liveWallPage.clickCloseBtn()
                await liveWallPage.click_stop_button()
      })
      await test.step('revert settings',async()=>{
      
        await liveWallPage.clickDesignPage()
        await liveWallPage.click_enable_camera_flipt_toggle_on()
      })
})
test("009FanSee-257|	validate demo mode is reflected on mobile",async({ loginPage, liveWallPage,  page }, testInfo)=>{
//not implemented yet
})
test("009FanSee-216|Validate controls section functionalities ",async({ loginPage, liveWallPage, functions, page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        // })
        // await test.step("008TOFW-002 | Validate Font Upload Functionality", async () => {

        //click Live Wall Section
        await test.step("009FanSee-6|navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()
          
        })
        await test.step('now click remove message popup', async() =>{ 
                await liveWallPage.remove_message_popup()
        })

        await test.step('now click on tripple dot', async() =>{ 
                await liveWallPage.click_trippledot()
        })
        await test.step('now click on design page', async() =>{ 
                await liveWallPage.clickDesignPage()
        })
        await test.step("009FanSee-217|	validate Live countdown timer Toggle is working",async()=>{
                await liveWallPage.click_live_countdown_timer_toggle_off()
        })
        await test.step('009FanSee-218|validate Show username to Mainboard toggle is working',async()=>{
                await liveWallPage.click_show_username_to_mainboard_toggle_on()
        })
        await test.step('009FanSee-219|validate Enable Camera Flip toggle is working',async()=>{
                await liveWallPage.click_enable_camera_flipt_toggle_on()
        })
        await test.step('009FanSee-220|	validate Hours is typeable in controls',async() =>{
                await liveWallPage.click_live_countdown_timer_toggle_on()
                await liveWallPage.type_hours_in_control('35')
        })
        await test.step('009FanSee-221|	validate Minutes section is typeable in controls',async()=>{
                await liveWallPage.type_minutes_in_control('23')
        })
        await test.step("009FanSee-222|	validate seconds is typeable in controls",async()=>{
                await liveWallPage.type_seconds_in_control('40')
        })
})
//need some extra work for following 5 test cases
test("009FanSee-258 | validate font selection is reflected on mobile",async({ loginPage, browser,liveWallPage,  page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        await test.step("009FanSee-6|navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

        })
        await test.step('click remove message popup', async() =>{ 
                await liveWallPage.remove_message_popup()
        })

        await test.step('click tripple dot', async() =>{ 
                await liveWallPage.click_trippledot()
        })
        await test.step('click design page', async() =>{ 
                await liveWallPage.clickDesignPage()
        })

        await test.step('select the first font', async() =>{ 
                await liveWallPage.select_font()
        })
       
        await test.step('now click on admin page and start',async()=>{
                await liveWallPage.clickAdminPage()
        })
        await test.step('now start the game',async()=>{
                await liveWallPage.click_start_button()
        })
        await test.step("open mobile link and copy",async()=>{
                //click Mobile QR Code
               
                await liveWallPage.click_Mobile_button()
                await liveWallPage.click_copy_link_button()
      })
      let url= await clipboard.readSync()
      let newPage:livewallMobilePage
      await test.step('now open a new browser and check', async()=>{
              const newContext= await browser.newContext()
              newPage = new livewallMobilePage(await newContext.newPage())
              await newPage.GoTo(url)
      })
      await test.step('now go to game page',async()=>{
              await newPage.typeAge()
              await newPage.typeemail()
              await newPage.typephoneno()
              await newPage.typezip()
              await newPage.selectbirthdate()
              await newPage.clicksubmit() 
          
      })

      await test.step('now check the font', async() =>{ 
             await newPage.checkfont()
      })
      await test.step('close the modal',async()=>{
        await liveWallPage.clickCloseBtn()
      })

      await test.step('stop the game',async()=>{
              await liveWallPage.click_stop_button()
      })
})
test.skip("009FanSee-260 | validate font color change is reflected on mobile",async({ loginPage, liveWallPage, browser, page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        await test.step("009FanSee-6|navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
       
        await test.step('now click on admin page and start',async()=>{
                await liveWallPage.clickAdminPage()
        })
        await test.step('now start the game',async()=>{
                await liveWallPage.click_start_button()
        })
        await test.step("open mobile link and copy",async()=>{
                //click Mobile QR Code
               
                await liveWallPage.click_Mobile_button()
                await liveWallPage.click_copy_link_button()
      })
      let url= await clipboard.readSync()
      let newPage:livewallMobilePage
      await test.step('now open a new browser and check', async()=>{
              const newContext= await browser.newContext()
              newPage = new livewallMobilePage(await newContext.newPage())
              await newPage.GoTo(url)
      })
      await test.step('now go to game page',async()=>{
              await newPage.typeAge()
              await newPage.typeemail()
              await newPage.typephoneno()
              await newPage.typezip()
              await newPage.selectbirthdate()
              await newPage.clicksubmit() 
          
      })

      await test.step('stop the game',async()=>{
              await liveWallPage.click_stop_button()
      })
})
test.skip("009FanSee-261 | validate countdown color change is reflected on mobile",async({ loginPage, liveWallPage, browser, page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        await test.step("009FanSee-6|navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
       
        await test.step('now click on admin page and start',async()=>{
                await liveWallPage.clickAdminPage()
        })
        await test.step('now start the game',async()=>{
                await liveWallPage.click_start_button()
        })
        await test.step("open mobile link and copy",async()=>{
                //click Mobile QR Code
               
                await liveWallPage.click_Mobile_button()
                await liveWallPage.click_copy_link_button()
      })
      let url= await clipboard.readSync()
      let newPage:livewallMobilePage
      await test.step('now open a new browser and check', async()=>{
              const newContext= await browser.newContext()
              newPage = new livewallMobilePage(await newContext.newPage())
              await newPage.GoTo(url)
      })
      await test.step('now go to game page',async()=>{
              await newPage.typeAge()
              await newPage.typeemail()
              await newPage.typephoneno()
              await newPage.typezip()
              await newPage.selectbirthdate()
              await newPage.clicksubmit() 
          
      })

      await test.step('stop the game',async()=>{
              await liveWallPage.click_stop_button()
      })
})
test.skip("009FanSee-265 | validate go live button is working",async({ loginPage, liveWallPage,  page,browser }, testInfo)=>{
        await test.step("login admin", async () => {
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
        await test.step("009FanSee-6|navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
       
        await test.step('now click on admin page and start',async()=>{
                await liveWallPage.clickAdminPage()
        })
        await test.step('now start the game',async()=>{
                await liveWallPage.click_start_button()
        })
        await test.step("open mobile link and copy",async()=>{
                //click Mobile QR Code
               
                await liveWallPage.click_Mobile_button()
                await liveWallPage.click_copy_link_button()
      })
      let url= await clipboard.readSync()
      let newPage:livewallMobilePage
      await test.step('now open a new browser and check', async()=>{
              const newContext= await browser.newContext()
              newPage = new livewallMobilePage(await newContext.newPage())
              await newPage.GoTo(url)
      })
      await test.step('now go to game page',async()=>{
              await newPage.typeAge()
              await newPage.typeemail()
              await newPage.typephoneno()
              await newPage.typezip()
              await newPage.selectbirthdate()
              await newPage.clicksubmit() 
          
      })

      await test.step('stop the game',async()=>{
              await liveWallPage.click_stop_button()
      })
})
test.skip('009FanSee-266 | validate clear all button is working',async({ loginPage, liveWallPage, browser, page }, testInfo)=>{
        await test.step("login admin", async () => {
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
        await test.step("009FanSee-6|navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
       
        await test.step('now click on admin page and start',async()=>{
                await liveWallPage.clickAdminPage()
        })
        await test.step('now start the game',async()=>{
                await liveWallPage.click_start_button()
        })
        await test.step("open mobile link and copy",async()=>{
                //click Mobile QR Code
               
                await liveWallPage.click_Mobile_button()
                await liveWallPage.click_copy_link_button()
      })
      let url= await clipboard.readSync()
      let newPage:livewallMobilePage
      await test.step('now open a new browser and check', async()=>{
              const newContext= await browser.newContext()
              newPage = new livewallMobilePage(await newContext.newPage())
              await newPage.GoTo(url)
      })
      await test.step('now go to game page',async()=>{
              await newPage.typeAge()
              await newPage.typeemail()
              await newPage.typephoneno()
              await newPage.typezip()
              await newPage.selectbirthdate()
              await newPage.clicksubmit() 
          
      })

      await test.step('stop the game',async()=>{
              await liveWallPage.click_stop_button()
      })
})
test.skip("009LW-008 | Validate Cue Section", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {
        // const browser = await chromium.launch({ headless: false });
        // const context = await browser.newContext({permissions: ["camera"] });
        // const page = await context.newPage();



        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        //click Live Wall Section
        await liveWallPage.click_Fan_see_Section()



        //click Refresh Btn
        await liveWallPage.clickRefreshBtn()

        //click To Add Live Selfie Cam In Cue
        await liveWallPage.clickToAddLiveSelfieCamInCue()

        //click Cue Btn
        await liveWallPage.clickCueBtn()

        const [page1] = await Promise.all([
                page.waitForEvent('popup'),
                page.frameLocator('iframe').locator('text=Open Link').click()
        ]);


        // Click text=LiveAlertUncue >> button >> nth=0
        await page1.locator('text=LiveAlertUncue >> button').first().click();

        await page1.waitForTimeout(3000)

        // Click text=Next
        await page1.locator("//button[text()='Next']").click({ force: true });

        // Click text=No streamsNext >> div
        await page1.locator('text=No streamsNext >> div').click();

        // //click Cue Open New Tab Btn
        // await liveWallPage.clickCueOpenNewTabBtn()

        // //click To Add Live Selfie Cam In Cue
        // await liveWallPage.clickToAddCueToLiveSection()

        await page.waitForTimeout(2000)




})

test.skip("009LW-009 | Validate OutPut Section", async ({ loginPage, liveWallPage, functions, page, context }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {
        // const browser = await chromium.launch({ headless: false });
        // const context = await browser.newContext({permissions: ["camera"] });
        // const page = await context.newPage();



        await page.goto('/admin/#/sign-in')
        await loginPage.login(data.username, data.password)
        const title = await page.title();
        expect(title).toBe('DXP Admin')

        const screenshot = await page.screenshot();
        await testInfo.attach("login screenshot", {
                contentType: "image/png",
                body: screenshot
        })



        //click Live Wall Section
        await liveWallPage.click_Fan_see_Section()



        //click Refresh Btn
        await liveWallPage.clickRefreshBtn()

        //   // Click text=LiveAlertUncue >> button >> nth=0
        // await page.locator('text=LiveAlertUncue >> button').first().click();

        // Click text=CueLiveDelete >> button >> nth=1
        await page.frameLocator('iframe').locator('text=CueLiveDelete >> button').nth(1).click();



        //click Cue Btn
        await liveWallPage.clickOutPutBtn()

        const [page1] = await Promise.all([
                page.waitForEvent('popup'),
                page.frameLocator('iframe').locator('text=Open Link').click()
        ]);


        //                 // Click text=LiveAlertUncue >> button >> nth=0
        //   await page1.locator('text=LiveAlertUncue >> button').first().click();

        //   // Click text=Next
        //   await page1.locator('text=Next').click();

        //   // Click text=No streamsNext >> div
        //   await page1.locator('text=No streamsNext >> div').click();

        // //click Cue Open New Tab Btn
        // await liveWallPage.clickCueOpenNewTabBtn()

        // //click To Add Live Selfie Cam In Cue
        // await liveWallPage.clickToAddCueToLiveSection()

        await page.waitForTimeout(6000)







})

test("009FanSee-7|Validate normal user Qr section is functioning", async ({ loginPage, liveWallPage, functions, page,browser }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {

        await test.step("login to admin",async()=>{
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

        await test.step("009FanSee-6|navigate to fanseepage and open Admin page", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickAdminPage()
        })

        await test.step("009FanSee-9|Validate Mobile QR Code button visible and clickable.",async()=>{
                 //click Mobile QR Code
                 await liveWallPage.click_Mobile_button()
        })
        await test.step("009FanSee-12|Validate Mobile link text visiblity",async()=>{
                 await liveWallPage.Validate_mobile_link_text()
        })

        await test.step("009FanSee-13|Validate Copy LInk in Qr code is working",async()=>{
                 //click Copy QR Code Btn
                await liveWallPage.clickCopyQRCodeBtn()
                const newtab = browser.contexts()[0].newPage();
                (await newtab).goto('https://qr-code-scanner.net/')
                await (await newtab).locator('//a[@title="Scan QR code from paste"]').click()
                await (await newtab).locator('//button[text()="Paste"]').click()
        })

        await test.step("009FanSee-10|validate Save Qr code button is working",async()=>{
                 //click Save QR Code Btn
                await liveWallPage.validateDownload()
        })
        await test.step("009FanSee-15|	Validate close button in Mobile link is working",async()=>{
                await browser.contexts()[0].pages()[0].bringToFront()
                await liveWallPage.clickCloseBtn()
        })

})
test("009FanSee-14|validate open link in Normal QR code is working",async({ loginPage, liveWallPage, functions, page,browser }, testInfo)=>{
        await test.step("login to admin",async()=>{
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

        await test.step("009FanSee-6|navigate to fanseepage and open Admin page", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickAdminPage()
        })

        await test.step("009FanSee-9|Validate Mobile QR Code button visible and clickable.",async()=>{
                 //click Mobile QR Code
                 await liveWallPage.click_Mobile_button()
                 
        })
        
        await test.step('009FanSee-14|	validate open link in Normal QR code is working',async()=>{
                await liveWallPage.click_open_link_button()
                await browser.contexts()[0].pages()[1].
                 setViewportSize({width:320,height:658})

                 await browser.contexts()[0].pages()[1].bringToFront()
                 await browser.contexts()[0].pages()[1].waitForSelector("(//div[@id='app'])[1]",{state:'visible'})
        })
})
test("009FanSee-8|Validate VIP user QR section is functioning",async({ loginPage, liveWallPage, functions, page,browser }, testInfo)=>{
        await test.step("login to admin",async()=>{
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

        await test.step("009FanSee-6|navigate to fanseepage and open Admin page", async () => {
                await liveWallPage.click_Fan_see_Section()
        })
        await test.step('click on remove message popup', async() =>{ 
                await liveWallPage.remove_message_popup()
        })

       await test.step('click on tripple dot', async() =>{ 
                await liveWallPage.click_trippledot()
       })
       await test.step('click admin page', async() =>{ 
                await liveWallPage.clickAdminPage()
       })
        await test.step("009FanSee-22|Validate VIP Mobile QR Code button is visible and clickable.",async()=>{
                await liveWallPage.click_VIP_button()
        })
        await test.step("009FanSee-17|Validate VIP Link text",async()=>{
                await liveWallPage.Validate_Vip_link_text()
        })
        await test.step("009FanSee-19|Validate Copy Qr code button is working in Vip link",async()=>{
                //click Copy QR Code Btn
               await liveWallPage.clickCopyQRCodeBtn()
               const newtab = browser.contexts()[0].newPage();
               (await newtab).goto('https://qr-code-scanner.net/')
               await (await newtab).locator('//a[@title="Scan QR code from paste"]').click()
               await (await newtab).locator('//button[text()="Paste"]').click()
       })

        await test.step("009FanSee-18|validate Save Qr code button is working in vip link", async () => {
                //click Save QR Code Btn
                await liveWallPage.validateDownload_QR()
        })
        await test.step("009FanSee-16|Validate VIP Mobile close button is working", async () => {
                await browser.contexts()[0].pages()[0].bringToFront()
                await liveWallPage.clickCloseBtn()
        })
})
test("009FanSee-20|Validate open link in VIP QR code is working",async({ loginPage, liveWallPage, functions, page,browser }, testInfo)=>{
        await test.step("login to admin",async()=>{
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

        await test.step("009FanSee-6|navigate to fanseepage and open Admin page", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickAdminPage()
        })

        await test.step("009FanSee-9|Validate Mobile QR Code button visible and clickable.",async()=>{
                 //click Mobile QR Code
                 await liveWallPage.click_VIP_button()
                 
        })
        
        await test.step('009FanSee-14|	validate open link in Normal QR code is working',async()=>{
                await liveWallPage.click_open_link_button()
                await browser.contexts()[0].pages()[1].setViewportSize({width:320,height:658})

                 await browser.contexts()[0].pages()[1].bringToFront()
                 await browser.contexts()[0].pages()[1].waitForSelector("(//div[@id='app'])[1]",{state:'visible'})
        })
})

test('009FanSee-223|validate Analytics section is working',async({ loginPage, liveWallPage, functions, page }, testInfo)=>{
        await test.step("login to admin",async()=>{
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

        await test.step("009FanSee-124|	navigate to fanseepage and open analytics page", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.click_analytics_Page()
        })

        await test.step('009FanSee-224|validate Export section in Analytics is working',async()=>{
                await liveWallPage.validate_Download_exports()
        })
})
test('009FanSee-225|validate prizing section in new instance is working',async({ loginPage, liveWallPage, functions, page }, testInfo) =>{
        await test.step("login to admin",async()=>{
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

        await test.step("009FanSee-132|	navigate  to fansee and click prizing page", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.click_prizing_Page()
        })
        await test.step('009FanSee-226|	validate add new prize button is working',async ()=>{
                await liveWallPage.click_AddNewPrizeBtn()
        })
        await test.step('009FanSee-231|	validate Back_button in add new prize is working',async ()=>{
                await liveWallPage.back_button()
        })
        await test.step('009FanSee-125|	Validate title in prizing section works',async ()=>{
                await liveWallPage.click_AddNewPrizeBtn() 
                await liveWallPage.input_title_prize('Automation_test_')
        })
        await test.step('009FanSee-126|	Validate total prize in add new prize works',async()=>{
                await liveWallPage.input_total_prize('100')
        })
        await test.step('009FanSee-127|	Validate distribution type auto manual toggle works',async()=>{
                await liveWallPage.click_auto_distribution_type()
                await liveWallPage.click_manual_distribution_type()       
        })

        await test.step('009FanSee-128|	validate Chance field input is working',async()=>{
                await liveWallPage.input_chance_amount('100')
        })
        await test.step("009FanSee-134|	Validate condition type time is working",async()=>{
                await liveWallPage.click_condtion_type()
                await liveWallPage.click_condtion_type_Time()
        })
        await test.step("009FanSee-133|	validate condition type participation is working",async()=>{
                 await liveWallPage.click_condtion_type()
                await liveWallPage.click_condtion_type_participation()
        })

        await test.step("009FanSee-134|	Validate condition type time is working",async()=>{
                await liveWallPage.click_condtion_type()
                await liveWallPage.click_condtion_type_Made_output()
        })
        await test.step('009FanSee-128|	validate coupon selection is working',async()=>{
                await liveWallPage.click_button_to_start_selecting_coupon()
                await liveWallPage.select_first_coupon()
                await liveWallPage.confirm_select_coupon()
               
        })
        await test.step("009FanSee-227|validate Add new prize process is working",async()=>{
                await liveWallPage.clickSaveBtn()
        })
        // await test.step('009FanSee-136|	validate edit prize button is working',async()=>{
        //         await liveWallPage.click_prize_edit_button()
        //         await liveWallPage.input_title_prize('Automation_prize_edited')
        //         await liveWallPage.clickSaveBtn()
        // })

       
})
test('009FanSee-228|validate Distribute all manual prize button is clickable',async({ loginPage, liveWallPage, functions, page }, testInfo)=>{
        await test.step("login to admin",async()=>{
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

        await test.step("009FanSee-132|	navigate  to fansee and click prizing page", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.click_prizing_Page()
        })
        
        await test.step('click on distribute all manual prize button',async()=>{
                await liveWallPage.click_distribute_all_manual_PrizeBtn()
                await liveWallPage.verify_all_manual_Prize_distributed_confirmation()
        })
})
test('009FanSee-131|Validate Delete section in new config is working',async({ loginPage, liveWallPage, functions, page }, testInfo)=>{
        await test.step("login to admin",async()=>{
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
        await test.step("navigate to fanseepage ", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                
        })

        await test.step("now click on Delete section",async()=>{
                await liveWallPage.delete_config_section()
        })
})
test('009FanSee-229|validate Admin section functionalities',async({ loginPage, liveWallPage, functions, page,browser }, testInfo )=> {
        await test.step("login to admin",async()=>{
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
        await test.step("navigate to fanseepage and click admin ", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickAdminPage()
                
        })
        await test.step('009FanSee-91|Validate Refresh button is visible and refreshable.',async ()=>{
                await liveWallPage.click_refresh_button()
        })

        await test.step('009FanSee-92|Validate 1:1 Mobile toggle in Admin is working',async()=>{
                await liveWallPage.click_1_1_mobile_button()
        })
        await test.step('009FanSee-93|validate 9:16 Mobile toggle in Admin is working',async()=>{
                await liveWallPage.click_9_16_mobile_button()
        })

        await test.step('009FanSee-94|Validate 16:9 Mainboard toggle in admin is working',async()=>{
                await liveWallPage.click_16_9_mainboard_toggle()
        })
        await test.step('009FanSee-95|Validate 4:1 Mainboard toggle in admin is working',async()=>{
                await liveWallPage.click_4_1_mainboard_toggle()
        })
        await test.step('009FanSee-97|validate Feed count Multiple is working',async()=>{
                await liveWallPage.click_feedcount_multiple()
        })
        await test.step('009FanSee-96|validate Feed count Single toggle is working',async()=>{
                await liveWallPage.click_feedcount_single()
        })
        await test.step('009FanSee-98|validate signal strength dropdowns are Visible and clickable',async()=>{
                await liveWallPage.click_signal_dropdown()
        })
        await test.step('009FanSee-138|	Validate strong signal selection is working',async()=>{
                await liveWallPage.select_strong_signal()
        })
        await test.step('009FanSee-139|	validate weak signal selection is working',async()=>{
                // await liveWallPage.click_signal_dropdown()
                await liveWallPage.select_weak_signal()
        })
        await test.step('009FanSee-140|	Validate decent signal selection is working',async()=>{
                
                await liveWallPage.select_decent_signal()
        })
        await test.step("009FanSee-99|validate VIP only dropdowns are visible and clickable",async()=>{
                await liveWallPage.close_signal_dropdown()
                await liveWallPage.toggle_vip_only_dropdowns()
        })
        // await test.step('009FanSee-100|validate Start button is visible and clickable',async() =>{
        //         await liveWallPage.click_start_button()
        // })
        // await test.step('009FanSee-101|Validate Cue,live,delete button visiblitys',async()=>{
        //         // await liveWallPage.click_cue_button()
        //         await liveWallPage.click_Live_button()
        //         await liveWallPage.click_delete_button()
        // })
        // await test.step('009FanSee-233|validate stop button in admin section is working',async() =>{
        //         await liveWallPage.click_stop_button()
        // })

        await test.step('009FanSee-102|Validate search user name field is working',async() =>{
                await liveWallPage.type_in_search_username('Test_by_automation')
        })
        await test.step('009FanSee-103|Validate Mainboard output screen link button is working',async() =>{
               await liveWallPage.click_output_screen_link() 
        })

        await test.step('009FanSee-104|	Validate open link in output screen link is working',async() =>{
               await liveWallPage.click_open_link_button()
               let contexts = browser.contexts()[0]
               let pages=contexts.pages()[1]
               await pages.bringToFront()
        })
       
})
test('009FanSee-141|validate cue section functionalities',async({loginPage, liveWallPage, functions, page,browser }, testInfo) => {
        await test.step("login to admin",async()=>{
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
        await test.step("navigate to fanseepage and click cue section", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.click_cue_Page()
                
        }) 
        
        await test.step('009FanSee-22|Validate Enable auto rotation toggle is working',async () =>{
                await liveWallPage.toggle_auto_rotation()
        })

        await test.step('009FanSee-23|Validate seconds input in Enable auto rotatio is working',async ()=>{
                await liveWallPage.input_seconds_enable_auto_rotation('87')
        })
        await test.step('009FanSee-24|Validate Mobile 1:1 toggle in cue is working',async()=>{
                await liveWallPage.click_1_1_mobile_button()
        })
        await test.step('009FanSee-25|Validate Mobile 9:16 toggle in cue is working',async()=>{
                await liveWallPage.click_9_16_mobile_button()
        })

        await test.step('009FanSee-26|Validate Mainboard 16:9 toggle is working',async()=>{
                await liveWallPage.click_16_9_mainboard_toggle()
        })
        await test.step('009FanSee-27|Validate Maiboard 4:1 toggle is working',async()=>{
                await liveWallPage.click_4_1_mainboard_toggle()
        })
        await test.step('009FanSee-29|Validate feedcount multiple toggle is working',async()=>{
                await liveWallPage.click_feedcount_multiple()
        })
        await test.step('009FanSee-28|validate feedcount single toggle is working ',async()=>{
                await liveWallPage.click_feedcount_single()
        })

        await test.step('009FanSee-30|	Validate start button in cue screen is working',async()=>{
                await liveWallPage.click_start_button()
                await liveWallPage.click_stop_button()
        })
        await test.step('009FanSee-31|Validate output link button in cue screen is working',async() =>{
                await liveWallPage.click_output_screen_link() 
         })
 
         await test.step('009FanSee-32|Validate open link button in cue screen is working',async() =>{
                await liveWallPage.click_open_link_button()
                // await browser.contexts()[0].pages()[1].bringToFront()
         })

         await test.step('009FanSee-33|	Validate close button in output screen link is working',async()=>{
                const cntexts =  browser.contexts()[0]
                cntexts.pages()[0].bringToFront()
                await liveWallPage.clickCloseBtn()
         })

        //  await test.step('009FanSee-36|	Validate live, alert uncue section visiblitys',async()=>{
        //         await liveWallPage.click_live_button_cue()
        //         await liveWallPage.click_alert_button_cue()
        //         await liveWallPage.click_uncue_button_cue()
        //  })

         await test.step('009FanSee-142|validate stop button in cue section is working',async()=>{
                await liveWallPage.click_stop_button()
         })

})
test('009FanSee-232|validate favourite section is working',async({loginPage, liveWallPage, functions, page,browser }, testInfo)=>{
        await test.step("login to admin",async()=>{
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
        await test.step("navigate to fanseepage and click cue section", async () => {
                await liveWallPage.click_Fan_see_Section()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
              
                
        }) 
        await test.step('009FanSee-263|	validate favourite button is working',async()=>{
                await liveWallPage.click_favourite_Page()
        })    
        await test.step('009FanSee-106|	Validate Refresh button is visible and refreshable.',async()=>{
                await liveWallPage.click_refresh_button()
        })
        await test.step('v009FanSee-107|Validate 1:1 Mobile toggle in Admin is working',async()=>{
                await liveWallPage.click_1_1_mobile_button()
        })
        await test.step('009FanSee-108|	validate 9:16 Mobile toggle in Admin is working',async()=>{
                await liveWallPage.click_9_16_mobile_button()
        })
        await test.step('009FanSee-109|	Validate 16:9 Mainboard toggle in admin is working',async()=>{
                await liveWallPage.click_16_9_mainboard_toggle()
        })
        await test.step('009FanSee-110|	Validate 4:1 Mainboard toggle in admin is working',async()=>{
                await liveWallPage.click_4_1_mainboard_toggle()
        })
        await test.step('009FanSee-111|	validate Feed count Single toggle is working',async()=>{
                await liveWallPage.click_feedcount_single()
        })
        await test.step('009FanSee-112|	validate Feed count Multiple is working',async()=>{
                await liveWallPage.click_feedcount_multiple()
        })
        await test.step('009FanSee-113|	validate signal strength dropdowns are Visible and clickable',async()=>{
                await liveWallPage.click_signal_dropdown()
                await liveWallPage.select_strong_signal()
                await liveWallPage.select_weak_signal()
                await liveWallPage.select_decent_signal()
                await liveWallPage.close_signal_dropdown()
        })

        await test.step('009FanSee-115|validate Start button is visible and clickable',async()=>{
                await liveWallPage.click_start_button()
        })
        
        // await test.step('009FanSee-116|Validate Cue,live,delete button visiblitys in favourite',async()=>{
        //         await liveWallPage.click_cue_button()
        //         await liveWallPage.click_Live_button()
        //         await liveWallPage.click_delete_button()
        // })

        await test.step('009FanSee-117|	Validate search user name field is working',async()=>{
                await liveWallPage.type_in_search_username('Test')
        })

        await test.step('009FanSee-118|	Validate Mainboard output screen link button is working',async()=>{
                await liveWallPage.click_output_screen_link()            
        })
        await test.step('009FanSee-119|	Validate open link in output screen link is working',async()=>{
                await liveWallPage.click_open_link_button()
                await liveWallPage.clickCloseBtn()
        })

        await test.step('009FanSee-114|	 validate stop button is visible and clickable',async()=>{
                await liveWallPage.click_stop_button()
        })


})

