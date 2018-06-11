import { Component, OnInit } from '@angular/core';
import {NgProgress} from 'ngx-progressbar';

@Component({
  selector: 'app-transportations',
  templateUrl: './transportations.component.html',
  styleUrls: ['./transportations.component.css']
})
export class TransportationsComponent implements OnInit {

    constructor(public ngProgress: NgProgress) { }

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
