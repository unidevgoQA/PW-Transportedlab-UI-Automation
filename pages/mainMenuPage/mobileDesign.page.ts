import { expect } from "@fixtures/basePages";
import { Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class MobileDesign {
    [x: string]: any;

    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }




    async clickHomeAvater() {
        const ele = this.page.locator('button').nth(2)
        expect(ele).toBeEnabled()
        await ele.click()
    }

    
   async clickArcadePage() {
    const ele = this.page.locator('text=Arcade')
    expect(ele).toContainText('Arcade')
    await ele.click()
}

    async HomeAvater() {
        await this.page.locator('button').nth(2)
    }

    async mainMenuBtn() {
        const ele = this.page.locator('text=Main Menu')
        expect(ele).toBeEnabled()
        await ele.click()

    }

    async clickMobileDesign() {
        const ele = this.page.locator('text=Mobile Design')
        expect(ele).toContainText('Mobile Design')
        await ele.click()
    }

    async mobileDesign() {
        await this.page.locator('text=Mobile Design')
    }

    async uploadFont() {
        await this.page.locator('text=Upload Font')
    }

    async titleFont() {
        await this.page.locator('text=Fonts')
    }

    async clickUploadFontInputFiled() {
        await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[1]").first().click()
    }

    //click on the clear button
    async clickClearAllBtn() {
        const ele = this.page.locator("//button[text()='Clear All']")
        expect(ele).toContainText('Clear All')
        await ele.click()
    }

    //Primary Color Input field Element
    async checkPrimaryColortxt() {
        await this.page.locator("//p[text()='Primary']").isVisible()
    }

    // async clickPrimaryColorField() {
    //     await this.page.locator("[type='button']:near(:text('Primary'))").click()
    // }

    async clickPrimaryColorField() {
        const ele = this.page.locator("//p[text()='Primary']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()

    }



    async primaryColorFirstInputField() {
        await this.page.locator("(//input[@type='text'])[1]").fill("231")
    }


    async primaryColorSecondInputField() {
        await this.page.locator("(//input[@type='text'])[2]").fill("195")
    }

    async primaryColorThirdInputField() {
        await this.page.locator("(//input[@type='text'])[3]").fill("14")
    }

    async primaryColorOpacityInputField() {
        await this.page.locator("(//input[@type='text'])[4]").fill("50")
    }

    async primaryColorHexInputField() {
        await this.page.locator("(//input[@type='text'])[5]").fill("ff2b6aff")
    }

    async clickSaveBtn() {
        await this.page.locator("//button[text()='Save']").click()
    }

    async primaryColorPickerWindowClose() {
        await this.page.locator("div.MuiBox-root.css-1x8a1gr").click()
    }

    //Secondary Color Field Ele
    async checkSecondaryText() {
        const locator = this.page.locator("//p[text()='Secondary']");
        await expect(locator).toContainText('Secondary');
    }

    async clickSecondaryColorBtn() {
        const ele = this.page.locator("//p[text()='Secondary']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()


    }


    async SecondaryColorFirstInputField() {
        await this.page.locator("(//input[@type='text'])[1]").fill("20")
    }


    async SecondaryColorSecondInputField() {
        await this.page.locator("(//input[@type='text'])[2]").fill("10")
    }

    async SecondaryColorThirdInputField() {
        await this.page.locator("(//input[@type='text'])[3]").fill("13")
    }

    async SecondaryColorOpacityInputField() {
        await this.page.locator("(//input[@type='text'])[4]").fill("55")
    }

    async SecondaryColorHexInputField() {
        await this.page.locator("(//input[@type='text'])[5]").fill("fd2b6aff")
    }

    //Tertiary color input field ele
    async checkTertiaryText() {
        const locator = this.page.locator("//p[text()='Tertiary']");
        await expect(locator).toContainText('Tertiary');
    }

    async clickTertiaryColorBtn() {
        const ele = this.page.locator("//p[text()='Tertiary']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()


    }

    async TertiaryColorFirstInputField() {
        await this.page.locator("(//input[@type='text'])[1]").fill("20")
    }


    async TertiaryColorSecondInputField() {
        await this.page.locator("(//input[@type='text'])[2]").fill("10")
    }

    async TertiaryColorThirdInputField() {
        await this.page.locator("(//input[@type='text'])[3]").fill("13")
    }

    async TertiaryColorOpacityInputField() {
        await this.page.locator("(//input[@type='text'])[4]").fill("55")
    }

    async TertiaryColorHexInputField() {
        await this.page.locator("(//input[@type='text'])[5]").fill("fd2b6aff")
    }

    //Bitton color Input Field Ele
    async checkButtonText() {
        const locator = this.page.locator("//p[text()='Button']");
        await expect(locator).toContainText('Button');
    }

    async clickButtonColorBtn() {
        const ele = this.page.locator("//p[text()='Button']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()


    }

    async ButtonColorFirstInputField() {
        await this.page.locator("(//input[@type='text'])[1]").fill("50")
    }


    async ButtonColorSecondInputField() {
        await this.page.locator("(//input[@type='text'])[2]").fill("303")
    }

    async ButtonColorThirdInputField() {
        await this.page.locator("(//input[@type='text'])[3]").fill("432")
    }

    async ButtonColorOpacityInputField() {
        await this.page.locator("(//input[@type='text'])[4]").fill("53")
    }

    async ButtonColorHexInputField() {
        await this.page.locator("(//input[@type='text'])[5]").fill("573c98ff")
    }

    //Element of the Button Glow Field
    async checkButtonGlowText() {
        const locator = this.page.locator("//p[text()='Button Glow']");
        await expect(locator).toContainText('Button');
    }

    async clickButtonGlowColorBtn() {
        const ele = this.page.locator("//p[text()='Button Glow']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()



    }

    async ButtonGlowColorFirstInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").fill("110")
    }


    async ButtonGlowColorSecondInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").fill("302")
    }

    async ButtonGlowColorThirdInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]").fill("431")
    }

    async ButtonGlowColorOpacityInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]").fill("51")
    }

    async ButtonGlowColorHexInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]").fill("573c98ff")
    }


    //Text Filed Eelement
    async checkTextText() {
        const locator = this.page.locator("//p[text()='Text']");
        await expect(locator).toContainText('Text');
    }

    async clickTextColorBtn() {
        const ele = this.page.locator("//p[text()='Text']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()


    }

    async TextColorFirstInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").fill("123")
    }


    async TextColorSecondInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").fill("313")
    }

    async TextColorThirdInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]").fill("402")
    }

    async TextColorOpacityInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]").fill("53")
    }

    async TextColorHexInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]").fill("7bffff87")
    }


    //Text Dialog Box Filed Eelement
    async checkTextDialogBoxText() {
        const locator = this.page.locator("//p[text()='Text Dialog Box']");
        await expect(locator).toContainText('Text Dialog Box');
    }

    async clickTextDialogBoxColorBtn() {
        const ele = this.page.locator("//p[text()='Text Dialog Box']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()


    }

    async TextDialogBoxColorFirstInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").fill("123")
    }


    async TextDialogBoxColorSecondInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").fill("313")
    }

    async TextDialogBoxColorThirdInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]").fill("402")
    }

    async TextDialogBoxColorOpacityInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]").fill("53")
    }

    async TextDialogBoxColorHexInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]").fill("573e98ff")
    }


    //Text Header Filed Eelement
    async checkHeaderFieldText() {
        const locator = this.page.locator("//p[text()='Header']");
        await expect(locator).toContainText('Header');
    }

    async clickHeaderFieldColorBtn() {
        const ele = this.page.locator("//p[text()='Header']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()


    }

    async HeaderColorFirstInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").fill("23")
    }


    async HeaderColorSecondInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").fill("13")
    }

    async HeaderColorThirdInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]").fill("40")
    }

    async HeaderColorOpacityInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]").fill("53")
    }

    async HeaderColorHexInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]").fill("573e98ff")
    }



    //Text Header Text Filed Eelement
    async checkHeaderTextFieldText() {
        const locator = this.page.locator("//p[text()='Header Text']");
        await expect(locator).toContainText('Header Text');
    }

    async clickHeaderTextFieldColorBtn() {
        const ele = this.page.locator("//p[text()='Header Text']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()


    }

    async HeaderTextColorFirstInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").fill("123")
    }


    async HeaderTextColorSecondInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").fill("313")
    }

    async HeaderTextColorThirdInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]").fill("402")
    }

    async HeaderTextColorOpacityInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]").fill("53")
    }

    async HeaderTextColorHexInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]").fill("573e98ff")
    }


    //Text Gamification Filed Eelement
    async checkGamificationFieldText() {
        const locator = this.page.locator("//p[text()='Gamification']");
        await expect(locator).toContainText('Gamification');
    }

    async clickGamificationFieldColorBtn() {
        const ele = this.page.locator("//p[text()='Gamification']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()

    }

    async GamificationColorFirstInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").fill("123")
    }


    async GamificationColorSecondInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").fill("31")
    }

    async GamificationColorThirdInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]").fill("40")
    }

    async GamificationColorOpacityInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]").fill("100")
    }

    async GamificationColorHexInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]").fill("573e98ff")
    }

    //Text Gamification Glow Line Filed Eelement
    async checkGamificationGlowLineFieldText() {
        const locator = this.page.locator("//p[text()='Gamification Glow Line']");
        await expect(locator).toContainText('Gamification Glow Line');
    }

    async clickGamificationGlowLineFieldColorBtn() {
        const ele = this.page.locator("//p[text()='Gamification Glow Line']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()


    }

    async GamificationGlowLineColorFirstInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").fill("123")
    }


    async GamificationGlowLineColorSecondInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").fill("313")
    }

    async GamificationGlowLineColorThirdInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]").fill("402")
    }

    async GamificationGlowLineColorOpacityInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]").fill("53")
    }

    async GamificationGlowLineColorHexInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]").fill("573e98ff")
    }

    async clickLandscapeBackgroundInputField() {
        await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[2]").click()
    }


    async deleteUploadedLandscapeBG() {
                     
            let ele = await this.page.locator("(//div[@class='MuiBox-root css-1tejaop'])[1]").isVisible()
               if ((ele == true)) {
                    // console.log("delete Uploaded Landscape BG ")
                    await this.page
                            .locator("(//div[@class='MuiBox-root css-1tejaop'])[1]")
                                    .click()
               }        
       
               
       
    }
    async deleteUploadedPortraitBG() {
                     
        let ele = await this.page.locator("(//div[@class='MuiBox-root css-1tejaop'])[1]").isVisible()
           if ((ele == true)) {
                // console.log("delete Uploaded Portrait BG ")
                await this.page
                        .locator("(//div[@class='MuiBox-root css-1tejaop'])[1]")
                                .click()
           }        
   
           
   
}

async deleteUploadedLandscapeBGHeader() {
                     
    let ele = await this.page.locator("(//div[@class='MuiBox-root css-1tejaop'])[1]").isVisible()
       if ((ele == true)) {
            // console.log("delete Uploaded Landscape BG Header ")
            await this.page
                    .locator("(//div[@class='MuiBox-root css-1tejaop'])[1]")
                            .click()
       }        

       

}

async deleteUploadedPortraitBGHeader() {
                     
    let ele = await this.page.locator("(//div[@class='MuiBox-root css-1tejaop'])[1]").isVisible()
       if ((ele == true)) {
            // console.log("delete Uploaded Portrait BG Header ")
            await this.page
                    .locator("(//div[@class='MuiBox-root css-1tejaop'])[1]")
                            .click()
       }        

       

}


async deleteUploadedMainLogo() {
                     
    const ele = await this.page.locator("(//div[@class='MuiBox-root css-8eu9qp']//button)[2]").isVisible()
       if ((ele == true)) {
            // console.log("delete Uploaded Portrait BG Header ")
            await this.page.locator("(//div[@class='MuiBox-root css-8eu9qp']//button)[2]")
                            .click()
       }        

       

}


async deleteFont() {
                     
    let ele = await this.page.locator("(//div[@class='MuiBox-root css-718jsx'])[1]").isVisible()
       if ((ele == true)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                    .locator("(//div[@class='MuiBox-root css-718jsx'])[1]")
                            .click()
       }        

       

}

async clickPortraitBackgroundHeaderVideoCheckBox() {
                     
    let ele = await this.page.locator("(//input[@value='video'])[2]").isChecked()
       if ((ele == false)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                    .locator("(//input[@value='video'])[4]")
                            .check()
       }        

       

}

async clickLandscapeBackgroundHeaderVideoCheckBox() {
                     
    let ele = await this.page.locator("(//input[@value='video'])[2]").isChecked()
       if ((ele == false)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                    .locator("(//input[@value='video'])[3]")
                            .check()
       }     

       

}

async clickPortraitBackgroundVideoCheckBox() {
                     
    let ele = await this.page.locator("(//input[@value='video'])[2]").isChecked()
       if ((ele == false)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                    .locator("(//input[@value='video'])[2]")
                            .check()
       }     

       

}

async clickLandscapeBackgroundVideoCheckBox() {
                     
    let ele = await this.page.locator("(//input[@value='video'])[1]").isChecked()
       if ((ele == false)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                    .locator("(//input[@value='video'])[1]")
                            .click()
       }     

       

}


async clickPortraitBackgroundHeaderimageCheckBox() {
                     
    let ele = await this.page.locator("(//input[@value='image'])[2]").isChecked()
       if ((ele == false)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                    .locator("(//input[@value='image'])[4]")
                            .check()
       }        

       

}

async clickLandscapeBackgroundHeaderimageCheckBox() {
                     
    let ele = await this.page.locator("(//input[@value='image'])[2]").isChecked()
       if ((ele == false)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                    .locator("(//input[@value='image'])[3]")
                            .check()
       }     

       

}

async clickPortraitBackgroundimageCheckBox() {
                     
    let ele = await this.page.locator("(//input[@value='image'])[2]").isChecked()
       if ((ele == false)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                    .locator("(//input[@value='image'])[2]")
                            .check()
       }     

       

}

async clickLandscapeBackgroundimageCheckBox() {
                     
    let ele = await this.page.locator("(//input[@value='image'])[1]").isChecked()
       if ((ele == false)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                    .locator("(//input[@value='image'])[1]")
                            .check()
       }     

       

}

async clickToUploadMainLogo() {

    const ele = await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[6]")
    await ele.click()                    

       

}
async clickToUploadPortraitBackgroundHeader() {

    const ele = await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[5]")
    await ele.click()                    

       

}
async clickToUploadLandscapeBackgroundHeader() {

    const ele = await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[4]")
    await ele.click()                    

       

}
async clickToUploadPortraitBackground() {

    const ele = await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[3]")
    await ele.click()                    

       

}

async clickToUploadLandscapeBackground() {

    const ele = await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[2]")
    await ele.click()                    

       

}















    //Start function from here
    async clickUploadFontAndUploadFiles() {
        const filePath0 = "files/Thin.otf"
        this.page.on("filechooser", async (filechooser) => {
            await filechooser.setFiles([filePath0]);
        })
        await this.clickUploadFontInputFiled();
    }



    //>>>Upload Image

    async dragAndDropUploadHelper() {

        const buffer = readFileSync('./videos/a.png');
        // Create the DataTransfer and File
        const dataTransfer = await this.page.evaluateHandle((data) => {
            const dt = new DataTransfer();
            // Convert the buffer to a hex array
            const file = new File([data.toString('hex')], 'a.png', { type: 'application/png' });
            dt.items.add(file);
            return dt;
        }, buffer);

        await this.page.dispatchEvent("(//div[@class='MuiBox-root css-78n4oq']//div)[1]", 'drop', { dataTransfer });

    }

}