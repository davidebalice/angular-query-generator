import { Component } from '@angular/core';
import { Field } from '../model/field';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-field',
  templateUrl: './field.component.html',
  styleUrl: './field.component.css',
})
export class FieldComponent {
  newField: Field = { name: '', table: '' };

  constructor(private queryService: QueryService) {}

  addField() {
    this.queryService.addField(this.newField);
    this.newField = { name: '', table: '' };
  }
}
