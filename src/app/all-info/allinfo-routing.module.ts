import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AllInfoComponent} from './all-info.component';



const routes: Routes = [{
    path: '',
    component: AllInfoComponent,
/*    children: [
        {
            path: 'shelter',
            loadChildren: '../shelters/shelters.module#SheltersModule'
        },
        {
            path: 'transportation',
            loadChildren: '../transportations/transportations.module#TransportationsModule'
        },
        {
            path: 'restaurant',
            loadChildren: '../restaurants/restaurants.module#RestaurantsModule'
        },
        {
            path: 'attraction',
            loadChildren: '../attractions/attractions.module#AttractionsModule'
        },
        {
            path: 'company',
            loadChildren: '../companies/companies.module#CompaniesModule'
        },
        {
            path: 'another',
            loadChildren: '../another/another.module#AnotherModule'
        },
    ]*/

}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AllInfoRoutingModule {}
