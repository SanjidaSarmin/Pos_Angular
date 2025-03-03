import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { OfferService } from 'src/app/Service/Offer/offer.service';

@Component({
  selector: 'app-offer-add',
  templateUrl: './offer-add.component.html',
  styleUrls: ['./offer-add.component.scss']
})
export class OfferAddComponent implements OnInit{
 
  constructor(
    private offerService : OfferService,
    private router : Router
  ){}

  promotionForm: FormGroup = new FormGroup({
    name: new FormControl(),
    code: new FormControl(),
    status: new FormControl(),
    minimumPurchase: new FormControl(),
    discount: new FormControl(),
    maximumDiscount: new FormControl(),
    appliedFor: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
  });

  onSubmit(){
    this.offerService.addData(this.promotionForm.value).subscribe((val : any) => {
      console.log("OfferForm created succesfully");
      this.router.navigateByUrl('/offerProduct')
    })
  }
  ngOnInit(): void {}

}
