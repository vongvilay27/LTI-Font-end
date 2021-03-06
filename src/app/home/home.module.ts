import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { HomeComponent } from './home.component';
import { HomeEventComponent } from './home-event/home-event.component';
import { HomeAttractionsComponent } from './home-attractions/home-attractions.component';
import { HomeRestaurantsComponent } from './home-restaurants/home-restaurants.component';
import { HomeSheltersComponent } from './home-shelters/home-shelters.component';
import { HomeCompaniesComponent } from './home-companies/home-companies.component';
import { HomeAdditionalComponent } from './home-additional/home-additional.component';
import {RouterModule} from '@angular/router';
import { HomeTransportationsComponent } from './home-transportations/home-transportations.component';
import { MainService } from '../services/main.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule
  ],
  declarations: [
      HomeComponent,
      HomeEventComponent,
      HomeAttractionsComponent,
      HomeRestaurantsComponent,
      HomeSheltersComponent,
      HomeCompaniesComponent,
      HomeAdditionalComponent,
      HomeTransportationsComponent
  ],
  exports: [],
  providers: [ MainService ]
})
export class HomeModule { }
