import { expect, Page } from "@playwright/test";
import { existsSync, lstat, readFileSync } from 'fs'
export default class fanaticsFilterPage {
        // [x: string]: any;

        private page: Page;
        fname: any;
        // static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }



//=======================================================
  //▶▶Start Element
  private FanaticsFilter_page_elements = {
    AddNewConfigurationBTN:"(//h5[contains(@class,'MuiTypography-root MuiTypography-h5')]/following-sibling::button)[1]",
    FanticsFilterPage:"//p[text()='Fanatics-Filter-Web']",
    AddNewConfigInputfield:"//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')]",
    NewConfigtitleText:"//p[text()='Add Configuration']",
    AddConfig:"//button[text()='ADD']",
    NavigateTotheGamedesign:"//p[text()='Game Design']",
    Edit_tab:`//p[text()="Edit"]`,
    edit_name: `//input[@type="text"]`,
    edit_button:`//button[text()="EDIT"]`,
    delete_tab:`//p[text()="Delete"]`,
    delete_button:`//button[text()="Delete"]`,
    FontUploadBTN:'//p[text()="Upload Font"]//preceding-sibling::div',
    SelectTheFont:"//p[text()='Aa']",
    ColorBackgroundBTN:"(//button[@background='rgba(255, 255, 255, 1)'])[1]",
    AddColor:"//button[@aria-label='Add Color']",
    RGBDRopdown:"//div[contains(@class,'MuiSelect-select MuiSelect-standard')]",
    RGB_red_color: '(//h3[text()="RGB"]//parent::legend//parent::div//following-sibling::div//input[@type="text"])[1]',
    RGB_green_color: '(//h3[text()="RGB"]//parent::legend//parent::div//following-sibling::div//input[@type="text"])[2]',
    RGB_blue_color: '(//h3[text()="RGB"]//parent::legend//parent::div//following-sibling::div//input[@type="text"])[3]',
    RGB_opacity_color: '(//h3[text()="RGB"]//parent::legend//parent::div//following-sibling::div//input[@type="text"])[4]',
    RGB_Hex_color: '(//h3[text()="RGB"]//parent::legend//parent::div//following-sibling::div//input[@type="text"])[5]',
    select_swatch:'//p[text()="Swatches"]//parent::li//following-sibling::li',
    RGBSolid:"//li[@data-value='solid']",
    HoriZontal:"//li[@data-value='horizontal']",
    Vertical:"//li[@data-value='vertical']",
    Diagonal:"//li[text()='Diagonal']",
    Radial:"//li[text()='Radial']",
    SaveBTNRGB:"//button[text()='Save']",
    LoadingAnimationColor:"(//div[@class='MuiBox-root css-1pqer0i'])[2]",
    FilterIconBoarder:"(//div[@class='MuiBox-root css-1pqer0i'])[3]",
    FilterIconGlow:"(//button[@background='rgba(255, 255, 255, 1)']//div)[3]",
    Panel:"//div[@class='MuiBox-root css-1e91icv']",
    SplashScreen:"(//div[@class='MuiBox-root css-v2612'])[2]",
    FilterTransitionScreen:"(//div[@class='MuiBox-root css-v2612'])[3]",
    CamereRotateTransitionScreen:"(//div[@class='MuiBox-root css-v2612'])[4]",
    filterButtonBackgroundUpload:"(//div[@class='MuiBox-root css-v2612'])[5]",
    SelfiePhotoFrameUploadBTN:"(//div[@class='MuiBox-root css-v2612'])[6]",
    AddBannerButton:"(//p[text()='Ad Banner'])[2]",
    UploadFrameButton:"//div[@class='MuiBox-root css-v2612']",
    FilterSettingBtn:"//p[text()='Filter Settings']",
    TextInputfield:'//div[@aria-label="rdw-editor"]//span[@data-text]',
    FontSelection:"//div[@class='rdw-dropdown-carettoopen']",
    ArialSelection:"//li[text()='Arial']",
    TextDropdown:'//a[@title="Block Type"]',
    NOrmal:"//li[text()='Normal']",
    H1:"//li[text()='H1']",
    H2:"//li[text()='H2']",
    H3:"//li[text()='H3']",
    H4:"//li[text()='H4']",
    H5:"//li[text()='H5']",
    H6:"//li[text()='H6']",
    BlockQuote:"//li[text()='Blockquote']",
    Blod:"(//div[@title='Bold']//img)[1]",
    Italic:"(//div[@title='Italic']//img)[1]",
    Underline:"(//div[@title='Underline'])[1]",
    Strikethorugh:"(//div[@title='Strikethrough']//img)[1]",
    LeftAlignment:"(//div[@title='Left']//img)[1]",
    CenterAlignment:"(//div[@title='Center']//img)[1]",
    RightAlignment:"(//div[@title='Right']//img)[1]",
    orderedList:"(//div[@title='Ordered']//img)[1]",
    UnorderedList:"(//div[@title='Unordered']//img)[1]",
    Remover:"(//div[@title='Remove(styles) only'])[1]",
    clickQrCodeBtn:"//button[@aria-label='Mobile']",
    opneLinkInNewTab: "//a[@aria-label='Open Link']",
    Filter2fontDropdown:"(//a[@title='Font']//div)[2]",
    Filter2textdropdown:"(//a[@title='Block Type'])[2]",
    Filter3fontdropdown:"(//a[@title='Font']//div)[3]",
    Filter4fontdropdown:"(//a[@title='Font']//div)[4]",
    Filter5fontdropdown:"(//a[@title='Font']//div)[5]",
    Filter6fontdropdown:"(//a[@title='Font']//div)[6]",
    Filter7fontdropdown:"(//a[@title='Font']//div)[7]",
    
    Blod2:"(//div[@title='Bold']//img)[2]",
    Italic2:"(//div[@title='Italic']//img)[2]",
    Underline2:"(//div[@title='Underline'])[2]",
    Strikethorugh2:"(//div[@title='Strikethrough']//img)[2]",
    LeftAlignment2:"(//div[@title='Left']//img)[2]",
    CenterAlignment2:"(//div[@title='Center']//img)[2]",
    RightAlignment2:"(//div[@title='Right']//img)[2]",
    orderedList2:"(//div[@title='Ordered']//img)[2]",
    UnorderedList2:"(//div[@title='Unordered']//img)[2]",
    Remover2:"(//div[@title='Remove(styles) only'])[2]",
    Filter3textdropdown:"(//a[@title='Block Type'])[3]",
    Blod3:"(//div[@title='Bold']//img)[3]",
    Italic3:"(//div[@title='Italic']//img)[3]",
    Underline3:"(//div[@title='Underline'])[3]",
    Strikethorugh3:"(//div[@title='Strikethrough']//img)[3]",
    LeftAlignment3:"(//div[@title='Left']//img)[3]",
    CenterAlignment3:"(//div[@title='Center']//img)[3]",
    RightAlignment3:"(//div[@title='Right']//img)[3]",
    orderedList3:"(//div[@title='Ordered']//img)[3]",
    UnorderedList3:"(//div[@title='Unordered']//img)[3]",
    Remover3:"(//div[@title='Remove(styles) only'])[3]",
    Filter4textdropdown:"(//a[@title='Block Type'])[4]",
    Blod4:"(//div[@title='Bold']//img)[4]",
    Italic4:"(//div[@title='Italic']//img)[4]",
    Underline4:"(//div[@title='Underline'])[4]",
    Strikethorugh4:"(//div[@title='Strikethrough']//img)[4]",
    LeftAlignment4:"(//div[@title='Left']//img)[4]",
    CenterAlignment4:"(//div[@title='Center']//img)[4]",
    RightAlignment4:"(//div[@title='Right']//img)[4]",
    orderedList4:"(//div[@title='Ordered']//img)[4]",
    UnorderedList4:"(//div[@title='Unordered']//img)[4]",
    Remover4:"(//div[@title='Remove(styles) only'])[4]",
    Filter5textdropdown:"(//a[@title='Block Type'])[5]",
    Blod5:"(//div[@title='Bold']//img)[5]",
    Italic5:"(//div[@title='Italic']//img)[5]",
    Underline5:"(//div[@title='Underline'])[5]",
    Strikethorugh5:"(//div[@title='Strikethrough']//img)[5]",
    LeftAlignment5:"(//div[@title='Left']//img)[5]",
    CenterAlignment5:"(//div[@title='Center']//img)[5]",
    RightAlignment5:"(//div[@title='Right']//img)[5]",
    orderedList5:"(//div[@title='Ordered']//img)[5]",
    UnorderedList5:"(//div[@title='Unordered']//img)[5]",
    Remover5:"(//div[@title='Remove(styles) only'])[5]",
    Filter6textdropdown:"(//a[@title='Block Type'])[6]",
    Blod6:"(//div[@title='Bold']//img)[6]",
    Italic6:"(//div[@title='Italic']//img)[6]",
    Underline6:"(//div[@title='Underline'])[6]",
    Strikethorugh6:"(//div[@title='Strikethrough']//img)[6]",
    LeftAlignment6:"(//div[@title='Left']//img)[6]",
    CenterAlignment6:"(//div[@title='Center']//img)[6]",
    RightAlignment6:"(//div[@title='Right']//img)[6]",
    orderedList6:"(//div[@title='Ordered']//img)[6]",
    UnorderedList6:"(//div[@title='Unordered']//img)[6]",
    Remover6:"(//div[@title='Remove(styles) only'])[6]",
    Filter7textdropdown:"(//a[@title='Block Type'])[7]",
    Blod7:"(//div[@title='Bold']//img)[7]",
    Italic7:"(//div[@title='Italic']//img)[7]",
    Underline7:"(//div[@title='Underline'])[7]",
    Strikethorugh7:"(//div[@title='Strikethrough']//img)[7]",
    LeftAlignment7:"(//div[@title='Left']//img)[7]",
    CenterAlignment7:"(//div[@title='Center']//img)[7]",
    RightAlignment7:"(//div[@title='Right']//img)[7]",
    orderedList7:"(//div[@title='Ordered']//img)[7]",
    UnorderedList7:"(//div[@title='Unordered']//img)[7]",
    Remover7:"(//div[@title='Remove(styles) only'])[7]",
    image_edit_splash_screen:'//p[text()="Splash Screen"]//following-sibling::div//button[@aria-label="Upload/Edit"]',
    image_edit_filter_transition_screen:'//p[text()="Filter Transition Screen"]//following-sibling::div//button[@aria-label="Upload/Edit"]',
    image_edit_camera_rotate_transition_screen:'//p[text()="Camera Rotate Transition Screen"]//following-sibling::div//button[@aria-label="Upload/Edit"]',
    image_edit_filter_button_background:'//p[text()="Filter Button Background"]//following-sibling::div//button[@aria-label="Upload/Edit"]',
    image_edit_selfie_photo_frame:'//p[text()="Selfie Photo Frame"]//following-sibling::div//button[@aria-label="Upload/Edit"]',
    




  
}

  //Start Elements Selection
 
  async clickFanaticsFilterPage() {
    await this.page.waitForSelector(this.FanaticsFilter_page_elements.FanticsFilterPage)
    const ele = this.page.locator(this.FanaticsFilter_page_elements.FanticsFilterPage)
    
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Add NewFanatics Filter Page Element Is not visiable | Error occurred: ${error}`);
    }
   
}
async clickEditgame(){
    const ele = this.page.frameLocator('//iframe').locator(this.FanaticsFilter_page_elements.Edit_tab).last()
    
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page edit tab is not visible| Error occurred: ${error}`);
    } 
}

async update_name(value:string){
    const ele = this.page.frameLocator('//iframe').locator(this.FanaticsFilter_page_elements.edit_name)
    const ele2=this.page.frameLocator('//iframe').locator(this.FanaticsFilter_page_elements.edit_button)
    try {
        await ele.fill(' '+'Auto Edited')
        await ele2.click({button:'left'})
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page edit tab is not visible| Error occurred: ${error}`);
    }
}
async delete_game(){
    const ele = this.page.frameLocator('//iframe').locator(this.FanaticsFilter_page_elements.delete_tab)
    const ele2 =this.page.frameLocator('//iframe').locator(this.FanaticsFilter_page_elements.delete_button)

    try {
        await ele.click({button:'left'})
        await ele2.click({button:'left'})
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter delete tab is not visible| Error occurred: ${error}`);
    }
}

async AddNewConfigBtnClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.AddNewConfigurationBTN)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Add New Config Plus Button Element Is not visiable | Error occurred: ${error}`);
    }
    

}

async inputConfigurationName(name: string) {
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.AddNewConfigInputfield)


    try {
        await ele.fill(name)
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Input Field Element Is Not visiable | Error occurred: ${error}`);
    }
   

}
async AddNConfigBtnClick(){
   
    const ele =this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.AddConfig)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Add Config Button Element Is not visiable | Error occurred: ${error}`);
    }
    

}
async Navigatetothegamedesign(){
   
    const ele = this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.NavigateTotheGamedesign).last()
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Button Element Is not visiable | Error occurred: ${error}`);
    }
    

}

async FontUploadBTNClick(){
   
    const ele = this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.FontUploadBTN)
    try {
        await ele.click({ button: "left" })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Font Upload Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async SelectTheFont(){
   
    const ele = this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.SelectTheFont).last()
    try {
        await ele.click({ button: "left"})
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Font Selection Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async ColorBackgroundClick(){
   
    const ele = this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.ColorBackgroundBTN)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Color Background Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async AddColorBTNClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.AddColor)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Color Background Add Color Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async input_Red_Color(value: string) {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.FanaticsFilter_page_elements.RGB_red_color);
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
      .locator(this.FanaticsFilter_page_elements.RGB_green_color);
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
      .locator(this.FanaticsFilter_page_elements.RGB_blue_color);
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
      .locator(this.FanaticsFilter_page_elements.RGB_opacity_color);
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
      .locator(this.FanaticsFilter_page_elements.RGB_Hex_color);
    if (await ele.isVisible()) {
      await ele.fill(' ')
      await ele.focus()
      await ele.type(value, { delay: 400 })
    }
    else {
      throw new Error(" THe Hex color input box for this color picker is not visible")
    }
  }
async RGBDropdownClick(){
   
    const ele =  this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.RGBDRopdown)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Color Background Dropdown Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async SolidColorSelection(){
   
    const ele =  this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.RGBSolid)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Color Background Dropdown Solid Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async select_last_swatch(){
   const ele = this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.select_swatch).last()
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Color Background Dropdown Solid Button Element Is not visiable | Error occurred: ${error}`);
    }
}

async HorizontalColorSelection(){
   
    const ele =  this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.HoriZontal)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Color Background Dropdown HoriZontal Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async VerticalColorSelection(){
   
    const ele = this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Vertical)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Color Background Dropdown Vertical Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async DiagonalColorSelection(){
   
    const ele = this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Diagonal)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Color Background Dropdown Diagonal Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async RadialColorSelection(){
   
    const ele =  this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Radial)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Color Background Dropdown Radial Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async ColorSelectionSaveBTNClick(){
   
    const ele =  this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.SaveBTNRGB)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Color Background Save Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async LoadingAnimationColorClick(){
   
    const ele =  this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.LoadingAnimationColor)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Color Loading Animation Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async FilterIconBorderColorClick(){
   
    const ele =  this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.FilterIconBoarder)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Color Filter Icon Border Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async FilterIconGlowColorClick(){
   
    const ele =  this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.FilterIconGlow)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Color Filter Icon Glow Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}


async PanelColorClick(){
   
    const ele =  this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Panel)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Color Panel Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async SplashScreenUploadClick(){
   
    const ele = this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.SplashScreen)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Splash Screen Upload Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async wait_for_splash_screen_image(){
    try {
        const ele=  this.page.frameLocator('.css-r99fy3').locator(this.FanaticsFilter_page_elements.image_edit_splash_screen)
        await expect(ele).toBeVisible({timeout:60000})
    } catch (error) {
        throw new Error("Image uplaod failed "+error)
    }
}

async FilterTransitionScreenUploadClick(){
   
    const ele =  this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.FilterTransitionScreen)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Filter Transition Screen Upload Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async wait_for_FilterTransitionScreen_image(){
    try {
        const ele=  this.page.frameLocator('.css-r99fy3').locator(this.FanaticsFilter_page_elements.image_edit_filter_transition_screen)
        await expect(ele).toBeVisible({timeout:60000})
    } catch (error) {
        throw new Error("Image uplaod failed "+error)
    }
}

async CameraRotateTransitionScreenUploadClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.CamereRotateTransitionScreen)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Camera Rotate Transition Screen Upload Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async wait_for_camera_rotate_transition_image(){
    try {
        const ele=  this.page.frameLocator('.css-r99fy3').locator(this.FanaticsFilter_page_elements.image_edit_camera_rotate_transition_screen)
        await expect(ele).toBeVisible({timeout:60000})
    } catch (error) {
        throw new Error("Image uplaod failed "+error)
    }
}


async FilterBackgrounBTNClick(){
   
    const ele = this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.filterButtonBackgroundUpload)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Filter Background Upload Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async wait_for_FilterBackground_image(){
    try {
        const ele=  this.page.frameLocator('.css-r99fy3').locator(this.FanaticsFilter_page_elements.image_edit_filter_button_background)
        await expect(ele).toBeVisible({timeout:60000})
    } catch (error) {
        throw new Error("Image uplaod failed "+error)
    }
}

async SelfiePhotoFrameUploadBTNClick(){
   
    const ele =  this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.SelfiePhotoFrameUploadBTN)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Game Design Selfie Photo Frame Upload Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async wait_for_SelfiePhotoFrameUpload_image(){
    try {
        const ele=  this.page.frameLocator('.css-r99fy3').locator(this.FanaticsFilter_page_elements.image_edit_selfie_photo_frame)
        await expect(ele).toBeVisible({timeout:60000})
    } catch (error) {
        throw new Error("Image uplaod failed " + error)
    }
}
async NavigateToTheAddBanner(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.AddBannerButton)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Add Banner Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async UploadFrameBTNClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.UploadFrameButton)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Add Banner Upload Frame Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async NavigateToTheFilterSetting(){
   
    const ele = this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.FilterSettingBtn).last()
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Button Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async Filter1TextInputField(value: String){
   
    const ele = this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.TextInputfield).nth(1)
    try {
        
        await ele.fill(' ')
        await ele.fill(`${value}`)
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Filter 1 Input Field Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async FontselecttionDropdown(){
   
    const ele =  this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.FontSelection).nth(1)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Font Selection Dropdown Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async ArialFontselecttion(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.ArialSelection)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Font Selection Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async TextDropdownClick(){
   
    const ele = this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.TextDropdown).nth(0)
    try {
        await ele.click({ button: "left"})
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Dropdown Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async NormalTextClick(){
   
    const ele = this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.NOrmal)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Normal Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async H1TextClick(){
   
    const ele = this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.H1)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection H1 Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async H2TextClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.H2)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection H2 Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async H3TextClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.H3)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection H3 Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async H4TextClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.H4)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection H4Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async H5TextClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.H5)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection H5 Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async H6TextClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.H6)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection H6 Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async BlockQuoteTextClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.BlockQuote)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Blockquote Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async BoldClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Blod)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Bold Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async ItalicClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Italic)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Italic Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async UnderlineClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Underline)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Underline Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async StrikeThroughClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Strikethorugh)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Strikethrough Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async LeftAlignmentClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.LeftAlignment)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Left Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async CenterAlignmentClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.CenterAlignment)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Center Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async RightAlignmentClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.RightAlignment)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Right Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async OrderedListClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.orderedList)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Ordered List Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async UnorderedListClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.UnorderedList)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Unordered List Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async RemoverClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Remover)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Remover Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async QRCodeClick(){
   
    const ele =  this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.clickQrCodeBtn).last()
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page QrCode Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async clickOpenLinkInNewTab() {

    // Click text=Open Link
    const [page1] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.opneLinkInNewTab).click({ button: "left" })
    ]);
    // await this.page.waitForLoadState("networkidle")
    await this.page.waitForTimeout(3000)
    return page1;

}

async Filter2dropdownClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Filter2fontDropdown)
    try {
        await ele.click({ force : true})
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Font Dropdown Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Filter3dropdownClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Filter3fontdropdown)
    try {
        await ele.click({ force : true})
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Font Dropdown Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Filter4dropdownClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Filter4fontdropdown)
    try {
        await ele.click({ force : true})
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Font Dropdown Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Filter5dropdownClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Filter5fontdropdown)
    try {
        await ele.click({ force : true})
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Font Dropdown Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Filter6dropdownClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Filter6fontdropdown)
    try {
        await ele.click({ force : true})
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Font Dropdown Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Filter7dropdownClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Filter7fontdropdown)
    try {
        await ele.click({ force : true})
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Font Dropdown Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async Filter2TextdropdownClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Filter2textdropdown)
    try {
        await ele.click({ force : true})
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Text Dropdown Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Filter3TextdropdownClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Filter3textdropdown)
    try {
        await ele.click({ force : true})
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Text Dropdown Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Filter4TextdropdownClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Filter4textdropdown)
    try {
        await ele.click({ force : true})
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Text Dropdown Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Filter5TextdropdownClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Filter5textdropdown)
    try {
        await ele.click({ force : true})
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Text Dropdown Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Filter6TextdropdownClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Filter6textdropdown)
    try {
        await ele.click({ force : true})
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Text Dropdown Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Filter7TextdropdownClick(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Filter7textdropdown)
    try {
        await ele.click({ force : true})
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Text Dropdown Element Is not visiable | Error occurred: ${error}`);
    }
    
}





async Bold2Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Blod2)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Bold Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Italic2Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Italic2)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Italic Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async Underline2Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Underline2)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Underline Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async StrikeThrough2Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Strikethorugh2)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Strikethrough Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async LeftAlignment2Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.LeftAlignment2)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Left Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async CenterAlignment2Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.CenterAlignment2)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Center Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async RightAlignment2Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.RightAlignment2)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Right Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async OrderedList2Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.orderedList2)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Ordered List Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async UnorderedList2Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.UnorderedList2)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Unordered List Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Remover2Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Remover2)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Remover Element Is not visiable | Error occurred: ${error}`);
    }
    
}


async Bold3Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Blod3)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Bold Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Italic3Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Italic3)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Italic Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async Underline3Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Underline3)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Underline Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async StrikeThrough3Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Strikethorugh3)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Strikethrough Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async LeftAlignment3Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.LeftAlignment3)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Left Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async CenterAlignment3Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.CenterAlignment3)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Center Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async RightAlignment3Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.RightAlignment3)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Right Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async OrderedList3Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.orderedList3)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Ordered List Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async UnorderedList3Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.UnorderedList3)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Unordered List Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Remover3Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Remover3)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Remover Element Is not visiable | Error occurred: ${error}`);
    }
    
}



async Bold4Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Blod4)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Bold Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Italic4Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Italic4)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Italic Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async Underline4Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Underline4)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Underline Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async StrikeThrough4Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Strikethorugh4)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Strikethrough Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async LeftAlignment4Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.LeftAlignment4)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Left Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async CenterAlignment4Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.CenterAlignment4)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Center Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async RightAlignment4Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.RightAlignment4)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Right Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async OrderedList4Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.orderedList4)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Ordered List Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async UnorderedList4Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.UnorderedList4)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Unordered List Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Remover4Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Remover4)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Remover Element Is not visiable | Error occurred: ${error}`);
    }
    
}



async Bold5Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Blod5)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Bold Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Italic5Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Italic5)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Italic Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async Underline5Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Underline5)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Underline Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async StrikeThrough5Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Strikethorugh5)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Strikethrough Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async LeftAlignment5Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.LeftAlignment5)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Left Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async CenterAlignment5Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.CenterAlignment5)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Center Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async RightAlignment5Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.RightAlignment5)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Right Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async OrderedList5Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.orderedList5)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Ordered List Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async UnorderedList5Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.UnorderedList5)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Unordered List Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Remover5Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Remover5)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Remover Element Is not visiable | Error occurred: ${error}`);
    }
    
}


async Bold6Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Blod6)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Bold Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Italic6Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Italic6)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Italic Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async Underline6Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Underline6)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Underline Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async StrikeThrough6Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Strikethorugh6)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Strikethrough Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async LeftAlignment6Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.LeftAlignment6)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Left Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async CenterAlignment6Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.CenterAlignment6)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Center Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async RightAlignment6Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.RightAlignment6)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Right Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async OrderedList6Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.orderedList6)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Ordered List Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async UnorderedList6Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.UnorderedList6)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Unordered List Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Remover6Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Remover6)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Remover Element Is not visiable | Error occurred: ${error}`);
    }
    
}


async Bold7Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Blod7)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Bold Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Italic7Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Italic7)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Italic Element Is not visiable | Error occurred: ${error}`);
    }
    
}

async Underline7Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Underline7)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Underline Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async StrikeThrough7Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Strikethorugh7)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Strikethrough Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async LeftAlignment7Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.LeftAlignment7)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Left Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async CenterAlignment7Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.CenterAlignment7)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Center Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async RightAlignment7Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.RightAlignment7)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Right Alignment Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async OrderedList7Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.orderedList7)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Ordered List Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async UnorderedList7Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.UnorderedList7)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Unordered List Element Is not visiable | Error occurred: ${error}`);
    }
    
}
async Remover7Click(){
   
    const ele = await this.page.frameLocator('iframe').locator(this.FanaticsFilter_page_elements.Remover7)
    try {
        await ele.click({ button: "left", delay: 1000 })
    } catch (error) {
        throw new Error(`Fanatics Filter | Fanatics Filter Page Filter Setting Text Selection Remover Element Is not visiable | Error occurred: ${error}`);
    }
    
}



}


