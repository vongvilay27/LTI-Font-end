import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllInfoRoutingModule} from './allinfo-routing.module';

//Component
import { AllInfoComponent } from './all-info.component';
import { RestaurantsTypeComponent } from './restaurants-type/restaurants-type.component';
import { AttractionsTypeComponent } from './attractions-type/attractions-type.component';
import { SheltersTypeComponent } from './shelters-type/shelters-type.component';
import { TransportationsTypeComponent } from './transportations-type/transportations-type.component';
import { CompaniesTypeComponent } from './companies-type/companies-type.component';

import { OtherplaceTypeComponent } from './otherplace-type/otherplace-type.component';

const AllInfo_component = [
    AllInfoComponent,
    RestaurantsTypeComponent,
    AttractionsTypeComponent,
    SheltersTypeComponent,
    TransportationsTypeComponent,
    CompaniesTypeComponent,
    OtherplaceTypeComponent
];
@NgModule({
  imports: [
    CommonModule,
      AllInfoRoutingModule
  ],
  declarations: [
      ...AllInfo_component,
  ],
    exports: []
})
export class AllInfoModule { }
