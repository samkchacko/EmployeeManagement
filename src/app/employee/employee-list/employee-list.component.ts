import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';
import { DepartmentServiceService } from 'src/app/department/department-service.service';
import { Department } from 'src/app/department/department';
import { Gender } from '../gender';
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit{
  employeeArray!:Employee[];
  emps!:Employee;
  empName!:string;
  empId!:number;
  deptArray!:Department[]
  constructor(private EmpService:EmployeeServiceService,private deptService:DepartmentServiceService){
  }
  ngOnInit(): void {
    this.EmpService.getEmployee().subscribe(result=>{
      this.employeeArray=result
    },err=>{
      console.log(err)
      alert('Error')
    })
    this.deptService.getDept().subscribe(result=>{
      this.deptArray=result
    },err=>{
      console.log(err)
      alert('Error')}) 
  }
  getDeptName(departmentId: number): string {
    return this.deptArray.filter(d => d.id === departmentId)[0].name;
    // return 'hello'
  }
  getGender(gen:number):string{
    if(gen===1){
      return 'Female'
    }
    else{
      return 'Male'
    }
  }
  delId(emp:Employee){
    this.emps=emp
    this.empName=emp.name.toUpperCase()
    this.empId=emp.id
  }
  empDelete(id:number){
    this.EmpService.deleteEmp(id).subscribe(()=>{
      this.ngOnInit()
    },err=>{
      alert('Error')
      console.log(err)
    })
  }
  editEmp(emp:Employee){
    this.emps=emp
    this.empName=emp.name.toUpperCase()
    this.empId=emp.id
  }
}
