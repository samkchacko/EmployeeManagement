import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutherizationService } from '../autherization.service';
import { Router } from '@angular/router';
import { Roles } from '../roles';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  regForm!:FormGroup
  role={
    Employee:Roles.Employee,
    Admin:Roles.Admin,
    Hr:Roles.HR
  }
  constructor(private authService:AutherizationService,private router:Router){}
  ngOnInit(): void {
    this.regForm=new FormGroup({
      id:new FormControl(0),
      userName:new FormControl('',Validators.required),
      email:new FormControl('',[Validators.required,Validators.email]),
      role:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required)
    })
  }
  regEmp(){
    this.authService.registerEmp(this.regForm.value).subscribe(()=>{
      console.log(this.regForm.value)
      this.router.navigate([''])
    },err=>{
      console.log(err)
      alert('Error')
    })
  }
  
  

}
