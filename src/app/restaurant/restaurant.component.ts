import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleService } from '../google.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

    restaurants: Array<object>;
    query: string;
    constructor(
        private route: ActivatedRoute,
        private googleApi: GoogleService
    ) { }

  ngOnInit() {
      this.query = this.route.snapshot.paramMap.get('query');
      console.log(this.query);
      this.googleApi.getRestaurants(this.query).subscribe((res: any) => {
          console.log(res);
          this.restaurants = res.results.map((restaurant) => {
              return {
                  place_id: restaurant.place_id,
                  name: restaurant.name,
                  rating: restaurant.rating,
                  price_level: restaurant.price_level,
                  photo_url: this.googleApi.getPhotoURL(restaurant.photos[0].photo_reference),
                  types: restaurant.types,
                  num_ratings: restaurant.user_ratings_total,
                  address: restaurant.vicinity
                  // vicinity is address?
              };
          });
          // this.restaurants = res.results;
      });
  }

}
