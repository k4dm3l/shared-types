import { Application } from 'express';
import { Logger } from 'winston';
import { IConfigServer } from './IConfigServer';

export interface IServerInit {
  app: Application;
  config: IConfigServer;
  logger: Logger;
}
