export interface IConfigServer {
  port: number;
  cors: {
    origin: string;
  };
  environment: string;
  apiVersions: string[];
  mongodbUri: string;
  mongodbDbName: string;
  maxRequestRateLimit: number;
  maxTimeoutRateLimit: number;
  jwtSecret: string;
  jwtExpirationTime: string;
  saltRounds: number;
  redisUrl: string;
  jwtRecoveryPasswordSecret: string;
  jwtRecoveryPasswordExpirationTime: string;
  resendApiKey: string;
  frontendUrl: string;
  emailFromDomain: string;
}
