import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialListComponent } from './Materials/material-list/material-list.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { OrdersComponent } from './orders/orders.component';
import { LogoutComponent } from './logout/logout.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CreateOrderComponent } from './create-order/create-order.component';
@NgModule({
  declarations: [
    AppComponent,
    MaterialListComponent,
    LoginComponent,
    RegisterComponent,
    OrdersComponent,
    LogoutComponent,
    SuppliersComponent,
    NavbarComponent,
    CreateOrderComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
