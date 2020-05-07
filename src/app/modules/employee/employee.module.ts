import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatSidenavModule} from '@angular/material/sidenav';
import { FlexLayoutModule } from '@angular/flex-layout';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { SharedModule} from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    MatSidenavModule,
    FlexLayoutModule,
    SharedModule,
    EmployeeRoutingModule
  ],
  exports:[
    EmployeeComponent,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
