import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HomeModule} from './home/home.module';

import { NgProgressModule } from 'ngx-progressbar';
//Components
import { AppComponent } from './app.component';

import { APP_BASE_HREF } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SearchComponent} from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
      NgProgressModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HomeModule,
  ],
  providers: [
      {provide: APP_BASE_HREF, useValue: '/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
