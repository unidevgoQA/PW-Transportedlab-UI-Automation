import test, { expect } from "@fixtures/basePages";
import { BrowserContext, webkit, devices, Page, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
// const clipboard = require("clipboardy");
import liveWallMobileScreenPage from "@pages/liveWallMobile.page";
import BaseFunctions from "@base-function/baseFunctions";
import livewallMobilePage from '../../pages/MobileGamesPage/livewall_mobile_game.page';
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


test("009FanSee-3| validate 'warning not forget to stop session pop up'  is visible", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
test("009FanSee-4| validate Add new configuration for Fansee is working", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
test("009FanSee-40| Validate Font Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
                await liveWallPage.inputBackgroundFirstRGBColor()


                //input Background Box Color RGB Second
                await liveWallPage.inputBackgroundBoxColorRGBSecond()



                //input Background Box Color RGB Third
                await liveWallPage.inputBackgroundBoxColorRGBThird()
        })



        await test.step("009FanSee-53|	Validate Background Color picker vertical opacity slider is visible and clickable.", async () => {
                //input Background Box Color Opacity
                await liveWallPage.inputBackgroundBoxColorOpacity()

        })

        await test.step("009FanSee-54|	Validate Background Color picker  hex input is working ", async () => {
                //input Background Box Color HEX Color
                await liveWallPage.inputBackgroundBoxColorHEXColor()



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
        await test.step("009FanSee-59|	Validate Font color picker plus button is visible and clickable.", async () => {
                await liveWallPage.clickplusbuttonswatches()
                await liveWallPage.clickdeletebuttonswatches()
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


        await test.step("009FanSee-65|	Validate Font color picker RGB is working", async () => {
                //input Font First RGB Color
                await liveWallPage.inputFontFirstRGBColor()



                //input Font Box Color RGB Second
                await liveWallPage.inputFontBoxColorRGBSecond()

                //input Font Box Color RGB Third
                await liveWallPage.inputFontBoxColorRGBThird()

                //input Font Box Color Opacity
                await liveWallPage.inputFontBoxColorOpacity()

        })

        await test.step("009FanSee-66|	Validate Font color picker hex and save button", async () => {
                //input Font Box Color HEX Color
                await liveWallPage.inputFontBoxColorHEXColor()

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
                await liveWallPage.inputFontFirstRGBColor()



                //input Font Box Color RGB Second
                await liveWallPage.inputFontBoxColorRGBSecond()

                //input Font Box Color RGB Third
                await liveWallPage.inputFontBoxColorRGBThird()

                //input Font Box Color Opacity
                await liveWallPage.inputFontBoxColorOpacity()

                //input Font Box Color HEX Color
                await liveWallPage.inputFontBoxColorHEXColor()

                //click Save Btn
                await liveWallPage.clickSaveBtn()
        })


})
test("009FanSee-80| Validate Mobile Background Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
test("009FanSee-79| Validate Mobile Homescreen logo Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
test("009FanSee-82| Validate Left Image (1:1 Output) Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
test("009FanSee-83| Validate Mobile Frame Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
test("009FanSee-85| Validate Banner Image (9:16 Output) Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
test("009FanSee-86| Validate Right Image (1:1 Output) Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
test("009FanSee-88| Validate 9:16 Fallback Upload Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
test("009LW-005 | Validate Pre-Live Text Messages Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
      

        // //input Post Live Text
        // await liveWallPage.inputPostLiveText()
        // await liveWallPage.postLiveInputBoxFonts()
        // await liveWallPage.postLiveInputBoxArial()
        // await liveWallPage.postLiveInputBoxBlocktype()
        // await liveWallPage.postLiveInputBoxNormal()
        // await liveWallPage.postLiveInputBoxBlocktype()

        // await liveWallPage.postLiveInputBoxBlockH1()
        // await liveWallPage.postLiveInputBoxBlocktype()

        // await liveWallPage.postLiveInputBoxBlockH2()
        // await liveWallPage.postLiveInputBoxBlocktype()

        // await liveWallPage.postLiveInputBoxBlockH3()
        // await liveWallPage.postLiveInputBoxBlocktype()

        // await liveWallPage.postLiveInputBoxBlockH4()
        // await liveWallPage.postLiveInputBoxBlocktype()

        // await liveWallPage.postLiveInputBoxBlockH5()
        // await liveWallPage.postLiveInputBoxBlocktype()

        // await liveWallPage.postLiveInputBoxBlockH6()
        // await liveWallPage.postLiveInputBoxBlocktype()

        // await liveWallPage.postLiveInputBoxBlockquote()
        // await liveWallPage.postLiveInputBoxBlocktype()

        // await liveWallPage.postLiveInputBoxBold()
        // await liveWallPage.postLiveInputBoxItalic()
        // await liveWallPage.postLiveInputBoxUnderline()
        // await liveWallPage.postLiveInputBoxsikethrough()
        // await liveWallPage.postLiveInputBoxColorpk()
        // await liveWallPage.postLiveInputBoxTextcl()
        // await liveWallPage.postLiveInputBoxGreencl()
        // await liveWallPage.postLiveInputBoxColorpk()

        // await liveWallPage.postLiveInputBoxHighlightcl()
        // await liveWallPage.postLiveInputBoxHighlightgrn()
        // await liveWallPage.postLiveInputBoxLeft()
        // await liveWallPage.postLiveInputBoxCenter()
        // await liveWallPage.postLiveInputBoxRight()
        // await liveWallPage.postLiveInputBoxOutdent()
        // await liveWallPage.postLiveInputBoxIndent()
        // await liveWallPage.postLiveInputBoxOrdered()
        // await liveWallPage.postLiveInputBoxUnOrdered()
        // await liveWallPage.postLiveInputBoxRemove()

        //input Post Live Text

        // await liveWallPage.standByInputBoxFonts()
        // await liveWallPage.standByInputBoxArial()
        // await liveWallPage.standByInputBoxBlocktype()
        // await liveWallPage.standByInputBoxNormal()
        // await liveWallPage.standByInputBoxBlocktype()

        // await liveWallPage.standByInputBoxBlockH1()
        // await liveWallPage.standByInputBoxBlocktype()

        // await liveWallPage.standByInputBoxBlockH2()
        // await liveWallPage.standByInputBoxBlocktype()

        // await liveWallPage.standByInputBoxBlockH3()
        // await liveWallPage.standByInputBoxBlocktype()

        // await liveWallPage.standByInputBoxBlockH4()
        // await liveWallPage.standByInputBoxBlocktype()

        // await liveWallPage.standByInputBoxBlockH5()
        // await liveWallPage.standByInputBoxBlocktype()

        // await liveWallPage.standByInputBoxBlockH6()
        // await liveWallPage.standByInputBoxBlocktype()

        // await liveWallPage.standByInputBoxBlockquote()
        // await liveWallPage.standByInputBoxBlocktype()

        // await liveWallPage.standByInputBoxBold()
        // await liveWallPage.standByInputBoxItalic()
        // await liveWallPage.standByInputBoxUnderline()
        // await liveWallPage.standByInputBoxsikethrough()
        // await liveWallPage.standByInputBoxColorpk()
        // await liveWallPage.standByInputBoxTextcl()
        // await liveWallPage.standByInputBoxGreencl()
        // await liveWallPage.standByInputBoxColorpk()

        // await liveWallPage.standByInputBoxHighlightcl()
        // await liveWallPage.standByInputBoxHighlightgrn()
        // await liveWallPage.standByInputBoxLeft()
        // await liveWallPage.standByInputBoxCenter()
        // await liveWallPage.standByInputBoxRight()
        // await liveWallPage.standByInputBoxOutdent()
        // await liveWallPage.standByInputBoxIndent()
        // await liveWallPage.standByInputBoxOrdered()
        // await liveWallPage.standByInputBoxUnOrdered()
        // await liveWallPage.standByInputBoxRemove()

        //input StandBy Message
        // await liveWallPage.inputStandByMessage()


        // //click Bold Option For PreLive Text
        // await liveWallPage.clickBoldOptionForPreLiveText()


        // await liveWallPage.lowConnectionMassageInputBoxFonts()
        // await liveWallPage.lowConnectionMassageInputBoxArial()
        // await liveWallPage.lowConnectionMassageInputBoxBlocktype()
        // await liveWallPage.lowConnectionMassageInputBoxNormal()
        // await liveWallPage.lowConnectionMassageInputBoxBlocktype()

        // await liveWallPage.lowConnectionMassageInputBoxBlockH1()
        // await liveWallPage.lowConnectionMassageInputBoxBlocktype()

        // await liveWallPage.lowConnectionMassageInputBoxBlockH2()
        // await liveWallPage.lowConnectionMassageInputBoxBlocktype()

        // await liveWallPage.lowConnectionMassageInputBoxBlockH3()
        // await liveWallPage.lowConnectionMassageInputBoxBlocktype()

        // await liveWallPage.lowConnectionMassageInputBoxBlockH4()
        // await liveWallPage.lowConnectionMassageInputBoxBlocktype()

        // await liveWallPage.lowConnectionMassageInputBoxBlockH5()
        // await liveWallPage.lowConnectionMassageInputBoxBlocktype()

        // await liveWallPage.lowConnectionMassageInputBoxBlockH6()
        // await liveWallPage.lowConnectionMassageInputBoxBlocktype()

        // await liveWallPage.lowConnectionMassageInputBoxBlockquote()
        // await liveWallPage.lowConnectionMassageInputBoxBlocktype()

        // await liveWallPage.lowConnectionMassageInputBoxBold()
        // await liveWallPage.lowConnectionMassageInputBoxItalic()
        // await liveWallPage.lowConnectionMassageInputBoxUnderline()
        // await liveWallPage.lowConnectionMassageInputBoxsikethrough()
        // await liveWallPage.lowConnectionMassageInputBoxColorpk()
        // await liveWallPage.lowConnectionMassageInputBoxTextcl()
        // await liveWallPage.lowConnectionMassageInputBoxGreencl()
        // await liveWallPage.lowConnectionMassageInputBoxColorpk()

        // await liveWallPage.lowConnectionMassageInputBoxHighlightcl()
        // await liveWallPage.lowConnectionMassageInputBoxHighlightgrn()
        // await liveWallPage.lowConnectionMassageInputBoxLeft()
        // await liveWallPage.lowConnectionMassageInputBoxCenter()
        // await liveWallPage.lowConnectionMassageInputBoxRight()
        // await liveWallPage.lowConnectionMassageInputBoxOutdent()
        // await liveWallPage.lowConnectionMassageInputBoxIndent()
        // await liveWallPage.lowConnectionMassageInputBoxOrdered()
        // await liveWallPage.lowConnectionMassageInputBoxUnOrdered()
        // await liveWallPage.lowConnectionMassageInputBoxRemove()

        // await liveWallPage.inputLowConnectionMassage()

        // await page.waitForTimeout(4000)

        // // })



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
        await test.step("now navigate to fanseepage and open Game Design", async () => {
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
test("009FanSee-163|Validate Standby Text Message functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
        
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
test.skip("009LW-006 | Validate Live Selfie Cam Link Open Functionality", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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



        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()

        await page.waitForTimeout(2000)


        //click Game Start Btn
        await liveWallPage.clickGameStartBtn()

        await page.waitForTimeout(2000)
        await liveWallPage.clickGameStartBtn()


        //click Live Selfie Cam Out Put Link
        await liveWallPage.clickLiveSelfieCamOutPutLink()

        //click Live Selfie Cam Out Put Link Copy Btn
        await liveWallPage.clickLiveSelfieCamOutPutLinkCopyBtn()


        await page.waitForTimeout(2000)




})

test.skip("009LW-007 | Validate Live Selfie Cam OutPut Link open in Mobile", async ({ loginPage, liveWallPage, functions }, testInfo) => {
        // await test.step("Login Admin And land To Home Screen", async () => {


        // const browser = await webkit.launch({ headless: false });
        // const context = await browser.newContext({ ...devices['iPhone 12 Pro'] });
        // const page = await context.newPage();

        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext({ ...devices["Pixel 5"], permissions: ["camera"] });
        const page = await context.newPage();

        await page.goto("/admin/#/sign-in");
        await page.fill("input[type='text']", "qa-1")
        await page.fill("input[type='password']", "mFkTylCDNC")

        await Promise.all([
                page.waitForNavigation(),
                page.click("button:has-text('Login')")
        ])


        await page.click("//p[text()='Live Wall']")


        await page.waitForTimeout(2000)


        const stopBtn = await page.frameLocator('iframe').locator("//button[text()='STOP']").isVisible()
        if ((stopBtn == true)) {
                // console.log("Enable Stage to be skip and jump to next one")
                await page.frameLocator('iframe')
                        .locator("//div[@class='MuiBox-root css-pzp2lt']//button[1]")
                        .click({ force: true })
        }

        await page.waitForTimeout(4000)

        const startBtn = await page.frameLocator('iframe').locator("//button[text()='START']").isVisible()
        if ((startBtn == true)) {
                // console.log("Enable Stage to be skip and jump to next one")
                await page.frameLocator('iframe')
                        .locator("//div[@class='MuiBox-root css-pzp2lt']//button[1]")
                        .click({ force: true })
        }



        const liveSelfieBtn = await page
                .frameLocator("iframe")
                .locator("(//h2[text()='Live Selfie Cam']/following-sibling::button)[1]");
        await liveSelfieBtn.click();

        const [page1] = await Promise.all([
                page.waitForEvent('popup'),
                page.frameLocator('iframe').locator('text=Open Link').click()
        ]);



        const nameField = await page1.locator('#usernameField').isVisible()
        if ((nameField == true)) {
                // console.log("Enable Stage to be skip and jump to next one")
                await page1
                        .locator('#usernameField')
                        .fill('Jon Doe');
        }

        const enterBtn = await page1.locator("text=Enter").isVisible()
        if ((enterBtn == true)) {
                // console.log("Enable Stage to be skip and jump to next one")
                await page1
                        .locator("text=Enter")
                        .click()
        }


        // let ele = await page1.locator('input[type="text"]').isVisible()
        // if ((ele == true)) {
        //         // console.log("Enable Stage to be skip and jump to next one")
        //         await page1
        //                 .locator('input[type="text"]')
        //                 .fill('Jon Doe');
        // }

        await page1.fill('[name="phone"]', "310-260-6620")

        await page1.fill('[name="email"]', "jon@email.com")

        await page1.fill('[name="age"]', "23")

        await page1.click('//input[@name="birthDate"]');

        await page1.waitForTimeout(5000)

        await page1.click("//button[text()='27']");

        await page1.click("//button[text()='OK']");

        await page1.fill('[name="zipCode"]', "1223")

        await page1.click("//button[text()='Submit']");

        await page1.waitForTimeout(2000)

        await page1.click("//button[text()='Ok']")

        await page1.click("//p[text()='USER PROFILE']");

        await page1.waitForTimeout(5000)


        await page1.click("//p[text()='RULES']");
        await page1.waitForTimeout(6000)


        await page1.click("//p[text()='HOW TO PLAY']");
        await page1.waitForTimeout(6000)



        await page1.click("//button[@value='prize']");

        await page1.waitForTimeout(5000)

        await page1.click("//p[text()='HOME']");
        await page1.waitForTimeout(20000)


        // await context.close()

        // })



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

test.skip("009LW-0010 | Validate QR Code Section", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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



        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()
        await page.waitForTimeout(2000)

        //click Mobile QR Code
        await liveWallPage.clickMobileQRCode()
        await page.waitForTimeout(3000)
        await liveWallPage.clickMobileQRCode()

        //click Copy QR Code Btn
        await liveWallPage.clickCopyQRCodeBtn()


        //click Save QR Code Btn
        await liveWallPage.clickSaveQRCodeBtn()



        //click QR Code Window Close Btn
        await liveWallPage.clickQRCodeWindowCloseBtn()



        //click Refresh Btn
        // await liveWallPage.clickRefreshBtn()



        // //click Cue Btn
        // await liveWallPage.clickCueBtn()



        //click Cue OpenNew Tab Btn
        // await liveWallPage.clickCueOpenNewTabBtn()



        //  //click Auto Rotation Check Box
        //  await liveWallPage.clickAutoRotationCheckBox()

        await page.waitForTimeout(2000)




})

test.skip("009LW-0011 | Validate Analytics Section", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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



        //click Live Wall Section
        await liveWallPage.clickLiveWallSection()

        //click Analytics Btn
        await liveWallPage.clickAnalyticsBtn()

        await page.waitForTimeout(2000)
        await liveWallPage.clickAnalyticsBtn()
        await page.waitForTimeout(2000)

        // //download Anlytics
        // await liveWallPage.downloadAnlytics()
        //click Analytics Page Back Btn
        await liveWallPage.clickAnalyticsPageBackBtn()
        //click Game Stop Btn
        await liveWallPage.clickGameStopBtn()

        await page.waitForTimeout(2000)




})



// })









test.skip("009LW-012 | Validate Live Selfie Cam OutPut Link open in Mobile", async ({ loginPage, triviaPage, liveWallPage, functions, page, browser }, testInfo) => {
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
        let livewallmobilescreenpage: liveWallMobileScreenPage
        await test.step("Validate Game Open Section Functionality", async () => {

                //click Mobile Link Btn
                await liveWallPage.clickLiveWallSection()
                await page.waitForTimeout(5000)
                await liveWallPage.clickRefreshBtn()
                await liveWallPage.clickRefreshBtn()

                await liveWallPage.clickQRCodeBtn()

                //now click on open button
                newTab = await liveWallPage.clickMobileLinkOpenBtn()
                //livewallmobilescreenpage = new liveWallMobileScreenPage(newTab)


        })







})
test("009LW-0013 | Validate mobile link button visible and clickable", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
        await test.step("Validate mobile link button visible and clickable", async () => {

                await liveWallPage.clickLiveWallSection()
                await liveWallPage.clickAdminSection()
                await page.waitForTimeout(2000)
                await liveWallPage.clickMobileLinkBtn()
        })





})
test.skip("009LW-0014 | Validate Mobile Link text is  visible", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
        await test.step("Validate Mobile Link Text is visible", async () => {

                await liveWallPage.clickLiveWallSection()
                await liveWallPage.clickAdminSection()
                await page.waitForTimeout(2000)
                await liveWallPage.clickMobileLinkBtn()
                await liveWallPage.verifyMobileLinkText()
        })





})
test.skip("009LW-0015 | Validate QR Screen code is  visible", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
        await test.step("Validate QR Screen code is  visible", async () => {

                await liveWallPage.clickLiveWallSection()
                await liveWallPage.clickAdminSection()
                await page.waitForTimeout(2000)
                await liveWallPage.clickMobileLinkBtn()
                await liveWallPage.verifyQRScreencode()
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
test.skip("009LW-018 | Validate Save QR Code button is working", async ({ loginPage, triviaPage, liveWallPage, functions, page, browser }, testInfo) => {
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




        })
        await test.step("Now Validate QR code save button", async () => {
                await liveWallPage.validateSaveQRCode()
                await page.waitForTimeout(2000)

        })

})
test.skip("009LW-0019 | Validate VIP mobile link button visible and clickable", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
        await test.step("Validate VIP mobile link button visible and clickable", async () => {

                await liveWallPage.clickLiveWallSection()
                await liveWallPage.clickAdminSection()
                await page.waitForTimeout(2000)
                await liveWallPage.clickVIPMobileLinkBtn()
        })
})
test.skip("009LW-0020 | Validate VIP link text is visible", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
        await test.step("Validate VIP link text visible", async () => {

                await liveWallPage.clickLiveWallSection()
                await liveWallPage.clickAdminSection()
                await page.waitForTimeout(2000)
                await liveWallPage.clickRefreshBtn()
                await liveWallPage.clickVIPMobileLinkBtn()
                await liveWallPage.verifyVIPLinkText()
        })
})
test.skip("009LW-021 | Validate VIP QR Screen code is  visible", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
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
        await test.step("Validate QR Screen code is  visible", async () => {

                await liveWallPage.clickLiveWallSection()
                await liveWallPage.clickAdminSection()
                await page.waitForTimeout(2000)
                await liveWallPage.clickVIPMobileLinkBtn()
                await liveWallPage.verifyVIPQRScreencode()
                await liveWallPage.clickCloseBtn()
        })





})
test.skip("009LW-022 | Validate VIP mobile  Link open in Mobile screen", async ({ loginPage, triviaPage, liveWallPage, functions, page, browser }, testInfo) => {
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
                await liveWallPage.clickVIPMobileLinkBtn()




                //now click on open button
                newTab = await liveWallPage.clickVIPMobileLinkOpenBtn()
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
test.skip("009LW-023 | Validate VIP Game Link Successfully Copy in system clipboard and open in Mobile screen", async ({ loginPage, triviaPage, liveWallPage, functions, page, browser }, testInfo) => {
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

        await test.step("Now click VIP mobile link copy button", async () => {

                //click Mobile Link Btn
                await liveWallPage.clickLiveWallSection()
                await liveWallPage.clickAdminSection()
                await page.waitForTimeout(2000)
                await liveWallPage.clickRefreshBtn()
                await liveWallPage.clickVIPMobileLinkBtn()
                await liveWallPage.clickVIPCopyLinkBtn()




                //now click on open button



        })
        await test.step("Now click close button", async () => {
                await liveWallPage.clickCloseBtn()
        })
        let URL = ''
        let livewallmobilepage: livewallMobilePage
        await test.step("now copy the contents from system clipboard(URL Here)", async () => {
                URL = clipboard.readSync();
                console.log(URL);
        })


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
test.skip("009LW-024 | Validate Save VIP QR Code button is working", async ({ loginPage, triviaPage, liveWallPage, functions, page, browser }, testInfo) => {
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
                await liveWallPage.clickVIPMobileLinkBtn()




        })
        await test.step("Now Validate VIP QR code save button", async () => {
                await liveWallPage.validateVIPSaveQRCode()
                await page.waitForTimeout(2000)

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

