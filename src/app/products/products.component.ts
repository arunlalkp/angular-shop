import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from '../product.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { switchMap } from 'rxjs/operators';
import { ShoppingCartService } from '../shopping-cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent  implements OnInit, OnDestroy{
  products: Product[] = [];
  filteredProducts: Product[] = [];
  category;
  cart:any
  subscription:Subscription

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private shoppingCartService: ShoppingCartService
  ) {
    productService
      .getAll()
      .pipe(
        switchMap((product) => {
          this.products = product;
          return this.route.queryParamMap;
        })
      )
      .subscribe((params) => {
        this.category = params.get('category');

        this.filteredProducts = this.category
          ? this.products.filter((p) => p.category == this.category)
          : this.products;
      });

  }

  async ngOnInit(){
    this.subscription = (await this.shoppingCartService.getCart()).valueChanges()
      .subscribe(cart => {
        console.log(cart)
        this.cart = cart
      })

  }

  ngOnDestroy(){
    this.subscription.unsubscribe()
  }
}
