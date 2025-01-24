import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-barcode-print',
  templateUrl: './barcode-print.component.html',
  styleUrls: ['./barcode-print.component.scss']
})
export class BarcodePrintComponent implements OnInit {

  // List of branches (dropdown options)
  branches = [
    { id: '1', name: 'Branch 1' },
    { id: '2', name: 'Branch 2' },
    { id: '3', name: 'Branch 3' }
  ];
  selectedBranch: string = ''; 

  // Product search form control
  productNameControl = new FormControl('');
  selectedProduct: any = {}; // Store the full product object

  // Example list of products
  products = [
    { name: 'Laptop', code: 'lap-41759-20000' },
    { name: 'Mouse', code: 'mou-12345-67890' },
    { name: 'Keyboard', code: 'key-78654-12457' },
    { name: 'Monitor', code: 'mon-56432-78451' },
    { name: 'Printer', code: 'pri-98765-43210' },
  ];

  filteredProducts: any[] = [];
  productList = [
    { name: 'Laptop', code: '10750517', quantity: 10, unitPrice: 200 },
  ];

  // Print options
  printOptions = [
    { name: 'productName', label: 'Product Name', selected: true },
    { name: 'productPrice', label: 'Product Price', selected: true },
    { name: 'vat', label: 'VAT', selected: false },
    { name: 'expiredDate', label: 'Expired Date', selected: false },
  ];

  // Paper size options
  paperSizes = ['A4 8.27" x 11.69"', 'Letter 8.5" x 11"'];
  selectedPaperSize: string = this.paperSizes[0];

  constructor() { }

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  // Filter products based on input
  filterProducts() {
    const input = this.productNameControl.value?.toLowerCase() || '';
    if (input.trim() === '') {
      this.filteredProducts = [];
    } else {
      this.filteredProducts = this.products.filter((product) =>
        product.name.toLowerCase().includes(input)
      );
    }
  }

  // Search for products based on user input
  searchProduct() {
    const searchTerm = this.productNameControl.value;
    if (!searchTerm || searchTerm.trim() === '') {
      alert('Please enter a product name to search.');
      return;
    }

    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (this.filteredProducts.length === 0) {
      alert('No products found matching your search.');
    }
  }

  // Select a product from the suggestions
  selectProduct(product: any) {
    this.productNameControl.setValue(product.name);
    this.selectedProduct = product; // Store the full product object
    this.filteredProducts = [];
  }

  // Remove a product from the list
  removeItem(item: any) {
    this.productList = this.productList.filter((i) => i !== item);
  }

  // Submit form data
  submit() {
    console.log('Submitted Data:', {
      selectedBranch: this.selectedBranch,
      selectedProduct: this.selectedProduct,
      productList: this.productList,
      printOptions: this.printOptions.filter((o) => o.selected),
      selectedPaperSize: this.selectedPaperSize,
    });
  }
}