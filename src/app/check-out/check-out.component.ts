import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs';
import { ShoppingCart } from '../models/shopping-cart';
import { OrderService } from '../order.service';
import { AuthService } from '../auth.service';

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
  
  cart:ShoppingCart
  userId:string
  cartSubscription:Subscription
  userSubscription:Subscription


  constructor( 
    private authService:AuthService,
    private orderService:OrderService,
    private shoppingCartService:ShoppingCartService) { }

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart()
    this.cartSubscription = cart$.subscribe(cart => this.cart = cart)
    this.authService.user$.subscribe(user => this.userId = user.uid)
  }

  ngOnDestroy(){
    this.cartSubscription.unsubscribe()
    this.userSubscription.unsubscribe()
  }

  placeOrder(){
    console.log(this.shipping)
    let order = {
      userId: this.userId,
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
