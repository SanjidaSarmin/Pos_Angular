import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductListComponent } from './components/Product/product-list/product-list.component';
import { ProductAddComponent } from './components/Product/product-add/product-add.component';
import { ProductEditComponent } from './components/Product/product-edit/product-edit.component';
import { CategoryListComponent } from './components/Category/category-list/category-list.component';
import { CategoryAddComponent } from './components/Category/category-add/category-add.component';
import { CategoryEditComponent } from './components/Category/category-edit/category-edit.component';
import { BundleListComponent } from './components/Promotion/Bundle/bundle-list/bundle-list.component';
import { BundleAddComponent } from './components/Promotion/Bundle/bundle-add/bundle-add.component';
import { BundleEditComponent } from './components/Promotion/Bundle/bundle-edit/bundle-edit.component';
import { OfferAddComponent } from './components/Promotion/Offers/offer-add/offer-add.component';
import { OfferEditComponent } from './components/Promotion/Offers/offer-edit/offer-edit.component';
import { OfferListComponent } from './components/Promotion/Offers/offer-list/offer-list.component';

const routes: Routes = [
  { path: "navbar", component:SidebarComponent },

  { path: "productlist", component:ProductListComponent },
  { path: "productAdd", component:ProductAddComponent },
  { path: 'productEdit/:pId', component:ProductEditComponent },

  { path: "categoryList", component:CategoryListComponent },
  { path: "categoryAdd", component:CategoryAddComponent },
  { path: "categoryEdit/:cId", component:CategoryEditComponent },

   { path: "bundleProduct", component: BundleListComponent },
    { path: "bundleAdd", component: BundleAddComponent },
    { path: "bundleEdit/:bId", component: BundleEditComponent },

    { path: "offerList", component: OfferListComponent },
      { path: "offerAdd", component: OfferAddComponent },
      { path: 'offerEdit/:oId', component: OfferEditComponent },

    // { path: 'damageList', component: DamageListComponent },
    //   { path: 'damageAdd', component: DamageAddComponent },
    //   { path: 'damageEdit/:dId', component: DamageEditComponent },
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchManagerRoutingModule { }
