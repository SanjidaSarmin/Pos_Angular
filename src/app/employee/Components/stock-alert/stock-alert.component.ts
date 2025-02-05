import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/Notification/notification.service';
import { ProductService } from 'src/app/Service/Product/product.service';

@Component({
  selector: 'app-stock-alert',
  templateUrl: './stock-alert.component.html',
  styleUrls: ['./stock-alert.component.scss']
})
export class StockAlertComponent  implements OnInit {
  lowStockProducts: any[] = [];
    notifications: string[] = [];
    selectedThreshold = 10;
  
    constructor(private productService: ProductService,
      private notificationService: NotificationService
    ) {}
  
    ngOnInit(): void {
      this.productService.getLowStockProducts().subscribe((val: any) => {
        this.lowStockProducts = val
        this.notifyLowStock(val);
      })
    }
    notifyLowStock(products: any[]) {
      products.forEach(product => {
        if (product.quantity < this.selectedThreshold) {
          this.notificationService.showNotification(`${product.name} is low on stock!`);
        }
      });
    }
}