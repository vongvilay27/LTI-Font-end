import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { TypeService } from './services/type.service';
import { Component } from '@angular/core';
import { NgProgress } from 'ngx-progressbar';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    searchForm: FormGroup;
    types: Array<Object> = [];
    public mySidenav = false;
    constructor(
        public ngProgress: NgProgress,
        private typeService: TypeService,
        private formBuilder: FormBuilder,
        private router: Router
    ) {
        this.searchForm = this.formBuilder.group({
            search_keyword: [null, [Validators.required]]
        });
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
// Sidenavbar script
    opencNav() {
        this.mySidenav = !this.mySidenav;
        // this.searcheck = false;
        // if(this.btnsearch == "fa-close"){
        //     this.btnsearch = "fa-search"
        // }
    }
    doSearch() {
        if (this.searchForm.valid && this.searchForm.value['search_keyword'].trim()) {
            this.router.navigate(['/search'], {
                queryParams: {
                    q: this.searchForm.value['search_keyword'].trim()
                }
            });
        }
    }
}
