import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Department } from './department';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DepartmentServiceService {
  baseDeptApi=`${environment.ApiBaseUrl}Departments`
  constructor(private clinet:HttpClient) { }
  getDept():Observable<Department[]>{
       console.log(this.clinet.get<Department[]>(this.baseDeptApi))
      return this.clinet.get<Department[]>(this.baseDeptApi)
  }
  addDept(department:Department):Observable<void>{
    return this.clinet.post<void>(this.baseDeptApi,department)
  }
  getOneId(id:number):Observable<Department>{
    return this.clinet.get<Department>(`${this.baseDeptApi}/${id}`)
  }
  updateDepartment(dept:Department):Observable<void>{
    return this.clinet.put<void>(`${this.baseDeptApi}/${dept.id}`,dept)
  }
}
