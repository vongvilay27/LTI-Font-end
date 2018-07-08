import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
    lat: number = 18.040118;
    lng: number = 102.6354584;
    zoom: number = 15;
    contactForm: FormGroup;
    constructor(
        public ngProgress: NgProgress,
        private formBuilder: FormBuilder
    ) {
        this.contactForm = this.formBuilder.group({});
    }
  ngOnInit() {
      /*Progressstatus*/
      /** request started */
      this.ngProgress.start();
      /*        this.http.get(url).subscribe(res){
                  /!** request completed *!/
                  this.ngProgress.done();
              }*/
      this.ngProgress.done();
  }

}
