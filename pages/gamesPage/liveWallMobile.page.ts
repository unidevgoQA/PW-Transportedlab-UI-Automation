import { expect, Page } from "@playwright/test";
import BaseFunctions from "@base-function/baseFunctions"
export default class liveWallMobileScreenPage {
  private page: Page;
  private base: BaseFunctions;
  // static buffer: void;
  constructor(page: Page) {
    this.page = page;
    page.setViewportSize({ width: 360, height: 740 })
    this.base = new BaseFunctions(page);
  }
  private liveWallPageElement = {
    firstQRCode: "(//button[@type='button']//img)[1]",
    mobileLinkOpenNewTabBtn: "//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]",
    signInTitleText: "//p[text()='Sign in and start managing your Games!']",
    idLabelText: "//label[text()='Id']",
    secretLabelText: "//label[text()='Secret']",
    eyeBtn: "(//button[@type='button'])[1]",
    ID: "input[type='text']",
    secret: "input[type='password']",
    logoutLink: "//button[text()='Logout' and @role='menuitem']",
    EmailField: "input[type='text']"
  }
  async clickLiveWallSection() {
    const locator = this.page.locator("//p[text()='Live Wall']");
    expect.soft(locator).toContainText("Live Wall");
    await locator.click();
    // console.log("Successfully Click To Tug of War Page ")
  }
  async clickQRCodeBtn() {
    await this.base.waitAndClick(this.liveWallPageElement.firstQRCode)
  }
  async clickMobileOpenLinkBtn() {
    await this.base.waitAndClick(this.liveWallPageElement.mobileLinkOpenNewTabBtn)
  }
  // async clickMobileLinkOpenNewTabBtn() {
  //   const [newtab] = await Promise.all([
  //     this.page.waitForLoadState(),
  //     this.base.waitAndClick(this.liveWallPageElement.eyeBtn)
  //   ])
  //   return newtab;
  // }
}