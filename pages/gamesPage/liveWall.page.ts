import { expect, Page } from "@playwright/test";
import { readFileSync } from "fs";
export default class liveWallPage {
  [x: string]: any;

  private page: Page;
  static buffer: void;
  constructor(page: Page) {
    this.page = page;
  }

  //=======================================================
  //▶▶Start Element





  async clickQRCodeBtn() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//img)[1]");
    await ele.click();
  }


  async clickMobileLinkOpenBtn() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]");
    await ele.click();
  }
  

  async clickLiveWallSection() {
    const locator = this.page.locator("//p[text()='Live Wall']");
    expect.soft(locator).toContainText("Live Wall");
    await locator.click({force:true});
    // console.log("Successfully Click To Tug of War Page ")
  }

  async clickDesignPage() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Design']");
    await ele.click();
  }


  async clickClearBtn() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    const ele = await this.page
      .frameLocator("iframe")
        .locator("text='Clear All'");
    await ele.click({force:true});
  }

  async verifyFontsTitleText() {
    const ele = await this.page.frameLocator("iframe").locator("text=Fonts");
    expect(ele).toContainText("Fonts");
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
    await ele.click({force:true});
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
    const ele = await this.page
      .frameLocator("iframe")
      .locator('(//input[@type="text"])[5]');
    await ele.fill("F1C41FFF");
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

  //Upload Image For Live Wall Game
  async clickToUploadFeedRightImage() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[8]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  async clickToUploadFeedLeftImage() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[7]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  async clickToUploadFeedImage() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[6]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  async clickToUploadOutputBackground() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[5]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  async clickToUploadOutputFrame() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[4]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  async clickToUploadFullScreenLogo() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[3]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  async clickToUploadMobileFrame() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[4]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  async clickToUploadBackground() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[2]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  //Dispaly Massage Section Element From Here

    
  async preLiveInputBoxFonts() {
    await this.page.frameLocator("iframe").locator("(//span[text()='Font'])[1]").click()
}

async preLiveInputBoxArial() {
    await this.page.frameLocator("iframe").locator("//li[text()='Arial']").click()
}

async preLiveInputBoxBlocktype() {
    await this.page.frameLocator("iframe").locator("(//a[@title='Block Type'])[1]").click()

}
async preLiveInputBoxNormal() {
    await this.page.frameLocator("iframe").locator("//li[text()='Normal']").click()

}

async preLiveInputBoxBlockH1() {
    await this.page.frameLocator("iframe").locator("//li[text()='H1']").click()
}
async preLiveInputBoxBlockH2() {
    await this.page.frameLocator("iframe").locator("//li[text()='H2']").click()
}
async preLiveInputBoxBlockH3() {
    await this.page.frameLocator("iframe").locator("//li[text()='H3']").click()
}
async preLiveInputBoxBlockH4() {
    await this.page.frameLocator("iframe").locator("//li[text()='H4']").click()
}
async preLiveInputBoxBlockH5() {
    await this.page.frameLocator("iframe").locator("//li[text()='H5']").click()
}
async preLiveInputBoxBlockH6() {
    await this.page.frameLocator("iframe").locator("//li[text()='H6']").click()
}
async preLiveInputBoxBlockquote() {
    await this.page.frameLocator("iframe").locator("//li[text()='Blockquote']").click()
}

async preLiveInputBoxBold() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Bold']//img[1])[1]").click()

}

async preLiveInputBoxItalic() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Italic']//img[1])[1]").click()

}

async preLiveInputBoxUnderline() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Underline']//img[1])[1]").click()

}

async preLiveInputBoxsikethrough() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Strikethrough']//img[1])[1]").click()

}

async preLiveInputBoxColorpk() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Color Picker']//img)[1]").click()

}

async preLiveInputBoxTextcl() {
    await this.page.frameLocator("iframe").locator("//span[text()='Text']").click()

}

async preLiveInputBoxGreencl() {
    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[1]").click()

}

async preLiveInputBoxHighlightcl() {
    await this.page.frameLocator("iframe").locator("//span[text()='Highlight']").click()

}

async preLiveInputBoxHighlightgrn() {
    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[1]").click()

}
async preLiveInputBoxLeft() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Left'])[1]").click()

}
async preLiveInputBoxCenter() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Center']//img[1])[1]").click()

}
async preLiveInputBoxRight() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Right']//img[1])[1]").click()

}
async preLiveInputBoxOutdent() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Outdent']//img[1])[1]").click()

}
async preLiveInputBoxIndent() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Indent']//img[1])[1]").click()

}



async preLiveInputBoxOrdered() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Ordered']//img[1])[1]").click()

}


async preLiveInputBoxUnOrdered() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Unordered']//img[1])[1]").click()

}

async preLiveInputBoxRemove() {
    await this.page.frameLocator("iframe").locator("(//div[@title='Remove(styles) only']//img[1])[1]").click()

}


  async inputPreLiveText() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator(
        "(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[1]"
      );
    expect(ele).toBeVisible();
    await ele.dblclick();
    await ele.fill(
      "In publishing and graphic design, Lorem ipsum is a placeholder"
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
                      .click({force:true})
      }     
      
    }

        //Live Wall Home page 
        async clickGameStopBtn() {

          //const ele = await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-pzp2lt']//button[1]").isVisible()
          if (await this.page.frameLocator('iframe').locator("//button[text()='STOP']")) {
                  // console.log("Enable Stage to be skip and jump to next one")
                  await this.page.frameLocator('iframe')
                          .locator("//div[@class='MuiBox-root css-pzp2lt']//button[1]")
                          .click({force:true})
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
      .locator("//button[text()='Refresh']");
    await ele.click({force:true});
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
    await ele.click({force:true});
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














}
