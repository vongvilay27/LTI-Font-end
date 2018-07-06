import { Component, OnInit } from '@angular/core';
import {NgProgress} from 'ngx-progressbar';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-transportations',
  templateUrl: './transportations.component.html',
  styleUrls: ['./transportations.component.css']
})
export class TransportationsComponent implements OnInit {
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
