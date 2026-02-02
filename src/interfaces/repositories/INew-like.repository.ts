import { ClientSession } from 'mongodb';
import { INewLike } from '../entities/INewLike.interface';

export interface INewLikeRepository {
  findByNewId: (newId: string, session?: ClientSession) => Promise<INewLike[]>;
  findByUserId: (userId: string, session?: ClientSession) => Promise<INewLike[]>;
  findByNewIdAndUserId: (
    newId: string,
    userId: string,
    session?: ClientSession
  ) => Promise<INewLike | null>;
  findByNewsIdsAndUserId: (
    newsIds: string[],
    userId: string,
    session?: ClientSession
  ) => Promise<INewLike[]>;
  create: (newLike: INewLike, session?: ClientSession) => Promise<INewLike>;
  delete: (id: string, session?: ClientSession) => Promise<void>;
}
