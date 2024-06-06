import { Component } from '@angular/core';
import { Order } from '../model/order';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  newOrder: Order = { field: '', direction: 'ASC' };

  constructor(private queryService: QueryService) {}

  addOrder() {
    this.queryService.addOrder(this.newOrder);
    this.newOrder = { field: '', direction: 'ASC' };
  }
}
