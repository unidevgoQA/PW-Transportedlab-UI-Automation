import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class tugOfWarPage {
        // [x: string]: any;

        private page: Page;
        static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }

        private gameSettingPageElements = {
                uploadFont:"(//div[@class='MuiBox-root css-v2612'])[1]",
                PrimaricolorBtn: "(//div[@class='MuiBox-root css-1pqer0i'])[1]",
                addcolorSwatchesBTn:"//button[@aria-label='Add Color']", 
                inputRGB: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]",
                inputRGBsecond: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]",
                inputRGBThird: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]",
                RGBopacity: "//input[@id='P0-3']",
                ColorHex: "//div[@class='MuiBox-root css-zfy2p9']/following-sibling::input[1]",
                dropdown: "//div[contains(@class,'MuiSelect-select MuiSelect-standard')]",
                solidcolor: "//li[@data-value='solid']",
                Horizontal:"//li[@data-value='horizontal']",
                Vertical: "//li[@data-value='vertical']",
                diagonal: "//li[@data-value='diagonal']",
                radial: "//li[@data-value='radial']",
                colorPickerSavebtn: "//button[text()='Save']",
                imageUploadbtn: "(//div[@class='MuiBox-root css-v2612'])[2]",
                ImageChoosefilebutton: "//button[text()='Choose File']",
                mobileUploadBackground: "(//div[@class='MuiBox-root css-v2612'])[3]",
                mobileBackgroundChoosefile: "//button[text()='Choose File']",
                sendBymessagefield: "(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]",
                secondaryColorPickerbtn: "//button[@background='#FF3B30']",
                AddswatchesSecondary: "(//p[text()='Swatches']/following-sibling::button)[1]",
                IMageUploadSavebtn: "//button[text()='Save']",
                ChooseImageSizeDropdown:"(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[1]",
                None: "(//li[contains(@class,'MuiButtonBase-root MuiMenuItem-root')])[1]",
                iphone13ProMax:"//li[@data-value='iPhone 13 Pro Max']",
                iphone12: "(//li[contains(@class,'MuiButtonBase-root MuiMenuItem-root')])[3]",
                Samsuungs20:"//li[@data-value='Samsung S20']",
                Ratio1:"(//input[@type='number'])[1]",
                Ratio2:"(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]",
                Chooseratiodropdown:"(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[2]",
                Ratio11:"(//li[contains(@class,'MuiButtonBase-root MuiMenuItem-root')])[1]",
                Ratio43:"(//li[contains(@class,'MuiButtonBase-root MuiMenuItem-root')])[2]",
                Ratio169:"(//li[contains(@class,'MuiButtonBase-root MuiMenuItem-root')])[3]",
                Ratio1610:"//li[@data-value='1.6']",
                IMageuploadcancel:"//button[text()='Cancel']",
                ImageuploadCross:"//button[@aria-label='Close']",
                verifyUploadedIMg:"(//div[@backgroundsize='contain'])[2]",
                textColorBtn:"(//div[@black='true'])[2]",
                InvalidFiletypeAlert:"//div[@class='MuiDialogContent-root css-3n2qrj']",
                InavlidModalOK:"//button[text()='Ok']",
                CancelImgUpModal:"//button[@aria-label='Close']",
                ImageDelete:"(//button[@title='Delete'])[1]",
                MobileBackgroundDelete:"//div[@class='MuiBox-root css-1tejaop']",
                ClearAllBTN: "(//button[contains(@class,'MuiButtonBase-root MuiButton-root')])[1]",
                StagesBTN:"(//p[contains(@class,'MuiTypography-root MuiTypography-body1')])[3]",
                CustomMobileWaitingMessage:"(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]",
                SelectVideo:"(//input[@class='PrivateSwitchBase-input css-1m9pwf3'])[2]",
                VideoUploadBTN:"(//div[@class='MuiBox-root css-v2612'])[1]",
                SelectImageUploadBTN:"(//input[@class='PrivateSwitchBase-input css-1m9pwf3'])[1]",
                ImageuploadBTN:"(//div[@class='MuiBox-root css-v2612'])[1]",
                GameTitleImageUploadBTN:"(//div[@class='MuiBox-root css-v2612'])[1]",
                ImageDeleteBTN:"(//button[@title='Delete']//div)[1]",
                TeamLogoUploadBTN:"(//div[@class='MuiBox-root css-v2612'])[1]",
                SponsorLOgoUploadBTN:"//div[@class='MuiBox-root css-v2612']",
                PreviewCheckbox:"(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]",
                JumptonextCheckbox:"(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[1]",
                Gametitledelete:"//button[@title='Delete']//div[1]",


        }



        //=======================================================
        //▶▶Start Title Stage Section Element       

        //click Tug Of War Page
        async clickTugOfWarPage() {
                const locator = this.page.locator('text=Tug of War')
                expect(locator).toContainText('Tug of War')
                await locator.click({ button: "left", delay: 1000 })                
                await this.page.waitForLoadState("networkidle");
        }

        async clickTitleStageTab() {
                //      const ele = await this.page.frameLocator('iframe').w('text=Title Stag')
                //         await this.page.waitForSelector(ele)        

                await this.page.frameLocator('iframe')
                        .locator('text=Title Stage')
                        .click({ force: true })

        }

        async verifyEnableStageText() {
                //      const ele = await this.page.frameLocator('iframe').locator('text=Enable Stage to be skip and jump to next one')
                await this.page.waitForSelector('text=Enable Stage to be skip and jump to next one')
                // expect(ele).toContainText("Enable Stage to be skip and jump to next one")          


        }

        async enableStage() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]")

                await ele.check()
                // if ((ele == false)) {
                //         // console.log("Enable Stage to be skip and jump to next one")
                //         await this.page.frameLocator('iframe')
                //                 .locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[1]")
                //                 .click()
                // }


        }
        async clickImageRadioBtn() {
                const ele = await this.page.frameLocator('iframe').locator("input[value='image']").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("input[value='image']")
                                .click()
                }


        }
        async deletedUploadedTitleImageBG() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]")
                                .click()
                }


        }

        async uploadTitleBackgroundImage() {


                let filePath0 = "testData/images/CountDownStageBanner.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.frameLocator('iframe').locator('text=Title BackgroundImageVideo >> div').nth(3).click();

        }

        async clickVideoUploadCheckbox() {

                let ele = await this.page.frameLocator('iframe').locator("//input[@value='video']").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("//input[@value='video']")
                                .check()
                }
        }



        async uploadTitleBackgroundVideo() {


                let filePath0 = "testData/videos/video.mp4"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[1]").click();

        }

        async deleteUploadedGameTitleImageBG() {
                let ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]")
                                .click()
                }


        }


        async uploadGameTitleImage() {


                let filePath0 = "testData/images/SelectionStageBanner.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[2]").first().click();


        }
        async deleteUploadedTeamLogo() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("(//div[@class='MuiBox-root css-1v2p79w'])[1]")
                                .click()
                }


        }

        async uploadTeamLogo() {


                let filePath0 = "testData/logos/gameTeamLogo.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[3]").first().click();


        }

        async deleteUploadedSponsorLogo() {
                let ele = await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1v2p79w']").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("//div[@class='MuiBox-root css-1v2p79w']")
                                .click()
                }


        }

        async clickSponsorLogoUploadIcon() {
                let ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[4]")
                await ele.click()

        }

        async clickTeamLogoUploadIcon() {
                let ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[3]")
                await ele.click()

        }

        async clickGameTitleUploadIcon() {
                let ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[2]")
                await ele.click()

        }

        async clickTitleBackgroundUploadIcon() {
                let ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[1]")
                await ele.click()

        }



        async uploadSponsorLogo() {


                let filePath0 = "testData/logos/gameLogo.jpg"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[4]").first().click();


        }

        async enableCustomSelectionMassage() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]")
                await ele.click()
                // if ((ele == false)) {
                //         // console.log("Enable Stage to be skip and jump to next one")
                //         await this.page.frameLocator('iframe')
                //                 .locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]")
                //                 .click()
                // }


        }

        async inputCustomSelectionMassage() {
                const ele = await this.page.frameLocator('iframe').locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]")
                                .fill("In publishing and graphic design, Lorem ipsum is a placeholder")
                }


        }


        // //🔚 Closed Title Stage Section Element 
        // //=======================================================
        // //▶▶Start Selection Stage Section Element     



        // async clickSelectionStagePage() {
        //         const locator = this.page.frameLocator('iframe').locator("//p[text()='Selection Stage']")
        //         await locator.click()
        //         // console.log("Successfully Click To Selection Stage Page ")
        // }

        // async clickSelectionImageText() {
        //         const locator = this.page.frameLocator('iframe').locator('text= Selection Images')
        //         expect(locator).toContainText('Selection Images')

        // }

        // async deleteUploadedSelactionBG() {
        //         let ele = await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1v2p79w']").isVisible()
        //         if ((ele == true)) {
        //                 // console.log("Enable Stage to be skip and jump to next one")
        //                 await this.page.frameLocator('iframe')
        //                         .locator("//div[@class='MuiBox-root css-1v2p79w']")
        //                         .click()
        //         }


        // }

        // async uploadSelactionBG() {


        //         await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[1]").click();


        // }
        // async clickSecondTeamLogoUploadIcon() {


        //         await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-v2612']").click();


        // }

        // async inputSelectionStageTeamName() {
        //         await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]").fill("Jone Doe")


        // }

        
        // async inputSelectionStageSecondTeamName() {
        //         await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]").fill("Jone")


        // }



        

        // async inputNumberOfTeams() {
        //         const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]")
        //         await ele.fill('3')

        // }

        
        // async clickFirstTeamLogoUploadIcon() {
        //         const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[1]")
        //         await ele.click()

        // }
        // async enableAdjustableSelection() {
        //         const ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]")
        //         await ele.click({force:true})

        // }

        // async inputSelectionTimer() {
        //         const ele = await this.page.frameLocator('iframe').locator("//input[@max='59']")
        //         await ele.fill('20')

        // }

        // async enableAllowSelectionChange() {
        //         const ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[2]")
        //         await ele.click()

        // }


        // async clickAllowSelectionChangeCheckbox() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]").isVisible()
        //         if ((ele == true)) {
        //                 // console.log("click Allow Selection Change Check box")
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//input[@type='checkbox'])[1]")
        //                         .click()
        //         }


        // }
        // async clickCustomSelectionMassageCheckBox() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[3]").isChecked()
        //         if ((ele == false)) {
        //                 // console.log("click Custom Selection Massage CheckBox")
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//input[@type='checkbox'])[3]")
        //                         .click()
        //         }


        // }
        // async inputCustomSelectionMassgeText() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").isVisible()
        //         if ((ele == true)) {
        //                 // console.log("input Custom Selection Massge Text")
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]")
        //                         .fill("Demo Text Here...")
        //         }


        // }

        // async clickCustomTeamSelectionMassageCheckBox() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[4]").isChecked()
        //         if ((ele == false)) {
        //                 // console.log("click Custom Team Selection Massage Check Box")
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//input[@type='checkbox'])[4]")
        //                         .click()
        //         }


        // }

        // async inputCustomeTeamSectionMassage() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").isVisible()
        //         if ((ele == true)) {
        //                 // console.log("click Custom Team Selection Massage Check Box")
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]")
        //                         .fill("lorim upsum dorlo")
        //         }


        // }

        // async clickTeamNameBoxColorInput() {
        //         const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-1pqer0i'])[1]")
        //         await ele.click()

        // }

        // async inputTeamNameBoxColorRGBFirst() {
        //         const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[3]')
        //         await ele.fill("54")

        // }

        // async inputTeamNameBoxColorRGBSecond() {
        //         const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[4]')
        //         await ele.fill("115")

        // }
        // async inputTeamNameBoxColorRGBThird() {
        //         const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[5]')
        //         await ele.fill("224")

        // }

        // async inputTeamNameBoxColorOpacity() {
        //         const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[6]')
        //         await ele.fill("224")

        // }

        // async inputTeamNameBoxColorHEXColor() {
        //         const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[7]')
        //         await ele.fill("224")

        // }

        // async clickSaveBtn() {
        //         const ele = await this.page.frameLocator('iframe').locator("//button[text()='Save']")
        //         await ele.click()

        // }


        // async clickTeamSelectedMassageBoxColorInput() {
        //         const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-1pqer0i'])[2]")
        //         await ele.click()

        // }

        // async inputTeamSelectedMassageBoxColorRGBFirst() {
        //         const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[3]')
        //         await ele.fill("154")

        // }

        // async inputTeamSelectedMassageBoxColorRGBSecond() {
        //         const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[4]')
        //         await ele.fill("115")

        // }
        // async inputTeamSelectedMassageBoxColorRGBThird() {
        //         const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[5]')
        //         await ele.fill("224")

        // }

        // async inputTeamSelectedMassageBoxColorOpacity() {
        //         const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[6]')
        //         await ele.fill("224")

        // }

        // async inputTeamSelectedMassageBoxColorHEXColor() {
        //         const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[7]')
        //         await ele.fill("e100daff")

        // }


        // //🔚 Closed Selection Stage Section Element 
        // //=======================================================
        // //▶▶Start Countdown Stage Section Element    


        // async clickCountdownStagePage() {
        //         const locator = this.page.frameLocator('iframe').locator("//p[text()='Countdown Stage']")
        //         await locator.click()
        //         // console.log("Successfully Click To Countdown Stage Page ")
        // }

        // async enableCountDownStageSkipAndJump() {
        //         const ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]").isVisible()
        //         if ((ele == true)) {
        //                 // console.log("Enable Stage to be skip and jump to next one")
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//input[@type='checkbox'])[1]")
        //                         .click({ force: true })
        //         }


        // }

        // async clickCountdownImageText() {
        //         const locator = this.page.frameLocator('iframe').locator('text= Countdown Images')
        //         expect(locator).toContainText('Countdown Images')

        // }

        // async deleteUploadedCountdownBG() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//button[@type='button']//div)[2]").isVisible()
        //         if ((ele == true)) {
        //                 // console.log("delete Uploaded Countdown BG")
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//button[@type='button']//div)[2]")
        //                         .click()
        //         }


        // }

        // async uploadCountdownBG() {



        //         await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-v2612']").click();


        // }




        // async inputAdjustableCountdownLengthTimer() {
        //         const ele = await this.page.frameLocator('iframe').locator("//input[@type='number']")
        //         await ele.fill('22')

        // }


        // async clickCustomCountdownMessageCheckbox() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[2]").isVisible()
        //         if ((ele == true)) {
        //                 // console.log("click Custom Countdown Message Checkbox")
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//input[@type='checkbox'])[2]")
        //                         .click()
        //         }


        // }

        // async inputCustomCountDownMassage() {
        //         let ele = await this.page.frameLocator('iframe').locator("//textarea[@placeholder='Type message']").isVisible()
        //         if ((ele == true)) {
        //                 await this.page.frameLocator('iframe')
        //                         .locator("//textarea[@placeholder='Type message']")
        //                         .fill("In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate")
        //         }


        // }



        // //🔚 Closed Countdown Stage Section Element 
        // //=======================================================
        // //▶▶Start Gameplay Stage Section Element    


        // async clickGameplayStagePage() {
        //         const locator = this.page.frameLocator('iframe').locator("//p[text()='Gameplay Stage']")
        //         await locator.click()
        //         // console.log("Successfully Click To Gameplay Stage Page ")
        // }



        // async clickGameplayImageText() {
        //         const locator = this.page.frameLocator('iframe').locator('text= Gameplay Images')
        //         expect(locator).toContainText('Gameplay Images')

        // }

        // async deleteUploadedGameplayBG() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//button[@type='button']//div)[2]").isVisible()
        //         if ((ele == true)) {
        //                 // console.log("delete Uploaded Gameplay BG")
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//button[@type='button']//div)[2]")
        //                         .click()
        //         }


        // }

        // async uploadGameplayBG() {

        //         await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-v2612']").click();


        // }


        // async enableDisplayPowerMeter() {
        //         const ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[3]").isVisible()
        //         if ((ele == true)) {
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//input[@type='checkbox'])[3]")
        //                         .click({ force: true })
        //         }


        // }

        // async verifyPowerMethodsText() {
        //         const ele = await this.page.frameLocator('iframe').locator("//h6[text()='Power Methods']")
        //         expect(ele).toContainText("Power Methods")

        // }


        // async clickTapToPowerCheckbox() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//input[@type='radio'])[3]").isVisible()
        //         if ((ele == true)) {

        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//input[@type='radio'])[3]")
        //                         .click()
        //         }


        // }

        // async clickShoutToPowerCheckbox() {
        //         let ele = await this.page.frameLocator('iframe').locator("//input[@value='shout']").isVisible()
        //         if ((ele == true)) {

        //                 await this.page.frameLocator('iframe')
        //                         .locator("//input[@value='shout']")
        //                         .click()
        //         }


        // }

        // async clickShakeToPowerCheckbox() {
        //         let ele = await this.page.frameLocator('iframe').locator("//input[@value='shake']").isVisible()
        //         if ((ele == true)) {

        //                 await this.page.frameLocator('iframe')
        //                         .locator("//input[@value='shake']")
        //                         .click()
        //         }


        // }

        // async clickSwipeToPowerCheckbox() {
        //         let ele = await this.page.frameLocator('iframe').locator("//input[@value='swipe']").isVisible()
        //         if ((ele == true)) {

        //                 await this.page.frameLocator('iframe')
        //                         .locator("//input[@value='swipe']")
        //                         .click()
        //         }


        // }

        // async enableCustomPowerMessageCheckbox() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[4]").isVisible()
        //         if ((ele == true)) {

        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//input[@type='checkbox'])[4]")
        //                         .click()
        //         }


        // }

        // async inputCustomPowerMassage() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//textarea[@placeholder='Type message'])[3]").isVisible()
        //         if ((ele == true)) {
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//textarea[@placeholder='Type message'])[3]")
        //                         .fill("In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate")
        //         }


        // }


        // async enableMainboardMessageCheckbox() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]").isVisible()
        //         if ((ele == true)) {

        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//input[@type='checkbox'])[1]")
        //                         .click()
        //         }


        // }

        // async inputMainboardMassage() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").isVisible()
        //         if ((ele == true)) {
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]")
        //                         .fill("In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate")
        //         }


        // }
        // async enableMobileMessageCheckbox() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[2]").isVisible()
        //         if ((ele == true)) {

        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//input[@type='checkbox'])[2]")
        //                         .click()
        //         }


        // }

        // async inputMobileMassage() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").isVisible()
        //         if ((ele == true)) {
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]")
        //                         .fill("In publishing and graphic design, Lorem ipsum ")
        //         }


        // }
        // //🔚 Closed Gameplay Stage Section Element 
        // //=======================================================
        // //▶▶Start Endgame Stage Section Element    




        // async clickEndgameStagePage() {
        //         const locator = this.page.frameLocator('iframe').locator("//p[text()='EndGame Stage']")
        //         await locator.click({ force: true })
        //         // console.log("Successfully Click To Endgame Stage Page ")
        // }



        // async clickEndgameImageText() {
        //         const locator = this.page.frameLocator('iframe').locator('text= Endgame Images')
        //         expect(locator).toContainText('Endgame Images')

        // }

        // async deleteUploadedEndgameBG() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//button[@type='button']//div)[2]").isVisible()
        //         if ((ele == true)) {
        //                 // console.log("delete Uploaded Endgame BG")
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//button[@type='button']//div)[2]")
        //                         .click()
        //         }


        // }

        // async uploadEndgameBG() {


        //         let filePath1 = "testData/images/SelectionStageBanner.jpg"
        //         this.page.on("filechooser", async (filechooser) => {
        //                 await filechooser.setFiles([filePath1])
        //         })
        //         await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-v2612']").first().click();


        // }




        // async inputCustomEndgamerMassage() {
        //         const ele = await this.page.frameLocator('iframe').locator("(//textarea[@placeholder='Type message'])[1]")
        //         await ele.fill('Lorem ipsum, in graphical and textual context, refers to filler text that is placed')

        // }



        // async inputCustomWinnerTitle() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//textarea[@placeholder='Type message'])[2]").isVisible()
        //         if ((ele == true)) {
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//textarea[@placeholder='Type message'])[2]")
        //                         .fill("In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate")
        //         }


        // }

        // async inputWinnerAddURL() {
        //         const ele = await this.page.frameLocator('iframe').locator("//textarea[@placeholder='Type url']")
        //         await ele.fill('https://www.lipsum.com/')

        // }

        // async inputCustomConsolationMassage() {
        //         const ele = await this.page.frameLocator('iframe').locator("(//textarea[@placeholder='Type message'])[3]")
        //         await ele.fill('In publishing and graphic design')

        // }

        // async inputConsolationAddURL() {

        //         let ele = await this.page.frameLocator('iframe').locator("(//textarea[@placeholder='Type message'])[4]").isVisible()
        //         if ((ele == true)) {

        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//textarea[@placeholder='Type message'])[4]")
        //                         .fill('https://www.lipsum.com/')
        //         }


        // }



        // async enableEndgameAdsBtn() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]").isVisible()
        //         if ((ele == true)) {
        //                 // console.log("click Custom Countdown Message Checkbox")
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//input[@type='checkbox'])[1]")
        //                         .click()
        //         }


        // }
        // async inputEndgameTimer() {
        //         const ele = await this.page.frameLocator('iframe').locator("//input[@type='number']")
        //         await ele.fill('23')

        // }




        // //🔚 Closed Endgame Stage Section Element 
        // //=======================================================
        // //▶▶Start Leaderboard Stage Section Element    




        // async clickLeaderboardPage() {
        //         const locator = this.page.frameLocator('iframe').locator("//p[text()='Leaderboard']")
        //         await locator.click()
        //         // console.log("Successfully Click To Leaderboard Page ")
        // }


        // async enableStageForLeaderboard() {

        //         const ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]")
        //         await ele.check()

        //         // if ((ele == true)) {

        //         //         await this.page.frameLocator('iframe')
        //         //                 .locator("(//input[@type='checkbox'])[1]")
        //         //                 .click()
        //         // }


        // }



        // async clickLeaderboardImageText() {
        //         const locator = this.page.frameLocator('iframe').locator('text= Leaderboard Images')
        //         expect(locator).toContainText('Leaderboard Images')

        // }

        // async deleteUploadedLeaderboardBG() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//button[@type='button']//div)[2]").isVisible()
        //         if ((ele == true)) {
        //                 // console.log("delete Uploaded Leaderboard BG")
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//button[@type='button']//div)[2]")
        //                         .click()
        //         }


        // }

        // async uploadLeaderboardBG() {


        //         let filePath1 = "testData/images/SelectionStageBanner.jpg"
        //         this.page.on("filechooser", async (filechooser) => {
        //                 await filechooser.setFiles([filePath1])
        //         })
        //         await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[1]").click();


        // }

        // async deleteLeaderboardHeaderUploadedImage() {
        //         let ele = await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1v2p79w']").isVisible()
        //         if ((ele == true)) {
        //                 // console.log("delete Uploaded Leaderboard Header BG")
        //                 await this.page.frameLocator('iframe')
        //                         .locator("//div[@class='MuiBox-root css-1v2p79w']")
        //                         .click()
        //         }


        // }

        // async uploadLeaderboardHeaderImage() {


        //         const filePath1 = "testData/images/SelectionStageBanner.jpg"
        //         this.page.on("filechooser", async (filechooser) => {
        //                 await filechooser.setFiles([filePath1])
        //         })
        //         await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[2]").click();


        // }

        
        


        // async fileUploadCropper() {
        //         const ele = await this.page.frameLocator('iframe').locator("//button[text()='Choose File']")
        //         await ele.click({force:true})

        //         const saveBtn = await this.page.frameLocator('iframe').locator("//button[text()='Save']")
        //         await saveBtn.click()

        // }

        // async inputLeaderboardTimer() {
        //         const ele = await this.page.frameLocator('iframe').locator('[type="number"]')
        //         await ele.fill('23')

        // }


        // //🔚 Closed Leaderboard Stage Section Element 
        // //=======================================================
        // //▶▶Start Thankyou Stage Section Element    






        // async clickThankYouStage() {
        //         const locator = this.page.frameLocator('iframe').locator("//p[text()='Thankyou Stage']")
        //         await locator.click()
        //         // console.log("Successfully Click To Thank you Stage Page ")
        // }


        // async enableStageForThankyouStage() {
        //         const ele = await this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]").isVisible()
        //         if ((ele == true)) {
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//input[@type='checkbox'])[1]")
        //                         .click({ force: true })
        //         }


        // }



        // async clickThankYouImagesText() {
        //         const locator = this.page.frameLocator('iframe').locator('text= Thank You Images')
        //         expect(locator).toContainText('Thank You Images')

        // }

        // async deleteUploadedThankYouImagesBG() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//button[@type='button']//div)[2]").isVisible()
        //         if ((ele == true)) {
        //                 // console.log("delete Uploaded Leaderboard BG")
        //                 await this.page.frameLocator('iframe')
        //                         .locator("(//button[@type='button']//div)[2]")
        //                         .click()
        //         }


        // }

        // async uploadThankYouStageImagesBG() {


        //         let filePath1 = "testData/images/SelectionStageBanner.jpg"
        //         this.page.on("filechooser", async (filechooser) => {
        //                 await filechooser.setFiles([filePath1])
        //         })
        //         await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-v2612']").first().click();


        // }

        // async inputUrlRedirectMassage() {
        //         let ele = await this.page.frameLocator('iframe').locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]")
        //         await ele.fill("https://garrett.testingdxp.com//")


        // }

        
        // async clickInputAutoResetTimer() {
        //         const ele = await this.page.frameLocator('iframe').locator("input.MuiInputBase-input.MuiOutlinedInput-input")
        //         await ele.click()

        // }

        // async inputAutoResetTimer() {
        //         const ele = await this.page.frameLocator('iframe').locator("input.MuiInputBase-input.MuiOutlinedInput-input")
        //         await ele.fill('15')

        // }



        // async clickCustomThankYouMassageCheckBox() {
                

        //         await this.page.frameLocator('iframe').locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]").click()
                
        
        // }


        // async inputCustomThankYouMassageCheckBox() {
        //         // await this.page.waitForSelector(`(//textarea[@placeholder='Type message'])[2]`)
        //         const ele = await this.page.frameLocator('iframe').locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]")
        //         await ele.fill("Thank You...")

        // }



        // //🔚 Closed Thankyou Stage Section Element 
        // //=======================================================
        // //▶▶Start Add New Config Section Element    

        async deleteAutoConfigurationIfHave() {
                //      const ele = await this.page.frameLocator('iframe').w('text=Title Stag')
                //         await this.page.waitForSelector(ele)        

                const ele = await this.page.frameLocator('iframe').locator('text=AutoStagesGame SettingsDelete >> p').last().isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator('text=AutoStagesGame SettingsDelete >> p').last()
                                .click({force:true})
                }

                await this.page.waitForTimeout(3000)

                const deleteBtn = await this.page.frameLocator('iframe').locator("//p[text()='Are you sure that you want to delete this configuration?']").isVisible()
                if ((deleteBtn == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("//button[text()='Delete']")
                                .click({force:true})
                }


               


        }


        async clickAddNewConfigPlusBtn() {
                const ele = await this.page.frameLocator('iframe').locator("(//h5[text()='Configurations']/following-sibling::button)[1]")
                await ele.click()

        }

        async verifyAddNewConfigPlusWindowText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='New Configuration']")
                expect(ele).toContainText("New Configuration")

        }



        async inputConfigurationName() {
                const ele = await this.page.frameLocator('iframe').locator('//input[@type="text"]')
                await ele.fill("Auto")

        }

        async clickAddBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='ADD']")
                expect(ele).toBeVisible()
                await ele.click()

        }

        async clickStagesBtn() {
                await this.page.frameLocator('iframe').locator("text=AutoStagesGame SettingsDelete >> p").first().click()


        }


        async clickGameDeleteBtn() {
                await this.page.frameLocator('iframe').locator('text=AutoStagesGame SettingsDelete >> p').nth(2).click();

        }

        async deleteGame() {
                await this.page.frameLocator('iframe').locator("//button[text()='Delete']").click();

        }


        // //🔚 Closed Add New Config Section Element 
        // //=======================================================
        // //▶▶Start Game Design Section Element    

        // async clickGameDesignBtn() {
        //         await this.page.frameLocator('iframe').locator('text=AutoStagesGame SettingsDelete >> p').nth(1).click();

        // }


        // async clickUploadFontBtn() {

        //         await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[1]").click();

        // }

        // //Primary Color Section Start
        // async clickPrimaryColorPickerBtn() {

        //         const ele = await this.page.frameLocator('iframe').locator("//p[text()='Primary Color']/following-sibling::button")
        //         await ele.first().click()

        // }

        // async inputPrimaryRGBFirstColor() {

        //         const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[1]')
        //         await ele.fill("173")

        // }
        // async inputPrimaryRGBSecondColor() {

        //         const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[2]')
        //         await ele.fill("133")

        // }

        // async inputPrimaryRGBThirdColor() {

        //         const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[3]')
        //         await ele.fill("3")

        // }

        // async inputPrimaryColorOpacity() {

        //         const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[4]')
        //         await ele.fill("70")

        // }

        // async inputPrimaryColorHEX() {

        //         const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])[5]')
        //         await ele.fill("ac8b04ff")

        // }

        // async clicSaveBtn() {

        //         const ele = await this.page.frameLocator('iframe').locator("//button[text()='Save']")
        //         expect(ele).toBeVisible()
        //         await ele.click()

        // }


        // //Secondary  Color Section Start
        // async clickSecondaryColorPickerBtn() {

        //         const ele = await this.page.frameLocator('iframe').locator("//p[text()='Secondary Color']/following-sibling::button")
        //         expect(ele).toBeVisible()
        //         await ele.click()

        // }

        // async inputSecondaryRGBFirstColor() {

        //         const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]")
        //         expect(ele).toBeVisible()
        //         await ele.fill("256")

        // }
        // async inputSecondaryRGBSecondColor() {

        //         const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]")
        //         expect(ele).toBeVisible()
        //         await ele.fill("33")

        // }

        // async inputSecondaryRGBThirdColor() {

        //         const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]")
        //         expect(ele).toBeVisible()
        //         await ele.fill("32")

        // }

        // async inputSecondaryColorOpacity() {

        //         const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]")
        //         expect(ele).toBeVisible()
        //         await ele.fill("70")

        // }

        // async inputSecondaryColorHEX() {

        //         const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]")
        //         expect(ele).toBeVisible()
        //         await ele.fill("ff3b30ff")

        // }


        // //Secondary  Color Section Start
        // async clickTextColorPickerBtn() {

        //         const ele = await this.page.frameLocator('iframe').locator("//p[text()='Text Color']/following-sibling::button")
        //         expect(ele).toBeVisible()
        //         await ele.click()

        // }

        // async inputTextRGBFirstColor() {

        //         const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]")
        //         expect(ele).toBeVisible()
        //         await ele.fill("167")

        // }
        // async inputTextRGBSecondColor() {

        //         const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]")
        //         expect(ele).toBeVisible()
        //         await ele.fill("73")

        // }

        // async inputTextRGBThirdColor() {

        //         const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]")
        //         expect(ele).toBeVisible()
        //         await ele.fill("213")

        // }

        // async inputTextColorOpacity() {

        //         const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]")
        //         expect(ele).toBeVisible()
        //         await ele.fill("79")

        // }

        // async inputTextColorHEX() {

        //         const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]")
        //         expect(ele).toBeVisible()
        //         await ele.fill("b13cd5ff")

        // }

        // async clickForUploadMainboardBG() {


        //         const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[2]")
        //         expect(ele).toBeVisible()
        //         await ele.click({ force: true })

        // }

        // async clickForUploadMobileBG() {

        //         const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[2]")
        //         expect(ele).toBeVisible()
        //         await ele.click({ force: true })

        // }
        // async enableStandByCheckBox() {

        //         const ele = await this.page.frameLocator('iframe').locator("//input[@type='checkbox']")
        //         expect(ele).toBeVisible()
        //         await ele.click({ force: true })

        // }

        // async inputStandByMassage() {

        //         const ele = await this.page.frameLocator('iframe').locator("//textarea[@placeholder='Type message']")
        //         expect(ele).toBeVisible()
        //         await ele.fill("Demo Data Here..")

        // }


        

        // //🔚 Closed Game Design Section Element 
        // //=======================================================
        // //▶▶Start Game Design Section Element    

        // async clickStartGameBtn() {

        //         await this.page.frameLocator('iframe').locator('text=AutoStart').click();

        //         // const ele = await this.page.frameLocator('iframe').locator('text=Start').nth(1)
        //         // expect(ele).toBeVisible()
        //         // await ele.click({force:true})

        // }
        // async clickMobileLinkBtn() {

        //         const ele = await this.page.frameLocator('iframe').locator('text=AutoStop >> [data-testid="MobileScreenShareIcon"]')
        //         expect(ele).toBeVisible()
        //         await ele.click({ force: true })

        // }

        // async clickMobileLinkOpenBtn() {

        //         // Click text=Open Link
        //         const [page1] = await Promise.all([
        //                 this.page.waitForEvent('popup'),
        //                 this.page.frameLocator('iframe').locator('text=Open Link').click()
        //         ]);


        // }

        // async inputUserNameInGame() {

        //         const ele = await this.page.frameLocator('iframe').locator('//input[@type="text"]')
        //         expect(ele).toBeVisible()
        //         await ele.fill("Jon Doe")


        // }
// navigate to the new added configuaration

async navigateTotheConfig(){
        const ele = await this.page.frameLocator('iframe').locator("(//p[text()='Game Settings'])").last()
        if (ele != null)
        await ele.click();
        else throw new Error("Error The Button Is Not Found")

        await this.page.waitForLoadState("networkidle")
        await this.page.waitForTimeout(3000);

} 
async clickToUploadFont() {
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.uploadFont).isVisible()
        if ((ele == true)) {
                await this.page.waitForTimeout(3000)
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.uploadFont).click();
        }
        else throw Error("Game setting Font Upload Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")
}

 //Primary Color Section Start
        async clickPrimaryColorPickerBtn() {

                const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.PrimaricolorBtn).isVisible()
                if ((ele == true)) {

                        await this.page.waitForTimeout(3000)
                        await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.PrimaricolorBtn).click()
                }
                else throw Error("Primary color Element Is Not Found")
        
                //await this.page.waitForTimeout(3000)
        
                await this.page.waitForLoadState("networkidle")
                

        }

        // async inputPrimaryRGBFirstColor() {

        //         const ele = await this.page.frameLocator('iframe').locator('(//input[@type="text"])')
        //         await ele.fill("173")

        //}
        async Addcolorswatches(){
                
                const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.addcolorSwatchesBTn).isVisible()
                if ((ele == true)) {
                        //await this.page.waitForTimeout(3000)
                        await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.addcolorSwatchesBTn).click()
                }
                else throw new Error("Add swatches color Element Is Not Found") 
        
                //await this.page.waitForTimeout(3000)
        
                await this.page.waitForLoadState("networkidle")

        }
        async inputPrimaryRGB() {

                const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.inputRGB).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.inputRGB).fill("133")
                }
                else throw Error("Primary RGB color Element Is Not Found")
        
                //await this.page.waitForTimeout(3000)
        
                await this.page.waitForLoadState("networkidle")
               
        }

        async inputPrimaryRGBSecondColor() {

                const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.inputRGBsecond).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.inputRGBsecond).fill("3")
                }
                else throw Error("Primary color Element Is Not Found")
        
                //await this.page.waitForTimeout(3000)
        
                await this.page.waitForLoadState("networkidle")

               // await ele.fill("3")

        }

        async inputPrimaryRGBThird() {

                const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.inputRGBThird).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.inputRGBThird).fill("70")
                }
                else throw Error("Primary color Element Is Not Found")
        
                //await this.page.waitForTimeout(3000)
        
                await this.page.waitForLoadState("networkidle")

                

        }
        async Primaryopacity(){
                const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.RGBopacity).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.RGBopacity).fill("90")
                }
                else throw Error("Primary color Element Is Not Found")
        
                //await this.page.waitForTimeout(3000)
        
                await this.page.waitForLoadState("networkidle")

        }

        async inputPrimaryColorhex() {

                const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.ColorHex).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.ColorHex).fill("c8b04ff")
                }
                else throw Error("Primary color Hex Element Is Not Found")
        
                //await this.page.waitForTimeout(3000)
        
                await this.page.waitForLoadState("networkidle")
                //await ele.fill("ac8b04ff")





}
async ColorDropdownclick(){
        
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.dropdown).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.dropdown).click()
        }
        else throw new Error("Dropdown Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async selectSolid(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.solidcolor).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.solidcolor).click()
        }
        else throw Error("Solid Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async selectHorizontal()
{
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Horizontal).isVisible()
        if ((ele == true)) {
                await this.page.waitForTimeout(3000)
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Horizontal).click()
        }
        else throw Error("Horizontal Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async selectvertical()
{
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Vertical).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Vertical).click()
        }
        else throw Error("Vertical Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async selectdiagonal()
{
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.diagonal).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.diagonal).click()
        }
        else throw Error("diagonal Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async selectradial()
{
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.radial).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.radial).click()
        }
        else throw Error("Radial Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async ClickOnSave(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.colorPickerSavebtn).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.colorPickerSavebtn).click()
        }
        else throw Error("Save Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async imageUploadButtonClick() {
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.imageUploadbtn).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.imageUploadbtn).click({ button: "left", delay: 1000 })
        }
        else throw new Error("Image Upload Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")



}
async ImageChooseFile() {
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.ImageChoosefilebutton).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.ImageChoosefilebutton).click()
        }
        else throw new Error("Choose file Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")



}
async mobilebackgroudUploadClick() {
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.mobileUploadBackground).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.mobileUploadBackground).click()
        }
        else throw Error("mobile backgroud Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async mobilebackgroundChoosefile() {
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.mobileBackgroundChoosefile).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.mobileBackgroundChoosefile).click()
        }
        else throw Error("Choose file Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async sendbyMessage() {
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.sendBymessagefield).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.sendBymessagefield).fill("Test Message")
        }
        else throw Error("Send By Message Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async secondarycolorpickerClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.secondaryColorPickerbtn).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.secondaryColorPickerbtn).click()
        }
        else throw Error("Send By Message Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")
}


async addswatchesSecondary(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.AddswatchesSecondary).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.AddswatchesSecondary).click()
                }
                else throw Error("Add swatches Element Is Not Found")
        
                //await this.page.waitForTimeout(3000)
        
                await this.page.waitForLoadState("networkidle")
}
async IMageUploadSavebtnClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.IMageUploadSavebtn).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.ImageChoosefilebutton).click()
        }
        else throw Error("Save Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async chooseSize(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.ChooseImageSizeDropdown).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.ChooseImageSizeDropdown).click()
        }
        else throw Error("ChooseSize Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async chooseNone(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.None).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.None).click()
        }
        else throw Error("None Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async Chooseiphone13ProMax(){
        
                const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.iphone13ProMax).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.iphone13ProMax).click()
                }
                else throw Error("iphone12promax Element Is Not Found")
        
                //await this.page.waitForTimeout(3000)
        
                await this.page.waitForLoadState("networkidle")

}
async chooseiphone12(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.iphone12).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.iphone12).click()
                }
                else throw Error("iphone12promax Element Is Not Found")
        
                //await this.page.waitForTimeout(3000)
        
                await this.page.waitForLoadState("networkidle")

}
async chooseSamsungs20(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Samsuungs20).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Samsuungs20).click()
                }
                else throw Error("Samsungs20 Element Is Not Found")
        
                //await this.page.waitForTimeout(3000)
        
                await this.page.waitForLoadState("networkidle")

}
async Ratio1input(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Ratio1).isVisible()
                if ((ele == true)) {
                        await this.page.waitForTimeout(3000)
                        await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Ratio1).fill("320")
                }
                else throw Error("Input Fields Element Is Not Found")
        
                //await this.page.waitForTimeout(3000)
        
                await this.page.waitForLoadState("networkidle")

}
async Ratio2Input(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Ratio2).isVisible()
                if ((ele == true)) {
                        await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Ratio2).fill("207")
                }
                else throw Error("Input Fields Element Is Not Found")
        
                //await this.page.waitForTimeout(3000)
        
                await this.page.waitForLoadState("networkidle")

}
async Chooseimagesize(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Chooseratiodropdown).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Chooseratiodropdown).click()
        }
        else throw Error("ChooseSize Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async ClickonRatio11(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Ratio11).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Ratio11).click()
        }
        else throw Error("Ratio Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async Clickontheratio43(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Ratio43).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Ratio43).click()
        }
        else throw Error("Ratio Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

} 
async Clickontheratio169(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Ratio169).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Ratio169).click()
        }
        else throw Error("Ratio Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

} 
async Clickontheratio1610(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Ratio1610).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Ratio1610).click()
        }
        else throw Error("Ratio Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

} 
async verifyImg(){

        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.verifyUploadedIMg).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.verifyUploadedIMg).click()
        }
        else throw new Error("Ratio Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async textcolorbtnClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.textColorBtn).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.textColorBtn).click()
        }
        else throw new Error("Text Color Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async INvalidUpAlert(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.InvalidFiletypeAlert).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.InvalidFiletypeAlert).click()
        }
        else throw new Error("Invalid Alert Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async InvalidAlertOkbtnClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.InavlidModalOK).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.InavlidModalOK).click()
        }
        else throw new Error("Invalid Alert OK Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")


}
async CancelBTNClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.CancelImgUpModal).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.CancelImgUpModal).click()
        }
        else throw new Error("Cancel Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async ImagedeleteClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.ImageDelete).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.ImageDelete).click()
        }
        else throw new Error("Delete Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async MobileBackgroundDeleteClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.MobileBackgroundDelete).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.MobileBackgroundDelete).click()
        }
        else throw new Error("Delete Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async ClearAllBtnClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.ClearAllBTN).isVisible()
        if ((ele == true)) {
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.ClearAllBTN).click()
        }
        else throw new Error("Clear Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        await this.page.waitForLoadState("networkidle")

}
async stagesBTnClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.StagesBTN).isVisible()
        if ((ele == true)) {
                await this.page.waitForTimeout(3000)
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.StagesBTN).click({ button: "left", delay: 1000 })
        }
        else throw  Error("Stages Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        //await this.page.waitForLoadState("networkidle")

}
async CustomMobileWaitingMessageINput(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.CustomMobileWaitingMessage).isVisible()
        if ((ele == true)) {
                await this.page.waitForTimeout(3000)
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.CustomMobileWaitingMessage).fill("Test Message")
        }
        else throw  Error("Custom Mobile Waiting Message Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        //await this.page.waitForLoadState("networkidle")

}
async SelectVideoUpload(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.SelectVideo).isVisible()
        if ((ele == true)) {
                await this.page.waitForTimeout(3000)
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.SelectVideo).click()
        }
        else throw  Error("Select Video Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        //await this.page.waitForLoadState("networkidle")

}
async VideoUploadBTNClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.SelectVideo).isVisible()
        if ((ele == true)) {
                await this.page.waitForTimeout(3000)
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.SelectVideo).click()
        }
        else throw  Error("Video Upload Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        //await this.page.waitForLoadState("networkidle")


}
async SelectIMageBTNClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.SelectImageUploadBTN).isVisible()
        if ((ele == true)) {
                await this.page.waitForTimeout(3000)
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.SelectImageUploadBTN).click()
        }
        else throw  Error("Select Image Upload Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        //await this.page.waitForLoadState("networkidle")

}
async IMageUploadBTMClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.imageUploadbtn).isVisible()
        if ((ele == true)) {
                await this.page.waitForTimeout(3000)
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.ImageuploadBTN).click()
        }
        else throw  Error("Image Upload Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        //await this.page.waitForLoadState("networkidle")
}
async GameTitleImageUploadClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.GameTitleImageUploadBTN).isVisible()
        if ((ele == true)) {
                await this.page.waitForTimeout(3000)
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.GameTitleImageUploadBTN).click()
        }
        else throw  new Error("Game Title Image Upload Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        //await this.page.waitForLoadState("networkidle")
}
async TeamLogoUploadClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.TeamLogoUploadBTN).isVisible()
        if ((ele == true)) {
                await this.page.waitForTimeout(3000)
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.TeamLogoUploadBTN).click()
        }
        else throw  Error("Team Logo Image Upload Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        //await this.page.waitForLoadState("networkidle")
}
async SponsorLogoUploadClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.SponsorLOgoUploadBTN).isVisible()
        if ((ele == true)) {
                await this.page.waitForTimeout(3000)
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.SponsorLOgoUploadBTN).click()
        }
        else throw  Error("Sponsor Logo Image Upload Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        //await this.page.waitForLoadState("networkidle")
}
async PreviewCheckboxClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.PreviewCheckbox).isVisible()
        if ((ele == true)) {
                await this.page.waitForTimeout(3000)
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.PreviewCheckbox).click()
        }
        else throw  Error("Preview Checkbox Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        //await this.page.waitForLoadState("networkidle")
}
async JumptoNextClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.JumptonextCheckbox).isVisible()
        if ((ele == true)) {
                await this.page.waitForTimeout(3000)
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.JumptonextCheckbox).click()
        }
        else throw  Error("Jump to next Checkbox Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        //await this.page.waitForLoadState("networkidle")
}
async GameTitleImgDeleteClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Gametitledelete).isVisible()
        if ((ele == true)) {
                await this.page.waitForTimeout(3000)
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.Gametitledelete).click()
        }
        else throw  Error("Delete Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        //await this.page.waitForLoadState("networkidle")
}
async ImgDeleteClick(){
        const ele = await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.ImageDelete).isVisible()
        if ((ele == true)) {
                await this.page.waitForTimeout(3000)
                await this.page.frameLocator('iframe').locator(this.gameSettingPageElements.ImageDelete).click()
        }
        else throw  Error("Delete Element Is Not Found")

        //await this.page.waitForTimeout(3000)

        //await this.page.waitForLoadState("networkidle")

}
}

