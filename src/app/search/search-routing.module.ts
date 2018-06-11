import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {SearchComponent} from './search.component';

import {AttractionsComponent} from '../attractions/attractions.component';
import {RestaurantsComponent} from '../restaurants/restaurants.component';
import {TransportationsComponent} from '../transportations/transportations.component';
import {SheltersComponent} from '../shelters/shelters.component';

import {AttractionsModule} from '../attractions/attractions.module';
import {RestaurantsModule} from '../restaurants/restaurants.module';
import {TransportationsModule} from '../transportations/transportations.module';
import {SheltersModule} from '../shelters/shelters.module';



const routes: Routes = [{
    path: '',
    component: SearchComponent,
    children: [
        {
          path : '',
          component : SearchComponent
        },
        /*{
            path : 'attraction',
            loadChildren: '../attractions/attractions.module#AttractionsModule'
        },
        {
            path : 'restaurant',
            loadChildren: '../restaurants/restaurants.module#RestaurantsModule'
        },
        {
            path : 'transportation',
            loadChildren: '../transportations/transportations.module#TransportationsModule'
        },
        {
            path : 'transportation',
            loadChildren: '../shelters/shelters.module#SheltersModule'
        },
        {
            path: '',
            redirectTo: '',
            pathMatch: 'full'
        }*/
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SearchRoutingModule { }
