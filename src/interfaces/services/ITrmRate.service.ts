import { TrmFilterDate } from '../../enums/trm-filter-date';
import { ITrmRate } from '../entities/ITrmRate.interface';
import { IUser } from '../entities/IUser.interface';

export interface ITrmRateService {
  getDataPoints: ({
    startDate,
    endDate,
    limit,
    period,
    user,
  }: {
    startDate?: Date;
    endDate?: Date;
    limit?: number;
    period?: TrmFilterDate;
    user: IUser;
  }) => Promise<ITrmRate[]>;
  getCurrentTrm: ({
    user,
  }: {
    user: Pick<IUser, 'uuid' | 'subscription' | 'subscriptionExpiresAt' | 'role'>;
  }) => Promise<{
    trmRate: ITrmRate;
    openTrmRateValue: number;
    percentageChange: number;
  }>;
}
