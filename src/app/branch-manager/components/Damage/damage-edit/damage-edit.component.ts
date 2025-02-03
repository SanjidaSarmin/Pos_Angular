import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DamageService } from 'src/app/Service/Damage/damage.service';
import { ProductService } from 'src/app/Service/Product/product.service';

@Component({
  selector: 'app-damage-edit',
  templateUrl: './damage-edit.component.html',
  styleUrls: ['./damage-edit.component.scss']
})
export class DamageEditComponent implements OnInit{
 
  id!: any;
  damageData! : any;
  product: any[]= [];

  constructor(
    private damageService : DamageService,
    private productService : ProductService,
    private router : Router,
    private route : ActivatedRoute,
  ){}
 

  damageForm : FormGroup = new FormGroup({
  id: new FormControl(),
  quantity : new FormControl(),
  reason: new FormControl(),
  dateReported: new FormControl(),
  productId: new FormControl()
  
  })

  onSubmit(){
    this.damageService.updateData(this.damageForm.value).subscribe((val : any) => {
      console.log("updated succesfully");
      this.router.navigateByUrl('/manager/damageList')
    })
  }
  
  ngOnInit(): void {
    this.id = this.route.snapshot.params['dId'];
    this.damageService.getById(this.id).subscribe((val: any) => {
     this.damageData= val;
     this.damageForm.patchValue(this.damageData);
    })

    this.productService.getAllData().subscribe((val : any) => {
      this.product = val  
    })
  }

}
