import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SuppliersService } from 'src/app/Service/Supplier/suppliers.service';

@Component({
  selector: 'app-supplier-add',
  templateUrl: './supplier-add.component.html',
  styleUrls: ['./supplier-add.component.scss']
})
export class SupplierAddComponent implements OnInit{
 
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
      this.router.navigateByUrl('/manager/supplierlist')
    })
  }
  ngOnInit(): void {}

}