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
                blankconfigrationfield : "(//div[@class='MuiDialogContent-root css-3n2qrj'])[2]",
                configurationLessthanzthreeChracterdata : "//p[text()='Please input more than 3 characters']",
                startBtn : "//button[text()='Start']",
                liveBtn : "//button[text()='Live']",
                OkBtn : "//button[text()='Ok']",
                roundErrormessage :"//p[text()='Please create a round']",
                mobileLinkBtn : '//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium  css-1ctg0j5"]',
                mobileLinkCloseBtn : '//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-111begb"]',
                mobileLinkText : "//h2[text()='Mobile Link']",
                openMobileLinkBtn : "//a[@aria-label='Open Link']",
                mobileLinkCopyBtn : "//button[@aria-label='Copy Link']",



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
         const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.newConfigrationText).isVisible()
         if((ele == true)){
               // console.log("hellow")
                expect(this.page.frameLocator('iframe').locator(this.triviaPageElements.newConfigrationText)).toContainText("New Configuration")
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
                        //await this.page.waitForTimeout(1000)
                        await ele.click()
                }
                else throw new Error("Plus button is not visible")

        }
        async verifyAddNewConfigPlusWindowText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='New Configuration']")
                expect(ele).toContainText("New Configuration")

        }


        async typeConfigurationName() {
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.inputConfigrationsName)
                if(ele != null){
                  expect(ele).toBeVisible()
                  this.page.waitForTimeout(1000)
                  await ele.type("Auto")
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
        async verifyErrorMessage(){
                const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.blankconfigrationfield)
                if(ele != null){
                  expect(ele).toBeVisible()
                  expect(ele).toContainText("Please input more than 3 characters")
                }
                else throw new Error("Without type data configuration add button is working")

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
        async clickOkBtn(){
                const ele = this.page.frameLocator('iframe').locator(this.triviaPageElements.OkBtn)
                if(ele != null){
                        expect(ele).toBeVisible()
                        await ele.click()
                }
                else throw new Error("Ok button does not visible")
        }
        async clickStartBtn(){
                const ele = this.page.frameLocator('iframe').locator(this.triviaPageElements.startBtn)
                if(ele != null){
                        expect(ele.first()).toBeVisible()
                        await ele.first().click()
                }
            
            else throw new Error("Start button does not visible")
        }
        async clickLiveBtn(){
                const ele = this.page.frameLocator('iframe').locator(this.triviaPageElements.liveBtn)
                if(ele != null){
                        expect(ele).toBeVisible()
                        await ele.first().click()
                }
                else throw new Error("Live button is not visible")
        }
        async verifyRoundError(){
                const ele = this.page.frameLocator('iframe').locator(this.triviaPageElements.roundErrormessage)
                       expect(ele.first()).toContainText("Please create a round")
                
        }
        async clickMobileLinkBtn(){
                const ele = this.page.frameLocator('iframe').locator(this.triviaPageElements.mobileLinkBtn)
                if(ele != null){
                        expect(ele.last()).toBeVisible()
                        await ele.last().click()
                }
                else throw new Error("Mobile link button is not visible")
        }
        async clickMobileLinkCloseBtn(){
                const ele = this.page.frameLocator('iframe').locator(this.triviaPageElements.mobileLinkCloseBtn)
                if(ele != null){
                        expect(ele.last()).toBeVisible()
                        await ele.last().click()
                }
                else throw new Error("Mobile link close button is not visible")
        }
        async verifyMobileLinkText(){
                const ele = this.page.frameLocator('iframe').locator(this.triviaPageElements.mobileLinkText)
                if(ele != null){
                        expect(ele).toContainText("Mobile Link")
                        
                }
                else throw new Error("Mobile link text is not visible")
        }
        async  clickMobileLinkOpenBtn() {

                // Click text=Open Link
                const [page1] = await Promise.all([
                        this.page.waitForEvent('popup'),
                        await this.page.frameLocator('iframe').locator(this.triviaPageElements.openMobileLinkBtn).last().click()
                ]);

                return page1;


        }
        
        async clickMobileLinkCopyBtn(){
                const ele = await this.page.frameLocator('iframe').locator(this.triviaPageElements.mobileLinkCopyBtn).isVisible()
                if(ele == true){
                        //expect(ele.last()).toBeVisible()
                await this.page.frameLocator('iframe').locator(this.triviaPageElements.mobileLinkCopyBtn).last().click()
                }
                else throw new Error("Mobile link copy button is not visible")
        }
       
 
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
        const ele =  this.page.frameLocator('iframe').locator(this.triviaPageElements.mobileLinkBtn)
        if(ele != null){
               expect(ele.last()).toBeVisible()
               ele.last().click()
        }
        else throw new Error("Mobile Link button is not visible")
}
async clickMobileLinkPopupClose(){
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


}

