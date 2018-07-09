import {HomeComponent} from './home/home.component';

import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {SearchComponent} from './search/search.component';
import {AboutComponent} from './about/about.component';






const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'shelter',
        loadChildren: './shelters/shelters.module#SheltersModule'
    },
    {
        path: 'transportation',
        loadChildren: './transportations/transportations.module#TransportationsModule'
    },
    {
        path: 'restaurant',
        loadChildren: './restaurants/restaurants.module#RestaurantsModule'
    },
    {
        path: 'attraction',
        loadChildren: './attractions/attractions.module#AttractionsModule'
    },
    {
        path: 'company',
        loadChildren: './companies/companies.module#CompaniesModule'
    },
    {
        path: 'another',
        loadChildren: './another/another.module#AnotherModule'
    },
    {
        path: 'allinfo',
        loadChildren: './all-info/all-info.module#AllInfoModule'
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'search',
        component: SearchComponent
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: '**', redirectTo: 'home'
    }
];

const config: ExtraOptions = {
    useHash: true,
};

@NgModule({
    imports: [RouterModule.forRoot(routes, config)],
    exports: [RouterModule],
})
export class AppRoutingModule {}