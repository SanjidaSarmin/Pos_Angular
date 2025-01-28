import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SellReportService {


  constructor(private httpClient: HttpClient) { }
  
    private apiUrl = "http://localhost:8081/api/salesreports";
  
    addData(sellsreport: any){
      return this.httpClient.post(this.apiUrl, sellsreport)
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
  
    updateData(sellsreport: any){
      return this.httpClient.put(this.apiUrl+"/"+sellsreport.id, sellsreport)
    }

    
   }