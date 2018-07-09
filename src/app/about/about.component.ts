import { Component, OnInit } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import {EmailValidator, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ContactService} from '../services/contact.service';
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
    sentMsuccess: boolean = false;
    sentMfalse: boolean = false;
    constructor(
        public ngProgress: NgProgress,
        private formBuilder: FormBuilder,
        private sentmail: ContactService
    ) {
        this.contactForm = this.formBuilder.group({
            name: [null, [Validators.required]],
            email: [null, [Validators.required, EmailValidator]],
            title: [null, [Validators.required]],
            message: [null, [Validators.required, Validators.minLength(10)]],


        });
    }

    ngOnInit() {
        /*Progressstatus*/
        /** request started */
        this.ngProgress.start();

        this.ngProgress.done();
    }
    sentEmail(){
        if(this.contactForm.valid){
            console.log(this.contactForm.value)
            const sentmSubscript= this.sentmail.sentEmailService(this.contactForm.value).subscribe( res =>{
                this.contactForm.reset();
                this.sentMsuccess = true;
                this.ngProgress.done();
                sentmSubscript.unsubscribe();
            },(sent_err) =>{
                this.sentMfalse = true;
                this.ngProgress.done();
                sentmSubscript.unsubscribe();
            })
        }
    }

}
