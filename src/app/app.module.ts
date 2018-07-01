import { LocationcheckService } from './services/locationcheck.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
    NgProgressModule,
    AppRoutingModule,
    HomeModule,

  ],
  providers: [
      {provide: APP_BASE_HREF, useValue: '/'},
      LocationcheckService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
