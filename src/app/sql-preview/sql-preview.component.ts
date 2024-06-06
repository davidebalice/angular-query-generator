import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-sql-preview',
  templateUrl: './sql-preview.component.html',
  styleUrls: ['./sql-preview.component.css'],
})
export class SqlPreviewComponent implements OnInit, OnDestroy {
  query: string = '';
  private querySubscription: Subscription;

  constructor(private queryService: QueryService) {}

  ngOnInit() {
    this.querySubscription = this.queryService
      .getQueryObservable()
      .subscribe((query) => {
        this.query = query;
      });
  }

  ngOnDestroy() {
    if (this.querySubscription) {
      this.querySubscription.unsubscribe();
    }
  }
}
