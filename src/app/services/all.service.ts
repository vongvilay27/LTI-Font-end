import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AllService {

  constructor(
    private http: Http
  ) { }

  getAttractionses(country_code: string, latlng: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/all/attractions/'
      + country_code + '/' + latlng, option);
  }

  getRestaurants(country_code: string, latlng: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/all/restaurant/'
      + country_code + '/' + latlng, option);
  }

  getShelters(country_code: string, latlng: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/all/shelter/'
      + country_code + '/' + latlng, option);
  }

  getTransportations(country_code: string, latlng: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/type/transportation/'
      + country_code + '/' + latlng, option);
  }

  getTourCompanies(country_code: string, latlng: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/all/company/' + country_code
      + '/' + latlng, option);
  }

  getAnothers(country_code: string, latlng: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/all/another/' + country_code
      + '/' + latlng, option);
  }

}
