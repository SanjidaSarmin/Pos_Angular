import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-barcode-print',
  templateUrl: './barcode-print.component.html',
  styleUrls: ['./barcode-print.component.scss']
})
export class BarcodePrintComponent {
 // Reactive form control for product name
 productNameControl = new FormControl('');
 selectedProduct: string = '';

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

 printOptions = [
   { name: 'productName', label: 'Product Name', selected: true },
   { name: 'productPrice', label: 'Product Price', selected: true },
   { name: 'vat', label: 'VAT', selected: false },
   { name: 'expiredDate', label: 'Expired Date', selected: false },
 ];

 paperSizes = ['A4 8.27" x 11.69"', 'Letter 8.5" x 11"'];
 selectedPaperSize: string = this.paperSizes[0];

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

 // Select a product from the suggestions
 selectProduct(product: any) {
   this.productNameControl.setValue(product.name);
   this.selectedProduct = product.name;
   this.filteredProducts = [];
 }

 // Remove a product from the table
 removeItem(item: any) {
   this.productList = this.productList.filter((i) => i !== item);
 }

 // Submit form data
 submit() {
   console.log('Submitted Data:', {
     selectedProduct: this.selectedProduct,
     productList: this.productList,
     printOptions: this.printOptions.filter((o) => o.selected),
     selectedPaperSize: this.selectedPaperSize,
   });
 }
}