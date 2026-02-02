import { RateSource } from '../../enums/rate-source';
import { TresholdCondition } from '../../enums/treshold-condition';
import { IUser } from './IUser.interface';
import { Currencies } from '../../enums/currencies';

export interface ITreshold {
  uuid: string;
  name: string;
  source: RateSource;
  currencyTarget: Currencies; // 'USD' (preparado para futuras expansiones)
  condition: TresholdCondition; // 'above', 'below', 'equal'
  targetValue: number;
  triggerCount: number;

  // Metadatos y control
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;

  // Relación con usuarios (para el concepto de suscripción)
  createdBy: Pick<IUser, 'uuid' | 'name' | 'lastName' | 'email'>; // usuario que creó el threshold
  subscriberCount: number; // contador de suscriptores
  isPublic: boolean;
}
