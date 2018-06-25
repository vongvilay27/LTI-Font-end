import { environment } from './../../environments/environment';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import * as bcrypt from 'bcryptjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AttractionsService {

  constructor(private http: Http) { }
}
