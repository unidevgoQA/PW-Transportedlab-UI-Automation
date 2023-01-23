import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
import BaseFunctions from "@base-function/baseFunctions";

export default class menuPage {
        private base: BaseFunctions;
        constructor(private page: Page
        ) {
                this.base = new BaseFunctions(page);
        }

        private menuPageElements = {
                menuPage: "//p[text()='Menu']",
                uploadFont: "//div[@class='MuiBox-root css-v2612']",
                fontUplodInputFieldText: "//p[text()='Upload Font']",
                uploadFontTitle: "//p[text()='Midnight']",
                fontDeleteBtn: "//p[text()='Aa']/following-sibling::button",
                backgroundColorInputField: "//p[text()='Background']/following-sibling::button",
                textColorInputField: "//p[text()='Text Color']/following-sibling::button",
                activeBackgroundColorInputField: "//p[text()='Active Background']/following-sibling::button",
                activeTextColorInputField: "//p[text()='Active Text Color']/following-sibling::button",
                colorCodeInputField: "//div[@class='MuiBox-root css-zfy2p9']/following-sibling::input[1]",
                topAlignmentBtn: "//h5[text()='Top']",
                topAlignmentBtnSelected: "//button[@selected='true']",
                bottomAlignmentBtn: "//h5[text()='Bottom']",
                threeLineAlignmentBtn: "//h5[text()='3 Line Option']",
                threeLineInMobileScreen: "//div[@class='MuiBox-root css-1ox9e35']",
                hideAlignmentBtn: "//h5[text()='Hide']",
                homeMenuBarIcon: "(//div[@class='MuiBox-root css-74zz35'])[1]",
                prizeMenuBarIcon: "(//div[@class='MuiBox-root css-74zz35'])[2]",
                howtoplayMenuBarIcon: "(//div[@class='MuiBox-root css-74zz35'])[1]",
                rulesMenuBarIcon: "(//div[@class='MuiBox-root css-74zz35'])[1]",
                userProfileMenuBarIcon: "(//div[@class='MuiBox-root css-74zz35'])[1]",
                

        
                
                



        }









        // export default class menuPage {

        //         private page: Page;
        //         static login: any;
        //         static buffer: void;

        //         constructor(page: Page) {
        //                 this.page = page;
        //         }





        //Menu Page Button Element
        async clickMenuPage() {

                const ele = this.page.locator(this.menuPageElements.menuPage)
                if (ele != null)
                        await ele.click({ force: true });
                else throw new Error("Menu Page Element Is Not Found")

                await this.page.waitForLoadState("networkidle")
        }

        async deleteUploadedFont() {

                const ele = await this.page.locator(this.menuPageElements.uploadFontTitle).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.fontDeleteBtn)
                }



        }

        //Upload Fonts Header Text Elemant
        async clickToUploadFont() {
                const ele = await this.page.locator(this.menuPageElements.uploadFont).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.uploadFont, { force: true })
                }
                else throw new Error("Main Menu Font Upload Element Is Not Found")

                await this.page.waitForLoadState("networkidle")
        }

        async verifyUploadFontText() {
                await expect(this.page.locator(this.menuPageElements.fontUplodInputFieldText))
                        .toBeVisible();

        }


        //Upload Fonts Header Text Elemant
        async verifyFontUploadedSuccessfully() {
                await this.page.waitForSelector(this.menuPageElements.uploadFontTitle)
                const ele = this.page.locator(this.menuPageElements.uploadFontTitle)
                if (ele != null) {
                        await ele.click({ force: true });
                }
                else throw new Error("Font Does Not Upload Successfully")

        }

        async clickBackgroundColorInputField() {
                const ele = await this.page.locator(this.menuPageElements.backgroundColorInputField).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.backgroundColorInputField, { force: true })
                }
                else throw new Error("Main Menu Background Color Input Field Element Is Not Found")

                await this.page.waitForLoadState("networkidle")
        }

        async inputBackgroundColor() {
                const ele = await this.page.locator(this.menuPageElements.colorCodeInputField).isVisible()
                if ((ele == true)) {
                        await this.page.fill(this.menuPageElements.colorCodeInputField, "5FBCD2FF")
                }
                else throw new Error("Main Menu Background Color Code Input Field Element Is Not Found")
                await this.page.waitForLoadState("networkidle")
        }

        async inputTextColor() {
                const ele = await this.page.locator(this.menuPageElements.colorCodeInputField).isVisible()
                if ((ele == true)) {
                        await this.page.fill(this.menuPageElements.colorCodeInputField, "60254AFF")
                }
                else throw new Error("Main Menu Text Color Code Input Field Element Is Not Found")
                await this.page.waitForLoadState("networkidle")
        }

        async inputActiveBackgroundColor() {
                const ele = await this.page.locator(this.menuPageElements.colorCodeInputField).isVisible()
                if ((ele == true)) {
                        await this.page.fill(this.menuPageElements.colorCodeInputField, "70A4CCFF")
                }
                else throw new Error("Main Menu Active Background Color Code Input Field Element Is Not Found")
                await this.page.waitForLoadState("networkidle")
        }
        
        async inputActiveTextColor() {
                const ele = await this.page.locator(this.menuPageElements.colorCodeInputField).isVisible()
                if ((ele == true)) {
                        await this.page.fill(this.menuPageElements.colorCodeInputField, "021019FF")
                }
                else throw new Error("Main Menu Active Text Color Code Input Field Element Is Not Found")
                await this.page.waitForLoadState("networkidle")
        }

        async clickTextColorInputField() {
                const ele = await this.page.locator(this.menuPageElements.textColorInputField).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.textColorInputField, { force: true })
                }
                else throw new Error("Main Menu text Color Input Field Element Is Not Found")

                await this.page.waitForLoadState("networkidle")
        }

        async clickActiveBackgroundColorInputField() {
                const ele = await this.page.locator(this.menuPageElements.activeBackgroundColorInputField).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.activeBackgroundColorInputField, { force: true })
                }
                else throw new Error("Main Menu Active Background Color Input Field Element Is Not Found")

                await this.page.waitForLoadState("networkidle")
        }
        async clickActiveTextColorInputField() {
                const ele = await this.page.locator(this.menuPageElements.activeTextColorInputField).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.activeTextColorInputField, { force: true })
                }
                else throw new Error("Main Menu Active Text Color Input Field Element Is Not Found")

                await this.page.waitForLoadState("networkidle")
        }

        async selectTopAlignmentMenuBar() {
                const ele = await this.page.locator(this.menuPageElements.topAlignmentBtn).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.topAlignmentBtn, { force: true })
                }
                else throw new Error("Main Bar Top Alignment Button Element Is Visible")

                await this.page.waitForLoadState("networkidle")
        }

        async selectBottomAlignmentMenuBar() {
                const ele = await this.page.locator(this.menuPageElements.bottomAlignmentBtn).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.bottomAlignmentBtn, { force: true })
                }
                else throw new Error("Main Bar Bottom Alignment Button Element Is Visible")

                await this.page.waitForLoadState("networkidle")
        }

        async selectThreeLineAlignmentMenuBar() {
                const ele = await this.page.locator(this.menuPageElements.threeLineAlignmentBtn).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.threeLineAlignmentBtn, { force: true })
                }
                else throw new Error("Main Bar Three Line Alignment Button Element Is Visible")

                await this.page.waitForLoadState("networkidle")
        }

        async selectHideAlignmentMenuBar() {
                const ele = await this.page.locator(this.menuPageElements.hideAlignmentBtn).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.hideAlignmentBtn, { force: true })
                }
                else throw new Error("Main Bar Hide Alignment Button Element Is Visible")

                await this.page.waitForLoadState("networkidle")
        }
        
        async uploadMenuBarHomeIcon() {
                const ele = await this.page.locator(this.menuPageElements.homeMenuBarIcon).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.homeMenuBarIcon, { force: true })
                }
                else throw new Error("Main Bar Home Icon Upload Input Field Element Is Visible")

                await this.page.waitForLoadState("networkidle")
        }

        async uploadMenuBarPrizeIcon() {
                const ele = await this.page.locator(this.menuPageElements.prizeMenuBarIcon).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.prizeMenuBarIcon, { force: true })
                }
                else throw new Error("Main Bar Prize Icon Upload Input Field Element Is Visible")

                await this.page.waitForLoadState("networkidle")
        }

        async uploadMenuBarHowToPlayIcon() {
                const ele = await this.page.locator(this.menuPageElements.howtoplayMenuBarIcon).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.howtoplayMenuBarIcon, { force: true })
                }
                else throw new Error("Main Bar How To Play Icon Upload Input Field Element Is Visible")

                await this.page.waitForLoadState("networkidle")
        }

        async uploadMenuBarRulesIcon() {
                const ele = await this.page.locator(this.menuPageElements.rulesMenuBarIcon).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.rulesMenuBarIcon, { force: true })
                }
                else throw new Error("Main Bar Rules Upload Input Field Element Is Visible")

                await this.page.waitForLoadState("networkidle")
        }

        async uploadMenuBarUserProfileIcon() {
                const ele = await this.page.locator(this.menuPageElements.userProfileMenuBarIcon).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.menuPageElements.userProfileMenuBarIcon, { force: true })
                }
                else throw new Error("Main Bar User Profile Upload Input Field Element Is Visible")

                await this.page.waitForLoadState("networkidle")
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

        //input menubar second field color
        async clickColorPickerWindowSaveBtn() {
                const ele = this.page.locator("//button[text()='Save']")
                expect(ele).toBeVisible()
                await ele.click()
                await this.page.waitForTimeout(3000)
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
                                .click({ force: true })
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
                                .click({ force: true })
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
                                .click({ force: true })
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
                                .click({ force: true })
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
                                .click({ force: true })
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
                                .click({ force: true })
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
                                .check({ force: true })
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
                                .check({ force: true })
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
                                .check({ force: true })
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
                                .check({ force: true })
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
                                .check({ force: true })
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
                                .check({ force: true })
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
                await chooseBtn.click({ force: true })

                await this.page.locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[2]").click({ force: true })
                await this.page.waitForTimeout(2000)
                await this.page.locator("//li[text()='None']").click()

                const cropperSaveBtn = await this.page.locator("//button[text()='Save']")
                expect(cropperSaveBtn).toContainText("Save")
                await cropperSaveBtn.click()

        }
}

