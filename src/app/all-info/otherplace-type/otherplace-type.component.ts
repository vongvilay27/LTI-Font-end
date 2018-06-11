import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-otherplace-type',
  templateUrl: './otherplace-type.component.html',
  styleUrls: ['./otherplace-type.component.css']
})
export class OtherplaceTypeComponent implements OnInit {
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
