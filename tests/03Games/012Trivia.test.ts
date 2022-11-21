import test, { expect } from "@fixtures/basePages";
import { devices, chromium } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
// import clipboard from 'clipboardy';
const clipboard = require("clipboardy");
var url: any;

var text: string;





test("00PD-001 | Add New Configuration", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await page.goto('/admin/#/sign-in')
      await loginPage.login(data.username, data.password)
      const title = await page.title();
      expect(title).toBe('DXP Admin')


      await triviaPage.clickTriviaSection()
      await triviaPage.verifyConfigurationsText()






})
