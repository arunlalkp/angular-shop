import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit {

  shipping = {
    name:'',
    city:'',
    addressLine1:'',
    addressLine2:''
  }
  constructor() { }

  ngOnInit(): void {
  }

  placeOrder(){
    console.log(this.shipping)
  }

}
