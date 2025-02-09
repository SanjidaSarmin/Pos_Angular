import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ProductListComponent } from './Components/Product/product-list/product-list.component';
import { ProductCatagoryComponent } from './Components/Product/product-catagory/product-catagory.component';
import { OfferListComponent } from './Components/Promotions/Offer/offer-list/offer-list.component';
import { OfferAddComponent } from './Components/Promotions/Offer/offer-add/offer-add.component';
import { OfferEditComponent } from './Components/Promotions/Offer/offer-edit/offer-edit.component';
import { BundleListComponent } from './Components/Promotions/Bundle/bundle-list/bundle-list.component';
import { ReturnListComponent } from './Components/Return/return-list/return-list.component';
import { ReturnAddComponent } from './Components/Return/return-add/return-add.component';
import { ReturnEditComponent } from './Components/Return/return-edit/return-edit.component';
import { BarcodeCreateComponent } from './Components/Barcode/barcode-create/barcode-create.component';
import { BarcodePrintComponent } from './Components/Barcode/barcode-print/barcode-print.component';
import { PrintComponent } from './Components/Barcode/print/print.component';
import { DamageListComponent } from './Components/Damage/damage-list/damage-list.component';
import { SellDetailsComponent } from './Components/Sell/sell-details/sell-details.component';
import { SellReportComponent } from './Components/Sell/sell-report/sell-report.component';
import { ConfirmSaleComponent } from './Components/Sell/confirm-sale/confirm-sale.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmployeeBranchListComponent } from './Components/Branch/employee-branch-list/employee-branch-list.component';
import { StockAlertComponent } from './Components/stock-alert/stock-alert.component';
import { SupplierListComponent } from './Components/supplier-list/supplier-list.component';
import { MembershipAddComponent } from './Components/Customer/membership-add/membership-add.component';
import { MembershipEditComponent } from './Components/Customer/membership-edit/membership-edit.component';
import { MembershipListComponent } from './Components/Customer/membership-list/membership-list.component';
import { SalesComponent } from './Components/sales/sales.component';





@NgModule({
  declarations: [
    LandingPageComponent,
    NavbarComponent,
    ProductListComponent,
    ProductCatagoryComponent,
    OfferListComponent,
    OfferAddComponent,
    OfferEditComponent,
    BundleListComponent,
    ReturnListComponent,
    ReturnAddComponent,
    ReturnEditComponent,
    BarcodeCreateComponent,
    BarcodePrintComponent,
    PrintComponent,
    DamageListComponent,
    SellDetailsComponent,
    SellReportComponent,
    ConfirmSaleComponent,
    EmployeeBranchListComponent,
    StockAlertComponent,
    SupplierListComponent,
    MembershipAddComponent,
    MembershipEditComponent,
    MembershipListComponent,
    SalesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    NgxPaginationModule
  ]
})
export class EmployeeModule { }
