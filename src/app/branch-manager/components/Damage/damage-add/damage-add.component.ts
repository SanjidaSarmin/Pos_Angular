import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DamageService } from 'src/app/Service/Damage/damage.service';
import { ProductService } from 'src/app/Service/Product/product.service';

@Component({
  selector: 'app-damage-add',
  templateUrl: './damage-add.component.html',
  styleUrls: ['./damage-add.component.scss']
})
export class DamageAddComponent implements OnInit{
 
  constructor(
    private damageService : DamageService,
    private productService : ProductService,
    private router : Router
  ){}

  product: any[]= [];

  damageForm : FormGroup = new FormGroup({
  quantity : new FormControl(),
  reason: new FormControl(),
  dateReported: new FormControl(),
  productId: new FormControl()
  
  })

  onSubmit(){
    this.damageService.addData(this.damageForm.value).subscribe((val : any) => {
      console.log("created succesfully");
      this.router.navigateByUrl('/manager/damageList')
    })
  }
  ngOnInit(): void {
    this.productService.getAllData().subscribe((val : any) => {
      this.product = val  
    })
  }

}
