import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import {AuthguardGuard} from './authguard.Guard';
import { UserService} from './user.service';
import {Ng2Webstorage} from 'ngx-webstorage';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { MyPurchasesComponent } from './my-purchases/my-purchases.component';
import { NewAdComponent } from './new-ad/new-ad.component';
import { NewProductComponent } from './new-product/new-product.component';
import { OffersComponent } from './offers/offers.component';
import { ProfileComponent } from './profile/profile.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { SubscribeComponent } from './subscribe/subscribe.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    LoginFormComponent,
    MyPurchasesComponent,
    NewAdComponent,
    NewProductComponent,
    OffersComponent,
    ProfileComponent,
    SearchProductComponent,
    ShoppingComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng2Webstorage,
RouterModule.forRoot([

{
path: 'newproduct',
canActivate : [AuthguardGuard],
component : NewProductComponent
},
{
path: 'mypurchases',
canActivate : [AuthguardGuard],
component : MyPurchasesComponent
},
{path: 'offers/:id',
canActivate : [AuthguardGuard],
component: OffersComponent
},
{
path: 'shop',
component : ShoppingComponent
},
{
path: 'newad',
component : NewAdComponent
},
{
path: 'login',
component : LoginFormComponent
},
{
path: 'dashboard',
canActivate : [AuthguardGuard],
component : DashboardComponent
},
{
path: '',
component : SearchProductComponent
},
{
path: 'profile',
canActivate : [AuthguardGuard],
component : ProfileComponent
},
{
path: 'subscribe',
component : SubscribeComponent
},
{ path: '**', redirectTo: '' }


])
  ],
providers: [UserService, AuthguardGuard ],
  bootstrap: [AppComponent]
})
export class AppModule { }
