import { INotificationHistory } from '../entities/INotificationHistory.interface';

export interface INotificationHistoryRepository {
  findByTresholdIdsAndUserId: (
    tresholdIds: string[],
    userId: string
  ) => Promise<INotificationHistory[]>;
}
