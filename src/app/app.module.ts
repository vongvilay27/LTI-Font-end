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
import {SearchService} from './services/search.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {AgmCoreModule} from '@agm/core';

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
    HomeModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBXoeOmRRzSl0b4iUBadAz8M-_Zva0DpfQ'
      }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
      {provide: APP_BASE_HREF, useValue: '/'},
      LocationcheckService,
      TypeService,
      AllService,
      DetailService,
      SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
