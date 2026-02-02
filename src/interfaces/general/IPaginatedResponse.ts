import { IPagination } from './IPagination';

export interface IPaginatedResponse<T> {
  data: T[];
  pagination: IPagination;
}
