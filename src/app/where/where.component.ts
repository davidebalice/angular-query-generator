import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Where } from '../model/where';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-where',
  templateUrl: './where.component.html',
  styleUrls: ['./where.component.css'],
})
export class WhereComponent implements OnInit, OnDestroy {
  newCondition: Where = { field: '', typeCondition: '=', condition: '' };
  wheres: Where[] = [];
  private subscription: Subscription;

  constructor(private queryService: QueryService) {}

  ngOnInit(): void {
    this.refreshWheres();
  }

  refreshWheres() {
    this.subscription = this.queryService.wheresSubject.subscribe(
      (wheres: Where[]) => {
        this.wheres = wheres;
      }
    );
  }

  addWhere() {
    this.queryService.addWhere(this.newCondition);
    this.newCondition = { field: '', typeCondition: '=', condition: '' };
    this.refreshWheres();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDelete(field: string, typeCondition: string, condition: string) {
    this.queryService.deleteWhere(field, typeCondition, condition);
    this.refreshWheres();
  }
}
