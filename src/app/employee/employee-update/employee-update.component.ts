import { Component, OnInit } from '@angular/core';
import { Department } from 'src/app/department/department';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DepartmentServiceService } from 'src/app/department/department-service.service';

@Component({
  selector: 'app-employee-update',
  templateUrl: './employee-update.component.html',
  styleUrls: ['./employee-update.component.css']
})
export class EmployeeUpdateComponent implements OnInit {
  deptList:Department[]=[]
  employee!:Employee;
  empEditForm!:FormGroup;
  maleVal: any;
  idnum!:number;
  constructor(private empService:EmployeeServiceService,private route:ActivatedRoute,private router:Router,private deptservice:DepartmentServiceService){}
  ngOnInit(): void {
    this.idnum=this.route.snapshot.params['id']
    this.empEditForm=new FormGroup({
      id:new FormControl(0),
      name: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl(null, Validators.required),
      mobileNo: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      salary: new FormControl('', Validators.required),
      departmentId: new FormControl('', Validators.required),
    })
    this.deptservice.getDept().subscribe(result=>{
      this.deptList=result
    },err=>{
      console.log(err)
      alert('Error')
    })
    this.empService.getOneEmp(this.idnum).subscribe(result=>{
      this.employee=result;
      this.empEditForm.setValue({
        id:this.employee.id,
        name: this.employee.name,
        dateOfBirth: this.employee.dateOfBirth,
        gender: this.employee.gender,
        mobileNo:this.employee.mobileNo ,
        email: this.employee.email,
        salary: this.employee.salary,
        departmentId: this.employee.departmentId
      })
    },err=>{
      console.log(err)
      alert('Error')
    })
    
  }
  onEditEmp(){
    this.empService.editEmp(this.empEditForm.value).subscribe(()=>{
      this.router.navigate(['/employee'])
    },err=>{
      console.log(err)
      alert('Error')
    })
  }

}
