import { Component, OnInit } from '@angular/core';
import {NgProgress} from 'ngx-progressbar';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

    constructor(public ngProgress: NgProgress) { }

  ngOnInit() {
      /*Progressstatus*/
      /** request started */
      this.ngProgress.start();
      /*Another function here*/
      this.ngProgress.done();
  }

}
