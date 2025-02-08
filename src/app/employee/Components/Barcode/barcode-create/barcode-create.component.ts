import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductService } from 'src/app/Service/Product/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from 'src/app/Service/Branch/branch.service';

@Component({
  selector: 'app-barcode-create',
  templateUrl: './barcode-create.component.html',
  styleUrls: ['./barcode-create.component.scss']
})
export class BarcodeCreateComponent implements OnInit {


constructor(
    private proService: ProductService,
    private router: Router,
    private route: ActivatedRoute,
    private branchService: BranchService
  ) { }

  branches: any[] = [];
  products: any[] = [];

  ngOnInit(): void {
    this.branchService.getBranchData().subscribe((val: any) => {
      this.branches = val;
    });

    this.proService.getAllData().subscribe((val: any) => {
      this.products = val;
    });
  }


  selectedBranch: string = '';

  
  productNameControl = new FormControl('');
  selectedProduct: string = ''; // Currently selected product name
  selectedProducts: any[] = []; // List of products added to the table

  
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