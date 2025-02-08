import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = "http://localhost:8081/api/customers";

  constructor(private httpClient: HttpClient) {}

  getCustomerByPhone(phoneNumber: string){
    return this.httpClient.get(this.apiUrl + "/" + phoneNumber);
  }

  // Update loyalty points of a customer after a sale
  // updateLoyaltyPoints(phoneNumber: string, loyaltyPoints: number) {
  //   return this.httpClient.post<any>(`${this.apiUrl}/${phoneNumber}/${loyaltyPoints}`, {});
  // }

  updateLoyaltyPoints(phoneNumber: string, loyaltyPoints: number){
    return this.httpClient.post(`${this.apiUrl}/${phoneNumber}/${loyaltyPoints}`, {});
  }
  

  // Check if customer has membership status
  checkMembershipStatus(phoneNumber: string){
    return this.httpClient.get(`${this.apiUrl}/${phoneNumber}/`);
  }
}

