import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
var date = new Date();
var ReportDate =date.getFullYear() + ("0" + (date.getMonth() + 1)).slice(-2) + ("0" + date.getDate()).slice(-2) + ("0" + date.getHours() ).slice(-2) + ("0" + date.getMinutes()).slice(-2) + ("0" + date.getSeconds()).slice(-2);

const config: PlaywrightTestConfig = {
  // testDir: './tests',
  testMatch: [
    // "001Login.test.ts",
    "002MobileDesign.test.ts",
    // "003Language.test.ts",
    // "004Menu.test.ts",
    // "005SignUp.test.ts",
    // "006GlobalPrizing.test.ts",
    // "007PrizeDrop.test.ts",
    // "008TugOfWar.test.ts",
    // "009LiveWall.test.ts",    
    // "010Arcade.test.ts",
    // "011AddNewExperiences.test.ts",  
    // "012Trivia.test.ts"
    
  ],
  timeout: 1 * 30 * 10000,
  expect: {
    timeout: 6000
    
  },
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 1,

  // reporter: process.env.CI ? [["junit", {
  //   outputFile: "results.xml"
  // }]] : [["json", {
  //   outputFile: "report.json"
  // }], ["html", {
  //   open: "never"
  // }]],

// reporter: [ ['html', { outputFolder: './playwright-report/'+ ReportDate}]],



  reporter: [["html", {
    open: "never"
  }], ["allure-playwright"], ['./My-Reporter.js']],
  
  globalTeardown: require.resolve("./mailer.js"),



  use: {
    actionTimeout: 10 * 6000,
    navigationTimeout: 30 * 7000,
    baseURL: "https://qa-1.testingdxp.com/",

    launchOptions: {
      // args: ["--start-maximized"],
      slowMo: 100
      
  },
  permissions: ["microphone","camera"],
    headless: process.env.CI ? true : false,
    browserName: 'chromium',
    channel: 'chrome',
    viewport: { width: 1700, height: 920 },
    ignoreHTTPSErrors: true,
    
  
  // permissions: ["camera"],
  

    // actionTimeout: 2 * 60 * 1000,
    trace: process.env.CI ? "off" : "off",
    video: process.env.CI ? "off" : "off",
    screenshot: process.env.CI ? "off" : "on",
  },



  
  // projects: [
  //   {
  //     name: 'chromium',
  //     use: {
  //       ...devices['Desktop Chrome'],
  //     },
  //   },

  //   // {
  //   //   name: 'firefox',
  //   //   use: {
  //   //     ...devices['Desktop Firefox'],
  //   //   },
  //   // }
  // ]
};

export default config;
