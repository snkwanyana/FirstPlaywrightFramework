import { test,expect } from '@playwright/test';

let token = '';

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
    token = responseBody.data.token;
    console.log(token);

});

test('Use token to get user profile', async ({ request }) => {
    const response = await request.get(process.env.API_BASE_URL + '/profile', {
        headers: {
            'Authorization': `Bearer ${token}`,
        },
    });
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(responseBody);
});