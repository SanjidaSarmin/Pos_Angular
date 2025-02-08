import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { WebSocketMessagingComponent } from './web-socket-messaging/web-socket-messaging.component';
import { SideNavbarComponent } from './side-navbar/side-navbar.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';





const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "home", component: HomeComponent },
  {
    path: 'employee',
    loadChildren: () =>
      import('./employee/employee.module').then((m) => m.EmployeeModule),
  },
  {
    path: 'manager',
    loadChildren: () =>
      import('./branch-manager/branch-manager.module').then((m) => m.BranchManagerModule),
  },

  { 
    path: 'admin',
    loadChildren: () => 
      import('./admin/admin.module').then(m => m.AdminModule),
   },

  


  { path: "navbar", component: SideNavbarComponent },
  { path: 'dashboard', component: DashboardComponent },
  // { path: 'product', component: ProductComponent},
  // { path: 'offerProduct', component: OfferListComponent},
  // { path: 'offerAdd', component: OfferAddComponent},
  // { path: 'offerEdit/:oId', component: OfferEditComponent},

  // { path: 'bundleProduct', component: BundleProductComponent},
  // { path: 'bundleAdd', component: BundleAddComponent},

  { path: 'massage', component: WebSocketMessagingComponent},
  { path: 'login', component: LoginComponent},
  { path: 'signup', component: SignupComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
