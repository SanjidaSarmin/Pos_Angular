import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { Category } from 'src/app/Models/Catagory';
import { SellService } from '../../../Service/Sell/sell.service';
import { CategoryService } from 'src/app/Service/category/category.service';
import { ProductService } from 'src/app/Service/Product/product.service';
import { CartService } from 'src/app/Service/Cart/cart.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  notificationsCount = 3;
  isSidebarClosed = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
  activeDropdown: string | null = null;


  toggleDropdown(menuId: string): void {
    this.activeDropdown = this.activeDropdown === menuId ? null : menuId;
  }

  
  constructor(
    private sellService: SellService,
    private catagoryService: CategoryService,
    private proService: ProductService,
    private cartService: CartService,
    private router: Router
  ) { }

  

  searchTest: string = '';
  totalCost: number = 0;
  discount: number = 0;
  coupon: number = 0;
  tax: number = 0;
  shipping: number = 0;
  grandTotal: number = 0;
  productList: Product[] = [];
  categoryList: Category[] = [];
  selectedCategory: string = '';
  filteredProducts: any[] = [...this.productList];
  cartItems: any[] = [];
  customerPhone: string = '';
  paymentStatus: string= '';

  addToCart(product: any) {
    const existingItem = this.cartItems.find(item => item.product.name === product.name);

    if (existingItem) {
      existingItem.quantity++;
      existingItem.total = existingItem.quantity * existingItem.product.sellPrice;
    } else {
      this.cartItems.push({ product, quantity: 1, total: product.sellPrice });
    }

    this.updateTotals();
  }

  updateCartItem(item: any) {
    item.total = item.quantity * item.product.sellPrice;
    this.updateTotals();
  }

  removeFromCart(item: any): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
    this.updateTotals();
  }

  updateTotals(): void {
    this.totalCost = this.cartItems.reduce((acc, item) => acc + item.total, 0);
    this.grandTotal = this.totalCost - this.discount - this.coupon + this.tax + this.shipping;
  }

  

  processPayment(paymentMethod: string) {
    this.paymentStatus = `Payment successful via ${paymentMethod}. Thank you for your purchase!`;
  
    // Send sale data to backend
    const saleData = {
      customerPhone: this.customerPhone,
      cartItems: this.cartItems,
      totalCost: this.totalCost,
      paymentMethod: paymentMethod,
      date: new Date() // You can include the current date
    };
  
    this.sellService.recordSale(saleData).subscribe(response => {
      console.log('Sale recorded:', response);
      // After recording the sale, reset the cart
      this.cartItems = [];
      this.totalCost = 0;

      this.router.navigate(['/employee/confirmPayment']);
    }, error => {
      console.error('Error:', error);
    });
  }
  cancelPayment() {
    this.paymentStatus = 'Payment cancelled.';
    // Reset cart or perform necessary actions
  }
  

  
  fetchCartItems() {
    // Example of hardcoded cart items
    this.cartItems = [
      { product: { sellPrice: 100 }, quantity: 2 },
      { product: { sellPrice: 200 }, quantity: 1 }
    ];
    this.updateTotals();
  }

  

  search() {
    this.proService.searchProduct(this.searchTest).subscribe((val: any) => {
      this.filteredProducts = val; 
    });
  }
  

  ngOnInit(): void {
    this.catagoryService.getAllData().subscribe((val: any) => {
      this.categoryList = val;
    });

    this.proService.getAllData().subscribe((val: any) => {
      this.productList = val;
      this.filteredProducts = [...this.productList];
    });
  }
}

  // ngOnInit(): void {
  //   this.catagoryService.getAllData().subscribe((val: any) => {
  //     this.categoryList = val
  //   })

  //   this.proService.getAllData().subscribe((val: any) => {
  //     this.productList = val
  //   })
  // }
  // searchProducts() {
  //   if (this.searchQuery) {
  //     this.filteredProducts = this.productList.filter(product =>
  //       product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
  //     );
  //   } else {
  //     this.filteredProducts = [...this.productList];
  //   }
  // }
  // numberConverter(num: any) {
  //   console.log('val-------------',num);

  //   return Number(num);

  // }


