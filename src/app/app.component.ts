import { Component } from '@angular/core';
import { AutherizationService } from './autherization/autherization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'empdeptNG';
  constructor(private authServices:AutherizationService){
   // authServices.onLogout()
  }
}
