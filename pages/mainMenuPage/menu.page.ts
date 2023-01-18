import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class menuPage {

        private page: Page;
        static login: any;
        static buffer: void;

        constructor(page: Page) {
                this.page = page;
        }

        //Menu Page Button Element
        async clickMenuPage() {
                const locator = this.page.locator("//p[text()='Menu']")
                expect(locator).toContainText('Menu')
                await locator.click()
        }

        //Fonts Header Text Elemant
        async checkFontsText() {
                const ele = this.page.locator("(//h4[text()='Fonts'])[1]")
                expect(ele).toContainText('Fonts')
        }

        //Upload Fonts Header Text Elemant
        async checkUploadFontText() {
                const ele = this.page.locator("(//p[text()='Upload Font'])[1]")
                expect(ele).toContainText('Upload Font')
        }


        //Upload Fonts Header Text Elemant
        async clickToUploadFont() {
                const ele = this.page.locator("//div[@class='MuiBox-root css-v2612']")
                expect(ele).toBeVisible()
                await ele.click({force:true})
                await this.page.waitForLoadState('domcontentloaded');
        }



        //Upload Fonts
        async uploadFont() {

                const buffer = readFileSync('testData/fonts/Midnight.ttf');
                // Create the DataTransfer and File
                const dataTransfer = await this.page.evaluateHandle((data) => {
                        const dt = new DataTransfer();
                        // Convert the buffer to a hex array
                        const file = new File([data.toString('hex')], 'Midnight.ttf', { type: 'application/ttf' });
                        dt.items.add(file);
                        return dt;
                }, buffer);

                // Now dispatch
            
                await this.page.dispatchEvent("//div[@class='MuiBox-root css-v2612']", 'drop', { dataTransfer });
        }

         //Delete uploaded font
         async deleteUploadedFont() {
                const ele = this.page.locator("(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[1]")
                expect(ele).toBeVisible()
                await ele.click();
        } 


        //Fonts Header Text Elemant
        async checkMenuBarTitleText() {
                const ele = this.page.locator("//h4[text()='Menu Bar']")
                expect(ele).toContainText('Menu Bar')
        }

        //Language Controls Text Element
        async clickFirstMenuBarColorInputField() {
                const ele = this.page.locator("(//div[@class='MuiBox-root css-njrrwe']//button)[1]")
                expect(ele).toBeVisible()
                await ele.click();
        }
       
        //input menubar first color
        async inputMenuBarRgbFirstFieldColor() {
                const ele = this.page.locator("(//input[@inputmode='numeric'])[1]")
                expect(ele).toBeVisible()
                await ele.fill('40');
        }

        //input menubar second field color
        async inputMenuBarRgbSecondFieldColor() {
                const ele = this.page.locator("(//input[@inputmode='numeric'])[2]")
                expect(ele).toBeVisible()
                await ele.fill('167');
        }

        //input menubar second field color
        async inputMenuBarRgbThirdFieldColor() {
                const ele = this.page.locator("(//input[@inputmode='numeric'])[3]")
                expect(ele).toBeVisible()
                await ele.fill('164');
        }

        //input menubar second field color
        async inputMenuBarColorFieldOpacity() {
                const ele = this.page.locator("(//input[@inputmode='numeric'])[4]")
                expect(ele).toBeVisible()
                await ele.fill('100');
        }

        //input menubar second field color
        async inputMenuBarSolidFieldColor() {
                const ele = this.page.locator("//div[@class='MuiBox-root css-zfy2p9']/following-sibling::input[1]")
                expect(ele).toBeVisible()
                await ele.fill('2aA8D9');
        }


        //Click on the second color input field
        async clickSecondMenuBarColorInputField() {
                const ele = this.page.locator("(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[2]")
                expect(ele).toBeVisible()
                await ele.click();
        }

        //input menubar first color
        async inputSecondMenuBarRgbFirstFieldColor() {
                const ele = this.page.locator("(//input[@inputmode='numeric'])[1]")
                expect(ele).toBeVisible()
                await ele.fill('40');
        }

        //input menubar second field color
        async inputSecondMenuBarRgbSecondFieldColor() {
                const ele = this.page.locator("(//input[@inputmode='numeric'])[2]")
                expect(ele).toBeVisible()
                await ele.fill('167');
        }

        //input menubar second field color
        async inputSecondMenuBarRgbThirdFieldColor() {
                const ele = this.page.locator("(//input[@inputmode='numeric'])[3]")
                expect(ele).toBeVisible()
                await ele.fill('164');
        }

        //input menubar second field color
        async inputSecondMenuBarColorFieldOpacity() {
                const ele = this.page.locator("(//input[@inputmode='numeric'])[4]")
                expect(ele).toBeVisible()
                await ele.fill('100');
        }

        //input menubar second field color
        async inputSecondMenuBarSolidFieldColor() {
                const ele = this.page.locator("//div[@class='MuiBox-root css-zfy2p9']/following-sibling::input[1]")
                expect(ele).toBeVisible()
                await ele.fill('2aA8D9');
        }
        //Background color modal
        // async backGroundcolor() {
        //         const ele = this.page.locator("//div[@class='MuiBox-root css-1pqer0i']")
        //         expect(ele).toBeVisible()
        //         await ele.click()
        // }
        // //Menu bar background color deletion
        // async menubarBackgroundcolorDeletation() {


        //         const ele = this.page.locator("//div[@class='MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-vubbuv']")
        //         expect(ele).toBeVisible()
        //         await ele.click()
        //}

        //input menubar second field color
        async clickColorPickerWindowSaveBtn() {
                const ele = this.page.locator("//button[text()='Save']")
                expect(ele).toBeVisible()
                await ele.click()
        }

        //Check Alignment Text
        async checkAlignmentText() {
                const ele = this.page.locator("//h4[text()='Alignment']")
                expect(ele).toContainText('Alignment')

        }

        //click top Alignment button
        async clickTopAlignmentBtn() {
                const ele = this.page.locator("//h5[text()='Top']")
                expect(ele).toBeVisible()
                await ele.click()

        }

        //click Bottom Alignment button
        async clickBottomAlignmentBtn() {
                const ele = this.page.locator("//h5[text()='Bottom']")
                expect(ele).toBeVisible()
                await ele.click()

        }

        //click 3 line options Alignment button
        async click3lineOptionAlignmentBtn() {
                const ele = this.page.locator("//h5[text()='3 Line Option']")
                expect(ele).toBeVisible()
                await ele.click()

        }

        //check all icon text 
        async checkAllIconText() {
                const ele = this.page.locator("//h4[text()='Show All Icons']")
                expect(ele).toContainText('Show All Icons')

        }

   //check all icon text 
   async disableShowAllIconBtn() {

        // const showalliconcheckbox = this.page.locator("//input[@type='checkbox'])[1]")
        // expect(showalliconcheckbox).not.toBeEnabled()
        // await showalliconcheckbox.click()

             
        const ele = await this.page.locator("(//input[@type='checkbox'])[1]").isChecked()
        if ((ele == true)) {
             // console.log("enabled Home Icon Check Box")
             await this.page
                     .locator("(//input[@type='checkbox'])[1]")
                             .click({force:true})
        }       

        // if (await this.page.isHidden("(//div[@class='MuiBox-root css-74zz35'])[1]")) {
        //         await this.page.click("(//input[@type='checkbox'])[1]");
        // }


}

//enabled home button
async disableHomeIconCheckBox() {

                     
                const ele = await this.page.locator("(//input[@type='checkbox'])[2]").isChecked()
                   if ((ele == true)) {
                        // console.log("enabled Home Icon Check Box")
                        await this.page
                                .locator("(//input[@type='checkbox'])[2]")
                                        .click({force:true})
                   }        
           
         

        // if (await this.page.isDisabled("//input[@id='P-19239526022']")) {
        //         await this.page.click("(//input[@type='checkbox'])[2]", { force: true });
        // }


}

//enabled prize button 
async disablePrizeIconCheckBox() {

        const ele = await this.page.locator("(//input[@type='checkbox'])[3]").isChecked()
                   if ((ele == true)) {
                        // console.log("enabled Prize Icon CheckBox")
                        await this.page
                                .locator("(//input[@type='checkbox'])[3]")
                                        .click({force:true})
                   }  

        // if (await this.page.isDisabled("//input[@id='P-18230406352']")) {
        //         await this.page.click("(//input[@type='checkbox'])[3]", { force: true });
        // }


}

//enabled how to play icon
async disableHowToPlayIconCheckBox() {

        const ele = await this.page.locator("(//input[@type='checkbox'])[4]").isChecked()
                   if ((ele == true)) {
                        // console.log("enabled Prize Icon CheckBox")
                        await this.page
                                .locator("(//input[@type='checkbox'])[4]")
                                        .click({force:true})
                   }  

        // if (await this.page.isDisabled("//input[@id='P-17221286682']")) {
        //         await this.page.click("(//input[@type='checkbox'])[4]", { force: true });
        // }


}

//enabled rules icon checkbox
async disableRulesIconCheckBox() {
        const ele = await this.page.locator("(//input[@type='checkbox'])[5]").isChecked()
                   if ((ele == true)) {
                        // console.log("enabled rules Icon CheckBox")
                        await this.page
                                .locator("(//input[@type='checkbox'])[5]")
                                        .click({force:true})
                   }  

        // if (await this.page.isDisabled("//input[@id='P-16212167012']")) {
        //         await this.page.click("(//input[@type='checkbox'])[5]", { force: true });
        // }


}

//enabled user profile icon checkbox
async disableUserProfileIconCheckBox() {

        const ele = await this.page.locator("(//input[@type='checkbox'])[6]").isChecked()
        if ((ele == true)) {
        //      console.log("enabled User Profile Icon CheckBox")
             await this.page
                     .locator("(//input[@type='checkbox'])[6]")
                             .click({force:true})
        }  

        // if (await this.page.isDisabled("//input[@id='P-15203047342']")) {
        //         await this.page.click("(//input[@type='checkbox'])[6]", { force: true });
        // }


}







        //check all icon text 
        async enableShowAllIconBtn() {

                // const showalliconcheckbox = this.page.locator("//input[@type='checkbox'])[1]")
                // expect(showalliconcheckbox).not.toBeEnabled()
                // await showalliconcheckbox.click()

                     
                const ele = await this.page.locator("(//input[@type='checkbox'])[1]").isChecked()
                if ((ele == false)) {
                     // console.log("enabled Home Icon Check Box")
                     await this.page
                             .locator("(//input[@type='checkbox'])[1]")
                                     .check({force:true})
                }       

                // if (await this.page.isHidden("(//div[@class='MuiBox-root css-74zz35'])[1]")) {
                //         await this.page.click("(//input[@type='checkbox'])[1]");
                // }


        }

        //enabled home button
        async enabledHomeIconCheckBox() {

                             
                        const ele = await this.page.locator("(//input[@type='checkbox'])[2]").isChecked()
                           if ((ele == false)) {
                                // console.log("enabled Home Icon Check Box")
                                await this.page
                                        .locator("(//input[@type='checkbox'])[2]")
                                                .check({force:true})
                           }        
                   
                 

                // if (await this.page.isDisabled("//input[@id='P-19239526022']")) {
                //         await this.page.click("(//input[@type='checkbox'])[2]", { force: true });
                // }


        }

        //enabled prize button 
        async enabledPrizeIconCheckBox() {

                const ele = await this.page.locator("(//input[@type='checkbox'])[3]").isChecked()
                           if ((ele == false)) {
                                // console.log("enabled Prize Icon CheckBox")
                                await this.page
                                        .locator("(//input[@type='checkbox'])[3]")
                                                .check({force:true})
                           }  

                // if (await this.page.isDisabled("//input[@id='P-18230406352']")) {
                //         await this.page.click("(//input[@type='checkbox'])[3]", { force: true });
                // }


        }

        //enabled how to play icon
        async enabledHowToPlayIconCheckBox() {

                const ele = await this.page.locator("(//input[@type='checkbox'])[4]").isChecked()
                           if ((ele == false)) {
                                // console.log("enabled Prize Icon CheckBox")
                                await this.page
                                        .locator("(//input[@type='checkbox'])[4]")
                                                .check({force:true})
                           }  

                // if (await this.page.isDisabled("//input[@id='P-17221286682']")) {
                //         await this.page.click("(//input[@type='checkbox'])[4]", { force: true });
                // }


        }

        //enabled rules icon checkbox
        async enabledRulesIconCheckBox() {
                const ele = await this.page.locator("(//input[@type='checkbox'])[5]").isChecked()
                           if ((ele == false)) {
                                // console.log("enabled rules Icon CheckBox")
                                await this.page
                                        .locator("(//input[@type='checkbox'])[5]")
                                                .check({force:true})
                           }  

                // if (await this.page.isDisabled("//input[@id='P-16212167012']")) {
                //         await this.page.click("(//input[@type='checkbox'])[5]", { force: true });
                // }


        }

        //enabled user profile icon checkbox
        async enabledUserProfileIconCheckBox() {

                const ele = await this.page.locator("(//input[@type='checkbox'])[6]").isChecked()
                if ((ele == false)) {
                //      console.log("enabled User Profile Icon CheckBox")
                     await this.page
                             .locator("(//input[@type='checkbox'])[6]")
                                     .check({force:true})
                }  

                // if (await this.page.isDisabled("//input[@id='P-15203047342']")) {
                //         await this.page.click("(//input[@type='checkbox'])[6]", { force: true });
                // }


        }










        //delete home icon
        async deleteHomeIcon() {

                if (await this.page.isVisible("(//div[@class='MuiBox-root css-1puu0mq'])[1]")) {
                        await this.page.click("(//div[@class='MuiBox-root css-1puu0mq'])[1]", { force: true });
                }


        }

        //delete prize icon
        async deletePrizeIcon() {

                if (await this.page.isVisible("(//div[@class='MuiBox-root css-1puu0mq'])[2]")) {
                        await this.page.click("(//div[@class='MuiBox-root css-1puu0mq'])[2]", { force: true });
                }


        }

        //delete prize icon
        async deleteHowToPlayIcon() {

                if (await this.page.isVisible("(//div[@class='MuiBox-root css-1puu0mq'])[3]")) {
                        await this.page.click("(//div[@class='MuiBox-root css-1puu0mq'])[3]", { force: true });
                }


        }

        //delete prize icon
        async deleteRulesIcon() {

                if (await this.page.isVisible("(//div[@class='MuiBox-root css-1puu0mq'])[4]")) {
                        await this.page.click("(//div[@class='MuiBox-root css-1puu0mq'])[4]", { force: true });
                }


        }

        //delete Profile icon
        async deleteProfileIcon() {

                if (await this.page.isVisible("(//div[@class='MuiBox-root css-1puu0mq'])[5]")) {
                        await this.page.click("(//div[@class='MuiBox-root css-1puu0mq'])[5]", { force: true });
                }


        }

        //Start function from here
        async uplodHomeIcon() {
                const homeicon = "testData/icons/home.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([homeicon])
                })
                await this.page.click("(//div[@class='MuiBox-root css-74zz35'])[1]")
        }

        //Start function from here
        async uplodPrizeIcon() {
                const prizeicon = "testData/icons/prize.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([prizeicon])
                })
                await this.page.click("(//div[@class='MuiBox-root css-74zz35'])[2]")
        }

                //Start function from here
        async uplodHowToPlayIcon() {
                const howtoplayicon = "testData/icons/howtoplay.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([howtoplayicon])
                })
                await this.page.click("(//div[@class='MuiBox-root css-74zz35'])[3]")
        }
                //Start function from here
        async uplodRulesIcon() {
                const rulesicon = "testData/icons/rules.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([rulesicon])
                })
                await this.page.click("(//div[@class='MuiBox-root css-74zz35'])[4]")
        }

                //Start function from here
        async uplodProfileIcon() {
                const profileicon = "testData/icons/profile.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([profileicon])
                })
                await this.page.click("(//div[@class='MuiBox-root css-74zz35'])[5]")
        }

        async functionForCroper() {

        const chooseBtn = await this.page.locator("//button[text()='Choose File']")
        expect.soft(chooseBtn).toContainText("Choose File")
        await chooseBtn.click({force:true})

        await this.page.locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[2]").click({force:true})
        await this.page.waitForTimeout(2000)
        await this.page.locator("//li[text()='None']").click()

        const cropperSaveBtn = await this.page.locator("//button[text()='Save']")
        expect(cropperSaveBtn).toContainText("Save")
        await cropperSaveBtn.click()

}
//Solid dropdown selection from the background color
async selectSolidcolor () {
        const ele = this.page.locator("//div[contains(@class,'MuiSelect-select MuiSelect-standard')]")
        expect (ele).toBeVisible()
        await ele.click()

        
}
//select horizontalcolor
async selecthorizontalColor() {
        const ele = this.page.locator("//li[text()='Horizontal']")
        expect (ele).toBeVisible()
        await ele.click()
}

//select verticalcolor
async seletverticalColor() {
        const ele = this.page.locator("//li[text()='Vertical']")
        expect (ele).toBeVisible()
        await ele.click()
}

//Add new background color swatches
async selectnewSwatch() {
        const ele = this.page.locator("//button[@aria-label='Add Color']")
        expect(ele).toBeVisible()
        await ele.click()
 }
 //Delete the added swatches
 async deleteSwatches() {
        const ele = this.page.locator("(//button[@aria-label='delete'])[2]")
        expect(ele).toBeVisible()
        await ele.click()
 }
 //Diagonal color selection
 async selectdiagonalColor() {
        const ele = this.page.locator("//li[@data-value='diagonal']")
        expect(ele).toBeVisible()
        await ele.click()
 }
 // Select Radial color
 async selectradialColor() {
        const ele = this.page.locator("//li[@data-value='radial']")
        expect(ele).toBeVisible()
        await ele.click()
 }

}
