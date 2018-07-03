import { Subscription } from 'rxjs';
import { AllService } from './../../services/all.service';
import { TypeService } from './../../services/type.service';
import { LocationcheckService } from './../../services/locationcheck.service';
import { NgProgress } from 'ngx-progressbar';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, Params} from '@angular/router';

@Component({
  selector: 'app-transportations-list',
  templateUrl: './transportations-list.component.html',
  styleUrls: ['./transportations-list.component.css']
})
export class TransportationsListComponent implements OnInit {
    public innerWidth: any;
    public hideText: string;
    public hD = 'h3';
    transportations: Array<Object> = [];
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
                        const api_data = res.json()['current_observation']['observation_location'];
                        const tranSubscript: Subscription = this.typeService.getTypeTransportations(
                            this.typeid,
                            api_data['country'],
                            lat + ',' + lng
                        ).subscribe((tran_res) => {
                          this.transportations = tran_res.json()['data'];
                          this.ngProgress.done();
                          tranSubscript.unsubscribe();
                        }, (shelt_error) => {
                          this.ngProgress.done();
                          tranSubscript.unsubscribe();
                        });
                        subscript.unsubscribe();
                      }, (error) => {
                        this.ngProgress.done();
                        subscript.unsubscribe();
                      });
                    }, () => {
                      const tranSubscript: Subscription = this.typeService.getTypeTransportations(this.typeid, 'CTC', '0,0')
                      .subscribe((tran_res) => {
                        this.transportations = tran_res.json()['data'];
                        this.ngProgress.done();
                        tranSubscript.unsubscribe();
                      }, (shelt_error) => {
                        this.ngProgress.done();
                        tranSubscript.unsubscribe();
                      });
                    });
                  }
            } else {
              if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                  const lat = position.coords.latitude;
                  const lng = position.coords.longitude;
                  const subscript: Subscription = this.locationService.getLocalWeater(lat, lng).subscribe((res) => {
                    const api_data = res.json()['current_observation']['observation_location'];
                    const tranSubscript: Subscription = this.allService.getTransportations(
                        api_data['country'],
                        lat + ',' + lng
                    ).subscribe((tran_res) => {
                        this.transportations = tran_res.json()['data'];
                        this.ngProgress.done();
                        tranSubscript.unsubscribe();
                      }, (shelt_error) => {
                        this.ngProgress.done();
                        tranSubscript.unsubscribe();
                      });
                    subscript.unsubscribe();
                  }, (error) => {
                    this.ngProgress.done();
                    subscript.unsubscribe();
                  });
                }, () => {
                  const tranSubscript: Subscription = this.allService.getShelters('CTC', '0,0')
                  .subscribe((tran_res) => {
                    this.transportations = tran_res.json()['data'];
                    this.ngProgress.done();
                    tranSubscript.unsubscribe();
                  }, (shelt_error) => {
                    this.ngProgress.done();
                    tranSubscript.unsubscribe();
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
    showTranspordetail(transporid) {
        this.router.navigate(['transportation/detail', transporid]);
    }


}
