import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { OfferListComponent } from './Product/Offer/offer-list/offer-list.component';
import { OfferAddComponent } from './Product/Offer/offer-add/offer-add.component';
import { ProductCatagoryComponent } from './product-catagory/product-catagory.component';
import { WebSocketMessagingComponent } from './web-socket-messaging/web-socket-messaging.component';
import { OfferEditComponent } from './Product/Offer/offer-edit/offer-edit.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { ReturnComponent } from './return/return.component';
import { BarcodePrintComponent } from './barcode-print/barcode-print.component';
import { ReturnAddComponent } from './return/return-add/return-add.component';
import { BundleProductComponent } from './BundleProduct/bundle-product/bundle-product.component';
import { BundleAddComponent } from './BundleProduct/bundle-add/bundle-add.component';





const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then((m) => m.EmployeeModule),
  },


  { path: "navbar", component: SideNavbarComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'product', component: ProductComponent},
  // { path: 'productlist', component: ListComponent },
  // { path: 'Addproduct', component: AddComponent },
  // { path: 'productEdit/:pId', component: EditComponent },
  // { path: 'sell', component: SellComponent },
  // { path: 'damageList', component: DamageListComponent },
  // { path: 'damageAdd', component: DamageAddComponent },
  { path: 'suppliarList', component: SupplierListComponent },
  // { path: 'offerProduct', component: OfferListComponent},
  // { path: 'offerAdd', component: OfferAddComponent},
  // { path: 'offerEdit/:oId', component: OfferEditComponent},

  // { path: 'bundleProduct', component: BundleProductComponent},
  // { path: 'bundleAdd', component: BundleAddComponent},
  // { path: 'catagory', component: ProductCatagoryComponent},
  // { path: 'return', component: ReturnComponent},
  // { path: 'returnAdd', component: ReturnAddComponent},
  // { path: 'barcode', component: BarcodePrintComponent},

  { path: 'massage', component: WebSocketMessagingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
