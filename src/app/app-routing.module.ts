import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppGuard } from 'src/helpers/app-guard';
import { AuthGuard } from 'src/helpers/auth-guard';
import { CreateOrderComponent } from './create-order/create-order.component';
import { LoginComponent } from './login/login.component';
import { MaterialListComponent } from './Materials/material-list/material-list.component';
import { OrdersComponent } from './orders/orders.component';
import { RegisterComponent } from './register/register.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
const routes: Routes = [
  { path: 'materials', component: MaterialListComponent, /*canActivate: [AppGuard]*/ },
  { path: 'login', component: LoginComponent, /*canActivate:[AuthGuard]*/ },
  { path: 'register', component: RegisterComponent,canActivate:[AuthGuard] },
  { path: '', redirectTo: 'materials', pathMatch: 'full' },
  { path: 'orders', component: OrdersComponent },
  { path: 'suppliers', component: SuppliersComponent },
  { path: 'create-order', component: CreateOrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//canActivate:[AuthGuard]