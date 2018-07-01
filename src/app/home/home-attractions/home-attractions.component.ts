import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-attractions',
  templateUrl: './home-attractions.component.html',
  styleUrls: ['./home-attractions.component.css']
})
export class HomeAttractionsComponent implements OnInit {

  @Input() attractionses: Array<Object>;

  constructor() {
  }

  ngOnInit() {
  }

}
