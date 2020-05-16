import { Component, OnInit } from '@angular/core';
import { MessagingService } from 'src/app/shared/services/messaging.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private messagingSevie: MessagingService) { }

  ngOnInit(): void {
    // this.messagingSevie.requestPremission()
  }

}
