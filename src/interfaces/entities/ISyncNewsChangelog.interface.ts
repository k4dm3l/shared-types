import { NewsSource } from '../../enums/news-source';

export interface ISyncNewsChangelog {
  datetime: Date;
  datetimeUTC: Date;
  source: NewsSource;
  message: string;
  success: boolean;
}
