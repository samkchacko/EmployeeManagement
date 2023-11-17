import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentUpdateComponent } from './department/department-update/department-update.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { RegisterComponent } from './autherization/register/register.component';
import { LoginComponent } from './autherization/login/login.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';

const routes: Routes = [
  {
    path:'department',component:DepartmentListComponent
  },
  {
    path:'department/edit/:id',component:DepartmentUpdateComponent
  },
  {
    path:'department/add',component:DepartmentAddComponent
  },
  {
    path:'employee',component:EmployeeListComponent
  },
  {
    path:'employee/add',component:EmployeeAddComponent
  },
  {
    path:'register',component:RegisterComponent
  },
  {
    path:'',component:LoginComponent
  },
  {
    path:'employee/edit/:id',component:EmployeeUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
