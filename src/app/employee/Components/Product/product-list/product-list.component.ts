import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/employee/Model/Product';
import { ProductService } from 'src/app/employee/Service/Product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{
  constructor(
    private proService : ProductService
   ){}

   
   productList: Products[] = [];

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
