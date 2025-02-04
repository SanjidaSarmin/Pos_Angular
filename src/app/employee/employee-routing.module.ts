import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { AppRoutingModule } from '../app-routing.module';
import { ProductListComponent } from './Components/Product/product-list/product-list.component';
import { ProductAddComponent } from './Components/Product/product-add/product-add.component';
import { ProductEditComponent } from './Components/Product/product-edit/product-edit.component';
import { OfferListComponent } from './Components/Promotions/Offer/offer-list/offer-list.component';
import { ProductCatagoryComponent } from './Components/Product/product-catagory/product-catagory.component';
import { OfferAddComponent } from './Components/Promotions/Offer/offer-add/offer-add.component';
import { OfferEditComponent } from './Components/Promotions/Offer/offer-edit/offer-edit.component';
import { BundleListComponent } from './Components/Promotions/Bundle/bundle-list/bundle-list.component';
import { BundleAddComponent } from './Components/Promotions/Bundle/bundle-add/bundle-add.component';
import { BundleEditComponent } from './Components/Promotions/Bundle/bundle-edit/bundle-edit.component';
import { ReturnListComponent } from './Components/Return/return-list/return-list.component';
import { ReturnAddComponent } from './Components/Return/return-add/return-add.component';
import { ReturnEditComponent } from './Components/Return/return-edit/return-edit.component';
import { BarcodeCreateComponent } from './Components/Barcode/barcode-create/barcode-create.component';
import { BarcodePrintComponent } from './Components/Barcode/barcode-print/barcode-print.component';
import { PrintComponent } from './Components/Barcode/print/print.component';
import { DamageListComponent } from './Components/Damage/damage-list/damage-list.component';
import { DamageAddComponent } from './Components/Damage/damage-add/damage-add.component';
import { DamageEditComponent } from './Components/Damage/damage-edit/damage-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: "main", component: LandingPageComponent },
  { path: "navbar", component: NavbarComponent },
  
  { path: "productlist", component: ProductListComponent },
  { path: "productAdd", component: ProductAddComponent },
  { path: 'productEdit/:pId', component: ProductEditComponent },

  { path: "catagory", component: ProductCatagoryComponent },

  { path: "offer", component: OfferListComponent },
  { path: "offerAdd", component: OfferAddComponent },
  { path: 'offerEdit/:oId', component: OfferEditComponent },

  { path: "bundleProduct", component: BundleListComponent },
  { path: "bundleAdd", component: BundleAddComponent },
  { path: "bundleEdit/:bId", component: BundleEditComponent },

  { path: 'return', component: ReturnListComponent},
  { path: 'returnAdd', component: ReturnAddComponent},
  { path: 'returnEdit/:rId', component: ReturnEditComponent},

  { path: 'barcode', component: BarcodeCreateComponent},
  { path: 'Print', component: PrintComponent},
  { path: 'barcodePrint', component: BarcodePrintComponent},

  { path: 'damageList', component: DamageListComponent },
  { path: 'damageAdd', component: DamageAddComponent },
  { path: 'damageEdit/:dId', component: DamageEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
