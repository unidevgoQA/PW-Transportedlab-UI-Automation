import { expect, Logger, Page } from "@playwright/test";
import { readFileSync,existsSync } from 'fs'
export default class prizeDropPage {
        // [x: string]: any;

        private page: Page;
        // static buffer: void;
        private prizedop_elements = {
        //change the '//h6[text()=" Auto"]' with appropriate name if you change the configuration name
          prizedrop_game:"//p[text()='Prize Drop']",
          configurations_element:'text=Configurations',
          Auto_config_element: '//h6[text()=" Auto"]',
          Auto_config_delete_button:"//h6[text()=' Auto']//parent::div//parent::div//p[text()='Delete']",
          delete_button:"//button[text()='Delete']",
          plus_button:"(//h5[text()='Configurations']/following-sibling::button)[1]",
          new_config_modal_header:"//p[text()='New Configuration']",
          cancel_button:"//button[text()='CANCEL']",
          add_button:"//button[text()='ADD']",
          ok_button:"//button[text()='Ok']" ,
          empty_config_error:"//p[text()='Configuration name cannot be empty']",
          start_button:'//h6[text()=" Auto"]//following-sibling::div//button[text()="Start"]',
          live_button:'//h6[text()=" Auto"]//following-sibling::div//button[text()="Live"]',
          QR_button:'//h6[text()=" Auto"]//following-sibling::div//button[3]',
          mobile_link_copy_button:'//button[text()="Copy Link"]',
          QR_header_text:'//h2[text()="Mobile Link"]',
          copy_qr_button:'//button[text()="Copy QR Code"]',
          no_prize_error:"//p[text()='You can`t start a session without prizes, please create a prize']",
          add_banner_item:'//p[text()="Add Banner"]',
          marketing_message:"//h5[text()='Marketing Message']",
          ele_for_marketing:'//p[text()="Marketing Message"]//preceding-sibling::div',
          auto_mobile_link:'//h6[text()=" Auto"]//following-sibling::div//button[2]',
          prize_page:'//p[text()="Prizing"]',
          prize_list:"//h4[text()='Prizing List']",
          auto_coupon_name:`//td[text()="Auto_coupon_edited"]`,
          auto_coupon_total_prize:'//td[text()="30"]',
          auto_coupon_parcentage_awarded: '//td[text()="40"]',
          award_all_button:'//button[text()="Award All"]',
          add_new_prize_button:"//button[text()='Award All']/following-sibling::button",
          back_button:"//button[text()='Back']",
          edit_button:'//button[text()="Edit"]',
          save_button:"//button[text()='Save']",
          game_design:'//p[text()="Game Design"]',
          clear_all:"//button[text()='Clear All']",
          text_color_button:"//p[text()='Text Color']/following-sibling::button",
          main_color_button:"//p[text()='Main Color']/following-sibling::button",
          button_color_button:"//p[text()='Button Color']/following-sibling::button",
          accent_color_picker:"//p[text()='Accent Color']/following-sibling::button",
          RGB_red_color: '(//h3[text()="RGB"]//parent::legend//parent::div//following-sibling::div//input[@type="text"])[1]',
          RGB_green_color: '(//h3[text()="RGB"]//parent::legend//parent::div//following-sibling::div//input[@type="text"])[2]',
          RGB_blue_color: '(//h3[text()="RGB"]//parent::legend//parent::div//following-sibling::div//input[@type="text"])[3]',
          RGB_opacity_color: '(//h3[text()="RGB"]//parent::legend//parent::div//following-sibling::div//input[@type="text"])[4]',
          RGB_Hex_color: '(//h3[text()="RGB"]//parent::legend//parent::div//following-sibling::div//input[@type="text"])[5]',
          choose_file_button:'//button[text()="Choose File"]',
          file_type_not_supported:'//p[text()="File type is not supported"]',
         
          coupon_prize_select_button:"//div[@class='MuiBox-root css-1qf0ezp']",
          select_first_coupon_prize_select:"(//button[text()='Select'])[1]",
          coupon_name:"//input[@placeholder='Coupon name']",
          amount_of_awarding:"//input[@placeholder='Amount Of Awarding']",
          parcentage_awarded:"//input[@placeholder='Percentage Value']",
          analytics_page:"//p[text()='Analytics']",
          upload_fonts:'//p[text()="Upload Font"]',
          font_uploader:'//p[text()="Upload Font"]//preceding-sibling::div',
          font_text:'//p[text()="Aa"]',
          add_color_button:'//button[@aria-label="Add Color"]',
          delete_color_button:'//button[@aria-label="delete"]',
          list_box_button:'//div[@aria-haspopup="listbox"]',
          list_item_solid:'//li[text()="Solid"]',
          list_item_horizontal:'//li[text()="Horizontal"]',
          list_item_vertical:'//li[text()="Vertical"]',
          list_item_diagonal:'//li[text()="Diagonal"]',
          list_item_radial:'//li[text()="Radial"]',
          color_opacity_slider:'//input[@aria-label="Alpha" and @aria-valuetext="100%"]',
          edit_image_button:'//button[@aria-label="Upload/Edit"]',
          delete_image_button:'//button[@aria-label="Delete"]',
          image_or_video_click:'//div[@class="MuiBox-root css-v2612"]',
          full_screen_logo_image_click:'//h5[text()="Full Screen Logo"]/parent::div/following-sibling::div//div[@class="MuiBox-root css-v2612"]'

        }
        constructor(page: Page) {
                this.page = page;
        }

        

        //=======================================================
        //▶▶Start Title Stage Section Element       


        async clickPrizeDropSection() {
                const locator = this.page.locator(this.prizedop_elements.prizedrop_game)
                if(await locator.isEnabled()){
                        await locator.click({button:'left'})
                        await this.page.waitForLoadState('networkidle')
                }
                else {
                        throw new Error('Prize drop Game selector element is missing in Admin panel')
                }
        }

        async verifyConfigurationsText() {   

                const ele =this.page.frameLocator('iframe').locator(this.prizedop_elements.configurations_element)
                if(await ele.isVisible()){
                     await   expect(ele).toContainText("Configurations")

                }
                else {
                        throw new Error('Configurations Text is not visible')
                }

        }

        async check_if_auto_config_exist() {    

                const ele = this.page.frameLocator('iframe').locator(this.prizedop_elements.Auto_config_element);
                        
                        if (await ele.isVisible()) {

                                await this.page.frameLocator('iframe')
                                .locator(this.prizedop_elements.Auto_config_delete_button).last()
                                .click({ button:'left' });
                                await this.page.waitForTimeout(3000);
                                const delete_modal = await this.page.frameLocator('iframe').locator("//p[text()='Are you sure that you want to delete this configuration?']").isVisible();
                                
                                if (delete_modal) {
                                    await this.page.frameLocator('iframe')
                                        .locator(this.prizedop_elements.delete_button)
                                        .click({ button:'left' });
                                }
                                else 
                                {
                                        throw new Error('Delete confirm modal is not Appearing')
                                }
                              
                                
                        }

                       

        }


        async clickAddNewConfigPlusBtn() {
                const ele =this.page
                .frameLocator('iframe')
                .locator(this.prizedop_elements.plus_button)
               if(await ele.isVisible()){
                        await ele.click()
               }
               else {
                throw new Error('Plus button To add new config is not visible or attached to dom')
               }

        }
        async verifyAddNewConfigPlusWindowText() {
                const ele = this.page.frameLocator('iframe').locator(this.prizedop_elements.new_config_modal_header);
                  if (await ele.isVisible()) {
                    await expect(ele).toContainText('New Configuration');
                  } else {
                    throw new Error('Modal header for new configuration is missing');
                  }
              }


        async inputConfigurationName(value:string) {
                const ele = this.page.frameLocator('iframe').locator('input[type="text"]')
                if(await ele.isVisible()){
                        await ele.fill(' '+value)
                }
                else{
                        throw new Error('Configuration name input element is not visible')
                }
                

        }
        async veirfycancelBtnvisiblity() {
                const ele = this.page.frameLocator('iframe').locator(this.prizedop_elements.cancel_button)
                if(await ele.isEnabled()){
                        await expect(ele).toBeVisible()
                }
                else {
                        throw new Error("Cancel button is not visible")
                }
                
        }

        async clickAddBtn() {
                const ele = this.page
                .frameLocator('iframe')
                .locator(this.prizedop_elements.add_button)
               if(await ele.isEnabled()){
                        await expect(ele).toBeVisible()
                        await ele.click()
               }
               else {
                        throw new Error('Add button is missing/not visible')
               }

        }
        async check_error_modal(value:string){
                const ele = this.page.frameLocator('//iframe').locator(`//p[text()="Configuration name ${value} already exists"]`)
                if(await ele.isVisible()){
                        await this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.ok_button).click()
                }
                else{
                        throw new Error("Duplicate warning modal is missing")
                }
        }

        async verifyerrorvisiblity() {
                const ele = this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.empty_config_error)
                if(await ele.isVisible()){
                    await this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.ok_button).click()   
                }
                else{
                    throw new Error("Empty name configuration warning is missing")    
                }
        }
        //start button visiblity

        async startbuttonvisible(){
                const ele = this.page
                .frameLocator('.css-r99fy3')
                .locator(this.prizedop_elements.start_button)
                if(await ele.isEnabled()){
                        await expect(ele).toBeVisible()
                }
                else {
                        throw new Error('Start button is missing')
                }
                
        }

        // async clickstartbutton(){
        //         await this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.start_button).click()
        // }

        async clickokinstartconfirmmodal(){
                await this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.ok_button).click()
        }

        async verifyerrorvisiblityfornoprize() {
                const ele = this.page.frameLocator('.css-r99fy3')
                        .locator(this.prizedop_elements.no_prize_error)
                if (await ele.isEnabled()) {
                        await expect(ele).toBeVisible()
                        await this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.ok_button).click()
                }
                else {
                        throw new Error("No prize warning is missing")
                }
        }


        //🔚 Closed Add New Config Section Element 
        //=======================================================
        //▶▶Start Game Design Section Element  
        async clickGameDesign() {
               try {
                 await this.page.frameLocator('iframe')
                 .locator(this.prizedop_elements.game_design)
                 .last().click({button:'left'})
               } catch (error) {
                throw `Prize Drop| Game design | clicking on game design is not working`
               }

        }

        async clickToUploadFont() {
                const ele = this.page.frameLocator('iframe').locator('//p[text()="Upload Font"]//preceding-sibling::div')
                await expect(ele).toBeVisible()
                await ele.click({button:'left'})
        }
        async handle_alert(){
               try {
                this.page.on('dialog', async dialog => {
                         // Verify type of dialog
                         expect(dialog.type()).toContain('alert');   
                         
                         // verify message of alert
                         expect(dialog.message()).toContain('Error: Incorrect file extension');
                         
                         //click on alert ok button
                         await dialog.accept();
                       });
               } catch (error) {
                `Prize Drop| Game design | Error Message after trying to upload a wrong font is missing ${error}`
               }
        }
        async wrong_font_uploader_click(){
               try {
                 const filePath0 = "testData/images/HTP.png"
                 const [fileChooser] = await Promise.all([
                         // It is important to call waitForEvent before click to set up waiting.
                         this.page.waitForEvent('filechooser'),
                         // Opens the file chooser.
                         this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Upload Font"]//preceding-sibling::div').click()
                 ]);
                 await fileChooser.setFiles([filePath0]);
               } catch (error) {
                `Prize Drop| Game design | wrong file upload is failed ${error}`
               }
 
        }
       
        async font_uploader_click(){
                try {
                        const filePath0 = "testData/fonts/Midnight.ttf"
                        const [fileChooser] = await Promise.all([
                                // It is important to call waitForEvent before click to set up waiting.
                                this.page.waitForEvent('filechooser'),
                                // Opens the file chooser.
                                this.page.frameLocator('(//iframe)[1]').locator(this.prizedop_elements.font_uploader).click()
                        ]);
                        await fileChooser.setFiles([filePath0]);
                } catch (error) {
                        `Prize drop| Game design| Font upload failed ${error}`
                }
 
        }
        async verify_font_uploaded(){
                const ele = this.page.frameLocator('iframe').locator(this.prizedop_elements.font_text).last()
                try {
                   await expect(ele).toBeVisible()
                } catch (error) {
                     `Prize drop| Game design| Font upload failed ${error}`   
                }
        }

        async clickClearAllBtn() {
                
               try {
                 await this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.clear_all).dblclick({button:'left',delay:500})
                 
               } catch (error) {
                 throw `Prize drop| game design | Clear all button clicking failed ${error}`
               }
        }
        async verifyclearallworking(){
               try {
                 const ele = this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.text_color_button)
                 await expect(ele).toHaveAttribute("background","rgba(255, 255, 255, 1)")
               } catch (error) {
                throw `Prize drop| game design | clear all button not working ${error}`
               }
        }
        // swatches section for all color pickers

        async clickplusbuttonswatches() {
              try {
                  await this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.add_color_button).click()
              } catch (error) {
                throw new Error('Prize drop | Game Design| click plus button in swatches failed' + error)
              }
        }

        async clickdeletebuttonswatches() {
               try {
                 await this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.delete_color_button).last().click()
               } catch (error) {
                throw new Error('Prize drop | Game Design| click delete button in swatches failed' + error)
               }
        }
        // solid dropdowns 

        async validate_solid_horizontal_vertical_dropdown(){
                try {
                        await this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.list_box_button).first().click()
                } catch (error) {
                        throw new Error('Prize drop | Game Design| click vertical dropdown  failed' + error)  
                }
        }

        async click_solid_button(){
                try {
                        await this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.list_item_solid).click()
                } catch (error) {
                        throw new Error('Prize drop | Game Design| click solid button  failed' + error)     
                }
        }

        async click_horizontal_button() {
                try {
                        await this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.list_item_horizontal).click()
                } catch (error) {
                        throw new Error('Prize drop | Game Design| click horizontal button  failed' + error)
                }
        }
        async click_vertical_button() {
                try {
                        await this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.list_item_vertical).click()
                } catch (error) {
                        throw new Error('Prize drop | Game Design| click vertical button  failed' + error)
                }
        }
        async click_diagonal_button() {
                try {
                        await this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.list_item_diagonal).click()
                } catch (error) {
                        throw new Error('Prize drop | Game Design| click diagonal button  failed' + error)
                }
        }
        async click_radial_button() {
                try {
                        await this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.list_item_radial).click()
                } catch (error) {
                        throw new Error('Prize drop | Game Design| click radial button failed' + error)
                }
        }
        
        //opacity slider
        async opacity_slider_visiblity() {
              try {
                  const ele =  this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.color_opacity_slider)
                  await expect(ele).toBeVisible()
              } catch (error) {
                throw new Error(`Prize drop| Game design| Opacity slider not visible`)
              }
        }
        //start main color section element
        async verifyMainColorText() {
                const ele = this.page.frameLocator('iframe').locator('text=Main Color')
                await expect(ele).toContainText("Main Color")

        }


        async clickMainColorPicker() {
               try {
                 const ele = this.page.frameLocator('iframe').locator(this.prizedop_elements.main_color_button).first()
                 await expect(ele).toBeVisible()
                 await ele.click()
 
               } catch (error) {
                 throw new Error('Prize Drop| Game Design | Main color picker clicking failed '+ error)
               }
        }

        


        async clickColorPickerSaveBtn() {
               try {
                 const ele = this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.save_button)
                 await expect(ele).toBeVisible()
                 await ele.click()
               } catch (error) {
                 throw new Error(`Prize Drop|Game Design| Color picker save button clicking failed ${error}`)
               }

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
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div[2]//button[@title="Delete"]').dblclick({button:'left',delay:300})
                       
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
              try {
                  const filePath0 = "testData/fonts/Thin.otf"
                  const [fileChooser] = await Promise.all([
                          // It is important to call waitForEvent before click to set up waiting.
                          this.page.waitForEvent('filechooser'),
                          // Opens the file chooser.
                          this.page.frameLocator('(//iframe)[1]').locator(this.prizedop_elements.choose_file_button).click()
                  ]);
                  await fileChooser.setFiles([filePath0]);
   
              } catch (error) {
                throw new Error("Prize Drop| File upload| File Upload failed for main color " + error)
              }
        }
        async validate_wrong_file_typetext(){
                const wrong = this.page.frameLocator('(//iframe)[1]').locator(this.prizedop_elements.file_type_not_supported)
                if(await wrong.isVisible()){
                        await this.page.frameLocator('(//iframe)[1]').locator(this.prizedop_elements.ok_button).click()
                }
        }
        async fullscreenlogoupload(){
                try {
                        const delete_image_button =await this.page.frameLocator('(//iframe)[1]').locator(this.prizedop_elements.delete_image_button).isVisible()
                        if(delete_image_button ){
                                await this.page.frameLocator('(//iframe)[1]').locator(this.prizedop_elements.delete_image_button).click({button:'left'})
                        }
                        await this.page.frameLocator('(//iframe)[1]').locator(this.prizedop_elements.full_screen_logo_image_click).click()
                } catch (error) {
                       throw new Error('Prize drop|Game design |Element click to upload Image is failed or existing image delete failed' + error) 
                }
        }
        async delete_image_prize_drop(){
                try {
                        await this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.delete_image_button).click({button:'left'})
                
                } catch (error) {
                    throw new Error('Prize Drop|Delete Image | deleting uploaded image is failed' + error)    
                }}

        async Image_uploader_For_Fullcreenlogo(){
              try {
                  const filePath0 = "testData/images/Fullscreen.png"
                  const [fileChooser] = await Promise.all([
                          // It is important to call waitForEvent before click to set up waiting.
                          this.page.waitForEvent('filechooser'),
                          // Opens the file chooser.
                          this.page.frameLocator('(//iframe)[1]').locator(this.prizedop_elements.choose_file_button).click()
                  ]);
                  await fileChooser.setFiles([filePath0]);
                  await this.page.frameLocator('(//iframe)[1]').locator(this.prizedop_elements.save_button).click() 
              } catch (error) {
                throw new Error("Prize drop| Game Design| Image upload for full screen logo upload is failed" + error)
              } 
        }
        async full_screen_logo_wait(){
            try {
                  const edit_image_button =this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.edit_image_button)
                   expect(edit_image_button).toBeVisible({timeout:60000}) 
               
            } catch (error) {
                throw new Error("Prize drop| Game Design| Image upload for full screen logo upload is not successful,upload/edit button missing" + error)
            }
        }

        async Game_title_image_upload(){
                try {
                        const edit_image_button = this.page.frameLocator('.css-r99fy3').locator('//h5[text()="Game Title Image"]//parent::div//following-sibling::div//button[@aria-label="Upload/Edit"]')
                        if(!await edit_image_button.isHidden() ){
                                await this.page.frameLocator('.css-r99fy3').locator('//h5[text()="Game Title Image"]//parent::div//following-sibling::div//button[@aria-label="Delete"]').click({button:'left'})
                        }
                        await this.page.frameLocator('.css-r99fy3').locator('//h5[text()="Game Title Image"]//parent::div//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
                } catch (error) {
                        throw new Error("Prize drop| Game Design| Image upload for game title upload is not successful,upload/edit button missing" + error)
               
                }
        }
        async Image_uploader_For_Game_title_image(){
                try {
                        const filePath0 = "testData/images/title.jpg"
                        const [fileChooser] = await Promise.all([
                                // It is important to call waitForEvent before click to set up waiting.
                                this.page.waitForEvent('filechooser'),
                                // Opens the file chooser.
                                this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
                        ]);
                        await fileChooser.setFiles([filePath0]);
                        await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
                } catch (error) {
                        throw new Error("Prize drop| Game Design| Image upload for game title upload failed" + error)
               
                }
        }
        async game_tile_wait(){
             try {
                   const edit_image_button =this.page.frameLocator('.css-r99fy3').locator('//h5[text()="Game Title Image"]//parent::div//following-sibling::div//button[@aria-label="Upload/Edit"]')
                  await expect(edit_image_button).toBeVisible({timeout:60000}) 
             } catch (error) {
                throw new Error("Prize drop| Game Design| Image upload for game title upload is not successful,upload/edit button missing" + error)
               
             }
        }
        async Frame_image_upload(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Frame Image"]//parent::div//following-sibling::div//button[@aria-label="Upload/Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Frame Image"]//parent::div//following-sibling::div//button[@aria-label="Delete"]').click({button:'left'})
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
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Frame Image"]//parent::div//following-sibling::div//button[@aria-label="Upload/Edit"]')
                await expect(edit_image_button).toBeVisible({timeout:60000})
        }

        async Sponsor_image_upload(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Sponsor Logo"]//parent::div//following-sibling::div//button[@aria-label="Upload/Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Sponsor Logo"]//parent::div//following-sibling::div//button[@aria-label="Delete"]').click({button:'left'})
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
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Sponsor Logo"]//parent::div//following-sibling::div//button[@aria-label="Upload/Edit"]')
               await expect(edit_image_button).toBeVisible({timeout:60000})
        }
        async Team_logo_upload(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Team Logo"]//parent::div//following-sibling::div//button[@aria-label="Upload/Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Team Logo"]//parent::div//following-sibling::div//button[@aria-label="Delete"]').click({button:'left'})
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
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Loading Image"]//parent::div//following-sibling::div//button[@aria-label="Upload/Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Loading Image"]//parent::div//following-sibling::div//button[@aria-label="Delete"]').click({button:'left'})
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
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Loading Image"]//parent::div//following-sibling::div//button[@aria-label="Upload/Edit"]')
                await expect(edit_image_button).toBeVisible({timeout:60000})
        }
        //background video xpath might change, check here 

        async select_background_video(){
                
                await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div//input[@value="video"]').dblclick({button:'left',delay:1000})
               
        }
        async check_Background_video_availablity(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div//button[@aria-label="Upload/Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div//button[@aria-label="Delete"]').dblclick({button:'left',delay:300})
                }
               
        }
        async background_video_wait(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Background"]//parent::div//following-sibling::div//button[@aria-label="Upload/Edit"]')
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
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="How to Play"]//parent::div//following-sibling::div[2]//button[@aria-lable="Upload/Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="How to Play"]//parent::div//following-sibling::div[2]//button[@aria-lable="Delete"]').click({button:'left'})
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
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="How to Play"]//parent::div//following-sibling::div//button[@aria-label="Upload/Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="How to Play"]//parent::div//following-sibling::div//button[@aria-label="Delete"]').dblclick({button:'left',delay:400})
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
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="How to Play"]//parent::div//following-sibling::div//button[@aria-label="Upload/Edit"]')
                await expect(edit_image_button).toBeVisible({timeout:60000})
        }
        async rules_image_upload(){
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Rules"]//parent::div//following-sibling::div[2]//button[@aria-label="Upload/Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Rules"]//parent::div//following-sibling::div[2]//button[@aria-label="Delete"]').click({button:'left'})
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
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Rules"]//parent::div//following-sibling::div[2]//button[@aria-label="Upload/Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Rules"]//parent::div//following-sibling::div[2]//button[@aria-label="Delete"]').dblclick({button:'left',delay:300})
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
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Rules"]//parent::div//following-sibling::div[2]//button[@aria-label="Upload/Edit"]')
                await expect(edit_image_button).toBeVisible({timeout:60000}) 
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
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Splash Screen"]//parent::div//following-sibling::div[2]//button[@aria-label="Upload/Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Splash Screen"]//parent::div//following-sibling::div[2]//button[@aria-label="Delete"]').click({button:'left'})
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
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Splash Screen"]//parent::div//following-sibling::div//button[@aria-label="Upload/Edit"]')
                if( await edit_image_button.isVisible() ){
                        await this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Splash Screen"]//parent::div//following-sibling::div//button[@aria-label="Delete"]').click({button:'left'})
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
                const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//h5[text()="Splash Screen"]//parent::div//following-sibling::div[2]//button[@aria-label="Upload/Edit"]')
                await expect(edit_image_button).toBeVisible({timeout:60000})
        }
        //start accent color section element

        async verifyAccentColorText() {
               try {
                 const ele =  this.page.frameLocator('iframe').locator('text=Accent Color')
                 await expect(ele).toContainText("Accent Color")
               } catch (error) {
                 throw new Error('Prize drop | game design | Accent color text is incorrect or failed '+ error)
               }

        }


        async clickAccentColorPicker() {
               try {
                 const ele =  this.page.frameLocator('iframe').locator(this.prizedop_elements.accent_color_picker).first()
                 await expect(ele).toBeVisible()
                 await ele.click()
 
               } catch (error) {
                throw new Error('Prize drop | game design | Accent color picker clicking failed '+ error)
               }
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
                try {
                        await expect(ele).toContainText("Text Color")
                } catch (error) {
                       throw new Error('Prize drop| Game Design | Text color text failed or changed ' + error) 
                }

        }


        async clickTextColorPicker() {
                const ele = this.page.frameLocator('.css-r99fy3').locator("//p[text()='Text Color']/following-sibling::button").first()
              try {
                  await expect(ele).toBeVisible()
                  await ele.click()
  
              } catch (error) {
                throw new Error('Prize drop| Game Design | Text color click failed' + error) 
                }
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


        // color section elements
        async input_Red_Color(value: string) {
                const ele = this.page
                  .frameLocator("iframe")
                  .locator(this.prizedop_elements.RGB_red_color);
                if (await ele.isVisible()) {
                  await ele.focus()
                  await ele.fill(' ')
                  await ele.type(value, { delay: 500 })
                }
                else {
                  throw new Error(" THe red color input box for this color picker is not visible")
                }
              }
            
              async input_green_color(value: string) {
                const ele = this.page
                  .frameLocator("iframe")
                  .locator(this.prizedop_elements.RGB_green_color);
                if (await ele.isVisible()) {
                  await ele.focus()
                  await ele.fill(' ')
                  await ele.type(value, { delay: 500 })
                }
                else {
                  throw new Error(" THe Green color input box for this color picker is not visible")
                }
              }
              async input_blue_color(value: string) {
                const ele = this.page
                  .frameLocator("iframe")
                  .locator(this.prizedop_elements.RGB_blue_color);
                if (await ele.isVisible()) {
                  await ele.focus()
                  await ele.fill(' ')
                  await ele.type(value, { delay: 500 })
                }
                else {
                  throw new Error(" THe blue color input box for this color picker is not visible")
                }
              }
            
              async inputColorOpacity(value: string) {
                const ele = this.page
                  .frameLocator("iframe")
                  .locator(this.prizedop_elements.RGB_opacity_color);
                if (await ele.isVisible()) {
                  await ele.focus()
                  await ele.fill(' ')
                  await ele.type(value, { delay: 400 })
                }
                else {
                  throw new Error(" THe opacity color input box for this color picker is not visible")
                }
              }
            
              async inputHEXColor(value: string) {
                const ele = this.page
                  .frameLocator("iframe")
                  .locator(this.prizedop_elements.RGB_Hex_color);
                if (await ele.isVisible()) {
                  await ele.fill(' ')
                  await ele.focus()
                  await ele.type(value, { delay: 400 })
                }
                else {
                  throw new Error(" THe Hex color input box for this color picker is not visible")
                }
              }

        async verifyButtonColorText() {
               try {
                 const ele = this.page.frameLocator('iframe').locator("//p[text()='Button Color']")
                 await expect(ele).toContainText("Button Color")
               } catch (error) {
                 throw new Error("Prize Drop| game design | Button color text is not correct or changed"+error)
               }

        }


        async clickButtonColorPicker() {
              try {
                  const ele = this.page.frameLocator('iframe').locator(this.prizedop_elements.button_color_button).first()
                  await expect(ele).toBeVisible()
                  await ele.click()
              } catch (error) {
                throw new Error("Prize Drop| game design | Button color picker click failed"+error)
              }

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
                const ele =  this.page.frameLocator('iframe').locator(this.prizedop_elements.add_banner_item).last()
                if(await ele.isVisible()){
                        await ele.click({})
                }
                else{
                        throw new Error("Add banner section in newly added config is missing")
                }

        }

        async click_delete_button_added_banner(){
                try {
                        await this.page.frameLocator('iframe').locator('//div[@class="MuiBox-root css-up2ccm"]').click()       
                } catch (error) {
                   throw `Add banner| Delete button`+error     
                }
               
        }

        async verifyMarketingMassageText() {
                const ele =  this.page.frameLocator('iframe').locator(this.prizedop_elements.marketing_message)
                if(await ele.isVisible()){
                       await expect(ele).toContainText("Marketing Message")
                }
                else {
                        throw new Error("Marketing message text is missing")
                }
        }

        async verifyDragYourImageText() {
                const ele = await this.page.frameLocator('iframe').locator("//p[text()='Drag your image here, or browse']")
                expect(ele).toContainText("Drag your image here, or browse")
        }


        async clickToUploadBanner() {
                const ele = this.page.frameLocator('iframe')
                .locator(this.prizedop_elements.ele_for_marketing)
                if(await ele.isVisible()){
                        await ele.click()
                }
                else{
                        throw new Error("Click element for uploading marketing message is missing")
                }
        }
        async check_marketing_message(){
               const ele =  this.page.frameLocator('iframe').locator("//p[text()='Marketing Message']//parent::div[@class='MuiBox-root css-15rr3ay']").last() 
               await expect(ele).toBeVisible()
               
        }


        //🔚 Closed Game Settings Section Element 
        //=======================================================
        //▶▶Start Add Banner Settings Section Element  



        async clickPrizingSection() {
              try {
                await this.page.frameLocator('iframe')
                .locator(this.prizedop_elements.prize_page).last().click()

              } catch (error) {
                throw 'Prize drop| Prize page | prizing click not working'+ error;
              }
        }

        async clickDefultGamePrizingSection() {                
                const ele = await this.page.frameLocator('iframe').locator(`//p[text()='Prizing']`).first()
                await ele.click({button:"left", delay:1000})
        }

        async verifyPrizingListText() {
               try {
                const ele = this.page.frameLocator('iframe').locator(this.prizedop_elements.prize_list)
                await expect(ele).toContainText("Prizing List")
               } catch (error) {
                throw  new Error('Prize Drop| Prizing list text is not correct'+error)
               }
        }
        async verify_Prizing_name(){
                try {
                 const ele = this.page.frameLocator('iframe')
                 .locator(this.prizedop_elements.auto_coupon_name)
                 await expect(ele).toBeVisible()
                } catch (error) {
                        throw  new Error('Prize Drop| Prizing name is not correct'+error)  
                }
        }

        async verify_total_prizes(){
               try {
                const ele = this.page.frameLocator('iframe').locator(this.prizedop_elements.auto_coupon_total_prize)
                await expect(ele).toBeVisible()
               } catch (error) {
                throw  new Error('Prize Drop| total prizing is not correct' + error)  
               }
        }

        async verify_Parcentage_awarded(){
               try {
                 const ele = this.page
                 .frameLocator('iframe').locator(this.prizedop_elements.auto_coupon_parcentage_awarded)
                 await expect(ele).toBeVisible()
               } catch (error) {
                throw  new Error('Prize Drop| Prizing name is not correct'+error)  
               }
        }
        async verify_awardall_button(){
                const ele = this.page.frameLocator('iframe').locator(this.prizedop_elements.award_all_button)
               
                if (await ele.isVisible()) {
                        await ele.click({button:'left'})
                } else {
                      throw new Error(`Prize drop| Prizing | Award all button| Button element is not visible`);    
                }
        }

        async clickAddNewPrizeBtn() {
                const ele =  this.page.frameLocator('iframe').locator(this.prizedop_elements.add_new_prize_button)
                if (await ele.isEnabled()) {
                        await expect(ele).toBeVisible()
                        await ele.click()
                } else {
                        throw new Error(`Prizedrop| Prizing|add new prize button is not visible`)
                }
        }

        async click_back_button(){
               try {
                 const back = this.page.frameLocator('iframe').locator(this.prizedop_elements.back_button)
                 await expect(back).toBeVisible()
                 await back.click({button:'left'})
                 const ele = this.page.frameLocator('iframe').locator(this.prizedop_elements.add_new_prize_button)
                 await expect(ele).toBeVisible()
               } catch (error) {
                 throw `Prizedrop| Prizing |back button click is not working ${error}`
               }
                
        }
        async click_edit_prize_button(){
               try {
                 const back=this.page.frameLocator('iframe').locator(this.prizedop_elements.edit_button).last()
                 await expect(back).toBeVisible()
                 await back.click({button:'left'})   
               } catch (error) {
                throw new Error(`Prizedrop| Prizing| edit prize button is not working ${error}`)
               }   

        }
        async click_delete_prize_button(){                
              try {
                  const del= this.page.frameLocator('iframe').locator(this.prizedop_elements.delete_button).last()
                  await expect(del).toBeVisible()
                  await del.click({button:'left'})
              } catch (error) {
                throw new Error('Prizedrop| Prizing|Delete prize button is not visible or clickable '+error)
              }
        }

        async inputCouponName(value: string) {
             try {
                   const ele = this.page.frameLocator('iframe').locator(this.prizedop_elements.coupon_name)
                   expect(ele).toBeVisible()
                   await ele.fill(value)
             } catch (error) {
                throw new Error('Prize drop| Prizing| Input coupon name not working'+error)
             }
        }

        async inputAmountOfAwarding(value: string) {
              try {
                  const ele = this.page.frameLocator('iframe').locator(this.prizedop_elements.amount_of_awarding)
                  await ele.fill(value)
              } catch (error) {
                throw new Error('Prize drop| Prizing| Input amount of awarding not working'+error)
              }
        }

        async inputPercentageAwarded(value: string) {
               try {
                 const ele = this.page.frameLocator('iframe').locator(this.prizedop_elements.parcentage_awarded)
                 await ele.fill(value)
               } catch (error) {
                 throw new Error('Prizedrop| Prizing| Input percentage awarded not working ' + error)
               }
        }

        async clickCouponPrizeSelectBtn() {
               try {
                 const ele = this.page.frameLocator('iframe').locator(this.prizedop_elements.coupon_prize_select_button)
                 await ele.click()
               } catch (error) {
                throw new Error(`Prize drop| Prizing| click to select coupon prize selection not working `+error)
               }
        }
        async selectCouponPrizeSelect() {
                try {
                        const ele =  this.page.frameLocator('iframe').locator(this.prizedop_elements.select_first_coupon_prize_select)
                        await ele.click()
                } catch (error) {
                       throw new Error('Prizedrop| Prizing| coupon prize selection not working ${error}'+error)     
                }
        }
        // async verifyNewlyAddedGlobalPrizeSuccessfullyShowOnGamePrizeSection() {                
        //         const ele =  this.page.frameLocator('iframe').locator("//p[text()='Auto Test']")
        //         expect(ele).toContainText("Auto Test")
        // }

        // async selectCouponCreatedFromGlobalPrizing() {
        //         const ele = await this.page.frameLocator('iframe').locator("//button[text()='Select']").last()
        //         await ele.click()
        // }

        async clickSaveBtn() {
              try {
                  const ele =this.page.frameLocator('iframe').locator(this.prizedop_elements.save_button)
                  await ele.click()
              } catch (error) {
                `Prizedrop| save button click not working ${error}`
              }
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
               try {
                 await this.page.frameLocator('iframe').locator(this.prizedop_elements.analytics_page).first().click({button:'left'})
 
               } catch (error) {
                 throw new Error(`Prize Drop | Analytics | Analytics Page is missing in Default section ${error}`)
               }
        }

        async clickToStopLiveGame() {
                // Click text=AutoStart
                try {
                        await this.page.frameLocator('iframe').locator(this.prizedop_elements.live_button).click();
        
                } catch (error) {
                        throw `Prize drop | Game menu| Live button is not visible `
                }
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
               try {
                 await this.page.frameLocator('.css-r99fy3').locator('(//div[@role="dialog"]//button)[1]').click()
               } catch (error) {
                throw new Error(`Prize Drop| Game menu| Close button in mobile link modal failed ` + error)
               }
        }

        async clickStartGameBtn() {
                const ele = this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.start_button)
             try {
                   await expect(ele).toBeVisible()
                   await ele.click({button:'left'})
             } catch (error) {
              throw new Error(`Prize Drop| Game menu| Start button click failed ` + error)
             }
        // const ele = this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.start_button)
        // await expect(ele).toBeVisible()
        // await ele.click({button:'left'})
        

        }

        async clickStartGameOkBtn() {

          try {
                      await this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.ok_button).click();
      
          } catch (error) {
                `Prize Drop| Game menu| OK button click after start is failed ${error}`
          }
        }


        async clickStopGameOkBtn() {

        try {
                await this.page.frameLocator('iframe').locator(this.prizedop_elements.ok_button).click();
                
        } 
        catch (error) {
                `Prize Drop| Game menu| OK button click after stop is failed ${error}` 
        }

        }



        async clickMobileLinkBtn() {
              try {  
                await this.page.frameLocator('.css-r99fy3')
                .locator(this.prizedop_elements.auto_mobile_link).click();
              } catch (error) {
                 throw `Prize Drop|Mobile link| Mobile linek text clicking failed `+error
              }

        }

        async  clickMobileLinkOpenBtn() {

                // Click text=Open Link
               try {
                 const [page1] = await Promise.all([
                         this.page.waitForEvent('popup'),
                         this.page.frameLocator('.css-r99fy3').locator("//a[text()='Open Link']").click()
                 ]);
 
                 return page1;
               } catch (error) {
                 throw `Prize Drop| Game menu| Open link button click failed or not returnging a page well failed ${error}`
               }


        }

        async clickMobileLinkCopyBtn() {

                // Click text=Open Link
                try {
                        await this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.mobile_link_copy_button).click()
        
                } catch (error) {
                        throw  `Prize Drop | QR code |copy mobile link button clicking failed ${error}`
                }
        }
        //QR code section here
        async clickQRcodebutton(){
                
                try {
                        await  this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.QR_button).click()
        
                } catch (error) {
                       throw `Prize Drop| QR code button| Click QR code button failed ${error}` 
                }
        }

        async validateQRtext(){
                try {
                        const ele = this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.QR_header_text)
                        await expect(ele).toBeVisible()
                } catch (error) {
                        throw `Prize Drop| QR code button| QR code header text is missing or changed ${error}`  
                }
        }
        async validateDownload(){
                
            try {
                    const [download] = await Promise.all([
                             this.page.waitForEvent('download'),
                             this.page.frameLocator('.css-r99fy3').locator('//button[text()="Save QR Code"]').click()
                  ])
                    const suggestedFileName = download.suggestedFilename()
                    const filePath = 'Test_data_that_gets_downloaded/' + suggestedFileName
                    await download.saveAs(filePath)
                    expect(existsSync(filePath)).toBeTruthy()
            } catch (error) {
                `Prize Drop Game| QR code Download| QR code download not worked successfulley ${error}`
            }
        }

        async clickQRcodecopybtn(){
              try {
                  await  this.page.frameLocator('.css-r99fy3').locator(this.prizedop_elements.copy_qr_button).click()
              } catch (error) {
                `Prize Drop Game| QR code copy| copy QR code button is missing or not visible:  ${error}`
              }
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

