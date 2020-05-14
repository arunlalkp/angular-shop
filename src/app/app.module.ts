import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomFormsModule } from 'ng2-validation';
import { environment } from 'src/environments/environment';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { BsNavbarComponent } from './bs-navbar/bs-navbar.component';
import { ProductFilterComponent } from '../app/shopping/components/products/product-filter/product-filter.component';
import { ShippingFormComponent } from './shopping/components/shipping-form/shipping-form.component';
import { ShoppingCartSummaryComponent } from './shopping/components/shopping-cart-summary/shopping-cart-summary.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    BsNavbarComponent,
    routingComponents,
    ProductFilterComponent,
    
    ShoppingCartSummaryComponent,
    ShippingFormComponent

  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule,
    FormsModule,
    CustomFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
