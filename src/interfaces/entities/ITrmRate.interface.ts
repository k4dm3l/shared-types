import { Currencies } from '../../enums/currencies';
import { RateSource } from '../../enums/rate-source';

export interface ITrmRate {
  value: number;
  timestamp: number;
  datetime: Date;
  datetimeUTC: Date;
  source: RateSource;
  localCurrency: Currencies;
  foreignCurrency: Currencies;
  timeZone: string;
  syncedAt: Date;
}
