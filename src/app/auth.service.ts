import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth) {
    this.user$ = afAuth.authState
   }

  login(){
    console.log(`login`)
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }

  logout(){
    console.log(`logout`)
    this.afAuth.signOut()

  }
}
