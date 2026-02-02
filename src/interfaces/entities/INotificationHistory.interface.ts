import { NotificationMethod } from '../../enums/notification-method';

export interface INotificationHistory {
  uuid: string;
  thresholdId: string;
  tresholdSubscriptionId: string;
  userId: string;
  triggerValue: number;
  triggerSource: string;
  triggeredAt: Date;
  notificationMethod: NotificationMethod;
  notificationSent: boolean;
  errorMessage: string;
}
