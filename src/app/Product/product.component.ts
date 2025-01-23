import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  products = [
    { image: 'assets/images/clemon.png', name: 'Clemon', stock: 6489, sales: 1563 },
    { image: 'assets/images/jibon.png', name: 'Jibon', stock: 8314, sales: 699 },
    { image: 'assets/images/pran.png', name: 'Pran Mineral Water', stock: 692, sales: 425 },
    { image: 'assets/images/fresh.png', name: 'Drinking Mineral Water', stock: 859, sales: 370 },
    { image: 'assets/images/sale-bug.png', name: 'Sale Bug', stock: 1054, sales: 270 },
  ];
}
