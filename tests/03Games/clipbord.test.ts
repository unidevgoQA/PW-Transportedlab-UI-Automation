import { test, devices, chromium } from "@playwright/test";
const clipboard = require("clipboardy");
var url: any;
test("Access clipboard", async ({ page }) => {
       
        await test.step("access the clipboard", async () => {
                await page.goto("https://garrett.testingdxp.com//admin/#/sign-in");
                await page.fill("input[type='text']", "garrett")
                await page.fill("input[type='password']", "LFQIISIc")

                await Promise.all([
                        page.waitForNavigation(),
                        page.click("button:has-text('Login')")
                ])

                // await page.waitForTimeout("5000")
                const locator = page.locator('text=Prize Drop')
                // expect(locator).toContainText('Prize Drop')
                await locator.click()

                await page.frameLocator("iframe").locator("(//button[text()='Live']/following-sibling::button)[1]").click()

                let text = await clipboard.read();
                console.log('From clipboard: ' + text);
                await page.frameLocator('iframe').locator("//div[contains(@class,'MuiOutlinedInput-root MuiInputBase-root')]//input[1]").dblclick()
                 
                await page.frameLocator('iframe').locator("text=Copy Link").click()


                url = await clipboard.read();
                console.log('From clipboard URL: ' + url);
                // const newPage = await page.context().newPage();
                // await newPage.goto(url);
                // console.log("Title from new tab: " + await newPage.title());

        });
})
test("Open url from clipboard", async () => {
        const browser = await chromium.launch({ headless: false });
        const context = await browser.newContext({ ...devices["Pixel 5"], permissions: ["camera"] });
        const page = await context.newPage();
        await page.goto(url);
        console.log(await page.title());

        await page.click("//p[text()='USER PROFILE']");

        await page.waitForTimeout(5000)

        
        await page.click("//p[text()='RULES']");
        await page.waitForTimeout(6000)

        
        await page.click("//p[text()='HOW TO PLAY']");
        await page.waitForTimeout(6000)


        
        await page.click("//button[@value='prize']");

        await page.waitForTimeout(5000)

        await page.click("//p[text()='HOME']");
        await page.waitForTimeout(20000)

})