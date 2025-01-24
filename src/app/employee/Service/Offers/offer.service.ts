import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OfferService {


 constructor(private httpClient: HttpClient) { }
 
   private apiUrl = "http://localhost:8081/api/offers";
 
   addData(offer : any){
     return this.httpClient.post(this.apiUrl, offer)
   }
 
   getAllData(){
     return this.httpClient.get(this.apiUrl)
   }
 
   getById(id: any){
     return this.httpClient.get(this.apiUrl +"/"+ id) 
   }
 
   deleteById(id:any){
     return this.httpClient.delete(this.apiUrl+"/"+ id)
   }
 
   updateData(offer: any){
     return this.httpClient.put(this.apiUrl+"/"+offer.id, offer)
   }
  }