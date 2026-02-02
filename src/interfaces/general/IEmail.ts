import { IEmailTemplateOptions } from './IEmailTemplateOptions';

export interface IEmail {
  sendPlainText: ({
    email,
    subject,
    text,
  }: {
    email: string;
    subject: string;
    text: string;
  }) => Promise<void>;
  sendHtml: ({
    email,
    subject,
    html,
  }: {
    email: string;
    subject: string;
    html: string;
  }) => Promise<void>;
  generateEmailTemplate: (options: IEmailTemplateOptions) => string;
  welcomeEmailTemplate: (userName: string, loginUrl: string) => string;
  emailVerificationEmailTemplate: (verificationUrl: string) => string;
  passwordResetEmailTemplate: (resetUrl: string, expiresIn: string) => string;
  passwordChangedEmailTemplate: () => string;
  priceAlertEmailTemplate: (
    alertName: string,
    currentPrice: number,
    targetPrice: number,
    alertUrl: string
  ) => string;
  accountLockedEmailTemplate: (unlockUrl: string) => string;
  otpVerificationEmailTemplate: (otp: string) => string;
  emailVerifiedEmailTemplate: () => string;
}
