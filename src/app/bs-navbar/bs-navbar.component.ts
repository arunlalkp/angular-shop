import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../shared/models/app-user';
import { ShoppingCartService } from '../shopping-cart.service';
import { ShoppingCart } from '../shared/models/shopping-cart';
import { Observable } from 'rxjs';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit  {
  public isMenuCollapsed = true; //used to toggle navbar menu on mobile
  appUser: AppUser;
  cart$: Observable<ShoppingCart>  

  constructor(
    private auth:AuthService,
    private shoppingCartService:ShoppingCartService
    ) {
    

  }
  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser
    })

    this.cart$ = (await this.shoppingCartService.getCart())

  }

   logout(){
    this.auth.logout()
   }

}
