import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { OrderService } from '../../../shared/services/order.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Order } from '../../../shared/models/order';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Subscription } from 'rxjs';

@Component({
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: ['./shipping-form.component.css'],
})
export class ShippingFormComponent implements OnInit, OnDestroy {
  @Input('cart') cart: ShoppingCart;
  userId: string;
  subscription: Subscription;
  shipping = {
    name: '',
    city: '',
    addressLine1: '',
    addressLine2: '',
  };

  constructor(
    private router: Router,
    private authService: AuthService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.subscription = this.authService.user$.subscribe(
      (user) => (this.userId = user.uid)
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  async placeOrder() {
    let order = new Order(this.userId, this.shipping, this.cart);
    let result = await this.orderService.storeOrder(order);
    console.log(result);
    this.router.navigate(['/order-success', result.key]);
  }
}
