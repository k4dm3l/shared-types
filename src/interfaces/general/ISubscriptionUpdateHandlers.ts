export interface IUpdateSubscriptionParams {
  subscriptionId: string;
  lastTriggeredAt: Date;
  updatedAt: Date;
}

export interface IUpdateThresholdParams {
  thresholdId: string;
  incrementActiveSubscriberCount: boolean;
}

export interface IInsertNotificationHistoryParams {
  thresholdId: string;
  userId: string;
  subscriptionId: string;
  triggerValue: number | null;
  triggerSource: string | null;
  notificationMethod: string;
  triggeredAt: Date;
  notificationSent: boolean;
  errorMessage: string | null;
  retryCount?: number;
  metadata?: Record<string, any>;
}

export interface IRetryNotificationParams {
  subscriptionId: string;
  userId: string;
  thresholdId: string;
  attemptCount: number;
  nextRetryAt: Date;
  maxRetries: number;
  errorHistory: Array<{
    attempt: number;
    error: string;
    timestamp: Date;
  }>;
}

export interface ISubscriptionUpdateHandlers {
  /**
   * Updates a subscription with new trigger information
   * @param params - Update parameters
   * @param session - Optional transaction session to use for the operation
   */
  updateSubscription?: (
    params: IUpdateSubscriptionParams,
    session?: any
  ) => Promise<{ success: boolean; error?: string }>;

  /**
   * Updates threshold active subscriber count
   * @param params - Update parameters
   * @param session - Optional transaction session to use for the operation
   */
  updateThreshold?: (
    params: IUpdateThresholdParams,
    session?: any
  ) => Promise<{ success: boolean; error?: string }>;

  /**
   * Inserts a notification history record
   * @param params - Insert parameters
   * @param session - Optional transaction session to use for the operation
   */
  insertNotificationHistory?: (
    params: IInsertNotificationHistoryParams,
    session?: any
  ) => Promise<{ success: boolean; error?: string }>;

  /**
   * Schedules a retry for a failed notification
   * @param params - Retry parameters
   * @param session - Optional transaction session to use for the operation
   */
  scheduleRetryNotification?: (
    params: IRetryNotificationParams,
    session?: any
  ) => Promise<{ success: boolean; error?: string }>;

  /**
   * Gets existing retry record for a subscription
   * @param subscriptionId - Subscription ID
   * @param session - Optional transaction session to use for the operation
   */
  getExistingRetry?: (
    subscriptionId: string,
    session?: any
  ) => Promise<{
    id: string;
    attemptCount: number;
    maxRetries: number;
    resolved: boolean;
  } | null>;

  /**
   * Updates an existing retry record
   * @param retryId - Retry record ID
   * @param params - Update parameters
   * @param session - Optional transaction session to use for the operation
   */
  updateRetry?: (
    retryId: string,
    params: Partial<IRetryNotificationParams>,
    session?: any
  ) => Promise<{ success: boolean; error?: string }>;

  /**
   * Starts a database transaction session
   * Returns a session object that can be used for transaction operations
   */
  startTransaction?: () => Promise<{
    session: any;
    commit: () => Promise<void>;
    abort: () => Promise<void>;
    end: () => Promise<void>;
  }>;
}

