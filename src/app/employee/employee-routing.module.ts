import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProductListComponent } from './Components/Product/product-list/product-list.component';
import { OfferListComponent } from './Components/Promotions/Offer/offer-list/offer-list.component';
import { ProductCatagoryComponent } from './Components/Product/product-catagory/product-catagory.component';
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
import { EmployeeBranchListComponent } from './Components/Branch/employee-branch-list/employee-branch-list.component';
import { StockAlertComponent } from './Components/stock-alert/stock-alert.component';
import { SupplierListComponent } from './Components/supplier-list/supplier-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: "main", component: LandingPageComponent },
  { path: "navbar", component: NavbarComponent },
  
  { path: "productlist", component: ProductListComponent },
  { path: "stockalert", component: StockAlertComponent },
  
  { path: "catagory", component: ProductCatagoryComponent },
  { path: 'damageList', component: DamageListComponent },
  { path: 'branch', component: EmployeeBranchListComponent },
  { path: 'supplier', component: SupplierListComponent },
  

  { path: "offer", component: OfferListComponent },
  { path: "offerAdd", component: OfferAddComponent },
  { path: 'offerEdit/:oId', component: OfferEditComponent },

  { path: "bundleProduct", component: BundleListComponent },


  { path: 'return', component: ReturnListComponent},
  { path: 'returnAdd', component: ReturnAddComponent},
  { path: 'returnEdit/:rId', component: ReturnEditComponent},

  { path: 'barcode', component: BarcodeCreateComponent},
  { path: 'Print', component: PrintComponent},
  { path: 'barcodePrint', component: BarcodePrintComponent},

 

  { path: 'sell', component: SellDetailsComponent },
  { path: 'sellreport', component: SellReportComponent }, 
  { path: 'selldetails', component: SellDetailsComponent },
  { path: 'confirmPayment/:type', component: ConfirmSaleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
