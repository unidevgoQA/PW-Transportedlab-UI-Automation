import test, { expect } from "@fixtures/basePages";
import { devices, chromium, Page } from "@playwright/test";
import * as data from "@testData/login.cred.json"
import Env from "@utils/environment";
import { readFileSync } from 'fs'
// import clipboard from 'clipboardy';
import triviaMobilePage from '../../pages/MobileGamesPage/trivia_mobile_game.page';
import guesstheScoreMobilePage from '../../pages/MobileGamesPage/guessthescore_mobile_game.page';
import guesstheScorePage from '../../pages/gamesPage/guesstheScore.page';
const clipboard = require("clipboardy");
var url: any;

var text: string;


test("012TV-001 | Validate add new configuration name.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Now add new Configrations name ",async()=>{
            await triviaPage.typeConfigurationName(triviaPage.getRandomName())
            await triviaPage.clickAddBtn()
      })


      
      })



test("012TV-002 | Validate Configurations Text Visibility.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Now verify Configrations text",async()=>{
            await triviaPage.verifyConfigurationsText()
      })


      
      })
test("012TV-003 | Validate Plus Button Is Visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

            await test.step("Login Admin", async () => {
                  await page.goto('/admin/#/sign-in')
                  await loginPage.login(data.username, data.password)
                  const title = await page.title();
                  expect(title).toBe('DXP Admin')
                  const screenshot = await page.screenshot();
                  await testInfo.attach("login screenshot", {
                          contentType: "image/png",
                          body: screenshot
                  })
            })
      
            await test.step("Click On The Trivia Section", async () => {
                  await triviaPage.clickTriviaSection()
      
            })
            await test.step("Now validate plus button",async()=>{
                  await triviaPage.clickAddNewConfigPlusBtn()
            })
      
      
            
})
test("012TV-004 | Validate Add Button is Visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

                  await test.step("Login Admin", async () => {
                        await page.goto('/admin/#/sign-in')
                        await loginPage.login(data.username, data.password)
                        const title = await page.title();
                        expect(title).toBe('DXP Admin')
                        const screenshot = await page.screenshot();
                        await testInfo.attach("login screenshot", {
                                contentType: "image/png",
                                body: screenshot
                        })
                  })
            
                  await test.step("Click On The Trivia Section", async () => {
                        await triviaPage.clickTriviaSection()
            
                  })
                  await test.step("Click add configuration plus button", async () => {
                        await triviaPage.clickAddNewConfigPlusBtn()
            
                  })
                  await test.step("Validate add configration button is working",async()=>{
                        await triviaPage.clickAddConfigrationBtn()
                  })
            
            
                  
})
test("012TV-005 | Validate New Configuration text and Cancel button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Click add configuration plus button", async () => {
            await triviaPage.clickAddNewConfigPlusBtn()
            await page.waitForTimeout(2000)

      })

      await test.step("Now verify New Configuration is visible",async()=>{
            await triviaPage.verifyNewConfigrationText()
      })
      // await test.step("Validate cancel configration button is working",async()=>{
      //       await triviaPage.clickCancelConfigrationBtn()
      // })


      
})

test("012TV-006 | Validate add button does not work without data.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Click add configuration plus button", async () => {
            await triviaPage.clickAddNewConfigPlusBtn()

      })

      await test.step("Now click add button",async()=>{
            await triviaPage.clickAddConfigrationBtn()
      })
      await test.step("Validate add button does not work without data",async()=>{
           
            await triviaPage.verifyerrorMessageIfCongigrationfieldIsBlank()
            await triviaPage.clickOkBtn()
            await triviaPage.clickCancelConfigrationBtn()
      })


      
})
test("012TV-007 | Validate mobile link QR code is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Validate error message if round is  not created.",async()=>{
            await page.waitForTimeout(1000)
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.vreifymobileLinkQRCode()
            await triviaPage.clickMobileLinkPopupClose()
      })

    


      
})
test("012TV-008 | Validate mobile link button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Validate mobile link button is visible", async () => {
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.clickMobileLinkPopupClose()
            

      })

    


      
})
test("012TV-009 | Validate mobile link button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Validate mobile link button is working", async () => {
            await triviaPage.clickMobileLinkBtn()
            //await triviaPage.clickMobileLinkPopupClose()
            

      })


    


      
})
test("012TV-010 | Validate mobile link text is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Validate mobile link button is working", async () => {
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.verifyMobileLinkText()
            await triviaPage.clickMobileLinkPopupClose()

      })

      
})
test("012TV-011 | Validate Open link button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Now Add new configuration for validate Open link  is successfully open on mobile screen",async()=>{
            await triviaPage.clickAddNewConfigPlusBtn()
            await  triviaPage.typeConfigurationName(triviaPage.getRandomName())
            await triviaPage.clickAddConfigrationBtn()

      })

      await test.step("click mobile link  button is working", async () => {
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.verifyMobileLinkText()

      })
      let newTab=null;
       let triviamobilepage : triviaMobilePage
    await test.step("now open the game in mobile view", async() =>{
   
            //now click on open button
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
            await triviaPage.clickMobileLinkPopupClose()
            await newTab.waitForTimeout(4000)
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail() 
            await triviamobilepage.typeAge()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            await newTab.waitForTimeout(4000)
            // const before = newTab.screenshot({ path: 'testData/before.png' , fullPage: true })
            //newTab.close()
      })


    


      
})
test("012TV-012 | Validate copy link successfully open on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("click mobile link copy button", async () => {
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.verifyMobileLinkText()
            //now click mobile link copy button
            await triviaPage.clickMobileLinkCopyBtn()
            await triviaPage.clickMobileLinkPopupClose()

      })
      let URL =''
      let triviamobilepage : triviaMobilePage
      await test.step("now copy the contents from system clipboard(URL Here)", async() =>{
                             URL = clipboard.readSync();
                             //console.log(URL);
                     })
       
            
      await test.step("Now open copy link on mobile",async()=>{
             triviamobilepage  = new triviaMobilePage(page)
             await triviamobilepage.GoTo(URL)
                     
            
             })
     

    await test.step("now open the game in mobile view", async() =>{
            await triviamobilepage.typeemail() 
            await  triviamobilepage.typephoneno()
            await triviamobilepage.typeAge()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            
      })


    


      
})
test("012TV-013 | Validate save QR code is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Validate mobile link button is working", async () => {
            await triviaPage.clickMobileLinkBtn()
            await triviaPage.verifyMobileLinkText()

      })
      await test.step("Now validate save QR code button is working",async()=>{
            await triviaPage.validateSaveQRCode()
            await page.waitForTimeout(1000)
            await triviaPage.clickMobileLinkPopupClose()
      })


    


      
})
test("012TV-014 | Validate Copy QR code is working.", async ({ loginPage, functions,browser, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Validate mobile link button is working", async () => {
            await triviaPage.clickMobileLinkBtn()
           // await triviaPage.verifyMobileLinkText()

      })

      await test.step("Now validate Copy QR code is working",async()=>{
               await triviaPage.clickCopyQRCodeBtn()
                const newtab = browser.contexts()[0].newPage();
                (await newtab).goto('https://qr-code-scanner.net/')
                await (await newtab).locator('//a[@title="Scan QR code from paste"]').click()
                await (await newtab).waitForTimeout(2000)
                await (await newtab).locator('//button[text()="Paste"]').click()
                await (await newtab).waitForTimeout(2000)
                await (await newtab).locator("//div[@id='qr-content']//a[1]").click()
                await (await newtab).waitForTimeout(2000)

      })


    


      
})
test("012TV-015 | Validate error message if round is  not created.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Now click start button", async () => {
            await triviaPage.clickStartBtn()
            await page.waitForTimeout(2000)
            await triviaPage.clickOkBtn()

      })
      await test.step("Validate error message if round is  not created.",async()=>{
            await page.waitForTimeout(1000)
            await triviaPage.errorMessageIfRoundIsNotCreated()
            await triviaPage.clickOkBtn()
      })

    


      
})
test("012TV-016 | Validate  add Round name.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate add Round name is working",async()=>{
            await triviaPage.clickAddRoundBtn()
            await triviaPage.inputAddRoundName(triviaPage.getRandomNameForRoundName())
            await triviaPage.clickSaveBtn()
           
    
    })
      
})
test("012TV-015 | Validate  Edit Round  is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate Edit Round is working",async()=>{
            await triviaPage.clickRoundNameThreeDot()
            await triviaPage.ClickeditRoundName()
            await triviaPage.EditRoundName()
            await triviaPage.InputEditRoundName()
            await triviaPage.clickSaveBtn()
           
    
    })
      
})
test("012TV-056 | Validate  EDIT Round and Round Name text is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate EDIT ROUND and Round Name  text is visible",async()=>{
            await triviaPage.clickRoundNameThreeDot()
            await triviaPage.ClickeditRoundName()
            await triviaPage.verifyEDITROUNDText()
            await triviaPage.verifyRoundNameText()
            await triviaPage.clickEditRoundNameCancelBtn()
           
    
    })
      
})
test("012TV-057 | Validate round changing checkbox is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate round changing checkbox is visible.",async()=>{
            await triviaPage.ClickRoundChangingCheckbox()
            await page.waitForTimeout(2000)
            
           
    
    })
      
})
test("012TV-058 | Validate Output  button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate output button is visible",async()=>{
            await triviaPage.clickOutputBtn()
            await triviaPage.verifyOutputScreenLinkText()
            await triviaPage.clickOutputScreenLinkCloseBtn()
            await page.waitForTimeout(2000)
    })
      
})
test("012TV-059 | Validate mobile link output button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("click ouput button",async()=>{
            await triviaPage.clickOutputBtn()
            await triviaPage.verifyOutputScreenLinkText()
            //await triviaPage.clickOutputScreenLinkOpenBtn()
            await page.waitForTimeout(2000)
            
           
    
    })
    let newTab = null
    let triviamobilepage : triviaMobilePage
    await test.step("Validate output screen link button is working",async()=>{
     // 
     newTab = await triviaPage.clickOutputScreenLinkOpenBtn()
     triviamobilepage = new triviaMobilePage(newTab)
      await newTab.waitForTimeout(2000)
      
     

})
      
})
test("012TV-060 | Validate mobile link copy button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("click ouput button",async()=>{
            await triviaPage.clickOutputBtn()
            await triviaPage.verifyOutputScreenLinkText()
            //await triviaPage.clickOutputScreenLinkOpenBtn()
            await page.waitForTimeout(2000)
            
           
    
    })
    await test.step("Now click Output screen link copy bytton",async()=>{
       await triviaPage.clickOutputScreenLinkCopyBtn()
    })

    let URL = ''
    await test.step("now copy the contents from system clipboard(URL Here)", async() =>{
      URL = clipboard.readSync();
      //console.log(URL);
})
    await test.step('now open new page with copied URL',async()=>{
      const triviamobilepage = new triviaMobilePage(page)
      await triviamobilepage.GoToforOutpurScreenLink(URL)
      await page.waitForTimeout(2000) 
})
      
})

test("012TV-061 |validate set-up tab is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate set-up tab",async()=>{
            await triviaPage.verifySetUpText()
            await triviaPage.verifyCountDownStageText()
            await triviaPage.verifyQuestionText()
            await triviaPage.verifyAnswerText()
            await triviaPage.verifyLeaderboardText()
    })
      
})
test("012TV-062 |validate Game Mode tab is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate Game Mode Tab",async()=>{
            await triviaPage.verifyGameModeText()
            await triviaPage.verifyManualText()
            await triviaPage.verifyAutomaticText()
            await triviaPage.verifyOnDemandText()
    })
      
})
test("012TV-063 |validate Automatic Timers tab is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate Automatic Timers Tab is visible",async()=>{
            await triviaPage.verifyAutomaticTimersText()
            await triviaPage.verifyinputCountdownTimersfield()
            //await triviaPage.verifyLeaderboardDurationText()
            await triviaPage.verifyinputLeaderboardDurationfield()
            
    })
      
})
test("012TV-064 |validate Points Allocation tab is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate Points Allocation tab is visible",async()=>{
          await triviaPage.verifyPointsAllocationText()
          await triviaPage.verifyinputPointsfield()
          await triviaPage.verifySelectPointsFirstValu()
          await triviaPage.verifySelectPointsSecondValu()
          await triviaPage.verifySelectPointsThirdValu()
          await triviaPage.verifySelectPointsFourthValu()            
    })
      
})
test("012TV-065 |validate CountdownText all Radio button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate CountdownText all Radio button is visible",async()=>{
          await triviaPage.verifyCountdowntextText()
          await triviaPage.verifyCountdowntextRadio_Time()
          await triviaPage.verifyCountdowntextRadio_Points()
                    
    })
      
})
test("012TV-066 |validate CountdownType all Radio button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate CountdownType all Radio button is visible",async()=>{
          await triviaPage.verifyCountdownTypeText()
          await triviaPage.verifyCountdownTypeRadio_Circular()
          await triviaPage.verifyCountdownTypeRadio_Lenear()
                    
    })
      
})
test("012TV-067 |validate Question Sequence tab is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate Question Sequence tab is visible",async()=>{
          await triviaPage.verifyQuestionSequenceText()
          await triviaPage.verifyQuestionSequenceRandomBtn()
          await triviaPage.verifyQuestionsequenceSequenceBtn()
         
                    
    })
      
})
test("012TV-068 |validate Leaderboard tab is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("validate Question Sequence tab is visible",async()=>{
          //await triviaPage.verifyQuestionSequenceText()
          await triviaPage.verifyLeaderboardEventBtn()
          await triviaPage.verifyLeaderboardRoundBtn()              
    })
      
})
test("012TV-069 |validate Error message if countdown stage more than 99 second inputs in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate error message in countdown stage",async()=>{
          //await triviaPage.verifyQuestionSequenceText()
          await triviaPage.inputCountDownStage()
          await page.waitForTimeout(2000)
          await triviaPage.verifyErrorMessageInCountdownStage()           
    })
      
})
test("012TV-070 |validate Error message if Leader board  inputs more than 99 second  in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate error message in leader board",async()=>{
          //await triviaPage.verifyQuestionSequenceText()
          await triviaPage.inputLeaderBoardDuration()
          await page.waitForTimeout(2000)
          await triviaPage.verifyErrorMessageInLeaderboardDuration()           
    })
      
})
test("012TV-071 |validate Error message if Question No stage  inputs more than 99 second  in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate error message in question no stage",async()=>{
          //await triviaPage.verifyQuestionSequenceText()
          await triviaPage.inputQuestionNoStage()
          await page.waitForTimeout(2000)
          await triviaPage.verifyErrorMessageInQuestionNoStage()          
    })
      
})
test("012TV-072 |validate Error message if Question Reveal inputs more than 99 second  in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate error message in question reveal",async()=>{
          //await triviaPage.verifyQuestionSequenceText()
          await triviaPage.inputQuestionReveal()
          await page.waitForTimeout(2000)
          await triviaPage.verifyErrorMessageInQuestionReveal()         
    })
      
})
test("012TV-073 |validate Error message if points allocation points field inputs more than 9999 second  in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate error message in points Allocation poins field",async()=>{
          //await triviaPage.verifyQuestionSequenceText()
          await triviaPage.inputPointAllocationPointsfield()
          await page.waitForTimeout(2000)
          await triviaPage.verifyErrorMessageInPointsAllocation()        
    })
      
})
test("012TV-074 |validate Error message if points allocation seconds field inputs more than 9999 second  in round settings.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Click control panel section", async () => {
           await triviaPage.clickControlPanelSection()
           

      })
      await test.step("Validate error message in points Allocation seconds field",async()=>{
          //await triviaPage.verifyQuestionSequenceText()
          await triviaPage.inputPointAllocationSecondfield()
          await page.waitForTimeout(2000)
          await triviaPage.verifyErrorMessageInPointsAllocation()        
    })
      
})
test("012TV-075 | Validate  export error message in add round section if question didn't add.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("Validate Export error message if question didn't add",async()=>{
            await triviaPage.clickExportBtn()
            await triviaPage.clickConfirmExportBtn()
            await triviaPage.verifyFailedExportMessage()
            await triviaPage.verifyErrorMessageExportBtnIfQuestionisnotAdd()
            await triviaPage.clickOkBtn()
    
    })
      
})
test("012TV-076 | Validate  Add question button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("Validate Add question button is working",async()=>{
            await triviaPage.clickAddQuestionBtn()
            
    
    })
      
})
test("012TV-077 | Validate add question and Custom Question type text is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("Verify add question and Custom Question type text is visible.",async()=>{
            await triviaPage.clickAddQuestionBtn()
            await triviaPage.verifyAddQuestionText()
            await triviaPage.verifyCustomQuestionTypetext()
            await triviaPage.clickAddQuestionClosBtn()
            
    
    })
      
})
test("012TV-078 | Validate Question type Radio button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("Verify add question and Custom Question type text is visible.",async()=>{
            await triviaPage.clickAddQuestionBtn()
            await triviaPage.clickFreeResponseRadioBtn()
            await triviaPage.clickMultipleChoiceRadioBtn()
            await triviaPage.clickAddQuestionClosBtn()
            
    
    })
      
})
test("012TV-079 | Validate Add media button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("Verify add question and Custom Question type text is visible.",async()=>{
          await triviaPage.clickAddMediaBtn()
          await triviaPage.verifyAddMediatext()
    })
      
})
test("012TV-080 | Validate mobile media image and video radio button is visible in add media section.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("click mobile media button.",async()=>{
          await triviaPage.clickAddMediaBtn()
          await triviaPage.verifyAddMediatext()
    })
    await test.step("Verify mobile media image and video radio button is visible",async()=>{
      await triviaPage.verifyMobileMediatext()
      await triviaPage.clickMobileMediaImageRadioBtn()
      await triviaPage.clickMobileMediaVideoRadioBtn()
})
      
})
test("012TV-081 | Validate Mainboard media image and video radio button is visible in add media section.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("click mobile media button.",async()=>{
          await triviaPage.clickAddMediaBtn()
          await triviaPage.verifyAddMediatext()
    })
    await test.step("Verify add question and Custom Question type text is visible.",async()=>{
      await triviaPage.verifyMainboardMediatext()
      await triviaPage.clickMainboardmediaVideoRadioBtn()
      await triviaPage.clickMainboardmediaVideoRadioBtn()
})
      
})
test("012TV-082 | Validate free question type successfully add.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("click add question button",async()=>{
         await triviaPage.clickAddQuestionBtn()
    })
    await test.step("click free response radio button",async()=>{
      await triviaPage.clickFreeResponseRadioBtn()
 })
 await test.step("now type question",async()=>{
      await triviaPage.inputAddQuestion()
 })
 await test.step("now type correct answer for add question",async()=>{
      await triviaPage.clickAddCorrectAnswerBtn()
      await triviaPage.inputCorrectAnswer()
      await triviaPage.clikCorrectAnswerSaveBtn()
      const ele = page.frameLocator('iframe').locator("//button[text()='Ok']")
      if( ele!= null){
        ele.click()
        await triviaPage.clikCorrectAnswerSaveBtn()
      }
 })
 await test.step("now type First acctable answer for add question",async()=>{
      await triviaPage.clickFirstAddAcctableAnswerBtn()
      await triviaPage.inputFirstAcctableAnswer()
      await triviaPage.clikAcctableAnswerSaveBtn()
      const ele = page.frameLocator('iframe').locator("//button[text()='Ok']")
      if( ele!= null){
        ele.click()
        await triviaPage.clikAcctableAnswerSaveBtn()
      }
 })
 await test.step("now type Second acctable answer for add question",async()=>{
      await triviaPage.clickSecondAddAcctableAnswerBtn()
      await triviaPage.inputSecondAcctableAnswer()
      await triviaPage.clikAcctableAnswerSaveBtn()
      const ele = page.frameLocator('iframe').locator("//button[text()='Ok']")
      if( ele!= null){
        ele.click()
        await triviaPage.clikAcctableAnswerSaveBtn()
      }
 })
 await test.step("now click add question save button",async()=>{
      await page.waitForTimeout(1000)
      await triviaPage.clickAddQuestionSaveBtn()
 })
   
})
test("012TV-083 | Validate multiple choice question type successfully add.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("click control panel section", async () => {
           await triviaPage.clickControlPanelSection()

      })
      await test.step("click add question button",async()=>{
         await triviaPage.clickAddQuestionBtn()
    })
    await test.step("click multiple choise  radio button",async()=>{
      await triviaPage.clickMultipleChoiceRadioBtn()
 })
 await test.step("Now type question",async()=>{
      await triviaPage.inputAddQuestion()
 })
 await test.step("Now type first answer for multiple choice question",async()=>{
      await triviaPage.clickAddAnswerBtn()
      await triviaPage.inputFirstMultipleQuestionAnswer()
      await triviaPage.clickAnswerSaveBtn()
      const ele = page.frameLocator('iframe').locator("//button[text()='Ok']")
      if( ele!= null){
        ele.click()
        await triviaPage.clickAnswerSaveBtn()
      }
 })
 await test.step("Now type Second answer for multiple choice question",async()=>{
      await triviaPage.clickAddAnswerBtn()
      await triviaPage.inputSecondMultipleQuestionAnswer()
      await triviaPage.clickAnswerSaveBtn()
      const ele = page.frameLocator('iframe').locator("//button[text()='Ok']")
      if( ele!= null){
        ele.click()
        await triviaPage.clickAnswerSaveBtn()
      }
 })
 await test.step("now click add question save button",async()=>{
      await page.waitForTimeout(1000)
      await triviaPage.clickAddQuestionSaveBtn()
 })
   
})
test("012TV-084 | Validate Start/Live button is visible.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Click Control panel section",async()=>{
            await triviaPage.clickControlPanelSection()
           
      })
      await test.step("validate start button",async()=>{
            await page.waitForTimeout(1000)
            await triviaPage.clickStartBtn()
            await page.waitForTimeout(1000)
            await triviaPage.clickOkBtn()
      })
      await test.step("Validate Live button",async()=>{
            await page.waitForTimeout(1000)
            await triviaPage.clickLiveBtn()
            await page.waitForTimeout(1000)
            await triviaPage.clickOkBtn()
      })
   
})
test("012TV-085 | Validate export button is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Click Control panel",async()=>{
            await triviaPage.clickControlPanelSection()
      })
    
      await test.step("Click add question button", async () => {
           
           await triviaPage.clickExportBtn()
           await triviaPage.validateExportBtn()
           await page.waitForTimeout(1000)
      })
      
})
test("012TV-086 | Validate input RGB Background color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
           //await triviaPage.clickGameDesign()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
            
    
    })
    await test.step("Now validate input background color is working",async()=>{
      await triviaPage.verifyMobileBackgroundTextInColorSection()
      await triviaPage.clickBackgroundColorBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-087 | Validate  Background color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
    
      // await test.step("Clik start button", async () => {
      //      await triviaPage.clickStartBtn()
      //      await triviaPage.clickOkBtn()
      // })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify background color",async()=>{
                  //await page.waitForTimeout(5000)
                  await triviamobilepage.verifyBackgroundcolor()
            })
            await test.step("Now click clear all button in color section",async()=>{
                  await triviaPage.clickMobileLinkPopupClose()
                  await triviaPage.clickgamedesignSection()
                  await triviaPage.clickColorSectionBtn()
                  await triviaPage.clickClearAllBtn()
            })
      
})
test("012TV-088 | Validate input RGB General/Button text color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickgamedesignSection()
    
    })
    await test.step("Now validate input background color is working",async()=>{
      await triviaPage.verifyGeneralOrButtonText()
      await triviaPage.clickGeneralButtonTextColorBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-089 | Validate  General/Button text successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
    
      await test.step("Clik start button", async () => {
           await triviaPage.clickStartBtn()
           await triviaPage.clickOkBtn()
      })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify General/Button text color on mobile screen",async()=>{
                  await page.waitForTimeout(5000)
                  await triviamobilepage.verifyGeneralButtonTextcolor()
            })
            await test.step("Now click clear all button in color section",async()=>{
                  await triviaPage.clickMobileLinkPopupClose()
                  await triviaPage.clickgamedesignSection()
                  await triviaPage.clickColorSectionBtn()
                  await triviaPage.clickClearAllBtn()
            })
      
})
test("012TV-090 | Validate input RGB Button background color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
            
    
    })
    await test.step("Now validate input background color is working",async()=>{
      await triviaPage.verifyButtonBackgroundText()
      await triviaPage.clickButtonBackgrounColorBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-091 | Validate Button  Background color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
    
      await test.step("Clik start button", async () => {
           await triviaPage.clickStartBtn()
           await triviaPage.clickOkBtn()
           await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify General/Button text color on mobile screen",async()=>{
                  await page.waitForTimeout(5000)
                  await triviamobilepage.verifyButtonBackgroundcolor()
            })
            await test.step("Now click clear all button in color section",async()=>{
                  await triviaPage.clickMobileLinkPopupClose()
                  await triviaPage.clickgamedesignSection()
                  await triviaPage.clickColorSectionBtn()
                  await triviaPage.clickClearAllBtn()
            })
      
})
test("012TV-092 | Validate input RGB Question text color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
            
    
    })
    await test.step("Now validate input background color is working",async()=>{
      await triviaPage.verifyQuestionText()
      await triviaPage.clickQuestionTextBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-093 | Validate Question text color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
    
      await test.step("Clik start button", async () => {
           await triviaPage.clickStartBtn()
           await triviaPage.clickOkBtn()
           await page.waitForTimeout(1000)
           await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify General/Button text color on mobile screen",async()=>{
                  await page.waitForTimeout(5000)
                  await triviamobilepage.verifyQuestionTextColor()
            })
            await test.step("Now click clear all button in color section",async()=>{
                  await triviaPage.clickMobileLinkPopupClose()
                  await triviaPage.clickgamedesignSection()
                  await triviaPage.clickColorSectionBtn()
                  await triviaPage.clickClearAllBtn()
            })
      
})
test("012TV-094 | Validate input RGB Question background color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            
    
    })
    await test.step("Now validate input background color is working",async()=>{
      await triviaPage.verifyQuestionBackgroundText()
      await triviaPage.clickQuestionBackgroundBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-095 | Validate Question Background color successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
    
      await test.step("Clik start button", async () => {
           await triviaPage.clickStartBtn()
           await page.waitForTimeout(2000)
           await triviaPage.clickOkBtn()
           await triviaPage.clickMOveToNextBtn()
      })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify General/Button text color on mobile screen",async()=>{
                  await page.waitForTimeout(5000)
                  await triviamobilepage.verifyQuestionBackgroundColor()
            })
            await test.step("Now click clear all button in color section",async()=>{
                  await triviaPage.clickMobileLinkPopupClose()
                  await triviaPage.clickgamedesignSection()
                  await triviaPage.clickColorSectionBtn()
                  await triviaPage.clickClearAllBtn()
            })
      
})
test("012TV-096 | Validate input RGB Answer text color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
            
    
    })
    await test.step("Now validate input Answer text color is working",async()=>{
      await triviaPage.verifyAnswerText()
      await triviaPage.clickAnswerTextBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-097 | Validate input RGB answer background color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
    })
    await test.step("Now validate input answer background color is working",async()=>{
      await triviaPage.verifyAnswerBackgroundText()
      await triviaPage.clickAnswerBackgroundBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-098 | Validate input RGB question frame color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
    })
    await test.step("Now validate input question frame color is working",async()=>{
      await triviaPage.verifyQuestionFrameText()
      await triviaPage.clickQuestionFrameBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-099 | Validate input RGB answer frame color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
    })
    await test.step("Now validate input answer frame color is working",async()=>{
      await triviaPage.verifyAnswerFrameText()
      await triviaPage.clickAnswerFrameBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-0100 | Validate input RGB selected answer color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
    })
    await test.step("Now validate input selected answer color is working",async()=>{
      await triviaPage.verifySelectedAnswerText()
      await triviaPage.clickSelectedAnswerColorBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-0101 | Validate input RGB correct answer color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
    })
    await test.step("Now validate input correct answer color is working",async()=>{
      await triviaPage.verifyCorrectAnswerText()
      await triviaPage.clickCorrectAnswerColorBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-0102 | Validate input RGB incorrect answer color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
    })
    await test.step("Now validate input incorrect answer color is working",async()=>{
      await triviaPage.verifyIncorrectAnswerText()
      await triviaPage.clickIncorrectAnswerColorBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-0103 | Validate input RGB Leaderboard text color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            await page.waitForTimeout(2000)
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
    })
    await test.step("Now validate input leaderboard text color is working",async()=>{
      await triviaPage.verifyLeaderboardtextTextInColorSection()
      await triviaPage.clickLeaderboardTextColorBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-0104 | Validate input RGB Leaderboard background color is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {
      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
            //await page.waitForTimeout(2000)
            await triviaPage.verifygamedesignText()
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open color section",async()=>{
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()
    })
    await test.step("Now validate input Leaderboard background color is working",async()=>{
      await triviaPage.verifyLeaderboardBackgroundtextTextIncolorSection()
      await triviaPage.clickLeaderboardBackgroundColorBtn()
      await triviaPage.inputFirstRGB()
      await triviaPage.inputSecondRGB()
      await triviaPage.inputThirdRGB()
      await triviaPage.inputFourthRGB()
      await triviaPage.clickColorPickerSaveBtn()
    })
  
      
})
test("012TV-0105 | Validate  upload fonts is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
      await test.step("Click On The Game design", async () => {
            await triviaPage.clickgamedesignSection()
            await triviaPage.clickColorSectionBtn()
            await triviaPage.clickClearAllBtn()

      })
    
      await test.step("Open upload fonts section", async () => {
           await triviaPage.clickfontsSection()
           await triviaPage.verifyFontsText()

      })
      await test.step("Validate upload fonts is working",async()=>{
            await functions.fontUploadFunction()
            await triviaPage.clickUploadFontBtn()
            await page.waitForTimeout(2000)
            await triviaPage.verifySuccessfullyUploadFont()
    
    })
      
})
test("012TV-0106 | Validate  upload fonts successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
            await triviaPage.inputCountDownStage()
      })
    
      await test.step("Clik start button", async () => {
           await triviaPage.clickStartBtn()
           await triviaPage.clickOkBtn()
      })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
           
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify fornt",async()=>{
                  await page.waitForTimeout(5000)
                  await triviamobilepage.verifyFontAppliedSuccessfullyInMobileScreen()
                  await triviaPage.clickMobileLinkPopupClose()
                  await triviaPage.clickLiveBtn()
                  await page.waitForTimeout(1000)
                  await triviaPage.clickOkBtn()
            })
      
})
test("012TV-0107 | Validate  upload game title logo is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open upload and dialogs section",async()=>{
            await triviaPage.openUploadAndDialogsSection()
            
    
    })
    await test.step("Now delete trivia all uploads if already uploaded",async()=>{
      await triviaPage.deleteGameTitleLogo()
      await triviaPage.deleteTeamLogoBtn()
      await triviaPage.deleteSponsorLogoBtn()
      await triviaPage.deleteMainboardBackgroundBtn()
      await triviaPage.deleteMobileBackgroundBtn()
    })
    await test.step("Now validate game title logo upload",async()=>{
      await triviaPage.verifyGameTitleText()
      await functions.portraitBackgroundImageUploadHelper()
      await triviaPage.clickGametitleupload()
      await functions.fileUploadCropper()
      await page.waitForTimeout(3000)
    })
      
})
test("012TV-0108 | Validate  upload Game title logo successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
    
      await test.step("Clik start button", async () => {
           await triviaPage.clickStartBtn()
           await triviaPage.clickOkBtn()
      })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify fornt",async()=>{
                  await page.waitForTimeout(5000)
                  await triviamobilepage.clickHomeBtn()
                  await triviamobilepage.verifyGameTitleLogoAppliedSuccessfullyInMobileScreen()
            })
      
})
test("012TV-0109 | Validate  upload Team  logo image is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open upload and dialogs section",async()=>{
            await triviaPage.openUploadAndDialogsSection()
            
    
    })
    await test.step("Now validate game title logo upload",async()=>{
      //await triviaPage.deleteTeamLogoBtn()
      await triviaPage.verifyGameTitleText()
      await functions.logoImageUploadFunction()
      await triviaPage.clickTeamLogoUpload()
      //await triviaPage.click
      await functions.fileUploadCropper()
      await page.waitForTimeout(3000)
    })
      
})
test("012TV-0110 | Validate  upload Team  logo successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
    
      await test.step("Clik start button", async () => {
           await triviaPage.clickStartBtn()
           await triviaPage.clickOkBtn()
      })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify fornt",async()=>{
                  await page.waitForTimeout(5000)
                  await triviamobilepage.clickHomeBtn()
                  await triviamobilepage.verifyGameTitleLogoAppliedSuccessfullyInMobileScreen()
            })
      
})
test("012TV-0111 | Validate  upload Sponsor  logo image is working.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()

      })
    
      await test.step("Open upload fonts section", async () => {
           await triviaPage.clickgamedesignSection()
      })
      await test.step("Open upload and dialogs section",async()=>{
            await triviaPage.openUploadAndDialogsSection()
            
    
    })
    await test.step("Now validate game title logo upload",async()=>{
      await triviaPage.verifySponsorLogoText()
      await functions.logoImageUploadFunction()
      await triviaPage.clickSponsorLogoUpload()
      //await triviaPage.click
      await functions.fileUploadCropper()
      await page.waitForTimeout(3000)
    })
      
})
test("012TV-0112 | Validate  upload Sponsor  logo successfully reflection on mobile screen.", async ({ loginPage, functions, page, triviaPage }, testInfo) => {

      await test.step("Login Admin", async () => {
            await page.goto('/admin/#/sign-in')
            await loginPage.login(data.username, data.password)
            const title = await page.title();
            expect(title).toBe('DXP Admin')
            const screenshot = await page.screenshot();
            await testInfo.attach("login screenshot", {
                    contentType: "image/png",
                    body: screenshot
            })
      })

      await test.step("Click On The Trivia Section", async () => {
            await triviaPage.clickTriviaSection()
            await triviaPage.clickControlPanelSection()
      })
    
      await test.step("Clik start button", async () => {
           await triviaPage.clickStartBtn()
           await triviaPage.clickOkBtn()
      })
      let newTab = null;
      let triviamobilepage : triviaMobilePage
      await test.step("Now game open in mobile screen",async()=>{

            await triviaPage.clickMobileLinkBtn()
            newTab = await triviaPage.clickMobileLinkOpenBtn()
            triviamobilepage = new triviaMobilePage(newTab)
           // await guesstheScorePage.clickCloseBtn()
            await triviamobilepage.typephoneno()
            await triviamobilepage.typeemail()
            await triviamobilepage.selectbirthdate()
            await triviamobilepage.typeAge()
            await triviamobilepage.typezip()
            await triviamobilepage.clicksubmit()
            //await newTab.waitForTimeout(4000)
            })
            await test.step("Now verify fornt",async()=>{
                  await page.waitForTimeout(5000)
                  await triviamobilepage.clickHomeBtn()
                  await triviamobilepage.verifySponsorLogoAppliedSuccessfullyInMobileScreen()
            })
      
})

      
