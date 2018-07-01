import { Subscription } from 'rxjs';
import { TypeService } from './services/type.service';
import { Component } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    types: Array<Object> = [];

    public mySidenav = false;
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

    inOninit() {
    }
//Sidenavbar script
    opencNav() {
        this.mySidenav = !this.mySidenav;
        // this.searcheck = false;
        // if(this.btnsearch == "fa-close"){
        //     this.btnsearch = "fa-search"
        // }
    }
}
