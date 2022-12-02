import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class guesstheScorePage {
        // [x: string]: any;

        private page: Page;
        // static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }



        //=======================================================
        //▶▶Start Title Stage Section Element       


        async clickGuessTheScoreSection() {
                const locator = this.page.locator("//p[text()='Guess The Score']")
                // expect(locator).toContainText('Prize Drop')
                await locator.click({force:true})
                // console.log("Successfully Click To Tug of War Page ")
        }

        async verifyConfigurationsText() {
                //      const ele = await this.page.frameLocator('iframe').w('text=Title Stag')
                //         await this.page.waitForSelector(ele)        

                const ele = this.page.frameLocator('iframe').locator('text=Configurations')
                await expect(ele).toContainText("Configurations")


        }
        async clickAddNewConfigPlusBtn() {

                await this.page.frameLocator('iframe').first().locator("(//h5[text()='Configurations']/following-sibling::button)[1]").click()
        }

        async inputConfigurationName() {
                const ele = this.page.frameLocator('iframe').first().locator('input[type="string"]')
                await ele.fill("test_by_Automation")

        }

        async clickAddBtn() {
                const ele =this.page.frameLocator('iframe').first().locator("//button[text()='ADD']")
                await expect(ele).toBeVisible()
                await ele.click()

        }

        async clickGameDesign() {
                await this.page.frameLocator('iframe').locator("//h6[text()='test_by_Automation']/parent::div/following-sibling::div//div//div//p[text()='Game Design']").click()

        }

        async openfontsection(){
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Fonts"]//parent::div').click()
        }
        async clickToUploadFont() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-vjb914']//div)[1]")
                expect(ele).toBeVisible()
                await ele.click()

        }
        // clear all button no longer available
        // async clickClearAllBtn(){
        //         const ele = this.page.frameLocator('iframe').locator("//button[text()='Clear all']")
        //         expect(ele).toBeVisible()
        //         await ele.click({force:true});
        // }
        
        //colors section from here 
        async opencolorssection(){
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Colors"]//parent::div').click() 
        }

        async clickplusbuttonswatches(){
                await this.page.frameLocator('.css-r99fy3').locator('//button[@aria-label="Add Color"]').click()
        }

        async verifyBackgroundColorText() {
                const ele = this.page.frameLocator('iframe').locator('//p[text()="Background"]')
                expect(ele).toContainText("Background")

        }

        async clickBackgroundColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Background']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }
        async clicktextColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Text']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }
        async clickHeaderColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Header']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }

        async buttonstextColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Buttons']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }

        async MainboardBackgroundColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Mainboard Background']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }

        async EventtitlefontColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Event Title Font']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }

        async TimerCircleColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Timer Circle']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }

        async WoodColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Wood']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }
        async gameplayscoretextColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Gameplay Score Text']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }
        async TimerBackgroundColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Timer Background']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }
        async inputRGBFirstColor() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[1]")
                await expect(ele).toBeVisible()
                await ele.fill("189")

        }
        async inputRGBSecondColor() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[2]")
                await expect(ele).toBeVisible()
                await ele.fill("189")

        }


        async inputRGBThirdColor() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[3]")
                await expect(ele).toBeVisible()
                await ele.fill("9")

        }

        async inputRGBColorOpacity() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                await expect(ele).toBeVisible()
                await ele.fill("90")

        }

        async inputRGBColorHex() {
                const ele = this.page.frameLocator('iframe').locator("(//input[contains(@class,'MuiOutlinedInput-input MuiInputBase-input')])[4]")
                await expect(ele).toBeVisible()
                await ele.fill("F1d40FFF")

        }

        async clickdeletebuttonswatches(){
                await this.page.frameLocator('.css-r99fy3').locator('//button[@aria-label="delete"]').last().click()     
        }


        async clickColorPickerSaveBtn() {
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()
        }
        //image upload starts here

        async openimagesection(){
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Image Uploads"]//parent::div').click()
        }
        async clickfullscreenlogoupload(){
                await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Full Screen Logo"]//parent::div//div[@class="MuiBox-root css-v2612"]').click()
        }

        async clickMainboardBackgroundupload(){
                await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mainboard Background"]//parent::div//div[@class="MuiBox-root css-v2612"]').click()
        }

        async clicksposnorLogoupload(){
                await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Sponsor Logo"]//parent::div//div[@class="MuiBox-root css-v2612"]').click()
        }

        async clickMobileBackgroundupload(){
                await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mobile Background"]//parent::div//div[@class="MuiBox-root css-v2612"]').click()
        }

        async clickGametitlelogoupload(){
                await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Game Title Logo"]//parent::div//div[@class="MuiBox-root css-v2612"]').click()
        }

        async clickBannerImageupload(){
                await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Banner Image"]//parent::div//div[@class="MuiBox-root css-v2612"]').click()
        }

        async Imageuploader(){
                const filePath0 = "testData/logos/gameLogo.jpg"
                const [fileChooser] = await Promise.all([
                // It is important to call waitForEvent before click to set up waiting.
                this.page.waitForEvent('filechooser'),
                // Opens the file chooser.
                this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()

        }
        // Editor sections(dialogs) start here

        async opendialogs(){
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Dialogs"]//parent::div').click() 
        }
        async typestandbymessage(){
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")
                
        }

        async checkstandbymessageeditorfunctions(){

        }


        async typecorrectguess(){
                const ele =this.page.frameLocator('.css-r99fy3').locator('//p[text()="Correct Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")
        }
        async typecloseguess(){
                const ele =this.page.frameLocator('.css-r99fy3').locator('//p[text()="Close Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await this.page.waitForTimeout(400 )
                await ele.fill("this is a test message")
        }
        async typeincorrectguess(){
                const ele =this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")
                
        }
        async clickleftalignedincorrectguess(){
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Left"]').click()
               
        }
        async clickrightalignedincorrectguess(){
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Right"]').click()
               
        }
        async clickboldincorrectguesseditor(){
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Bold"]').click()
               
        }
        async clickitalicincorrectguesseditor(){
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Underline"]').click()
               
        }
        async clickunderlineincorrectguesseditor(){
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Italic"]').click()
               
        }
        async clickorderedincorrectguesseditor(){
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Ordered"]').click()
               
        }
        async clickunorderedincorrectguesseditor(){
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Incorrect Guess"]//following-sibling::div//div[@title="Unordered"]').click()
               
        }
        
        async typefarguess(){
                const ele =this.page.frameLocator('.css-r99fy3').locator('//p[text()="Far Guess"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")
        }
        async typenoscore(){
                const ele =this.page.frameLocator('.css-r99fy3').locator('//p[text()="No Score"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")
        }

        async typeingateheader(){
                const ele =this.page.frameLocator('.css-r99fy3').locator('//p[text()="In-Gate Header"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")
        }

        async typeridingheader(){
                const ele =this.page.frameLocator('.css-r99fy3').locator('//p[text()="Riding Header"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")
        }

        async typescoringheader(){
                const ele =this.page.frameLocator('.css-r99fy3').locator('//p[text()="Scoring Header"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")
        }

        async typeRerideheader(){
                const ele =this.page.frameLocator('.css-r99fy3').locator('//p[text()="Re-Ride Header"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("this is a test message")
        }
        //rider roster starts here
        

        async clickriderroster(){
                await this.page.frameLocator('iframe').locator("//h6[text()='test_by_Automation']/parent::div/following-sibling::div//div//div//p[text()='Rider Roster']").click()
        }
        async clickaddriderbutton(){
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('iframe').locator('//button[text()="Add Rider"]').click()
        }

        async addriderfirstname(){
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('iframe').first().locator('//input[@placeholder="First Name"]').type("test_rider_firstname")
                
        }
        async addriderLastname(){
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('iframe').first().locator('//input[@placeholder="Last Name"]').type("test_rider_lastname")
        }
        async clicksaveandclosebutton(){
                await this.page.frameLocator('.css-r99fy3').locator('//button[text()="Save & Close"]').click()
                await this.page.waitForTimeout(1000)
        }
        async typesearchinriderroster(){
                await this.page.frameLocator('.css-r99fy3').locator('//input[@placeholder="Search..."]').type("test")
        }

        async clickexportbutton(){
                await this.page.frameLocator('.css-r99fy3').locator('//button[text()="Export"]').click()
        }

        async Jsonuploader(){
                const filePath0 = "testData/login.cred.json"
                const [fileChooser] = await Promise.all([
                // It is important to call waitForEvent before click to set up waiting.
                this.page.waitForEvent('filechooser'),
                // Opens the file chooser.
                this.page.frameLocator('.css-r99fy3').locator('//button[text()="Import"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
              

        }

        async clickeditriderbutton(){
                await this.page.frameLocator('.css-r99fy3').locator('//button[text()="Edit"]').first().click()
        }

        async clickdeleteriderbutton(){
                await this.page.frameLocator('.css-r99fy3').locator('//button[text()="Delete"]').first().click()
                await this.page.waitForSelector('button')
        }

        async clickokindeleterider(){
                await this.page.frameLocator('.css-r99fy3').locator('//button[text()="Ok"]').click()
        }
        //game operation
        async clickgameoperation(){
                await this.page.frameLocator('iframe').locator("//h6[text()='test_by_Automation']/parent::div/following-sibling::div//div//div//p[text()='Game Operations']").click()
        }

        async clickaddeventbutton(){
                await this.page.frameLocator('.css-r99fy3').locator("//button[text()='Add Event']").click()
        }

        async typetestevent(){
                await this.page.frameLocator('.css-r99fy3').locator('//input[@id="P-9080702712"]').type("test_event")
        }

        async clickaddbutton(){
                await this.page.frameLocator('.css-r99fy3').locator('//button[text()="ADD"]').click()
        }

        async clickaddridersbutton(){
                await this.page.frameLocator('.css-r99fy3').locator('//button[text()="Add Riders"]').click()
        }

        // game settings

        async clickgamesettings(){
                await this.page.frameLocator('iframe').locator("//h6[text()='test_by_Automation']/parent::div/following-sibling::div//div//div//p[text()='Game Settings']").click()
        }

        async typeincorrectguesscore(){
                await this.page.frameLocator('.css-r99fy3').locator('//input[@id="P16913967962"]').type('4')
        }
        async typecorrectguesscore(){
                await this.page.frameLocator('.css-r99fy3').locator('//input[@id="P20211625572"]').type('5')
        }
        async typecloseguesscore(){
                await this.page.frameLocator('.css-r99fy3').locator('//input[@id="P-19440389782"]').type('6')
        }
        async typefarguessscore(){
                await this.page.frameLocator('.css-r99fy3').locator('//input[@id="P-16142732172"]').type('7')
        }

        async typeguesstime(){
             await this.page.frameLocator('.css-r99fy3').locator('//input[@id="P17027129232"]').fill('20')   
        }
        //edit section

        async clickeditsection(){
                await this.page.frameLocator('iframe').locator("//h6[text()='test_by_Automation']/parent::div/following-sibling::div//div//div//p[text()='Edit']").click()
        }
        async editconfigname(){
                const ele = this.page.frameLocator('iframe').first().locator('//input[@id="P-9080702712"]')
                await ele.fill("test_by_Automation_edited")
        }  
        async clickeditbutton(){
                const ele = this.page.frameLocator('iframe').first().locator('//button[text()="EDIT"]')
                await ele.click()
        }
        async clickdeletesection(){
                await this.page.frameLocator('iframe').locator("//h6[text()='test_by_Automation_edited']/parent::div/following-sibling::div//div//div//p[text()='Delete']").click()
        } 

        async clickdeletebutton(){
                const ele = this.page.frameLocator('iframe').first().locator('//button[text()="Delete"]')
                await ele.click()
        }

    }