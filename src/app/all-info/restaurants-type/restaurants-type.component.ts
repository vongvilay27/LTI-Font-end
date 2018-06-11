import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants-type',
  templateUrl: './restaurants-type.component.html',
  styleUrls: ['./restaurants-type.component.css']
})
export class RestaurantsTypeComponent implements OnInit {
    public hTc = 'h4'
    public innerWidth: any;
    constructor() { }

    ngOnInit() {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.hTc = 'h5';
        }
    }

}
