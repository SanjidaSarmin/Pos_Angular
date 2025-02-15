import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RoleService } from 'src/app/Service/Role/role.service';

@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
  styleUrls: ['./role-edit.component.scss']
})
export class RoleEditComponent implements OnInit{

  userName! : any;
  roledata: any | null= null;
 
  constructor(
   private roleService : RoleService,
    private router : Router,
    private route : ActivatedRoute
  ){}

  roleForm: FormGroup = new FormGroup({
    userName: new FormControl(),
    userFirstName: new FormControl(),
    userLastName: new FormControl(),
    email: new FormControl(),
    password: new FormControl(),
    enabled: new FormControl(true),
    credentialsNonExpired: new FormControl(true),
    accountNonExpired: new FormControl(true),
    accountNonLocked: new FormControl(true),
    roles: new FormControl([]),
    branches: new FormControl([])
  });




  onSubmit() {
    let formData = this.roleForm.value;
  
    // Ensure branches is always an array of numbers
    formData.branches = Array.isArray(formData.branches) 
      ? formData.branches.map((branch: any) => Number(branch))
      : [Number(formData.branches)]; 

      formData.roles = Array.isArray(formData.roles) 
      ? formData.roles.map((role: any) => String(role))
      : [String(formData.roles)]; 
  
    console.log("Sending data:", formData); // Debugging
  
    this.roleService.updateUser(formData).subscribe(
      (val: any) => {
        console.log("Form updated successfully", val);
        this.router.navigateByUrl('/admin/role');
      },
      (error) => {
        console.error("Update failed", error);
      }
    );
  }
  
  
  
  ngOnInit(): void {
    this.userName = this.route.snapshot.params['userName'];
    this.roleService.getUserByName(this.userName).subscribe((val: any) => {
     this.roledata= val;
     this.roleForm.patchValue(this.roledata);

    })
  }
}