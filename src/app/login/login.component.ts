import { Component, OnInit } from '@angular/core';

//firebase
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase from 'firebase'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  constructor(private afAuth:AngularFireAuth) {

    // afAuth.authState.subscribe(user=> {
    //   console.log(user)
    // })

   }


  login(){
    this.afAuth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
  }


}
