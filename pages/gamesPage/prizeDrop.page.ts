import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class prizeDropPage {
        // [x: string]: any;

        private page: Page;
        // static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }



        //=======================================================
        //▶▶Start Title Stage Section Element       


        async clickPrizeDropSection() {
                const locator = this.page.locator("//p[text()='Prize Drop']")
                // expect(locator).toContainText('Prize Drop')
                await locator.click({force:true})
                // console.log("Successfully Click To Tug of War Page ")
        }

        async verifyConfigurationsText() {
                //      const ele = await this.page.frameLocator('iframe').w('text=Title Stag')
                //         await this.page.waitForSelector(ele)        

                const ele = await this.page.frameLocator('iframe').locator('text=Configurations')
                expect(ele).toContainText("Configurations")


        }

        async verifyDeleteAutoConfigurationIfHave() {
                //      const ele = await this.page.frameLocator('iframe').w('text=Title Stag')
                //         await this.page.waitForSelector(ele)        

                const ele = await this.page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsEditDelete >> p').last().isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsEditDelete >> p').last()
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
                const ele = await this.page.frameLocator('iframe').locator('input[type="text"]')
                await ele.fill("Auto")

        }

        async clickAddBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='ADD']")
                expect(ele).toBeVisible()
                await ele.click()

        }


        //🔚 Closed Add New Config Section Element 
        //=======================================================
        //▶▶Start Game Design Section Element  
        async clickGameDesign() {
                await this.page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsEditDelete >> p').nth(0).click()

        }

        async clickToUploadFont() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-vjb914']//div)[1]")
                expect(ele).toBeVisible()
                await ele.click()

        }

        async clickClearAllBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Clear All']")
                expect(ele).toBeVisible()
                await ele.click({force:true});

        }



        //start main color section element
        async verifyMainColorText() {
                const ele = await this.page.frameLocator('iframe').locator('text=Main Color')
                expect(ele).toContainText("Main Color")

        }


        async clickMainColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Main Color']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        async inputMainRGRFirstColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }
        async inputMainRGRSecondColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }


        async inputMainRGRThirdColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
                expect(ele).toBeVisible()
                await ele.fill("9")

        }

        async inputMainRGRFourColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("90")

        }

        async inputMainRGRFiveColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("F1d40FFF")

        }


        async clickColorPickerSaveBtn() {
                const ele = await this.page.frameLocator('iframe').locator('text=Save')
                expect(ele).toBeVisible()
                await ele.click()

        }

        //start accent color section element

        async verifyAccentColorText() {
                const ele = await this.page.frameLocator('iframe').locator('text=Accent Color')
                expect(ele).toContainText("Accent Color")

        }


        async clickAccentColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Accent Color']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        async inputAccentRGRFirstColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }
        async inputAccentRGRSecondColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }


        async inputAccentRGRThirdColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
                expect(ele).toBeVisible()
                await ele.fill("9")

        }

        async inputAccentRGRFourColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("90")

        }

        async inputAccentRGRFiveColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("005782FF")

        }

        //start Text color section element

        async verifyTextColorText() {
                const ele = await this.page.frameLocator('iframe').locator('text=Text Color')
                expect(ele).toContainText("Text Color")

        }


        async clickTextColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Text Color']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        async inputTextRGRFirstColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }
        async inputTextRGRSecondColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
                expect(ele).toBeVisible()
                await ele.fill("179")

        }


        async inputTextRGRThirdColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
                expect(ele).toBeVisible()
                await ele.fill("229")

        }

        async inputTextRGRFourColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("190")

        }

        async inputTextRGRFiveColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("FFdFFFFF")

        }


        //start Text color section element

        async verifyButtonColorText() {
                const ele = await this.page.frameLocator('iframe').locator('text=Button Color')
                expect(ele).toContainText("Button Color")

        }


        async clickButtonColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Button Color']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        async inputButtonRGRFirstColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }
        async inputButtonRGRSecondColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
                expect(ele).toBeVisible()
                await ele.fill("179")

        }


        async inputButtonRGRThirdColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
                expect(ele).toBeVisible()
                await ele.fill("229")

        }

        async inputButtonRGRFourColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("190")

        }

        async inputButtonRGRFiveColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("577C98FF")

        }
        async verifyFullScreenLogoText() {
                const ele = await this.page.frameLocator('iframe').locator("//h5[text()='Full Screen Logo']")
                expect(ele).toContainText("Full Screen Logo")

        }

        async verifyGameTitleImageTitleText() {
                const ele = await this.page.frameLocator('iframe').locator("//h5[text()='Game Title Image']")
                expect(ele).toContainText("Game Title Image")

        }

        //Upload Game Desgin Image
        async clickToUploadFullScreenLogo() {
                // const buffer = readFileSync('./videos/a.png');
                // // Create the DataTransfer and File
                // const dataTransfer = await this.page.evaluateHandle((data) => {
                //     const dt = new DataTransfer();
                //     // Convert the buffer to a hex array
                //     const file = new File([data.toString('hex')], 'a.png', { type: 'application/png' });
                //     dt.items.add(file);
                //     return dt;
                // }, buffer);

                // await this.page.dispatchEvent("(//div[@class='MuiBox-root css-78n4oq']//div)[2]", 'drop', { dataTransfer });

                // const filePath0 = "testData/images/banner.png"
                // await this.page.on("filechooser", async (filechooser) => {
                //         await filechooser.setFiles([filePath0])
                // })
                // await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-vjb914']//div)[2]").dblclick({ force: true })

                // const filePath0 = "testData/logos/Logo.jpg"
                // this.page.on("filechooser", async (filechooser) => {
                //         await filechooser.setFiles([filePath0]);
                // })
                // await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-vjb914']//div)[2]").click()


                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-vjb914']//div)[2]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadGameTitleImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[3]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }
        ///////
        async clickToUploadFrameImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[4]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadParachutePrizeImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[5]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadNoPrizeWonImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[6]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }
        /// Sponsor Images
        async clickToUploadSponsorImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[7]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadSponsorLogo() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[8]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadSponsorTeamLogo() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[9]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadGameBackgroundImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[10]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadHowtoPlayImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[11]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadSplashScreenImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[12]")
                expect(ele).toBeVisible()
                await ele.click({force:true})

        }

        async clickToUploadRulesImage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[13]")
                await ele.click({force:true})

        }



        //🔚 Closed Game Desgin Section Element 
        //=======================================================
        //▶▶Start Game Settings Section Element  


        async clickGameSettings() {
                await this.page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsEditDelete >> p').nth(1).click()

        }

        async inputTotalRewards() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
                expect(ele).toBeVisible()
                await ele.fill("30")
        }



        async inputTotalRewardsPerDay() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
                expect(ele).toBeVisible()
                await ele.fill("5")
        }

        async inputDurationTimeHour() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
                expect(ele).toBeVisible()
                await ele.fill("1")
        }

        async inputDurationTimeMinutes() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("10")
        }


        async inputDurationTimeSecond() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[5]")
                expect(ele).toBeVisible()
                await ele.fill("5")
        }
        async inputStandByMessage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='notranslate public-DraftEditor-content']//div)[2]")
                expect(ele).toBeVisible()
                await ele.fill("In publishing and graphic design, Lorem ipsum is a placeholder")
        }

        async inputEndingGameMassage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[2]")
                expect(ele).toBeVisible()
                await ele.fill("In publishing and graphic design, Lorem ipsum is a placeholder")
        }

        async inputSelectionMessage() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[3]")
                expect(ele).toBeVisible()
                await ele.fill("In publishing and graphic design, Lorem ipsum is a placeholder")
        }

        async clickEntryScreen() {
                const ele = await this.page.frameLocator('iframe').locator("//div[contains(@class,'MuiSelect-select MuiSelect-outlined')]")
                expect(ele).toBeVisible()
                await ele.click()
        }

        async selectHowToScreen() {
                const ele = await this.page.frameLocator('iframe').locator("//li[text()='How to Screen']")
                expect(ele).toBeVisible()
                await ele.click()
        }




        //🔚 Closed Game Settings Section Element 
        //=======================================================
        //▶▶Start Add Banner Settings Section Element  


        async clickAddBannerSection() {
                await this.page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsEditDelete >> p').nth(2).click()

        }

        async verifyMarketingMassageText() {
                const ele = await this.page.frameLocator('iframe').locator("//h5[text()='Marketing Message']")
                expect(ele).toContainText("Marketing Message")
        }

        async verifyDragYourImageText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Drag your image here, or browse']")
                expect(ele).toContainText("Drag your image here, or browse")
        }


        async clickToUploadBanner() {
                const ele = await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-v2612']")
                expect(ele).toBeVisible()
                await ele.click()
        }


        //🔚 Closed Game Settings Section Element 
        //=======================================================
        //▶▶Start Add Banner Settings Section Element  



        async clickPrizingSection() {
                await this.page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsEditDelete >> p').nth(3).click()

        }

        async verifyPrizingListText() {
                const ele = await this.page.frameLocator('iframe').locator("//h4[text()='Prizing List']")
                expect(ele).toContainText("Prizing List")
        }

        async clickAddNewPrizeBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Award All']/following-sibling::button")
                expect(ele).toBeVisible()
                await ele.click()
        }

        async inputCouponName() {
                const ele = await this.page.frameLocator('iframe').locator("//input[@placeholder='Coupon name']")
                expect(ele).toBeVisible()
                await ele.fill("AutoCoupon")
        }

        async inputAmountOfAwarding() {
                const ele = await this.page.frameLocator('iframe').locator("//input[@placeholder='Amount Of Awarding']")
                await ele.fill("20")
        }

        async inputPercentageAwarded() {
                const ele = await this.page.frameLocator('iframe').locator("//input[@placeholder='Percentage Value']")
                await ele.fill("10")
        }

        async clickCouponPrizeSelectBtn() {
                // await page.frameLocator('iframe').locator('text=Coupon Prize Select *Select a coupon >> div').nth(2).click();
                const ele = await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-1qf0ezp']")
                await ele.click()
        }
        async selectCouponPrizeSelect() {
                const ele = await this.page.frameLocator('iframe').locator("(//button[text()='Select'])[1]")
                await ele.click()
        }
        async clickSaveBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Save']")
                await ele.click()
        }


        async clickDeleteBtn() {
                let ele = await this.page.frameLocator('iframe').locator("(//button[text()='Delete'])[1]").isVisible()
                if ((ele == true)) {
                        // console.log("delete Uploaded Leaderboard BG")
                        await this.page.frameLocator('iframe')
                                .locator("(//button[text()='Delete'])[1]")
                                .click()
                }

        }

        async clickConfirmDeleteBtn() {
                let ele = await this.page.frameLocator('iframe').locator("//div[contains(@class,'MuiDialogActions-root MuiDialogActions-spacing')]//button[1]").isVisible()
                if ((ele == true)) {
                        // console.log("delete Uploaded Leaderboard BG")
                        await this.page.frameLocator('iframe')
                                .locator("//div[contains(@class,'MuiDialogActions-root MuiDialogActions-spacing')]//button[1]")
                                .click()
                }

        }




        //🔚 Closed Prizing  Section Element 
        //=======================================================
        //▶▶Start Anlaytics  Section Element  




        async clickAnalyticsSection() {
                await this.page.frameLocator('iframe').locator("//p[text()='Analytics']").last().click({force:true})

        }

        async clickToStopLiveGame() {
                // Click text=AutoStart
                await this.page.frameLocator('iframe').locator('text=AutoLive').click();

        }



        async verifySessionAnalyticsText() {
                const ele = await this.page.frameLocator('iframe').locator("//h4[text()='Session Analytics']")
                expect(ele).toContainText("Session Analytics")
        }

        async downloadAnlytics() {
                // Click text=Export 
                const [download] = await Promise.all([
                        this.page.waitForEvent('download'),
                        this.page.frameLocator('iframe').locator("(//button[text()='Export'])[1]").click()
                ]);
        }







        async clickStartGameBtn() {

                await this.page.frameLocator('iframe').locator('text=AutoStart').click({force:true});

                // const ele = await this.page.frameLocator('iframe').locator('text=Start').nth(1)
                // expect(ele).toBeVisible()
                // await ele.click({force:true})

        }

        async clickStartGameOkBtn() {

                await this.page.frameLocator('iframe').locator("//button[text()='Ok']").click({force:true});

                // const ele = await this.page.frameLocator('iframe').locator('text=Start').nth(1)
                // expect(ele).toBeVisible()
                // await ele.click({force:true})

        }

        async clickStopGameOkBtn() {

                await this.page.frameLocator('iframe').locator("//button[text()='Ok']").click();

                // const ele = await this.page.frameLocator('iframe').locator('text=Start').nth(1)
                // expect(ele).toBeVisible()
                // await ele.click({force:true})

        }



        async clickMobileLinkBtn() {
                // Click text=AutoStart >> button >> nth=1
                await this.page.frameLocator('iframe').locator('text=AutoStart >> button').nth(1).click();

                // const ele = await this.page.frameLocator('iframe').locator('text=AutoStop >> [data-testid="MobileScreenShareIcon"]')
                // expect(ele).toBeVisible()
                // await ele.click({force:true})

        }

        async clickMobileLinkOpenBtn() {

                // Click text=Open Link
                const [page1] = await Promise.all([
                        this.page.waitForEvent('popup'),
                        this.page.frameLocator('iframe').locator('text=Open Link').click()
                ]);


        }

        async clickMobileLinkCopyBtn() {

                // Click text=Open Link

                await this.page.frameLocator('iframe').locator('text=Copy Link').click()



        }





//Edit Section Element Here


async clickEditSection() {
        await this.page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsEditDelete >> p').nth(5).click()

}


async inputEditGameTitle() {
        const ele = await this.page.frameLocator('iframe').locator('input[type="text"]')
        await ele.fill("Auto")

}
async clickEditBtn(){
        const editBtn = await this.page.frameLocator('iframe').locator("//button[text()='EDIT']")
        expect(editBtn).toBeVisible()
        await editBtn.click()
}


        async clickGameDeleteBtn() {
                await this.page.frameLocator('iframe').locator("//p[text()='Delete']").last().click({force:true})


        }
        async confirmDeleteBtn() {
                await this.page.frameLocator('iframe').locator("//button[text()='Delete']").click();

        }









        async fileUploadCropper() {
                const chooseBtn = await this.page.frameLocator('iframe').locator("//button[text()='Choose File']")
                expect.soft(chooseBtn).toContainText("Choose File")
                await chooseBtn.click()


                const cropperSaveBtn = await this.page.frameLocator('iframe').locator("//button[text()='Save']")
                expect(cropperSaveBtn).toContainText("Save")
                await cropperSaveBtn.click({force:true})

        }










        //🔚 Closed Add New Config Section Element 
        //=======================================================
        //▶▶Start Game Design Section Element  











        async enableStage() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[1]")

                await ele.click()
                // if ((ele == false)) {
                //         // console.log("Enable Stage to be skip and jump to next one")
                //         await this.page.frameLocator('iframe')
                //                 .locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[1]")
                //                 .click()
                // }


        }






}

