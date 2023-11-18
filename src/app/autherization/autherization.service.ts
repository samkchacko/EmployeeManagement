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
  loginResponseDto!: LoginResponseDto
  baseAuthApi = `${environment.ApiBaseUrl}Auth`
  constructor(private client: HttpClient) { }
  registerEmp(user: User): Observable<void> {
    return this.client.post<void>(this.baseAuthApi, user)
  }
  loginEmployee(user: UserDto):Observable<LoginResponseDto> {
    let login = this.client.post<LoginResponseDto>(`${this.baseAuthApi}/login`, user)
    login.subscribe(response=> {
      // console.log(response)
      localStorage.clear();
      localStorage.setItem('userData', JSON.stringify(response))
    }, err => {
      console.log(err)
      alert('Error')
    })
    return login
  }
  getLoginResponseDto(): LoginResponseDto {
    let user = localStorage.getItem('userData')
    return JSON.parse(user || '{}')
  }
  onLogin():boolean{
    return localStorage.getItem('userData')!=null?true:false
  }
  onLogout(){
    localStorage.clear()
  }
}
