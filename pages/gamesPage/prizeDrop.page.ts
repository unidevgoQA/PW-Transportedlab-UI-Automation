import { expect, Page } from "@playwright/test";
import { readFileSync,existsSync } from 'fs'
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
                await this.page.waitForLoadState('networkidle');
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
        async veirfycancelBtnvisiblity() {
                const ele = this.page.frameLocator('iframe').locator("//button[text()='CANCEL']")
                await expect(ele).toBeVisible()

        }

        async clickAddBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='ADD']")
                expect(ele).toBeVisible()
                await ele.click()

        }

        async verifyerrorvisiblity() {
                const ele = this.page.frameLocator('.css-r99fy3').locator("//p[text()='Configuration name cannot be empty']")
                await expect(ele).toBeVisible()
                await this.page.waitForTimeout(1000)
        }

        async clickokbuttonerror(){
                const ele = this.page.frameLocator('.css-r99fy3').locator("//button[text()='Ok']").click()
      
        }
        //start button visiblity

        async startbuttonvisible(){
                const ele = this.page.frameLocator('.css-r99fy3').locator('//h6[text()="Auto"]//following-sibling::div//button[text()="Start"]')
                await expect(ele).toBeVisible()
                
        }

        async clickstartbutton(){
                await this.page.frameLocator('.css-r99fy3').locator('//h6[text()="Auto"]//following-sibling::div//button[text()="Start"]').click()
        }

        async clickokinstartconfirmmodal(){
                await this.page.frameLocator('.css-r99fy3').locator("//button[text()='Ok']").click()
        }

        async verifyerrorvisiblityfornoprize() {
                const ele = this.page.frameLocator('.css-r99fy3').locator("//p[text()='You can`t start a session without prizes, please create a prize']")
                await expect(ele).toBeVisible()
                await this.page.waitForTimeout(1000)
        }


        //🔚 Closed Add New Config Section Element 
        //=======================================================
        //▶▶Start Game Design Section Element  
        async clickGameDesign() {
        //       const ele =  await this.page.frameLocator('iframe').locator("//p[text()='Game Design']").last()
                await this.page.frameLocator('iframe').locator('//p[text()="Game Design"]').last().click({button:'left'})

        }

        async clickToUploadFont() {
                const ele = this.page.frameLocator('iframe').locator('//p[text()="Upload Font"]//preceding-sibling::div')
                await expect(ele).toBeVisible()
                await ele.click({button:'left'})
        }
        async handle_alert(){
               this.page.on('dialog', async dialog => {
                        // Verify type of dialog
                        expect(dialog.type()).toContain('alert');   
                        
                        // verify message of alert
                        expect(dialog.message()).toContain('Error: Incorrect file extension');
                        
                        //click on alert ok button
                        await dialog.accept();
                      });
        }
        async wrong_font_uploader_click(){
                const filePath0 = "testData/images/HTP.png"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Upload Font"]//preceding-sibling::div').click()
                ]);
                await fileChooser.setFiles([filePath0]);
 
        }
       
        async font_uploader_click(){
                const filePath0 = "testData/fonts/Midnight.ttf"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Upload Font"]//preceding-sibling::div').click()
                ]);
                await fileChooser.setFiles([filePath0]);
 
        }

        async clickClearAllBtn() {
                
                await this.page.frameLocator('.css-r99fy3').locator("//button[text()='Clear All']").dblclick({button:'left',delay:500})
                
        }
        async verifyclearallworking(){
                const ele = this.page.frameLocator('.css-r99fy3').locator("//p[text()='Text Color']/following-sibling::button")
                await expect(ele).toHaveAttribute("background","rgba(255, 255, 255, 1)")
        }
        // swatches section for all color pickers

        async clickplusbuttonswatches() {
                await this.page.frameLocator('.css-r99fy3').locator('//button[@aria-label="Add Color"]').click()
        }

        async clickdeletebuttonswatches() {
                await this.page.frameLocator('.css-r99fy3').locator('//button[@aria-label="delete"]').last().click()
        }
        // solid dropdowns 

        async validate_solid_horizontal_vertical_dropdown(){
                await this.page.frameLocator('.css-r99fy3').locator('//div[@aria-haspopup="listbox"]').first().click()
        }

        async click_solid_button(){
                await this.page.frameLocator('.css-r99fy3').locator('//li[text()="Solid"]').click()
        }

        async click_horizontal_button(){
                await this.page.frameLocator('.css-r99fy3').locator('//li[text()="Horizontal"]').click()
        }
        async click_vertical_button(){
                await this.page.frameLocator('.css-r99fy3').locator('//li[text()="Vertical"]').click()
        }
        async click_diagonal_button(){
                await this.page.frameLocator('.css-r99fy3').locator('//li[text()="Diagonal"]').click()
        }
        async click_radial_button(){
                await this.page.frameLocator('.css-r99fy3').locator('//li[text()="Radial"]').click()
        }
        
        //opacity slider
        async opacity_slider_visiblity() {
                const ele =  this.page.frameLocator('.css-r99fy3').locator('//input[@aria-label="Alpha" and @aria-valuetext="100%"]')
                await expect(ele).toBeVisible()
        }
        //start main color section element
        async verifyMainColorText() {
                const ele = this.page.frameLocator('iframe').locator('text=Main Color')
                await expect(ele).toContainText("Main Color")

        }


        async clickMainColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Main Color']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }

        async inputMainRGRFirstColor() {
                const ele = this.page.frameLocator('iframe').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[1]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("84")
                await this.page.waitForTimeout(500)

        }
        async inputMainRGRSecondColor() {
                const ele = this.page.frameLocator('iframe').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[2]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("161")
                await this.page.waitForTimeout(500)

        }


        async inputMainRGRThirdColor() {
                const ele = this.page.frameLocator('iframe').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[3]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("220")
                await this.page.waitForTimeout(500)

        }

        async inputMainRGRFourColor() {
                const ele =  this.page.frameLocator('iframe').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[4]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("95")
                await this.page.waitForTimeout(500)  

        }

        async inputMainRGRFiveColor() {
                const ele = this.page.frameLocator('iframe').locator('//input[@class="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedStart css-1yftmq7"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("54A1DCF2")
                await this.page.waitForTimeout(500)  

        }


        async clickColorPickerSaveBtn() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//button[text()="Save"]')
                await expect(ele).toBeVisible()
                await ele.click()

        }
        //image uploaders here
        async click_BackgroundImage_upload_for_maincolor_check() {
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div[2]//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div[2]//button[@title="Delete"]').click({button:'left'})
                }
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div[2]//div[@class="MuiBox-root css-v2612"]').click()
        }
        async delete_background_image(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div[2]//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div[2]//button[@title="Delete"]').dblclick({button:'left',delay:200})
                }
        }
        async Image_uploader_for_maincolorcheck() {
                const filePath0 = "testData/images/transparent_background_image.png"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()

        }

        async wrong_image_uploader(){
                const filePath0 = "testData/fonts/Thin.otf"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
 
        }
        async validate_wrong_file_typetext(){
                const wrong = this.page.frameLocator('(//iframe)[1]').locator('//p[text()="File type is not supported"]')
                if(await wrong.isVisible()){
                        await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Ok"]').click()
                }
        }
        async fullscreenlogoupload(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Full Screen Logo"]//parent::div//following-sibling::div//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Full Screen Logo"]//parent::div//following-sibling::div//button[@title="Delete"]').click({button:'left'})
                }
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Full Screen Logo"]//parent::div//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click()
        }

        async Image_uploader_For_Fullcreenlogo(){
                const filePath0 = "testData/images/Fullscreen.png"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
        }
        async full_screen_logo_wait(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Full Screen Logo"]//parent::div//following-sibling::div//button[@title="Edit"]')
              await expect(edit_image_button).toBeVisible({timeout:6000}) 
        }

        async Game_title_image_upload(){
                const edit_image_button =this.page.frameLocator('.css-r99fy3').locator('//h5[text()="Game Title Image"]//parent::div//following-sibling::div//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('.css-r99fy3').locator('//h5[text()="Game Title Image"]//parent::div//following-sibling::div//button[@title="Delete"]').click({button:'left'})
                }
                await this.page.frameLocator('.css-r99fy3').locator('//h5[text()="Game Title Image"]//parent::div//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
        }
        async Image_uploader_For_Game_title_image(){
                const filePath0 = "testData/images/title.jpg"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
        }
        async game_tile_wait(){
                const edit_image_button =this.page.frameLocator('.css-r99fy3').locator('//h5[text()="Game Title Image"]//parent::div//following-sibling::div//button[@title="Edit"]')
               await expect(edit_image_button).toBeVisible({timeout:60000}) 
        }
        async Frame_image_upload(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Frame Image"]//parent::div//following-sibling::div//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Frame Image"]//parent::div//following-sibling::div//button[@title="Delete"]').click({button:'left'})
                }
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Frame Image"]//parent::div//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
        }
        async Image_uploader_For_Frame_image(){
                const filePath0 = "testData/images/Blue_frame.png"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
        }
        async frame_image_wait(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Frame Image"]//parent::div//following-sibling::div//button[@title="Edit"]')
                await expect(edit_image_button).toBeVisible({timeout:60000})
        }

        async Sponsor_image_upload(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Sponsor Logo"]//parent::div//following-sibling::div//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Sponsor Logo"]//parent::div//following-sibling::div//button[@title="Delete"]').click({button:'left'})
                }
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Sponsor Logo"]//parent::div//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
        }
        async Image_uploader_For_sponsor_image(){
                const filePath0 = "testData/images/sponsor.jpg"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
        }
        async sponsor_image_wait(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Sponsor Logo"]//parent::div//following-sibling::div//button[@title="Edit"]')
               await expect(edit_image_button).toBeVisible({timeout:60000})
        }
        async Team_logo_upload(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Team Logo"]//parent::div//following-sibling::div//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Team Logo"]//parent::div//following-sibling::div//button[@title="Delete"]').click({button:'left'})
                }
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Team Logo"]//parent::div//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
        }
        async Image_uploader_For_Team_logo(){
                const filePath0 = "testData/images/Team.png"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
        }

        async Loading_image_upload(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Loading Image"]//parent::div//following-sibling::div//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Loading Image"]//parent::div//following-sibling::div//button[@title="Delete"]').click({button:'left'})
                }
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Loading Image"]//parent::div//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
        }
        async Image_uploader_For_Loading_image(){
                const filePath0 = "testData/images/Loading.jpg"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
        }

        async wait_loading_image(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Loading Image"]//parent::div//following-sibling::div//button[@title="Edit"]')
                await expect(edit_image_button).toBeVisible({timeout:60000})
        }
        //background video xpath might change, check here 

        async select_background_video(){
                
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div//input[@value="video"]').dblclick({button:'left',delay:1000})
               
        }
        async check_Background_video_availablity(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div//button[@title="Delete"]').dblclick({button:'left',delay:300})
                }
               
        }
        async background_video_wait(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div//button[@title="Edit"]')
                await expect(edit_image_button).toBeVisible({timeout:60000})
        }
        async Video_uploader_For_Background_video(){
                const filePath0 = "testData/videos/video.mp4"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
                ]);
                await fileChooser.setFiles([filePath0]);
                
        }
        async wrong_Video_uploader_For_background_video(){
                this.page.on('dialog', async dialog => {
                        // Verify type of dialog
                        expect(dialog.type()).toContain('alert');   
                        
                        // verify message of alert
                        expect(dialog.message()).toContain('Error: Incorrect file extension');
                        
                        //click on alert ok button
                        await dialog.accept();
                      });
                const filePath0 = "testData/images/icon.png"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
                ]);
                await fileChooser.setFiles([filePath0]);
        }


        async select_how_to_play_image(){
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="How to Play"]//parent::div//following-sibling::div//input[@value="image"]').click({button:'left',delay:500})
        }
        async how_to_play_image_upload(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="How to Play"]//parent::div//following-sibling::div[2]//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="How to Play"]//parent::div//following-sibling::div[2]//button[@title="Delete"]').click({button:'left'})
                }
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="How to Play"]//parent::div//following-sibling::div[2]//div[@class="MuiBox-root css-v2612"]').click()
        }
        async Image_uploader_For_howtoplay_logo(){
                const filePath0 = "testData/images/HTP.png"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
        }
        async select_Howtoplay_video(){
                
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="How to Play"]//parent::div//following-sibling::div//input[@value="video"]').dblclick({button:'left',delay:500})
               
        }
        async check_Howtoplay_video_availablity(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="How to Play"]//parent::div//following-sibling::div//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="How to Play"]//parent::div//following-sibling::div//button[@title="Delete"]').dblclick({button:'left',delay:400})
                }
               
        }
        async wrong_Video_uploader_For_Howtoplay_video(){
                this.page.on('dialog', async dialog => {
                        // Verify type of dialog
                        expect(dialog.type()).toContain('alert');   
                        
                        // verify message of alert
                        expect(dialog.message()).toContain('Error: Incorrect file extension');
                        
                        //click on alert ok button
                        await dialog.accept();
                      });
                const filePath0 = "testData/images/icon.png"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="How to Play"]//parent::div//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
                ]);
                await fileChooser.setFiles([filePath0]);
        }
        async Video_uploader_For_Howtoplay_video(){
                const filePath0 = "testData/videos/video.mp4"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="How to Play"]//parent::div//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
                ]);
                await fileChooser.setFiles([filePath0]);
                
        }
        async howtoplay_video_wait(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="How to Play"]//parent::div//following-sibling::div//button[@title="Edit"]')
                await expect(edit_image_button).toBeVisible({timeout:60000})
        }
        async rules_image_upload(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Rules"]//parent::div//following-sibling::div[2]//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Rules"]//parent::div//following-sibling::div[2]//button[@title="Delete"]').click({button:'left'})
                }
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Rules"]//parent::div//following-sibling::div[2]//div[@class="MuiBox-root css-v2612"]').click()
        }
        async Image_uploader_For_rulesimage(){
                const filePath0 = "testData/images/rules.jpg"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()
                await this.page.waitForLoadState('networkidle',{timeout:30000})  
        }
        async select_rules_video(){
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Rules"]//parent::div//following-sibling::div//input[@value="video"]').dblclick({button:'left',delay:1000})
               
        }
        async check_rules_video_availablity(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Rules"]//parent::div//following-sibling::div//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Rules"]//parent::div//following-sibling::div//button[@title="Delete"]').dblclick({button:'left',delay:300})
                }
               
        }
        async Video_uploader_For_rules_video(){
                const filePath0 = "testData/videos/video.mp4"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Rules"]//parent::div//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
                ]);
                await fileChooser.setFiles([filePath0]);
                
        }
        async rules_video_wait(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Rules"]//parent::div//following-sibling::div//button[@title="Edit"]')
                await expect(edit_image_button).toBeVisible() 
        }
        async wrong_Video_uploader_For_rules_video(){
                this.page.on('dialog', async dialog => {
                        // Verify type of dialog
                        expect(dialog.type()).toContain('alert');   
                        
                        // verify message of alert
                        expect(dialog.message()).toContain('Error: Incorrect file extension');
                        
                        //click on alert ok button
                        await dialog.accept();
                      });
                const filePath0 = "testData/images/icon.png"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Rules"]//parent::div//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
                ]);
                await fileChooser.setFiles([filePath0]);
        }
        async splash_image_upload(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Splash Screen"]//parent::div//following-sibling::div[2]//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Splash Screen"]//parent::div//following-sibling::div[2]//button[@title="Delete"]').click({button:'left'})
                }
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Splash Screen"]//parent::div//following-sibling::div[2]//div[@class="MuiBox-root css-v2612"]').click()
        }

        async Image_uploader_For_splashscreen(){
                const filePath0 = "testData/images/splashscreen.jpg"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                ]);
                await fileChooser.setFiles([filePath0]);
                await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
        }
        async select_splash_video(){
                
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Splash Screen"]//parent::div//following-sibling::div//input[@value="video"]').click({button:'left',delay:500})
               
        }
        async check_splash_video_availablity(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Splash Screen"]//parent::div//following-sibling::div//button[@title="Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Splash Screen"]//parent::div//following-sibling::div//button[@title="Delete"]').click({button:'left'})
                }
               
        }
        async Video_uploader_For_splash_video(){
                const filePath0 = "testData/videos/video.mp4"
                const [fileChooser] = await Promise.all([
                        // It is important to call waitForEvent before click to set up waiting.
                        this.page.waitForEvent('filechooser'),
                        // Opens the file chooser.
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Splash Screen"]//parent::div//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
                ]);
                await fileChooser.setFiles([filePath0]);
                
        }
        async splash_video_wait(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Splash Screen"]//parent::div//following-sibling::div//button[@title="Edit"]')
                await expect(edit_image_button).toBeVisible({timeout:60000})
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
                const ele = this.page.frameLocator('iframe').locator('//p[text()="Text Color"]')
                await expect(ele).toContainText("Text Color")

        }


        async clickTextColorPicker() {
                const ele = this.page.frameLocator('.css-r99fy3').locator("//p[text()='Text Color']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }

        async inputTextRGRFirstColor() {
               
                const ele = this.page.frameLocator('.css-r99fy3').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[1]')
                await expect(ele).toBeVisible()
                await ele.fill("  ")
                await ele.type("189",{delay:100})
                //await this.page.waitForSelector('//div[@aria-label="Color"]')
                //div[@fill="hsla(180, 100%, 87%, 1)"] ei selector ta waitforselector die kora jabe
                await this.page.waitForTimeout(500)

        }
        async inputTextRGRSecondColor() {
               
                const ele = this.page.frameLocator('.css-r99fy3').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[2]')
                await expect(ele).toBeVisible()
                await ele.fill("  ")
                await ele.type("179",{delay:100})
                await this.page.waitForTimeout(500)

        }


        async inputTextRGRThirdColor() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[3]')
                await expect(ele).toBeVisible()
                await ele.fill("  ")
                await ele.type("229",{delay:100})
                await this.page.waitForTimeout(500)

        }

        async inputTextRGRFourColor() {
                const ele = this.page.frameLocator('.css-r99fy3').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[4]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("95")
                await this.page.waitForTimeout(500)

        }

        async inputTextRGRFiveColor() {
                const ele =  this.page.frameLocator('.css-r99fy3').locator('//input[@class="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedStart css-1yftmq7"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("#BDB3E5F2")
                await this.page.waitForTimeout(500)

        }


        //start Text color section element

        async verifyButtonColorText() {
                const ele = this.page.frameLocator('iframe').locator('text=Button Color')
                await expect(ele).toContainText("Button Color")

        }


        async clickButtonColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Button Color']/following-sibling::button").first()
                await expect(ele).toBeVisible()
                await ele.click()

        }

        async inputButtonRGRFirstColor() {
                const ele = this.page.frameLocator('iframe').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[1]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("204")
                await this.page.waitForTimeout(500)

        }
        async inputButtonRGRSecondColor() {
                const ele = this.page.frameLocator('iframe').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[2]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("56")
                await this.page.waitForTimeout(500)

        }


        async inputButtonRGRThirdColor() {
                const ele = this.page.frameLocator('iframe').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[3]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("147")
                await this.page.waitForTimeout(500)

        }

        async inputButtonRGRFourColor() {
                const ele = this.page.frameLocator('iframe').locator('(//h3[text()="RGB"]//parent::legend//following-sibling::div//input)[4]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("100")
                await this.page.waitForTimeout(500)

        }

        async inputButtonRGRFiveColor() {
                const ele = this.page.frameLocator('iframe').locator('//input[@class="MuiOutlinedInput-input MuiInputBase-input MuiInputBase-inputSizeSmall MuiInputBase-inputAdornedStart css-1yftmq7"]')
                await expect(ele).toBeVisible()
                await ele.fill(" ")
                await ele.fill("CC3893FF")
                await this.page.waitForTimeout(500)

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
                const ele = this.page.frameLocator('iframe').locator("(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[3]")
                await expect(ele).toBeVisible()
                await ele.fill("In publishing and graphic design, Lorem ipsum is a placeholder")
        }

        async clickEntryScreen() {
                const ele = this.page.frameLocator('iframe').locator("//div[contains(@class,'MuiSelect-select MuiSelect-outlined')]")
                await expect(ele).toBeVisible()
                await ele.click({button:'left'})
        }

        async selectHowToScreen() {
                const ele = this.page.frameLocator('iframe').locator("//li[text()='How to Screen']")
                await expect(ele).toBeVisible()
                await ele.click({button:'left'})
        }




        //🔚 Closed Game Settings Section Element 
        //=======================================================
        //▶▶Start Add Banner Settings Section Element  


        async clickAddBannerSection() {
                await this.page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsEditDelete >> p').nth(2).click()

        }

        async click_delete_button_added_banner(){
                await this.page.frameLocator('iframe').locator('//div[@class="MuiBox-root css-up2ccm"]').click()
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
        async check_marketing_message(){
               const ele =  this.page.frameLocator('iframe').locator('//p[text()="Marketing Message"]').last() 
               await expect(ele).toBeVisible()
        }


        //🔚 Closed Game Settings Section Element 
        //=======================================================
        //▶▶Start Add Banner Settings Section Element  



        async clickPrizingSection() {
                await this.page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsEditDelete >> p').nth(3).click()

        }

        async clickDefultGamePrizingSection() {                
                const ele = await this.page.frameLocator('iframe').locator(`//p[text()='Prizing']`).first()
                await ele.click({button:"left", delay:1000})
        }

        async verifyPrizingListText() {
                const ele = this.page.frameLocator('iframe').locator("//h4[text()='Prizing List']")
                await expect(ele).toContainText("Prizing List")
        }
        async verify_Prizing_name(){
                const ele = this.page.frameLocator('iframe').locator('//td[text()="AutoCoupon"]')
                await expect(ele).toBeVisible()
        }

        async verify_total_prizes(){
                const ele = this.page.frameLocator('iframe').locator('//td[text()="20"]')
                await expect(ele).toBeVisible()
        }

        async verify_Parcentage_awarded(){
                const ele = this.page.frameLocator('iframe').locator('//td[text()="10"]')
                await expect(ele).toBeVisible()
        }
        async verify_awardall_button(){
                const ele = this.page.frameLocator('iframe').locator('//button[text()="Award All"]')
                await expect(ele).toBeVisible()
                await ele.click({button:'left'})
        }

        async clickAddNewPrizeBtn() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Award All']/following-sibling::button")
                expect(ele).toBeVisible()
                await ele.click()
        }

        async click_back_button(){
                const back = this.page.frameLocator('iframe').locator("//button[text()='Back']")
                await expect(back).toBeVisible()
                await back.click({button:'left'})
                const ele = this.page.frameLocator('iframe').locator("//button[text()='Award All']/following-sibling::button")
                await expect(ele).toBeVisible()
                
        }
        async click_edit_prize_button(){
                const back=this.page.frameLocator('iframe').locator('//button[text()="Edit"]').last()
                await expect(back).toBeVisible()
                await back.click({button:'left'})      

        }
        async click_delete_prize_button(){                
                const del= this.page.frameLocator('iframe').locator('//button[text()="Delete"]').last()
                await expect(del).toBeVisible()
                await del.click({button:'left'})
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
        async verifyNewlyAddedGlobalPrizeSuccessfullyShowOnGamePrizeSection() {                
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Auto Test']")
                expect(ele).toContainText("Auto Test")
        }

        async selectCouponCreatedFromGlobalPrizing() {
                const ele = await this.page.frameLocator('iframe').locator("//button[text()='Select']").last()
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
                await this.page.frameLocator('iframe').locator("//p[text()='Analytics']").first().click({button:'left'})

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
                        this.page.frameLocator('iframe').locator('//button[text()="Export"]').first().click({button:'left'})
             ])
               const suggestedFileName = download.suggestedFilename()
               const filePath = 'Prize_drop_analytics_data_from_test_automation' + suggestedFileName
               await download.saveAs(filePath)
                expect(existsSync(filePath)).toBeTruthy()
        }

        async click_date_header(){
              const date_header= this.page.frameLocator('iframe').locator('//span[text()="Date"]')
              await expect(date_header).toBeVisible()
              await date_header.dblclick({button:'left',delay:500})  
        }





        async click_closebutton_in_mobilelinkmodal (){
                await this.page.frameLocator('.css-r99fy3').locator('(//div[@role="dialog"]//button)[1]').click()
        }

        async clickStartGameBtn() {

                const ele = this.page.frameLocator('.css-r99fy3').locator('//h6[text()="Auto"]//following-sibling::div//button[text()="Start"]')

                // const ele = await this.page.frameLocator('iframe').locator('text=Start').nth(1)
                await expect(ele).toBeVisible()
                await ele.click({button:'left'})

        }

        async clickStartGameOkBtn() {

                await this.page.frameLocator('.css-r99fy3').locator("//button[text()='Ok']").click();

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
                await this.page.frameLocator('.css-r99fy3').locator('//h6[text()="Auto"]//following-sibling::div//button[2]').click();

                // const ele = await this.page.frameLocator('iframe').locator('text=AutoStop >> [data-testid="MobileScreenShareIcon"]')
                // expect(ele).toBeVisible()
                // await ele.click({force:true})

        }

        async  clickMobileLinkOpenBtn() {

                // Click text=Open Link
                const [page1] = await Promise.all([
                        this.page.waitForEvent('popup'),
                        this.page.frameLocator('.css-r99fy3').locator("//a[text()='Open Link']").click()
                ]);

                return page1;


        }

        async clickMobileLinkCopyBtn() {

                // Click text=Open Link

                await this.page.frameLocator('.css-r99fy3').locator('text=Copy Link').click()



        }
        //QR code section here
        async clickQRcodebutton(){
                
                await  this.page.frameLocator('.css-r99fy3').locator('//h6[text()="Auto"]//following-sibling::div//button[3]').click()

        }

        async validateQRtext(){
                const ele = this.page.frameLocator('.css-r99fy3').locator('//h2[text()="Mobile Link"]')
                await expect(ele).toBeVisible()
        }
        async validateDownload(){
                
                const [download] = await Promise.all([
                         this.page.waitForEvent('download'),
                         this.page.frameLocator('.css-r99fy3').locator('//button[text()="Save QR Code"]').click()
              ])
                const suggestedFileName = download.suggestedFilename()
                const filePath = 'Test_data_that_gets_downloaded/' + suggestedFileName
                await download.saveAs(filePath)
                expect(existsSync(filePath)).toBeTruthy()
        }

        async clickQRcodecopybtn(){
                await  this.page.frameLocator('.css-r99fy3').locator('//button[text()="Copy QR Code"]').click()
        }





//Edit Section Element Here


async clickEditSection() {
        await this.page.frameLocator('iframe').locator('text=AutoStartGame DesignGame SettingsAdd BannerPrizingAnalyticsEditDelete >> p').nth(5).click()

}


async inputEditGameTitle() {
        const ele = await this.page.frameLocator('iframe').locator('input[type="text"]')
        await ele.fill("Auto_Edited")

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
                await this.page.frameLocator('iframe').locator("//button[text()='Delete']").last().click();

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

        // Mobilepage functions start from here
        //rich text editor game settings
        async typestandbymessage(text:string) {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill('   ')
                await ele.fill(` ${text}`)
        }
        async clickleftalignedstandbymessage() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@title="Left"]').click()

        }
        async clickrightalignedstandbymessage() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@title="Right"]').click()

        }
        async clickboldstandbymessageeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@title="Bold"]').click()

        }
        async clickitalicstandbymessageeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@title="Underline"]').click()

        }
        async clickunderlinestandbymessageeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@title="Italic"]').click()

        }
        async clickorderedstandbymessageeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@title="Ordered"]').click()

        }
        async clickunorderedstandbymessageeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Stand By Message"]//following-sibling::div//div[@title="Unordered"]').click()

        }
        async typeendinggamemessage(text:string) {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Ending Game Message"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(` ${text}`)
        }
        async clickleftalignedendinggamemessage() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Ending Game Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Ending Game Message"]//following-sibling::div//div[@title="Left"]').click()

        }
        async clickrightalignedendinggamemessage() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Ending Game Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Ending Game Message"]//following-sibling::div//div[@title="Right"]').click()

        }
        async clickboldendinggamemessageeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Ending Game Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Ending Game Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Ending Game Message"]//following-sibling::div//div[@title="Bold"]').click()

        }
        async clickitalicendinggamemessageeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Ending Game Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Ending Game Message"]//following-sibling::div//div[@title="Underline"]').click()

        }
        async clickunderlineendinggamemessageeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Ending Game Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Ending Game Message"]//following-sibling::div//div[@title="Italic"]').click()

        }
        async clickorderedendinggamemessageeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Ending Game Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Ending Game Message"]//following-sibling::div//div[@title="Ordered"]').click()

        }
        async clickunorderedendinggamemessageeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Ending Game Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Ending Game Message"]//following-sibling::div//div[@title="Unordered"]').click()

        }
        //selection message
        async typeselectionmessage(text:string) {
                const ele = this.page.frameLocator('.css-r99fy3').locator('//p[text()="Selection Message"]//following-sibling::div//div[@aria-label="rdw-editor"]')
                await expect(ele).toBeVisible()
                await ele.fill(` ${text}`)
        }
        async clickleftalignedselectionmessage() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Selection Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Selection Message"]//following-sibling::div//div[@title="Left"]').click()

        }
        async clickrightalignedselectionmessage() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Selection Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Selection Message"]//following-sibling::div//div[@title="Right"]').click()

        }
        async clickboldselectionmessageeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Selection Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Selection Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Selection Message"]//following-sibling::div//div[@title="Bold"]').click()

        }
        async clickitalicselectionmessageeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Selection Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Selection Message"]//following-sibling::div//div[@title="Underline"]').click()

        }
        async clickunderlineselectionmessageeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Selection Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Selection Message"]//following-sibling::div//div[@title="Italic"]').click()

        }
        async clickorderedselectionmessageeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Selection Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Selection Message"]//following-sibling::div//div[@title="Ordered"]').click()

        }
        async clickunorderedselectionmessageeditor() {
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Selection Message"]//following-sibling::div//div[@aria-label="rdw-editor"]').selectText()
                await this.page.waitForTimeout(1000)
                await this.page.frameLocator('.css-r99fy3').locator('//p[text()="Selection Message"]//following-sibling::div//div[@title="Unordered"]').click()

        }


}

