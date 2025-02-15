import { Component, OnInit } from '@angular/core';
import { RoleService } from 'src/app/Service/Role/role.service';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss']
})
export class RoleManagementComponent implements OnInit{
    constructor(
      private roleService : RoleService
     ){}
     searchTerm = '';
     
     roleList: any[] = [];
  
    ngOnInit(): void {
       this.roleService.getAllUsers().subscribe((val : any) => {
        this.roleList = val  
      })

    }
  
    delete(userName : any){
      this.roleService.deleteByUsername(userName).subscribe((val : any) =>{
        console.log("Data deleted");
        this.ngOnInit()
      })
     }
  
  }
  


