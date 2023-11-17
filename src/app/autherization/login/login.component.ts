import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutherizationService } from '../autherization.service';
import { Router } from '@angular/router';
import { LoginResponseDto } from '../login-response-dto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  loginResponse!:LoginResponseDto
  constructor(private authService:AutherizationService,private router:Router){}
  ngOnInit(): void {
    this.loginForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.email]),
      password:new FormControl('',Validators.required)
    })
  }
  empLogin(){
    this.authService.loginEmployee(this.loginForm.value).subscribe(result=>{
        this.loginResponse=result
        console.log(this.loginResponse)
        this.router.navigate(['/department'])
    },err=>{
      console.log(err)
      alert('Error')
    })
  }

}
