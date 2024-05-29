import { Component } from '@angular/core';
import { Order } from '../model/order';
import { QueryGeneratorService } from '../services/query-generator.service';

@Component({
  selector: 'app-order-manager',
  templateUrl: './order-manager.component.html',
  styleUrls: ['./order-manager.component.css'],
})
export class OrderManagerComponent {
  newOrder: Order = { field: '', direction: 'ASC' };

  constructor(private queryGeneratorService: QueryGeneratorService) {}

  addOrder() {
    this.queryGeneratorService.addOrder(this.newOrder);
    this.newOrder = { field: '', direction: 'ASC' };
  }
}
