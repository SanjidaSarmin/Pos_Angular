import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/employee/Service/Product/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent  implements OnInit{
 
  id! : any;
  productData : any | null= null;
  constructor(
    private proService : ProductService,
    private router : Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['pId'];
    this.proService.getById(this.id).subscribe((val: any) => {
     this.productData= val;
     this.productForm.patchValue(this.productData);
    })
  }

 

  productForm : FormGroup = new FormGroup({
  id: new FormControl(),
  image: new FormControl(),
  barcode: new FormControl(),
  name: new FormControl(),
  category: new FormControl(),
  vat: new FormControl(),
  branch: new FormControl(),
  stock: new FormControl(),
  costPrice: new FormControl(),
  sellPrice: new FormControl(),
  expiredDate: new FormControl(),
  supplier: new FormControl()
  })

  onSubmit(){
    this.proService.updateData(this.productForm.value).subscribe((val: any) => {
     console.log("Updated");
     this.router.navigateByUrl('/employee/productlist')
    })
   }

 
 }
 
 