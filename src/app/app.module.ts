import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { FieldNosqlComponent } from './fieldNosql/fieldNosql.component';
import { FilterNosqlComponent } from './filterNosql/filterNosql.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderComponent } from './order/order.component';
import { OrderNosqlComponent } from './orderNosql/orderNosql.component';
import { SqlPreviewComponent } from './sql-preview/sql-preview.component';
import { TableComponent } from './table/table.component';
import { WhereComponent } from './where/where.component';
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
    FieldNosqlComponent,
    FilterNosqlComponent,
    OrderNosqlComponent,
  ],
  //providers: [QueryGeneratorService],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  bootstrap: [AppComponent],
})
export class AppModule {}
