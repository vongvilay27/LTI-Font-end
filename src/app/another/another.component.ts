import { Component, OnInit } from '@angular/core';
import {NgProgress} from 'ngx-progressbar';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent implements OnInit {
    public id: any;
    public typeid: any;
    constructor(public ngProgress: NgProgress, public route: ActivatedRoute) { }

  ngOnInit() {
  }

}
