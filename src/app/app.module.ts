import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListComponent } from './Product/list/list.component';
import { AddComponent } from './Product/add/add.component';
import { EditComponent } from './Product/edit/edit.component';
import { ProductComponent } from './Product/product.component';
import { SellComponent } from './sell/sell.component';
import { DamageListComponent } from './DamageProduct/damage-list/damage-list.component';
import { DamageAddComponent } from './DamageProduct/damage-add/damage-add.component';
import { SupplierListComponent } from './Supplier/supplier-list/supplier-list.component';
import { OfferAddComponent } from './Product/Offer/offer-add/offer-add.component';
import { OfferEditComponent } from './Product/Offer/offer-edit/offer-edit.component';
import { OfferListComponent } from './Product/Offer/offer-list/offer-list.component';
import { ProductCatagoryComponent } from './product-catagory/product-catagory.component';
import { WebSocketMessagingComponent } from './web-socket-messaging/web-socket-messaging.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { ReturnComponent } from './return/return.component';
import { BarcodePrintComponent } from './barcode-print/barcode-print.component';
import { ReturnAddComponent } from './return/return-add/return-add.component';
import { BundleProductComponent } from './BundleProduct/bundle-product/bundle-product.component';
import { BundleAddComponent } from './BundleProduct/bundle-add/bundle-add.component';
import { BundleEditComponent } from './BundleProduct/bundle-edit/bundle-edit.component';
import { Event, NavigationEnd, Router } from '@angular/router';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ListComponent,
    AddComponent,
    EditComponent,
    ProductComponent,
    SellComponent,
    DamageListComponent,
    DamageAddComponent,
    SupplierListComponent,
    OfferAddComponent,
    OfferEditComponent,
    OfferListComponent,
    ProductCatagoryComponent,
    WebSocketMessagingComponent,
    SideNavbarComponent,
    ReturnComponent,
    BarcodePrintComponent,
    ReturnAddComponent,
    BundleProductComponent,
    BundleAddComponent,
    BundleEditComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
  router.events.subscribe((event: Event) => {
    if (event instanceof NavigationEnd) {
      console.log('NavigationEnd:', event.urlAfterRedirects);
    }
  });
}
}
