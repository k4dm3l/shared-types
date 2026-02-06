import { RateSource } from "../../enums/rate-source";

export interface INotificationMessage {
  title: string;
  body: string;
  data: {
    threshold_id: string;
    condition: string;
    target_value: number;
    current_value: number;
    source: RateSource;
    timestamp: string;
    formatted_rate: string;
    formatted_target: string;
  };
  html?: string;
}