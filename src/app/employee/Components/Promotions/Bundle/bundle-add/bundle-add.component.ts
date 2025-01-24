import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { BundleService } from 'src/app/employee/Service/Bundle/bundle.service';

@Component({
  selector: 'app-bundle-add',
  templateUrl: './bundle-add.component.html',
  styleUrls: ['./bundle-add.component.scss']
})
export class BundleAddComponent implements OnInit{
 
  constructor(
    private bundleService : BundleService,
    private router : Router
  ){}

  bundleForm: FormGroup = new FormGroup({
    name: new FormControl(),
    barcode: new FormControl(),
    vat: new FormControl(),
    branch: new FormControl(),
    stockStatus: new FormControl(),
    quantity: new FormControl(),
    costPrice: new FormControl(),
    sellPrice: new FormControl(),
    expiredDate: new FormControl()
  });
  

  onSubmit(){
    this.bundleService.addData(this.bundleForm.value).subscribe((val : any) => {
      console.log("created succesfully");
      this.router.navigateByUrl('/employee/bundleProduct')
    })
  }
  ngOnInit(): void {}

}

