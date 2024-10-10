import { Component } from '@angular/core';
import { QueryService } from '../services/query.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrl: './side.component.css',
})
export class SideComponent {
  examples: string[] = [];

  constructor(private queryService: QueryService) {}

  ngOnInit() {
    this.examples = Object.keys(this.queryService.getExamples());
  }

  populateExample(example: string) {
    this.queryService.populateExample(example);
  }
}
