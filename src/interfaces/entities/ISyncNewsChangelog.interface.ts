import { RateSource } from '../../enums/rate-source';

export interface ISyncNewsChangelog {
  datetime: Date;
  datetimeUTC: Date;
  source: RateSource;
  message: string;
  success: boolean;
}
