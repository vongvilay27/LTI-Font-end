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

}
