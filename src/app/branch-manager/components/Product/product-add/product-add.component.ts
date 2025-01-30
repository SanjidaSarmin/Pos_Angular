import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BranchService } from 'src/app/branch-manager/Service/Branch/branch.service';
import { CategoryService } from 'src/app/branch-manager/Service/category/category.service';
import { ProductService } from 'src/app/branch-manager/Service/Product/product.service';
import { SuppliersService } from 'src/app/branch-manager/Service/Supplier/suppliers.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit{
 
  constructor(
    private proService : ProductService,
    private supplierService : SuppliersService, 
    private branchService : BranchService,
    private categoryService : CategoryService,
    private router : Router,
  ){}

  productForm : FormGroup = new FormGroup({
  image: new FormControl(),
  barcode: new FormControl(),
  name: new FormControl(),
  categoryId: new FormControl(),
  vat: new FormControl(),
  branchId: new FormControl(),
  stock: new FormControl(),
  costPrice: new FormControl(),
  sellPrice: new FormControl(),
  expiredDate: new FormControl(),
  supplierId: new FormControl()
  })
  
  suppliers: any[]= [];
  branches: any[]= [];
  categories: any[]=[];



  onSubmit(){
    this.proService.addData(this.productForm.value).subscribe((val : any) => {
      console.log("Product created succesfully");
      this.router.navigateByUrl('/manager/productlist')
    })
  }

  ngOnInit(): void {
    this.supplierService.getAllData().subscribe((val : any) => {
      this.suppliers = val  
    })

    this.branchService.getBranchData().subscribe((val : any) => {
      this.branches = val  
    })

    this.categoryService.getAllData().subscribe((val : any) => {
      this.categories = val  
    })
  }

}
