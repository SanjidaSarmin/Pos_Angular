import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SuppliersService } from 'src/app/Service/Supplier/suppliers.service';

@Component({
  selector: 'app-supplier-edit',
  templateUrl: './supplier-edit.component.html',
  styleUrls: ['./supplier-edit.component.scss']
})
export class SupplierEditComponent implements OnInit{
 
  constructor(
    private supplierService : SuppliersService,
    private router : Router,
    private route : ActivatedRoute
  ){}

  id! : any;
  supplierData: any | null= null;

  supplierForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    contact: new FormControl()
  });

  onSubmit(){
    this.supplierService.addData(this.supplierForm.value).subscribe((val : any) => {
      console.log("ReturnForm created succesfully");
      this.router.navigateByUrl('/manager/supplierlist')
    })
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['sId'];
    this.supplierService.getById(this.id).subscribe((val: any) => {
     this.supplierData= val;
     this.supplierForm.patchValue(this.supplierData);
    })
  }

}