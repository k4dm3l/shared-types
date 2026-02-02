import { Currencies } from '../../enums/currencies';
import { RateSource } from '../../enums/rate-source';
import { ISnapshotRate } from '../entities/ISnapshotRate.inteface';

export interface ISnapshotRateRepository {
  findAll: ({
    page,
    limit,
    sort,
    filter,
  }: {
    page?: number;
    limit?: number;
    sort?: {
      [key: string]: 1 | -1;
    };
    filter?: {
      [key: string]: any;
    };
  }) => Promise<ISnapshotRate[]>;
  findBySourceAndLocalCurrencyAndForeignCurrency: ({
    source,
    localCurrency,
    foreignCurrency,
  }: {
    source: RateSource;
    localCurrency: Currencies;
    foreignCurrency: Currencies;
  }) => Promise<ISnapshotRate | null>;
}
