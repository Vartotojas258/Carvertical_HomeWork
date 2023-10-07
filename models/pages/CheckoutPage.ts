
import { BasePage } from "./BasePage";
import { Locator, Page, expect } from '@playwright/test'

export class CheckoutPage extends BasePage {
    readonly email_input: Locator
    readonly terms_checkbox: Locator
    readonly continue_button: Locator
    readonly add_voucher_button: Locator
    readonly voucher_input: Locator
    readonly apply_voucher_button: Locator
    readonly total_amount: Locator


    constructor(page: Page) {
        super(page)
        this.email_input = page.locator('//input[@id="email"]')
        this.terms_checkbox = page.locator('//div[contains(@class, "Checkbox_box")]')
        this.continue_button = page.locator('//button[@data-testid="Checkout-ValidateEmailButton"]')
        this.add_voucher_button = page.locator('//div[contains(@class, "CheckoutVoucherBlock_root")]/button')
        this.voucher_input = page.locator('//input[@id="coupon"]')
        this.apply_voucher_button = page.locator('//div[contains(@class, "CheckoutVoucherBlock_input")]//div[contains(@class, "TextInput_inputWrapper")]/button')
        this.total_amount = page.locator('//p[@data-testId="Checkout-TotalAmount"]/span')
    }

    async enterEmail(email: string) {
        await this.email_input.type(email);
    }

    async proceedAfterConfirmingTerms() {
        await this.terms_checkbox.click();
        await this.continue_button.click();
    }

    async applyVoucher(voucher: string) {
        await this.add_voucher_button.click();
        await this.voucher_input.type(voucher);
        await this.apply_voucher_button.click();
    }

    async checkTotalAmount(amount: string){
        await expect(this.total_amount).toHaveText(amount);
    }
}
