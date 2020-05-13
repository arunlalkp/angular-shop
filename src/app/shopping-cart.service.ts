import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Product } from './models/product';
import { take, map } from 'rxjs/operators';
import { ShoppingCartItem } from './models/shopping-cart-item'
import { ShoppingCart } from './models/shopping-cart';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(private db:AngularFireDatabase) { }

  create(){
    return this.db.list('/shopping-carts').push({
      dateCreated:new Date().getTime()
    })
  }

  async getCart() :Promise<Observable<ShoppingCart>> {
    let cartId = await this.getOrCreateCartId()
    // console.log(`inside getCart -- cartId = ${cartId}`)
    return this.db.object('/shopping-carts/'+ cartId).valueChanges()
      .pipe(map((x:ShoppingCart) => new ShoppingCart(x.items)))
  }

  private getItem(cartId:string, productId:string){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId)
  }

  private async getOrCreateCartId():Promise<string>{

    /**
     * @BUG____________________________________________
     * @TODO ** BUG ** Two CartIDs are created on start 
     * @BUG____________________________________________

     */

    // console.log(`get or create cart ID`)
    let cartId = localStorage.getItem('cartId')
    // console.log(`cartID from local -- ${cartId}`)

    if(cartId) {
      return cartId 
    } 
    else{
      let result = await this.create()
      // console.log(`no local cartID, so new CArtID = - ${result.key}`)
      localStorage.setItem('cartId', result.key)
      return result.key
    }

    
    
   
  }

  async addToCart(product:Product){
    this.updateItem(product, 1)
  }

  async removeFromCart(product:Product){
    this.updateItem(product, -1)
  }

  private async updateItem(product:Product, change:number){
    let cartId = await this.getOrCreateCartId()
    let item$ = this.getItem(cartId, product.key)
    
    item$.valueChanges()
      .pipe(take(1))
      .subscribe((item: ShoppingCartItem) => {
        // console.log(item)
        item$.update({
          title: product.title,
          imageUrl: product.imageUrl,
          price: product.price,
          quantity : ( item?.quantity || 0) + change})
      })
  }
}


