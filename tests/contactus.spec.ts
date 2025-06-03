import { Config } from '../config/config';
import {test} from '../fixtures/baseFixture';
import { expect } from '@playwright/test';
import { userData} from '../testData/userData';
import { contactUsFormData } from '../testData/contactsUsFormData';


test.describe('Contact Us Page Tests', async() => {

    test("Validate successful contact us form submission", async({ contactUsPage, signInPage}) => {

        await signInPage.signIn(Config.email, Config.password);
        const actualUserName = await signInPage.getUserName();
        expect(actualUserName).toContain(userData.expectedUserName);

        await contactUsPage.clickOnContactUsMenu();
        await contactUsPage.submitContactForm(contactUsFormData.subjectHeading,contactUsFormData.message);
       

        const successMessage = await contactUsPage.getSuccessMessage();
        expect(successMessage).toContain(contactUsFormData.expectedSuccessMessage);
    });

});

    