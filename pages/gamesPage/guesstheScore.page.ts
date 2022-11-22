import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class guesstheScorePage {
        // [x: string]: any;

        private page: Page;
        // static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }



        //=======================================================
        //▶▶Start Title Stage Section Element       


        async clickGuessTheScoreSection() {
                const locator = this.page.locator("//p[text()='Guess The Score']")
                // expect(locator).toContainText('Prize Drop')
                await locator.click({force:true})
                // console.log("Successfully Click To Tug of War Page ")
        }

        async verifyConfigurationsText() {
                //      const ele = await this.page.frameLocator('iframe').w('text=Title Stag')
                //         await this.page.waitForSelector(ele)        

                const ele = this.page.frameLocator('iframe').locator('text=Configurations')
                expect(ele).toContainText("Configurations")


        }
        async clickAddNewConfigPlusBtn() {

                await this.page.frameLocator('iframe').locator("(//h5[text()='Configurations']/following-sibling::button)[1]").click()
        }

        async inputConfigurationName() {
                const ele = await this.page.frameLocator('iframe').locator('input[type="text"]')
                await ele.fill("test_by_Automation")

        }

        async clickAddBtn() {
                const ele =this.page.frameLocator('iframe').locator("//button[text()='ADD']")
                expect(ele).toBeVisible()
                await ele.click()

        }

        async clickGameDesign() {
                await this.page.frameLocator('iframe').locator("//h6[text()='test_by_Automation']/parent::div/following-sibling::div//div//div//p[text()='Game Design']").click()

        }
        async clickToUploadFont() {
                const ele = await this.page.frameLocator('iframe').locator("(//div[@class='MuiBox-root css-vjb914']//div)[1]")
                expect(ele).toBeVisible()
                await ele.click()

        }
        async clickClearAllBtn(){
                const ele = this.page.frameLocator('iframe').locator("//button[text()='Clear all']")
                expect(ele).toBeVisible()
                await ele.click({force:true});
        }

        async verifyBackgroundColorText() {
                const ele = this.page.frameLocator('iframe').locator('//p[text()="Background"]')
                expect(ele).toContainText("Background")

        }

        async clickBackgroundColorPicker() {
                const ele = this.page.frameLocator('iframe').locator("//p[text()='Background']/following-sibling::button").first()
                expect(ele).toBeVisible()
                await ele.click()

        }

    }