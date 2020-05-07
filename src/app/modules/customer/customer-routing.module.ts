import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerComponent } from './customer.component';
import { CreateComponent } from './create/create.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DefaultComponent } from 'src/app/layouts/default/default.component';

const customerRoutes: Routes = [
  {
    path: '', component: DefaultComponent,
    children:[{ 
        path: '', component: CustomerComponent,
        children:[
          {
            path: 'create-customer', component: CreateComponent
          },
          {
            path: '', component: DashboardComponent
          }
        ]
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
