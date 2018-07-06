import { Component, OnInit } from '@angular/core';
import {NgProgress} from 'ngx-progressbar';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
    public id: any;
    public typeid: any;
    constructor(public ngProgress: NgProgress,public route: ActivatedRoute) { }

  ngOnInit() {
      /*Progressstatus*/
      /** request started */
      this.ngProgress.start();
      /*        this.http.get(url).subscribe(res){
                  /!** request completed *!/
                  this.ngProgress.done();
              }*/
      this.ngProgress.done();
  }

}
