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
                //lessthanzthreeChracterdata : "//p[text()='Please input more than 3 characters']",
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
                questiontext:"//p[text()='Question']",
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
                const ele = this.page.frameLocator('iframe').locator(this.triviaPageElements.plusbutton)
                if(ele != null){
                        expect(ele).toBeVisible()
                        await this.page.waitForTimeout(1000)
                        await ele.click()
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
        const ele =   this.page.frameLocator('iframe').locator(this.triviaPageElements.startBtn)
        if(ele != null){
            expect(ele.first()).toBeVisible()
            await ele.first().click()
            //this.page.frameLocator('iframe').locator(this.triviaPageElements.startBtn).first().click()
        }
        else throw new Error("Start button is not visible")
}
        async clickOkBtn(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.okBtn)
                if(ele != null){
                ele.click()
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
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.MobileLinkPopupClose)
                expect(ele).toBeVisible()
                await ele.click()
                //ele.last().click()
                
                
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
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.gamedesignSection)
                if(ele != null){
                        expect(ele.last()).toBeVisible()
                await ele.last().click()
                }
                else throw new Error("Game design section is not visible")
                await this.page.waitForLoadState('networkidle')
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
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.controlPanelSection)
                if(ele != null){
                        expect(ele.last()).toBeVisible()
                        await ele.last().click()
                }
                else throw new Error("Control Panel Section is not visible")
        }
        async clickAddRoundBtn(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.addRoundBtn)
                if(ele != null){
                        expect(ele).toBeVisible()
                        await ele.click()
                }
                else throw new Error("Add round button  is not visible")
        }
        async inputAddRoundName(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.inputAddRoundfield)
                if(ele != null){
                        expect(ele).toBeVisible()
                        await ele.type("Round1")
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
        async InputEditRoundName(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.inputAddRoundfield)
                if(ele!= null){
                        expect(ele).toBeVisible()
                await ele.type("Edit Round1")
                }
        }
        async clickSaveBtn(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.saveBtn)
                if(ele!= null){
                        expect(ele).toBeVisible()
                await ele.click()
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
                if((ele === "Question")){
                     
                }
                else throw new Error("Question text is not visible")
              }
        async verifyAnswerText(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.answerText).textContent()
                if((ele === "Answer")){
                      
                }
                else throw new Error("Answer text is not visible")
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
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.inputCountdownStagefield).fill('100')
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
            
}

