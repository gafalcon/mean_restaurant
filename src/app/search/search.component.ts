import { Component, OnInit } from '@angular/core';
import { GoogleService } from '../google.service';
import { FormControl } from '@angular/forms';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

    searchForm: FormControl;
    // cityForm: FormControl;
    // cities = ['Albany', 'Saratoga', 'Schenectady', 'Troy', 'Manhattan', 'Brooklyn'];
    restaurants: Array<object>;

    constructor(
        private googleApi: GoogleService,
        // private router: Router
    ) {

        this.searchForm = new FormControl('');
        // this.cityForm = new FormControl(this.cities[0]);
    }

    // get city() { return this.cityForm.value; }
    get search_value() { return this.searchForm.value; }

    ngOnInit() {
    }

    onSubmit() {
        if (this.searchForm.value) {
            // this.router.navigate(['/restaurant/' + this.searchForm.value]);
            this.googleApi.getSearch(this.searchForm.value).subscribe((res: any) => {
            // this.googleApi.getRestaurants(this.searchForm.value, this.cityForm.value).subscribe((res: any) => {
                console.log(res);
                this.restaurants = res.results.map((restaurant) => {
                    console.log(restaurant);
                    return {
                        place_id: restaurant.place_id,
                        name: restaurant.name,
                        rating: restaurant.rating,
                        price_level: restaurant.price_level,
                        photo_url: restaurant.photos ? this.googleApi.getPhotoURL(restaurant.photos[0].photo_reference) : '',
                        types: restaurant.types,
                        num_ratings: restaurant.user_ratings_total,
                        address: restaurant.vicinity
                        // vicinity is address?
                    };
                });
            });
        }
    }

}
