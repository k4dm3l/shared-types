export interface IUser {
  uuid: string;
  email: string;
  name: string;
  lastName: string;
  phone: string | null;
  address: string | null;
  city: string | null;
  state: string | null;
  zip: string | null;
  country: string | null;
  isActive: boolean;
  password: string;
  role: string | null;
  subscription: string | null;
  subscriptionExpiresAt: Date | null;
  termsAccepted: boolean;
  createdAt: Date;
  updatedAt: Date;
}
