import { Component } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {
  notificationsCount = 3;
  isSidebarClosed = false;

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }
  activeDropdown: string | null = null;

  // Toggle dropdown visibility
  toggleDropdown(menuId: string): void {
    this.activeDropdown = this.activeDropdown === menuId ? null : menuId;
  }

  searchQuery: string = '';
  totalGross: number = 0;
  discount: number = 10; // Sample discount
  subtotal: number = 0;
  preDue: number = 0;
  walletBalance: number = 0;
  totalPayable: number = 0;

  products = [
    { name: 'Mr Noodles', image: '/assets/coffe.jpg', price: 250 },
    { name: 'Kitkat Chocolate', image: '/assets/kitkat.jpg', price: 100 },
    { name: 'Pran Potata', image: '/assets/pran_potata.jpg', price: 50 },
    { name: 'AllTime Cookies', image: '/assets/cookies.png', price: 20},
  ];

  filteredProducts = [...this.products];

  cartItems: { product: any, quantity: number, total: number }[] = [];

  searchProducts() {
    if (this.searchQuery) {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    } else {
      this.filteredProducts = [...this.products];
    }
  }

  addToCart(product: any) {
    const existingItem = this.cartItems.find(item => item.product.name === product.name);
    
    if (existingItem) {
      existingItem.quantity++;
      existingItem.total = existingItem.quantity * existingItem.product.price;
    } else {
      this.cartItems.push({ product, quantity: 1, total: product.price });
    }
    this.updateTotal();
  }

  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
    this.updateTotal();
  }

  updateTotal() {
    this.totalGross = this.cartItems.reduce((sum, item) => sum + item.total, 0);
    this.subtotal = this.totalGross - this.discount;
    this.totalPayable = this.subtotal > 0 ? this.subtotal : 0;
  }
}
