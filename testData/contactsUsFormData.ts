
export interface ContactUsFormData {
  subjectHeading: string;
  message: string;
  attachFile?: string; 
  expectedSuccessMessage: string;
}

export const contactUsFormData : ContactUsFormData = {
  subjectHeading: "Customer service",
  message: "This is a test message for contacting the support team.",
  expectedSuccessMessage: "Your message has been successfully sent to our team."
};