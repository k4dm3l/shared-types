import { IUser } from '../entities/IUser.interface';

export interface IAuthService {
  signUp: (
    user: Omit<
      IUser,
      | 'uuid'
      | 'isActive'
      | 'role'
      | 'subscription'
      | 'subscriptionExpiresAt'
      | 'createdAt'
      | 'updatedAt'
    >
  ) => Promise<Omit<IUser, 'password'>>;
  signIn: (email: string, password: string) => Promise<string>;
  recoveryPassword: (email: string) => Promise<void>;
  verifyRecoveryPasswordToken: (token: string) => Promise<{ email: string }>;
  updatePassword: ({
    email,
    password,
    confirmPassword,
    otp,
    token,
  }: {
    email: string;
    password: string;
    confirmPassword: string;
    otp: string;
    token: string;
  }) => Promise<void>;
  verifyEmail: (token: string) => Promise<void>;
}
