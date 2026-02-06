import { RateSource } from "../../enums/rate-source";
import { ITreshold } from "../entities/IThreshold.interface";
import { ITresholdSubscription } from "../entities/IThresholdSubscription.interface";
import { INotificationHandlers } from "../general/INotificationHandlers";
import { INotificationMessage } from "../general/INotificationMessage";
import { INotificationResult } from "../general/INotificationResult";

export interface INotifications {
  buildNotificationMessage: (
    threshold: ITreshold,
    currentRate: number,
    source: RateSource
  ) => INotificationMessage;
  sendNotification: (
    subscription: ITresholdSubscription,
    threshold: ITreshold,
    currentRate: number,
    source: RateSource,
    handlers: INotificationHandlers
  ) => Promise<INotificationResult>;
}