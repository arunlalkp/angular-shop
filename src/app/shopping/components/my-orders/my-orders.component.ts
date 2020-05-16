import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../shared/services/order.service';
import { AuthService } from '../../../shared/services/auth.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders$: Observable<any>;

  constructor(
    authService: AuthService,
    orderService: OrderService) {
    this.orders$ = authService.user$
    .pipe(switchMap(user => orderService.getOrdersByUser(user.uid).valueChanges() ));
   }

  ngOnInit(): void {
  }

}
