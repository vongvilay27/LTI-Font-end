import { Subscription } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import {NgProgress} from 'ngx-progressbar';
import { TypeService } from '../services/type.service';
@Component({
  selector: 'app-attractions-main',
  templateUrl: './attractions-main.component.html',
  styleUrls: ['./attractions-main.component.css']
})
export class AttractionsMainComponent implements OnInit {
    types: Array<Object> = [];
    public hTc = 'h4';
    public innerWidth: any;
    constructor(
        public ngProgress: NgProgress,
        private typeService: TypeService
    ) {
        const subscription: Subscription = this.typeService.getAttractionsTypes().subscribe((res) => {
            this.types = res.json()['data'];
            this.ngProgress.done();
            subscription.unsubscribe();
          }, (error) => {
            this.ngProgress.done();
            subscription.unsubscribe();
          });
     }

    ngOnInit() {
        this.ngProgress.start();

        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.hTc = 'h5';
        }




        this.ngProgress.done();
    }
}
