import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentServiceService } from '../department-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-add',
  templateUrl: './department-add.component.html',
  styleUrls: ['./department-add.component.css']
})
export class DepartmentAddComponent implements OnInit {
  addDeptForm!:FormGroup
  constructor(private depatmentServ:DepartmentServiceService,private router:Router){}
  ngOnInit(): void {
    this.addDeptForm=new FormGroup({
      id:new FormControl(0),
      name:new FormControl('',Validators.required)
    })
  }
  onAddDepartment(){
    this.depatmentServ.addDept(this.addDeptForm.value).subscribe(()=>{
    this.router.navigate(['/department'])
    },
    err=>{
      console.log(err)
      alert('Error')
    })
  }
}
