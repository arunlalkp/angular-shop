import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import { take } from 'rxjs/operators';

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
  product={};

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoryService: CategoryService) { 

    this.categories$ = categoryService.getCategories();

    const id = this.route.snapshot.paramMap.get('id')
    if(id) this.product = this.productService.get(id).pipe(take(1)).subscribe(p => this.product = p )

  }

  ngOnInit(): void {
    console.log(`onInit`)
  }

  save(product){
    this.productService.create(product);
    this.router.navigate(['/admin/products'])
  }

}
