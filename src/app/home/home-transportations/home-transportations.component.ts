import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-transportations',
  templateUrl: './home-transportations.component.html',
  styleUrls: ['./home-transportations.component.css']
})
export class HomeTransportationsComponent implements OnInit {

  @Input() transportations: Array<Object>;
  constructor() { }

  ngOnInit() {
  }

}
