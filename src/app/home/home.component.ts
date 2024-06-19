import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tab: string = "table";
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadServers(){
    this.router.navigate(['/nosql']);
  }

  onLoadServer(id: number){
    this.router.navigate(['/nosql', id, 'edit' ],{queryParams: {allowEdit: '1'}});
  }
  
  onSetTab(tab: string){
    this.tab = tab;
  }
}
