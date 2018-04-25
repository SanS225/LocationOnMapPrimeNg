import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {GMapModule} from 'primeng/components/gmap/gmap';

import { AppComponent } from './app.component';
import { GMapComponent } from './gmap/gmap.component';
import { StepsModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    GMapComponent
  ],
  imports: [
    BrowserModule,
    GMapModule,
    StepsModule,
    FormsModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
