import { ISnapshotHistory } from '../entities/ISnapshotHistory.interface';

export interface ISnapshotHistoryRepository {
  findByDateAndSourceAndLocalCurrencyAndForeignCurrency: ({
    date,
    source,
    localCurrency,
    foreignCurrency,
  }: {
    date: string;
    source: string;
    localCurrency: string;
    foreignCurrency: string;
  }) => Promise<ISnapshotHistory | null>;
}
