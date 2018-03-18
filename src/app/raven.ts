import * as Raven from 'raven-js';
import { ErrorHandler } from '@angular/core';
import { environment } from '../environments/environment';

Raven.config(environment.raven).install();

export class RavenErrorHandler implements ErrorHandler {
  handleError(err: any): void {
    Raven.captureException(err);
  }
}

export const RavenProvider = {
  provide: ErrorHandler,
  useClass: RavenErrorHandler
};
