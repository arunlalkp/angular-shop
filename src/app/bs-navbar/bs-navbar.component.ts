import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent  {
  public isMenuCollapsed = true; //used to toggle navbar menu on mobile

  constructor(public auth:AuthService) {
   }

   logout(){
    this.auth.logout()
   }

}
