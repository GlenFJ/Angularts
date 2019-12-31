import { StoreFirstGuard } from './storefirst.guard';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';
import { StoreModule } from './store/store.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './store/store.component';


const routes: Routes = [];

@NgModule({
  imports: [BrowserModule, StoreModule,
     RouterModule.forRoot([ 
        {path: "store", component:StoreComponent, canActivate:[StoreFirstGuard]},
        {path: "cart", component:CartDetailsComponent,canActivate:[StoreFirstGuard]},
        {path:"checkout", component:CheckoutComponent,canActivate: [StoreFirstGuard]},
        {path:"**", redirectTo:"/store"}
      ])],
     providers: [StoreFirstGuard],
  exports: [RouterModule]
})
export class AppRoutingModule { }
