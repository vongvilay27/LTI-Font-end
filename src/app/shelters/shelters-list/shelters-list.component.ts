import { Subscription } from 'rxjs';
import { AllService } from './../../services/all.service';
import { TypeService } from './../../services/type.service';
import { LocationcheckService } from './../../services/locationcheck.service';
import { NgProgress } from 'ngx-progressbar';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-shelters-list',
  templateUrl: './shelters-list.component.html',
  styleUrls: ['./shelters-list.component.css']
})
export class SheltersListComponent implements OnInit {
    public innerWidth: any;
    public hideText: string;
    public hD = 'h3';
    shelters: Array<Object> = [];
    typeid: any;
    latitude: number;
    longitude: number;
    zoom = 10;
    constructor(
      private router: Router,
      private route: ActivatedRoute,
      public ngProgress: NgProgress,
      private locationService: LocationcheckService,
      private typeService: TypeService,
      private allService: AllService
    ) {
        this.ngProgress.start();
        this.route.params.subscribe((params: Params) => {
            this.typeid = params['typeid'];
            if (this.typeid) {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                      const lat = position.coords.latitude;
                      const lng = position.coords.longitude;
                        this.latitude = lat;
                        this.longitude = lng;
                      const subscript: Subscription = this.locationService.getLocalWeater(lat, lng).subscribe((res) => {
                        const api_data = res.json()['current_observation']['observation_location'];
                        const sheltSubscript: Subscription = this.typeService.getTypeShelters(
                            this.typeid,
                            api_data['country_iso3166'],
                            lat + ',' + lng
                        ).subscribe((shelt_res) => {
                          this.shelters = shelt_res.json()['data'];
                          this.ngProgress.done();
                          sheltSubscript.unsubscribe();
                        }, (shelt_error) => {
                          this.ngProgress.done();
                          sheltSubscript.unsubscribe();
                        });
                        subscript.unsubscribe();
                      }, (error) => {
                        this.ngProgress.done();
                        subscript.unsubscribe();
                      });
                    }, () => {
                      const sheltSubscript: Subscription = this.typeService.getTypeShelters(this.typeid, 'CTC', '0,0')
                      .subscribe((shelt_res) => {
                        this.shelters = shelt_res.json()['data'];
                        this.ngProgress.done();
                        sheltSubscript.unsubscribe();
                      }, (shelt_error) => {
                        this.ngProgress.done();
                        sheltSubscript.unsubscribe();
                      });
                    });
                  }
            } else {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                      const lat = position.coords.latitude;
                      const lng = position.coords.longitude;
                        this.latitude = lat;
                        this.longitude = lng;
                      const subscript: Subscription = this.locationService.getLocalWeater(lat, lng).subscribe((res) => {
                        const api_data = res.json()['current_observation']['observation_location'];
                        const sheltSubscript: Subscription = this.allService.getShelters(
                            api_data['country_iso3166'],
                            lat + ',' + lng
                        ).subscribe((shelt_res) => {
                            this.shelters = shelt_res.json()['data'];
                            this.ngProgress.done();
                            sheltSubscript.unsubscribe();
                          }, (shelt_error) => {
                            this.ngProgress.done();
                            sheltSubscript.unsubscribe();
                          });
                        subscript.unsubscribe();
                      }, (error) => {
                        this.ngProgress.done();
                        subscript.unsubscribe();
                      });
                    }, () => {
                      const sheltSubscript: Subscription = this.allService.getShelters('CTC', '0,0')
                      .subscribe((shelt_res) => {
                        this.shelters = shelt_res.json()['data'];
                        this.ngProgress.done();
                        sheltSubscript.unsubscribe();
                      }, (shelt_error) => {
                        this.ngProgress.done();
                        sheltSubscript.unsubscribe();
                      });
                    });
                  }
            }
        });
     }

    ngOnInit() {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.hideText = 'text-hide';
            this.hD = 'h5';
        }

    }
    showShelterdetail(sheltid) {
        this.router.navigate(['shelter/detail', sheltid]);
    }

}
