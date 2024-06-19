import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Table } from '../model/table';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css',
})
export class TableComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  newTable: Table = { name: '', alias: '' };
  tables: Table[] = [];

  constructor(private queryService: QueryService) {}

  refreshTables() {
    //this.queryService.getTablesObservable();
    this.subscription = this.queryService.tablesSubject.subscribe(
      (tables: Table[]) => {
        this.tables = tables;
        //this.queryService.getTables();
      }
    );
  }

  addTable() {
    this.queryService.addTable(this.newTable);
    this.newTable = { name: '', alias: '' };
    this.queryService.getTables();
  }

  onDelete(name: string) {
    this.queryService.deleteTable(name);
    this.refreshTables();
  }

  ngOnInit(): void {
    this.refreshTables();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
