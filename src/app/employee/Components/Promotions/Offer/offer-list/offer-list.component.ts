import { Component, OnInit } from '@angular/core';
import { Offers } from 'src/app/Models/Offers';
import { OfferService } from 'src/app/Service/Offers/offer.service';

@Component({
  selector: 'app-offer-list',
  templateUrl: './offer-list.component.html',
  styleUrls: ['./offer-list.component.scss']
})
export class OfferListComponent  implements OnInit{
  constructor(
    private offerService : OfferService
   ){}

   
   offerList: any[] = [];

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
