import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from 'src/app/Service/Branch/branch.service';
import { CategoryService } from 'src/app/Service/category/category.service';
import { ProductService } from 'src/app/Service/Product/product.service';
import { SuppliersService } from 'src/app/Service/Supplier/suppliers.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  id!: any;
  productData: any | null = null;
  constructor(
    private proService: ProductService,
    private supplierService: SuppliersService,
    private branchService: BranchService,
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['pId'];
    this.proService.getById(this.id).subscribe((val: any) => {
      this.productData = val;
      this.productForm.patchValue(this.productData);
    })

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



  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    image: new FormControl(),
    barcode: new FormControl(),
    name: new FormControl(),
    categoryId: new FormControl(),
    branchId: new FormControl(),
    quantity: new FormControl(),
    costPrice: new FormControl(),
    sellPrice: new FormControl(),
    expiredDate: new FormControl(),
    supplierId: new FormControl()
  })

  suppliers: any[] = [];
  branches: any[] = [];
  categories: any[] = [];

  onSubmit() {
    this.proService.updateData(this.productForm.value).subscribe((val: any) => {
      console.log("Updated");
      this.router.navigateByUrl('/manager/productlist')
    })
  }


}

