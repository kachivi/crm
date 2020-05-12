import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from "@angular/common/http";

import { CourseRoutingModule } from './course-routing.module';
import { CourseComponent } from 'src/app/modules/course/course.component';
import { CoursesCardListComponent } from './courses-card-list/courses-card-list.component';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { CoursesService } from './services/courses.service';
import { CourseResolver } from './services/course.resolver';

import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatDialogModule } from "@angular/material/dialog";
import { MatInputModule } from "@angular/material/input";
import { MatListModule } from "@angular/material/list";
import { MatPaginatorModule } from "@angular/material/paginator";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatSelectModule } from "@angular/material/select";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatSortModule } from "@angular/material/sort";
import { MatTableModule } from "@angular/material/table";
import { MatToolbarModule } from "@angular/material/toolbar";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    CourseComponent,
    CoursesCardListComponent,
    CourseDialogComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    CourseRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatTabsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatInputModule,
    MatListModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    ReactiveFormsModule,
    FormsModule

  ],
  providers: [
    CoursesService,
    CourseResolver
  ],
  exports:[
    CourseComponent,
    CourseRoutingModule
  ]

})
export class CourseModule { }
