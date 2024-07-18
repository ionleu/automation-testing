import { faker } from '@faker-js/faker';

import { UserType } from '@/constants';
import { UserForm } from '@/definitions';

export const createRandomUser = (): UserForm => {
  const sex = faker.person.sexType();
  const firstName = faker.person.firstName(sex);
  const lastName = faker.person.lastName();
  const phone = faker.phone.number();
  const email = faker.internet.email({
    firstName,
    lastName,
  });

  return {
    email,
    phone,
    firstName,
    lastName,
    userType: faker.helpers.arrayElement([
      // UserType.Admin,
      UserType.Billing,
      UserType.Compliance,
      UserType.General,
    ]),
  };
};
