import { Component, OnInit } from '@angular/core';
import {NgProgress} from 'ngx-progressbar';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {

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
