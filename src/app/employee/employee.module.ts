import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './Components/landing-page/landing-page.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeRoutingModule } from './employee-routing.module';
import { ProductListComponent } from './Components/Product/product-list/product-list.component';
import { ProductAddComponent } from './Components/Product/product-add/product-add.component';
import { ProductEditComponent } from './Components/Product/product-edit/product-edit.component';
import { ProductCatagoryComponent } from './Components/Product/product-catagory/product-catagory.component';
import { OfferListComponent } from './Components/Promotions/Offer/offer-list/offer-list.component';
import { OfferAddComponent } from './Components/Promotions/Offer/offer-add/offer-add.component';
import { OfferEditComponent } from './Components/Promotions/Offer/offer-edit/offer-edit.component';



@NgModule({
  declarations: [
    LandingPageComponent,
    NavbarComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductCatagoryComponent,
    OfferListComponent,
    OfferAddComponent,
    OfferEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
