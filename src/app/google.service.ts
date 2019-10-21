import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import { exampleJson } from './example';
// import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleService {

    GOOGLE_API_KEY = environment.GOOGLE_API_KEY;
    API_URL = '/api';

    PHOTO_URL = `https://maps.googleapis.com/maps/api/place/photo?key=${this.GOOGLE_API_KEY}&maxwidth=400&photoreference=`;
   constructor(private http: HttpClient) { }

    getSearch(query: string) {
        return this.http.get(`${this.API_URL}/search?query=${query}`);
    }

    getRestaurants(query: string, city: string) {
        return this.http.get(`${this.API_URL}/restaurant/search?query=${query}&city=${city}`);
        // return of(exampleJson);
    }

    getPhotoURL(photoReference: string) {
        return this.PHOTO_URL + photoReference;
    }

    getPlaceDetails(placeId: string) {
        return this.http.get(`${this.API_URL}/restaurant/${placeId}`);
    }
}
