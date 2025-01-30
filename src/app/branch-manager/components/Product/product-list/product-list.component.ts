import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/branch-manager/Service/Product/product.service';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  constructor(
    private proService : ProductService
   ){}

   
   productList: any[] = [];

  ngOnInit(): void {
     this.proService.getAllData().subscribe((val : any) => {
      this.productList = val  
    })
  }

  deleteProduct(id : any){
    this.proService.deleteById(id).subscribe((val : any) =>{
      console.log("Data deleted");
      this.ngOnInit()
    })
   }

}
