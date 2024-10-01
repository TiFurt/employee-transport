import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/dashboard-page/dashboard-page.component').then(
        (m) => m.DashboardPageComponent,
      ),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./features/dashboard-page/dashboard-page.component').then(
        (m) => m.DashboardPageComponent,
      ),
  },
  {
    path: 'branches',
    loadComponent: () =>
      import(
        './features/branches/list-branches-page/list-branches-page.component'
      ).then((m) => m.ListBranchesPageComponent),
  },
  {
    path: 'branches/create',
    loadComponent: () =>
      import(
        './features/branches/create-branches-page/create-branches-page.component'
      ).then((m) => m.CreateBranchesPageComponent),
  },
  {
    path: 'employees',
    loadComponent: () =>
      import(
        './features/employees/list-employees-page/list-employees-page.component'
      ).then((m) => m.ListEmployeesPageComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
