import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
// import * as bcrypt from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(
    private http: Http
  ) { }

  getMainPageData(country_code: string, latlng: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS + '/api/client/home/' + country_code + '/' + latlng, option);
  }

}
