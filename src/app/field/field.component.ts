import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Field } from '../model/field';
import { Table } from '../model/table';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrl: './field.component.css',
})
export class FieldComponent implements OnInit, OnDestroy {
  newField: Field = { name: '', table: '' };
  tables: Table[] = [];
  fields: Field[] = [];
  isChecked = false;
  isReadonly = false;
  private subscriptionTable: Subscription;
  private subscriptionField: Subscription;

  constructor(private queryService: QueryService) {}

  refreshFields() {
    this.subscriptionField = this.queryService.fieldsSubject.subscribe(
      (fields: Field[]) => {
        this.fields = fields;
      }
    );
  }

  addField() {
    this.queryService.addField(this.newField);
    this.newField = { name: '', table: '' };
    this.isChecked = false;
  }

  ngOnInit(): void {
    this.subscriptionTable = this.queryService.tablesSubject.subscribe(
      (tables: Table[]) => {
        this.tables = tables;
      }
    );
    this.refreshFields();
  }

  onDelete(table: string, name: string) {
    this.queryService.deleteField(table, name);
    this.refreshFields();
  }

  ngOnDestroy(): void {
    this.subscriptionTable.unsubscribe();
    this.subscriptionField.unsubscribe();
  }

  onCheckboxChange(event: Event) {
    this.isChecked = (event.target as HTMLInputElement).checked;
    if(this.isChecked){
      this.newField.name = '*';
      this.isReadonly = true;
    }else{
      this.newField.name = '';
      this.isReadonly = false;
    }
    
  }
}
