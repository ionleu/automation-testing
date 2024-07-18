import {
  DashboardPage,
  JobPostingsPage,
  MyCandidatesPage,
  UserMaintenancePage,
} from '@/page-objects/pages';

export interface PageFixtures {
  userMaintenancePage: UserMaintenancePage;
  jobPostingPage: JobPostingsPage;
  dashboardPage: DashboardPage;
  myCandidatesPage: MyCandidatesPage;
}
