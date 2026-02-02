import { IUser } from '../entities/IUser.interface';
import { ITresholdSubscription } from '../entities/IThresholdSubscription.interface';
import { ITreshold } from '../entities/IThreshold.interface';
import { INotificationHistory } from '../entities/INotificationHistory.interface';

export interface IUserService {
  getUserProfile: (uuid: string) => Promise<{
    user: Omit<IUser, 'password'>;
    thresholds: ITreshold[];
    thresholdSubscriptions: ITresholdSubscription[];
    notificationHistory: INotificationHistory[];
  }>;
}
