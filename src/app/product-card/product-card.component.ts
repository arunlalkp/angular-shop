import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/product';
import { ShoppingCartService } from '../shopping-cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input('product') product:Product
  @Input('show-actions') showActions:boolean = true
  @Input('shopping-cart') shoppingCart:any


  constructor(private cartService:ShoppingCartService) { 
    // console.log(`inside product card comp -- ${this.product}`)
  }

  addToCart(){
    this.cartService.addToCart(this.product);
  }

  removeFromCart(){
    this.cartService.removeFromCart(this.product)
  }

  getQuantity(){
    // console.log(this.shoppingCart)
    if(!this.shoppingCart) return 0

    let item = this.shoppingCart.itemsMap[this.product.key]
    return item ? item.quantity : 0
  }

  

}
