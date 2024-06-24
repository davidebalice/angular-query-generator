import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from '../model/order';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-order-nosql',
  templateUrl: './orderNosql.component.html',
  styleUrls: ['./orderNosql.component.css'],
})
export class OrderNosqlComponent implements OnInit, OnDestroy {
  newOrder: Order = { field: '', direction: 'ASC' };
  orders: Order[] = [];
  private subscription: Subscription;

  constructor(private queryService: QueryService) {}

  addOrder() {
    this.queryService.addOrder(this.newOrder);
    this.newOrder = { field: '', direction: 'ASC' };
    this.refreshOrders();
  }

  ngOnInit(): void {
    this.refreshOrders();
  }

  refreshOrders() {
    this.subscription = this.queryService.ordersSubject.subscribe(
      (orders: Order[]) => {
        this.orders = orders;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDelete(field: string, direction: string) {
    this.queryService.deleteOrder(field, direction);
    this.refreshOrders();
  }
}
