import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MaterialListComponent } from './Materials/material-list/material-list.component';

const routes: Routes = [
  {path: 'materials', component:MaterialListComponent},
  {path:'',redirectTo: 'login', pathMatch:'full'},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
