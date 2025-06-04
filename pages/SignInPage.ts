import { Locator, Page } from "playwright/test";
import { BasePage } from "./BasePage";


export class SignInPage extends BasePage {
    
  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly signInButton: Locator;
  private readonly signInPageTitle: Locator;

  constructor(page: Page) {
    super(page); 
    this.emailInput = page.locator('#email');
    this.passwordInput = page.locator('#passwd');
    this.signInButton = page.locator('#SubmitLogin');
    this.signInPageTitle = page.locator('.page-subheading');
  }

  async enterEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async enterPassword(password: string) : Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickOnSignInButton(): Promise<void> {
    await this.signInButton.click();
  }

  async getSignInPageTitle(): Promise<string> {
    return (await this.signInPageTitle.textContent())?.trim() ?? '';
  }

  async signIn(email: string, password: string): Promise<void> {
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.signInButton.click();
  }
}
