import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UnlockaccComponent } from './unlockacc/unlockacc.component';

const routes: Routes = [
{
 path:"registration", component:SignUpComponent
},
{
  path:"login", component:SignInComponent
},
{
  path:"forgotpass", component:ForgotPasswordComponent
},
{
  path:"unlockAcc", component:UnlockaccComponent
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
