import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AttractionsComponent} from './attractions.component';

import {AttractionsListComponent} from './attractions-list/attractions-list.component';
import {AttractionsDetailComponent} from './attractions-detail/attractions-detail.component';

const routes: Routes = [{
    path: '',
    component: AttractionsComponent,
    children : [
        {
            path : '',
            component : AttractionsListComponent
        },
        {
            path : 'detail/:id',
            component : AttractionsDetailComponent
        },
        {
            path: ':typeid',
            component : AttractionsListComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AttractionsRoutingModule { }