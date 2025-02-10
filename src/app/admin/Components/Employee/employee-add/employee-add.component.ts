import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BranchService } from 'src/app/Service/Branch/branch.service';
import { EmployeeService } from 'src/app/Service/Employee/employee.service';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss']
})
export class EmployeeAddComponent implements OnInit{
 
  constructor(
    private employeeService : EmployeeService, 
    private branchService : BranchService,
    private router : Router,
  ){}

  employeeForm : FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    email: new FormControl(),
    phoneNumber: new FormControl(),
    salary: new FormControl(),
    hireDate: new FormControl(),
    status: new FormControl(),
    branchId: new FormControl()
  })
  
  
  branches: any[]= [];



  onSubmit(){
    this.employeeService.addData(this.employeeForm.value).subscribe((val : any) => {
      console.log("Employee Form created succesfully");
      this.router.navigateByUrl('/admin/employeelist')
    })
  }

  ngOnInit(): void {
    this.branchService.getBranchData().subscribe((val : any) => {
      this.branches = val  
    })
  }

}
