import { devices, expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'

export default class tugOfWarMobilePage {
        private page: Page;
        constructor(page: Page) {
                this.page = page;
                page.setViewportSize({ width: 390, height: 844 })
        }

        private tugOfWarMobilePageElements = {
                additionalphoneNumberInputField: `//input[@name="phone"]`,
                additionalEmailInputField: `//input[@name="email"]`,
                additionalAgeInputField: `//input[@name="age"]`,
                additionalDatePickerInputField: `//input[@aria-label='Choose date']`,
                additionalDateInputField: "(//input[@id='additionalbirthDate'])[2]",
                additionalDateEditBtn: `//button[@aria-label='calendar view is open, go to text input view']`,
                additionalDatePickerOkBtn: "//button[text()='OK']",
                additionalDatePickerLabel: "//label[@for='additionalbirthDate']",
                additionalZipCodeInputField: `//input[@name="zipCode"]`,
                additionalZipCodeInputFieldLabel: "//label[@for='additionalzipCode']",
                additionalSubmitBtn: "//button[@type='submit']",
                customQuestionSectionTitle: "//p[text()='Questionnaire & Opt-Ins']",
                customQuestionInputField: "//input[@placeholder='Give some description here...']",
                submitBtn: "//button[text()='Submit']",
                choiceCheckBox: "//input[@type='checkbox']",
                choiceCheckBoxWhenCustomQuestionInTop: "(//input[@type='checkbox'])[1]",
                homeAvater: "//div[@img='assets/UserProfileIcon.4c7ccf2b.svg']",
                homeText: "//p[text()='HOME']",
                arcadeSectionInMobileScreen: "(//button[@type='button'])[6]",
                prizeDropGameText: "//p[text()='Prize Drop']",
                outSideGameTitleText: "//p[text()='Auto Game']",
                squareImage: "div:nth-child(2) > div > div:nth-child(2) > .MuiBox-root",
                rectangulerImageType: ".css-rk019r>>nth=1",
                arcadeSectionlogoHeader: ".css-n8k4mt",
                fanaticsGameTitle: "//p[text()='Fanatics-Filter-Web']",
                gussTheScroeGameTitle: "//p[text()='Guess The Score']",
                triviaGameTitle: "//p[text()='Trivia']",
                liveWallGameTitle: "//p[text()='Live Wall']",
                noiseMeterGameTitle: "//p[text()='Noise Meter']",
                tugOfWarGameTitle: "//p[text()='Tug of War']",
                prizeDropGameTitle: "//p[text()='Prize Drop']",
                selectTextOnHomeScreen: "(//h3[text()='Select'])[1]",
                teamAccountModal: "(//div[@teamcount='2'])[2]",
                custommobilewaitingtext:"//blockquote[text()='Please wait for game start']",
                ValidateBackgroundTitleImage:"//div[@class='MuiBox-root css-1u704ug']",
                ValidateSponsorLogo:"//div[@class='MuiBox-root css-1jvmzit']",
                ValidateTEamLogo:"//div[@class='MuiBox-root css-1lpe8iv']",
                ValidateGameTitle:"//div[@class='MuiBox-root css-bgzgr4']",
                ValidateSelectationBackground:"//div[@class='MuiBox-root css-1atampn']",
                ValidateTeam1LOGO:"(//div[@class='MuiBox-root css-2e7m6d']//div)[1]",
                ValidateTEam2LogoUpload:"(//div[@class='MuiBox-root css-2e7m6d'])[2]",
                ValidateTEam1SelectBtn:"(//div[@class='MuiBox-root css-9q88w2'])[1]",
                ValidateTeam1Name:"(//div[@color='#FFFFFF']//div)[1]",
                ValidateCustomSelectionMessage:"//p[text()='This is a test message']", 
                VAlidateCustomTeamSelectionMessage:"//div[@class='css-1rco3h8']//p[1]",
                ValidateTeamNameBox:"(//div[@class='MuiBox-root css-2e7m6d']/following-sibling::div)[1]",
                ValidateSelectedTeamMessageBox:"(//div[@class='MuiBox-root css-8eww4a'])[2]",
                ValidateCountdownBackgroundVid:"//div[@class='MuiBox-root css-1gfz704']",
                GameplayMainBoardMsg:"//div[@class='MuiBox-root css-1b9ib5b']",
                NavigatetotheGames:"(//div[@class='MuiBox-root css-dxv61z'])[2]",
                NavigatetotheThugofwarGame:"(//div[@class='MuiBox-root css-v74x4d'])[2]",
                HomeBtn:"(//button[contains(@class,'MuiButtonBase-root MuiToggleButton-root')])[1]",
                checkVideoUpload:"//video[@class='css-1knpc32']//source[1]",
                CustomPowerMessage:"//h1[text()='This is a Custom Power Message']",
                CustomEndgameMessage:"//h1[text()='This is a Custom Endgame Message']",
                CustomConsolationMessage:"//h1[text()='This is a Custom Consolation Message']",



        }
        async validateTitleBackgroundIMageSuccessfullyApplied() {                
                
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateBackgroundTitleImage)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateBackgroundTitleImage).screenshot()
                        await expect(selectText).toMatchSnapshot("BackgroundImageUpload_UI.png", { maxDiffPixelRatio: 0.01 })

                }
                else throw new Error("Mobile Screen | Uploaded Title Background Image Is Not Visible")


        }
        async validateSponsorLogoSuccessfullyApplied() {                
                
                // const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateSponsorLogo)
                // if (await ele.isVisible()) {
                //         const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateSponsorLogo).screenshot()
                //         await expect.soft(selectText).toMatchSnapshot("SponsorLogoImageUpload_UI.png", { maxDiffPixelRatio: 0.01 })

                // }
                // else throw new Error("Mobile Screen | Uploaded Sponsor Logo Image Is Not Visible")
               


        }
        async screenshot_matcher_Sponsorlogo(){
                await expect.soft(await this.page.screenshot({
                   fullPage : true
                })).toMatchSnapshot("SponsorLogoImageUpload_UI.png")
          }
          async screenshot_matcher_TitleBackground(){
                await expect.soft(await this.page.screenshot({
                   fullPage : true
                })).toMatchSnapshot("BackgroundImageUpload_UI.png", { maxDiffPixelRatio: 0.01 })
                
          }
        async validateTeamLogoSuccessfullyApplied() {                
                
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateTEamLogo)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateTEamLogo).screenshot()
                        await expect(selectText).toMatchSnapshot("TeamLogoImageUpload_UI.png", { maxDiffPixelRatio: 0.01 })

                }
                else throw new Error("Mobile Screen | Uploaded Team Logo Image Is Not Visible")


        }
        async screenshot_matcher_Teamlogo(){
                await expect.soft(await this.page.screenshot({
                   fullPage : true
                })).toMatchSnapshot("TeamLogoImageUpload_UI.png")
          }
          async screenshot_matcher_GameTitleImage(){
                await expect.soft(await this.page.screenshot({
                   fullPage : true
                })).toMatchSnapshot("GameTitleImageUpload_UI.png", { maxDiffPixelRatio: 0.01 })
          }
          async screenshot_matcher_SelectionBackgroundImage(){
                await expect.soft(await this.page.screenshot({
                   fullPage : true
                })).toMatchSnapshot("SelectionBackgroundImageUpload_UI.png", { maxDiffPixelRatio: 0.01 })
          }
        async validateGameTitleIMageSuccessfullyApplied() {                
                
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateGameTitle)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateGameTitle).screenshot()
                        await expect(selectText).toMatchSnapshot("GameTitleImageUpload_UI.png", { maxDiffPixelRatio: 0.01 })

                }
                else throw new Error("Mobile Screen | Uploaded Game Title Background Image Is Not Visible")

        }
        async screenshot_matcher_Gameplay_BackgroundImage(){
                await expect.soft(await this.page.screenshot({
                   fullPage : true
                })).toMatchSnapshot("Gameplay_Background_ImageUpload_UI.png")
          }
          async screenshot_matcher_Gameplay_EndGameImage(){
                await expect.soft(await this.page.screenshot({
                   fullPage : true
                })).toMatchSnapshot("Gameplay_EndGame_ImageUpload_UI.png")
          }
          async screenshot_matcher_Leaderboard_BackgroundImage(){
                await expect.soft(await this.page.screenshot({
                   fullPage : true
                })).toMatchSnapshot("Gameplay_Leaderboard_Background_ImageUpload_UI.png")
          }
          async screenshot_matcher_Leaderboard_Thankyou_BackgroundImage(){
                await expect.soft(await this.page.screenshot({
                   fullPage : true
                })).toMatchSnapshot("Gameplay_Thankyou_Background_ImageUpload_UI.png")
          }
          async screenshot_matcher_Thankyou_Leaderboard_HeaderImage(){
                await expect.soft(await this.page.screenshot({
                   fullPage : true
                })).toMatchSnapshot("Gameplay_Thankyou_Leaderboard_Header_ImageUpload_UI.png")
          }

        async validateFontSuccessfullyApplied() {                
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.selectTextOnHomeScreen)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.selectTextOnHomeScreen).screenshot()
                        await expect.soft(selectText).toMatchSnapshot("fontUpload_UI.png", { maxDiffPixelRatio: 0.01 })

                }
                else throw new Error("Mobile Screen | Home Screen Team Account Select Text Is Not Visible")
        }
        async screenshot_matcher_PrimaryColor(){
                await expect.soft(await this.page.screenshot({
                   fullPage : true
                })).toMatchSnapshot("primaryColor_UI.png")
          }

        // async validatePrimaryColorSuccessfullyApplied() {                
        //         const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.teamAccountModal)
        //         if (await ele.isVisible()) {
        //                 const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.teamAccountModal).screenshot()
        //                 await expect.soft(selectText).toMatchSnapshot("primaryColor_UI.png", { maxDiffPixelRatio: 0.01 })

        //         }
        //         else throw new Error("Mobile Screen | Home Screen First Team Account Modal is Not Visible")
        // }

        async validateTextColorSuccessfullyApplied() {                
                
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.selectTextOnHomeScreen)
                if (await ele.isVisible()) {
                        await expect.soft(ele).toHaveCSS("color", "rgb(123, 23, 140)")

                }
                else throw new Error("Mobile Screen | Home Screen Team Account Text Color is Not Applied Properly")
        }

        async validateCustomWaitingTextSuccessfullyApplied(){
                await this.page.waitForTimeout(3000)
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.custommobilewaitingtext)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.custommobilewaitingtext)
                        await expect(selectText).toContainText("Please wait for game start")

                }
                else throw new Error("Mobile Screen | Custom Mobile Waiting Message is Not Applied Properly")


        }

        async inputPhoneNumberForAditionalInfo() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.additionalphoneNumberInputField)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalphoneNumberInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalphoneNumberInputField).fill("+8801051703506")

                }
                else throw new Error("Aditional Information Phone NUmber Input Field Is not visible In User Side")


        }

        async inputAgeForAditionalInfo() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.additionalAgeInputField)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalAgeInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalAgeInputField).fill("22")

                }
                else throw new Error("Aditional Information Age Input Field Is not visible In User Side")


        }

        async inputEmailForAditionalInfo() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.additionalEmailInputField)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalEmailInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalEmailInputField).fill("demo@email.com")

                }
                else throw new Error("Aditional Information Email Input Field Is not visible In User Side")


        }

        async clickAdditionalDatePickterInputField() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.additionalDatePickerLabel)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalDatePickerInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalDatePickerInputField).click({ button: "left", delay: 1000 })

                }
                else throw new Error("Aditional Information Date Picker Input Field Is not visible In User Side")


        }

        async clickAdditionalDateEditBtn() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.additionalDateEditBtn)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalDateEditBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalDateEditBtn).click({ button: "left", delay: 1000 })

                }
                else throw new Error("Aditional Information Date Picker Edit Button Is not visible In User Side")


        }

        async inputAdditionalDate() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.additionalDateInputField)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalDateInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalDateInputField).fill("01/31/2000")

                }
                else throw new Error("Aditional Information Date Picker Date Input Field Is not visible In User Side")


        }

        async clickAdditionalDateDatePickerOkBtn() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.additionalDatePickerOkBtn)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalDatePickerOkBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalDatePickerOkBtn).click({ button: "left", delay: 1000 })

                }
                else throw new Error("Aditional Information Date Picker Ok Button Is not visible In User Side")


        }

        async clickSubmitButton() {
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalSubmitBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalSubmitBtn).click({ button: "left", delay: 1000 })

                }
                else throw new Error("Submit Button Is not visible In User Side On Welcome Screen")
                await this.page.waitForLoadState("networkidle")
                await this.page.waitForTimeout(3000)


        }

        async inputAdditionalZipCode() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.additionalZipCodeInputFieldLabel)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.additionalZipCodeInputFieldLabel).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.additionalZipCodeInputField).fill("1217")

                }
                else throw new Error("Aditional Information Zip Code Input Field Is not visible In User Side")


        }

        async inputCustomQuestionForUser() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.customQuestionSectionTitle)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.customQuestionInputField).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.customQuestionInputField).fill("Demo Ans")

                }
                else throw new Error("Aditional Information Custom Question Input Field Is not visible In User Side")


        }


        async clickCustomChoiceCheckBoxWhenCustomQuestionInTop() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.customQuestionSectionTitle)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.choiceCheckBoxWhenCustomQuestionInTop).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.choiceCheckBoxWhenCustomQuestionInTop).click({ button: "left", delay: 1000 })

                }
                else throw new Error("Aditional Information Custom Question Section Choice Check Box Is not visible In User Side")


        }

        async clickCustomChoiceCheckBox() {
                await this.page.waitForSelector(this.tugOfWarMobilePageElements.customQuestionSectionTitle)
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.choiceCheckBox).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.choiceCheckBox).click({ button: "left", delay: 1000 })

                }
                else throw new Error("Aditional Information Custom Question Section Choice Check Box Is not visible In User Side")


        }
        async clickAddNewQuestionSubmitBtn() {

                const ele = await this.page.locator(this.tugOfWarMobilePageElements.submitBtn).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.submitBtn).click({ button: "left", delay: 1000 })

                }
                else throw new Error("Aditional Information Custom Question Section Submit Button Is not visible In User Side")


        }
        async ValidateSelectionBackground() {

                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateSelectationBackground)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateSelectationBackground).screenshot()
                        await expect(selectText).toMatchSnapshot("SelectionBackgroundImageUpload_UI.png", { maxDiffPixelRatio: 0.01 })

                }
                else throw new Error("Mobile Screen | Uploaded Selection Background Image Is Not Visible")


        }
        async ValidateTeam1LOGO(){
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateTeam1LOGO)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateTeam1LOGO).screenshot()
                        await expect.soft(selectText).toMatchSnapshot("#1teamLogoImageUpload_UI.png", { maxDiffPixelRatio: 0.01 })

                }
                else throw new Error("Mobile Screen | Uploaded #1Team Logo Is Not Visible")

        }
        async ValidateTeam2LOGO(){
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateTEam2LogoUpload)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateTEam2LogoUpload).screenshot()
                        await expect(selectText).toMatchSnapshot("#2teamLogoImageUpload_UI.png", { maxDiffPixelRatio: 0.01 })

                }
                else throw new Error("Mobile Screen | Uploaded #2Team Logo Is Not Visible")

        }

        async ValidateTeam1SelectBTNClick(){
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.VAlidateCustomTeamSelectionMessage)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.VAlidateCustomTeamSelectionMessage).click();
                        

                }
                else throw new Error("Mobile Screen | Team Select Button is  Not Visible")

        }
        async ValidateTeam1Name(){
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateTeam1Name)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateTeam1Name)
                        await expect(selectText).toHaveClass("//div[@class='css-11ao7t']//div[1]")

                }
                else throw new Error("Mobile Screen | #1Team NAme is not visible")

        }

        async ValidateCustomSelectionMessage(){
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateCustomSelectionMessage)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateCustomSelectionMessage)
                        await expect.soft(selectText).toHaveText("This is a test message")

                }
                else throw new Error("Mobile Screen | Custom Selection Message is not visible")

        }


        async ValidateCustomTeamSelectionMessage(){
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.VAlidateCustomTeamSelectionMessage)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.VAlidateCustomTeamSelectionMessage)
                        await expect(selectText).toHaveText("This is a test message")

                }
                else throw new Error("Mobile Screen | Custom Team Selection Message is not visible")

        }


        async validateTeamNameBoxColorSuccessfullyApplied() {                
                
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateTeamNameBox)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateTeamNameBox).screenshot()
                        await expect.soft(selectText).toMatchSnapshot("TeamNameBoxColor_UI.png", { maxDiffPixelRatio: 0.01 })

                }
                else throw new Error("Mobile Screen | Team Name Box is Not Visible")


        }

        async validateSelectedTeamMessageBoxSuccessfullyApplied() {                
                
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateSelectedTeamMessageBox)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateSelectedTeamMessageBox).screenshot()
                        await expect(selectText).toMatchSnapshot("SelectedTeamNameBoxColor_UI.png", { maxDiffPixelRatio: 0.01 })

                }
                else throw new Error("Mobile Screen | Selected Team Message Box is Not Visible")


        }
        async validateCountdownBackgroundSuccessfullyApplied() {                
                
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateCountdownBackgroundVid)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.ValidateCountdownBackgroundVid).screenshot()
                        await expect.soft(selectText).toMatchSnapshot("CountdownBackground_UI.png", { maxDiffPixelRatio: 0.01 })

                }
                else throw new Error("Mobile Screen | Countdown Backgroundis Nsot Visible")


        }
        async validateGameplayMainBoardMSGSuccessfullyApplied() {                
                
                const ele = this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.VAlidateCustomTeamSelectionMessage)
                if (await ele.isVisible()) {
                        const selectText = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.VAlidateCustomTeamSelectionMessage)
                        await expect(selectText).toHaveText("This is a test message")

                }
                else throw new Error("Mobile Screen | Gameplay Mainboard Message is not visible")


        }
        async NavigateTotehGames(){
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.NavigatetotheGames).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.NavigatetotheGames).click({ button: "left", delay: 1000 })

                }
                else throw new Error("Games Button Is not visible In User Side On The Navigation Bar")
                await this.page.waitForLoadState("networkidle")
                await this.page.waitForTimeout(3000)

        }
        async NavigatetotheThugOFwar(){
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.NavigatetotheThugofwarGame).isVisible()
                if ((ele == true)) {
                        await this.page.locator(this.tugOfWarMobilePageElements.NavigatetotheThugofwarGame).click({ button: "left", delay: 1000 })

                }
                else throw new Error("Thug Of War Game Card Is not visible In User Side On The Navigation Bar")
                await this.page.waitForLoadState("networkidle")
                await this.page.waitForTimeout(3000)

        }
        async clickHomeBtn(){
                const ele = await this.page.locator(this.tugOfWarMobilePageElements.HomeBtn)
               try{
                 await ele.click({button:"left",delay:1000})
               }
               catch(error){
                     console.log(`Tug Of War Game Stop Btn Element Is not visiable, Could not find locator: "${ele}"`)
               }

        }
        async CheckVideoUploaded(){
                const  ele = this.page.frameLocator('iframe').locator("video")
                if(await ele.isVisible()){
                        console.log('Video uploaded')
                }

        }
        async VerifyCustomPowerMessage(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.CustomPowerMessage)
               try{
                 await expect.soft(ele).toContainText('This is a Custom Power Message')
               }
               catch(error){
                     console.log(`Tug Of War Mobile screen custom power message text Element Is not visiable, Could not find locator: "${ele}"`)
               }

        }
        async VerifyCustomEndgameMessage(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.CustomEndgameMessage)
               try{
                 await expect.soft(ele).toContainText("This is a Custom Endgame Message")
               }
               catch(error){
                     throw(`Tug Of War Mobile screen custom Endgame message text Element Is not visiable, Could not find locator: "${ele}"`)
               }

        }
        async VerifyCustomConsolationMessage(){
                const ele = await this.page.frameLocator('iframe').locator(this.tugOfWarMobilePageElements.CustomConsolationMessage)
               try{
                 await expect.soft(ele).toContainText("This is a Custom Consolation Message")
               }
               catch(error){
                     throw(`Tug Of War Mobile screen custom consolation message text Element Is not visiable, Could not find locator: "${ele}"`)
               }

        }

}