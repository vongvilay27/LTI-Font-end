import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import {TransportationsComponent} from './transportations.component';
import {SheltersDetailComponent} from '../shelters/shelters-detail/shelters-detail.component';
import {SheltersListComponent} from '../shelters/shelters-list/shelters-list.component';
import {TransportationsListComponent} from './transportations-list/transportations-list.component';
import {TransportationsDetailComponent} from './transportations-detail/transportations-detail.component';
;


const routes: Routes = [{
    path: '',
    component: TransportationsComponent,
    children: [{
        path: '',
        component: TransportationsListComponent
    }, {
        path: 'detail/:id',
        component: TransportationsDetailComponent
    },
        {
            path: ':typeid',
            component: TransportationsListComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TransportationsRoutingModule { }