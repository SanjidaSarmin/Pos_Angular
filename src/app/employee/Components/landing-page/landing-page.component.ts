import { Component, OnInit } from '@angular/core';
import { SellService } from '../../Service/Sell/sell.service';
import { CatagoryService } from '../../Service/Catagory/catagory.service';
import { Category } from 'src/app/Models/Catagory';
import { ProductService } from '../../Service/Product/product.service';
import { Product } from 'src/app/Models/Product';
import { CartService } from '../../Service/Cart/cart.service';

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

  addToCart(product: any) {
    const existingItem = this.cartItems.find(item => item.product.name === product.name);

    if (existingItem) {
      existingItem.quantity++;
      existingItem.total = existingItem.quantity * existingItem.product.price;
    } else {
      this.cartItems.push({ product, quantity: 1, total: product.price });
    }
    // this.updateTotal();
  }

  numberConverter(num: any) {
    console.log('val-------------',num);

    return Number(num);

  }

  constructor(
    private sellService: SellService,
    private catagoryService: CatagoryService,
    private proService: ProductService,
    private cartService: CartService
  ) { }


  searchQuery: string = '';
  totalGross: number = 0;
  discount: number = 10;
  subtotal: number = 0;
  preDue: number = 0;
  walletBalance: number = 0;
  totalPayable: number = 0;

  productList: Product[] = [];
  categoryList: Category[] = [];
  selectedCategory: string = '';

  filteredProducts: any[] = [...this.productList];

  cartItems: any[] = [];
  total: number = 0;

  searchProducts() {
    if (this.searchQuery) {
      this.filteredProducts = this.productList.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredProducts = [...this.productList];
    }
  }


  // updateTotal(): void {
  //   this.cartService.calculateTotal(this.cartItems).subscribe((total: any) => {
  //     this.total = total;
  //   });
  // }

  removeFromCart(item: any): void {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
    // this.updateTotal();
  }
 
  


  ngOnInit(): void {
    this.catagoryService.getAllData().subscribe((val: any) => {
      this.categoryList = val
    })

    this.proService.getAllData().subscribe((val: any) => {
      this.productList = val
    })
  }


}
