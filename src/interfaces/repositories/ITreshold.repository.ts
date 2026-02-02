import { ClientSession } from 'mongodb';
import { ITreshold } from '../entities/IThreshold.interface';

export interface ITresholdRepository {
  findByUuid: (uuid: string, session?: ClientSession) => Promise<ITreshold | null>;
  findByUuids: (uuids: string[], session?: ClientSession) => Promise<ITreshold[]>;
  findByFilters: (
    filters: { searchText?: string; isPublic?: boolean },
    session?: ClientSession
  ) => Promise<ITreshold[]>;
  findPopularTresholds: (limit: number, session?: ClientSession) => Promise<ITreshold[]>;
  incrementSubscriberCount: (uuid: string, session?: ClientSession) => Promise<void>;
  create: (treshold: ITreshold, session?: ClientSession) => Promise<ITreshold>;
}
