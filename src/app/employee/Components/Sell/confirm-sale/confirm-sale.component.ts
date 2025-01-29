import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirm-sale',
  templateUrl: './confirm-sale.component.html',
  styleUrls: ['./confirm-sale.component.scss']
})
export class ConfirmSaleComponent implements OnInit {
  totalCost: number = 0;
  discount: number = 0;
  coupon: number = 0;
  tax: number = 0;
  shipping: number = 0;
  grandTotal: number = 0;
  paymentMethod: string = '';
  paymentStatus: string = 'Payment Successful!';
  cartItems: any[] = [];
  customerName: string = ''; 
  customerPhone: string = ''; 

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    // Retrieve query params
    this.route.queryParams.subscribe(params => {
      this.totalCost = params['totalCost'];
      this.paymentMethod = params['paymentMethod'];
      this.paymentStatus = params['status'];
      this.cartItems = params['cartItems']; // or fetch from a service
      this.customerName = params['customerName']; // This should be passed as a query parameter or set globally
      this.customerPhone = params['customerPhone']; // This too
      this.discount = params['discount'];
      this.coupon = params['coupon'];
      this.tax = params['tax'];
      this.shipping = params['shipping'];
      this.grandTotal = this.totalCost - this.discount - this.coupon + this.tax + this.shipping;
    });
  }

  goHome() {
    // Navigate to home or dashboard
  }
}