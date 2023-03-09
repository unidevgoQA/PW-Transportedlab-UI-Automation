import { expect, Page } from "@playwright/test";
import { existsSync, readFileSync } from "fs";
export default class liveWallPage {
  [x: string]: any;

  private page: Page;
  static buffer: void;
  constructor(page: Page) {
    this.page = page;
  }

  //=======================================================
  //▶▶Start Element
  private Fansee_page_elements = {
    fansee_header: "//p[text()='FanSee']",
    warning_message: `//p[text()="Please don't forget to stop the session"]`,
    tripplebutton: '//h5[text()="Default"]//parent::div/preceding-sibling::button',
    iframe: '.css-r99fy3',
    Queue_button: '//button[text()="Queue"]',
    clear_all_color_button: "//button[text()='Clear All']",
    image_upload_text: '//p[text()="Image Upload"]',
    color_picker_swatches: '//button[@aria-label="Add Color"]',
    delete_button_in_swatches: '//button[@aria-label="delete"]',
    output_button:'//button[@aria-label="Output"]',
    output_link:'//a[@aria-label="Open Link"]',
    solid_ele: '//li[text()="Solid"]',
    Horizontal_ele: '//li[@data-value="horizontal"]',
    Vertical_ele: '//li[text()="Vertical"]',
    Diagonal_ele: '//li[text()="Diagonal"]',
    Radial_ele: '//li[text()="Radial"]',
    Solid_dropdown: '//div[@aria-haspopup="listbox"]',
    countdown_color_picker: "//p[text()='Countdown Color']/following-sibling::button",
    RGB_red_color: '(//h3[text()="RGB"]//parent::legend//parent::div//following-sibling::div//input[@type="text"])[1]',
    RGB_green_color: '(//h3[text()="RGB"]//parent::legend//parent::div//following-sibling::div//input[@type="text"])[2]',
    RGB_blue_color: '(//h3[text()="RGB"]//parent::legend//parent::div//following-sibling::div//input[@type="text"])[3]',
    RGB_opacity_color: '(//h3[text()="RGB"]//parent::legend//parent::div//following-sibling::div//input[@type="text"])[4]',
    RGB_Hex_color: '(//h3[text()="RGB"]//parent::legend//parent::div//following-sibling::div//input[@type="text"])[5]',
    add_instance: '//p[text()="Instances"]//parent::div//button',
    click_mobile_background:'//p[text()="Mobile Background"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]',
    edit_button_mobile_background: '//p[text()="Mobile Background"]//following-sibling::div[2]//button[@aria-label="Upload/Edit"]',
    delete_button_mobile_background: "//p[text()='Mobile Background']//following-sibling::div[2]//button[@aria-label='Delete']",
    edit_upload_button_mobile_home_screen_logo: '//p[text()="Mobile Home Screen Logo"]//following-sibling::div//button[@aria-label="Upload/Edit"]',
    delete_button_mobile_home_screen_logo: "//p[text()='Mobile Home Screen Logo']//following-sibling::div//button[@aria-label='Delete']",
    mobile_home_screen_click:'//p[text()="Mobile Home Screen Logo"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]',
    select_image_for_output_back:"//p[text()='Output Background']//following-sibling::div//span[text()='Image']",
    select_video_for_ouput_back:"//p[text()='Output Background']//following-sibling::div//span[text()='Video']",
    click_output_back:'//p[text()="Output Background"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]',
    edit_button_output_background: '//p[text()="Output Background"]//following-sibling::div[2]//button[@aria-label="Upload/Edit"]',
    click_left_image_1_1_output:'//p[text()="Left Image (1:1 Output)"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]',
    edit_button_left_image_1_1_output: '//p[text()="Left Image (1:1 Output)"]//following-sibling::div//button[@aria-label="Upload/Edit"]',
    delete_button_left_image_1_1_output: "//p[text()='Left Image (1:1 Output)']//following-sibling::div//button[@aria-label='Delete']",
    edit_button_mobile_frame: '//p[text()="Mobile Frame"]//following-sibling::div//button[@aria-label="Upload/Edit"]',
    delete_button_mobile_frame: "//p[text()='Mobile Frame']//following-sibling::div//button[@aria-label='Delete']",
    edit_button_Output_Frame_9_16_output: '//p[text()="Output Frame (9:16 Output)"]//following-sibling::div//button[@aria-label="Upload/Edit"]',
    delete_button_Output_frame_9_16_output: "//p[text()='Output Frame (9:16 Output)']//following-sibling::div//button[@aria-label='Delete']",
    edit_button_banner_image_9_16_output: '//p[text()="Banner Image (9:16 Output)"]//following-sibling::div//button[@aria-label="Upload/Edit"]',
    delete_button_banner_image_9_16_output: "//p[text()='Banner Image (9:16 Output)']//following-sibling::div//button[@aria-label='Delete']",
    edit_button_right_image_1_1_output: '//p[text()="Right Image (1:1 Output)"]//following-sibling::div//button[@aria-label="Upload/Edit"]',
    delete_button_right_image_1_1_output: "//p[text()='Right Image (1:1 Output)']//following-sibling::div//button[@aria-label='Delete']",
    delete_button_output_background: "//p[text()='Output Background']//following-sibling::div[2]//button[@aria-label='Delete']",
    select_image_for_fallback:"//p[text()='1:1 Fallback']//following-sibling::div//span[text()='Image']",
    select_video_for_fallback:"//p[text()='1:1 Fallback']//following-sibling::div//span[text()='Video']",
    click_fallback_button:'//p[text()="1:1 Fallback"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]',
    edit_button_1_1_fallback: '//p[text()="1:1 Fallback"]//following-sibling::div[2]//button[@aria-label="Upload/Edit"]',
    delete_button_1_1_fallback: "//p[text()='1:1 Fallback']//following-sibling::div[2]//button[@aria-label='Delete']",
    click_fallback_button_9_16:'//p[text()="9:16 Fallback"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]',
    select_image_for_fallback_9_16:"//p[text()='9:16 Fallback']//following-sibling::div//span[text()='Image']",
    select_video_for_fallback_9_16:"//p[text()='9:16 Fallback']//following-sibling::div//span[text()='Video']",
    edit_button_9_16_fallback: '//p[text()="9:16 Fallback"]//following-sibling::div[2]//button[@aria-label="Upload/Edit"]',
    delete_button_9_16_fallback: "//p[text()='9:16 Fallback']//following-sibling::div[2]//button[@aria-label='Delete']",
    choosefile_button:'//button[text()="Choose File"]',
    save_button:'//button[text()="Save"]',
    input_config_name: '//h2[text()="Configuration"]//following-sibling::div//input[@type="text"]',
    input_pre_live_text_element: '//h5[text()="Pre-Live Text"]//following-sibling::div//div[@aria-label="rdw-editor"]',
    input_post_live_text_element: '//h5[text()="Post-Live Text"]//following-sibling::div//div[@aria-label="rdw-editor"]',
    input_stand_by_message_element: '//h5[text()="Stand By Message"]//following-sibling::div//div[@aria-label="rdw-editor"]',
    input_low_connection_message_element: '//h5[text()="Low Connection Message"]//following-sibling::div//div[@aria-label="rdw-editor"]',
    live_countdown_timer_toggle: '//span[text()="Live Countdown Timer"]//preceding-sibling::span',
    show_username_to_mainboard_toggle: '//p[text()="Show Username to Mainboard"]//following-sibling::span',
    enable_camera_flip_toggle: '//p[text()="Enable Camera Flip"]/following-sibling::span//span',
    hour_ele_controls: "//label[text()='Hours']//following-sibling::div//input",
    minutes_ele_controls: "//label[text()='Minutes']//following-sibling::div//input",
    seconds_ele_controls: "//label[text()='Seconds']//following-sibling::div//input",
    mobile_button: "//button[@aria-label='Mobile']",
    refresH_button: "//button[@aria-label='Refresh']",
    Vip_button: '//button[@aria-label="Vip"]',
    Mobile_link_text: '//h2[text()="Mobile Link"]',
    Vip_link_text: '//h2[text()="VIP Link"]',
    title_input: '//p[text()="Title"]//following-sibling::div//input',
    total_prize_input: '//p[text()="Total Prize"]//following-sibling::div//input',
    Distribution_type_manual: "//p[text()='Manual']//parent::button",
    distribution_type_auto: "//p[text()='Automatic']//parent::button",
    condition_type_prize_dropdown: "//p[text()='Condition Type']//following-sibling::div",
    condition_type_participation: "//li[text()='Participation']",
    condition_type_time: "//li[text()='Time']",
    condition_type_Made_output: "//li[text()='Made Output']",
    chance_input: '//h6[text()="Chance"]//following-sibling::div//input',
    input_coupon_tag: '//p[text()="Select Coupon"]//following-sibling::div//div',
    coupon_item: '//p[text()="Name"]',
    select_button_coupons: '//button[text()="Select"]',
    edit_button: '//button[text()="Edit"]',
    refresh_button: '//button[@aria-label="Refresh"]',
    mobile_1_1_button: '//button[@value="1:1"]',
    mobile_9_16_button: '//button[@value="9:16"]',
    Mainboard_16_9_button: '//button[@value="16:9"]',
    Mainboard_4_1button: '//button[@value="4:1"]',
    feedcount_single: '//button[@value="single"]',
    feedcount_multiple: '//button[@value="multiple"]',
    signal_dropdown: '//div[text()="Signal Strength"]',
    strong_signal_ele: '//li[text()="Strong"]//span//input',
    decent_signal_ele: '//li[text()="Decent"]//span//input',
    weak_signal_ele: '//li[text()="Weak"]//span//input',
    vip_only_toggle: '//p[text()="VIPs Only"]//preceding-sibling::span',
    start_button: '//button[text()="START"]',
    stop_button: "//button[text()='Clear Mainboard']//following-sibling::button",
    cue_button: "//h6[text()='Cue']//preceding-sibling::button",
    live_button: "//button[text()='Live']",
    delete_button: "//h6[text()='Delete']//preceding-sibling::button",
    search_field: "//input[@placeholder='Search username']",
    mainboard_button: "//button[@aria-label='Output']",
    auto_rotation_toggle: "//p[text()='Enable Auto Rotation']//following-sibling::span",
    auto_rotation_input_seconds: "//label[text()='Seconds']//following-sibling::div//input",
    alert_button: "//h6[text()='Alert']//preceding-sibling::button",
    uncue_button: "//h6[text()='Uncue']//preceding-sibling::button",
    copy_link_button:'//button[@aria-label="Copy Link"]',
    select_video_for_mobile_background:"//p[text()='Mobile Background']//following-sibling::div//span[text()='Video']",
  }




  async clickQRCodeBtn() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//img)[1]");
    await ele.click();
  }


  async clickMobileLinkOpenBtn() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    // const ele = await this.page
    //   .frameLocator("iframe")
    //   .locator("//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]");
    // await ele.click();
    const [page1] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.frameLocator('iframe').locator("//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]").click()
    ]);

    return page1;
  }
  async clickVIPMobileLinkOpenBtn() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    // const ele = await this.page
    //   .frameLocator("iframe")
    //   .locator("//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]");
    // await ele.click();
    const [page1] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.frameLocator('iframe').locator("//a[contains(@class,'MuiButtonBase-root MuiIconButton-root')]").click()
    ]);

    return page1;
  }

  async validate_warning_stop_message_text() {
    const ele = this.page.frameLocator('//iframe').locator(this.Fansee_page_elements.warning_message)
    if (await ele.isEnabled()) {
      await expect(ele).toBeVisible()
    }
    else {
      throw new Error(" Warning message in livewall game is either missing or changed")
    }


  }
  async click_Fan_see_Section() {
    const ele = this.page.locator(this.Fansee_page_elements.fansee_header);
    if (await ele.isEnabled()) {
      await expect(ele).toBeVisible()
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error('Fansee game header is missing in admin panel')
    }
  }
  //add new instance
  async click_plus_button() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.add_instance)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error("Either the instances text or plus button is not visible")
    }
  }
  async add_new_config_name() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.input_config_name)
    if (await ele.isVisible()) {
      await ele.type("Auto")
    }
    else {
      throw new Error("Either the configurations text or plus button is not visible or the type operation failed")
    }
  }
  async remove_message_popup() {
    const ele = this.page.frameLocator('//iframe').locator('//h5[text()="Default"]')
    if (await ele.isEnabled()) {
      await ele.click({ button: 'left', force: true })
    }
    else {
      throw new Error('Default element is hidden')
    }
  }
  async clickDesignPage() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    const ele = this.page
      .frameLocator("iframe")
      .locator("//button[text()='Design']").last();
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error('Design button in left panel is missing')
    }

  }

  async click_trippledot() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.tripplebutton)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either element is not found or element visiblity is hidden");
    }
  }

  async clickAdminPage() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    const ele = this.page
      .frameLocator("iframe")
      .locator("//button[text()='Admin']").last();
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either button element is not found or element visiblity is hidden");
    };
  }
  async click_analytics_Page() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    const ele = this.page
      .frameLocator("iframe")
      .locator("//button[text()='Analytics']").first();
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either button element is not found or element visiblity is hidden");
    };
  }
  async click_prizing_Page() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    const ele = this.page
      .frameLocator("iframe")
      .locator("//button[text()='Prizing']").last();
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either button element is not found or element visiblity is hidden");
    };
  }
  async click_cue_Page() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.Queue_button).last();
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either Cue button element is not found or element visiblity is hidden");
    };
  }
  async click_favourite_Page() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    const ele = this.page
      .frameLocator("iframe")
      .locator("//button[text()='Favorites']").last();
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either Cue button element is not found or element visiblity is hidden");
    };
  }
  //Admin section here 
  async click_refresh_button() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.refresH_button).last();
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either button element is not found or element visiblity is hidden");
    }
  }
  async click_1_1_mobile_button() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.mobile_1_1_button).last();
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either button element is not found or element visiblity is hidden");
    }
  }

  async click_9_16_mobile_button() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.mobile_9_16_button).last();
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either button element is not found or element visiblity is hidden");
    }
  }
  async click_16_9_mainboard_toggle() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.Mainboard_16_9_button).last();
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either button element is not found or element visiblity is hidden");
    }
  }
  async click_4_1_mainboard_toggle() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.Mainboard_4_1button).last();
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either button element is not found or element visiblity is hidden");
    }
  }
  async click_feedcount_single() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.feedcount_single).last();
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either button element is not found or element visiblity is hidden");
    }
  }
  async click_feedcount_multiple() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.feedcount_multiple).last();
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either button element is not found or element visiblity is hidden");
    }
  }
  async click_signal_dropdown() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.signal_dropdown).last();
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either dropdown parent element is not found or element visiblity is hidden");
    }
  }
  async close_signal_dropdown() {
    const ele = this.page
      .frameLocator("iframe")
      .locator('//li[text()="Signal Strength"]').last();
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either dropdown parent element is not found or element visiblity is hidden");
    }
  }
  async select_strong_signal() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.strong_signal_ele).last();
    if (await ele.isVisible()) {
      if (!await ele.isChecked()) {
        await ele.click({ button: 'left' });
      }
    }
    else {
      throw new Error("Either dropdown parent element is not found or element visiblity is hidden");
    }
  }
  async select_decent_signal() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.decent_signal_ele).last();
    if (await ele.isVisible()) {
      if (!await ele.isChecked()) {
        await ele.click({ button: 'left' });
      }
    }
    else {
      throw new Error("Either dropdown parent element is not found or element visiblity is hidden");
    }
  }
  async select_weak_signal() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.weak_signal_ele).last();
    if (await ele.isVisible()) {
      if (!await ele.isChecked()) {
        await ele.click({ button: 'left' });
      }
    }
    else {
      throw new Error("Either dropdown parent element is not found or element visiblity is hidden");
    }
  }
  async toggle_vip_only_dropdowns() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.vip_only_toggle);
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either dropdown parent element is not found or element visiblity is hidden");
    }
  }
  async click_start_button() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.start_button);
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either start button element is not found or element visiblity is hidden");
    }
  }
  async click_stop_button() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.stop_button);
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either stop button element is not found or element visiblity is hidden");
    }
  }
  async type_in_search_username(value: string) {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.search_field);
    if (await ele.isVisible()) {
      await ele.focus()
      await ele.fill(value);
    }
    else {
      throw new Error("Either stop button element is not found or element visiblity is hidden");
    }
  }

  async click_output_screen_link() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.mainboard_button);
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error("Either mainboard button element is not found or element visiblity is hidden");
    }
  }

  async click_cue_button() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.cue_button).first();
    if (await ele.isVisible()) {
      await ele.click({button:'left'});
    }
    else {
      throw new Error("Either stop button element is not found or element visiblity is hidden");
    }
  }
  async click_Live_button() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.live_button).first();
    if (await ele.isVisible()) {
       await ele.click({button:'left'});
    }
    else {
      throw new Error("Either stop button element is not found or element visiblity is hidden");
    }
  }
  async click_delete_button() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.delete_button).first();
    if (await ele.isVisible()) {
      // await ele.click({button:'left'});
    }
    else {
      throw new Error("Either stop button element is not found or element visiblity is hidden");
    }
  }
  //cue section here
  async toggle_auto_rotation() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.auto_rotation_toggle).first();
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Either stop button element is not found or element visiblity is hidden");
    }
  }
  async input_seconds_enable_auto_rotation(value: string) {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.auto_rotation_input_seconds).first();
    if (await ele.isVisible()) {
      await ele.fill(value);
    }
    else {
      throw new Error("Either input element is not found or element visiblity is hidden");
    }
  }
  async click_live_button_cue() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.live_button).first();
    if (await ele.isVisible()) {
      // await ele.click({button:'left'});
    }
    else {
      throw new Error("Either stop button element is not found or element visiblity is hidden");
    }
  }
  async click_alert_button_cue() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.alert_button).first();
    if (await ele.isVisible()) {
      // await ele.click({button:'left'});
    }
    else {
      throw new Error("Either stop button element is not found or element visiblity is hidden");
    }
  }
  async click_uncue_button_cue() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.uncue_button).first();
    if (await ele.isVisible()) {
      // await ele.click({button:'left'});
    }
    else {
      throw new Error("Either stop button element is not found or element visiblity is hidden");
    }
  }

  //prizing section Here
  async click_AddNewPrizeBtn() {
    const ele = this.page.frameLocator('iframe').locator('//button[text()="Add New Prize"]')
    await expect(ele).toBeVisible()
    await ele.click({ button: 'left' })
  }
  async click_distribute_all_manual_PrizeBtn() {
    const ele = this.page.frameLocator('iframe').locator('//button[text()="Distribute All Manual Prizes"]')
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    } else {
      throw new Error("Button to distribute all Manual prize is not visible")
    }
  }
  async verify_all_manual_Prize_distributed_confirmation() {
    const ele = this.page.frameLocator('iframe').locator('//p[text()="All manual prizes Already distributed"]')
    if (await ele.isVisible()) {

    } else {
      throw new Error("confirmation text that all manual prizes are distributed is not visible")
    }
  }
  async back_button() {
    const ele = this.page.frameLocator('iframe').locator('//div//img')
    await expect(ele).toBeVisible()
    await ele.click({ button: 'left' })
  }
  async input_title_prize(value: string) {
    const ele = this.page
      .frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.title_input)
    if (await ele.isVisible()) {
      await ele.focus()
      await ele.fill(value)
    }
    else {
      throw new Error('Title input element is not visible')
    }
  }
  async input_total_prize(value: string) {
    const ele = this.page
      .frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.total_prize_input)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
      await ele.fill(' ')
      await ele.fill(value)
    }
    else {
      throw new Error('Total prize input element is not visible')
    }
  }
  async click_manual_distribution_type() {
    const ele = this.page
      .frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.Distribution_type_manual)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('Manual distribution toggle is not visible')
    }
  }
  async click_auto_distribution_type() {
    const ele = this.page
      .frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.distribution_type_auto)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('Auto distribution toggle is not visible')
    }
  }
  async input_chance_amount(value: string) {
    const ele = this.page
      .frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.chance_input)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
      await ele.fill(value, { timeout: 1000 })
    }
    else {
      throw new Error('Chance input element is not visible')
    }
  }
  async click_condtion_type() {
    const ele = this.page
      .frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.condition_type_prize_dropdown)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('condition type dropdown  element is not visible')
    }
  }
  async click_condtion_type_participation() {
    const ele = this.page
      .frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.condition_type_participation)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('condition type participation dropdown  element is not visible')
    }
  }
  async click_condtion_type_Time() {
    const ele = this.page
      .frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.condition_type_time)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('condition type time dropdown  element is not visible')
    }
  }
  async click_condtion_type_Made_output() {
    const ele = this.page
      .frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.condition_type_Made_output)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('condition type Made dropdown  element is not visible')
    }
  }
  async click_button_to_start_selecting_coupon() {
    const ele = this.page
      .frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.input_coupon_tag)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('coupon tag input element is not visible')
    }
  }
  async select_first_coupon() {
    const ele = this.page
      .frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.coupon_item).first()
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('First coupon item element is not visible')
    }
  }
  async confirm_select_coupon() {
    const ele = this.page
      .frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.select_button_coupons)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('select coupon button, after selecting a coupon is not visible')
    }
  }
  async click_prize_edit_button() {
    const ele = this.page
      .frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.edit_button).first()
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('Edit button is not visible')
    }
  }
  async clickClearBtn() {
    // await this.page.frameLocator('iframe').waitForSelector("text=Design")
    const ele = this.page
      .frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.clear_all_color_button);
    await ele.click({ button: 'left' });
  }

  async verifyFontsTitleText() {
    const ele = this.page.frameLocator("iframe").locator("text=Fonts").first();
    await expect(ele).toContainText("Fonts");
  }

  async verifyUploadFontText() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("text=Upload Font");
    expect(ele).toContainText("Upload Font");
  }

  async clickToUploadFont() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-v2612'])[1]");
    expect(ele).toBeVisible();
    await ele.click();
  }



  async deleteUploadedFont() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-718jsx'])[1]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-718jsx'])[1]")
        .click();
    }
  }

  //Start Upload Color Section Element
  async verify_image_upload_text() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.image_upload_text)
    if (await ele.isVisible()) {
      //just add a click event here if code is updated 
      await expect.soft(ele).toBeVisible()
    }
    else {
      throw new Error("Image Uploads Header text is missing.")
    }
  }
  async clickBackgroundColorPickerInputField() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//p[text()='Background Color']/following-sibling::button");
    // expect(ele).toBeVisible()
    if (await ele.isVisible()) {
      await ele.click();
    }
    else {
      throw new Error('Background color picker input element is missing')
    }
  }


  async clickSaveBtn() {
    const ele = this.page
      .frameLocator("iframe")
      .locator("//button[text()='Save']");
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('The save button is not visible or an issue with the click')
    }
  }
  async clickSaveBtnColorpicker() {
    const ele = this.page
      .frameLocator("iframe")
      .locator("//button[text()='Save']");
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
      await this.page.waitForSelector("//h3[text()='Color Picker']//following-sibling::button", { state: 'hidden' })
    }
    else {
      throw new Error('The save button is not visible or an issue with the click')
    }
  }

  async clickFontColorPickerInputField() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//p[text()='Font Color']/following-sibling::button");
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' });
    }
    else {
      throw new Error("Input element for font color picker is missing")
    }

  }
  async click_countdown_ColorPicker_InputField() {
    const ele = this.page
      .frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.countdown_color_picker);
    if (await ele.isVisible()) {
      await ele.click({ force: true });
    }
    else {
      throw new Error('Either countdown color picker is missing or its not visible in DOM')
    }

  }
  async clickplusbuttonswatches() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.color_picker_swatches)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error("Either Swatches section button is missing or its not visible")
    }
  }
  async clickdeletebuttonswatches() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.delete_button_in_swatches).last()
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error("Either Delete button of last swatch is missing or its not visible")
    }
  }
  async validate_solid_horizontal_vertical_dropdown() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.Solid_dropdown).first()
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error("Either solid dropdown  is missing or its not visible in this color picker")
    }
  }

  async click_solid_button() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.solid_ele)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error("Either list text  solid is missing or its not visible")
    }
  }

  async click_horizontal_button() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.Horizontal_ele)
    try {
      await ele.click({button:'left'})
    } catch (error) {
      throw new Error('click horizontal button click failed'+error)
    }
  }
  async click_vertical_button() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.Vertical_ele)
    try {
      await ele.click({button:'left'})
    } catch (error) {
      throw new Error('click vertical button click failed'+error)
    }

  }
  async click_diagonal_button() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.Diagonal_ele)
    try {
      await ele.click({button:'left'})
    } catch (error) {
      throw new Error('click diagonal button click failed'+error)
    }
  }
  async click_radial_button() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.Radial_ele)
    try {
      await ele.click({button:'left'})
    } catch (error) {
      throw new Error('click radial button click failed'+error)
    }
  }

  //countdown_color_input
  async input_Red_Color(value: string) {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.RGB_red_color);
    if (await ele.isVisible()) {
      await ele.focus()
      await ele.fill(' ')
      await ele.type(value, { delay: 500 })
    }
    else {
      throw new Error(" THe red color input box for this color picker is not visible")
    }
  }

  async input_green_color(value: string) {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.RGB_green_color);
    if (await ele.isVisible()) {
      await ele.focus()
      await ele.fill(' ')
      await ele.type(value, { delay: 500 })
    }
    else {
      throw new Error(" THe Green color input box for this color picker is not visible")
    }
  }
  async input_blue_color(value: string) {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.RGB_blue_color);
    if (await ele.isVisible()) {
      await ele.focus()
      await ele.fill(' ')
      await ele.type(value, { delay: 500 })
    }
    else {
      throw new Error(" THe blue color input box for this color picker is not visible")
    }
  }

  async inputColorOpacity(value: string) {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.RGB_opacity_color);
    if (await ele.isVisible()) {
      await ele.focus()
      await ele.fill(' ')
      await ele.type(value, { delay: 400 })
    }
    else {
      throw new Error(" THe opacity color input box for this color picker is not visible")
    }
  }

  async inputHEXColor(value: string) {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.RGB_Hex_color);
    if (await ele.isVisible()) {
      await ele.fill(' ')
      await ele.focus()
      await ele.type(value, { delay: 400 })
    }
    else {
      throw new Error(" THe Hex color input box for this color picker is not visible")
    }
  }

  async deleteUploadedFeedRightImage() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[8]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[8]")
        .click();
    }
  }
  async deleteUploadedFeedLeftImage() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[7]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[7]")
        .click();
    }
  }

  async deleteUploadedFeedImage() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[6]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[6]")
        .click();
    }
  }

  async deleteUploadedOutputBackground() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[5]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[5]")
        .click();
    }
  }

  async deleteUploadedOutputFrame() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[4]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[4]")
        .click();
    }
  }
  async deleteUploadedFullScreenLogo() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[3]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[3]")
        .click();
    }
  }

  async deleteUploadedMobileFrame() {
    try {
        await this.page.frameLocator('iframe').locator(this.Fansee_page_elements.delete_button_mobile_frame).click({button:'left'})
    
    } catch (error) {
      throw new Error('Live wall | Game design | delete button in mobile frame clicking failed' + error )
    }  
}

  async deleteUploadedBackground() {
    let ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='MuiBox-root css-1tejaop'])[1]")
      .isVisible();
    if (ele == true) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page
        .frameLocator("iframe")
        .locator("(//div[@class='MuiBox-root css-1tejaop'])[1]")
        .click();
    }
  }
  //Mobile Background
  async select_image_for_mobile_background() {
    const ele = this.page.
      frameLocator(this.Fansee_page_elements.iframe)
      .locator("//p[text()='Mobile Background']//following-sibling::div//span[text()='Image']")
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('Mobile background Image selector is missing.' + `//p[text()='Mobile Background']//following-sibling::div//span[text()='Image']`)
    }
  }
  async select_video_for_mobile_background() {
    const ele = this.page.
    frameLocator(this.Fansee_page_elements.iframe)
    .locator(this.Fansee_page_elements.select_video_for_mobile_background)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('Mobile background video selector is missing.' )
    }
  }
  async mobile_background_image_upload() {
    const edit_image_button = this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.edit_button_mobile_background)
    if (await edit_image_button.isVisible()) {
      await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.delete_button_mobile_background).click({ button: 'left' })
    }
    await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.click_mobile_background).click({ button: 'left' })
  }
  async mobile_background_image_delete() {
    try {
        await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.delete_button_mobile_background).click({ button: 'left' })
        
    } catch (error) {
      throw new Error('Live Wall Page|mobile background image | delete in mobile background image is failed'+error)
    }
  }
  async Image_uploader_For_mobile_background() {
    const filePath0 = "testData/images/mobile_back.jpg"
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.choosefile_button).click()
    ]);
    await fileChooser.setFiles([filePath0]);
    await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.save_button).click()
  }
  async video_uploader_for_mobile_background(){
    const filePath0 = "testData/videos/video.mp4"
    const [fileChooser] = await Promise.all([
            // It is important to call waitForEvent before click to set up waiting.
            this.page.waitForEvent('filechooser'),
            // Opens the file chooser.
            await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.click_mobile_background).click({button:'left'})
    ]);
    await fileChooser.setFiles([filePath0]);
  }
  async wait_mobile_back_upload() {
    const edit_image_button = this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.edit_button_mobile_background)
    if (await edit_image_button.isEnabled()) {
      await expect(edit_image_button).toBeVisible({ timeout: 60000 })
    }
    else {
      throw new Error('Edit/Upload button element is not visible or there is an issue with uploading the images')
    }
  }
  async delete_mobile_back(){
    try {
      await this.page.frameLocator('//iframe').locator(this.Fansee_page_elements.delete_button_mobile_background).click({button:'left'})
   
    } catch (error) {
     throw new Error('Live Wall Page| delete | delete Failed'+ error)  
    } 
   }
  //Mobile Home Screen Logo
  async mobile_home_screen_logo_upload() {
    const edit_image_button = this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.edit_upload_button_mobile_home_screen_logo)
    if (await edit_image_button.isVisible()) {
      await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.delete_button_mobile_home_screen_logo).click({ button: 'left' })
    }
    await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.mobile_home_screen_click).click({ button: 'left' })
  }
  async Image_uploader_For_mobile_home_screen_logo() {
    const filePath0 = "testData/images/Fullscreen.png"
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
    ]);
    await fileChooser.setFiles([filePath0]);
    await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()
  }
  async wait_mobile_Home_screen_upload() {
    const edit_image_button = this.page.
      frameLocator('(//iframe)[1]').
      locator(this.Fansee_page_elements.edit_upload_button_mobile_home_screen_logo)
    if (await edit_image_button.isEnabled()) {
      await expect(edit_image_button).toBeVisible({ timeout: 60000 })
    }
    else {
      throw new Error('Edit/upload image element is')
    }

  }
  async delete_mobile_homescreen(){
   try {
     await this.page.frameLocator('//iframe').locator(this.Fansee_page_elements.delete_button_mobile_home_screen_logo).click({button:'left'})
  
   } catch (error) {
    throw new Error('Live Wall Page| delete | delete Failed'+ error)  
   } 
  }
  //Output Background
  async select_image_for_output_background() {
    const ele = this.page.
      frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.select_image_for_output_back)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('Mobile background Image selector is missing.' )
    }
  }
  async output_background_upload() {
    const edit_image_button = this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.edit_button_output_background)
    if (await edit_image_button.isVisible()) {
      await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.delete_button_output_background).click({ button: 'left' })
    }
    await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.click_output_back).click({ button: 'left' })
  }
  async Image_uploader_For_output_background() {
    const filePath0 = "testData/images/TitleBanner.jpg"
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.choosefile_button).click()
    ]);
    await fileChooser.setFiles([filePath0]);
    await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.save_button).click()
  }
  async wait_OutPut_background() {
    const edit_image_button = this.page.
      frameLocator('(//iframe)[1]').
      locator(this.Fansee_page_elements.edit_button_output_background)
    if (await edit_image_button.isEnabled()) {
      await expect(edit_image_button).toBeVisible({ timeout: 60000 })
    }
    else {
      throw new Error('Edit/upload button element is missing here or network issue file not uploading')
    }

  }
  async select_video_for_output_back(){
    const ele = this.page.
      frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.select_video_for_ouput_back)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('output background video selector is missing.')
    }
  }
  async delete_output_back(){
    try {
      await this.page.frameLocator('//iframe').locator(this.Fansee_page_elements.delete_button_output_background).click({button:'left'})
   
    } catch (error) {
     throw new Error('Live Wall Page| delete | delete Failed'+ error)  
    } 
   }
   async video_uploader_For_output_background() {
    const filePath0 = "testData/videos/video.mp4"
    const [fileChooser] = await Promise.all([
            // It is important to call waitForEvent before click to set up waiting.
            this.page.waitForEvent('filechooser'),
            // Opens the file chooser.
            await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.click_output_back).click({button:'left'})
    ]);
    await fileChooser.setFiles([filePath0]);
  }
  //left_image(1:1 output)
  async left_image_1_1_upload() {
    try {
      const edit_image_button = this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.edit_button_left_image_1_1_output)
      if (await edit_image_button.isVisible()) {
        await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.delete_button_left_image_1_1_output).click({ button: 'left' })
      }
      await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.click_left_image_1_1_output).click({ button: 'left' })
    } catch (error) {
      throw new Error('Live wall| Game design | click left image 1_1 upload failed'+ error )
    }
  }
  async Image_uploader_For_left_image_1_1() {
   try {
     const filePath0 = "testData/images/potrait.png"
     const [fileChooser] = await Promise.all([
       // It is important to call waitForEvent before click to set up waiting.
       this.page.waitForEvent('filechooser'),
       // Opens the file chooser.
       this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.choosefile_button).click()
     ]);
     await fileChooser.setFiles([filePath0]);
     await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.save_button).click()
   } catch (error) {
    throw new Error('Live wall| Game design | left image 1_1 upload failed'+ error )
   }
  }
  async wait_left_image_1_1_upload() {
    const edit_image_button = this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.edit_button_left_image_1_1_output)
    if (await edit_image_button.isEnabled()) {
      await expect(edit_image_button).toBeVisible({ timeout: 60000 })
    }
    else {
      throw new Error('edit/upload button element is missing here or network issue ')
    }

  }

  async delete_left_image_1_1(){
    try {
      await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.delete_button_left_image_1_1_output).click({ button: 'left' })
        
    } catch (error) {
      throw new Error('edit/upload button element is missing here or network issue')
    }
  }
  //Mobile Frame
  async mobile_frame_upload() {
    const edit_image_button = this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.edit_button_mobile_frame)
    if (await edit_image_button.isVisible()) {
      await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.delete_button_mobile_frame).click({ button: 'left' })
    }
    await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Mobile Frame"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({ button: 'left' })
  }
  async Image_uploader_For_mobile_frame() {
    const filePath0 = "testData/Frames/mobileFrame.png"
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
    ]);
    await fileChooser.setFiles([filePath0]);
    await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()
  }
  async wait_mobile_frame_upload() {
    const edit_image_button = this.page.
      frameLocator('(//iframe)[1]').
      locator(this.Fansee_page_elements.edit_button_mobile_frame)
    if (await edit_image_button.isEnabled()) {
      await expect(edit_image_button).toBeVisible({ timeout: 60000 })
    } else {
      throw new Error('Edit/upload image/video element is missing or network issue')
    }

  }
  //Output Frame (9:16 Output)
  async OutputFrame_9_16_upload() {
    const edit_image_button = this.page.
      frameLocator('(//iframe)[1]').
      locator(this.Fansee_page_elements.edit_button_Output_Frame_9_16_output)
    if (await edit_image_button.isVisible()) {
      await this.page.
        frameLocator('(//iframe)[1]').
        locator(this.Fansee_page_elements.delete_button_Output_frame_9_16_output).click({ button: 'left' })
    }
    await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Output Frame (9:16 Output)"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({ button: 'left' })
  }
  async Image_uploader_For_OutputFrame_9_16() {
    const filePath0 = "testData/images/mobile_frame.png"
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
    ]);
    await fileChooser.setFiles([filePath0]);
    await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()
  }
  async wait_OutputFrame_9_16_upload() {
    const edit_image_button = this.page.
      frameLocator('(//iframe)[1]').
      locator(this.Fansee_page_elements.edit_button_Output_Frame_9_16_output)
    if (await edit_image_button.isEnabled()) {
      await expect(edit_image_button).toBeVisible({ timeout: 60000 })
    }
    else {
      throw new Error('Edit/upload image/video element is missing or network issue')
    }

  }
  async delete_output_frame_9_16(){
    try {
      await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.delete_button_Output_frame_9_16_output).click({ button: 'left' })
        
    } catch (error) {
      throw new Error('edit/upload button element is missing here or network issue')
    }
  }
  //Banner Image (9:16 Output)
  async bannner_image_9_16_upload() {
    const edit_image_button = this.page.
      frameLocator('(//iframe)[1]').
      locator(this.Fansee_page_elements.edit_button_banner_image_9_16_output)
    if (await edit_image_button.isVisible()) {
      await this.page.frameLocator('(//iframe)[1]').
        locator(this.Fansee_page_elements.delete_button_banner_image_9_16_output).click({ button: 'left' })
    }
    await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Banner Image (9:16 Output)"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({ button: 'left' })
  }
  async Image_uploader_For_bannner_image_9_16() {
    const filePath0 = "testData/images/banner.png"
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.choosefile_button).click()
    ]);
    await fileChooser.setFiles([filePath0]);
    await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.save_button).click()
  }
  async wait_bannner_image_9_16_upload() {
    const edit_image_button =
      this.page.frameLocator('(//iframe)[1]').
        locator(this.Fansee_page_elements.edit_button_banner_image_9_16_output)
    if (await edit_image_button.isEnabled()) {
      await expect(edit_image_button).toBeVisible({ timeout: 60000 })
    }
    else {
      throw new Error('Edit/upload image/video element is missing or network issue')
    }

  }
  async delete_banner_image(){
    try {
      await this.page.frameLocator('//iframe').locator(this.Fansee_page_elements.delete_button_banner_image_9_16_output).click()
  
    } catch (error) {
      throw new Error('Live Wall | Game design | banner image delete failed' + error )
    }  
  }
  //Right Image (1:1 Output)
  async right_image_1_1_upload() {
    const edit_image_button = this.page.frameLocator('(//iframe)[1]').
      locator(this.Fansee_page_elements.edit_button_right_image_1_1_output)
    if (await edit_image_button.isVisible()) {
      await this.page.frameLocator('(//iframe)[1]')
        .locator(this.Fansee_page_elements.delete_button_right_image_1_1_output)
        .click({ button: 'left' })
    }
    await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="Right Image (1:1 Output)"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({ button: 'left' })
  }
  async Image_uploader_For_right_image_1_1() {
    const filePath0 = "testData/images/potrait.png"
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
    ]);
    await fileChooser.setFiles([filePath0]);
    await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()
  }
  async wait_right_image_1_1_upload() {
    const edit_image_button = this.page.
      frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.delete_button_right_image_1_1_output)
    if (await edit_image_button.isEnabled()) {
      await expect(edit_image_button).toBeVisible({ timeout: 60000 })
    }
    else {
      throw new Error('Edit/upload image/video element is missing or network issue')
    }

  }

  async delete_right_image(){
    try {
      await this.page.frameLocator('//iframe').locator(this.Fansee_page_elements.delete_button_right_image_1_1_output).click()
   
    } catch (error) {
      throw new Error('Live Wall Page| Game design | right image(1:1) output delete failed' + error )
    } 
  }
  //1:1 Fallback
  async select_image_for_fallback_1_1() {
    const ele = this.page.
      frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.select_image_for_fallback)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('1:1 Fallback selector is missing.' + `//p[text()='1:1 Fallback']//following-sibling::div//span[text()='Image']`)
    }
  }
  async select_video_fallback_1_1(){
    const ele = this.page.
      frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.select_video_for_fallback)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('1:1 Fallback selector is missing.' + `//p[text()='1:1 Fallback']//following-sibling::div//span[text()='Video']`)
    }
  }
  async Fallback_1_1_upload() {
    const edit_image_button = this.page.
      frameLocator('(//iframe)[1]').
      locator(this.Fansee_page_elements.edit_button_1_1_fallback)
    if (await edit_image_button.isVisible()) {
      await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.delete_button_1_1_fallback).click({ button: 'left' })
    }
    await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.click_fallback_button).click({ button: 'left' })
  }
  async Image_uploader_For_Fallback_1_1() {
    const filePath0 = "testData/images/potrait.png"
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
    ]);
    await fileChooser.setFiles([filePath0]);
    await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()
  }async video_uploader_For_Fallback_1_1() {
    const filePath0 = "testData/videos/video.mp4"
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.click_fallback_button).click()
    ]);
    await fileChooser.setFiles([filePath0]);
  }
  async wait_Fallback_1_1_upload() {
    const edit_image_button = this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.edit_button_1_1_fallback)
    if (await edit_image_button.isEnabled()) {
      await expect(edit_image_button).toBeVisible({ timeout: 60000 })
    }
    else {
      throw new Error('Edit/upload image/video element is missing or network issue')
    }

  }
  async delete_Fallback_1_1_upload(){
   try {
     await this.page.frameLocator('iframe').locator(this.Fansee_page_elements.delete_button_1_1_fallback).click({button:'left'})
   } catch (error) {
     throw new Error(" Live Wall | Game design | Delete fallback 1 1 image " + error)
   }
  }
  //9:16 Fallback
  async select_image_for_fallback_9_16() {
    const ele = this.page.
      frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.select_image_for_fallback_9_16)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('9:16 Fallback selector is missing.' + `//p[text()='9:16 Fallback']//following-sibling::div//span[text()='Image']`)
    }
  }
  async select_video_for_fallback_9_16() {
    const ele = this.page.
      frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.select_video_for_fallback_9_16)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('9:16 Fallback selector is missing.' + `//p[text()='9:16 Fallback']//following-sibling::div//span[text()='Image']`)
    }
  }
  async Fallback_9_16_upload() {
    const edit_image_button = this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.edit_button_9_16_fallback)
    if (await edit_image_button.isVisible()) {
      await this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.delete_button_9_16_fallback).click({ button: 'left' })
    }
    await this.page.frameLocator('(//iframe)[1]').locator('//p[text()="9:16 Fallback"]//following-sibling::div//div[@class="MuiBox-root css-v2612"]').click({ button: 'left' })
  }
  async Image_uploader_For_Fallback_9_16() {
    const filePath0 = "testData/images/potrait.png"
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Choose File"]').click()
    ]);
    await fileChooser.setFiles([filePath0]);
    await this.page.frameLocator('(//iframe)[1]').locator('//button[text()="Save"]').click()
  }
  async video_uploader_For_Fallback_9_16() {
    const filePath0 = "testData/videos/video.mp4"
    const [fileChooser] = await Promise.all([
      // It is important to call waitForEvent before click to set up waiting.
      this.page.waitForEvent('filechooser'),
      // Opens the file chooser.
      this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.click_fallback_button_9_16).click()
    ]);
    await fileChooser.setFiles([filePath0]);
  }
  async wait_Fallback_9_16_upload() {
    const edit_image_button = this.page.frameLocator('(//iframe)[1]').locator(this.Fansee_page_elements.edit_button_9_16_fallback)
    if (await edit_image_button.isEnabled()) {
      await expect(edit_image_button).toBeVisible({ timeout: 60000 })
    }
    else {
      throw new Error('Edit/upload image/video element is missing or network issue')
    }
  }

  async delete_Fallback_9_16_upload(){
   try {
     await this.page.frameLocator('//iframe').locator(this.Fansee_page_elements.delete_button_9_16_fallback).click({button:'left'})
 
   } catch (error) {
    throw new Error("Live wall | Game design | clicking in delete button of fallback 9 16 is failed"+ error)
   }  
}
  //Dispaly Massage Section Element From Here


  async preLiveInputBoxFonts() {

    const ele = this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element)
    const font_ele = this.page.frameLocator("iframe").locator("(//span[text()='Font'])[1]")
    if (await font_ele.isVisible()) {
      await ele.selectText()
      await font_ele.click()
    }
    else {
      throw new Error('Font selection element is missing')
    }

  }

  async preLiveInputBoxArial() {
    const ele = this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element)
    const arial_ele = this.page.frameLocator("iframe").locator("//li[text()='Arial']")
    if (await arial_ele.isVisible()) {
      await ele.selectText()
      await arial_ele.click()
    }
    else {
      throw new Error("Arial element is missing")
    }
  }

  async preLiveInputBoxBlocktype() {
    const ele = this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element)
    const ele_block_type = this.page.frameLocator("iframe").locator("(//a[@title='Block Type'])[1]")
    if (await ele_block_type.isVisible()) {
      await ele.selectText()
      await ele_block_type.click()
    }
    else {
      throw new Error('Block type element is missing')
    }

  }
  async preLiveInputBoxNormal() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='Normal']").click()

  }

  async preLiveInputBoxBlockH1() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='H1']").click()
  }
  async preLiveInputBoxBlockH2() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='H2']").click()
  }
  async preLiveInputBoxBlockH3() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='H3']").click()
  }
  async preLiveInputBoxBlockH4() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='H4']").click()
  }
  async preLiveInputBoxBlockH5() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='H5']").click()
  }
  async preLiveInputBoxBlockH6() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='H6']").click()
  }
  async preLiveInputBoxBlockquote() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='Blockquote']").click()
  }

  async preLiveInputBoxBold() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Bold']//img[1])[1]").click()

  }

  async preLiveInputBoxItalic() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Italic']//img[1])[1]").click()

  }

  async preLiveInputBoxUnderline() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Underline']//img[1])[1]").click()

  }

  async preLiveInputBoxsikethrough() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Strikethrough']//img[1])[1]").click()

  }

  async preLiveInputBoxColorpk() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Color Picker']//img)[1]").click()

  }

  async preLiveInputBoxTextcl() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//span[text()='Text']").click()

  }

  async preLiveInputBoxGreencl() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[1]").click()

  }

  async preLiveInputBoxHighlightcl() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//span[text()='Highlight']").click()

  }

  async preLiveInputBoxHighlightgrn() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[1]").click()

  }
  async preLiveInputBoxLeft() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Left'])[1]").click()

  }
  async preLiveInputBoxCenter() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Center']//img[1])[1]").click()

  }
  async preLiveInputBoxRight() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Right']//img[1])[1]").click()

  }
  async preLiveInputBoxOutdent() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Outdent']//img[1])[1]").click()

  }
  async preLiveInputBoxIndent() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Indent']//img[1])[1]").click()

  }



  async preLiveInputBoxOrdered() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Ordered']//img[1])[1]").click()

  }


  async preLiveInputBoxUnOrdered() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Unordered']//img[1])[1]").click()

  }

  async preLiveInputBoxRemove() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_pre_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//div[@title='Remove(styles) only']//img[1])[1]").click()

  }


  async inputPreLiveText(value: string) {
    const ele = this.page
      .frameLocator("iframe")
      .locator(
        this.Fansee_page_elements.input_pre_live_text_element
      );
    if (await ele.isVisible()) {
      await ele.fill('  ')
      await ele.fill(value);
    }
    else {
      throw new Error('input element for prelive text element is either missing or not visible');

    }


  }
  async input_post_live_text() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(
        this.Fansee_page_elements.input_post_live_text_element
      );
    if (await ele.isVisible()) {
      await ele.fill('  ')
      await ele.fill(
        'test For post live message'
      );
    } else {
      throw new Error("The editor for post live text element is not found as visible to playwright")
    }

  }


  async postLiveInputBoxFonts() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//span[text()='Font'])[2]").click()
  }

  async postLiveInputBoxArial() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("//li[text()='Arial']").click()
  }

  async postLiveInputBoxBlocktype() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()
    await this.page.frameLocator("iframe").locator("(//a[@title='Block Type'])[2]").click()

  }
  async postLiveInputBoxNormal() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='Normal']").click()

  }

  async postLiveInputBoxBlockH1() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H1']").click()
  }
  async postLiveInputBoxBlockH2() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H2']").click()
  }
  async postLiveInputBoxBlockH3() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H3']").click()
  }
  async postLiveInputBoxBlockH4() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H4']").click()
  }
  async postLiveInputBoxBlockH5() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H5']").click()
  }
  async postLiveInputBoxBlockH6() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H6']").click()
  }
  async postLiveInputBoxBlockquote() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='Blockquote']").click()
  }

  async postLiveInputBoxBold() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Bold']//img[1])[2]").click()

  }

  async postLiveInputBoxItalic() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Italic']//img[1])[2]").click()

  }

  async postLiveInputBoxUnderline() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Underline']//img[1])[2]").click()

  }

  async postLiveInputBoxsikethrough() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Strikethrough']//img[1])[2]").click()

  }

  async postLiveInputBoxColorpk() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Color Picker']//img)[2]").click()

  }

  async postLiveInputBoxTextcl() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("//span[text()='Text']").click()

  }

  async postLiveInputBoxGreencl() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[2]").click()

  }

  async postLiveInputBoxHighlightcl() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("//span[text()='Highlight']").click()

  }

  async postLiveInputBoxHighlightgrn() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[2]").click()

  }
  async postLiveInputBoxLeft() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Left'])[2]").click()

  }
  async postLiveInputBoxCenter() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Center']//img[1])[2]").click()

  }
  async postLiveInputBoxRight() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Right']//img[1])[2]").click()

  }
  async postLiveInputBoxOutdent() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Outdent']//img[1])[2]").click()

  }
  async postLiveInputBoxIndent() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Indent']//img[1])[2]").click()

  }



  async postLiveInputBoxOrdered() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Ordered']//img[1])[2]").click()

  }


  async postLiveInputBoxUnOrdered() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Unordered']//img[1])[2]").click()

  }

  async postLiveInputBoxRemove() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_post_live_text_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Remove(styles) only']//img[1])[2]").click()

  }


  async inputPostLiveText() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator(
        "(//div[@class='public-DraftStyleDefault-block public-DraftStyleDefault-ltr'])[2]"
      );
    expect(ele).toBeVisible();
    await ele.fill(
      "In publishing and graphic design, Lorem ipsum is a placeholder"
    );
  }






  async clickStandByMassageType() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@class='rdw-editor-toolbar']/following-sibling::div)[3]");
    expect(ele).toBeVisible();
    await ele.click();
  }

  async selectNormalText() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//li[text()='Normal']");
    expect(ele).toBeVisible();
    await ele.click();
  }


  async standByInputBoxFonts() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()
    await this.page.frameLocator("iframe").locator("(//span[text()='Font'])[3]").click()
  }

  async standByInputBoxArial() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='Arial']").click()
  }

  async standByInputBoxBlocktype() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//a[@title='Block Type'])[3]").click()

  }
  async standByInputBoxNormal() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='Normal']").click()

  }

  async standByInputBoxBlockH1() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H1']").click()
  }
  async standByInputBoxBlockH2() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H2']").click()
  }
  async standByInputBoxBlockH3() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H3']").click()
  }
  async standByInputBoxBlockH4() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H4']").click()
  }
  async standByInputBoxBlockH5() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H5']").click()
  }
  async standByInputBoxBlockH6() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H6']").click()
  }
  async standByInputBoxBlockquote() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='Blockquote']").click()
  }

  async standByInputBoxBold() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Bold']//img[1])[3]").click()

  }

  async standByInputBoxItalic() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Italic']//img[1])[3]").click()

  }

  async standByInputBoxUnderline() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Underline']//img[1])[3]").click()

  }

  async standByInputBoxsikethrough() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Strikethrough']//img[1])[3]").click()

  }

  async standByInputBoxColorpk() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Color Picker']//img)[3]").click()

  }

  async standByInputBoxTextcl() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//span[text()='Text']").click()

  }

  async standByInputBoxGreencl() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[3]").click()

  }

  async standByInputBoxHighlightcl() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//span[text()='Highlight']").click()

  }

  async standByInputBoxHighlightgrn() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[3]").click()

  }
  async standByInputBoxLeft() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Left'])[3]").click()

  }
  async standByInputBoxCenter() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Center']//img[1])[3]").click()

  }
  async standByInputBoxRight() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Right']//img[1])[3]").click()

  }
  async standByInputBoxOutdent() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Outdent']//img[1])[3]").click()

  }
  async standByInputBoxIndent() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Indent']//img[1])[3]").click()

  }



  async standByInputBoxOrdered() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Ordered']//img[1])[3]").click()

  }


  async standByInputBoxUnOrdered() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Unordered']//img[1])[3]").click()

  }

  async standByInputBoxRemove() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_stand_by_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Remove(styles) only']//img[1])[3]").click()

  }


  async inputStandByMessage() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(
        this.Fansee_page_elements.input_stand_by_message_element
      );
    if (await ele.isVisible()) {
      await ele.fill('  ')
      await ele.fill(
        ' test For stand by message'
      );
    } else {
      throw new Error("The editor for standby text element is not found as visible to playwright")
    }
  }

  async clickBoldOptionForPreLiveText() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//div[@title='Bold']//img)[1]");
    expect(ele).toBeVisible();
    await ele.click();
  }
  // low connection message from here 
  async inputLowConnectionMassage() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(
        this.Fansee_page_elements.input_low_connection_message_element
      );
    if (await ele.isVisible()) {
      await ele.fill('  ')
      await ele.fill(
        ' test For Low connection message'
      );
    } else {
      throw new Error("The editor for low connection  text element is not found as visible to playwright")
    }

  }


  async lowConnectionMassageInputBoxFonts() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//span[text()='Font'])[4]").click()
  }

  async lowConnectionMassageInputBoxArial() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='Arial']").click()
  }

  async lowConnectionMassageInputBoxBlocktype() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//a[@title='Block Type'])[4]").click()

  }
  async lowConnectionMassageInputBoxNormal() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='Normal']").click()

  }

  async lowConnectionMassageInputBoxBlockH1() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H1']").click()
  }
  async lowConnectionMassageInputBoxBlockH2() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H2']").click()
  }
  async lowConnectionMassageInputBoxBlockH3() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H3']").click()
  }
  async lowConnectionMassageInputBoxBlockH4() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H4']").click()
  }
  async lowConnectionMassageInputBoxBlockH5() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H5']").click()
  }
  async lowConnectionMassageInputBoxBlockH6() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='H6']").click()
  }
  async lowConnectionMassageInputBoxBlockquote() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//li[text()='Blockquote']").click()
  }

  async lowConnectionMassageInputBoxBold() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Bold']//img[1])[4]").click()

  }

  async lowConnectionMassageInputBoxItalic() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Italic']//img[1])[4]").click()

  }

  async lowConnectionMassageInputBoxUnderline() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Underline']//img[1])[4]").click()

  }

  async lowConnectionMassageInputBoxsikethrough() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Strikethrough']//img[1])[4]").click()

  }

  async lowConnectionMassageInputBoxColorpk() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Color Picker']//img)[4]").click()

  }

  async lowConnectionMassageInputBoxTextcl() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//span[text()='Text']").click()

  }

  async lowConnectionMassageInputBoxGreencl() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[4]").click()

  }

  async lowConnectionMassageInputBoxHighlightcl() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("//span[text()='Highlight']").click()

  }

  async lowConnectionMassageInputBoxHighlightgrn() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//span[@class='rdw-colorpicker-cube'])[4]").click()

  }
  async lowConnectionMassageInputBoxLeft() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Left'])[4]").click()

  }
  async lowConnectionMassageInputBoxCenter() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Center']//img[1])[4]").click()

  }
  async lowConnectionMassageInputBoxRight() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Right']//img[1])[4]").click()

  }
  async lowConnectionMassageInputBoxOutdent() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Outdent']//img[1])[4]").click()

  }
  async lowConnectionMassageInputBoxIndent() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Indent']//img[1])[4]").click()

  }



  async lowConnectionMassageInputBoxOrdered() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Ordered']//img[1])[4]").click()

  }


  async lowConnectionMassageInputBoxUnOrdered() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Unordered']//img[1])[4]").click()

  }

  async lowConnectionMassageInputBoxRemove() {
    await this.page.frameLocator("iframe").locator(this.Fansee_page_elements.input_low_connection_message_element).selectText()

    await this.page.frameLocator("iframe").locator("(//div[@title='Remove(styles) only']//img[1])[4]").click()

  }

  // controls section from here
  async click_live_countdown_timer_toggle() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.live_countdown_timer_toggle).last()
    try {
      await ele.click({button:'left',force:true}) 
    } catch (error) {
      throw new Error('Toggle clicking falied '+error)
    }
  }
  async click_show_username_to_mainboard_toggle() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.show_username_to_mainboard_toggle)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left',force:true })
    }
    else {
      throw new Error("Show Username to Mainboard toggle is not visible")
    }
  }
  async click_enable_camera_flipt_toggle() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.enable_camera_flip_toggle)
    if (await ele.isVisible()) {
      await ele.click({ button: 'left', force:true })
    }
    else {
      throw new Error("Enable camera flip toggle is not visible")
    }
  }
  async click_enable_camera_flip_single() {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.enable_camera_flip_toggle).last()
    if (await ele.isVisible()) {
      await ele.click({ button: 'left',force:true})
    }
    else {
      throw new Error("Enable camera flip toggle is not visible" )
    }
  }
  async type_hours_in_control(value:string) {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.hour_ele_controls)
    if (await ele.isVisible()) {
      await ele.focus()
      await ele.fill("  ")
      await ele.fill(value)
    }
    else {
      throw new Error("Hours section element is not visible")
    }
  }
  async type_minutes_in_control(value:string) {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.minutes_ele_controls)
    if (await ele.isVisible()) {
      await ele.focus()
      await ele.fill("  ")
      await ele.fill(value)
    }
    else {
      throw new Error("Minutes section element is not visible")
    }
  }
  async type_seconds_in_control(value:string) {
    const ele = this.page.frameLocator(this.Fansee_page_elements.iframe).locator(this.Fansee_page_elements.seconds_ele_controls)
    if (await ele.isVisible()) {
      await ele.focus()
      await ele.fill("  ")
      await ele.fill(value)
    }
    else {
      throw new Error("seconds section element input failed")
    }
  }

  //Live Wall Home page 
  async clickGameStartBtn() {

    let startBtn = await this.page.frameLocator('iframe').locator("text='STOP'").isHidden()
    if ((startBtn == true)) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page.frameLocator('iframe')
        .locator("//div[@class='MuiBox-root css-pzp2lt']//button[1]")
        .click({ force: true })
    }

  }

  //Live Wall Home page 
  async clickGameStopBtn() {

    //const ele = await this.page.frameLocator('iframe').locator("//div[@class='MuiBox-root css-pzp2lt']//button[1]").isVisible()
    if (await this.page.frameLocator('iframe').locator("//button[text()='STOP']")) {
      // console.log("Enable Stage to be skip and jump to next one")
      await this.page.frameLocator('iframe')
        .locator("//div[@class='MuiBox-root css-pzp2lt']//button[1]")
        .click({ force: true })
    }

  }


  //Live Wall Home page 
  async clickLiveSelfieCamOutPutLink() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//button[contains(@class,'MuiButtonBase-root MuiButton-root')]//img)[1]");
    await ele.click();
  }



  //Live Wall Home page 
  async clickLiveSelfieCamOutPutLinkCopyBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Copy Link']");
    expect(ele).toBeVisible();
    await ele.click();
  }

  //Live Wall Home page 
  async click_Mobile_button() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.mobile_button);
    await ele.click();
  }
  async click_VIP_button() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.Vip_button);
    await ele.click();
  }

  async click_open_link_button() {
    const ele = this.page
      .frameLocator("iframe")
      .locator('//a[@aria-label="Open Link"]')
    if (await ele.isVisible()) {
      await ele.click()
    }
    else {
      throw new Error('Issue with the open link visiblity')
    }
  }
  async click_copy_link_button() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.copy_link_button)
    if (await ele.isVisible()) {
      await ele.click()
    }
    else {
      throw new Error('Issue with the open link visiblity')
    }
  }
  async click_open_link_button_with_page() {
    const [page1] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.frameLocator('.css-r99fy3').locator('//a[@aria-label="Open Link"]').click()
    ]);

    return page1;
  }

  //Live Wall Home page 
  async clickCopyQRCodeBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Copy QR Code']");
    await ele.click();
  }

  async Validate_mobile_link_text() {
    const ele = this.page.
      frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.Mobile_link_text)
    if (await ele.isEnabled()) {
      await expect(ele).toBeVisible()
    }
    else {
      throw new Error("Mobile link Header text is missing in the modal")
    }
  }
  async Validate_Vip_link_text() {
    const ele = this.page.
      frameLocator(this.Fansee_page_elements.iframe)
      .locator(this.Fansee_page_elements.Vip_link_text)
    if (await ele.isEnabled()) {
      await expect(ele).toBeVisible()
    }
    else {
      throw new Error("VIP link Header text is missing in the modal")
    }
  }

  //Live Wall Home page 
  async checkSaveQRCodeBtn() {
    const ele = this.page
      .frameLocator("iframe")
      .locator("//button[text()='Save QR Code']");
    if (await ele.isVisible()) {
    }
    else {
      throw new Error("Check the visiblity for Save QR code button, its invisible to DOM")
    }

  }
  async validateDownload() {

    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.frameLocator('.css-r99fy3').locator('//button[text()="Save QR Code"]').click()
    ])
    const suggestedFileName = download.suggestedFilename()

    if (suggestedFileName.match('Fan-See-Qr')) {
      const filePath = 'Test_data_that_gets_downloaded/' + suggestedFileName
      await download.saveAs(filePath)
      expect(existsSync(filePath)).toBeTruthy()
    }
    else {
      throw new Error("There is a problem with your download,may be you have changed the file name please Add the string Fan-See-QR to the Qr file name")
    }

  }
  async validate_Download_exports() {

    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.frameLocator('.css-r99fy3').locator('//button[text()="Export"]').first().click()
    ])
    const suggestedFileName = download.suggestedFilename()

    if (suggestedFileName.match('Fan_see')) {
      const filePath = 'Test_data_that_gets_downloaded/' + suggestedFileName
      await download.saveAs(filePath)
      expect(existsSync(filePath)).toBeTruthy()
    }
    else {
      throw new Error("There is a problem with your download,may be you have changed the file name please Add the string Fan-See-QR to the Qr file name")
    }

  }

  //Live Wall Home page 
  async clickQRCodeWindowCloseBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[@aria-label='Close']");
    await ele.click();
  }



  async clickOnlyShowVIPSelfieCamEnableBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//input[@type='checkbox'])[1]")
    await ele.click();
  }



  async clickToAddLiveSelfieCamInCue() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator('text=CueLiveDelete >> button').first()
    await ele.click();
  }

  async clickCueBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='Cue']");
    await ele.click();
  }

  async clickCueOpenNewTabBtn() {
    // Click text=Open Link
    const [page1] = await Promise.all([
      this.page.waitForEvent('popup'),
      this.page.frameLocator('iframe').locator('text=Open Link').click()
    ]);

  }

  async clickToAddCueToLiveSection() {


    // Click text=LiveAlertUncue >> button >> nth=0
    await this.page1.locator('text=LiveAlertUncue >> button').first().click()


  }


  async clickAutoRotationCheckBox() {
    const ele = await this.page
      .locator("(//input[@type='checkbox'])[1]");
    await ele.click();
  }



  async downloadAnlytics() {
    // Click text=Export 
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.frameLocator('iframe').locator("(//button[text()='Export'])[1]").click()
    ]);
  }

  async clickAnalyticsPageBackBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("//button[text()='← Back']");
    expect(ele).toBeVisible()
    await ele.click();
  }

  async clickOutPutBtn() {
     const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.output_button);
      try {
        await expect(ele).toBeVisible()
        await ele.click();
      } catch (error) {
        throw new Error('LiveWall page| Output(Mainboard) screen element click failed' + error)
      }
  }

  async clickOutPutLinkInNewTab() {
    const ele = this.page
      .frameLocator("iframe")
      .locator(this.Fansee_page_elements.output_link);
     try {
      await expect(ele).toBeVisible()
      await ele.click();
     } catch (error) {
       throw new Error('Livewall page |Output link click failed' +error)
     }
  }

  async clickVIPLiveSelfieCamBtn() {
    const ele = await this.page
      .frameLocator("iframe")
      .locator("(//h2[text()='Live Selfie Cam']/following-sibling::button)[3]");
    expect(ele).toBeVisible()
    await ele.click();
  }
  async clickAdminSection() {
    const ele = this.page.frameLocator("iframe").locator("//button[@aria-label='Admin']")
    expect(ele).toBeVisible()
    await ele.click({ force: true })
    //await this.page.waitForLoadState("networkidle")
  }

  async clickCopyLinkBtn() {
    const ele = this.page.frameLocator("iframe").locator('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium css-1oge9gb"]')
    expect(ele).toBeVisible()
    await ele.click()

  }
  async clickVIPCopyLinkBtn() {
    const ele = this.page.frameLocator("iframe").locator('//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-colorPrimary MuiIconButton-sizeMedium css-1oge9gb"]')
    expect(ele).toBeVisible()
    await ele.click()

  }
  async clickCloseBtn() {
    const ele = this.page.frameLocator('iframe').locator('//div[@class="MuiBox-root css-1xnxzwa"]')
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
    }
    else {
      throw new Error('Close button is not visible in the modal')
    }
  }
  async validateSaveQRCode() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.frameLocator('iframe').locator('//button[text()="Save QR Code"]').click()
    ])
    const suggestedFileName = download.suggestedFilename()
    const filePath = 'QRCode' + suggestedFileName
    await download.saveAs(filePath)
    expect(existsSync(filePath)).toBeTruthy()
  }
  async validateVIPSaveQRCode() {
    const [download] = await Promise.all([
      this.page.waitForEvent('download'),
      this.page.frameLocator('iframe').locator('//button[text()="Save QR Code"]').click()
    ])
    const suggestedFileName = download.suggestedFilename()
    const filePath = 'QRCode' + suggestedFileName
    await download.saveAs(filePath)
    expect(existsSync(filePath)).toBeTruthy()
  }
  async clickVIPMobileLinkBtn() {
    const ele = this.page.frameLocator("iframe").locator('(//button[@class="MuiButtonBase-root MuiIconButton-root MuiIconButton-sizeMedium css-1pejgza"])[3]')
    expect(ele).toBeVisible()
    await ele.click()

  }
  async clickOutputLinkBtn() {
    const ele = this.page.frameLocator("iframe").locator("//div[@class='css-1iwzvcj']/following-sibling::button[1]")
    expect(ele).toBeVisible()
    await ele.click()

  }
  async verifyVIPLinkText() {
    await this.page.waitForTimeout(1000)
    const ele = this.page.frameLocator('iframe').locator('//h2[@class="MuiTypography-root MuiTypography-h6 MuiDialogTitle-root css-188xrq4"]')
    expect(ele).toContainText("VIP Link")
  }
  async verifyOutputScreenLinkText() {
    await this.page.waitForTimeout(1000)
    const ele = this.page.frameLocator('iframe').locator("//h2[text()='Output Screen Link']")
    expect(ele).toContainText("Output Screen Link")
  }

  //delete config section
  async delete_config_section() {
    const ele = this.page.frameLocator('iframe').
      locator("//button[text()='Delete']").last()
    if (await ele.isVisible()) {
      await ele.click({ button: 'left' })
      //may need to discard this code letter
      await this.page.waitForSelector('//p[text()="Auto"]', { state: 'detached' })
    }
  }














}
