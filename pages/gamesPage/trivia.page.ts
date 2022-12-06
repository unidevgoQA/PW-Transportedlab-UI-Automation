import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class triviaPage {
        // [x: string]: any;

        private page: Page;
        // static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }



        //=======================================================
        //▶▶Start Title Stage Section Element       


        async clickTriviaSection() {

                const [page] = await Promise.all([
                        // Start waiting for the download
                        this.page.waitForNavigation(),
                        // Perform the action that initiates download
                        this.page.locator("//p[text()='Trivia']").click({ force: true }),
                ]);

                //     const locator = this.page.locator("//p[text()='Trivia']")
                //     expect(locator).toContainText('Trivia')
                //     await locator.click({force:true})
                //     // console.log("Successfully Click To Tug of War Page ")
        }

        async verifyConfigurationsText() {
                //      const ele = await this.page.frameLocator('iframe').w('text=Title Stag')
                //         await this.page.waitForSelector(ele)        

                await this.page.waitForTimeout(2000)
                const ele = await this.page.frameLocator('iframe').locator("//h5[text()='Configurations']")
                expect(ele).toContainText("Configurations")


        }

        async verifyDeleteAutoConfigurationIfHave() {
                //      const ele = await this.page.frameLocator('iframe').w('text=Title Stag')
                //         await this.page.waitForSelector(ele)        

                const ele = await this.page.frameLocator('iframe').locator("//h6[text()='Auto']").isVisible()
                if ((ele == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator('text=AutoStartControl PanelGame DesignGame SettingsAnalyticsPrizingDelete >> p').last()
                                .click({ force: true })
                }

                await this.page.waitForTimeout(3000)

                const deleteBtn = await this.page.frameLocator('iframe').locator("//p[text()='Are you sure that you want to delete this configuration?']").isVisible()
                if ((deleteBtn == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page.frameLocator('iframe')
                                .locator("//button[text()='Delete']")
                                .click({ force: true })
                }





        }


        async clickAddNewConfigPlusBtn() {
                await this.page.frameLocator('iframe').locator("(//h5[text()='Configurations']/following-sibling::button)[1]").click()



                // const [ page ] = await Promise.all([
                //         // Start waiting for the download
                //         this.page.waitForNavigation(),
                //         // Perform the action that initiates download
                //         this.page.frameLocator('iframe').locator("(//h5[text()='Configurations']/following-sibling::button)[1]").click()
                //       ]);


                // const ele = await this.page.frameLocator('iframe').locator("(//h5[text()='Configurations']/following-sibling::button)[1]")
                // await ele.click()

        }
        async verifyAddNewConfigPlusWindowText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='New Configuration']")
                expect(ele).toContainText("New Configuration")

        }


        async inputConfigurationName(name : string) {
                const ele = await this.page.frameLocator('iframe').locator("//input[@id='P-15440491692']")
                await ele.fill(name)

        }

        async clickAddBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='ADD']")
                expect(ele).toBeVisible()
                await ele.click()

        }

       getRandomName () { 
              return "Auto"+ Date.now() + "Name"
          }

        //🔚 Closed Add New Config Section Element 
        //=======================================================
        //▶▶Start Game Design Section Element  
        async clickGameDesign() {
                await this.page.frameLocator('iframe').locator("//p[text()='Game Design']").last().click()

        }

        async clickToUploadFont() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-vjb914']//div)[1]")
                expect(ele).toBeVisible()
                await ele.click()

        }

        async clickClearAllBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Clear All']")
                expect(ele).toBeVisible()
                await ele.click({ force: true });

        }



        //start main color section element
        async verifyMobileBackgroundColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Mobile Background']")
                expect(ele).toContainText("Mobile Background")

        }


        async clickMobileBackgroundColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Mobile Background']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        async inputMobileBackgroundRGRFirstColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }
        async inputMobileBackgroundRGRSecondColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }


        async inputMobileBackgroundRGRThirdColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
                expect(ele).toBeVisible()
                await ele.fill("9")

        }

        async inputMobileBackgroundRGRFourColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("90")

        }

        async inputMobileBackgroundRGRFiveColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("F1d40FFF")

        }

        async clickStwatchsePlusBtn() {
                const ele = await this.page.frameLocator('iframe').locator("(//p[text()='Swatches']/following-sibling::button)[1]")
                expect(ele).toBeVisible()
                await ele.click()

        }

        async clickStwatchseDeleteBtn() {
                const ele = await this.page.frameLocator('iframe').locator("(//button[@aria-label='delete'])[1]")
                expect(ele).toBeVisible()
                await ele.click()

        }

        async clickDropDownBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//div[@role='button']")
                expect(ele).toBeVisible()
                await ele.click()

        }

        async selectSolid() {
                const ele = await this.page.frameLocator('iframe').locator("//li[text()='Solid']")
                expect(ele).toBeVisible()
                await ele.click()

        }

        async selectHorizontal() {
                const ele = await this.page.frameLocator('iframe').locator("//li[text()='Horizontal']")
                expect(ele).toBeVisible()
                await ele.click()

        }

        async selectVertical() {
                const ele = await this.page.frameLocator('iframe').locator("//li[text()='Vertical']")
                expect(ele).toBeVisible()
                await ele.click()

        }

        async selectDiagonal() {
                const ele = await this.page.frameLocator('iframe').locator("//li[text()='Diagonal']")
                expect(ele).toBeVisible()
                await ele.click()

        }

        async selectRadial() {
                const ele = await this.page.frameLocator('iframe').locator("//li[text()='Radial']")
                expect(ele).toBeVisible()
                await ele.click()

        }


        async clickColorPickerSaveBtn() {
                const ele = await this.page.frameLocator('iframe').locator('text=Save')
                expect(ele).toBeVisible()
                await ele.click({ force: true })

        }

        //start General/Button Text color section element

        async verifyGeneralButtonTextColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='General/Button Text']")
                expect(ele).toContainText("General/Button Text")

        }


        async clickGeneralButtonTextColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='General/Button Text']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        async inputGeneralButtonTextRGRFirstColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }
        async inputGeneralButtonTextRGRSecondColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }


        async inputGeneralButtonTextRGRThirdColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
                expect(ele).toBeVisible()
                await ele.fill("9")

        }

        async inputGeneralButtonTextRGRFourColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("90")

        }

        async inputGeneralButtonTextRGRFiveColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("F1d40FFF")

        }


        //start Button Background color section element

        async verifyButtonBackgroundColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Button Background']")
                expect(ele).toContainText("Button Background")

        }


        async clickButtonBackgroundColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Button Background']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        async inputButtonBackgroundRGRFirstColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }
        async inputButtonBackgroundRGRSecondColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }


        async inputButtonBackgroundRGRThirdColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
                expect(ele).toBeVisible()
                await ele.fill("9")

        }

        async inputButtonBackgroundRGRFourColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("90")

        }

        async inputButtonBackgroundRGRFiveColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("F1d40FFF")

        }


        //start Question Text color section element

        async verifyQuestionTextColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Question Text']")
                expect(ele).toContainText("Question Text")

        }


        async clickQuestionTextColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Question Text']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        async inputRGRFirstColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }
        async inputRGRSecondColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
                expect(ele).toBeVisible()
                await ele.fill("189")

        }


        async inputRGRThirdColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
                expect(ele).toBeVisible()
                await ele.fill("9")

        }

        async inputRGRFourColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("90")

        }

        async inputRGRFiveColor() {
                const ele = await this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                expect(ele).toBeVisible()
                await ele.fill("F1d40FFF")

        }


        //start Question Text color section element

        async verifyAnswerTextColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Answer Text']")
                expect(ele).toContainText("Answer Text")

        }


        async clickAnswerTextColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Answer Text']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        //start Question Background color section element

        async verifyQuestionBackgroundColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Question Background']")
                expect(ele).toContainText("Question Background")

        }


        async clickQuestionBackgroundColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Question Background']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        //start Question Background color section element

        async verifyAnswerBackgroundColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Answer Background']")
                expect(ele).toContainText("Answer Background")

        }


        async clickAnswerBackgroundColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Answer Background']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        //start Question Frame color section element

        async verifyQuestionFrameColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Question Frame']")
                expect(ele).toContainText("Question Frame")

        }


        async clickQuestionFrameColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Question Frame']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }



        //start Answer Frame color section element

        async verifyAnswerFrameColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Answer Frame']")
                expect(ele).toContainText("Answer Frame")

        }


        async clickAnswerFrameColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Answer Frame']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }


        //start Selected Answer color section element

        async verifySelectedAnswerColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Selected Answer']")
                expect(ele).toContainText("Selected Answer")

        }


        async clickSelectedAnswerColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Selected Answer']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }


        //start Correct Answer color section element

        async verifyCorrectAnswerColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Correct Answer']")
                expect(ele).toContainText("Correct Answer")

        }


        async clickCorrectAnswerColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Correct Answer']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        //start Incorrect Answer color section element

        async verifyIncorrectAnswerColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Incorrect Answer']")
                expect(ele).toContainText("Incorrect Answer")

        }


        async clickIncorrectAnswerColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Incorrect Answer']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }


        //start Leaderboard Text color section element

        async verifyLeaderboardTextColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Leaderboard Text']")
                expect(ele).toContainText("Leaderboard Text")

        }


        async clickLeaderboardTextColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Leaderboard Text']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }


        //start Leaderboard Background color section element

        async verifyLeaderboardBackgroundColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Leaderboard Background']")
                expect(ele).toContainText("Leaderboard Background")

        }


        async clickLeaderboardBackgroundColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Leaderboard Background']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        //start Leaderboard Frame color section element

        async verifyLeaderboardFrameColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Leaderboard Frame']")
                expect(ele).toContainText("Leaderboard Frame")

        }


        async clickLeaderboardFrameColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Leaderboard Frame']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }



        //start Leaderboard Accent color section element

        async verifyLeaderboardAccentColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Leaderboard Accent']")
                expect(ele).toContainText("Leaderboard Accent")

        }


        async clickLeaderboardAccentColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Leaderboard Accent']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        //start User's Top 10 Rank color section element

        async verifyUserTop10RankColorText() {
                const ele = await this.page.frameLocator('iframe').locator(`//p[text()="User's Top 10 Rank"]`)
                expect(ele).toContainText("User's Top 10 Rank")

        }


        async clickUserTop10RankColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator(`//p[text()="User's Top 10 Rank"]/following-sibling::button`).first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        //start Countdown Animation Fill color section element

        async verifyCountdownAnimationFillColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Countdown Animation Fill']")
                expect(ele).toContainText("Countdown Animation Fill")

        }


        async clickCountdownAnimationFillColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Countdown Animation Fill']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        //start Tile/Countdown Background color section element

        async verifyTileCountdownBackgroundColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Tile/Countdown Background']")
                expect(ele).toContainText("Tile/Countdown Background")

        }


        async clickTileCountdownBackgroundColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Tile/Countdown Background']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }
        //start Tile/Countdown Frame color section element

        async verifyTileCountdownFrameColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Tile/Countdown Frame']")
                expect(ele).toContainText("Tile/Countdown Frame")

        }


        async clickTileCountdownFrameColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Tile/Countdown Frame']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        //start Point-Bubble Fill color section element

        async verifyPointBubbleFillColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Point-Bubble Fill']")
                expect(ele).toContainText("Point-Bubble Fill")

        }


        async clickPointBubbleFillColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Point-Bubble Fill']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        //start Point-Bubble Stroke color section element

        async verifyPointBubbleStrokeColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Point-Bubble Stroke']")
                expect(ele).toContainText("Point-Bubble Stroke")

        }


        async clickPointBubbleStrokeColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Point-Bubble Stroke']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        //start Point-Bubble Text color section element

        async verifyPointBubbleTextColorText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Point-Bubble Text']")
                expect(ele).toContainText("Point-Bubble Text")

        }


        async clickPointBubbleTextColorPicker() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Point-Bubble Text']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

        //▶▶Start Control Pannel Section Element  
        async clickControlPanel() {
                await this.page.frameLocator('iframe').locator("//p[text()='Control Panel']").last().click()

        }

        async clickLiveGameStopBtn() {
              const ele = this.page.frameLocator('iframe').locator("//button[text()='Live']").last()
              // expect(ele).toContainText("Add Round")
              await ele.click({force:true})

       }

       async clickOkBtn() {
              const ele = this.page.frameLocator('iframe').locator("//button[text()='Ok']").last()
              // expect(ele).toContainText("Add Round")
              await ele.click({force:true})

       }


        async clickAddRoundBtn() {
               const ele = this.page.frameLocator('iframe').locator("//button[text()='Add Round']")
               expect(ele).toContainText("Add Round")
               await ele.click()

        }

        async verifyNewRoundTitleText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='New Round']")
                expect(ele).toContainText("New Round")
               
 
         }


        async inputNewRoundTitle() {

                const ele = await this.page.frameLocator('iframe').locator("//input[@id='P-5076996182']")
                await ele.fill("Auto")
               
 
         }

         async clickRoundAddBtn() {
                const ele = this.page.frameLocator('iframe').locator("//button[text()='ADD']")
                expect(ele).toContainText("ADD")
                await ele.click()
 
         }

         async verifyGameModeText() {
                const ele = this.page.frameLocator('iframe').locator("//h5[text()='Game Mode']")
                expect(ele).toContainText("Game Mode")              
 
         }

         async clickManualModeBtn() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Manual']")
                expect(ele).toContainText("Manual")
                await ele.click()
 
         }

         async clickOnDemandModeBtn() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='On-Demand']")
                expect(ele).toContainText("On-Demand")
                await ele.click()
 
         }

         async verifyCountdownText() {
                const ele = this.page.frameLocator('iframe').locator("//h5[text()='Countdown Text']")
                expect(ele).toContainText("Countdown Text") 
 
         }

         async clickCountdownTimeRadioBtn() {
                const ele = this.page.frameLocator('iframe').locator("//input[@value='time']")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }

         async clickCountdownPointsRadioBtn() {
                const ele = this.page.frameLocator('iframe').locator("//input[@value='points']")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }

         async verifyCountdownTypeText() {
                const ele = this.page.frameLocator('iframe').locator("//h5[text()='Countdown Type']")
                expect(ele).toContainText("Countdown Type") 
 
         }

         async clickCountdownCircularRadioBtn() {
                const ele = this.page.frameLocator('iframe').locator("//input[@value='circle']")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }

         async clickCountdownLinearRadioBtn() {
                const ele = this.page.frameLocator('iframe').locator("//input[@value='linear']")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }

         async verifyQuestionSequenceText() {
                const ele = this.page.frameLocator('iframe').locator("//h5[text()='Question Sequence']")
                expect(ele).toContainText("Question Sequence") 
 
         }

         async clickCountdownRandomRadioBtn() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Random']")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }

         async clickCountdownSequenceRadioBtn() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Sequence']")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }


         async verifyAutomaticTimersText() {
                const ele = this.page.frameLocator('iframe').locator("//h5[text()='Automatic Timers']")
                expect(ele).toContainText("Automatic Timers") 
 
         }

         async verifyCountdownStageText() {
                const ele = this.page.frameLocator('iframe').locator("(//p[text()='Countdown Stage'])[2]")
                expect(ele).toContainText("Countdown Stage") 
 
         }

         async inputCountdownStageSec() {
                const ele = this.page.frameLocator('iframe').locator("(//input[@type='number'])[1]")
                expect(ele).toBeVisible()
                await ele.fill("10")
 
         }


         async verifyQuestionNoStageText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Question No. Stage']")
                expect(ele).toContainText("Question No. Stage") 
 
         }

         async inputCountdownNoStageSec() {
                const ele = this.page.frameLocator('iframe').locator("(//input[@type='number'])[2]")
                expect(ele).toBeVisible()
                await ele.fill("15")
 
         }

         
         async enableQuestionNoStage() {
                const ele = this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]")
                expect(ele).toBeVisible()
                await ele.click()
 
         }

         async verifyQuestionRevealText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Question Reveal']")
                expect(ele).toContainText("Question Reveal") 
 
         }

         async inputQuestionRevealSec() {
                const ele = this.page.frameLocator('iframe').locator("(//input[@type='number'])[3]")
                expect(ele).toBeVisible()
                await ele.fill("20")
 
         }


         async verifyPointAllocationText() {
                const ele = this.page.frameLocator('iframe').locator("//h5[text()='Point Allocation']")
                expect(ele).toContainText("Point Allocation") 
 
         }

         async inputPoint() {
                const ele = this.page.frameLocator('iframe').locator("(//input[@max='100000'])[1]")
                expect(ele).toBeVisible()
                await ele.fill("200")
 
         }

         async inputPointSec() {
                const ele = this.page.frameLocator('iframe').locator("(//input[@max='100000'])[2]")
                expect(ele).toBeVisible()
                await ele.fill("30")
 
         }

         async verifyDeductionText() {
                const ele = this.page.frameLocator('iframe').locator("//h5[text()='Deduction']")
                expect(ele).toContainText("Deduction") 
 
         }

         async verifyDeduction() {
                const ele = this.page.frameLocator('iframe').locator("//h5[text()='Deduction']")
                expect(ele).toBeVisible()
                await ele.fill("40")
 
         }

         async clickAddMediaBtn() {
                const ele = this.page.frameLocator('iframe').locator("//button[text()='Add Media']")
                expect(ele).toBeVisible()
                await ele.click()
 
         }

         async verifyAddMediaText() {
                const ele = this.page.frameLocator('iframe').locator("//h3[text()='Add Media']")
                expect(ele).toContainText("Add Media")
 
         }

         async verifyQuiestionText() {
                const ele = this.page.frameLocator('iframe').locator("(//p[text()='Question'])[2]")
                expect(ele).toContainText("Question")
 
         }

         async inputQuestionText() {
                const ele = this.page.frameLocator('iframe').locator("//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']")
                await ele.fill("In publishing and graphic design, Lorem ipsum is a placeholder")
 
         }

         async inputCountdownSec() {
                const ele = this.page.frameLocator('iframe').locator("//input[@id='P18988669402']")
                await ele.fill("40")
 
         }

         async clickMobileMediaRedioBtn() {
                const ele = this.page.frameLocator('iframe').locator("(//input[@value='image'])[1]")
                await ele.click()
 
         }

         async clickToUploadMobileMediaFile() {
                const ele = this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[1]")
                await ele.click()
 
         }

         async clickMainboardMediaRedioBtn() {
                const ele = this.page.frameLocator('iframe').locator("(//input[@value='image'])[2]")
                await ele.click()
 
         }

         async clickToUploadMainboardMediaFile() {
                const ele = this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-v2612']")
                await ele.click()
                
 
         }

         
         async clickAddMediaSaveBtn() {
                const ele = this.page.frameLocator('iframe').locator("//button[text()='SAVE']")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }

         async clickAddQuestion() {
                const ele = this.page.frameLocator('iframe').locator("//button[text()='Add Question']")
                expect(ele).toBeVisible()
                await ele.click()
 
         }

         async verifyQuestionTextInAddQuestion() {
                const ele = this.page.frameLocator('iframe').locator("(//p[text()='Question'])[2]")
                expect(ele).toContainText("Question")
                
 
         }

         async inputQuestionTextForAddQuestion() {
                const ele = this.page.frameLocator('iframe').locator("//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']")
                // expect(ele).toBeVisible()
                await ele.fill("Input Demo Question")
 
         }

         async clickToUploadQuestionImage() {
                const ele = this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-v2612']")
                expect(ele).toBeVisible()
                await ele.click()
 
         }

         async verifyAnswersText() {
                const ele = this.page.frameLocator('iframe').locator("//h5[text()='Answers']")
                expect(ele).toContainText("Answers")                
 
         }

         async clickAddAnswerBtn() {
                const ele = this.page.frameLocator('iframe').locator("//button[text()='Add Answer']")
                expect(ele).toContainText("Add Answer")
                await ele.click()                
 
         }

         async verifyAnswersTextInPopUp() {
                const ele = this.page.frameLocator('iframe').locator("(//p[text()='Answer'])[2]")
                expect(ele).toContainText("Answer")                
 
         }

         async inputAnswerText() {
                const ele = this.page.frameLocator('iframe').locator("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[2]")
                // expect(ele).toBeVisible()
                await ele.fill("Demo Text Here..")                
 
         }

         async clickToUploadAnswerImage() {
                const ele = this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-v2612']")
                expect(ele).toBeVisible()
                await ele.click()
 
         }

         async clickAnswerSaveBtn() {
                const ele = this.page.frameLocator('iframe').locator("(//button[text()='SAVE'])[2]")
                expect(ele).toBeVisible()
                await ele.click()
 
         }





         //Start Game Settings Section 
         async clickGameSettings() {
                await this.page.frameLocator('iframe').locator("//p[text()='Game Settings']").last().click()

        }

        async verifyGameSettingsText() {
                const ele = this.page.frameLocator('iframe').locator("//h4[text()='Game Settings']")
                expect(ele).toContainText("Game Settings")
                
 
         }

         async verifyGameTitleText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Game Title']")
                expect(ele).toContainText("Game Title")
                
 
         }
         

         async inputGameTitle() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]")
                expect(ele).toBeVisible()
                await ele.fill("Auto Game Title")
 
         }


         async verifyCountdownTitleText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Countdown Title']")
                expect(ele).toContainText("Countdown Title")
                
 
         }
         async inputGameCountdownTitle() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]")
                expect(ele).toBeVisible()
                await ele.fill("Auto Countdown Title")
 
         }

         async verifyLeaderboardTitleText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Leaderboard Title']")
                expect(ele).toContainText("Leaderboard Title")
                
 
         }
         async inputLeaderboardTitle() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]")
                expect(ele).toBeVisible()
                await ele.fill("Auto Leaderboard Title")
 
         }

         async verifyAlignmentsTitleText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Alignments']")
                expect(ele).toContainText("Alignments")
                
 
         }

         async verifyGameTitleAlignmentText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Game Title Alignment']")
                expect(ele).toContainText("Game Title Alignment")
                
 
         }

         async clickGameTitleAlignmentLeftBtn() {
                const ele = this.page.frameLocator('iframe').locator("(//h6[text()='Left'])[1]")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }

         async clickGameTitleAlignmentRightBtn() {
                const ele = this.page.frameLocator('iframe').locator("(//h6[text()='Right'])[1]")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }

         
         async clickGameTitleAlignmentCenterBtn() {
                const ele = this.page.frameLocator('iframe').locator("(//h6[text()='Center'])[1]")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }


         async verifyLogoImageAlignmentText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Logo Image Alignment']")
                expect(ele).toContainText("Logo Image Alignment")
                
 
         }

         async clickLogoImageAlignmentLeftBtn() {
                const ele = this.page.frameLocator('iframe').locator("(//h6[text()='Left'])[2]")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }

         async clickLogoImageAlignmentRightBtn() {
                const ele = this.page.frameLocator('iframe').locator("(//h6[text()='Right'])[2]")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }

         
         async clickLogoImageAlignmentCenterBtn() {
                const ele = this.page.frameLocator('iframe').locator("(//h6[text()='Center'])[2]")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }

         async verifyGameCountdownAlignmentText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Countdown Alignment']")
                expect(ele).toContainText("Countdown Alignment")
                
 
         }

         async clickGameCountdownAlignmentLeftBtn() {
                const ele = this.page.frameLocator('iframe').locator("(//h6[text()='Left'])[3]")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }

         async clickGameCountdownAlignmentRightBtn() {
                const ele = this.page.frameLocator('iframe').locator("(//h6[text()='Right'])[3]")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }

         
         async clickGameCountdownAlignmentCenterBtn() {
                const ele = this.page.frameLocator('iframe').locator("(//h6[text()='Center'])[3]")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }


         async verifyGameMainboardCountdownText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Mainboard Countdown']")
                expect(ele).toContainText("Mainboard Countdown")
                
 
         }

         async clickGameMainboardCountdownBottomBtn() {
                const ele = this.page.frameLocator('iframe').locator("//h6[text()='Bottom']")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }

         async clickGameMainboardCountdownTopBtn() {
                const ele = this.page.frameLocator('iframe').locator("//h6[text()='Top']")
                expect(ele).toBeVisible()
                await ele.click({force:true})
 
         }

         async verifyGameAnswerShapeText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Answer Shape']")
                expect(ele).toContainText("Answer Shape")
                
 
         }


         async clickToEnableAnswerShape() {
                const ele = this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[1]")
                expect(ele).toBeVisible()
                await ele.click({force:true})
                
 
         }

         async verifyGameSelectedAnswerGradientText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Selected Answer Gradient']")
                expect(ele).toContainText("Selected Answer Gradient")
                
 
         }


         async clickToEnableSelectedAnswerGradient() {
                const ele = this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[2]")
                expect(ele).toBeVisible()
                await ele.click({force:true})
                
 
         }

         async verifyGameAnswerDisplayButtonText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Answer Display Button']")
                expect(ele).toContainText("Answer Display Button")
                
 
         }


         async clickToEnableAnswerDisplayButton() {
                const ele = this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[3]")
                expect(ele).toBeVisible()
                await ele.click({force:true})
                
 
         }

         async verifyGameQuestionTextBackgroundText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Question Text Background']")
                expect(ele).toContainText("Question Text Background")
                
 
         }


         async clickToEnableQuestionTextBackground() {
                const ele = this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[4]")
                expect(ele).toBeVisible()
                await ele.click({force:true})
                
 
         }


         async verifyGameAnswerTextBackgroundText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Answer Text Background']")
                expect(ele).toContainText("Answer Text Background")
                
 
         }


         async clickToEnableAnswerTextBackground() {
                const ele = this.page.frameLocator('iframe').locator("(//input[@type='checkbox'])[5]")
                expect(ele).toBeVisible()
                await ele.click({force:true})
                
 
         }

         async verifyPreGameHeadingText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Pre Game Heading']")
                expect(ele).toContainText("Pre Game Heading")
                
 
         }


         async inputPreGameHeading() {
                const ele = this.page.frameLocator('iframe').locator("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[1]")
                // expect(ele).toBeVisible()
                await ele.fill("Demo Data For PreGameHeading..")
                
 
         }

         async verifyPreGameMassageText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Pre Game Message']")
                expect(ele).toContainText("Pre Game Message")
                
 
         }


         async inputPreGameMassage() {
                const ele = this.page.frameLocator('iframe').locator("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[2]")
                // expect(ele).toBeVisible()
                await ele.fill("Demo Data For PreGameHeading..")
                
 
         }

         
         async verifyPostGameMassageText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Post Game Message']")
                expect(ele).toContainText("Post Game Message")
                
 
         }


         async inputPostGameMassage() {
                const ele = this.page.frameLocator('iframe').locator("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[3]")
                // expect(ele).toBeVisible()
                await ele.fill("Demo Data For PreGameHeading..")
                
 
         }

         async verifyGameWinningMassageText() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Winning Message']")
                expect(ele).toContainText("Winning Message")
                
 
         }


         async inputGameWinningMassage() {
                const ele = this.page.frameLocator('iframe').locator("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[4]")
                // expect(ele).toBeVisible()
                await ele.fill("Demo Data For Game Winning Massage..")
                
 
         }


         async clickToUploadGameFont() {
                const ele = this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[1]")
                expect(ele).toBeVisible()
                await ele.click()
                
 
         }

         
         async clickToUploadMarketingMassageFile() {
                const ele = this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[7]")
                expect(ele).toBeVisible()
                await ele.click()
                
 
         }

         async clickToUploadMainboardBackgroundFile() {
                const ele = this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[6]")
                expect(ele).toBeVisible()
                await ele.click()
                
 
         }

         async clickToUploadTeamLogoFile() {
                const ele = this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[5]")
                expect(ele).toBeVisible()
                await ele.click()
                
 
         }

         async clickToUploadMobileBackgroundFile() {
                const ele = this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[4]")
                expect(ele).toBeVisible()
                await ele.click()
                
 
         }

         async clickToUploadGameTitleFile() {
                const ele = this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-v2612'])[3]")
                expect(ele).toBeVisible()
                await ele.click()
                
 
         }




         async clickAnalyticsSection() {
              await this.page.frameLocator('iframe').locator("//p[text()='Analytics']").last().click()

      }





      async clickGameDeleteBtn() {
       await this.page.frameLocator('iframe').locator("//p[text()='Delete']").last().click()

}


async clickDeleteBtn() {
       await this.page.frameLocator('iframe').locator("//button[text()='Delete']").click({force:true})

}







}

