import { AuditTypes } from '../../enums/audit-types';

export interface IAuditHistory {
  id: string;
  userId: string | null;
  type: AuditTypes;
  data?: Record<string, any>;
  success: boolean;
  triggeredAt: Date;
  triggeredBy: string | null;
  ipAddress: string | null;
  userAgent: string | null;
  device: string | null;
  browser: string | null;
  os: string | null;
  country: string | null;
  city: string | null;
  region: string | null;
  zip: string | null;
  latitude: number | null;
  longitude: number | null;
}
