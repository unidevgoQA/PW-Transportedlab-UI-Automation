import { expect, Page } from "@playwright/test";
import BaseFunctions from "@base-function/baseFunctions"
export default class FanaticsFilterMobilePage {


    private page: Page;
    constructor(page: Page) {
        this.page = page;
        page.setViewportSize({ width: 390, height: 844 })
    }


    private FanticsFilterMobileElements = {
        additionalphoneNumberInputField: `//input[@name="phone"]`,
        additionalEmailInputField: `//input[@name="email"]`,
        additionalAgeInputField: `//input[@name="age"]`,
        additionalDatePickerInputField: `//input[@aria-label='Choose date']`,
        additionalDateInputField: "(//input[@id='additionalbirthDate'])[2]",
        additionalDateEditBtn: `//button[@aria-label='calendar view is open, go to text input view']`,
        additionalDatePickerOkBtn: "//button[text()='OK']",
        additionalDatePickerLabel: "//label[@for='additionalbirthDate']",
        additionalZipCodeInputField: `//input[@name="zipCode"]`,
        additionalZipCodeInputFieldLabel: "//label[@for='additionalzipCode']",
        additionalSubmitBtn: "//button[@type='submit']",
        customQuestionSectionTitle: "//p[text()='Questionnaire & Opt-Ins']",
        customQuestionInputField: "//input[@placeholder='Give some description here...']",
        submitBtn: "//button[text()='Submit']",
        choiceCheckBox: "//input[@type='checkbox']",
        choiceCheckBoxWhenCustomQuestionInTop: "(//input[@type='checkbox'])[1]",
        homeAvater: "//div[@img='assets/UserProfileIcon.4c7ccf2b.svg']",
        homeText: "//p[text()='HOME']",
        arcadeSectionInMobileScreen: "(//button[@type='button'])[6]",
        prizeDropGameText: "//p[text()='Prize Drop']",
        outSideGameTitleText: "//p[text()='Auto Game']",
        squareImage: "div:nth-child(2) > div > div:nth-child(2) > .MuiBox-root",
        rectangulerImageType: ".css-rk019r>>nth=1",
        arcadeSectionlogoHeader: ".css-n8k4mt",
        fanaticsGameTitle: "//p[text()='Fanatics-Filter-Web']",
        gussTheScroeGameTitle: "//p[text()='Guess The Score']",
        triviaGameTitle: "//p[text()='Trivia']",
        liveWallGameTitle: "//p[text()='Live Wall']",
        noiseMeterGameTitle: "//p[text()='Noise Meter']",
        tugOfWarGameTitle: "//p[text()='Tug of War']",
        prizeDropGameTitle: "//p[text()='Prize Drop']",
        selectTextOnHomeScreen: "(//h3[text()='Select'])[1]",
        teamAccountModal: "(//div[@teamcount='2'])[2]",
        custommobilewaitingtext: "//blockquote[text()='Please wait for game startPlease wait for game startPlease wait for game start']",
        FilterBackground: '//p[text()="Alien"]//parent::div/parent::div/parent::div',
        mobile_bottom_buttons:'//div[@alignment="bottom" and @isselected="true"]',
        background_color_applied_element:'//div[@id="app"]/div/div',
        element_containing_filters:'//div[@class="MuiBox-root css-5m6aih"]',
        panel_color_element:'//div[@class="css-ka5w3w"]',
        phone_no_ele:'//input[@name="phone"]',
        email_ele:'//input[@name="email"]',
        age_ele:'//input[@name="age"]',
        birthday_ele:'//input[@name="birthDate"]',
        birthday_change_ele:'//button[@aria-label="calendar view is open, switch to year view"]',
        birthday_select_2000:"//button[text()='2000']",
        ok_button:"//button[text()='OK']",
        zip_code_input:'//input[@name="zipCode"]',
        submit_button:'//button[text()="Submit"]',
        splash_image:'//div[@image="https://test-dxp-file.azureedge.net/files/qa-1/634040e5523cf1ced17372f7/1135fea1-5e35-474c-ba06-0b8da0fce39f.jpg"]',
        camera_rotate_ele:`//*[name()='svg' and @data-testid="CameraswitchIcon"]`,
        bigshot_ele:'//div[@image="https://qa-1.testingdxp.com/games/fanatics-filter-web/assets/BigShot.d652e443.png"]',
        filter_transition_image:'//div[@image="https://test-dxp-file.azureedge.net/files/qa-1/634040e5523cf1ced17372f7/6065f186-fffb-4403-8811-a93a11e33898.jpg"]',
        alien_png:'//div[@image="https://qa-1.testingdxp.com/games/fanatics-filter-web/assets/Alien.bbb5ef10.png"]',
        bigstar_ele:'//div[@image="https://qa-1.testingdxp.com/games/fanatics-filter-web/assets/BigStar.d4dbac3d.png"]',
        girl_elf_ele:'//div[@image="https://qa-1.testingdxp.com/games/fanatics-filter-web/assets/GirlElf.a43d944c.png"]',
        rodolf_deer_ele:'//div[@image="https://qa-1.testingdxp.com/games/fanatics-filter-web/assets/Reindeer.397c1b9a.png"]',
        elf_png:'//div[@image="https://qa-1.testingdxp.com/games/fanatics-filter-web/assets/Elf.c4c2ecc0.png"]',
        movie_mind_png:'//div[@image="https://qa-1.testingdxp.com/games/fanatics-filter-web/assets/MovieMindIcon.1df8e1f1.png"]',
        dark_king_png:'//div[@image="https://qa-1.testingdxp.com/games/fanatics-filter-web/assets/DarkKing.24628060.png"]',
        H_death_png:'//div[@image="https://qa-1.testingdxp.com/games/fanatics-filter-web/assets/HDeath.615d1cda.png"]',
        santa_png:'//div[@image="https://qa-1.testingdxp.com/games/fanatics-filter-web/assets/Santa.18349081.png"]',
        Filter_1924_png:'//div[@image="https://qa-1.testingdxp.com/games/fanatics-filter-web/assets/1924Icon.aa48f29a.png"]',
        viking_png:'//div[@image="https://qa-1.testingdxp.com/games/fanatics-filter-web/assets/Viking.e1a970a9.png"]',
        stupid_viking:'//div[@image="https://qa-1.testingdxp.com/games/fanatics-filter-web/assets/StupidViking.75b99054.png"]',
        elf_2_png:'//div[@image="https://qa-1.testingdxp.com/games/fanatics-filter-web/assets/Elf2.d82a9e48.png"]'

    }




    async inputPhoneNumberForAditionalInfo() {
        await this.page.waitForSelector(this.FanticsFilterMobileElements.additionalphoneNumberInputField)
        const ele = await this.page.locator(this.FanticsFilterMobileElements.additionalphoneNumberInputField).isVisible()
        if ((ele == true)) {
            await this.page.locator(this.FanticsFilterMobileElements.additionalphoneNumberInputField).fill("+8801051703506")

        }
        else throw new Error("Aditional Information Phone NUmber Input Field Is not visible In User Side")


    }

    async inputAgeForAditionalInfo() {
        await this.page.waitForSelector(this.FanticsFilterMobileElements.additionalAgeInputField)
        const ele = await this.page.locator(this.FanticsFilterMobileElements.additionalAgeInputField).isVisible()
        if ((ele == true)) {
            await this.page.locator(this.FanticsFilterMobileElements.additionalAgeInputField).fill("22")

        }
        else throw new Error("Aditional Information Age Input Field Is not visible In User Side")


    }

    async inputEmailForAditionalInfo() {
        await this.page.waitForSelector(this.FanticsFilterMobileElements.additionalEmailInputField)
        const ele = await this.page.locator(this.FanticsFilterMobileElements.additionalEmailInputField).isVisible()
        if ((ele == true)) {
            await this.page.locator(this.FanticsFilterMobileElements.additionalEmailInputField).fill("demo@email.com")

        }
        else throw new Error("Aditional Information Email Input Field Is not visible In User Side")


    }

    async clickAdditionalDatePickterInputField() {
        await this.page.waitForSelector(this.FanticsFilterMobileElements.additionalDatePickerLabel)
        const ele = await this.page.locator(this.FanticsFilterMobileElements.additionalDatePickerInputField).isVisible()
        if ((ele == true)) {
            await this.page.locator(this.FanticsFilterMobileElements.additionalDatePickerInputField).click({ button: "left", delay: 1000 })

        }
        else throw new Error("Aditional Information Date Picker Input Field Is not visible In User Side")


    }

    async clickAdditionalDateEditBtn() {
        await this.page.waitForSelector(this.FanticsFilterMobileElements.additionalDateEditBtn)
        const ele = await this.page.locator(this.FanticsFilterMobileElements.additionalDateEditBtn).isVisible()
        if ((ele == true)) {
            await this.page.locator(this.FanticsFilterMobileElements.additionalDateEditBtn).click({ button: "left", delay: 1000 })

        }
        else throw new Error("Aditional Information Date Picker Edit Button Is not visible In User Side")


    }

    async inputAdditionalDate() {
        await this.page.waitForSelector(this.FanticsFilterMobileElements.additionalDateInputField)
        const ele = await this.page.locator(this.FanticsFilterMobileElements.additionalDateInputField).isVisible()
        if ((ele == true)) {
            await this.page.locator(this.FanticsFilterMobileElements.additionalDateInputField).fill("01/31/2000")

        }
        else throw new Error("Aditional Information Date Picker Date Input Field Is not visible In User Side")


    }

    async clickAdditionalDateDatePickerOkBtn() {
        await this.page.waitForSelector(this.FanticsFilterMobileElements.additionalDatePickerOkBtn)
        const ele = await this.page.locator(this.FanticsFilterMobileElements.additionalDatePickerOkBtn).isVisible()
        if ((ele == true)) {
            await this.page.locator(this.FanticsFilterMobileElements.additionalDatePickerOkBtn).click({ button: "left", delay: 1000 })

        }
        else throw new Error("Aditional Information Date Picker Ok Button Is not visible In User Side")


    }

    async clickSubmitButton() {
        const ele = this.page.locator(this.FanticsFilterMobileElements.additionalSubmitBtn)
        try {
            await this.page.locator(this.FanticsFilterMobileElements.additionalSubmitBtn).click({ button: "left" })

        } catch (error) {
            throw new Error('Error on Click Submit button ' + error)
        }

    }

    async inputAdditionalZipCode() {
        await this.page.waitForSelector(this.FanticsFilterMobileElements.additionalZipCodeInputFieldLabel)
        const ele = await this.page.locator(this.FanticsFilterMobileElements.additionalZipCodeInputFieldLabel).isVisible()
        if ((ele == true)) {
            await this.page.locator(this.FanticsFilterMobileElements.additionalZipCodeInputField).fill("1217")

        }
        else throw new Error("Aditional Information Zip Code Input Field Is not visible In User Side")


    }

    async inputCustomQuestionForUser() {
        await this.page.waitForSelector(this.FanticsFilterMobileElements.customQuestionSectionTitle)
        const ele = await this.page.locator(this.FanticsFilterMobileElements.customQuestionInputField).isVisible()
        if ((ele == true)) {
            await this.page.locator(this.FanticsFilterMobileElements.customQuestionInputField).fill("Demo Ans")

        }
        else throw new Error("Aditional Information Custom Question Input Field Is not visible In User Side")


    }


    async clickCustomChoiceCheckBoxWhenCustomQuestionInTop() {
        await this.page.waitForSelector(this.FanticsFilterMobileElements.customQuestionSectionTitle)
        const ele = await this.page.locator(this.FanticsFilterMobileElements.choiceCheckBoxWhenCustomQuestionInTop).isVisible()
        if ((ele == true)) {
            await this.page.locator(this.FanticsFilterMobileElements.choiceCheckBoxWhenCustomQuestionInTop).click({ button: "left", delay: 1000 })

        }
        else throw new Error("Aditional Information Custom Question Section Choice Check Box Is not visible In User Side")


    }

    async clickCustomChoiceCheckBox() {
        await this.page.waitForSelector(this.FanticsFilterMobileElements.customQuestionSectionTitle)
        const ele = await this.page.locator(this.FanticsFilterMobileElements.choiceCheckBox).isVisible()
        if ((ele == true)) {
            await this.page.locator(this.FanticsFilterMobileElements.choiceCheckBox).click({ button: "left", delay: 1000 })

        }
        else throw new Error("Aditional Information Custom Question Section Choice Check Box Is not visible In User Side")


    }
    async clickAddNewQuestionSubmitBtn() {

        const ele = await this.page.locator(this.FanticsFilterMobileElements.submitBtn).isVisible()
        if ((ele == true)) {
            await this.page.locator(this.FanticsFilterMobileElements.submitBtn).click({ button: "left", delay: 1000 })

        }
        else throw new Error("Aditional Information Custom Question Section Submit Button Is not visible In User Side")


    }
    async validateFilterBackgroundSuccessfullyApplied() {

        const ele = this.page.frameLocator('iframe').locator(this.FanticsFilterMobileElements.FilterBackground)
        try {
            await this.page.waitForTimeout(40000)
            await expect.soft(ele).toHaveScreenshot('FilterBackground_applied.png',{maxDiffPixelRatio:0.1,mask:[
                this.page.frameLocator('//iframe').locator(this.FanticsFilterMobileElements.mobile_bottom_buttons)
            ]})
            
        } catch (error) {
            throw new Error('Filter background screenshot matching failed' + error)
        }


    }
    async check_background_color(value: string) {
        const ele = this.page.frameLocator('//iframe').locator(this.FanticsFilterMobileElements.background_color_applied_element)
        await expect(ele).toHaveCSS('background-color', `rgb${value}`, { timeout: 60000 })
    }

    async check_border_color() {
        await this.page.waitForTimeout(50000)
        const ele = this.page.frameLocator('//iframe').locator(this.FanticsFilterMobileElements.element_containing_filters).first()
        await expect(ele).toHaveScreenshot('border_color_check_filter_icon.png', { maxDiffPixelRatio: 0.1 })
    }

    async check_panel_color(value: string) {
        const ele = this.page.frameLocator('//iframe').locator(this.FanticsFilterMobileElements.panel_color_element)
        await expect(ele).toHaveCSS('background-color', `rgb${value}`, { timeout: 60000 })
    }
    async typephoneno() {
        await this.page.locator(this.FanticsFilterMobileElements.phone_no_ele).type('+8801568703919')
    }
    async typeemail() {
        await this.page.locator(this.FanticsFilterMobileElements.email_ele).type("mdmahfuzalam196@gmail.com")
    }
    async typeAge() {
        await this.page.locator(this.FanticsFilterMobileElements.age_ele).type('24')
    }
    async selectbirthdate() {
        await this.page.locator(this.FanticsFilterMobileElements.birthday_ele).click()
        await this.page.locator(this.FanticsFilterMobileElements.birthday_change_ele).click()
        await this.page.locator(this.FanticsFilterMobileElements.birthday_select_2000).click()
        await this.page.locator(this.FanticsFilterMobileElements.ok_button).click()
    }
    async typezip() {
        await this.page.locator(this.FanticsFilterMobileElements.zip_code_input).type('1217')
    }
    async clicksubmit() {
        await this.page.locator(this.FanticsFilterMobileElements.submit_button).click()
    }

    async check_splash_screen() {
        await this.page.waitForSelector(this.FanticsFilterMobileElements.splash_image, { state: 'detached' })
    }

    async click_camera_rotate_transition(){
        await this.page.waitForTimeout(30000)
        const camera_ele=this.page.frameLocator('//iframe').locator(this.FanticsFilterMobileElements.camera_rotate_ele).click({button:'left'})
    }

    async check_camerarotate_transtion_screen(){
        // await this.page.waitForSelector('//div[@image="https://test-dxp-file.azureedge.net/files/qa-1/634040e5523cf1ced17372f7/1135fea1-5e35-474c-ba06-0b8da0fce39f.jpg"]', { state: 'detached' })
    }

    async change_filter(){
        await this.page.waitForTimeout(40000)
        await this.page.frameLocator('iframe').locator(this.FanticsFilterMobileElements.bigshot_ele).click({button:'left'})
    }

    async check_filter_transition_screen() {
        await this.page.waitForSelector(this.FanticsFilterMobileElements.filter_transition_image, { state: 'detached' })
    }

    async change_filter_alien(){
        await this.page.waitForTimeout(40000)
        await this.page.frameLocator('iframe').locator(this.FanticsFilterMobileElements.alien_png).click({button:'left'})
    }

    async change_filter_bigshot(){
        await this.page.waitForTimeout(40000)
        await this.page.frameLocator('iframe').locator(this.FanticsFilterMobileElements.bigshot_ele).click({button:'left'})
    }
    async change_filter_bigstar(){
        await this.page.waitForTimeout(40000)
        await this.page.frameLocator('iframe').locator(this.FanticsFilterMobileElements.bigstar_ele).click({button:'left'})
    }
    // image="https://qa-1.testingdxp.com/games/fanatics-filter-web/assets/GirlElf.a43d944c.png"
    async change_filter_Girlelf(){
        await this.page.waitForTimeout(40000)
        await this.page.frameLocator('iframe').locator(this.FanticsFilterMobileElements.girl_elf_ele).click({button:'left'})
    }
    //image="https://qa-1.testingdxp.com/games/fanatics-filter-web/assets/Reindeer.397c1b9a.png"
    async change_filter_Rodolf_deer(){
        await this.page.waitForTimeout(40000)
        await this.page.frameLocator('iframe').locator(this.FanticsFilterMobileElements.rodolf_deer_ele).click({button:'left'})
    }
    async change_filter_christmas_elf(){
        await this.page.waitForTimeout(40000)
        await this.page.frameLocator('iframe').locator(this.FanticsFilterMobileElements.elf_png).click({button:'left'})
    }
    async change_filter_movie_mind(){
        await this.page.waitForTimeout(40000)
        await this.page.frameLocator('iframe').locator(this.FanticsFilterMobileElements.movie_mind_png).click({button:'left'})
    }

    async change_filter_Dark_king(){
        await this.page.waitForTimeout(40000)
        await this.page.frameLocator('iframe').locator(this.FanticsFilterMobileElements.dark_king_png).click({button:'left'})
    }

    async change_filter_H_death(){
        await this.page.waitForTimeout(40000)
        await this.page.frameLocator('iframe').locator(this.FanticsFilterMobileElements.H_death_png).click({button:'left'})
    }

    async change_filter_Santa(){
        await this.page.waitForTimeout(40000)
        await this.page.frameLocator('iframe').locator(this.FanticsFilterMobileElements.santa_png).click({button:'left'})
    }

    async change_filter_1924(){
        await this.page.waitForTimeout(40000)
        await this.page.frameLocator('iframe').locator(this.FanticsFilterMobileElements.Filter_1924_png).click({button:'left'})
    }

    async change_filter_viking(){
        await this.page.waitForTimeout(40000)
        await this.page.frameLocator('iframe').locator(this.FanticsFilterMobileElements.viking_png).click({button:'left'})
    }

    async change_filter_stupid_viking(){
        await this.page.waitForTimeout(40000)
        await this.page.frameLocator('iframe').locator(this.FanticsFilterMobileElements.stupid_viking).click({button:'left'})
    }

    async change_filter_Elf_2(){
        await this.page.waitForTimeout(40000)
        await this.page.frameLocator('iframe').locator(this.FanticsFilterMobileElements.elf_2_png).click({button:'left'})
    }


}