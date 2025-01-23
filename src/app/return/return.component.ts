import { Component, OnInit } from '@angular/core';
import { ReturnService } from '../Service/Return/return.service';
import { Return } from '../Models/Return';

@Component({
  selector: 'app-return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.scss']
})
export class ReturnComponent implements OnInit{
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
  
    // deleteOffer(id : any){
    //   this.returnService.deleteById(id).subscribe((val : any) =>{
    //     console.log("Data deleted");
    //     this.ngOnInit()
    //   })
    //  }
  
  }
  

