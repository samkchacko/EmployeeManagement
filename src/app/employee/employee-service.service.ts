import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  baseEmpApi=`${environment.ApiBaseUrl}Employees`

  constructor(private client:HttpClient) { }
  getEmployee():Observable<Employee[]>{
    return this.client.get<Employee[]>(this.baseEmpApi)
  }
  deleteEmp(id:number):Observable<void>{
    return this.client.delete<void>(`${this.baseEmpApi}/${id}`)
  }
  getOneEmp(id:number):Observable<Employee>{
    return this.client.get<Employee>(`${this.baseEmpApi}/${id}`)
  }
  editEmp(emp:Employee):Observable<void>{
    return this.client.put<void>(`${this.baseEmpApi}/${emp.id}`,emp)
  }
  addEmp(emp:Employee):Observable<Employee>{
    return this.client.post<Employee>(this.baseEmpApi,emp)
  }
}
