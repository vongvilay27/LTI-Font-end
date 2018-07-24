import { AllService } from './../services/all.service';
import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AttractionsComponent } from './attractions.component';
import { AttractionsListComponent } from './attractions-list/attractions-list.component';
import { AttractionsDetailComponent } from './attractions-detail/attractions-detail.component';

import {AttractionsRoutingModule} from './attractions-routing.module';

import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import 'hammerjs';
import 'rxjs';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const Attractions_component = [
    AttractionsComponent,
    AttractionsListComponent,
    AttractionsDetailComponent
];
@NgModule({
  imports: [
    CommonModule,
      FormsModule,
      ReactiveFormsModule,
      AttractionsRoutingModule,
      GalleryModule.forRoot(),
      LightboxModule.forRoot(),
      GallerizeModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyBXoeOmRRzSl0b4iUBadAz8M-_Zva0DpfQ'
      })
  ],
  declarations: [
      ...Attractions_component
  ],
  exports: [AttractionsComponent]
})
export class AttractionsModule { }
