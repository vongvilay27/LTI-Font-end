import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attractions-main',
  templateUrl: './attractions-main.component.html',
  styleUrls: ['./attractions-main.component.css']
})
export class AttractionsMainComponent implements OnInit {
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
