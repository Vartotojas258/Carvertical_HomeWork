import { BasePage } from "./BasePage";
import { Locator, Page } from '@playwright/test'
let _ = require('lodash');

export class PrecheckPage extends BasePage {
    readonly answer_buying_car: Locator
    readonly answer_selling_car: Locator
    readonly answer_checking_car: Locator
    readonly answer_other: Locator
    readonly submit_button: Locator
    readonly three_reports: Locator
    readonly buy_reports_button: Locator


    constructor(page: Page) {
        super(page)
        this.answer_buying_car = page.locator('//label[contains(@for, "buyer")]')
        this.answer_selling_car = page.locator('//label[contains(@for, "seller")]')
        this.answer_checking_car = page.locator('//label[contains(@for, "owner")]')
        this.answer_other = page.locator('//label[contains(@for, "other")]')
        this.submit_button = page.locator('//button[contains(@type, "submit")]')
        this.three_reports = page.locator('//*[@data-testid="GridItem"]//*[contains(@for, "special")]')
        this.buy_reports_button = page.locator('//a[contains(@type, "submit")]')
    }

    async answerWhyReportNeeded() {
        const randomAnswer = _.sample([
            this.answer_buying_car,
            this.answer_selling_car,
            this.answer_checking_car,
            this.answer_other,
        ]);
        await randomAnswer.click();
        await this.submit_button.click();
    }

    async selectThreeReports() {
        await this.three_reports.click();
        await this.buy_reports_button.click();
    }
}
