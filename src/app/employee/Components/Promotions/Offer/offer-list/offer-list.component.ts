import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/employee/Service/Offers/offer.service';
import { Offers } from 'src/app/Models/Offers';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent  implements OnInit{
  constructor(
    private offerService : OfferService
   ){}

   
   offerList: Offers[] = [];

  ngOnInit(): void {
     this.offerService.getAllData().subscribe((val : any) => {
      this.offerList = val  
    })
  }

  deleteOffer(id : any){
    this.offerService.deleteById(id).subscribe((val : any) =>{
      console.log("Data deleted");
      this.ngOnInit()
    })
   }

 
}
