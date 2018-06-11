import { Component, OnInit ,} from '@angular/core';
import {NgProgress} from 'ngx-progressbar';
import {ActivatedRoute, Params} from '@angular/router';


@Component({
  selector: 'app-attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css']
})
export class AttractionsComponent implements OnInit {
public id: any;
public typeid: any;
    constructor(public ngProgress: NgProgress, public route: ActivatedRoute) { }

  ngOnInit() {
      /*Progressstatus*/
      /** request started */
      this.ngProgress.start();


      this.ngProgress.done();
  }

}
