
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Field } from '../model/field';
import { Join } from '../model/join';
import { Order } from '../model/order';
import { Table } from '../model/table';

@Injectable({
  providedIn: 'root'
})
export class QueryGeneratorService {
  private tables: Table[] = [];
  private fields: Field[] = [];
  private joins: Join[] = [];
  private orders: Order[] = [];

  private querySubject = new BehaviorSubject<string>(this.getQuery());

  constructor() {
    console.log('QueryGeneratorService instantiated');
  }

  getQueryObservable() {
    return this.querySubject.asObservable();
  }

  private updateQuery() {
    this.querySubject.next(this.getQuery());
  }

  addTable(table: Table) {
    this.tables.push(table);
    this.updateQuery();
  }

  addField(field: Field) {
    this.fields.push(field);
    this.updateQuery();
  }

  addJoin(join: Join) {
    this.joins.push(join);
    this.updateQuery();
  }

  addOrder(order: Order) {
    this.orders.push(order);
    this.updateQuery();
  }

  getQuery(): string {
    let query = 'SELECT ';
    query += this.fields.map(f => `${f.table}.${f.name}`).join(', ');
    query += ' FROM ' + this.tables.map(t => t.name + (t.alias ? ` AS ${t.alias}` : '')).join(', ');

    if (this.joins.length > 0) {
      query += ' ' + this.joins.map(j => `${j.type} JOIN ${j.table} ON ${j.on}`).join(' ');
    }

    if (this.orders.length > 0) {
      query += ' ORDER BY ' + this.orders.map(o => `${o.field} ${o.direction}`).join(', ');
    }

    return query;
  }
}
