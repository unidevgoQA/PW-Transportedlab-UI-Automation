import { expect, Page } from "@playwright/test";
import { readFileSync } from 'fs'
export default class mainBoardPage {
  // [x: string]: any;
  private page: Page;
  // static buffer: void;
  private elements = {
    ok_button: '//button[text()="Ok"]',
    video_ele: "//div[@id='app']//video"
  }
  constructor(page: Page) {
    this.page = page;
  }
  async validate_output_image() {
    try {
      await this.page.waitForTimeout(7000)
      await expect
        .soft(this.page)
        .toHaveScreenshot('Mainboard background.png', { maxDiffPixelRatio: 0.1 })
    } catch (error) {
      throw new Error(`Livewallpage| Mmainboard| Mobile home screenlogo mismatch found` + error)
    }
  }
  async validate_output_video() {
    const ele = this.page.locator(this.elements.video_ele)
    try {
      await this.page.waitForTimeout(7000)
      await expect(ele).toBeVisible()
    } catch (error) {
      throw new Error(`Livewallpage| Mmainboard| Mobile home screenlogo mismatch found` + error)
    }
  }
  async validate_left_image() {
    try {
      await this.page.waitForTimeout(7000)
      await expect
        (this.page)
        .toHaveScreenshot('Left-image-1-1.png', { maxDiffPixelRatio: 0.1 })
    } catch (error) {
      throw new Error(`Livewallpage| Mmainboard| Mobile home screenlogo mismatch found` + error)
    }
  }
  async validate_output_frame() {
    try {
      await this.page.waitForTimeout(7000)
      await expect
        (this.page)
        .toHaveScreenshot('output_frame_9_16.png', { maxDiffPixelRatio: 0.1 })
    } catch (error) {
      throw new Error(`Livewallpage| Mmainboard| output frame (9:16 Output) mismatch found` + error)
    }
  }
  async clickokbutton() {
    await this.page.reload()
    await this.page.locator(this.elements.ok_button).click({ button: 'left' })
  }
  async validate_banner_image() {
    try {
      await this.page.waitForTimeout(7000)
      await expect
        .soft(this.page)
        .toHaveScreenshot('banner_image_validation.png', { maxDiffPixelRatio: 0.1 })
    } catch (error) {
      throw new Error(`Livewallpage| Mmainboard| output frame (9:16 Output) mismatch found` + error)
    }
  }
  async validate_right_image() {
    try {
      await this.page.waitForTimeout(7000)
      await expect
        (this.page)
        .toHaveScreenshot('right-image-1-1.png', { maxDiffPixelRatio: 0.1 })
    } catch (error) {
      throw new Error(`Livewallpage| Mmainboard| Right image (1:1)output mismatch found` + error)
    }
  }
  async validate_fallback_1_1_image() {
    try {
      await this.page.waitForTimeout(7000)
      await expect
        (this.page)
        .toHaveScreenshot('Fallback-1-1.png', { maxDiffPixelRatio: 0.1 })
    } catch (error) {
      throw new Error(`Livewallpage| Mmainboard| Right image (1:1)output mismatch found` + error)
    }
  }
  async validate_fallback_1_1_video() {
    const ele = this.page.locator(this.elements.video_ele).last()
    try {
      await this.page.waitForTimeout(7000)
      expect.soft(ele).toBeVisible()
    } catch (error) {
      throw new Error(`Livewallpage| Mmainboard| Fallback (1:1)outputvideo is not visible` + error)
    }
  }
  async validate_fallback_9_16_image() {
    try {
      await this.page.waitForTimeout(7000)
      await expect
        (this.page)
        .toHaveScreenshot('Fallback-9-16.png', { maxDiffPixelRatio: 0.1 })
    } catch (error) {
      throw new Error(`Livewallpage| Mmainboard| Fallback (9:16) mismatch found` + error)
    }
  }
  async validate_fallback_9_16_video() {
    const ele = this.page.locator(this.elements.video_ele).last()
    try {
      await this.page.waitForTimeout(7000)
      await expect.soft(ele).toBeVisible()
    } catch (error) {
      throw new Error(`Livewallpage| Mmainboard| Fallback (9:16) mismatch found` + error)
    }
  }
}
