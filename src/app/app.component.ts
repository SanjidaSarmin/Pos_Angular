import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from './Service/Auth/auth.service';
import { ProductService } from './Service/Product/product.service';
import { NotificationService } from './Service/Notification/notification.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  lowStockProducts: any[] = [];
  notifications$ = this.notificationService.notifications$; // Observable for notifications
  selectedThreshold = 10;

  constructor(private productService: ProductService,
     private notificationService: NotificationService) {}

  ngOnInit(): void {
    this.checkLowStock();
  }

  checkLowStock() {
    this.productService.getLowStockProducts().subscribe((products: any) => {
      this.lowStockProducts = products;
      this.notifyLowStock(products);
    });
  }

  notifyLowStock(products: any[]) {
    products.forEach(product => {
      if (product.quantity < this.selectedThreshold) {
        const message = product.quantity === 0 
          ? `${product.name} is out of stock!` 
          : `${product.name} is low on stock! Only ${product.quantity} left.`;

        this.notificationService.addNotification(message);
      }
    });
  }
}
