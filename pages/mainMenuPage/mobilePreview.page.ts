import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class mobilePreviewPage {
       // [x: string]: any;

       private page: Page;
       // static buffer: void;
       constructor(page: Page) {
              this.page = page;
              page.setViewportSize({ width: 390, height: 844 })
       }

       async clickTriviaSectionForOpenMobileScreen() {
              const ele = this.page.locator("//p[text()='Trivia']")
              await expect(ele).toBeVisible()
              await ele.click({force:true})
              await this.page.waitForLoadState("networkidle")
       }

       async clickMobileLinkBtn() {
              const ele = this.page.frameLocator('iframe').locator(`(//button[@aria-label='Show Mobile Link']//button)[1]`).first()
              expect(ele).toBeVisible()
              await ele.click({ force: true })
              await this.page.waitForTimeout(2000)
       }

       async clickMobileLinkOpenBtn() {

              // Click text=Open Link
              const [page1] = await Promise.all([
                  this.page.waitForEvent('popup'),
                  this.page.frameLocator('iframe').locator("//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]").click()
              ]);
      
              return page1;
      
      
       }

       async lookforphonenoinform() {
              const ele = this.page.locator('//label[text()="Phone number"]')
              await expect(ele).toBeVisible()
       }
       async lookforEmailinform() {
              const ele = this.page.locator('//label[text()="Email Address"]')
              await expect(ele).toBeVisible()
       }
       async lookforAgeinform() {
              const ele = this.page.locator('//label[text()="Age"]')
              await expect(ele).toBeVisible()
       }
       async lookforBirthdateinform() {
              const ele = this.page.locator('//label[text()="Birth Date"]')
              await expect(ele).toBeVisible()
       }
       async lookforZipinform() {
              const ele = this.page.locator('//label[text()="Zip / Postal Code"]')
              await expect(ele).toBeVisible()
       }

       async clickLoginWithGoogleIconIsVisible() {
              await this.page.waitForSelector("//button[@aria-label='Sign Up with Google']")


              const [page1] = await Promise.all([
                     this.page.waitForEvent('popup'),
                     this.page.locator("//button[@aria-label='Sign Up with Google']").click()
                 ]);
                 await this.page.waitForLoadState("networkidle")
                 return page1;


       //        const ele = await this.page.locator("//button[@aria-label='Sign Up with Google']").isVisible()
       //        if ((ele == true)){
       //               await this.page.locator("//button[@aria-label='Sign Up with Google']").click({button:"left", delay:1000})
                     
       //       }
       //       else throw new Error("Mobile Welcome Screen Login With Google option Is not Visible")
       //       await this.page.waitForLoadState("networkidle")
              
       }

       async inputEamilForLoginWithGoogle() {
              await this.page.waitForNavigation()
              const ele = await this.page.locator(`[type="email"]`).isVisible()
              if ((ele == true)){
                     await this.page.locator('[type="email"]').type("ss.unidev@gmail.com")
                     
             }
             else throw new Error("Mobile Welcome Screen Login With Google option Is not Visible")
              
       }

       async clickSignInWithGoogleWindowNextBtn() {              
              const ele = await this.page.locator(`(//button[@type='button']//span)[2]`).isVisible()
              if ((ele == true)){
                     await this.page.locator(`(//button[@type='button']//span)[2]`).click({delay:1000})
                     
             }
             else throw new Error("Mobile Welcome Screen Sign In With Google Window Next Btn Is not Visible")
              
       }

       async inputPasswordForLoginWithGoogle() {
              await this.page.waitForNavigation()
              const ele = await this.page.locator(`//input[@type='password']`).isVisible()
              if ((ele == true)){
                     await this.page.locator("//input[@type='password']").fill("Ilovemymother1@34")
                     
             }
             else throw new Error("Mobile Welcome Screen Sign In With Google Window Password Input Field Is not Visible")
              
       }

       
       async verifyLoginWithGoogleIconIsHidden() {         
              await this.page.waitForSelector("//img[@alt='Logotype']")
              const ele = await this.page.locator("//button[@aria-label='Sign Up with Google']").isHidden()
           if ((ele == true)){
                  
           }
           else throw new Error("Mobile Welcome Screen Login With Google option Is Not Hidden After Uncheck Social Media Option From Admin Side")
    }

    async verifyLoginWithPhoneNumberIsVisible() {         
       await this.page.waitForSelector("//img[@alt='Logotype']")
       const ele = await this.page.locator("//input[@type='tel']").isVisible()
    if ((ele == true)){
           
    }
    else throw new Error("Mobile Welcome Screen Login With Phone Number option Is Not Visible After check Login With Phone Varification Option From Admin Side")
}

async verifyLoginWithEmailInputFieldIsVisible() {         
       await this.page.waitForSelector("//img[@alt='Logotype']")
       const ele = await this.page.locator("//input[@type='email']").isVisible()
    if ((ele == true)){
           
    }
    else throw new Error("Mobile Welcome Screen Login With Email Input Field option Is Not Visible After check Login With Email Validation Option From Admin Side")
}

async verifyAutomaticallyAssignUserName() {         
       await this.page.waitForSelector("//img[@alt='User avatar']")
       const ele = await this.page.locator("#usernameField").textContent()
    if (expect(ele?.includes("david"))){
           console.log("Automatically Assign User Name Updated Successfully")
    }
    else throw new Error("Automatically Assign User Name Is Not Updated Successfully ")
}

async clickProfilePictureEditButton() {         
       
       const ele = await this.page.locator("//button[@active='true']").isVisible()
    if ((ele == true)){
       await this.page.locator("//button[@active='true']").click({ button: "left", delay: 1000 })
    }
    else throw new Error("My Profile Page Profile Picture Edit Button Is Not Visible")
}

async verifyAutoAssaignProfilePictureUpdatedSuccessfully() {         
       await this.page.waitForSelector("#alert-dialog-title")
       const ele = await this.page.locator("//div[@class='MuiBox-root css-6nzrs3']//div[1]").isVisible()       
    if ((ele == true)){
         console.log("Auto Assaign Profile Picture Updated Successfully")
    }
    else throw new Error("My Profile Page Profile Picture Auto Assaign Profile Picture is not visiable")
}

async verifyAutoAssaignProfilePictureUpdatedSuccessfullyAfterEdit() {         
       await this.page.waitForSelector("#alert-dialog-title")
       const ele = await this.page.locator("//div[@class='MuiBox-root css-n97oo2']").isVisible()       
    if ((ele == true)){
         console.log("Auto Assaign Profile Picture Updated Successfully After Edit")
    }
    else throw new Error("My Profile Page Profile Picture Auto Assaign Profile Picture is not Updated After Edit")
}

async UserSelecthisProfilePicture() {         
       await this.page.waitForSelector("//button[@aria-label='Close']")
       const ele = await this.page.locator("(//div[@class='MuiBox-root css-1gqdyyg'])[3]").isVisible()       
    if ((ele == true)){
       await this.page.locator("(//div[@class='MuiBox-root css-1gqdyyg'])[3]").click({ button: "left", delay: 1000 })
    }
    else throw new Error("My Profile Page Profile Picture user is not Updated After successfully")
}

async clickProfilePictureWindowSaveBtn() {         
       await this.page.waitForSelector("//button[@aria-label='Close']")
       const ele = await this.page.locator("//div[contains(@class,'MuiDialogActions-root MuiDialogActions-spacing')]//button[1]").isVisible()       
    if ((ele == true)){
       await this.page.locator("//div[contains(@class,'MuiDialogActions-root MuiDialogActions-spacing')]//button[1]").click({ button: "left", delay: 1000 })
    }
    else throw new Error("My Profile Page Profile Picture Save Button Is Not Visible")
}




async inputEamilForLoginWithEmail() {         
       await this.page.waitForSelector("//img[@alt='Logotype']")
       const ele = await this.page.locator("//input[@type='email']").isVisible()
    if ((ele == true)){
       await this.page.locator("//input[@type='email']").fill("ss.unidev@gmail.com")
    }
    else throw new Error("Mobile Welcome Screen Login With Email Input Field Is Not Visible After check Login With Email Validation Option From Admin Side")
}

async clickSignInBtn() {       
      
       const ele = await this.page.locator("(//button[@type='button'])[1]").isVisible()
    if ((ele == true)){
       await this.page.locator("(//button[@type='button'])[1]").click()
    }
    else throw new Error("Mobile Welcome Screen Login With Email Input Field option Is Not Visible After check Login With Email Validation Option From Admin Side")
    
}    

       
       
       async verifyLoginWithFacebookIconIsHidden() {         
              
                 const ele = await this.page.locator("//button[@aria-label='Sign Up with Facebook']").isHidden()
              if ((ele == true)){
                     
              }
              else throw new Error("Mobile Welcome Screen Login With Facebook option Is Not Hidden After Uncheck Social Media Option From Admin Side")
       }

       async verifyLoginWithMicrosoftIconIsHidden() {         
              
              const ele = await this.page.locator("//button[@aria-label='Sign Up with Microsoft']").isHidden()
           if ((ele == true)){
                  
           }
           else throw new Error("Mobile Welcome Screen Login With Microsoft option Is Not Hidden After Uncheck Social Media Option From Admin Side")
    }

       async clickLoginWithFacebookIconIsVisible() {
              
              
              const [page1] = await Promise.all([
                     this.page.waitForEvent('popup'),
                     this.page.locator("//button[@aria-label='Sign Up with Facebook']").click()
                 ]);
                 await this.page.waitForLoadState("networkidle")
                 return page1;

              //    const ele = await this.page.locator("//button[@aria-label='Sign Up with Facebook']").isVisible()
              // if ((ele == true)){
                     
              // }
              // else throw new Error("Mobile Welcome Screen Login With Facbook option Is not Visible")
       }

       async inputEamilForLoginWithFacebook() {
              await this.page.waitForNavigation()
              const ele = await this.page.locator(`#email`).isVisible()
              if ((ele == true)){
                     await this.page.locator('#email').type("ss.unidev@gmail.com")
                     
             }
             else throw new Error("Mobile Welcome Screen Login With Facebook Eamil Input Option Is not Visible")
              
       }

       async inputPasswordForLoginWithFacebook() {
              
              const ele = await this.page.locator(`[type="password"]`).isVisible()
              if ((ele == true)){
                     await this.page.locator('[type="password"]').fill("SecretPassword1@34")
                     
             }
             else throw new Error("Mobile Welcome Screen Sign In With Facebook Window Password Input Field Is not Visible")
              
       }

       async clickSignInWithFacebookWindowLoginBtn() {              
              const ele = await this.page.locator(`[type="submit"]`).isVisible()
              if ((ele == true)){
                     await this.page.locator(`[type="submit"]`).click({force:true})
                     
             }
             else throw new Error("Mobile Welcome Screen Sign In With Facebook Window Login Btn Is not Visible")
             await this.page.waitForLoadState()
              
       }

       async clickContineuWithFacebookBtn() {
              await this.page.waitForSelector("(//div[@role='button']//div)[3]")
              const ele = await this.page.locator("(//div[@role='button']//div)[3]").isVisible()
              if ((ele == true)){
                     await this.page.locator("(//div[@role='button']//div)[3]").click()
              }
              else throw new Error("Mobile Welcome Screen Login With Microsoft option Is not Visible")
       }

       

       async clickLoginWithMicrosoftIconIsVisible() {

              const [page1] = await Promise.all([
                     this.page.waitForEvent('popup'),
                     this.page.locator("//button[@aria-label='Sign Up with Microsoft']").click()
                 ]);
                 await this.page.waitForLoadState("networkidle")
                 return page1;

              // const ele = await this.page.locator("//button[@aria-label='Sign Up with Microsoft']").isVisible()
              // if ((ele == true)){
              //        await this.page.locator("//button[@aria-label='Sign Up with Microsoft']").click()
                     
              // }
              // else throw new Error("Mobile Welcome Screen Login With Microsoft option Is not Visible")
       }

       async inputEamilForLoginWithMicrosoft() {
              await this.page.waitForNavigation()
              const ele = await this.page.locator(`[type="email"]`).isVisible()
              if ((ele == true)){
                     await this.page.locator('[type="email"]').type("unidevgo@outlook.com")
                     
             }
             else throw new Error("Mobile Welcome Screen Login With Microsoft Eamil Input Option Is not Visible")
              
       }

       async clickNextBtnOnMicrosoftWindow() {              
              const ele = await this.page.locator(`[type="submit"]`).isVisible()
              if ((ele == true)){
                     await this.page.locator(`[type="submit"]`).click({force:true})
                     
             }
             else throw new Error("Mobile Welcome Screen Sign In With Microsoft Window Login Btn Is not Visible")
             await this.page.waitForLoadState()
              
       }

       async inputPasswordForLoginWithMicrosoft() {
              
              const ele = await this.page.locator(`[type="password"]`).isVisible()
              if ((ele == true)){
                     await this.page.locator('[type="password"]').type("SecretPassword1@34")
                     
             }
             else throw new Error("Mobile Welcome Screen Sign In With Microsoft Window Password Input Field Is not Visible")
              
       }

       async clickSignInBtnOnMicrosoftWindow() {              
              const ele = await this.page.locator(`[type="submit"]`).isVisible()
              if ((ele == true)){
                     await this.page.locator(`[type="submit"]`).click({force:true})
                     
             }
             else throw new Error("Mobile Welcome Screen Sign In With Microsoft Window Login Btn Is not Visible")
             await this.page.waitForLoadState()
              
       }


       
       

       

       async typephoneno() {
              await this.page.locator('//input[@name="phone"]').type('+8801851703506')
       }
       
       async typeemail() {
              await this.page.locator('//input[@name="email"]').type("AutomationTest@test.com")
       }
       async typeAge() {
              await this.page.locator('//input[@name="age"]').type('23')

       }
       async selectbirthdate() {
              await this.page.locator('//input[@name="birthDate"]').click()
              await this.page.locator('//button[@aria-label="calendar view is open, switch to year view"]').click()
              await this.page.locator("//button[text()='2000']").click()
              await this.page.locator("//button[text()='OK']").click()
       }

       async typezip() {
              await this.page.locator('//input[@name="zipCode"]').type('1217')
       }

       async clicksubmit() {
              await this.page.locator("//button[@type='submit']").click()
              // await this.page.waitForLoadState("networkidle")
              await this.page.waitForTimeout(2000)

       }
       async dblClickOkBtn() {
              const ele = this.page.locator("//div[contains(@class,'MuiDialogActions-root MuiDialogActions-spacing')]//button[1]")
              expect(ele).toBeVisible()
              await ele.dblclick({force:true})
              await this.page.waitForLoadState("networkidle")


       }


       async clickOkBtn() {
              const ele = this.page.locator("//div[contains(@class,'MuiDialogActions-root MuiDialogActions-spacing')]//button[1]")
              expect(ele).toBeVisible()
              await ele.click({force:true})
              await this.page.waitForLoadState("networkidle")
              await this.page.waitForTimeout(2000)


       }
       async verifyUserNameInputFieldTitle() {
              const ele = this.page.locator("//label[text()='Username']")
              expect(ele).toBeVisible()

       }

       async verifyRulesEntryIsApplyed() {
              expect(await this.page.locator("//button[@value='rules']")).toBeTruthy()
              // expect(await this.page.locator("//button[@value='rules']")).toBeChecked()

       }

       async verifyHomeEntryIsApplyed() {
              expect(await this.page.locator("//button[@value='rules']")).toBeTruthy()
              // expect(await this.page.locator("//button[@value='rules']")).toBeChecked()

       }

       async verifyHowToPlayEntryIsApplyed() {
              expect(await this.page.locator("//button[@value='howToPlay']")).toBeTruthy()

       }

       async verifyPrizeEntryIsApplyed() {
              await this.page.waitForSelector("//div[text()='No Won Prize']")
              const ele = await this.page.locator("//div[text()='No Won Prize']")
              expect(ele).toContainText("No Won Prize")



       }

       async verifyPrimaryColorAppliedInMobile(){
              const ele = this.page.frameLocator('iframe').locator('//div//img//parent::div')
              await expect(ele).toHaveCSS("background-color","rgb(45, 168, 217)")
        }


       async verifySecondaryColorAppliedInMobile() {
              // const ele = this.page.frameLocator('iframe').locator('//div//img//parent::div')
              const btn = this.page.locator(".css-d7djuo");


              // const btn = this.page.frameLocator('iframe').locator('//div//img//parent::div')
              const color = await btn.evaluate((ele) => {
                     return window.getComputedStyle(ele).getPropertyValue("background-color")
              });
              console.log(color);
              expect(color).toBe("rgb(95, 188, 210)");



       }


       async clickPrizeSection() {
              const btn = this.page.locator("(//button[@type='button'])[2]");
              expect(btn).toBeVisible()
              await btn.click({ force: true })           
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)



       }

       async clickMyProfile() {
              const btn = this.page.locator("(//button[@type='button'])[5]");
              expect(btn).toBeVisible()
              await btn.click({ force: true })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)



       }

       
       async clickLanguageSelectionInputField() {
              const btn = this.page.locator("//div[@role='button']");              
              await btn.click({force:true})
              await this.page.waitForLoadState("networkidle");
       }

       async selectJapanese() {
              const btn = this.page.locator("//li[text()='Japanese']");              
              await btn.click({ force: true })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)



       }

       async selectSpanish() {
              const btn = this.page.locator("//li[text()='Spanish']");              
              await btn.click({ force: true })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)



       }

       async verifyJapaneseLanguageApplaidSuccessfully() {
              const btn = this.page.locator("//h1[text()='プロフィール']");  
              expect(btn).toContainText("プロフィール")            
              



       }

       async selectArabic() {
              const btn = this.page.locator("//li[text()='Arabic']");              
              await btn.click({ force: true })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)



       }

       async verifyArabicLanguageApplaidSuccessfully() {
              const btn = this.page.locator("//h1[text()='الملف الشخصي']");  
              expect(btn).toContainText("الملف الشخصي")            


       }

       async selectRussian() {
              const btn = this.page.locator("//li[text()='Russian']");              
              await btn.click({ force: true })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)



       }

       async verifyRussianLanguageApplaidSuccessfully() {
              const btn = this.page.locator("//h1[text()='Профиль']");  
              expect(btn).toContainText("Профиль")            


       }

       async selectFrancias() {
              const btn = this.page.locator("//li[text()='Francias']");              
              await btn.click({ force: true })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)



       }

       async verifyFranciasLanguageApplaidSuccessfully() {
              const btn = this.page.locator("//h1[text()='Profil']");  
              expect(btn).toContainText("Profil")            


       }

       async selectEnglish() {
              const btn = this.page.locator("//li[text()='English']");              
              await btn.click({ force: true })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)



       }

       async verifyEnglishLanguageApplaidSuccessfully() {
              const btn = this.page.locator("//h1[text()='Profile']");  
              expect(btn).toContainText("Profile")            


       }

       
       async verifySpanishLanguageApplaidSuccessfully() {
              const btn = this.page.locator("//h1[text()='Perfil']");  
              expect(btn).toContainText("Perfil")            
              



       }
       



       
       async clickHowToPlayBtn() {
              const btn = this.page.locator("(//button[@type='button'])[3]");
              expect(btn).toBeVisible()
              await btn.click({ force: true })
              await this.page.waitForLoadState("networkidle");
              await this.page.waitForTimeout(2000)



       }

       async verifyPotraitBackgroundUploadSuccessfully() {
              const ele = await this.page.locator("//div[@class='MuiBox-root css-tyolvb']").screenshot()
              await expect(ele).toMatchSnapshot("Verify_Portrait_Background.png", { maxDiffPixels: 100 })

              // expect(await this.page.screenshot({
              //        fullPage: true
              //    })).toMatchSnapshot("Verify_Portrait_Background.png") 



       }

       async verifyMainMenuFontSuccessfullyAppliedInMobileScreen() {

              expect(await this.page.screenshot({
                     fullPage: true
                 })).toMatchSnapshot("MainMenu_Font_Upload_UI.png") 



       }

       async verifyMenuBarBackgroundColorSuccessfullyAppliedInMobileScreen() {

              expect(await this.page.screenshot({
                     fullPage: true
                 })).toMatchSnapshot("MenuBar_Background_UI.png") 

       }

       
       async verifyMenuBarTopAlignmentSuccessfullyAppliedInMobileScreen() {

              expect(await this.page.screenshot({
                     fullPage: true
                 })).toMatchSnapshot("MenuBar_TopAlignment_UI.png") 

       }

       async verifyMenuBarBottomAlignmentSuccessfullyAppliedInMobileScreen() {

              expect(await this.page.screenshot({
                     fullPage: true
                 })).toMatchSnapshot("MenuBar_BottomAlignment_UI.png") 

       }

       async verifyMenuBarThreeLineAlignmentSuccessfullyAppliedInMobileScreen() {

              expect(await this.page.screenshot({
                     fullPage: true
                 })).toMatchSnapshot("MenuBar_ThreeLineAlignment_UI.png") 

       }
       async clickThreeLineAlignmentBtn() {

             const ele = await this.page.locator("//div[@iconcolor='rgb(96, 37, 74)']")
             expect(ele).toBeVisible()
             await ele.click({force:true})
             await this.page.waitForTimeout(3000)

       }

       async verifyMenuBarHideAlignmentSuccessfullyAppliedInMobileScreen() {

              expect(await this.page.screenshot({
                     fullPage: true
                 })).toMatchSnapshot("MenuBar_HideAlignment_UI.png") 

       }

       async verifyMenuBarHideAlignmentSuccessfullyAppliedOnMobileScreen() {

              const btn = this.page.locator("//p[text()='HOME']")
              expect(btn).toBeHidden()              
              await this.page.waitForLoadState('domcontentloaded');

       }

       async verifyHomeIconSuccessfullyAppliedInMobileScreen() {

              expect(await this.page.screenshot({
                     fullPage: true
                 })).toMatchSnapshot("MenuBar_HomeIcon_UI.png") 

       }
       async verifyPrizeIconSuccessfullyAppliedInMobileScreen() {

              expect(await this.page.screenshot({
                     fullPage: true
                 })).toMatchSnapshot("MenuBar_PrizeIcon_UI.png") 

       }
       async verifyHowToPlayIconSuccessfullyAppliedInMobileScreen() {

              expect(await this.page.screenshot({
                     fullPage: true
                 })).toMatchSnapshot("MenuBar_HowToPlayIcon_UI.png") 

       }
       async verifyRulesIconSuccessfullyAppliedInMobileScreen() {

              expect(await this.page.screenshot({
                     fullPage: true
                 })).toMatchSnapshot("MenuBar_RulesIcon_UI.png") 

       }
       async verifyUserProfileIconSuccessfullyAppliedInMobileScreen() {

              expect(await this.page.screenshot({
                     fullPage: true
                 })).toMatchSnapshot("MenuBar_UserProfileIcon_UI.png") 

       }



       
       async clickHomeBtn() {
              const btn = this.page.locator("//button[@value='home']");
              expect(btn).toBeVisible()
              await btn.click({ force: true })
              await this.page.waitForLoadState('domcontentloaded');



       }






       async verifyRulesPageIsSuccessfullySelected() {
              const ele = this.page.locator("//label[text()='Username']")
              expect(ele).toBeVisible()
       }


       async selecthomepage() {
              await this.page.locator('//p[text()="HOME"]//parent::button').click()
       }

       async GoTo(URL: string) {
              await this.page.goto(URL)
              await this.page.waitForTimeout(3000)
       }

       // color related functions from here
       async checkTextcolor() {
              const ele = this.page.frameLocator('iframe').locator('//button[text()="START"]')
              const color = await ele.evaluate((ele) => {
                     return window.getComputedStyle(ele).getPropertyValue("color")
              })
              expect(color).toBe("rgb(189,179,229)")
       }


}