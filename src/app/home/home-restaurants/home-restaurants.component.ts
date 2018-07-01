import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-restaurants',
  templateUrl: './home-restaurants.component.html',
  styleUrls: ['./home-restaurants.component.css']
})
export class HomeRestaurantsComponent implements OnInit {

  @Input() restaurants: Array<Object>;
  constructor() { }

  ngOnInit() {
  }

}
