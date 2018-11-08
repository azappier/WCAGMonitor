import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./modules/login/login.component";
import {RegisterComponent} from "./modules/register/register.component";
import {ForgotPasswordComponent} from "./modules/forgot-password/forgot-password.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { menuID: 'LOGIN' }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: { menuID: 'REGISTER' }
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent,
    data: { menuID: 'FORGOT_PASSWORD' }
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
