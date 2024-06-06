import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TableComponent } from './table/table.component';
import { FieldComponent } from './field/field.component';
import { JoinComponent } from './join/join.component';
import { WhereComponent } from './where/where.component';
import { OrderComponent } from './order/order.component';
import { SqlPreviewComponent } from './sql-preview/sql-preview.component';
//import { QueryGeneratorService } from './services/query-generator.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'not-found', component: NotFoundComponent },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    TableComponent,
    FieldComponent,
    JoinComponent,
    WhereComponent,
    OrderComponent,
    SqlPreviewComponent,
  ],
  //providers: [QueryGeneratorService],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
