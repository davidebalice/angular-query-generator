import { Component } from '@angular/core';
import { Where } from '../model/where';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-where',
  templateUrl: './where.component.html',
  styleUrls: ['./where.component.css'],
})
export class WhereComponent {
  newCondition: Where = { field: '', typeCondition: '=', condition: '' };

  constructor(private queryService: QueryService) {}

  addWhere() {
    this.queryService.addWhere(this.newCondition);
    this.newCondition = { field: '', typeCondition: '=', condition: '' };
  }
}
