import { LocationcheckService } from './../services/locationcheck.service';
import { Component, OnInit } from '@angular/core';
import {NgProgress} from 'ngx-progressbar';
import { MainService } from '../services/main.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  data: Object = {};
  constructor(
    public ngProgress: NgProgress,
    private locationService: LocationcheckService,
    private mainService: MainService
  ) {
    this.ngProgress.start();
   }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const subscript: Subscription = this.locationService.getLocalWeater(lat, lng).subscribe((res) => {
          const api_data = res.json()['current_observation']['observation_location'];
          /*console.log(api_data);*/
          const mainSubscript = this.mainService.getMainPageData(api_data['country_iso3166'], lat + ',' + lng).subscribe((main_res) => {
            this.data = main_res.json()['data'];
            this.ngProgress.done();
            mainSubscript.unsubscribe();
          }, (main_error) => {
            this.ngProgress.done();
            mainSubscript.unsubscribe();
          });
          subscript.unsubscribe();
        }, (error) => {
          this.ngProgress.done();
          subscript.unsubscribe();
        });
      }, () => {
        const subscript: Subscription = this.mainService.getMainPageData('CTC', '0,0').subscribe((res) => {
          this.data = res.json()['data'];
          this.ngProgress.done();
          subscript.unsubscribe();
        }, (error) => {
          this.ngProgress.done();
          subscript.unsubscribe();
        });
      });
    }
  }

}
