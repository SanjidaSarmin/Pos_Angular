import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/Product/product.service';
import { ReturnService } from 'src/app/Service/Return/return.service';

@Component({
  selector: 'app-return-list',
  templateUrl: './return-list.component.html',
  styleUrls: ['./return-list.component.scss']
})
export class ReturnListComponent implements OnInit{
    constructor(
      private returnService : ReturnService,
      private productService : ProductService
     ){}
     searchTerm = '';
     
     returnList: any[] = [];
     productList: any[] = [];
  
    ngOnInit(): void {
       this.returnService.getAllData().subscribe((val : any) => {
        this.returnList = val  
      })
      this.productService.getAllData().subscribe((val : any) => {
        this.productList = val  
      })

    }
  
    deletereturn(id : any){
      this.returnService.deleteById(id).subscribe((val : any) =>{
        console.log("Data deleted");
        this.ngOnInit()
      })
     }
  
  }
  

