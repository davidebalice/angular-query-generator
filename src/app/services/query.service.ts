import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Field } from '../model/field';
import { Join } from '../model/join';
import { Order } from '../model/order';
import { Table } from '../model/table';
import { Where } from '../model/where';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  private tables: Table[] = [];
  private fields: Field[] = [];
  private joins: Join[] = [];
  private where: Where[] = [];
  private orders: Order[] = [];

  private querySubject = new BehaviorSubject<string>(this.getQuery());
  tablesSubject = new Subject<Table[]>();
  fieldsSubject = new Subject<Field[]>();

  constructor() {}

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

  getTables() {
    this.tablesSubject.next(this.tables);
  }

  getTablesObservable() {
    return this.tablesSubject.asObservable();
  }

  deleteTable(name: string) {
    this.tables = this.tables.filter((table) => table.name !== name);
    this.tablesSubject.next(this.tables);
    this.updateQuery();
  }

  addField(field: Field) {
    this.fields.push(field);
    this.updateQuery();
  }

  getFields() {
    this.fieldsSubject.next(this.fields);
  }

  addWhere(where: Where) {
    this.where.push(where);
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
    query += this.fields.map((f) => `${f.table}.${f.name}`).join(', ');
    query +=
      ' FROM ' +
      this.tables
        .map((t) => t.name + (t.alias ? ` AS ${t.alias}` : ''))
        .join(', ');

    if (this.joins.length > 0) {
      query +=
        ' ' +
        this.joins.map((j) => `${j.type} JOIN ${j.table} ON ${j.on}`).join(' ');
    }

    if (this.orders.length > 0) {
      query +=
        ' ORDER BY ' +
        this.orders.map((o) => `${o.field} ${o.direction}`).join(', ');
    }
    if (this.tables.length > 0 && this.fields.length > 0) {
      return query;
    } else {
      return null;
    }
  }
}
