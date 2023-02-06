import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
import BaseFunctions from "@base-function/baseFunctions";

export default class addnewexperiencePage {
        private base: BaseFunctions;
        constructor(private page: Page
        ) {
                this.base = new BaseFunctions(page);
        }

        private addNewExperiencePageElement = {
                menuPage: "//p[text()='Menu']",
                LengthAlert: "//p[contains(@class,'MuiFormHelperText-root Mui-error')]",
                Imageupload : " //div[@class='MuiBox-root css-v2612']",
                ChooseImageButton: "//button[text()='Choose File']",
                InvalidFiletypeAlertmodal: "//p[text()='File type is not supported']",
                InvalidFiletypeAlertokbtn: "//button[text()='Ok']",
                Imageuploadclosebutton: "//button[@aria-label='Close']",
                Invalidtitlealertvdo : "//p[contains(@class,'MuiFormHelperText-root Mui-error')]",
                VideoUploadBTtN: "//div[@class='MuiBox-root css-v2612']",
                Invalidimageuploadbtnweb: "//div[@class='MuiBox-root css-v2612']",
                Invalidalertweb: "//p[contains(@class,'MuiFormHelperText-root Mui-error')]",

               
                

        
                
                



        }












// export default class addnewexperiencePage {
//       [x: string]: any;

//       private page: Page;
//       static login: any;
//       static buffer: void;

//       constructor(page: Page) {
//             this.page = page;
//       }




      async clickHomeAvater() {
            const ele = this.page.locator('button').nth(2)
            expect(ele).toBeEnabled()
            await ele.click()
      }

      async onDemandBtn() {
            const ele = this.page.locator('text=On Demand')
            expect(ele).toBeEnabled()
            await ele.click()

      }

      async clickaddnewex() {
            await this.page.click("(//button[text()='Add new Experiences'])[2]")

      }
      //image button

      async ImageBtn() {
            const locator = this.page.locator("//button[@value='image']//p[1]")
            expect(locator).toContainText('Image')
            await locator.click()

      }

      async inputTitleName() {
            const locator = this.page.locator("//input[@placeholder='Title']")
            expect(locator).toBeVisible()
            await locator.fill("Auto Image Experience")

      }

      async checkTitleText() {
            const locator = this.page.locator("//input[@placeholder='Title']")
            expect(locator).toBeVisible()
            await locator.fill("Title")
      }

      async checkHeaderText() {
            const locator = this.page.locator("//input[@id='P8727470922']")
            expect(locator).toBeVisible()
            await locator.fill("Header")
      }

      //select Category
      async HeaderTextBtn() {
            await this.page.click("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[2]")

      }


      //select Size Category
      async selectLarge() {
            await this.page.click("//li[@data-value='Large']")

      }

      async selectMedium() {
            await this.page.click("//li[@data-value='Medium']")

      }

      async selectSmall() {
            await this.page.click("//li[@data-value='Small']")
            //await this.page.waitForLoadState("networkidle");

      }


      //     //enabled button
      async enabledIconCheckBox() {
            const ele = await this.page.locator("//span[contains(@class,'MuiTypography-root MuiTypography-body1')]/preceding::input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')]")
            expect(ele).toBeVisible();
            await ele.check();            
            // if ((ele == true)) {
            //       // console.log("enabled Home Icon Check Box")
            //       await this.page
            //             .locator("(//input[@type='checkbox']")
            //             .click()
            // }
      }


      async checkWebsiteText() {
            const locator = this.page.locator("//input[@placeholder='Website']")
            expect(locator).toBeVisible()
            await locator.fill("https://www.linkedin.com/")
      }

      //     async ImageUploadFunction() {


      //         const filePath0 = "testData/images/CountDownStageBanner.jpg"
      //         this.page.on("filechooser", async (filechooser) => {
      //                 await filechooser.setFiles([filePath0])
      //         })      

      // }


      async ImageUploadFunction() {
            const buffer = readFileSync('testData/images/banner.png');
            // Create the DataTransfer and File
            const dataTransfer = await this.page.evaluateHandle((data) => {
                  const dt = new DataTransfer();
                  // Convert the buffer to a hex array
                  const file = new File([data.toString('hex')], 'a.png', { type: 'application/png' });
                  dt.items.add(file);
                  return dt;
            }, buffer);

            // Now dispatch
            await this.page.dispatchEvent("//div[@class='MuiBox-root css-v2612']", 'drop', { dataTransfer });

      }

      async ImageDelete() {
            await this.page.locator("//div[@class='MuiBox-root css-1tejaop']").first().click()
      }
      async ImageEdit() {
            await this.page.locator("//div[@class='MuiBox-root css-1jo9dd']").click()
            await this.page.locator("//button[text()='Cancel']").click()
      }


      //click Fill options Alignment button
      async clickFillBtn() {
            const ele = this.page.locator("//div[@class='MuiBox-root css-131jw6l']")
            expect(ele).toBeVisible()
            await ele.click()

      }

      //click Fit options Alignment button
      async clickFitBtn() {
            const ele = this.page.locator("//div[@class='MuiBox-root css-ha9cv5']")
            expect(ele).toBeVisible()
            await ele.click()

      }

      //click Stretch options Alignment button
      async clickStretchBtn() {
            const ele = this.page.locator("//div[@class='MuiBox-root css-aoibs0']")
            expect(ele).toBeVisible()
            await ele.click()

      }

      //click top Alignment button
      async clickTopAlignmentBtn() {
            const ele = this.page.locator("//div[@class='MuiBox-root css-8y3b2x']")
            expect(ele).toBeVisible()
            await ele.click()

      }

      //click Center Alignment button
      async clickCenterAlignmentBtn() {
            const ele = this.page.locator("//div[@class='MuiBox-root css-eve5j2']")
            expect(ele).toBeVisible()
            await ele.click()

      }

      //click Bottom Alignment button
      async clickBottomAlignmentBtn() {
            const ele = this.page.locator("//div[@class='MuiBox-root css-1fpzr3o']")
            expect(ele).toBeVisible()
            await ele.click()

      }
      //click Bottom Alignment button
      async clickNewlyAddedExpThreeDotBtn() {
            const ele = this.page.locator("(//div[@class='MuiBox-root css-gk83b7'])[2]").last()
            await ele.click({force:true})


      }

      //click Bottom Alignment button
      async clickNewlyAddedExprienceDeleteBtn() {
            const ele = this.page.locator("(//p[text()='Delete'])[2]").last()
            // expect(ele).toBeVisible()
            await ele.click({force:true})


      }



      async clickSaveBtn() {
            const ele = await this.page.locator("//button[text()='Save']")
            expect(ele).toContainText("Save")
            await ele.click({ force: true })

      }
      // //////////////////////   //2nd step click Video Btn

      async clickVideoBtn() {
            const locator = this.page.locator("//p[text()='Video']")
            expect(locator).toContainText('Video')
            await locator.click()
      }


      async checkTitleName() {
            const locator = this.page.locator("//input[@placeholder='Title']")
            expect(locator).toBeVisible()
            await locator.fill("Auto Video Exp")
      }



      async checkHeader() {
            const locator = this.page.locator("//input[@placeholder='Header']")
            expect(locator).toBeVisible()
            await locator.fill("Header")
      }

      //select Category
      async HeaderVTextBtn() {
            await this.page.click("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[2]")

      }
      async VselectLarge() {
            await this.page.click("//li[@data-value='Large']")

      }

      async VselectMedium() {
            await this.page.click("//li[@data-value='Medium']")

      }

      async VselectSmall() {
            await this.page.click("//li[@data-value='Small']")

      }

      async videoUploadFunction() {
            const filePath0 = "testData/videos/video.mp4"
            this.page.on("filechooser", async (filechooser) => {
                  await filechooser.setFiles([filePath0])
            })
      }
      // async UploadedvideoDelete() { 
      //       await this.page.locator("//div[@class='MuiBox-root css-1tejaop']").click()
      // }
      // async UploadedVideoEdit() {
      //       await this.page.locator("//div[@class='MuiBox-root css-1jo9dd']").click()
      //       //await this.page.locator("")
      // }

      async VideoDelete() {
            await this.page.locator("(//div[@class='MuiBox-root css-gtq43u']//div)[1]").first().click()
      }

      async ShowcontrolCheckBox() {
            const ele = await this.page.locator("//span[text()='Show Controls']").isVisible()
            if ((ele == true)) {
                  // console.log("enabled Home Icon Check Box")
                  await this.page
                        .locator("//span[text()='Show Controls']")
                        .click()
            }
      }

      async PlayvdoCheckBox() {
            const ele = await this.page.locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]").isVisible()
            if ((ele == true)) {
                  // console.log("enabled Home Icon Check Box")
                  await this.page.locator("(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]").click()
            }
      }

      async MutevdoCheckBox() {
            const ele = await this.page.locator("//span[text()='Enable Mute Video']").isVisible()
            if ((ele == true)) {
                  // console.log("enabled Home Icon Check Box")
                  await this.page
                        .locator("//span[text()='Enable Mute Video']")
                        .click()
            }
      }

      async enableloopingCheckBox() {
            const ele = await this.page.locator("//span[text()='Enable Looping']").isVisible()
            if ((ele == true)) {
                  // console.log("enabled Home Icon Check Box")
                  await this.page
                        .locator("//span[text()='Enable Looping']")
                        .click()
            }
      }

      async enableaudioCheckBox() {
            const ele = await this.page.locator("//span[text()='Enable Audio']").isVisible()
            if ((ele == true)) {
                  // console.log("enabled Home Icon Check Box")
                  await this.page
                        .locator("//span[text()='Enable Audio']")
                        .click()
            }
      }


      async AutoplayvdoCheckBox() {
            const ele = await this.page.locator("//span[text()='Autoplay Video']").isVisible()
            if ((ele == true)) {
                  // console.log("enabled Home Icon Check Box")
                  await this.page
                        .locator("//span[text()='Autoplay Video']")
                        .click()
            }
      }

      async clickVSaveBtn() {
            const ele = await this.page.locator("//button[@id='P-2320987642']")
            expect(ele).toContainText("Save")
            await ele.click({ force: true })

      }

      // Web Button////////////////////

      async WebBtn() {
            const locator = this.page.locator("//button[@value='web']//p[1]")
            //expect(locator).toContainText('Image')
            await locator.click()

      }

      //    }
      //     async checklevelTitleText() {
      //     const locator = this.page.locator("(//p[text()='Title Name'])[2]")
      //     expect(locator).toBeVisible()
      //     // await locator.fill("Title")
      // }


      async checkWTitleText() {
            const locator = this.page.locator("//input[@placeholder='Title']")
            expect(locator).toBeVisible()
            await locator.fill("Auto Web Title")
      }



      async checkWHeaderText() {
            const locator = this.page.locator("//input[@placeholder='Header']")
            expect(locator).toBeVisible()
            await locator.fill("Header")
      }

      //select Size Category
      async WHeaderTextBtn() {
            await this.page.click("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[2]")

      }
      async WselectLarge() {
            await this.page.click("//li[@data-value='Large']")

      }

      async WselectMedium() {
            await this.page.click("//li[@data-value='Medium']")

      }

      async WselectSmall() {
            await this.page.click("//li[@data-value='Small']")

      }


      //     //enabled button
      async WenabledIconCheckBox() {
            const ele = await this.page.locator("//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')]").isVisible()
            if ((ele == true)) {
                  //console.log("enabled Home Icon Check Box")
                  await this.page
                        .locator("//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')]")
                        .click()
            }
      }


      async WcheckWebsiteText() {
            const locator = this.page.locator("//span[text()='Website URL']/following::input")
            expect(locator).toBeVisible()
            await locator.fill("https://www.linkedin.com/")
      }

      async WImageUploadFunction() {
            const buffer = readFileSync('testData/images/banner.png');
            // Create the DataTransfer and File
            const dataTransfer = await this.page.evaluateHandle((data) => {
                  const dt = new DataTransfer();
                  // Convert the buffer to a hex array
                  const file = new File([data.toString('hex')], 'a.png', { type: 'application/png' });
                  dt.items.add(file);
                  return dt;
            }, buffer);

            // Now dispatch
            await this.page.dispatchEvent("//div[@class='MuiBox-root css-v2612']", 'drop', { dataTransfer });

      }


      // async WImageUploadFunction() {
      //     const filePath0 = "testData/logos/Logo.jpg"
      //     this.page.on("filechooser", async (filechooser) => {
      //             await filechooser.setFiles([filePath0]);
      //     })                
      // }

      // async WImageDelete() {
      // await this.page.locator("//div[@class='MuiBox-root css-vjb914']").first().click()
      // }


      //click Fill options Alignment button
      async WclickFillBtn() {
            const ele = this.page.locator("//div[@class='MuiBox-root css-131jw6l']")
            expect(ele).toBeVisible()
            await ele.click()

      }



      //click Fit options Alignment button
      async WclickFitBtn() {
            const ele = this.page.locator("//div[@class='MuiBox-root css-ha9cv5']")
            expect(ele).toBeVisible()
            await ele.click()

      }

      //click Stretch options Alignment button
      async WclickStretchBtn() {
            const ele = this.page.locator("//div[@class='MuiBox-root css-aoibs0']")
            expect(ele).toBeVisible()
            await ele.click()

      }

      //click top Alignment button
      async WclickTopAlignmentBtn() {
            const ele = this.page.locator("//div[@class='MuiBox-root css-8y3b2x']")
            expect(ele).toBeVisible()
            await ele.click()
      }

      //click Center Alignment button
      async WclickCenterAlignmentBtn() {
            const ele = this.page.locator("//div[@class='MuiBox-root css-eve5j2']")
            expect(ele).toBeVisible()
            await ele.click()
      }

      //click Bottom Alignment button
      async WclickBottomAlignmentBtn() {
            const ele = this.page.locator("//div[@class='MuiBox-root css-1fpzr3o']")
            expect(ele).toBeVisible()
            await ele.click()
      }

      //////////////////////////// Implement EngagementBtn

      async EngagementBtn() {
            const locator = this.page.locator("//p[text()='Game/Engagement']")
            //expect(locator).toContainText('Image')
            await locator.click()

      }

      async EngTitleText() {
            const locator = this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]")
            expect(locator).toBeVisible()
            await locator.fill("Auto Engagement Title")
      }

      //select from dropdown

      async EngdropdownBtn() {
            await this.page.click("(//div[@role='button'])[2]")
      }

      async Engagement_1() {
            await this.page.click("(//li[@backgroundcolor='#212936'])[2]")

      }

      async Engagement_2() {
            await this.page.click("(//li[@backgroundcolor='#212936'])[3]")

      }
      async Engagement_3() {
            await this.page.click("//li[@data-value='Engagement_3']")

      }
      async None(){
            await this.page.click("(//li[@backgroundcolor='#212936'])[1]")
      }

      //select from configuration

      async Configuration() {
            await this.page.click("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[3]")

      }

      async Configuration_1() {
            await this.page.click("//li[@data-value='Configuration_1']")

      }

      async Configuration_2() {
            await this.page.click("//li[@data-value='Configuration_2']")

      }
      async Configuration_3() {
            await this.page.click("//li[@data-value='Configuration_3']")

      }


      //Implement poll button///////////////

      async PollBtn() {
            const locator = this.page.locator("//p[text()='Poll']")
            await locator.click()

      }

      async PTitlename() {
            const locator = this.page.locator("//input[@placeholder='Title']")
            expect(locator).toBeVisible()
            await locator.fill("Auto Poll Title")
      }

      async Fonts() {
            await this.page.click("//a[.='Font']")

      }

      async Arial() {
            await this.page.click("//li[text()='Arial']")

      }

      async Blocktype() {
            await this.page.click("//a[@title='Block Type']")

      }

      async Blocknormal() {
            await this.page.click("//li[text()='Normal']")

      }

      async BlockH1() {
            await this.page.click("//li[text()='H1']")

      }
      async BlockH2() {
            await this.page.click("//li[text()='H2']")

      }
      async BlockH3() {
            await this.page.click("//li[text()='H3']")

      }
      async BlockH4() {
            await this.page.click("//li[text()='H4']")

      }
      async BlockH5() {
            await this.page.click("//li[text()='H5']")

      }
      async BlockH6() {
            await this.page.click("//li[text()='H6']")

      }
      async Blockquote() {
            await this.page.click("//li[text()='Blockquote']")

      }

      async Bold() {
            await this.page.click("//div[@title='Bold']//img[1]")

      }

      async Italic() {
            await this.page.click("//div[@title='Italic']//img[1]")

      }

      async Underline() {
            await this.page.click("//div[@title='Underline']//img[1]")

      }

      async Strikethrough() {
            await this.page.click("//div[@title='Strikethrough']//img[1]")

      }

      async Colorpk() {
            await this.page.click("//div[@title='Color Picker']//img")

      }
      async Left() {
            await this.page.click("//div[@title='Left']")

      }
      async Center() {
            await this.page.click("//div[@title='Center']//img[1]")

      }
      async Right() {
            await this.page.click("//div[@title='Right']//img[1]")

      }
      async Outdent() {
            await this.page.click("//div[@title='Outdent']//img[1]")

      }
      async Indent() {
            await this.page.click("//div[@title='Indent']//img[1]")

      }



      async Ordered() {
            await this.page.click("//div[@title='Ordered']//img[1]")

      }

      async UnOrdered() {
            await this.page.click("//div[@title='Unordered']//img[1]")

      }

      async Remove() {
            await this.page.click("//div[@title='Remove(styles) only']//img[1]")

      }


      async inputQuestion() {
            await this.page.locator("//ul[@class='public-DraftStyleDefault-ul']//li[1]")
                  .fill("Demo Question")

      }



      async FreeText() {
            const locator = this.page.locator("//p[text()='Free text']")
            await locator.click()

      }

      async Multiple() {
            const locator = this.page.locator("//p[text()='Multiple']")
            await locator.click()

      }
      async Image() {
            const locator = this.page.locator("(//p[text()='Image'])[2]")
            await locator.click()

      }

      async Text() {
            const locator = this.page.locator("//p[text()='Text']")
            await locator.click()

      }

      async FontSize() {
            await this.page.click("(//div[@role='button'])[2]")

      }

      async Plarge() {
            await this.page.click("//li[text()='Large']")
      }
      async PMedium() {
            await this.page.click("//li[text()='Medium']")
      }
      async PSmall() {
            await this.page.click("//li[text()='Small']")
      }

      async AddAnswer() {
            const locator = this.page.locator("//div[@class='MuiBox-root css-11s1uqp']/following-sibling::button[1]")
            await locator.click()

      }

      async Answer_1() {
            const locator = this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]")
            await locator.fill("Tyte here answer")
      }

      async Delete() {
            const locator = this.page.locator("//div[@class='MuiBox-root css-10a3ccs']")
            await locator.click()

      }

      async Pollimage() {
            const locator = this.page.locator("//input[@value='image']")
            await locator.click()

      }

      async uploadImage() {
            const buffer = readFileSync('testData/images/banner.png');
            // Create the DataTransfer and File
            const dataTransfer = await this.page.evaluateHandle((data) => {
                  const dt = new DataTransfer();
                  // Convert the buffer to a hex array
                  const file = new File([data.toString('hex')], 'a.png', { type: 'application/png' });
                  dt.items.add(file);
                  return dt;
            }, buffer);

            // Now dispatch
            await this.page.dispatchEvent("//p[text()='Drag your image here, or browse']", 'drop', { dataTransfer });

      }

      async Pollvdo() {
            const locator = this.page.locator("//input[@value='video']")
            await locator.click()

      }

      async uploadvdo() {
            const filePath0 = "testData/videos/video.mp4"
            this.page.on("filechooser", async (filechooser) => {
                  await filechooser.setFiles([filePath0])
            })
      }

      async PVideo() {
            await this.page.locator("//div[@class='MuiBox-root css-v2612']").first().click()
            //Upload Video
      }

      //     async uploadvdo() {
      //         const filePath0 = "testData/videos/video.mp4"
      //         this.page.on("filechooser", async (filechooser) => {
      //                 await filechooser.setFiles([filePath0]);
      //         })                
      // }

      //         async PVideoDelete() {
      //         await this.page.locator("(//div[@class='MuiBox-root css-gtq43u']//div)[1]").first().click()
      //         }

      //  async pollSaveBtn() {
      //     const ele = await this.page.locator("//button[text()='Save']")
      //     expect(ele).toContainText("Save")
      //     await ele.click({force:true})
      //     }

      async pollSaveBtn() {
            const ele = await this.page.locator("//button[text()='Save' and @id='P-2320987642']")
            expect(ele).toContainText("Save")
            await ele.click()

      }

      //Implement Trivia//////////////////////////////////

      async TriviaBtn() {
            const locator = this.page.locator("//button[@value='trivia']//p[1]")
            await locator.click({force:true})

      }

      async TrTitlename() {
            const locator = this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]")
            // expect(locator).toBeVisible()
            await locator.fill("Auto Trivia Title")
      }

      // async Textfield() {
      //     const locator = this.page.locator("(//div[@data-offset-key='580ig-0-0'])[2]")
      //     //expect(locator).toBeVisible()
      //     await locator.fill("TTTTTTTTTTTT")  
      // }

      async TrFonts() {
            await this.page.click("//span[text()='Font']")
      }

      async TrArial() {
            await this.page.click("//li[text()='Arial']")
      }

      async TrBlocktype() {
            await this.page.click("//a[@title='Block Type']")

      }
      async TrNormal() {
            await this.page.click("//li[text()='Normal']")

      }

      async TrBlockH1() {
            await this.page.click("//li[text()='H1']")
      }
      async TrBlockH2() {
            await this.page.click("//li[text()='H2']")
      }
      async TrBlockH3() {
            await this.page.click("//li[text()='H3']")
      }
      async TrBlockH4() {
            await this.page.click("//li[text()='H4']")
      }
      async TrBlockH5() {
            await this.page.click("//li[text()='H5']")
      }
      async TrBlockH6() {
            await this.page.click("//li[text()='H6']")
      }
      async TrBlockquote() {
            await this.page.click("//li[text()='Blockquote']")
      }

      async TrBold() {
            await this.page.click("//div[@title='Bold']//img[1]")

      }

      async TrItalic() {
            await this.page.click("//div[@title='Italic']//img[1]")

      }

      async TrUnderline() {
            await this.page.click("//div[@title='Underline']//img[1]")

      }

      async TrStrikethrough() {
            await this.page.click("//div[@title='Strikethrough']//img[1]")

      }

      async TrColorpk() {
            await this.page.click("//div[@title='Color Picker']//img")

      }

      async Textcl() {
            await this.page.click("//span[text()='Text']")

      }

      async Greencl() {
            await this.page.click("(//span[@class='rdw-colorpicker-cube'])[1]")

      }

      async Highlightcl() {
            await this.page.click("//span[text()='Highlight']")

      }

      async Highlightgrn() {
            await this.page.click("(//span[@class='rdw-colorpicker-cube'])[1]")

      }
      async TrLeft() {
            await this.page.click("//div[@title='Left']")

      }
      async TrCenter() {
            await this.page.click("//div[@title='Center']//img[1]")

      }
      async TrRight() {
            await this.page.click("//div[@title='Right']//img[1]")

      }
      async TrOutdent() {
            await this.page.click("//div[@title='Outdent']//img[1]")

      }
      async TrIndent() {
            await this.page.click("//div[@title='Indent']//img[1]")

      }



      async TrOrdered() {
            await this.page.click("//div[@title='Ordered']//img[1]")

      }


      async TrUnOrdered() {
            await this.page.click("//div[@title='Unordered']//img[1]")

      }

      async TrRemove() {
            await this.page.click("//div[@title='Remove(styles) only']//img[1]")

      }

      async TrFreeText() {
            const locator = this.page.locator("//p[text()='Free text']")
            await locator.click()

      }

      async TrMultiple() {
            const locator = this.page.locator("//p[text()='Multiple']")
            await locator.click()

      }



      async TrImage() {
            const locator = this.page.locator("(//p[text()='Image'])[2]")
            await locator.click()

      }

      async TrText() {
            const locator = this.page.locator("//p[text()='Text']")
            await locator.click()

      }

      async TrFontSize() {
            await this.page.click("(//div[@role='button'])[2]")

      }

      async TrPlarge() {
            await this.page.click("//li[text()='Large']")

      }
      async TrMedium() {
            await this.page.click("//li[text()='Medium']")

      }
      async TrSmall() {
            await this.page.click("//li[text()='Small']")

      }

      async TrAddAnswer() {
            const locator = this.page.locator("//button[text()='Add Answer']")
            await locator.click()

      }

      async TrAnswer_1() {
            const locator = this.page.locator("//input[@placeholder='Type here text...']")
            expect(locator).toBeVisible()
            await locator.fill("Demo Answer For Automation")
      }

      async TrDelete() {
            const locator = this.page.locator("//div[@class='MuiBox-root css-10a3ccs']")
            await locator.click()

      }

      async TrPollimage() {
            const locator = this.page.locator("//input[@value='image']")
            await locator.click()

      }

      //     async TruploadImage() {


      //         const filePath0 = "testData/images/CountDownStageBanner.jpg"
      //         this.page.on("filechooser", async (filechooser) => {
      //                 await filechooser.setFiles([filePath0])
      //         })      

      // }

      async TruploadImage() {
            const buffer = readFileSync('testData/images/banner.png');
            // Create the DataTransfer and File
            const dataTransfer = await this.page.evaluateHandle((data) => {
                  const dt = new DataTransfer();
                  // Convert the buffer to a hex array
                  const file = new File([data.toString('hex')], 'a.png', { type: 'application/png' });
                  dt.items.add(file);
                  return dt;
            }, buffer);

            // Now dispatch
            await this.page.dispatchEvent("//p[text()='Drag your image here, or browse']", 'drop', { dataTransfer });

      }
      async TrPollvdo() {
            const locator = this.page.locator("//input[@value='video']")
            await locator.click({ force: true })
      }

      ////////
      async Truploadvdo() {
            const filePath0 = "testData/videos/video.mp4"
            this.page.on("filechooser", async (filechooser) => {
                  await filechooser.setFiles([filePath0])
            })
      }

      async TrPVideo() {
            await this.page.locator("//div[@class='MuiBox-root css-v2612']").first().click({ force: true })
            //Upload Video
      }

      async TrSaveBtn() {
            //const locator = this.page.locator("//button[@id='P-2320987642']")
            //expect(ele).toContainText("Save")
            //await locator.click()

            const ele = await this.page.locator("//button[text()='Save']")
            expect(ele).toContainText("Save")
            await ele.click({ force: true })

      }

      //     async TrpollSaveBtn() {
      //         const locator = await this.page.frameLocator('iframe').locator("//button[@id='P-2320987642']")
      //         await locator.click()
      // }

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

      async EmptywebtitleAlert() {
            const locator = this.page.locator("//input[@placeholder='Title']")
            expect(locator).toBeVisible()
            await locator.click();
            await this.page.click("//div[@class='MuiBox-root css-v2612']")
            await this.page.click("//button[text()='Cancel']")

            const ele = this.page.locator("//p[contains(@class,'MuiFormHelperText-root Mui-error')]").isVisible()
                if (ele != null)
                        await this.page.isVisible("//p[contains(@class,'MuiFormHelperText-root Mui-error')]")
                else throw new Error("Error emoty input alert Is Not Found")

                await this.page.waitForLoadState("networkidle")
        }
        async invalidLengthAlert() {
            const locator = this.page.locator("//input[@placeholder='Title']")
            expect(locator).toBeVisible()
            await locator.fill("    ");

            const ele = await this.page.locator(this.addNewExperiencePageElement.LengthAlert).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.addNewExperiencePageElement.LengthAlert, { force: true })
                }
                else throw new Error("Invalid length alert is not visible")

                await this.page.waitForLoadState("networkidle")
        }
        async invalidImageUploadFunction() {
            // const buffer = readFileSync('testData/csv/csv.csv');
            // // Create the DataTransfer and File
            // const dataTransfer = await this.page.evaluateHandle((data) => {
            //       const dt = new DataTransfer();
            //       // Convert the buffer to a hex array
            //       const file = new File([data.toString('hex')], 'a.png', { type: 'application/png' });
            //       dt.items.add(file);
            //       return dt;
            // }, buffer);

            // // Now dispatch
            // await this.page.dispatchEvent("//div[@class='MuiBox-root css-v2612']", 'drop', { dataTransfer });


      }
      async imageUploadBUtton(){
            const ele = await this.page.locator(this.addNewExperiencePageElement.Imageupload).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.addNewExperiencePageElement.Imageupload, { force: true })
                }
                else throw new Error("Image Upload button is not visible")

                await this.page.waitForLoadState("networkidle")

      }
      async chooseImage() {
            const ele = await this.page.locator(this.addNewExperiencePageElement.ChooseImageButton).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.addNewExperiencePageElement.ChooseImageButton, { force: true })
                }
                else throw new Error("Choose image button is not visible")

                await this.page.waitForLoadState("networkidle")

      }
      async invalidFiletypeAlert() {

            const ele = await this.page.locator(this.addNewExperiencePageElement.InvalidFiletypeAlertmodal).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.addNewExperiencePageElement.InvalidFiletypeAlertmodal, { force: true })
                }
                else throw new Error("Invalid File Type Alert is not visible")

                await this.page.waitForLoadState("networkidle")
      }
      async invalidfiletypealertOkbtn() {
            const ele = await this.page.locator(this.addNewExperiencePageElement.InvalidFiletypeAlertokbtn).isVisible()
                if ((ele == true)) {
                        await this.page.click(this.addNewExperiencePageElement.InvalidFiletypeAlertokbtn, { force: true })
                }
                else throw new Error("Invalid File Type Alert Ok button is not visible")

                await this.page.waitForLoadState("networkidle")
      }
      async ImagemodalClosebtn() {
            const ele = await this.page.locator(this.addNewExperiencePageElement.Imageuploadclosebutton).isVisible()
            if ((ele == true)) {
                    await this.page.click(this.addNewExperiencePageElement.Imageuploadclosebutton, { force: true })
            }
            else throw new Error("Close button is not visible")

            await this.page.waitForLoadState("networkidle")

      }
      async InvalidtitleAlertVideo() {
            const locator = this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]")
            expect(locator).toBeVisible()
            await locator.click();
            await this.page.click("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]")
            //await this.page.click("//button[text()='Cancel']")

            const ele = this.page.locator("//p[contains(@class,'MuiFormHelperText-root Mui-error')]").isVisible()
                if (ele != null)
                        await this.page.isVisible("//p[contains(@class,'MuiFormHelperText-root Mui-error')]")
                else throw new Error("Error emoty input alert Is Not Found")

                await this.page.waitForLoadState("networkidle")

      }
      async videoUploadBTN() {
            //await this.page.locator("//button[@aria-label='Delete']").click()
            const ele = await this.page.locator(this.addNewExperiencePageElement.VideoUploadBTtN).isVisible()
            if ((ele == true)) {
                    await this.page.click(this.addNewExperiencePageElement.VideoUploadBTtN, { force: true })
            }
            else throw new Error("Video Upload button is not visible")

            //await this.page.waitForLoadState("networkidle")
      }


      async imageUploadBUttonweb(){
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
      async ImagemodalClosebtnweb() {
            const ele = await this.page.locator(this.addNewExperiencePageElement.Imageuploadclosebutton).isVisible()
            if ((ele == true)) {
                    await this.page.click(this.addNewExperiencePageElement.Imageuploadclosebutton, { force: true })
            }
            else throw new Error("Close button is not visible")

            await this.page.waitForLoadState("networkidle")

      }
      async EmptywebtitleAlertweb() {
            const locator = this.page.locator("//input[@placeholder='Title']")
            expect(locator).toBeVisible()
            await locator.click();
            await this.page.click("//div[@class='MuiBox-root css-v2612']")
            await this.page.click("//button[text()='Cancel']")

            const ele = this.page.locator("//p[contains(@class,'MuiFormHelperText-root Mui-error')]").isVisible()
                if (ele != null)
                        await this.page.isVisible("//p[contains(@class,'MuiFormHelperText-root Mui-error')]")
                else throw new Error("Error emoty input alert Is Not Found")

                await this.page.waitForLoadState("networkidle")
        }


        async Emptyengagementtitle() {
            const locator = this.page.locator("//input[@placeholder='Title']")
            expect(locator).toBeVisible()
            await locator.click();
            await this.page.click("(//div[@role='button'])[2]")
            //await this.page.click("//button[text()='Cancel']")

            const ele = this.page.locator("//p[contains(@class,'MuiFormHelperText-root Mui-error')]").isVisible()
                if (ele != null)
                        await this.page.isVisible("//p[contains(@class,'MuiFormHelperText-root Mui-error')]")
                else throw new Error("Error empty input alert Is Not Found")

                //await this.page.waitForLoadState("networkidle")
        }

        async invalidLengthAlertengagement() {
            const locator = this.page.locator("//input[@placeholder='Title']")
            expect(locator).toBeVisible()
            await locator.fill("    ");

            const ele = await this.page.locator("//p[contains(@class,'MuiFormHelperText-root Mui-error')]").isVisible()
                if ((ele == true)) {
                  await this.page.isVisible("//p[contains(@class,'MuiFormHelperText-root Mui-error')]")
                }
                else throw new Error("Invalid length alert is not visible")

                await this.page.waitForLoadState("networkidle")
        }
      //   async EngagementModalCancellation(){

      //       const locator = await this.page.locator("//div[@class='MuiBox-root css-1ydarmv']")
      //       await locator.click()
      //   }
      async invalidTitleAlertPoll(){
            const locator = this.page.locator("//input[@placeholder='Title']")
            expect(locator).toBeVisible()
            await locator.click();
            await this.page.click("//p[text()='Question']")
            //await this.page.click("//button[text()='Cancel']")

            const ele = this.page.locator("//p[contains(@class,'MuiFormHelperText-root Mui-error')]").isVisible()
                if (ele != null)
                        await this.page.isVisible("//p[contains(@class,'MuiFormHelperText-root Mui-error')]")
                else throw new Error("Error empty input alert Is Not Found")

                await this.page.waitForLoadState("networkidle")

      } 


      async invalidLengthAlertPoll() {
            const locator = this.page.locator("//input[@placeholder='Title']")
            expect(locator).toBeVisible()
            await locator.fill("    ");

            const ele = await this.page.locator("//p[contains(@class,'MuiFormHelperText-root Mui-error')]").isVisible()
                if ((ele == true)) {
                  await this.page.isVisible("//p[contains(@class,'MuiFormHelperText-root Mui-error')]")
                }
                else throw new Error("Invalid length alert is not visible")

                await this.page.waitForLoadState("networkidle")
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

        async invalidTitleAlerttrivia(){
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
            const locator = this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]")
            expect(locator).toBeVisible()
            await locator.click();
            await this.page.click("//div[@class='MuiBox-root css-1nfqfy6']")
            //await this.page.click("//button[text()='Cancel']")

            const ele = this.page.locator("(//p[contains(@class,'MuiFormHelperText-root Mui-error')])[2]").isVisible()
                if (ele != null)
                        await this.page.isVisible("(//p[contains(@class,'MuiFormHelperText-root Mui-error')])[2]")
                else throw new Error("Error empty input alert Is Not Found")

                await this.page.waitForLoadState("networkidle")

        }
        async deletetheengagementExperiences(){
            const Engagement = this.page.locator("(//div[@class='MuiBox-root css-gk83b7'])[3]")
            expect(Engagement).toBeVisible();
            await Engagement.click();
            const Engagement_delete = this.page.locator("(//p[text()='Delete'])[3]")
            expect(Engagement_delete).toBeVisible()
            await Engagement_delete.click();
        }
        async deleteWebExperiences(){
            const Web = this.page.locator("(//div[@class='MuiBox-root css-gk83b7'])[2]")
            expect(Web).toBeVisible();
            await Web.click();
            const web_delete = this.page.locator("(//p[text()='Delete'])[2]")
            expect(web_delete).toBeVisible();
            await web_delete.click();
        }
        async deleteVideoExperiences(){
            const video = this.page.locator("(//div[@class='MuiBox-root css-gk83b7'])[1]")
            expect(video).toBeVisible();
            await video.click();
            const video_delete = this.page.locator("(//p[text()='Delete'])[1]")
            expect(video_delete).toBeVisible();
            await video_delete.click();
        }


      }

      
      




