import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { AdminOrdersComponent } from './components/admin-orders/admin-orders.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { ProductFormComponent } from './components/product-form/product-form.component';



@NgModule({
  declarations: [
    ProductFormComponent,
    AdminOrdersComponent,
    AdminProductsComponent,
  ],
  imports: [
    SharedModule
  ]
})
export class AdminModule { }