import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('src/app/modules/customer/customer-routing.module').then(m => m.CustomerRoutingModule)
  },
  {
    path: 'customer',
    loadChildren: () => import('src/app/modules/customer/customer-routing.module').then(m => m.CustomerRoutingModule)
  },
  {
    path: 'employee',
    loadChildren: () => import('src/app/modules/employee/employee-routing.module').then(m => m.EmployeeRoutingModule)
  },
  { path: '',   redirectTo: '/customer', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }