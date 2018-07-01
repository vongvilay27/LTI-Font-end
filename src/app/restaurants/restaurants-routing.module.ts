import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {RestaurantsComponent} from './restaurants.component';

import {RestaurantsListComponent} from './restaurants-list/restaurants-list.component';
import {RestaurantsDetailComponent} from './restaurants-detail/restaurants-detail.component';
;


const routes: Routes = [{
    path: '',
    component: RestaurantsComponent,
    children: [
        {
        path: '',
        component: RestaurantsListComponent
    }, {
        path: 'detail/:id',
        component: RestaurantsDetailComponent
    },
        {
            path: 'type/:typeid',
            component: RestaurantsListComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RestaurantsRoutingModule { }