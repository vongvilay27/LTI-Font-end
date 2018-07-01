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
    const subscript: Subscription = this.mainService.getMainPageData('CTC', '0,0').subscribe((res) => {
      this.data = res.json()['data'];
      this.ngProgress.done();
      subscript.unsubscribe();
    }, (error) => {
      this.ngProgress.done();
      subscript.unsubscribe();
    });
   }

  ngOnInit() {
  }

}
