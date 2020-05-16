import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable, of, empty } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { AppUser } from '../models/app-user';
import { switchMap } from 'rxjs/operators';
import { UserService } from './user.service';
// import 'rxjs/add/observable/empty'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private userService: UserService,
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute,
    private router: Router) {

    this.user$ = afAuth.authState;
   }

  login(){
    const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
  }

  logout(){
    console.log(`logout`);
    this.afAuth.signOut();
  }

  get appUser$(): Observable<AppUser>{
    return this.user$
    .pipe(switchMap(user => {

      /**
       * @TODO Return an empty observable if there is no user to solve error while logout
       *
       *  if(user) this.userService.get(user.uid).valueChanges()
       *  return empty()
       */

      return this.userService.get(user.uid).valueChanges();
    }));
  }
}
