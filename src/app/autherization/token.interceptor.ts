import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AutherizationService } from './autherization.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private authService:AutherizationService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let token=this.authService.getLoginResponseDto().token
    // console.log(token)
    if(token){
      request=request.clone({
        setHeaders:{Authorization:`Bearer ${token}`}
    })
    }
   return next.handle(request)
  }
}
