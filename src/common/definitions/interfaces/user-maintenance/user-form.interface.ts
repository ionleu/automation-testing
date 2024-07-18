import { UserType } from '@/constants';

export interface UserForm {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  userType: UserType;
  isActive?: boolean;
}
