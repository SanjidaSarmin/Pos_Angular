import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Service/Product/product.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit{
  constructor(
    private proService : ProductService
   ){}

   
   productList: Product[] = [];

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
