import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    public innerWidth: any;
    public hideText: string;
    public hD = 'h3';
    constructor(public ngProgress: NgProgress) { }

    ngOnInit() {
        /*Progressstatus*/
        /** request started */
        this.ngProgress.start();
/*        this.http.get(url).subscribe(res){
            /!** request completed *!/
            this.ngProgress.done();
        }*/

        this.innerWidth = window.innerWidth;
        if (this.innerWidth <= 560) {
            this.hideText = 'text-hide';
            this.hD = 'h5';
        }

        this.ngProgress.done();
    }
    alertz() {
        alert(55555);
    }

}
