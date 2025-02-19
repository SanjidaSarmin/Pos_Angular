import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/Models/Product';
import { Category } from 'src/app/Models/Catagory';
import { CategoryService } from 'src/app/Service/category/category.service';
import { ProductService } from 'src/app/Service/Product/product.service';
import { SellService } from 'src/app/Service/Sell/sell.service';
import { NotificationService } from 'src/app/Service/Notification/notification.service';
import { FormControl } from '@angular/forms';
import { CustomerService } from 'src/app/Service/Customer/customer.service';
import { StorageService } from 'src/app/StorageService/storage.service';

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
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private customerService: CustomerService,
    private store: StorageService

  ) { }


  isSidebarClosed = false;
  notificationsCount = 0;
  notifications: { message: string; time: Date }[] = [];
  isDropdownVisible: boolean = false;
  branchName: string = 'Mirpur Branch';
  currentDate: string = '';


  showDropdown() {
    this.isDropdownVisible = !this.isDropdownVisible;
  }

  clearNotifications() {
    this.notificationService.clearNotifications();
  }

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
  activeDropdown: string | null = null;

  toggleDropdown(menuId: string): void {
    this.activeDropdown = this.activeDropdown === menuId ? null : menuId;
  }
  getCurrentDate(): void {
    const today = new Date();
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    this.currentDate = today.toLocaleDateString('en-US', options);
  }

  productNameControl = new FormControl('');
  selectedProduct: string = '';
  selectedProducts: any[] = [];
  filteredProducts: any[] = [];
  paginatedProducts: any[] = [];
  currentPage = 1;
  itemsPerPage: number = 10;


  searchProduct(): void {
    const searchTerm = this.productNameControl.value?.trim();
    if (!searchTerm) {
      alert('Please enter a product name to search.');
      return;
    }
    this.proService.searchProduct(searchTerm).subscribe((val: any) => {
      this.productFiltered = val;
      this.currentPage = 1; // Reset to the first page
      this.updatePaginatedProducts(); // Update the displayed products
    });
  }
  updatePaginatedProducts(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    this.paginatedProducts = this.productList.slice(start, start + this.itemsPerPage);
  }

  filterProducts() {
    const input = this.productNameControl.value?.toLowerCase() || '';
    if (input.trim() === '') {
      this.filteredProducts = [];
    } else {
      this.filteredProducts = this.productList.filter((product) =>
        product.name.toLowerCase().includes(input)
      );
    }
  }


  selectProduct(product: any) {
    const existingProduct = this.selectedProducts.find(
      (p) => p.code === product.code
    );
    if (!existingProduct) {
      this.selectedProducts.push({ ...product, quantity: 1 });
    } else {
      alert('Product is already in the list.');
    }
    this.productNameControl.setValue('');
    this.filteredProducts = [];
  }

  id: any;
  totalCost: number = 0;
  discount: number = 0;
  coupon: number = 0;
  tax: number = 0;
  grandTotal: number = 0;
  productList: Product[] = [];
  categoryList: Category[] = [];
  selectedCategory: string = '';
  productFiltered: any[] = [...this.productList];
  cartItems: any[] = [];
  customerPhone: string = '';
  paymentStatus: string = '';
  paymentMethod: string = '';
  isMember: boolean = false;

  addToCart(product: any) {
    if (product.quantity === 0) {
      alert("This product is out of stock and cannot be added to the cart.");
      return;
    }
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
    this.cartItems = this.cartItems.filter((cartItem: any) => cartItem !== item);
    this.updateTotals();
  }

  updateTotals(): void {
    this.totalCost = this.cartItems.reduce((acc, item) => acc + (item.quantity * item.product.sellPrice), 0);
    const discountAmount = (this.discount / 100) * this.totalCost;
    const taxAmount = (this.tax / 100) * this.totalCost;
    this.grandTotal = this.totalCost - discountAmount - this.coupon + taxAmount;

  }
  cancelPayment() {
    this.paymentStatus = 'Payment cancelled.';
  }

  // search() {
  //   this.proService.searchProduct(this.searchTest).subscribe((val: any) => {
  //     this.productFiltered = val;
  //   });
  // }



  ngOnInit(): void {
    this.catagoryService.getAllData().subscribe((val: any) => {
      this.categoryList = val;
    });

    let branch2 = this.store.getUserBranches();
    this.proService.getAllDataByBranch(branch2).subscribe((val: any) => {
      this.productList = val;
      this.productFiltered = [...this.productList];
    });

    this.notificationService.notifications$.subscribe(notifications => {
      this.notifications = notifications;
    });

    this.notificationService.notificationsCount$.subscribe(count => {
      this.notificationsCount = count;
    });

    this.getCurrentDate();
    this.updatePaginatedProducts();

    // this.paymentService.getAllData().subscribe((val: any) => {
    //     this.paymentMethod = val;
    //   });

  }

  navigateToConfirmSale(type: string) {
    let branchId = this.store.getUserBranches(); 
    console.log("Branch ID before sending request:", branchId);

    if (!branchId) {
        console.error("Invalid Branch ID:", branchId);
        this.notificationService.addNotification("Error: Invalid Branch ID.");
        return;
    }
    const saleData2 = {
      id: this.id,
      totalCost: this.totalCost,
      discount: this.discount,
      coupon: this.coupon,
      tax: this.tax,
      grandTotal: this.grandTotal,
      customerPhone: this.customerPhone,
      paymentMethod: type,
      cartItems: this.cartItems
    };
    const saleData = {
      customerPhone: this.customerPhone,
      totalCost: this.totalCost,
      paymentMethod: type,
      discount: this.discount,
      coupon: this.coupon,
      tax: this.tax,
      grandTotal: this.grandTotal,
      saleItems: this.cartItems.map(item => ({
        product: {
          id: item.product.id
        },
        quantity: item.quantity,
        price: item.product.sellPrice
      })),
      branchId: branchId
    };
    this.customerService.getCustomerByPhone(this.customerPhone).subscribe((customer: any) => {
      if (customer) {
        if (customer.isMember) {
          const pointsToAdd = this.grandTotal;
          this.customerService.updateLoyaltyPoints(this.customerPhone, pointsToAdd).subscribe(
            (response) => {
              console.log('Loyalty points updated successfully:', response);
              this.notificationService.addNotification('Loyalty points updated.');
            },
            (error) => {
              console.error('Error updating loyalty points:', error);
              this.notificationService.addNotification('Failed to update loyalty points.');
            }
          );
        }
      }
    }, (error) => {
      console.error('Error fetching customer data:', error);
      this.notificationService.addNotification('Failed to fetch customer data.');
    });


    this.sellService.setCartData(saleData2)

    this.sellService.recordSale(saleData).subscribe((val: any) => {
      console.log("Sales created succesfully");
      const sellId = val.id;

      this.router.navigate(['/employee/confirmPayment/', type, sellId]);
      // this.router.navigate(['/employee/confirmPayment/', { method: this.paymentMethod }]);
    })
  }

  checkCustomerMembership(phoneNumber: string) {
    this.customerService.getCustomerByPhone(phoneNumber).subscribe((customer: any) => {
      if (customer) {
        this.isMember = customer.isMember; // Check membership status
        this.grandTotal = customer.loyaltyPoints; // Display loyalty points
      }
    }, (error) => {
      console.error('Error fetching customer data:', error);
    });
  }


  logout() {
    localStorage.clear();
    sessionStorage.clear();
    window.location.href = "/login";
  }
}

