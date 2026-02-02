import { IPagination } from './IPagination';

export interface IApiResponse<T = any> {
  success: boolean;
  data?: T;
  pagination?: IPagination;
  error?: string;
  message?: string;
}
