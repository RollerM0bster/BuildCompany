import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialListComponent } from './Materials/material-list/material-list.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { OrdersComponent } from './orders/orders.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import {HttpClientModule} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import { AppGuard } from 'src/helpers/app-guard';
import { AuthService } from '../helpers/auth.service';
import { AuthGuard } from 'src/helpers/auth-guard';
import { CreateStateComponent } from './create-state/create-state.component';
@NgModule({
  declarations: [
    AppComponent,
    MaterialListComponent,
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    SuppliersComponent,
    NavbarComponent,
    CreateOrderComponent,
    CreateStateComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  
  ],
  providers: [CookieService,AppGuard,AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
