import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class LocationcheckService  {
  constructor(public httpService: Http) {
  }

  getLocaWeater(lat: number, long: number) {
    const query = environment.API_ADDRESS + lat + ',' + long + '.json';
    return this.httpService.get(query);
  }
}
