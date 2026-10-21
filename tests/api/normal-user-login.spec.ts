import { test,expect } from '@playwright/test';
// import { requestOptions } from '../../playwright.config';

test('Normal user login', async ({ request }) => {
    const response = await request.post(process.env.API_BASE_URL + '/login', {
        data: {
            email: process.env.LOGIN_USERNAME,
            password: process.env.LOGIN_PASSWORD,
        },
    });
    // await context.dispose();
    expect(response.status()).toBe(200);
    // expect(response.ok()).toBeTruthy();
    const responseBody = await response.json();
    // console.log(responseBody);
    expect(responseBody).toHaveProperty('data.token');
    const token = responseBody.data.token;
    console.log(token);

});