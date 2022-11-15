import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class globalPrizingPage {
        [x: string]: any;

        private page: Page;
        static buffer: void;
        constructor(page: Page) {
                this.page = page;
        }

        //click GlobalPrizing Page
        async clickGlobalPrizingPage() {
                const locator = this.page.locator("//p[text()='Global Prizing']")
                expect(locator).toContainText('Global Prizing')
                await locator.click()
        }

        //click AddNew Prize Btn
        async clickAddNewPrizeBtn() {
                const locator = this.page.locator("//button[text()='Add New Prize']")
                expect(locator).toContainText('Add New Prize')
                await locator.click()
        }

        //input Prize Name
        async inputPrizeName() {
                const locator = this.page.locator("//input[@placeholder='Enter prize name...']")
                expect(locator).toBeVisible()
                await locator.fill("Auto Test")
        }

        //select Prize Category
        async selectPrizeCategory() {
                const locator = this.page.locator("div[role='button']")
                await locator.dblclick()
                // // expect(locator).toBeVisible()
                // await locator.selectOption({ label: 'Option 2' })
        }

        //select Prize Category
        async selectPrizeCategoryAirDrop() {
                const locator = this.page.locator("text=AR Drop")
                await locator.click()
                // // expect(locator).toBeVisible()
                // await locator.selectOption({ label: 'Option 2' })
        }

        async selectPrizeCategoryGeneral() {
                const locator = this.page.locator("//li[@data-value='general']")
                await locator.click({ force: true })
                // // expect(locator).toBeVisible()
                // await locator.selectOption({ label: 'Option 2' })
        }


        //p[text()='Drag your image here, or browse']
        async uploadPrizeImage() {
                const buffer = readFileSync('./videos/a.png');
                // Create the DataTransfer and File
                const dataTransfer = await this.page.evaluateHandle((data) => {
                        const dt = new DataTransfer();
                        // Convert the buffer to a hex array
                        const file = new File([data.toString('hex')], 'a.png', { type: 'application/png' });
                        dt.items.add(file);
                        return dt;
                }, buffer);

                // Now dispatch
                await this.page.dispatchEvent("//p[text()='Drag your image here, or browse']", 'drop', { dataTransfer });
        }
        

        async verifyDiscriptionText() {


                const ele = await this.page.locator("//p[text()='Description']")
                expect(ele).toContainText("Description")

        }

        //Checked Social Media Logins
        async inputPrizeDiscription() {


                const ele = await this.page.locator("textarea[rows='3']")
                expect(ele).toHaveAttribute("placeholder", 'Give some description here...')
                await ele.fill("lorim upsum dorlo")

        }


        //Checked Social Media Logins
        async clickPrizeExpirationNone() {


                let ele = await this.page.locator("(//input[@type='checkbox'])[1]").isVisible()

                if ((ele == false)) {
                        // console.log("Prize Expiration Select None")
                        await this.page.locator("(//input[@type='checkbox'])[1]").click()

                }
        }
        //Checked Social Media Logins
        async clickLoadCSVCheckBox() {

                let ele = await this.page.locator("input[value='csv']").isVisible()

                if ((ele == true)) {
                        // console.log("click Load CSV Check Box")
                        await this.page.locator("input[value='csv']").click()

                }



                // if (await this.page.isChecked("input[value='csv']")) {
                //         await this.page.click("input[value='csv']");
                // }

        }

        async uploadCSVFile() {
                const filePath0 = "testData/csv/csv.csv"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0])
                })
                await this.page.locator("//button[text()='Upload']").click()
        }
        async clickGenerateTextcodeCheckBox() {


                let ele = await this.page.locator("input[value = 'textcode']").isVisible()

                if ((ele == true)) {
                        // console.log("click Generate Text code Check Box")
                        await this.page.locator("input[value='barcode']").click()

                }
                else {

                        await this.page.locator("input[value = 'textcode']").click()

                }
        }

        async clickAutogenerateCheckBox() {


                let ele = await this.page.locator("input[value='auto']").isVisible()

                if ((ele == true)) {
                        // console.log("click Auto generate Check Box")
                        await this.page.locator("input[value='auto']").click()

                }

        }
        async inputAutoGeneratePrifix() {
                await this.page.locator("(//span[text()='Autogenerate']/following::input)[1]").fill("AutoPrifix")

        }


        async clickSMSSharingCheckBox() {
                let ele = await this.page.locator("(//span[text()='Prefix']/following::input)[1]").isVisible()

                if ((ele == true)) {
                        // console.log("click SMS Sharing Check Box")
                        await this.page.locator("(//span[text()='Prefix']/following::input)[1]").click()

                }

        }
        async clickEmailSharingCheckBox() {
                let ele = await this.page.locator("(//span[text()='SMS sharing']/following::input)[1]").isVisible()

                if ((ele == true)) {
                        // console.log("click Email Sharing Check Box")
                        await this.page.locator("(//span[text()='SMS sharing']/following::input)[1]").click()

                }

        }
        async clickWalletSharingCheckBox() {
                let ele = await this.page.locator("(//span[text()='Email sharing']/following::input)[1]").isVisible()

                if ((ele == true)) {
                        // console.log("click Wallet Sharing Check Box")
                        await this.page.locator("(//span[text()='Email sharing']/following::input)[1]").click()

                }

        }
        async clickLimitPerUserCheckBox() {
                let ele = await this.page.locator("(//span[text()='Wallet sharing']/following::input)[1]").isVisible()

                if ((ele == true)) {
                        // console.log("click Limit Per User Check Box")
                        await this.page.locator("(//span[text()='Wallet sharing']/following::input)[1]").click()

                }

        }

        async inputLimitPerUser() {
                let ele = await this.page.locator("input[type='number']")
                await ele.fill("15")


        }

        async clickperEventCheckBox() {
                let ele = await this.page.locator("//span[text()='per event']")

                await ele.check()
                // if ((ele == true)) {
                //         console.log("click per event Check Box")
                //         await this.page.locator("(//input[@value='false'])[2]").click()

                // }

        }

        async clickSaveBtn() {
                const ele = await this.page.locator("//button[text()='Save']")
                expect(ele).toContainText("Save")
                await ele.click({ force: true })



        }


        //Deleted Prize Element

        async searchPrize() {
                let ele = await this.page.locator("//input[@placeholder='Search...']").isVisible()

                if ((ele == true)) {
                        // console.log("click Limit Per User Check Box")
                        await this.page.locator("//input[@placeholder='Search...']").fill("Auto Test")

                }
                // const ele = await this.page.locator("//input[@placeholder='Search...']")
                // expect(ele).toBeVisible()
                // await ele.fill("Auto Test")



        }

        async deletePrize() {

                let ele = await this.page.locator("//button[text()='Delete']").isVisible()

                if ((ele == true)) {
                        // console.log("click Limit Per User Check Box")
                        await this.page.locator("//button[text()='Delete']").click()

                }




        }

        async clickOkBtn() {

                let ele = await this.page.locator("//button[text()='Ok']").isVisible()

                if ((ele == true)) {
                        // console.log("click Limit Per User Check Box")
                        await this.page.locator("//button[text()='Ok']").click()

                }




        }

        /// From here updated Sohag/////////////////


        async OpenEditor() {
                const locator = this.page.locator("//button[text()='Open in Editor']")
                await locator.click()
        }
        async Couponcanvaslabl() {
                await this.page.click("//p[text()='Coupon Canvas Editor']")

        }

        async Tfont() {
                const locator = this.page.locator("//div[@class='MuiBox-root css-11p7aiz']")
                await locator.click()
        }
        async Typographylabl() {
              const ele =  await this.page.locator("//h2[text()='Typography']")
              expect(ele).toContainText("Typography")

        }


        async TaddText() {
                const locator = this.page.locator("div.MuiBox-root.css-1r89n98")
                //expect(locator).toBeVisible()
                await locator.click()
        }
        
        async clickAddTextBtn() {
                const ele = await this.page.locator("div.MuiBox-root.css-1r89n98")
                await ele.click()
        }


        async clickToSelectText() {
                const locator = this.page.locator("//div[text()='TEXT']")
                //expect(locator).toBeVisible()
                await locator.click({force:true})
        }

        
        async changeTextlabl() {
                const ele = await this.page.locator("//p[text()='Change Text']")
                expect(ele).toContainText("Change Text")
        }

        async inputCouponTitleText() {
                const ele = await this.page.locator("(//textarea[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]")
                await ele.fill("Welcome")
        }
        


        async ChangeText() {
                const locator = this.page.locator("(//textarea[@rows='3'])[2]")
                expect(locator).toBeVisible()
                await locator.fill("Welcome")
        }

        // async ChangeText() {
        // const locator = this.page.locator("(//textarea[@rows='3'])[2]")
        //  await locator.click()
        // }
        async Positionlabl() {
              const ele =  await this.page.locator("//h5[text()='Position']")
              expect(ele).toContainText("Position")

        }

        async Left() {
                const locator = this.page.locator("div.MuiBox-root.css-14wbn55")
                await locator.click({force:true})
        }

        async Right() {
                const locator = this.page.locator("div.MuiBox-root.css-1paqvjl")
                await locator.click({force:true})
        }

        async Center() {
                const locator = this.page.locator("//div[@class='MuiBox-root css-1bturrv']")
                await locator.click({force:true})
        }


        async Alignment() {
                const locator = this.page.locator("div.MuiBox-root.css-1s8tt5x")
                await locator.click({force:true})
        }
        async Fontlabl() {
                await this.page.click("//h5[text()='Font']")

        }

        async Font() {
                await this.page.click("(//div[@role='button'])[2]")

        }

        async Midnight() {
                await this.page.click("//li[text()='Midnight.ttf']")

        }
        async Thin() {
                await this.page.click("//li[text()='Thin.otf']")

        }
        async Bold() {
                const locator = this.page.locator("div.MuiBox-root.css-l1n5h5")
                await locator.click({force:true})
        }
        async Italic() {
                const locator = this.page.locator("div.MuiBox-root.css-n12ji5")
                await locator.click()
        }
        async Underline() {
                const locator = this.page.locator("div.MuiBox-root.css-3hdlli")
                await locator.click()
        }
        async Blocktype() {
                const locator = this.page.locator("div.MuiBox-root.css-nh0dhm")
                await locator.click()
        }

        async Boldd() {
                await this.page.click("//div[text()='Bold']")

        }
        async Lighter() {
                await this.page.click("//li[text()='Lighter']")

        }
        async Normal() {
                await this.page.click("//li[text()='Normal']")

        }

        async Bolder() {
                await this.page.click("//li[text()='Bolder']")

        }
        async Fontsize() {
                await this.page.click("//input[@id='P-13727520022' and @type='number']")

        }
        async TBackBtn() {
                await this.page.click("div.MuiBox-root.css-9xd5lq")

        }
        async TNextBtn() {
                await this.page.click("div.MuiBox-root.css-1osoyr8")

        }
        async TDeleteBtn() {
                await this.page.click("div.MuiBox-root.css-knjr7e")

        }
        async TMerzinBtn() {
                await this.page.click("(//div[@active='true'])[2]")

        }
        async TCopyBtn() {
                await this.page.click("//div[@iconcolor='#f1c40f']")

        }

        async XBtn() {
                await this.page.click("//p[text()='X']")

        }

        async YBtn() {
                await this.page.click("//input[@type='number' and @id='P-12924444182']")

        }
        async WBtn() {
                await this.page.click("//input[@type='number' and @id='P19778289572']")

        }

        async HBtn() {
                await this.page.click("//input[@type='number' and @id='P9531350362']")

        }
        async Fillabl() {
                await this.page.click("//h5[text()='Fill']")

        }

        async FillBtn() {
                await this.page.click("div[black='true']")

        }
        async Colorpickerlabl() {
                await this.page.click("//h3[text()='Color Picker']")

        }

        async SwatchBtn() {
                await this.page.click("button[aria-label='Add Color']")

        }

        async SwatchBtn1() {
                await this.page.click("//span[text()='#ff0000ff']")

        }
        async Delete() {
                await this.page.click("(//button[@aria-label='delete'])[2]")

        }
        async RGBlabl() {
                await this.page.click("//h3[text()='RGB']")

        }
        async RGB1() {
                await this.page.click("(//input[@inputmode='numeric'])[1]")

        }
        async RGB2() {
                await this.page.click("(//input[@inputmode='numeric'])[2]")

        }
        async RGB3() {
                await this.page.click("(//input[@inputmode='numeric'])[3]")

        }
        async RGB4() {
                await this.page.click("//input[@id='P19792246122']")

        }
        async DropBtn() {
                await this.page.click("//div[contains(@class,'MuiSelect-select MuiSelect-standard')]")

        }

        async Soliddrp() {
                await this.page.click("//div[text()='Solid']")

        }
        async Horizontal() {
                await this.page.click("//li[text()='Horizontal']")

        }
        async Vertical() {
                await this.page.click("//li[text()='Vertical']")

        }
        async Diagonal() {
                await this.page.click("//li[text()='Diagonal']")

        }
        async Radial() {
                await this.page.click("//li[text()='Radial']")

        }
        async Solid() {
                await this.page.click("//li[@data-value='solid']")

        }


        async Save() {
                const locator = this.page.locator("(//button[text()='Save'])[3]")
                expect(locator).toContainText("Save")
                await locator.click()

        }

        ///Image section/////////

        async Image() {
                const locator = this.page.locator("(//button[@isbackground='true'])[2]")
                await locator.click()
        }
        async Backgroundlabl() {
                await this.page.click("//h2[text()='Background']")

        }
        async Backgroundimagelabl() {
                await this.page.click("//p[text()='Background Image']")

        }

        async BcImage() {
                const buffer = readFileSync('testData/images/banner.png');
                // Create the DataTransfer and File
                const dataTransfer = await this.page.evaluateHandle((data) => {
                        const dt = new DataTransfer();
                        // Convert the buffer to a hex array
                        const file = new File([data.toString('hex')], 'banner.png', { type: 'application/png' });
                        dt.items.add(file);
                        return dt;
                }, buffer);

                // Now dispatch
                await this.page.dispatchEvent("(//div[@class='MuiBox-root css-v2612'])[1]", 'drop', { dataTransfer });

        }
        async Logoimagelabl() {
                await this.page.click("//p[text()='Logo Image']")

        }
        async LgImage() {
                const buffer = readFileSync('testData/images/banner.png');
                // Create the DataTransfer and File
                const dataTransfer = await this.page.evaluateHandle((data) => {
                        const dt = new DataTransfer();
                        // Convert the buffer to a hex array
                        const file = new File([data.toString('hex')], 'banner.png', { type: 'application/png' });
                        dt.items.add(file);
                        return dt;
                }, buffer);

                // Now dispatch
                await this.page.dispatchEvent("(//div[@class='MuiBox-root css-v2612'])[2]", 'drop', { dataTransfer });

        }
        async FgImage() {
                const buffer = readFileSync('testData/images/banner.png');
                // Create the DataTransfer and File
                const dataTransfer = await this.page.evaluateHandle((data) => {
                        const dt = new DataTransfer();
                        // Convert the buffer to a hex array
                        const file = new File([data.toString('hex')], 'banner.png', { type: 'application/png' });
                        dt.items.add(file);
                        return dt;
                }, buffer);

                // Now dispatch
                await this.page.dispatchEvent("(//div[@class='MuiBox-root css-vjb914']//div)[3]", 'drop', { dataTransfer });

        }
        async IBackBtn() {
                await this.page.click("div.MuiBox-root.css-9xd5lq")

        }
        async INextBtn() {
                await this.page.click("div.MuiBox-root.css-1osoyr8")

        }
        async IDeleteBtn() {
                await this.page.click("div.MuiBox-root.css-knjr7e")

        }
        async IMerzinBtn() {
                await this.page.click("(//div[@active='true'])[2]")

        }
        async ICopyBtn() {
                await this.page.click("//div[@iconcolor='#f1c40f']")

        }
        async ImageXBtn() {
                await this.page.click("(//input[@type='number'])[2]")

        }

        async ImageYBtn() {
                await this.page.click("(//input[@type='number'])[3]")

        }
        async ImageWBtn() {
                await this.page.click("//p[text()='w']")

        }

        async ImageHBtn() {
                await this.page.click("//p[text()='H']")

        }
        async Backcolorlabl() {
                await this.page.click("//h5[text()='Background color']")

        }
        async ImageFillBtn() {
                await this.page.click("div[black='true']")

        }
        async IColorpickerlabl() {
                await this.page.click("//h3[text()='Color Picker']")

        }

        async ISwatchBtn() {
                await this.page.click("button[aria-label='Add Color']")

        }

        async ISwatchBtn1() {
                await this.page.click("//span[text()='#ff0000ff']")

        }
        async IDelete() {
                await this.page.click("(//button[@aria-label='delete'])[2]")

        }
        async IRGBlabl() {
                await this.page.click("//h3[text()='RGB']")

        }
        async IRGB1() {
                await this.page.click("(//input[@inputmode='numeric'])[1]")

        }
        async IRGB2() {
                await this.page.click("(//input[@inputmode='numeric'])[2]")

        }
        async IRGB3() {
                await this.page.click("(//input[@inputmode='numeric'])[3]")

        }
        async IRGB4() {
                await this.page.click("//input[@id='P19792246122']")

        }
        async IDropBtn() {
                await this.page.click("//div[contains(@class,'MuiSelect-select MuiSelect-standard')]")

        }

        async ISoliddrp() {
                await this.page.click("//div[text()='Solid']")

        }
        async IHorizontal() {
                await this.page.click("//li[text()='Horizontal']")

        }
        async IVertical() {
                await this.page.click("//li[text()='Vertical']")

        }
        async IDiagonal() {
                await this.page.click("//li[text()='Diagonal']")

        }
        async IRadial() {
                await this.page.click("//li[text()='Radial']")

        }
        async ISolid() {
                await this.page.click("//li[@data-value='solid']")

        }


        async ISave() {
                const locator = this.page.locator("(//button[text()='Save'])[3]")
                expect(locator).toContainText("Save")
                await locator.click()

        }
        ///Code Section///////////////////

        async Code() {
                const locator = this.page.locator("(//button[@isbackground='true'])[3]")
                await locator.click()
        }
        async Codelabl() {
                await this.page.click("//h2[text()='Code']")

        }
        async Textcode() {
                await this.page.click("//button[text()='Text Code']")

        }
        async Barcode() {
                await this.page.click("//button[text()='Bar Code']")

        }
        async Addexpire() {
                await this.page.click("//button[text()='Add Expiration Date']")

        }
        async BarCodelabl() {
                await this.page.click("//p[text()='Barcode value']")

        }
        async Barcodevalue() {
                const locator = this.page.locator("//input[@id='P16002645472']")
                expect(locator).toBeVisible()
                await locator.fill("Spartan")
        }
        // async Barcodevalue() {
        //         await this.page.click("//input[@id='P16002645472']")

        // }

        async CBackBtn() {
                await this.page.click("div.MuiBox-root.css-9xd5lq")

        }
        async CNextBtn() {
                await this.page.click("div.MuiBox-root.css-1osoyr8")

        }
        async CDeleteBtn() {
                await this.page.click("div.MuiBox-root.css-knjr7e")

        }
        async CMerzinBtn() {
                await this.page.click("(//div[@active='true'])[2]")

        }
        async CCopyBtn() {
                await this.page.click("//div[@iconcolor='#f1c40f']")

        }
        async CodeXBtn() {
                await this.page.click("(//input[@type='number'])[2]")

        }

        async CodeYBtn() {
                await this.page.click("(//input[@type='number'])[3]")

        }
        async CodeWBtn() {
                await this.page.click("//p[text()='w']")

        }

        async CodeHBtn() {
                await this.page.click("//p[text()='H']")

        }
        async CodeFILLlabl() {
                await this.page.click("//h5[text()='Fill']")

        }
        async CodeFillBtn() {
                await this.page.click("div[black='true']")

        }
        async CColorpickerlabl() {
                await this.page.click("//h3[text()='Color Picker']")

        }

        async CSwatchBtn() {
                await this.page.click("button[aria-label='Add Color']")

        }

        async CSwatchBtn1() {
                await this.page.click("//span[text()='#ff0000ff']")

        }
        async CDelete() {
                await this.page.click("(//button[@aria-label='delete'])[2]")

        }
        async CRGBlabl() {
                await this.page.click("//h3[text()='RGB']")

        }
        async CRGB1() {
                await this.page.click("(//input[@inputmode='numeric'])[1]")

        }
        async CRGB2() {
                await this.page.click("(//input[@inputmode='numeric'])[2]")

        }
        async CRGB3() {
                await this.page.click("(//input[@inputmode='numeric'])[3]")

        }
        async CRGB4() {
                await this.page.click("//input[@id='P19792246122']")

        }
        async CDropBtn() {
                await this.page.click("//div[contains(@class,'MuiSelect-select MuiSelect-standard')]")

        }

        async CSoliddrp() {
                await this.page.click("//div[text()='Solid']")

        }
        async CHorizontal() {
                await this.page.click("//li[text()='Horizontal']")

        }
        async CVertical() {
                await this.page.click("//li[text()='Vertical']")

        }
        async CDiagonal() {
                await this.page.click("//li[text()='Diagonal']")

        }
        async CRadial() {
                await this.page.click("//li[text()='Radial']")

        }
        async CSolid() {
                await this.page.click("//li[@data-value='solid']")

        }


        async CSave() {
                const locator = this.page.locator("(//button[text()='Save'])[3]")
                expect(locator).toContainText("Save")
                await locator.click()

        }

        /////Share section////////////////

        async ShareBtn() {
                const locator = this.page.locator("(//button[@isbackground='true'])[4]")
                await locator.click()
        }
        async Sharelabl() {
                await this.page.click("//h2[text()='Share']")

        }
        async Filllabl() {
                await this.page.click("(//div[@class='MuiBox-root css-1pqer0i'])[1]")

        }
        async ShfillBtn() {
                await this.page.click("(//div[@class='MuiBox-root css-1pqer0i'])[1]")

        }
        async ShSwatchBtn() {
                await this.page.click("button[aria-label='Add Color']")

        }

        async ShSwatchBtn1() {
                await this.page.click("//span[text()='#ff0000ff']")

        }
        async ShDelete() {
                await this.page.click("(//button[@aria-label='delete'])[2]")

        }
        // async ShRGB1() {
        //         const locator = this.page.locator("//input[@inputmode='numeric'])[1]")
        //         expect(locator).toBeVisible()
        //         await locator.fill("120")
        // }
        async ShRGB1() {
                await this.page.click("(//input[@inputmode='numeric'])[1]")

        }
        async ShRGB2() {
                await this.page.click("(//input[@inputmode='numeric'])[2]")

        }
        async ShRGB3() {
                await this.page.click("(//input[@inputmode='numeric'])[3]")

        }
        async ShRGB4() {
                await this.page.click("//input[@id='P19792246122']")

        }
        async ShDropBtn() {
                await this.page.click("//div[contains(@class,'MuiSelect-select MuiSelect-standard')]")

        }

        async ShSoliddrp() {
                await this.page.click("//div[text()='Solid']")

        }
        async ShHorizontal() {
                await this.page.click("//li[text()='Horizontal']")

        }
        async ShVertical() {
                await this.page.click("//li[text()='Vertical']")

        }
        async ShDiagonal() {
                await this.page.click("//li[text()='Diagonal']")

        }
        async ShRadial() {
                await this.page.click("//li[text()='Radial']")

        }
        async ShSolid() {
                await this.page.click("//li[@data-value='solid']")

        }
        async ShSave() {
                const locator = this.page.locator("(//button[text()='Save'])[3]")
                expect(locator).toContainText("Save")
                await locator.click()

        }
        async Textcollab() {
                await this.page.click("(//p[text()='Text Color'])[1]")

        }
        async TextcolfillBtn() {
                await this.page.click("(//div[@class='MuiBox-root css-1pqer0i'])[2]")

        }
        async Changetextlab() {
                await this.page.click("//p[text()='Change Text']")

        }
        async Changetext() {
                const locator = this.page.locator("//input[@rows='3']")
                expect(locator).toBeVisible()
                await locator.fill("Automation")
        }
        async Shareby() {
                await this.page.click("//p[text()='Share By']")

        }
        async SMSBtn() {
                await this.page.click("//button[text()='SMS']")

        }
        async EmailBtn() {
                await this.page.click("//button[text()='Email']")

        }
        async WalletBtn() {
                await this.page.click("//button[text()='Wallet']")

        }
        async BackBtn() {
                await this.page.click("div.MuiBox-root.css-9xd5lq")

        }
        async NextBtn() {
                await this.page.click("div.MuiBox-root.css-1osoyr8")

        }
        async DeleteBtn() {
                await this.page.click("div.MuiBox-root.css-knjr7e")

        }
        async MerzinBtn() {
                await this.page.click("(//div[@active='true'])[2]")

        }
        async CopyBtn() {
                await this.page.click("//div[@iconcolor='#f1c40f']")

        }
        async ShareXBtn() {
                await this.page.click("(//input[@type='number'])[2]")

        }

        async ShareYBtn() {
                await this.page.click("(//input[@type='number'])[3]")

        }
        async ShareWBtn() {
                await this.page.click("(//input[@type='number'])[4]")

        }

        async ShareHBtn() {
                await this.page.click("(//input[@type='number'])[5]")

        }
        async ShrSave() {
                const locator = this.page.locator("(//button[text()='Save'])[2]")
                expect(locator).toContainText("Save")
                await locator.click()

        }

        /////////////////Open in Wizard////////////////

        async Clickopenwizard() {
                const locator = this.page.locator("//button[text()='Open in Wizard']")
                await locator.click()
        }
        async Welcomelabl() {
                const locator = this.page.locator("//h1[text()='Welcome to the Coupon Wizard']")
                await expect(locator).toHaveText('Welcome to the Coupon Wizard');

        }

        // async ClickImageupload() {
        //         const locator = this.page.locator("//div[@class='MuiBox-root css-1qgo2vq']")
        //         await locator.click()
        //         await this.page.dispatchEvent("//button[text()='Choose File']", 'drop', { dataTransfer });
        //         }
        async ClickImageupload() {
                const locator = this.page.locator("//div[@class='MuiBox-root css-1qgo2vq']")
                await locator.click()
                const filePath0 = "testData/images/potrait.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                await this.page.locator("//button[text()='Choose File']").click()
                await this.page.waitForTimeout(3000)
                await this.page.locator("(//button[text()='Save'])[2]").click()

        }


        async ClickNext() {
                const locator = this.page.locator("//button[text()='Next']")
                await locator.click({force:true})
        }

        async clickHeaderOkBtn() {
                const locator = this.page.locator("//button[text()='Ok']")
                await locator.click()
        }

        async ClickIconlogo() {
                const locator = this.page.locator("//div[@class='MuiBox-root css-v2612']")
                await locator.click()
                const filePath0 = "testData/images/potrait.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                await this.page.locator("//button[text()='Choose File']").click()
                await this.page.waitForTimeout(3000)
                await this.page.locator("(//button[text()='Save'])[2]").click()
                ////////
                // await this.page.locator("//span[text()='per event']/following::input")
                // //expect(locator).toBeVisible()
                // //await locator = keyboard.press("End")
                // // await locator.click()
                // await locator.fill("winter1")
                // //await this.page.locator("//button[text()='Next']").click()

        }

        async clickHeaderNameInputField() {
                const locator = this.page.locator("//div[@class='MuiBox-root css-1e4f5sg']//p[1]")
                //expect(locator).toBeVisible()
                //await locator = keyboard.press("End")
                // await locator.click()
                await locator.click()
                // await this.page.locator("//button[text()='Next']").click()
        }

        async InputHeadername() {
                const locator = this.page.locator("//input[@placeholder='Enter header']")
                //expect(locator).toBeVisible()
                //await locator = keyboard.press("End")
                // await locator.click()
                await locator.fill("Demo Header")
                // await this.page.locator("//button[text()='Next']").click()
        }

        //click({ force: true })   
        async UploadPrimaryImagr() {
                const locator = this.page.locator("//div[@class='MuiBox-root css-v2612']")
                await locator.click()
                const filePath0 = "testData/images/potrait.png"
                this.page.on("filechooser", async (filechooser) => {
                        await filechooser.setFiles([filePath0]);
                })
                await this.page.locator("//button[text()='Choose File']").click()
                await this.page.waitForTimeout(3000)
                await this.page.locator("(//button[text()='Save'])[2]").click()

        }

        async Clickcalendar() {
                const locator = this.page.locator("(//button[text()='Pick Date from Calendar'])[2]")
                await locator.click()
        }
        async Clickdate() {
                const locator = this.page.locator("//button[text()='27']")
                await locator.click()
        }

        async DateSave() {
                const locator = this.page.locator("(//button[text()='Save'])[2]")
                await locator.click()
        }

        async Clickcbarcode() {
                const locator = this.page.locator("//input[@placeholder='Enter code value']")
                await locator.click()
        }

        async inputBarCode() {
                const locator = this.page.locator("//input[@placeholder='Enter code value']")
                await locator.fill("Demo Data")
        }

        async Clicksharedropdown() {
                const locator = this.page.locator("(//div[@role='button'])[2]")
                await locator.click()
        }
        async ClickshareEmail() {
                const locator = this.page.locator("//span[text()='Share via Email']")
                await locator.click()
        }
        async Clicksharegooglewallet() {
                const locator = this.page.locator("//span[text()='Add in Google Wallet']")
                await locator.click()
        }
        async Clickshareapplewallet() {
                const locator = this.page.locator("//li[@data-value='Add in Apple Wallet']")
                await locator.click()
                // await this.page.locator("//button[text()='Next']").click({force:true})
        }

        async clickOnScreen() {
                const locator = this.page.locator("(//div[@id='menu-']//div)[1]")
                await locator.click()
                // await this.page.locator("//button[text()='Next']").click({force:true})
        }

        
        async Something() {
                const locator = this.page.locator("p.MuiTypography-root.MuiTypography-body1.css-1vrthfn")
                await locator.click()
        }
        async Clickcontinueeditor() {
                const locator = this.page.locator("//button[text()='Continue to Editor']")
                await locator.click()
        }
        async ClickSave() {
                const locator = this.page.locator("(//button[text()='Save'])[2]")
                await locator.click()
        }

}