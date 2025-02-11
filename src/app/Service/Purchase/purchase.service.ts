import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {


   constructor(private httpClient: HttpClient) { }
  
    private apiUrl = "http://localhost:8081/api/purchase";
    // private apiUrl = "http://localhost:3000/products";
  
    addData(purchase: any) {
      return this.httpClient.post(this.apiUrl, purchase)
    }
  
    getAllData() {
      return this.httpClient.get(this.apiUrl)
    }
  
    getById(id: any) {
      return this.httpClient.get(this.apiUrl + "/" + id)
    }
  
    deleteById(id: any) {
      return this.httpClient.delete(this.apiUrl + "/" + id)
    }
  
    updateData(purchase: any) {
      return this.httpClient.put(this.apiUrl + "/" + purchase.id, purchase)
    }

    getPurchaseForMonth(): Observable<number> {
        return this.httpClient.get<number>(`${this.apiUrl}/month`);
      }
}
