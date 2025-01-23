import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Service/Product/product.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit{
 
  constructor(
    private proService : ProductService,
    private router : Router
  ){}

  productForm : FormGroup = new FormGroup({
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
    this.proService.addData(this.productForm.value).subscribe((val : any) => {
      console.log("Product created succesfully");
      this.router.navigateByUrl('/productlist')
    })
  }
  ngOnInit(): void {}

}
