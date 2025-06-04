import {test as base } from '@playwright/test';
import { expect } from '@playwright/test';
import { ContactUsPage } from '../pages/ContactUsPage';
import { SignInPage } from '../pages/SignInPage';
import { Config } from '../config/config';

type MyFixtures ={
  contactUsPage: ContactUsPage,
  signInPage : SignInPage
}

export const test = base.extend<MyFixtures>({
    
  contactUsPage: async ({ page }, use) => {
    const contactUsPage = new ContactUsPage(page);
    await use(contactUsPage);

  },
    signInPage: async ({ page }, use) => {
      const signInPage = new SignInPage(page);
      await signInPage.navigateTo(Config.baseUrl);
      await signInPage.clickOnSignInMenu();
      await use(signInPage);
    
    }
});

export { expect };
