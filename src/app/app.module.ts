import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentListComponent } from './department/department-list/department-list.component';
import { DepartmentAddComponent } from './department/department-add/department-add.component';
import { DepartmentUpdateComponent } from './department/department-update/department-update.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeAddComponent } from './employee/employee-add/employee-add.component';
import { EmployeeUpdateComponent } from './employee/employee-update/employee-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './autherization/login/login.component';
import { RegisterComponent } from './autherization/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DepartmentListComponent,
    DepartmentAddComponent,
    DepartmentUpdateComponent,
    EmployeeListComponent,
    EmployeeAddComponent,
    EmployeeUpdateComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
