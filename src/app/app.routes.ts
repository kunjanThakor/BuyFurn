import { Routes } from '@angular/router';
import { MainContaierComponent } from './Component/main-contaier/main-contaier.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { HomeComponent } from './Component/home/home.component';
import { SliderComponent } from './Component/slider/slider.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { ShopComponent } from './Component/shop/shop.component';
import { ProductDetailComponent } from './Component/product-detail/product-detail.component';

export const routes: Routes = [
    {
        path: '', component: MainContaierComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'slider', component: SliderComponent },
            { path: 'contact', component: ContactUsComponent },
            { path: 'about', component: AboutUsComponent },
            { path: 'shop', component: ShopComponent },
            { path: 'product', component: ProductDetailComponent },
        ]
    },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent }


];
