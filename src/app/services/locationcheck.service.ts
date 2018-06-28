import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class LocationcheckService  {
  server: string;
  query: string;

  constructor(public httpService: Http) {
    this.server = 'https://api.wunderground.com';
  }

  getLocaWeater(lat: number, long: number) {
    this.query = '/api/b7e4ea3b9ecdbe54/conditions/q/' + lat + ',' + long + '.json';
    return this.httpService.get(this.server + this.query)
      .map((res) => {
        return res.json();
      })
      .catch((error) => {
        return Observable.throw(error.json() || 'Server error');
      });
  }
}
