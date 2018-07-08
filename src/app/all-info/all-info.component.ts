import { TypeService } from './../services/type.service';
import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-all-info',
  templateUrl: './all-info.component.html',
  styleUrls: ['./all-info.component.css']
})
export class AllInfoComponent implements OnInit {

  types: Object = {};
  constructor(
    public ngProgress: NgProgress,
    private typeService: TypeService
  ) { }

  ngOnInit() {
      this.ngProgress.start();
      const subscription: Subscription = this.typeService.getTypes().subscribe((res) => {
        this.types = res.json()['data'];
        localStorage.setItem('types', JSON.stringify(this.types));
        this.ngProgress.done();
        subscription.unsubscribe();
      }, (error) => {
          if (error.status >= 500) {
              if (localStorage.getItem('types')) {
                  this.types = JSON.parse(localStorage.getItem('types'));
              }
          }
        this.ngProgress.done();
        subscription.unsubscribe();
      });
  }

}
