import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheltersComponent } from './shelters.component';
import { SheltersListComponent } from './shelters-list/shelters-list.component';
import { SheltersDetailComponent } from './shelters-detail/shelters-detail.component';

import {ShelterRoutingModule} from './shelter-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import 'hammerjs';
import 'rxjs';

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
      GallerizeModule
  ],
  declarations: [
      ...Shelters_component
  ],
    exports: []
})
export class SheltersModule { }
