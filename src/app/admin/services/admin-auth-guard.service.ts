import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { map } from 'rxjs/operators';
import { UserService } from '../../shared/services/user.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminAuthGuardService implements CanActivate {
  constructor(private auth: AuthService, private userService: UserService) {}

  // canActivate() {
  //   this.auth.user$.pipe(
  //     map(user => {
  //       return this.userService.get(user.uid);
  //     })
  //   ).subscribe(x => {

  //   })
  // }
  canActivate(): Observable<boolean> {
    return this.auth.appUser$
    .pipe(map(appUser => appUser.isAdmin));
   }
}


