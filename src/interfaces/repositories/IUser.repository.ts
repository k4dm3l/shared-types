import { ClientSession } from 'mongodb';
import { IUser } from '../entities/IUser.interface';

export interface IUserRepository {
  findByUuid: (uuid: string, session?: ClientSession) => Promise<IUser | null>;
  findAll: (session?: ClientSession) => Promise<IUser[]>;
  findByEmail: (email: string, session?: ClientSession) => Promise<IUser | null>;
  create: (user: IUser, session?: ClientSession) => Promise<IUser>;
  updatePassword: (email: string, password: string, session?: ClientSession) => Promise<void>;
  updateUserStatus: (email: string, isActive: boolean, session?: ClientSession) => Promise<void>;
}
