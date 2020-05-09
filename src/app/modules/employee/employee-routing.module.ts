import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultComponent } from 'src/app/layouts/default/default.component';
import { EmployeeComponent } from './employee.component';
import { SearchEmployeeComponent } from './search-employee/search-employee.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const employeeRoutes: Routes = [
  {
    path: '', component: DefaultComponent,
    children:[{ 
        path: '', component: EmployeeComponent,
        children:[
          { path: 'add', component: AddEmployeeComponent },
          { path: 'search', component: SearchEmployeeComponent },
          { path: '',   redirectTo: '/employee/search', pathMatch: 'full' }
        ]
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(employeeRoutes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
