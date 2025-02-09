import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellItemService {
 constructor(private httpClient: HttpClient) { }
 
   private apiUrl = "http://localhost:8081/downloadInvoice";
 
   addData(itemData: any){
     return this.httpClient.post(this.apiUrl, itemData)
   }
 
   getAllData(){
     return this.httpClient.get(this.apiUrl)
   }
 
   getById(id: any){
     return this.httpClient.get(this.apiUrl +"/"+ id) 
   }
 

  generateReport(sellId: number, format: string) {
    const url = `${this.apiUrl}?format=${format}&sellId=${sellId}`;
    return this.httpClient.get(url, { responseType: 'blob' });
  }
  }