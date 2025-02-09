import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/Service/Cart/cart.service';
import { SellService } from 'src/app/Service/Sell/sell.service';
import { SellItemService } from 'src/app/Service/SellItem/sell-item.service';

@Component({
  selector: 'app-confirm-sale',
  templateUrl: './confirm-sale.component.html',
  styleUrls: ['./confirm-sale.component.scss']
})
export class ConfirmSaleComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sellservice: SellService,
    private saleItemService : SellItemService) { }

    sellId:any;
 
  totalCost: number = 0;
  discount: number = 0;
  coupon: number = 0;
  tax: number = 0;
  shipping: number = 0;
  grandTotal: number = 0;
  customerPhone: string = '';
  cartItems: any[] = [];
  paymentMethod: string = '';
  paymentStatus: string = 'Payment Successful!';



  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log("Route Parameters:", params);

      this.paymentMethod = this.route.snapshot.params['type'];
      this.sellId = params['sellId']; // Store saleId properly

      console.log("Sale ID received:", this.sellId);

      if (!this.sellId) {
        console.error('Sale ID is missing');
        return;
      }

      this.loadCartData();
    }); 
    
  }
  loadCartData() {
    const cartData = this.sellservice.getCartData();
    if (cartData) {
      // this.sellId = sellId;
      this.totalCost = cartData.totalCost;
      this.discount = cartData.discount;
      this.coupon = cartData.coupon;
      this.tax = cartData.tax;
      this.shipping = cartData.shipping;
      this.grandTotal = cartData.grandTotal;
      this.customerPhone = cartData.customerPhone;
      this.cartItems = cartData.cartItems;
    }
  }

  formats = ['pdf', 'xls', 'docx', 'csv', 'html'];
  selectedFormat = 'pdf';

  printInvoice() {
    if (!this.sellId) {
      console.error('Sale ID is missing');
      return;
    }

    this.saleItemService.generateReport(this.sellId, this.selectedFormat).subscribe(response => {
      const blob = new Blob([response], { type: this.getMimeType(this.selectedFormat) });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `sales_invoice_${this.sellId}.${this.selectedFormat}`;
      a.click();
      window.URL.revokeObjectURL(url);
    }, error => {
      console.error('Error downloading report', error);
    });
  }

  private getMimeType(format: string): string {
    const types: { [key: string]: string } = {
      pdf: 'application/pdf',
      xls: 'application/vnd.ms-excel',
      docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      csv: 'text/csv',
      html: 'text/html'
    };
    return types[format] || 'application/octet-stream';
  }


  goHome() {
    this.router.navigate(['/employee/main']);
  }
}




