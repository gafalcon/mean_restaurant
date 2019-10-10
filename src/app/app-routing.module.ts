import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { RestaurantComponent } from './restaurant/restaurant.component';


const routes: Routes = [
    { path: '', component: SearchComponent },
    { path: 'restaurant/:query', component: RestaurantComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
