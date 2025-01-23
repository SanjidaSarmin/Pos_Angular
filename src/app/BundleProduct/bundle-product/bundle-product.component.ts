import { Component, OnInit } from '@angular/core';
import { BundleService } from '../../Service/Bandle/bundle.service';
import { BundleProduct } from '../../Models/Bundle';

@Component({
  selector: 'app-bundle-product',
  templateUrl: './bundle-product.component.html',
  styleUrls: ['./bundle-product.component.scss']
})
export class BundleProductComponent implements OnInit{
    constructor(
      private bundleService : BundleService
     ){}
     searchTerm = '';
     
     bundleList: BundleProduct[] = [];
  
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
