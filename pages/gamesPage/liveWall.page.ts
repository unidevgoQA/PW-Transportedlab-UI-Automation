import { expect, Page } from "@playwright/test";
import { existsSync, readFileSync } from "fs";
export default class liveWallPage {
  [x: string]: any;

  private page: Page;
  static buffer: void;
  constructor(page: Page) {
    this.page = page;
  }

  //=======================================================
  //▶▶Start Element
  private Fansee_page_elements = {
    tripplebutton: '//h5[text()="FanSee"]//parent::div/preceding-sibling::button',
    iframe: '.css-r99fy3',
    clear_all_color_button: "//button[text()='Clear All']",
    image_upload_text: '//p[text()="Image Upload"]',
    color_picker_swatches: '//button[@aria-label="Add Color"]',
    delete_button_in_swatches:'//button[@aria-label="delete"]',
    solid_ele:'//li[text()="Solid"]',
    Horizontal_ele:'//li[text()="Horizontal"]',
    Vertical_ele:'//li[text()="Vertical"]',
    Diagonal_ele:'//li[text()="Diagonal"]',
    Radial_ele:'//li[text()="Radial"]',
    Solid_dropdown:'//div[@aria-haspopup="listbox"]',
    countdown_color_picker:"//p[text()='Countdown Color']/following-sibling::button",
    RGB_red_color:'(//input[@type="text"])[1]',
    RGB_green_color: '(//input[@type="text"])[2]',
    RGB_blue_color: '(//input[@type="text"])[3]',
    RGB_opacity_color: '(//input[@type="text"])[4]',
    RGB_Hex_color: '(//input[@type="text"])[5]',
    add_instance:'//p[text()="Instances"]//parent::div//button',
    input_config_name:'//h2[text()="Configuration"]//following-sibling::div//input[@type="text"]',
    input_pre_live_text_element:'//h5[text()="Pre-Live Text"]//following-sibling::div//div[@aria-label="rdw-editor"]'
  }




  async clickQRCodeBtn() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//img)[1]");
    await ele.click();
  }


  async clickMobileLinkOpenBtn() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    // const ele = await this.page
    //   .frameLocator("iframe")
    //   .locator("//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]");
    // await ele.click();
    const [page1] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.frameLocator('iframe').locator("//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]").click()
    ]);

    return page1;
  }
  async clickVIPMobileLinkOpenBtn() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    // const ele = await this.page
    //   .frameLocator("iframe")
    //   .locator("//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]");
    // await ele.click();
    const [page1] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.frameLocator('iframe').locator("//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]").click()
    ]);

    return page1;
  }

  async validate_warning_stop_message_text() {
    const ele = this.page.frameLocator('//iframe').locator(`//p[text()="Please don't forget to stop the session"]`)
    await expect(ele).toBeVisible()

  }
  async clickLiveWallSection() {
    const locator = this.page.locator("//p[text()='FanSee']");
    expect.soft(locator).toContainText("FanSee");
    await locator.click({ force: true });
    // console.log("Successfully Click To Tug of War Page ")
  }
  //add new instance
  async click_plus_button(){
      const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.add_instance)
      if(await ele.isVisible()){
        await ele.click({button:'left'})
      }
      else{
        throw new Error("Either the instances text or plus button is not visible")
      }
  }
  async add_new_config_name(){
      const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.input_config_name)
      if(await ele.isVisible()){
        await ele.type("Auto")
      }
      else{
        throw new Error("Either the configurations text or plus button is not visible or the type operation failed")
      }
  }
  async remove_message_popup() {
    await this.page.frameLocator('//iframe').locator('//h5[text()="FanSee"]').click({ button: 'left', force: true })
  }
  async clickDesignPage() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    const ele = this.page
      .frameLocator("iframe")
      .locator("//button[text()='Design']").last();
    await ele.click();
  }

  async click_trippledot() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.tripplebutton)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either element is not found or element visiblity is hidden");
    }
  }


  async clickClearBtn() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    const ele = this.page
      .frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.clear_all_color_button);
    await ele.click({ button: 'left' });
  }

  async verifyFontsTitleText() {
    const ele = this.page.frameLocator("iframe").locator("text=Fonts").first();
    await expect(ele).toContainText("Fonts");
  }

  async verifyUploadFontText() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("text=Upload Font");
    expect(ele).toContainText("Upload Font");
  }

  async clickToUploadFont() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[1]");
    expect(ele).toBeVisible();
    await ele.click();
  }



  async deleteUploadedFont() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-718jsx'])[1]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-718jsx'])[1]")
        .click();
    }
  }

  //Start Upload Color Section Element
  async verify_image_upload_text() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.image_upload_text)
    if (await ele.isVisible()) {
      //just add a click event here if code is updated 
      await expect.soft(ele).toBeVisible()
    }
    else {
      throw new Error("Image Uploads Header text is missing.")
    }
  }
  async clickBackgroundColorPickerInputField() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//p[text()='Background Color']/following-sibling::button");
    // expect(ele).toBeVisible()
    await ele.click();
  }

  async inputBackgroundFirstRGBColor() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[1]');
    expect(ele).toBeVisible();
    await ele.fill("34");
  }

  async inputBackgroundBoxColorRGBSecond() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[2]');
    await ele.fill("115");
  }
  async inputBackgroundBoxColorRGBThird() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[3]');
    await ele.fill("224");
  }

  async inputBackgroundBoxColorOpacity() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[4]');
    await ele.fill("94");
  }

  async inputBackgroundBoxColorHEXColor() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[5]');
    await ele.fill("F1C42FFF");
  }
  async clickSaveBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Save']");
    await ele.click();
  }

  async clickFontColorPickerInputField() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//p[text()='Font Color']/following-sibling::button");
    await ele.click({ force: true });
  }
  async click_countdown_ColorPicker_InputField() {
    const ele = this.page
      .frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.countdown_color_picker);
      if(await ele.isVisible()){
        await ele.click({ force: true });
      }
      else{
        throw new Error('Either countdown color picker is missing or its not visible in DOM')
      }
      
  }
  async clickplusbuttonswatches() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.color_picker_swatches)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error("Either Swatches section button is missing or its not visible")
    }
  }
  async clickdeletebuttonswatches() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.delete_button_in_swatches).last()
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error("Either Delete button of last swatch is missing or its not visible")
    }
  }
  async validate_solid_horizontal_vertical_dropdown(){
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.Solid_dropdown).first()
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error("Either solid dropdown  is missing or its not visible in this color picker")
    }
}

async click_solid_button(){
    const ele= this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.solid_ele)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error("Either list text  solid is missing or its not visible")
    }
}

async click_horizontal_button(){
    const ele= this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.Horizontal_ele)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error("Either list text  horizontal is missing or its not visible")
    }

}
async click_vertical_button(){
    const ele= this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.Vertical_ele)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error("Either list text vertical button is missing or its not visible")
    }

}
async click_diagonal_button(){
    const ele= this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.Diagonal_ele)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error("Either list text diagonal is missing or its not visible")
    }
}
async click_radial_button(){
    const ele= this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.Radial_ele)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error("Either list text radial is missing or its not visible")
    }
}

  async inputFontFirstRGBColor() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[1]');
    expect(ele).toBeVisible();
    await ele.fill("34");
  }

  async inputFontBoxColorRGBSecond() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[2]');
    await ele.fill("115");
  }
  async inputFontBoxColorRGBThird() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[3]');
    await ele.fill("224");
  }

  async inputFontBoxColorOpacity() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[4]');
    await ele.fill("90");
  }

  async inputFontBoxColorHEXColor() {
    const ele = this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[5]');
    await ele.fill("F1C41FFF");
  }
  //countdown_color_input
  async input_Red_Color(value:string) {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[1]');
    expect(ele).toBeVisible();
    await ele.fill(value);
  }

  async input_green_color(value:string) {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[2]');
    await ele.fill(value);
  }
  async input_blue_color(value:string) {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[3]');
    await ele.fill(value);
  }

  async inputColorOpacity(value:string) {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[4]');
    await ele.fill(value);
  }

  async inputHEXColor(value:string) {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[5]');
    await ele.fill(value);
  }

  async deleteUploadedFeedRightImage() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[8]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[8]")
        .click();
    }
  }
  async deleteUploadedFeedLeftImage() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[7]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[7]")
        .click();
    }
  }

  async deleteUploadedFeedImage() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[6]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[6]")
        .click();
    }
  }

  async deleteUploadedOutputBackground() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[5]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[5]")
        .click();
    }
  }

  async deleteUploadedOutputFrame() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[4]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[4]")
        .click();
    }
  }
  async deleteUploadedFullScreenLogo() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[3]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[3]")
        .click();
    }
  }

  async deleteUploadedMobileFrame() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[2]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[2]")
        .click();
    }
  }

  async deleteUploadedBackground() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[1]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[1]")
        .click();
    }
  }
//Mobile Background
async mobile_background_image_upload(){
    const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mobile Background"]//following-sibling::div//button[@title="Edit"]')
    if( await edit_image_button.isVisible() ){
            await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mobile Background"]//following-sibling::div//button[@title="Delete"]').click({button:'left'})
    }
    await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mobile Background"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
}
async Image_uploader_For_mobile_background(){
    const filePath0 = "testData/images/mobile_back.jpg"
    const [fileChooser] = await Promise.all([
            // It is important to call waitForEvent before click to set up waiting.
            this.page.waitForEvent('filechooser'),
            // Opens the file chooser.
            this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
    ]);
    await fileChooser.setFiles([filePath0]);
    await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
}
async wait_mobile_back_upload(){
  const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mobile Background"]//parent::div//following-sibling::div//button[@title="Edit"]')
   await expect(edit_image_button).toBeVisible({timeout:60000})
}
//Mobile Home Screen Logo
async mobile_home_screen_logo_upload(){
  const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mobile Home Screen Logo"]//following-sibling::div//button[@title="Edit"]')
  if( await edit_image_button.isVisible() ){
          await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mobile Home Screen Logo"]//following-sibling::div//button[@title="Delete"]').click({button:'left'})
  }
  await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mobile Home Screen Logo"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
}
async Image_uploader_For_mobile_home_screen_logo(){
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
async wait_mobile_Home_screen_upload(){
const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mobile Home Screen Logo"]//parent::div//following-sibling::div//button[@title="Edit"]')
 await expect(edit_image_button).toBeVisible({timeout:60000})
}
//Output Background
async output_background_upload(){
  const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Output Background"]//following-sibling::div//button[@title="Edit"]')
  if( await edit_image_button.isVisible() ){
          await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Output Background"]//following-sibling::div//button[@title="Delete"]').click({button:'left'})
  }
  await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Output Background"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
}
async Image_uploader_For_output_background(){
  const filePath0 = "testData/images/TitleBanner.jpg"
  const [fileChooser] = await Promise.all([
          // It is important to call waitForEvent before click to set up waiting.
          this.page.waitForEvent('filechooser'),
          // Opens the file chooser.
          this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
  ]);
  await fileChooser.setFiles([filePath0]);
  await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
}
async wait_OutPut_background(){
const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Output Background"]//parent::div//following-sibling::div//button[@title="Edit"]')
 await expect(edit_image_button).toBeVisible({timeout:60000})
}
//left_image(1:1 output)
async left_image_1_1_upload(){
  const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Left Image (1:1 Output)"]//following-sibling::div//button[@title="Edit"]')
  if( await edit_image_button.isVisible() ){
          await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Left Image (1:1 Output)"]//following-sibling::div//button[@title="Delete"]').click({button:'left'})
  }
  await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Left Image (1:1 Output)"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
}
async Image_uploader_For_left_image_1_1(){
  const filePath0 = "testData/images/potrait.png"
  const [fileChooser] = await Promise.all([
          // It is important to call waitForEvent before click to set up waiting.
          this.page.waitForEvent('filechooser'),
          // Opens the file chooser.
          this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
  ]);
  await fileChooser.setFiles([filePath0]);
  await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
}
async wait_left_image_1_1_upload(){
const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Left Image (1:1 Output)"]//parent::div//following-sibling::div//button[@title="Edit"]')
 await expect(edit_image_button).toBeVisible({timeout:60000})
}
//Mobile Frame
async mobile_frame_upload(){
  const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mobile Frame"]//following-sibling::div//button[@title="Edit"]')
  if( await edit_image_button.isVisible() ){
          await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mobile Frame"]//following-sibling::div//button[@title="Delete"]').click({button:'left'})
  }
  await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mobile Frame"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
}
async Image_uploader_For_mobile_frame(){
  const filePath0 = "testData/Frames/mobileFrame.png"
  const [fileChooser] = await Promise.all([
          // It is important to call waitForEvent before click to set up waiting.
          this.page.waitForEvent('filechooser'),
          // Opens the file chooser.
          this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
  ]);
  await fileChooser.setFiles([filePath0]);
  await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
}
async wait_mobile_frame_upload(){
const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mobile Frame"]//parent::div//following-sibling::div//button[@title="Edit"]')
 await expect(edit_image_button).toBeVisible({timeout:60000})
}
//Output Frame (9:16 Output)
async OutputFrame_9_16_upload(){
  const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Output Frame (9:16 Output)"]//following-sibling::div//button[@title="Edit"]')
  if( await edit_image_button.isVisible() ){
          await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Output Frame (9:16 Output)"]//following-sibling::div//button[@title="Delete"]').click({button:'left'})
  }
  await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Output Frame (9:16 Output)"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
}
async Image_uploader_For_OutputFrame_9_16(){
  const filePath0 = "testData/images/9_16_output_test.jpg"
  const [fileChooser] = await Promise.all([
          // It is important to call waitForEvent before click to set up waiting.
          this.page.waitForEvent('filechooser'),
          // Opens the file chooser.
          this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
  ]);
  await fileChooser.setFiles([filePath0]);
  await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
}
async wait_OutputFrame_9_16_upload(){
const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Output Frame (9:16 Output)"]//parent::div//following-sibling::div//button[@title="Edit"]')
 await expect(edit_image_button).toBeVisible({timeout:60000})
}
//Banner Image (9:16 Output)
async bannner_image_9_16_upload(){
  const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Banner Image (9:16 Output)"]//following-sibling::div//button[@title="Edit"]')
  if( await edit_image_button.isVisible() ){
          await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Banner Image (9:16 Output)"]//following-sibling::div//button[@title="Delete"]').click({button:'left'})
  }
  await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Banner Image (9:16 Output)"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
}
async Image_uploader_For_bannner_image_9_16(){
  const filePath0 = "testData/images/banner.png"
  const [fileChooser] = await Promise.all([
          // It is important to call waitForEvent before click to set up waiting.
          this.page.waitForEvent('filechooser'),
          // Opens the file chooser.
          this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
  ]);
  await fileChooser.setFiles([filePath0]);
  await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
}
async wait_bannner_image_9_16_upload(){
const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Banner Image (9:16 Output)"]//parent::div//following-sibling::div//button[@title="Edit"]')
 await expect(edit_image_button).toBeVisible({timeout:60000})
}
//Right Image (1:1 Output)
async right_image_1_1_upload(){
  const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Right Image (1:1 Output)"]//following-sibling::div//button[@title="Edit"]')
  if( await edit_image_button.isVisible() ){
          await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Right Image (1:1 Output)"]//following-sibling::div//button[@title="Delete"]').click({button:'left'})
  }
  await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Right Image (1:1 Output)"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
}
async Image_uploader_For_right_image_1_1(){
  const filePath0 = "testData/images/potrait.png"
  const [fileChooser] = await Promise.all([
          // It is important to call waitForEvent before click to set up waiting.
          this.page.waitForEvent('filechooser'),
          // Opens the file chooser.
          this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
  ]);
  await fileChooser.setFiles([filePath0]);
  await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
}
async wait_right_image_1_1_upload(){
const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Right Image (1:1 Output)"]//parent::div//following-sibling::div//button[@title="Edit"]')
 await expect(edit_image_button).toBeVisible({timeout:60000})
}
//1:1 Fallback
async Fallback_1_1_upload(){
  const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="1:1 Fallback"]//following-sibling::div//button[@title="Edit"]')
  if( await edit_image_button.isVisible() ){
          await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="1:1 Fallback"]//following-sibling::div//button[@title="Delete"]').click({button:'left'})
  }
  await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="1:1 Fallback"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
}
async Image_uploader_For_Fallback_1_1(){
  const filePath0 = "testData/images/potrait.png"
  const [fileChooser] = await Promise.all([
          // It is important to call waitForEvent before click to set up waiting.
          this.page.waitForEvent('filechooser'),
          // Opens the file chooser.
          this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
  ]);
  await fileChooser.setFiles([filePath0]);
  await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
}
async wait_Fallback_1_1_upload(){
const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="1:1 Fallback"]//parent::div//following-sibling::div//button[@title="Edit"]')
 await expect(edit_image_button).toBeVisible({timeout:60000})
}
//9:16 Fallback
async Fallback_9_16_upload(){
  const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="9:16 Fallback"]//following-sibling::div//button[@title="Edit"]')
  if( await edit_image_button.isVisible() ){
          await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="9:16 Fallback"]//following-sibling::div//button[@title="Delete"]').click({button:'left'})
  }
  await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="9:16 Fallback"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({button:'left'})
}
async Image_uploader_For_Fallback_9_16(){
  const filePath0 = "testData/images/potrait.png"
  const [fileChooser] = await Promise.all([
          // It is important to call waitForEvent before click to set up waiting.
          this.page.waitForEvent('filechooser'),
          // Opens the file chooser.
          this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
  ]);
  await fileChooser.setFiles([filePath0]);
  await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()  
}
async wait_Fallback_9_16_upload(){
const edit_image_button =this.page.frameLocator('(//iframe)[1]').locator('//p[text()="9:16 Fallback"]//parent::div//following-sibling::div//button[@title="Edit"]')
 await expect(edit_image_button).toBeVisible({timeout:60000})
}
  //Dispaly Massage Section Element From Here


  async preLiveInputBoxFonts() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//span[text()='Font'])[1]").click()
  }

  async preLiveInputBoxArial() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='Arial']").click()
  }

  async preLiveInputBoxBlocktype() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//a[@title='Block Type'])[1]").click()

  }
  async preLiveInputBoxNormal() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='Normal']").click()

  }

  async preLiveInputBoxBlockH1() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='H1']").click()
  }
  async preLiveInputBoxBlockH2() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='H2']").click()
  }
  async preLiveInputBoxBlockH3() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='H3']").click()
  }
  async preLiveInputBoxBlockH4() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='H4']").click()
  }
  async preLiveInputBoxBlockH5() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='H5']").click()
  }
  async preLiveInputBoxBlockH6() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='H6']").click()
  }
  async preLiveInputBoxBlockquote() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='Blockquote']").click()
  }

  async preLiveInputBoxBold() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Bold']//img[1])[1]").click()

  }

  async preLiveInputBoxItalic() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Italic']//img[1])[1]").click()

  }

  async preLiveInputBoxUnderline() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Underline']//img[1])[1]").click()

  }

  async preLiveInputBoxsikethrough() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Strikethrough']//img[1])[1]").click()

  }

  async preLiveInputBoxColorpk() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Color Picker']//img)[1]").click()

  }

  async preLiveInputBoxTextcl() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//span[text()='Text']").click()

  }

  async preLiveInputBoxGreencl() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[1]").click()

  }

  async preLiveInputBoxHighlightcl() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//span[text()='Highlight']").click()

  }

  async preLiveInputBoxHighlightgrn() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[1]").click()

  }
  async preLiveInputBoxLeft() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Left'])[1]").click()

  }
  async preLiveInputBoxCenter() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Center']//img[1])[1]").click()

  }
  async preLiveInputBoxRight() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Right']//img[1])[1]").click()

  }
  async preLiveInputBoxOutdent() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Outdent']//img[1])[1]").click()

  }
  async preLiveInputBoxIndent() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Indent']//img[1])[1]").click()

  }



  async preLiveInputBoxOrdered() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Ordered']//img[1])[1]").click()

  }


  async preLiveInputBoxUnOrdered() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Unordered']//img[1])[1]").click()

  }

  async preLiveInputBoxRemove() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Remove(styles) only']//img[1])[1]").click()

  }


  async inputPreLiveText() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(
       this.Fansee_page_elements.input_pre_live_text_element
      );
    await expect(ele).toBeVisible();
    await ele.fill('  ')
    await ele.fill(
      ' In publishing and graphic design, Lorem ipsum is a placeholder'
    );
    
  }


  async postLiveInputBoxFonts() {
    await this.page.frameLocator("iframe").locator("(//span[text()='Font'])[2]").click()
  }

  async postLiveInputBoxArial() {
    await this.page.frameLocator("iframe").locator("//li[text()='Arial']").click()
  }

  async postLiveInputBoxBlocktype() {
    await this.page.frameLocator("iframe").locator("(//a[@title='Block Type'])[2]").click()

  }
  async postLiveInputBoxNormal() {
    await this.page.frameLocator("iframe").locator("//li[text()='Normal']").click()

  }

  async postLiveInputBoxBlockH1() {
    await this.page.frameLocator("iframe").locator("//li[text()='H1']").click()
  }
  async postLiveInputBoxBlockH2() {
    await this.page.frameLocator("iframe").locator("//li[text()='H2']").click()
  }
  async postLiveInputBoxBlockH3() {
    await this.page.frameLocator("iframe").locator("//li[text()='H3']").click()
  }
  async postLiveInputBoxBlockH4() {
    await this.page.frameLocator("iframe").locator("//li[text()='H4']").click()
  }
  async postLiveInputBoxBlockH5() {
    await this.page.frameLocator("iframe").locator("//li[text()='H5']").click()
  }
  async postLiveInputBoxBlockH6() {
    await this.page.frameLocator("iframe").locator("//li[text()='H6']").click()
  }
  async postLiveInputBoxBlockquote() {
    await this.page.frameLocator("iframe").locator("//li[text()='Blockquote']").click()
  }

  async postLiveInputBoxBold() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Bold']//img[1])[2]").click()

  }

  async postLiveInputBoxItalic() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Italic']//img[1])[2]").click()

  }

  async postLiveInputBoxUnderline() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Underline']//img[1])[2]").click()

  }

  async postLiveInputBoxsikethrough() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Strikethrough']//img[1])[2]").click()

  }

  async postLiveInputBoxColorpk() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Color Picker']//img)[2]").click()

  }

  async postLiveInputBoxTextcl() {
    await this.page.frameLocator("iframe").locator("//span[text()='Text']").click()

  }

  async postLiveInputBoxGreencl() {
    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[2]").click()

  }

  async postLiveInputBoxHighlightcl() {
    await this.page.frameLocator("iframe").locator("//span[text()='Highlight']").click()

  }

  async postLiveInputBoxHighlightgrn() {
    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[2]").click()

  }
  async postLiveInputBoxLeft() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Left'])[2]").click()

  }
  async postLiveInputBoxCenter() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Center']//img[1])[2]").click()

  }
  async postLiveInputBoxRight() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Right']//img[1])[2]").click()

  }
  async postLiveInputBoxOutdent() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Outdent']//img[1])[2]").click()

  }
  async postLiveInputBoxIndent() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Indent']//img[1])[2]").click()

  }



  async postLiveInputBoxOrdered() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Ordered']//img[1])[2]").click()

  }


  async postLiveInputBoxUnOrdered() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Unordered']//img[1])[2]").click()

  }

  async postLiveInputBoxRemove() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Remove(styles) only']//img[1])[2]").click()

  }


  async inputPostLiveText() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator(
        "(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[2]"
      );
    expect(ele).toBeVisible();
    await ele.fill(
      "In publishing and graphic design, Lorem ipsum is a placeholder"
    );
  }






  async clickStandByMassageType() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='rdw-editor-toolbar']/following-sibling::div)[3]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  async selectNormalText() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//li[text()='Normal']");
    expect(ele).toBeVisible();
    await ele.click();
  }


  async standByInputBoxFonts() {
    await this.page.frameLocator("iframe").locator("(//span[text()='Font'])[3]").click()
  }

  async standByInputBoxArial() {
    await this.page.frameLocator("iframe").locator("//li[text()='Arial']").click()
  }

  async standByInputBoxBlocktype() {
    await this.page.frameLocator("iframe").locator("(//a[@title='Block Type'])[3]").click()

  }
  async standByInputBoxNormal() {
    await this.page.frameLocator("iframe").locator("//li[text()='Normal']").click()

  }

  async standByInputBoxBlockH1() {
    await this.page.frameLocator("iframe").locator("//li[text()='H1']").click()
  }
  async standByInputBoxBlockH2() {
    await this.page.frameLocator("iframe").locator("//li[text()='H2']").click()
  }
  async standByInputBoxBlockH3() {
    await this.page.frameLocator("iframe").locator("//li[text()='H3']").click()
  }
  async standByInputBoxBlockH4() {
    await this.page.frameLocator("iframe").locator("//li[text()='H4']").click()
  }
  async standByInputBoxBlockH5() {
    await this.page.frameLocator("iframe").locator("//li[text()='H5']").click()
  }
  async standByInputBoxBlockH6() {
    await this.page.frameLocator("iframe").locator("//li[text()='H6']").click()
  }
  async standByInputBoxBlockquote() {
    await this.page.frameLocator("iframe").locator("//li[text()='Blockquote']").click()
  }

  async standByInputBoxBold() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Bold']//img[1])[3]").click()

  }

  async standByInputBoxItalic() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Italic']//img[1])[3]").click()

  }

  async standByInputBoxUnderline() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Underline']//img[1])[3]").click()

  }

  async standByInputBoxsikethrough() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Strikethrough']//img[1])[3]").click()

  }

  async standByInputBoxColorpk() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Color Picker']//img)[3]").click()

  }

  async standByInputBoxTextcl() {
    await this.page.frameLocator("iframe").locator("//span[text()='Text']").click()

  }

  async standByInputBoxGreencl() {
    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[3]").click()

  }

  async standByInputBoxHighlightcl() {
    await this.page.frameLocator("iframe").locator("//span[text()='Highlight']").click()

  }

  async standByInputBoxHighlightgrn() {
    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[3]").click()

  }
  async standByInputBoxLeft() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Left'])[3]").click()

  }
  async standByInputBoxCenter() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Center']//img[1])[3]").click()

  }
  async standByInputBoxRight() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Right']//img[1])[3]").click()

  }
  async standByInputBoxOutdent() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Outdent']//img[1])[3]").click()

  }
  async standByInputBoxIndent() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Indent']//img[1])[3]").click()

  }



  async standByInputBoxOrdered() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Ordered']//img[1])[3]").click()

  }


  async standByInputBoxUnOrdered() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Unordered']//img[1])[3]").click()

  }

  async standByInputBoxRemove() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Remove(styles) only']//img[1])[3]").click()

  }


  async inputStandByMessage() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//ul[@class='public-DraftStyleDefault-ul']//li)[2]");
    expect(ele).toBeVisible();
    await ele.fill(
      "In publishing Text"
    );
  }

  async clickBoldOptionForPreLiveText() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@title='Bold']//img)[1]");
    expect(ele).toBeVisible();
    await ele.click();
  }


  async lowConnectionMassageInputBoxFonts() {
    await this.page.frameLocator("iframe").locator("(//span[text()='Font'])[4]").click()
  }

  async lowConnectionMassageInputBoxArial() {
    await this.page.frameLocator("iframe").locator("//li[text()='Arial']").click()
  }

  async lowConnectionMassageInputBoxBlocktype() {
    await this.page.frameLocator("iframe").locator("(//a[@title='Block Type'])[4]").click()

  }
  async lowConnectionMassageInputBoxNormal() {
    await this.page.frameLocator("iframe").locator("//li[text()='Normal']").click()

  }

  async lowConnectionMassageInputBoxBlockH1() {
    await this.page.frameLocator("iframe").locator("//li[text()='H1']").click()
  }
  async lowConnectionMassageInputBoxBlockH2() {
    await this.page.frameLocator("iframe").locator("//li[text()='H2']").click()
  }
  async lowConnectionMassageInputBoxBlockH3() {
    await this.page.frameLocator("iframe").locator("//li[text()='H3']").click()
  }
  async lowConnectionMassageInputBoxBlockH4() {
    await this.page.frameLocator("iframe").locator("//li[text()='H4']").click()
  }
  async lowConnectionMassageInputBoxBlockH5() {
    await this.page.frameLocator("iframe").locator("//li[text()='H5']").click()
  }
  async lowConnectionMassageInputBoxBlockH6() {
    await this.page.frameLocator("iframe").locator("//li[text()='H6']").click()
  }
  async lowConnectionMassageInputBoxBlockquote() {
    await this.page.frameLocator("iframe").locator("//li[text()='Blockquote']").click()
  }

  async lowConnectionMassageInputBoxBold() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Bold']//img[1])[4]").click()

  }

  async lowConnectionMassageInputBoxItalic() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Italic']//img[1])[4]").click()

  }

  async lowConnectionMassageInputBoxUnderline() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Underline']//img[1])[4]").click()

  }

  async lowConnectionMassageInputBoxsikethrough() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Strikethrough']//img[1])[4]").click()

  }

  async lowConnectionMassageInputBoxColorpk() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Color Picker']//img)[4]").click()

  }

  async lowConnectionMassageInputBoxTextcl() {
    await this.page.frameLocator("iframe").locator("//span[text()='Text']").click()

  }

  async lowConnectionMassageInputBoxGreencl() {
    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[4]").click()

  }

  async lowConnectionMassageInputBoxHighlightcl() {
    await this.page.frameLocator("iframe").locator("//span[text()='Highlight']").click()

  }

  async lowConnectionMassageInputBoxHighlightgrn() {
    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[4]").click()

  }
  async lowConnectionMassageInputBoxLeft() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Left'])[4]").click()

  }
  async lowConnectionMassageInputBoxCenter() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Center']//img[1])[4]").click()

  }
  async lowConnectionMassageInputBoxRight() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Right']//img[1])[4]").click()

  }
  async lowConnectionMassageInputBoxOutdent() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Outdent']//img[1])[4]").click()

  }
  async lowConnectionMassageInputBoxIndent() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Indent']//img[1])[4]").click()

  }



  async lowConnectionMassageInputBoxOrdered() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Ordered']//img[1])[4]").click()

  }


  async lowConnectionMassageInputBoxUnOrdered() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Unordered']//img[1])[4]").click()

  }

  async lowConnectionMassageInputBoxRemove() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Remove(styles) only']//img[1])[4]").click()

  }

  async inputLowConnectionMassage() {
    await this.page.frameLocator("iframe").locator("(//ul[@class='public-DraftStyleDefault-ul']//li)[4]")
      .fill("Massage For Low Connection")

  }


  //Live Wall Home page 
  async clickGameStartBtn() {

    let startBtn = await this.page.frameLocator('iframe').locator("text='STOP'").isHidden()
    if ((startBtn == true)) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page.frameLocator('iframe')
        .locator("//div[@class='MuiBox-root css-pzp2lt']//button[1]")
        .click({ force: true })
    }

  }

  //Live Wall Home page 
  async clickGameStopBtn() {

    //const ele = await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-pzp2lt']//button[1]").isVisible()
    if (await this.page.frameLocator('iframe').locator("//button[text()='STOP']")) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page.frameLocator('iframe')
        .locator("//div[@class='MuiBox-root css-pzp2lt']//button[1]")
        .click({ force: true })
    }

  }


  //Live Wall Home page 
  async clickLiveSelfieCamOutPutLink() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//img)[1]");
    await ele.click();
  }



  //Live Wall Home page 
  async clickLiveSelfieCamOutPutLinkCopyBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Copy Link']");
    expect(ele).toBeVisible();
    await ele.click();
  }

  //Live Wall Home page 
  async clickMobileQRCode() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//img)[2]");
    await ele.click();
  }

  //Live Wall Home page 
  async clickCopyQRCodeBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Copy QR Code']");
    await ele.click();
  }

  //Live Wall Home page 
  async clickSaveQRCodeBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Save QR Code']");
    await ele.click();
  }

  //Live Wall Home page 
  async clickQRCodeWindowCloseBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[@aria-label='Close']");
    await ele.click();
  }

  async clickRefreshBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1pejgza"])[1]')
    expect(ele).toBeVisible()
    await ele.click({ force: true });
  }


  async clickOnlyShowVIPSelfieCamEnableBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//input[@type='checkbox'])[1]")
    await ele.click();
  }



  async clickToAddLiveSelfieCamInCue() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('text=CueLiveDelete >> button').first()
    await ele.click();
  }

  async clickCueBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Cue']");
    await ele.click();
  }

  async clickCueOpenNewTabBtn() {
    // Click text=Open Link
    const [page1] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.frameLocator('iframe').locator('text=Open Link').click()
    ]);

  }

  async clickToAddCueToLiveSection() {


    // Click text=LiveAlertUncue >> button >> nth=0
    await this.page1.locator('text=LiveAlertUncue >> button').first().click()


  }


  async clickAutoRotationCheckBox() {
    const ele = await this.page
      .locator("(//input[@type='checkbox'])[1]");
    await ele.click();
  }

  async clickAnalyticsBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Analytics']");
    await ele.click({ force: true });
  }


  async downloadAnlytics() {
    // Click text=Export 
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.frameLocator('iframe').locator("(//button[text()='Export'])[1]").click()
    ]);
  }

  async clickAnalyticsPageBackBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='← Back']");
    expect(ele).toBeVisible()
    await ele.click();
  }

  async clickOutPutBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Output']");
    expect(ele).toBeVisible()
    await ele.click();
  }

  async clickOutPutLinkInNewTab() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//a[contains(@class,'MuiButtonBase-root MuiButton-root')]");
    expect(ele).toBeVisible()
    await ele.click();
  }

  async clickVIPLiveSelfieCamBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//h2[text()='Live Selfie Cam']/following-sibling::button)[3]");
    expect(ele).toBeVisible()
    await ele.click();
  }
  async clickMobileLinkBtn() {
    const ele = this.page.frameLocator("iframe").locator('(//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1pejgza"])[2]')
    expect(ele).toBeVisible()
    await ele.click({ force: true })
    //await this.page.waitForLoadState("networkidle")
  }
  async clickAdminSection() {
    const ele = this.page.frameLocator("iframe").locator("//button[@aria-label='Admin']")
    expect(ele).toBeVisible()
    await ele.click({ force: true })
    //await this.page.waitForLoadState("networkidle")
  }
  async verifyMobileLinkText() {
    const ele = this.page.frameLocator("iframe").locator("//h2[text()='Mobile Link']")
    expect(ele).toContainText("Mobile Link")
  }
  async verifyQRScreencode() {
    const ele = this.page.frameLocator("iframe").locator('//div[@class="MuiDialogContent-root css-9tte1s"]')
    expect(ele).toBeVisible()
  }
  async verifyVIPQRScreencode() {
    const ele = this.page.frameLocator("iframe").locator('//div[@class="MuiDialogContent-root css-9tte1s"]')
    expect(ele).toBeVisible()
  }
  async clickCopyLinkBtn() {
    const ele = this.page.frameLocator("iframe").locator('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium css-1oge9gb"]')
    expect(ele).toBeVisible()
    await ele.click()

  }
  async clickVIPCopyLinkBtn() {
    const ele = this.page.frameLocator("iframe").locator('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium css-1oge9gb"]')
    expect(ele).toBeVisible()
    await ele.click()

  }
  async clickCloseBtn() {
    await this.page.frameLocator('iframe').locator('//div[@class="MuiBox-root css-1xnxzwa"]').click()
  }
  async validateSaveQRCode() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.frameLocator('iframe').locator('//button[text()="Save QR Code"]').click()
    ])
    const suggestedFileName = download.suggestedFilename()
    const filePath = 'QRCode' + suggestedFileName
    await download.saveAs(filePath)
    expect(existsSync(filePath)).toBeTruthy()
  }
  async validateVIPSaveQRCode() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.frameLocator('iframe').locator('//button[text()="Save QR Code"]').click()
    ])
    const suggestedFileName = download.suggestedFilename()
    const filePath = 'QRCode' + suggestedFileName
    await download.saveAs(filePath)
    expect(existsSync(filePath)).toBeTruthy()
  }
  async clickVIPMobileLinkBtn() {
    const ele = this.page.frameLocator("iframe").locator('(//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1pejgza"])[3]')
    expect(ele).toBeVisible()
    await ele.click()

  }
  async clickOutputLinkBtn() {
    const ele = this.page.frameLocator("iframe").locator("//div[@class='css-1iwzvcj']/following-sibling::button[1]")
    expect(ele).toBeVisible()
    await ele.click()

  }
  async verifyVIPLinkText() {
    await this.page.waitForTimeout(1000)
    const ele = this.page.frameLocator('iframe').locator('//h2[@class="MuiTypography-root MuiTypography-h6 MuiDialogTitle-root css-188xrq4"]')
    expect(ele).toContainText("VIP Link")
  }
  async verifyOutputScreenLinkText() {
    await this.page.waitForTimeout(1000)
    const ele = this.page.frameLocator('iframe').locator("//h2[text()='Output Screen Link']")
    expect(ele).toContainText("Output Screen Link")
  }














}
