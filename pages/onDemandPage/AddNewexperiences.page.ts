import { expect, Page } from "@playwright/test";
import { existsSync, readFileSync } from 'fs'
import BaseFunctions from "@base-function/baseFunctions";
export default class addnewexperiencePage {
      private base: BaseFunctions;
      constructor(private page: Page
      ) {
            this.base = new BaseFunctions(page);
      }
      private addNewExperiencePageElement = {
            HomeAvatar: "//div[contains(@class,'MuiAvatar-root MuiAvatar-circular')]",
            menuPage: "//p[text()='Menu']",
            LengthAlert: "//p[text()='Minimum Length must be greater than 3 digits']",
            Imageupload: "//div[@class='MuiBox-root css-gtq43u']",
            ChooseImageButton: "//button[text()='Choose File']",
            InvalidFiletypeAlertmodal: "//p[text()='File type is not supported']",
            InvalidFiletypeAlertokbtn: "//button[text()='Ok']",
            Imageuploadclosebutton: "//button[@aria-label='Close']",
            Invalidtitlealertvdo: "//p[contains(@class,'MuiFormHelperText-root Mui-error')]",
            VideoUploadBTtN: "//div[@class='MuiBox-root css-v2612']",
            Invalidimageuploadbtnweb: "//div[@class='MuiBox-root css-v2612']",
            Invalidalertweb: "//p[contains(@class,'MuiFormHelperText-root Mui-error')]",
            AddNewPlusBtn: "(//button[@aria-label='Add new configuration']//span)[2]",
            AddOnDemandConfiguration: "//p[text()='Add On-Demand Configuration']",
            InputConfiguration: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]",
            ConfigurationListBoox: '//div[@aria-haspopup="listbox"]',
            SelectedConfiguration: "//li[@role='option']",
            AddNewConfigurationSaveBtn: "//button[text()='Save']",
            AddNewConfigurationDismissBtn: "//button[text()='Dismiss']",
            MobileQRCodeBtn: "//button[@aria-label='QR code link']",
            MobileQRCodeText: "//h2[text()='Mobile QR Code']",
            MobileLinkOpenbtn: "//a[@aria-label='Open Link']",
            MobileLinkCopyBtn: "//button[@aria-label='Copy Link']",
            SaveQRCode: "//button[text()='Save QR Code']",
            ExportConfigurationBtn: "//button[@aria-label='Export configuration']",
            EditConfigureBtn: "//button[@aria-label='Edit current configuration']",
            StartBtn: "//button[text()='Start']",
            StopBtn: "//button[text()='Stop']",
            OkBtn: "//button[text()='Ok']",
            QRCodeCloseBtn: "//button[@active='true']",
            ImportBtn: "//button[@aria-label='Import configuration']",
            ExperincesThreeDotBtn: "//div[@class='MuiBox-root css-11cnyl1']",
            ExperincesEditBtn: "//p[text()='Edit']",
            ExperincesDeleteBtn: "//p[text()='Delete']",
            ExperienceTileTypeText: "//p[text()='Experience Tile Type']",
            AddExperincesPopupCloseBtn: "//div[@class='MuiBox-root css-1ydarmv']",
            OndemandSliderMinusBtn: "(//h2[text()='On-Demand Flow Chart']/following::button[@type='button'])[1]",
            OndemandSliderPlusBtn: "(//h2[text()='On-Demand Flow Chart']/following::button[@type='button'])[2]",
            AddNewExperinces: "(//button[text()='Add new Experiences'])[1]",
            onDemandBtn: "text=On Demand",
            addnewExperincesImageBtn: "//button[@value='image']//p[1]",
            inputTitleName: "//input[@placeholder='Title']",
            headerTextBtn: "(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[2]",
            websiteURLtoggle: "//span[contains(@class,'MuiSwitch-root MuiSwitch-sizeSmall')]",
            invalidLengthalert: "//p[contains(@class,'MuiFormHelperText-root Mui-error')]",
            inputHeaderText: "//input[@id='P8727470922']",
            inputTitle: "//input[@placeholder='Title']",
            headerTextLarge: "//li[text()='Large']",
            headerTextMedium: "//li[text()='Medium']",
            headerTextSmall: "//li[text()='Small']",
            inputWebSiteLink: "//input[@placeholder='Website URL']",
            ScaleTypeFill: "//div[@class='MuiBox-root css-131jw6l']",
            ScaleTypeFitBtn: "//div[@class='MuiBox-root css-ha9cv5']",
            ScaleTypeStretchBtn: "//div[@class='MuiBox-root css-aoibs0']",
            VerticaleAlignmentTop: "//div[@class='MuiBox-root css-8y3b2x']",
            CenterlAlignment: "//div[@class='MuiBox-root css-eve5j2']",
            BottomAlignment: "//div[@class='MuiBox-root css-1fpzr3o']",
            NewlyAddedExThreedot: "(//div[@class='MuiBox-root css-gk83b7'])[2]",
            NewlyAddedExprienceDeleteBtn: "(//p[text()='Delete'])[2]",
            SaveBtn: "//button[text()='Save']",
            VideoBtn: "//p[text()='Video']",
            inputHeader: "//input[@placeholder='Header']",
            headerTexDropDown: "(//label[contains(@class,'MuiFormLabel-root MuiInputLabel-root')]/following-sibling::div)[2]",
            HeaderText: "//p[text()='Header Text']",
            ShowcontrolCheckBox: "(//label[contains(@class,'MuiFormControlLabel-root MuiFormControlLabel-labelPlacementStart')]//span)[1]",
            EnablePlayVideoCheckBox: "(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]",
            MuteVideoCheckBox: "//span[text()='Enable Mute Video']",
            EnableloopingCheckBox: "//span[text()='Enable Looping']",
            EnableAudio: "//span[text()='Enable Audio']",
            AutoPlayVideo: "//span[text()='Autoplay Video']",
            WebSection: "//button[@value='web']//p[1]",
            webHeaderDropDown: "(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[2]",
            enableWebsiteUrl: "(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]",
            WebImageUpload: "//div[@class='MuiBox-root css-v2612']",
            EngagementSection: "//p[text()='Game/Engagement']",
            Engagementdropdown: "(//div[@role='button'])[2]",
            Engagement_1: "//li[@data-value='Engagement_1']",
            Engagement_2: "//li[@data-value='Engagement_2']",
            Engagement_3: "//li[@data-value='Engagement_3']",
            Configurationdropdown: "(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[3]",
            Configuration_1: "//li[@data-value='Configuration_1']",
            Configuration_2: "//li[@data-value='Configuration_2']",
            Configuration_3: "//li[@data-value='Configuration_3']",
            PollSection: "//p[text()='Poll']",
            inputPollTitleName: "//input[@placeholder='Title']",
            Fonts: "//a[.='Font']",
            Arial: "//li[text()='Arial']",
            BlockType: "//a[@title='Block Type']",
            BlockType_Normal: "//li[text()='Normal']",
            BlockH1: "//li[text()='H1']",
            BlockH2: "//li[text()='H2']",
            BlockH3: "//li[text()='H3']",
            BlockH4: "//li[text()='H4']",
            BlockH5: "//li[text()='H5']",
            BlockH6: "//li[text()='H6']",
            Blockquote: "//li[text()='Blockquote']",
            Bold: "//div[@title='Bold']//img[1]",
            Italic: "//div[@title='Italic']//img[1]",
            Underline: "//div[@title='Underline']//img[1]",
            StrikeThrough: "//div[@title='Strikethrough']//img[1]",
            Colorpicker: "//div[@title='Color Picker']//img",
            Left: "//div[@title='Left']",
            Center: "//div[@title='Center']//img[1]",
            Right: "//div[@title='Right']//img[1]",
            Outdent: "//div[@title='Outdent']//img[1]",
            Indent: "//div[@title='Indent']//img[1]",
            Ordered: "//div[@title='Ordered']//img[1]",
            Unordered: "//div[@title='Unordered']//img[1]",
            Remove: "//div[@title='Remove(styles) only']//img[1]",
            inputQuestion: "//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr']",
            AnswerTypeFreeText: "//button[@value='free text']",
            AnswerTypeMultiple: "//p[text()='Multiple']",
            AnswerShownas_Image: "(//p[text()='Image'])[2]",
            AnswerShownas_Text: "//p[text()='Text']",
            FontSizedropdown: "(//div[@role='button'])[2]",
            FontSize_Large: "//li[text()='Large']",
            FontSize_Medium: "//li[text()='Medium']",
            FontSize_Small: "//li[text()='Small']",
            addanswerBtn: "//button[text()='Add Answer']",
            typeAnswer1: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]",
            DeleteAddedAnswer: "//div[@class='MuiBox-root css-10a3ccs']",
            PollimageRadioBtn: "//input[@value='image']",
            PollvideoRadioBtn: "(//input[@type='radio'])[2]",
            imageUploadForPollSection: "//div[@class='MuiBox-root css-v2612']",
            uploadVideo: "//div[@class='MuiBox-root css-v2612']",
            triviaSectio: "//button[@value='trivia']//p[1]",
            inputTriviaTitlezName: "//input[@placeholder='Title']",
            inputAnswer_1: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]",
            inputAnswer_2: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]",
            inputAnswer_3: "(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]",
            inputcorrectAnswer: "(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[2]",
            correctanswerText: "//p[text()='Correct Answer']",
            clickquestionfield: "(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[1]",
            cannotbeemptytext: "//p[text()='Can`t be empty']",
            DeleteBtn: "//button[@aria-label='Delete']",
            inputAnswer: "//input[@placeholder='Type here text...']"
      }
      // export default class addnewexperiencePage {
      //       [x: string]: any;
      //       private page: Page;
      //       static login: any;
      //       static buffer: void;
      //       constructor(page: Page) {
      //             this.page = page;
      //       }
      getRandomName() {
            return "Auto" + Date.now() + "Config"
      }
      EditedRandomConfigure() {
            return "Edited" + Date.now() + "Config"
      }
      async clickHomeAvater() {
            const ele = this.page.locator(this.addNewExperiencePageElement.HomeAvatar)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(3000)
            }
            catch (error) {
                  throw new Error(`Home avatar button is not visible,Could not find locator:"${error}"`)
            }
      }
      async onDemandBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.onDemandBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(4000)
            }
            catch (error) {
                  throw new Error(`On demand button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickaddnewex() {
            const ele = this.page.locator(this.addNewExperiencePageElement.AddNewExperinces)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(2000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickWebURLtoggle() {
            const ele = this.page.locator(this.addNewExperiencePageElement.websiteURLtoggle)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces image section web url toggle button is not visible,Could not find locator:"${error}"`)
            }
      }
      //image button
      async ImageBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.addnewExperincesImageBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  expect(ele).toContainText('Image')
            }
            catch (error) {
                  throw new Error(`On demand add new experinces image button is not visible,Could not find locator:"${error}"`)
            }
      }
      async inputTitleName() {
            const ele = this.page.locator(this.addNewExperiencePageElement.inputTitleName)
            try {
                  await ele.fill("Auto Image Experience")
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces image section input title field is not visible,Could not find locator:"${error}"`)
            }
      }
      async checkTitleText() {
            const locator = this.page.locator("//input[@placeholder='Title']")
            expect(locator).toBeVisible()
            await locator.fill("Title")
      }
      async inputHeaderText() {
            const ele = this.page.locator(this.addNewExperiencePageElement.inputHeaderText)
            try {
                  await ele.fill('Header')
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand image section header field is not visible,Could not find locator:"${error}"`)
            }
      }
      //select Category
      async HeaderTextBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.headerTextBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(2000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces image section header text button is not visible,Could not find locator:"${error}"`)
            }
      }
      async ErrorMessageIfTitleFielsIsEmpty() {
            const ele = this.page.locator(this.addNewExperiencePageElement.inputTitleName)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.locator(this.addNewExperiencePageElement.Engagementdropdown).click()
                  const ele1 = await this.page.locator(this.addNewExperiencePageElement.cannotbeemptytext)
                  await expect(ele1).toContainText('Can`t be empty')
                  await this.page.waitForTimeout(3000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces iengagement section error message can't be empty is not visible,Could not find locator:"${error}"`)
            }
      }
      //select Size Category
      async selectLarge() {
            const ele = this.page.locator(this.addNewExperiencePageElement.headerTextLarge)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces image section header text large button is not visible,Could not find locator:"${error}"`)
            }
      }
      async selectMedium() {
            const ele = this.page.locator(this.addNewExperiencePageElement.headerTextMedium)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces image section header text medium button is not visible,Could not find locator:"${error}"`)
            }
      }
      async selectSmall() {
            const ele = this.page.locator(this.addNewExperiencePageElement.headerTextSmall)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces image section header text small button is not visible,Could not find locator:"${error}"`)
            }
      }
      async inputWebsiteLink() {
            const ele = this.page.locator(this.addNewExperiencePageElement.inputWebSiteLink)
            try {
                  await ele.fill("https://www.linkedin.com/")
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces image section input web link field is not visible,Could not find locator:"${error}"`)
            }
      }
      //click Fill options Alignment button
      async clickFillBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.ScaleTypeFill)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces image section scale type fill button is not visible,Could not find locator:"${error}"`)
            }
      }
      //click Fit options Alignment button
      async clickFitBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.ScaleTypeFitBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces image section scale type fit button is not visible,Could not find locator:"${error}"`)
            }
      }
      //click Stretch options Alignment button
      async clickStretchBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.ScaleTypeStretchBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces image section scale type Stretch button is not visible,Could not find locator:"${error}"`)
            }
      }
      //click top Alignment button
      async clickTopAlignmentBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.VerticaleAlignmentTop)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces image section verticale alignment top button is not visible,Could not find locator:"${error}"`)
            }
      }
      //click Center Alignment button
      async clickCenterAlignmentBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.CenterlAlignment)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces image section verticale alignment center button is not visible,Could not find locator:"${error}"`)
            }
      }
      //click Bottom Alignment button
      async clickBottomAlignmentBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.BottomAlignment)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces image section verticale alignment bottom button is not visible,Could not find locator:"${error}"`)
            }
      }
      //click Bottom Alignment button
      async clickNewlyAddedExpThreeDotBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.NewlyAddedExThreedot).last()
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces newly added three dot button is not visible,Could not find locator:"${error}"`)
            }
      }
      //click Bottom Alignment button
      async clickNewlyAddedExprienceDeleteBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.NewlyAddedExprienceDeleteBtn).last()
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces newly added delete button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickSaveBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.SaveBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(3000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces save button is not visible,Could not find locator:"${error}"`)
            }
      }
      // //////////////////////   //2nd step click Video Btn
      async clickVideoSection() {
            const ele = this.page.locator(this.addNewExperiencePageElement.VideoBtn)
            try {
                  expect(ele).toContainText('Video')
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces save button is not visible,Could not find locator:"${error}"`)
            }
      }
      async inputHeader() {
            const ele = this.page.locator(this.addNewExperiencePageElement.inputHeader)
            try {
                  await ele.fill("Header")
            }
            catch (error) {
                  throw new Error(`On demand add new experinces header input field is not visible,Could not find locator:"${error}"`)
            }
      }
      //select Category
      async HeaderTextDropDownBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.headerTexDropDown)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(2000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces header text drop down button is not visible,Could not find locator:"${error}"`)
            }
      }
      async verifyHeaderText() {
            const ele = this.page.locator(this.addNewExperiencePageElement.HeaderText)
            try {
                  await expect(ele).toContainText("Header Text")
                  await this.page.waitForTimeout(2000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces header text is not visible,Could not find locator:"${error}"`)
            }
      }
      async videoUploadFunction() {
            const filePath0 = "testData/videos/video.mp4"
            this.page.on("filechooser", async (filechooser) => {
                  //await this.page.waitForEvent('popup')
                  await filechooser.setFiles([filePath0])
            })
            await this.page.waitForTimeout(10000)
      }
      async videoUploadAlert() {
            const filePath0 = "testData/images/main_banner.webp"
            this.page.on("filechooser", async (filechooser) => {
                  //await this.page.waitForEvent('popup')
                  await filechooser.setFiles([filePath0])
            })
      }
      async ShowcontrolCheckBox() {
            const ele = this.page.locator(this.addNewExperiencePageElement.ShowcontrolCheckBox)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces show control check box is not visible,Could not find locator:"${error}"`)
            }
      }
      async EnablePlayVideoCheckBox() {
            const ele = this.page.locator(this.addNewExperiencePageElement.EnablePlayVideoCheckBox)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(2000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces enable play video check box is not visible,Could not find locator:"${error}"`)
            }
      }
      async MutevdoCheckBox() {
            const ele = this.page.locator(this.addNewExperiencePageElement.MuteVideoCheckBox)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(2000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces mute video check box is not visible,Could not find locator:"${error}"`)
            }
      }
      async enableloopingCheckBox() {
            const ele = this.page.locator(this.addNewExperiencePageElement.EnableloopingCheckBox)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(2000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces video section enable looping check box is not visible,Could not find locator:"${error}"`)
            }
      }
      async enableaudioCheckBox() {
            const ele = this.page.locator(this.addNewExperiencePageElement.EnableAudio)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(2000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces video section enable audio check box is not visible,Could not find locator:"${error}"`)
            }
      }
      async AutoplayvdoCheckBox() {
            const ele = this.page.locator(this.addNewExperiencePageElement.AutoPlayVideo)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(2000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces video section enable auto play checkbox button is not visible,Could not find locator:"${error}"`)
            }
      }
      // Web Button////////////////////
      async WebSection() {
            const ele = this.page.locator(this.addNewExperiencePageElement.WebSection)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(2000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces web section is not visible,Could not find locator:"${error}"`)
            }
      }
      async inputWebTitleText(name: string) {
            const ele = this.page.locator(this.addNewExperiencePageElement.inputTitleName)
            try {
                  await ele.fill(name)
                  await this.page.waitForTimeout(2000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces web section input web title input field is not visible,Could not find locator:"${error}"`)
            }
      }
      async inputWebHeaderText() {
            const ele = this.page.locator(this.addNewExperiencePageElement.inputHeaderText)
            try {
                  await ele.fill("Web Header")
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces web section input web title input field is not visible,Could not find locator:"${error}"`)
            }
      }
      //select Size Category
      async WebHeaderDropDownBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.webHeaderDropDown)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces web section web header dropdown is not visible,Could not find locator:"${error}"`)
            }
      }
      async enabledwebsiteUrl() {
            const ele = this.page.locator(this.addNewExperiencePageElement.enableWebsiteUrl)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces web section enable web url button is not visible,Could not find locator:"${error}"`)
            }
      }
      async inputWebsiteUrl() {
            const ele = this.page.locator(this.addNewExperiencePageElement.inputWebSiteLink)
            try {
                  await ele.fill("https://www.linkedin.com/")
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces web section enable web url button is not visible,Could not find locator:"${error}"`)
            }
      }
      async WebImageUploadFunction() {
            const ele = this.page.locator(this.addNewExperiencePageElement.WebImageUpload)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On Deamnd | Add New Exp Web Section Image Upload Button Is Not Visible | Could not find locator:"${error}"`)
            }
      }
      async EngagementSection() {
            const ele = this.page.locator(this.addNewExperiencePageElement.EngagementSection)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces engagement section is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickEngdropdownBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Engagementdropdown)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces engagement section engagement dropdown button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickEngagement_1() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Engagement_1)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces engagement section engagement_1 button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickEngagement_2() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Engagement_2)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces engagement section engagement_2 button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickEngagement_3() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Engagement_3)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces engagement section engagement_3 button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickConfigurationdropdown() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Configurationdropdown)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces engagement section configuration dropdown button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickConfiguration_1() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Configuration_1)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces engagement section configuration_1 button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickConfiguration_2() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Configuration_2)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces engagement section configuration_2 button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickConfiguration_3() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Configuration_3)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces engagement section configuration_3 button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickPollSection() {
            const ele = this.page.locator(this.addNewExperiencePageElement.PollSection)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section is not visible,Could not find locator:"${error}"`)
            }
      }
      async inputPollTitlename() {
            const ele = this.page.locator(this.addNewExperiencePageElement.inputPollTitleName)
            try {
                  await ele.fill("Auto Poll Title")
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section input title name field is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickFonts() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Fonts)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Fonts is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickArial() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Arial)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Arial is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickBlocktype() {
            const ele = this.page.locator(this.addNewExperiencePageElement.BlockType)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Block type is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickBlocknormal() {
            const ele = this.page.locator(this.addNewExperiencePageElement.BlockType_Normal)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Block type Normal is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickBlockH1() {
            const ele = this.page.locator(this.addNewExperiencePageElement.BlockH1)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section BlockH1 is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickBlockH2() {
            const ele = this.page.locator(this.addNewExperiencePageElement.BlockH2)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section BlockH2 is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickBlockH3() {
            const ele = this.page.locator(this.addNewExperiencePageElement.BlockH3)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section BlockH3 is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickBlockH4() {
            const ele = this.page.locator(this.addNewExperiencePageElement.BlockH4)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section BlockH4 is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickBlockH5() {
            const ele = this.page.locator(this.addNewExperiencePageElement.BlockH5)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section BlockH5 is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickBlockH6() {
            const ele = this.page.locator(this.addNewExperiencePageElement.BlockH6)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section BlockH6 is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickBlockquote() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Blockquote)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Block quote is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickBold() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Bold)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Bold is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickItalic() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Italic)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Italic is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickUnderline() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Underline)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section underline is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickStrikethrough() {
            const ele = this.page.locator(this.addNewExperiencePageElement.StrikeThrough)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Strike Through is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickColorpicker() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Colorpicker)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Color Picker is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickLeft() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Left)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section left is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickCenter() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Center)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Center is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickRight() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Right)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Right is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickOutdent() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Outdent)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Outdent is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickIndent() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Indent)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Indent is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickOrdered() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Ordered)
            try {
                  await ele.click({ button: "left", delay: 100 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Ordered is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickUnOrdered() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Unordered)
            try {
                  await ele.click({ button: "left", delay: 100 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Unordered is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickRemove() {
            const ele = this.page.locator(this.addNewExperiencePageElement.Remove)
            try {
                  await ele.click({ button: "left", delay: 100 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Unordered is not visible,Could not find locator:"${error}"`)
            }
      }
      async inputQuestion() {
            const ele = this.page.locator(this.addNewExperiencePageElement.inputQuestion)
            try {
                  await ele.fill("Demo Question")
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section input question field is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickQuestionfield() {
            const ele = this.page.locator(this.addNewExperiencePageElement.clickquestionfield)
            try {
                  await ele.click()
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section input question field is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickAnswerTypeFreeText() {
            await this.page.waitForTimeout(2000)
            const ele = this.page.locator(this.addNewExperiencePageElement.AnswerTypeFreeText)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(2000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Answer type free text option is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickAnswerTypeMultiple() {
            const ele = this.page.locator(this.addNewExperiencePageElement.AnswerTypeMultiple)
            try {
                  await ele.click({ button: "left", delay: 100 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Answer type multiple option is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickAnswersShownAsImage() {
            const ele = this.page.locator(this.addNewExperiencePageElement.AnswerShownas_Image)
            try {
                  await ele.click({ button: "left", delay: 100 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Answer Shown as Image is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickAnswersShownAsText() {
            const ele = this.page.locator(this.addNewExperiencePageElement.AnswerShownas_Text)
            try {
                  await ele.click({ button: "left", delay: 100 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Answer Shown as Text is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickFontSizeDropdown() {
            const ele = this.page.locator(this.addNewExperiencePageElement.FontSizedropdown)
            try {
                  await ele.click({ button: "left", delay: 100 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Font size drop down button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickFontSize_Large() {
            const ele = this.page.locator(this.addNewExperiencePageElement.FontSize_Large)
            try {
                  await ele.click({ button: "left", delay: 100 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Font size small button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickFontSize_Medium() {
            const ele = this.page.locator(this.addNewExperiencePageElement.FontSize_Medium)
            try {
                  await ele.click({ button: "left", delay: 100 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Font size Medium button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickFontSize_Small() {
            const ele = this.page.locator(this.addNewExperiencePageElement.FontSize_Small)
            try {
                  await ele.click({ button: "left", delay: 100 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section Font size Small button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickAddAnswerBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.addanswerBtn)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section add answer button is not visible,Could not find locator:"${error}"`)
            }
      }
      async TypeAnswer_1() {
            const ele = this.page.locator(this.addNewExperiencePageElement.inputAnswer_1)
            try {
                  await ele.fill("Add First Answer")
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section type answer1 input field is not visible,Could not find locator:"${error}"`)
            }
      }
      async TypeAnswer() {
            const ele = this.page.locator(this.addNewExperiencePageElement.inputAnswer).last()
            try {
                  await ele.fill("Add First Answer")
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section type answer1 input field is not visible,Could not find locator:"${error}"`)
            }
      }
      async TypeAnswer_2() {
            const ele = this.page.locator(this.addNewExperiencePageElement.inputAnswer_2)
            try {
                  await ele.fill("Add Second Answer")
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section type answer2 input field is not visible,Could not find locator:"${error}"`)
            }
      }
      async TypeAnswer_3() {
            const ele = this.page.locator(this.addNewExperiencePageElement.inputAnswer_3)
            try {
                  await ele.fill("Add Second Answer")
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section type answer3 input field is not visible,Could not find locator:"${error}"`)
            }
      }
      async inputCorrectAnswer() {
            const ele = this.page.locator(this.addNewExperiencePageElement.inputcorrectAnswer)
            try {
                  await ele.fill("Add correct Answer")
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section type input correct answer field is not visible,Could not find locator:"${error}"`)
            }
            //p[text()='Correct Answer']
      }
      async verifyCorrectAnswerText() {
            const ele = this.page.locator(this.addNewExperiencePageElement.correctanswerText)
            try {
                  await expect(ele).toContainText("Correct Answer")
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section type correct answer text is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickDeleteAddedAnswer() {
            const ele = this.page.locator(this.addNewExperiencePageElement.DeleteAddedAnswer).last()
            try {
                  await ele.click({ button: "left", delay: 100 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section added delete answer button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickImageRadioBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.PollimageRadioBtn)
            try {
                  await ele.click({ button: "left", delay: 100 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section image radio button is not visible,Could not find locator:"${error}"`)
            }
      }
      async uploadImage() {
            const ele = this.page.locator(this.addNewExperiencePageElement.imageUploadForPollSection)
            try {
                  await ele.click({ button: "left", delay: 100 })
            }
            catch (error) {
                  throw new Error(`One Demand | Add New Exp Poll Section Image Upload Button Is Not Visible | Could not find locator:"${error}"`)
            }
      }
      async Imageuploader() {
            const filePath0 = "testData/images/titlebanner.jpg"
            const [fileChooser] = await Promise.all([
                  // It is important to call waitForEvent before click to set up waiting.
                  this.page.waitForEvent('filechooser'),
                  // Opens the file chooser.
                  this.page.locator('//button[text()="Choose File"]').click()
            ]);
            await fileChooser.setFiles([filePath0]);
            await this.page.locator('//button[text()="Save"]').last().click()
            await this.page.waitForTimeout(9000)
            //await this.page.waitForEvent('')
      }
      async clickVideoRadioBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.PollvideoRadioBtn)
            try {
                  await ele.click({ button: "left", delay: 100 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section video radio button is not visible,Could not find locator:"${error}"`)
            }
      }
      async uploadvideo() {
            const filePath0 = "testData/videos/video.mp4"
            this.page.on("filechooser", async (filechooser) => {
                  await filechooser.setFiles([filePath0])
            })
            await this.page.waitForTimeout(6000)
      }
      async clickPollVideoBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.uploadVideo)
            try {
                  await ele.click({ button: "left", delay: 100 })
                  await this.page.waitForTimeout(5000)
            }
            catch (error) {
                  throw new Error(`On demand add new experinces poll section upload video  button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickTriviaSection() {
            const ele = this.page.locator(this.addNewExperiencePageElement.triviaSectio)
            try {
                  await ele.click({ button: "left", delay: 100 })
            }
            catch (error) {
                  throw new Error(`On demand add new experinces trivia section is not visible,Could not find locator:"${error}"`)
            }
      }
      async inputTriviaTitlename() {
            const ele = this.page.locator(this.addNewExperiencePageElement.inputTriviaTitlezName)
            try {
                  await ele.fill("Auto Trivia Title")
            }
            catch (error) {
                  throw new Error(`On demand add new experinces trivia section is not visible,Could not find locator:"${error}"`)
            }
            await ele.fill("Auto Trivia Title")
      }
      async Truploadvdo() {
            const filePath0 = "testData/videos/video.mp4"
            this.page.on("filechooser", async (filechooser) => {
                  await filechooser.setFiles([filePath0])
            })
            await this.page.waitForTimeout(7000);
      }
      async Addnewexperiencep() {
            const locator = this.page.locator("(//button[text()='Add new Experiences'])[2]")
            await locator.click()
      }
      async Threedot() {
            const locator = this.page.locator("//div[@class='MuiBox-root css-gk83b7']")
            expect(locator).toBeEnabled()
            await locator.click()
      }
      async Threedelete() {
            const locator = this.page.locator("//p[text()='Delete']")
            await locator.click()
      }
      async invalidLengthAlert() {
            const ele1 = this.page.locator(this.addNewExperiencePageElement.inputTitleName)
            try {
                  await ele1.fill('1');
                  await this.page.locator(this.addNewExperiencePageElement.headerTextBtn).click({ button: "left", delay: 1000 })
                  const ele = await this.page.locator(this.addNewExperiencePageElement.LengthAlert)
                  if (await ele.isVisible()) {
                        await expect(ele).toContainText('Minimum Length must be greater than 3 digits')
                  }
                  else throw new Error("Invalid length alert is not visible")
            }
            catch (error) {
                  throw new Error(`On demand image section input title name field is not visible,Could not find locator:"${ele1}"`)
            }
      }
      async imageUploadbutton() {
            const ele = await this.page.locator(this.addNewExperiencePageElement.Imageupload).isVisible()
            if ((ele == true)) {
                  await this.page.click(this.addNewExperiencePageElement.Imageupload)
            }
            else throw new Error("Image Upload button is not visible")
            // await this.page.waitForLoadState("networkidle")
      }
      async UploadImage() {
            const filePath0 = "testData/images/CountDownStageBanner.jpg"
            const [fileChooser] = await Promise.all([
                  // It is important to call waitForEvent before click to set up waiting.
                  this.page.waitForEvent('filechooser'),
                  // Opens the file chooser.
                  this.page.locator('//button[text()="Choose File"]').click({ force: true })
            ]);
            await fileChooser.setFiles([filePath0]);
            await this.page.locator("(//button[text()='Save'])[2]").click()
            await this.page.waitForTimeout(7000)
      }
      async chooseImage() {
            const ele = await this.page.locator(this.addNewExperiencePageElement.ChooseImageButton).isVisible()
            if ((ele == true)) {
                  await this.page.click(this.addNewExperiencePageElement.ChooseImageButton, { force: true })
                  await this.page.waitForTimeout(2000)
            }
            else throw new Error("Choose image button is not visible")
      }
      async invalidFiletypeAlert() {
            const ele = await this.page.locator(this.addNewExperiencePageElement.InvalidFiletypeAlertmodal)
            if (await ele.isVisible()) {
                  await expect(ele).toContainText("File type is not supported")
                  //await this.page.click(this.addNewExperiencePageElement.InvalidFiletypeAlertmodal, { force: true })
            }
            else throw new Error("Invalid File Type Alert is not visible")
            //await this.page.waitForLoadState("networkidle")
      }
      async GameTitleImageuploader() {
            const filePath0 = "testData/images/title.jpg"
            const [fileChooser] = await Promise.all([
                  this.page.waitForEvent('filechooser'),
                  this.page.locator('//button[text()="Choose File"]').click()
            ]);
            await fileChooser.setFiles([filePath0]);
            await this.page.waitForTimeout(2000)
            await this.page.locator('//button[text()="Save"]').last().click()
            await this.page.waitForTimeout(5000)
      }
      async invalidfiletypealertOkbtn() {
            const ele = await this.page.locator(this.addNewExperiencePageElement.InvalidFiletypeAlertokbtn).isVisible()
            if ((ele == true)) {
                  await this.page.click(this.addNewExperiencePageElement.InvalidFiletypeAlertokbtn, { force: true })
            }
            else throw new Error("Invalid File Type Alert Ok button is not visible")
            // await this.page.waitForLoadState("networkidle")
      }
      async ImagemodalClosebtn() {
            const ele = await this.page.locator(this.addNewExperiencePageElement.Imageuploadclosebutton).isVisible()
            if ((ele == true)) {
                  await this.page.click(this.addNewExperiencePageElement.Imageuploadclosebutton, { force: true })
            }
            else throw new Error("Close button is not visible")
            await this.page.waitForLoadState("networkidle")
      }
      async clickvideoUploadBTN() {
            const ele = await this.page.locator(this.addNewExperiencePageElement.VideoUploadBTtN).isVisible()
            if ((ele == true)) {
                  await this.page.click(this.addNewExperiencePageElement.VideoUploadBTtN, { force: true })
            }
            else throw new Error("Video Upload button is not visible")
            await this.page.waitForTimeout(7000)
      }
      async imageUploadBUttonweb() {
            const ele = await this.page.locator(this.addNewExperiencePageElement.Invalidimageuploadbtnweb).isVisible()
            if ((ele == true)) {
                  await this.page.click(this.addNewExperiencePageElement.Invalidimageuploadbtnweb, { force: true })
            }
            else throw new Error("Image Upload button is not visible")
            await this.page.waitForLoadState("networkidle")
      }
      async chooseImageweb() {
            const ele = await this.page.locator(this.addNewExperiencePageElement.ChooseImageButton).isVisible()
            if ((ele == true)) {
                  await this.page.click(this.addNewExperiencePageElement.ChooseImageButton, { force: true })
            }
            else throw new Error("Choose image button is not visible")
            await this.page.waitForLoadState("networkidle")
      }
      async clickDeleteBtn() {
            const ele = await this.page.locator(this.addNewExperiencePageElement.DeleteBtn).last()
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`Add On-Demand Trivia section delete button is not visible,Could not find locator:"${error}"`)
            }
      }
      async invalidFiletypeAlertweb() {
            const ele = await this.page.locator(this.addNewExperiencePageElement.InvalidFiletypeAlertmodal).isVisible()
            if ((ele == true)) {
                  await this.page.click(this.addNewExperiencePageElement.InvalidFiletypeAlertmodal, { force: true })
            }
            else throw new Error("Invalid File Type Alert is not visible")
            await this.page.waitForLoadState("networkidle")
      }
      async invalidfiletypealertOkbtnweb() {
            const ele = await this.page.locator(this.addNewExperiencePageElement.InvalidFiletypeAlertokbtn).isVisible()
            if ((ele == true)) {
                  await this.page.click(this.addNewExperiencePageElement.InvalidFiletypeAlertokbtn, { force: true })
            }
            else throw new Error("Invalid File Type Alert Ok button is not visible")
            await this.page.waitForLoadState("networkidle")
      }
      async InvaliduploaderAlert() {
            const filePath0 = "testData/images/main_banner.webp"
            const [fileChooser] = await Promise.all([
                  // It is important to call waitForEvent before click to set up waiting.
                  this.page.waitForEvent('filechooser'),
                  // Opens the file chooser.
                  this.page.locator('//button[text()="Choose File"]').click()
            ]);
            await fileChooser.setFiles([filePath0]);
      }
      async ImagemodalClosebtnweb() {
            const ele = await this.page.locator(this.addNewExperiencePageElement.Imageuploadclosebutton).isVisible()
            if ((ele == true)) {
                  await this.page.click(this.addNewExperiencePageElement.Imageuploadclosebutton, { force: true })
            }
            else throw new Error("Close button is not visible")
            await this.page.waitForLoadState("networkidle")
      }
      async invalidLengthAlertengagement() {
            const locator = this.page.locator("//input[@placeholder='Title']")
            expect(locator).toBeVisible()
            await locator.fill("    ");
            //await this.page.locator(this.addNewExperiencePageElement.Engagementdropdown).click()
            const ele = this.page.locator(this.addNewExperiencePageElement.LengthAlert)
            if (await ele.isVisible()) {
                  await expect(ele).toContainText("Minimum Length must be greater than 3 digits")
            }
            else throw new Error("Invalid length alert is not visible")
      }
      async invalidTitleAlertPoll() {
            const locator = this.page.locator("//input[@placeholder='Title']")
            expect(locator).toBeVisible()
            await locator.click();
            await this.page.click("//p[text()='Question']")
            const ele = this.page.locator("//p[contains(@class,'MuiFormHelperText-root Mui-error')]").isVisible()
            if (ele != null)
                  await this.page.isVisible("//p[contains(@class,'MuiFormHelperText-root Mui-error')]")
            else throw new Error("Error empty input alert Is Not Found")
      }
      async invalidLengthAlertPoll() {
            const locator = this.page.locator(this.addNewExperiencePageElement.inputTitleName)
            expect(locator).toBeVisible()
            await locator.fill("    ");
            const ele = await this.page.locator(this.addNewExperiencePageElement.invalidLengthalert).isVisible()
            if ((ele == true)) {
                  await this.page.isVisible("//p[contains(@class,'MuiFormHelperText-root Mui-error')]")
            }
            else throw new Error("Invalid length alert is not visible")
      }
      async invalidAlertforAnswer() {
            const locator = this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]")
            expect(locator).toBeVisible();
            await locator.click();
            await this.page.click("//div[@class='MuiBox-root css-1nfqfy6']")
            //await this.page.click("//button[text()='Cancel']")
            const ele = this.page.locator("(//p[contains(@class,'MuiFormHelperText-root Mui-error')])[2]").isVisible()
            if (ele != null)
                  await this.page.isVisible("(//p[contains(@class,'MuiFormHelperText-root Mui-error')])[2]")
            else throw new Error("Error empty input alert Is Not Found")
            await this.page.waitForLoadState("networkidle")
      }
      async invalidTitleAlerttrivia() {
            const locator = this.page.locator("//input[@placeholder='Title']")
            expect(locator).toBeVisible()
            await locator.click();
            await this.page.click("//p[text()='Question']")
            //await this.page.click("//button[text()='Cancel']")
            const ele = this.page.locator("//p[contains(@class,'MuiFormHelperText-root Mui-error')]").isVisible()
            if (ele != null)
                  await this.page.isVisible("//p[contains(@class,'MuiFormHelperText-root Mui-error')]")
            else throw new Error("Error empty input alert Is Not Found")
            //await this.page.waitForLoadState("networkidle")
      }
      async invalidLengthAlerttrivia() {
            const locator = this.page.locator("//input[@placeholder='Title']")
            expect(locator).toBeVisible()
            await locator.fill("    ");
            const ele = await this.page.locator("//p[contains(@class,'MuiFormHelperText-root Mui-error')]").isVisible()
            if ((ele == true)) {
                  await this.page.isVisible("//p[contains(@class,'MuiFormHelperText-root Mui-error')]")
            }
            else throw new Error("Invalid length alert is not visible")
            //await this.page.waitForLoadState("networkidle")
      }
      async invalidAlertforAnswertrivia() {
            const ele = this.page.locator(this.addNewExperiencePageElement.inputAnswer_1)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.locator(this.addNewExperiencePageElement.addanswerBtn).click()
                  const ele1 = await this.page.locator(this.addNewExperiencePageElement.cannotbeemptytext)
                  await expect(ele1).toContainText("Can`t be empty")
            }
            catch (error) {
                  throw new Error(`On demand add answer1 input field is not visible,Could not find locator:"${error}"`)
            }
      }
      async deletetheengagementExperiences() {
            const Engagement = this.page.locator("(//div[@class='MuiBox-root css-gk83b7'])[3]")
            expect(Engagement).toBeVisible();
            await Engagement.click();
            const Engagement_delete = this.page.locator("(//p[text()='Delete'])[3]")
            expect(Engagement_delete).toBeVisible()
            await Engagement_delete.click();
      }
      async deleteWebExperiences() {
            const Web = this.page.locator("(//div[@class='MuiBox-root css-gk83b7'])[2]")
            expect(Web).toBeVisible();
            await Web.click();
            const web_delete = this.page.locator("(//p[text()='Delete'])[2]")
            expect(web_delete).toBeVisible();
            await web_delete.click();
      }
      async deleteVideoExperiences() {
            const video = this.page.locator("(//div[@class='MuiBox-root css-gk83b7'])[1]")
            expect(video).toBeVisible();
            await video.click();
            const video_delete = this.page.locator("(//p[text()='Delete'])[1]")
            expect(video_delete).toBeVisible();
            await video_delete.click();
      }
      async DragandDropAddnewExperinces() {
            const src = await this.page.locator('(//div[@class="css-1cq17eg"])[1]')
            const dest = await this.page.locator("(//div[@class='vis-content'])[1]")
            if (src && dest) {
                  const srcbound = await src.boundingBox()
                  const destbound = await dest.boundingBox()
                  if (srcbound && destbound) {
                        await this.page.mouse.move(srcbound.x, srcbound.y)
                        await this.page.mouse.down()
                        await this.page.waitForTimeout(4000)
                        await this.page.mouse.move(destbound.x, destbound.y)
                        await this.page.mouse.down()
                        await this.page.waitForTimeout(4000)
                  }
            }
      }
      async clickplusBtn() {
            let ele = await this.page.locator(this.addNewExperiencePageElement.AddNewPlusBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On demand add new configuration plus  is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickOkBtn() {
            let ele = this.page.locator(this.addNewExperiencePageElement.OkBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On demand confirm stop button  is not visible,Could not find locator:"${error}"`)
            }
      }
      async validateImportConfigurationBtn() {
      }
      async verifyAddOnDemandConfigurationText() {
            let ele = await this.page.locator(this.addNewExperiencePageElement.AddOnDemandConfiguration)
            try {
                  await expect(ele).toContainText('Add On-Demand Configuration')
            }
            catch (error) {
                  throw new Error(`Add On-Demand Configuration text  is not visible,Could not find locator:"${error}"`)
            }
      }
      async InputConfigurationName(name: string) {
            let ele = await this.page.locator(this.addNewExperiencePageElement.InputConfiguration)
            try {
                  await ele.fill(name)
            }
            catch (error) {
                  throw new Error(`Add On-Demand Configuration input field  is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickConfigurationListBox() {
            let ele = this.page.locator(this.addNewExperiencePageElement.ConfigurationListBoox)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`Add On-Demand Configuration  drop down button is not visible,Could not find locator:"${error}"`)
            }
      }
      async SelectedConfiguration() {
            let ele = this.page.locator(this.addNewExperiencePageElement.SelectedConfiguration).last()
            try {
                  await ele.click({ force: true })
                  await this.page.waitForTimeout(3000)
            }
            catch (error) {
                  throw new Error(`Add On-Demand selected Configuration is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickEditConfigurationBtn() {
            let ele = this.page.locator(this.addNewExperiencePageElement.EditConfigureBtn)
            try {
                  await ele.click({ force: true })
                  await this.page.waitForTimeout(3000)
            }
            catch (error) {
                  throw new Error(`Add On-Demand edit Configuration button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickAddNewConfigurationSaveBtn() {
            let ele = this.page.locator(this.addNewExperiencePageElement.AddNewConfigurationSaveBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`Add On-Demand add new Configuration save button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickAddNewConfigurationDismissBtn() {
            let ele = this.page.locator(this.addNewExperiencePageElement.AddNewConfigurationDismissBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`Add On-Demand add new Configuration Dismiss button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickMobileQRCodeBtn() {
            let ele = this.page.locator(this.addNewExperiencePageElement.MobileQRCodeBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On-Demand mobile QR code button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickExperincesThreeDotBtn() {
            let ele = this.page.locator(this.addNewExperiencePageElement.ExperincesThreeDotBtn).last()
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On-Demand added experinces three dot button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickMobileLinkCopyBtn() {
            let ele = this.page.locator(this.addNewExperiencePageElement.MobileLinkCopyBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On-Demand mobile link copy button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickStartBtn() {
            let ele = this.page.locator(this.addNewExperiencePageElement.StartBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(2000)
            }
            catch (error) {
                  throw new Error(`On-Demand start button button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickStopBtn() {
            let ele = this.page.locator(this.addNewExperiencePageElement.StopBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On-Demand stop button button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickSliderPlusBtn() {
            let ele = this.page.locator(this.addNewExperiencePageElement.OndemandSliderPlusBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On-Demand flow-chart plus button button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickSliderMinusBtn() {
            let ele = this.page.locator(this.addNewExperiencePageElement.OndemandSliderMinusBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
                  await this.page.waitForTimeout(1000)
            }
            catch (error) {
                  throw new Error(`On-Demand flow-chart Minus button button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickExperincesEditBtn() {
            let ele = this.page.locator(this.addNewExperiencePageElement.ExperincesEditBtn).last()
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On-Demand experinces edit button button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickExperincesDeleteBtn() {
            let ele = this.page.locator(this.addNewExperiencePageElement.ExperincesDeleteBtn).last()
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On-Demand experinces delete button button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickExperincesPopupCloseBtn() {
            let ele = this.page.locator(this.addNewExperiencePageElement.AddExperincesPopupCloseBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On-Demand experinces popup close button button is not visible,Could not find locator:"${error}"`)
            }
      }
      async verifyExperincesTileTypeText() {
            let ele = this.page.locator(this.addNewExperiencePageElement.ExperienceTileTypeText)
            try {
                  await expect(ele).toContainText("Experience Tile Type")
            }
            catch (error) {
                  throw new Error(`On-Demand Experience Tile Type image is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickQRCodeCloseBtn() {
            let ele = this.page.locator(this.addNewExperiencePageElement.QRCodeCloseBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On-Demand QR code close button is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickImportBtn() {
            const ele = this.page.locator(this.addNewExperiencePageElement.ImportBtn)
            try {
                  await ele.click({ button: "left", delay: 1000 })
            }
            catch (error) {
                  throw new Error(`On-Demand import configuration button is not visible,Could not find locator:"${error}"`)
            }
      }
      async verifyMobileQRCodeText() {
            let ele = this.page.locator(this.addNewExperiencePageElement.MobileQRCodeText)
            try {
                  await expect(ele).toContainText('Mobile QR Code')
            }
            catch (error) {
                  throw new Error(`On-Demand mobile QR code text is not visible,Could not find locator:"${error}"`)
            }
      }
      async clickMobileLinkOpenBtn() {
            // Click text=Open Link
            const [page1] = await Promise.all([
                  this.page.waitForEvent('popup'),
                  this.page.locator(this.addNewExperiencePageElement.MobileLinkOpenbtn).click()
            ]);
            return page1;
      }
      async validateSaveQRCode() {
            const [download] = await Promise.all([
                  this.page.waitForEvent('download'),
                  this.page.locator(this.addNewExperiencePageElement.SaveQRCode).click()
            ])
            const suggestedFileName = download.suggestedFilename()
            const filePath = 'QRCode' + suggestedFileName
            await download.saveAs(filePath)
            expect(existsSync(filePath)).toBeTruthy()
      }
      async validateExportConfigurationBtn() {
            const [download] = await Promise.all([
                  this.page.waitForEvent('download'),
                  this.page.locator(this.addNewExperiencePageElement.ExportConfigurationBtn).click()
            ])
            const suggestedFileName = download.suggestedFilename()
            const filePath = 'QRCode' + suggestedFileName
            await download.saveAs(filePath)
            expect(existsSync(filePath)).toBeTruthy()
            await this.page.waitForTimeout(1000)
      }
      async EditConfigurationName(editConfigureName: string) {
            let ele = await this.page.locator(this.addNewExperiencePageElement.InputConfiguration)
            try {
                  await ele.fill(editConfigureName)
            }
            catch (error) {
                  throw new Error(`Add On-Demand Configuration input field  is not visible,Could not find locator:"${error}"`)
            }
      }
}
