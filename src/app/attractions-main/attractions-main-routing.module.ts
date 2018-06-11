import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {AttractionsMainComponent} from './attractions-main.component';



const routes: Routes = [{
    path: '',
    component: AttractionsMainComponent,


}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AttractionsMainRoutingModule {}
