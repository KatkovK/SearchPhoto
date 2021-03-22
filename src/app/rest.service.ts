import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class RestService {

  constructor(private http: HttpClient) { }

  searchFoto(keyword: string, perPage: number = 12, page: number = 1): Observable<any> {
    const url = 'https://www.flickr.com/services/rest/?method=flickr.photos.search&';
    const params = `api_key=${environment.flickr.key}&text=${keyword}&format=json&nojsoncallback=1&per_page=${perPage}&page=${page}`;

    return this.http.get(url + params).pipe(
      map(
        (res: any) => {
          res.photos.photo.forEach((photo: any) => {
            photo.url = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}`;
          });

          return res;
        }
      )
    )
  }
}
