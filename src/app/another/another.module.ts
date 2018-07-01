import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnotherComponent } from './another.component';
import {AnotherRoutingModule} from './another-routing-module';
import { InternetListComponent } from './internet-list/internet-list.component';
import { InternetDetailComponent } from './internet-detail/internet-detail.component';
import { AnotherListComponent } from './another-list/another-list.component';
import { AnotherDetailComponent } from './another-detail/another-detail.component';

@NgModule({
  imports: [
    CommonModule,
      AnotherRoutingModule
  ],
  declarations: [AnotherComponent, InternetListComponent, InternetDetailComponent, AnotherListComponent, AnotherDetailComponent]
})
export class AnotherModule { }
