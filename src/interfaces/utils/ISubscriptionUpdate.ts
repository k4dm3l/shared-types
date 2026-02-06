import { ITresholdSubscription } from "../entities/IThresholdSubscription.interface";
import { INotificationResult } from "../general/INotificationResult";
import { ISubscriptionUpdateHandlers } from "../general/ISubscriptionUpdateHandlers";

export interface IUpdateSubscriptionResult {
  success: boolean;
  error?: string;
}

export interface ISubscriptionUpdate {
  /**
   * Updates subscription after notification is sent
   * Handles subscription update, threshold update, notification history, and retry scheduling
   */
  updateSubscriptionAfterNotification: (
    subscription: ITresholdSubscription,
    notificationResult: INotificationResult & {
      data?: {
        current_value?: number;
        source?: string;
      };
    },
    handlers: ISubscriptionUpdateHandlers
  ) => Promise<IUpdateSubscriptionResult>;
}

