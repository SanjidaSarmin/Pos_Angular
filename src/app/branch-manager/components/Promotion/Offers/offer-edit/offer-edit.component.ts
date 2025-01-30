import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OfferService } from 'src/app/branch-manager/Service/Offers/offer.service';

@Component({
  selector: 'app-offer-edit',
  templateUrl: './offer-edit.component.html',
  styleUrls: ['./offer-edit.component.scss']
})
export class OfferEditComponent implements OnInit{
 
  id! : any;
  offerData: any;

  constructor(
    private offerService : OfferService,
    private router : Router,
    private route: ActivatedRoute
  ){}

  promotionForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    barcode: new FormControl(),
    status: new FormControl(),
    minimumPurchase: new FormControl(),
    discount: new FormControl(),
    maximumDiscount: new FormControl(),
    appliedFor: new FormControl(),
    startDate: new FormControl(),
    endDate: new FormControl(),
    productId: new FormControl(),
  });


  onSubmit(){
    this.offerService.updateData(this.promotionForm.value).subscribe((val : any) => {
      console.log("Updated");
      this.router.navigateByUrl('/manager/offerList')
    })
  }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['oId'];
    this.offerService.getById(this.id).subscribe((val: any) => {
     this.offerData= val;
     this.promotionForm.patchValue(this.offerData);
    })
  }

}

