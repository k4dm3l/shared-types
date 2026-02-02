import { NewsFilterTypes } from '../../enums/news-filter-types';
import { INew } from '../entities/INew.interface';
import { IUser } from '../entities/IUser.interface';
import { IPaginatedResponse } from '../general/IPaginatedResponse';
import { INewLike } from '../entities/INewLike.interface';

export interface INewService {
  getNews: ({
    user,
  }: {
    user: Pick<IUser, 'uuid' | 'subscription' | 'subscriptionExpiresAt' | 'role'>;
  }) => Promise<INew[]>;
  getNewLikesByNewsIdsAndUserId: ({
    newsIds,
    userId,
  }: {
    newsIds: string[];
    userId: string;
  }) => Promise<INewLike[]>;
  likeNew: ({ newId, userId }: { newId: string; userId: string }) => Promise<void>;
  unlikeNew: ({ newId, userId }: { newId: string; userId: string }) => Promise<void>;
  getNewsByFilters: ({
    filters,
  }: {
    filters: {
      searchText?: string;
      type?: NewsFilterTypes;
      financial?: boolean;
      page?: number;
      limit?: number;
    };
  }) => Promise<IPaginatedResponse<INew>>;
}
