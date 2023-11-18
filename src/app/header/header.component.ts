import { Component } from '@angular/core';
import { AutherizationService } from '../autherization/autherization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private authService:AutherizationService){  }
  logOut(){
    this.authService.onLogout()
  }
  onLoggedin():boolean{
    return this.authService.onLogin()
  }
}
