import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () => import('src/app/modules/customer/customer-routing.module').then(m => m.CustomerRoutingModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('src/app/modules/employee/employee-routing.module').then(m => m.EmployeeRoutingModule)
  },
  {
    path: 'reports',
    loadChildren: () => import('src/app/modules/analytics/analytics-routing.module').then(m => m.AnalyticsRoutingModule)
  },
  { path: '',   redirectTo: '/customer', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }