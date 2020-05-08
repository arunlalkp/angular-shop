import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  /**
   * @TODO 
   *  * Add custom validations for forms ( n2-validator module is not working properly)
   */


  categories$;

  constructor(
    private router: Router,
    private productService: ProductService,
    private categoryService: CategoryService) { 
    this.categories$ = categoryService.getCategories();
  }
  ngOnInit(): void {
    // this.categories$.subscribe(da=> console.log(da))
  }

  save(product){
    this.productService.create(product);
    this.router.navigate(['/admin/products'])
  }

}
