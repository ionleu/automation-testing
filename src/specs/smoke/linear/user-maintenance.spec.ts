import { LoginState, UserType } from '@/constants';
import { expect, test } from '@/fixtures';
import {
  UserMaintenanceCardFragment,
  UserMaintenanceDrawerFragment,
} from '@/page-objects/fragments';
import { createRandomUser } from '@/utils';

const user = createRandomUser();

test.describe('User Maintenance', () => {
  test.use({ loginState: LoginState.LoggedIn, userType: UserType.Admin });

  test('add user maintenance', async ({ userMaintenancePage }) => {
    const userDrawer = new UserMaintenanceDrawerFragment(
      userMaintenancePage.page,
    );

    await userMaintenancePage.openAddUser();
    await userDrawer.addOrUpdateUser(user);
    await expect(userDrawer.successMessage).toContainText(
      'User has been added successfully.',
    );

    const userCard = new UserMaintenanceCardFragment(userMaintenancePage.page);

    await userCard.validateUser(user);
  });

  test('edit user maintenance', async ({ userMaintenancePage }) => {
    const userCard = new UserMaintenanceCardFragment(userMaintenancePage.page);
    const userDrawer = new UserMaintenanceDrawerFragment(
      userMaintenancePage.page,
    );

    await userCard.editByEmail(user.email);
    await userDrawer.addOrUpdateUser({ firstName: `${user.firstName} Jr.` });
    await expect(userDrawer.successMessage).toContainText(
      'User has been updated successfully.',
    );
  });
});
