import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-additional',
  templateUrl: './home-additional.component.html',
  styleUrls: ['./home-additional.component.css']
})
export class HomeAdditionalComponent implements OnInit {

  @Input() anotherplaces: Object;
  constructor() { }

  ngOnInit() {
  }

}
