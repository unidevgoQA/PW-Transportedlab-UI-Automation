import { expect } from "@fixtures/basePages";
import { Page } from "@playwright/test";
import { readFileSync } from 'fs'
import BaseFunctions from "@base-function/baseFunctions";

export default class MobileDesign {
    private base: BaseFunctions;
    constructor(private page: Page
    ) {
        this.base = new BaseFunctions(page);
    }

    private mobileDesignPageElements = {
        mainMenuPage: "text=Main Menu",
        mobileDesignPage: "text=Mobile Design",
        arcadePage: "text=Arcade",
        deletefont: "//p[text()='Aa']/following-sibling::button",
        uploadFontInputField: "//div[@class='MuiBox-root css-v2612']",
        uploadedFontTitle: "//p[text()='Midnight']",
        entryScreenSelectionField: "//div[@role='button']",
        myProfile: "//li[@data-value='userProfile']",
        entryScreenRulesEle: "//li[@data-value='rules']",
        entryScreenHowToPlay: "//li[@data-value='howToPlay']",
        entryScreenPrize: "//li[@data-value='prize']",
        entryScreenHome: "//li[@data-value='home']",
        mobileLinkButton: `(//button[@aria-label='Show Mobile Link']//button)[1]`,
        guessTheScroreBtn: "//p[text()='Guess The Score']",
        mobileLinkBtn: "//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]",
        uploadedFontThin: "//p[text()='Thin.ot']",
        clearAllBtn: "//button[text()='Clear All']",
        primaryColorTitleText: "//p[text()='Primary']",
        primaryColorInputField: "//p[text()='Primary']/following-sibling::button",
        primaryColorFirstInputField: "(//input[@type='text'])[1]",
        primaryColorSecondInputField: "(//input[@type='text'])[2]",
        primaryColorThirdInputField: "(//input[@type='text'])[3]",
        primaryColorOpacityInputField: "(//input[@type='text'])[4]",
        primaryColorHexInputField: "(//input[@type='text'])[5]",
        saveBtn: "//button[text()='Save']",
        primaryColorPickerWindowClose: "div.MuiBox-root.css-1x8a1gr",
        secondaryColorTitleText: "//p[text()='Secondary']",
        secondaryColorInputField: "//p[text()='Secondary']/following-sibling::button",
        autoAssignCheckBox: "//input[@value='autoAssignAvatars']",
        profileSetEditBtn: "//button[text()='Edit']",
        profileSetDeleteBtn: "//button[text()='Delete']",
        phoneNumberCheckBox: "(//label[text()='Url or link']/following::input)[1]",
        emailAddressCheckBox: "(//span[text()='Phone Number']/following::input)[1]",
        ageCheckBox: "(//span[text()='Email Address']/following::input)[1]",
        dateOfBirthCheckBox: "(//span[text()='Age']/following::input)[1]",
        zipCodeCheckBox: "(//span[text()='Date of Birth']/following::input)[1]",
        urlTextInputField: "(//label[text()='Text']/following::input)[1]",
        errorMessageForUrlTextInputField: "//p[text()='Incorrect entry.']",
        urlLinkInputField: "(//label[text()='Url or link']/following::textarea)[1]",
        errorMassgeForUrlInputField: "//p[text()='Incorrect entry.']",
        addNewUrlBtn: "//button[text()='Add New Url']",
        addedLinkAndText: "//h6[text()='Added Links and Text']",
        deletAddedUrlLink: "//div[@class='MuiBox-root css-grxo2d']//button[1]",
        okBtn: "//button[text()='Ok']",
        customQuestionCheckBox: "(//span[text()='Zip Code / Postal Code']/following::input)[1]",
        customQuestionInCheckBox: "//input[@type='checkbox']",
        addNewQuestionBtn: "//button[text()='Add question']",
        signUpHomeScreenRadioBtn: "//input[@value='signUpHome']",
        customQuestionScreenRadioBtn: "//input[@value='customQuestionScreen']",
        customeOptionInCheckBox: "//span[text()='Custom Opt-In']",
        addCustomQuestionInBtn: "//button[text()='Add Custom Opt-In']",
        clickFreeFormCheckBox: "//input[@value='freeform']",
        multiChoiceCheckBox: "//input[@value='multipleChoice']",
        customQuestionDiscriptionInputField: "//h5[contains(@class,'MuiTypography-root MuiTypography-h5')]/following::textarea[@rows='6']",
        addChoiceBtn: "//button[text()='Add Choice']",
        choiceInputField: "(//label[text()='Give some description here...']/following::input)[1]",
        customQuestionMendotoryCheckBox: "(//input[contains(@class,'PrivateSwitchBase-input MuiSwitch-input')])[2]",
        customQuestionSaveBtn: "//button[text()='Save']",
        deleteAddedCustomQuestion: "(//div[@class='MuiBox-root css-1519m8w']//button)[2]",
        smsCheckBox: "//input[@value='sms']",
        customQuestionPromptInputField: "(//label[text()='Give some description here...']/following::textarea)[1]",
        customQuestionPromptAutoCheckBox: "//h4/following::input[@type='checkbox']",
        customOptionInCheckBox: "(//span[text()='Custom Opt-In']/preceding::input[@type='checkbox'])[1]",
        addedCustomQuestionInDeleteBtn: "(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]/following-sibling::button)[3]"






    }



    async clickHomeAvater() {
        const ele = this.page.locator('button').nth(2)
        if (await ele.isEnabled()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Home Screen | Home Avater Is Not Visiable | Could not find locator:"${ele}}"`)
        await this.page.waitForLoadState("networkidle");

    }


    async clickArcadePage() {
        let ele = await this.page.locator(this.mobileDesignPageElements.arcadePage)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Arcade Page Element Is Not Visiable | Could not find:"${ele}}"`)
    }

    async HomeAvater() {
        const ele = this.page.locator('button').nth(2)
        if (await ele.isEnabled()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Home Screen | Home Avater Is Not Visiable | Could not find locator:"${ele}}"`)
    }

    async mainMenuBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.mainMenuPage)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Home Avater Button | Main Menu Button Element Is not Visiable | Could not find locator:"${ele}}"`)
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForTimeout(2000)

    }

    async clickMobileDesign() {
        let ele = await this.page.locator(this.mobileDesignPageElements.mobileDesignPage)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Element Is not Visiable | Could not find locator:"${ele}}"`)
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForTimeout(2000)
    }

    async mobileDesign() {
        let ele = await this.page.locator(this.mobileDesignPageElements.mobileDesignPage)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error("Main Menu | Mobile Design Page Element Is not Visiable")
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForTimeout(2000)
    }


    async clickUploadFontInputFiled() {
        let ele = await this.page.locator(this.mobileDesignPageElements.uploadFontInputField).first()
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Font Upload Input Field Element Is not Visiable | Could not find:"${ele}}"`)
        await this.page.waitForLoadState("networkidle");
    }

    async verifyFontUploadedSuccessfully() {
        await this.page.waitForSelector(this.mobileDesignPageElements.uploadedFontTitle)
        let ele = await this.page.locator(this.mobileDesignPageElements.uploadedFontTitle)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Font Uploaded Font Is Not Visible | Could not find:"${ele}}"`)

    }

    async deleteFont() {

        let ele = await this.page.locator(this.mobileDesignPageElements.deletefont)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else {
            console.log(`Main Menu | Mobile Design | There Was No Uploaded Font Is Visiable | Could not find locator:"${ele}}"`)
        }

    }


    async clickEntryScreenSelectField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.entryScreenSelectionField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen Selection Field Element Is Not Visiable | Could not find:"${ele}}"`)
    }

    async selectEntryScreenUserProfile() {
        let ele = await this.page.locator(this.mobileDesignPageElements.myProfile)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen As My Profile Element Is Not Visiable | Could not find:"${ele}}"`)
    }



    async selectEntryScreenRules() {
        let ele = await this.page.locator(this.mobileDesignPageElements.entryScreenRulesEle)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen As Rules Element Is Not Visiable | Could not find:"${ele}}"`)
    }

    async selectEntryScreenHowToPlay() {
        let ele = await this.page.locator(this.mobileDesignPageElements.entryScreenHowToPlay)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen As How To Play Element Is Not Visiable | Could not find:"${ele}}"`)
    }

    async selectEntryScreenPrize() {
        let ele = await this.page.locator(this.mobileDesignPageElements.entryScreenPrize)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen As Prize Element Is Not Visiable | Could not find:"${ele}}"`)
    }

    async selectEntryScreenHome() {
        let ele = await this.page.locator(this.mobileDesignPageElements.entryScreenHome)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen As Home Element Is Not Visiable | Could not find:"${ele}}"`)
    }



    async clickMobileLinkBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.mobileLinkButton)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Guess The Score | Mobile Link Button Element Is Not Visiable | Could not find:"${ele}}"`)
        await this.page.waitForTimeout(2000)
    }

    async clickGussTheScroeSectionForOpenMobileScreen() {
        let ele = await this.page.locator(this.mobileDesignPageElements.guessTheScroreBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Game | Guess The Score Button Element Is Not Visiable | Could not find:"${ele}}"`)
        await this.page.waitForLoadState("networkidle")
    }

    async clickMobileLinkOpenBtn() {
        // Click text=Open Link
        const [page1] = await Promise.all([
            this.page.waitForEvent('popup'),
            this.page.frameLocator('iframe').locator(this.mobileDesignPageElements.mobileLinkBtn).click({ button: "left", delay: 1000 })
        ]);
        // await this.page.waitForLoadState("networkidle")
        await this.page.waitForTimeout(3000)
        return page1;


    }



    async verifyFontSuccessfullyUploaded() {
        await this.page.waitForSelector(this.mobileDesignPageElements.uploadedFontThin)
        let ele = await this.page.locator(this.mobileDesignPageElements.uploadedFontThin)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Uploaded Font Is Not Visiable Successfully | Could not find:"${ele}}"`)
    }

    //click on the clear button
    async clickClearAllBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.clearAllBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Clear All Button Is Not Visiable Successfully | Could not find:"${ele}}"`)
    }

    //Primary Color Input field Element
    async checkPrimaryColortxt() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Primary")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Title Text Is Not Visiable Successfully | Could not find:"${ele}}"`)
    }


    async clickPrimaryColorField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorInputField)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Primary")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Input Field Button Is Not Visiable | Could not find:"${ele}}"`)

    }



    async primaryColorFirstInputField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorFirstInputField)
        if (await ele.isVisible()) {
            await ele.fill("95")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color First Input Field Button Is Not Visiable | Could not find:"${ele}}"`)
    }


    async primaryColorSecondInputField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorSecondInputField)
        if (await ele.isVisible()) {
            await ele.fill("188")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Input Second Field Button Is Not Visiable | Could not find:"${ele}}"`)
    }

    async primaryColorThirdInputField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorThirdInputField)
        if (await ele.isVisible()) {
            await ele.fill("210")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Third Input Field Button Is Not Visiable | Could not find:"${ele}}"`)
    }

    async primaryColorOpacityInputField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorOpacityInputField)
        if (await ele.isVisible()) {
            await ele.fill("100")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Opacity Input Field Button Is Not Visiable | Could not find:"${ele}}"`)
    }

    async primaryColorHexInputField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorHexInputField)
        if (await ele.isVisible()) {
            await ele.fill("5FBCD2FF")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Hex Input Field Button Is Not Visiable | Could not find:"${ele}}"`)
        await this.page.waitForTimeout(2000)

    }

    async clickSaveBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.saveBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Window Save Button Field Button Is Not Visiable | Could not find:"${ele}}"`)
        await this.page.waitForTimeout(2000)
    }

    async primaryColorPickerWindowClose() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorPickerWindowClose)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Window Close Button Field Button Is Not Visiable | Could not find:"${ele}}"`)
    }

    //Secondary Color Field Ele
    async checkSecondaryText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.secondaryColorTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Secondary")
        }
        else throw new Error(`Main Menu | Mobile Design Secondary Color Title Text Is Not Visiable | Could not find:"${ele}}"`)
    }
    
    async clickSecondaryColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.secondaryColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Secondary Color Input Field Is Not Visiable | Could not find:"${ele}}"`)
    }

    async clickSwatchesColorNumberThree() {
        const ele = this.page.locator("//span[text()='#2b3648ff']")
        expect(ele).toBeVisible()
        await ele.click()


    }


    async clickSwatchesColorNumberFour() {
        const ele = this.page.locator("//span[text()='#5fbcd2ff']")
        expect(ele).toBeVisible()
        await ele.click({ delay: 300 })


    }

    async clickSwatchesColorNumberFive() {
        const ele = this.page.locator("//span[text()='#5fbcd2ff']")
        expect(ele).toBeVisible()
        await ele.click()


    }


    async clickColorSwatchesDeleteBtn() {
        const ele = this.page.locator("//button[@aria-label='delete']").first()
        expect(ele).toBeVisible()
        await ele.click({ force: true })


    }

    async clcikColorTypeSelectionInputField() {
        const ele = this.page.locator("//div[contains(@class,'MuiSelect-select MuiSelect-standard')]")
        expect(ele).toBeVisible()
        await ele.click({ force: true })
        await this.page.waitForLoadState('networkidle');


    }

    async selectColorTypeRadial() {
        const ele = this.page.locator("//li[@data-value='radial']")
        expect(ele).toBeVisible()
        await ele.click({ force: true })


    }

    async selectColorTypeDiagonal() {
        const ele = this.page.locator("//li[@data-value='diagonal']")
        expect(ele).toBeVisible()
        await ele.click({ force: true })


    }

    async selectColorTypeVertical() {
        const ele = this.page.locator("//li[@data-value='vertical']")
        expect(ele).toBeVisible()
        await ele.click({ force: true })


    }

    async selectColorTypeHorizontal() {
        const ele = this.page.locator("//li[@data-value='horizontal']")
        expect(ele).toBeVisible()
        await ele.click({ force: true })


    }

    async selectColorTypeSolid() {
        const ele = this.page.locator("//li[@data-value='solid']")
        expect(ele).toBeVisible()
        await ele.click({ force: true })


    }







    async SecondaryColorFirstInputField() {
        await this.page.locator("(//input[@type='text'])[1]").fill("95")

    }


    async SecondaryColorSecondInputField() {
        await this.page.locator("(//input[@type='text'])[2]").fill("188")

    }

    async SecondaryColorThirdInputField() {
        await this.page.locator("(//input[@type='text'])[3]").fill("210")

    }

    async SecondaryColorOpacityInputField() {
        await this.page.locator("(//input[@type='text'])[4]").fill("100")

    }

    async SecondaryColorHexInputField() {
        await this.page.locator("(//input[@type='text'])[5]").fill("5FBCD2FF")
        await this.page.waitForLoadState('networkidle');
    }

    //Tertiary color input field ele
    async checkTertiaryText() {
        const locator = this.page.locator("//p[text()='Tertiary']");
        await expect(locator).toContainText('Tertiary');
    }

    async clickTertiaryColorBtn() {
        const ele = this.page.locator("//p[text()='Tertiary']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()


    }

    async TertiaryColorFirstInputField() {
        await this.page.locator("(//input[@type='text'])[1]").fill("20")
    }


    async TertiaryColorSecondInputField() {
        await this.page.locator("(//input[@type='text'])[2]").fill("10")
    }

    async TertiaryColorThirdInputField() {
        await this.page.locator("(//input[@type='text'])[3]").fill("13")
    }

    async TertiaryColorOpacityInputField() {
        await this.page.locator("(//input[@type='text'])[4]").fill("55")
    }

    async TertiaryColorHexInputField() {
        await this.page.locator("(//input[@type='text'])[5]").fill("fd2b6aff")
    }

    //Bitton color Input Field Ele
    async checkButtonText() {
        const locator = this.page.locator("//p[text()='Button']");
        await expect(locator).toContainText('Button');
    }

    async clickButtonColorBtn() {
        const ele = this.page.locator("//p[text()='Button']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click({ force: true })


    }

    async ButtonColorFirstInputField() {
        await this.page.locator("(//input[@type='text'])[1]").fill("50")
    }


    async ButtonColorSecondInputField() {
        await this.page.locator("(//input[@type='text'])[2]").fill("303")
    }

    async ButtonColorThirdInputField() {
        await this.page.locator("(//input[@type='text'])[3]").fill("432")
    }

    async ButtonColorOpacityInputField() {
        await this.page.locator("(//input[@type='text'])[4]").fill("53")
    }

    async ButtonColorHexInputField() {
        await this.page.locator("(//input[@type='text'])[5]").fill("573c98ff")
    }

    //Element of the Button Glow Field
    async checkButtonGlowText() {
        const locator = this.page.locator("//p[text()='Button Glow']");
        await expect(locator).toContainText('Button');
    }

    async clickButtonGlowColorBtn() {
        const ele = this.page.locator("//p[text()='Button Glow']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()



    }

    async ButtonGlowColorFirstInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").fill("110")
    }


    async ButtonGlowColorSecondInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").fill("302")
    }

    async ButtonGlowColorThirdInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]").fill("431")
    }

    async ButtonGlowColorOpacityInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]").fill("51")
    }

    async ButtonGlowColorHexInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]").fill("573c98ff")
    }


    //Text Filed Eelement
    async checkTextText() {
        const locator = this.page.locator("//p[text()='Text']");
        await expect(locator).toContainText('Text');
    }

    async clickTextColorBtn() {
        const ele = this.page.locator("//p[text()='Text']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()


    }

    async TextColorFirstInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").fill("123")
    }


    async TextColorSecondInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").fill("313")
    }

    async TextColorThirdInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]").fill("402")
    }

    async TextColorOpacityInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]").fill("53")
    }

    async TextColorHexInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]").fill("7bffff87")
    }


    //Text Dialog Box Filed Eelement
    async checkTextDialogBoxText() {
        const locator = this.page.locator("//p[text()='Text Dialog Box']");
        await expect(locator).toContainText('Text Dialog Box');
    }

    async clickTextDialogBoxColorBtn() {
        const ele = this.page.locator("//p[text()='Text Dialog Box']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()


    }

    async TextDialogBoxColorFirstInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").fill("123")
    }


    async TextDialogBoxColorSecondInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").fill("313")
    }

    async TextDialogBoxColorThirdInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]").fill("402")
    }

    async TextDialogBoxColorOpacityInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]").fill("53")
    }

    async TextDialogBoxColorHexInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]").fill("573e98ff")
    }


    //Text Header Filed Eelement
    async checkHeaderFieldText() {
        const locator = this.page.locator("//p[text()='Header']");
        await expect(locator).toContainText('Header');
    }

    async clickHeaderFieldColorBtn() {
        const ele = this.page.locator("//p[text()='Header']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()


    }

    async HeaderColorFirstInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").fill("23")
    }


    async HeaderColorSecondInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").fill("13")
    }

    async HeaderColorThirdInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]").fill("40")
    }

    async HeaderColorOpacityInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]").fill("53")
    }

    async HeaderColorHexInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]").fill("573e98ff")
    }



    //Text Header Text Filed Eelement
    async checkHeaderTextFieldText() {
        const locator = this.page.locator("//p[text()='Header Text']");
        await expect(locator).toContainText('Header Text');
    }

    async clickHeaderTextFieldColorBtn() {
        const ele = this.page.locator("//p[text()='Header Text']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()


    }

    async HeaderTextColorFirstInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").fill("123")
    }


    async HeaderTextColorSecondInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").fill("313")
    }

    async HeaderTextColorThirdInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]").fill("402")
    }

    async HeaderTextColorOpacityInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]").fill("53")
    }

    async HeaderTextColorHexInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]").fill("573e98ff")
    }


    //Text Gamification Filed Eelement
    async checkGamificationFieldText() {
        const locator = this.page.locator("//p[text()='Gamification']");
        await expect(locator).toContainText('Gamification');
    }

    async clickGamificationFieldColorBtn() {
        const ele = this.page.locator("//p[text()='Gamification']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()

    }

    async GamificationColorFirstInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").fill("123")
    }


    async GamificationColorSecondInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").fill("31")
    }

    async GamificationColorThirdInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]").fill("40")
    }

    async GamificationColorOpacityInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]").fill("100")
    }

    async GamificationColorHexInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]").fill("573e98ff")
    }

    //Text Gamification Glow Line Filed Eelement
    async checkGamificationGlowLineFieldText() {
        const locator = this.page.locator("//p[text()='Gamification Glow Line']");
        await expect(locator).toContainText('Gamification Glow Line');
    }

    async clickGamificationGlowLineFieldColorBtn() {
        const ele = this.page.locator("//p[text()='Gamification Glow Line']/following-sibling::button")
        expect(ele).toBeVisible()
        await ele.click()


    }

    async GamificationGlowLineColorFirstInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[1]").fill("123")
    }


    async GamificationGlowLineColorSecondInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[2]").fill("313")
    }

    async GamificationGlowLineColorThirdInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[3]").fill("402")
    }

    async GamificationGlowLineColorOpacityInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[4]").fill("53")
    }

    async GamificationGlowLineColorHexInputField() {
        await this.page.locator("(//input[contains(@class,'MuiInputBase-input MuiOutlinedInput-input')])[5]").fill("573e98ff")
    }

    async clickLandscapeBackgroundInputField() {
        await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[2]").click()
    }


    async deleteUploadedLandscapeBG() {

        // let ele = await this.page.locator("//button[@aria-label='Delete']").isVisible()
        // if ((ele == true)) {
        //     // console.log("delete Uploaded Landscape BG ")
        //     await this.page
        //         .locator("//button[@aria-label='Delete']")
        //         .click()
        // }
        // await this.page.waitForLoadState("networkidle")

        let deleteBtn = await this.page.locator("(//button[@aria-label='Delete'])[5]").isVisible()

        if ((deleteBtn == true)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                .locator("(//button[@aria-label='Delete'])[5]")
                .click()
        }


    }
    async deleteUploadedPortraitBG() {

        let ele = await this.page.locator("(//button[@aria-label='Delete'])[4]").isVisible()
        if ((ele == true)) {
            // console.log("delete Uploaded Portrait BG ")
            await this.page
                .locator("(//button[@aria-label='Delete'])[4]")
                .click({ force: true })
        }

        await this.page.waitForLoadState("networkidle")


    }

    async deleteUploadedLandscapeBGHeader() {

        let ele = await this.page.locator("(//button[@aria-label='Delete'])[3]").isVisible()
        if ((ele == true)) {
            // console.log("delete Uploaded Landscape BG Header ")
            await this.page
                .locator("(//button[@aria-label='Delete'])[3]")
                .click({ force: true })
        }

        await this.page.waitForLoadState("networkidle")


    }

    async deleteUploadedPortraitBGHeader() {

        let ele = await this.page.locator("(//button[@aria-label='Delete'])[2]").isVisible()
        if ((ele == true)) {
            // console.log("delete Uploaded Portrait BG Header ")
            await this.page
                .locator("(//button[@aria-label='Delete'])[2]")
                .click()
        }

        await this.page.waitForLoadState("networkidle")


    }


    async deleteUploadedMainLogo() {

        const ele = await this.page.locator("(//button[@aria-label='Delete'])[1]").isVisible()
        if ((ele == true)) {
            // console.log("delete Uploaded Portrait BG Header ")
            await this.page.locator("(//button[@aria-label='Delete'])[1]")
                .click()
        }

        await this.page.waitForLoadState("networkidle")


    }




    async clickPortraitBackgroundHeaderVideoCheckBox() {

        let ele = await this.page.locator("(//input[@value='video'])[2]").isChecked()
        if ((ele == false)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                .locator("(//input[@value='video'])[4]")
                .check()
        }



    }

    async clickPortraitBackgroundHeaderImageCheckBox() {
        const ele = this.page.locator("(//span[text()='Image']/preceding::input[@type='radio'])[2]")
        expect(ele).toBeVisible()
        await ele.check({ force: true })
        await this.page.waitForLoadState("load")

    }

    async deletePotraitBackgrounBanner() {

        let ele = await this.page.locator("(//h5[text()='Portrait Background']/following::button[@title='Delete']//div)[1]").isVisible()
        if ((ele == true)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                .locator("(//h5[text()='Portrait Background']/following::button[@title='Delete']//div)[1]")
                .click({ force: true })
        }
        await this.page.waitForLoadState('networkidle')
        await this.page.waitForTimeout(3000)



    }

    async clickLandscapeBackgroundHeaderVideoCheckBox() {

        let ele = await this.page.locator("(//input[@value='video'])[2]").isChecked()
        if ((ele == false)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                .locator("(//input[@value='video'])[3]")
                .check()
        }



    }

    async clickPortraitBackgroundVideoCheckBox() {

        let ele = await this.page.locator("(//input[@value='video'])[2]").isChecked()
        if ((ele == false)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                .locator("(//input[@value='video'])[2]")
                .check()
        }



    }

    async clickLandscapeBackgroundVideoCheckBox() {

        let ele = await this.page.locator("(//input[@value='video'])[1]").isChecked()
        if ((ele == false)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                .locator("(//input[@value='video'])[1]")
                .click()
        }

        // await this.page.waitForLoadState('networkidle')



    }


    async clickPortraitBackgroundHeaderimageCheckBox() {

        let ele = await this.page.locator("(//input[@value='image'])[2]").isChecked()
        if ((ele == false)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                .locator("(//input[@value='image'])[4]")
                .check()
        }



    }

    async clickLandscapeBackgroundHeaderimageCheckBox() {

        let ele = await this.page.locator("(//input[@value='image'])[2]").isChecked()
        if ((ele == false)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                .locator("(//input[@value='image'])[3]")
                .check()
        }



    }

    async clickPortraitBackgroundimageCheckBox() {

        let ele = await this.page.locator("(//input[@value='image'])[2]").isChecked()
        if ((ele == false)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                .locator("(//input[@value='image'])[2]")
                .check()
        }



    }

    async clickLandscapeBackgroundimageCheckBox() {

        let ele = await this.page.locator("(//input[@value='image'])[1]").isChecked()
        if ((ele == false)) {
            // console.log("delete Uploaded Landscape BG ")
            await this.page
                .locator("(//input[@value='image'])[1]")
                .check()
        }



    }

    async clickToUploadMainLogo() {

        const ele = await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[6]")
        await ele.click()



    }
    async clickToUploadPortraitBackgroundHeader() {

        const ele = await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[5]")
        await ele.click({ force: true })



    }
    async clickToUploadLandscapeBackgroundHeader() {

        const ele = await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[4]")
        await ele.click()



    }
    async clickToUploadPortraitBackground() {

        // const popupPromise = this.page.waitForEvent('popup');
        await this.page.locator("(//h5[text()='Portrait Background']/following::div[@class='MuiBox-root css-v2612'])[1]").click({ button: "left", delay: 1000 });
        // const popup = await popupPromise;
        // Wait for the popup to load.
        // await popup.waitForLoadState('load');

        // const ele = await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[3]")
        // await ele.click()





    }

    async verifyPotraitBackgroundUploadSuccessfully() {

        await this.page.waitForSelector("//button[@aria-label='Delete']")




    }

    async verifyLandscapeBackgroundUploadSuccessfully() {

        await this.page.waitForSelector("//button[@aria-label='Delete']")




    }
    async verifyLandscapeBackgroundHeaderUploadSuccessfully() {

        await this.page.waitForSelector("(//h5[text()='Landscape Background Header']/following::button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[2]")




    }

    async verifyPortraitBackgroundHeaderUploadSuccessfully() {

        await this.page.waitForSelector("(//h5[text()='Portrait Background Header']/following::button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[2]")




    }

    async verifyMainLogoUploadSuccessfully() {

        await this.page.waitForSelector("(//h5[text()='Main Logo']/following::button[contains(@class,'MuiButtonBase-root MuiButton-root')]//div)[2]")




    }



    async uploadProtraitBackgrounImageForMobileScreen() {

        const buffer = readFileSync('testData/logos/gameTeamLogo.jpg');
        // Create the DataTransfer and File
        const dataTransfer = await this.page.evaluateHandle((data) => {
            const dt = new DataTransfer();
            // Convert the buffer to a hex array
            const file = new File([data.toString('hex')], 'gameTeamLogo.jpg', { type: 'application/jpg' });
            dt.items.add(file);
            return dt;
        }, buffer);

        await this.page.dispatchEvent("(//h5[text()='Portrait Background']/following::div[@class='MuiBox-root css-v2612'])[1]", 'drop', { dataTransfer });
        await this.page.waitForSelector("(//h5[text()='Portrait Background']/following::button[@title='Delete']//div)[1]")


    }



    async clickToUploadLandscapeBackground() {
        await this.page.waitForTimeout(2000)
        const ele = await this.page.locator("(//div[@class='MuiBox-root css-v2612'])[2]")
        await ele.click({ button: "left", delay: 1000 })



    }

    async verifyErrorAlertText() {
        await this.page.waitForTimeout(2000)
        const ele = await this.page.locator("//p[text()='File type is not supported']")
        expect(ele).toContainText("File type is not supported")
    }

    async clcikErrorAlertOkBtn() {

        const ele = await this.page.locator("//button[text()='Ok']")
        expect(ele).toContainText("Ok")
        await ele.click()
    }















    //Start function from here
    async clickUploadFontAndUploadFiles() {
        const filePath0 = "files/Thin.otf"
        this.page.on("filechooser", async (filechooser) => {
            await filechooser.setFiles([filePath0]);
        })
        await this.clickUploadFontInputFiled();
    }

    //Start function from here
    async validateTryToUploadInvalidFont() {
        const filePath0 = "testData/csv/csv.csv"
        this.page.on("filechooser", async (filechooser) => {
            await filechooser.setFiles([filePath0]);
        })
        await this.clickUploadFontInputFiled();
    }



    //>>>Upload Image

    async dragAndDropUploadHelper() {

        const buffer = readFileSync('testData/videos/video.mp4');
        // Create the DataTransfer and File
        const dataTransfer = await this.page.evaluateHandle((data) => {
            const dt = new DataTransfer();
            // Convert the buffer to a hex array
            const file = new File([data.toString('hex')], 'video.mp4', { type: 'application/mp4' });
            dt.items.add(file);
            return dt;
        }, buffer);

        await this.page.dispatchEvent("(//div[@class='MuiBox-root css-v2612'])[2]", 'drop', { dataTransfer });
        await this.page.waitForLoadState("domcontentloaded")

    }

}