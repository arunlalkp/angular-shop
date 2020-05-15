import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductFilterComponent } from './components/products/product-filter/product-filter.component';
import { ShoppingCartSummaryComponent } from './components/shopping-cart-summary/shopping-cart-summary.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import { ProductsComponent } from './components/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';



@NgModule({
  declarations: [
    MyOrdersComponent,
    OrderSuccessComponent,
    ProductsComponent,
    CheckOutComponent,
    ProductFilterComponent,
    ShoppingCartSummaryComponent,
    ShoppingCartComponent,
    ShippingFormComponent 
  ],
  imports: [
    RouterModule,
    FormsModule,
    SharedModule,
    CommonModule
  ]
})
export class ShoppingModule { }
