require('dotenv').config();
import { test } from '@playwright/test';
import { HomePage } from '../../models/pages/HomePage';
import { accessMainPage, getRandomEmail } from '../../helpers/customFunctions';
import { PrecheckPage } from '../../models/pages/PreCheckPage';
import { CheckoutPage } from '../../models/pages/CheckoutPage';

let homePage: HomePage;
let precheckPage: PrecheckPage;
let checkoutPage: CheckoutPage;

const vin = process.env.VIN_NUMBER;
const email = getRandomEmail();
const voucher = "qahomework";
const expected_total_amount = "35.61 €";

test.beforeEach(async ({ page }) => {
  homePage = new HomePage(page);
  precheckPage = new PrecheckPage(page);
  checkoutPage = new CheckoutPage(page);
  await accessMainPage(page);
});

test('Should submit VIN and apply voucher', async ({ page }) => {
  await homePage.handleCountryAndCookiesPopups();
  await homePage.inputVinNumber(vin as string);
  await precheckPage.answerWhyReportNeeded();
  await precheckPage.selectThreeReports();
  await checkoutPage.enterEmail(email);
  await checkoutPage.proceedAfterConfirmingTerms();
  await checkoutPage.applyVoucher(voucher);
  await checkoutPage.checkTotalAmount(expected_total_amount);
});
