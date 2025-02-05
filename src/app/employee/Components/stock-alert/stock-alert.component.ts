import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Service/Product/product.service';

@Component({
  selector: 'app-stock-alert',
  templateUrl: './stock-alert.component.html',
  styleUrls: ['./stock-alert.component.scss']
})
export class StockAlertComponent  implements OnInit {
  lowStockProducts: any[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getLowStockProducts().subscribe((val: any) => {
      this.lowStockProducts = val
    })
  }
}