import test, { expect } from "@fixtures/basePages";
import * as data from "@testData/login.cred.json"
import { readFileSync } from 'fs'




test("Verify Mobile Design Section Functionality", async ({ loginPage, MainMenu, page }) => {

        await test.step("Login Admin And Land to Home Screen", async () => {





                await page.goto('/admin/#/sign-in')
                await loginPage.login(data.username, data.password)
                const title = await page.title();
                expect(title).toBe('DXP Admin')

                await MainMenu.clickHomeAvater();



                await MainMenu.mainMenuBtn();



                await MainMenu.clickMobileDesign();

                await page.waitForTimeout(6000)

                // await expect(page).toHaveURL(Env.MobileDesignPageUrl)










        })


        await test.step("MD002-01 | Verify Font upload functionality", async () => {
                // let ele = MainMenu.clickMobileDesign()
                // expect(await ele.getAtribute("placeholder")).toBe("Mobile Deseign")
                // console.log(await MainMenu.mobileDesign())

                // await MainMenu.clickUploadFontAndUploadFiles();


                // const buffer = readFileSync('./videos/a.png');
                // // Create the DataTransfer and File
                // const dataTransfer = await page.evaluateHandle((data) => {
                // const dt = new DataTransfer();
                // // Convert the buffer to a hex array
                // const file = new File([data.toString('hex')], 'a.png', { type: 'application/png' });
                // dt.items.add(file);
                // return dt;
                // }, buffer);

                // // Now dispatch
                // await page.dispatchEvent('[type="font"]', 'drop', { dataTransfer });


                // await page.waitForTimeout(6000)


                //         page.on("filechooser", async (filechooser) => {
                //                 await filechooser.setFiles([filePath0])
                //         })
                //         await MainMenu.clickUploadFontInputFiled()

                //     

                //delete Font
                await MainMenu.deleteFont()

                //click Upload Font And Upload Files
                await MainMenu.clickUploadFontAndUploadFiles()

        })

        await test.step("MD002-02 | Verify input parimary color functionality", async () => {


                await MainMenu.clickClearAllBtn();


                await MainMenu.checkPrimaryColortxt()

                await MainMenu.clickPrimaryColorField()




                await MainMenu.primaryColorFirstInputField()

                await MainMenu.primaryColorSecondInputField()

                await MainMenu.primaryColorThirdInputField()

                await MainMenu.primaryColorOpacityInputField()

                await MainMenu.primaryColorHexInputField()

                await MainMenu.clickSaveBtn()































        })
        await test.step("MD002-03 | Verify input secondary color functionality", async () => {







                await MainMenu.checkSecondaryText();

                await MainMenu.clickSecondaryColorBtn();


                await MainMenu.SecondaryColorFirstInputField()

                await MainMenu.SecondaryColorSecondInputField()

                await MainMenu.SecondaryColorThirdInputField()

                await MainMenu.SecondaryColorOpacityInputField()

                await MainMenu.SecondaryColorHexInputField()



                await MainMenu.clickSaveBtn()






        })

        await test.step("MD002-04 | Verify input Tertiary color functionality", async () => {


                await MainMenu.checkTertiaryText();

                await MainMenu.clickTertiaryColorBtn();



                await MainMenu.TertiaryColorFirstInputField()

                await MainMenu.TertiaryColorSecondInputField()

                await MainMenu.TertiaryColorThirdInputField()

                await MainMenu.TertiaryColorOpacityInputField()

                await MainMenu.TertiaryColorHexInputField()

                await MainMenu.clickSaveBtn()






        })

        await test.step("MD002-05 | Verify input Button color functionality", async () => {


                await MainMenu.checkButtonText();

                await MainMenu.clickButtonColorBtn();


                await MainMenu.ButtonColorFirstInputField()

                await MainMenu.ButtonColorSecondInputField()

                await MainMenu.ButtonColorThirdInputField()

                await MainMenu.ButtonColorOpacityInputField()

                await MainMenu.ButtonColorHexInputField()

                await MainMenu.clickSaveBtn()





        })

        await test.step("MD002-06 | Verify input Button Glow color functionality", async () => {


                await MainMenu.checkButtonGlowText();

                await MainMenu.clickButtonGlowColorBtn();


                await MainMenu.ButtonGlowColorFirstInputField()

                await MainMenu.ButtonGlowColorSecondInputField()

                await MainMenu.ButtonGlowColorThirdInputField()

                await MainMenu.ButtonGlowColorOpacityInputField()

                await MainMenu.ButtonGlowColorHexInputField()

                await MainMenu.clickSaveBtn()





        })

        await test.step("MD002-07 | Verify that admin saccessfully input Text Field color", async () => {


                await MainMenu.checkTextText();

                await MainMenu.clickTextColorBtn();


                await MainMenu.TextColorFirstInputField()

                await MainMenu.TextColorSecondInputField()

                await MainMenu.TextColorThirdInputField()

                await MainMenu.TextColorOpacityInputField()

                await MainMenu.TextColorHexInputField()

                await MainMenu.clickSaveBtn()





        })

        await test.step("MD002-08 | Verify that admin saccessfully input Text Field color", async () => {


                await MainMenu.checkTextDialogBoxText();

                await MainMenu.clickTextDialogBoxColorBtn();


                await MainMenu.TextDialogBoxColorFirstInputField()

                await MainMenu.TextDialogBoxColorSecondInputField()

                await MainMenu.TextDialogBoxColorThirdInputField()

                await MainMenu.TextDialogBoxColorOpacityInputField()

                await MainMenu.TextDialogBoxColorHexInputField()

                await MainMenu.clickSaveBtn()





        })

        await test.step("MD002-09 | Verify that admin saccessfully input Header Field color", async () => {


                await MainMenu.checkHeaderFieldText();

                await MainMenu.clickHeaderFieldColorBtn();


                await MainMenu.HeaderColorFirstInputField()

                await MainMenu.HeaderColorSecondInputField()

                await MainMenu.HeaderColorThirdInputField()

                await MainMenu.HeaderColorOpacityInputField()

                await MainMenu.HeaderColorHexInputField()

                await MainMenu.clickSaveBtn()





        })

        await test.step("MD002-10 | Verify that admin saccessfully input Header Text Field color", async () => {


                await MainMenu.checkHeaderTextFieldText();

                await MainMenu.clickHeaderTextFieldColorBtn();


                await MainMenu.HeaderTextColorFirstInputField()

                await MainMenu.HeaderTextColorSecondInputField()

                await MainMenu.HeaderTextColorThirdInputField()

                await MainMenu.HeaderTextColorOpacityInputField()

                await MainMenu.HeaderTextColorHexInputField()

                await MainMenu.clickSaveBtn()





        })

        await test.step("MD002-011 | Verify that admin saccessfully input Gamification Field color", async () => {


                await MainMenu.checkGamificationFieldText();

                await MainMenu.clickGamificationFieldColorBtn();


                await MainMenu.GamificationColorFirstInputField()

                await MainMenu.GamificationColorSecondInputField()

                await MainMenu.GamificationColorThirdInputField()

                await MainMenu.GamificationColorOpacityInputField()

                await MainMenu.GamificationColorHexInputField()

                await MainMenu.clickSaveBtn()





        })

        await test.step("MD002-012 | Verify that admin saccessfully input Gamification Glow Line Field color", async () => {


                await MainMenu.checkGamificationGlowLineFieldText();

                await MainMenu.clickGamificationGlowLineFieldColorBtn();


                await MainMenu.GamificationGlowLineColorFirstInputField()

                await MainMenu.GamificationGlowLineColorSecondInputField()

                await MainMenu.GamificationGlowLineColorThirdInputField()

                await MainMenu.GamificationGlowLineColorOpacityInputField()

                await MainMenu.GamificationGlowLineColorHexInputField()

                await MainMenu.clickSaveBtn()





        })

        await test.step("MD002-012 | Verify that admin saccessfully input Gamification Glow Line Field color", async () => {

                //delete Uploaded Landscape BG
                await MainMenu.deleteUploadedLandscapeBG()

                await page.waitForTimeout(3000)

                //delete Uploaded Portrait BG
                await MainMenu.deleteUploadedPortraitBG()
                await page.waitForTimeout(3000)

                //delete Uploaded Landscape BG Header
                await MainMenu.deleteUploadedLandscapeBGHeader()

                await page.waitForTimeout(3000)

                //delete Uploaded Portrait BG Header
                await MainMenu.deleteUploadedPortraitBGHeader()
                await page.waitForTimeout(3000)

                //delete Uploaded MainLogo
                await MainMenu.deleteUploadedMainLogo()
                await page.waitForTimeout(3000)

        })

        await test.step("MD002-013 | Upload Landscape Background Image", async () => {

                // const [fileChooser] = await Promise.all([
                // // It is important to call waitForEvent before click to set up waiting.
                // page.waitForEvent('filechooser'),
                //                 // Opens the file chooser.
                //  page.click("(//div[@class='MuiBox-root css-1bfcot9']//div)[2]", {force:true})
                // ]);
                // await fileChooser.setFiles('device.png');

                // page.on('filechooser', async (fileChooser) => {
                //         await page.click("(//div[@class='MuiBox-root css-1bfcot9']//div)[2]", {force: true})
                //         await fileChooser.setFiles('testData/images/icon.png');
                //       });



                //         page.on("filechooser", async (filechooser) => {       

                //         await filechooser.setFiles([filePath0])
                //     })
                //     await page.click("(//div[@class='MuiBox-root css-1bfcot9']//div)[2]", {force: true})

                // //     await page.locator('text=Landscape Background:ImageVideo >> div').nth(3).click();
                // //     await MainMenu.clickLandscapeBackgroundInputField();

                // Read your file into a buffer.
                // const buffer = readFileSync('./runtime_config/common/file.pdf');

                // // Create the DataTransfer and File
                // const dataTransfer = await scope.page.evaluateHandle((data) => {
                //     const dt = new DataTransfer();
                //     // Convert the buffer to a hex array
                //     const file = new File([data.toString('hex')], 'file.pdf', { type: 'application/pdf' });
                //     dt.items.add(file);
                //     return dt;
                // }, buffer);

                // // Now dispatch
                // await page.dispatchEvent('YOUR_TARGET_SELECTOR', 'drop', { dataTransfer });


                // await page.waitForTimeout(60000)

                // const buffer = readFileSync('testData/videos/test-video-1.mp4');
                //         // Create the DataTransfer and File
                //   const dataTransfer = await page.evaluateHandle((data) => {
                //         const dt = new DataTransfer();
                //         // Convert the buffer to a hex array
                //         const file = new File([data.toString('hex')], 'test-video-1.mp4', { type: 'application/mp4' });
                //         dt.items.add(file);
                //         return dt;
                //       }, buffer);


                //       // Now dispatch
                //       await page.dispatchEvent("(//div[@type='image']//div)[1]", 'drop', { dataTransfer });


                //click Video Check Box
                await MainMenu.clickVideoCheckBox()

                const buffer = readFileSync('testData/videos/video.mp4');
                // Create the DataTransfer and File
                const dataTransfer = await page.evaluateHandle((data) => {
                        const dt = new DataTransfer();
                        // Convert the buffer to a hex array
                        const file = new File([data.toString('hex')], 'video.mp4', { type: 'application/mp4' });
                        dt.items.add(file);
                        return dt;
                }, buffer);


                // Now dispatch
                await page.dispatchEvent("(//div[@class='MuiBox-root css-78n4oq']//div)[1]", 'drop', { dataTransfer });





        })

        await test.step("MD002-014 | Upload Portrait Background Image", async () => {



                const buffer = readFileSync('./videos/a.png');
                // Create the DataTransfer and File
                const dataTransfer = await page.evaluateHandle((data) => {
                        const dt = new DataTransfer();
                        // Convert the buffer to a hex array
                        const file = new File([data.toString('hex')], 'a.png', { type: 'application/png' });
                        dt.items.add(file);
                        return dt;
                }, buffer);

                // Now dispatch
                await page.dispatchEvent("(//div[@class='MuiBox-root css-vjb914'])[2]", 'drop', { dataTransfer });






        })

        await test.step("MD002-015 | Upload Landscape Background Header Image", async () => {



                const buffer = readFileSync('testData/images/TitleBanner.jpg');
                // Create the DataTransfer and File
                const dataTransfer = await page.evaluateHandle((data) => {
                        const dt = new DataTransfer();
                        // Convert the buffer to a hex array
                        const file = new File([data.toString('hex')], 'a.png', { type: 'application/png' });
                        dt.items.add(file);
                        return dt;
                }, buffer);

                // Now dispatch
                await page.dispatchEvent("(//div[@class='MuiBox-root css-v2612'])[2]", 'drop', { dataTransfer });





        })

        await test.step("MD002-016 | Upload Portrait Background Header Image", async () => {



                const buffer = readFileSync('./videos/a.png');
                // Create the DataTransfer and File
                const dataTransfer = await page.evaluateHandle((data) => {
                        const dt = new DataTransfer();
                        // Convert the buffer to a hex array
                        const file = new File([data.toString('hex')], 'a.png', { type: 'application/png' });
                        dt.items.add(file);
                        return dt;
                }, buffer);

                // Now dispatch
                await page.dispatchEvent("(//div[@class='MuiBox-root css-v2612'])[2]", 'drop', { dataTransfer });





        })

        await test.step("MD002-017 | Upload Main Logo", async () => {



                const buffer = readFileSync('testData/logos/Logo.jpg');
                // Create the DataTransfer and File
                const dataTransfer = await page.evaluateHandle((data) => {
                        const dt = new DataTransfer();
                        // Convert the buffer to a hex array
                        const file = new File([data.toString('hex')], 'Logo.jpg', { type: 'application/jpg' });
                        dt.items.add(file);
                        return dt;
                }, buffer);

                // Now dispatch
                await page.dispatchEvent("(//div[@class='MuiBox-root css-vjb914']//div)[2]", 'drop', { dataTransfer });

                await page.waitForTimeout(3000)



        })

})
