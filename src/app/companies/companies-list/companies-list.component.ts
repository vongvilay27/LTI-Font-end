import { Subscription } from 'rxjs';
import { AllService } from './../../services/all.service';
import { TypeService } from './../../services/type.service';
import { LocationcheckService } from './../../services/locationcheck.service';
import { NgProgress } from 'ngx-progressbar';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-companies-list',
  templateUrl: './companies-list.component.html',
  styleUrls: ['./companies-list.component.css']
})
export class CompaniesListComponent implements OnInit {
    public innerWidth: any;
    public hideText: string;
    public hD = 'h3';
    tour_companies: Array<Object> = [];
    constructor(
        private router: Router,
        private route: ActivatedRoute,
        public ngProgress: NgProgress,
        private locationService: LocationcheckService,
        private allService: AllService
    ) {
        this.ngProgress.start();
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
              const lat = position.coords.latitude;
              const lng = position.coords.longitude;
              const subscript: Subscription = this.locationService.getLocalWeater(lat, lng).subscribe((res) => {
                const api_data = res.json();
                const comSubscript: Subscription = this.allService.getTourCompanies(
                    api_data[''],
                    lat + ',' + lng
                ).subscribe((com_res) => {
                  this.tour_companies = com_res.json()['data'];
                  this.ngProgress.done();
                  comSubscript.unsubscribe();
                }, (att_error) => {
                  this.ngProgress.done();
                  comSubscript.unsubscribe();
                });
                subscript.unsubscribe();
              }, (error) => {
                this.ngProgress.done();
                subscript.unsubscribe();
              });
            });
          } else {
            const comSubscript: Subscription = this.allService.getTourCompanies('CTC', '0,0')
            .subscribe((com_res) => {
                this.tour_companies = com_res.json()['data'];
                this.ngProgress.done();
                comSubscript.unsubscribe();
            }, (att_error) => {
                this.ngProgress.done();
                comSubscript.unsubscribe();
            });
          }
     }

    ngOnInit() {

        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.hideText = 'text-hide';
            this.hD = 'h5';
        }

    }
    showCompadetail(compaid) {
        this.router.navigate(['/company', 'detail', compaid]);
    }
}
