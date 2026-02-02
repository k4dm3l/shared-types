import { RateSource } from '../../enums/rate-source';

export interface ISyncSnapshotRate {
  datetimeUTC: Date;
  source: RateSource;
  message: string;
  success: boolean;
}
