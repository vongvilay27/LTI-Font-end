import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantsComponent } from './restaurants.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { RestaurantsDetailComponent } from './restaurants-detail/restaurants-detail.component';

import {RestaurantsRoutingModule} from './restaurants-routing.module';

import { GalleryModule } from '@ngx-gallery/core';
import { LightboxModule } from '@ngx-gallery/lightbox';
import { GallerizeModule } from '@ngx-gallery/gallerize';
import 'hammerjs';
import 'rxjs';

const Restaurants_component = [
    RestaurantsComponent,
    RestaurantsListComponent,
    RestaurantsDetailComponent
]
@NgModule({
  imports: [
    CommonModule,
      RestaurantsRoutingModule,
      GalleryModule.forRoot(),
      LightboxModule.forRoot(),
      GallerizeModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBXoeOmRRzSl0b4iUBadAz8M-_Zva0DpfQ'
      })
  ],
  declarations: [
      ...Restaurants_component
  ],
    exports: [RestaurantsComponent]
})
export class RestaurantsModule { }
