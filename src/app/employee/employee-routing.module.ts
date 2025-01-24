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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
