import test, { expect } from "@fixtures/basePages";
import { BrowserContext, webkit, devices, Page, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
// const clipboard = require("clipboardy");
import liveWallMobileScreenPage from "@pages/liveWallMobile.page";
import BaseFunctions from "@base-function/baseFunctions";
import livewallMobilePage from '../../pages/MobileGamesPage/livewall_mobile_game.page';
import liveWallPage from "@pages/liveWall.page";
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
        await liveWallPage.clickLiveWallSection()
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
                await liveWallPage.clickLiveWallSection()

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
                await liveWallPage.clickLiveWallSection()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                //click Design Page
                await liveWallPage.clickDesignPage()
        })
        //click Live Wall Section
        await test.step('009FanSee-38|	Validate Fonts title is visible.', async () => {
                //verify Fonts Title Text
                await liveWallPage.verifyFontsTitleText()

        })

        //delete Uploaded Feed Right Image
        await liveWallPage.deleteUploadedFeedRightImage()

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
        await test.step("now navigate to fanseepage and open Game Design", async () => {
                await liveWallPage.clickLiveWallSection()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                //click Design Page
                await liveWallPage.clickDesignPage()
        })



        //click Clear Btn
        // await liveWallPage.clickClearBtn()
        await test.step("009FanSee-45|	Validate Color Picker title is visible", async () => {
                await liveWallPage.verify_image_upload_text()
        })
        await test.step("009FanSee-48|	Validate Background Color picker plus button is visible and clickable.", async () => {
                //click Background Color Picker Input Field
                await liveWallPage.clickBackgroundColorPickerInputField()

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

        await test.step("009FanSee-52|	Validate Background Color picker RGB sections are working", async () => {
                //input Background First RGB Color
                await liveWallPage.input_Red_Color('211')


                //input Background Box Color RGB Second
                await liveWallPage.input_blue_color('54')



                //input Background Box Color RGB Third
                await liveWallPage.input_green_color('54')
        })



        await test.step("009FanSee-53|	Validate Background Color picker vertical opacity slider is visible and clickable.", async () => {
                //input Background Box Color Opacity
                await liveWallPage.inputColorOpacity('98')

        })

        await test.step("009FanSee-54|	Validate Background Color picker  hex input is working ", async () => {
                //input Background Box Color HEX Color
                await liveWallPage.inputHEXColor('D33636FF')



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
                await liveWallPage.clickLiveWallSection()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                //click Design Page
                await liveWallPage.clickDesignPage()
        })

        await test.step("009FanSee-56|	Validate Font Color text is visible and button is clickabley", async () => {
                //009FanSee-56|	Validate Font Color text is visible and button is clickable.
                await liveWallPage.clickFontColorPickerInputField()
        })
        
        await test.step("009FanSee-60|	Validate Font color picker horizantol section", async () => {
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_horizontal_button()
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
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_solid_button()
                
        })
        await test.step("009FanSee-59|	Validate Font color picker plus button is visible and clickable.", async () => {
                await liveWallPage.clickplusbuttonswatches()
                await liveWallPage.clickdeletebuttonswatches()
              
                
        })


        await test.step("009FanSee-65|	Validate Font color picker RGB is working", async () => {
                //input Font First RGB Color
                await liveWallPage.input_Red_Color('111')



                //input Font Box Color RGB Second
                await liveWallPage.input_green_color('48')

                //input Font Box Color RGB Third
                await liveWallPage.input_blue_color('214')

                //input Font Box Color Opacity
                await liveWallPage.inputColorOpacity('98')
                

        })

        await test.step("009FanSee-66|	Validate Font color picker hex and save button", async () => {
                
                 await liveWallPage.inputHEXColor(' '+'#6F30D6FA')

                //  await page.waitForSelector('//div[@fill="hsla(263, 67%, 51%, 0.98)"]',{state:'visible'})
                //click Save Btn
                await liveWallPage.clickSaveBtn()
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
                await liveWallPage.clickLiveWallSection()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                //click Design Page
                await liveWallPage.clickDesignPage()
        })

        await test.step("009FanSee-68|	Validate Countdown Color picker text is visible and working", async () => {
                //click Font Color Picker Input Field
                await liveWallPage.click_countdown_ColorPicker_InputField()

        })
        await test.step("009FanSee-69|	validate swatches section in countdown color picker is working", async () => {
                await liveWallPage.clickplusbuttonswatches()
                await liveWallPage.clickdeletebuttonswatches()

        })
        await test.step("valid horizontal dropdowns are working", async () => {
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_horizontal_button()
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_vertical_button()
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_radial_button()
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_diagonal_button()
                await liveWallPage.validate_solid_horizontal_vertical_dropdown()
                await liveWallPage.click_solid_button()
        })

        //input Font First RGB Color
        await test.step("now upload count_down_colors ", async () => {
                await liveWallPage.input_Red_Color('43')

                //input Font Box Color RGB Second
                await liveWallPage.input_green_color('189')

                //input Font Box Color RGB Third
                await liveWallPage.input_blue_color('221')

                //input Font Box Color Opacity
                await liveWallPage.inputColorOpacity('98')

                //input Font Box Color HEX Color
                await liveWallPage.inputHEXColor('2BBDDDFF')
                //click Save Btn
                await liveWallPage.clickSaveBtnColorpicker()
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
                await liveWallPage.clickLiveWallSection()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })

        await test.step("now mobile background image", async () => {
                //click ToUpload Feed Right Image
                await liveWallPage.mobile_background_image_upload()
                await liveWallPage.Image_uploader_For_mobile_background()
                await liveWallPage.wait_mobile_back_upload()
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
                await liveWallPage.clickLiveWallSection()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("validate mobile home screen logo upload works", async () => {
                await liveWallPage.mobile_home_screen_logo_upload()
                await liveWallPage.Image_uploader_For_mobile_home_screen_logo()
                await liveWallPage.wait_mobile_Home_screen_upload()
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
                await liveWallPage.clickLiveWallSection()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("validate mobile home screen logo upload works", async () => {
                await liveWallPage.output_background_upload()
                await liveWallPage.Image_uploader_For_output_background()
                await liveWallPage.wait_OutPut_background()
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
                await liveWallPage.clickLiveWallSection()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("validate mobile home screen logo upload works", async () => {
                await liveWallPage.left_image_1_1_upload()
                await liveWallPage.Image_uploader_For_left_image_1_1()
                await liveWallPage.wait_left_image_1_1_upload()
        })
})
test("009FanSee-83|Validate Mobile Frame Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
                await liveWallPage.clickLiveWallSection()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("validate mobile home screen logo upload works", async () => {
                await liveWallPage.mobile_frame_upload()
                await liveWallPage.Image_uploader_For_mobile_frame()
                await liveWallPage.wait_mobile_frame_upload()
        })
})
test("009FanSee-84|Validate Output Frame (9:16 Output) Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
                await liveWallPage.clickLiveWallSection()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("validate mobile home screen logo upload works", async () => {
                await liveWallPage.OutputFrame_9_16_upload()
                await liveWallPage.Image_uploader_For_OutputFrame_9_16()
                await liveWallPage.wait_OutputFrame_9_16_upload()
        })
})
test("009FanSee-85|Validate Banner Image (9:16 Output) Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
                await liveWallPage.clickLiveWallSection()

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
test("009FanSee-86|Validate Right Image (1:1 Output) Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
                await liveWallPage.clickLiveWallSection()

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
                await liveWallPage.clickLiveWallSection()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("validate mobile home screen logo upload works", async () => {
                await liveWallPage.Fallback_1_1_upload()
                await liveWallPage.Image_uploader_For_Fallback_1_1()
                await liveWallPage.wait_Fallback_1_1_upload()
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
                await liveWallPage.clickLiveWallSection()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("validate mobile home screen logo upload works", async () => {
                await liveWallPage.Fallback_9_16_upload()
                await liveWallPage.Image_uploader_For_Fallback_9_16()
                await liveWallPage.wait_Fallback_9_16_upload()
        })
})
test("009FanSee-130|validate prelive text message functionalities", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
                await liveWallPage.clickLiveWallSection()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })

        await test.step('009FanSee-144|	Validate Pre-Live Text input is working',async()=>{
                   //input Pre Live Text
                await liveWallPage.inputPreLiveText()

        })

        await test.step("009FanSee-145|	Validate Pre-Live Text Font Selection DropDown Option is visible and clickable.",async()=>{
                 
                await liveWallPage.preLiveInputBoxFonts()
                await liveWallPage.preLiveInputBoxArial()
        })
        
        await test.step('009FanSee-157|	Validate Pre-Live Text blocktypes: Normal,H1,H2,H3 etc are working',async()=>{
                await liveWallPage.preLiveInputBoxBlocktype()
        await liveWallPage.preLiveInputBoxNormal()
        await liveWallPage.preLiveInputBoxBlocktype()

        await liveWallPage.preLiveInputBoxBlockH1()
        await liveWallPage.preLiveInputBoxBlocktype()

        await liveWallPage.preLiveInputBoxBlockH2()
        await liveWallPage.preLiveInputBoxBlocktype()

        await liveWallPage.preLiveInputBoxBlockH3()
        await liveWallPage.preLiveInputBoxBlocktype()

        await liveWallPage.preLiveInputBoxBlockH4()
        await liveWallPage.preLiveInputBoxBlocktype()

        await liveWallPage.preLiveInputBoxBlockH5()
        await liveWallPage.preLiveInputBoxBlocktype()

        await liveWallPage.preLiveInputBoxBlockH6()
        await liveWallPage.preLiveInputBoxBlocktype()

        await liveWallPage.preLiveInputBoxBlockquote()
        await liveWallPage.preLiveInputBoxBlocktype()
        })
        

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
                await liveWallPage.clickLiveWallSection()

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
                await liveWallPage.clickLiveWallSection()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
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
                await liveWallPage.clickLiveWallSection()

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
                await liveWallPage.clickLiveWallSection()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                await liveWallPage.clickDesignPage()
        })
        await test.step("009FanSee-217|	validate Live countdown timer Toggle is working",async()=>{
                await liveWallPage.click_live_countdown_timer_toggle()
        })
        await test.step('009FanSee-218|validate Show username to Mainboard toggle is working',async()=>{
                await liveWallPage.click_show_username_to_mainboard_toggle()
        })
        await test.step('009FanSee-219|validate Enable Camera Flip toggle is working',async()=>{
                await liveWallPage.click_enable_camera_flipt_toggle()
        })
        await test.step('009FanSee-220|	validate Hours is typeable in controls',async() =>{
                await liveWallPage.type_hours_in_control()
        })
        await test.step('009FanSee-221|	validate Minutes section is typeable in controls',async()=>{
                await liveWallPage.type_seconds_in_control()
        })
        await test.step("009FanSee-222|	validate seconds is typeable in controls",async()=>{
                await liveWallPage.type_seconds_in_control()
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
        await liveWallPage.clickLiveWallSection()



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
        await liveWallPage.clickLiveWallSection()



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
                await liveWallPage.clickLiveWallSection()

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
                await liveWallPage.clickLiveWallSection()

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
                await liveWallPage.clickLiveWallSection()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
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
                await liveWallPage.validateDownload()
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
                await liveWallPage.clickLiveWallSection()

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
                await browser.contexts()[0].pages()[1].
                 setViewportSize({width:320,height:658})

                 await browser.contexts()[0].pages()[1].bringToFront()
                 await browser.contexts()[0].pages()[1].waitForSelector("(//div[@id='app'])[1]",{state:'visible'})
        })
})


test.skip("009LW-016 | Validate mobile  Link open in Mobile screen", async ({ loginPage, triviaPage, liveWallPage, functions, page, browser }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {
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
        let newTab = null;
        let livewallmobilepage: livewallMobilePage
        await test.step("Validate Game Open Section Functionality", async () => {

                //click Mobile Link Btn
                await liveWallPage.clickLiveWallSection()
                await liveWallPage.clickAdminSection()
                await page.waitForTimeout(2000)
                await liveWallPage.clickRefreshBtn()
                await liveWallPage.clickMobileLinkBtn()




                //now click on open button
                newTab = await liveWallPage.clickMobileLinkOpenBtn()
                livewallmobilepage = new livewallMobilePage(newTab)


        })
        await test.step("provide values in form field of mobile view and submit", async () => {
                await livewallmobilepage.typephoneno()
                await livewallmobilepage.selectbirthdate()
                await livewallmobilepage.typeAge()
                await livewallmobilepage.typeemail()
                await livewallmobilepage.typezip()
                await livewallmobilepage.clicksubmit()
        })







})
test.skip("009LW-017 | Validate Game Link Successfully Copy in system clipboard and open in Mobile screen", async ({ loginPage, triviaPage, liveWallPage, functions, page, browser }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {
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

        await test.step("Now click mobile link copy button", async () => {

                //click Mobile Link Btn
                await liveWallPage.clickLiveWallSection()
                await liveWallPage.clickAdminSection()
                await page.waitForTimeout(2000)
                await liveWallPage.clickRefreshBtn()
                await liveWallPage.clickMobileLinkBtn()
                await liveWallPage.clickCopyLinkBtn()




                //now click on open button



        })
        await test.step("Now click close button", async () => {
                await liveWallPage.clickCloseBtn()
        })
        let URL = ''
        await test.step("now copy the contents from system clipboard(URL Here)", async () => {
                URL = clipboard.readSync();
                console.log(URL);
        })
        let livewallmobilepage: livewallMobilePage

        await test.step("Now open copy link on mobile", async () => {
                livewallmobilepage = new livewallMobilePage(page)
                await livewallmobilepage.GoTo(URL)


        })

        // let newTab = null;

        // newTab = await liveWallPage.clickMobileLinkOpenBtn()
        // livewallmobilepage = new livewallMobilePage(newTab)
        await test.step("provide values in form field of mobile view and submit", async () => {
                await livewallmobilepage.typephoneno()
                await livewallmobilepage.selectbirthdate()
                await livewallmobilepage.typeAge()
                await livewallmobilepage.typeemail()
                await livewallmobilepage.typezip()
                await livewallmobilepage.clicksubmit()
        })







})

test.skip("009LW-025 | Validate Output Screen Link button visible and clickable.", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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



        //click Live Wall Section
        await test.step("Validate Output Screen Link button visible and clickable", async () => {

                await liveWallPage.clickLiveWallSection()
                await liveWallPage.clickAdminSection()
                await page.waitForTimeout(2000)
                await liveWallPage.clickOutputLinkBtn()
        })
})

test.skip("009LW-026 | Validate Output Screen Link text is visible.", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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



        //click Live Wall Section
        await test.step("Validate Output Screen Link text is visible", async () => {

                await liveWallPage.clickLiveWallSection()
                await liveWallPage.clickAdminSection()
                await page.waitForTimeout(2000)
                await liveWallPage.clickRefreshBtn()
                await liveWallPage.clickOutputLinkBtn()
                await liveWallPage.verifyOutputScreenLinkText()
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
                await liveWallPage.clickLiveWallSection()

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
                await liveWallPage.clickLiveWallSection()

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
                await liveWallPage.input_title_prize("Automation_test_prize")
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
                await liveWallPage.clickLiveWallSection()

                await liveWallPage.remove_message_popup()

                await liveWallPage.click_trippledot()
                
        })

        await test.step("now click on Delete section",async()=>{
                await liveWallPage.delete_config_section()
        })
})

