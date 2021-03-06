import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from 'src/app/layouts/default/default.component';
import { CustomerComponent } from './customer.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { CropperComponent } from 'src/app/shared/components/cropper/cropper.component';

const customerRoutes: Routes = [
  {
    path: '', component: DefaultComponent,
    children:[{ 
        path: '', component: CustomerComponent,
        children:[
          { path: 'add', component: AddCustomerComponent },
          //{ path: 'add', component: CropperComponent },
          { path: 'search', component: SearchCustomerComponent },
          { path: '',   redirectTo: '/customer/search', pathMatch: 'full' }
        ]
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
