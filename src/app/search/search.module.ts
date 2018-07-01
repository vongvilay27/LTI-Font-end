import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search.component';
import {SearchRoutingModule} from './search-routing.module';

import { HttpModule } from '@angular/http';
import {AgmCoreModule} from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXoeOmRRzSl0b4iUBadAz8M-_Zva0DpfQ'
    })
  ],
  declarations: [],
  exports: []
})
export class SearchModule { }
