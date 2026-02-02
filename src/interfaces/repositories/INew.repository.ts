import { ClientSession } from 'mongodb';
import { INew } from '../entities/INew.interface';

export interface INewRepository {
  findAll: (
    {
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
    },
    session?: ClientSession
  ) => Promise<INew[]>;
  count: (filter?: { [key: string]: any }, session?: ClientSession) => Promise<number>;
  incrementLikes: (newId: string, session?: ClientSession) => Promise<void>;
  decrementLikes: (newId: string, session?: ClientSession) => Promise<void>;
}
