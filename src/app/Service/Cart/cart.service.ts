import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = "http://localhost:8081/api/cart";
  private cartData: any;

  constructor(private http: HttpClient) {}

  

  setCartData(data: any) {
    this.cartData = data;
  }

  getCartData() {
    return this.cartData;
  }

  private paymentMethod: string = '';

  setPaymentMethod(paymentMethod: string) {
    this.paymentMethod = paymentMethod;
  }

  getPaymentMethod() {
    return this.paymentMethod;
  }
}