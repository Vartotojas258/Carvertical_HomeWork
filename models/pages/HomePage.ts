import { BasePage } from "./BasePage";
import { Locator, Page } from '@playwright/test'

export class HomePage extends BasePage {
    readonly accept_cookies_button: Locator
    readonly country_popup_lietuva_button: Locator
    readonly vin_input: Locator
    readonly submit_button: Locator

    constructor(page: Page) {
        super(page)
        this.accept_cookies_button = page.locator('//*[@data-testid="BisquitsBanner-acceptAllButton"]')
        this.country_popup_lietuva_button = page.locator('//*[contains(text(), "Lietuva")]')
        this.vin_input = page.locator('(//input[contains(@name, "identifier")])[1]')
        this.submit_button = page.locator('(//button[contains(@type, "submit")])[1]')
    }

    async inputVinNumber(vin: string) {
        await this.vin_input.type(vin);
        await this.submit_button.click();
    }

    async handleCountryAndCookiesPopups() {
        try {
            await this.country_popup_lietuva_button.waitFor({ state: 'visible', timeout: 20000 });
            await this.country_popup_lietuva_button.click({ force: true });
            await this.accept_cookies_button.click();
        } catch {}
    }
}
