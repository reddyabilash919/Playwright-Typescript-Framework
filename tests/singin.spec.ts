import { expect } from '@playwright/test';
import { test } from '../fixtures/baseFixture';
import {Config} from '../config/config';
import { userData } from "../testData/userData";

test.describe('Sign In Page Tests', () => {

    test('Validate successful sign in with valid credentials', async ({ signInPage }) => {
        
        await signInPage.signIn(Config.email, Config.password);
        const actualUserName = await signInPage.getUserName();
        expect(actualUserName).toContain(userData.expectedUserName);
    });
});