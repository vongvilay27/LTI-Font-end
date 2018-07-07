import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
      private http: Http
  ) { }

    getSearchData(country_code: string, latlng: string, keyword: string) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        const header: Headers = new Headers();
        header.append('lttoken',  environment.RAMDOM_KEY );
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        const option: RequestOptions = new RequestOptions({headers: header});
        return this.http.get(environment.SERVER_ADDRESS + '/api/client/search/' + country_code + '/' + latlng+ '/'+ keyword, option);
    };

    getSearchTypeData(country_code: string, latlng: string, keyword: string,typeS: string) {
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        const header: Headers = new Headers();
        header.append('lttoken',  environment.RAMDOM_KEY );
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        const option: RequestOptions = new RequestOptions({headers: header});
        return this.http.get(environment.SERVER_ADDRESS + '/api/client/search/' + country_code + '/' + latlng+ '/'+ keyword+'/'+typeS, option);
    }
}
