import {test as base } from '@playwright/test';
import { expect } from '@playwright/test';
import { ContactUsPage } from '../pages/ContactUsPage';
import { SignInPage } from '../pages/SignInPage';

type MyFixtures ={
  contactUsPage: ContactUsPage,
  signInPage : SignInPage
}



export const test = base.extend<MyFixtures>({
    
  contactUsPage: async ({ page }, use) => {
    await use(new ContactUsPage(page));
  },
    signInPage: async ({ page }, use) => {
        await use(new SignInPage(page));
    }
});

export { expect };
