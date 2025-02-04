import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BranchService } from 'src/app/Service/Branch/branch.service';

@Component({
  selector: 'app-branch-add',
  templateUrl: './branch-add.component.html',
  styleUrls: ['./branch-add.component.scss']
})
export class BranchAddComponent implements OnInit{
 
  constructor(
    private branchService : BranchService,
    private router : Router
  ){}

  branchForm: FormGroup = new FormGroup({
    branchName: new FormControl(),
    location: new FormControl(),
    managerName: new FormControl(),
    contactNumber: new FormControl(),
  });




  onSubmit(){
    this.branchService.addData(this.branchForm.value).subscribe((val : any) => {
      console.log("ReturnForm created succesfully");
      this.router.navigateByUrl('/admin/branchlist')
    })
  }
  ngOnInit(): void {}

}