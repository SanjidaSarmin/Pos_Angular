import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Service/Cart/cart.service';
import { SellService } from 'src/app/Service/Sell/sell.service';

@Component({
  selector: 'app-confirm-sale',
  templateUrl: './confirm-sale.component.html',
  styleUrls: ['./confirm-sale.component.scss']
})
export class ConfirmSaleComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sellservice: SellService) { }
 
  totalCost: number = 0;
  discount: number = 0;
  coupon: number = 0;
  tax: number = 0;
  shipping: number = 0;
  grandTotal: number = 0;
  customerPhone: string = '';
  cartItems: any[] = [];
  paymentMethod: string = '';
  paymentStatus: string = 'Payment Successful!';



  ngOnInit() {
    this.paymentMethod = this.route.snapshot.params['type'];
    
    const cartData = this.sellservice.getCartData();
    if (cartData) {
      this.totalCost = cartData.totalCost;
      this.discount = cartData.discount;
      this.coupon = cartData.coupon;
      this.tax = cartData.tax;
      this.shipping = cartData.shipping;
      this.grandTotal = cartData.grandTotal;
      this.customerPhone = cartData.customerPhone;
      this.cartItems = cartData.cartItems;
    }
  }


  goHome() {
    this.router.navigate(['/employee/main']);
  }
}




