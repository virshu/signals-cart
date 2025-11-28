import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { authGuard } from './guard/auth.guard';

export const routes: Routes = [
    {   
        path: '',
        component: HomeComponent,
    },
    { path: 'login', component: LoginComponent },  
    { path: 'checkout', component: CheckoutComponent, canActivate: [authGuard] },  
];
