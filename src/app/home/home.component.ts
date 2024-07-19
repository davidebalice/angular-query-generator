import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  tab: string = 'table';
  selectedTab: string = 'table';

  constructor(private router: Router) {}

  ngOnInit() {}

  onSetTab(tab: string) {
    this.tab = tab;
    this.selectedTab = tab;
  }
}
