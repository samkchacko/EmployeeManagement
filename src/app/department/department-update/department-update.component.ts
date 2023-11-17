import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from '../department';
import { DepartmentServiceService } from '../department-service.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-update',
  templateUrl: './department-update.component.html',
  styleUrls: ['./department-update.component.css']
})
export class DepartmentUpdateComponent implements OnInit {
  Did!:number;
  updateDept!:FormGroup
  dept!:Department
  constructor(private DeptService:DepartmentServiceService,private route:ActivatedRoute,private router:Router){}
  
  ngOnInit(): void {
    this.Did=this.route.snapshot.params['id']
    this.updateDept=new FormGroup({
      id:new FormControl(0),
      name:new FormControl('',Validators.required)
    })
      this.DeptService.getOneId(this.Did).subscribe(result=>{
          this.dept=result
          this.updateDept.setValue({
            id:this.dept.id,
            name:this.dept.name
          })
      },err=>{
        console.log(err)
        alert('Error')
      })
  }
  onUpdate(){
    this.DeptService.updateDepartment(this.updateDept.value).subscribe(()=>{
      this.router.navigate(['/department'])
    },
    err=>{
      console.log(err)
      alert('Error')
    })
  }

}
