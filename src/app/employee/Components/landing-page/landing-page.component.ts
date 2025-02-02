import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { Category } from 'src/app/Models/Catagory';
import { CartService } from 'src/app/Service/Cart/cart.service';
import { CategoryService } from 'src/app/Service/category/category.service';
import { ProductService } from 'src/app/Service/Product/product.service';
import { SellService } from 'src/app/Service/Sell/sell.service';
import { PaymentService } from 'src/app/Service/Payment/payment.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  constructor(
    private sellService: SellService,
    private catagoryService: CategoryService,
    private proService: ProductService,
    // private paymentService : PaymentService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  notificationsCount = 3;
  isSidebarClosed = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
  activeDropdown: string | null = null;


  toggleDropdown(menuId: string): void {
    this.activeDropdown = this.activeDropdown === menuId ? null : menuId;
  }






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
  paymentStatus: string = '';
  paymentMethod: string = '';

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
  cancelPayment() {
    this.paymentStatus = 'Payment cancelled.';
    // Reset cart or perform necessary actions
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

    // this.paymentService.getAllData().subscribe((val: any) => {
    //     this.paymentMethod = val;
    //   });

  }

  navigateToConfirmSale(type: string) {
    const saleData = {
      totalCost: this.totalCost,
      discount: this.discount,
      coupon: this.coupon,
      tax: this.tax,
      shipping: this.shipping,
      grandTotal: this.grandTotal,
      customerPhone: this.customerPhone,
      paymentMethod: type,
      cartItems: this.cartItems
    };
    this.sellService.setCartData(saleData)
    this.sellService.recordSale(saleData).subscribe((val: any) => {
      console.log("Sales created succesfully");
      this.router.navigate(['/employee/confirmPayment/', type]);
      // this.router.navigate(['/employee/confirmPayment/', { method: this.paymentMethod }]);
    })
  }


  currentPage = 1;
  itemsPerPage = 6;
  logout() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/login";
  }
}




