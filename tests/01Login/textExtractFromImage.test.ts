
import { test, expect } from "@playwright/test";
const Tesseract = require('tesseract.js');

test("Tesseract - Image to text", async ({ page }) => {

    await page.goto("/admin/#/sign-in");
    await page.waitForSelector("//h1[text()='Sign in']");
//     await page.click('#best_deal_div >> text=X', { force: true, delay: 2000 });
    const images = await page.$$("//p[text()='Sign in and start managing your Games!']");
    for await (let img of images) {
        const name = Date.now();
        await img.screenshot({ path: `${name}.png` });
        await convertToText(`${name}.png`)
    }
});

test.only("Tesseracts - Image to text", async ({ page }) => {

    await page.goto("/admin/#/sign-in");
    await page.waitForSelector("//h1[text()='Sign in']");
//     await page.click('#best_deal_div >> text=X', { force: true, delay: 2000 });
    const images = await page.$$("//button[text()='Login']");
    for await (let img of images) {
        const name = Date.now();
        await img.screenshot({ path: `login.png` });
        await convertToText(`login.png`)
    }
});

async function convertToText(name: string) {
    let imgText = await Tesseract.recognize(
        `./${name}`);   
    console.log(imgText.data.text);
    expect(await imgText.data.text).toMatchSnapshot('hero.txt');
    
}


test('example test', async ({ page }) => {
    await page.goto('https://playwright.dev');
    expect(await page.textContent("//h1[@class='hero__title heroTitle_ohkl']")).toMatchSnapshot('hero.txt');
  });


  test('example tests', async ({ page }) => {
    await page.goto("/admin/#/sign-in");
    await page.waitForSelector("//h1[text()='Sign in']");
    expect(await page.textContent("//p[text()='Sign in and start managing your Games!']")).toMatchSnapshot('hero.txt');
  });