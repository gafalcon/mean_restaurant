import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { RatingModule } from 'ng-starrating';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RestaurantComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      ReactiveFormsModule,
      FormsModule,
      RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
