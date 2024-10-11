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
  error: string = 'Insert at least one table and one field';
  private querySubscription: Subscription;
  isCopied: boolean = false;

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

  copyToClipboard() {
    if (this.query) {
      navigator.clipboard
        .writeText(this.query)
        .then(() => {
          this.isCopied = true;
          setTimeout(() => {
            this.isCopied = false;
          }, 2000);
        })
        .catch((err) => {
          console.error('Error: ', err);
        });
    }
  }
}
