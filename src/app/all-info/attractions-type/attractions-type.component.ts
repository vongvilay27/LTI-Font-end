import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attractions-type',
  templateUrl: './attractions-type.component.html',
  styleUrls: ['./attractions-type.component.css']
})
export class AttractionsTypeComponent implements OnInit {
    public hTc = 'h4'
    public innerWidth: any;
  constructor(private route: Router) { }

  ngOnInit() {
      this.innerWidth = window.innerWidth;
      if (this.innerWidth <= 560) {
          this.hTc = 'h5';
      }
  }
    openTypeAttrac(attracType){
      this.route.navigate(['/attraction', attracType]);
    }
}
