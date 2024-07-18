import { CommonFixtures, UseFunction } from '@/definitions';
import {
  BasePage,
  DashboardPage,
  JobPostingsPage,
  MyCandidatesPage,
  UserMaintenancePage,
} from '@/page-objects/pages';

export const pageFixtures = {
  basePage: async ({ page }: CommonFixtures, use: UseFunction) => {
    await use(new BasePage(page));
  },

  userMaintenancePage: async ({ page }: CommonFixtures, use: UseFunction) => {
    const userMaintenancePage = new UserMaintenancePage(page);

    await userMaintenancePage.dashboardPageHeading.waitFor();

    await userMaintenancePage.administrativeNav.click();
    await userMaintenancePage.userMaintenanceNavItem.click();

    await userMaintenancePage.inactiveUsersCollapseButton.waitFor();

    await use(userMaintenancePage);
  },

  jobPostingsPage: async ({ page }: CommonFixtures, use: UseFunction) => {
    const jobPostingsPage = new JobPostingsPage(page);

    await jobPostingsPage.dashboardPageHeading.waitFor();

    await jobPostingsPage.jobPostingsNavItem.click();

    await jobPostingsPage.exportJobsButton.waitFor();

    await use(jobPostingsPage);
  },

  dashboardPage: async ({ page }: CommonFixtures, use: UseFunction) => {
    const dashboardPage = new DashboardPage(page);

    await dashboardPage.dashboardPageHeading.waitFor();

    await use(dashboardPage);
  },

  myCandidatesPage: async ({ page }: CommonFixtures, use: UseFunction) => {
    const myCandidatesPage = new MyCandidatesPage(page);

    await myCandidatesPage.dashboardPageHeading.waitFor();
    await myCandidatesPage.myCandidatesNavItem.click();

    await use(myCandidatesPage);
  },
};
