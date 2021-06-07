import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from 'src/helpers/app-guard';
import { AuthGuard } from 'src/helpers/auth-guard';
import { CardsComponent } from './lists/cards/cards.component';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CreateCardComponent } from './create-card/create-card.component';
import { LoginComponent } from './login/login.component';
import { MaterialListComponent } from './lists/material-list/material-list.component';
import { OrdersComponent } from './lists/orders/orders.component';
import { RegisterComponent } from './register/register.component';
import { SuppliersComponent } from './lists/suppliers/suppliers.component';
const routes: Routes = [
  { path: 'materials', component: MaterialListComponent, canActivate: [AppGuard]},
  { path: 'login', component: LoginComponent, canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'orders', component: OrdersComponent, canActivate: [AppGuard]},
  { path: 'suppliers', component: SuppliersComponent, canActivate: [AppGuard]},
  { path: 'create_order', component: CreateOrderComponent, canActivate: [AppGuard] },
  {path:'add_card',component:CreateCardComponent, canActivate: [AppGuard]},
  {path:'cards',component:CardsComponent, canActivate:[AppGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
