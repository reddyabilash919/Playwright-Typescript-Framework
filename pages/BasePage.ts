import { Locator, Page } from "playwright/test";

export class BasePage {

    protected readonly page:Page;
    protected readonly signInMenuButton : Locator;
    protected readonly signOutButton : Locator;
    protected readonly userName : Locator;
    protected readonly contactUsMenuButton : Locator;


    constructor(page:Page){
        this.page = page;
        this.signInMenuButton = page.locator('.login');
        this.signOutButton = page.locator('.logout');
        this.userName = page.locator('.account span');
        this.contactUsMenuButton = page.locator('#contact-link');
        
    }

    async navigateTo(url: string) : Promise<void> {
        await this.page.goto(url);
    }

    async clickOnSignInMenu(): Promise<void> {
       
        await this.signInMenuButton.click();
    }

    async clickOnSignOutButton(): Promise<void> {
        await this.signOutButton.click();
    }

    async clickOnContactUsMenu(): Promise<void> {
        await this.contactUsMenuButton.click();
    }

    async getUserName(): Promise<string> {
        return (await this.userName.textContent())?.trim() ?? '';
    }
}