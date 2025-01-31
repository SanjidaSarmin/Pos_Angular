import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { ProductService } from 'src/app/Service/Product/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  searchTest :string = "";
  search() {
    this.proService.searchProduct(this.searchTest).subscribe((val: any) => {
      this.productList = val
    })
  }
  constructor(
    private proService: ProductService
  ) { }


  productList: any[] = [];

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
