import { Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { SignupComponent } from './components/pages/signup/signup.component';

export const routes: Routes = [
    {path:"", redirectTo:"login", pathMatch: 'full'},
    {path:"login",component:LoginComponent},
    {path:"signup", component:SignupComponent}
];
