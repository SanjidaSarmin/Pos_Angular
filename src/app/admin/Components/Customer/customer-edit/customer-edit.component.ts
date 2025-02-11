import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CustomerService } from 'src/app/Service/Customer/customer.service';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit{
 
  constructor(
    private customerService : CustomerService,
    private router : Router,
    private route : ActivatedRoute
  ){}

  phonenumber! : any;
  customerData: any | null= null;

  customerForm: FormGroup = new FormGroup({
    phoneNumber: new FormControl(),
    firstName: new FormControl(),
    lastName: new FormControl(),
    loyaltyPoints: new FormControl(),
    date : new FormControl()
  });

  onSubmit(){
    this.customerService.addData(this.customerForm.value).subscribe((val : any) => {
      console.log("Created succesfully");
      this.router.navigateByUrl('/admin/membership')
    })
  }
  ngOnInit(): void {
    this.phonenumber = this.route.snapshot.params['memberId'];
    this.customerService.getCustomerByPhone(this.phonenumber).subscribe((val: any) => {
     this.customerData= val;
     this.customerForm.patchValue(this.customerData);
    })
  }

}
