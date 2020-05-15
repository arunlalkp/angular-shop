import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductCardComponent } from './components/product-card/product-card.component';
import { ProductQuantityComponent } from './components/product-quantity/product-quantity.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CustomFormsModule } from 'ng2-validation';



@NgModule({
  declarations: [
    ProductCardComponent,
    ProductQuantityComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CustomFormsModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    CustomFormsModule,

    ProductCardComponent,
    ProductQuantityComponent,
  ]
})
export class SharedModule { }
