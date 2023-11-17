import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { User } from './user';
import { LoginResponseDto } from './login-response-dto';
import { UserDto } from './user-dto';

@Injectable({
  providedIn: 'root'
})
export class AutherizationService {
  baseAuthApi=`${environment.ApiBaseUrl}Auth`
  constructor(private client:HttpClient) { }
  registerEmp(user:User):Observable<void>{
    return this.client.post<void>(this.baseAuthApi,user)
  }
  loginEmployee(user:UserDto):Observable<LoginResponseDto>{
    return this.client.post<LoginResponseDto>(`${this.baseAuthApi}/login`,user)
  }
}
