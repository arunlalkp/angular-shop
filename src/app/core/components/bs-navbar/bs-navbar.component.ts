import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../shared/services/auth.service';
import { AppUser } from '../../../shared/models/app-user';
import { ShoppingCartService } from '../../../shared/services/shopping-cart.service';
import { ShoppingCart } from '../../../shared/models/shopping-cart';
import { Observable } from 'rxjs';
import { MessagingService } from 'src/app/shared/services/messaging.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent implements OnInit  {
  public isMenuCollapsed = true; // used to toggle navbar menu on mobile
  appUser: AppUser;
  cart$: Observable<ShoppingCart>;

  constructor(
    private messagingService: MessagingService,
    private auth: AuthService,
    private shoppingCartService: ShoppingCartService
    ) {


  }
  async ngOnInit(){
    this.auth.appUser$.subscribe(appUser => {
      this.appUser = appUser;
    });

    this.cart$ = (await this.shoppingCartService.getCart());
    // firebase messaging
    this.messagingService.requestPremission();
    this.messagingService.listen(); // has no result yet
  }

   logout(){
    this.auth.logout();
   }

}
