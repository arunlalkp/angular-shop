import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from './models/product';
import { take } from 'rxjs/operators';
import { ShoppingItem } from './models/shopping-item'

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

  async getCart(){
    let cartId = await this.getOrCreateCartId()
    console.log(`inside getCart -- cartId = ${cartId}`)
    return this.db.object('/shopping-carts/'+ cartId)
  }

  private getItem(cartId:string, productId:string){
    return this.db.object('/shopping-carts/' + cartId + '/items/' + productId)
  }

  private async getOrCreateCartId():Promise<string>{
    let cartId = localStorage.getItem('cartId')
    if(cartId) return cartId

    let result = await this.create()
    localStorage.setItem('cartId', result.key)
    return result.key
   
  }

  async addToCart(product:Product){
    this.updateItemQuantity(product, 1)
  }

  async removeFromCart(product:Product){
    this.updateItemQuantity(product, -1)
  }

  private async updateItemQuantity(product:Product, change:number){
    let cartId = await this.getOrCreateCartId()
    let item$ = this.getItem(cartId, product.key)
    
    item$.valueChanges()
      .pipe(take(1))
      .subscribe((item: ShoppingItem) => {
        console.log(item)
        item$.update({product, quantity : ( item?.quantity || 0) + change})
      })
  }
}


