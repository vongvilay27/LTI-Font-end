import { Subscription } from 'rxjs';
import { AllService } from './../../services/all.service';
import { TypeService } from './../../services/type.service';
import { LocationcheckService } from './../../services/locationcheck.service';
import { NgProgress } from 'ngx-progressbar';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.css']
})
export class RestaurantsListComponent implements OnInit {
    public innerWidth: any;
    public hideText: string;
    public hD = 'h3';
    restaurants: Array<Object> = [];
    typeid: any;
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
                      const subscript: Subscription = this.locationService.getLocalWeater(lat, lng).subscribe((res) => {
                        const api_data = res.json();
                        const resSubscript: Subscription = this.typeService.getTypeRestaurants(
                            this.typeid,
                            api_data[''],
                            lat + ',' + lng
                        ).subscribe((res_res) => {
                          this.restaurants = res_res.json()['data'];
                          this.ngProgress.done();
                          resSubscript.unsubscribe();
                        }, (res_error) => {
                          this.ngProgress.done();
                          resSubscript.unsubscribe();
                        });
                        subscript.unsubscribe();
                      }, (error) => {
                        this.ngProgress.done();
                        subscript.unsubscribe();
                      });
                    });
                  } else {
                    const subscript: Subscription = this.typeService.getTypeRestaurants(this.typeid, 'CTC', '0,0')
                    .subscribe((res_res) => {
                        this.restaurants = res_res.json()['data'];
                        this.ngProgress.done();
                        subscript.unsubscribe();
                      }, (res_error) => {
                        this.ngProgress.done();
                        subscript.unsubscribe();
                      });
                  }
            } else {
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(position => {
                      const lat = position.coords.latitude;
                      const lng = position.coords.longitude;
                      const subscript: Subscription = this.locationService.getLocalWeater(lat, lng).subscribe((res) => {
                        const api_data = res.json();
                        const comSubscript: Subscription = this.allService.getRestaurants(
                            api_data[''],
                            lat + ',' + lng
                        ).subscribe((res_res) => {
                            this.restaurants = res_res.json()['data'];
                            this.ngProgress.done();
                            subscript.unsubscribe();
                          }, (res_error) => {
                            this.ngProgress.done();
                            subscript.unsubscribe();
                          });
                        subscript.unsubscribe();
                      }, (error) => {
                        this.ngProgress.done();
                        subscript.unsubscribe();
                      });
                    });
                  } else {
                    const subscript: Subscription = this.allService.getRestaurants('CTC', '0,0')
                    .subscribe((res_res) => {
                        this.restaurants = res_res.json()['data'];
                        this.ngProgress.done();
                        subscript.unsubscribe();
                      }, (res_error) => {
                        this.ngProgress.done();
                        subscript.unsubscribe();
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
    showAttracdetail(restauid) {
        this.router.navigate(['restaurant/detail', restauid]);
    }
}
