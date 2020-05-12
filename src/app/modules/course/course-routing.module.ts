import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from 'src/app/layouts/default/default.component';
import { CourseComponent } from './course.component';
import { HomeComponent } from './home/home.component';
import { CourseResolver } from './services/course.resolver';

const routes: Routes = [
  {
    path: 'home', component: DefaultComponent,
    children:[
      { path: '', component: HomeComponent},
    ]
  },
  {
    path: ':id', component: DefaultComponent,
    children:[
      {
        path: '',
        component: CourseComponent,
        resolve: {
            course: CourseResolver
        }
      },
    ]
  }
];



@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
