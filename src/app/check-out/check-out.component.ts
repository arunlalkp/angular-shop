import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {

  shipping = {
    name:'',
    city:'',
    addressLine1:'',
    addressLine2:''
  }
  subscription:Subscription
  cart:ShoppingCart


  constructor( 
    private orderService:OrderService,
    private shoppingCartService:ShoppingCartService) { }

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart()
    this.subscription = cart$.subscribe(cart => this.cart = cart)
  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }

  placeOrder(){
    console.log(this.shipping)
    let order = {
      datePlace: new Date().getTime(),
      shipping: this.shipping,
      items: this.cart._items.map(i => {
        return {
          product: {
            title: i.title,
            imageUrl: i.imageUrl,
            price: i.price
          },
          quantity: i.quantity,
          totalPrice: i.totalPrice
        }
      })

    }

    this.orderService.storeOrder(order);
  }

}
