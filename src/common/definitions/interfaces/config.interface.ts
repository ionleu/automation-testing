import { UserType } from '@/constants';

interface User {
  email: string;
  password: string;
}

export interface Config {
  baseUrl: string;
  users: Record<UserType, User>;
}
