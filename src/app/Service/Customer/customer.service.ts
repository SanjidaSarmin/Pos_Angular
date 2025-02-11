import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = "http://localhost:8081/api/customers";

  constructor(private httpClient: HttpClient) {}

  addData(customerData: any) {
    return this.httpClient.post(this.apiUrl, customerData)
  }

  getAllData() {
    return this.httpClient.get(this.apiUrl)
  }

  getCustomerByPhone(phoneNumber: string){
    return this.httpClient.get(this.apiUrl + "/" + phoneNumber);
  }

  deleteById(phoneNumber: any) {
    return this.httpClient.delete(this.apiUrl + "/" + phoneNumber)
  }

  updateData(customerData: any) {
    return this.httpClient.put(this.apiUrl + "/" + customerData.phoneNumber, customerData)
  }

  search(phonenumber: string, page: number, size: number) {
    const params = {
      phoneNumber: phonenumber || '', 
      page: page.toString(),
      size: size.toString(),
    };
  
    return this.httpClient.get(`${this.apiUrl}/search`, { params });
  }


  updateLoyaltyPoints(phoneNumber: string, loyaltyPoints: number){
    return this.httpClient.post(`${this.apiUrl}/${phoneNumber}/${loyaltyPoints}`, {});
  }
  
  checkMembershipStatus(phoneNumber: string){
    return this.httpClient.get(`${this.apiUrl}/${phoneNumber}/`);
  }

  getTotalCustomers(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/total`);
  }

  getCustomersForMonth(): Observable<number> {
    return this.httpClient.get<number>(`${this.apiUrl}/month`);
  }
}

