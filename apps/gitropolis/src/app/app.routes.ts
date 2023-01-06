import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  {
    path: 'orgs/:organization/repositories',
    loadComponent: () =>
      import('@nx-angular/organizations/feat-repositories').then(
        (m) => m.OrganizationsFeatrepositoriesComponent
      ),
  },
  {
    path: '**',
    redirectTo: 'orgs/nrwl/repositories',
  },
];
