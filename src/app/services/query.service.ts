import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
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
  private wheres: Where[] = [];
  private orders: Order[] = [];

  private querySubject = new BehaviorSubject<string>(this.getQuery());
  tablesSubject = new BehaviorSubject<Table[]>(this.tables);
  fieldsSubject = new BehaviorSubject<Field[]>(this.fields);
  wheresSubject = new BehaviorSubject<Where[]>(this.wheres);
  joinsSubject = new BehaviorSubject<Join[]>(this.joins);
  ordersSubject = new BehaviorSubject<Order[]>(this.orders);
  Subject: any;

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

  deleteField(table: string, name: string) {
    this.fields = this.fields.filter(
      (field) => !(field.name === name && field.table === table)
    );
    this.fieldsSubject.next(this.fields);
    this.updateQuery();
  }

  addWhere(where: Where) {
    this.wheres.push(where);
    this.updateQuery();
  }

  deleteWhere(field: string, typeCondition: string, condition: string) {
    this.wheres = this.wheres.filter(
      (where) =>
        !(
          where.field === field &&
          where.typeCondition === typeCondition &&
          where.condition === condition
        )
    );
    this.wheresSubject.next(this.wheres);
    this.updateQuery();
  }

  addJoin(join: Join) {
    this.joins.push(join);
    this.updateQuery();
  }

  deleteJoin(type: string, table: string, on: string) {
    this.joins = this.joins.filter(
      (join) => !(join.type === type && join.table === table && join.on === on)
    );
    this.joinsSubject.next(this.joins);
    this.updateQuery();
  }

  addOrder(order: Order) {
    this.orders.push(order);
    this.updateQuery();
  }

  deleteOrder(field: string, direction: string) {
    this.orders = this.orders.filter(
      (order) => !(order.field === field && order.direction === direction)
    );
    this.ordersSubject.next(this.orders);
    this.updateQuery();
  }

  getQuery(): string {
    let query = 'SELECT ';
    query += this.fields.map((f) => `${f.table}.${f.name}`).join(', ');
    query +=
      '\nFROM ' +
      this.tables
        .map((t) => t.name + (t.alias ? ` AS ${t.alias}` : ''))
        .join(', ');

    if (this.joins.length > 0) {
      query += '\n';
      query +=
        '' +
        this.joins.map((j) => `${j.type} JOIN ${j.table} ON ${j.on}`).join('\n');
    }

    if (this.wheres.length > 0) {
      query += '\n';
      query += 'WHERE ';
      query += this.wheres
        .map((w, index) =>
          index === 0
            ? `${w.field} ${w.typeCondition} ${w.condition}`
            : `AND ${w.field} ${w.typeCondition} ${w.condition}`
        )
        .join('\n');
    }

    if (this.orders.length > 0) {
      query += '\n';
      query +=
        'ORDER BY ' +
        this.orders.map((o) => `${o.field} ${o.direction}`).join(', ');
    }
    if (this.tables.length > 0 && this.fields.length > 0) {
      return query;
    } else {
      return null;
    }
  }
}
