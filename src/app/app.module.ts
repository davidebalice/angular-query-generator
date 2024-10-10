import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FieldComponent } from './field/field.component';
import { HomeComponent } from './home/home.component';
import { JoinComponent } from './join/join.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { OrderComponent } from './order/order.component';
import { SqlPreviewComponent } from './sql-preview/sql-preview.component';
import { TableComponent } from './table/table.component';
import { WhereComponent } from './where/where.component';
//import { QueryGeneratorService } from './services/query-generator.service';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './header/header.component';
import { InfoComponent } from './info/info.component';
import { SideComponent } from './side/side.component';

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
    HeaderComponent,
    InfoComponent,
    SideComponent,
  ],
  //providers: [QueryGeneratorService],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes),
  ],
  bootstrap: [AppComponent],
  providers: [provideAnimationsAsync()],
})
export class AppModule {}
