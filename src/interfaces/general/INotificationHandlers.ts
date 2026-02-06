import { IUser } from "../entities/IUser.interface";
import { INotificationMessage } from "./INotificationMessage";
import { INotificationResult } from "./INotificationResult";

export interface INotificationHandlers {
  sendEmail?: (user: IUser, message: INotificationMessage) => Promise<INotificationResult>;
  sendPush?: (user: IUser, message: INotificationMessage) => Promise<INotificationResult>;
  sendSms?: (user: IUser, message: INotificationMessage) => Promise<INotificationResult>;
  sendWhatsApp?: (user: IUser, message: INotificationMessage) => Promise<INotificationResult>;
  sendInApp?: (user: IUser, message: INotificationMessage) => Promise<INotificationResult>;
  getUserById?: (userId: string) => Promise<IUser | null>;
}