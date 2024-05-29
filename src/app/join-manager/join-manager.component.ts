import { Component } from '@angular/core';
import { Join } from '../model/join';
import { QueryGeneratorService } from '../services/query-generator.service';

@Component({
  selector: 'app-join-manager',
  templateUrl: './join-manager.component.html',
  styleUrls: ['./join-manager.component.css']
})
export class JoinManagerComponent {
  newJoin: Join = { type: 'INNER', table: '', on: '' };

  constructor(private queryGeneratorService: QueryGeneratorService) {}

  addJoin() {
    this.queryGeneratorService.addJoin(this.newJoin);
    this.newJoin = { type: 'INNER', table: '', on: '' };
  }
}
