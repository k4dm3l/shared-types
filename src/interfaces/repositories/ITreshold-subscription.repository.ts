import { ClientSession } from 'mongodb';
import { ITresholdSubscription } from '../entities/IThresholdSubscription.interface';
import { ITreshold } from '../entities/IThreshold.interface';
import { NotificationMethod } from '../../enums/notification-method';

export interface ITresholdSubscriptionRepository {
  findByUserId: (userId: string, session?: ClientSession) => Promise<ITresholdSubscription[]>;
  findByThresholdIdAndUserId: (
    thresholdId: string,
    userId: string,
    session?: ClientSession
  ) => Promise<ITresholdSubscription | null>;
  findTresholdSubscriptionsByUserId: (
    userId: string,
    session?: ClientSession
  ) => Promise<(ITresholdSubscription & { threshold: ITreshold })[]>;
  countTresholdSubscriptionsByUserId: (userId: string, session?: ClientSession) => Promise<number>;
  findByUuid: (uuid: string, session?: ClientSession) => Promise<ITresholdSubscription | null>;
  create: (
    tresholdSubscription: ITresholdSubscription,
    session?: ClientSession
  ) => Promise<ITresholdSubscription>;
  updateTresholdSubscriptionStatus: (
    uuid: string,
    status: boolean,
    session?: ClientSession
  ) => Promise<void>;
  updateTresholdSubscriptionNotificationMethod: (
    uuid: string,
    notificationMethod: NotificationMethod,
    session?: ClientSession
  ) => Promise<void>;
}
