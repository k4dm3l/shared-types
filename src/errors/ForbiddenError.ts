import BaseError from './BaseError';
import { Errors } from '../enums/errors';

export default class ForbiddenError extends BaseError {
  public details?: Record<string, unknown>;
  public constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = Errors.FORBIDDEN_ERROR;
    this.details = details || {};
    Object.setPrototypeOf(this, ForbiddenError.prototype);
  }
}
