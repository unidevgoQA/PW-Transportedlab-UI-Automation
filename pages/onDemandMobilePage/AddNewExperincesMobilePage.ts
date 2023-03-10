import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export class addnewexperienceMobilePage{
    private page: Page;
        constructor(page: Page) {
                this.page = page;
                page.setViewportSize({width:360,height:740})
        }
        private ondemandMobilePageElements = {
                  InputPhoneNumber:'//input[@name="phone"]',
                  InputEmail:'//input[@name="email"]',
                  InputAge:'//input[@name="age"]',
                  InputZipCode:'//input[@name="zipCode"]',
                  submittBtn:'//button[text()="Submit"]',

                
        }
        async GoTo(URL : string){
            //console.log(URL)
            await this.page.goto(URL)
            await this.page.waitForTimeout(3000)
       }
      async typephoneno(){
            const ele =  await this.page.locator(this.ondemandMobilePageElements.InputPhoneNumber)
            try{
                    await ele.fill('01568703919')
            }
            catch(error){
                     throw(`On demand mobile page phone number input field is not visible,Could not find locator"${ele}"`)
            }
      }
      async typeEmail(){
        const ele =  await this.page.locator(this.ondemandMobilePageElements.InputEmail)
        try{
                await ele.fill('mahfuzalam196@gmail.com')
        }
        catch(error){
                 throw(`On demand mobile page email input field is not visible,Could not find locator"${ele}"`)
        }
  }
  async typeAge(){
    const ele =  await this.page.locator(this.ondemandMobilePageElements.InputAge)
    try{
            await ele.fill('24')
    }
    catch(error){
             throw(`On demand mobile page email input field is not visible,Could not find locator"${ele}"`)
    }
    
}
async typezipCode(){
    const ele =  await this.page.locator(this.ondemandMobilePageElements.InputZipCode)
    try{
            await ele.fill('1206')
    }
    catch(error){
             throw(`On demand mobile page zipcode input field is not visible,Could not find locator"${ele}"`)
    }
}
    async selectbirthdate(){
        await this.page.locator('//input[@name="birthDate"]').click()
        await this.page.locator('//button[@aria-label="calendar view is open, switch to year view"]').click()
        await this.page.locator("//button[text()='1996']").click()
        await this.page.locator("//button[text()='OK']").click()
 }
 async clickSubmittBtn(){
    const ele =  await this.page.locator(this.ondemandMobilePageElements.submittBtn)
    try{
            await ele.click({button:"left",delay:1000})
    }
    catch(error){
             throw(`On demand mobile page submitt button is not visible,Could not find locator"${ele}"`)
    }
}
      
      
}