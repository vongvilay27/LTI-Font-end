import { Component } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

    public mySidenav = false;
    constructor(public ngProgress: NgProgress){}

    inOninit(){
        /*Progressstatus*/
        /** request started */
        this.ngProgress.start();
        /*        this.http.get(url).subscribe(res){
                    /!** request completed *!/
                    this.ngProgress.done();
                }*/
        this.ngProgress.done();
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
