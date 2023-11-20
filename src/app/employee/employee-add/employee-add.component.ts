import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Gender } from '../gender';
import { Router } from '@angular/router';
import { Department } from 'src/app/department/department';
import { DepartmentServiceService } from 'src/app/department/department-service.service';
@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent implements OnInit {
  addEmpForm!: FormGroup;
  deptList!: Department[];
  maleVal!: Gender;
  femaleVal!: Gender;
  constructor(private empService: EmployeeServiceService, private router: Router, private deptSer: DepartmentServiceService) { }
  ngOnInit(): void {
    this.maleVal = Gender.Male;
    this.femaleVal = Gender.Female
    this.addEmpForm = new FormGroup({
      id: new FormControl(0),
      name: new FormControl('', Validators.required),
      dateOfBirth: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      mobileNo: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      salary: new FormControl('', [Validators.required,Validators.min(10000)]),
      departmentId: new FormControl('', Validators.required),
    })
    this.deptSer.getDept().subscribe(result => {
      this.deptList = result
    }, err => {
      alert('Error')
      console.log(err)
    })

  }
  onAddEmp() {
    console.log(this.addEmpForm.value)

    this.empService.addEmp(this.addEmpForm.value).subscribe(result => {
      console.log(result)
      this.router.navigate(['/employee'])
    }, err => {
      console.log(err)
      alert('Error')
    })
  }

}
