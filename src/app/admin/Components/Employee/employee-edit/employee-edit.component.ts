import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BranchService } from 'src/app/Service/Branch/branch.service';
import { EmployeeService } from 'src/app/Service/Employee/employee.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss']
})
export class EmployeeEditComponent implements OnInit{
 
  constructor(
    private employeeService : EmployeeService, 
    private branchService : BranchService,
    private router : Router,
    private route : ActivatedRoute,
  ){}

  employeeForm : FormGroup = new FormGroup({
    id: new FormControl(),
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
  id!: any;
  employeeData: any;



  onSubmit(){
    this.employeeService.updateData(this.employeeForm.value).subscribe((val : any) => {
      console.log("Employee Form created succesfully");
      this.router.navigateByUrl('/admin/employeelist')
    })
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['eId'];
    this.employeeService.getById(this.id).subscribe((val: any) => {
      this.employeeData = val;
      this.employeeForm.patchValue(this.employeeData);
    })
    this.branchService.getBranchData().subscribe((val : any) => {
      this.branches = val  
    })
  }

}
