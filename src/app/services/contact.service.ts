import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(
      private http: Http
  ) { }

    sentEmailService(mailifo : Object) {
        const header: Headers = new Headers();
        header.append('lttoken',  environment.RAMDOM_KEY );
        // header.append('lttoken',  bcrypt.hashSync(environment.ANONYMOUS_SECRET, 10) );
        const option: RequestOptions = new RequestOptions({headers: header});
        return this.http.post(environment.SERVER_ADDRESS + '/api/client/contact/mail',mailifo, option);
    };
}
