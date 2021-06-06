import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from 'src/helpers/app-guard';
import { AuthGuard } from 'src/helpers/auth-guard';
import { CreateOrderComponent } from './create-order/create-order.component';
import { CreateStateComponent } from './create-state/create-state.component';
import { LoginComponent } from './login/login.component';
import { MaterialListComponent } from './materials/material-list/material-list.component';
import { OrdersComponent } from './orders/orders.component';
import { RegisterComponent } from './register/register.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
const routes: Routes = [
  { path: 'materials', component: MaterialListComponent, canActivate: [AppGuard]},
  { path: 'login', component: LoginComponent, canActivate:[AuthGuard] },
  { path: 'register', component: RegisterComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'orders', component: OrdersComponent, canActivate: [AppGuard]},
  { path: 'suppliers', component: SuppliersComponent, canActivate: [AppGuard]},
  { path: 'create_order', component: CreateOrderComponent, canActivate: [AppGuard] },
  {path:'add_card',component:CreateStateComponent, canActivate: [AppGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
