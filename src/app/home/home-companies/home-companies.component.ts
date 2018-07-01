import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home-companies',
  templateUrl: './home-companies.component.html',
  styleUrls: ['./home-companies.component.css']
})
export class HomeCompaniesComponent implements OnInit {

  @Input() companies: Array<Object>;
  constructor() { }

  ngOnInit() {
  }

}
