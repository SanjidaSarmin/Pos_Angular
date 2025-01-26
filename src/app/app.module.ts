import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProductComponent } from './Product/product.component';
import { SupplierListComponent } from './Supplier/supplier-list/supplier-list.component';
import { OfferAddComponent } from './Product/Offer/offer-add/offer-add.component';
import { OfferEditComponent } from './Product/Offer/offer-edit/offer-edit.component';
import { OfferListComponent } from './Product/Offer/offer-list/offer-list.component';
import { WebSocketMessagingComponent } from './web-socket-messaging/web-socket-messaging.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { Event, NavigationEnd, Router } from '@angular/router';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent,
    ProductComponent,
    SupplierListComponent,
    OfferAddComponent,
    OfferEditComponent,
    OfferListComponent,
    WebSocketMessagingComponent,
    SideNavbarComponent,
 
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
