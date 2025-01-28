import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellItemService {
 constructor(private httpClient: HttpClient) { }
 
   private apiUrl = "http://localhost:8081/api/sellitems";
  //  private apiUrl = "http://localhost:3000/promotions";
 
   addData(itemData: any){
     return this.httpClient.post(this.apiUrl, itemData)
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
 
   updateData(itemData: any){
     return this.httpClient.put(this.apiUrl+"/"+itemData.id, itemData)
   }
  }