import { Component } from '@angular/core';
import { Table } from '../model/table';
import { QueryGeneratorService } from '../services/query-generator.service';

@Component({
  selector: 'app-table-selector',
  templateUrl: './table-selector.component.html',
  styleUrl: './table-selector.component.css'
})

export class TableSelectorComponent {
  newTable: Table = { name: '', alias: '' };

 

  constructor(private queryGeneratorService: QueryGeneratorService) {}

  addTable() {
    this.queryGeneratorService.addTable(this.newTable);
    this.newTable = { name: '', alias: '' };
  }
}


