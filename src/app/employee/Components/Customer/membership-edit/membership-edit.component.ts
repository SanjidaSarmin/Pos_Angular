import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/Service/Customer/customer.service';

@Component({
  selector: 'app-membership-edit',
  templateUrl: './membership-edit.component.html',
  styleUrls: ['./membership-edit.component.scss']
})
export class MembershipEditComponent implements OnInit{
 
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
    loyaltyPoints: new FormControl()
  });

  onSubmit(){
    this.customerService.addData(this.customerForm.value).subscribe((val : any) => {
      console.log("Created succesfully");
      this.router.navigateByUrl('/employee/membership')
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
