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
        swithchColorNumberThree: "//span[text()='#2b3648ff']",
        swithchColorNumberFour: "//span[text()='#5fbcd2ff']",
        swithchColorNumberFive: "//span[text()='#5fbcd2ff']",
        colorSwaitchDeleteBtn: "//button[@aria-label='delete']",
        colorTypeSelectionInputField: "//div[contains(@class,'MuiSelect-select MuiSelect-standard')]",
        colorTypeRadial: "//li[@data-value='radial']",
        colorTypeDiagonal: "//li[@data-value='diagonal']",
        colorTypeVertical: "//li[@data-value='vertical']",
        colorTypeHorizontal: "//li[@data-value='horizontal']",
        colorTypeSolid: "//li[@data-value='solid']",
        tertiaryTitleText: "//p[text()='Tertiary']",
        tertiaryColorInputField: "//p[text()='Tertiary']/following-sibling::button",
        buttonTitleText: "//p[text()='Button']",
        buttonColorInputField: "//p[text()='Button']/following-sibling::button",
        buttonGlowTitleText: "//p[text()='Button Glow']",
        buttonGlowColorInputField: "//p[text()='Button Glow']/following-sibling::button",
        textColorSectionTitleText: "//p[text()='Text']",
        textColorInputField: "//p[text()='Text']/following-sibling::button",
        textDialogBoxTitleText: "//p[text()='Text Dialog Box']",
        textDialogBoxColorInputField: "//p[text()='Text Dialog Box']/following-sibling::button",
        headerTitleText: "//p[text()='Header']",
        headerColorInputField: "//p[text()='Header']/following-sibling::button",
        headerTextTitleText: "//p[text()='Header Text']",
        headerTitleTextColorInputField: "//p[text()='Header Text']/following-sibling::button",
        gamificationTitleText: "//p[text()='Gamification']",
        gamificationColorInputField: "//p[text()='Gamification']/following-sibling::button",
        gamificationGlowLineTitleText: "//p[text()='Gamification Glow Line']",
        gamificationGlowLineColorInputField: "//p[text()='Gamification Glow Line']/following-sibling::button",
        lnadscapeBGDeleteBtn: "(//button[@aria-label='Delete'])[5]",
        protraitBGDeleteBtn: "(//button[@aria-label='Delete'])[4]",
        landscapeHeaderBGDeleteBtn: "(//button[@aria-label='Delete'])[3]",
        protraitHeaderBGDeleteBtn: "(//button[@aria-label='Delete'])[2]",
        mainLogoDeleteBtn: "(//button[@aria-label='Delete'])[1]",

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
        else throw new Error(`Home Screen | Home Avater Is Not Visible | Could not find locator:"${ele}}"`)
        await this.page.waitForLoadState("networkidle");
    }
    async clickArcadePage() {
        let ele = await this.page.locator(this.mobileDesignPageElements.arcadePage)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Arcade Page Element Is Not Visible | Could not find:"${ele}}"`)
    }
    async HomeAvater() {
        const ele = this.page.locator('button').nth(2)
        if (await ele.isEnabled()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Home Screen | Home Avater Is Not Visible | Could not find locator:"${ele}}"`)
    }
    async mainMenuBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.mainMenuPage)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Home Avater Button | Main Menu Button Element Is not Visible | Could not find locator:"${ele}}"`)
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForTimeout(2000)
    }
    async clickMobileDesign() {
        let ele = await this.page.locator(this.mobileDesignPageElements.mobileDesignPage)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Element Is not Visible | Could not find locator:"${ele}}"`)
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForTimeout(2000)
    }
    async mobileDesign() {
        let ele = await this.page.locator(this.mobileDesignPageElements.mobileDesignPage)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error("Main Menu | Mobile Design Page Element Is not Visible")
        await this.page.waitForLoadState("networkidle");
        await this.page.waitForTimeout(2000)
    }
    async clickUploadFontInputFiled() {
        let ele = await this.page.locator(this.mobileDesignPageElements.uploadFontInputField).first()
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Font Upload Input Field Element Is not Visible | Could not find:"${ele}"`)
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
            console.log(`Main Menu | Mobile Design | There Was No Uploaded Font Is Visible | Could not find locator:"${ele}}"`)
        }
    }
    async clickEntryScreenSelectField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.entryScreenSelectionField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen Selection Field Element Is Not Visible | Could not find:"${ele}}"`)
    }
    async selectEntryScreenUserProfile() {
        let ele = await this.page.locator(this.mobileDesignPageElements.myProfile)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen As My Profile Element Is Not Visible | Could not find:"${ele}}"`)
    }
    async selectEntryScreenRules() {
        let ele = await this.page.locator(this.mobileDesignPageElements.entryScreenRulesEle)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen As Rules Element Is Not Visible | Could not find:"${ele}}"`)
    }
    async selectEntryScreenHowToPlay() {
        let ele = await this.page.locator(this.mobileDesignPageElements.entryScreenHowToPlay)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen As How To Play Element Is Not Visible | Could not find:"${ele}}"`)
    }
    async selectEntryScreenPrize() {
        let ele = await this.page.locator(this.mobileDesignPageElements.entryScreenPrize)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen As Prize Element Is Not Visible | Could not find:"${ele}}"`)
    }
    async selectEntryScreenHome() {
        let ele = await this.page.locator(this.mobileDesignPageElements.entryScreenHome)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Page Entry Screen As Home Element Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickMobileLinkBtn() {
        let ele = await this.page.frameLocator('iframe').locator(this.mobileDesignPageElements.mobileLinkButton)
        try {
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw (`Guess The Score | Mobile Link Button Element Is Not Visible | Error occurred: ${error}`);
        }
    }
    async clickGussTheScroeSectionForOpenMobileScreen() {
        let ele = await this.page.locator(this.mobileDesignPageElements.guessTheScroreBtn)
        try {
            await expect(ele).toContainText("Guess The Score")
            await ele.click({ button: "left", delay: 1000 })
        } catch (error) {
            throw (`Game | Guess The Score Button Element Is Not Visible | Error occurred: ${error}`);
        }

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
        else throw new Error(`Main Menu | Mobile Design Uploaded Font Is Not Visible Successfully | Could not find:"${ele}}"`)
    }
    //click on the clear button
    async clickClearAllBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.clearAllBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Clear All Button Is Not Visible Successfully | Could not find:"${ele}}"`)
    }
    //Primary Color Input field Element
    async checkPrimaryColortxt() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Primary")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Title Text Is Not Visible Successfully | Could not find:"${ele}}"`)
    }
    async clickPrimaryColorField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorInputField)
        if (await ele.isVisible()) {
            await ele.click({button:"left", delay:1000})
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    async primaryColorFirstInputField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorFirstInputField)
        if (await ele.isVisible()) {
            await ele.fill("95")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color First Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    async primaryColorSecondInputField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorSecondInputField)
        if (await ele.isVisible()) {
            await ele.fill("188")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Input Second Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    async primaryColorThirdInputField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorThirdInputField)
        if (await ele.isVisible()) {
            await ele.fill("210")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Third Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    async primaryColorOpacityInputField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorOpacityInputField)
        if (await ele.isVisible()) {
            await ele.fill("100")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Opacity Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    async primaryColorHexInputField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorHexInputField)
        if (await ele.isVisible()) {
            await ele.fill("5FBCD2FF")
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Hex Input Field Button Is Not Visible | Could not find:"${ele}}"`)
        await this.page.waitForTimeout(2000)
    }
    async clickSaveBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.saveBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Window Save Button Field Button Is Not Visible | Could not find:"${ele}}"`)
        await this.page.waitForTimeout(2000)
    }
    async primaryColorPickerWindowClose() {
        let ele = await this.page.locator(this.mobileDesignPageElements.primaryColorPickerWindowClose)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Primary Color Window Close Button Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    //Secondary Color Field Ele
    async checkSecondaryText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.secondaryColorTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Secondary")
        }
        else throw new Error(`Main Menu | Mobile Design Secondary Color Title Text Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickSecondaryColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.secondaryColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Secondary Color Input Field Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickSwatchesColorNumberThree() {
        let ele = await this.page.locator(this.mobileDesignPageElements.swithchColorNumberThree)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Number Three Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickSwatchesColorNumberFour() {
        let ele = await this.page.locator(this.mobileDesignPageElements.swithchColorNumberFour)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Number Four Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickSwatchesColorNumberFive() {
        let ele = await this.page.locator(this.mobileDesignPageElements.swithchColorNumberFive)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Number Five Is Not Visible | Could not find:"${ele}}"`)
    }
    async clickColorSwatchesDeleteBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.swithchColorNumberFive).first()
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Switch Delete Button Is Not Visible | Could not find:"${ele}}"`)
    }
    async clcikColorTypeSelectionInputField() {
        let ele = await this.page.locator(this.mobileDesignPageElements.colorTypeSelectionInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Type Selection Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    async selectColorTypeRadial() {
        let ele = await this.page.locator(this.mobileDesignPageElements.colorTypeRadial)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Type Radial Is Not Visible | Could not find:"${ele}}"`)
    }
    async selectColorTypeDiagonal() {
        let ele = await this.page.locator(this.mobileDesignPageElements.colorTypeDiagonal)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Type Diagonal Is Not Visible | Could not find:"${ele}}"`)
    }
    async selectColorTypeVertical() {
        let ele = await this.page.locator(this.mobileDesignPageElements.colorTypeVertical)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Type Vertical Is Not Visible | Could not find:"${ele}}"`)
    }
    async selectColorTypeHorizontal() {
        let ele = await this.page.locator(this.mobileDesignPageElements.colorTypeHorizontal)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Type Horizontal Is Not Visible | Could not find:"${ele}}"`)
    }
    async selectColorTypeSolid() {
        let ele = await this.page.locator(this.mobileDesignPageElements.colorTypeSolid)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Window Color Type Solid Is Not Visible | Could not find:"${ele}}"`)
    }



    //Tertiary color input field ele
    async checkTertiaryText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.tertiaryTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Tertiary")
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Tertiary Title Text Is Not Visible | Could not find:"${ele}}"`)

    }
    async clickTertiaryColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.tertiaryColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Tertiary Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    //Bitton color Input Field Ele
    async checkButtonText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.buttonTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Button")
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Button Title Text Is Not Visible | Could not find:"${ele}}"`)

    }
    async clickButtonColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.buttonColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Button Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    //Element of the Button Glow Field
    async checkButtonGlowText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.buttonGlowTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Button Glow")
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Button Glow Title Text Is Not Visible | Could not find:"${ele}}"`)

    }
    async clickButtonGlowColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.buttonGlowColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Button Glow Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    //Text Filed Eelement
    async checkTextText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.textColorSectionTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Text")
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Text Title Text Is Not Visible | Could not find:"${ele}}"`)

    }
    async clickTextColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.textColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Main Menu | Mobile Design Color Section Text Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    //Text Dialog Box Filed Eelement
    async checkTextDialogBoxText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.textDialogBoxTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Text Dialog Box")
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Text Dialog Box Title Text Is Not Visible | Could not find:"${ele}}"`)

    }
    async clickTextDialogBoxColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.textDialogBoxColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Text Dialog Box Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    //Text Header Filed Eelement
    async checkHeaderFieldText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.headerTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Header")
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Header Title Text Is Not Visible | Could not find:"${ele}}"`)

    }
    async clickHeaderFieldColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.headerColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Header Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    //Text Header Text Filed Eelement
    async checkHeaderTextFieldText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.headerTextTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Header Text")
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Header Text Title Text Is Not Visible | Could not find:"${ele}}"`)

    }
    async clickHeaderTextFieldColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.headerTitleTextColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Header Text Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    //Text Gamification Filed Eelement
    async checkGamificationFieldText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.gamificationTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Gamification")
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Gamification Title Text Is Not Visible | Could not find:"${ele}}"`)

    }
    async clickGamificationFieldColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.gamificationColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Gamification Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }
    //Text Gamification Glow Line Filed Eelement
    async checkGamificationGlowLineFieldText() {
        let ele = await this.page.locator(this.mobileDesignPageElements.gamificationGlowLineTitleText)
        if (await ele.isVisible()) {
            await expect(ele).toContainText("Gamification Glow Line")
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Gamification Glow Line Title Text Is Not Visible | Could not find:"${ele}}"`)

    }
    async clickGamificationGlowLineFieldColorBtn() {
        let ele = await this.page.locator(this.mobileDesignPageElements.gamificationGlowLineColorInputField)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
        }
        else throw new Error(`Main Menu | Mobile Design Color Section Gamification Line Color Input Field Button Is Not Visible | Could not find:"${ele}}"`)
    }

    async deleteUploadedLandscapeBG() {
        let ele = await this.page.locator(this.mobileDesignPageElements.lnadscapeBGDeleteBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(2000)
        }
        else {
            console.log(`Main Menu | Mobile Design Uploaded Landscape Background Is Not Found | Could not find:"${ele}}"`)
        }
    }

    async deleteUploadedPortraitBG() {
        let ele = await this.page.locator(this.mobileDesignPageElements.protraitBGDeleteBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(2000)
        }
        else {
            console.log(`Main Menu | Mobile Design Uploaded Portrait Background Is Not Found | Could not find:"${ele}}"`)
        }
    }
    async deleteUploadedLandscapeBGHeader() {
        let ele = await this.page.locator(this.mobileDesignPageElements.landscapeHeaderBGDeleteBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(2000)
        }
        else {
            console.log(`Main Menu | Mobile Design Uploaded Landscape Header Background Is Not Found | Could not find:"${ele}}"`)
        }
    }
    async deleteUploadedPortraitBGHeader() {
        let ele = await this.page.locator(this.mobileDesignPageElements.protraitHeaderBGDeleteBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(2000)
        }
        else {
            console.log(`Main Menu | Mobile Design Uploaded Portrait Header Background Is Not Found | Could not find:"${ele}}"`)
        }
    }
    async deleteUploadedMainLogo() {
        let ele = await this.page.locator(this.mobileDesignPageElements.mainLogoDeleteBtn)
        if (await ele.isVisible()) {
            await ele.click({ button: "left", delay: 1000 })
            await this.page.waitForTimeout(2000)
        }
        else {
            console.log(`Main Menu | Mobile Design Uploaded Main Logo Is Not Found | Could not find:"${ele}}"`)
        }
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