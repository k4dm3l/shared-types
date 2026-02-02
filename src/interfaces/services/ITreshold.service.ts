import { ITreshold } from '../entities/IThreshold.interface';
import { ITresholdSubscription } from '../entities/IThresholdSubscription.interface';
import { NotificationMethod } from '../../enums/notification-method';

export interface ITresholdService {
  getPriceAlertsByFilters: ({
    filters,
  }: {
    filters: {
      searchText?: string;
    };
  }) => Promise<ITreshold[]>;
  getPriceAlertsByUserId: (
    userId: string
  ) => Promise<(ITresholdSubscription & { threshold: ITreshold })[]>;
  getPopularTresholds: (limit?: number) => Promise<ITreshold[]>;
  createPriceAlert: ({
    priceAlert,
    userId,
  }: {
    priceAlert: Pick<
      ITreshold,
      'source' | 'currencyTarget' | 'condition' | 'targetValue' | 'isPublic'
    > & {
      subscription: Pick<
        ITresholdSubscription,
        'notificationMethod' | 'isActive' | 'cooldownHours'
      >;
    };
    userId: string;
  }) => Promise<ITreshold>;
  createPriceAlertSubscription: ({
    tresholdUuid,
    priceAlertSubscription,
    userId,
  }: {
    tresholdUuid: string;
    priceAlertSubscription: Pick<
      ITresholdSubscription,
      'notificationMethod' | 'isActive' | 'cooldownHours'
    >;
    userId: string;
  }) => Promise<ITresholdSubscription>;
  updateTresholdSubscriptionStatus: (uuid: string, status: boolean) => Promise<void>;
  updateTresholdSubscriptionNotificationMethod: (
    uuid: string,
    notificationMethod: NotificationMethod
  ) => Promise<void>;
}
