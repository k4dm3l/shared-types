import { Currencies } from '../../enums/currencies';
import { RateSource } from '../../enums/rate-source';

export interface ISnapshotRate {
  value: number;
  datetimeUTC: Date;
  source: RateSource;
  localCurrency: Currencies;
  foreignCurrency: Currencies;
  initialValue?: number;
  finalValue?: number;
  minValue?: number;
  maxValue?: number;
  syncedAt: Date;
}
