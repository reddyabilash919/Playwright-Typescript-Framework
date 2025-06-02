import { Locator, Page } from "playwright/test";
import { BasePage } from "./BasePage";

export class ContactUsPage extends BasePage {

  private readonly subjectHeadingDropdown: Locator;
  private readonly messageField: Locator;
  private readonly sendButton: Locator;
  private readonly successMessage: Locator;

  constructor(page: Page) {
    super(page); 
    this.subjectHeadingDropdown = page.locator('#id_contact');
    this.messageField = page.locator('#message');
    this.sendButton = page.locator('#submitMessage');
    this.successMessage = page.locator('.alert.alert-success');
  }

  async selectSubjectHeading(subject: string) {
    await this.subjectHeadingDropdown.selectOption(subject);
  }

  async enterMessage(message: string) {
    await this.messageField.fill(message);
  }

  async clickOnSendButton() {
    await this.sendButton.click();
  }

  async getSuccessMessage(): Promise<string> {
    return (await this.successMessage.textContent())?.trim() ?? '';
  }
}