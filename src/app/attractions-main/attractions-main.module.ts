import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AttractionsMainComponent} from './attractions-main.component';
import {AttractionsMainRoutingModule} from './attractions-main-routing.module';
import { TypeService } from '../services/type.service';

@NgModule({
  imports: [
    CommonModule,
    AttractionsMainRoutingModule
  ],
  declarations: [AttractionsMainComponent],
  providers: [ TypeService ]
})
export class AttractionsMainModule { }
