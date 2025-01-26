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

const routes: Routes = [
  { path: "navbar", component:SidebarComponent },

  { path: "productList", component:ProductListComponent },
  { path: "productAdd", component:ProductAddComponent },
  { path: 'productEdit/:pId', component:ProductEditComponent },

  { path: "categoryList", component:CategoryListComponent },
  { path: "categoryAdd", component:CategoryAddComponent },
  { path: "categoryEdit/:cId", component:CategoryEditComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchManagerRoutingModule { }
