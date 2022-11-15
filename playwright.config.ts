import { devices, PlaywrightTestConfig } from '@playwright/test';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const config: PlaywrightTestConfig = {

    


    workers: 1,
    fullyParallel: !true,
    // projects: [
    //     // {
    //     //     name: 'chromium',
    //     //     use: { ...devices['Desktop Chrome'] },
 
    //     // },
    //     // {
    //     //     name: 'Pixel',
    //     //     use: { ...devices['Pixel 5'] },
    //     // },
    //     // {
    //     //     name: 'firefox',
    //     //     use: { ...devices['Desktop Firefox'] },
    //     // },
    //     {
    //         name: 'webkit',
    //         use: { ...devices['Desktop Safari'] },
    //     },
    
    // ],
    // globalSetup: require.resolve('./global-setup'),
    use: {
        actionTimeout: 10 * 6000,
        navigationTimeout: 30 * 7000,
        // Tell all tests to load signed-in state from 'storageState.json'.
        // storageState: 'storageState.json',
        viewport: null,
        headless: process.env.CI ? false : false,
        browserName: "chromium",
        screenshot: process.env.CI ? "off" :"on",
        video: process.env.CI ? "off" :"off",
        trace: process.env.CI ? "off" :"on",
        // baseURL: "https://qa-2.testingdxp.com/",

        // permissions: ["camera"]

        

        baseURL: "https://qa-1.testingdxp.com/",
        //
        // baseURL: "https://qa-2.testingdxp.com/",
        // baseURL: "https://garrett.testingdxp.com/",
        // baseURL: "https://dev107189.service-now.com/api/now/table/incident",
        // extraHTTPHeaders: {
        //     "Authorization": "Basic YWRtaW46U0NxN2pDb2tDbFI4"
        // }
        // baseURL: "",
        // contextOptions: {
        //     permissions: ["clipboard-read"]
        // }
        // ,
        // contextOptions: {
        //         permissions: ["clipboard-read"]
        //     },

        launchOptions: {
            args: ["--start-maximized"],
        },
        
        // permissions: ["camera"],
        permissions: ["microphone","camera"],

            // logger: {
            //     isEnabled: (name, severity) => true,
            //     log: (name, severity, message, args) => console.log(name, severity)
            // }
        
    },
    expect: {
        /**
         * Maximum time expect() should wait for the condition to be met.
         * For example in `await expect(locator).toHaveText();`
         */
     },
    
    timeout: 1000000,
   

    forbidOnly: !!process.env.CI,
    /* Retry on CI only */
    
    /* Opt out of parallel tests on CI. */
    // workers: process.env.CI ? 1 : undefined,
    /* Reporter to use. See https://playwright.dev/docs/test-reporters */
    
    /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
    // grep: [new RegExp("@smoke"), new RegExp("@reg")],
    testMatch: [
        "001Login.test.ts",
        // "002MobileDesign.test.ts",
        // "003Language.test.ts",
        // "004Menu.test.ts",
        // "005SignUp.test.ts",
        // "006GlobalPrizing.test.ts",
        // "007PrizeDrop.test.ts",
        // "008TugOfWar.test.ts",
        // "009LiveWall.test.ts",
        // // "009LiveWallVIPSection.test.ts",
        // "010Arcade.test.ts",
        // "011AddNewExperiences.test.ts",            
                          
                
               
                ],
    retries: 0,
    // reporter: "./customReport/myReporter.ts", 
    reporter: process.env.CI ? [["junit", {
        outputFile: "results.xml"
      }]] : [["json", {
        outputFile: "report.json"
      }], ["html", {
        open: "never"
      }]],
    // globalTeardown: './helper/globalsetup.ts'

 /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },

  
  
}


export default config;