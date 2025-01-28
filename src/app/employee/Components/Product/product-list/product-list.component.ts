import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/employee/Service/Product/product.service';
import { Product } from 'src/app/Models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  searchTest :string = "";
  search() {
    this.proService.serarchProduct(this.searchTest).subscribe((val: any) => {
      this.productList = val
    })
  }
  constructor(
    private proService: ProductService
  ) { }


  productList: Product[] = [];

  ngOnInit(): void {
    this.proService.getAllData().subscribe((val: any) => {
      this.productList = val
    })
  }

  deleteProduct(id: any) {
    this.proService.deleteById(id).subscribe((val: any) => {
      console.log("Data deleted");
      this.ngOnInit()
    })
  }

}
