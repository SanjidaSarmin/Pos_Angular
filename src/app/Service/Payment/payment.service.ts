import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
private apiUrl = "http://localhost:8081/api/payment";
  constructor(private httpClient: HttpClient) { }

  addData(payment : any){
    return this.httpClient.post(this.apiUrl, payment)
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

  updateData(payment: any){
    return this.httpClient.put(this.apiUrl+"/"+payment.id, payment)
  }
}
