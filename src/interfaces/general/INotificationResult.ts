import { NotificationMethod } from "../../enums/notification-method";

export interface INotificationResult {
  success: boolean;
  method?: NotificationMethod;
  error?: string;
  timestamp: Date;
}