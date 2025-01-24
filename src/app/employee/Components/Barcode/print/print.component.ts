import { Component } from '@angular/core';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent {
  barcodeItems = [
    {
      name: 'laptop',
      barcodeImage: 'path_to_barcode_image', // Replace with dynamic barcode generation or a static image URL
      code: '10750517',
      mrp: '200'
    },
    // Add more items as needed
  ];

  cancel() {
    // Logic to close the dialog
    console.log('Dialog cancelled');
  }

  print() {
    // Logic to print the dialog content
    window.print();
  }
}
