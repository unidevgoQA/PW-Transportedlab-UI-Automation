// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://garrett.testingdxp.com//admin/#/sign-in');
  await page.locator("input[type='text']").fill('garrett');
  await page.locator("input[type='password']").fill('LFQIISIc');
  await page.locator("button:has-text('Login')").click();
  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;