import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { PostsComponent } from '../posts/posts.component';
import { DefaultComponent } from 'src/app/layouts/default/default.component';

const employeeRoutes: Routes = [
  {
    path: '', component: DefaultComponent,
    children:[{ 
        path: '', component: EmployeeComponent,
        children:[
          {
            path: '', component: PostsComponent
          }
        ]
      }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(employeeRoutes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
