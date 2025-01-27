import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BundleService } from 'src/app/branch-manager/Service/Bundle/bundle.service';

@Component({
  selector: 'app-bundle-edit',
  templateUrl: './bundle-edit.component.html',
  styleUrls: ['./bundle-edit.component.scss']
})
export class BundleEditComponent implements OnInit{
 
  constructor(
    private bundleService : BundleService,
    private router : Router,
    private route: ActivatedRoute
  ){}

  id! : any;
  bundleData: any;

  bundleForm: FormGroup = new FormGroup({
    id: new FormControl(),
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
    this.bundleService.updateData(this.bundleForm.value).subscribe((val : any) => {
      console.log("updated succesfully");
      this.router.navigateByUrl('/manager/bundleProduct')
    })
  }
  

  ngOnInit(): void {
    this.id = this.route.snapshot.params['bId'];
    this.bundleService.getById(this.id).subscribe((val: any) => {
     this.bundleData= val;
     this.bundleForm.patchValue(this.bundleData);
    })
  }

}

