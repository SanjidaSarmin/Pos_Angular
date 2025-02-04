import { Component, OnInit } from '@angular/core';
import { Return } from 'src/app/Models/Return';
import { ReturnService } from 'src/app/Service/Return/return.service';

@Component({
  selector: 'app-return-list',
  templateUrl: './return-list.component.html',
  styleUrls: ['./return-list.component.scss']
})
export class ReturnListComponent implements OnInit{
    constructor(
      private returnService : ReturnService
     ){}
     searchTerm = '';
     
     returnList: Return[] = [];
  
    ngOnInit(): void {
       this.returnService.getAllData().subscribe((val : any) => {
        this.returnList = val  
      })
    }
  
    deletereturn(id : any){
      this.returnService.deleteById(id).subscribe((val : any) =>{
        console.log("Data deleted");
        this.ngOnInit()
      })
     }
  
  }
  

