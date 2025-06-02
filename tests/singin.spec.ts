import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixture';
import {Config} from '../config/config';

test.describe('Sign In Page Tests', () => {

    test('Validate Sign In with valid credentials', async ({ page, signInPage }) => {
        
        await signInPage.navigateTo(Config.baseUrl);
        await signInPage.clickOnSignInMenu();
        await signInPage.enterEmail(Config.email);
        await signInPage.enterPassword(Config.password);
        await signInPage.clickOnSignInButton();
        const actualUserName = await signInPage.getUserName();
        expect(actualUserName).toContain('Abilash DJ');
    });
});