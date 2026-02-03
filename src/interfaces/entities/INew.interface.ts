import { NewsSource } from "../../enums/news-source";
import { NewsTypes } from "../../enums/news-types";

export interface INew {
  id: string;
  publisher: {
    name: string | null;
    homepageUrl: string | null;
    logoUrl: string | null;
    faviconUrl: string | null;
  };
  title: string | null;
  author: string | null;
  publishedUtc: Date | null;
  articleUrl: string | null;
  tickers: string[] | null;
  imageUrl: string | null;
  description: string | null;
  keywords: string[] | null;
  insights: {
    ticker: string;
    sentiment: string;
    sentimentReasoning: string;
  }[];
  syncedAt: Date;
  likes: number;
  source: NewsSource;
  type: NewsTypes;
}
