import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SearchpageComponent } from './components/searchpage/searchpage.component';
import { HttpClientModule } from '@angular/common/http';
import { BonusfavoritesComponent } from './components/bonusfavorites/bonusfavorites.component';
@NgModule({
  declarations: [
    AppComponent,
    SearchpageComponent,
    BonusfavoritesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
