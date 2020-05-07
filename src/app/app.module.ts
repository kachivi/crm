import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DefaultModule } from './layouts/default/default.module';
import { CustomerModule } from 'src/app/modules/customer/customer.module';
import { EmployeeModule } from 'src/app/modules/employee/employee.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
    CustomerModule,
    EmployeeModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
