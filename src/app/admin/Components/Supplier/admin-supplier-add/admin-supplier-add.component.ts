import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SuppliersService } from 'src/app/Service/Supplier/suppliers.service';

@Component({
  selector: 'app-admin-supplier-add',
  templateUrl: './admin-supplier-add.component.html',
  styleUrls: ['./admin-supplier-add.component.scss']
})
export class AdminSupplierAddComponent implements OnInit{
 
  constructor(
    private supplierService : SuppliersService,
    private router : Router
  ){}

  supplierForm: FormGroup = new FormGroup({
    name: new FormControl(),
    contact: new FormControl()
  });




  onSubmit(){
    this.supplierService.addData(this.supplierForm.value).subscribe((val : any) => {
      console.log("ReturnForm created succesfully");
      this.router.navigateByUrl('/admin/supplierlist')
    })
  }
  ngOnInit(): void {}

}