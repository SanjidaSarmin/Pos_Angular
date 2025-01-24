import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-barcode-create',
  templateUrl: './barcode-create.component.html',
  styleUrls: ['./barcode-create.component.scss']
})
export class BarcodeCreateComponent {
  // Branch dropdown data
  branches = [
    { id: '1', name: 'Branch 1' },
    { id: '2', name: 'Branch 2' },
    { id: '3', name: 'Branch 3' }
  ];
  selectedBranch: string = ''; // Currently selected branch

  // Form control for product name input
  productNameControl = new FormControl('');
  selectedProduct: string = ''; // Currently selected product name
  selectedProducts: any[] = []; // List of products added to the table

  // Example list of products to search from
  products = [
    { name: 'Laptop', code: 'lap-41759-20000' },
    { name: 'Mouse', code: 'mou-12345-67890' },
    { name: 'Keyboard', code: 'key-78654-12457' },
    { name: 'Monitor', code: 'mon-56432-78451' },
    { name: 'Printer', code: 'pri-98765-43210' }
  ];

  filteredProducts: any[] = []; // Filtered list for autocomplete suggestions

  // Options for print customization
  printOptions = [
    { name: 'productName', label: 'Product Name', selected: true },
    { name: 'productPrice', label: 'Product Price', selected: true },
    { name: 'vat', label: 'VAT', selected: false },
    { name: 'expiredDate', label: 'Expired Date', selected: false }
  ];

  // List of paper sizes
  paperSizes = ['45 mm x 35mm','60 mm x 40mm','A4 8.27" x 11.69"', 'Letter 8.5" x 11"', ];
  selectedPaperSize: string = this.paperSizes[0]; // Default selected paper size

  // Filter products based on input for autocomplete
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

  // Select a product from the autocomplete suggestions
  selectProduct(product: any) {
    // Check if the product is already in the table
    const existingProduct = this.selectedProducts.find(
      (p) => p.code === product.code
    );
    if (!existingProduct) {
      this.selectedProducts.push({ ...product, quantity: 1 }); // Add product with default quantity
    } else {
      alert('Product is already in the list.');
    }
    this.productNameControl.setValue(''); // Clear input field
    this.filteredProducts = []; // Clear suggestions
  }

  // Remove a product from the table
  removeProduct(product: any) {
    this.selectedProducts = this.selectedProducts.filter(
      (p) => p.code !== product.code
    );
  }

  // Submit form data
  submit() {
    console.log('Submitted Data:', {
      selectedBranch: this.selectedBranch,
      selectedProducts: this.selectedProducts,
      printOptions: this.printOptions.filter((o) => o.selected),
      selectedPaperSize: this.selectedPaperSize
    });
    alert('Form submitted successfully!');
  }

  searchProduct() {
    const searchTerm = this.productNameControl.value?.trim();
    if (!searchTerm) {
      alert('Please enter a product name to search.');
      return;
    }
  
    // Filter products based on the search term
    this.filteredProducts = this.products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  
    if (this.filteredProducts.length === 0) {
      alert('No products found matching your search.');
    } else {
      console.log('Filtered Products:', this.filteredProducts);
    }
  }
}