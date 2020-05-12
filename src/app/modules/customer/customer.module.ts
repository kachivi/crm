import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";

import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule, MatList } from '@angular/material/list';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { CustomerService } from './services/customer.service';

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
    MatTabsModule,
    MatTableModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatDatepickerModule,
    MatDialogModule,
    MatSortModule,
    MatInputModule,
    MatPaginatorModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CustomerRoutingModule
 ],
  exports:[
    CustomerComponent,
    CustomerRoutingModule
  ],
  providers:[
    CustomerService

  ]
})
export class CustomerModule { }
