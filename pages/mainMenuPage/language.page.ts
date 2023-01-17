import { expect, Page } from "@playwright/test";
export default class languagePage {
        static clickLanguagePage() {
                throw new Error("Method not implemented.");
        }
        static
                //Language Controls Elable disable btn Element
                checkLanguageHeaderText() {
                throw new Error("Method not implemented.");
        }
        static checkLanguageControlsText() {
                throw new Error("Method not implemented.");
        }
        static checkLanguageControlsDisabledBtn() {
                throw new Error("Method not implemented.");
        }
        static checkUserSelectableText() {
                throw new Error("Method not implemented.");
        }
        static clickUserSelectableRadioBtn() {
                throw new Error("Method not implemented.");
        }
        static clickUserRegistrationSelectableInputField() {
                throw new Error("Method not implemented.");
        }
        static clickUserProfileSelectableInputField() {
                throw new Error("Method not implemented.");
        }
        static checkUserForcedLanguageText() {
                throw new Error("Method not implemented.");
        }
        static
                //Language Controls Elable disable btn Element
                clickUserForceLanguage() {
                throw new Error("Method not implemented.");
        }
        static clickUserForceLanguageinputfield() {
                throw new Error("Method not implemented.");
        }

        private page: Page;
        static login: any;
        constructor(page: Page) {
                this.page = page;
        }

        //Language Page Button Element
        async clickLanguagePage() {
                const locator = this.page.locator("//p[text()='Language']")
                expect(locator).toContainText('Language')
                await locator.click()
        }

        //Language Header Text Elemant
        async checkLanguageHeaderText() {
                const ele = this.page.locator("//h4[text()='Language Settings']")
                expect(ele).toContainText('Language Settings')
        }

        //Language Controls Text Element
        async checkLanguageControlsText() {
                const ele = this.page.locator("//h4[text()='Language Controls']")
                expect(ele).toContainText('Language Controls')
        }

        //Language Controls Elable disable btn Element
        async checkLanguageControlsDisabledBtn() {
                // const ele = this.page.locator("input[type='checkbox']");
                if (await this.page.isHidden("//h4[text()='Selection Menu']")) {
                        await this.page.click("input[type='checkbox']");
                }

        }




        //Language Controls Elable disable btn Element
        async checkUserSelectableText() {
                const ele = this.page.locator("//span[text()='User Selectable']");
                expect(ele).toContainText("User Selectable")
                await ele.click({ force: true })


        }


        //Language Controls Elable disable btn Element
        async clickUserSelectableRadioBtn() {

                await this.page.locator("//span[text()='User Selectable']").click({ force: true })

                // let ele = await this.page.locator("//h5[text()='Landing page of the user registration flow:']").isHidden()
                // if ((ele == true)) {
                //         // console.log("delete Uploaded Leaderboard BG")
                //         await this.page
                //                 .locator("//span[text()='User Selectable']")
                //                 .click({force:true})
                // }

                // if (await this.page.isHidden("//h5[text()='Landing page of the user registration flow:']"))
                // {
                //     await this.page.check("(//input[@type='radio'])[1]", {force:true});
                // }         
        }

        //Language Controls Elable disable btn Element
        async verifyUserSelectableHeaderText() {

                const ele = this.page.locator("//h5[text()='Landing page of the user registration flow:']");
                expect(ele).toContainText("Landing page of the user registration flow:")

        }
        //Language Controls Elable disable btn Element
        async clickUserRegistrationSelectableInputField() {

                let ele = await this.page.locator("//h5[text()='Landing page of the user registration flow:']").isHidden()
                if ((ele == false)) {
                        // console.log("delete Uploaded Leaderboard BG")
                        await this.page
                                .locator("(//div[@role='button'])[1]")
                                .click({ force: true })
                }

                //     const ele = this.page.locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[1]");
                //     expect(ele).toBeVisible()
                //     await ele.click({force:true})

        }

        //select language type english
        async selectEnglishLanguage() {
                const ele = this.page.locator("//li[text()='English']")
                expect(ele).toBeVisible()
                await ele.click()
        }

        //select language type Francias
        async selectFranciasLanguage() {
                const ele = this.page.locator("//li[text()='Francias']");
                expect(ele).toBeVisible()
                await ele.click({ force: true })
        }

        //select language type Russian
        async selectRussianLanguage() {
                const ele = this.page.locator("//li[text()='Russian']");
                expect(ele).toBeVisible()
                await ele.click()
        }

        //select language type Arabic
        async selectArabicLanguage() {
                const ele = this.page.locator("//li[text()='Arabic']");
                expect(ele).toBeVisible()
                await ele.click()
        }

        //select language type Spanish
        async selectSpanishLanguage() {
                const ele = this.page.locator("//li[text()='Spanish']");
                expect(ele).toBeVisible()
                await ele.click()
        }

        //select language type Japanese
        async deselectEnglishLanguage() {
                // const englishLanguage: boolean
                const EnglishLanguage = await this.page.locator(`(//li[@aria-selected="true"])[1]`).isVisible()
                if ((EnglishLanguage == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("//li[text()='English']")
                                .click({ force: true })
                }
                await this.page.waitForLoadState("networkidle")

        }

        async deselectFranciasLanguage() {
                // const englishLanguage: boolean
                const FranciasLanguage = await this.page.locator(`(//li[@aria-selected="true"])[2]`).isVisible()
                if ((FranciasLanguage == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("//li[text()='Francias']")
                                .click({ force: true })
                }
                await this.page.waitForLoadState("networkidle")


        }

        async deselectRussianLanguage() {
                // const englishLanguage: boolean
                const SpanishLanguage = await this.page.locator(`(//li[@aria-selected="true"])[3]`).isVisible()
                if ((SpanishLanguage == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("//li[text()='Russian']")
                                .click({ force: true })
                }
                await this.page.waitForLoadState("networkidle")


        }

        async deselectArabicLanguage() {
                // const englishLanguage: boolean
                const ArabicLanguage = await this.page.locator(`(//li[@aria-selected="true"])[4]`).isVisible()
                if ((ArabicLanguage == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("//li[text()='Arabic']")
                                .click({ force: true })
                }
                await this.page.waitForLoadState("networkidle")


        }

        async deselectSpanishLanguage() {
                // const englishLanguage: boolean
                const SpanishLanguage = await this.page.locator(`(//li[@aria-selected="true"])[5]`).isVisible()
                if ((SpanishLanguage == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("//li[text()='Spanish']")
                                .click({ force: true })
                }
                await this.page.waitForLoadState("networkidle")


        }

       

        async deselectJapaneseLanguage() {
                // const englishLanguage: boolean
                const JapaneseLanguage = await this.page.locator(`(//li[@aria-selected="true"])[6]`).isVisible()
                if ((JapaneseLanguage == true)) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("//li[text()='Japanese']")
                                .click({ force: true })
                }
                await this.page.waitForLoadState("networkidle")


        }
        async JapaneseLanguage() {
                // const englishLanguage: boolean
                const JapaneseLanguage = await this.page.locator(`(//li[@aria-selected="true"])[4]`).isVisible()
                if ((JapaneseLanguage == true )) {
                        // console.log("Enable Stage to be skip and jump to next one")
                        await this.page
                                .locator("//li[text()='Japanese']")
                                .click({ force: true })
                }
                
                await this.page.waitForLoadState("networkidle")


        }
        

        //select language type Japanese
    async selectJapaneseLanguage() {
                        // const englishLanguage: boolean
                        const EnglishLGregistrationflow = await this.page.locator("(//li[@selected='true'])[1]").isChecked()
                        if ((EnglishLGregistrationflow == false)) {
                                // console.log("Enable Stage to be skip and jump to next one")
                                await this.page
                                        .locator("//li[text()='Japanese']")
                                        .click()
                        }
                        // const ele = await this.page.locator("//li[text()='Japanese']")

                        // if (await ele.isChecked())
                        //         await ele.click()


                        // await this.page.locator("(//div[@role='button'])[2]").selectOption({label:"English"})

                        //         const englishLanguage = await expect(this.page.locator('option[selected="selected"]')).toHaveText('Option 1')
                        //       if ((englishLanguage == true)) {
                        //               // console.log("Enable Stage to be skip and jump to next one")
                        //               await this.page
                        //                       .locator("//li[text()='Japanese']")
                        //                       .click({force:true})
                        //       }    

                        // const checkboxState = await this.page.evaluate(() => {
                        //         const checkbox = document.querySelector('[type=checkbox]');
                        //         return checkbox.checked;
                        //     });

                        // const checkboxStates = await this.page.evaluate(() => {
                        //         const checkboxes = document.querySelectorAll('[type=checkbox]');
                        //         return [...checkboxes].map(c => c.checked);
                        //     });

                        // let startBtn = await this.page.locator("//li[text()='Japanese']").isChecked()
                        // if ((startBtn == false)) {
                        //         // console.log("Enable Stage to be skip and jump to next one")
                        //         await this.page.locator("//li[text()='Japanese']").check()
                        // }    

                        // expect(await this.page.locator("//li[text()='Japanese']").isChecked()).toBeFalsy()
                        //     const ele = this.page.locator("//li[text()='Japanese']").isChecked().

                        //     expect(ele).toBeVisible()
                        //     await ele.click()       
                }

    //Language Controls Elable disable btn Element
    async clickUserSelectablesRadioBtn() {
                        const ele = this.page.locator("(//div[@role='button'])[2]");
                        expect(ele).toBeVisible()
                        await ele.dblclick()


                }

        //Language Controls Elable disable btn Element
        async clickUserProfileSelectableInputField() {
                        const ele = this.page.locator("(//div[contains(@class,'MuiSelect-select MuiSelect-outlined')])[2]");
                        expect(ele).toBeVisible()
                        await ele.dblclick()

                        await this.page.waitForLoadState("networkidle")


                }




        //Language Controls Elable disable btn Element
        async checkUserForcedLanguageText() {
                        const ele = this.page.locator("//span[text()='Forced Language']");
                        expect(ele).toContainText('Forced Language')
                        await ele.click({ force: true })


                }

        //Language Controls Elable disable btn Element
        async clickUserForceLanguageOption() {

                        // const ele = await this.page.frameLocator('iframe').locator("input[value='forced']").isChecked()
                        // if ((ele == false)) {
                        //         // console.log("delete Uploaded Leaderboard BG")
                        //         await this.page.locator("input[value='forced']")
                        //                 .check({force:true})
                        // }
                        const ele = this.page.locator("//span[text()='Forced Language']");
                        //     expect(ele).toBeVisible()
                        await ele.click({ force: true })
                }

        
         async clickUserForceLanguageinputfield() {

                        const ele = await this.page.frameLocator('iframe').locator("//div[@role='button']").isVisible()
                        if ((ele == true)) {
                                // console.log("delete Uploaded Leaderboard BG")
                                await this.page.locator("//div[@role='button']")
                                        .click({ force: true })
                        }
                        //  const ele = this.page.locator("input[value='forced']");
                        //     expect(ele).toBeVisible()
                        //     await ele.click()   
                }


        // //Language Controls Elable disable btn Element
        async clickForceLanguageInputField() {

                        // let ele = await this.page.frameLocator('iframe').locator("//div[@role='button']").isVisible()
                        // if ((ele == true)) {
                        //         // console.log("delete Uploaded Leaderboard BG")
                        //         await this.page.locator("//div[@role='button']")
                        //                 .click({force:true})
                        // }

                        const ele = this.page.locator("//div[contains(@class,'MuiSelect-select MuiSelect-outlined')]")
                        await ele.click()


                }





        }