import { expect, Page } from "@playwright/test";
import { existsSync, readFileSync } from 'fs'
export default class triviaPage {
        // [x: string]: any;

        private page: Page;
        // static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }
        private triviaPageElements = {
                configurationText : "//h5[text()='Configurations']",
                triviaSestion : "//p[text()='Trivia']",
                plusbutton : "(//h5[text()='Configurations']/following-sibling::button)[1]",
                inputConfigrationsName : "(//input[@id='P0-0'])[2]",
                addConfigurationBtn : "//button[text()='ADD']",
                newConfigrationText : '//p[text()="New Configuration"]',
                cancelConfigrationBtn : "//button[text()='CANCEL']",
                withoutdata : "(//div[@class='MuiDialogContent-root css-3n2qrj'])[2]",
                startBtn : "//button[text()='Start']",
                okBtn : "//button[text()='Ok']",
                RounderrorMessage: '//div[@class="MuiDialogContent-root css-3n2qrj"]',
                mobileLinkBtn : '//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium  css-1ctg0j5"]',
                MobileLinkPopupClose : "//div[@class='MuiBox-root css-1xnxzwa']",
                mobileLinkText: "//h2[contains(@class,'MuiTypography-root MuiTypography-h6')]",
                mobileLinkOpenBtn: '//a[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium css-1oge9gb"]',
                mobileLinkCopyBtn : "//button[@aria-label='Copy Link']",
                errorMessageIfCongigrationfieldIsBlank:"//p[text()='Please input more than 3 characters']",
                mobileLinkQRCode: '//div[@class="MuiDialogContent-root css-9tte1s"]',
                saveQRCode : "//button[text()='Save QR Code']",
                copyQRcodeBtn: "//button[text()='Copy QR Code']",
                gamedesignSection : '//p[text()="Game Design"]',
                fontsSection : '//p[text()="Fonts"]',
                fontsText : "//h4[text()='Fonts']",
                uploadFontsText: '//p[text()="Upload Font"]',
                fontsUploadBtn:'//div[@class="MuiBox-root css-v2612"]',
                waitforFontUpload : "//div[@font-list-mode='true']",
                addRoundBtn : "//button[text()='Add Round']",
                controlPanelSection:'//p[text()="Control Panel"]',
                inputAddRoundfield:"//input[@id='P0-0']",
                roundNameThreeDot : "//button[@isactive='true']",
                editRoundName : "//p[text()='Edit']",
                EDITROUNDText: "//p[text()='EDIT ROUND']",
                saveBtn : "//button[text()='Save']",
                RoundNameText : "//div[text()='Round Name']",
                EditRoundNameCancelBtn : "//button[text()='Cancel']",
                roundingChangeCheckbox: "//p[text()='Round Chaining']",
                outputBtn:"//button[text()='Output']",
                OutputScreenLinkText:"//h2[text()='Output Screen Link']",
                OutputScreenOpenLinkBtn:"//a[@aria-label='Open Link']",
                OutputScreenLinkCopyBtn:"//button[@aria-label='Copy Link']",
                OutputScreenLinkCloseBtn:"//div[@class='MuiBox-root css-1xnxzwa']",
                setupText : "//h5[text()='Set-up']",
                countdownStageText:"//p[text()='Countdown Stage']",
                questiontext:"//p[text()='Question Text']",
                answerText:"//p[text()='Answer']",
                leaderboardText:"//p[text()='Leaderboard']",
                movetoNextBtn:"//button[text()='Move to Next Stage']",
                gamemodeText:"//h5[text()='Game Mode']",
                manualText:"//p[text()='Manual']",
                automaticText:"//p[text()='Automatic']",
                ondemandText:"//p[text()='On-Demand']",
                automaticTimersText:"//h5[text()='Automatic Timers']",
                countdownstageText: "//div[text()='Countdown Stage']",
                inputCountdownStagefield:'(//input[@type="number"])[1]',
                leaderboarddurationText:'(//div[@class="MuiBox-root css-1ibv0se"])[4]',
                inputLeaderboardDurationfield:'(//input[@type="number"])[4]',
                PointAllocationText:"//h5[text()='Point Allocation']",
                inputPointsfield:'(//input[@type="number"])[5]',
                selectPointsFirstvalue:"//p[text()='500']",
                selectPointsSecondvalue:"//p[text()='100']",
                selectPointsThirdvalue:"(//p[text()='60'])[1]",
                selectPointsFourthvalue:"(//p[text()='30'])[1]",
                countdowntextText:"//h5[text()='Countdown Text']",
                countdownTextRadio_Time:"//input[@value='time']",
                countdownTextRadio_Points:"//input[@value='points']",
                countdownTypeText:"//h5[text()='Countdown Type']",
                countdownTypeRadio_Circular:"//input[@value='circle']",
                countdownTypeRadio_Lenear:"//input[@value='linear']",
                QuestionSecquenceText:"//h5[text()='Question Sequence']",
                QuestionSequenceRandomBtn:"//h5[text()='Question Sequence']",
                QuestionsequenceSequenceBtn:"//p[text()='Sequence']",
                LeaderboardEventBtn:"//button[@value='event']//p[1]",
                LeaderboardRoundBtn:"//button[@value='round']//p[1]",
                ErrorMessageInCountdownStage:"//div[@class='MuiDialogContent-root css-3n2qrj']//p[1]",
                inputCountdownStage:'(//input[@type="number"])[1]',
                inputQuestionNoStage:'(//input[@type="number"])[2]',
                inputQuestionReveal:'(//input[@type="number"])[3]',
                inputInpointsAllocationPointsfield:'(//input[@type="number"])[5]',
                inputInpointsAllocationSecondsfield:'(//input[@type="number"])[6]',
                errorMessageInPointsAllocation:"//p[text()='Wrong value, limit 9999']",
                ExportBtn:"//button[text()='Export']",
                ExportConfirmBtn:"(//button[text()='Export'])[2]",
                errorMessageExportBtn:"//p[text()='This round has no questions!']",
                faileExport:"//p[text()='Failed to Export!']",
                AddQuestionBtn:"//button[text()='Add Question']",
                AddQuestionText:"(//h3[contains(@class,'MuiTypography-root MuiTypography-h3')])[1]",
                CustomQuestionTypeText:"(//h3[contains(@class,'MuiTypography-root MuiTypography-h3')])[2]",
                addquestionCloseBtn:"//div[@class='MuiBox-root css-1xnxzwa']",
                freeResponseRadioBtn:"(//input[@name='P0-0'])[1]",
                multipleChoiceRadioBtn:"(//input[@name='P0-0'])[2]",
                addMediaBtn:"//button[text()='Add Media']",
                AddmediaText:"//h3[text()='Add Media']",
                mobilemediaImageRadioBtn:"(//input[@value='image'])[1]",
                mobilemediaVideoRadioBtn:"(//input[@value='video'])[1]",
                mainboardmediaImageRadioBtn:"(//input[@value='image'])[2]",
                mainboardmediaVideoRadioBtn:"(//input[@value='video'])[2]",
                mobileMediaText:"//h5[text()='Mobile Media']",
                mainboardMediaText:"//h5[text()='Mainboard Media']",
                inputQuestion:"(//div[@class='notranslate public-DraftEditor-content'])[1]",
                addCorrectAnswerBtn:"(//button[text()='Add Answer'])[1]",
                addAccetableAnswerBtn:"(//button[text()='Add Answer'])[2]",
                inputCorrectAnswer:"(//div[@class='notranslate public-DraftEditor-content'])[2]",
                inputAcceptableAnswer:"(//div[@class='notranslate public-DraftEditor-content'])[2]",
                addQuestionSaveBtn:"//button[text()='SAVE']",
                correctAnswerSaveBtn:"(//button[text()='SAVE'])[2]",
                acctableAnswerSaveBtn:"(//button[text()='SAVE'])[2]",
                liveBtn:"//button[text()='Live']",
                addAnswerBtn:"//button[text()='Add Answer']",
                inputforMultipleChoiceAnswer:"(//div[@class='notranslate public-DraftEditor-content'])[2]",
                multipleChoiceSaveBtn:"(//button[text()='SAVE'])[2]",
                answerSaveBtn:"(//button[text()='SAVE'])[2]",
                addQuestionUploadMobileMediaImageOrVideoBtn:'(//div[@class="MuiBox-root css-v2612"])[1]',
                addQuestionUploadMainboardMediaImageOrVideoBtn:"(//div[@class='MuiBox-root css-v2612'])[2]",
                fileChooseBtn:"//button[text()='Choose File']",
                exportBtn:"//button[text()='Export']",
                uploadGameTitleLogoBtn:'(//div[@class="MuiBox-root css-v2612"])[1]',
                uploadTeamLogoBtn:'(//div[@class="MuiBox-root css-v2612"])[2]',
                uploadSponsorLogoBtn:'(//div[@class="MuiBox-root css-v2612"])[3]',
                uploadMainboardBackgroundBtn:"(//div[@class='MuiBox-root css-78n4oq'])[2]",
                uploadMobileBackgroundBtn:"(//div[@class='MuiBox-root css-78n4oq'])[2]",
                UploadsAndDialogsBtn:"(//div[@class='MuiBox-root css-16eo6ym'])[3]",
                colorsSection:"(//div[@class='MuiBox-root css-16eo6ym'])[1]",
                backgroundColorBtn:"(//div[@class='MuiBox-root css-1e91icv'])[1]",
                MobileBackgroundTextInColorSection:"(//div[@class='MuiBox-root css-freu3i']//p)[1]",
                GeneralOrButtonText:"//p[text()='General/Button Text']",
                inputRGBFirst:"(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]",
                inputRGBSecond:"(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]",
                inputRGBThird:"(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]",
                inputRGBFourth:"(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]",
                inputHexColor:"//div[@class='MuiBox-root css-zfy2p9']/following-sibling::input[1]",
                mobiliBackgroundBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[1]",
                GeneralOrButtoncolorBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[2]",
                buttonBackgroundcolor:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[3]",
                questionTextBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[4]",
                AnswerTextBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[5]",
                QuestionBackgroundBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[6]",
                AnswerBackgroundBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[7]",
                QuestionFrameBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[8]",
                AnswerFrameBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[9]",
                SelectedAnswerColorBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[10]",
                CorrectAnswerColorBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[11]",
                IncorrectAnswerColorBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[12]",
                LeaderboardTextColorBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[13]",
                LeaderboardBackgroundColorBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[14]",
                LeaderboardFrameBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[15]",
                LeaderboardAccentBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[16]",
                UserTopTenrankBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[17]",
                countdownAnnimationfillBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[18]",
                TileCountdownBackgroundBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[19]",
                TileCountdownFrameBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[20]",
                PointBubbleFillBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[21]",
                PointBubbleStrokeBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[22]",
                PointBubbleTextBtn:"(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[23]",
                GameTitleText:"//h5[text()='Game Title']",
                TeamLogoText:"//h5[text()='Game Title']",
                SponsorLogoTex:"//h5[text()='Sponsor Logo']",
                MainboardBackgroundText:"//h5[text()='Mainboard Background']",
                MobileBackgroundText:"//h5[text()='Mobile Background']",
                ButtonBackgroundText:"//p[text()='Button Background']",
                QuestionText:"//p[text()='Question Text']",
                AnswerText:"//p[text()='Answer Text']",
                QuestionBackgroundText:"//p[text()='Question Background']",
                AnswerBackgroundText:"//p[text()='Answer Background']",
                QuestionFrameText:"//p[text()='Question Frame']",
                AnswerFrameText:"//p[text()='Answer Frame']",
                SelectedAnswerText:"//p[text()='Selected Answer']",
                CorrectAnswerText:"//p[text()='Correct Answer']",
                IncorrectAnswerText:"//p[text()='Incorrect Answer']",
                LeaderboardTextIncolorSection:"//p[text()='Leaderboard Text']",
                LeaderboardBackgroundTextInColorSection:"//p[text()='Leaderboard Background']",
                countdownAnnimationfillText:"//p[text()='Countdown Animation Fill']",
                TileCountdownBackgroundText:"//p[text()='Tile/Countdown Background']",
                TileCountdownFrameText:"//p[text()='Tile/Countdown Frame']",
                PointBubbleFillText:"//p[text()='Point-Bubble Fill']",
                LeaderboardFrameText:"//p[text()='Leaderboard Frame']",
                LeaderboardAccentText:"//p[text()='Leaderboard Accent']",
                PointBubbleStrokeText:"//p[text()='Point-Bubble Stroke]",
                PointBubbleText:"//p[text()='Point-Bubble Text]",
                deleteTeamLogoBtn:"(//button[@title='Delete']//div)[2]",
                deleteSponsorLogo:"(//button[@title='Delete']//div)[3]",
                deletemainboardBackground:"(//button[@title='Delete']//div)[4]",
                deleteMobileBackground:"(//button[@title='Delete']//div)[5]",
                deletegameTitleBtn:"(//button[@title='Delete']//div)[1]",
                clearAllBtn:"//button[text()='Clear All']",
                solidRGB:"//li[text()='Solid']",
                diagonalRGB:"//div[text()='Diagonal']",
                colorListBox:'//div[@aria-haspopup="listbox"]',
                //userTopTenRankText:'//p[text()="User's Top 10 Rank"]'
                
                
        }



        //=======================================================
        //▶▶Start Title Stage Section Element       


        // async clickTriviaSection() {

        //     const [ page ] = await Promise.all([
        //           // Start waiting for the download
        //           this.page.waitForEvent('load'),
        //           // Perform the action that initiates download
        //           this.page.locator("//p[text()='Trivia']").click({force:true}),
        //         ]);


        //     //     const locator = this.page.locator("//p[text()='Trivia']")
        //     //     expect(locator).toContainText('Trivia')
        //     //     await locator.click({force:true})
        //     //     // console.log("Successfully Click To Tug of War Page ")
        // }
        async verifyMobileBackgroundTextInColorSection(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.MobileBackgroundTextInColorSection).textContent()
                if((ele === "Mobile Background")){
                      // console.log("hellow")
                       //expect(this.page.frameLocator('iframe').locator(this.triviaPageElements.newConfigrationText)).toContainText("New Configuration")
                }
                else throw new Error("Trivia Background Color text is not visible")
              }
        async verifyGeneralOrButtonText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.GeneralOrButtonText).textContent()
                if((ele === "General/Button Text")){
                      // console.log("hellow")
                       //expect(this.page.frameLocator('iframe').locator(this.triviaPageElements.newConfigrationText)).toContainText("New Configuration")
                }
                else throw new Error("Trivia General/Button Text text is not visible in color section")
              }
              async verifyButtonBackgroundText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.ButtonBackgroundText).textContent()
                if((ele === "Button Background")){
                      // console.log("hellow")
                       //expect(this.page.frameLocator('iframe').locator(this.triviaPageElements.newConfigrationText)).toContainText("New Configuration")
                }
                else throw new Error("Trivia Button Background Text is not visible in color section")
              }
              async verifyQuestionTextIncolorSectio(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.QuestionText).textContent()
                if((ele === "Question Text")){
                      // console.log("hellow")
                       //expect(this.page.frameLocator('iframe').locator(this.triviaPageElements.newConfigrationText)).toContainText("New Configuration")
                }
                else throw new Error("Trivia Question Text Text is not visible in color section")
              }
       
        async verifyGameTitleText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.GameTitleText).textContent()
                if((ele === "Game Title")){
                      // console.log("hellow")
                       //expect(this.page.frameLocator('iframe').locator(this.triviaPageElements.newConfigrationText)).toContainText("New Configuration")
                }
                else throw new Error("New Configration text is not visible")
              }
        async verifyTeamLogoText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.TeamLogoText).textContent()
                if((ele === "Team Logo")){
             
                }
                else throw new Error("Team Logo text is not visible")
              }
        async verifySponsorLogoText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.SponsorLogoTex).textContent()
                if((ele === "Sponsor Logo")){
             
                }
                else throw new Error("Trivia Sponsor Logo text is not visible")
              }
        async verifyMainboardBackgroundText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.MainboardBackgroundText).textContent()
                if((ele === "Mainboard Background")){
             
                }
                else throw new Error("Trivia Mainboard Background text is not visible")
              }
        async verifyMobileBackgroundText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.MobileBackgroundText).textContent()
                if((ele === "Mobile Background")){
             
                }
                else throw new Error("Trivia Mobile Background text is not visible")
              }
        
       async verifyNewConfigrationText(){
         const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.newConfigrationText).textContent()
         if((ele === "New Configuration")){
               // console.log("hellow")
                //expect(this.page.frameLocator('iframe').locator(this.triviaPageElements.newConfigrationText)).toContainText("New Configuration")
         }
         else throw new Error("New Configration text is not visible")
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
                const ele = await  this.page.frameLocator('iframe').locator(this.triviaPageElements.plusbutton).isVisible()
                if(ele == true){
                        await  this.page.frameLocator('iframe').locator(this.triviaPageElements.plusbutton).click()
                }
                else throw new Error("Plus button is not visible")

        }
        async verifyAddNewConfigPlusWindowText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='New Configuration']")
                expect(ele).toContainText("New Configuration")

        }


        async typeConfigurationName(name : string) {
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.inputConfigrationsName)
                if(ele != null){
                  expect(ele).toBeVisible()
                  this.page.waitForTimeout(1000)
                  await ele.type(name)
                }
                else throw new Error("Configration input field is not visible")

        }

        async clickAddBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='ADD']")
                expect(ele).toBeVisible()
                await ele.click()

        }
        async clickAddConfigrationBtn() {
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.addConfigurationBtn)
                if( ele != null){
                        expect(ele).toBeVisible()
                        await ele.click()
                }
                else throw new Error("Add configration button is not visible")
        }
        async clickCancelConfigrationBtn() {
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.cancelConfigrationBtn)
                if( ele != null){
                        expect(ele).toBeVisible()
                        await ele.click()
                }
                else throw new Error("Cancel configration button is not visible")
                

        }
        // async verifyErrorMessage(){
        //         const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.blankconfigrationfield)
        //         if(ele != null){
        //           expect(ele).toBeVisible()
        //           expect(ele).toContainText("Please input more than 3 characters")
        //         }
        //         else throw new Error("Without type data configuration add button is working")

        // }


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
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Clear All']").isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator("//button[text()='Clear All']").click({force:true})
                }
              else throw new Error("Trivia game page clear all button is not visible")
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
       
     
        // async clickLiveBtn(){
        //         const ele = this.page.frameLocator('iframe').locator(this.triviaPageElements.liveBtn)
        //         if(ele != null){
        //                 expect(ele).toBeVisible()
        //                 await ele.first().click()
        //         }
        //         else throw new Error("Live button is not visible")
        // }
        async verifyRoundError(){
                const ele = this.page.frameLocator('iframe').locator(this.triviaPageElements.RounderrorMessage)
                       expect(ele.first()).toContainText("Please create a round")
                
        }
     
        // async clickMobileLinkCloseBtn(){
        //         const ele = this.page.frameLocator('iframe').locator(this.triviaPageElements.mobileLinkCloseBtn)
        //         if(ele != null){
        //                 expect(ele.last()).toBeVisible()
        //                 await ele.last().click()
        //         }
        //         else throw new Error("Mobile link close button is not visible")
        // }
 
        async clickStartBtn(){
                const ele1 =  await this.page.frameLocator('iframe').locator(this.triviaPageElements.liveBtn).last().isVisible()
                if(ele1 == true ){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.liveBtn).last().click()
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.okBtn).last().click()
                        await this.page.waitForTimeout(1000)
                        const ele =  await this.page.frameLocator('iframe').locator(this.triviaPageElements.startBtn).last().isVisible()
                        if(ele == true ){
                                await this.page.frameLocator('iframe').locator(this.triviaPageElements.startBtn).last().click()
                                await this.page.waitForTimeout(2000)
                        }
                        else throw new Error("Start button is not visible")
                        
                }
                else{
                        const ele =  await this.page.frameLocator('iframe').locator(this.triviaPageElements.startBtn).last().isVisible()
                        if((ele == true)){
                            
                           await this.page.frameLocator('iframe').locator(this.triviaPageElements.startBtn).last().click()
                           await this.page.waitForTimeout(2000)
                        }
                        else throw new Error("Start button is not visible")

                }
       
}
        async clickOkBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.okBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.okBtn).click()
                }
                else throw new Error("Ok button is not visible")
        }
        async inputCountDownSecond(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputCountdownStagefield).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputCountdownStagefield).click()
                }
                else throw new Error("Ok button is not visible")
        }
        async errorMessageIfRoundIsNotCreated(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.RounderrorMessage)
                if(ele != null){
                expect(ele).toContainText("Please create a round")
                }
                else throw new Error("Error message is not visible")
        }
        async clickMobileLinkBtn(){
                await this.page.waitForTimeout(2000)
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.mobileLinkBtn)
                if(ele != null){
                // expect(ele.last()).toBeVisible()
                ele.last().click()
                }
                else throw new Error("Mobile Link button is not visible")
        }
        async clickMobileLinkPopupClose(){
                await this.page.waitForTimeout(2000)
                const ele =  await this.page.frameLocator('iframe').locator(this.triviaPageElements.MobileLinkPopupClose).isVisible()
              if(ele == true){
                     await  this.page.frameLocator('iframe').locator(this.triviaPageElements.MobileLinkPopupClose).click()
              }
                
                
        }
        async verifyMobileLinkText(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.mobileLinkText)
                if(ele != null){
                expect(ele).toContainText("Mobile Link")
                }
                else throw new Error("Mobile Link text is not visible")
        }
        async clickMobileLinkOpenBtn() {

                // Click text=Open Link
                const [page1] = await Promise.all([
                        this.page.waitForEvent('popup'),
                        this.page.frameLocator('iframe').locator(this.triviaPageElements.mobileLinkOpenBtn).click()
                ]);

                return page1;


        }
        async clickMobileLinkCopyBtn(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.mobileLinkCopyBtn)
                if(ele != null){
                expect(ele).toBeVisible()
                await ele.click()
                }
                else throw new Error("Mobile Link copy button is not visible")
        }
        async verifyerrorMessageIfCongigrationfieldIsBlank(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.errorMessageIfCongigrationfieldIsBlank)
                if(ele != null){
                        expect(ele).toContainText("Please input more than 3 characters")
                }
                else throw new Error("Error message is not shown")

        }
        async vreifymobileLinkQRCode(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.mobileLinkQRCode)
                if(ele != null){
                        expect(ele).toBeVisible()
                }
                else throw new Error("Mobile link QR Code is not visible")
        }
        async validateSaveQRCode(){
                const [download] = await Promise.all([
                        this.page.waitForEvent('download'),
                        this.page.frameLocator('iframe').locator(this.triviaPageElements.saveQRCode).click()
        ])
        const suggestedFileName = download.suggestedFilename()
        const filePath = 'QRCode' + suggestedFileName
        await download.saveAs(filePath)
        expect(existsSync(filePath)).toBeTruthy()
        }

        async clickCopyQRCodeBtn(){
        const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.copyQRcodeBtn)
                if(ele != null){
                        expect(ele).toBeVisible()
                await ele.click()
                }
        }
        async clickgamedesignSection(){
                const ele =  await this.page.frameLocator('iframe').locator(this.triviaPageElements.gamedesignSection).last().click()
          
        }
        async verifygamedesignText(){
                const ele =  await this.page.frameLocator('iframe').locator(this.triviaPageElements.gamedesignSection).last()
                expect(ele).toContainText("Game Design")
                
                 
        }
        async clickfontsSection(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.fontsSection)
                if(ele != null){
                        expect(ele.last()).toBeVisible()
                await ele.last().click()
                }
                else throw new Error("Fonts section is not visible")
        }
        async verifyFontsText(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.fontsText)
                if(ele != null){
                        expect(ele).toContainText("Fonts")
                }
                else throw new Error("Fonts text is not visible")
        }
        async verifyUploadFontText(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.uploadFontsText)
                if(ele != null){
                        expect(ele).toContainText("Upload Font")
                }
                else throw new Error("Upload Font text is not visible")
        }

        async clickUploadFontBtn(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.fontsUploadBtn)
                if(ele != null){
                        expect(ele).toBeVisible()
                        await ele.click()
                }
                else throw new Error("Upload Font button  is not visible")
        }
        async verifySuccessfullyUploadFont(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.waitforFontUpload)
                if(ele != null){
                        expect(ele).toBeVisible()
                        await ele.click()
                }
                else throw new Error("Font is not successfully upload")
        }
        async clickControlPanelSection(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.controlPanelSection).last()
                if(ele != null){
                        await ele.last().click()
                }
                else throw new Error("Control Panel Section is not visible")
               // await this.page.waitForLoadState('networkidle')
        }
        async clickAddRoundBtn(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.addRoundBtn)
                if(ele != null){
                        expect(ele).toBeVisible()
                        await ele.click()
                }
                else throw new Error("Add round button  is not visible")
        }
        async inputAddRoundName(RoundName : string){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.inputAddRoundfield)
                if(ele != null){
                        expect(ele).toBeVisible()
                        await ele.type(RoundName)
                }
                else throw new Error("Add round input field  is not visible")
        }
        async clickRoundNameThreeDot(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.roundNameThreeDot)
                if(ele != null){
                        expect(ele).toBeVisible()
                await ele.click()
                }
                else throw new Error("round name three dot is not visible")
        }
        async ClickeditRoundName(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.editRoundName)
                if(ele != null){
                        expect(ele.first()).toBeVisible()
                await ele.first().click()
                
                }
                else throw new Error("Edit round is not visible")
        }
        async EditRoundName(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.inputAddRoundfield)
                if(ele!= null){
                        await ele.focus();
                        await this.page.keyboard.press("Meta+A");
                        await this.page.keyboard.press('Backspace');
                }
        }
        async InputEditRoundName(roundName : string){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.inputAddRoundfield)
                if(ele!= null){
                        expect(ele).toBeVisible()
                await ele.type(roundName)
                }
        }
        async clickSaveBtn(){
                const ele =  await this.page.frameLocator('iframe').locator(this.triviaPageElements.saveBtn).isVisible()
                if(ele != null){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.saveBtn).click({force:true})
                        await this.page.waitForTimeout(1000)
        
                }
                else throw new Error("Save button is not visible")
        }
        async verifyEDITROUNDText(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.EDITROUNDText)
                if(ele!= null){
                        expect(ele).toContainText("EDIT ROUND!")
                }
                else throw new Error("EDIT ROUND! Text is not visible")
        }
        async verifyRoundNameText(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.RoundNameText)
                if(ele!= null){
                        expect(ele).toContainText("Round Name")
                }
                else throw new Error("Round Name Text is not visible")
        }
        async clickEditRoundNameCancelBtn(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.EditRoundNameCancelBtn)
                if(ele!= null){
                expect(ele).toBeVisible()
                await ele.click()

                }
                else throw new Error("Round Name cancel button is not visible")
        }
        async ClickRoundChangingCheckbox(){
                const ele =  await this.page.frameLocator('iframe').locator(this.triviaPageElements.roundingChangeCheckbox).isVisible()
                if(ele == true){
                await this.page.frameLocator('iframe').locator(this.triviaPageElements.roundingChangeCheckbox).click()

                }
                else throw new Error("Round changing checkbox is not visible")
        }
        getRandomName() {
                return "Auto" + Date.now() + "Config"
        }
        getRandomNameForRoundName() {
                return "Auto" + Date.now() + "Round"
        }

        async clickOutputBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.outputBtn).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.outputBtn).click()
                }
                else throw new Error("Output Screen Link button is not visible")

        }
        async verifyOutputScreenLinkText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.OutputScreenLinkText).textContent()
                if( ele === "Output Screen Link"){

                }
                else throw new Error('Output Screen Link text is not visible')
        }
        async clickOutputScreenLinkOpenBtn(){

                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.OutputScreenOpenLinkBtn).isVisible()
                if( ele == true){
                        // Click text=Open Link
                const [page1] = await Promise.all([
                        this.page.waitForEvent('popup'),
                await this.page.frameLocator('iframe').locator(this.triviaPageElements.OutputScreenOpenLinkBtn).click()
                ]);

                return page1;

                        //await this.page.frameLocator('iframe').locator(this.triviaPageElements.OutputScreenOpenLinkBtn).click()
                }
                else throw new Error("Output screen link open button is not visible")

        }
        async clickOutputScreenLinkCloseBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.OutputScreenLinkCloseBtn).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.OutputScreenLinkCloseBtn).click()
                }
                else throw new Error("Output Screen Link close button is not visible")
        }
        async clickOutputScreenLinkCopyBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.OutputScreenLinkCopyBtn).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.OutputScreenLinkCopyBtn).click()
                }
                else throw new Error("Output Screen Link copy button is not visible")
        }
        async verifySetUpText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.setupText).textContent()
                if((ele === "Set-up")){
                      // console.log("hellow")
                       //expect(this.page.frameLocator('iframe').locator(this.triviaPageElements.newConfigrationText)).toContainText("New Configuration")
                }
                else throw new Error("Set-Up text is not visible")
              }
        async verifyCountDownStageText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.countdownStageText).textContent()
                if((ele === "Countdown Stage")){

                }
                else throw new Error("Countdown Stage text is not visible")
              }
        async verifyQuestionText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.questiontext).textContent()
                if((ele === "Question Text")){
                     
                }
                else throw new Error("Question text is not visible")
              }
              async verifyQuestionBackgroundText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.QuestionBackgroundText).textContent()
                if((ele === "Question Background")){
                     
                }
                else throw new Error("Question Background text is not visible")
              }
        async verifyAnswerBackgroundText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.AnswerBackgroundText).textContent()
                if((ele === "Answer Background")){
                     
                }
                else throw new Error("Question Background text is not visible")
              }
              async verifyTileCountDownFrameText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.TileCountdownFrameText).textContent()
                if((ele === "Tile/Countdown Frame")){
                     
                }
                else throw new Error("Trivia Tile/Countdown Frame text is not visible in color section")
              }
        async verifyQuestionFrameText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.QuestionFrameText).textContent()
                if((ele === "Question Frame")){
                     
                }
                else throw new Error("Question Frame text is not visible")
              }
        async verifyPointBubbleFillText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.PointBubbleFillText).textContent()
                if((ele === "Point-Bubble Fill")){
                     
                }
                else throw new Error("Trivia Point-Bubble Fill text is not visible in color section")
              }
        async verifyAnswerFrameText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.AnswerFrameText).textContent()
                if((ele === "Answer Frame")){
                     
                }
                else throw new Error("Trivia Answer Frame text is not visible in color section")
              }
        async verifySelectedAnswerText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.SelectedAnswerText).textContent()
                if((ele === "Selected Answer")){

                }
                else throw new Error("Trivia Selected answer text is not visible in color section")
              }
        async verifyCorrectAnswerText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.CorrectAnswerText).textContent()
                if((ele === "Correct Answer")){

                }
                else throw new Error("Trivia Correct answer text is not visible in color section")
              }
              
        async verifyIncorrectAnswerText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.IncorrectAnswerText).textContent()
                if((ele === "Incorrect Answer")){

                }
                else throw new Error("Trivia Incorrect answer text is not visible in color section")
              }
        async verifyLeaderboardBackgroundtextTextIncolorSection(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.LeaderboardBackgroundTextInColorSection).textContent()
                if((ele === "Leaderboard Background")){

                }
                else throw new Error("Trivia Leaderboard Background text is not visible in color section")
              }
        async verifyLeaderboardtextTextInColorSection(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.LeaderboardTextIncolorSection).textContent()
                if((ele === "Leaderboard Text")){

                }
                else throw new Error("Trivia Leaderboard Background text is not visible in color section")
              }
              async verifyTileCountdownBackgroundText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.TileCountdownBackgroundText).textContent()
                if((ele === "Tile/Countdown Background")){

                }
                else throw new Error("Trivia Tile/Countdown Background text is not visible in color section")
              }
              
        
        async verifyAnswerText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.AnswerText).textContent()
                if((ele === "Answer Text")){
                      
                }
                else throw new Error("Trivia Answer text is not visible in color section")
              }
        async verifyLeaderboardText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.leaderboardText).textContent()
                if((ele === "Leaderboard")){
                      
                }
                else throw new Error("Leaderboard text is not visible")
              }
        async verifyGameModeText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.gamemodeText).textContent()
                if((ele === "Game Mode")){

                }
                else throw new Error("Game Mode text is not visible")
        }
        async verifyManualText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.manualText).textContent()
                if((ele === "Manual")){

                }
                else throw new Error("Manual text is not visible")
        }
        async verifyAutomaticText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.automaticText).textContent()
                if((ele === "Automatic")){

                }
                else throw new Error("Automatic text is not visible")
        }
        async verifyOnDemandText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.ondemandText).textContent()
                if((ele === "On-Demand")){

                }
                else throw new Error("On-Demand text is not visible")
        }
        async verifyAutomaticTimersText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.automaticTimersText).textContent()
                if((ele === "Automatic Timers")){

                }
                else throw new Error("Automatic Timers text is not visible")
        }
        async verifyLeaderboardDurationText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.leaderboarddurationText).textContent()
                if((ele === "Leaderboard Duration")){

                }
                else throw new Error("Leaderboard Duration text is not visible")
        }
        
        
        async verifyinputCountdownTimersfield(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputCountdownStagefield).isVisible()
                if((ele == true)){

                }
                else throw new Error("Count down input field  is not visible")
        }
        async verifyinputLeaderboardDurationfield(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputLeaderboardDurationfield).isVisible()
                if((ele == true)){

                }
                else throw new Error("Input Leaderboard Duration field is not visible")
        }
        async verifyPointsAllocationText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.PointAllocationText).textContent()
                if((ele === "Point Allocation")){

                }
                else throw new Error("Point Allocation text is not visible")
        }
        async verifyinputPointsfield(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputPointsfield).isVisible()
                if((ele == true)){

                }
                else throw new Error("Points input  field is not visible")
        }
        async verifySelectPointsFirstValu(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.selectPointsFirstvalue).isVisible()
                if((ele == true)){

                }
                else throw new Error("Selected Points First value is not visible")
        }
        async verifySelectPointsSecondValu(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.selectPointsSecondvalue).isVisible()
                if((ele == true)){

                }
                else throw new Error("Selected Points Second value is not visible")
        }
        async verifySelectPointsThirdValu(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.selectPointsThirdvalue).isVisible()
                if((ele == true)){

                }
                else throw new Error("Selected Points Third value is not visible")
        }
        async verifySelectPointsFourthValu(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.selectPointsFourthvalue).isVisible()
                if((ele == true)){

                }
                else throw new Error("Selected Points Fourth value is not visible")
        }
        async verifyCountdowntextText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.countdowntextText).textContent()
                if((ele === "Countdown Text")){

                }
                else throw new Error("Countdown Text text is not visible")
        }
        async verifyCountdowntextRadio_Time(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.countdownTextRadio_Time).isVisible()
                if((ele == true)){

                }
                else throw new Error("Countdown Text Radio_time button is not visible")
        }
        async verifyCountdowntextRadio_Points(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.countdownTextRadio_Points).isVisible()
                if((ele == true)){

                }
                else throw new Error("Countdown Text Radio_points button is not visible")
        }
        async verifyCountdownTypeText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.countdownTypeText).textContent()
                if((ele === "Countdown Type")){

                }
                else throw new Error("Countdown Type text is not visible")
        }
        async verifyCountdownTypeRadio_Circular(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.countdownTypeRadio_Circular).isVisible()
                if((ele == true)){

                }
                else throw new Error("Countdown Type Radio_Circular button is not visible")
        }
        async verifyCountdownTypeRadio_Lenear(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.countdownTypeRadio_Lenear).isVisible()
                if((ele == true)){

                }
                else throw new Error("Countdown Type Radio_Lenear button is not visible")
        }
        async verifyQuestionSequenceText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.QuestionSecquenceText).textContent()
                if((ele === "Question Sequence")){

                }
                else throw new Error("Question Sequennce text is not visible")
        }
        async verifyQuestionSequenceRandomBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.QuestionSequenceRandomBtn).isVisible()
                if((ele == true)){

                }
                else throw new Error("Question Sequence Random button is not visible")
        }
        async verifyQuestionsequenceSequenceBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.QuestionsequenceSequenceBtn).isVisible()
                if((ele == true)){

                }
                else throw new Error("Question Sequence  Sequence_button is not visible")
        }
        async verifyLeaderboardEventBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.LeaderboardEventBtn).isVisible()
                if((ele == true)){

                }
                else throw new Error("Leaderboard Event button is not visible")
        }
        async verifyLeaderboardRoundBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.LeaderboardRoundBtn).isVisible()
                if((ele == true)){

                }
                else throw new Error("Leaderboard Round button is not visible")
        }
        async verifyErrorMessageInCountdownStage(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.ErrorMessageInCountdownStage).textContent()
                if((ele === "Wrong value, limit 99")){

                }
                else throw new Error("Wrong value, limit 99 is not visible")
        }
        async inputCountDownStage(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputCountdownStagefield).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputCountdownStagefield).fill('5')
                }
                else throw new Error("Coundown stage input field is not visible")
        }
        async inputLeaderBoardDuration(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputLeaderboardDurationfield).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputLeaderboardDurationfield).fill('100')
                }
                else throw new Error("Leaderboard deuration input field is not visible")
        }
        async verifyErrorMessageInLeaderboardDuration(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.ErrorMessageInCountdownStage).textContent()
                if((ele === "Wrong value, limit 99")){

                }
                else throw new Error("Wrong value, limit 99 text is not visible")
        }
        async verifyErrorMessageInQuestionNoStage(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.ErrorMessageInCountdownStage).textContent()
                if((ele === "Wrong value, limit 99")){

                }
                else throw new Error("Wrong value, limit 99 text is not visible")
        }
        async verifyErrorMessageInQuestionReveal(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.ErrorMessageInCountdownStage).textContent()
                if((ele === "Wrong value, limit 99")){

                }
             
                else throw new Error("Wrong value, limit 99 text is not visible")
        }
        async verifyErrorMessageInPointsAllocation(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.errorMessageInPointsAllocation).textContent()
                if((ele === "Wrong value, limit 9999")){

                }
                else throw new Error("Wrong value, limit 9999 text is not visible")
        }
        async inputQuestionNoStage(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputQuestionNoStage).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputQuestionNoStage).fill('100')
                }
           
          else throw new Error("Question no stage input field is not visible")
        }
        async inputQuestionReveal(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputQuestionReveal).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputQuestionReveal).fill('100')
                }
                else throw new Error("Question Reveal input field is not visible")
        }
        async inputPointAllocationPointsfield(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputInpointsAllocationPointsfield).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputInpointsAllocationPointsfield).fill('10000')
                }
                else throw new Error("Points input field is not visible")
        }
        async inputPointAllocationSecondfield(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputInpointsAllocationSecondsfield).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputInpointsAllocationSecondsfield).fill('10000')
                }
                else throw new Error("Seconds input field is not visible")
        }
        async clickExportBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.ExportBtn).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.ExportBtn).click()
                }
                else throw new Error("Export button is not visible")
        }
        async clickConfirmExportBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.ExportConfirmBtn).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.ExportConfirmBtn).click({force:true})
                }
                else throw new Error("Export confirm button is not visible")
        }
        async verifyErrorMessageExportBtnIfQuestionisnotAdd(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.errorMessageExportBtn).textContent()
                if((ele === "This round has no questions!")){

                }
                else throw new Error("This round has no questions!")
        }
        async verifyFailedExportMessage(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.faileExport).textContent()
                if((ele === "Failed to Export!")){

                }
                else throw new Error("Failed to Export!")
        }
        async clickAddQuestionBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.AddQuestionBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.AddQuestionBtn).click()
                }
                else throw new Error("Add question button is not visible")
        }
        async verifyAddQuestionText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.AddQuestionText).textContent()
                if((ele === "Add Question")){

                }
                else throw new Error("Add Question text is not visible")
        }
        async verifyCustomQuestionTypetext(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.CustomQuestionTypeText).textContent()
                if((ele === "Custom Question Type:")){

                }
                else throw new Error("Custom Question Type: text is not visible")
        }
        async clickAddQuestionClosBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.addquestionCloseBtn).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.addquestionCloseBtn).click()
                }
                else throw new Error("Countdown Add question close button is not visible")
        }
        async clickFreeResponseRadioBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.freeResponseRadioBtn).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.freeResponseRadioBtn).click()
                }
                else throw new Error("Free response radio button is not visible")
        }
        async clickMultipleChoiceRadioBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.multipleChoiceRadioBtn).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.multipleChoiceRadioBtn).click()
                }
                else throw new Error("Multiple Choice radio button is not visible")
        }
        async clickAddMediaBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.addMediaBtn).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.addMediaBtn).click()
                }
                else throw new Error("Add media button is not visible")
        }
        async verifyAddMediatext(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.AddmediaText).textContent()
                if((ele === "Add Media")){

                }
                else throw new Error("Add Media text is not visible")
        }
        async verifyLeaderboardFrametext(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.LeaderboardFrameText).textContent()
                if((ele === "Leaderboard Frame")){

                }
                else throw new Error("Trivia Leaderboard Frame text is not visible in color section")
        }
        async verifyLeaderboardAccentText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.LeaderboardAccentText).textContent()
                if((ele === "Leaderboard Accent")){

                }
                else throw new Error("Trivia Leaderboard Accent text is not visible in color section")
        }
        async verifyMobileMediatext(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.mobileMediaText).textContent()
                if((ele === "Mobile Media")){

                }
                else throw new Error("Mobile Media text is not visible")
        }
        async verifyPointBubbletext(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.PointBubbleText).textContent()
                if((ele === "Point-Bubble Text")){

                }
                else throw new Error("Trivia Point-Bubble Text text is not visible")
        }
        async verifyPointBubbleStroketext(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.PointBubbleStrokeText).textContent()
                if((ele === "Point-Bubble Stroke")){

                }
                else throw new Error("Trivia Point-Bubble Stroke text is not visible in color section")
        }
        async verifyCountdownAnnimationFilltext(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.countdownAnnimationfillText).textContent()
                if((ele === "Countdown Animation Fill")){

                }
                else throw new Error("Trivia Countdown Animation Fill text is not visible in color section")
        }
        async verifyMainboardMediatext(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.mainboardMediaText).textContent()
                if((ele === "Mainboard Media")){

                }
                else throw new Error("Mainboard Media text is not visible")
        }
        async clickMobileMediaImageRadioBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.mobilemediaImageRadioBtn).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.mobilemediaImageRadioBtn).click()
                }
                else throw new Error("Mobile media Image radio button is not visible")
        }
        async clickMobileMediaVideoRadioBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.mobilemediaVideoRadioBtn).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.mobilemediaVideoRadioBtn).click()
                }
                else throw new Error("Mobile media Video radio button is not visible")
        }
        async clickMainboardImageediaVideoRadioBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.mainboardmediaImageRadioBtn).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.mainboardmediaImageRadioBtn).click()
                }
                else throw new Error("Mainboard media Image radio button is not visible")
        }
        async clickMainboardmediaVideoRadioBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.mainboardmediaVideoRadioBtn).isVisible()
                if((ele == true)){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.mainboardmediaVideoRadioBtn).click()
                }
                else throw new Error("Mainboard media video radio button is not visible")
        }
        async validateExportBtn() {
                await this.page.waitForTimeout(1000)
                const [download] = await Promise.all([
                        this.page.waitForEvent('download'),
                        this.page.frameLocator('iframe').locator(this.triviaPageElements.ExportConfirmBtn).click()
                ])
                const suggestedFileName = download.suggestedFilename()
        }
        async ImageuploaderAlert() {
                const filePath0 = "testData/images/main_banner.webp"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                       await this.page.frameLocator('(//iframe)[1]').locator(this.triviaPageElements.fileChooseBtn).click()
                ]);
                await fileChooser.setFiles([filePath0]);

                await this.page.waitForTimeout(1000)
                this.page.on('dialog', async dialog => {

                        // verify message of alert
                        expect(dialog.message()).toContain('Error: Incorrect file extension');
                        await this.page.waitForTimeout(2000)
                        await dialog.accept();
                })
                await this.page.frameLocator('(//iframe)[1]').locator(this.triviaPageElements.saveBtn).click()

        }
        async clickFileChosserBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.fileChooseBtn).isVisible()
                if(ele == true ){
                      await this.page.frameLocator('iframe').locator(this.triviaPageElements.fileChooseBtn).click()
                }
                else throw new Error("File chooser button is not visible")
        }
        async ClickForUploadMobileMediaImageInAddQuestionSection(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.addQuestionUploadMobileMediaImageOrVideoBtn).isVisible()
                if(ele == true ){
                      await this.page.frameLocator('iframe').locator(this.triviaPageElements.addQuestionUploadMobileMediaImageOrVideoBtn).click({force:true})
                }
                else throw new Error("Mobile Media image upload button is not visible")

        }
        async ClickForUploadMainboardMediaImageInAddQuestionSection(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.addQuestionUploadMainboardMediaImageOrVideoBtn).isVisible()
                if(ele == true ){
                      await this.page.frameLocator('iframe').locator(this.triviaPageElements.addQuestionUploadMainboardMediaImageOrVideoBtn).click()
                }
                else throw new Error("Mainboard Media image upload button is not visible")

        }
        async clickAddAnswerBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.addAnswerBtn).isVisible()
          if(ele == true ){
                await this.page.frameLocator('iframe').locator(this.triviaPageElements.addAnswerBtn).click()
          }
          else throw new Error("Add answer for multiple choice button is not visible")
        }
        async clickLiveBtn(){
                const ele1 = await this.page.frameLocator('iframe').locator(this.triviaPageElements.startBtn).last().isVisible()
                if(ele1 == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.startBtn).last().click()
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.okBtn).click()
                        await this.page.waitForTimeout(1000)
                        const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.liveBtn).last().isVisible()
                        if(ele == true ){
                                     await this.page.frameLocator('iframe').locator(this.triviaPageElements.liveBtn).last().click()
                            }
                            else throw new Error("Live button is not visible")
                }
                else{
                        const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.liveBtn).last().isVisible()
                        if(ele == true ){
                                     await this.page.frameLocator('iframe').locator(this.triviaPageElements.liveBtn).last().click()
                            }
                            else throw new Error("Live button is not visible")

                }
                
        }
       async inputAddQuestion(){
        const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputQuestion).isVisible()
          if(ele == true ){
                await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputQuestion).type("which one is better jpg or png?")
          }
          else throw new Error("Input Question field is not visible")
       }
       async inputFirstMultipleQuestionAnswer(){
        const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputforMultipleChoiceAnswer).isVisible()
          if(ele == true ){
                await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputforMultipleChoiceAnswer).type("PNG")
          }
          else throw new Error("Input Question field is not visible")
       }
       async inputSecondMultipleQuestionAnswer(){
        const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputforMultipleChoiceAnswer).isVisible()
          if(ele == true ){
                await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputforMultipleChoiceAnswer).type("JPEG")
          }
          else throw new Error("Input Question field is not visible")
       }
     async  clickAddCorrectAnswerBtn(){
        const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.addCorrectAnswerBtn).isVisible()
          if(ele == true ){
                await this.page.frameLocator('iframe').locator(this.triviaPageElements.addCorrectAnswerBtn).click()
          }
          else throw new Error("Add correct answer button is not visible")
     }
     async  clickFirstAddAcctableAnswerBtn(){
        const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.addAccetableAnswerBtn).isVisible()
          if(ele == true ){
                await this.page.frameLocator('iframe').locator(this.triviaPageElements.addAccetableAnswerBtn).click()
          }
          else throw new Error("Add first accectable answer button is not visible")
     }
     async  clickSecondAddAcctableAnswerBtn(){
        const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.addAccetableAnswerBtn).isVisible()
          if(ele == true ){
                await this.page.frameLocator('iframe').locator(this.triviaPageElements.addAccetableAnswerBtn).click()
          }
          else throw new Error("Add Second accectable answer button is not visible")
     }
     async inputCorrectAnswer(){
        const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputCorrectAnswer).isVisible()
          if(ele == true ){
                await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputCorrectAnswer).type('PNG')
          }
          else throw new Error("Add correct answer input is not visible")
     }
     async  inputSecondAcctableAnswer(){
        const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputAcceptableAnswer).isVisible()
          if(ele == true ){
                await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputAcceptableAnswer).type('JPEG')
          }
          else throw new Error("Add accectable answer input is not visible")
     }
     async  inputFirstAcctableAnswer(){
        const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputAcceptableAnswer).isVisible()
          if(ele == true ){
                await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputAcceptableAnswer).type('PNG')
          }
          else throw new Error("Add accectable answer input is not visible")
     }
     async clikCorrectAnswerSaveBtn(){
        const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.correctAnswerSaveBtn).isVisible()
          if(ele == true ){
                await this.page.frameLocator('iframe').locator(this.triviaPageElements.correctAnswerSaveBtn).click()
          }
          else throw new Error("Correct answer save button is not visible")
     }
     async clikAcctableAnswerSaveBtn(){
        const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.acctableAnswerSaveBtn).isVisible()
          if(ele == true ){
                await this.page.frameLocator('iframe').locator(this.triviaPageElements.acctableAnswerSaveBtn).click()
          }
          else throw new Error("Accectable answer save button is not visible")
     }
     async clickAddQuestionSaveBtn(){
        const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.addQuestionSaveBtn).isVisible()
        if(ele == true ){
              await this.page.frameLocator('iframe').locator(this.triviaPageElements.addQuestionSaveBtn).click({force : true})
        }
        else throw new Error("Add question save button is not visible")
     }
     async clickAnswerSaveBtn(){
        const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.answerSaveBtn).isVisible()
          if(ele == true ){
                await this.page.frameLocator('iframe').locator(this.triviaPageElements.answerSaveBtn).click()
          }
          else throw new Error("Accectable answer save button is not visible")
     }
      
        async clickTriviaSection(){
                const ele = this.page.locator(this.triviaPageElements.triviaSestion)
                expect(ele).toBeVisible()
                await ele.click()
                await this.page.waitForLoadState('networkidle')
        }

        async verifyConfigurationsText() {
                //      const ele = await this.page.frameLocator('iframe').w('text=Title Stag')
                //         await this.page.waitForSelector(ele)     
                await this.page.waitForTimeout(1000)
                

                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.configurationText) 
                if(ele != null){
                        expect(ele).toContainText("Configurations")
                }
                else throw new Error("Configrations text is not visible")
                 


        }
        async deleteGameTitleLogo(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.deletegameTitleBtn).isVisible()
                if(ele == true){
                       await this.page.frameLocator('iframe').locator(this.triviaPageElements.deletegameTitleBtn).click()
                       await this.page.waitForTimeout(1000)
                }
               // else throw new Error('Game title delete button is not visible')
        }
        async deleteTeamLogoBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.deleteTeamLogoBtn).isVisible()
                if(ele == true){
                       await this.page.frameLocator('iframe').locator(this.triviaPageElements.deleteTeamLogoBtn).click()
                       await this.page.waitForTimeout(1000)
                }
               // else throw new Error('Game title delete button is not visible')
        }
        async clickGametitleupload(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.uploadGameTitleLogoBtn).isVisible()
                if(ele == true){
                       await this.page.frameLocator('iframe').locator(this.triviaPageElements.uploadGameTitleLogoBtn).click({force:true})
                }
           
                 else throw new Error('Trivia Game title button is not visible')
        }
        async clickTeamLogoUpload(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.uploadTeamLogoBtn).isVisible()
                if(ele == true){
                       await this.page.frameLocator('iframe').locator(this.triviaPageElements.uploadTeamLogoBtn).click({force:true})
                }
           
                 else throw new Error('Trivia Team logobutton is not visible')
        }
        async clickSponsorLogoUpload(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.uploadSponsorLogoBtn).isVisible()
                if(ele == true){
                       await this.page.frameLocator('iframe').locator(this.triviaPageElements.uploadSponsorLogoBtn).click({force:true})
                }
           
                 else throw new Error('Trivia upload Sponsor logo button is not visible')
        }
        async clickMainboardBackgroundBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.uploadMainboardBackgroundBtn).isVisible()
                if(ele == true){
                       await this.page.frameLocator('iframe').locator(this.triviaPageElements.uploadMobileBackgroundBtn).click({force:true})
                }
           
                 else throw new Error('Trivia upload Mainboard Background  button is not visible')
        }
        async clickMobileBackgroundBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.uploadMobileBackgroundBtn).isVisible()
                if(ele == true){
                       await this.page.frameLocator('iframe').locator(this.triviaPageElements.uploadMobileBackgroundBtn).click({force:true})
                }
           
                 else throw new Error('Trivia upload Mobile Background  button is not visible')
        }
        async openUploadAndDialogsSection(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.UploadsAndDialogsBtn).isVisible()
                if(ele == true){
                      await  this.page.frameLocator('iframe').locator(this.triviaPageElements.UploadsAndDialogsBtn).click()
                }
                else throw new Error('Game title button is not visible')
        }   
        async GametitleImageuploader() {
                const filePath0 = "testData/images/title.jpg"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator(this.triviaPageElements.fileChooseBtn).click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator(this.triviaPageElements.saveBtn).click()
                await this.page.waitForTimeout(5000)
                //await this.page.waitForEvent('load')

        }
        async deleteSponsorLogoBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.deleteSponsorLogo).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.deleteSponsorLogo).click()
                        await this.page.waitForTimeout(1000)
                }

        }
        async deleteMainboardBackgroundBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.deletemainboardBackground).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.deletemainboardBackground).click()
                        await this.page.waitForTimeout(1000)
                }

        }
        async deleteMobileBackgroundBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.deleteMobileBackground).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.deleteMobileBackground).click()
                        await this.page.waitForTimeout(1000)
                }

        }
        async clickBackgroundColorBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.backgroundColorBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.backgroundColorBtn).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Background Color button is not visible")

        }
        async clickGeneralButtonTextColorBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.GeneralOrButtoncolorBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.GeneralOrButtoncolorBtn).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("General/Button text Color button is not visible")

        }
        async inputFirstRGB(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputRGBFirst).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputRGBFirst).fill("16")
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia first RGB color  field is not visible")
        }
        async inputSecondRGB(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputRGBSecond).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputRGBSecond).fill("10")
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia Second RGB color  field is not visible")
        }
        async inputThirdRGB(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputRGBThird).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputRGBThird).fill("124")
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia Third RGB color  field is not visible")
        }
        async inputFourthRGB(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputRGBFourth).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputRGBFourth).fill("100")
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia Fourth RGB color  field is not visible")
        }
        async clickColorSectionBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.colorsSection).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.colorsSection).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia Color section  is not visible")
        }
        async clickButtonBackgrounColorBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.buttonBackgroundcolor).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.buttonBackgroundcolor).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia Button Background text in Color section  is not visible")
        }
        async clickMOveToNextBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.movetoNextBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.movetoNextBtn).click()
                        await this.page.waitForTimeout(1000)
                }
             
                else throw new Error("Trivia Move to next button  is not visible in add round section")
        }
        async clickQuestionTextBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.questionTextBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.questionTextBtn).click()
                        await this.page.waitForTimeout(1000)
                }
             
                else throw new Error("Trivia Question text button  is not visible in color section")
        }
        async clickQuestionBackgroundBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.QuestionBackgroundBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.QuestionBackgroundBtn).click()
                        await this.page.waitForTimeout(1000)
                }
             
                else throw new Error("Trivia Question background button  is not visible in color section")
        }
      async   clickAnswerTextBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.AnswerTextBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.AnswerTextBtn).click()
                        await this.page.waitForTimeout(1000)
                }
             
                else throw new Error("Trivia Answer Text button  is not visible in color section")
        }
        async   clickAnswerBackgroundBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.AnswerBackgroundBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.AnswerBackgroundBtn).click()
                        await this.page.waitForTimeout(1000)
                }
             
                else throw new Error("Trivia Answer Background button  is not visible in color section")
        }
        async   clickQuestionFrameBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.QuestionFrameBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.QuestionFrameBtn).click()
                        await this.page.waitForTimeout(1000)
                }
             
                else throw new Error("Trivia question frame button  is not visible in color section")
        }

        async   clickAnswerFrameBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.AnswerFrameBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.AnswerFrameBtn).click()
                        await this.page.waitForTimeout(1000)
                }
             
                else throw new Error("Trivia answer frame button  is not visible in color section")
        }
        async   clickSelectedAnswerColorBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.SelectedAnswerColorBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.SelectedAnswerColorBtn).click()
                        await this.page.waitForTimeout(1000)
                }
             
                else throw new Error("Trivia selected answer button  is not visible in color section")
        }
        async   clickCorrectAnswerColorBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.CorrectAnswerColorBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.CorrectAnswerColorBtn).click()
                        await this.page.waitForTimeout(1000)
                }
             
                else throw new Error("Trivia correct answer button  is not visible in color section")
        }
        async   clickIncorrectAnswerColorBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.IncorrectAnswerColorBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.IncorrectAnswerColorBtn).click()
                        await this.page.waitForTimeout(1000)
                }
             
                else throw new Error("Trivia incorrect answer button  is not visible in color section")
        }
        async   clickLeaderboardTextColorBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.LeaderboardTextColorBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.LeaderboardTextColorBtn).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia Leaderboard text button  is not visible in color section")
        }
        async   clickTileCountdownBackgroundBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.TileCountdownBackgroundBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.TileCountdownBackgroundBtn).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia Tile/Countdown Background button  is not visible in color section")
        }
        async   clickTileCountdownFrameBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.TileCountdownFrameBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.TileCountdownFrameBtn).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia Tile/Countdown Frame button  is not visible in color section")
        }
        async   clickCountdownAnnimationColorBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.countdownAnnimationfillBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.countdownAnnimationfillBtn).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia CountdownAnnimation Fill button  is not visible in color section")
        }
        async   clickLeaderboardBackgroundColorBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.LeaderboardBackgroundColorBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.LeaderboardBackgroundColorBtn).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia Leaderboard background button  is not visible in color section")
        }
        async   clickForSolidRGBColorBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.solidRGB).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.solidRGB).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia solid RGB button  is not visible in color section")
        }
        async   clickFordiagonalRGBColorBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.diagonalRGB).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.diagonalRGB).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia diagonal RGB button  is not visible in color section")
        }
        async   clickRGBSelectedColorBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.colorListBox).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.colorListBox).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia Color list box button  is not visible in color section")
        }
        async   clickPointBubbleFillBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.PointBubbleFillBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.PointBubbleFillBtn).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia Color Point bubble fill button  is not visible in color section")
        }
        async   clickPointBubbleStrokeBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.PointBubbleStrokeBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.PointBubbleStrokeBtn).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia Color Point-Bubble Stroke fill button  is not visible in color section")
        }
        async   clickPointBubbleTextBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.PointBubbleTextBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.PointBubbleTextBtn).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia Color Point-Bubble Text  button  is not visible in color section")
        }
        async   clickUserTopTenRankBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.UserTopTenrankBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.UserTopTenrankBtn).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia User's Top 10 Rank button  is not visible in color section")
        }
        async   clickLeaderboardFrameBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.LeaderboardFrameBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.LeaderboardFrameBtn).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia Leaderboard Frame button  is not visible in color section")
        }
        async   clickLeaderboardAccentBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.LeaderboardAccentBtn).isVisible()
                if(ele == true){
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.LeaderboardAccentBtn).click()
                        await this.page.waitForTimeout(1000)
                }
                else throw new Error("Trivia Leaderboard Accent button  is not visible in color section")
        }
        
}

