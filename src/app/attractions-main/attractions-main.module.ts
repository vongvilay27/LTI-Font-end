import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AttractionsMainComponent} from './attractions-main.component';
import {AttractionsMainRoutingModule} from './attractions-main-routing.module';

@NgModule({
  imports: [
    CommonModule,
      AttractionsMainRoutingModule
  ],
  declarations: [AttractionsMainComponent],
})
export class AttractionsMainModule { }
