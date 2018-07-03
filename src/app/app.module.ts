import { AllService } from './services/all.service';
import { TypeService } from './services/type.service';
import { LocationcheckService } from './services/locationcheck.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {HomeModule} from './home/home.module';

import { NgProgressModule } from 'ngx-progressbar';
// Components
import { APP_BASE_HREF } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AppComponent } from './app.component';
import {SearchComponent} from './search/search.component';
import { DetailService } from './services/detail.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NgProgressModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [
      {provide: APP_BASE_HREF, useValue: '/'},
      LocationcheckService,
      TypeService,
      AllService,
      DetailService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
