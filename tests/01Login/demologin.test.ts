import { test } from "@playwright/test";

test("canva login", async ({ browser }) => {

    const context = await browser.newContext({
        storageState: "./auth.json"
    })
    const page = await context.newPage();
    const ctxt = page.context();
    ctxt.storageState()
    await page.goto("https://github.com/sabbir-of");
    await page.waitForTimeout(5000);
})