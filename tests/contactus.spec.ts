import { Config } from '../config/config';
import {test} from '../fixtures/baseFixture';
import { expect } from '@playwright/test';



test.describe('Contact Us Page Tests', async() => {


    test("Validate Successfully contacting the support team", async({page, contactUsPage, signInPage}) => {

        await signInPage.navigateTo(Config.baseUrl);
        await signInPage.clickOnSignInMenu();
        await signInPage.enterEmail(Config.email);
        await signInPage.enterPassword(Config.password);
        await signInPage.clickOnSignInButton();
        const actualUserName = await signInPage.getUserName();
        expect(actualUserName).toContain('Abilash DJ');
        await contactUsPage.clickOnContactUsMenu();
        await contactUsPage.selectSubjectHeading('Customer service');
        await contactUsPage.enterMessage('This is a test message for contacting the support team.');
        await contactUsPage.clickOnSendButton();
        const successMessage = await contactUsPage.getSuccessMessage();
        expect(successMessage).toContain('Your message has been successfully sent to our team.');
    });

});

    