import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { DepartmentServiceService } from '../department-service.service';


@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {
  departmentArray:Department[]=[]
  dpt!:string;
  Deprt!:number;
  constructor(private serDeptList:DepartmentServiceService){}
  ngOnInit(): void {
    this.serDeptList.getDept().subscribe(result=>{
      this.departmentArray=result
    },
    err=>{
      alert(err)
      console.log(err)
    }
    )
  }
  addEdit(dpt:Department){
    this.dpt=dpt.name
    this.Deprt=dpt.id
  }
}
