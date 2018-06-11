import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies-type',
  templateUrl: './companies-type.component.html',
  styleUrls: ['./companies-type.component.css']
})
export class CompaniesTypeComponent implements OnInit {
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
