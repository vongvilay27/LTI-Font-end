import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-event',
  templateUrl: './home-event.component.html',
  styleUrls: ['./home-event.component.css']
})
export class HomeEventComponent implements OnInit {

  @Input() attractionses: Array<Object>;
  public innerWidth: any;
  public hideText: string;
  constructor() { }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth <= 560) {
      this.hideText = 'text-hide';
    }
  }

  getImage(imageUrl) {
    if (navigator.onLine) {
      return imageUrl;
    }
    return 'assets/ic_image.png';
  }

}
