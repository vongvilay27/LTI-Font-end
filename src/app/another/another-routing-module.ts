import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AnotherComponent} from './another.component';




const routes: Routes = [{
    path: '',
    component: AnotherComponent,

}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AnotherRoutingModule { }