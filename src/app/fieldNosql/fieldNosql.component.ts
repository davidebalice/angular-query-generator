import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { FieldNosql } from '../model/fieldNosql';
import { Table } from '../model/table';
import { QueryService } from '../services/nosqlQuery.service';

@Component({
  selector: 'app-field-nosql',
  templateUrl: './fieldNosql.component.html',
  styleUrl: './fieldNosql.component.css',
})
export class FieldNosqlComponent implements OnInit, OnDestroy {
  newField: FieldNosql = { name: '' };
  tables: Table[] = [];
  fields: FieldNosql[] = [];
  isChecked = false;
  isReadonly = false;
  private subscriptionTable: Subscription;
  private subscriptionField: Subscription;

  constructor(private queryService: QueryService) {}

  refreshFields() {
    this.subscriptionField = this.queryService.fieldsSubject.subscribe(
      (fields: FieldNosql[]) => {
        this.fields = fields;
      }
    );
  }


  addField() {
    this.queryService.addField(this.newField);
    this.newField = { name: '' };
    //this.isChecked = false;
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
