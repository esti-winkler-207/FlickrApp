import { HttpClient } from '@angular/common/http';
import { UrlResolver } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CallApiFlickerService {

  url : string = `https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&extras=url_s&api_key=aabca25d8cd75f676d3a74a72dcebf21&format=json&nojsoncallback=1&page=`

  constructor(private http:HttpClient) { }


  getAllPictures(page : string): Observable<any> {
    return this.http.get<Observable<any>>(this.url + page);
  }




}
