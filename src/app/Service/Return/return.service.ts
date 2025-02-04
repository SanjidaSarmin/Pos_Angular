import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReturnService {

 constructor(private httpClient: HttpClient) { }
 
   private apiUrl = "http://localhost:8081/api/returns";
  //  private apiUrl = "http://localhost:3000/promotions";
 
   addData(returnData: any){
     return this.httpClient.post(this.apiUrl, returnData)
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
 
   updateData(returnData: any){
     return this.httpClient.put(this.apiUrl+"/"+returnData.id, returnData)
   }

   searchReturnsByDate(date: string) {
    return this.httpClient.get(this.apiUrl + "/search?date=" + date);
  }
  
  }

