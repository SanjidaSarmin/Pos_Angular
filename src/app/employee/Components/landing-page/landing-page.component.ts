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

<<<<<<< HEAD





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

=======
  constructor(
    private sellService: SellService,
    private catagoryService: CategoryService,
    private proService: ProductService,
    private cartService: CartService,
    private router: Router
  ) { }

  salesSummery = {
    searchTest: '',
    totalCost: 0,
    discount: 0,
    coupon: 0,
    tax: 0,
    shipping: 0,
    grandTotal: 0,
    productList: [] as Product[],
    categoryList: [] as Category[],
    selectedCategory: '',
    filteredProducts: [] as any[],
    cartItems: [] as any[],
    customerPhone: '',
    paymentStatus: '',
    paymentMethod: ''
  };


  

>>>>>>> c74f909 (login and singup)
  addToCart(product: any) {
    const existingItem = this.salesSummery.cartItems.find(item => item.product.name === product.name);

    if (existingItem) {
      existingItem.quantity++;
      existingItem.total = existingItem.quantity * existingItem.product.sellPrice;
    } else {
      this.salesSummery.cartItems.push({ product, quantity: 1, total: product.sellPrice });
    }

    this.updateTotals();
  }

  updateCartItem(item: any) {
    item.total = item.quantity * item.product.sellPrice;
    this.updateTotals();
  }

  removeFromCart(item: any): void {
    this.salesSummery.cartItems = this.salesSummery.cartItems.filter((cartItem: any) => cartItem !== item);
    this.updateTotals();
  }

  updateTotals(): void {
    this.salesSummery.totalCost = this.salesSummery.cartItems.reduce((acc: number, item: any) => acc + item.total, 0);
    this.salesSummery.grandTotal = this.salesSummery.totalCost - this.salesSummery.discount - this.salesSummery.coupon + this.salesSummery.tax + this.salesSummery.shipping;
  }
  cancelPayment() {
    this.salesSummery.paymentStatus = 'Payment cancelled.';
    // Reset cart or perform necessary actions
  }
<<<<<<< HEAD

  search() {
    this.proService.searchProduct(this.searchTest).subscribe((val: any) => {
      this.filteredProducts = val;
=======
  

  
  fetchCartItems() {
    // Example of hardcoded cart items
    this.salesSummery.cartItems = [
      { product: { sellPrice: 100 }, quantity: 2 },
      { product: { sellPrice: 200 }, quantity: 1 }
    ];
    this.updateTotals();
  }

  

  search() {
    this.proService.searchProduct(this.salesSummery.searchTest).subscribe((val: any) => {
      this.salesSummery.filteredProducts = val; 
>>>>>>> c74f909 (login and singup)
    });
  }



  ngOnInit(): void {
    this.catagoryService.getAllData().subscribe((val: any) => {
      this.salesSummery.categoryList = val;
    });

    this.proService.getAllData().subscribe((val: any) => {
      this.salesSummery.productList = val;
      this.salesSummery.filteredProducts = [...this.salesSummery.productList];
    });

    // this.paymentService.getAllData().subscribe((val: any) => {
    //     this.paymentMethod = val;
    //   });

  }

<<<<<<< HEAD
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
=======
  navigateToConfirmSale(type:any) {
    // Set the data in the CartService
    this.cartService.setCartData({
      totalCost: this.salesSummery.totalCost,
      discount: this.salesSummery.discount,
      coupon: this.salesSummery.coupon,
      tax: this.salesSummery.tax,
      shipping: this.salesSummery.shipping,
      grandTotal: this.salesSummery.grandTotal,
      customerPhone: this.salesSummery.customerPhone,
      cartItems: this.salesSummery.cartItems
    });
    this.cartService.setPaymentMethod(this.salesSummery.paymentMethod);

    console.log(this.salesSummery);
    
    this.sellService.addData(this.salesSummery).subscribe((val: any) => {
      console.log('Data added:', val);
    });
    // Navigate to the confirm sale page
    this.router.navigate(['/employee/confirmPayment/', type]);
>>>>>>> c74f909 (login and singup)
  }


  currentPage = 1;
  itemsPerPage = 6;
  logout() {
    localStorage.clear();
    sessionStorage.clear();
<<<<<<< HEAD
    window.location.href = "/login";
  }
=======
    window.location.href="/login";
    }



>>>>>>> c74f909 (login and singup)
}




