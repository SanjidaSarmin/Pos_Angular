import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


 constructor(private httpClient: HttpClient) { }
 
   private apiUrl = "http://localhost:8081/api/category";
 
   addData(catagoryData: any){
     return this.httpClient.post(this.apiUrl, catagoryData)
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
 
   updateData(catagoryData: any){
     return this.httpClient.put(this.apiUrl+"/"+catagoryData.id, catagoryData)
   }
  }

