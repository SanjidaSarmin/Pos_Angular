import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/Service/Customer/customer.service';

@Component({
  selector: 'app-membership-add',
  templateUrl: './membership-add.component.html',
  styleUrls: ['./membership-add.component.scss']
})
export class MembershipAddComponent implements OnInit{
 
  constructor(
    private customerService : CustomerService,
    private router : Router
  ){}

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
      this.router.navigateByUrl('/employee/membership')
    })
  }
  ngOnInit(): void {}

}
