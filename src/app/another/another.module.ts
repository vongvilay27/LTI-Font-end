import { AgmCoreModule } from '@agm/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnotherComponent } from './another.component';
import {AnotherRoutingModule} from './another-routing-module';
import { InternetListComponent } from './internet-list/internet-list.component';
import { InternetDetailComponent } from './internet-detail/internet-detail.component';
import { AnotherListComponent } from './another-list/another-list.component';
import { AnotherDetailComponent } from './another-detail/another-detail.component';
import {GallerizeModule} from '@ngx-gallery/gallerize';
import {GalleryModule} from '@ngx-gallery/core';
import {LightboxModule} from '@ngx-gallery/lightbox';

@NgModule({
  imports: [
    CommonModule,
      AnotherRoutingModule,
      GalleryModule.forRoot(),
      LightboxModule.forRoot(),
      GallerizeModule,
      AgmCoreModule.forRoot({
          apiKey: 'AIzaSyBXoeOmRRzSl0b4iUBadAz8M-_Zva0DpfQ'
      })
  ],
  declarations: [AnotherComponent, InternetListComponent, InternetDetailComponent, AnotherListComponent, AnotherDetailComponent]
})
export class AnotherModule { }
