import { ISnapshotRate } from '../entities/ISnapshotRate.inteface';
import { IUser } from '../entities/IUser.interface';

export interface ISnapshotRateService {
  getUserSnapshotRates: ({
    user,
  }: {
    user: Pick<IUser, 'uuid' | 'subscription' | 'subscriptionExpiresAt' | 'role'>;
  }) => Promise<ISnapshotRate[]>;
}
