import { InternetDetailComponent } from './internet-detail/internet-detail.component';
import { InternetListComponent } from './internet-list/internet-list.component';
import { AnotherListComponent } from './another-list/another-list.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AnotherComponent} from './another.component';
import { AnotherDetailComponent } from './another-detail/another-detail.component';




const routes: Routes = [{
    path: '',
    component: AnotherComponent,
    children: [
        {
            path: '',
            component: AnotherListComponent
        }, {
            path: 'detail/:id',
            component: AnotherDetailComponent
        }, {
            path: 'internet',
            component: InternetListComponent
        }, {
            path: 'internet/:id',
            component: InternetDetailComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AnotherRoutingModule { }