import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-shelters',
  templateUrl: './home-shelters.component.html',
  styleUrls: ['./home-shelters.component.css']
})
export class HomeSheltersComponent implements OnInit {

  @Input() shelters: Array<Object>;
  constructor() { }

  ngOnInit() {
  }

}
