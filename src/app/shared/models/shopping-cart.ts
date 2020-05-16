import { ShoppingCartItem } from './shopping-cart-item';
import { Product } from './product';

export class ShoppingCart{
    items; // need to add here for avoiding compile time error, and this items refres to items in firebase data
    _items: ShoppingCartItem[] = []; // push items to _items for easy accessing in templete - array data

    constructor(private itemsMap: { [productId: string]: ShoppingCartItem }){
        // console.log(this.itemsMap)
        this.itemsMap = itemsMap || {};

        for (const productId in itemsMap){
            const item = itemsMap[productId];
            // console.log(item)
            this._items.push(new ShoppingCartItem({...item, key: productId}));
        }
    }

    getQuantity(product: Product){
        // console.log(`inside getQuantity`, this.itemsMap)
        // console.log(product)
        // console.log(`getQuantity after product`)
        if (this.itemsMap === {}) { return 0; }
        const item = this.itemsMap[product.key];
        return item ? item.quantity : 0;
      }

    get totalPrice(){
        let sum = 0;
        for (const productId in this._items){
            sum += this._items[productId].totalPrice;
        }
        return sum;
    }

    get totalItemsCount(){
        let count = 0;
        for (const productId in this.itemsMap) {
            count += this.itemsMap[productId].quantity;
        }
        return count;

    }
}
