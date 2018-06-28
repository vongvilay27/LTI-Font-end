import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import {LocationcheckService} from '../services/locationcheck.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    public innerWidth: any;
    public hideText: string;
    public hD = 'h3';

    lat: number;
    lng: number;

    locaData: any;
    constructor(public ngProgress: NgProgress, private LocaService: LocationcheckService) { }

    ngOnInit() {
      /*Progressstatus*/
      /** request started */
      this.ngProgress.start();

      this.innerWidth = window.innerWidth;
      if (this.innerWidth <= 560) {
        this.hideText = 'text-hide';
        this.hD = 'h5';
      }

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          const lat = position.coords.latitude;
          const lng = position.coords.longitude;
          this.lat = lat;
          this.lng = lng;
          console.log(lat,lng);

          this.LocaService.getLocaWeater(this.lat, this.lng).subscribe(res => {
            this.locaData = res.current_observation;
            console.log(this.locaData);
          }, error => {
            console.log(error);
          });
/*          this.http.get(`https://api.wunderground.com/api/b7e4ea3b9ecdbe54/conditions/q/${this.lat},${this.lng}.json`)
            .subscribe((res:any)=>{
            console.log(res)
          })*/
        });
      }

        this.ngProgress.done();
      }

}
