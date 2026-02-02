import { NotificationMethod } from '../../enums/notification-method';

export interface ITresholdSubscription {
  uuid: string;
  thresholdId: string;
  userId: string;
  // Configuración de notificación personalizada
  notificationMethod: NotificationMethod;
  isActive: boolean;

  // Control de notificaciones
  lastTriggeredAt: Date | null;
  notificationCount: number;
  cooldownHours: number;
  createdAt: Date;
  updatedAt: Date;
}
