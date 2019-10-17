import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GoogleService } from '../google.service';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {

    restaurant: object;
    placeId: string;
    constructor(
        private route: ActivatedRoute,
        private googleApi: GoogleService
    ) { }

  ngOnInit() {
      this.placeId = this.route.snapshot.paramMap.get('id');
      console.log(this.placeId);
      this.googleApi.getPlaceDetails(this.placeId).subscribe((res: any) => {
          console.log(res);

          this.restaurant = {
              place_id: this.placeId,
              name: res.name,
              address: res.formatted_address,
              rating: res.rating,
              price_level: res.price_level,
              photo_url: this.googleApi.getPhotoURL(res.photos[0].photo_reference),
              num_ratings: res.user_ratings_total || 100,
              reviews: res.reviews || []
          };
      });
  }

}
