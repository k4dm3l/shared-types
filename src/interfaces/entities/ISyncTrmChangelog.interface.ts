import { Currencies } from '../../enums/currencies';
import { RateSource } from '../../enums/rate-source';

export interface ISyncTrmChangelog {
  datetime: Date;
  datetimeUTC: Date;
  source: RateSource;
  localCurrency: Currencies;
  foreignCurrency: Currencies;
  timeZone: string;
  message: string;
  success: boolean;
}
