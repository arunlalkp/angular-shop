import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CategoryService } from '../category.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { switchMap } from 'rxjs/operators'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  products:Product[] = [];
  filteredProducts:Product[] = []
  categories$;
  category;

  constructor(
    private productService:ProductService,
    private categoryService:CategoryService,
    private route: ActivatedRoute) { 
    productService.getAll()
    .pipe(
      switchMap(product => {
        this.products = product
        return this.route.queryParamMap
      })
    ).subscribe(params => {
      this.category = params.get('category')
  
      this.filteredProducts = this.category ? 
        this.products.filter(p => p.category == this.category) :
        this.products;
    })

    this.categories$ = categoryService.getAll()

    

  }

 

}
