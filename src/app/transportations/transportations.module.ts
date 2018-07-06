import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportationsComponent } from './transportations.component';
import { TransportationsListComponent } from './transportations-list/transportations-list.component';
import { TransportationsDetailComponent } from './transportations-detail/transportations-detail.component';

import {TransportationsRoutingModule} from './transportations-routing.module';

import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import 'hammerjs';
import 'rxjs';
import {AgmCoreModule} from '@agm/core';
const Transportations_component = [
    TransportationsComponent,
    TransportationsListComponent,
    TransportationsDetailComponent
];

@NgModule({
  imports: [
    CommonModule,
      TransportationsRoutingModule,
      GalleryModule.forRoot(),
      LightboxModule.forRoot(),
      GallerizeModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBXoeOmRRzSl0b4iUBadAz8M-_Zva0DpfQ'
      })
  ],
  declarations: [
      ...Transportations_component
  ],
    exports: [TransportationsComponent]
})
export class TransportationsModule { }
