import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Components
import { HomeComponent } from './home.component';
import { HomeEventComponent } from './home-event/home-event.component';
import { HomeAttractionsComponent } from './home-attractions/home-attractions.component';
import { HomeRestaurantsComponent } from './home-restaurants/home-restaurants.component';
import { HomeSheltersComponent } from './home-shelters/home-shelters.component';
import { HomeCompaniesComponent } from './home-companies/home-companies.component';
import { HomeAdditionalComponent } from './home-additional/home-additional.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
      RouterModule
  ],
  declarations: [
      HomeComponent,
      HomeEventComponent,
      HomeAttractionsComponent,
      HomeRestaurantsComponent,
      HomeSheltersComponent,
      HomeCompaniesComponent,
      HomeAdditionalComponent
  ],
    exports: []
})
export class HomeModule { }
