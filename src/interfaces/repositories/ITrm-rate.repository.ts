import { ITrmRate } from '../entities/ITrmRate.interface';

export interface ITrmRateRepository {
  findAll: ({
    page,
    limit,
    sort,
    filter,
  }: {
    page?: number;
    limit?: number;
    sort?: {
      [key: string]: 1 | -1;
    };
    filter?: {
      [key: string]: any;
    };
  }) => Promise<ITrmRate[]>;
  findCurrent: () => Promise<ITrmRate | null>;
}
