import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnotherComponent } from './another.component';
import {AnotherRoutingModule} from './another-routing-module';

@NgModule({
  imports: [
    CommonModule,
      AnotherRoutingModule
  ],
  declarations: [AnotherComponent]
})
export class AnotherModule { }
