import { Component, OnInit } from '@angular/core';
import { BundleProduct } from 'src/app/Models/Bundle';
import { BundleService } from 'src/app/Service/Bundle/bundle.service';

@Component({
  selector: 'app-bundle-list',
  templateUrl: './bundle-list.component.html',
  styleUrls: ['./bundle-list.component.scss']
})
export class BundleListComponent implements OnInit{
    constructor(
      private bundleService : BundleService
     ){}
     searchTerm = '';
     
     bundleList: any[] = [];
  
    ngOnInit(): void {
       this.bundleService.getAllData().subscribe((val : any) => {
        this.bundleList = val  
      })
    }
  
    deletebundle(id : any){
      this.bundleService.deleteById(id).subscribe((val : any) =>{
        console.log("Data deleted");
        this.ngOnInit()
      })
     }
  
  }

