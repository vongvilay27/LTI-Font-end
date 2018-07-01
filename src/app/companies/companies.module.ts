import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { CompaniesListComponent } from './companies-list/companies-list.component';
import { CompaniesDetailComponent } from './companies-detail/companies-detail.component';
import {CompaniesRoutingModule} from './companies-routing-module';
import {LightboxModule} from '@ngx-gallery/lightbox';
import {GallerizeModule} from '@ngx-gallery/gallerize';
import {GalleryModule} from '@ngx-gallery/core';
const Companies_component = [
    CompaniesComponent,
    CompaniesListComponent,
    CompaniesDetailComponent
]
@NgModule({
  imports: [
    CommonModule,
    CompaniesRoutingModule,
    GalleryModule.forRoot(),
    LightboxModule.forRoot(),
    GallerizeModule
  ],
  declarations: [
      ...Companies_component
  ]
})
export class CompaniesModule { }
