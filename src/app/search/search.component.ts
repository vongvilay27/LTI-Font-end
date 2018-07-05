import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import {LocationcheckService} from '../services/locationcheck.service';
import {SearchService} from '../services/search.service';
import { Subscription } from 'rxjs';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    public innerWidth: any;
    public hideText: string;
    public hD = 'h3';
    laoChecked:boolean = false;

    lat:number;
    lng:number;
    keyword:string;
    data: Object = {};
    attractions: Array<Object> = [];
    restaurants: Array<Object> = [];
    shelters: Array<Object> = [];
    transportations: Array<Object> = [];
    tourcompanies: Array<Object> = [];
    anothers: Array<Object> = [];
    internets: Array<Object> = [];
    menulist: Array<Object> = [
        {'id':1,'name':'ສະຖານທີ່ທ່ອງທ່ຽວ','path': 'attraction'},
        {'id':2,'name':'ຮ້ານອາຫານ','path': 'restaurant'},
        {'id':3,'name':'ທີ່ພັກແຮມ','path': 'shelter'},
        {'id':4,'name':'ສະຖານີຂົນສົ່ງໂດຍສານ','path': 'transportation'},
        {'id':5,'name':'ບໍລິສັດນຳທ່ຽວ','path': 'company'},
        {'id':6,'name':'ສູນບໍລິການອິນເຕີເນັດ','path': 'internet'},
        {'id':7,'name':'ສະຖານທີ່ອື່ນໆ','path': 'another'},
    ];
    showmenuTitle: string = 'ປະເພດການຄົ້ນຫາ';

    constructor(
        public ngProgress: NgProgress,
        private locationService: LocationcheckService,
        public searchService: SearchService,
        private route: ActivatedRoute,
        private router: Router
    ) { }
    ngOnInit() {
      /*Progressstatus*/
      /** request started */
      this.ngProgress.start();

      this.innerWidth = window.innerWidth;
      if (this.innerWidth <= 560) {
        this.hideText = 'text-hide';
        this.hD = 'h5';
      }
        console.log(this.laoChecked)

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.lat = position.coords.latitude;
                this.lng = position.coords.longitude;

                const subscript: Subscription = this.locationService.getLocalWeater(this.lat, this.lng).subscribe((res) => {
                    const api_data = res.json()['current_observation']['observation_location'];
                    console.log(api_data);
                    this.route.queryParams.subscribe(params => {
                        this.keyword = params.q;
                        const searchSubscript = this.searchService.getSearchData(api_data['country_iso3166'], this.lat + ',' + this.lng, this.keyword).subscribe((search_res) => {
                            this.data = search_res.json()['data'];
                            this.attractions = this.data['attractionses'];
                            this.restaurants = this.data['restaurants'];
                            this.shelters = this.data['shelters'];
                            this.transportations = this.data['transportations'];
                            this.tourcompanies = this.data['tourcompanies'];
                            this.anothers = this.data['another_places']['anothers'];
                            this.internets = this.data['another_places']['internets'];
                            this.ngProgress.done();
                            searchSubscript.unsubscribe();
                        }, (search_error) => {
                            this.ngProgress.done();
                            searchSubscript.unsubscribe();
                        });
                        subscript.unsubscribe();
                    });

                }, (error) => {
                    this.ngProgress.done();
                    subscript.unsubscribe();
                });
            }, () => {
                this.route.queryParams.subscribe(params => {
                    this.keyword = params.q;
                    const subscript: Subscription = this.searchService.getSearchData('CTC', '0,0', this.keyword).subscribe((res) => {
                        this.data = res.json()['data'];
                        this.attractions = this.data['attractionses'];
                        this.restaurants = this.data['restaurants'];
                        this.shelters = this.data['shelters'];
                        this.transportations = this.data['transportations'];
                        this.tourcompanies = this.data['tourcompanies'];
                        this.anothers = this.data['another_places']['anothers'];
                        this.internets = this.data['another_places']['internets'];
                        this.ngProgress.done();
                        subscript.unsubscribe();
                    }, (error) => {
                        this.ngProgress.done();
                        subscript.unsubscribe();
                    });
                });
            });
        }else {
            this.route.queryParams.subscribe(params => {
                this.keyword = params.q;
                const subscript: Subscription = this.searchService.getSearchData('CTC', '0,0', this.keyword).subscribe((res) => {
                    this.data = res.json()['data'];
                    this.attractions = this.data['attractionses'];
                    this.restaurants = this.data['restaurants'];
                    this.shelters = this.data['shelters'];
                    this.transportations = this.data['transportations'];
                    this.tourcompanies = this.data['tourcompanies'];
                    this.anothers = this.data['another_places']['anothers'];
                    this.internets = this.data['another_places']['internets'];
                    this.ngProgress.done();
                    subscript.unsubscribe();
                }, (error) => {
                    this.ngProgress.done();
                    subscript.unsubscribe();
                });
            });
        }
      }
    showAttraction(attid){
        this.router.navigate(['/attraction', 'detail', attid]);
    }
    showRestaurant(resid){
        this.router.navigate(['/restaurant', 'detail', resid]);
    }
    showShelter(shelid){
        this.router.navigate(['/shelter', 'detail', shelid]);
    }
    showTransportation(tranid){
        this.router.navigate(['/transportation', 'detail', tranid]);
    }
    showCompany(comid){
        this.router.navigate(['/company', 'detail', comid]);
    }
    showAnother(anoid){
        this.router.navigate(['/another', 'detail', anoid]);
    }
    showInternet(intid){
        this.router.navigate(['/internet', 'detail', intid]);
    }

    checkLao(){
        this.laoChecked = !this.laoChecked;
        if(this.laoChecked ==false){
            const subscript: Subscription = this.locationService.getLocalWeater(this.lat, this.lng).subscribe((res) => {
                const api_data = res.json()['current_observation']['observation_location'];
                console.log(api_data);
            const searchSubscript = this.searchService.getSearchData(api_data['country_iso3166'], this.lat + ',' + this.lng, this.keyword).subscribe((search_res) => {
                this.data = search_res.json()['data'];
                this.attractions = this.data['attractionses'];
                this.restaurants = this.data['restaurants'];
                this.shelters = this.data['shelters'];
                this.transportations = this.data['transportations'];
                this.tourcompanies = this.data['tourcompanies'];
                this.anothers = this.data['another_places']['anothers'];
                this.internets = this.data['another_places']['internets'];
                this.ngProgress.done();
                searchSubscript.unsubscribe();
            }, (search_error) => {
                this.ngProgress.done();
                searchSubscript.unsubscribe();
            });
            subscript.unsubscribe();
            });

        }else {
            const subscript: Subscription = this.searchService.getSearchData('CTC', '0,0', this.keyword).subscribe((res) => {
                this.data = res.json()['data'];
                this.attractions = this.data['attractionses'];
                this.restaurants = this.data['restaurants'];
                this.shelters = this.data['shelters'];
                this.transportations = this.data['transportations'];
                this.tourcompanies = this.data['tourcompanies'];
                this.anothers = this.data['another_places']['anothers'];
                this.internets = this.data['another_places']['internets'];
                this.ngProgress.done();
                subscript.unsubscribe();
            }, (error) => {
                this.ngProgress.done();
                subscript.unsubscribe();
            });
        }
    }

    showmenu(list){
        this.showmenuTitle =list['name'];
    }
}
