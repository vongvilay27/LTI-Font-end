import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {CompaniesComponent} from './companies.component';
import {CompaniesListComponent} from './companies-list/companies-list.component';
import {CompaniesDetailComponent} from './companies-detail/companies-detail.component';



const routes: Routes = [{
    path: '',
    component: CompaniesComponent,
    children: [
        {
            path: '',
            component: CompaniesListComponent
        },
        {
            path: 'detail/:id',
            component: CompaniesDetailComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CompaniesRoutingModule { }