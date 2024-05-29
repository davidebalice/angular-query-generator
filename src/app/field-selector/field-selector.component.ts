import { Component } from '@angular/core';
import { Field } from '../model/field';
import { QueryGeneratorService } from '../services/query-generator.service';

@Component({
  selector: 'app-field-selector',
  templateUrl: './field-selector.component.html',
  styleUrl: './field-selector.component.css'
})
export class FieldSelectorComponent {
  newField: Field = { name: '', table: '' };

  constructor(private queryGeneratorService: QueryGeneratorService) {}

  addField() {
    this.queryGeneratorService.addField(this.newField);
    this.newField = { name: '', table: '' };
  }
}
