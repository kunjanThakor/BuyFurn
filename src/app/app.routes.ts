import { Routes } from '@angular/router';
import { MainContaierComponent } from './Component/main-contaier/main-contaier.component';
import { ContactUsComponent } from './Component/contact-us/contact-us.component';
import { AboutUsComponent } from './Component/about-us/about-us.component';
import { HomeComponent } from './Component/home/home.component';
import { SliderComponent } from './Component/slider/slider.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { FurnitureComponent } from './Component/furniture/furniture.component';
import { ProductDetailComponent } from './Component/product-detail/product-detail.component';
import { AdminComponent } from './Admin/admin.component';
import { DashbordcomponetComponent } from './Admin/dashbordcomponet/dashbordcomponet.component';
import { ProductComponent } from './Admin/product/product.component';
import { UsersComponent } from './Admin/users/users.component';
import { OtpComponent } from './Component/otp/otp.component';
import { AddProductComponent } from './Admin/add-product/add-product.component';
import { CartComponent } from './Component/cart/cart.component';

export const routes: Routes = [
    {
        path: '', component: MainContaierComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'slider', component: SliderComponent },
            { path: 'contact', component: ContactUsComponent },
            { path: 'about', component: AboutUsComponent },
            { path: 'furniture', component: FurnitureComponent },
            { path: 'product/:id', component: ProductDetailComponent },
            { path: 'cart', component: CartComponent },
            { path: 'profile', component: FurnitureComponent },

        ]
    },

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'verify-otp', component: OtpComponent },

    {
        path: 'admin', component: AdminComponent,
        children: [
            { path: '', component: DashbordcomponetComponent },
            { path: 'product', component: ProductComponent },
            { path: 'users', component: UsersComponent },
            { path: 'addproduct', component: AddProductComponent },
            { path: 'product/:id', component: ProductDetailComponent },
        ]
    }
];
