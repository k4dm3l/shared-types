import BaseError from './BaseError';
import { Errors } from '../enums/errors';

export default class ServerError extends BaseError {
  public details?: Record<string, unknown>;
  public constructor(message: string, details?: Record<string, unknown>) {
    super(message);
    this.name = Errors.SERVER_ERROR;
    this.details = details || {};
    Object.setPrototypeOf(this, ServerError.prototype);
  }
}
