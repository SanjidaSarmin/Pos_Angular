import { Component } from '@angular/core';

@Component({
  selector: 'app-product-catagory',
  templateUrl: './product-catagory.component.html',
  styleUrls: ['./product-catagory.component.scss']
})
export class ProductCatagoryComponent {
  categories = [
    { name: 'demo', code: '-', details: '-' },
    { name: 'bangla book', code: '-', details: '-' },
    { name: 'Thai Jewellery', code: '-', details: '-' },
    { name: 'Over Size Bangles', code: '-', details: '-' },
    { name: 'Baby Bangles', code: '-', details: '-' },
    { name: 'Jewellery', code: '-', details: '-' }
  ];
  
  searchTerm = '';
  filteredCategories = [...this.categories];

  search() {
    this.filteredCategories = this.categories.filter(category =>
      category.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}