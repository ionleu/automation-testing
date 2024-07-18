import { LoginState, UserType } from '@/constants';

export interface CustomConfigFields {
  configPath: string;
  loginState: LoginState;
  userType: UserType | string;
}
