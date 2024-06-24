import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FilterNosql } from '../model/filterNosql';
import { FieldNosql } from '../model/fieldNosql';
import { OrderNosql } from '../model/orderNosql';
import { Table } from '../model/table';
import { Where } from '../model/where';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  private tables: Table[] = [];
  private fields: FieldNosql[] = [];
  private filters: FilterNosql[] = [];
  private wheres: Where[] = [];
  private orders: OrderNosql[] = [];

  private querySubject = new BehaviorSubject<string>(this.getQueryNoSql());
  tablesSubject = new BehaviorSubject<Table[]>(this.tables);
  fieldsSubject = new BehaviorSubject<FieldNosql[]>(this.fields);
  filtersSubject = new BehaviorSubject<FilterNosql[]>(this.filters);
  wheresSubject = new BehaviorSubject<Where[]>(this.wheres);
  ordersSubject = new BehaviorSubject<OrderNosql[]>(this.orders);
  Subject: any;

  constructor() {}

  getQueryObservable() {
    return this.querySubject.asObservable();
  }

  private updateQuery() {
    this.querySubject.next(this.getQueryNoSql());
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

  addField(field: FieldNosql) {
    this.fields.push(field);
    this.updateQuery();
  }

  getFields() {
    this.fieldsSubject.next(this.fields);
  }

  deleteField(table: string, name: string) {
    this.fields = this.fields.filter(
      (field) => !(field.name === name)
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

 

  addOrder(order: OrderNosql) {
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

  /*
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
*/


getQueryNoSql(): string {
  let query = '{';
  if (this.fields.length > 0) {
    query += `"fields": [${this.fields.map(field => `"${field}"`).join(', ')}], `;
  }
  if (this.filters.length > 0) {
    query += `"filters": {${this.filters.map(filter => `"${filter.field}": "${filter.value}"`).join(', ')}}, `;
  }
  if (this.orders.length > 0) {
    query += `"order": {${this.orders.map(order => `"${order.field}": "${order.direction}"`).join(', ')}}, `;
  }
  query += '}';
  return query;
}
}