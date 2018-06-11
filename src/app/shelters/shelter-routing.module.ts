import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {SheltersComponent} from './shelters.component';
import {SheltersListComponent} from './shelters-list/shelters-list.component';
import {SheltersDetailComponent} from './shelters-detail/shelters-detail.component';
;


const routes: Routes = [{
    path: '',
    component: SheltersComponent,
    children: [{
        path: '',
        component: SheltersListComponent
    }, {
        path: 'detail/:id',
        component: SheltersDetailComponent
    },
        {
            path: ':typeid',
            component: SheltersListComponent
        },
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ShelterRoutingModule { }