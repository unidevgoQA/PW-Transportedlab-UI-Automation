
import test, { expect } from "@fixtures/basePages";
import { BrowserContext, webkit, devices, Page, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'



test("009LW-0011 | Validate VIP Live Selfie Cam open in mobile Screen", async ({ loginPage, liveWallPage, functions }, testInfo) => {




      // const browser = await webkit.launch({ headless: false });
      // const context = await browser.newContext({ ...devices["iPhone 13 Pro Max"]});
      // const page = await context.newPage();

      const browser = await chromium.launch({ headless: false });
      const context = await browser.newContext({ ...devices["Pixel 5"], permissions: ["camera"], });
      const page = await context.newPage();


      await page.goto("/admin/#/sign-in");
      await page.fill("input[type='text']", "qa-1")
      await page.fill("input[type='password']", "mFkTylCDNC")

      await Promise.all([
              page.waitForNavigation(),
              page.click("button:has-text('Login')")
      ])


      await page.click("//p[text()='Live Wall']")


      await page.waitForTimeout(3000)


      // if (await page.frameLocator('iframe').locator("//button[text()='STOP']")) {
      //         // console.log("Enable Stage to be skip and jump to next one")
      //         await page.frameLocator('iframe')
      //                 .locator("//div[@class='MuiBox-root css-pzp2lt']//button[1]")
      //                 .click({ force: true })
      // }

      await page.waitForTimeout(3000)

      const startBtnVIP = await page.frameLocator('iframe').locator("text='STOP'").isHidden()
      if ((startBtnVIP == true)) {
              // console.log("Enable Stage to be skip and jump to next one")
              await page.frameLocator('iframe')
                      .locator("//div[@class='MuiBox-root css-pzp2lt']//button[1]")
                      .click({ force: true })
      }


      const ele = await page
              .frameLocator("iframe")
              .locator("(//h2[text()='Live Selfie Cam']/following-sibling::button)[3]");
      await ele.click();

      const [page1] = await Promise.all([
              page.waitForEvent('popup'),
              page.frameLocator('iframe').locator('text=Open Link').click()
      ]);

      // await page1
      //         .locator('#usernameField')
      //                 .fill('Jon Doe');

      // await page1.locator("text=Enter").click()

      const nameField = await page1.locator('#usernameField').isVisible()
      if ((nameField == true)) {
              // console.log("Enable Stage to be skip and jump to next one")
              await page1
                      .locator('#usernameField')
                      .fill('Jon Doe');
      }

      const enterBtn = await page1.locator("text=Enter").isVisible()
      if ((enterBtn == true)) {
              // console.log("Enable Stage to be skip and jump to next one")
              await page1
                      .locator("text=Enter")
                      .click()
      }



      const phoneInputField = await page1.locator('[name="phone"]').isVisible()
      if ((phoneInputField == true)) {
              // console.log("Enable Stage to be skip and jump to next one")
              await page1
                      .locator('[name="phone"]')
                      .fill("310-260-6620")
      }

      const emailInputField = await page1.locator('[name="email"]').isVisible()
      if ((emailInputField == true)) {
              // console.log("Enable Stage to be skip and jump to next one")
              await page1
                      .locator('[name="email"]')
                      .fill("jon@email.com")
      }

      const ageInputField = await page1.locator('[name="age"]').isVisible()
      if ((ageInputField == true)) {
              // console.log("Enable Stage to be skip and jump to next one")
              await page1
                      .locator('[name="age"]')
                      .fill("22")
      }

      const birthDateInputField = await page1.locator('//input[@name="birthDate"]').isVisible()
      if ((birthDateInputField == true)) {
              // console.log("Enable Stage to be skip and jump to next one")
              await page1
                      .locator('//input[@name="birthDate"]')
                      .click({ force: true })
      }

      await page1.waitForTimeout(3000)

      const selectBirthDate = await page1.locator("//button[text()='27']").isVisible()
      if ((selectBirthDate == true)) {
              // console.log("Enable Stage to be skip and jump to next one")
              await page1
                      .locator("//button[text()='27']")
                      .click({ force: true })
      }

      const birthDateOkBtn = await page1.locator("//button[text()='OK']").isVisible()
      if ((birthDateOkBtn == true)) {
              // console.log("Enable Stage to be skip and jump to next one")
              await page1
                      .locator("//button[text()='OK']")
                      .click({ force: true })
      }

      const zipInputField = await page1.locator('[name="zipCode"]').isVisible()
      if ((zipInputField == true)) {
              // console.log("Enable Stage to be skip and jump to next one")
              await page1
                      .locator('[name="zipCode"]')
                      .fill("1234")
      }


      const submitBtn = await page1.locator("//button[text()='Submit']").isVisible()
      if ((submitBtn == true)) {
              // console.log("Enable Stage to be skip and jump to next one")
              await page1
                      .locator("//button[text()='Submit']")
                      .click()
      }




      await page1.fill('[name="phone"]', "310-260-6620")

      await page1.fill('[name="email"]', "jon@email.com")

      await page1.fill('[name="age"]', "23")

      await page1.click('//input[@name="birthDate"]');

      await page1.waitForTimeout(5000)

      await page1.click("//button[text()='27']");

      await page1.click("//button[text()='OK']");

      await page1.fill('[name="zipCode"]', "1223")

      await page1.click("//button[text()='Submit']");

      await page1.waitForTimeout(2000)

      await page1.click("//p[text()='USER PROFILE']");

      await page1.waitForTimeout(5000)


      await page1.click("//p[text()='RULES']");
      await page1.waitForTimeout(6000)


      await page1.click("//p[text()='HOW TO PLAY']");
      await page1.waitForTimeout(6000)



      await page1.click("//button[@value='prize']");

      await page1.waitForTimeout(5000)

      await page1.click("//p[text()='HOME']");

      await page.waitForTimeout(3000)




})

test("009LW-0012 | Validate VIP Live Selfie Cam Showing On Cue Screen", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      // const browser = await chromium.launch({ headless: false });
      // const context = await browser.newContext({permissions: ["camera"] });
      // const page = await context.newPage();



      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')

      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
              contentType: "image/png",
              body: screenshot
      })



      //click Live Wall Section
      await liveWallPage.clickLiveWallSection()



      //click Refresh Btn
      await liveWallPage.clickRefreshBtn()

      //click Only Show VIP Selfie Cam Enable Btn
      await liveWallPage.clickOnlyShowVIPSelfieCamEnableBtn()



      await page.waitForTimeout(4000)
      //click To Add Live Selfie Cam In Cue
      await liveWallPage.clickToAddLiveSelfieCamInCue()

      //click Cue Btn
      await liveWallPage.clickCueBtn()

      const [page1] = await Promise.all([
              page.waitForEvent('popup'),
              page.frameLocator('iframe').locator('text=Open Link').click()
      ]);


     // Click text=LiveAlertUncue >> button >> nth=0
     await page1.locator('text=LiveAlertUncue >> button').first().click();

     await page1.waitForTimeout(3000)

     // Click text=Next
     await page1.locator("//button[text()='Next']").click({force:true});

      // Click text=No streamsNext >> div
      await page1.locator('text=No streamsNext >> div').click();

      // //click Cue Open New Tab Btn
      // await liveWallPage.clickCueOpenNewTabBtn()

      // //click To Add Live Selfie Cam In Cue
      // await liveWallPage.clickToAddCueToLiveSection()

      await page.waitForTimeout(2000)




})

test("009LW-0013 | Validate VIP Live Selfie Cam Showing on Live Screen", async ({ loginPage, liveWallPage, functions, page }, testInfo) => {
      // await test.step("Login Admin And land To Home Screen", async () => {
      // const browser = await chromium.launch({ headless: false });
      // const context = await browser.newContext({permissions: ["camera"] });
      // const page = await context.newPage();



      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')

      const screenshot = await page.screenshot();
      await testInfo.attach("login screenshot", {
              contentType: "image/png",
              body: screenshot
      })



      //click Live Wall Section
      await liveWallPage.clickLiveWallSection()

      //click Only Show VIP Selfie Cam Enable Btn
      await liveWallPage.clickOnlyShowVIPSelfieCamEnableBtn()

      //click Refresh Btn
      await liveWallPage.clickRefreshBtn()

      //   // Click text=LiveAlertUncue >> button >> nth=0
      // await page.locator('text=LiveAlertUncue >> button').first().click();

      // Click text=CueLiveDelete >> button >> nth=1
      await page.frameLocator('iframe').locator('text=CueLiveDelete >> button').nth(1).click();



      //click Cue Btn
      await liveWallPage.clickOutPutBtn()

      const [page1] = await Promise.all([
              page.waitForEvent('popup'),
              page.frameLocator('iframe').locator('text=Open Link').click()

      ]);

      await page1.waitForTimeout(8000)
      //                 // Click text=LiveAlertUncue >> button >> nth=0
      //   await page1.locator('text=LiveAlertUncue >> button').first().click();

      //   // Click text=Next
      //   await page1.locator('text=Next').click();

      //   // Click text=No streamsNext >> div
      //   await page1.locator('text=No streamsNext >> div').click();

      // //click Cue Open New Tab Btn
      // await liveWallPage.clickCueOpenNewTabBtn()

      // //click To Add Live Selfie Cam In Cue
      // await liveWallPage.clickToAddCueToLiveSection()






})
