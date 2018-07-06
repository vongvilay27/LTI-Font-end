import { AllService } from './../../services/all.service';
import { NgProgress } from 'ngx-progressbar';
import { Subscription } from 'rxjs';
import { TypeService } from './../../services/type.service';
import { LocationcheckService } from './../../services/locationcheck.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-attractions-list',
  templateUrl: './attractions-list.component.html',
  styleUrls: ['./attractions-list.component.css']
})
export class AttractionsListComponent implements OnInit {
    public innerWidth: any;
    public hideText: string;
    public hD = 'h3';
    attractionses: Array<Object> = [];
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
                      const attSubscript: Subscription = this.typeService.getTypeAttractionses(
                          this.typeid,
                          api_data['country_iso3166'],
                          lat + ',' + lng
                      ).subscribe((att_res) => {
                        this.attractionses = att_res.json()['data'];
                        this.ngProgress.done();
                        attSubscript.unsubscribe();
                      }, (att_error) => {
                        this.ngProgress.done();
                        attSubscript.unsubscribe();
                      });
                      subscript.unsubscribe();
                    }, (error) => {
                      this.ngProgress.done();
                      subscript.unsubscribe();
                    });
                  }, () => {
                    const subscript: Subscription = this.typeService.getTypeAttractionses(this.typeid, 'CTC', '0,0').subscribe((res) => {
                      this.attractionses = res.json()['data'];
                      this.ngProgress.done();
                      subscript.unsubscribe();
                    }, (error) => {
                      this.ngProgress.done();
                      subscript.unsubscribe();
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
                    const attSubscript: Subscription = this.allService.getAttractionses(
                        api_data['country_iso3166'],
                        lat + ',' + lng
                    ).subscribe((att_res) => {
                      this.attractionses = att_res.json()['data'];
                      this.ngProgress.done();
                      attSubscript.unsubscribe();
                    }, (att_error) => {
                      this.ngProgress.done();
                      attSubscript.unsubscribe();
                    });
                    subscript.unsubscribe();
                  }, (error) => {
                    this.ngProgress.done();
                    subscript.unsubscribe();
                  });
                }, () => {
                  const subscript: Subscription = this.allService.getAttractionses('CTC', '0,0').subscribe((res) => {
                    this.attractionses = res.json()['data'];
                    this.ngProgress.done();
                    subscript.unsubscribe();
                  }, (error) => {
                    this.ngProgress.done();
                    subscript.unsubscribe();
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
  showAttracdetail(attracid) {
    this.router.navigate(['/attraction', 'detail', attracid]);
  }
}
