import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BranchService } from 'src/app/Service/Branch/branch.service';
import { PaymentService } from 'src/app/Service/Payment/payment.service';
import { PurchaseService } from 'src/app/Service/Purchase/purchase.service';
import { SuppliersService } from 'src/app/Service/Supplier/suppliers.service';

@Component({
  selector: 'app-purchase-edit',
  templateUrl: './purchase-edit.component.html',
  styleUrls: ['./purchase-edit.component.scss']
})
export class PurchaseEditComponent implements OnInit {

  constructor(
    private purchaseService: PurchaseService, 
    private branchService: BranchService,
    private supplierService: SuppliersService,
    private paymentMethodService: PaymentService, 
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  id: any;
  purchaseData: any;
  branches: any[] = [];
  paymentMethods: any[] = [];
  supplierList: any[] = [];

  purchaseForm: FormGroup = new FormGroup({
    id: new FormControl(),
    supplierId: new FormControl(),
    purchaseDate: new FormControl(),
    totalAmount: new FormControl(),
    due: new FormControl(),
    paid: new FormControl(),
    status: new FormControl(),
    paymentId: new FormControl(),
    receivedBy: new FormControl(),
    invoiceNumber: new FormControl(),
    branchId: new FormControl(),
  });


  onSubmit(): void {
    this.purchaseService.updateData(this.purchaseForm.value).subscribe((response: any) => {
      console.log("Purchase Form created successfully");
      this.router.navigateByUrl('/manager/purchaselist'); // Redirect to purchase list page
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['purId'];
    this.purchaseService.getById(this.id).subscribe((val: any) => {
      this.purchaseData = val;
      this.purchaseForm.patchValue(this.purchaseData);
    })

    this.branchService.getBranchData().subscribe((val: any) => {
      this.branches = val
    })
    this.supplierService.getAllData().subscribe((val: any) => {
      this.supplierList = val
    })
    this.paymentMethodService.getAllData().subscribe((val: any) => {
      this.paymentMethods = val
    })

  }
}
