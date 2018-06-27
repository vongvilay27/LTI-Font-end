import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-event',
  templateUrl: './home-event.component.html',
  styleUrls: ['./home-event.component.css']
})
export class HomeEventComponent implements OnInit {
  public innerWidth: any;
  public hideText: string;
  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 560) {
      this.hideText = 'text-hide';
    }
  }

}
