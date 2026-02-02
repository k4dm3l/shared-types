export interface IEmailTemplateOptions {
  title: string;
  description?: string;
  icon?: string; // Emoji or image URL
  iconIsImage?: boolean; // Set to true if icon is an image URL
  badgeText?: string;
  badgeIcon?: string; // Emoji for badge
  features?: string[];
  buttonText?: string;
  buttonUrl?: string;
  buttonIcon?: string; // Emoji for button
  footerText?: string;
}
