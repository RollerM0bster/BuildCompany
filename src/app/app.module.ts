import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialListComponent } from './lists/material-list/material-list.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { OrdersComponent } from './lists/orders/orders.component';
import { SuppliersComponent } from './lists/suppliers/suppliers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { HttpClientModule } from '@angular/common/http';
import { AppGuard } from 'src/helpers/app-guard';
import { AuthService } from '../helpers/auth.service';
import { AuthGuard } from 'src/helpers/auth-guard';
import { CreateCardComponent } from './create-card/create-card.component';
import { CardsComponent } from './lists/cards/cards.component';
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
    CreateCardComponent,
    CardsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule

  ],
  providers: [AuthService, AppGuard, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
