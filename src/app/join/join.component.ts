import { Component } from '@angular/core';
import { Join } from '../model/join';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.css'],
})
export class JoinComponent {
  newJoin: Join = { type: 'INNER', table: '', on: '' };

  constructor(private queryService: QueryService) {}

  addJoin() {
    this.queryService.addJoin(this.newJoin);
    this.newJoin = { type: 'INNER', table: '', on: '' };
  }
}
