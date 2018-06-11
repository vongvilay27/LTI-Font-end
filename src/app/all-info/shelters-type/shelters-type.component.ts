import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shelters-type',
  templateUrl: './shelters-type.component.html',
  styleUrls: ['./shelters-type.component.css']
})
export class SheltersTypeComponent implements OnInit {
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
