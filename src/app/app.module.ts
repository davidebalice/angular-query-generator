import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TableSelectorComponent } from './table-selector/table-selector.component';
import { FieldSelectorComponent } from './field-selector/field-selector.component';
import { JoinManagerComponent } from './join-manager/join-manager.component';
import { OrderManagerComponent } from './order-manager/order-manager.component';
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
    TableSelectorComponent,
    FieldSelectorComponent,
    JoinManagerComponent,
    OrderManagerComponent,
    SqlPreviewComponent,
  ],
  //providers: [QueryGeneratorService],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
