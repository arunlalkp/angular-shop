import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase'
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>

  constructor(
    private afAuth: AngularFireAuth,
    private route: ActivatedRoute, private router: Router) {
    this.user$ = afAuth.authState
   }

  login(){
    let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/'
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  logout(){
    console.log(`logout`)
    this.afAuth.signOut()

  }
}
