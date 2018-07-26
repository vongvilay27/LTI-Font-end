import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  constructor(
    private http: Http
  ) { }

  getAttractions(attraction_id: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/detail/attractions/' + attraction_id, option);
  }
  attractionsComment(attraction_id: string, comment: string){
      // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
      const header: Headers = new Headers();
      header.append('lttoken',  environment.RAMDOM_KEY );
      // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
      const option: RequestOptions = new RequestOptions({headers: header});
      return this.http.post(environment.SERVER_ADDRESS
          + '/api/client/detail/attractions/comment' , {comment: comment,attractions_id: attraction_id} , option);
  }
    attractionsReply(attraction_id: string, reply: string, index: number){
        // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
        const header: Headers = new Headers();
        header.append('lttoken',  environment.RAMDOM_KEY );
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        const option: RequestOptions = new RequestOptions({headers: header});
        return this.http.post(environment.SERVER_ADDRESS
            + '/api/client/detail/attractions/comment/reply' , {idx: index,reply: reply,attractions_id: attraction_id} , option);
    }
  getRestaurant(restaurant_id: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/detail/restaurant/' + restaurant_id, option);
  }

  getShelter(shelter_id: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/detail/shelter/' + shelter_id, option);
  }

  getTransportation(transportation_id: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/detail/transportation/' + transportation_id, option);
  }

  getTourCompany(company_id: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/detail/company/' + company_id, option);
  }

  getAnother(another_id: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/detail/another/' + another_id, option);
  }

  getInternet(internet_id: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/detail/internet/' + internet_id, option);
  }

  getInfoNearby(id: string, latlng: string) {
    // console.log(bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10));
    const header: Headers = new Headers();
    header.append('lttoken',  environment.RAMDOM_KEY );
    // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
    const option: RequestOptions = new RequestOptions({headers: header});
    return this.http.get(environment.SERVER_ADDRESS
      + '/api/client/near/' + id + '/' + latlng, option);
  }

}
