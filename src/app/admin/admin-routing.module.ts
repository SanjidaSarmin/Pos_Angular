import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SideNavbarComponent } from './Components/side-navbar/side-navbar.component';

const routes: Routes = [
   { path: '', redirectTo: 'mainpage', pathMatch: 'full' },
    { path: "mainpage", component: SideNavbarComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
