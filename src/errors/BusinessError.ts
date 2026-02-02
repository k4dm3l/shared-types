import BaseError from './BaseError';
import { Errors } from '../enums/errors';

export default class BusinessError extends BaseError {
  public details?: Record<string, unknown>;
  public constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = Errors.BUSINESS_ERROR;
    this.details = details || {};
    Object.setPrototypeOf(this, BusinessError.prototype);
  }
}
