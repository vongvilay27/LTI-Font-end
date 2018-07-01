import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-transportations-type',
  templateUrl: './transportations-type.component.html',
  styleUrls: ['./transportations-type.component.css']
})
export class TransportationsTypeComponent implements OnInit {

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
