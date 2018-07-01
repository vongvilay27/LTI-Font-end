import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AllInfoComponent} from './all-info.component';

const routes: Routes = [{
    path: '',
    component: AllInfoComponent

}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AllInfoRoutingModule { }
