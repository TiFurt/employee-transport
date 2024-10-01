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
    path: 'employees',
    loadComponent: () =>
      import(
        './features/employees/list-employees-page/list-employees-page.component'
      ).then((m) => m.ListEmployeesPageComponent),
  },
  {
    path: 'employees/create',
    loadComponent: () =>
      import(
        './features/employees/create-employees-page/create-employees-page.component'
      ).then((m) => m.CreateEmployeesPageComponent),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
