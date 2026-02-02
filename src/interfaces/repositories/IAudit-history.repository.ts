import { ClientSession } from 'mongodb';
import { IAuditHistory } from '../entities/IAuditHistory.interface';

export interface IAuditHistoryRepository {
  create: (auditHistory: IAuditHistory, session?: ClientSession) => Promise<void>;
}
