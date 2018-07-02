import { Subscription } from 'rxjs';
import { TypeService } from './../../services/type.service';
import { LocationcheckService } from './../../services/locationcheck.service';
import { NgProgress } from 'ngx-progressbar';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-internet-list',
  templateUrl: './internet-list.component.html',
  styleUrls: ['./internet-list.component.css']
})
export class InternetListComponent implements OnInit {

  internets: Array<Object> = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public ngProgress: NgProgress,
    private locationService: LocationcheckService,
    private typeService: TypeService
  ) {
    this.ngProgress.start();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const subscript: Subscription = this.locationService.getLocalWeater(lat, lng).subscribe((res) => {
          const api_data = res.json();
          const intSubscript: Subscription = this.typeService.getInternets(
              api_data[''],
              lat + ',' + lng
          ).subscribe((int_res) => {
            this.internets = int_res.json()['data'];
            this.ngProgress.done();
            intSubscript.unsubscribe();
          }, (att_error) => {
            this.ngProgress.done();
            intSubscript.unsubscribe();
          });
          subscript.unsubscribe();
        }, (error) => {
          this.ngProgress.done();
          subscript.unsubscribe();
        });
      });
    } else {
      const intSubscript: Subscription = this.typeService.getInternets('CTC', '0,0')
      .subscribe((int_res) => {
        this.internets = int_res.json()['data'];
        this.ngProgress.done();
        intSubscript.unsubscribe();
      }, (att_error) => {
        this.ngProgress.done();
        intSubscript.unsubscribe();
      });
    }
  }

  ngOnInit() {
  }

  showInternetDetail(internet_id) {
    this.router.navigate(['/another', 'internet', 'detail', internet_id]);
  }

}
