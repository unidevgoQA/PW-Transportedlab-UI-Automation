import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testDir: './tests',
  testMatch: [
    "001Login.test.ts",
    "002MobileDesign.test.ts",
    "003Language.test.ts",
    "004Menu.test.ts",
    "005SignUp.test.ts",
    "006GlobalPrizing.test.ts",
    "007PrizeDrop.test.ts",
    "008TugOfWar.test.ts",
    "009LiveWall.test.ts",    
    "010Arcade.test.ts",
    "011AddNewExperiences.test.ts",  
    
  ],
  timeout: 1 * 30 * 10000,
  expect: {
    timeout: 6000
  },
  fullyParallel: !true,
  retries: process.env.CI ? 1 : 0,
  workers: process.env.CI ? 1 : 1,

  reporter: process.env.CI ? [["junit", {
    outputFile: "results.xml"
  }]] : [["json", {
    outputFile: "report.json"
  }], ["html", {
    open: "never"
  }]],

  use: {
    actionTimeout: 10 * 6000,
    navigationTimeout: 30 * 7000,
    headless: process.env.CI ? true : false,
    baseURL: "https://qa-1.testingdxp.com/",

    launchOptions: {
      args: ["--start-maximized"],
  },
  
  // permissions: ["camera"],
  permissions: ["microphone","camera"],

    // actionTimeout: 2 * 60 * 1000,
    trace: process.env.CI ? "off" : "on",
    video: process.env.CI ? "off" : "on",
    screenshot: process.env.CI ? "off" : "on",
  },

  
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    // {
    //   name: 'firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //   },
    // }
  ]
};

export default config;