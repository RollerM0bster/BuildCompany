import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateOrderComponent } from './create-order/create-order.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { MaterialListComponent } from './Materials/material-list/material-list.component';
import { HideNavService } from './navbar/hide-nav.service';
import { OrdersComponent } from './orders/orders.component';
import { RegisterComponent } from './register/register.component';
import { SuppliersComponent } from './suppliers/suppliers.component';

const routes: Routes = [
  {path: 'materials', component:MaterialListComponent},
  {path:'login',component:LoginComponent, canDeactivate:[HideNavService]},
  {path:'register',component:RegisterComponent},
  {path:'',redirectTo:'login', pathMatch:'full'},
  {path:'orders',component:OrdersComponent},
  {path:'logout',component:LogoutComponent},
  {path:'suppliers',component:SuppliersComponent},
  {path:'create-order',component:CreateOrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
