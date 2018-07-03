import { Subscription } from 'rxjs';
import { AllService } from './../../services/all.service';
import { TypeService } from './../../services/type.service';
import { LocationcheckService } from './../../services/locationcheck.service';
import { NgProgress } from 'ngx-progressbar';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another-list',
  templateUrl: './another-list.component.html',
  styleUrls: ['./another-list.component.css']
})
export class AnotherListComponent implements OnInit {

  internets: Array<Object> = [];
  anothers: Array<Object> = [];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public ngProgress: NgProgress,
    private locationService: LocationcheckService,
    private typeService: TypeService,
    private allService: AllService
  ) {
    this.ngProgress.start();
    route.queryParamMap.subscribe((paramMaps: ParamMap) => {
      if (paramMaps.get('q')) {
        const q = paramMaps.get('q');
        if (q === 'info') {
          if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
              const lat = position.coords.latitude;
              const lng = position.coords.longitude;
              const subscript: Subscription = this.locationService.getLocalWeater(lat, lng).subscribe((res) => {
                const api_data = res.json()['current_observation']['observation_location'];
                const anoSubscript: Subscription = this.typeService.getAnothers(
                    api_data['country'],
                    lat + ',' + lng
                ).subscribe((ano_res) => {
                  this.anothers = ano_res.json()['data'];
                  this.ngProgress.done();
                  anoSubscript.unsubscribe();
                }, (ano_error) => {
                  this.ngProgress.done();
                  anoSubscript.unsubscribe();
                });
                subscript.unsubscribe();
              }, (error) => {
                this.ngProgress.done();
                subscript.unsubscribe();
              });
            }, () => {
              const anoSubscript: Subscription = this.typeService.getAnothers('CTC', '0,0')
              .subscribe((ano_res) => {
                this.anothers = ano_res.json()['data'];
                this.ngProgress.done();
                anoSubscript.unsubscribe();
              }, (ano_error) => {
                this.ngProgress.done();
                anoSubscript.unsubscribe();
              });
            });
          }
        } else {
          this.router.navigate(['/another'], {
            queryParams: {
                q: 'info'
            }
        });
        }
      } else {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const subscript: Subscription = this.locationService.getLocalWeater(lat, lng).subscribe((res) => {
              const api_data = res.json()['current_observation']['observation_location'];
              const anoSubscript: Subscription = this.allService.getAnothers(
                  api_data['country'],
                  lat + ',' + lng
              ).subscribe((ano_res) => {
                const another_respone = ano_res.json()['data'];
                this.anothers = another_respone['anothers'];
                this.internets = another_respone['internets'];
                this.ngProgress.done();
                anoSubscript.unsubscribe();
              }, (ano_error) => {
                this.ngProgress.done();
                anoSubscript.unsubscribe();
              });
              subscript.unsubscribe();
            }, (error) => {
              this.ngProgress.done();
              subscript.unsubscribe();
            });
          }, () => {
            const anoSubscript: Subscription = this.allService.getAnothers('CTC', '0,0')
            .subscribe((ano_res) => {
              const another_respone = ano_res.json()['data'];
              this.anothers = another_respone['anothers'];
              this.internets = another_respone['internets'];
              this.ngProgress.done();
              anoSubscript.unsubscribe();
            }, (ano_error) => {
              this.ngProgress.done();
              anoSubscript.unsubscribe();
            });
          });
        }
      }
    });
   }

  ngOnInit() {
  }

  showAnotherDetail(another_id) {
    this.router.navigate(['/another', 'detail', another_id]);
  }

  showInternetDetail(internet_id) {
    this.router.navigate(['/another', 'internet', 'detail', internet_id]);
  }

}
