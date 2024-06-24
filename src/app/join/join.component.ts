import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Join } from '../model/join';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css'],
})
export class JoinComponent implements OnInit, OnDestroy {
  newJoin: Join = { type: 'INNER', table: '', on: '' };
  joins: Join[] = [];
  private subscription: Subscription;

  constructor(private queryService: QueryService) {}

  addJoin() {
    this.queryService.addJoin(this.newJoin);
    this.newJoin = { type: 'INNER', table: '', on: '' };
    this.refreshJoins();
  }

  ngOnInit(): void {
    this.refreshJoins();
  }

  refreshJoins() {
    this.subscription = this.queryService.joinsSubject.subscribe(
      (joins: Join[]) => {
        this.joins = joins;
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onDelete(type: string, table: string, on: string) {
    this.queryService.deleteJoin(type, table, on);
    this.refreshJoins();
  }
}
