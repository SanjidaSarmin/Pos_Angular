import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Models/Product';
import { BranchService } from 'src/app/Service/Branch/branch.service';
import { CategoryService } from 'src/app/Service/category/category.service';
import { ProductService } from 'src/app/Service/Product/product.service';
import { SuppliersService } from 'src/app/Service/Supplier/suppliers.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  constructor(
    private proService: ProductService,
    private supplierService: SuppliersService,
    private branchService: BranchService,
    private categoryService: CategoryService,
  ) { }


  productList: any[] = [];
  suppliers: any[] = [];
  branches: any[] = [];
  categories: any[] = [];

  ngOnInit(): void {
    this.proService.getAllData().subscribe((val: any) => {
      this.productList = val
    })

    this.supplierService.getAllData().subscribe((val: any) => {
      this.suppliers = val
    })

    this.branchService.getBranchData().subscribe((val: any) => {
      this.branches = val
    })

    this.categoryService.getAllData().subscribe((val: any) => {
      this.categories = val
    })
  }

  deleteProduct(id: any) {
    this.proService.deleteById(id).subscribe((val: any) => {
      console.log("Data deleted");
      this.ngOnInit()
    })
  }

}
