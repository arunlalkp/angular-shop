import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { AppUser } from '../models/app-user';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
  public isMenuCollapsed = true; //used to toggle navbar menu on mobile
  appUser: AppUser;
  
  constructor(private auth:AuthService) {
    auth.appUser$.subscribe(appUser => {
      this.appUser = appUser
    })
  }

   logout(){
    this.auth.logout()
   }

}
