import { Component, ElementRef, ViewChild } from '@angular/core';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-barcode-print',
  templateUrl: './barcode-print.component.html',
  styleUrls: ['./barcode-print.component.scss']
})
export class BarcodePrintComponent {
  barcodeValue: string = '123456789'; // Default barcode value

  @ViewChild('barcodeContainer', { static: false }) barcodeContainer!: ElementRef;

  // Generate barcode using JsBarcode
  generateBarcode(): void {
    if (this.barcodeValue) {
      JsBarcode('#barcode', this.barcodeValue, {
        format: 'CODE128',
        lineColor: '#000',
        width: 2,
        height: 50,
        displayValue: true
      });
    } else {
      alert('Please enter a value for the barcode.');
    }
  }

  // Print barcode
  printBarcode(): void {
    const printContents = this.barcodeContainer.nativeElement.innerHTML;
    const printWindow = window.open('', '', 'width=600,height=400');
    if (printWindow) {
      printWindow.document.write('<html><head><title>Print Barcode</title></head><body>');
      printWindow.document.write(printContents);
      printWindow.document.write('</body></html>');
      printWindow.document.close();
      printWindow.print();
    }
  }
}