import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheltersComponent } from './shelters.component';
import { SheltersListComponent } from './shelters-list/shelters-list.component';
import { SheltersDetailComponent } from './shelters-detail/shelters-detail.component';

import {ShelterRoutingModule} from './shelter-routing.module';

import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import 'hammerjs';
import 'rxjs';
import {AgmCoreModule} from '@agm/core';

const Shelters_component = [
    SheltersComponent,
    SheltersListComponent,
    SheltersDetailComponent
]
@NgModule({
  imports: [
    CommonModule,
      ShelterRoutingModule,
      // BrowserAnimationsModule,
      GalleryModule.forRoot(),
      LightboxModule.forRoot(),
      GallerizeModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBXoeOmRRzSl0b4iUBadAz8M-_Zva0DpfQ'
      })
  ],
  declarations: [
      ...Shelters_component
  ],
    exports: [SheltersComponent]
})
export class SheltersModule { }
