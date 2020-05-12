import { ShoppingCartItem } from './shopping-cart-item';

export class ShoppingCart{
    items; // need to add here for avoiding compile error, and this items refres to items in firebase data
    _items:ShoppingCartItem[] = [] // push items to _items for easy accessing in templete - array data

    constructor(public itemsMap: { [productId:string]:ShoppingCartItem }){
        for(let productId in itemsMap){
            let item = itemsMap[productId]
            this._items.push(new ShoppingCartItem(item.product, item.quantity))
        }
    }

    get totalPrice(){
        let sum:number = 0;
        for(let productId in this._items){
            sum += this._items[productId].totalPrice
        }
        return sum;
    }

    get totalItemsCount(){
        let count = 0;
        for(let productId in this.itemsMap) 
            count += this.itemsMap[productId].quantity
        return count

    }
}