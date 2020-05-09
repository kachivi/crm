import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule, MatList } from '@angular/material/list';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
  @NgModule({
  declarations: [
    CustomerComponent,
    SidebarComponent,
    AddCustomerComponent,
    SearchCustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule, 
    MatSidenavModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDividerModule,
    LayoutModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
    CustomerRoutingModule
 ],
  exports:[
    CustomerComponent,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
