import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class TypeService {

  constructor(
    private http: Http
  ) { }

  getTypes() {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS + '/api/client/type/all', option);
  }

  getAttractionsTypes() {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS + '/api/client/type/attractions', option);
  }

  getTypeAttractionses(type_id: string, country_code: string, latlng: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/type/attractions/' + type_id
      + '/' + country_code + '/' + latlng, option);
  }

  getTypeRestaurants(type_id: string, country_code: string, latlng: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/type/restaurant/' + type_id
      + '/' + country_code + '/' + latlng, option);
  }

  getTypeShelters(type_id: string, country_code: string, latlng: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/type/shelter/' + type_id
      + '/' + country_code + '/' + latlng, option);
  }

  getTypeTransportations(type_id: string, country_code: string, latlng: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/type/transportation/' + type_id
      + '/' + country_code + '/' + latlng, option);
  }

  getTourCompanies(country_code: string, latlng: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/type/tourcompany/' + country_code
      + '/' + latlng, option);
  }

  getAnothers(country_code: string, latlng: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/type/another/' + country_code
      + '/' + latlng, option);
  }

  getInternets(country_code: string, latlng: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/type/internet/' + country_code
      + '/' + latlng, option);
  }

}
