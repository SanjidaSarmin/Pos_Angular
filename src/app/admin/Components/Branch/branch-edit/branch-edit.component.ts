import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from 'src/app/Service/Branch/branch.service';

@Component({
  selector: 'app-branch-edit',
  templateUrl: './branch-edit.component.html',
  styleUrls: ['./branch-edit.component.scss']
})
export class BranchEditComponent implements OnInit{
 
  constructor(
    private branchService : BranchService,
    private router : Router,
    private route : ActivatedRoute
  ){}

  branchForm: FormGroup = new FormGroup({
    id: new FormControl(),
    branchName: new FormControl(),
    location: new FormControl(),
    managerName: new FormControl(),
    contactNumber: new FormControl(),
  });

  id! : any;
  branchData: any | null= null;


  onSubmit(){
    this.branchService.updateData(this.branchForm.value).subscribe((val : any) => {
      console.log("Data created succesfully");
      this.router.navigateByUrl('/admin/branchlist')
    })
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['bId'];
    this.branchService.getById(this.id).subscribe((val: any) => {
     this.branchData= val;
     this.branchForm.patchValue(this.branchData);
    })
  }

}