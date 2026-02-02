import { Currencies } from '../../enums/currencies';
import { RateSource } from '../../enums/rate-source';

export interface ISnapshotHistory {
  date: string; // YYYY-MM-DD
  source: RateSource;
  localCurrency: Currencies;
  foreignCurrency: Currencies;
  values: {
    min?: number;
    max?: number;
    initialValue?: number;
    finalValue?: number;
  };
  message: string;
  success: boolean;
}
