require('dotenv').config();

export async function accessMainPage(page) {
    console.log(process.env.TEST_URL);
    await page.goto((process.env.TEST_URL)?.toString());
}

export function randomNumber(max: number) {
    return Math.round(Math.random() + Math.floor(max));
}

export function getRandomEmail() {
    let date = new Date();
    let timestamp = date.getTime();
    let random = randomNumber(1000);

    return "qa" + timestamp + random + "@carvertical.com";
}