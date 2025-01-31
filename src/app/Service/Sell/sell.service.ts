import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellService {

  constructor(private httpClient: HttpClient) { }
  
    private apiUrl = "http://localhost:8081/api/sells";
  
    addData(sellsData: any){
      return this.httpClient.post(this.apiUrl, sellsData)
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
  
    updateData(sellsData: any){
      return this.httpClient.put(this.apiUrl+"/"+sellsData.id, sellsData)
    }

    getSellWithItems(sellId: number) {
      return this.httpClient.get("http://localhost:8081/api/sells/${sellId}");
    }

    recordSale(saleData: any) {
      return this.httpClient.post('http://localhost:8081/api/sells', saleData, { responseType: 'text' });
    }
    
    
   }