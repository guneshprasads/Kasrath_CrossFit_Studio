import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RowoneComponent } from './rowone/rowone.component';
import { RowsecondComponent } from './rowsecond/rowsecond.component';
import { RowthirdComponent } from './rowthird/rowthird.component';
import { RowfourthComponent } from './rowfourth/rowfourth.component';
import { RowfiveComponent } from './rowfive/rowfive.component';
import { RowsixComponent } from './rowsix/rowsix.component';
import { RowsevenComponent } from './rowseven/rowseven.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RowoneComponent,
    RowsecondComponent,
    RowthirdComponent,
    RowfourthComponent,
    RowfiveComponent,
    RowsixComponent,
    RowsevenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
