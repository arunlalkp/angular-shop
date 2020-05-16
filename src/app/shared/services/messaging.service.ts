import { Injectable } from '@angular/core';
import { AngularFireMessaging } from "@angular/fire/messaging"

@Injectable({
  providedIn: 'root'
})
export class MessagingService {

  
  constructor(private fcm:AngularFireMessaging) {
    
   }

   requestPremission(){
     console.log(`Inside requestPermission`)
     this.fcm.requestToken.subscribe(
       (token)=> console.log(`Permission Granted! ${token}`),
       error => console.log(error)
     )
   }

   listen(){
     this.fcm.messages.subscribe(
       (message) => console.log(message)
     )
   }
}
