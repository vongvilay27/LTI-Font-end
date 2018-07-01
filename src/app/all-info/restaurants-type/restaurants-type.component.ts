import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-restaurants-type',
  templateUrl: './restaurants-type.component.html',
  styleUrls: ['./restaurants-type.component.css']
})
export class RestaurantsTypeComponent implements OnInit {

    @Input() types: Array<Object>;

    public hTc = 'h4';
    public innerWidth: any;
    constructor() { }

    ngOnInit() {
        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.hTc = 'h5';
        }
    }

}
