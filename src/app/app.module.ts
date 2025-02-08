import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Event, NavigationEnd, Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { WebSocketMessagingComponent } from './web-socket-messaging/web-socket-messaging.component';
import { NgxPaginationModule } from 'ngx-pagination';









@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WebSocketMessagingComponent,
    LoginComponent,
    SignupComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule
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
